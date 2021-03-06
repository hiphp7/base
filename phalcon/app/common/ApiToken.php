<?php
namespace app\common;

use Phalcon\Http\Request;

use app\Env;
use app\library\Safety;
use app\library\Redis;

class ApiToken extends Base {

  /* 验证-Socket */
  static function socket(string $token=''): array {
    // 验证Token
    $res = Safety::decode($token);
    if(!$res) return ['state'=>false,'msg'=>'Token验证失败!'];
    $name = Env::$api_token_prefix.$res->uid;
    // 是否超时
    $time =  Redis::run()->ttl($name);
    if($time<=0) return ['state'=>false,'msg'=>'Token已超时!'];
    $res->n_time =  $time;
    return ['state'=>true,'data'=>$res];
  }

  /* 验证&数据 */
  static function verify(string $token=''): ?object {
    // 获取Token
    $request = new Request();
    $token = $token?:$request->get('token');
    // 验证Token
    $res = Safety::decode($token);
    if(!$res) self::error('Token验证失败!');
    $name = Env::$api_token_prefix.$res->uid;
    // 是否超时
    $time =  Redis::run()->ttl($name);
    if($time<=0) self::error('Token已超时!');
    $res->n_time =  $time;
    // 是否续期
    if(Env::$api_token_auto) Redis::run()->setex($name,Env::$api_token_time,'1');
    return $res;
  }

  /* 生成 */
  static function create(array $data): ?string {
    $data['l_time'] = date('Y-m-d H:i:s');
    $token = Safety::encode($data);
    // 缓存
    $name = Env::$api_token_prefix.$data['uid'];
    Redis::run()->setex($name,Env::$api_token_time,'1');
    return $token;
  }

}