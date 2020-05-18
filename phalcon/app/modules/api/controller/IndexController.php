<?php
namespace app\modules\api\controller;

use app\controller\Base;
use app\library\Code;
use app\library\Alipay;
use app\library\Wechat;
use app\library\Socket;
use app\library\baidu\Ai;

use app\library\Safety;

class IndexController extends Base{

	/* 首页 */
	function indexAction(){
		return self::getJSON(['code'=>0]);
	}

	/* 加密解密 */
	function safetyAction(){
		echo $token = Safety::encode(['uid'=>1,'data'=>['uname'=>'admin','name'=>'管理员']],$this->config->key);
		echo '<br>';
		print_r(strlen($token));
		echo '<br>';
		$res = Safety::decode('6zxYk0evJ5khQxFTYR9fYoQlurU5qNDstuURxuGnvvRmqZORkxANfiqCJjmWmhWwqXbv4NWOJbR0z76ssjLuqchh5UtQmCaC5HEyV1THeXwTX2j0riap5ciWR/Zj/Z+uknS27eQLNf1wd3y0MzAbpU2j9Mcqw5x87FUQc3uVHJmylHkmdhWO0TesMwD181UuAaFWSPgBcF4Z3tQ=',$this->config->key);
		print_r($res);
	}
	
	/* 错误代码 */
	function allCodeAction(){
		return self::getJSON(['code'=>0,'list'=>Code::get('all')]);
	}

	/* APP更新 */
	function appUpdateAction(){
		$os  = $this->request->get('os','string');
		if($os=='iOS'){
			$file = 'upload/down/ios.ipa';
			$size = filesize($file);
		}elseif($os=='Android'){
			$file = 'upload/down/android.apk';
			$size = filesize($file);
		}
		return self::getJSON(['code'=>0,'version'=>'0.0.1','size'=>$size,'file'=>$file]);
	}

	/* 百度Token */
  function baiduTokenAction(){
		// 获取Token
		$token = $this->redis->get('baidu_token');
		if(!$token){
			$token = Ai::getToken();
			$this->redis->setex('baidu_token',1.9*3600,$token);
		}
    return self::getJSON(['code'=>0,'token'=>$token]);
  }

	/* Socket客户端 */
	function socketAction(){
		// 系统消息
		$msg = ['type'=>'msg','data'=>[
      'uid'=>'202005131808010001',
      'fid'=>'1',
      'title'=>'测试',
      'content'=>'内容',
    ]];
		Socket::send($msg);
		Socket::sendCli($msg);
	}

	/* 支付宝 */
	function alipayAction(){
		$type = $this->request->get('type','string');
		$data = [
			'product_code' => 'QUICK_MSECURITY_PAY',
			'out_trade_no'=> date("YmdHis").mt_rand(1000, 9999),
			'total_amount' => 0.01,
			'subject'=> '商品的标题',
			'body' => '商品简单描述',
		];
		$res = Alipay::getPay($type,$data,'https://api.ynjici.com/api/index/alipayNotify');
		return self::getJSON(['code'=>0,'url'=>Alipay::$gatewayUrl,'data'=>http_build_query($res)]);
	}

	/* 支付宝回调 */
	function alipayNotifyAction(){
		$res = $this->request->get();
		/* 验证 */
		unset($res['_url']);
		unset($res['sign_type']);
		if(Alipay::getVerify($res)){
			$order_sn = $res['out_trade_no'];
			file_put_contents('tmp.txt',json_encode($res));
			echo 'success';
		}else{
			echo '';
		}
	}

	/* 小程序-支付 */
	function wechatPayAction(){
		$type = $this->request->get('type','string');
		$data = [];
		// 支付类型
		if($type=='JSAPI'){
			$data['trade_type'] = 'JSAPI';
			// OpenID
			$code = $this->request->get('code','string');
			$data['openid'] = Wechat::getOpenid($code);
		}else if($type=='MWEB'){
			$data['trade_type'] = 'MWEB';
		}else{
			return self::getJSON(['code'=>4000,'msg'=>'支付类型错误']);
		}
		// 订单信息
		$data['out_trade_no'] = date("YmdHis").mt_rand(1000, 9999);
		$data['total_fee'] = 0.01*100;
		$data['body'] = '商品简单描述';
		$data['attach'] = '自定义内容';
		$data['notify_url'] = 'https://api.ynjici.com/api/index/wechatNotify';
		// 统一下单
		$prepay_id = Wechat::getUnifiedOrder($data);
		// 支付参数
		if(is_string($prepay_id)){
			$res = Wechat::getWappPay($prepay_id);
			return self::getJSON(['code'=>0,'pay'=>$res]);
		}else{
			return self::getJSON(['code'=>50000,'info'=>$prepay_id]);
		}
	}

	/* 异步回调 */
	function wechatNotifyAction(){
		$res = Wechat::getNotify();
		if($res){
			file_put_contents('tmp.txt',json_encode($res));
			// 订单信息
			$order_sn = $res->out_trade_no;
			$attach = $res->attach;
			// 成功
			echo '<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>';
		}else{
			echo '';
		}
	}

	/* 小程序-消息推送验证 */
	function wechatValidAction(){
		$res = Wechat::msgValid();
		if($res) echo $res;
		else self::wechatMsg();
	}
	/* 接收消息 */
	private function wechatMsg(){
		// 数据
		$postStr = file_get_contents('php://input');
		file_put_contents('tmp.txt','接收');
		if(empty($postStr) || !is_string($postStr)){ echo ''; exit;}
		$postArr = json_decode($postStr);
		$openid = isset($postArr->FromUserName)?$postArr->FromUserName:'';
		// 文本消息
		if(!empty($postArr->MsgType) && $postArr->MsgType=='text'){
			// 消息处理
			self::wechatClass($openid,trim($postArr->Content));
		// 图文消息
		}elseif(!empty($postArr->MsgType) && $postArr->MsgType=='image'){
			echo 'success';
		// 进入客服
		}elseif($postArr->MsgType=='event' && $postArr->Event=='user_enter_tempsession'){
			self::wechatSend([
				'touser'=> $openid,
				'msgtype'=> 'text',
				'text'=> [
					'content'=>"请回复如下数字：\n1.日程查询\n2.费用查询"
				],
			]);
		}
	}
	/* 消息分类 */
	private function wechatClass($openid,$msg){
		$content = '';
		switch($msg){
			case '1':
				$content = '日程查询结果';
				break;
			case '2':
				$content = '费用查询结果';
				break;
			default :
				echo 'success'; exit;
		}
		// 发送
		self::wechatSend(['touser'=> $openid,'msgtype'=> 'text','text'=> ['content'=>$content]]);
	}
	/* 发送消息 */
	private function wechatSend($data){
		// 获取Token
		$token = $this->redis->get('wechat_token');
		if(!$token){
			$token = Wechat::getAccessToken();
			$this->redis->setex('wechat_token',1.9*3600,$token);
		}
		// 发送
		Wechat::msgSend($token, $data);
	}
  
}