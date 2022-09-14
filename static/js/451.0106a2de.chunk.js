"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[451],{6451:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ee}});var o=n(885),r=n(2791),a=n(4942),i=n(1413),s=n(3366);function c(e,t){if(null==e)return{};var n,o,r=(0,s.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=n(2982),l=n(8182),d=["theme","type"],f=["delay","staleId"];function p(e){return"number"===typeof e&&!isNaN(e)}function m(e){return"boolean"===typeof e}function v(e){return"string"===typeof e}function g(e){return"function"===typeof e}function h(e){return v(e)||g(e)?e:null}function y(e){return null!=e}function T(e){return(0,r.isValidElement)(e)||v(e)||g(e)||p(e)}var b={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function Z(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?t+"--"+i:t,v=a?n+"--"+i:n,g=(0,r.useRef)(0);return(0,r.useLayoutEffect)((function(){var e=f.current,t=m.split(" "),n=function n(o){var r;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&(r=e.classList).remove.apply(r,(0,u.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,u.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,r.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(c?t():(g.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[p]),r.createElement(r.Fragment,null,o)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var x={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},_=function(e){var t=e.theme,n=e.type,o=c(e,d);return r.createElement("svg",(0,i.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var I={info:function(e){return r.createElement(_,(0,i.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(_,(0,i.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(_,(0,i.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(_,(0,i.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(g(a)?i=a(s):(0,r.isValidElement)(a)?i=(0,r.cloneElement)(a,s):v(a)||p(a)?i=a:o?i=I.spinner():function(e){return e in I}(n)&&(i=I[n](s))),i}function O(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],l=i[1],d=(0,r.useRef)(null),b=(0,r.useRef)(new Map).current,E=function(e){return-1!==s.indexOf(e)},Z=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:E,getToast:function(e){return b.get(e)}}).current;function _(e){var t=e.containerId;!Z.props.limit||t&&Z.containerId!==t||(Z.count-=Z.queue.length,Z.queue=[])}function I(e){l((function(t){return y(e)?t.filter((function(t){return t!==e})):[]}))}function O(){var e=Z.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var o=t.delay,a=t.staleId,i=c(t,f);if(T(e)&&!function(e){return!d.current||Z.props.enableMultiContainer&&e.containerId!==Z.props.containerId||b.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,u=i.updateId,l=i.data,E=Z.props,_=function(){return I(s)},w=null==u;w&&Z.count++;var N,R,P={toastId:s,updateId:u,data:l,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||E.theme,icon:null!=i.icon?i.icon:E.icon,isIn:!1,key:i.key||Z.toastKey++,type:i.type,closeToast:_,closeButton:i.closeButton,rtl:E.rtl,position:i.position||E.position,transition:i.transition||E.transition,className:h(i.className||E.toastClassName),bodyClassName:h(i.bodyClassName||E.bodyClassName),style:i.style||E.toastStyle,bodyStyle:i.bodyStyle||E.bodyStyle,onClick:i.onClick||E.onClick,pauseOnHover:m(i.pauseOnHover)?i.pauseOnHover:E.pauseOnHover,pauseOnFocusLoss:m(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:E.pauseOnFocusLoss,draggable:m(i.draggable)?i.draggable:E.draggable,draggablePercent:i.draggablePercent||E.draggablePercent,draggableDirection:i.draggableDirection||E.draggableDirection,closeOnClick:m(i.closeOnClick)?i.closeOnClick:E.closeOnClick,progressClassName:h(i.progressClassName||E.progressClassName),progressStyle:i.progressStyle||E.progressStyle,autoClose:!i.isLoading&&(N=i.autoClose,R=E.autoClose,!1===N||p(N)&&N>0?N:R),hideProgressBar:m(i.hideProgressBar)?i.hideProgressBar:E.hideProgressBar,progress:i.progress,role:i.role||E.role,deleteToast:function(){var e=C(b.get(s),"removed");b.delete(s),x.emit(4,e);var t=Z.queue.length;if(Z.count=y(s)?Z.count-1:Z.count-Z.displayedToast,Z.count<0&&(Z.count=0),t>0){var o=y(s)?1:Z.props.limit;if(1===t||1===o)Z.displayedToast++,O();else{var r=o>t?t:o;Z.displayedToast=r;for(var a=0;a<r;a++)O()}}else n()}};P.iconOut=L(P),g(i.onOpen)&&(P.onOpen=i.onOpen),g(i.onClose)&&(P.onClose=i.onClose),P.closeButton=E.closeButton,!1===i.closeButton||T(i.closeButton)?P.closeButton=i.closeButton:!0===i.closeButton&&(P.closeButton=!T(E.closeButton)||E.closeButton);var j=e;(0,r.isValidElement)(e)&&!v(e.type)?j=(0,r.cloneElement)(e,{closeToast:_,toastProps:P,data:l}):g(e)&&(j=e({closeToast:_,toastProps:P,data:l})),E.limit&&E.limit>0&&Z.count>E.limit&&w?Z.queue.push({toastContent:j,toastProps:P,staleId:a}):p(o)?setTimeout((function(){k(j,P,a)}),o):k(j,P,a)}}function k(e,t,n){var o=t.toastId;n&&b.delete(n);var r={content:e,props:t};b.set(o,r),l((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==n}))})),x.emit(4,C(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return Z.containerId=e.containerId,x.cancelEmit(3).on(0,w).on(1,(function(e){return d.current&&I(e)})).on(5,_).emit(2,Z),function(){b.clear(),x.emit(3,Z)}}),[]),(0,r.useEffect)((function(){Z.props=e,Z.isToastActive=E,Z.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(b.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:E}}function w(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function N(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,y=e.onClick,T=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",_),document.addEventListener("touchmove",x),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=w(t.nativeEvent),f.y=k(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?C():Z()}}function Z(){i(!0)}function C(){i(!1)}function x(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=w(t),f.y=k(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),g(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;g(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||C();window.addEventListener("focus",Z),window.addEventListener("blur",C)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(I.onMouseEnter=C,I.onMouseLeave=Z),T&&(I.onClick=function(e){y&&y(e),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:C,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:I}}function R(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,o=e.closeToast,s=e.type,c=e.hide,u=e.className,d=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,h=e.theme,y=(0,i.Z)((0,i.Z)({},d),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:c?0:1});f&&(y.transform="scaleX("+p+")");var T=(0,l.Z)("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+h,"Toastify__progress-bar--"+s,(0,a.Z)({},"Toastify__progress-bar--rtl",m)),b=g(u)?u({rtl:m,type:s,defaultClassName:T}):(0,l.Z)(T,u),E=(0,a.Z)({},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){v&&o()});return r.createElement("div",(0,i.Z)({role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:b,style:y},E))}P.defaultProps={type:E.DEFAULT,hide:!1};var j=function(e){var t=N(e),n=t.isRunning,o=t.preventExitTransition,s=t.toastRef,c=t.eventHandlers,u=e.closeButton,d=e.children,f=e.autoClose,p=e.onClick,m=e.type,v=e.hideProgressBar,h=e.closeToast,y=e.transition,T=e.position,b=e.className,E=e.style,Z=e.bodyClassName,C=e.bodyStyle,x=e.progressClassName,_=e.progressStyle,I=e.updateId,L=e.role,O=e.progress,w=e.rtl,k=e.toastId,j=e.deleteToast,A=e.isIn,B=e.isLoading,M=e.iconOut,S=e.theme,D=(0,l.Z)("Toastify__toast","Toastify__toast-theme--"+S,"Toastify__toast--"+m,(0,a.Z)({},"Toastify__toast--rtl",w)),F=g(b)?b({rtl:w,position:T,type:m,defaultClassName:D}):(0,l.Z)(D,b),z=!!O,H={closeToast:h,type:m,theme:S},q=null;return!1===u||(q=g(u)?u(H):r.isValidElement(u)?r.cloneElement(u,H):R(H)),r.createElement(y,{isIn:A,done:j,position:T,preventExitTransition:o,nodeRef:s},r.createElement("div",(0,i.Z)((0,i.Z)({id:k,onClick:p,className:F},c),{},{style:E,ref:s}),r.createElement("div",(0,i.Z)((0,i.Z)({},A&&{role:L}),{},{className:g(Z)?Z({type:m}):(0,l.Z)("Toastify__toast-body",Z),style:C}),null!=M&&r.createElement("div",{className:(0,l.Z)("Toastify__toast-icon",(0,a.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!B))},M),r.createElement("div",null,d)),q,(f||z)&&r.createElement(P,(0,i.Z)((0,i.Z)({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:w,theme:S,delay:f,isRunning:n,isIn:A,closeToast:h,hide:v,type:m,style:_,className:x,controlledProgress:z,progress:O}))))},A=Z({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),B=(Z({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),Z({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),Z({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,r.forwardRef)((function(e,t){var n=O(e),o=n.getToastToRender,s=n.containerRef,c=n.isToastActive,u=e.className,d=e.style,f=e.rtl,p=e.containerId;function m(e){var t=(0,l.Z)("Toastify__toast-container","Toastify__toast-container--"+e,(0,a.Z)({},"Toastify__toast-container--rtl",f));return g(u)?u({position:e,rtl:f,defaultClassName:t}):(0,l.Z)(t,h(u))}return(0,r.useEffect)((function(){t&&(t.current=s.current)}),[]),r.createElement("div",{ref:s,className:"Toastify",id:p},o((function(e,t){var n=t.length?(0,i.Z)({},d):(0,i.Z)((0,i.Z)({},d),{},{pointerEvents:"none"});return r.createElement("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(j,(0,i.Z)((0,i.Z)({},a),{},{isIn:c(a.toastId),style:(0,i.Z)((0,i.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+a.key}),o)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:b.TOP_RIGHT,transition:A,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var M,S=new Map,D=[];function F(){return Math.random().toString(36).substring(2,9)}function z(e){return e&&(v(e.toastId)||p(e.toastId))?e.toastId:F()}function H(e,t){return S.size>0?x.emit(0,e,t):D.push({content:e,options:t}),t.toastId}function q(e,t){return(0,i.Z)((0,i.Z)({},t),{},{type:t&&t.type||e,toastId:z(t)})}function U(e){return function(t,n){return H(t,q(e,n))}}function Q(e,t){return H(e,q(E.DEFAULT,t))}Q.loading=function(e,t){return H(e,q(E.DEFAULT,(0,i.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var o,r=t.pending,a=t.error,s=t.success;r&&(o=v(r)?Q.loading(r,n):Q.loading(r.render,(0,i.Z)((0,i.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var a=(0,i.Z)((0,i.Z)((0,i.Z)({type:e},c),n),{},{data:r}),s=v(t)?{render:t}:t;return o?Q.update(o,(0,i.Z)((0,i.Z)({},a),s)):Q(s.render,(0,i.Z)((0,i.Z)({},a),s)),r}Q.dismiss(o)},l=g(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",a,e)})),l},Q.success=U(E.SUCCESS),Q.info=U(E.INFO),Q.error=U(E.ERROR),Q.warning=U(E.WARNING),Q.warn=Q.warning,Q.dark=function(e,t){return H(e,q(E.DEFAULT,(0,i.Z)({theme:"dark"},t)))},Q.dismiss=function(e){S.size>0?x.emit(1,e):D=D.filter((function(t){return y(e)&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),x.emit(5,e)},Q.isActive=function(e){var t=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=S.get(n||M);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=(0,i.Z)((0,i.Z)((0,i.Z)({},o),t),{},{toastId:t.toastId||e,updateId:F()});a.toastId!==e&&(a.staleId=e);var s=a.render||r;delete a.render,H(s,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return x.on(4,e),function(){x.off(4,e)}},Q.POSITION=b,Q.TYPE=E,x.on(2,(function(e){M=e.containerId||e,S.set(M,e),D.forEach((function(e){x.emit(0,e.content,e.options)})),D=[]})).on(3,(function(e){S.delete(e.containerId||e),0===S.size&&x.off(0).off(1).off(5)}));var V,G,Y,W,X,K,J,$=n(168),ee=n(4193),te=ee.Z.form(V||(V=(0,$.Z)(["\n  outline: 1px solid black;\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n"]))),ne=ee.Z.label(G||(G=(0,$.Z)(["\n  margin-bottom: 5px;\n  padding: 5px;\n  font-weight: 900;\n"]))),oe=ee.Z.input(Y||(Y=(0,$.Z)(["\n  margin-bottom: 10px;\n  border-radius: 5px;\n"]))),re=ee.Z.button(W||(W=(0,$.Z)(["\n  width: 150px;\n  margin: 5px auto;\n  background-color: #2196f3;\n  border: none;\n  border-radius: 2px;\n  color: white;\n  cursor: pointer;\n"]))),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},ie=n(474),se=n(184);function ce(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(""),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,ie.wY)().data,d=(0,ie.Tn)(),f=(0,o.Z)(d,1)[0],p=function(e){var t=e.target,n=t.name,o=t.value;switch(n){case"name":a(o);break;case"number":u(o);break;default:return}},m=function(){a(""),u("")};return(0,se.jsxs)(te,{onSubmit:function(e){e.preventDefault(),function(){if(null!==l&&void 0!==l&&l.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))Q.warn("".concat(n," is alredy in contacts"));else{var e={id:ae(),name:n,number:c};f(e),Q.success("".concat(n," add to contacts"))}}(),m()},children:[(0,se.jsx)(ne,{htmlFor:"name",children:"Name "}),(0,se.jsx)(oe,{type:"text",name:"name",onChange:p,value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,se.jsx)(ne,{htmlFor:"number",children:"Number "}),(0,se.jsx)(oe,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:c,onChange:p}),(0,se.jsx)(re,{type:"submit",children:"Add contact"}),(0,se.jsx)(B,{autoClose:2e3})]})}var ue,le=ee.Z.li(X||(X=(0,$.Z)(["\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 30px;\n"]))),de=ee.Z.span(K||(K=(0,$.Z)(["\n  margin-left: 10px;\n"]))),fe=ee.Z.button(J||(J=(0,$.Z)(["\n  background-color: #f73636;\n  border: none;\n  border-radius: 2px;\n  color: white;\n"])));function pe(e){var t=e.name,n=e.number,o=e.onClick;return(0,se.jsxs)(le,{children:[(0,se.jsxs)("p",{children:[t,":",(0,se.jsx)(de,{children:n})]}),(0,se.jsx)(fe,{type:"button",onClick:o,children:"Delete"})]})}var me,ve=ee.Z.ul(ue||(ue=(0,$.Z)(["\n  padding-left: 0;\n"]))),ge=n(5048),he=n(3767);function ye(){var e=(0,ie.wY)().data,t=(0,ie.Nt)(),n=(0,o.Z)(t,1)[0],r=(0,ge.v9)(he.Qt),a=function(){var t=r.toLowerCase();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,se.jsxs)(se.Fragment,{children:[(0,se.jsx)(ve,{children:a?null===a||void 0===a?void 0:a.map((function(e){var t=e.id,o=e.name,r=e.number;return(0,se.jsx)(pe,{name:o,number:r,onClick:function(){n(t),Q.error("".concat(o," is delete"))}},t)})):(0,se.jsx)("p",{children:"Loading..."})}),0===(null===e||void 0===e?void 0:e.length)&&(0,se.jsx)("p",{children:"Contacts List is empty"})]})}function Te(){var e=(0,ge.I0)(),t=(0,ge.v9)(he.Qt);return(0,se.jsxs)("div",{children:[(0,se.jsx)(ne,{htmlFor:"filter",children:"Find contacts by name "}),(0,se.jsx)(oe,{type:"text",name:"filter",value:t,onChange:function(t){e((0,he.M6)(t.currentTarget.value))}})]})}var be=ee.Z.div(me||(me=(0,$.Z)(["\n  margin: 30px;\n  width: 400px;\n"])));function Ee(){return(0,se.jsx)(se.Fragment,{children:(0,se.jsxs)(be,{children:[(0,se.jsx)("h1",{children:"Phonebook"}),(0,se.jsx)(ce,{}),(0,se.jsx)("h2",{children:"Contacts"}),(0,se.jsx)(Te,{}),(0,se.jsx)(ye,{})]})})}}}]);
//# sourceMappingURL=451.0106a2de.chunk.js.map