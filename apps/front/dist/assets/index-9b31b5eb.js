(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function e_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var za={},t_={get exports(){return za},set exports(n){za=n}},cl={},yt={},n_={get exports(){return yt},set exports(n){yt=n}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),i_=Symbol.for("react.portal"),r_=Symbol.for("react.fragment"),s_=Symbol.for("react.strict_mode"),o_=Symbol.for("react.profiler"),a_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),u_=Symbol.for("react.forward_ref"),c_=Symbol.for("react.suspense"),f_=Symbol.for("react.memo"),d_=Symbol.for("react.lazy"),sd=Symbol.iterator;function h_(n){return n===null||typeof n!="object"?null:(n=sd&&n[sd]||n["@@iterator"],typeof n=="function"?n:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wp=Object.assign,Hp={};function Ss(n,e,t){this.props=n,this.context=e,this.refs=Hp,this.updater=t||Gp}Ss.prototype.isReactComponent={};Ss.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ss.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jp(){}jp.prototype=Ss.prototype;function ef(n,e,t){this.props=n,this.context=e,this.refs=Hp,this.updater=t||Gp}var tf=ef.prototype=new jp;tf.constructor=ef;Wp(tf,Ss.prototype);tf.isPureReactComponent=!0;var od=Array.isArray,Xp=Object.prototype.hasOwnProperty,nf={current:null},qp={key:!0,ref:!0,__self:!0,__source:!0};function $p(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xp.call(e,i)&&!qp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Lo,type:n,key:s,ref:o,props:r,_owner:nf.current}}function p_(n,e){return{$$typeof:Lo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function rf(n){return typeof n=="object"&&n!==null&&n.$$typeof===Lo}function m_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var ad=/\/+/g;function Fl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?m_(""+n.key):e.toString(36)}function Ma(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Lo:case i_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Fl(o,0):i,od(r)?(t="",n!=null&&(t=n.replace(ad,"$&/")+"/"),Ma(r,e,t,"",function(u){return u})):r!=null&&(rf(r)&&(r=p_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ad,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",od(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Fl(s,a);o+=Ma(s,e,t,l,r)}else if(l=h_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Fl(s,a++),o+=Ma(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oo(n,e,t){if(n==null)return n;var i=[],r=0;return Ma(n,i,"","",function(s){return e.call(t,s,r++)}),i}function g_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var zt={current:null},wa={transition:null},__={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:wa,ReactCurrentOwner:nf};Le.Children={map:Oo,forEach:function(n,e,t){Oo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Oo(n,function(){e++}),e},toArray:function(n){return Oo(n,function(e){return e})||[]},only:function(n){if(!rf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Le.Component=Ss;Le.Fragment=r_;Le.Profiler=o_;Le.PureComponent=ef;Le.StrictMode=s_;Le.Suspense=c_;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=__;Le.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Xp.call(e,l)&&!qp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Lo,type:n.type,key:r,ref:s,props:i,_owner:o}};Le.createContext=function(n){return n={$$typeof:l_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:a_,_context:n},n.Consumer=n};Le.createElement=$p;Le.createFactory=function(n){var e=$p.bind(null,n);return e.type=n,e};Le.createRef=function(){return{current:null}};Le.forwardRef=function(n){return{$$typeof:u_,render:n}};Le.isValidElement=rf;Le.lazy=function(n){return{$$typeof:d_,_payload:{_status:-1,_result:n},_init:g_}};Le.memo=function(n,e){return{$$typeof:f_,type:n,compare:e===void 0?null:e}};Le.startTransition=function(n){var e=wa.transition;wa.transition={};try{n()}finally{wa.transition=e}};Le.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Le.useCallback=function(n,e){return zt.current.useCallback(n,e)};Le.useContext=function(n){return zt.current.useContext(n)};Le.useDebugValue=function(){};Le.useDeferredValue=function(n){return zt.current.useDeferredValue(n)};Le.useEffect=function(n,e){return zt.current.useEffect(n,e)};Le.useId=function(){return zt.current.useId()};Le.useImperativeHandle=function(n,e,t){return zt.current.useImperativeHandle(n,e,t)};Le.useInsertionEffect=function(n,e){return zt.current.useInsertionEffect(n,e)};Le.useLayoutEffect=function(n,e){return zt.current.useLayoutEffect(n,e)};Le.useMemo=function(n,e){return zt.current.useMemo(n,e)};Le.useReducer=function(n,e,t){return zt.current.useReducer(n,e,t)};Le.useRef=function(n){return zt.current.useRef(n)};Le.useState=function(n){return zt.current.useState(n)};Le.useSyncExternalStore=function(n,e,t){return zt.current.useSyncExternalStore(n,e,t)};Le.useTransition=function(){return zt.current.useTransition()};Le.version="18.2.0";(function(n){n.exports=Le})(n_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=yt,x_=Symbol.for("react.element"),y_=Symbol.for("react.fragment"),S_=Object.prototype.hasOwnProperty,M_=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w_={key:!0,ref:!0,__self:!0,__source:!0};function Yp(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)S_.call(e,i)&&!w_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:x_,type:n,key:s,ref:o,props:r,_owner:M_.current}}cl.Fragment=y_;cl.jsx=Yp;cl.jsxs=Yp;(function(n){n.exports=cl})(t_);const Ee=za.jsx,ti=za.jsxs;var Wu={},Hu={},E_={get exports(){return Hu},set exports(n){Hu=n}},on={},ju={},C_={get exports(){return ju},set exports(n){ju=n}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,U){var B=P.length;P.push(U);e:for(;0<B;){var ne=B-1>>>1,N=P[ne];if(0<r(N,U))P[ne]=U,P[B]=N,B=ne;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var U=P[0],B=P.pop();if(B!==U){P[0]=B;e:for(var ne=0,N=P.length,X=N>>>1;ne<X;){var te=2*(ne+1)-1,re=P[te],O=te+1,xe=P[O];if(0>r(re,B))O<N&&0>r(xe,re)?(P[ne]=xe,P[O]=B,ne=O):(P[ne]=re,P[te]=B,ne=te);else if(O<N&&0>r(xe,B))P[ne]=xe,P[O]=B,ne=O;else break e}}return U}function r(P,U){var B=P.sortIndex-U.sortIndex;return B!==0?B:P.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var U=t(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=P)i(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=t(u)}}function S(P){if(h=!1,v(P),!x)if(t(l)!==null)x=!0,K(M);else{var U=t(u);U!==null&&Q(S,U.startTime-P)}}function M(P,U){x=!1,h&&(h=!1,g(y),y=-1),m=!0;var B=f;try{for(v(U),d=t(l);d!==null&&(!(d.expirationTime>U)||P&&!$());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var N=ne(d.expirationTime<=U);U=n.unstable_now(),typeof N=="function"?d.callback=N:d===t(l)&&i(l),v(U)}else i(l);d=t(l)}if(d!==null)var X=!0;else{var te=t(u);te!==null&&Q(S,te.startTime-U),X=!1}return X}finally{d=null,f=B,m=!1}}var b=!1,A=null,y=-1,T=5,L=-1;function $(){return!(n.unstable_now()-L<T)}function Z(){if(A!==null){var P=n.unstable_now();L=P;var U=!0;try{U=A(!0,P)}finally{U?k():(b=!1,A=null)}}else b=!1}var k;if(typeof _=="function")k=function(){_(Z)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,j=I.port2;I.port1.onmessage=Z,k=function(){j.postMessage(null)}}else k=function(){p(Z,0)};function K(P){A=P,b||(b=!0,k())}function Q(P,U){y=p(function(){P(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,K(M))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var B=f;f=U;try{return P()}finally{f=B}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,U){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=f;f=P;try{return U()}finally{f=B}},n.unstable_scheduleCallback=function(P,U,B){var ne=n.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ne+B:ne):B=ne,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=B+N,P={id:c++,callback:U,priorityLevel:P,startTime:B,expirationTime:N,sortIndex:-1},B>ne?(P.sortIndex=B,e(u,P),t(l)===null&&P===t(u)&&(h?(g(y),y=-1):h=!0,Q(S,B-ne))):(P.sortIndex=N,e(l,P),x||m||(x=!0,K(M))),P},n.unstable_shouldYield=$,n.unstable_wrapCallback=function(P){var U=f;return function(){var B=f;f=U;try{return P.apply(this,arguments)}finally{f=B}}}})(Zp);(function(n){n.exports=Zp})(C_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=yt,sn=ju;function Y(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qp=new Set,ao={};function Sr(n,e){us(n,e),us(n+"Capture",e)}function us(n,e){for(ao[n]=e,n=0;n<e.length;n++)Qp.add(e[n])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,T_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ld={},ud={};function b_(n){return Xu.call(ud,n)?!0:Xu.call(ld,n)?!1:T_.test(n)?ud[n]=!0:(ld[n]=!0,!1)}function A_(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function L_(n,e,t,i){if(e===null||typeof e>"u"||A_(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ut(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){wt[n]=new Ut(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];wt[e]=new Ut(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){wt[n]=new Ut(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){wt[n]=new Ut(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){wt[n]=new Ut(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){wt[n]=new Ut(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){wt[n]=new Ut(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){wt[n]=new Ut(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){wt[n]=new Ut(n,5,!1,n.toLowerCase(),null,!1,!1)});var sf=/[\-:]([a-z])/g;function of(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(sf,of);wt[e]=new Ut(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(sf,of);wt[e]=new Ut(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(sf,of);wt[e]=new Ut(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){wt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!1,!1)});wt.xlinkHref=new Ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){wt[n]=new Ut(n,1,!1,n.toLowerCase(),null,!0,!0)});function af(n,e,t,i){var r=wt.hasOwnProperty(e)?wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L_(e,t,r,i)&&(t=null),i||r===null?b_(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var hi=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),lf=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),$u=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),cf=Symbol.for("react.memo"),yi=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),cd=Symbol.iterator;function Ls(n){return n===null||typeof n!="object"?null:(n=cd&&n[cd]||n["@@iterator"],typeof n=="function"?n:null)}var Qe=Object.assign,Ol;function js(n){if(Ol===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+n}var zl=!1;function Ul(n,e){if(!n||zl)return"";zl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?js(n):""}function R_(n){switch(n.tag){case 5:return js(n.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return n=Ul(n.type,!1),n;case 11:return n=Ul(n.type.render,!1),n;case 1:return n=Ul(n.type,!0),n;default:return""}}function Zu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Wr:return"Fragment";case Gr:return"Portal";case qu:return"Profiler";case lf:return"StrictMode";case $u:return"Suspense";case Yu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case em:return(n.displayName||"Context")+".Consumer";case Jp:return(n._context.displayName||"Context")+".Provider";case uf:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cf:return e=n.displayName||null,e!==null?e:Zu(n.type)||"Memo";case yi:e=n._payload,n=n._init;try{return Zu(n(e))}catch{}}return null}function P_(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===lf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function nm(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function D_(n){var e=nm(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Uo(n){n._valueTracker||(n._valueTracker=D_(n))}function im(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=nm(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Ua(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ku(n,e){var t=e.checked;return Qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function fd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Oi(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rm(n,e){e=e.checked,e!=null&&af(n,"checked",e,!1)}function Qu(n,e){rm(n,e);var t=Oi(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ju(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ju(n,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function dd(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ju(n,e,t){(e!=="number"||Ua(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Xs=Array.isArray;function ts(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Oi(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ec(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Qe({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function hd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Y(92));if(Xs(t)){if(1<t.length)throw Error(Y(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Oi(t)}}function sm(n,e){var t=Oi(e.value),i=Oi(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function pd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function om(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?om(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Bo,am=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Bo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function lo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I_=["Webkit","ms","Moz","O"];Object.keys(Qs).forEach(function(n){I_.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Qs[e]=Qs[n]})});function lm(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Qs.hasOwnProperty(n)&&Qs[n]?(""+e).trim():e+"px"}function um(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=lm(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var N_=Qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(n,e){if(e){if(N_[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function ic(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function ff(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sc=null,ns=null,is=null;function md(n){if(n=Do(n)){if(typeof sc!="function")throw Error(Y(280));var e=n.stateNode;e&&(e=ml(e),sc(n.stateNode,n.type,e))}}function cm(n){ns?is?is.push(n):is=[n]:ns=n}function fm(){if(ns){var n=ns,e=is;if(is=ns=null,md(n),e)for(n=0;n<e.length;n++)md(e[n])}}function dm(n,e){return n(e)}function hm(){}var Bl=!1;function pm(n,e,t){if(Bl)return n(e,t);Bl=!0;try{return dm(n,e,t)}finally{Bl=!1,(ns!==null||is!==null)&&(hm(),fm())}}function uo(n,e){var t=n.stateNode;if(t===null)return null;var i=ml(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Y(231,e,typeof t));return t}var oc=!1;if(ui)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){oc=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{oc=!1}function k_(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Js=!1,Ba=null,Va=!1,ac=null,F_={onError:function(n){Js=!0,Ba=n}};function O_(n,e,t,i,r,s,o,a,l){Js=!1,Ba=null,k_.apply(F_,arguments)}function z_(n,e,t,i,r,s,o,a,l){if(O_.apply(this,arguments),Js){if(Js){var u=Ba;Js=!1,Ba=null}else throw Error(Y(198));Va||(Va=!0,ac=u)}}function Mr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function mm(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function gd(n){if(Mr(n)!==n)throw Error(Y(188))}function U_(n){var e=n.alternate;if(!e){if(e=Mr(n),e===null)throw Error(Y(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return gd(r),n;if(s===i)return gd(r),e;s=s.sibling}throw Error(Y(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(t.alternate!==i)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?n:e}function gm(n){return n=U_(n),n!==null?_m(n):null}function _m(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=_m(n);if(e!==null)return e;n=n.sibling}return null}var vm=sn.unstable_scheduleCallback,_d=sn.unstable_cancelCallback,B_=sn.unstable_shouldYield,V_=sn.unstable_requestPaint,et=sn.unstable_now,G_=sn.unstable_getCurrentPriorityLevel,df=sn.unstable_ImmediatePriority,xm=sn.unstable_UserBlockingPriority,Ga=sn.unstable_NormalPriority,W_=sn.unstable_LowPriority,ym=sn.unstable_IdlePriority,fl=null,Vn=null;function H_(n){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(fl,n,void 0,(n.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:q_,j_=Math.log,X_=Math.LN2;function q_(n){return n>>>=0,n===0?32:31-(j_(n)/X_|0)|0}var Vo=64,Go=4194304;function qs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wa(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=qs(a):(s&=o,s!==0&&(i=qs(s)))}else o=t&~r,o!==0?i=qs(o):s!==0&&(i=qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-In(e),r=1<<t,i|=n[t],e&=~r;return i}function $_(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y_(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=$_(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function lc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sm(){var n=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),n}function Vl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ro(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-In(e),n[e]=t}function Z_(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-In(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function hf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-In(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ue=0;function Mm(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wm,pf,Em,Cm,Tm,uc=!1,Wo=[],Ai=null,Li=null,Ri=null,co=new Map,fo=new Map,wi=[],K_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(n,e){switch(n){case"focusin":case"focusout":Ai=null;break;case"dragenter":case"dragleave":Li=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ps(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Do(e),e!==null&&pf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Q_(n,e,t,i,r){switch(e){case"focusin":return Ai=Ps(Ai,n,e,t,i,r),!0;case"dragenter":return Li=Ps(Li,n,e,t,i,r),!0;case"mouseover":return Ri=Ps(Ri,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return co.set(s,Ps(co.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,Ps(fo.get(s)||null,n,e,t,i,r)),!0}return!1}function bm(n){var e=nr(n.target);if(e!==null){var t=Mr(e);if(t!==null){if(e=t.tag,e===13){if(e=mm(t),e!==null){n.blockedOn=e,Tm(n.priority,function(){Em(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ea(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=cc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);rc=i,t.target.dispatchEvent(i),rc=null}else return e=Do(t),e!==null&&pf(e),n.blockedOn=t,!1;e.shift()}return!0}function xd(n,e,t){Ea(n)&&t.delete(e)}function J_(){uc=!1,Ai!==null&&Ea(Ai)&&(Ai=null),Li!==null&&Ea(Li)&&(Li=null),Ri!==null&&Ea(Ri)&&(Ri=null),co.forEach(xd),fo.forEach(xd)}function Ds(n,e){n.blockedOn===e&&(n.blockedOn=null,uc||(uc=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,J_)))}function ho(n){function e(r){return Ds(r,n)}if(0<Wo.length){Ds(Wo[0],n);for(var t=1;t<Wo.length;t++){var i=Wo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ai!==null&&Ds(Ai,n),Li!==null&&Ds(Li,n),Ri!==null&&Ds(Ri,n),co.forEach(e),fo.forEach(e),t=0;t<wi.length;t++)i=wi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<wi.length&&(t=wi[0],t.blockedOn===null);)bm(t),t.blockedOn===null&&wi.shift()}var rs=hi.ReactCurrentBatchConfig,Ha=!0;function ev(n,e,t,i){var r=Ue,s=rs.transition;rs.transition=null;try{Ue=1,mf(n,e,t,i)}finally{Ue=r,rs.transition=s}}function tv(n,e,t,i){var r=Ue,s=rs.transition;rs.transition=null;try{Ue=4,mf(n,e,t,i)}finally{Ue=r,rs.transition=s}}function mf(n,e,t,i){if(Ha){var r=cc(n,e,t,i);if(r===null)Kl(n,e,i,ja,t),vd(n,i);else if(Q_(r,n,e,t,i))i.stopPropagation();else if(vd(n,i),e&4&&-1<K_.indexOf(n)){for(;r!==null;){var s=Do(r);if(s!==null&&wm(s),s=cc(n,e,t,i),s===null&&Kl(n,e,i,ja,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Kl(n,e,i,null,t)}}var ja=null;function cc(n,e,t,i){if(ja=null,n=ff(i),n=nr(n),n!==null)if(e=Mr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=mm(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ja=n,null}function Am(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(G_()){case df:return 1;case xm:return 4;case Ga:case W_:return 16;case ym:return 536870912;default:return 16}default:return 16}}var Ci=null,gf=null,Ca=null;function Lm(){if(Ca)return Ca;var n,e=gf,t=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ca=r.slice(n,1<i?1-i:void 0)}function Ta(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function yd(){return!1}function an(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:yd,this.isPropagationStopped=yd,this}return Qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_f=an(Ms),Po=Qe({},Ms,{view:0,detail:0}),nv=an(Po),Gl,Wl,Is,dl=Qe({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Is&&(Is&&n.type==="mousemove"?(Gl=n.screenX-Is.screenX,Wl=n.screenY-Is.screenY):Wl=Gl=0,Is=n),Gl)},movementY:function(n){return"movementY"in n?n.movementY:Wl}}),Sd=an(dl),iv=Qe({},dl,{dataTransfer:0}),rv=an(iv),sv=Qe({},Po,{relatedTarget:0}),Hl=an(sv),ov=Qe({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),av=an(ov),lv=Qe({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uv=an(lv),cv=Qe({},Ms,{data:0}),Md=an(cv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=hv[n])?!!e[n]:!1}function vf(){return pv}var mv=Qe({},Po,{key:function(n){if(n.key){var e=fv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(n){return n.type==="keypress"?Ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gv=an(mv),_v=Qe({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=an(_v),vv=Qe({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),xv=an(vv),yv=Qe({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=an(yv),Mv=Qe({},dl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=an(Mv),Ev=[9,13,27,32],xf=ui&&"CompositionEvent"in window,eo=null;ui&&"documentMode"in document&&(eo=document.documentMode);var Cv=ui&&"TextEvent"in window&&!eo,Rm=ui&&(!xf||eo&&8<eo&&11>=eo),Ed=String.fromCharCode(32),Cd=!1;function Pm(n,e){switch(n){case"keyup":return Ev.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hr=!1;function Tv(n,e){switch(n){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Cd=!0,Ed);case"textInput":return n=e.data,n===Ed&&Cd?null:n;default:return null}}function bv(n,e){if(Hr)return n==="compositionend"||!xf&&Pm(n,e)?(n=Lm(),Ca=gf=Ci=null,Hr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rm&&e.locale!=="ko"?null:e.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Av[n.type]:e==="textarea"}function Im(n,e,t,i){cm(i),e=Xa(e,"onChange"),0<e.length&&(t=new _f("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var to=null,po=null;function Lv(n){Hm(n,0)}function hl(n){var e=qr(n);if(im(e))return n}function Rv(n,e){if(n==="change")return e}var Nm=!1;if(ui){var jl;if(ui){var Xl="oninput"in document;if(!Xl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Xl=typeof bd.oninput=="function"}jl=Xl}else jl=!1;Nm=jl&&(!document.documentMode||9<document.documentMode)}function Ad(){to&&(to.detachEvent("onpropertychange",km),po=to=null)}function km(n){if(n.propertyName==="value"&&hl(po)){var e=[];Im(e,po,n,ff(n)),pm(Lv,e)}}function Pv(n,e,t){n==="focusin"?(Ad(),to=e,po=t,to.attachEvent("onpropertychange",km)):n==="focusout"&&Ad()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(po)}function Iv(n,e){if(n==="click")return hl(e)}function Nv(n,e){if(n==="input"||n==="change")return hl(e)}function kv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var kn=typeof Object.is=="function"?Object.is:kv;function mo(n,e){if(kn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Xu.call(e,r)||!kn(n[r],e[r]))return!1}return!0}function Ld(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rd(n,e){var t=Ld(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ld(t)}}function Fm(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Fm(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Om(){for(var n=window,e=Ua();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Ua(n.document)}return e}function yf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Fv(n){var e=Om(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Fm(t.ownerDocument.documentElement,t)){if(i!==null&&yf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Rd(t,s);var o=Rd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ov=ui&&"documentMode"in document&&11>=document.documentMode,jr=null,fc=null,no=null,dc=!1;function Pd(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dc||jr==null||jr!==Ua(i)||(i=jr,"selectionStart"in i&&yf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),no&&mo(no,i)||(no=i,i=Xa(fc,"onSelect"),0<i.length&&(e=new _f("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=jr)))}function jo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Xr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},ql={},zm={};ui&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function pl(n){if(ql[n])return ql[n];if(!Xr[n])return n;var e=Xr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in zm)return ql[n]=e[t];return n}var Um=pl("animationend"),Bm=pl("animationiteration"),Vm=pl("animationstart"),Gm=pl("transitionend"),Wm=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(n,e){Wm.set(n,e),Sr(e,[n])}for(var $l=0;$l<Dd.length;$l++){var Yl=Dd[$l],zv=Yl.toLowerCase(),Uv=Yl[0].toUpperCase()+Yl.slice(1);Bi(zv,"on"+Uv)}Bi(Um,"onAnimationEnd");Bi(Bm,"onAnimationIteration");Bi(Vm,"onAnimationStart");Bi("dblclick","onDoubleClick");Bi("focusin","onFocus");Bi("focusout","onBlur");Bi(Gm,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Id(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,z_(i,e,void 0,n),n.currentTarget=null}function Hm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Id(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Id(r,a,u),s=l}}}if(Va)throw n=ac,Va=!1,ac=null,n}function We(n,e){var t=e[_c];t===void 0&&(t=e[_c]=new Set);var i=n+"__bubble";t.has(i)||(jm(e,n,2,!1),t.add(i))}function Zl(n,e,t){var i=0;e&&(i|=4),jm(t,n,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function go(n){if(!n[Xo]){n[Xo]=!0,Qp.forEach(function(t){t!=="selectionchange"&&(Bv.has(t)||Zl(t,!1,n),Zl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,Zl("selectionchange",!1,e))}}function jm(n,e,t,i){switch(Am(e)){case 1:var r=ev;break;case 4:r=tv;break;default:r=mf}t=r.bind(null,e,t,n),r=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Kl(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=nr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pm(function(){var u=s,c=ff(t),d=[];e:{var f=Wm.get(n);if(f!==void 0){var m=_f,x=n;switch(n){case"keypress":if(Ta(t)===0)break e;case"keydown":case"keyup":m=gv;break;case"focusin":x="focus",m=Hl;break;case"focusout":x="blur",m=Hl;break;case"beforeblur":case"afterblur":m=Hl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xv;break;case Um:case Bm:case Vm:m=av;break;case Gm:m=Sv;break;case"scroll":m=nv;break;case"wheel":m=wv;break;case"copy":case"cut":case"paste":m=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wd}var h=(e&4)!==0,p=!h&&n==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var _=u,v;_!==null;){v=_;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=uo(_,g),S!=null&&h.push(_o(_,S,v)))),p)break;_=_.return}0<h.length&&(f=new m(f,x,null,t,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==rc&&(x=t.relatedTarget||t.fromElement)&&(nr(x)||x[ci]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?nr(x):null,x!==null&&(p=Mr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(h=Sd,S="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(h=wd,S="onPointerLeave",g="onPointerEnter",_="pointer"),p=m==null?f:qr(m),v=x==null?f:qr(x),f=new h(S,_+"leave",m,t,c),f.target=p,f.relatedTarget=v,S=null,nr(c)===u&&(h=new h(g,_+"enter",x,t,c),h.target=v,h.relatedTarget=p,S=h),p=S,m&&x)t:{for(h=m,g=x,_=0,v=h;v;v=Er(v))_++;for(v=0,S=g;S;S=Er(S))v++;for(;0<_-v;)h=Er(h),_--;for(;0<v-_;)g=Er(g),v--;for(;_--;){if(h===g||g!==null&&h===g.alternate)break t;h=Er(h),g=Er(g)}h=null}else h=null;m!==null&&Nd(d,f,m,h,!1),x!==null&&p!==null&&Nd(d,p,x,h,!0)}}e:{if(f=u?qr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var M=Rv;else if(Td(f))if(Nm)M=Nv;else{M=Dv;var b=Pv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=Iv);if(M&&(M=M(n,u))){Im(d,M,t,c);break e}b&&b(n,f,u),n==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Ju(f,"number",f.value)}switch(b=u?qr(u):window,n){case"focusin":(Td(b)||b.contentEditable==="true")&&(jr=b,fc=u,no=null);break;case"focusout":no=fc=jr=null;break;case"mousedown":dc=!0;break;case"contextmenu":case"mouseup":case"dragend":dc=!1,Pd(d,t,c);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Pd(d,t,c)}var A;if(xf)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Hr?Pm(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Rm&&t.locale!=="ko"&&(Hr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Hr&&(A=Lm()):(Ci=c,gf="value"in Ci?Ci.value:Ci.textContent,Hr=!0)),b=Xa(u,y),0<b.length&&(y=new Md(y,n,null,t,c),d.push({event:y,listeners:b}),A?y.data=A:(A=Dm(t),A!==null&&(y.data=A)))),(A=Cv?Tv(n,t):bv(n,t))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(c=new Md("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}Hm(d,e)})}function _o(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Xa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=uo(n,t),s!=null&&i.unshift(_o(n,s,r)),s=uo(n,e),s!=null&&i.push(_o(n,s,r))),n=n.return}return i}function Er(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nd(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=uo(t,s),l!=null&&o.unshift(_o(t,l,a))):r||(l=uo(t,s),l!=null&&o.push(_o(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Vv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function kd(n){return(typeof n=="string"?n:""+n).replace(Vv,`
`).replace(Gv,"")}function qo(n,e,t){if(e=kd(e),kd(n)!==e&&t)throw Error(Y(425))}function qa(){}var hc=null,pc=null;function mc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(n){return Fd.resolve(null).then(n).catch(jv)}:gc;function jv(n){setTimeout(function(){throw n})}function Ql(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ho(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ho(e)}function Pi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Od(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Bn="__reactFiber$"+ws,vo="__reactProps$"+ws,ci="__reactContainer$"+ws,_c="__reactEvents$"+ws,Xv="__reactListeners$"+ws,qv="__reactHandles$"+ws;function nr(n){var e=n[Bn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ci]||t[Bn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Od(n);n!==null;){if(t=n[Bn])return t;n=Od(n)}return e}n=t,t=n.parentNode}return null}function Do(n){return n=n[Bn]||n[ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Y(33))}function ml(n){return n[vo]||null}var vc=[],$r=-1;function Vi(n){return{current:n}}function je(n){0>$r||(n.current=vc[$r],vc[$r]=null,$r--)}function Ve(n,e){$r++,vc[$r]=n.current,n.current=e}var zi={},Rt=Vi(zi),Gt=Vi(!1),dr=zi;function cs(n,e){var t=n.type.contextTypes;if(!t)return zi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Wt(n){return n=n.childContextTypes,n!=null}function $a(){je(Gt),je(Rt)}function zd(n,e,t){if(Rt.current!==zi)throw Error(Y(168));Ve(Rt,e),Ve(Gt,t)}function Xm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,P_(n)||"Unknown",r));return Qe({},t,i)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zi,dr=Rt.current,Ve(Rt,n),Ve(Gt,Gt.current),!0}function Ud(n,e,t){var i=n.stateNode;if(!i)throw Error(Y(169));t?(n=Xm(n,e,dr),i.__reactInternalMemoizedMergedChildContext=n,je(Gt),je(Rt),Ve(Rt,n)):je(Gt),Ve(Gt,t)}var ni=null,gl=!1,Jl=!1;function qm(n){ni===null?ni=[n]:ni.push(n)}function $v(n){gl=!0,qm(n)}function Gi(){if(!Jl&&ni!==null){Jl=!0;var n=0,e=Ue;try{var t=ni;for(Ue=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ni=null,gl=!1}catch(r){throw ni!==null&&(ni=ni.slice(n+1)),vm(df,Gi),r}finally{Ue=e,Jl=!1}}return null}var Yr=[],Zr=0,Za=null,Ka=0,dn=[],hn=0,hr=null,ri=1,si="";function Ki(n,e){Yr[Zr++]=Ka,Yr[Zr++]=Za,Za=n,Ka=e}function $m(n,e,t){dn[hn++]=ri,dn[hn++]=si,dn[hn++]=hr,hr=n;var i=ri;n=si;var r=32-In(i)-1;i&=~(1<<r),t+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ri=1<<32-In(e)+r|t<<r|i,si=s+n}else ri=1<<s|t<<r|i,si=n}function Sf(n){n.return!==null&&(Ki(n,1),$m(n,1,0))}function Mf(n){for(;n===Za;)Za=Yr[--Zr],Yr[Zr]=null,Ka=Yr[--Zr],Yr[Zr]=null;for(;n===hr;)hr=dn[--hn],dn[hn]=null,si=dn[--hn],dn[hn]=null,ri=dn[--hn],dn[hn]=null}var tn=null,Jt=null,$e=!1,Ln=null;function Ym(n,e){var t=_n(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Bd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,tn=n,Jt=Pi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,tn=n,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=hr!==null?{id:ri,overflow:si}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=_n(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,tn=n,Jt=null,!0):!1;default:return!1}}function xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yc(n){if($e){var e=Jt;if(e){var t=e;if(!Bd(n,e)){if(xc(n))throw Error(Y(418));e=Pi(t.nextSibling);var i=tn;e&&Bd(n,e)?Ym(i,t):(n.flags=n.flags&-4097|2,$e=!1,tn=n)}}else{if(xc(n))throw Error(Y(418));n.flags=n.flags&-4097|2,$e=!1,tn=n}}}function Vd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;tn=n}function $o(n){if(n!==tn)return!1;if(!$e)return Vd(n),$e=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!mc(n.type,n.memoizedProps)),e&&(e=Jt)){if(xc(n))throw Zm(),Error(Y(418));for(;e;)Ym(n,e),e=Pi(e.nextSibling)}if(Vd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Y(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Jt=Pi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Jt=null}}else Jt=tn?Pi(n.stateNode.nextSibling):null;return!0}function Zm(){for(var n=Jt;n;)n=Pi(n.nextSibling)}function fs(){Jt=tn=null,$e=!1}function wf(n){Ln===null?Ln=[n]:Ln.push(n)}var Yv=hi.ReactCurrentBatchConfig;function Tn(n,e){if(n&&n.defaultProps){e=Qe({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Qa=Vi(null),Ja=null,Kr=null,Ef=null;function Cf(){Ef=Kr=Ja=null}function Tf(n){var e=Qa.current;je(Qa),n._currentValue=e}function Sc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ss(n,e){Ja=n,Ef=Kr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Vt=!0),n.firstContext=null)}function xn(n){var e=n._currentValue;if(Ef!==n)if(n={context:n,memoizedValue:e,next:null},Kr===null){if(Ja===null)throw Error(Y(308));Kr=n,Ja.dependencies={lanes:0,firstContext:n}}else Kr=Kr.next=n;return e}var ir=null;function bf(n){ir===null?ir=[n]:ir.push(n)}function Km(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,bf(e)):(t.next=r.next,r.next=t),e.interleaved=t,fi(n,i)}function fi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Si=!1;function Af(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ai(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ne&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,fi(n,t)}return r=i.interleaved,r===null?(e.next=e,bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,fi(n,t)}function ba(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hf(n,t)}}function Gd(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function el(n,e,t,i){var r=n.updateQueue;Si=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,h=a;switch(f=e,m=t,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=Qe({},d,f);break e;case 2:Si=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);mr|=o,n.lanes=o,n.memoizedState=d}}function Wd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var Jm=new Kp.Component().refs;function Mc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Qe({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var _l={isMounted:function(n){return(n=n._reactInternals)?Mr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ot(),r=Ni(n),s=ai(i,r);s.payload=e,t!=null&&(s.callback=t),e=Di(n,s,r),e!==null&&(Nn(e,n,r,i),ba(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ot(),r=Ni(n),s=ai(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Di(n,s,r),e!==null&&(Nn(e,n,r,i),ba(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ot(),i=Ni(n),r=ai(t,i);r.tag=2,e!=null&&(r.callback=e),e=Di(n,r,i),e!==null&&(Nn(e,n,i,t),ba(e,n,i))}};function Hd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(t,i)||!mo(r,s):!0}function eg(n,e,t){var i=!1,r=zi,s=e.contextType;return typeof s=="object"&&s!==null?s=xn(s):(r=Wt(e)?dr:Rt.current,i=e.contextTypes,s=(i=i!=null)?cs(n,r):zi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function jd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&_l.enqueueReplaceState(e,e.state,null)}function wc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Jm,Af(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=xn(s):(s=Wt(e)?dr:Rt.current,r.context=cs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_l.enqueueReplaceState(r,r.state,null),el(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var i=t.stateNode}if(!i)throw Error(Y(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Jm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,n))}return n}function Yo(n,e){throw n=Object.prototype.toString.call(e),Error(Y(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Xd(n){var e=n._init;return e(n._payload)}function tg(n){function e(g,_){if(n){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=ki(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,S){return _===null||_.tag!==6?(_=ou(v,g.mode,S),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,S){var M=v.type;return M===Wr?c(g,_,v.props.children,S,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===yi&&Xd(M)===_.type)?(S=r(_,v.props),S.ref=Ns(g,_,v),S.return=g,S):(S=Ia(v.type,v.key,v.props,null,g.mode,S),S.ref=Ns(g,_,v),S.return=g,S)}function u(g,_,v,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=au(v,g.mode,S),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,S,M){return _===null||_.tag!==7?(_=lr(v,g.mode,S,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function d(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ou(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zo:return v=Ia(_.type,_.key,_.props,null,g.mode,v),v.ref=Ns(g,null,_),v.return=g,v;case Gr:return _=au(_,g.mode,v),_.return=g,_;case yi:var S=_._init;return d(g,S(_._payload),v)}if(Xs(_)||Ls(_))return _=lr(_,g.mode,v,null),_.return=g,_;Yo(g,_)}return null}function f(g,_,v,S){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(g,_,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:return v.key===M?l(g,_,v,S):null;case Gr:return v.key===M?u(g,_,v,S):null;case yi:return M=v._init,f(g,_,M(v._payload),S)}if(Xs(v)||Ls(v))return M!==null?null:c(g,_,v,S,null);Yo(g,v)}return null}function m(g,_,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,a(_,g,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zo:return g=g.get(S.key===null?v:S.key)||null,l(_,g,S,M);case Gr:return g=g.get(S.key===null?v:S.key)||null,u(_,g,S,M);case yi:var b=S._init;return m(g,_,v,b(S._payload),M)}if(Xs(S)||Ls(S))return g=g.get(v)||null,c(_,g,S,M,null);Yo(_,S)}return null}function x(g,_,v,S){for(var M=null,b=null,A=_,y=_=0,T=null;A!==null&&y<v.length;y++){A.index>y?(T=A,A=null):T=A.sibling;var L=f(g,A,v[y],S);if(L===null){A===null&&(A=T);break}n&&A&&L.alternate===null&&e(g,A),_=s(L,_,y),b===null?M=L:b.sibling=L,b=L,A=T}if(y===v.length)return t(g,A),$e&&Ki(g,y),M;if(A===null){for(;y<v.length;y++)A=d(g,v[y],S),A!==null&&(_=s(A,_,y),b===null?M=A:b.sibling=A,b=A);return $e&&Ki(g,y),M}for(A=i(g,A);y<v.length;y++)T=m(A,g,y,v[y],S),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?y:T.key),_=s(T,_,y),b===null?M=T:b.sibling=T,b=T);return n&&A.forEach(function($){return e(g,$)}),$e&&Ki(g,y),M}function h(g,_,v,S){var M=Ls(v);if(typeof M!="function")throw Error(Y(150));if(v=M.call(v),v==null)throw Error(Y(151));for(var b=M=null,A=_,y=_=0,T=null,L=v.next();A!==null&&!L.done;y++,L=v.next()){A.index>y?(T=A,A=null):T=A.sibling;var $=f(g,A,L.value,S);if($===null){A===null&&(A=T);break}n&&A&&$.alternate===null&&e(g,A),_=s($,_,y),b===null?M=$:b.sibling=$,b=$,A=T}if(L.done)return t(g,A),$e&&Ki(g,y),M;if(A===null){for(;!L.done;y++,L=v.next())L=d(g,L.value,S),L!==null&&(_=s(L,_,y),b===null?M=L:b.sibling=L,b=L);return $e&&Ki(g,y),M}for(A=i(g,A);!L.done;y++,L=v.next())L=m(A,g,y,L.value,S),L!==null&&(n&&L.alternate!==null&&A.delete(L.key===null?y:L.key),_=s(L,_,y),b===null?M=L:b.sibling=L,b=L);return n&&A.forEach(function(Z){return e(g,Z)}),$e&&Ki(g,y),M}function p(g,_,v,S){if(typeof v=="object"&&v!==null&&v.type===Wr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case zo:e:{for(var M=v.key,b=_;b!==null;){if(b.key===M){if(M=v.type,M===Wr){if(b.tag===7){t(g,b.sibling),_=r(b,v.props.children),_.return=g,g=_;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===yi&&Xd(M)===b.type){t(g,b.sibling),_=r(b,v.props),_.ref=Ns(g,b,v),_.return=g,g=_;break e}t(g,b);break}else e(g,b);b=b.sibling}v.type===Wr?(_=lr(v.props.children,g.mode,S,v.key),_.return=g,g=_):(S=Ia(v.type,v.key,v.props,null,g.mode,S),S.ref=Ns(g,_,v),S.return=g,g=S)}return o(g);case Gr:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=au(v,g.mode,S),_.return=g,g=_}return o(g);case yi:return b=v._init,p(g,_,b(v._payload),S)}if(Xs(v))return x(g,_,v,S);if(Ls(v))return h(g,_,v,S);Yo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,v),_.return=g,g=_):(t(g,_),_=ou(v,g.mode,S),_.return=g,g=_),o(g)):t(g,_)}return p}var ds=tg(!0),ng=tg(!1),Io={},Gn=Vi(Io),xo=Vi(Io),yo=Vi(Io);function rr(n){if(n===Io)throw Error(Y(174));return n}function Lf(n,e){switch(Ve(yo,e),Ve(xo,n),Ve(Gn,Io),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=tc(e,n)}je(Gn),Ve(Gn,e)}function hs(){je(Gn),je(xo),je(yo)}function ig(n){rr(yo.current);var e=rr(Gn.current),t=tc(e,n.type);e!==t&&(Ve(xo,n),Ve(Gn,t))}function Rf(n){xo.current===n&&(je(Gn),je(xo))}var Ye=Vi(0);function tl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function Pf(){for(var n=0;n<eu.length;n++)eu[n]._workInProgressVersionPrimary=null;eu.length=0}var Aa=hi.ReactCurrentDispatcher,tu=hi.ReactCurrentBatchConfig,pr=0,Ke=null,lt=null,gt=null,nl=!1,io=!1,So=0,Zv=0;function Tt(){throw Error(Y(321))}function Df(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!kn(n[t],e[t]))return!1;return!0}function If(n,e,t,i,r,s){if(pr=s,Ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=n===null||n.memoizedState===null?ex:tx,n=t(i,r),io){s=0;do{if(io=!1,So=0,25<=s)throw Error(Y(301));s+=1,gt=lt=null,e.updateQueue=null,Aa.current=nx,n=t(i,r)}while(io)}if(Aa.current=il,e=lt!==null&&lt.next!==null,pr=0,gt=lt=Ke=null,nl=!1,e)throw Error(Y(300));return n}function Nf(){var n=So!==0;return So=0,n}function On(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ke.memoizedState=gt=n:gt=gt.next=n,gt}function yn(){if(lt===null){var n=Ke.alternate;n=n!==null?n.memoizedState:null}else n=lt.next;var e=gt===null?Ke.memoizedState:gt.next;if(e!==null)gt=e,lt=n;else{if(n===null)throw Error(Y(310));lt=n,n={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},gt===null?Ke.memoizedState=gt=n:gt=gt.next=n}return gt}function Mo(n,e){return typeof e=="function"?e(n):e}function nu(n){var e=yn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ke.lanes|=c,mr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Vt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Ke.lanes|=s,mr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function iu(n){var e=yn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function rg(){}function sg(n,e){var t=Ke,i=yn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Vt=!0),i=i.queue,kf(lg.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(t.flags|=2048,wo(9,ag.bind(null,t,i,r,e),void 0,null),_t===null)throw Error(Y(349));pr&30||og(t,e,r)}return r}function og(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ag(n,e,t,i){e.value=t,e.getSnapshot=i,ug(e)&&cg(n)}function lg(n,e,t){return t(function(){ug(e)&&cg(n)})}function ug(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!kn(n,t)}catch{return!0}}function cg(n){var e=fi(n,1);e!==null&&Nn(e,n,1,-1)}function qd(n){var e=On();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:n},e.queue=n,n=n.dispatch=Jv.bind(null,Ke,n),[e.memoizedState,n]}function wo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Ke.updateQueue,e===null?(e={lastEffect:null,stores:null},Ke.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function fg(){return yn().memoizedState}function La(n,e,t,i){var r=On();Ke.flags|=n,r.memoizedState=wo(1|e,t,void 0,i===void 0?null:i)}function vl(n,e,t,i){var r=yn();i=i===void 0?null:i;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,i!==null&&Df(i,o.deps)){r.memoizedState=wo(e,t,s,i);return}}Ke.flags|=n,r.memoizedState=wo(1|e,t,s,i)}function $d(n,e){return La(8390656,8,n,e)}function kf(n,e){return vl(2048,8,n,e)}function dg(n,e){return vl(4,2,n,e)}function hg(n,e){return vl(4,4,n,e)}function pg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function mg(n,e,t){return t=t!=null?t.concat([n]):null,vl(4,4,pg.bind(null,e,n),t)}function Ff(){}function gg(n,e){var t=yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function _g(n,e){var t=yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Df(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function vg(n,e,t){return pr&21?(kn(t,e)||(t=Sm(),Ke.lanes|=t,mr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Vt=!0),n.memoizedState=t)}function Kv(n,e){var t=Ue;Ue=t!==0&&4>t?t:4,n(!0);var i=tu.transition;tu.transition={};try{n(!1),e()}finally{Ue=t,tu.transition=i}}function xg(){return yn().memoizedState}function Qv(n,e,t){var i=Ni(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},yg(n))Sg(e,t);else if(t=Km(n,e,t,i),t!==null){var r=Ot();Nn(t,n,i,r),Mg(t,e,i)}}function Jv(n,e,t){var i=Ni(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(yg(n))Sg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,bf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Km(n,e,r,i),t!==null&&(r=Ot(),Nn(t,n,i,r),Mg(t,e,i))}}function yg(n){var e=n.alternate;return n===Ke||e!==null&&e===Ke}function Sg(n,e){io=nl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Mg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,hf(n,t)}}var il={readContext:xn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},ex={readContext:xn,useCallback:function(n,e){return On().memoizedState=[n,e===void 0?null:e],n},useContext:xn,useEffect:$d,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,La(4194308,4,pg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return La(4194308,4,n,e)},useInsertionEffect:function(n,e){return La(4,2,n,e)},useMemo:function(n,e){var t=On();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=On();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Qv.bind(null,Ke,n),[i.memoizedState,n]},useRef:function(n){var e=On();return n={current:n},e.memoizedState=n},useState:qd,useDebugValue:Ff,useDeferredValue:function(n){return On().memoizedState=n},useTransition:function(){var n=qd(!1),e=n[0];return n=Kv.bind(null,n[1]),On().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Ke,r=On();if($e){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=e(),_t===null)throw Error(Y(349));pr&30||og(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$d(lg.bind(null,i,s,n),[n]),i.flags|=2048,wo(9,ag.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=On(),e=_t.identifierPrefix;if($e){var t=si,i=ri;t=(i&~(1<<32-In(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=So++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Zv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},tx={readContext:xn,useCallback:gg,useContext:xn,useEffect:kf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:nu,useRef:fg,useState:function(){return nu(Mo)},useDebugValue:Ff,useDeferredValue:function(n){var e=yn();return vg(e,lt.memoizedState,n)},useTransition:function(){var n=nu(Mo)[0],e=yn().memoizedState;return[n,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1},nx={readContext:xn,useCallback:gg,useContext:xn,useEffect:kf,useImperativeHandle:mg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:_g,useReducer:iu,useRef:fg,useState:function(){return iu(Mo)},useDebugValue:Ff,useDeferredValue:function(n){var e=yn();return lt===null?e.memoizedState=n:vg(e,lt.memoizedState,n)},useTransition:function(){var n=iu(Mo)[0],e=yn().memoizedState;return[n,e]},useMutableSource:rg,useSyncExternalStore:sg,useId:xg,unstable_isNewReconciler:!1};function ps(n,e){try{var t="",i=e;do t+=R_(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function ru(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ec(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ix=typeof WeakMap=="function"?WeakMap:Map;function wg(n,e,t){t=ai(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){sl||(sl=!0,Nc=i),Ec(n,e)},t}function Eg(n,e,t){t=ai(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ec(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ec(n,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Yd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new ix;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=_x.bind(null,n,e,t),e.then(n,n))}function Zd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Kd(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ai(-1,1),e.tag=2,Di(t,e,1))),t.lanes|=1),n)}var rx=hi.ReactCurrentOwner,Vt=!1;function kt(n,e,t,i){e.child=n===null?ng(e,null,t,i):ds(e,n.child,t,i)}function Qd(n,e,t,i,r){t=t.render;var s=e.ref;return ss(e,r),i=If(n,e,t,i,s,r),t=Nf(),n!==null&&!Vt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,di(n,e,r)):($e&&t&&Sf(e),e.flags|=1,kt(n,e,i,r),e.child)}function Jd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Hf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Cg(n,e,s,i,r)):(n=Ia(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:mo,t(o,i)&&n.ref===e.ref)return di(n,e,r)}return e.flags|=1,n=ki(s,i),n.ref=e.ref,n.return=e,e.child=n}function Cg(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mo(s,i)&&n.ref===e.ref)if(Vt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Vt=!0);else return e.lanes=n.lanes,di(n,e,r)}return Cc(n,e,t,i,r)}function Tg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Jr,Kt),Kt|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ve(Jr,Kt),Kt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ve(Jr,Kt),Kt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ve(Jr,Kt),Kt|=i;return kt(n,e,r,t),e.child}function bg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Cc(n,e,t,i,r){var s=Wt(t)?dr:Rt.current;return s=cs(e,s),ss(e,r),t=If(n,e,t,i,s,r),i=Nf(),n!==null&&!Vt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,di(n,e,r)):($e&&i&&Sf(e),e.flags|=1,kt(n,e,t,r),e.child)}function eh(n,e,t,i,r){if(Wt(t)){var s=!0;Ya(e)}else s=!1;if(ss(e,r),e.stateNode===null)Ra(n,e),eg(e,t,i),wc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=Wt(t)?dr:Rt.current,u=cs(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&jd(e,o,i,u),Si=!1;var f=e.memoizedState;o.state=f,el(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Gt.current||Si?(typeof c=="function"&&(Mc(e,t,c,i),l=e.memoizedState),(a=Si||Hd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Qm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=xn(l):(l=Wt(t)?dr:Rt.current,l=cs(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&jd(e,o,i,l),Si=!1,f=e.memoizedState,o.state=f,el(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||Gt.current||Si?(typeof m=="function"&&(Mc(e,t,m,i),x=e.memoizedState),(u=Si||Hd(e,t,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Tc(n,e,t,i,s,r)}function Tc(n,e,t,i,r,s){bg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ud(e,t,!1),di(n,e,s);i=e.stateNode,rx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ds(e,n.child,null,s),e.child=ds(e,null,a,s)):kt(n,e,a,s),e.memoizedState=i.state,r&&Ud(e,t,!0),e.child}function Ag(n){var e=n.stateNode;e.pendingContext?zd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&zd(n,e.context,!1),Lf(n,e.containerInfo)}function th(n,e,t,i,r){return fs(),wf(r),e.flags|=256,kt(n,e,t,i),e.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Ac(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lg(n,e,t){var i=e.pendingProps,r=Ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ve(Ye,r&1),n===null)return yc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sl(o,i,0,null),n=lr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ac(t),e.memoizedState=bc,n):Of(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sx(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ki(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ki(a,s):(s=lr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ac(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=bc,i}return s=n.child,n=s.sibling,i=ki(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Of(n,e){return e=Sl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Zo(n,e,t,i){return i!==null&&wf(i),ds(e,n.child,null,t),n=Of(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function sx(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=ru(Error(Y(422))),Zo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sl({mode:"visible",children:i.children},r,0,null),s=lr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ds(e,n.child,null,o),e.child.memoizedState=Ac(o),e.memoizedState=bc,s);if(!(e.mode&1))return Zo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=ru(s,i,void 0),Zo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Vt||a){if(i=_t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,fi(n,r),Nn(i,n,r,-1))}return Wf(),i=ru(Error(Y(421))),Zo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=vx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Jt=Pi(r.nextSibling),tn=e,$e=!0,Ln=null,n!==null&&(dn[hn++]=ri,dn[hn++]=si,dn[hn++]=hr,ri=n.id,si=n.overflow,hr=e),e=Of(e,i.children),e.flags|=4096,e)}function nh(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Sc(n.return,e,t)}function su(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Rg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(kt(n,e,i.children,t),i=Ye.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nh(n,t,e);else if(n.tag===19)nh(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ve(Ye,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&tl(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),su(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&tl(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}su(e,!0,t,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function di(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),mr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Y(153));if(e.child!==null){for(n=e.child,t=ki(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ki(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function ox(n,e,t){switch(e.tag){case 3:Ag(e),fs();break;case 5:ig(e);break;case 1:Wt(e.type)&&Ya(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ve(Qa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ve(Ye,Ye.current&1),e.flags|=128,null):t&e.child.childLanes?Lg(n,e,t):(Ve(Ye,Ye.current&1),n=di(n,e,t),n!==null?n.sibling:null);Ve(Ye,Ye.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Rg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ve(Ye,Ye.current),i)break;return null;case 22:case 23:return e.lanes=0,Tg(n,e,t)}return di(n,e,t)}var Pg,Lc,Dg,Ig;Pg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Lc=function(){};Dg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,rr(Gn.current);var s=null;switch(t){case"input":r=Ku(n,r),i=Ku(n,i),s=[];break;case"select":r=Qe({},r,{value:void 0}),i=Qe({},i,{value:void 0}),s=[];break;case"textarea":r=ec(n,r),i=ec(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=qa)}nc(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&We("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ig=function(n,e,t,i){t!==i&&(e.flags|=4)};function ks(n,e){if(!$e)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function bt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function ax(n,e,t){var i=e.pendingProps;switch(Mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return Wt(e.type)&&$a(),bt(e),null;case 3:return i=e.stateNode,hs(),je(Gt),je(Rt),Pf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&($o(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ln!==null&&(Oc(Ln),Ln=null))),Lc(n,e),bt(e),null;case 5:Rf(e);var r=rr(yo.current);if(t=e.type,n!==null&&e.stateNode!=null)Dg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return bt(e),null}if(n=rr(Gn.current),$o(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[vo]=s,n=(e.mode&1)!==0,t){case"dialog":We("cancel",i),We("close",i);break;case"iframe":case"object":case"embed":We("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)We($s[r],i);break;case"source":We("error",i);break;case"img":case"image":case"link":We("error",i),We("load",i);break;case"details":We("toggle",i);break;case"input":fd(i,s),We("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},We("invalid",i);break;case"textarea":hd(i,s),We("invalid",i)}nc(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,a,n),r=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&We("scroll",i)}switch(t){case"input":Uo(i),dd(i,s,!0);break;case"textarea":Uo(i),pd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qa)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=om(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Bn]=e,n[vo]=i,Pg(n,e,!1,!1),e.stateNode=n;e:{switch(o=ic(t,i),t){case"dialog":We("cancel",n),We("close",n),r=i;break;case"iframe":case"object":case"embed":We("load",n),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)We($s[r],n);r=i;break;case"source":We("error",n),r=i;break;case"img":case"image":case"link":We("error",n),We("load",n),r=i;break;case"details":We("toggle",n),r=i;break;case"input":fd(n,i),r=Ku(n,i),We("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Qe({},i,{value:void 0}),We("invalid",n);break;case"textarea":hd(n,i),r=ec(n,i),We("invalid",n);break;default:r=i}nc(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?um(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&am(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&lo(n,l):typeof l=="number"&&lo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&We("scroll",n):l!=null&&af(n,s,l,o))}switch(t){case"input":Uo(n),dd(n,i,!1);break;case"textarea":Uo(n),pd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Oi(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ts(n,!!i.multiple,s,!1):i.defaultValue!=null&&ts(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=qa)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bt(e),null;case 6:if(n&&e.stateNode!=null)Ig(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(t=rr(yo.current),rr(Gn.current),$o(e)){if(i=e.stateNode,t=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==t)&&(n=tn,n!==null))switch(n.tag){case 3:qo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return bt(e),null;case 13:if(je(Ye),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($e&&Jt!==null&&e.mode&1&&!(e.flags&128))Zm(),fs(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Bn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),s=!1}else Ln!==null&&(Oc(Ln),Ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ye.current&1?ut===0&&(ut=3):Wf())),e.updateQueue!==null&&(e.flags|=4),bt(e),null);case 4:return hs(),Lc(n,e),n===null&&go(e.stateNode.containerInfo),bt(e),null;case 10:return Tf(e.type._context),bt(e),null;case 17:return Wt(e.type)&&$a(),bt(e),null;case 19:if(je(Ye),s=e.memoizedState,s===null)return bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ks(s,!1);else{if(ut!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=tl(n),o!==null){for(e.flags|=128,ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ve(Ye,Ye.current&1|2),e.child}n=n.sibling}s.tail!==null&&et()>ms&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(n=tl(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$e)return bt(e),null}else 2*et()-s.renderingStartTime>ms&&t!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=et(),e.sibling=null,t=Ye.current,Ve(Ye,i?t&1|2:t&1),e):(bt(e),null);case 22:case 23:return Gf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Kt&1073741824&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function lx(n,e){switch(Mf(e),e.tag){case 1:return Wt(e.type)&&$a(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return hs(),je(Gt),je(Rt),Pf(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Rf(e),null;case 13:if(je(Ye),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));fs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return je(Ye),null;case 4:return hs(),null;case 10:return Tf(e.type._context),null;case 22:case 23:return Gf(),null;case 24:return null;default:return null}}var Ko=!1,Lt=!1,ux=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Qr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Je(n,e,i)}else t.current=null}function Rc(n,e,t){try{t()}catch(i){Je(n,e,i)}}var ih=!1;function cx(n,e){if(hc=Ha,n=Om(),yf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var m;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(pc={focusedElem:n,selectionRange:t},Ha=!1,ue=e;ue!==null;)if(e=ue,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ue=n;else for(;ue!==null;){e=ue;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:Tn(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(S){Je(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ue=n;break}ue=e.return}return x=ih,ih=!1,x}function ro(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rc(e,t,s)}r=r.next}while(r!==i)}}function xl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Pc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ng(n){var e=n.alternate;e!==null&&(n.alternate=null,Ng(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Bn],delete e[vo],delete e[_c],delete e[Xv],delete e[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kg(n){return n.tag===5||n.tag===3||n.tag===4}function rh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=qa));else if(i!==4&&(n=n.child,n!==null))for(Dc(n,e,t),n=n.sibling;n!==null;)Dc(n,e,t),n=n.sibling}function Ic(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ic(n,e,t),n=n.sibling;n!==null;)Ic(n,e,t),n=n.sibling}var vt=null,bn=!1;function pi(n,e,t){for(t=t.child;t!==null;)Fg(n,e,t),t=t.sibling}function Fg(n,e,t){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(fl,t)}catch{}switch(t.tag){case 5:Lt||Qr(t,e);case 6:var i=vt,r=bn;vt=null,pi(n,e,t),vt=i,bn=r,vt!==null&&(bn?(n=vt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vt.removeChild(t.stateNode));break;case 18:vt!==null&&(bn?(n=vt,t=t.stateNode,n.nodeType===8?Ql(n.parentNode,t):n.nodeType===1&&Ql(n,t),ho(n)):Ql(vt,t.stateNode));break;case 4:i=vt,r=bn,vt=t.stateNode.containerInfo,bn=!0,pi(n,e,t),vt=i,bn=r;break;case 0:case 11:case 14:case 15:if(!Lt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rc(t,e,o),r=r.next}while(r!==i)}pi(n,e,t);break;case 1:if(!Lt&&(Qr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Je(t,e,a)}pi(n,e,t);break;case 21:pi(n,e,t);break;case 22:t.mode&1?(Lt=(i=Lt)||t.memoizedState!==null,pi(n,e,t),Lt=i):pi(n,e,t);break;default:pi(n,e,t)}}function sh(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new ux),e.forEach(function(i){var r=xx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Mn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vt=a.stateNode,bn=!1;break e;case 3:vt=a.stateNode.containerInfo,bn=!0;break e;case 4:vt=a.stateNode.containerInfo,bn=!0;break e}a=a.return}if(vt===null)throw Error(Y(160));Fg(s,o,r),vt=null,bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Je(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Og(e,n),e=e.sibling}function Og(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mn(e,n),Fn(n),i&4){try{ro(3,n,n.return),xl(3,n)}catch(h){Je(n,n.return,h)}try{ro(5,n,n.return)}catch(h){Je(n,n.return,h)}}break;case 1:Mn(e,n),Fn(n),i&512&&t!==null&&Qr(t,t.return);break;case 5:if(Mn(e,n),Fn(n),i&512&&t!==null&&Qr(t,t.return),n.flags&32){var r=n.stateNode;try{lo(r,"")}catch(h){Je(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rm(r,s),ic(a,o);var u=ic(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?um(r,d):c==="dangerouslySetInnerHTML"?am(r,d):c==="children"?lo(r,d):af(r,c,d,u)}switch(a){case"input":Qu(r,s);break;case"textarea":sm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ts(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ts(r,!!s.multiple,s.defaultValue,!0):ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(h){Je(n,n.return,h)}}break;case 6:if(Mn(e,n),Fn(n),i&4){if(n.stateNode===null)throw Error(Y(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){Je(n,n.return,h)}}break;case 3:if(Mn(e,n),Fn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(h){Je(n,n.return,h)}break;case 4:Mn(e,n),Fn(n);break;case 13:Mn(e,n),Fn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bf=et())),i&4&&sh(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Lt=(u=Lt)||c,Mn(e,n),Lt=u):Mn(e,n),Fn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ue=n,c=n.child;c!==null;){for(d=ue=c;ue!==null;){switch(f=ue,m=f.child,f.tag){case 0:case 11:case 14:case 15:ro(4,f,f.return);break;case 1:Qr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){Je(i,t,h)}}break;case 5:Qr(f,f.return);break;case 22:if(f.memoizedState!==null){ah(d);continue}}m!==null?(m.return=f,ue=m):ah(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lm("display",o))}catch(h){Je(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){Je(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Mn(e,n),Fn(n),i&4&&sh(n);break;case 21:break;default:Mn(e,n),Fn(n)}}function Fn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(kg(t)){var i=t;break e}t=t.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=rh(n);Ic(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=rh(n);Dc(n,a,o);break;default:throw Error(Y(161))}}catch(l){Je(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function fx(n,e,t){ue=n,zg(n)}function zg(n,e,t){for(var i=(n.mode&1)!==0;ue!==null;){var r=ue,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Lt;a=Ko;var u=Lt;if(Ko=o,(Lt=l)&&!u)for(ue=r;ue!==null;)o=ue,l=o.child,o.tag===22&&o.memoizedState!==null?lh(r):l!==null?(l.return=o,ue=l):lh(r);for(;s!==null;)ue=s,zg(s),s=s.sibling;ue=r,Ko=a,Lt=u}oh(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ue=s):oh(n)}}function oh(n){for(;ue!==null;){var e=ue;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Lt||xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Lt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Tn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Wd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Wd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}Lt||e.flags&512&&Pc(e)}catch(f){Je(e,e.return,f)}}if(e===n){ue=null;break}if(t=e.sibling,t!==null){t.return=e.return,ue=t;break}ue=e.return}}function ah(n){for(;ue!==null;){var e=ue;if(e===n){ue=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ue=t;break}ue=e.return}}function lh(n){for(;ue!==null;){var e=ue;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xl(4,e)}catch(l){Je(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Je(e,r,l)}}var s=e.return;try{Pc(e)}catch(l){Je(e,s,l)}break;case 5:var o=e.return;try{Pc(e)}catch(l){Je(e,o,l)}}}catch(l){Je(e,e.return,l)}if(e===n){ue=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ue=a;break}ue=e.return}}var dx=Math.ceil,rl=hi.ReactCurrentDispatcher,zf=hi.ReactCurrentOwner,vn=hi.ReactCurrentBatchConfig,Ne=0,_t=null,rt=null,St=0,Kt=0,Jr=Vi(0),ut=0,Eo=null,mr=0,yl=0,Uf=0,so=null,Bt=null,Bf=0,ms=1/0,ei=null,sl=!1,Nc=null,Ii=null,Qo=!1,Ti=null,ol=0,oo=0,kc=null,Pa=-1,Da=0;function Ot(){return Ne&6?et():Pa!==-1?Pa:Pa=et()}function Ni(n){return n.mode&1?Ne&2&&St!==0?St&-St:Yv.transition!==null?(Da===0&&(Da=Sm()),Da):(n=Ue,n!==0||(n=window.event,n=n===void 0?16:Am(n.type)),n):1}function Nn(n,e,t,i){if(50<oo)throw oo=0,kc=null,Error(Y(185));Ro(n,t,i),(!(Ne&2)||n!==_t)&&(n===_t&&(!(Ne&2)&&(yl|=t),ut===4&&Ei(n,St)),Ht(n,i),t===1&&Ne===0&&!(e.mode&1)&&(ms=et()+500,gl&&Gi()))}function Ht(n,e){var t=n.callbackNode;Y_(n,e);var i=Wa(n,n===_t?St:0);if(i===0)t!==null&&_d(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&_d(t),e===1)n.tag===0?$v(uh.bind(null,n)):qm(uh.bind(null,n)),Hv(function(){!(Ne&6)&&Gi()}),t=null;else{switch(Mm(i)){case 1:t=df;break;case 4:t=xm;break;case 16:t=Ga;break;case 536870912:t=ym;break;default:t=Ga}t=Xg(t,Ug.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ug(n,e){if(Pa=-1,Da=0,Ne&6)throw Error(Y(327));var t=n.callbackNode;if(os()&&n.callbackNode!==t)return null;var i=Wa(n,n===_t?St:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=al(n,i);else{e=i;var r=Ne;Ne|=2;var s=Vg();(_t!==n||St!==e)&&(ei=null,ms=et()+500,ar(n,e));do try{mx();break}catch(a){Bg(n,a)}while(1);Cf(),rl.current=s,Ne=r,rt!==null?e=0:(_t=null,St=0,e=ut)}if(e!==0){if(e===2&&(r=lc(n),r!==0&&(i=r,e=Fc(n,r))),e===1)throw t=Eo,ar(n,0),Ei(n,i),Ht(n,et()),t;if(e===6)Ei(n,i);else{if(r=n.current.alternate,!(i&30)&&!hx(r)&&(e=al(n,i),e===2&&(s=lc(n),s!==0&&(i=s,e=Fc(n,s))),e===1))throw t=Eo,ar(n,0),Ei(n,i),Ht(n,et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:Qi(n,Bt,ei);break;case 3:if(Ei(n,i),(i&130023424)===i&&(e=Bf+500-et(),10<e)){if(Wa(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Ot(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=gc(Qi.bind(null,n,Bt,ei),e);break}Qi(n,Bt,ei);break;case 4:if(Ei(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*dx(i/1960))-i,10<i){n.timeoutHandle=gc(Qi.bind(null,n,Bt,ei),i);break}Qi(n,Bt,ei);break;case 5:Qi(n,Bt,ei);break;default:throw Error(Y(329))}}}return Ht(n,et()),n.callbackNode===t?Ug.bind(null,n):null}function Fc(n,e){var t=so;return n.current.memoizedState.isDehydrated&&(ar(n,e).flags|=256),n=al(n,e),n!==2&&(e=Bt,Bt=t,e!==null&&Oc(e)),n}function Oc(n){Bt===null?Bt=n:Bt.push.apply(Bt,n)}function hx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ei(n,e){for(e&=~Uf,e&=~yl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-In(e),i=1<<t;n[t]=-1,e&=~i}}function uh(n){if(Ne&6)throw Error(Y(327));os();var e=Wa(n,0);if(!(e&1))return Ht(n,et()),null;var t=al(n,e);if(n.tag!==0&&t===2){var i=lc(n);i!==0&&(e=i,t=Fc(n,i))}if(t===1)throw t=Eo,ar(n,0),Ei(n,e),Ht(n,et()),t;if(t===6)throw Error(Y(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qi(n,Bt,ei),Ht(n,et()),null}function Vf(n,e){var t=Ne;Ne|=1;try{return n(e)}finally{Ne=t,Ne===0&&(ms=et()+500,gl&&Gi())}}function gr(n){Ti!==null&&Ti.tag===0&&!(Ne&6)&&os();var e=Ne;Ne|=1;var t=vn.transition,i=Ue;try{if(vn.transition=null,Ue=1,n)return n()}finally{Ue=i,vn.transition=t,Ne=e,!(Ne&6)&&Gi()}}function Gf(){Kt=Jr.current,je(Jr)}function ar(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Wv(t)),rt!==null)for(t=rt.return;t!==null;){var i=t;switch(Mf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$a();break;case 3:hs(),je(Gt),je(Rt),Pf();break;case 5:Rf(i);break;case 4:hs();break;case 13:je(Ye);break;case 19:je(Ye);break;case 10:Tf(i.type._context);break;case 22:case 23:Gf()}t=t.return}if(_t=n,rt=n=ki(n.current,null),St=Kt=e,ut=0,Eo=null,Uf=yl=mr=0,Bt=so=null,ir!==null){for(e=0;e<ir.length;e++)if(t=ir[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ir=null}return n}function Bg(n,e){do{var t=rt;try{if(Cf(),Aa.current=il,nl){for(var i=Ke.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}nl=!1}if(pr=0,gt=lt=Ke=null,io=!1,So=0,zf.current=null,t===null||t.return===null){ut=1,Eo=e,rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=St,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Zd(o);if(m!==null){m.flags&=-257,Kd(m,o,a,s,e),m.mode&1&&Yd(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){Yd(s,u,e),Wf();break e}l=Error(Y(426))}}else if($e&&a.mode&1){var p=Zd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Kd(p,o,a,s,e),wf(ps(l,a));break e}}s=l=ps(l,a),ut!==4&&(ut=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=wg(s,l,e);Gd(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ii===null||!Ii.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Eg(s,a,e);Gd(s,S);break e}}s=s.return}while(s!==null)}Wg(t)}catch(M){e=M,rt===t&&t!==null&&(rt=t=t.return);continue}break}while(1)}function Vg(){var n=rl.current;return rl.current=il,n===null?il:n}function Wf(){(ut===0||ut===3||ut===2)&&(ut=4),_t===null||!(mr&268435455)&&!(yl&268435455)||Ei(_t,St)}function al(n,e){var t=Ne;Ne|=2;var i=Vg();(_t!==n||St!==e)&&(ei=null,ar(n,e));do try{px();break}catch(r){Bg(n,r)}while(1);if(Cf(),Ne=t,rl.current=i,rt!==null)throw Error(Y(261));return _t=null,St=0,ut}function px(){for(;rt!==null;)Gg(rt)}function mx(){for(;rt!==null&&!B_();)Gg(rt)}function Gg(n){var e=jg(n.alternate,n,Kt);n.memoizedProps=n.pendingProps,e===null?Wg(n):rt=e,zf.current=null}function Wg(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=lx(t,e),t!==null){t.flags&=32767,rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ut=6,rt=null;return}}else if(t=ax(t,e,Kt),t!==null){rt=t;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=n}while(e!==null);ut===0&&(ut=5)}function Qi(n,e,t){var i=Ue,r=vn.transition;try{vn.transition=null,Ue=1,gx(n,e,t,i)}finally{vn.transition=r,Ue=i}return null}function gx(n,e,t,i){do os();while(Ti!==null);if(Ne&6)throw Error(Y(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Y(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Z_(n,s),n===_t&&(rt=_t=null,St=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Qo||(Qo=!0,Xg(Ga,function(){return os(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=Ue;Ue=1;var a=Ne;Ne|=4,zf.current=null,cx(n,t),Og(t,n),Fv(pc),Ha=!!hc,pc=hc=null,n.current=t,fx(t),V_(),Ne=a,Ue=o,vn.transition=s}else n.current=t;if(Qo&&(Qo=!1,Ti=n,ol=r),s=n.pendingLanes,s===0&&(Ii=null),H_(t.stateNode),Ht(n,et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(sl)throw sl=!1,n=Nc,Nc=null,n;return ol&1&&n.tag!==0&&os(),s=n.pendingLanes,s&1?n===kc?oo++:(oo=0,kc=n):oo=0,Gi(),null}function os(){if(Ti!==null){var n=Mm(ol),e=vn.transition,t=Ue;try{if(vn.transition=null,Ue=16>n?16:n,Ti===null)var i=!1;else{if(n=Ti,Ti=null,ol=0,Ne&6)throw Error(Y(331));var r=Ne;for(Ne|=4,ue=n.current;ue!==null;){var s=ue,o=s.child;if(ue.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ue=u;ue!==null;){var c=ue;switch(c.tag){case 0:case 11:case 15:ro(8,c,s)}var d=c.child;if(d!==null)d.return=c,ue=d;else for(;ue!==null;){c=ue;var f=c.sibling,m=c.return;if(Ng(c),c===u){ue=null;break}if(f!==null){f.return=m,ue=f;break}ue=m}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}ue=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ue=o;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ue=g;break e}ue=s.return}}var _=n.current;for(ue=_;ue!==null;){o=ue;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ue=v;else e:for(o=_;ue!==null;){if(a=ue,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(M){Je(a,a.return,M)}if(a===o){ue=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ue=S;break e}ue=a.return}}if(Ne=r,Gi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(fl,n)}catch{}i=!0}return i}finally{Ue=t,vn.transition=e}}return!1}function ch(n,e,t){e=ps(t,e),e=wg(n,e,1),n=Di(n,e,1),e=Ot(),n!==null&&(Ro(n,1,e),Ht(n,e))}function Je(n,e,t){if(n.tag===3)ch(n,n,t);else for(;e!==null;){if(e.tag===3){ch(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){n=ps(t,n),n=Eg(e,n,1),e=Di(e,n,1),n=Ot(),e!==null&&(Ro(e,1,n),Ht(e,n));break}}e=e.return}}function _x(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ot(),n.pingedLanes|=n.suspendedLanes&t,_t===n&&(St&t)===t&&(ut===4||ut===3&&(St&130023424)===St&&500>et()-Bf?ar(n,0):Uf|=t),Ht(n,e)}function Hg(n,e){e===0&&(n.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var t=Ot();n=fi(n,e),n!==null&&(Ro(n,e,t),Ht(n,t))}function vx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Hg(n,t)}function xx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),Hg(n,t)}var jg;jg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Gt.current)Vt=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Vt=!1,ox(n,e,t);Vt=!!(n.flags&131072)}else Vt=!1,$e&&e.flags&1048576&&$m(e,Ka,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ra(n,e),n=e.pendingProps;var r=cs(e,Rt.current);ss(e,t),r=If(null,e,i,n,r,t);var s=Nf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(i)?(s=!0,Ya(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Af(e),r.updater=_l,e.stateNode=r,r._reactInternals=e,wc(e,i,n,t),e=Tc(null,e,i,!0,s,t)):(e.tag=0,$e&&s&&Sf(e),kt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ra(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Sx(i),n=Tn(i,n),r){case 0:e=Cc(null,e,i,n,t);break e;case 1:e=eh(null,e,i,n,t);break e;case 11:e=Qd(null,e,i,n,t);break e;case 14:e=Jd(null,e,i,Tn(i.type,n),t);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Cc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),eh(n,e,i,r,t);case 3:e:{if(Ag(e),n===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qm(n,e),el(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ps(Error(Y(423)),e),e=th(n,e,i,t,r);break e}else if(i!==r){r=ps(Error(Y(424)),e),e=th(n,e,i,t,r);break e}else for(Jt=Pi(e.stateNode.containerInfo.firstChild),tn=e,$e=!0,Ln=null,t=ng(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(fs(),i===r){e=di(n,e,t);break e}kt(n,e,i,t)}e=e.child}return e;case 5:return ig(e),n===null&&yc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,mc(i,r)?o=null:s!==null&&mc(i,s)&&(e.flags|=32),bg(n,e),kt(n,e,o,t),e.child;case 6:return n===null&&yc(e),null;case 13:return Lg(n,e,t);case 4:return Lf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ds(e,null,i,t):kt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Qd(n,e,i,r,t);case 7:return kt(n,e,e.pendingProps,t),e.child;case 8:return kt(n,e,e.pendingProps.children,t),e.child;case 12:return kt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ve(Qa,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!Gt.current){e=di(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ai(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Sc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Sc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ss(e,t),r=xn(r),i=i(r),e.flags|=1,kt(n,e,i,t),e.child;case 14:return i=e.type,r=Tn(i,e.pendingProps),r=Tn(i.type,r),Jd(n,e,i,r,t);case 15:return Cg(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Tn(i,r),Ra(n,e),e.tag=1,Wt(i)?(n=!0,Ya(e)):n=!1,ss(e,t),eg(e,i,r),wc(e,i,r,t),Tc(null,e,i,!0,n,t);case 19:return Rg(n,e,t);case 22:return Tg(n,e,t)}throw Error(Y(156,e.tag))};function Xg(n,e){return vm(n,e)}function yx(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,e,t,i){return new yx(n,e,t,i)}function Hf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sx(n){if(typeof n=="function")return Hf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===uf)return 11;if(n===cf)return 14}return 2}function ki(n,e){var t=n.alternate;return t===null?(t=_n(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ia(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Hf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Wr:return lr(t.children,r,s,e);case lf:o=8,r|=8;break;case qu:return n=_n(12,t,e,r|2),n.elementType=qu,n.lanes=s,n;case $u:return n=_n(13,t,e,r),n.elementType=$u,n.lanes=s,n;case Yu:return n=_n(19,t,e,r),n.elementType=Yu,n.lanes=s,n;case tm:return Sl(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Jp:o=10;break e;case em:o=9;break e;case uf:o=11;break e;case cf:o=14;break e;case yi:o=16,i=null;break e}throw Error(Y(130,n==null?n:typeof n,""))}return e=_n(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function lr(n,e,t,i){return n=_n(7,n,i,e),n.lanes=t,n}function Sl(n,e,t,i){return n=_n(22,n,i,e),n.elementType=tm,n.lanes=t,n.stateNode={isHidden:!1},n}function ou(n,e,t){return n=_n(6,n,null,e),n.lanes=t,n}function au(n,e,t){return e=_n(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Mx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jf(n,e,t,i,r,s,o,a,l){return n=new Mx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Af(s),n}function wx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function qg(n){if(!n)return zi;n=n._reactInternals;e:{if(Mr(n)!==n||n.tag!==1)throw Error(Y(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(n.tag===1){var t=n.type;if(Wt(t))return Xm(n,t,e)}return e}function $g(n,e,t,i,r,s,o,a,l){return n=jf(t,i,!0,n,r,s,o,a,l),n.context=qg(null),t=n.current,i=Ot(),r=Ni(t),s=ai(i,r),s.callback=e??null,Di(t,s,r),n.current.lanes=r,Ro(n,r,i),Ht(n,i),n}function Ml(n,e,t,i){var r=e.current,s=Ot(),o=Ni(r);return t=qg(t),e.context===null?e.context=t:e.pendingContext=t,e=ai(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Di(r,e,o),n!==null&&(Nn(n,r,o,s),ba(n,r,o)),o}function ll(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Xf(n,e){fh(n,e),(n=n.alternate)&&fh(n,e)}function Ex(){return null}var Yg=typeof reportError=="function"?reportError:function(n){console.error(n)};function qf(n){this._internalRoot=n}wl.prototype.render=qf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Y(409));Ml(n,e,null,null)};wl.prototype.unmount=qf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;gr(function(){Ml(null,n,null,null)}),e[ci]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Cm();n={blockedOn:null,target:n,priority:e};for(var t=0;t<wi.length&&e!==0&&e<wi[t].priority;t++);wi.splice(t,0,n),t===0&&bm(n)}};function $f(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function El(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dh(){}function Cx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ll(o);s.call(u)}}var o=$g(e,i,n,0,null,!1,!1,"",dh);return n._reactRootContainer=o,n[ci]=o.current,go(n.nodeType===8?n.parentNode:n),gr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ll(l);a.call(u)}}var l=jf(n,0,!1,null,null,!1,!1,"",dh);return n._reactRootContainer=l,n[ci]=l.current,go(n.nodeType===8?n.parentNode:n),gr(function(){Ml(e,l,t,i)}),l}function Cl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ll(o);a.call(l)}}Ml(e,o,n,r)}else o=Cx(t,e,n,r,i);return ll(o)}wm=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=qs(e.pendingLanes);t!==0&&(hf(e,t|1),Ht(e,et()),!(Ne&6)&&(ms=et()+500,Gi()))}break;case 13:gr(function(){var i=fi(n,1);if(i!==null){var r=Ot();Nn(i,n,1,r)}}),Xf(n,1)}};pf=function(n){if(n.tag===13){var e=fi(n,134217728);if(e!==null){var t=Ot();Nn(e,n,134217728,t)}Xf(n,134217728)}};Em=function(n){if(n.tag===13){var e=Ni(n),t=fi(n,e);if(t!==null){var i=Ot();Nn(t,n,e,i)}Xf(n,e)}};Cm=function(){return Ue};Tm=function(n,e){var t=Ue;try{return Ue=n,e()}finally{Ue=t}};sc=function(n,e,t){switch(e){case"input":if(Qu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ml(i);if(!r)throw Error(Y(90));im(i),Qu(i,r)}}}break;case"textarea":sm(n,t);break;case"select":e=t.value,e!=null&&ts(n,!!t.multiple,e,!1)}};dm=Vf;hm=gr;var Tx={usingClientEntryPoint:!1,Events:[Do,qr,ml,cm,fm,Vf]},Fs={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bx={bundleType:Fs.bundleType,version:Fs.version,rendererPackageName:Fs.rendererPackageName,rendererConfig:Fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=gm(n),n===null?null:n.stateNode},findFiberByHostInstance:Fs.findFiberByHostInstance||Ex,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{fl=Jo.inject(bx),Vn=Jo}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tx;on.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$f(e))throw Error(Y(200));return wx(n,e,null,t)};on.createRoot=function(n,e){if(!$f(n))throw Error(Y(299));var t=!1,i="",r=Yg;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jf(n,1,!1,null,null,t,!1,i,r),n[ci]=e.current,go(n.nodeType===8?n.parentNode:n),new qf(e)};on.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Y(188)):(n=Object.keys(n).join(","),Error(Y(268,n)));return n=gm(e),n=n===null?null:n.stateNode,n};on.flushSync=function(n){return gr(n)};on.hydrate=function(n,e,t){if(!El(e))throw Error(Y(200));return Cl(null,n,e,!0,t)};on.hydrateRoot=function(n,e,t){if(!$f(n))throw Error(Y(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Yg;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=$g(e,null,n,1,t??null,r,!1,s,o),n[ci]=e.current,go(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wl(e)};on.render=function(n,e,t){if(!El(e))throw Error(Y(200));return Cl(null,n,e,!1,t)};on.unmountComponentAtNode=function(n){if(!El(n))throw Error(Y(40));return n._reactRootContainer?(gr(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[ci]=null})}),!0):!1};on.unstable_batchedUpdates=Vf;on.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!El(t))throw Error(Y(200));if(n==null||n._reactInternals===void 0)throw Error(Y(38));return Cl(n,e,t,!1,i)};on.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=on})(E_);var hh=Hu;Wu.createRoot=hh.createRoot,Wu.hydrateRoot=hh.hydrateRoot;const ph=n=>{let e;const t=new Set,i=(l,u)=>{const c=typeof l=="function"?l(e):l;if(!Object.is(c,e)){const d=e;e=u??typeof c!="object"?c:Object.assign({},e,c),t.forEach(f=>f(e,d))}},r=()=>e,a={setState:i,getState:r,subscribe:l=>(t.add(l),()=>t.delete(l)),destroy:()=>{var l;((l={VITE_API_BASE_URL:"http://localhost:4999",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1})==null?void 0:l.MODE)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}};return e=n(i,r,a),a},Ax=n=>n?ph(n):ph;var zc={},Lx={get exports(){return zc},set exports(n){zc=n}},Zg={},Uc={},Rx={get exports(){return Uc},set exports(n){Uc=n}},Kg={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gs=yt;function Px(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Dx=typeof Object.is=="function"?Object.is:Px,Ix=gs.useState,Nx=gs.useEffect,kx=gs.useLayoutEffect,Fx=gs.useDebugValue;function Ox(n,e){var t=e(),i=Ix({inst:{value:t,getSnapshot:e}}),r=i[0].inst,s=i[1];return kx(function(){r.value=t,r.getSnapshot=e,lu(r)&&s({inst:r})},[n,t,e]),Nx(function(){return lu(r)&&s({inst:r}),n(function(){lu(r)&&s({inst:r})})},[n]),Fx(t),t}function lu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Dx(n,t)}catch{return!0}}function zx(n,e){return e()}var Ux=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?zx:Ox;Kg.useSyncExternalStore=gs.useSyncExternalStore!==void 0?gs.useSyncExternalStore:Ux;(function(n){n.exports=Kg})(Rx);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl=yt,Bx=Uc;function Vx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Gx=typeof Object.is=="function"?Object.is:Vx,Wx=Bx.useSyncExternalStore,Hx=Tl.useRef,jx=Tl.useEffect,Xx=Tl.useMemo,qx=Tl.useDebugValue;Zg.useSyncExternalStoreWithSelector=function(n,e,t,i,r){var s=Hx(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Xx(function(){function l(m){if(!u){if(u=!0,c=m,m=i(m),r!==void 0&&o.hasValue){var x=o.value;if(r(x,m))return d=x}return d=m}if(x=d,Gx(c,m))return x;var h=i(m);return r!==void 0&&r(x,h)?x:(c=m,d=h)}var u=!1,c,d,f=t===void 0?null:t;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,t,i,r]);var a=Wx(n,s[0],s[1]);return jx(function(){o.hasValue=!0,o.value=a},[a]),qx(a),a};(function(n){n.exports=Zg})(Lx);const $x=e_(zc),{useSyncExternalStoreWithSelector:Yx}=$x;function Zx(n,e=n.getState,t){const i=Yx(n.subscribe,n.getState,n.getServerState||n.getState,e,t);return yt.useDebugValue(i),i}const mh=n=>{var e;((e={VITE_API_BASE_URL:"http://localhost:4999",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1})==null?void 0:e.MODE)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof n=="function"?Ax(n):n,i=(r,s)=>Zx(t,r,s);return Object.assign(i,t),i},Qg=n=>n?mh(n):mh,Jg=Qg(n=>({board:[],setBoard:e=>n(()=>({board:e}),!0)})),jn=Object.create(null);jn.open="0";jn.close="1";jn.ping="2";jn.pong="3";jn.message="4";jn.upgrade="5";jn.noop="6";const Na=Object.create(null);Object.keys(jn).forEach(n=>{Na[jn[n]]=n});const Kx={type:"error",data:"parser error"},Qx=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Jx=typeof ArrayBuffer=="function",ey=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,e0=({type:n,data:e},t,i)=>Qx&&e instanceof Blob?t?i(e):gh(e,i):Jx&&(e instanceof ArrayBuffer||ey(e))?t?i(e):gh(new Blob([e]),i):i(jn[n]+(e||"")),gh=(n,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(n)},_h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ys=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<_h.length;n++)Ys[_h.charCodeAt(n)]=n;const ty=n=>{let e=n.length*.75,t=n.length,i,r=0,s,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const u=new ArrayBuffer(e),c=new Uint8Array(u);for(i=0;i<t;i+=4)s=Ys[n.charCodeAt(i)],o=Ys[n.charCodeAt(i+1)],a=Ys[n.charCodeAt(i+2)],l=Ys[n.charCodeAt(i+3)],c[r++]=s<<2|o>>4,c[r++]=(o&15)<<4|a>>2,c[r++]=(a&3)<<6|l&63;return u},ny=typeof ArrayBuffer=="function",t0=(n,e)=>{if(typeof n!="string")return{type:"message",data:n0(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:iy(n.substring(1),e)}:Na[t]?n.length>1?{type:Na[t],data:n.substring(1)}:{type:Na[t]}:Kx},iy=(n,e)=>{if(ny){const t=ty(n);return n0(t,e)}else return{base64:!0,data:n}},n0=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},i0=String.fromCharCode(30),ry=(n,e)=>{const t=n.length,i=new Array(t);let r=0;n.forEach((s,o)=>{e0(s,!1,a=>{i[o]=a,++r===t&&e(i.join(i0))})})},sy=(n,e)=>{const t=n.split(i0),i=[];for(let r=0;r<t.length;r++){const s=t0(t[r],e);if(i.push(s),s.type==="error")break}return i},r0=4;function st(n){if(n)return oy(n)}function oy(n){for(var e in st.prototype)n[e]=st.prototype[e];return n}st.prototype.on=st.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};st.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};st.prototype.off=st.prototype.removeListener=st.prototype.removeAllListeners=st.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,r=0;r<t.length;r++)if(i=t[r],i===e||i.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+n],this};st.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,r=t.length;i<r;++i)t[i].apply(this,e)}return this};st.prototype.emitReserved=st.prototype.emit;st.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};st.prototype.hasListeners=function(n){return!!this.listeners(n).length};const pn=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function s0(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}const ay=pn.setTimeout,ly=pn.clearTimeout;function bl(n,e){e.useNativeTimers?(n.setTimeoutFn=ay.bind(pn),n.clearTimeoutFn=ly.bind(pn)):(n.setTimeoutFn=pn.setTimeout.bind(pn),n.clearTimeoutFn=pn.clearTimeout.bind(pn))}const uy=1.33;function cy(n){return typeof n=="string"?fy(n):Math.ceil((n.byteLength||n.size)*uy)}function fy(n){let e=0,t=0;for(let i=0,r=n.length;i<r;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}class dy extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class o0 extends st{constructor(e){super(),this.writable=!1,bl(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new dy(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=t0(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}}const a0="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Bc=64,hy={};let vh=0,ea=0,xh;function yh(n){let e="";do e=a0[n%Bc]+e,n=Math.floor(n/Bc);while(n>0);return e}function l0(){const n=yh(+new Date);return n!==xh?(vh=0,xh=n):n+"."+yh(vh++)}for(;ea<Bc;ea++)hy[a0[ea]]=ea;function u0(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function py(n){let e={},t=n.split("&");for(let i=0,r=t.length;i<r;i++){let s=t[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}let c0=!1;try{c0=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const my=c0;function f0(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||my))return new XMLHttpRequest}catch{}if(!e)try{return new pn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function gy(){}const _y=function(){return new f0({xdomain:!1}).responseType!=null}();class vy extends o0{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let r=location.port;r||(r=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==i}const t=e&&e.forceBase64;this.supportsBinary=_y&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};sy(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,ry(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let i="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=l0()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(i=":"+this.opts.port);const r=u0(e),s=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+i+this.opts.path+(r.length?"?"+r:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new Wn(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class Wn extends st{constructor(e,t){super(),bl(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=s0(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new f0(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&t.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=Wn.requestsCount++,Wn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=gy,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Wn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}Wn.requestsCount=0;Wn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Sh);else if(typeof addEventListener=="function"){const n="onpagehide"in pn?"pagehide":"unload";addEventListener(n,Sh,!1)}}function Sh(){for(let n in Wn.requests)Wn.requests.hasOwnProperty(n)&&Wn.requests[n].abort()}const d0=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),ta=pn.WebSocket||pn.MozWebSocket,Mh=!0,xy="arraybuffer",wh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class yy extends o0{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=wh?{}:s0(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=Mh&&!wh?t?new ta(e,t):new ta(e):new ta(e,t,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType||xy,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],r=t===e.length-1;e0(i,this.supportsBinary,s=>{const o={};try{Mh&&this.ws.send(s)}catch{}r&&d0(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let i="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(i=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=l0()),this.supportsBinary||(e.b64=1);const r=u0(e),s=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+i+this.opts.path+(r.length?"?"+r:"")}check(){return!!ta}}const Sy={websocket:yy,polling:vy},My=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,wy=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Vc(n){const e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let r=My.exec(n||""),s={},o=14;for(;o--;)s[wy[o]]=r[o]||"";return t!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Ey(s,s.path),s.queryKey=Cy(s,s.query),s}function Ey(n,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function Cy(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(t[r]=s)}),t}let h0=class Br extends st{constructor(e,t={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=Vc(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=Vc(t.host).host),bl(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=py(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=r0,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new Sy[e](i)}open(){let e;if(this.opts.rememberUpgrade&&Br.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;Br.priorWebsocketSuccess=!1;const r=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Br.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(c(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=t.name,this.emitReserved("upgradeError",f)}}))};function s(){i||(i=!0,c(),t.close(),t=null)}const o=d=>{const f=new Error("probe error: "+d);f.transport=t.name,s(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function l(){o("socket closed")}function u(d){t&&d.name!==t.name&&s()}const c=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",u)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",u),t.open()}onOpen(){if(this.readyState="open",Br.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(t+=cy(r)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,r){if(typeof t=="function"&&(r=t,t=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:t,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){Br.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const r=e.length;for(;i<r;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};h0.protocol=r0;function Ty(n,e="",t){let i=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),i=Vc(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(t&&t.port===i.port?"":":"+i.port),i}const by=typeof ArrayBuffer=="function",Ay=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,p0=Object.prototype.toString,Ly=typeof Blob=="function"||typeof Blob<"u"&&p0.call(Blob)==="[object BlobConstructor]",Ry=typeof File=="function"||typeof File<"u"&&p0.call(File)==="[object FileConstructor]";function Yf(n){return by&&(n instanceof ArrayBuffer||Ay(n))||Ly&&n instanceof Blob||Ry&&n instanceof File}function ka(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(ka(n[t]))return!0;return!1}if(Yf(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return ka(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&ka(n[t]))return!0;return!1}function Py(n){const e=[],t=n.data,i=n;return i.data=Gc(t,e),i.attachments=e.length,{packet:i,buffers:e}}function Gc(n,e){if(!n)return n;if(Yf(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let i=0;i<n.length;i++)t[i]=Gc(n[i],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=Gc(n[i],e));return t}return n}function Dy(n,e){return n.data=Wc(n.data,e),delete n.attachments,n}function Wc(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=Wc(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Wc(n[t],e));return n}const Iy=5;var Re;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Re||(Re={}));class Ny{constructor(e){this.replacer=e}encode(e){return(e.type===Re.EVENT||e.type===Re.ACK)&&ka(e)?this.encodeAsBinary({type:e.type===Re.EVENT?Re.BINARY_EVENT:Re.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Re.BINARY_EVENT||e.type===Re.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Py(e),i=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(i),r}}class Zf extends st{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===Re.BINARY_EVENT;i||t.type===Re.BINARY_ACK?(t.type=i?Re.EVENT:Re.ACK,this.reconstructor=new ky(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Yf(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(Re[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Re.BINARY_EVENT||i.type===Re.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(s,t)}else i.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(Zf.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Re.CONNECT:return typeof t=="object";case Re.DISCONNECT:return t===void 0;case Re.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case Re.EVENT:case Re.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case Re.ACK:case Re.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class ky{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Dy(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Fy=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Zf,Encoder:Ny,get PacketType(){return Re},protocol:Iy},Symbol.toStringTag,{value:"Module"}));function An(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const Oy=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class m0 extends st{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[An(e,"open",this.onopen.bind(this)),An(e,"packet",this.onpacket.bind(this)),An(e,"error",this.onerror.bind(this)),An(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Oy.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const i={type:Re.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),i.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,[null,...o])}}emitWithAck(e,...t){const i=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((r,s)=>{t.push((o,a)=>i?o?s(o):r(a):r(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this.ids++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>i!==this._queue[0]?void 0:(r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(r)):(this._queue.shift(),t&&t(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(){if(this._queue.length===0)return;const e=this._queue[0];if(e.pending)return;e.pending=!0,e.tryCount++;const t=this.ids;this.ids=e.id,this.flags=e.flags,this.emit.apply(this,e.args),this.ids=t}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Re.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Re.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Re.EVENT:case Re.BINARY_EVENT:this.onevent(e);break;case Re.ACK:case Re.BINARY_ACK:this.onack(e);break;case Re.DISCONNECT:this.ondisconnect();break;case Re.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...r){i||(i=!0,t.packet({type:Re.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Re.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function Es(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}Es.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};Es.prototype.reset=function(){this.attempts=0};Es.prototype.setMin=function(n){this.ms=n};Es.prototype.setMax=function(n){this.max=n};Es.prototype.setJitter=function(n){this.jitter=n};class ul extends st{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,bl(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Es({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||Fy;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new h0(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=An(t,"open",function(){i.onopen(),e&&e()}),s=An(t,"error",o=>{i.cleanup(),i._readyState="closed",this.emitReserved("error",o),e?e(o):i.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&r();const a=this.setTimeoutFn(()=>{r(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(r),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(An(e,"ping",this.onping.bind(this)),An(e,"data",this.ondata.bind(this)),An(e,"error",this.onerror.bind(this)),An(e,"close",this.onclose.bind(this)),An(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){d0(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i||(i=new m0(this,e,t),this.nsps[e]=i),this._autoConnect&&i.connect(),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(function(){clearTimeout(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Os={};function uu(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=Ty(n,e.path||"/socket.io"),i=t.source,r=t.id,s=t.path,o=Os[r]&&s in Os[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new ul(i,e):(Os[r]||(Os[r]=new ul(i,e)),l=Os[r]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(uu,{Manager:ul,Socket:m0,io:uu,connect:uu});const zy={apiBaseUrl:"http://localhost:4999"},Uy=new ul(zy.apiBaseUrl),Hc=Uy.socket("/");var Rn=(n=>(n.GRYFFONDOR="gryffondor",n.SLYTHERIN="slytherin",n.RAVENCLAW="ravenclaw",n.HUFFLEPUFF="hufflepuff",n))(Rn||{});const Kf=Qg(n=>({user:{id:Math.round(Math.random()*1e3),username:"Test",house:Object.values(Rn)[Math.round(Math.random()*3)]},setUser(e){n({user:e})}})),By="_boardContainer_1jhlz_1",Vy="_boardGameGrid_1jhlz_6",Gy="_wrapperProgressBar_1jhlz_16",Wy="_MenuWrapper_1jhlz_21",Hy="_spellGrid_1jhlz_34",jy="_inventoryGrid_1jhlz_42",mi={boardContainer:By,boardGameGrid:Vy,wrapperProgressBar:Gy,MenuWrapper:Wy,spellGrid:Hy,inventoryGrid:jy},Xy=n=>{const[e,t]=yt.useState(100),i=()=>{if(n.activate)return e>0&&setTimeout(()=>{t(o=>o-1/n.countDownTime*100)},1e3),e===0};yt.useEffect(()=>{i()},[e]);const r={height:20,width:"100%",backgroundColor:"#e0e0de",borderRadius:50,border:"2px solid #ffb000"},s={height:"100%",width:`${e.toString()}%`,backgroundColor:"#003B77",borderRadius:"inherit"};return Ee("div",{style:r,children:Ee("div",{style:s})})},qy="_gameContainer_s3zxp_1",$y="_game_s3zxp_1",Yy="_cellWrapper_s3zxp_10",Zy="_cell_s3zxp_10",Ky="_visitedCell_s3zxp_32",Qy="_dangerosityCell_s3zxp_39",Jy="_horizontalWall_s3zxp_43",e1="_verticalWall_s3zxp_53",Cr={gameContainer:qy,game:$y,cellWrapper:Yy,cell:Zy,visitedCell:Ky,dangerosityCell:Qy,horizontalWall:Jy,verticalWall:e1},t1="_player_1tsq5_1",n1={player:t1},i1={[Rn.GRYFFONDOR]:"red",[Rn.HUFFLEPUFF]:"orange",[Rn.RAVENCLAW]:"blue",[Rn.SLYTHERIN]:"green"};function r1({player:n}){const e=i1[n.house];return ti("svg",{className:n1.player,viewBox:"0 0 9 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ee("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.884252 0.99997C0.7195 1.10842 0.456224 1.39609 0.299195 1.63926C0.0438755 2.03488 0.0146226 2.20616 0.0216433 3.26697C0.0279619 4.22429 0.0914991 4.64321 0.351967 5.44288C0.529473 5.9876 0.689194 6.44866 0.70698 6.4675C0.724765 6.48646 1.21422 6.38607 1.79448 6.24453L2.84958 5.98723L2.92259 5.34385C2.96273 4.99 2.99491 4.19851 2.99397 3.58501C2.99221 2.29714 2.78405 1.66491 2.18624 1.13209C1.76125 0.753328 1.32644 0.709205 0.884252 0.99997ZM2.003 7.29493C1.48815 7.44837 1.07206 7.61259 1.07837 7.65969C1.08481 7.70691 1.15396 8.04837 1.23213 8.41858C1.49236 9.6503 2.42225 10.1007 3.13871 9.34182C3.45745 9.0042 3.48811 8.90765 3.42481 8.44324C3.3271 7.72748 3.12058 6.99103 3.02135 7.00466C2.97607 7.01086 2.51785 7.14149 2.003 7.29493Z",fill:e}),Ee("path",{d:"M5.01152 6.31744C4.94564 4.5043 5.0946 3.8986 5.75887 3.28101C5.98845 3.06746 6.29689 2.90336 6.46878 2.90336C6.95333 2.90336 7.52119 3.35797 7.80084 3.96987C8.02071 4.45101 8.04914 4.67646 7.99988 5.54541C7.93704 6.65369 7.41061 8.60601 7.17542 8.60254C6.87856 8.59807 5.30042 8.11904 5.18704 7.99894C5.12163 7.92966 5.04265 7.173 5.01152 6.31744Z",fill:e}),Ee("path",{d:"M4.55939 10.5503C4.59847 10.2641 4.68787 9.81629 4.75807 9.55527C4.84104 9.24678 4.93968 9.10239 5.03972 9.14304C5.12444 9.1775 5.55516 9.29983 5.99699 9.41484C6.43883 9.52999 6.83819 9.66087 6.88464 9.70573C6.97357 9.79162 6.71626 10.8355 6.49499 11.2867C6.18889 11.9111 5.35893 11.9927 4.84548 11.4488C4.52674 11.1112 4.49609 11.0147 4.55939 10.5503Z",fill:e})]})}var jc={},s1={get exports(){return jc},set exports(n){jc=n}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var i=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var o=typeof s;if(o==="string"||o==="number")i.push(s);else if(Array.isArray(s)){if(s.length){var a=t.apply(null,s);a&&i.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){i.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&i.push(l)}}}return i.join(" ")}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(s1);const o1=jc;function g0(n,e,t,i=[]){let{x:r,y:s}=n;const o=e[s][r];if(i.find(l=>l.x===o.x&&l.y===o.y)||i.push(o),t===0)return i;let a=[];return!o.top&&s>0&&a.push(e[s-1][r]),!o.bottom&&s<e.length-1&&a.push(e[s+1][r]),!o.left&&r>0&&a.push(e[s][r-1]),!o.right&&r<e[0].length-1&&a.push(e[s][r+1]),a=a.filter(l=>!i.find(u=>u.x===l.x&&u.y===l.y)),a.length&&a.forEach(l=>{g0({x:l.x,y:l.y},e,t-1,i)}),i}function Eh(n,e,t,i=[]){return g0(n,e,t,i).filter(s=>s.x!==n.x||s.y!==n.y)}const a1="_cellObject_qgnow_1",l1="_cellObjectImg_qgnow_10",Ch={cellObject:a1,cellObjectImg:l1};function u1({object:n}){return Ee("div",{className:Ch.cellObject,children:Ee("img",{className:Ch.cellObjectImg,src:n.image})})}const c1="_cellWitch_2wx13_1",f1={cellWitch:c1};function d1(){return Ee("svg",{className:f1.cellWitch,viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Ee("path",{d:"M228.9 19.9C224 20.33 213.8 24.36 202.4 30.96C176.8 46.49 154.5 63.8701 132.3 81.6601C140.4 79.6001 148.4 77.55 157 75.02C183.2 67.23 207.2 59.8601 233.7 55.5601L230.9 68.4401C223.4 103.5 206.3 139 193.2 172.2C211.4 181 236.5 185.1 259.7 185C282 184.9 302.8 180.2 312.5 175.8C307.8 125.6 313.7 74.13 288.6 36.26C274.2 19.56 248.1 18.28 228.9 19.9ZM184.5 145.6C144.4 149.2 102.2 151 66.52 168.5C55.3 174.2 49.64 180.2 48.08 184.1C46.53 188 46.89 190.9 52.16 196.6C57.43 202.2 68.03 208.9 83.92 215C115.7 227.2 168.2 237.3 241.4 240.8C273.4 242.4 321 238.7 365 228C408 217.7 447.2 200.1 465.5 177.2C424.1 157.6 370.6 153.5 328.9 149.6C329.4 162.5 330.1 173 331.4 184.9L327.4 188C313.1 198.7 288.2 202.8 259.8 203C231.4 203.1 200.3 198.2 177.1 184C164.3 177.3 180.4 155.5 184.5 145.6ZM389 240.3C385.9 241.2 382.8 242 379.7 242.9C381.7 247 382.8 251.5 382.8 256.1C382.8 263.5 380.1 270 375.8 275.4C386.1 276.5 396.1 277.6 406 278.8C399.8 265.3 393.8 251.8 389 240.3ZM116.8 243.5C98.34 310.6 63.15 371 24.15 439.6C43.42 430.4 58.83 415.4 72.06 397.5C92.83 368.5 106.4 337.4 122.2 306.3L138.5 314C120.7 347.3 107.2 379.9 87.89 406.4C69.46 434.5 48.3 461.9 24.73 485.7C31.6 484.8 38.44 483.7 45.25 482.5C73.19 454.6 103.2 427.2 110.7 402.6L127.9 407.9C120.4 432.4 100.5 453.7 79.47 474.3C90.75 470.9 101.1 466.9 109.2 462.8C124.6 450.3 132.9 434.5 138.3 417.4C145.3 395.6 146.7 371.8 150.7 351.8L168.4 355.4C164.8 373.3 163.3 398.2 155.5 422.9C151.5 435.6 145.5 448.3 136.7 459.8C150.3 471 165.6 481.2 176.3 492.6C188.2 438.6 189.8 386 190.3 328.2L208.3 328.3C208 363.7 207.3 397.6 204.1 431.3C211 447 216 459.3 220.3 471.1L230.9 258.3C184.7 255.7 146.8 250.5 116.8 243.5ZM361.1 247.4C356.4 248.5 351.6 249.4 346.9 250.3C349.5 257.4 342 263.4 336.8 263.5C331.8 263.5 327.5 260.5 326.2 256.3C326.3 263.8 334.1 271.1 345.5 271.1C357 271.1 364.8 263.7 364.8 256.1C364.4 252.7 363 249.5 361.1 247.4ZM308.2 256.1C304.4 256.6 300.6 256.9 296.9 257.3C297.5 259.6 297.8 262.1 297.8 264.6C297.8 284 279.4 298 258.9 298C254.8 298 250.8 297.4 247 296.4L245.3 332.2C252.5 345.3 257.8 353.9 263.6 359.3C271.3 366.3 281.1 369.9 302.8 372.7C309.2 373.8 314.2 381.4 315.2 386.6C316.2 391.8 315.4 397 313.1 402C294.7 428.2 265.1 414.2 241.7 404.1L240.9 420.2C255.6 447 268.6 471.7 303.9 488.3C315.3 492.4 329.2 493.8 341.1 489.2L320.4 406.8L326.4 403.5C345.3 392.9 355.1 379.3 363.3 363.9C337.6 361.1 314.3 354.3 289.3 352.7C279.6 352.1 272.6 345.6 268.5 338.7C264.4 331.7 262.3 323.8 263.8 315.8C265.1 302.2 302.1 305.1 307.8 305.2L324.4 320.1C307.9 319.7 296.2 319.8 281.9 324C283 328.1 285.7 334.3 290.4 334.8C339.6 337.9 374.7 356.2 426.4 341.1C442.5 337.4 475.7 356.9 487.9 364.5C485.5 343.9 480.8 323.5 468.4 310.2C424.5 296.4 378.6 295.1 345.5 289C312.3 282.9 308.2 269.7 308.2 256.1ZM278 258.6C274.4 258.8 270.9 258.9 267.5 259C270.3 266.1 262.7 272.2 257.4 272.3C253.7 272.3 250.4 270.6 248.5 268.1L248 277.6C251.1 279.1 254.8 280 258.9 280C271.4 280 279.8 272.1 279.8 264.6C279.8 262.5 279.2 260.5 278 258.6ZM243.7 364L242.7 384C254.6 390.7 268.2 395.5 284.3 399.5C290.5 400.4 298.9 397.3 297.5 390.1C276.3 387.1 262.2 382.4 251.4 372.5C248.6 369.9 246.1 367.1 243.7 364ZM398.4 364.5C393.1 364.9 387.9 365.1 382.9 365.1C382.1 366.6 381.4 368.1 380.6 369.7C372.2 386 360.9 402.7 341.1 415.5L348.7 445.7C360.4 457.6 372.1 469.7 384.1 480.2C378.8 464.7 376.9 450.3 376.4 429.7L375.8 406.5L391.8 423.2C398.7 430.4 411.7 436.8 426.2 440.6C434.1 442.7 442.4 444 450.4 444.6C430.1 419.7 411.7 391.1 398.4 364.5Z",fill:"black"})})}const h1=3;function p1(){const[n,e]=yt.useState([]),[t,i]=yt.useState([]),r=Jg(u=>u.board),s=Kf(u=>u.user),o=u=>{t.some(c=>c.x===u.x&&c.y===u.y)&&Hc.emit("player:move",u,s)},a=()=>{const u=r.flat().find(c=>{var d;return(d=c.players)==null?void 0:d.some(f=>f.id===s.id)});u&&i(Eh({x:u.x,y:u.y},r,h1))},l=()=>{const u=r.flat().filter(d=>d.teachers&&d.teachers.length).flat(),c=[];u.forEach(d=>{c.push(...Eh({x:d.x,y:d.y},r,3))}),e(c)};return yt.useEffect(()=>{r.length&&(a(),l())},[r]),r.length?Ee("div",{className:Cr.gameContainer,children:r.length&&Ee("div",{className:Cr.game,style:{gridTemplateColumns:`repeat(${r[0].length}, 1fr)`},children:r.map((u,c)=>u.map((d,f)=>{var x;const m=80/r.length;return Ee("div",{style:{width:`${m}vh`,height:`${m}vh`,borderRight:d.right?"2px solid":"2px transparent",borderTop:d.top?"2px solid":"2px transparent",borderLeft:d.left?"2px solid":"2px transparent",borderBottom:d.bottom?"2px solid":"2px transparent"},className:o1(Cr.cellWrapper,t.find(h=>h.x===d.x&&h.y===d.y)?Cr.visitedCell:null,n.find(h=>h.x===d.x&&h.y===d.y)?Cr.dangerosityCell:null),"data-x":f,"data-y":c,children:ti("div",{className:Cr.cell,onClick:()=>o(d),children:[(d.players||[]).map(h=>Ee(r1,{player:h})),d.object&&Ee(u1,{object:d.object}),(x=d.teachers)==null?void 0:x.map(h=>Ee(d1,{}))]})},`${f}-${c}`)}))})}):Ee("p",{children:"loading"})}const m1="_buttonWrapper_2qmlk_1",g1={buttonWrapper:m1},_1=n=>Ee("div",{className:g1.buttonWrapper,children:n.image&&Ee("img",{height:"80px",width:"80px",src:n.image,alt:"-img"})}),_0="/assets/spell1-9dabebfd.png",v0="/assets/spell2-061ab77e.png",x0="/assets/spell3-b8a268fa.png",y0="/assets/spell4-c753c011.png",S0="/assets/spell5-af259d8f.png",M0="/assets/spell6-3d1f2723.png",w0="/assets/spell7-8c6b18d6.png",E0="/assets/spell8-a30cb320.png",v1="_buttonWrapper_1e7mf_1",x1="_imageBorder_1e7mf_17",Th={buttonWrapper:v1,imageBorder:x1},y1=n=>ti("div",{className:Th.buttonWrapper,children:[Ee("div",{className:Th.imageBorder,children:Ee("img",{height:"80px",width:"80px",src:n.image,alt:n.name+"-img"})}),Ee("p",{children:n.name})]}),S1="_btnHome_1v4x4_1",M1={btnHome:S1},bh=n=>Ee("div",{className:M1.btnHome,onClick:()=>n.onClick(),children:n.children});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="149",w1=0,Ah=1,E1=2,C0=1,C1=2,Zs=3,Ui=0,nn=1,bi=2,Fi=0,as=1,Lh=2,Rh=3,Ph=4,T1=5,Vr=100,b1=101,A1=102,Dh=103,Ih=104,L1=200,R1=201,P1=202,D1=203,T0=204,b0=205,I1=206,N1=207,k1=208,F1=209,O1=210,z1=0,U1=1,B1=2,Xc=3,V1=4,G1=5,W1=6,H1=7,A0=0,j1=1,X1=2,li=0,q1=1,$1=2,Y1=3,Z1=4,K1=5,L0=300,_s=301,vs=302,qc=303,$c=304,Al=306,Yc=1e3,Pn=1001,Zc=1002,Ft=1003,Nh=1004,cu=1005,mn=1006,Q1=1007,Co=1008,_r=1009,J1=1010,eS=1011,R0=1012,tS=1013,sr=1014,or=1015,To=1016,nS=1017,iS=1018,ls=1020,rS=1021,Dn=1023,sS=1024,oS=1025,ur=1026,xs=1027,aS=1028,lS=1029,uS=1030,cS=1031,fS=1033,fu=33776,du=33777,hu=33778,pu=33779,kh=35840,Fh=35841,Oh=35842,zh=35843,dS=36196,Uh=37492,Bh=37496,Vh=37808,Gh=37809,Wh=37810,Hh=37811,jh=37812,Xh=37813,qh=37814,$h=37815,Yh=37816,Zh=37817,Kh=37818,Qh=37819,Jh=37820,ep=37821,mu=36492,hS=36283,tp=36284,np=36285,ip=36286,vr=3e3,He=3001,pS=3200,mS=3201,gS=0,_S=1,zn="srgb",bo="srgb-linear",gu=7680,vS=519,rp=35044,sp="300 es",Kc=1035;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,op=180/Math.PI;function No(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function xS(n,e){return(n%e+e)%e}function vu(n,e,t){return(1-t)*n+t*e}function ap(n){return(n&n-1)===0&&n!==0}function Qc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function na(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(){en.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],_=r[1],v=r[4],S=r[7],M=r[2],b=r[5],A=r[8];return s[0]=o*h+a*_+l*M,s[3]=o*p+a*v+l*b,s[6]=o*g+a*S+l*A,s[1]=u*h+c*_+d*M,s[4]=u*p+c*v+d*b,s[7]=u*g+c*S+d*A,s[2]=f*h+m*_+x*M,s[5]=f*p+m*v+x*b,s[8]=f*g+m*S+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,m=u*s-o*l,x=t*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xu.makeScale(e,t)),this}rotate(e){return this.premultiply(xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(xu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xu=new en;function P0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const yu={[zn]:{[bo]:cr},[bo]:{[zn]:Fa}},It={legacyMode:!0,get workingColorSpace(){return bo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(yu[e]&&yu[e][t]!==void 0){const i=yu[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},at={r:0,g:0,b:0},wn={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Su(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ra(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=It.workingColorSpace){if(e=xS(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Su(o,s,e+1/3),this.g=Su(o,s,e),this.b=Su(o,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=zn){const i=D0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return It.fromWorkingColorSpace(ra(this,at),e),Qt(at.r*255,0,255)<<16^Qt(at.g*255,0,255)<<8^Qt(at.b*255,0,255)<<0}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(ra(this,at),t);const i=at.r,r=at.g,s=at.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(ra(this,at),t),e.r=at.r,e.g=at.g,e.b=at.b,e}getStyle(e=zn){return It.fromWorkingColorSpace(ra(this,at),e),e!==zn?`color(${e} ${at.r} ${at.g} ${at.b})`:`rgb(${at.r*255|0},${at.g*255|0},${at.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=i,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(ia);const i=vu(wn.h,ia.h,t),r=vu(wn.s,ia.s,t),s=vu(wn.l,ia.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ze.NAMES=D0;let Tr;class I0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Ao("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class N0{constructor(e=null){this.isSource=!0,this.uuid=No(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mu(r[o].image)):s.push(Mu(r[o]))}else s=Mu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;class jt extends Cs{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=Pn,r=Pn,s=mn,o=Co,a=Dn,l=_r,u=jt.DEFAULT_ANISOTROPY,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=No(),this.name="",this.source=new N0(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new en,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yc:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yc:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=L0;jt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(m+1)/2,M=(g+1)/2,b=(c+f)/4,A=(d+h)/4,y=(x+p)/4;return v>S&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):S>M?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=y/s),this.set(i,r,s,t),this}let _=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-h)/_,this.z=(f-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xr extends Cs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new N0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k0 extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SS extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=h;return}if(d!==h||l!==f||u!==m||c!==x){let p=1-a;const g=l*f+u*m+c*x+d*h,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),b=Math.atan2(M,g*_);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M}const S=a*_;if(l=l*p+f*S,u=u*p+m*S,c=c*p+x*S,d=d*p+h*S,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*m-u*f,e[t+1]=l*x+c*f+u*d-a*m,e[t+2]=u*x+c*m+a*f-l*d,e[t+3]=c*x-a*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"YXZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"ZXY":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"ZYX":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"YZX":this._x=f*c*d+u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d-f*m*x;break;case"XZY":this._x=f*c*d-u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new z,lp=new ko;class Fo{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)qi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(qi)}else i.boundingBox===null&&i.computeBoundingBox(),Eu.copy(i.boundingBox),Eu.applyMatrix4(e.matrixWorld),this.union(Eu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),sa.subVectors(this.max,zs),br.subVectors(e.a,zs),Ar.subVectors(e.b,zs),Lr.subVectors(e.c,zs),gi.subVectors(Ar,br),_i.subVectors(Lr,Ar),$i.subVectors(br,Lr);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-$i.z,$i.y,gi.z,0,-gi.x,_i.z,0,-_i.x,$i.z,0,-$i.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-$i.y,$i.x,0];return!Cu(t,br,Ar,Lr,sa)||(t=[1,0,0,0,1,0,0,0,1],!Cu(t,br,Ar,Lr,sa))?!1:(oa.crossVectors(gi,_i),t=[oa.x,oa.y,oa.z],Cu(t,br,Ar,Lr,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new z,new z,new z,new z,new z,new z,new z,new z],qi=new z,Eu=new Fo,br=new z,Ar=new z,Lr=new z,gi=new z,_i=new z,$i=new z,zs=new z,sa=new z,oa=new z,Yi=new z;function Cu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yi.fromArray(n,s);const a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),l=e.dot(Yi),u=t.dot(Yi),c=i.dot(Yi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const MS=new Fo,Us=new z,Tu=new z;class Jf{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):MS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Tu)),this.expandByPoint(Us.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new z,bu=new z,aa=new z,vi=new z,Au=new z,la=new z,Lu=new z;class wS{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.direction).multiplyScalar(t).add(this.origin),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bu.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(bu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(aa),a=vi.dot(this.direction),l=-vi.dot(aa),u=vi.lengthSq(),c=Math.abs(1-o*o);let d,f,m,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(aa).multiplyScalar(f).add(bu),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,r,s){Au.subVectors(t,e),la.subVectors(i,e),Lu.crossVectors(Au,la);let o=this.direction.dot(Lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(la.crossVectors(vi,la));if(l<0)return null;const u=a*this.direction.dot(Au.cross(vi));if(u<0||l+u>o)return null;const c=-a*vi.dot(Lu);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=m+x*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f+h*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=x*u-m,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*d+x,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,CS)}lookAt(e,t,i){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),xi.crossVectors(i,Yt),xi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),xi.crossVectors(i,Yt)),xi.normalize(),ua.crossVectors(Yt,xi),r[0]=xi.x,r[4]=ua.x,r[8]=Yt.x,r[1]=xi.y,r[5]=ua.y,r[9]=Yt.y,r[2]=xi.z,r[6]=ua.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],_=i[3],v=i[7],S=i[11],M=i[15],b=r[0],A=r[4],y=r[8],T=r[12],L=r[1],$=r[5],Z=r[9],k=r[13],I=r[2],j=r[6],K=r[10],Q=r[14],P=r[3],U=r[7],B=r[11],ne=r[15];return s[0]=o*b+a*L+l*I+u*P,s[4]=o*A+a*$+l*j+u*U,s[8]=o*y+a*Z+l*K+u*B,s[12]=o*T+a*k+l*Q+u*ne,s[1]=c*b+d*L+f*I+m*P,s[5]=c*A+d*$+f*j+m*U,s[9]=c*y+d*Z+f*K+m*B,s[13]=c*T+d*k+f*Q+m*ne,s[2]=x*b+h*L+p*I+g*P,s[6]=x*A+h*$+p*j+g*U,s[10]=x*y+h*Z+p*K+g*B,s[14]=x*T+h*k+p*Q+g*ne,s[3]=_*b+v*L+S*I+M*P,s[7]=_*A+v*$+S*j+M*U,s[11]=_*y+v*Z+S*K+M*B,s[15]=_*T+v*k+S*Q+M*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*m-i*l*m)+h*(+t*l*m-t*u*f+s*o*f-r*o*m+r*u*c-s*l*c)+p*(+t*u*d-t*a*m-s*o*d+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],_=d*p*u-h*f*u+h*l*m-a*p*m-d*l*g+a*f*g,v=x*f*u-c*p*u-x*l*m+o*p*m+c*l*g-o*f*g,S=c*h*u-x*d*u+x*a*m-o*h*m-c*a*g+o*d*g,M=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,b=t*_+i*v+r*S+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(h*f*s-d*p*s-h*r*m+i*p*m+d*r*g-i*f*g)*A,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*p*s-x*f*s+x*r*m-t*p*m-c*r*g+t*f*g)*A,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*g-t*l*g)*A,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*m+t*l*m)*A,e[8]=S*A,e[9]=(x*d*s-c*h*s-x*i*m+t*h*m+c*i*g-t*d*g)*A,e[10]=(o*h*s-x*a*s+x*i*u-t*h*u-o*i*g+t*a*g)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*m-t*a*m)*A,e[12]=M*A,e[13]=(c*h*r-x*d*r+x*i*f-t*h*f-c*i*p+t*d*p)*A,e[14]=(x*a*r-o*h*r-x*i*l+t*h*l+o*i*p-t*a*p)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,m=s*c,x=s*d,h=o*c,p=o*d,g=a*d,_=l*u,v=l*c,S=l*d,M=i.x,b=i.y,A=i.z;return r[0]=(1-(h+g))*M,r[1]=(m+S)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-S)*b,r[5]=(1-(f+g))*b,r[6]=(p+_)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(p-_)*A,r[10]=(1-(f+h))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const u=1/s,c=1/o,d=1/a;return En.elements[0]*=u,En.elements[1]*=u,En.elements[2]*=u,En.elements[4]*=c,En.elements[5]*=c,En.elements[6]*=c,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Rr=new z,En=new Mt,ES=new z(0,0,0),CS=new z(1,1,1),xi=new z,ua=new z,Yt=new z,up=new Mt,cp=new ko;class Ll{constructor(e=0,t=0,i=0,r=Ll.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cp.setFromEuler(this),this.setFromQuaternion(cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ll.DEFAULT_ORDER="XYZ";class F0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TS=0;const fp=new z,Pr=new ko,Kn=new Mt,ca=new z,Bs=new z,bS=new z,AS=new ko,dp=new z(1,0,0),hp=new z(0,1,0),pp=new z(0,0,1),LS={type:"added"},mp={type:"removed"};class rn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new z,t=new Ll,i=new ko,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new en}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new F0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(pp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ca.copy(e):ca.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Bs,ca,this.up):Kn.lookAt(ca,Bs,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(Kn),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(LS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(mp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new z(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new z,Qn=new z,Ru=new z,Jn=new z,Dr=new z,Ir=new z,gp=new z,Pu=new z,Du=new z,Iu=new z;class ii{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),Qn.subVectors(i,t),Ru.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(Qn),l=Cn.dot(Ru),u=Qn.dot(Qn),c=Qn.dot(Ru),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Jn),l.set(0,0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),Qn.subVectors(e,t),Cn.cross(Qn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Cn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ii.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Ir.subVectors(s,i),Pu.subVectors(e,i);const l=Dr.dot(Pu),u=Ir.dot(Pu);if(l<=0&&u<=0)return t.copy(i);Du.subVectors(e,r);const c=Dr.dot(Du),d=Ir.dot(Du);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Dr,o);Iu.subVectors(e,s);const m=Dr.dot(Iu),x=Ir.dot(Iu);if(x>=0&&m<=x)return t.copy(s);const h=m*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Ir,a);const p=c*x-m*d;if(p<=0&&d-c>=0&&m-x>=0)return gp.subVectors(s,r),a=(d-c)/(d-c+(m-x)),t.copy(r).addScaledVector(gp,a);const g=1/(p+h+f);return o=h*g,a=f*g,t.copy(i).addScaledVector(Dr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let RS=0;class Rl extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=as,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=T0,this.blendDst=b0,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gu,this.stencilZFail=gu,this.stencilZPass=gu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mi extends Rl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=A0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new z,fa=new Ge;class Hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rp,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fa.fromBufferAttribute(this,t),fa.applyMatrix3(e),this.setXY(t,fa.x,fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=na(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=na(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=na(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class O0 extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class z0 extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fr extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PS=0;const fn=new Mt,Nu=new rn,Nr=new z,Zt=new Fo,Vs=new Fo,mt=new z;class wr extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?z0:O0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new en().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Zt.min,Vs.min),Zt.expandByPoint(mt),mt.addVectors(Zt.max,Vs.max),Zt.expandByPoint(mt)):(Zt.expandByPoint(Vs.min),Zt.expandByPoint(Vs.max))}Zt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)mt.fromBufferAttribute(a,u),l&&(Nr.fromBufferAttribute(e,u),mt.add(Nr)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new z,c[L]=new z;const d=new z,f=new z,m=new z,x=new Ge,h=new Ge,p=new Ge,g=new z,_=new z;function v(L,$,Z){d.fromArray(r,L*3),f.fromArray(r,$*3),m.fromArray(r,Z*3),x.fromArray(o,L*2),h.fromArray(o,$*2),p.fromArray(o,Z*2),f.sub(d),m.sub(d),h.sub(x),p.sub(x);const k=1/(h.x*p.y-p.x*h.y);isFinite(k)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(k),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(k),u[L].add(g),u[$].add(g),u[Z].add(g),c[L].add(_),c[$].add(_),c[Z].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let L=0,$=S.length;L<$;++L){const Z=S[L],k=Z.start,I=Z.count;for(let j=k,K=k+I;j<K;j+=3)v(i[j+0],i[j+1],i[j+2])}const M=new z,b=new z,A=new z,y=new z;function T(L){A.fromArray(s,L*3),y.copy(A);const $=u[L];M.copy($),M.sub(A.multiplyScalar(A.dot($))).normalize(),b.crossVectors(y,$);const k=b.dot(c[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=k}for(let L=0,$=S.length;L<$;++L){const Z=S[L],k=Z.start,I=Z.count;for(let j=k,K=k+I;j<K;j+=3)T(i[j+0]),T(i[j+1]),T(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,u=new z,c=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)f[x++]=u[m++]}return new Hn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new Mt,kr=new wS,ku=new Jf,Gs=new z,Ws=new z,Hs=new z,Fu=new z,da=new z,ha=new Ge,pa=new Ge,ma=new Ge,Ou=new z,ga=new z;class oi extends rn{constructor(e=new wr,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Fu.fromBufferAttribute(d,e),o?da.addScaledVector(Fu,c):da.addScaledVector(Fu.sub(t),c))}t.add(da)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ku.copy(i.boundingSphere),ku.applyMatrix4(s),e.ray.intersectsSphere(ku)===!1)||(_p.copy(s).invert(),kr.copy(e.ray).applyMatrix4(_p),i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,S=_;v<S;v+=3){const M=a.getX(v),b=a.getX(v+1),A=a.getX(v+2);o=_a(this,p,e,kr,u,c,M,b,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),_=a.getX(h+1),v=a.getX(h+2);o=_a(this,r,e,kr,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,S=_;v<S;v+=3){const M=v,b=v+1,A=v+2;o=_a(this,p,e,kr,u,c,M,b,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=h,_=h+1,v=h+2;o=_a(this,r,e,kr,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function DS(n,e,t,i,r,s,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ui,a),l===null)return null;ga.copy(a),ga.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ga);return u<t.near||u>t.far?null:{distance:u,point:ga.clone(),object:n}}function _a(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Gs),n.getVertexPosition(a,Ws),n.getVertexPosition(l,Hs);const u=DS(n,e,t,i,Gs,Ws,Hs,Ou);if(u){r&&(ha.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,a),ma.fromBufferAttribute(r,l),u.uv=ii.getUV(Ou,Gs,Ws,Hs,ha,pa,ma,new Ge)),s&&(ha.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,a),ma.fromBufferAttribute(s,l),u.uv2=ii.getUV(Ou,Gs,Ws,Hs,ha,pa,ma,new Ge));const c={a:o,b:a,c:l,normal:new z,materialIndex:0};ii.getNormal(Gs,Ws,Hs,c.normal),u.face=c}return u}class Ts extends wr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fr(u,3)),this.setAttribute("normal",new fr(c,3)),this.setAttribute("uv",new fr(d,2));function x(h,p,g,_,v,S,M,b,A,y,T){const L=S/A,$=M/y,Z=S/2,k=M/2,I=b/2,j=A+1,K=y+1;let Q=0,P=0;const U=new z;for(let B=0;B<K;B++){const ne=B*$-k;for(let N=0;N<j;N++){const X=N*L-Z;U[h]=X*_,U[p]=ne*v,U[g]=I,u.push(U.x,U.y,U.z),U[h]=0,U[p]=0,U[g]=b>0?1:-1,c.push(U.x,U.y,U.z),d.push(N/A),d.push(1-B/y),Q+=1}}for(let B=0;B<y;B++)for(let ne=0;ne<A;ne++){const N=f+ne+j*B,X=f+ne+j*(B+1),te=f+(ne+1)+j*(B+1),re=f+(ne+1)+j*B;l.push(N,X,re),l.push(X,te,re),P+=6}a.addGroup(m,P,T),m+=P,f+=Q}}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const r in i)e[r]=i[r]}return e}function IS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function U0(n){return n.getRenderTarget()===null&&n.outputEncoding===He?zn:bo}const NS={clone:ys,merge:Nt};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Rl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class B0 extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends B0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_u*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Or=1;class OS extends rn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new gn(Fr,Or,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new gn(Fr,Or,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new gn(Fr,Or,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new gn(Fr,Or,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new gn(Fr,Or,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new gn(Fr,Or,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=li,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class V0 extends jt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zS extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ts(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Fi});s.uniforms.tEquirect.value=t;const o=new oi(r,s),a=t.minFilter;return t.minFilter===Co&&(t.minFilter=mn),new OS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const zu=new z,US=new z,BS=new en;class Ji{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zu.subVectors(i,t).cross(US.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BS.getNormalMatrix(e),r=this.coplanarPoint(zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Jf,va=new z;class G0{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,d-l,h-f,v-p).normalize(),t[1].setComponents(a+r,d+l,h+f,v+p).normalize(),t[2].setComponents(a+s,d+u,h+m,v+g).normalize(),t[3].setComponents(a-s,d-u,h-m,v-g).normalize(),t[4].setComponents(a-o,d-c,h-x,v-_).normalize(),t[5].setComponents(a+o,d+c,h+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function VS(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,m=c.updateRange;n.bindBuffer(d,u),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class ed extends wr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,m=[],x=[],h=[],p=[];for(let g=0;g<c;g++){const _=g*f-o;for(let v=0;v<u;v++){const S=v*d-s;x.push(S,-_,0),h.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,S=_+u*(g+1),M=_+1+u*(g+1),b=_+1+u*g;m.push(v,S,b),m.push(S,M,b)}this.setIndex(m),this.setAttribute("position",new fr(x,3)),this.setAttribute("normal",new fr(h,3)),this.setAttribute("uv",new fr(p,2))}static fromJSON(e){return new ed(e.width,e.height,e.widthSegments,e.heightSegments)}}var GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$S="vec3 transformed = vec3( position );",YS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,KS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,PM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,OM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,JM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,nw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,uw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yw=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Dw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Iw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Fw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ow=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ww=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e3=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,t3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,l3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,v3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:GS,alphamap_pars_fragment:WS,alphatest_fragment:HS,alphatest_pars_fragment:jS,aomap_fragment:XS,aomap_pars_fragment:qS,begin_vertex:$S,beginnormal_vertex:YS,bsdfs:ZS,iridescence_fragment:KS,bumpmap_pars_fragment:QS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:aM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:uM,displacementmap_pars_vertex:cM,displacementmap_vertex:fM,emissivemap_fragment:dM,emissivemap_pars_fragment:hM,encodings_fragment:pM,encodings_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:_M,envmap_pars_fragment:vM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:PM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:wM,fog_pars_fragment:EM,gradientmap_pars_fragment:CM,lightmap_fragment:TM,lightmap_pars_fragment:bM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:LM,lights_pars_begin:RM,lights_toon_fragment:DM,lights_toon_pars_fragment:IM,lights_phong_fragment:NM,lights_phong_pars_fragment:kM,lights_physical_fragment:FM,lights_physical_pars_fragment:OM,lights_fragment_begin:zM,lights_fragment_maps:UM,lights_fragment_end:BM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:HM,map_fragment:jM,map_pars_fragment:XM,map_particle_fragment:qM,map_particle_pars_fragment:$M,metalnessmap_fragment:YM,metalnessmap_pars_fragment:ZM,morphcolor_vertex:KM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:ew,normal_fragment_begin:tw,normal_fragment_maps:nw,normal_pars_fragment:iw,normal_pars_vertex:rw,normal_vertex:sw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:aw,clearcoat_normal_fragment_maps:lw,clearcoat_pars_fragment:uw,iridescence_pars_fragment:cw,output_fragment:fw,packing:dw,premultiplied_alpha_fragment:hw,project_vertex:pw,dithering_fragment:mw,dithering_pars_fragment:gw,roughnessmap_fragment:_w,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:yw,shadowmap_vertex:Sw,shadowmask_pars_fragment:Mw,skinbase_vertex:ww,skinning_pars_vertex:Ew,skinning_vertex:Cw,skinnormal_vertex:Tw,specularmap_fragment:bw,specularmap_pars_fragment:Aw,tonemapping_fragment:Lw,tonemapping_pars_fragment:Rw,transmission_fragment:Pw,transmission_pars_fragment:Dw,uv_pars_fragment:Iw,uv_pars_vertex:Nw,uv_vertex:kw,uv2_pars_fragment:Fw,uv2_pars_vertex:Ow,uv2_vertex:zw,worldpos_vertex:Uw,background_vert:Bw,background_frag:Vw,backgroundCube_vert:Gw,backgroundCube_frag:Ww,cube_vert:Hw,cube_frag:jw,depth_vert:Xw,depth_frag:qw,distanceRGBA_vert:$w,distanceRGBA_frag:Yw,equirect_vert:Zw,equirect_frag:Kw,linedashed_vert:Qw,linedashed_frag:Jw,meshbasic_vert:e3,meshbasic_frag:t3,meshlambert_vert:n3,meshlambert_frag:i3,meshmatcap_vert:r3,meshmatcap_frag:s3,meshnormal_vert:o3,meshnormal_frag:a3,meshphong_vert:l3,meshphong_frag:u3,meshphysical_vert:c3,meshphysical_frag:f3,meshtoon_vert:d3,meshtoon_frag:h3,points_vert:p3,points_frag:m3,shadow_vert:g3,shadow_frag:_3,sprite_vert:v3,sprite_frag:x3},se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new en},uv2Transform:{value:new en},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}}},Un={basic:{uniforms:Nt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:Nt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:Nt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:Nt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:Nt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:Nt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:Nt([se.points,se.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:Nt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:Nt([se.common,se.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:Nt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:Nt([se.sprite,se.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new en},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:Nt([se.common,se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:Nt([se.lights,se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Un.physical={uniforms:Nt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const xa={r:0,b:0,g:0};function y3(n,e,t,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,d=null,f=0,m=null;function x(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const S=n.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?h(a,l):v&&v.isColor&&(h(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Al)?(c===void 0&&(c=new oi(new Ts(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:ys(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==He,(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new oi(new ed(2,2),new yr({name:"BackgroundMaterial",uniforms:ys(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==He,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(xa,U0(n)),i.buffers.color.setClear(xa.r,xa.g,xa.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function S3(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(I,j,K,Q,P){let U=!1;if(o){const B=h(Q,K,j);u!==B&&(u=B,m(u.object)),U=g(I,Q,K,P),U&&_(I,Q,K,P)}else{const B=j.wireframe===!0;(u.geometry!==Q.id||u.program!==K.id||u.wireframe!==B)&&(u.geometry=Q.id,u.program=K.id,u.wireframe=B,U=!0)}P!==null&&t.update(P,34963),(U||c)&&(c=!1,y(I,j,K,Q),P!==null&&n.bindBuffer(34963,t.get(P).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function h(I,j,K){const Q=K.wireframe===!0;let P=a[I.id];P===void 0&&(P={},a[I.id]=P);let U=P[j.id];U===void 0&&(U={},P[j.id]=U);let B=U[Q];return B===void 0&&(B=p(f()),U[Q]=B),B}function p(I){const j=[],K=[],Q=[];for(let P=0;P<r;P++)j[P]=0,K[P]=0,Q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:Q,object:I,attributes:{},index:null}}function g(I,j,K,Q){const P=u.attributes,U=j.attributes;let B=0;const ne=K.getAttributes();for(const N in ne)if(ne[N].location>=0){const te=P[N];let re=U[N];if(re===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;B++}return u.attributesNum!==B||u.index!==Q}function _(I,j,K,Q){const P={},U=j.attributes;let B=0;const ne=K.getAttributes();for(const N in ne)if(ne[N].location>=0){let te=U[N];te===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),P[N]=re,B++}u.attributes=P,u.attributesNum=B,u.index=Q}function v(){const I=u.newAttributes;for(let j=0,K=I.length;j<K;j++)I[j]=0}function S(I){M(I,0)}function M(I,j){const K=u.newAttributes,Q=u.enabledAttributes,P=u.attributeDivisors;K[I]=1,Q[I]===0&&(n.enableVertexAttribArray(I),Q[I]=1),P[I]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),P[I]=j)}function b(){const I=u.newAttributes,j=u.enabledAttributes;for(let K=0,Q=j.length;K<Q;K++)j[K]!==I[K]&&(n.disableVertexAttribArray(K),j[K]=0)}function A(I,j,K,Q,P,U){i.isWebGL2===!0&&(K===5124||K===5125)?n.vertexAttribIPointer(I,j,K,P,U):n.vertexAttribPointer(I,j,K,Q,P,U)}function y(I,j,K,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const P=Q.attributes,U=K.getAttributes(),B=j.defaultAttributeValues;for(const ne in U){const N=U[ne];if(N.location>=0){let X=P[ne];if(X===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const te=X.normalized,re=X.itemSize,O=t.get(X);if(O===void 0)continue;const xe=O.buffer,he=O.type,pe=O.bytesPerElement;if(X.isInterleavedBufferAttribute){const ce=X.data,Be=ce.stride,Te=X.offset;if(ce.isInstancedInterleavedBuffer){for(let Se=0;Se<N.locationSize;Se++)M(N.location+Se,ce.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Se=0;Se<N.locationSize;Se++)S(N.location+Se);n.bindBuffer(34962,xe);for(let Se=0;Se<N.locationSize;Se++)A(N.location+Se,re/N.locationSize,he,te,Be*pe,(Te+re/N.locationSize*Se)*pe)}else{if(X.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)M(N.location+ce,X.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ce=0;ce<N.locationSize;ce++)S(N.location+ce);n.bindBuffer(34962,xe);for(let ce=0;ce<N.locationSize;ce++)A(N.location+ce,re/N.locationSize,he,te,re*pe,re/N.locationSize*ce*pe)}}else if(B!==void 0){const te=B[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(N.location,te);break;case 3:n.vertexAttrib3fv(N.location,te);break;case 4:n.vertexAttrib4fv(N.location,te);break;default:n.vertexAttrib1fv(N.location,te)}}}}b()}function T(){Z();for(const I in a){const j=a[I];for(const K in j){const Q=j[K];for(const P in Q)x(Q[P].object),delete Q[P];delete j[K]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const j=a[I.id];for(const K in j){const Q=j[K];for(const P in Q)x(Q[P].object),delete Q[P];delete j[K]}delete a[I.id]}function $(I){for(const j in a){const K=a[j];if(K[I.id]===void 0)continue;const Q=K[I.id];for(const P in Q)x(Q[P].object),delete Q[P];delete K[I.id]}}function Z(){k(),c=!0,u!==l&&(u=l,m(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function M3(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function w3(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),v=f>0,S=o||e.has("OES_texture_float"),M=v&&S,b=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:b}}function E3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ji,a=new en,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let S=g.clippingState||null;l.value=S,S=c(x,f,v,m);for(let M=0;M!==v;++M)S[M]=t[M];g.clippingState=S,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,m,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,S=m;v!==h;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function C3(n){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=_s:a===$c&&(o.mapping=vs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===qc||a===$c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new zS(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class T3 extends B0{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,vp=[.125,.215,.35,.446,.526,.582],tr=20,Uu=new T3,xp=new Ze;let Bu=null;const er=(1+Math.sqrt(5))/2,Ur=1/er,yp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,er,Ur),new z(0,er,-Ur),new z(Ur,0,er),new z(-Ur,0,er),new z(er,Ur,0),new z(-er,Ur,0)];class Sp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Bu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:To,format:Dn,encoding:vr,depthBuffer:!1},r=Mp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b3(s)),this._blurMaterial=A3(s,e,t)}return r}_compileMaterial(e){const t=new oi(this._lodPlanes[0],e);this._renderer.compile(t,Uu)}_sceneToCubeUV(e,t,i,r){const a=new gn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(xp),c.toneMapping=li,c.autoClear=!1;const m=new Mi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),x=new oi(new Ts,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(xp),h=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;ya(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_s||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yp[(r-1)%yp.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new oi(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*tr-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):tr;p>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${tr}`);const g=[];let _=0;for(let A=0;A<tr;++A){const y=A/h,T=Math.exp(-y*y/2);g.push(T),A===0?_+=T:A<p&&(_+=2*T)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],M=3*S*(r>v-es?r-v+es:0),b=4*(this._cubeSize-S);ya(t,M,b,3*S,2*S),l.setRenderTarget(t),l.render(d,Uu)}}function b3(n){const e=[],t=[],i=[];let r=n;const s=n-es+1+vp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-es?l=vp[o-n+es-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,h=3,p=2,g=1,_=new Float32Array(h*x*m),v=new Float32Array(p*x*m),S=new Float32Array(g*x*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,y=b>2?0:-1,T=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];_.set(T,h*x*b),v.set(f,p*x*b);const L=[b,b,b,b,b,b];S.set(L,g*x*b)}const M=new wr;M.setAttribute("position",new Hn(_,h)),M.setAttribute("uv",new Hn(v,p)),M.setAttribute("faceIndex",new Hn(S,g)),e.push(M),r>es&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mp(n,e,t){const i=new xr(n,e,t);return i.texture.mapping=Al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function A3(n,e,t){const i=new Float32Array(tr),r=new z(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function wp(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ep(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L3(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===qc||l===$c,c=l===_s||l===vs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Sp(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Sp(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function R3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function P3(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(d){const f=[],m=d.index,x=d.attributes.position;let h=0;if(m!==null){const _=m.array;h=m.version;for(let v=0,S=_.length;v<S;v+=3){const M=_[v+0],b=_[v+1],A=_[v+2];f.push(M,b,b,A,A,M)}}else{const _=x.array;h=x.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const M=v+0,b=v+1,A=v+2;f.push(M,b,b,A,A,M)}}const p=new(P0(f)?z0:O0)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function c(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function D3(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,x){if(x===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function I3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function N3(n,e){return n[0]-e[0]}function k3(n,e){return Math.abs(e[1])-Math.abs(n[1])}function F3(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new xt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let K=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var x=K;g!==void 0&&g.texture.dispose();const S=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let L=0;S===!0&&(L=1),M===!0&&(L=2),b===!0&&(L=3);let $=c.attributes.position.count*L,Z=1;$>e.maxTextureSize&&(Z=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const k=new Float32Array($*Z*4*p),I=new k0(k,$,Z,p);I.type=or,I.needsUpdate=!0;const j=L*4;for(let Q=0;Q<p;Q++){const P=A[Q],U=y[Q],B=T[Q],ne=$*Z*4*Q;for(let N=0;N<P.count;N++){const X=N*j;S===!0&&(o.fromBufferAttribute(P,N),k[ne+X+0]=o.x,k[ne+X+1]=o.y,k[ne+X+2]=o.z,k[ne+X+3]=0),M===!0&&(o.fromBufferAttribute(U,N),k[ne+X+4]=o.x,k[ne+X+5]=o.y,k[ne+X+6]=o.z,k[ne+X+7]=0),b===!0&&(o.fromBufferAttribute(B,N),k[ne+X+8]=o.x,k[ne+X+9]=o.y,k[ne+X+10]=o.z,k[ne+X+11]=B.itemSize===4?o.w:1)}}g={count:p,texture:I,size:new Ge($,Z)},s.set(c,g),c.addEventListener("dispose",K)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let M=0;M<h;M++)p[M]=[M,0];i[c.id]=p}for(let M=0;M<h;M++){const b=p[M];b[0]=M,b[1]=m[M]}p.sort(k3);for(let M=0;M<8;M++)M<h&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(N3);const g=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const b=a[M],A=b[0],y=b[1];A!==Number.MAX_SAFE_INTEGER&&y?(g&&c.getAttribute("morphTarget"+M)!==g[A]&&c.setAttribute("morphTarget"+M,g[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=y,v+=y):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const S=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function O3(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const H0=new jt,j0=new k0,X0=new SS,q0=new V0,Cp=[],Tp=[],bp=new Float32Array(16),Ap=new Float32Array(9),Lp=new Float32Array(4);function bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cp[r];if(s===void 0&&(s=new Float32Array(r),Cp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pl(n,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function U3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function B3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function V3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function G3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ct(t,i))return;Lp.set(i),n.uniformMatrix2fv(this.addr,!1,Lp),ft(t,i)}}function W3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ct(t,i))return;Ap.set(i),n.uniformMatrix3fv(this.addr,!1,Ap),ft(t,i)}}function H3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ct(t,i))return;bp.set(i),n.uniformMatrix4fv(this.addr,!1,bp),ft(t,i)}}function j3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Y3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function J3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||H0,r)}function e2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||X0,r)}function t2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||q0,r)}function n2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||j0,r)}function i2(n){switch(n){case 5126:return z3;case 35664:return U3;case 35665:return B3;case 35666:return V3;case 35674:return G3;case 35675:return W3;case 35676:return H3;case 5124:case 35670:return j3;case 35667:case 35671:return X3;case 35668:case 35672:return q3;case 35669:case 35673:return $3;case 5125:return Y3;case 36294:return Z3;case 36295:return K3;case 36296:return Q3;case 35678:case 36198:case 36298:case 36306:case 35682:return J3;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}function r2(n,e){n.uniform1fv(this.addr,e)}function s2(n,e){const t=bs(e,this.size,2);n.uniform2fv(this.addr,t)}function o2(n,e){const t=bs(e,this.size,3);n.uniform3fv(this.addr,t)}function a2(n,e){const t=bs(e,this.size,4);n.uniform4fv(this.addr,t)}function l2(n,e){const t=bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u2(n,e){const t=bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c2(n,e){const t=bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f2(n,e){n.uniform1iv(this.addr,e)}function d2(n,e){n.uniform2iv(this.addr,e)}function h2(n,e){n.uniform3iv(this.addr,e)}function p2(n,e){n.uniform4iv(this.addr,e)}function m2(n,e){n.uniform1uiv(this.addr,e)}function g2(n,e){n.uniform2uiv(this.addr,e)}function _2(n,e){n.uniform3uiv(this.addr,e)}function v2(n,e){n.uniform4uiv(this.addr,e)}function x2(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||H0,s[o])}function y2(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||X0,s[o])}function S2(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||q0,s[o])}function M2(n,e,t){const i=this.cache,r=e.length,s=Pl(t,r);ct(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||j0,s[o])}function w2(n){switch(n){case 5126:return r2;case 35664:return s2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return u2;case 35676:return c2;case 5124:case 35670:return f2;case 35667:case 35671:return d2;case 35668:case 35672:return h2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return y2;case 35680:case 36300:case 36308:case 36293:return S2;case 36289:case 36303:case 36311:case 36292:return M2}}class E2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=i2(t.type)}}class C2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=w2(t.type)}}class T2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function Rp(n,e){n.seq.push(e),n.map[e.id]=e}function b2(n,e,t){const i=n.name,r=i.length;for(Vu.lastIndex=0;;){const s=Vu.exec(i),o=Vu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Rp(t,u===void 0?new E2(a,n,e):new C2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new T2(a),Rp(t,d)),t=d}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);b2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let A2=0;function L2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function R2(n){switch(n){case vr:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Dp(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+L2(n.getShaderSource(e),o)}else return r}function P2(n,e){const t=R2(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function D2(n,e){let t;switch(e){case q1:t="Linear";break;case $1:t="Reinhard";break;case Y1:t="OptimizedCineon";break;case Z1:t="ACESFilmic";break;case K1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function N2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k2(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ks(n){return n!==""}function Ip(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Np(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(n){return n.replace(F2,O2)}function O2(n,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Jc(t)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(n){return n.replace(z2,U2)}function U2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===C1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zs&&(e="SHADOWMAP_TYPE_VSM"),e}function V2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function W2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case A0:e="ENVMAP_BLENDING_MULTIPLY";break;case j1:e="ENVMAP_BLENDING_MIX";break;case X1:e="ENVMAP_BLENDING_ADD";break}return e}function H2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function j2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=B2(t),u=V2(t),c=G2(t),d=W2(t),f=H2(t),m=t.isWebGL2?"":I2(t),x=N2(s),h=r.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Ks).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Ks).join(`
`),g.length>0&&(g+=`
`)):(p=[Fp(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),g=[m,Fp(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ce.tonemapping_pars_fragment:"",t.toneMapping!==li?D2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,P2("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Jc(o),o=Ip(o,t),o=Np(o,t),a=Jc(a),a=Ip(a,t),a=Np(a,t),o=kp(o),a=kp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,S=_+g+a,M=Pp(r,35633,v),b=Pp(r,35632,S);if(r.attachShader(h,M),r.attachShader(h,b),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const T=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(M).trim(),$=r.getShaderInfoLog(b).trim();let Z=!0,k=!0;if(r.getProgramParameter(h,35714)===!1){Z=!1;const I=Dp(r,M,"vertex"),j=Dp(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+I+`
`+j)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(L===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:L,prefix:p},fragmentShader:{log:$,prefix:g}})}r.deleteShader(M),r.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new Oa(r,h)),A};let y;return this.getAttributes=function(){return y===void 0&&(y=k2(r,h)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=A2++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=b,this}let X2=0;class q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $2(e),t.set(e,i)),i}}class $2{constructor(e){this.id=X2++,this.code=e,this.usedTimes=0}}function Y2(n,e,t,i,r,s,o){const a=new F0,l=new q2,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,L,$,Z){const k=$.fog,I=Z.geometry,j=y.isMeshStandardMaterial?$.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),Q=K&&K.mapping===Al?K.image.height:null,P=x[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const U=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,B=U!==void 0?U.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let N,X,te,re;if(P){const Be=Un[P];N=Be.vertexShader,X=Be.fragmentShader}else N=y.vertexShader,X=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const O=n.getRenderTarget(),xe=y.alphaTest>0,he=y.clearcoat>0,pe=y.iridescence>0;return{isWebGL2:c,shaderID:P,shaderName:y.type,vertexShader:N,fragmentShader:X,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?n.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:vr,map:!!y.map,matcap:!!y.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===_S,tangentSpaceNormalMap:y.normalMapType===gS,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===He,clearcoat:he,clearcoatMap:he&&!!y.clearcoatMap,clearcoatRoughnessMap:he&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:he&&!!y.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!y.iridescenceMap,iridescenceThicknessMap:pe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===as,alphaMap:!!y.alphaMap,alphaTest:xe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!k,useFog:y.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:li,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bi,flipSided:y.side===nn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)T.push(L),T.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(g(T,y),_(T,y),T.push(n.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function v(y){const T=x[y.type];let L;if(T){const $=Un[T];L=NS.clone($.uniforms)}else L=y.uniforms;return L}function S(y,T){let L;for(let $=0,Z=u.length;$<Z;$++){const k=u[$];if(k.cacheKey===T){L=k,++L.usedTimes;break}}return L===void 0&&(L=new j2(n,T,y,s),u.push(L)),L}function M(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function b(y){l.remove(y)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:u,dispose:A}}function Z2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function K2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Op(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,x,h,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||K2),i.length>1&&i.sort(f||Op),r.length>1&&r.sort(f||Op)}function c(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Q2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new zp,n.set(i,[o])):r>=s.length?(o=new zp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function J2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function eE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tE=0;function nE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iE(n,e){const t=new J2,i=eE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new z);const s=new z,o=new Mt,a=new Mt;function l(c,d){let f=0,m=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let h=0,p=0,g=0,_=0,v=0,S=0,M=0,b=0,A=0,y=0;c.sort(nE);const T=d!==!0?Math.PI:1;for(let $=0,Z=c.length;$<Z;$++){const k=c[$],I=k.color,j=k.intensity,K=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=I.r*j*T,m+=I.g*j*T,x+=I.b*j*T;else if(k.isLightProbe)for(let P=0;P<9;P++)r.probe[P].addScaledVector(k.sh.coefficients[P],j);else if(k.isDirectionalLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){const U=k.shadow,B=i.get(k);B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,r.directionalShadow[h]=B,r.directionalShadowMap[h]=Q,r.directionalShadowMatrix[h]=k.shadow.matrix,S++}r.directional[h]=P,h++}else if(k.isSpotLight){const P=t.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(I).multiplyScalar(j*T),P.distance=K,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,r.spot[g]=P;const U=k.shadow;if(k.map&&(r.spotLightMap[A]=k.map,A++,U.updateMatrices(k),k.castShadow&&y++),r.spotLightMatrix[g]=U.matrix,k.castShadow){const B=i.get(k);B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,r.spotShadow[g]=B,r.spotShadowMap[g]=Q,b++}g++}else if(k.isRectAreaLight){const P=t.get(k);P.color.copy(I).multiplyScalar(j),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=P,_++}else if(k.isPointLight){const P=t.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity*T),P.distance=k.distance,P.decay=k.decay,k.castShadow){const U=k.shadow,B=i.get(k);B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,B.shadowCameraNear=U.camera.near,B.shadowCameraFar=U.camera.far,r.pointShadow[p]=B,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=k.shadow.matrix,M++}r.point[p]=P,p++}else if(k.isHemisphereLight){const P=t.get(k);P.skyColor.copy(k.color).multiplyScalar(j*T),P.groundColor.copy(k.groundColor).multiplyScalar(j*T),r.hemi[v]=P,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==_||L.hemiLength!==v||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==b||L.numSpotMaps!==A)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=b+A-y,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=y,L.directionalLength=h,L.pointLength=p,L.spotLength=g,L.rectAreaLength=_,L.hemiLength=v,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=b,L.numSpotMaps=A,r.version=tE++)}function u(c,d){let f=0,m=0,x=0,h=0,p=0;const g=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const S=c[_];if(S.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(S.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(S.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(S.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function Up(n,e){const t=new iE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function rE(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Up(n,e),t.set(s,[l])):o>=a.length?(l=new Up(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class sE extends Rl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oE extends Rl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uE(n,e,t){let i=new G0;const r=new Ge,s=new Ge,o=new xt,a=new sE({depthPacking:mS}),l=new oE,u={},c=t.maxTextureSize,d={[Ui]:nn,[nn]:Ui,[bi]:bi},f=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:aE,fragmentShader:lE}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new wr;x.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new oi(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C0,this.render=function(S,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Fi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let $=0,Z=S.length;$<Z;$++){const k=S[$],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null){const Q=this.type!==Zs?{minFilter:Ft,magFilter:Ft}:{};I.map=new xr(r.x,r.y,Q),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const K=I.getViewportCount();for(let Q=0;Q<K;Q++){const P=I.getViewport(Q);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),L.viewport(o),I.updateMatrices(k,Q),i=I.getFrustum(),v(M,b,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===Zs&&g(I,b),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(A,y,T)};function g(S,M){const b=e.update(h);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new xr(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,b,f,h,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,b,m,h,null)}function _(S,M,b,A,y,T){let L=null;const $=b.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if($!==void 0)L=$;else if(L=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Z=L.uuid,k=M.uuid;let I=u[Z];I===void 0&&(I={},u[Z]=I);let j=I[k];j===void 0&&(j=L.clone(),I[k]=j),L=j}return L.visible=M.visible,L.wireframe=M.wireframe,T===Zs?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(b.matrixWorld),L.nearDistance=A,L.farDistance=y),L}function v(S,M,b,A,y){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Zs)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,S.matrixWorld);const $=e.update(S),Z=S.material;if(Array.isArray(Z)){const k=$.groups;for(let I=0,j=k.length;I<j;I++){const K=k[I],Q=Z[K.materialIndex];if(Q&&Q.visible){const P=_(S,Q,A,b.near,b.far,y);n.renderBufferDirect(b,null,$,P,S,K)}}}else if(Z.visible){const k=_(S,Z,A,b.near,b.far,y);n.renderBufferDirect(b,null,$,k,S,null)}}const L=S.children;for(let $=0,Z=L.length;$<Z;$++)v(L[$],M,b,A,y)}}function cE(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const V=new xt;let J=null;const le=new xt(0,0,0,0);return{setMask:function(de){J!==de&&!R&&(n.colorMask(de,de,de,de),J=de)},setLocked:function(de){R=de},setClear:function(de,Oe,ht,Ct,Wi){Wi===!0&&(de*=Ct,Oe*=Ct,ht*=Ct),V.set(de,Oe,ht,Ct),le.equals(V)===!1&&(n.clearColor(de,Oe,ht,Ct),le.copy(V))},reset:function(){R=!1,J=null,le.set(-1,0,0,0)}}}function s(){let R=!1,V=null,J=null,le=null;return{setTest:function(de){de?xe(2929):he(2929)},setMask:function(de){V!==de&&!R&&(n.depthMask(de),V=de)},setFunc:function(de){if(J!==de){switch(de){case z1:n.depthFunc(512);break;case U1:n.depthFunc(519);break;case B1:n.depthFunc(513);break;case Xc:n.depthFunc(515);break;case V1:n.depthFunc(514);break;case G1:n.depthFunc(518);break;case W1:n.depthFunc(516);break;case H1:n.depthFunc(517);break;default:n.depthFunc(515)}J=de}},setLocked:function(de){R=de},setClear:function(de){le!==de&&(n.clearDepth(de),le=de)},reset:function(){R=!1,V=null,J=null,le=null}}}function o(){let R=!1,V=null,J=null,le=null,de=null,Oe=null,ht=null,Ct=null,Wi=null;return{setTest:function(qe){R||(qe?xe(2960):he(2960))},setMask:function(qe){V!==qe&&!R&&(n.stencilMask(qe),V=qe)},setFunc:function(qe,qn,cn){(J!==qe||le!==qn||de!==cn)&&(n.stencilFunc(qe,qn,cn),J=qe,le=qn,de=cn)},setOp:function(qe,qn,cn){(Oe!==qe||ht!==qn||Ct!==cn)&&(n.stencilOp(qe,qn,cn),Oe=qe,ht=qn,Ct=cn)},setLocked:function(qe){R=qe},setClear:function(qe){Wi!==qe&&(n.clearStencil(qe),Wi=qe)},reset:function(){R=!1,V=null,J=null,le=null,de=null,Oe=null,ht=null,Ct=null,Wi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,S=null,M=null,b=null,A=null,y=null,T=!1,L=null,$=null,Z=null,k=null,I=null;const j=n.getParameter(35661);let K=!1,Q=0;const P=n.getParameter(7938);P.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(P)[1]),K=Q>=1):P.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),K=Q>=2);let U=null,B={};const ne=n.getParameter(3088),N=n.getParameter(2978),X=new xt().fromArray(ne),te=new xt().fromArray(N);function re(R,V,J){const le=new Uint8Array(4),de=n.createTexture();n.bindTexture(R,de),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Oe=0;Oe<J;Oe++)n.texImage2D(V+Oe,0,6408,1,1,0,6408,5121,le);return de}const O={};O[3553]=re(3553,3553,1),O[34067]=re(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),xe(2929),l.setFunc(Xc),Et(!1),un(Ah),xe(2884),Pt(Fi);function xe(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function he(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function pe(R,V){return m[R]!==V?(n.bindFramebuffer(R,V),m[R]=V,i&&(R===36009&&(m[36160]=V),R===36160&&(m[36009]=V)),!0):!1}function ce(R,V){let J=h,le=!1;if(R)if(J=x.get(V),J===void 0&&(J=[],x.set(V,J)),R.isWebGLMultipleRenderTargets){const de=R.texture;if(J.length!==de.length||J[0]!==36064){for(let Oe=0,ht=de.length;Oe<ht;Oe++)J[Oe]=36064+Oe;J.length=de.length,le=!0}}else J[0]!==36064&&(J[0]=36064,le=!0);else J[0]!==1029&&(J[0]=1029,le=!0);le&&(t.isWebGL2?n.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Be(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const Te={[Vr]:32774,[b1]:32778,[A1]:32779};if(i)Te[Dh]=32775,Te[Ih]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(Te[Dh]=R.MIN_EXT,Te[Ih]=R.MAX_EXT)}const Se={[L1]:0,[R1]:1,[P1]:768,[T0]:770,[O1]:776,[k1]:774,[I1]:772,[D1]:769,[b0]:771,[F1]:775,[N1]:773};function Pt(R,V,J,le,de,Oe,ht,Ct){if(R===Fi){g===!0&&(he(3042),g=!1);return}if(g===!1&&(xe(3042),g=!0),R!==T1){if(R!==_||Ct!==T){if((v!==Vr||b!==Vr)&&(n.blendEquation(32774),v=Vr,b=Vr),Ct)switch(R){case as:n.blendFuncSeparate(1,771,1,771);break;case Lh:n.blendFunc(1,1);break;case Rh:n.blendFuncSeparate(0,769,0,1);break;case Ph:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case as:n.blendFuncSeparate(770,771,1,771);break;case Lh:n.blendFunc(770,1);break;case Rh:n.blendFuncSeparate(0,769,0,1);break;case Ph:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,M=null,A=null,y=null,_=R,T=Ct}return}de=de||V,Oe=Oe||J,ht=ht||le,(V!==v||de!==b)&&(n.blendEquationSeparate(Te[V],Te[de]),v=V,b=de),(J!==S||le!==M||Oe!==A||ht!==y)&&(n.blendFuncSeparate(Se[J],Se[le],Se[Oe],Se[ht]),S=J,M=le,A=Oe,y=ht),_=R,T=!1}function ln(R,V){R.side===bi?he(2884):xe(2884);let J=R.side===nn;V&&(J=!J),Et(J),R.blending===as&&R.transparent===!1?Pt(Fi):Pt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const le=R.stencilWrite;u.setTest(le),le&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ze(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xe(32926):he(32926)}function Et(R){L!==R&&(R?n.frontFace(2304):n.frontFace(2305),L=R)}function un(R){R!==w1?(xe(2884),R!==$&&(R===Ah?n.cullFace(1029):R===E1?n.cullFace(1028):n.cullFace(1032))):he(2884),$=R}function ot(R){R!==Z&&(K&&n.lineWidth(R),Z=R)}function ze(R,V,J){R?(xe(32823),(k!==V||I!==J)&&(n.polygonOffset(V,J),k=V,I=J)):he(32823)}function Xn(R){R?xe(3089):he(3089)}function Sn(R){R===void 0&&(R=33984+j-1),U!==R&&(n.activeTexture(R),U=R)}function C(R,V,J){J===void 0&&(U===null?J=33984+j-1:J=U);let le=B[J];le===void 0&&(le={type:void 0,texture:void 0},B[J]=le),(le.type!==R||le.texture!==V)&&(U!==J&&(n.activeTexture(J),U=J),n.bindTexture(R,V||O[R]),le.type=R,le.texture=V)}function w(){const R=B[U];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function fe(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(R){X.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),X.copy(R))}function me(R){te.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),te.copy(R))}function ke(R,V){let J=d.get(V);J===void 0&&(J=new WeakMap,d.set(V,J));let le=J.get(R);le===void 0&&(le=n.getUniformBlockIndex(V,R.name),J.set(R,le))}function Xe(R,V){const le=d.get(V).get(R);c.get(V)!==le&&(n.uniformBlockBinding(V,le,R.__bindingPointIndex),c.set(V,le))}function dt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},U=null,B={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,S=null,M=null,b=null,A=null,y=null,T=!1,L=null,$=null,Z=null,k=null,I=null,X.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:xe,disable:he,bindFramebuffer:pe,drawBuffers:ce,useProgram:Be,setBlending:Pt,setMaterial:ln,setFlipSided:Et,setCullFace:un,setLineWidth:ot,setPolygonOffset:ze,setScissorTest:Xn,activeTexture:Sn,bindTexture:C,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ee,texImage2D:ye,texImage3D:fe,updateUBOMapping:ke,uniformBlockBinding:Xe,texStorage2D:q,texStorage3D:_e,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:Me,compressedTexSubImage3D:ae,scissor:ve,viewport:me,reset:dt}}function fE(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return g?new OffscreenCanvas(C,w):Ao("canvas")}function v(C,w,W,ee){let ie=1;if((C.width>ee||C.height>ee)&&(ie=ee/Math.max(C.width,C.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=w?Qc:Math.floor,Me=oe(ie*C.width),ae=oe(ie*C.height);h===void 0&&(h=_(Me,ae));const q=W?_(Me,ae):h;return q.width=Me,q.height=ae,q.getContext("2d").drawImage(C,0,0,Me,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+ae+")."),q}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return ap(C.width)&&ap(C.height)}function M(C){return a?!1:C.wrapS!==Pn||C.wrapT!==Pn||C.minFilter!==Ft&&C.minFilter!==mn}function b(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ft&&C.minFilter!==mn}function A(C){n.generateMipmap(C)}function y(C,w,W,ee,ie=!1){if(a===!1)return w;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=w;return w===6403&&(W===5126&&(oe=33326),W===5131&&(oe=33325),W===5121&&(oe=33321)),w===33319&&(W===5126&&(oe=33328),W===5131&&(oe=33327),W===5121&&(oe=33323)),w===6408&&(W===5126&&(oe=34836),W===5131&&(oe=34842),W===5121&&(oe=ee===He&&ie===!1?35907:32856),W===32819&&(oe=32854),W===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function T(C,w,W){return b(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==mn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){return C===Ft||C===Nh||C===cu?9728:9729}function $(C){const w=C.target;w.removeEventListener("dispose",$),k(w),w.isVideoTexture&&x.delete(w)}function Z(C){const w=C.target;w.removeEventListener("dispose",Z),j(w)}function k(C){const w=i.get(C);if(w.__webglInit===void 0)return;const W=C.source,ee=p.get(W);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(C),Object.keys(ee).length===0&&p.delete(W)}i.remove(C)}function I(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const W=C.source,ee=p.get(W);delete ee[w.__cacheKey],o.memory.textures--}function j(C){const w=C.texture,W=i.get(C),ee=i.get(w);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&n.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&n.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&n.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,oe=w.length;ie<oe;ie++){const Me=i.get(w[ie]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),o.memory.textures--),i.remove(w[ie])}i.remove(w),i.remove(C)}let K=0;function Q(){K=0}function P(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function U(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function B(C,w){const W=i.get(C);if(C.isVideoTexture&&Xn(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(W,C,w);return}}t.bindTexture(3553,W.__webglTexture,33984+w)}function ne(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){he(W,C,w);return}t.bindTexture(35866,W.__webglTexture,33984+w)}function N(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){he(W,C,w);return}t.bindTexture(32879,W.__webglTexture,33984+w)}function X(C,w){const W=i.get(C);if(C.version>0&&W.__version!==C.version){pe(W,C,w);return}t.bindTexture(34067,W.__webglTexture,33984+w)}const te={[Yc]:10497,[Pn]:33071,[Zc]:33648},re={[Ft]:9728,[Nh]:9984,[cu]:9986,[mn]:9729,[Q1]:9985,[Co]:9987};function O(C,w,W){if(W?(n.texParameteri(C,10242,te[w.wrapS]),n.texParameteri(C,10243,te[w.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,te[w.wrapR]),n.texParameteri(C,10240,re[w.magFilter]),n.texParameteri(C,10241,re[w.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(w.wrapS!==Pn||w.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,L(w.magFilter)),n.texParameteri(C,10241,L(w.minFilter)),w.minFilter!==Ft&&w.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ft||w.minFilter!==cu&&w.minFilter!==Co||w.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===To&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function xe(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",$));const ee=w.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const oe=U(w);if(oe!==C.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[oe].usedTimes++;const Me=ie[C.__cacheKey];Me!==void 0&&(ie[C.__cacheKey].usedTimes--,Me.usedTimes===0&&I(w)),C.__cacheKey=oe,C.__webglTexture=ie[oe].texture}return W}function he(C,w,W){let ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=35866),w.isData3DTexture&&(ee=32879);const ie=xe(C,w),oe=w.source;t.bindTexture(ee,C.__webglTexture,33984+W);const Me=i.get(oe);if(oe.version!==Me.__version||ie===!0){t.activeTexture(33984+W),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ae=M(w)&&S(w.image)===!1;let q=v(w.image,ae,!1,c);q=Sn(w,q);const _e=S(q)||a,ye=s.convert(w.format,w.encoding);let fe=s.convert(w.type),ve=y(w.internalFormat,ye,fe,w.encoding,w.isVideoTexture);O(ee,w,_e);let me;const ke=w.mipmaps,Xe=a&&w.isVideoTexture!==!0,dt=Me.__version===void 0||ie===!0,R=T(w,q,_e);if(w.isDepthTexture)ve=6402,a?w.type===or?ve=36012:w.type===sr?ve=33190:w.type===ls?ve=35056:ve=33189:w.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ur&&ve===6402&&w.type!==R0&&w.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=sr,fe=s.convert(w.type)),w.format===xs&&ve===6402&&(ve=34041,w.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ls,fe=s.convert(w.type))),dt&&(Xe?t.texStorage2D(3553,1,ve,q.width,q.height):t.texImage2D(3553,0,ve,q.width,q.height,0,ye,fe,null));else if(w.isDataTexture)if(ke.length>0&&_e){Xe&&dt&&t.texStorage2D(3553,R,ve,ke[0].width,ke[0].height);for(let V=0,J=ke.length;V<J;V++)me=ke[V],Xe?t.texSubImage2D(3553,V,0,0,me.width,me.height,ye,fe,me.data):t.texImage2D(3553,V,ve,me.width,me.height,0,ye,fe,me.data);w.generateMipmaps=!1}else Xe?(dt&&t.texStorage2D(3553,R,ve,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ye,fe,q.data)):t.texImage2D(3553,0,ve,q.width,q.height,0,ye,fe,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xe&&dt&&t.texStorage3D(35866,R,ve,ke[0].width,ke[0].height,q.depth);for(let V=0,J=ke.length;V<J;V++)me=ke[V],w.format!==Dn?ye!==null?Xe?t.compressedTexSubImage3D(35866,V,0,0,0,me.width,me.height,q.depth,ye,me.data,0,0):t.compressedTexImage3D(35866,V,ve,me.width,me.height,q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,V,0,0,0,me.width,me.height,q.depth,ye,fe,me.data):t.texImage3D(35866,V,ve,me.width,me.height,q.depth,0,ye,fe,me.data)}else{Xe&&dt&&t.texStorage2D(3553,R,ve,ke[0].width,ke[0].height);for(let V=0,J=ke.length;V<J;V++)me=ke[V],w.format!==Dn?ye!==null?Xe?t.compressedTexSubImage2D(3553,V,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(3553,V,ve,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,V,0,0,me.width,me.height,ye,fe,me.data):t.texImage2D(3553,V,ve,me.width,me.height,0,ye,fe,me.data)}else if(w.isDataArrayTexture)Xe?(dt&&t.texStorage3D(35866,R,ve,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ye,fe,q.data)):t.texImage3D(35866,0,ve,q.width,q.height,q.depth,0,ye,fe,q.data);else if(w.isData3DTexture)Xe?(dt&&t.texStorage3D(32879,R,ve,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ye,fe,q.data)):t.texImage3D(32879,0,ve,q.width,q.height,q.depth,0,ye,fe,q.data);else if(w.isFramebufferTexture){if(dt)if(Xe)t.texStorage2D(3553,R,ve,q.width,q.height);else{let V=q.width,J=q.height;for(let le=0;le<R;le++)t.texImage2D(3553,le,ve,V,J,0,ye,fe,null),V>>=1,J>>=1}}else if(ke.length>0&&_e){Xe&&dt&&t.texStorage2D(3553,R,ve,ke[0].width,ke[0].height);for(let V=0,J=ke.length;V<J;V++)me=ke[V],Xe?t.texSubImage2D(3553,V,0,0,ye,fe,me):t.texImage2D(3553,V,ve,ye,fe,me);w.generateMipmaps=!1}else Xe?(dt&&t.texStorage2D(3553,R,ve,q.width,q.height),t.texSubImage2D(3553,0,0,0,ye,fe,q)):t.texImage2D(3553,0,ve,ye,fe,q);b(w,_e)&&A(ee),Me.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function pe(C,w,W){if(w.image.length!==6)return;const ee=xe(C,w),ie=w.source;t.bindTexture(34067,C.__webglTexture,33984+W);const oe=i.get(ie);if(ie.version!==oe.__version||ee===!0){t.activeTexture(33984+W),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const Me=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,q=[];for(let V=0;V<6;V++)!Me&&!ae?q[V]=v(w.image[V],!1,!0,u):q[V]=ae?w.image[V].image:w.image[V],q[V]=Sn(w,q[V]);const _e=q[0],ye=S(_e)||a,fe=s.convert(w.format,w.encoding),ve=s.convert(w.type),me=y(w.internalFormat,fe,ve,w.encoding),ke=a&&w.isVideoTexture!==!0,Xe=oe.__version===void 0||ee===!0;let dt=T(w,_e,ye);O(34067,w,ye);let R;if(Me){ke&&Xe&&t.texStorage2D(34067,dt,me,_e.width,_e.height);for(let V=0;V<6;V++){R=q[V].mipmaps;for(let J=0;J<R.length;J++){const le=R[J];w.format!==Dn?fe!==null?ke?t.compressedTexSubImage2D(34069+V,J,0,0,le.width,le.height,fe,le.data):t.compressedTexImage2D(34069+V,J,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(34069+V,J,0,0,le.width,le.height,fe,ve,le.data):t.texImage2D(34069+V,J,me,le.width,le.height,0,fe,ve,le.data)}}}else{R=w.mipmaps,ke&&Xe&&(R.length>0&&dt++,t.texStorage2D(34067,dt,me,q[0].width,q[0].height));for(let V=0;V<6;V++)if(ae){ke?t.texSubImage2D(34069+V,0,0,0,q[V].width,q[V].height,fe,ve,q[V].data):t.texImage2D(34069+V,0,me,q[V].width,q[V].height,0,fe,ve,q[V].data);for(let J=0;J<R.length;J++){const de=R[J].image[V].image;ke?t.texSubImage2D(34069+V,J+1,0,0,de.width,de.height,fe,ve,de.data):t.texImage2D(34069+V,J+1,me,de.width,de.height,0,fe,ve,de.data)}}else{ke?t.texSubImage2D(34069+V,0,0,0,fe,ve,q[V]):t.texImage2D(34069+V,0,me,fe,ve,q[V]);for(let J=0;J<R.length;J++){const le=R[J];ke?t.texSubImage2D(34069+V,J+1,0,0,fe,ve,le.image[V]):t.texImage2D(34069+V,J+1,me,fe,ve,le.image[V])}}}b(w,ye)&&A(34067),oe.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ce(C,w,W,ee,ie){const oe=s.convert(W.format,W.encoding),Me=s.convert(W.type),ae=y(W.internalFormat,oe,Me,W.encoding);i.get(w).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,ae,w.width,w.height,w.depth,0,oe,Me,null):t.texImage2D(ie,0,ae,w.width,w.height,0,oe,Me,null)),t.bindFramebuffer(36160,C),ze(w)?f.framebufferTexture2DMultisampleEXT(36160,ee,ie,i.get(W).__webglTexture,0,ot(w)):(ie===3553||ie>=34069&&ie<=34074)&&n.framebufferTexture2D(36160,ee,ie,i.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,w,W){if(n.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(W||ze(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===or?ee=36012:ie.type===sr&&(ee=33190));const oe=ot(w);ze(w)?f.renderbufferStorageMultisampleEXT(36161,oe,ee,w.width,w.height):n.renderbufferStorageMultisample(36161,oe,ee,w.width,w.height)}else n.renderbufferStorage(36161,ee,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ee=ot(w);W&&ze(w)===!1?n.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<ee.length;ie++){const oe=ee[ie],Me=s.convert(oe.format,oe.encoding),ae=s.convert(oe.type),q=y(oe.internalFormat,Me,ae,oe.encoding),_e=ot(w);W&&ze(w)===!1?n.renderbufferStorageMultisample(36161,_e,q,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(36161,_e,q,w.width,w.height):n.renderbufferStorage(36161,q,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Te(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ie=ot(w);if(w.depthTexture.format===ur)ze(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===xs)ze(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function Se(C){const w=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Be(w.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Be(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Pt(C,w,W){const ee=i.get(C);w!==void 0&&ce(ee.__webglFramebuffer,C,C.texture,36064,3553),W!==void 0&&Se(C)}function ln(C){const w=C.texture,W=i.get(C),ee=i.get(w);C.addEventListener("dispose",Z),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,Me=S(C)||a;if(ie){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)W.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(W.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const ae=C.texture;for(let q=0,_e=ae.length;q<_e;q++){const ye=i.get(ae[q]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ze(C)===!1){const ae=oe?w:[w];W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let q=0;q<ae.length;q++){const _e=ae[q];W.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(36161,W.__webglColorRenderbuffer[q]);const ye=s.convert(_e.format,_e.encoding),fe=s.convert(_e.type),ve=y(_e.internalFormat,ye,fe,_e.encoding,C.isXRRenderTarget===!0),me=ot(C);n.renderbufferStorageMultisample(36161,me,ve,C.width,C.height),n.framebufferRenderbuffer(36160,36064+q,36161,W.__webglColorRenderbuffer[q])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),O(34067,w,Me);for(let ae=0;ae<6;ae++)ce(W.__webglFramebuffer[ae],C,w,36064,34069+ae);b(w,Me)&&A(34067),t.unbindTexture()}else if(oe){const ae=C.texture;for(let q=0,_e=ae.length;q<_e;q++){const ye=ae[q],fe=i.get(ye);t.bindTexture(3553,fe.__webglTexture),O(3553,ye,Me),ce(W.__webglFramebuffer,C,ye,36064+q,3553),b(ye,Me)&&A(3553)}t.unbindTexture()}else{let ae=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ae=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ee.__webglTexture),O(ae,w,Me),ce(W.__webglFramebuffer,C,w,36064,ae),b(w,Me)&&A(ae),t.unbindTexture()}C.depthBuffer&&Se(C)}function Et(C){const w=S(C)||a,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ie=W.length;ee<ie;ee++){const oe=W[ee];if(b(oe,w)){const Me=C.isWebGLCubeRenderTarget?34067:3553,ae=i.get(oe).__webglTexture;t.bindTexture(Me,ae),A(Me),t.unbindTexture()}}}function un(C){if(a&&C.samples>0&&ze(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,ee=C.height;let ie=16384;const oe=[],Me=C.stencilBuffer?33306:36096,ae=i.get(C),q=C.isWebGLMultipleRenderTargets===!0;if(q)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,ae.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ae.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){oe.push(36064+_e),C.depthBuffer&&oe.push(Me);const ye=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ye===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),q&&n.framebufferRenderbuffer(36008,36064,36161,ae.__webglColorRenderbuffer[_e]),ye===!0&&(n.invalidateFramebuffer(36008,[Me]),n.invalidateFramebuffer(36009,[Me])),q){const fe=i.get(w[_e]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,fe,0)}n.blitFramebuffer(0,0,W,ee,0,0,W,ee,ie,9728),m&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(36160,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+_e,36161,ae.__webglColorRenderbuffer[_e]);const ye=i.get(w[_e]).__webglTexture;t.bindFramebuffer(36160,ae.__webglFramebuffer),n.framebufferTexture2D(36009,36064+_e,3553,ye,0)}t.bindFramebuffer(36009,ae.__webglMultisampledFramebuffer)}}function ot(C){return Math.min(d,C.samples)}function ze(C){const w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xn(C){const w=o.render.frame;x.get(C)!==w&&(x.set(C,w),C.update())}function Sn(C,w){const W=C.encoding,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Kc||W!==vr&&(W===He?a===!1?e.has("EXT_sRGB")===!0&&ee===Dn?(C.format=Kc,C.minFilter=mn,C.generateMipmaps=!1):w=I0.sRGBToLinear(w):(ee!==Dn||ie!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=Pt,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ze}function dE(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===_r)return 5121;if(s===nS)return 32819;if(s===iS)return 32820;if(s===J1)return 5120;if(s===eS)return 5122;if(s===R0)return 5123;if(s===tS)return 5124;if(s===sr)return 5125;if(s===or)return 5126;if(s===To)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rS)return 6406;if(s===Dn)return 6408;if(s===sS)return 6409;if(s===oS)return 6410;if(s===ur)return 6402;if(s===xs)return 34041;if(s===Kc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===aS)return 6403;if(s===lS)return 36244;if(s===uS)return 33319;if(s===cS)return 33320;if(s===fS)return 36249;if(s===fu||s===du||s===hu||s===pu)if(o===He)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Fh||s===Oh||s===zh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dS)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Uh||s===Bh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Uh)return o===He?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Bh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vh||s===Gh||s===Wh||s===Hh||s===jh||s===Xh||s===qh||s===$h||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===ep)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Qh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jh)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ep)return o===He?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===mu)return o===He?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===hS||s===tp||s===np||s===ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===mu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===np)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ls?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class hE extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pE={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mE extends jt{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ur,c!==ur&&c!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ur&&(i=sr),i===void 0&&c===xs&&(i=ls),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class gE extends Cs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,m=null,x=null;const h=t.getContextAttributes();let p=null,g=null;const _=[],v=[],S=new Set,M=new Map,b=new gn;b.layers.enable(1),b.viewport=new xt;const A=new gn;A.layers.enable(2),A.viewport=new xt;const y=[b,A],T=new hE;T.layers.enable(1),T.layers.enable(2);let L=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let X=_[N];return X===void 0&&(X=new Gu,_[N]=X),X.getTargetRaySpace()},this.getControllerGrip=function(N){let X=_[N];return X===void 0&&(X=new Gu,_[N]=X),X.getGripSpace()},this.getHand=function(N){let X=_[N];return X===void 0&&(X=new Gu,_[N]=X),X.getHandSpace()};function Z(N){const X=v.indexOf(N.inputSource);if(X===-1)return;const te=_[X];te!==void 0&&te.dispatchEvent({type:N.type,data:N.inputSource})}function k(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",I);for(let N=0;N<_.length;N++){const X=v[N];X!==null&&(v[N]=null,_[N].disconnect(X))}L=null,$=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,g=null,ne.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",I),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:m}),g=new xr(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:_r,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let X=null,te=null,re=null;h.depth&&(re=h.stencil?35056:33190,X=h.stencil?xs:ur,te=h.stencil?ls:sr);const O={colorFormat:32856,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(O),r.updateRenderState({layers:[f]}),g=new xr(f.textureWidth,f.textureHeight,{format:Dn,type:_r,depthTexture:new mE(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const xe=e.properties.get(g);xe.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(N){for(let X=0;X<N.removed.length;X++){const te=N.removed[X],re=v.indexOf(te);re>=0&&(v[re]=null,_[re].disconnect(te))}for(let X=0;X<N.added.length;X++){const te=N.added[X];let re=v.indexOf(te);if(re===-1){for(let xe=0;xe<_.length;xe++)if(xe>=v.length){v.push(te),re=xe;break}else if(v[xe]===null){v[xe]=te,re=xe;break}if(re===-1)break}const O=_[re];O&&O.connect(te)}}const j=new z,K=new z;function Q(N,X,te){j.setFromMatrixPosition(X.matrixWorld),K.setFromMatrixPosition(te.matrixWorld);const re=j.distanceTo(K),O=X.projectionMatrix.elements,xe=te.projectionMatrix.elements,he=O[14]/(O[10]-1),pe=O[14]/(O[10]+1),ce=(O[9]+1)/O[5],Be=(O[9]-1)/O[5],Te=(O[8]-1)/O[0],Se=(xe[8]+1)/xe[0],Pt=he*Te,ln=he*Se,Et=re/(-Te+Se),un=Et*-Te;X.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(un),N.translateZ(Et),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const ot=he+Et,ze=pe+Et,Xn=Pt-un,Sn=ln+(re-un),C=ce*pe/ze*ot,w=Be*pe/ze*ot;N.projectionMatrix.makePerspective(Xn,Sn,C,w,ot,ze)}function P(N,X){X===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(X.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;T.near=A.near=b.near=N.near,T.far=A.far=b.far=N.far,(L!==T.near||$!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,$=T.far);const X=N.parent,te=T.cameras;P(T,X);for(let O=0;O<te.length;O++)P(te[O],X);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),N.matrix.copy(T.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const re=N.children;for(let O=0,xe=re.length;O<xe;O++)re[O].updateMatrixWorld(!0);te.length===2?Q(T,b,A):T.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=N)},this.getPlanes=function(){return S};let U=null;function B(N,X){if(c=X.getViewerPose(u||o),x=X,c!==null){const te=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let re=!1;te.length!==T.cameras.length&&(T.cameras.length=0,re=!0);for(let O=0;O<te.length;O++){const xe=te[O];let he=null;if(m!==null)he=m.getViewport(xe);else{const ce=d.getViewSubImage(f,xe);he=ce.viewport,O===0&&(e.setRenderTargetTextures(g,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(g))}let pe=y[O];pe===void 0&&(pe=new gn,pe.layers.enable(O),pe.viewport=new xt,y[O]=pe),pe.matrix.fromArray(xe.transform.matrix),pe.projectionMatrix.fromArray(xe.projectionMatrix),pe.viewport.set(he.x,he.y,he.width,he.height),O===0&&T.matrix.copy(pe.matrix),re===!0&&T.cameras.push(pe)}}for(let te=0;te<_.length;te++){const re=v[te],O=_[te];re!==null&&O!==void 0&&O.update(re,X,u||o)}if(U&&U(N,X),X.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:X.detectedPlanes});let te=null;for(const re of S)X.detectedPlanes.has(re)||(te===null&&(te=[]),te.push(re));if(te!==null)for(const re of te)S.delete(re),M.delete(re),i.dispatchEvent({type:"planeremoved",data:re});for(const re of X.detectedPlanes)if(!S.has(re))S.add(re),M.set(re,X.lastChangedTime),i.dispatchEvent({type:"planeadded",data:re});else{const O=M.get(re);re.lastChangedTime>O&&(M.set(re,re.lastChangedTime),i.dispatchEvent({type:"planechanged",data:re}))}}x=null}const ne=new W0;ne.setAnimationLoop(B),this.setAnimationLoop=function(N){U=N},this.dispose=function(){}}}function _E(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,U0(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,_):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===nn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===nn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const S=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,_){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=_*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===nn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function vE(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function u(_,v){let S=r[_.id];S===void 0&&(x(_),S=c(_),r[_.id]=S,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function c(_){const v=d();_.__bindingPointIndex=v;const S=n.createBuffer(),M=_.__size,b=_.usage;return n.bindBuffer(35345,S),n.bufferData(35345,M,b),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],S=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let b=0,A=S.length;b<A;b++){const y=S[b];if(m(y,b,M)===!0){const T=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let $=0;for(let Z=0;Z<L.length;Z++){const k=L[Z],I=h(k);typeof k=="number"?(y.__data[0]=k,n.bufferSubData(35345,T+$,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=k.elements[0],y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=k.elements[0],y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=k.elements[0]):(k.toArray(y.__data,$),$+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,T,y.__data)}}n.bindBuffer(35345,null)}function m(_,v,S){const M=_.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const b=Array.isArray(M)?M:[M],A=[];for(let y=0;y<b.length;y++)A.push(b[y].clone());S[v]=A}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const b=Array.isArray(S[v])?S[v]:[S[v]],A=Array.isArray(M)?M:[M];for(let y=0;y<b.length;y++){const T=b[y];if(T.equals(A[y])===!1)return T.copy(A[y]),!0}}return!1}function x(_){const v=_.uniforms;let S=0;const M=16;let b=0;for(let A=0,y=v.length;A<y;A++){const T=v[A],L={boundary:0,storage:0},$=Array.isArray(T.value)?T.value:[T.value];for(let Z=0,k=$.length;Z<k;Z++){const I=$[Z],j=h(I);L.boundary+=j.boundary,L.storage+=j.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,A>0){b=S%M;const Z=M-b;b!==0&&Z-L.boundary<0&&(S+=M-b,T.__offset=S)}S+=L.storage}return b=S%M,b>0&&(S+=M-b),_.__size=S,_.__cache={},this}function h(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function xE(){const n=Ao("canvas");return n.style.display="block",n}function $0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:xE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vr,this.physicallyCorrectLights=!1,this.toneMapping=li,this.toneMappingExposure=1;const h=this;let p=!1,g=0,_=0,v=null,S=-1,M=null;const b=new xt,A=new xt;let y=null,T=e.width,L=e.height,$=1,Z=null,k=null;const I=new xt(0,0,T,L),j=new xt(0,0,T,L);let K=!1;const Q=new G0;let P=!1,U=!1,B=null;const ne=new Mt,N=new Ge,X=new z,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return v===null?$:1}let O=t;function xe(E,F){for(let G=0;G<E.length;G++){const D=E[G],H=e.getContext(D,F);if(H!==null)return H}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qf}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ke,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&F.shift(),O=xe(F,E),O===null)throw xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,pe,ce,Be,Te,Se,Pt,ln,Et,un,ot,ze,Xn,Sn,C,w,W,ee,ie,oe,Me,ae,q,_e;function ye(){he=new R3(O),pe=new w3(O,he,n),he.init(pe),ae=new dE(O,he,pe),ce=new cE(O,he,pe),Be=new I3,Te=new Z2,Se=new fE(O,he,ce,Te,pe,ae,Be),Pt=new C3(h),ln=new L3(h),Et=new VS(O,pe),q=new S3(O,he,Et,pe),un=new P3(O,Et,Be,q),ot=new O3(O,un,Et,Be),ie=new F3(O,pe,Se),w=new E3(Te),ze=new Y2(h,Pt,ln,he,pe,q,w),Xn=new _E(h,Te),Sn=new Q2,C=new rE(he,pe),ee=new y3(h,Pt,ln,ce,ot,c,o),W=new uE(h,ot,pe),_e=new vE(O,Be,pe,ce),oe=new M3(O,he,Be,pe),Me=new D3(O,he,Be,pe),Be.programs=ze.programs,h.capabilities=pe,h.extensions=he,h.properties=Te,h.renderLists=Sn,h.shadowMap=W,h.state=ce,h.info=Be}ye();const fe=new gE(h,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(T,L,!1))},this.getSize=function(E){return E.set(T,L)},this.setSize=function(E,F,G){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,L=F,e.width=Math.floor(E*$),e.height=Math.floor(F*$),G!==!1&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(T*$,L*$).floor()},this.setDrawingBufferSize=function(E,F,G){T=E,L=F,$=G,e.width=Math.floor(E*G),e.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,F,G,D){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,F,G,D),ce.viewport(b.copy(I).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(j)},this.setScissor=function(E,F,G,D){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,F,G,D),ce.scissor(A.copy(j).multiplyScalar($).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(E){ce.setScissorTest(K=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,F=!0,G=!0){let D=0;E&&(D|=16384),F&&(D|=256),G&&(D|=1024),O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ke,!1),Sn.dispose(),C.dispose(),Te.dispose(),Pt.dispose(),ln.dispose(),ot.dispose(),q.dispose(),_e.dispose(),ze.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",le),fe.removeEventListener("sessionend",de),B&&(B.dispose(),B=null),Oe.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Be.autoReset,F=W.enabled,G=W.autoUpdate,D=W.needsUpdate,H=W.type;ye(),Be.autoReset=E,W.enabled=F,W.autoUpdate=G,W.needsUpdate=D,W.type=H}function ke(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xe(E){const F=E.target;F.removeEventListener("dispose",Xe),dt(F)}function dt(E){R(E),Te.remove(E)}function R(E){const F=Te.get(E).programs;F!==void 0&&(F.forEach(function(G){ze.releaseProgram(G)}),E.isShaderMaterial&&ze.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,D,H,ge){F===null&&(F=te);const we=H.isMesh&&H.matrixWorld.determinant()<0,be=Z0(E,F,G,D,H);ce.setMaterial(D,we);let Ae=G.index,Fe=1;D.wireframe===!0&&(Ae=un.getWireframeAttribute(G),Fe=2);const Pe=G.drawRange,De=G.attributes.position;let tt=Pe.start*Fe,Xt=(Pe.start+Pe.count)*Fe;ge!==null&&(tt=Math.max(tt,ge.start*Fe),Xt=Math.min(Xt,(ge.start+ge.count)*Fe)),Ae!==null?(tt=Math.max(tt,0),Xt=Math.min(Xt,Ae.count)):De!=null&&(tt=Math.max(tt,0),Xt=Math.min(Xt,De.count));const $n=Xt-tt;if($n<0||$n===1/0)return;q.setup(H,D,be,G,Ae);let Hi,nt=oe;if(Ae!==null&&(Hi=Et.get(Ae),nt=Me,nt.setIndex(Hi)),H.isMesh)D.wireframe===!0?(ce.setLineWidth(D.wireframeLinewidth*re()),nt.setMode(1)):nt.setMode(4);else if(H.isLine){let Ie=D.linewidth;Ie===void 0&&(Ie=1),ce.setLineWidth(Ie*re()),H.isLineSegments?nt.setMode(1):H.isLineLoop?nt.setMode(2):nt.setMode(3)}else H.isPoints?nt.setMode(0):H.isSprite&&nt.setMode(4);if(H.isInstancedMesh)nt.renderInstances(tt,$n,H.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dl=Math.min(G.instanceCount,Ie);nt.renderInstances(tt,$n,Dl)}else nt.render(tt,$n)},this.compile=function(E,F){function G(D,H,ge){D.transparent===!0&&D.side===bi&&D.forceSinglePass===!1?(D.side=nn,D.needsUpdate=!0,cn(D,H,ge),D.side=Ui,D.needsUpdate=!0,cn(D,H,ge),D.side=bi):cn(D,H,ge)}f=C.get(E),f.init(),x.push(f),E.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(D){const H=D.material;if(H)if(Array.isArray(H))for(let ge=0;ge<H.length;ge++){const we=H[ge];G(we,E,D)}else G(H,E,D)}),x.pop(),f=null};let V=null;function J(E){V&&V(E)}function le(){Oe.stop()}function de(){Oe.start()}const Oe=new W0;Oe.setAnimationLoop(J),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(E){V=E,fe.setAnimationLoop(E),E===null?Oe.stop():Oe.start()},fe.addEventListener("sessionstart",le),fe.addEventListener("sessionend",de),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,F,v),f=C.get(E,x.length),f.init(),x.push(f),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(ne),U=this.localClippingEnabled,P=w.init(this.clippingPlanes,U),d=Sn.get(E,m.length),d.init(),m.push(d),ht(E,F,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(Z,k),P===!0&&w.beginShadows();const G=f.state.shadowsArray;if(W.render(G,E,F),P===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(d,E),f.setupLights(h.physicallyCorrectLights),F.isArrayCamera){const D=F.cameras;for(let H=0,ge=D.length;H<ge;H++){const we=D[H];Ct(d,E,we,we.viewport)}}else Ct(d,E,F);v!==null&&(Se.updateMultisampleRenderTarget(v),Se.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(h,E,F),q.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function ht(E,F,G,D){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){D&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const we=ot.update(E),be=E.material;be.visible&&d.push(E,we,be,G,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||Q.intersectsObject(E))){D&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ne);const we=ot.update(E),be=E.material;if(Array.isArray(be)){const Ae=we.groups;for(let Fe=0,Pe=Ae.length;Fe<Pe;Fe++){const De=Ae[Fe],tt=be[De.materialIndex];tt&&tt.visible&&d.push(E,we,tt,G,X.z,De)}}else be.visible&&d.push(E,we,be,G,X.z,null)}}const ge=E.children;for(let we=0,be=ge.length;we<be;we++)ht(ge[we],F,G,D)}function Ct(E,F,G,D){const H=E.opaque,ge=E.transmissive,we=E.transparent;f.setupLightsView(G),P===!0&&w.setGlobalState(h.clippingPlanes,G),ge.length>0&&Wi(H,F,G),D&&ce.viewport(b.copy(D)),H.length>0&&qe(H,F,G),ge.length>0&&qe(ge,F,G),we.length>0&&qe(we,F,G),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Wi(E,F,G){const D=pe.isWebGL2;B===null&&(B=new xr(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?To:_r,minFilter:Co,samples:D&&s===!0?4:0})),h.getDrawingBufferSize(N),D?B.setSize(N.x,N.y):B.setSize(Qc(N.x),Qc(N.y));const H=h.getRenderTarget();h.setRenderTarget(B),h.clear();const ge=h.toneMapping;h.toneMapping=li,qe(E,F,G),h.toneMapping=ge,Se.updateMultisampleRenderTarget(B),Se.updateRenderTargetMipmap(B),h.setRenderTarget(H)}function qe(E,F,G){const D=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ge=E.length;H<ge;H++){const we=E[H],be=we.object,Ae=we.geometry,Fe=D===null?we.material:D,Pe=we.group;be.layers.test(G.layers)&&qn(be,F,G,Ae,Fe,Pe)}}function qn(E,F,G,D,H,ge){E.onBeforeRender(h,F,G,D,H,ge),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(h,F,G,D,E,ge),H.transparent===!0&&H.side===bi&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,h.renderBufferDirect(G,F,D,H,E,ge),H.side=Ui,H.needsUpdate=!0,h.renderBufferDirect(G,F,D,H,E,ge),H.side=bi):h.renderBufferDirect(G,F,D,H,E,ge),E.onAfterRender(h,F,G,D,H,ge)}function cn(E,F,G){F.isScene!==!0&&(F=te);const D=Te.get(E),H=f.state.lights,ge=f.state.shadowsArray,we=H.state.version,be=ze.getParameters(E,H.state,ge,F,G),Ae=ze.getProgramCacheKey(be);let Fe=D.programs;D.environment=E.isMeshStandardMaterial?F.environment:null,D.fog=F.fog,D.envMap=(E.isMeshStandardMaterial?ln:Pt).get(E.envMap||D.environment),Fe===void 0&&(E.addEventListener("dispose",Xe),Fe=new Map,D.programs=Fe);let Pe=Fe.get(Ae);if(Pe!==void 0){if(D.currentProgram===Pe&&D.lightsStateVersion===we)return nd(E,be),Pe}else be.uniforms=ze.getUniforms(E),E.onBuild(G,be,h),E.onBeforeCompile(be,h),Pe=ze.acquireProgram(be,Ae),Fe.set(Ae,Pe),D.uniforms=be.uniforms;const De=D.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=w.uniform),nd(E,be),D.needsLights=Q0(E),D.lightsStateVersion=we,D.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix);const tt=Pe.getUniforms(),Xt=Oa.seqWithValue(tt.seq,De);return D.currentProgram=Pe,D.uniformsList=Xt,Pe}function nd(E,F){const G=Te.get(E);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Z0(E,F,G,D,H){F.isScene!==!0&&(F=te),Se.resetTextureUnits();const ge=F.fog,we=D.isMeshStandardMaterial?F.environment:null,be=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:vr,Ae=(D.isMeshStandardMaterial?ln:Pt).get(D.envMap||we),Fe=D.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!D.normalMap&&!!G.attributes.tangent,De=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,Xt=!!G.morphAttributes.color,$n=D.toneMapped?h.toneMapping:li,Hi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=Hi!==void 0?Hi.length:0,Ie=Te.get(D),Dl=f.state.lights;if(P===!0&&(U===!0||E!==M)){const qt=E===M&&D.id===S;w.setState(D,E,qt)}let pt=!1;D.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Dl.state.version||Ie.outputEncoding!==be||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Ae||D.fog===!0&&Ie.fog!==ge||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==w.numPlanes||Ie.numIntersection!==w.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==Pe||Ie.morphTargets!==De||Ie.morphNormals!==tt||Ie.morphColors!==Xt||Ie.toneMapping!==$n||pe.isWebGL2===!0&&Ie.morphTargetsCount!==nt)&&(pt=!0):(pt=!0,Ie.__version=D.version);let ji=Ie.currentProgram;pt===!0&&(ji=cn(D,F,H));let id=!1,As=!1,Il=!1;const Dt=ji.getUniforms(),Xi=Ie.uniforms;if(ce.useProgram(ji.program)&&(id=!0,As=!0,Il=!0),D.id!==S&&(S=D.id,As=!0),id||M!==E){if(Dt.setValue(O,"projectionMatrix",E.projectionMatrix),pe.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,As=!0,Il=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const qt=Dt.map.cameraPosition;qt!==void 0&&qt.setValue(O,X.setFromMatrixPosition(E.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||H.isSkinnedMesh)&&Dt.setValue(O,"viewMatrix",E.matrixWorldInverse)}if(H.isSkinnedMesh){Dt.setOptional(O,H,"bindMatrix"),Dt.setOptional(O,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(pe.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Dt.setValue(O,"boneTexture",qt.boneTexture,Se),Dt.setValue(O,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Nl=G.morphAttributes;if((Nl.position!==void 0||Nl.normal!==void 0||Nl.color!==void 0&&pe.isWebGL2===!0)&&ie.update(H,G,D,ji),(As||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,Dt.setValue(O,"receiveShadow",H.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Xi.envMap.value=Ae,Xi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),As&&(Dt.setValue(O,"toneMappingExposure",h.toneMappingExposure),Ie.needsLights&&K0(Xi,Il),ge&&D.fog===!0&&Xn.refreshFogUniforms(Xi,ge),Xn.refreshMaterialUniforms(Xi,D,$,L,B),Oa.upload(O,Ie.uniformsList,Xi,Se)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Oa.upload(O,Ie.uniformsList,Xi,Se),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Dt.setValue(O,"center",H.center),Dt.setValue(O,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(O,"normalMatrix",H.normalMatrix),Dt.setValue(O,"modelMatrix",H.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const qt=D.uniformsGroups;for(let kl=0,J0=qt.length;kl<J0;kl++)if(pe.isWebGL2){const rd=qt[kl];_e.update(rd,ji),_e.bind(rd,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function K0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Q0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,F,G){Te.get(E.texture).__webglTexture=F,Te.get(E.depthTexture).__webglTexture=G;const D=Te.get(E);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=G===void 0,D.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const G=Te.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){v=E,g=F,_=G;let D=!0,H=null,ge=!1,we=!1;if(E){const Ae=Te.get(E);Ae.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),D=!1):Ae.__webglFramebuffer===void 0?Se.setupRenderTarget(E):Ae.__hasExternalTextures&&Se.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const Pe=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(H=Pe[F],ge=!0):pe.isWebGL2&&E.samples>0&&Se.useMultisampledRTT(E)===!1?H=Te.get(E).__webglMultisampledFramebuffer:H=Pe,b.copy(E.viewport),A.copy(E.scissor),y=E.scissorTest}else b.copy(I).multiplyScalar($).floor(),A.copy(j).multiplyScalar($).floor(),y=K;if(ce.bindFramebuffer(36160,H)&&pe.drawBuffers&&D&&ce.drawBuffers(E,H),ce.viewport(b),ce.scissor(A),ce.setScissorTest(y),ge){const Ae=Te.get(E.texture);O.framebufferTexture2D(36160,36064,34069+F,Ae.__webglTexture,G)}else if(we){const Ae=Te.get(E.texture),Fe=F||0;O.framebufferTextureLayer(36160,36064,Ae.__webglTexture,G||0,Fe)}S=-1},this.readRenderTargetPixels=function(E,F,G,D,H,ge,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(be=be[we]),be){ce.bindFramebuffer(36160,be);try{const Ae=E.texture,Fe=Ae.format,Pe=Ae.type;if(Fe!==Dn&&ae.convert(Fe)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===To&&(he.has("EXT_color_buffer_half_float")||pe.isWebGL2&&he.has("EXT_color_buffer_float"));if(Pe!==_r&&ae.convert(Pe)!==O.getParameter(35738)&&!(Pe===or&&(pe.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-D&&G>=0&&G<=E.height-H&&O.readPixels(F,G,D,H,ae.convert(Fe),ae.convert(Pe),ge)}finally{const Ae=v!==null?Te.get(v).__webglFramebuffer:null;ce.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(E,F,G=0){const D=Math.pow(2,-G),H=Math.floor(F.image.width*D),ge=Math.floor(F.image.height*D);Se.setTexture2D(F,0),O.copyTexSubImage2D(3553,G,0,0,E.x,E.y,H,ge),ce.unbindTexture()},this.copyTextureToTexture=function(E,F,G,D=0){const H=F.image.width,ge=F.image.height,we=ae.convert(G.format),be=ae.convert(G.type);Se.setTexture2D(G,0),O.pixelStorei(37440,G.flipY),O.pixelStorei(37441,G.premultiplyAlpha),O.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?O.texSubImage2D(3553,D,E.x,E.y,H,ge,we,be,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(3553,D,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):O.texSubImage2D(3553,D,E.x,E.y,we,be,F.image),D===0&&G.generateMipmaps&&O.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G,D,H=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,be=E.max.z-E.min.z+1,Ae=ae.convert(D.format),Fe=ae.convert(D.type);let Pe;if(D.isData3DTexture)Se.setTexture3D(D,0),Pe=32879;else if(D.isDataArrayTexture)Se.setTexture2DArray(D,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,D.flipY),O.pixelStorei(37441,D.premultiplyAlpha),O.pixelStorei(3317,D.unpackAlignment);const De=O.getParameter(3314),tt=O.getParameter(32878),Xt=O.getParameter(3316),$n=O.getParameter(3315),Hi=O.getParameter(32877),nt=G.isCompressedTexture?G.mipmaps[0]:G.image;O.pixelStorei(3314,nt.width),O.pixelStorei(32878,nt.height),O.pixelStorei(3316,E.min.x),O.pixelStorei(3315,E.min.y),O.pixelStorei(32877,E.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Pe,H,F.x,F.y,F.z,ge,we,be,Ae,Fe,nt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,H,F.x,F.y,F.z,ge,we,be,Ae,nt.data)):O.texSubImage3D(Pe,H,F.x,F.y,F.z,ge,we,be,Ae,Fe,nt),O.pixelStorei(3314,De),O.pixelStorei(32878,tt),O.pixelStorei(3316,Xt),O.pixelStorei(3315,$n),O.pixelStorei(32877,Hi),H===0&&D.generateMipmaps&&O.generateMipmap(Pe),ce.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Se.setTextureCube(E,0):E.isData3DTexture?Se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Se.setTexture2DArray(E,0):Se.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,ce.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class yE extends $0{}yE.prototype.isWebGL1Renderer=!0;class SE extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Bp={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ME{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const m=u[d],x=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const wE=new ME;class Y0{constructor(e){this.manager=e!==void 0?e:wE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class EE extends Y0{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Bp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ao("img");function l(){c(),Bp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Zi extends Y0{constructor(e){super(e)}load(e,t,i,r){const s=new jt,o=new EE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);function CE({diceValue:n}){const e=yt.useRef(null),t=Kf(i=>i.user);return yt.useEffect(()=>{const i=new SE,r=new gn(70,window.innerWidth/window.innerHeight,.01,10);r.position.z=1;const s=new $0({canvas:e.current,antialias:!0,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),s.setClearColor(0,.9),window.addEventListener("resize",()=>{s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(window.devicePixelRatio),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix()});let o=new Zi().load("image/1.png"),a=new Zi().load("image/2.png"),l=new Zi().load("image/3.png"),u=new Zi().load("image/4.png"),c=new Zi().load("image/5.png"),d=new Zi().load("image/6.png"),f,m=t.house;switch(console.log("house:",m),m){case Rn.GRYFFONDOR:f=11744297;break;case Rn.SLYTHERIN:f=3697196;break;case Rn.HUFFLEPUFF:f=14663237;break;case Rn.RAVENCLAW:f=4231089;break;default:Rn.GRYFFONDOR,f=11744297;break}let x=[new Mi({map:c,transparent:!0,color:f}),new Mi({map:d,transparent:!0,color:f}),new Mi({map:l,transparent:!0,color:f}),new Mi({map:u,transparent:!0,color:f}),new Mi({map:o,transparent:!0,color:f}),new Mi({map:a,transparent:!0,color:f})];for(let M=0;M<x.length;M++)x[M].onBeforeCompile=function(b){const A=Ce.map_fragment.replace("diffuseColor *= sampledDiffuseColor;","diffuseColor = vec4( mix( diffuse, sampledDiffuseColor.rgb, sampledDiffuseColor.a ), opacity );");b.fragmentShader=b.fragmentShader.replace("#include <map_fragment>",A)};const h=new Ts(.2,.2,.2),p=new oi(h,x);i.add(p);const g=100;let _=0,v=0;o=new Zi().load(`${"image/"+n.toString()+".png"}`),x[4].map=o;const S=M=>{requestAnimationFrame(S),v==200?v=0:v>=g?(p.rotation.x=0,p.rotation.y=0,_=0,v++):_<g&&(p.rotation.x=M/100,p.rotation.y=M/100,v++),s.render(i,r)};requestAnimationFrame(S)},[n]),Ee("canvas",{ref:e,id:"canvas",style:{position:"absolute",top:0,zIndex:3}})}const TE="_manaItemDisabled_z26sa_1",Vp={manaItemDisabled:TE},bE="/assets/btnMana-1f9e65a0.png",AE=n=>Ee("img",{src:bE,alt:"mana-item",className:n.isUsed?Vp.manaItemDisabled:Vp.manaItem,width:"12%"}),LE="_manaRow_13a4m_1",RE="_row_13a4m_10",PE={manaRow:LE,row:RE},DE=n=>{const e=[];for(let t=0;t<10;t++)e.push({disabled:!0});for(let t=0;t<n.manaToUse;t++)e[t].disabled=!1;return Ee("div",{className:PE.manaRow,children:e.map(t=>Ee(AE,{isUsed:t.disabled}))})},IE=[{name:"Patronome",image:_0},{name:"Avacadavra",image:v0},{name:"Imperio",image:x0},{name:"Mathieus Raimbus",image:y0},{name:"Bombarda Maxima",image:S0},{name:"Lumos",image:M0},{name:"Reverso",image:w0},{name:"Doloris",image:E0}],NE=[{image:_0},{image:v0},{image:x0},{image:y0},{image:S0},{image:M0},{image:w0},{image:E0}],kE=()=>{const[n,e]=yt.useState(1),[t,i]=yt.useState(!1),r=()=>{alert("Play ! ")},s=()=>{i(!0),e(Math.floor(Math.random()*6)+1),setTimeout(()=>{i(!1)},2500)};return ti("div",{className:mi.boardGameGrid,children:[Ee(DE,{manaToUse:5}),ti("div",{className:mi.MenuWrapper,children:[ti("div",{children:[Ee("h2",{children:"Inventory"}),Ee("div",{className:mi.inventoryGrid,children:NE.map((o,a)=>Ee(_1,{image:o.image},a))})]}),Ee(bh,{onClick:s,children:"Roll the dice"})]}),ti("div",{className:mi.boardContainer,children:[Ee(p1,{}),Ee("div",{className:mi.wrapperProgressBar,children:Ee(Xy,{countDownTime:20,activate:!1})})]}),Ee("div",{className:mi.rightMenu,children:ti("div",{className:mi.MenuWrapper,children:[ti("div",{children:[Ee("h2",{children:"Spells"}),Ee("div",{className:mi.spellGrid,children:IE.map((o,a)=>Ee(y1,{image:o.image,name:o.name},a))})]}),Ee(bh,{onClick:r,children:"Play !"})]})}),t&&Ee(CE,{diceValue:n})]})};function FE(){const n=Jg(t=>t.setBoard),e=Kf(t=>t.user);return yt.useEffect(()=>{e&&(Hc.emit("room:join","room1",e),Hc.on("map:update",t=>{n(t.board)}))},[e]),Ee(kE,{})}Wu.createRoot(document.getElementById("root")).render(Ee(FE,{}));
