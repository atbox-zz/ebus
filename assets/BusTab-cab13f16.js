import{r as d,B,e as z,C as Z,u as H,d as Y,g as F,h as V,a as v,j as u,F as j,b as S,f as J,D as N}from"./index-57e2b407.js";import{P as W}from"./Popup-bf8d401e.js";let Q={data:""},ee=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Q,te=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ae=/\/\*[^]*?\*\/|  +/g,R=/\n+/g,C=(e,t)=>{let a="",i="",n="";for(let r in e){let s=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+s+";":i+=r[1]=="f"?C(s,r):r+"{"+C(s,r[1]=="k"?"":t)+"}":typeof s=="object"?i+=C(s,t?t.replace(/([^,])+/g,o=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):r):s!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=C.p?C.p(r,s):r+":"+s+";")}return a+(t&&n?t+"{"+n+"}":n)+i},b={},q=e=>{if(typeof e=="object"){let t="";for(let a in e)t+=a+q(e[a]);return t}return e},re=(e,t,a,i,n)=>{let r=q(e),s=b[r]||(b[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!b[s]){let l=r!==e?e:(c=>{let p,g,h=[{}];for(;p=te.exec(c.replace(ae,""));)p[4]?h.shift():p[3]?(g=p[3].replace(R," ").trim(),h.unshift(h[0][g]=h[0][g]||{})):h[0][p[1]]=p[2].replace(R," ").trim();return h[0]})(e);b[s]=C(n?{["@keyframes "+s]:l}:l,a?"":"."+s)}let o=a&&b.g?b.g:null;return a&&(b.g=b[s]),((l,c,p,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(b[s],t,i,o),s},oe=(e,t,a)=>e.reduce((i,n,r)=>{let s=t[r];if(s&&s.call){let o=s(a),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;s=l?"."+l:o&&typeof o=="object"?o.props?"":C(o,""):o===!1?"":o}return i+n+(s??"")},"");function $(e){let t=this||{},a=e.call?e(t.p):e;return re(a.unshift?a.raw?oe(a,[].slice.call(arguments,1),t.p):a.reduce((i,n)=>Object.assign(i,n&&n.call?n(t.p):n),{}):a,ee(t.target),t.g,t.o,t.k)}let K,I,M;$.bind({g:1});let x=$.bind({k:1});function ie(e,t,a,i){C.p=t,K=e,I=a,M=i}function _(e,t){let a=this||{};return function(){let i=arguments;function n(r,s){let o=Object.assign({},r),l=o.className||n.className;a.p=Object.assign({theme:I&&I()},o),a.o=/ *go\d+/.test(l),o.className=$.apply(a,i)+(l?" "+l:""),t&&(o.ref=s);let c=e;return e[0]&&(c=o.as||e,delete o.as),M&&c[0]&&M(o),K(c,o)}return t?t(n):n}}var se=e=>typeof e=="function",L=(e,t)=>se(e)?e(t):e,ne=(()=>{let e=0;return()=>(++e).toString()})(),X=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),le=20,G=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,le)};case 1:return{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:a}=t;return G(e,{type:e.toasts.find(r=>r.id===a.id)?1:0,toast:a});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(r=>r.id===i||i===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+n}))}}},k=[],w={toasts:[],pausedAt:void 0},T=e=>{w=G(w,e),k.forEach(t=>{t(w)})},ce={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},de=(e={})=>{let[t,a]=d.useState(w),i=d.useRef(w);d.useEffect(()=>(i.current!==w&&a(w),k.push(a),()=>{let r=k.indexOf(a);r>-1&&k.splice(r,1)}),[]);let n=t.toasts.map(r=>{var s,o,l;return{...e,...e[r.type],...r,removeDelay:r.removeDelay||((s=e[r.type])==null?void 0:s.removeDelay)||(e==null?void 0:e.removeDelay),duration:r.duration||((o=e[r.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||ce[r.type],style:{...e.style,...(l=e[r.type])==null?void 0:l.style,...r.style}}});return{...t,toasts:n}},pe=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(a==null?void 0:a.id)||ne()}),O=e=>(t,a)=>{let i=pe(t,e,a);return T({type:2,toast:i}),i.id},f=(e,t)=>O("blank")(e,t);f.error=O("error");f.success=O("success");f.loading=O("loading");f.custom=O("custom");f.dismiss=e=>{T({type:3,toastId:e})};f.remove=e=>T({type:4,toastId:e});f.promise=(e,t,a)=>{let i=f.loading(t.loading,{...a,...a==null?void 0:a.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let r=t.success?L(t.success,n):void 0;return r?f.success(r,{id:i,...a,...a==null?void 0:a.success}):f.dismiss(i),n}).catch(n=>{let r=t.error?L(t.error,n):void 0;r?f.error(r,{id:i,...a,...a==null?void 0:a.error}):f.dismiss(i)}),e};var ue=(e,t)=>{T({type:1,toast:{id:e,height:t}})},me=()=>{T({type:5,time:Date.now()})},A=new Map,fe=1e3,ge=(e,t=fe)=>{if(A.has(e))return;let a=setTimeout(()=>{A.delete(e),T({type:4,toastId:e})},t);A.set(e,a)},he=e=>{let{toasts:t,pausedAt:a}=de(e);d.useEffect(()=>{if(a)return;let r=Date.now(),s=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(r-o.createdAt);if(l<0){o.visible&&f.dismiss(o.id);return}return setTimeout(()=>f.dismiss(o.id),l)});return()=>{s.forEach(o=>o&&clearTimeout(o))}},[t,a]);let i=d.useCallback(()=>{a&&T({type:6,time:Date.now()})},[a]),n=d.useCallback((r,s)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:c}=s||{},p=t.filter(y=>(y.position||c)===(r.position||c)&&y.height),g=p.findIndex(y=>y.id===r.id),h=p.filter((y,m)=>m<g&&y.visible).length;return p.filter(y=>y.visible).slice(...o?[h+1]:[0,h]).reduce((y,m)=>y+(m.height||0)+l,0)},[t]);return d.useEffect(()=>{t.forEach(r=>{if(r.dismissed)ge(r.id,r.removeDelay);else{let s=A.get(r.id);s&&(clearTimeout(s),A.delete(r.id))}})},[t]),{toasts:t,handlers:{updateHeight:ue,startPause:me,endPause:i,calculateOffset:n}}},ye=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ve=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,xe=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ye} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ve} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${be} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ce=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_e=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ce} 1s linear infinite;
`,we=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Te=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ae=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${we} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Te} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Oe=_("div")`
  position: absolute;
`,Ne=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Pe=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Se=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Pe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ke=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?d.createElement(Se,null,t):t:a==="blank"?null:d.createElement(Ne,null,d.createElement(_e,{...i}),a!=="loading"&&d.createElement(Oe,null,a==="error"?d.createElement(xe,{...i}):d.createElement(Ae,{...i})))},Le=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,$e=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ee="0%{opacity:0;} 100%{opacity:1;}",De="0%{opacity:1;} 100%{opacity:0;}",Fe=_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,je=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ie=(e,t)=>{let a=e.includes("top")?1:-1,[i,n]=X()?[Ee,De]:[Le(a),$e(a)];return{animation:t?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Me=d.memo(({toast:e,position:t,style:a,children:i})=>{let n=e.height?Ie(e.position||t||"top-center",e.visible):{opacity:0},r=d.createElement(ke,{toast:e}),s=d.createElement(je,{...e.ariaProps},L(e.message,e));return d.createElement(Fe,{className:e.className,style:{...n,...a,...e.style}},typeof i=="function"?i({icon:r,message:s}):d.createElement(d.Fragment,null,r,s))});ie(d.createElement);var Re=({id:e,className:t,style:a,onHeightUpdate:i,children:n})=>{let r=d.useCallback(s=>{if(s){let o=()=>{let l=s.getBoundingClientRect().height;i(e,l)};o(),new MutationObserver(o).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return d.createElement("div",{ref:r,className:t,style:a},n)},Ue=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:X()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...n}},Be=$`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,P=16,ze=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:n,containerStyle:r,containerClassName:s})=>{let{toasts:o,handlers:l}=he(a);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:P,left:P,right:P,bottom:P,pointerEvents:"none",...r},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(c=>{let p=c.position||t,g=l.calculateOffset(c,{reverseOrder:e,gutter:i,defaultPosition:t}),h=Ue(p,g);return d.createElement(Re,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Be:"",style:h},c.type==="custom"?L(c.message,c):n?n(c):d.createElement(Me,{toast:c,position:p}))}))},Ze=f,He=(e=>(e[e.NORMAL=0]="NORMAL",e[e.NOT_START=1]="NOT_START",e[e.NOT_STOP=2]="NOT_STOP",e[e.LAST_PASSED=3]="LAST_PASSED",e[e.NOT_OPERATE=4]="NOT_OPERATE",e))(He||{});const et={0:"normal",1:"unStarted",2:"traffic_control",3:"last_passed",4:"unOperate"},tt={0:"bg-primary",1:"bg-[#A9A9A9]",2:"bg-[#A9A9A9]",3:"bg-[#A9A9A9]",4:"bg-[#A9A9A9]"},at={0:"text-black",1:"text-gray-600",2:"text-gray-600",3:"text-gray-600",4:"text-gray-600"},rt={0:"tooltip_base",1:"tooltip_gray",2:"tooltip_gray",3:"tooltip_gray",4:"tooltip_gray"};var Ye=(e=>(e[e.LEFT=0]="LEFT",e[e.PIT=1]="PIT",e))(Ye||{});const ot={0:"removed",1:"pitting"},it={11:"city_bus",12:"road_bus",13:"highway_bus",14:"shuttle_bus"},Ve={searchStop:"search_stop",nearbyStop:"nearby_stop",favoriteStop:"my_collection"},D=B.li`text_hover flex gap-[6px] items-center`;function st({page:e}){const t=z(),{pathname:a}=Z(),{t:i}=H(),n=Y(),r=F(({city:c})=>c.currentCity),{resetMap:s}=V(),o=a.replace("/","");function l(){t("/"),s(!0),n(J.updateCity(""))}return v("div",{className:"px-6 py-3 bg-[#F8F8F8] flex justify-between items-center md:px-16",children:[u("div",{className:"flex gap-1 items-center",children:v("p",{children:[u("span",{className:"text_hover",onClick:l,children:i("homepage")}),u("span",{children:" / "}),u("span",{children:i(Ve[o])??""}),r?i(`city.${r}`):""]})}),u("ul",{className:"flex gap-3",children:u(qe,{page:e,pageName:o})})]})}function qe({page:e,pageName:t}){if(t==="favoriteStop")return null;const{bus:a,isOpenMap:i,toggleMap:n}=V(),{t:r}=H();function s(){const o=document.createElement("textarea");o.innerText=`${location.href}?city=${a==null?void 0:a.City}&routeName=${a==null?void 0:a.RouteName.Zh_tw}`,document.body.appendChild(o),o.select(),document.execCommand("copy"),o.remove(),Ze.success(r("success_copy"))}return v(j,{children:[e==="detail"&&v(j,{children:[v(D,{onClick:s,children:[u("img",{src:S("icons/link.png"),alt:"",width:"10"}),u("p",{children:r("copy_link")})]}),u(ze,{})]}),i?v(D,{className:"md:hidden",onClick:()=>n(!1),children:[u("img",{src:S("icons/route.png"),alt:"",width:"12"}),u("p",{children:r("route")})]}):v(D,{className:"md:hidden",onClick:()=>n(!0),children:[u("img",{src:S("icons/map.png"),alt:"",width:"12"}),u("p",{children:r("map")})]})]})}const Ke="M13.7328 1.9375C14.2106 1.9371 14.6836 2.03209 15.1242 2.2169C15.5649 2.40171 15.9641 2.67262 16.2987 3.01375C16.988 3.71356 17.3744 4.65645 17.3744 5.63875C17.3744 6.62106 16.988 7.56394 16.2987 8.26375L9.49994 15.1478L2.70119 8.26375C2.01186 7.56394 1.62546 6.62106 1.62546 5.63875C1.62546 4.65645 2.01186 3.71356 2.70119 3.01375C3.03594 2.67286 3.43526 2.40209 3.87582 2.21726C4.31639 2.03242 4.78936 1.93722 5.26713 1.93722C5.7449 1.93722 6.21788 2.03242 6.65844 2.21726C7.099 2.40209 7.49832 2.67286 7.83307 3.01375L9.49994 4.72L11.1603 3.02688C11.4938 2.68168 11.8935 2.40729 12.3355 2.22011C12.7775 2.03293 13.2527 1.93681 13.7328 1.9375ZM13.7328 0.625002C13.0802 0.624449 12.4341 0.754188 11.8323 1.00661C11.2306 1.25904 10.6853 1.62907 10.2284 2.095L9.49994 2.83L8.77151 2.095C8.31407 1.62991 7.76862 1.26052 7.16697 1.00838C6.56531 0.756233 5.91948 0.626376 5.26713 0.626376C4.61478 0.626376 3.96895 0.756233 3.3673 1.00838C2.76564 1.26052 2.2202 1.62991 1.76276 2.095C0.832114 3.04238 0.310669 4.3173 0.310669 5.64531C0.310669 6.97333 0.832114 8.24825 1.76276 9.19563L9.49994 17.0313L17.2371 9.19563C18.1678 8.24825 18.6892 6.97333 18.6892 5.64531C18.6892 4.3173 18.1678 3.04238 17.2371 2.095C16.7798 1.62966 16.2344 1.26002 15.6328 1.00764C15.0311 0.755254 14.3852 0.625181 13.7328 0.625002Z",Xe="M13.7656 0.625C12.4531 0.625 11.2063 1.15 10.2875 2.06875L9.50001 2.85625L8.77813 2.13438C6.87501 0.165625 3.72501 0.165625 1.82188 2.06875L1.75626 2.13438C-0.212494 4.10313 -0.212494 7.25313 1.75626 9.22188L9.50001 17.0312L17.2438 9.22188C19.2125 7.25313 19.2125 4.10313 17.2438 2.13438C16.325 1.15 15.0781 0.625 13.7656 0.625Z";var Ge=(e=>(e[e.STOP=0]="STOP",e[e.STATION=1]="STATION",e))(Ge||{});const Je={bus:0,site:1},U=B.div`rounded-full w-16 h-16 text-white text-4xl flex justify-center items-center m-auto`;function nt({bus:e,type:t,site:a}){const[i,n]=d.useState(!1),r=z(),s=Z(),o=Y(),l=F(({favorite:m})=>m.favoriteBus)??[],c=F(({favorite:m})=>m.favoriteSite)??[],p=d.useRef("add"),g=d.useMemo(()=>t==="bus"?l.some(({RouteID:m})=>m===(e==null?void 0:e.RouteID)):c.some(({RouteID:m,Direction:E})=>(a==null?void 0:a.RouteID)===m&&(a==null?void 0:a.Direction)===E),[t,e,a,l.length,c.length]);function h(m){if(m.stopPropagation(),s.pathname!=="/favoriteStop"&&n(!0),g){p.current="remove",e&&o(N.removeFavoriteBus(e.RouteID)),a&&o(N.removeFavoriteSite(a));return}p.current="add",e&&o(N.addFavoriteBus(e)),a&&o(N.addFavoriteSite(a))}function y(m){m.stopPropagation(),n(E=>!E)}return v(j,{children:[u("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg favorite",onClick:h,children:u("path",{fill:"#355F8B",d:g?Xe:Ke})}),v(W,{isShowPopup:i,togglePopup:n,children:[p.current==="add"?u(U,{className:"bg-green",children:"✔"}):u(U,{className:"bg-secondary",children:"✖"}),v("h2",{className:"mt-6 mb-8 text-center",children:[p.current==="add"?"已":"取消","收藏站牌"]}),v("div",{className:"flex justify-center gap-2",children:[u("button",{className:"btn_line",onClick:y,children:"關閉"}),u("button",{className:"btn_base",onClick:()=>r(`/favoriteStop?type=${Je[t]}`),children:"查看收藏"})]})]})]})}function lt({content:e}){return v("div",{className:"mt-8 flex flex-col items-center",children:[u("img",{src:S("images/logo-wait.svg"),width:"120",alt:""}),e]})}function ct({options:e,value:t,toggleTab:a}){return u("div",{className:"flex w-full",children:e.map(i=>u("div",{className:`bus_tab ellipsis ${t===i.value?"bus_tab-active":""}`,onClick:()=>a(i.value),children:i.title},i.value))})}export{lt as B,Ge as F,st as a,Ye as b,nt as c,tt as d,ot as e,He as f,et as g,rt as h,at as i,it as j,ct as k};
