<?php
return [
  'title'=>'基础系统',
  'version'=>'1.0.0',
  /* 加密 */
  'key'=>'95ad3c345b46af1b7104568155af36f8',
  'token_name'=>'Token_',
  'token_time'=>7*24*3600,
  /* 本地资源 */
  'imgUrl'=>'https://api.webmis.vip/',
  /* 数据中心 */
  // 'centre_url'=>'https://data.webmis.vip/api/',
  'centre_url'=>'http://localhost:8085/api/',
  'centre_id'=>'base@webmis.vip',
  'centre_secret'=>'00fb626bbabfdd903231acf6639cddfb',
  /* 数据库 */
  'database' => [
    'adapter'=>'Mysql',
    'host'=>'39.108.152.251',
    'username'=>'webmis',
    'password'=>'webmis',
    'dbname'=>'base',
    'charset'=>'utf8',
  ],
  /* 缓存 */
  'redis'=>[
    'host'=>'127.0.0.1',
    'port'=>6379,
    'pwd'=>'',
    'db'=>0,
  ],
  /* APP配置 */
  'application' => [
    'appDir'=>APP_PATH.'/',
    'cacheDir'=> BASE_PATH.'/cache/',
    'baseUri'=>'',
  ],
  /* Socket */
  'socket_suid'=> '1',  // 系统消息UID
  'socket_name'=> 'BaseSocket', // 缓存名称
  'socket_ip'=> '0.0.0.0',  // IP地址
  'socket_port'=> 9010, // 端口
  /* 百度AI */
  'baidu_appKey'=>'fFu2i5oNALIrRQ1KAhAvV5v5',
  'baidu_appSecret'=>'AQsHFNfgugbGErIdu7Dwxap6Pvreiu0z',
  /* 钉钉 */
  'ding_appKey'=>'',
  'ding_appSecret'=>'',
  /* 微信小程序 */
  'wechat_token'=>'',
  'wechat_EncodingAESKey'=>'',
  'wechat_AppID'=>'',
  'wechat_AppSecret'=>'',
  'wechat_MchID'=>'',
  'wechat_Key'=>'',
  /* 支付宝 */
  'alipay_appId'=>'',
  'alipay_signType'=>'RSA2',
  'alipay_charset'=>'UTF-8',
  'alipay_version'=>'1.0',
  'alipay_rsaPrivateKey'=>'',
  'alipay_rsaPublicKey'=>'',
  // 证书文件
  'alipay_appCertSn'=>'../app/library/ali/appCertPublicKey.crt',
  'alipay_publicCertSn'=>'../app/library/ali/alipayCertPublicKey.crt',
  'alipay_rootCertSn'=>'../app/library/ali/alipayRootCert.crt',
];