import Action from '@/components/Action'

export default {
  components: {Action},
  data(){
    return {
      LabelWidth:'80px',
      // 路径
      path: '/',
      loaded: '0%',
      // 列表、新建、打包、重命名、删除
      lists: {folder:[],files:[]},
      folder: {show: false, form:{name:''}},
      zipData: {show: false, form:{name:'',files:[]}},
      renameData: {show: false, form:{rename:'',name:''}},
      delData: {show: false, data:[]},
    }
  },
  mounted(){
    this.loadData();
  },
  methods:{

    /* 加载数据 */
    loadData(){
      this.$ajax.post(
        this.$config.apiUrl+'Filemanage/list',
        'token='+this.$storage.getItem('token')+'&path='+this.path
      ).then((res)=>{
        const d = res.data;
        if(d.code==0) this.lists = d.data;
      });
    },

    /* 打开文件夹 */
    openFolder(name){
      this.path += name+'/';
      // 加载数据
      this.loadData();
    },

    /* 返回 */
    backDir(){
      const data = this.path.split("/").filter(d=>d);
      if(data.length<=1){
        this.path = '/';
      }else{
        this.path = '/';
        for(let i=0; i<data.length-1; i++){
          this.path += data[i]+'/';
        }
      }
      // 加载数据
      this.loadData();
    },

    /* 新建文件夹 */
    mkDir(){
      this.folder.show = true;
    },
    subDir(){
      const name = this.folder.form.name;
      // 是否存在
      if(this.isExist(name)) return;
      // 提交
      this.folder.show = false;
      this.subAjax('mkDir','&path='+this.path+'&name='+name);
    },

    /* 打包 */
    zipFile(){
      const names = this.getCheckName();
      if(!names) return;
      this.zipData.show = true;
      this.zipData.form.files = names;
    },
    subZip(){
      const name = this.zipData.form.name;
      const files = JSON.stringify(this.zipData.form.files);
      // 是否存在
      if(!name || this.isExist(name+'.zip')) return;
      // 提交
      this.zipData.show = false;
      this.subAjax('zipFile','&path='+this.path+'&name='+name+'&files='+files);
    },

    /* 重命名 */
    reName(){
      const names = this.getCheckName();
      if(!names) return;
      this.renameData.show = true;
      this.renameData.form.rename = names[0];
      this.renameData.form.name = names[0];
    },
    subRename(){
      const rename = this.renameData.form.rename;
      const name = this.renameData.form.name;
      if(!name) return this.$message.error('名称不能为空');
      // 是否存在
      if(this.isExist(name)) return;
      // 提交
      this.renameData.show = false;
      this.subAjax('reName','&path='+this.path+'&rename='+rename+'&name='+name);
    },

    /* 打开文件 */
    openFile(file){
      const ext = this.getType(file);
      if(ext) this.downFile(file);
    },

    /* 上传 */
    selectFile(){
      const fileObj = document.createElement('input');
      fileObj.setAttribute('type','file');
      fileObj.setAttribute("style",'display: none');
      fileObj.setAttribute('multiple','multiple');
      document.body.appendChild(fileObj);
      fileObj.click();
      fileObj.onchange = ()=>{
        // 文件
        for(let i=0; i<fileObj.files.length; i++){
          let form = new FormData();
          form.append('token', this.$storage.getItem('token'));
          form.append('path', this.path);
          form.append('up', fileObj.files[i]);
          // 单个上传
          this.upFile(form);
        }
      }
    },
    /* 异步上传 */
    upFile(data){
      this.loaded = '10%';
      this.$ajax.post(
        this.$config.apiUrl+'Filemanage/upFile', data,
        {onUploadProgress:(event)=>{
          // 上传进度
          let complete = (event.loaded/event.total*100 | 0);
          if(complete<100) this.loaded = complete+'%';
          else this.loaded = '0%';
        }}
      ).then((res)=>{
        const d = res.data;
        if(d.code!==0){
          if(d.msg) this.$message.error(d.msg);
        }else{
          if(d.msg) this.$message.success(d.msg);
          // 刷新数据
          this.loadData();
        }
      });
    },

    /* 下载 */
    downFile(file){
      this.subAjax('downFile','&path='+this.path+'&file='+file,(data)=>{
        const blob = new Blob([data]);
        const a = document.createElement('a');
        const href = window.URL.createObjectURL(blob);
        a.href = href;
        a.download = file;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(href);
      },{responseType: 'blob'});
    },

    /* 删除文件 */
    rmFile(){
      const names = this.getCheckName();
      if(!names) return;
      this.delData.show = true;
      this.delData.data = names;
    },
    subDel(){
      const data = JSON.stringify(this.delData.data);
      // 提交
      this.delData.show = false;
      this.subAjax('rmFile','&path='+this.path+'&data='+data);
    },

    /* 提交数据 */
    subAjax(action,parameter,callback,type){
      // 提交
      const loading = this.$loading({text: '正在提交'});
      this.$ajax.post(
        this.$config.apiUrl+'Filemanage/'+action,
        'token='+this.$storage.getItem('token')+parameter,
        type
      ).then((res)=>{
        loading.close();
        const d = res.data;
        // 回调
        if(callback) callback(d);
        // 结果
        if(d.code!==0){
          if(d.msg) this.$message.error(d.msg);
        }else{
          if(d.msg) this.$message.success(d.msg);
          // 刷新数据
          this.loadData();
        }
      });
    },

    /* 获取选中 */
    getCheckName(){
      const folder = this.lists.folder;
      const files = this.lists.files;
      let name = [];
      // 文件夹
      for(let i in folder) if(folder[i].check) name.push(folder[i].name);
      // 文件
      for(let i in files) if(files[i].check) name.push(files[i].name);
      if(name.length<1){
        this.$message.error('请选择内容')
        return false;
      }else{
        return name;
      }
    },

    /* 是否存在 */
    isExist(name){
      const folder = this.lists.folder;
      const files = this.lists.files;
      // 是否为空
      if(!name){ this.$message.error('请填写名称'); return true; };
      // 文件夹
      for(let i in folder){
        if(folder[i].name==name){ this.$message.error('已存在文件夹'); return true; };
      }
      // 文件夹
      for(let i in files){
        if(files[i].name==name){ this.$message.error('已存在文件'); return true; };
      }
      return false;
    },

    /* 获取后缀 */
    getType(filename){
      const index1 = filename.lastIndexOf('.')+1;
      const index2 = filename.length;
      return filename.substring(index1,index2);
    },

  }
}