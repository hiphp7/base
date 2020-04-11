import 'package:permission_handler/permission_handler.dart';

/* 检测并获取权限 */
Future<bool> persmission(String type) async{
  PermissionGroup group;
  // 用户定位
  if(type=='locationWhenInUse'){
    group = PermissionGroup.locationWhenInUse;
  }else if(type=='camera'){
    group = PermissionGroup.camera;
  }
  // 开启
  PermissionStatus status = await PermissionHandler().checkPermissionStatus(group);
  if(status == PermissionStatus.denied){
    await PermissionHandler().requestPermissions([group]);
    return true;
  }else{
    return true;
  }
}