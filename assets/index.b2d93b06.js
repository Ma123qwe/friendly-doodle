import{r as d,u as S,b as x,o as b,f as k,g as e,B as m,C as p,F as q,k as g,p as N,m as T}from"./vendor.ce825e00.js";import{_ as C,g as z,a as B}from"./index.27bb2621.js";const I={setup(c){const o=d(""),l=d(""),n=d(""),r=S(),y=x(),t=d(null),_=()=>{console.log(o.value)},v=()=>{console.log(l.value)},f=M(()=>{if(console.log(o.value,52),o.value!=="")if(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(o.value)){let u=function(s){s=="undefined"&&(s=60),s=s-1,s>=0?(t.value=setTimeout(()=>{u(s)},1e3),document.querySelector(".send").innerHTML=`${s}\u79D2\u540E\u91CD\u65B0\u53D1\u9001`,document.querySelector(".send").style.backgroundColor="#ccc",document.querySelector(".send").disabled=!0):(document.querySelector(".send").innerHTML="\u91CD\u65B0\u53D1\u9001",document.querySelector(".send").style.backgroundColor="#178dff",document.querySelector(".send").disabled=!1)};document.querySelector(".true").style.display="none",document.querySelector(".kong").style.display="none",u(60);for(let s=0;s<6;s++){let h=Math.floor(Math.random()*10);n.value+=h}console.log(n.value,"\u9A8C\u8BC1\u7801"),B({phone:o.value,code:n.value}).then(s=>{console.log(s)})}else return document.querySelector(".true").style.display="block",document.querySelector(".kong").style.display="none",!1;else return document.querySelector(".kong").style.display="block",document.querySelector(".true").style.display="none",!1},1500);return{phoneNum:_,yzm:v,phone:o,yanzheng:l,code:n,send:f,login:()=>{console.log(n.value),l.value!==""?l.value===n.value?(console.log("\u9A8C\u8BC1\u7801\u6B63\u786E"),z({phoneNum:o.value,codeNum:l.value}).then(i=>{console.log(i.data.result);let{phoneNum:u,codeNum:s}=i.data.result;console.log(r),localStorage.setItem("ele_login",!0),r.push({path:"/Home/Statistics"}),clearTimeout(t.value),y.commit("Students/getLogin",u)})):(document.querySelector(".no").style.display="block",document.querySelector(".yan").style.display="none"):(document.querySelector(".yan").style.display="block",document.querySelector(".no").style.display="none")},timer:t}}};function M(c,o){let l;return function(){l&&clearTimeout(l),l=setTimeout(()=>{c()},o)}}const a=c=>(N("data-v-1e9ec14c"),c=c(),T(),c),L=g(" \xA0\xA0 "),V={class:"loginBox"},H=g(" \xA0\xA0\xA0\xA0 \xA0\xA0\xA0\xA0 "),w=a(()=>e("div",null,[e("img",{src:"https://s2.kaoshixing.com/static/account/images/login_reg/login-bg-small.jpg"})],-1)),F={class:"rightBox"},U={class:"center"},j=a(()=>e("p",{class:"top"},[e("span",{class:"iconfont"},"\uE603"),e("span",null,"\u8003\u8BD5\u5427\u53F0")],-1)),D={class:"box"},E=a(()=>e("p",null,"\u8D26\u53F7:",-1)),R=a(()=>e("div",{class:"xian"},[e("p",{class:"true"},"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7"),e("p",{class:"kong"},"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A")],-1)),Y={class:"box"},A=a(()=>e("p",null,"\u9A8C\u8BC1\u7801:",-1)),G=a(()=>e("div",{class:"xian"},[e("p",{class:"no"},"\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E"),e("p",{class:"yan"},"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A")],-1));function J(c,o,l,n,r,y){return b(),k(q,null,[L,e("div",V,[H,w,e("div",F,[e("div",U,[e("div",null,[j,e("div",D,[E,m(e("input",{type:"text",onChange:o[0]||(o[0]=(...t)=>n.phoneNum&&n.phoneNum(...t)),"onUpdate:modelValue":o[1]||(o[1]=t=>n.phone=t)},null,544),[[p,n.phone]])]),R,e("div",Y,[A,m(e("input",{type:"text",onChange:o[2]||(o[2]=(...t)=>n.yzm&&n.yzm(...t)),"onUpdate:modelValue":o[3]||(o[3]=t=>n.yanzheng=t)},null,544),[[p,n.yanzheng]]),e("button",{class:"send",onClick:o[4]||(o[4]=(...t)=>n.send&&n.send(...t))},"\u53D1\u9001\u9A8C\u8BC1\u7801")]),G]),e("div",{class:"submit",onClick:o[5]||(o[5]=(...t)=>n.login&&n.login(...t))},"\u767B\u9646")])])])],64)}var Q=C(I,[["render",J],["__scopeId","data-v-1e9ec14c"]]);export{Q as default};
