import{r as a,o,a as c,b as s,t as i,u,e as m}from"./index-a2439d50.js";const k="/assets/5000-38f76a6c.jpg",p="/assets/pngegg-2d78991b.png",f={class:"clicker"},g={key:0},h={class:"clicker-count"},v={key:1,class:"clicker-winBox"},b=s("p",null,"Ты выиграл 5000 сум",-1),C=s("img",{src:k,class:"clicker-winBox-win",alt:""},null,-1),x=[b,C],y=s("img",{src:p,class:"clicker-box-img",alt:""},null,-1),B=[y],E={__name:"Clicker",setup(N){const n=a(0),l=a(0),r=_(100,300);function _(e,t){return Math.floor(Math.random()*(t-e+1))+e}function d(){n.value+=1;const e=document.querySelector(".clicker-box");e&&(e.style.transform="scale(1.1)",setTimeout(()=>{e.style.transform="scale(1)"},40))}return(e,t)=>(o(),c("div",f,[s("p",{onClick:t[0]||(t[0]=()=>l.value+=1)},"CLICKER"),l.value%3==0&&l.value!=0?(o(),c("p",g,i(u(r)),1)):m("",!0),s("p",h,i(n.value),1),n.value==u(r)?(o(),c("div",v,x)):(o(),c("div",{key:2,class:"clicker-box",ref:"clickerEl",onClick:d},B,512))]))}};export{E as default};
