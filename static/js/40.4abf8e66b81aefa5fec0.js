webpackJsonp([40],{fpu2:function(module,__webpack_exports__,__webpack_require__){"use strict";(function($){__webpack_exports__.a={name:"addstart",data:function(){return{usTmcLimit:"",myusTmcPrice:"",myusTmcDiscount:"",usTmcIsStores:1,navdata:"",usTraderStoresId:"",uploadtarget:"",files:"",myusTmcLevelNumber:"",myusTmcLevel:"",navdata01:[{id:0,boo:!0},{id:1,boo:!0},{id:2,boo:!0},{id:3,boo:!0},{id:4,boo:!0},{id:5,boo:!0},{id:6,boo:!0},{id:7,boo:!0},{id:8,boo:!0},{id:9,boo:!0}]}},mounted:function(){""==this.usTraderMemberCardId?this.$store.state.head="添加会员卡":(this.$store.state.head="编辑会员卡",this.myusTmcLevel=this.usTmcLevel,this.myusTmcPrice=this.usTmcPrice,this.myusTmcDiscount=this.usTmcDiscount,this.myusTmcLevelNumber=this.usTmcLevelNumber,this.usTmcLimit=this.$store.state.mytime),this.myajax()},methods:{myajax:function(){var e=this;$.ajax({type:"post",url:e.myurl+"/selectUsTraderStores",dataType:"json",data:{usTraderId:localStorage.getItem("userid")},success:function(t){e.navdata=t.data}})},myajax02:function(){var e=this;$.ajax({type:"post",url:e.myurl03+"/user/selectTraderCardLevel",dataType:"json",data:{usTraderStoresId:e.usTraderStoresId},success:function(t){for(var a=0;a<t.data.length;a++)console.log(t.data[a].usTmcLevelNumber),e.navdata01[t.data[a].usTmcLevelNumber].boo=!1}})},bottomchange:function(e){this.bottomshow=!this.bottomshow},opennew:function(e){this.$router.push({name:e})},tab:function(e){this.index=e},submit:function(){for(var e=this,t=0;t<$("input").length;t++)if(""==$("input").eq(t).val())return alert($("input").eq(t).attr("data-alert")),!1;if(""==this.usTraderMemberCardId){var a={usTraderId:localStorage.getItem("userid"),usTmcIsStores:e.usTmcIsStores,usTraderStoresId:e.usTraderStoresId,usTmcLevel:e.myusTmcLevel,usTmcLevelNumber:e.myusTmcLevelNumber,usTmcLimit:e.usTmcLimit,usTmcPrice:e.myusTmcPrice,usTmcDiscount:e.myusTmcDiscount,usTmcImgUrl:e.usTmcImgUrl};$.ajax({type:"post",url:e.myurl02+"/insertUsTraderMemberCard",dataType:"json",data:a,success:function(t){console.log(t),200==t.status?(plus.nativeUI.toast("添加完成"),e.$router.back()):plus.nativeUI.toast("添加失败")}})}else{a={usTraderMemberCardId:e.usTraderMemberCardId,usTmcUpdateName:localStorage.getItem("username"),usTmcLevel:e.myusTmcLevel,usTmcLevelNumber:e.myusTmcLevelNumber,usTmcLimit:e.usTmcLimit,usTmcPrice:e.myusTmcPrice,usTmcDiscount:e.myusTmcDiscount,usTmcImgUrl:e.usTmcImgUrl};$.ajax({type:"post",url:e.myurl02+"/updateUsTraderMemberCard",dataType:"json",data:a,success:function(t){1==t.data?(plus.nativeUI.toast("修改完成"),e.$router.back()):plus.nativeUI.toast("修改失败")}})}},change:function(e){this.two=e},handelChange:function(e,t){this.time=t},timeshow:function(){this.calendarShow=!this.calendarShow},upload:function(e){var t=this;t.files=[],t.uploadtarget=e;plus.nativeUI.actionSheet({title:"请选择",cancel:"取消",buttons:[{title:"照相机"},{title:"相册"}]},function(e){switch(e.index){case 1:t.camera();break;case 2:t.album()}})},camera:function(){var e=this;plus.camera.getCamera().captureImage(function(t){plus.io.resolveLocalFileSystemURL(t,function(t){t.name;var a=t.toLocalURL();document.getElementById(e.uploadtarget).setAttribute("src",a),e.upload_img(a)},function(e){alert("读取拍照文件错误："+e.message)})},function(e){alert("失败："+e.message)},{filename:"_doc/camera/",index:1})},album:function(){var e=this;plus.gallery.pick(function(t){document.getElementById(e.uploadtarget).setAttribute("src",t),e.upload_img(t)},function(e){alert("取消选择图片")},{filter:"image"})},upload_img:function(e){e.substr(e.lastIndexOf("/")+1);this.files.push({name:"uploadkey",path:e}),this.start_upload()},start_upload:function start_upload(){var that=this;if(that.files.length<=0)plus.nativeUI.alert("没有添加上传文件！");else{var wt=plus.nativeUI.showWaiting(),task=plus.uploader.createUpload(that.myurl+"/imageRiderImageUsTraderStores",{method:"POST"},function(t,status){if(200==status){var responseText=t.responseText,json=eval("("+responseText+")");that.usTmcImgUrl=json.data,wt.close()}else alert("上传失败："+status),wt.close()});task.addData("uid",that.getUid());for(var i=0;i<that.files.length;i++){var f=that.files[i];task.addFile(f.path,{key:f.name})}task.start()}},getUid:function(){return Math.floor(1e8*Math.random()+1e7).toString()}},computed:{myurl:function(){return this.$store.state.myurl},myurl02:function(){return this.$store.state.myurl02},myurl03:function(){return this.$store.state.myurl03},usTraderMemberCardId:function(){return this.$store.state.usTraderMemberCardId},usTmcLevel:function(){return this.$store.state.usTmcLevel},usTmcPrice:function(){return this.$store.state.usTmcPrice},usTmcDiscount:function(){return this.$store.state.usTmcDiscount},usTmcLevelNumber:function(){return this.$store.state.usTmcLevelNumber}},components:{THead:function(e){return __webpack_require__.e(54).then(function(){var t=[__webpack_require__("2Hch")];e.apply(null,t)}.bind(this)).catch(__webpack_require__.oe)}}}}).call(__webpack_exports__,__webpack_require__("7t+N"))},mnPY:function(e,t){},qIfx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("fpu2"),r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addstart",attrs:{id:"wrapper"}},[a("t-head"),e._v(" "),a("div",{attrs:{id:"main"}},[a("div",{staticClass:"input-box",staticStyle:{"margin-top":".2rem"}},[a("div",{staticClass:"title"},[e._v("选择使用店铺")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.usTraderStoresId,expression:"usTraderStoresId"}],attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.usTraderStoresId=t.target.multiple?a:a[0]},e.myajax02]}},e._l(e.navdata,function(t){return a("option",{domProps:{value:t.usTraderStoresId}},[e._v(e._s(t.usTsCompanyName))])}),0)]),e._v(" "),""!=e.usTraderStoresId?a("block",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myusTmcLevel,expression:"myusTmcLevel"}],attrs:{type:"text",placeholder:"会员卡名称","data-alert":"会员卡名称不能为空"},domProps:{value:e.myusTmcLevel},on:{input:function(t){t.target.composing||(e.myusTmcLevel=t.target.value)}}}),e._v(" "),a("div",{staticClass:"input-box"},[a("div",{staticClass:"title"},[e._v("会员卡等级")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.myusTmcLevelNumber,expression:"myusTmcLevelNumber"}],attrs:{name:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.myusTmcLevelNumber=t.target.multiple?a:a[0]}}},e._l(e.navdata01,function(t){return t.boo?a("option",{domProps:{value:t.id}},[e._v(e._s(t.id))]):e._e()}),0)]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.usTmcLimit,expression:"usTmcLimit"}],attrs:{type:"number",placeholder:"会员卡有效期（日）","data-alert":"会员卡期限不能为空"},domProps:{value:e.usTmcLimit},on:{input:function(t){t.target.composing||(e.usTmcLimit=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.myusTmcPrice,expression:"myusTmcPrice"}],attrs:{type:"number",placeholder:"会员卡金额","data-alert":"会员卡金额不能为空"},domProps:{value:e.myusTmcPrice},on:{input:function(t){t.target.composing||(e.myusTmcPrice=t.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.myusTmcDiscount,expression:"myusTmcDiscount"}],attrs:{type:"number",placeholder:"会员卡折扣（百分比）","data-alert":"会员卡折扣不能为空"},domProps:{value:e.myusTmcDiscount},on:{input:function(t){t.target.composing||(e.myusTmcDiscount=t.target.value)}}})]):e._e(),e._v(" "),a("div",{staticClass:"submit",on:{click:e.submit}},[e._v("\n\t\t\t确定\n\t\t")])],1)],1)},staticRenderFns:[]};var u=function(e){a("mnPY")},i=a("VU/8")(s.a,r,!1,u,null,null);t.default=i.exports}});
//# sourceMappingURL=40.4abf8e66b81aefa5fec0.js.map