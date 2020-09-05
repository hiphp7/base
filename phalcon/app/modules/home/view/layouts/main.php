<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="author" content="WebMIS" />
  <title><?php echo $WebTitle;?></title>
  <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <meta name="keywords" content="<?php echo $Keywords;?>" />
  <meta  name="description"  content="<?php echo $Description;?>"/>
  <link rel="stylesheet" type="text/css" href="/themes/home/main.css" />
  <!-- Axios -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <!-- VUE -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<script type="module" src="/themes/home/main.js"></script>
  <!-- CSS -->
<?php if(isset($LoadCSS)){foreach($LoadCSS as $val){;?>
  <link rel="stylesheet" type="text/css" href="<?php echo $val;?>" />
<?php }}?>
  <!-- JS模块 -->
<?php if(isset($LoadJS)){foreach($LoadJS as $val){;?>
  <script type="module" src="<?php echo $val;?>"></script>
<?php }}?>
</head>
<body>
  <!-- 头部 -->
  <div id="main" class="top_body">
    <div class="body top">
      <!-- Logo -->
      <h1 class="bgImg top_logo" title="WebMIS"></h1>
      <!-- 菜单 -->
      <div class="top_nav_body sidebar">
        <ul class="top_nav">
          <li><a href="https://webmis.vip/"<?php echo $this->dispatcher->getActionName()=='index'?' class="an"':'';?>>首页</a></li>
          <li><a href="https://webmis.vip/docs/app/install/index"<?php echo $this->dispatcher->getActionName()=='app'?' class="an"':'';?>>VueAPP</a></li>
          <li><a href="https://webmis.vip/docs/admin/install/index"<?php echo $this->dispatcher->getActionName()=='admin'?' class="an"':'';?>>Admin</a></li>
          <li><a href="https://webmis.vip/docs/flutter/install/index"<?php echo $this->dispatcher->getActionName()=='flutter'?' class="an"':'';?>>Flutter</a></li>
          <li><a href="https://webmis.vip/docs/phalcon/install/index"<?php echo $this->dispatcher->getActionName()=='phalcon'?' class="an"':'';?>>Phalcon</a></li>
          <li><a href="https://webmis.vip/docs/linux/shell/index"<?php echo $this->dispatcher->getActionName()=='linux'?' class="an"':'';?>>Linux</a></li>
        </ul>
      </div>
      <!-- 用户 -->
      <div class="top_right flex">
        <a class="login" @click="showMsg('正在开发!')">登录</a>|<a class="register" @click="showMsg('正在开发!')">注册</a>
      </div>
    </div>
  </div>
  <!-- 内容 -->
  <div id="app">
    <?php echo $this->getContent(); ?>
  </div>
</body>
</html>