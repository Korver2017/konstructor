import{_ as w,D as $,J as h,o as n,c as d,a as t,b as e,n as g,C as k,p as U,d as S,u as V,j as T,t as r,w as m,v,F as p,r as b,z as C,K as I}from"./index.0450a3e1.js";import{u as R,r as f}from"./index.esm.6c0aa8f9.js";const z=c=>(U("data-v-e6bd497b"),c=c(),S(),c),B={class:"row"},D={class:"col-6 mx-auto"},N={class:"toast show fade p-2 mx-auto mt-7",role:"alert","aria-live":"assertive","aria-atomic":"true"},A={class:"toast-body text-center"},F=k(" User data updated successfully! "),j=z(()=>t("hr",{class:"horizontal dark"},null,-1)),M={class:"d-flex justify-content-center"},q={__name:"Toast",setup(c){const{isShown:i}=$(h()),{unmountToast:_}=h();return(o,u)=>(n(),d("div",{class:g(["container-fluid toast-wrap fade",{show:e(i)}])},[t("div",B,[t("div",D,[t("div",N,[t("div",A,[F,j,t("div",M,[t("button",{type:"button",class:"btn bg-gradient-primary btn-sm me-2 mb-0",onClick:u[0]||(u[0]=(...a)=>e(_)&&e(_)(...a))}," Confirm ")])])])])])],2))}},E=w(q,[["__scopeId","data-v-e6bd497b"]]),G="/konstructor/assets/waves-white.b7bd58ac.svg",J=[{role:"admin",title:"Admin",id:"admin-1"},{role:"user",title:"User",id:"user-1"},{role:"guest",title:"Guest",id:"guest-1"}],K={class:"py-7 bg-gray-100 position-relative"},L={class:"container"},H=t("div",{class:"row mt-3"},[t("div",{class:"col-lg-6 mx-auto text-center"},[t("h2",null,"Account Settings")])],-1),O={class:"row mt-3"},P={class:"col-lg-8 mx-auto"},Q={class:"card"},W={class:"row"},X={class:"col-lg-6 d-flex"},Y={class:"bg-gradient-dark my-lg-3 ms-lg-3 border-radius-md w-95"},Z=t("img",{src:G,alt:"pattern-lines",class:"position-absolute start-0 top-0 h-100 opacity-6"},null,-1),tt={class:"card-body p-5 position-relative"},st={class:"text-white"},et={class:"opacity-8 text-white lead"},ot={class:"opacity-8 text-white lead text-capitalize"},at={class:"col-lg-6"},lt={id:"contact-form",method:"post",autocomplete:"off"},it={class:"card-body position-relative p-3 ps-0"},nt={class:"row mt-4"},dt={class:"col-md-12"},ct=t("label",null,"Account",-1),rt={class:"input-group mb-4"},_t={class:"col-md-12 ps-2 mb-4"},ut=t("label",null,"User name",-1),mt={class:"input-group"},pt={class:"error-msg text-danger"},ht=t("label",null,"Role",-1),vt={class:"d-flex"},bt=["id"],ft=["id","checked","value","onUpdate:modelValue"],gt=["for"],xt={class:"text-start mt-3"},kt={__name:"settings",setup(c){const{user:i,updateUserInfo:_}=V(),o=T({...i.data}),a=R({role:{required:f},name:{required:f}},o);return(yt,l)=>{const x=E;return n(),d(p,null,[t("section",K,[t("div",L,[H,t("div",O,[t("div",P,[t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[Z,t("div",tt,[t("h3",st,r(e(i).data.name),1),t("h5",et,r(e(i).data.account),1),t("h5",ot," Role: "+r(e(i).data.role),1)])])]),t("div",at,[t("form",lt,[t("div",it,[t("div",nt,[t("div",dt,[ct,t("div",rt,[m(t("input",{class:"form-control",placeholder:"","aria-label":"First Name...",type:"email","onUpdate:modelValue":l[0]||(l[0]=s=>o.account=s),disabled:""},null,512),[[v,o.account]])])]),t("div",_t,[ut,t("div",mt,[m(t("input",{onBlur:l[1]||(l[1]=(...s)=>e(a).name.$touch&&e(a).name.$touch(...s)),"onUpdate:modelValue":l[2]||(l[2]=s=>o.name=s),type:"text",class:g(["form-control",{"border-danger":e(a).name.$dirty&&e(a).name.$invalid}]),placeholder:"","aria-label":""},null,34),[[v,o.name]])]),(n(!0),d(p,null,b(e(a).name.$errors,s=>(n(),d("div",{class:"input-errors",key:s.$uid},[t("div",pt,r(s.$message),1)]))),128))])]),ht,t("div",vt,[t("div",null,[(n(!0),d(p,null,b(e(J),s=>(n(),d("div",{class:"form-check me-3",id:s.id},[m(t("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:s.role,checked:s.role===o.role,value:s.role,"onUpdate:modelValue":y=>o.role=y},null,8,ft),[[I,o.role]]),t("label",{class:"form-check-label",for:s.role},r(s.title),9,gt)],8,bt))),256))])]),t("div",xt,[t("button",{onClick:l[3]||(l[3]=s=>e(_)(e(a).$invalid,o)),type:"button",class:"btn bg-gradient-dark mb-0"}," Save ")])])])])])])])])])]),C(x)],64)}}};export{kt as default};
