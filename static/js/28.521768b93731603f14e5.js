webpackJsonp([28],{"8/vF":function(e,t){},"8vgj":function(e,t,a){"use strict";(function(e){var r=a("mvHQ"),s=a.n(r);t.a={name:"userregister",data:function(){return{usTrBankDoor:"",usTrLicenseImgUrl:"",usTrLicenseCode:"",usTrDetailed:"",usTrBankStyle:"",usTrAuditNote:"",usTrBankImgUrl:"",usTrBankId:"",usTrCompanyPhone:"",usTrFoodImgUrl:"",usTrCardId:"",uploadtarget:"",files:[],cityboo:!1,cityboo01:!1,alertboo:!1,usTrPhone:"",usTrName:"",usTrSex:"",usTrCompanyName:"",usTrLicenseDetailed:"",usTrLicenseTime:"",usTrLicenseStatus:"",usTrCardHandheldImgUrl:"",usTrCardBackImgUrl:"",usTrCardFrontImgUrl:"",usTrBankBranches:""}},mounted:function(){this.$store.state.head="商家注册"},methods:{alerttrue:function(){this.opennew("login")},timechangee:function(){var e=this;plus.nativeUI.pickDate(function(t){var a=t.date;e.usTrLicenseTime=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()},function(e){console.log("未选择日期："+e.message)})},alertchange:function(){this.alertboo=!this.alertboo},citychange:function(){this.cityboo=!this.cityboo},citychange01:function(){this.cityboo01=!this.cityboo01},opennew:function(e){this.$router.push({name:e})},gosubmit:function(){for(var t=0;t<e("input").length;t++)if(""==e("input").eq(t).val()){if(1!=this.usTrLicenseStatus)return alert(e("input").eq(t).attr("data-alert")),!1;if("营业执照有效期不能为空"!=e("input").eq(t).attr("data-alert"))return alert(e("input").eq(t).attr("data-alert")),!1}e.ajax({type:"post",url:this.myurl+"/login",dataType:"json",data:{phone:this.usTrPhone},success:function(e){for(var t=0;t<e.data.length;t++)if(1==e.data[t].usTrAuditStatus&&2==e.data[t].usTrAuditStatus)return alert("当前账号不可注册"),!1}});var a={usTrBankBranches:this.usTrBankBranches,usTrBankDoor:this.usTrBankDoor,usTrName:this.usTrName,usTrPhone:this.usTrPhone,usTrSex:this.usTrSex,usTrCardId:this.usTrCardId,usTrCardFrontImgUrl:this.usTrCardFrontImgUrl,usTrCardBackImgUrl:this.usTrCardBackImgUrl,usTrCardHandheldImgUrl:this.usTrCardHandheldImgUrl,usTrCompanyName:this.usTrCompanyName,usTrProvince:this.province,usTrCity:this.city,usTrArea:this.area,usTrDetailed:this.usTrDetailed,usTrLicenseCode:this.usTrLicenseCode,usTrLicenseProvince:this.province01,usTrLicenseCity:this.city01,usTrLicenseArea:this.area01,usTrLicenseDetailed:this.usTrLicenseDetailed,usTrLicenseStatus:this.usTrLicenseStatus,usTrLicenseTime:this.usTrLicenseTime,usTrLicenseImgUrl:this.usTrLicenseImgUrl,usTrCompanyPhone:this.usTrCompanyPhone,usTrBankId:this.usTrBankId,usTrBankImgUrl:this.usTrBankImgUrl,usTrBankStyle:this.usTrBankStyle,usTrAuditNote:this.usTrAuditNote};e.ajax({type:"post",url:this.myurl+"/insertTrader",dataType:"json",data:a,success:function(e){console.log(s()(e))}}),this.$store.state.alerttext="资料已提交审核，请耐心等待！",this.alertboo=!this.alertboo},upload:function(e){var t=this;t.files=[],t.uploadtarget=e;plus.nativeUI.actionSheet({title:"请选择",cancel:"取消",buttons:[{title:"照相机"},{title:"相册"}]},function(e){switch(e.index){case 1:t.camera();break;case 2:t.album()}})},camera:function(){var e=this;plus.camera.getCamera().captureImage(function(t){plus.io.resolveLocalFileSystemURL(t,function(t){t.name;var a=t.toLocalURL();document.getElementById(e.uploadtarget).setAttribute("src",a),e.upload_img(a)},function(e){alert("读取拍照文件错误："+e.message)})},function(e){alert("失败："+e.message)},{filename:"_doc/camera/",index:1})},album:function(){var e=this;plus.gallery.pick(function(t){document.getElementById(e.uploadtarget).setAttribute("src",t),e.upload_img(t)},function(e){alert("取消选择图片")},{filter:"image"})},upload_img:function(t){var a=this,r=new Image;r.src=t,r.onload=function(){var t=this.width,r=this.height,n=t/r;r=(t=280)/n;var i=document.createElement("canvas"),u=i.getContext("2d");e(i).attr({width:t,height:r}),u.drawImage(this,0,0,t,r),e.ajax({type:"post",url:a.myurl+"/imageRiderImageUsTraderStores",dataType:"json",data:{imgStr:i.toDataURL("image/jpeg",1)},success:function(e){"usTrCardHandheldImgUrl"==a.uploadtarget?a.usTrCardHandheldImgUrl=e.data:"usTrCardFrontImgUrl"==a.uploadtarget?a.usTrCardFrontImgUrl=e.data:"usTrCardBackImgUrl"==a.uploadtarget?a.usTrCardBackImgUrl=e.data:"usTrLicenseImgUrl"==a.uploadtarget?a.usTrLicenseImgUrl=e.data:"usTrBankImgUrl"==a.uploadtarget&&(a.usTrBankImgUrl=e.data)},error:function(e){alert(s()(e))}})}}},computed:{myurl:function(){return this.$store.state.myurl},province:function(){return this.$store.state.province},city:function(){return this.$store.state.city},area:function(){return this.$store.state.area},province01:function(){return this.$store.state.province01},city01:function(){return this.$store.state.city01},area01:function(){return this.$store.state.area01}},components:{cityPicker:function(e){return a.e(56).then(function(){var t=[a("MiQN")];e.apply(null,t)}.bind(this)).catch(a.oe)},cityPicke:function(e){return a.e(57).then(function(){var t=[a("yO/V")];e.apply(null,t)}.bind(this)).catch(a.oe)},alert:function(e){return a.e(55).then(function(){var t=[a("fSq5")];e.apply(null,t)}.bind(this)).catch(a.oe)},THead:function(e){return a.e(54).then(function(){var t=[a("2Hch")];e.apply(null,t)}.bind(this)).catch(a.oe)}}}}).call(t,a("7t+N"))},BQ0b:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("8vgj"),s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login myregis",attrs:{id:"wrapper"}},[r("t-head"),e._v(" "),r("div",{attrs:{id:"main"}},[r("form",{attrs:{action:""}},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrName,expression:"usTrName"}],attrs:{type:"text",placeholder:"法人姓名","data-alert":"法人姓名不能为空"},domProps:{value:e.usTrName},on:{input:function(t){t.target.composing||(e.usTrName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrPhone,expression:"usTrPhone"}],attrs:{type:"number",placeholder:"法人电话","data-alert":"法人电话不能为空"},domProps:{value:e.usTrPhone},on:{input:function(t){t.target.composing||(e.usTrPhone=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("div",{staticClass:"title01"},[e._v("性别")]),e._v(" "),r("label",{attrs:{for:"usTrSex"}},[e._v("男")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrSex,expression:"usTrSex"}],attrs:{type:"radio",name:"usTrSex",id:"usTrSex",value:"1",checked:""},domProps:{checked:e._q(e.usTrSex,"1")},on:{change:function(t){e.usTrSex="1"}}}),e._v(" "),r("label",{attrs:{for:"usTrSex2"}},[e._v("女")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrSex,expression:"usTrSex"}],attrs:{type:"radio",name:"usTrSex",id:"usTrSex2",value:"2"},domProps:{checked:e._q(e.usTrSex,"2")},on:{change:function(t){e.usTrSex="2"}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrCardId,expression:"usTrCardId"}],attrs:{type:"text",placeholder:"法人身份证号","data-alert":"法人身份证号不能为空"},domProps:{value:e.usTrCardId},on:{input:function(t){t.target.composing||(e.usTrCardId=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrCompanyName,expression:"usTrCompanyName"}],attrs:{type:"text",placeholder:"公司名字","data-alert":"公司名字不能为空"},domProps:{value:e.usTrCompanyName},on:{input:function(t){t.target.composing||(e.usTrCompanyName=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:function(t){return e.upload("usTrCardHandheldImgUrl")}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrCardHandheldImgUrl,expression:"usTrCardHandheldImgUrl"}],attrs:{type:"text",placeholder:"手持身份证",readonly:"","data-alert":"手持身份证不能为空"},domProps:{value:e.usTrCardHandheldImgUrl},on:{input:function(t){t.target.composing||(e.usTrCardHandheldImgUrl=t.target.value)}}}),e._v(" "),r("img",{staticClass:"upimg",attrs:{src:a("PRuO"),id:"usTrCardHandheldImgUrl"}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:function(t){return e.upload("usTrCardFrontImgUrl")}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrCardFrontImgUrl,expression:"usTrCardFrontImgUrl"}],attrs:{type:"text",placeholder:"身份证正面",readonly:"","data-alert":"身份证正面不能为空"},domProps:{value:e.usTrCardFrontImgUrl},on:{input:function(t){t.target.composing||(e.usTrCardFrontImgUrl=t.target.value)}}}),e._v(" "),r("img",{staticClass:"upimg",attrs:{src:a("PRuO"),id:"usTrCardFrontImgUrl"}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:function(t){return e.upload("usTrCardBackImgUrl")}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrCardBackImgUrl,expression:"usTrCardBackImgUrl"}],attrs:{type:"text",placeholder:"身份证反面",readonly:"","data-alert":"身份证反面不能为空"},domProps:{value:e.usTrCardBackImgUrl},on:{input:function(t){t.target.composing||(e.usTrCardBackImgUrl=t.target.value)}}}),e._v(" "),r("img",{staticClass:"upimg",attrs:{src:a("PRuO"),id:"usTrCardBackImgUrl"}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:e.citychange}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.area,expression:"area"}],attrs:{type:"text",placeholder:"法人所在地",readonly:"readonly","data-alert":"法人所在地不能为空"},domProps:{value:e.area},on:{input:function(t){t.target.composing||(e.area=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrDetailed,expression:"usTrDetailed"}],attrs:{type:"text",placeholder:"详细地址","data-alert":"详细地址不能为空"},domProps:{value:e.usTrDetailed},on:{input:function(t){t.target.composing||(e.usTrDetailed=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrLicenseCode,expression:"usTrLicenseCode"}],attrs:{type:"text",placeholder:"公司执照注册号","data-alert":"公司执照注册号不能为空"},domProps:{value:e.usTrLicenseCode},on:{input:function(t){t.target.composing||(e.usTrLicenseCode=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:e.citychange01}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.area01,expression:"area01"}],attrs:{type:"text",placeholder:"营业执照所在地",readonly:"readonly","data-alert":"营业执照所在地不能为空"},domProps:{value:e.area01},on:{input:function(t){t.target.composing||(e.area01=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrLicenseDetailed,expression:"usTrLicenseDetailed"}],attrs:{type:"text",placeholder:"营业执照详细地址","data-alert":"营业执照详细地址不能为空"},domProps:{value:e.usTrLicenseDetailed},on:{input:function(t){t.target.composing||(e.usTrLicenseDetailed=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("div",{staticClass:"title01"},[e._v("营业执照状态")]),e._v(" "),r("label",{attrs:{for:"usTrLicenseStatus"}},[e._v("长期有效")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrLicenseStatus,expression:"usTrLicenseStatus"}],attrs:{type:"radio",name:"usTrLicenseStatus",id:"usTrLicenseStatus",value:"1",checked:"checked"},domProps:{checked:e._q(e.usTrLicenseStatus,"1")},on:{change:function(t){e.usTrLicenseStatus="1"}}}),e._v(" "),r("label",{attrs:{for:"usTrLicenseStatus2"}},[e._v("短期有效")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrLicenseStatus,expression:"usTrLicenseStatus"}],attrs:{type:"radio",name:"usTrLicenseStatus",id:"usTrLicenseStatus2",value:"2"},domProps:{checked:e._q(e.usTrLicenseStatus,"2")},on:{change:function(t){e.usTrLicenseStatus="2"}}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2==e.usTrLicenseStatus,expression:"usTrLicenseStatus==2"}],staticClass:"input-group",on:{click:e.timechangee}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrLicenseTime,expression:"usTrLicenseTime"}],attrs:{type:"text",placeholder:"营业执照有效期",readonly:"readonly","data-alert":"营业执照有效期不能为空"},domProps:{value:e.usTrLicenseTime},on:{input:function(t){t.target.composing||(e.usTrLicenseTime=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:function(t){return e.upload("usTrLicenseImgUrl")}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrLicenseImgUrl,expression:"usTrLicenseImgUrl"}],attrs:{type:"text",placeholder:"营业照",readonly:"","data-alert":"营业照不能为空"},domProps:{value:e.usTrLicenseImgUrl},on:{input:function(t){t.target.composing||(e.usTrLicenseImgUrl=t.target.value)}}}),e._v(" "),r("img",{staticClass:"upimg",attrs:{src:a("PRuO"),id:"usTrLicenseImgUrl"}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrCompanyPhone,expression:"usTrCompanyPhone"}],attrs:{type:"number",placeholder:"公司固话","data-alert":"公司固话不能为空"},domProps:{value:e.usTrCompanyPhone},on:{input:function(t){t.target.composing||(e.usTrCompanyPhone=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrBankDoor,expression:"usTrBankDoor"}],attrs:{type:"text",placeholder:"开卡行","data-alert":"开卡行不能为空"},domProps:{value:e.usTrBankDoor},on:{input:function(t){t.target.composing||(e.usTrBankDoor=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrBankBranches,expression:"usTrBankBranches"}],attrs:{type:"text",placeholder:"银行分行","data-alert":"银行分行不能为空"},domProps:{value:e.usTrBankBranches},on:{input:function(t){t.target.composing||(e.usTrBankBranches=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrBankId,expression:"usTrBankId"}],attrs:{type:"number",placeholder:"银行卡号","data-alert":"银行卡号不能为空"},domProps:{value:e.usTrBankId},on:{input:function(t){t.target.composing||(e.usTrBankId=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"input-group",on:{click:function(t){return e.upload("usTrBankImgUrl")}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrBankImgUrl,expression:"usTrBankImgUrl"}],attrs:{type:"text",placeholder:"银行卡照片",readonly:"","data-alert":"银行卡照片不能为空"},domProps:{value:e.usTrBankImgUrl},on:{input:function(t){t.target.composing||(e.usTrBankImgUrl=t.target.value)}}}),e._v(" "),r("img",{staticClass:"upimg",attrs:{src:a("PRuO"),id:"usTrBankImgUrl"}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("div",{staticClass:"title01"},[e._v("银行卡类型")]),e._v(" "),r("label",{attrs:{for:"usTrBankStyle"}},[e._v("对公")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrBankStyle,expression:"usTrBankStyle"}],attrs:{type:"radio",name:"usTrBankStyle",id:"usTrBankStyle",value:"1",checked:"checked"},domProps:{checked:e._q(e.usTrBankStyle,"1")},on:{change:function(t){e.usTrBankStyle="1"}}}),e._v(" "),r("label",{attrs:{for:"usTrBankStyle2"}},[e._v("对私")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrBankStyle,expression:"usTrBankStyle"}],attrs:{type:"radio",name:"usTrBankStyle",id:"usTrBankStyle2",value:"2"},domProps:{checked:e._q(e.usTrBankStyle,"2")},on:{change:function(t){e.usTrBankStyle="2"}}})]),e._v(" "),r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.usTrAuditNote,expression:"usTrAuditNote"}],attrs:{type:"text",placeholder:"审核备注","data-alert":"审核备注不能为空"},domProps:{value:e.usTrAuditNote},on:{input:function(t){t.target.composing||(e.usTrAuditNote=t.target.value)}}})]),e._v(" "),r("input",{staticStyle:{color:"#FFFFFF!important"},attrs:{type:"button",name:"mysubmit",id:"mysubmit",value:"注册"},on:{click:e.gosubmit}}),e._v(" "),r("div",{staticClass:"input-group",staticStyle:{border:"0"}},[r("span"),e._v(" "),r("span",{on:{click:function(t){return e.opennew("login")}}},[e._v("\n\t\t\t\t\t已有账号，去登陆\n\t\t\t\t")])])]),e._v(" "),r("transition",{attrs:{name:"fade"}},[r("city-picker",{directives:[{name:"show",rawName:"v-show",value:e.cityboo,expression:"cityboo"}],on:{citychange:e.citychange,alertchange:e.alertchange}})],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[r("city-picke",{directives:[{name:"show",rawName:"v-show",value:e.cityboo01,expression:"cityboo01"}],on:{citychange:e.citychange01,alertchange:e.alertchange}})],1),e._v(" "),r("transition",{attrs:{name:"alert"}},[r("alert",{directives:[{name:"show",rawName:"v-show",value:e.alertboo,expression:"alertboo"}],on:{alertchange:e.alertchange,alerttrue:e.alerttrue}})],1)],1)],1)},staticRenderFns:[]};var n=function(e){a("8/vF")},i=a("VU/8")(r.a,s,!1,n,null,null);t.default=i.exports}});
//# sourceMappingURL=28.521768b93731603f14e5.js.map