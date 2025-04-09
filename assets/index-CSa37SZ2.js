(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function a2(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ap={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function o2(){if(Y0)return mu;Y0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:s,key:c,ref:a!==void 0?a:null,props:l}}return mu.Fragment=e,mu.jsx=t,mu.jsxs=t,mu}var W0;function l2(){return W0||(W0=1,ap.exports=o2()),ap.exports}var E=l2(),op={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function u2(){if(Q0)return we;Q0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=b&&k[b]||k["@@iterator"],typeof k=="function"?k:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,G={};function B(k,te,de){this.props=k,this.context=te,this.refs=G,this.updater=de||I}B.prototype.isReactComponent={},B.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},B.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function K(){}K.prototype=B.prototype;function ee(k,te,de){this.props=k,this.context=te,this.refs=G,this.updater=de||I}var Q=ee.prototype=new K;Q.constructor=ee,D(Q,B.prototype),Q.isPureReactComponent=!0;var ae=Array.isArray,ue={H:null,A:null,T:null,S:null},ye=Object.prototype.hasOwnProperty;function M(k,te,de,oe,le,Se){return de=Se.ref,{$$typeof:n,type:k,key:te,ref:de!==void 0?de:null,props:Se}}function R(k,te){return M(k.type,te,void 0,void 0,void 0,k.props)}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function N(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(de){return te[de]})}var P=/\/+/g;function z(k,te){return typeof k=="object"&&k!==null&&k.key!=null?N(""+k.key):te.toString(36)}function O(){}function St(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(O,O):(k.status="pending",k.then(function(te){k.status==="pending"&&(k.status="fulfilled",k.value=te)},function(te){k.status==="pending"&&(k.status="rejected",k.reason=te)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function _t(k,te,de,oe,le){var Se=typeof k;(Se==="undefined"||Se==="boolean")&&(k=null);var be=!1;if(k===null)be=!0;else switch(Se){case"bigint":case"string":case"number":be=!0;break;case"object":switch(k.$$typeof){case n:case e:be=!0;break;case T:return be=k._init,_t(be(k._payload),te,de,oe,le)}}if(be)return le=le(k),be=oe===""?"."+z(k,0):oe,ae(le)?(de="",be!=null&&(de=be.replace(P,"$&/")+"/"),_t(le,te,de,"",function(ut){return ut})):le!=null&&(C(le)&&(le=R(le,de+(le.key==null||k&&k.key===le.key?"":(""+le.key).replace(P,"$&/")+"/")+be)),te.push(le)),1;be=0;var yt=oe===""?".":oe+":";if(ae(k))for(var je=0;je<k.length;je++)oe=k[je],Se=yt+z(oe,je),be+=_t(oe,te,de,Se,le);else if(je=S(k),typeof je=="function")for(k=je.call(k),je=0;!(oe=k.next()).done;)oe=oe.value,Se=yt+z(oe,je++),be+=_t(oe,te,de,Se,le);else if(Se==="object"){if(typeof k.then=="function")return _t(St(k),te,de,oe,le);throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return be}function se(k,te,de){if(k==null)return k;var oe=[],le=0;return _t(k,oe,"","",function(Se){return te.call(de,Se,le++)}),oe}function ve(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(de){(k._status===0||k._status===-1)&&(k._status=1,k._result=de)},function(de){(k._status===0||k._status===-1)&&(k._status=2,k._result=de)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var ge=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function He(){}return we.Children={map:se,forEach:function(k,te,de){se(k,function(){te.apply(this,arguments)},de)},count:function(k){var te=0;return se(k,function(){te++}),te},toArray:function(k){return se(k,function(te){return te})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},we.Component=B,we.Fragment=t,we.Profiler=a,we.PureComponent=ee,we.StrictMode=s,we.Suspense=m,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,we.act=function(){throw Error("act(...) is not supported in production builds of React.")},we.cache=function(k){return function(){return k.apply(null,arguments)}},we.cloneElement=function(k,te,de){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var oe=D({},k.props),le=k.key,Se=void 0;if(te!=null)for(be in te.ref!==void 0&&(Se=void 0),te.key!==void 0&&(le=""+te.key),te)!ye.call(te,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&te.ref===void 0||(oe[be]=te[be]);var be=arguments.length-2;if(be===1)oe.children=de;else if(1<be){for(var yt=Array(be),je=0;je<be;je++)yt[je]=arguments[je+2];oe.children=yt}return M(k.type,le,void 0,void 0,Se,oe)},we.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},we.createElement=function(k,te,de){var oe,le={},Se=null;if(te!=null)for(oe in te.key!==void 0&&(Se=""+te.key),te)ye.call(te,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(le[oe]=te[oe]);var be=arguments.length-2;if(be===1)le.children=de;else if(1<be){for(var yt=Array(be),je=0;je<be;je++)yt[je]=arguments[je+2];le.children=yt}if(k&&k.defaultProps)for(oe in be=k.defaultProps,be)le[oe]===void 0&&(le[oe]=be[oe]);return M(k,Se,void 0,void 0,null,le)},we.createRef=function(){return{current:null}},we.forwardRef=function(k){return{$$typeof:d,render:k}},we.isValidElement=C,we.lazy=function(k){return{$$typeof:T,_payload:{_status:-1,_result:k},_init:ve}},we.memo=function(k,te){return{$$typeof:g,type:k,compare:te===void 0?null:te}},we.startTransition=function(k){var te=ue.T,de={};ue.T=de;try{var oe=k(),le=ue.S;le!==null&&le(de,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(He,ge)}catch(Se){ge(Se)}finally{ue.T=te}},we.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},we.use=function(k){return ue.H.use(k)},we.useActionState=function(k,te,de){return ue.H.useActionState(k,te,de)},we.useCallback=function(k,te){return ue.H.useCallback(k,te)},we.useContext=function(k){return ue.H.useContext(k)},we.useDebugValue=function(){},we.useDeferredValue=function(k,te){return ue.H.useDeferredValue(k,te)},we.useEffect=function(k,te){return ue.H.useEffect(k,te)},we.useId=function(){return ue.H.useId()},we.useImperativeHandle=function(k,te,de){return ue.H.useImperativeHandle(k,te,de)},we.useInsertionEffect=function(k,te){return ue.H.useInsertionEffect(k,te)},we.useLayoutEffect=function(k,te){return ue.H.useLayoutEffect(k,te)},we.useMemo=function(k,te){return ue.H.useMemo(k,te)},we.useOptimistic=function(k,te){return ue.H.useOptimistic(k,te)},we.useReducer=function(k,te,de){return ue.H.useReducer(k,te,de)},we.useRef=function(k){return ue.H.useRef(k)},we.useState=function(k){return ue.H.useState(k)},we.useSyncExternalStore=function(k,te,de){return ue.H.useSyncExternalStore(k,te,de)},we.useTransition=function(){return ue.H.useTransition()},we.version="19.0.0",we}var X0;function wg(){return X0||(X0=1,op.exports=u2()),op.exports}var H=wg();const c2=a2(H);var lp={exports:{}},pu={},up={exports:{}},cp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function h2(){return Z0||(Z0=1,function(n){function e(se,ve){var ge=se.length;se.push(ve);e:for(;0<ge;){var He=ge-1>>>1,k=se[He];if(0<a(k,ve))se[He]=ve,se[ge]=k,ge=He;else break e}}function t(se){return se.length===0?null:se[0]}function s(se){if(se.length===0)return null;var ve=se[0],ge=se.pop();if(ge!==ve){se[0]=ge;e:for(var He=0,k=se.length,te=k>>>1;He<te;){var de=2*(He+1)-1,oe=se[de],le=de+1,Se=se[le];if(0>a(oe,ge))le<k&&0>a(Se,oe)?(se[He]=Se,se[le]=ge,He=le):(se[He]=oe,se[de]=ge,He=de);else if(le<k&&0>a(Se,ge))se[He]=Se,se[le]=ge,He=le;else break e}}return ve}function a(se,ve){var ge=se.sortIndex-ve.sortIndex;return ge!==0?ge:se.id-ve.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var m=[],g=[],T=1,b=null,S=3,I=!1,D=!1,G=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;function Q(se){for(var ve=t(g);ve!==null;){if(ve.callback===null)s(g);else if(ve.startTime<=se)s(g),ve.sortIndex=ve.expirationTime,e(m,ve);else break;ve=t(g)}}function ae(se){if(G=!1,Q(se),!D)if(t(m)!==null)D=!0,St();else{var ve=t(g);ve!==null&&_t(ae,ve.startTime-se)}}var ue=!1,ye=-1,M=5,R=-1;function C(){return!(n.unstable_now()-R<M)}function N(){if(ue){var se=n.unstable_now();R=se;var ve=!0;try{e:{D=!1,G&&(G=!1,K(ye),ye=-1),I=!0;var ge=S;try{t:{for(Q(se),b=t(m);b!==null&&!(b.expirationTime>se&&C());){var He=b.callback;if(typeof He=="function"){b.callback=null,S=b.priorityLevel;var k=He(b.expirationTime<=se);if(se=n.unstable_now(),typeof k=="function"){b.callback=k,Q(se),ve=!0;break t}b===t(m)&&s(m),Q(se)}else s(m);b=t(m)}if(b!==null)ve=!0;else{var te=t(g);te!==null&&_t(ae,te.startTime-se),ve=!1}}break e}finally{b=null,S=ge,I=!1}ve=void 0}}finally{ve?P():ue=!1}}}var P;if(typeof ee=="function")P=function(){ee(N)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,O=z.port2;z.port1.onmessage=N,P=function(){O.postMessage(null)}}else P=function(){B(N,0)};function St(){ue||(ue=!0,P())}function _t(se,ve){ye=B(function(){se(n.unstable_now())},ve)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){D||I||(D=!0,St())},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(se){switch(S){case 1:case 2:case 3:var ve=3;break;default:ve=S}var ge=S;S=ve;try{return se()}finally{S=ge}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ve){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ge=S;S=se;try{return ve()}finally{S=ge}},n.unstable_scheduleCallback=function(se,ve,ge){var He=n.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?He+ge:He):ge=He,se){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ge+k,se={id:T++,callback:ve,priorityLevel:se,startTime:ge,expirationTime:k,sortIndex:-1},ge>He?(se.sortIndex=ge,e(g,se),t(m)===null&&se===t(g)&&(G?(K(ye),ye=-1):G=!0,_t(ae,ge-He))):(se.sortIndex=k,e(m,se),D||I||(D=!0,St())),se},n.unstable_shouldYield=C,n.unstable_wrapCallback=function(se){var ve=S;return function(){var ge=S;S=ve;try{return se.apply(this,arguments)}finally{S=ge}}}}(cp)),cp}var J0;function f2(){return J0||(J0=1,up.exports=h2()),up.exports}var hp={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eE;function d2(){if(eE)return nn;eE=1;var n=wg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:b==null?null:""+b,children:m,containerInfo:g,implementation:T}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(m,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,T)},nn.flushSync=function(m){var g=c.T,T=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=T,s.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var T=g.as,b=d(T,g.crossOrigin),S=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:S,fetchPriority:I}):T==="script"&&s.d.X(m,{crossOrigin:b,integrity:S,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=d(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,b=d(T,g.crossOrigin);s.d.L(m,T,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var T=d(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},nn.requestFormReset=function(m){s.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,T){return c.H.useFormState(m,g,T)},nn.useFormStatus=function(){return c.H.useHostTransitionStatus()},nn.version="19.0.0",nn}var tE;function m2(){if(tE)return hp.exports;tE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),hp.exports=d2(),hp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE;function p2(){if(nE)return pu;nE=1;var n=f2(),e=wg(),t=m2();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),I=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),ae=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function ye(i){return i===null||typeof i!="object"?null:(i=ue&&i[ue]||i["@@iterator"],typeof i=="function"?i:null)}var M=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===M?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case m:return"Fragment";case d:return"Portal";case T:return"Profiler";case g:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case I:return(i.displayName||"Context")+".Provider";case S:return(i._context.displayName||"Context")+".Consumer";case D:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case K:return r=i.displayName||null,r!==null?r:R(i.type)||"Memo";case ee:r=i._payload,i=i._init;try{return R(i(r))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,P,z;function O(i){if(P===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);P=r&&r[1]||"",z=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P+i+z}var St=!1;function _t(i,r){if(!i||St)return"";St=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var q=Y}Reflect.construct(i,[],J)}else{try{J.call()}catch(Y){q=Y}i.call(J.prototype)}}else{try{throw Error()}catch(Y){q=Y}(J=i())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&q&&typeof Y.stack=="string")return[Y.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),v=p[0],w=p[1];if(v&&w){var x=v.split(`
`),U=w.split(`
`);for(f=u=0;u<x.length&&!x[u].includes("DetermineComponentFrameRoot");)u++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(u===x.length||f===U.length)for(u=x.length-1,f=U.length-1;1<=u&&0<=f&&x[u]!==U[f];)f--;for(;1<=u&&0<=f;u--,f--)if(x[u]!==U[f]){if(u!==1||f!==1)do if(u--,f--,0>f||x[u]!==U[f]){var W=`
`+x[u].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=u&&0<=f);break}}}finally{St=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?O(o):""}function se(i){switch(i.tag){case 26:case 27:case 5:return O(i.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 15:return i=_t(i.type,!1),i;case 11:return i=_t(i.type.render,!1),i;case 1:return i=_t(i.type,!0),i;default:return""}}function ve(i){try{var r="";do r+=se(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function ge(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function He(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function k(i){if(ge(i)!==i)throw Error(s(188))}function te(i){var r=i.alternate;if(!r){if(r=ge(i),r===null)throw Error(s(188));return r!==i?null:i}for(var o=i,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return k(f),i;if(p===u)return k(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var v=!1,w=f.child;w;){if(w===o){v=!0,o=f,u=p;break}if(w===u){v=!0,u=f,o=p;break}w=w.sibling}if(!v){for(w=p.child;w;){if(w===o){v=!0,o=p,u=f;break}if(w===u){v=!0,u=p,o=f;break}w=w.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?i:r}function de(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=de(i),r!==null)return r;i=i.sibling}return null}var oe=Array.isArray,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Se={pending:!1,data:null,method:null,action:null},be=[],yt=-1;function je(i){return{current:i}}function ut(i){0>yt||(i.current=be[yt],be[yt]=null,yt--)}function $e(i,r){yt++,be[yt]=i.current,i.current=r}var fn=je(null),$i=je(null),Pn=je(null),Vs=je(null);function js(i,r){switch($e(Pn,r),$e($i,i),$e(fn,null),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?w0(r):0;break;default:if(i=i===8?r.parentNode:r,r=i.tagName,i=i.namespaceURI)i=w0(i),r=S0(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ut(fn),$e(fn,r)}function Ki(){ut(fn),ut($i),ut(Pn)}function ul(i){i.memoizedState!==null&&$e(Vs,i);var r=fn.current,o=S0(r,i.type);r!==o&&($e($i,i),$e(fn,o))}function ja(i){$i.current===i&&(ut(fn),ut($i)),Vs.current===i&&(ut(Vs),uu._currentValue=Se)}var za=Object.prototype.hasOwnProperty,Ur=n.unstable_scheduleCallback,Ba=n.unstable_cancelCallback,ld=n.unstable_shouldYield,cl=n.unstable_requestPaint,vn=n.unstable_now,mc=n.unstable_getCurrentPriorityLevel,At=n.unstable_ImmediatePriority,Dt=n.unstable_UserBlockingPriority,Yi=n.unstable_NormalPriority,pc=n.unstable_LowPriority,hl=n.unstable_IdlePriority,ud=n.log,Vr=n.unstable_setDisableYieldValue,zs=null,en=null;function fl(i){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(zs,i,void 0,(i.current.flags&128)===128)}catch{}}function Ei(i){if(typeof ud=="function"&&Vr(i),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(zs,i)}catch{}}var dn=Math.clz32?Math.clz32:_c,dl=Math.log,gc=Math.LN2;function _c(i){return i>>>=0,i===0?32:31-(dl(i)/gc|0)|0}var Ti=128,Bs=4194304;function ii(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ln(i,r){var o=i.pendingLanes;if(o===0)return 0;var u=0,f=i.suspendedLanes,p=i.pingedLanes,v=i.warmLanes;i=i.finishedLanes!==0;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=ii(o):(p&=w,p!==0?u=ii(p):i||(v=w&~v,v!==0&&(u=ii(v))))):(w=o&~f,w!==0?u=ii(w):p!==0?u=ii(p):i||(v=o&~v,v!==0&&(u=ii(v)))),u===0?0:r!==0&&r!==u&&(r&f)===0&&(f=u&-u,v=r&-r,f>=v||f===32&&(v&4194176)!==0)?r:u}function Fs(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function Fa(i,r){switch(i){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ml(){var i=Ti;return Ti<<=1,(Ti&4194176)===0&&(Ti=128),i}function Hs(){var i=Bs;return Bs<<=1,(Bs&62914560)===0&&(Bs=4194304),i}function Ha(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function pt(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function yc(i,r,o,u,f,p){var v=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var w=i.entanglements,x=i.expirationTimes,U=i.hiddenUpdates;for(o=v&~o;0<o;){var W=31-dn(o),J=1<<W;w[W]=0,x[W]=-1;var q=U[W];if(q!==null)for(U[W]=null,W=0;W<q.length;W++){var Y=q[W];Y!==null&&(Y.lane&=-536870913)}o&=~J}u!==0&&qs(i,u,0),p!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=p&~(v&~r))}function qs(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-dn(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194218}function Gs(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-dn(o),f=1<<u;f&r|i[u]&r&&(i[u]|=r),o&=~f}}function vc(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ec(){var i=le.p;return i!==0?i:(i=window.event,i===void 0?32:F0(i.type))}function $s(i,r){var o=le.p;try{return le.p=i,r()}finally{le.p=o}}var bi=Math.random().toString(36).slice(2),kt="__reactFiber$"+bi,Ct="__reactProps$"+bi,Wi="__reactContainer$"+bi,jr="__reactEvents$"+bi,qa="__reactListeners$"+bi,wi="__reactHandles$"+bi,pl="__reactResources$"+bi,Ks="__reactMarker$"+bi;function zr(i){delete i[kt],delete i[Ct],delete i[jr],delete i[qa],delete i[wi]}function si(i){var r=i[kt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Wi]||o[kt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=R0(i);i!==null;){if(o=i[kt])return o;i=R0(i)}return r}i=o,o=i.parentNode}return null}function Qi(i){if(i=i[kt]||i[Wi]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Ys(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function Ws(i){var r=i[pl];return r||(r=i[pl]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function at(i){i[Ks]=!0}var gl=new Set,Ga={};function An(i,r){En(i,r),En(i+"Capture",r)}function En(i,r){for(Ga[i]=r,i=0;i<r.length;i++)gl.add(r[i])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_l={},yl={};function Tc(i){return za.call(yl,i)?!0:za.call(_l,i)?!1:cd.test(i)?yl[i]=!0:(_l[i]=!0,!1)}function Qs(i,r,o){if(Tc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Xs(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Un(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}function mn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function bc(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function hd(i){var r=bc(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Br(i){i._valueTracker||(i._valueTracker=hd(i))}function vl(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=bc(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function $a(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Xi=/[\n"\\]/g;function ct(i){return i.replace(Xi,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Zs(i,r,o,u,f,p,v,w){i.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?i.type=v:i.removeAttribute("type"),r!=null?v==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+mn(r)):i.value!==""+mn(r)&&(i.value=""+mn(r)):v!=="submit"&&v!=="reset"||i.removeAttribute("value"),r!=null?Ka(i,v,mn(r)):o!=null?Ka(i,v,mn(o)):u!=null&&i.removeAttribute("value"),f==null&&p!=null&&(i.defaultChecked=!!p),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?i.name=""+mn(w):i.removeAttribute("name")}function Fr(i,r,o,u,f,p,v,w){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(i.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+mn(o):"",r=r!=null?""+mn(r):o,w||r===i.value||(i.value=r),i.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=w?i.checked:!!u,i.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(i.name=v)}function Ka(i,r,o){r==="number"&&$a(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function ze(i,r,o,u){if(i=i.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<i.length;o++)f=r.hasOwnProperty("$"+i[o].value),i[o].selected!==f&&(i[o].selected=f),f&&u&&(i[o].defaultSelected=!0)}else{for(o=""+mn(o),r=null,f=0;f<i.length;f++){if(i[f].value===o){i[f].selected=!0,u&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function Hr(i,r,o){if(r!=null&&(r=""+mn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+mn(o):""}function Js(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(oe(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=mn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Vn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var fd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function El(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||fd.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function wc(i,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&El(i,f,u)}else for(var p in r)r.hasOwnProperty(p)&&El(i,p,r[p])}function Tl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),md=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(i){return md.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var jn=null;function Ya(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Zi=null,Ji=null;function es(i){var r=Qi(i);if(r&&(i=r.stateNode)){var o=i[Ct]||null;e:switch(i=r.stateNode,r.type){case"input":if(Zs(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ct(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var f=u[Ct]||null;if(!f)throw Error(s(90));Zs(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&vl(u)}break e;case"textarea":Hr(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&ze(i,!!o.multiple,r,!1)}}}var bl=!1;function Sc(i,r,o){if(bl)return i(r,o);bl=!0;try{var u=i(r);return u}finally{if(bl=!1,(Zi!==null||Ji!==null)&&(ph(),Zi&&(r=Zi,i=Ji,Ji=Zi=null,es(r),i)))for(r=0;r<i.length;r++)es(i[r])}}function qr(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Ct]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var zn=!1;if(Cn)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){zn=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{zn=!1}var Ai=null,er=null,ts=null;function wl(){if(ts)return ts;var i,r=er,o=r.length,u,f="value"in Ai?Ai.value:Ai.textContent,p=f.length;for(i=0;i<o&&r[i]===f[i];i++);var v=o-i;for(u=1;u<=v&&r[o-u]===f[p-u];u++);return ts=f.slice(i,1<u?1-u:void 0)}function Ci(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function Ri(){return!0}function Sl(){return!1}function Mt(i){function r(o,u,f,p,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var w in i)i.hasOwnProperty(w)&&(o=i[w],this[w]=o?o(p):p[w]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ri:Sl,this.isPropagationStopped=Sl,this}return N(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),r}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Mt(qe),$r=N({},qe,{view:0,detail:0}),Ac=Mt($r),Qa,Xa,xi,Kr=N({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==xi&&(xi&&i.type==="mousemove"?(Qa=i.screenX-xi.screenX,Xa=i.screenY-xi.screenY):Xa=Qa=0,xi=i),Qa)},movementY:function(i){return"movementY"in i?i.movementY:Xa}}),Bn=Mt(Kr),Cc=N({},Kr,{dataTransfer:0}),pd=Mt(Cc),Yr=N({},$r,{relatedTarget:0}),Za=Mt(Yr),Al=N({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ja=Mt(Al),Rc=N({},qe,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),eo=Mt(Rc),gd=N({},qe,{data:0}),Cl=Mt(gd),Wr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Ic[i])?!!r[i]:!1}function Qr(){return Rl}var Nc=N({},$r,{key:function(i){if(i.key){var r=Wr[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=Ci(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?xc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qr,charCode:function(i){return i.type==="keypress"?Ci(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ci(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),to=Mt(Nc),Oc=N({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xl=Mt(Oc),ns=N({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qr}),Dc=Mt(ns),kc=N({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mc=Mt(kc),Pc=N({},Kr,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),no=Mt(Pc),pn=N({},qe,{newState:0,oldState:0}),Lc=Mt(pn),Uc=[9,13,27,32],Ii=Cn&&"CompositionEvent"in window,h=null;Cn&&"documentMode"in document&&(h=document.documentMode);var _=Cn&&"TextEvent"in window&&!h,y=Cn&&(!Ii||h&&8<h&&11>=h),A=" ",j=!1;function $(i,r){switch(i){case"keyup":return Uc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ie(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ke=!1;function Rt(i,r){switch(i){case"compositionend":return ie(r);case"keypress":return r.which!==32?null:(j=!0,A);case"textInput":return i=r.data,i===A&&j?null:i;default:return null}}function Me(i,r){if(ke)return i==="compositionend"||!Ii&&$(i,r)?(i=wl(),ts=er=Ai=null,ke=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Pt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Pt[i.type]:r==="textarea"}function is(i,r,o,u){Zi?Ji?Ji.push(u):Ji=[u]:Zi=u,r=Eh(r,"onChange"),0<r.length&&(o=new Wa("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Gt=null,Ni=null;function Il(i){y0(i,0)}function Vc(i){var r=Ys(i);if(vl(r))return i}function K_(i,r){if(i==="change")return r}var Y_=!1;if(Cn){var _d;if(Cn){var yd="oninput"in document;if(!yd){var W_=document.createElement("div");W_.setAttribute("oninput","return;"),yd=typeof W_.oninput=="function"}_d=yd}else _d=!1;Y_=_d&&(!document.documentMode||9<document.documentMode)}function Q_(){Gt&&(Gt.detachEvent("onpropertychange",X_),Ni=Gt=null)}function X_(i){if(i.propertyName==="value"&&Vc(Ni)){var r=[];is(r,Ni,i,Ya(i)),Sc(Il,r)}}function LA(i,r,o){i==="focusin"?(Q_(),Gt=r,Ni=o,Gt.attachEvent("onpropertychange",X_)):i==="focusout"&&Q_()}function UA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Vc(Ni)}function VA(i,r){if(i==="click")return Vc(r)}function jA(i,r){if(i==="input"||i==="change")return Vc(r)}function zA(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Rn=typeof Object.is=="function"?Object.is:zA;function Nl(i,r){if(Rn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!za.call(r,f)||!Rn(i[f],r[f]))return!1}return!0}function Z_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function J_(i,r){var o=Z_(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Z_(o)}}function ey(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?ey(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function ty(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=$a(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=$a(i.document)}return r}function vd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function BA(i,r){var o=ty(r);r=i.focusedElem;var u=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&ey(r.ownerDocument.documentElement,r)){if(u!==null&&vd(r)){if(i=u.start,o=u.end,o===void 0&&(o=i),"selectionStart"in r)r.selectionStart=i,r.selectionEnd=Math.min(o,r.value.length);else if(o=(i=r.ownerDocument||document)&&i.defaultView||window,o.getSelection){o=o.getSelection();var f=r.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!o.extend&&p>u&&(f=u,u=p,p=f),f=J_(r,p);var v=J_(r,u);f&&v&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==v.node||o.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),o.removeAllRanges(),p>u?(o.addRange(i),o.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),o.addRange(i)))}}for(i=[],o=r;o=o.parentNode;)o.nodeType===1&&i.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<i.length;r++)o=i[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var FA=Cn&&"documentMode"in document&&11>=document.documentMode,io=null,Ed=null,Ol=null,Td=!1;function ny(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Td||io==null||io!==$a(u)||(u=io,"selectionStart"in u&&vd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ol&&Nl(Ol,u)||(Ol=u,u=Eh(Ed,"onSelect"),0<u.length&&(r=new Wa("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=io)))}function Xr(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var so={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionrun:Xr("Transition","TransitionRun"),transitionstart:Xr("Transition","TransitionStart"),transitioncancel:Xr("Transition","TransitionCancel"),transitionend:Xr("Transition","TransitionEnd")},bd={},iy={};Cn&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function Zr(i){if(bd[i])return bd[i];if(!so[i])return i;var r=so[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in iy)return bd[i]=r[o];return i}var sy=Zr("animationend"),ry=Zr("animationiteration"),ay=Zr("animationstart"),HA=Zr("transitionrun"),qA=Zr("transitionstart"),GA=Zr("transitioncancel"),oy=Zr("transitionend"),ly=new Map,uy="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ri(i,r){ly.set(i,r),An(r,[i])}var Fn=[],ro=0,wd=0;function jc(){for(var i=ro,r=wd=ro=0;r<i;){var o=Fn[r];Fn[r++]=null;var u=Fn[r];Fn[r++]=null;var f=Fn[r];Fn[r++]=null;var p=Fn[r];if(Fn[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}p!==0&&cy(o,f,p)}}function zc(i,r,o,u){Fn[ro++]=i,Fn[ro++]=r,Fn[ro++]=o,Fn[ro++]=u,wd|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Sd(i,r,o,u){return zc(i,r,o,u),Bc(i)}function tr(i,r){return zc(i,null,null,r),Bc(i)}function cy(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=i.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(i=p.stateNode,i===null||i._visibility&1||(f=!0)),i=p,p=p.return;f&&r!==null&&i.tag===3&&(p=i.stateNode,f=31-dn(o),p=p.hiddenUpdates,i=p[f],i===null?p[f]=[r]:i.push(r),r.lane=o|536870912)}function Bc(i){if(50<nu)throw nu=0,Nm=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var ao={},hy=new WeakMap;function Hn(i,r){if(typeof i=="object"&&i!==null){var o=hy.get(i);return o!==void 0?o:(r={value:i,source:r,stack:ve(r)},hy.set(i,r),r)}return{value:i,source:r,stack:ve(r)}}var oo=[],lo=0,Fc=null,Hc=0,qn=[],Gn=0,Jr=null,ss=1,rs="";function ea(i,r){oo[lo++]=Hc,oo[lo++]=Fc,Fc=i,Hc=r}function fy(i,r,o){qn[Gn++]=ss,qn[Gn++]=rs,qn[Gn++]=Jr,Jr=i;var u=ss;i=rs;var f=32-dn(u)-1;u&=~(1<<f),o+=1;var p=32-dn(r)+f;if(30<p){var v=f-f%5;p=(u&(1<<v)-1).toString(32),u>>=v,f-=v,ss=1<<32-dn(r)+f|o<<f|u,rs=p+i}else ss=1<<p|o<<f|u,rs=i}function Ad(i){i.return!==null&&(ea(i,1),fy(i,1,0))}function Cd(i){for(;i===Fc;)Fc=oo[--lo],oo[lo]=null,Hc=oo[--lo],oo[lo]=null;for(;i===Jr;)Jr=qn[--Gn],qn[Gn]=null,rs=qn[--Gn],qn[Gn]=null,ss=qn[--Gn],qn[Gn]=null}var gn=null,$t=null,Be=!1,ai=null,Oi=!1,Rd=Error(s(519));function ta(i){var r=Error(s(418,""));throw Ml(Hn(r,i)),Rd}function dy(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[kt]=i,r[Ct]=u,o){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(o=0;o<su.length;o++)Oe(su[o],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Oe("invalid",r),Fr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Br(r);break;case"select":Oe("invalid",r);break;case"textarea":Oe("invalid",r),Js(r,u.value,u.defaultValue,u.children),Br(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||b0(r.textContent,o)?(u.popover!=null&&(Oe("beforetoggle",r),Oe("toggle",r)),u.onScroll!=null&&Oe("scroll",r),u.onScrollEnd!=null&&Oe("scrollend",r),u.onClick!=null&&(r.onclick=Th),r=!0):r=!1,r||ta(i)}function my(i){for(gn=i.return;gn;)switch(gn.tag){case 3:case 27:Oi=!0;return;case 5:case 13:Oi=!1;return;default:gn=gn.return}}function Dl(i){if(i!==gn)return!1;if(!Be)return my(i),Be=!0,!1;var r=!1,o;if((o=i.tag!==3&&i.tag!==27)&&((o=i.tag===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Km(i.type,i.memoizedProps)),o=!o),o&&(r=!0),r&&$t&&ta(i),my(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){$t=li(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}$t=null}}else $t=gn?li(i.stateNode.nextSibling):null;return!0}function kl(){$t=gn=null,Be=!1}function Ml(i){ai===null?ai=[i]:ai.push(i)}var Pl=Error(s(460)),py=Error(s(474)),xd={then:function(){}};function gy(i){return i=i.status,i==="fulfilled"||i==="rejected"}function qc(){}function _y(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(qc,qc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,i===Pl?Error(s(483)):i;default:if(typeof r.status=="string")r.then(qc,qc);else{if(i=Ze,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,i===Pl?Error(s(483)):i}throw Ll=r,Pl}}var Ll=null;function yy(){if(Ll===null)throw Error(s(459));var i=Ll;return Ll=null,i}var uo=null,Ul=0;function Gc(i){var r=Ul;return Ul+=1,uo===null&&(uo=[]),_y(uo,i,r)}function Vl(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function $c(i,r){throw r.$$typeof===l?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function vy(i){var r=i._init;return r(i._payload)}function Ey(i){function r(V,L){if(i){var F=V.deletions;F===null?(V.deletions=[L],V.flags|=16):F.push(L)}}function o(V,L){if(!i)return null;for(;L!==null;)r(V,L),L=L.sibling;return null}function u(V){for(var L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function f(V,L){return V=dr(V,L),V.index=0,V.sibling=null,V}function p(V,L,F){return V.index=F,i?(F=V.alternate,F!==null?(F=F.index,F<L?(V.flags|=33554434,L):F):(V.flags|=33554434,L)):(V.flags|=1048576,L)}function v(V){return i&&V.alternate===null&&(V.flags|=33554434),V}function w(V,L,F,X){return L===null||L.tag!==6?(L=bm(F,V.mode,X),L.return=V,L):(L=f(L,F),L.return=V,L)}function x(V,L,F,X){var ce=F.type;return ce===m?W(V,L,F.props.children,X,F.key):L!==null&&(L.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ee&&vy(ce)===L.type)?(L=f(L,F.props),Vl(L,F),L.return=V,L):(L=ch(F.type,F.key,F.props,null,V.mode,X),Vl(L,F),L.return=V,L)}function U(V,L,F,X){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=wm(F,V.mode,X),L.return=V,L):(L=f(L,F.children||[]),L.return=V,L)}function W(V,L,F,X,ce){return L===null||L.tag!==7?(L=ha(F,V.mode,X,ce),L.return=V,L):(L=f(L,F),L.return=V,L)}function J(V,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=bm(""+L,V.mode,F),L.return=V,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case c:return F=ch(L.type,L.key,L.props,null,V.mode,F),Vl(F,L),F.return=V,F;case d:return L=wm(L,V.mode,F),L.return=V,L;case ee:var X=L._init;return L=X(L._payload),J(V,L,F)}if(oe(L)||ye(L))return L=ha(L,V.mode,F,null),L.return=V,L;if(typeof L.then=="function")return J(V,Gc(L),F);if(L.$$typeof===I)return J(V,oh(V,L),F);$c(V,L)}return null}function q(V,L,F,X){var ce=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return ce!==null?null:w(V,L,""+F,X);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case c:return F.key===ce?x(V,L,F,X):null;case d:return F.key===ce?U(V,L,F,X):null;case ee:return ce=F._init,F=ce(F._payload),q(V,L,F,X)}if(oe(F)||ye(F))return ce!==null?null:W(V,L,F,X,null);if(typeof F.then=="function")return q(V,L,Gc(F),X);if(F.$$typeof===I)return q(V,L,oh(V,F),X);$c(V,F)}return null}function Y(V,L,F,X,ce){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return V=V.get(F)||null,w(L,V,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case c:return V=V.get(X.key===null?F:X.key)||null,x(L,V,X,ce);case d:return V=V.get(X.key===null?F:X.key)||null,U(L,V,X,ce);case ee:var Re=X._init;return X=Re(X._payload),Y(V,L,F,X,ce)}if(oe(X)||ye(X))return V=V.get(F)||null,W(L,V,X,ce,null);if(typeof X.then=="function")return Y(V,L,F,Gc(X),ce);if(X.$$typeof===I)return Y(V,L,F,oh(L,X),ce);$c(L,X)}return null}function fe(V,L,F,X){for(var ce=null,Re=null,me=L,_e=L=0,Vt=null;me!==null&&_e<F.length;_e++){me.index>_e?(Vt=me,me=null):Vt=me.sibling;var Fe=q(V,me,F[_e],X);if(Fe===null){me===null&&(me=Vt);break}i&&me&&Fe.alternate===null&&r(V,me),L=p(Fe,L,_e),Re===null?ce=Fe:Re.sibling=Fe,Re=Fe,me=Vt}if(_e===F.length)return o(V,me),Be&&ea(V,_e),ce;if(me===null){for(;_e<F.length;_e++)me=J(V,F[_e],X),me!==null&&(L=p(me,L,_e),Re===null?ce=me:Re.sibling=me,Re=me);return Be&&ea(V,_e),ce}for(me=u(me);_e<F.length;_e++)Vt=Y(me,V,_e,F[_e],X),Vt!==null&&(i&&Vt.alternate!==null&&me.delete(Vt.key===null?_e:Vt.key),L=p(Vt,L,_e),Re===null?ce=Vt:Re.sibling=Vt,Re=Vt);return i&&me.forEach(function(Er){return r(V,Er)}),Be&&ea(V,_e),ce}function Te(V,L,F,X){if(F==null)throw Error(s(151));for(var ce=null,Re=null,me=L,_e=L=0,Vt=null,Fe=F.next();me!==null&&!Fe.done;_e++,Fe=F.next()){me.index>_e?(Vt=me,me=null):Vt=me.sibling;var Er=q(V,me,Fe.value,X);if(Er===null){me===null&&(me=Vt);break}i&&me&&Er.alternate===null&&r(V,me),L=p(Er,L,_e),Re===null?ce=Er:Re.sibling=Er,Re=Er,me=Vt}if(Fe.done)return o(V,me),Be&&ea(V,_e),ce;if(me===null){for(;!Fe.done;_e++,Fe=F.next())Fe=J(V,Fe.value,X),Fe!==null&&(L=p(Fe,L,_e),Re===null?ce=Fe:Re.sibling=Fe,Re=Fe);return Be&&ea(V,_e),ce}for(me=u(me);!Fe.done;_e++,Fe=F.next())Fe=Y(me,V,_e,Fe.value,X),Fe!==null&&(i&&Fe.alternate!==null&&me.delete(Fe.key===null?_e:Fe.key),L=p(Fe,L,_e),Re===null?ce=Fe:Re.sibling=Fe,Re=Fe);return i&&me.forEach(function(r2){return r(V,r2)}),Be&&ea(V,_e),ce}function dt(V,L,F,X){if(typeof F=="object"&&F!==null&&F.type===m&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case c:e:{for(var ce=F.key;L!==null;){if(L.key===ce){if(ce=F.type,ce===m){if(L.tag===7){o(V,L.sibling),X=f(L,F.props.children),X.return=V,V=X;break e}}else if(L.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ee&&vy(ce)===L.type){o(V,L.sibling),X=f(L,F.props),Vl(X,F),X.return=V,V=X;break e}o(V,L);break}else r(V,L);L=L.sibling}F.type===m?(X=ha(F.props.children,V.mode,X,F.key),X.return=V,V=X):(X=ch(F.type,F.key,F.props,null,V.mode,X),Vl(X,F),X.return=V,V=X)}return v(V);case d:e:{for(ce=F.key;L!==null;){if(L.key===ce)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){o(V,L.sibling),X=f(L,F.children||[]),X.return=V,V=X;break e}else{o(V,L);break}else r(V,L);L=L.sibling}X=wm(F,V.mode,X),X.return=V,V=X}return v(V);case ee:return ce=F._init,F=ce(F._payload),dt(V,L,F,X)}if(oe(F))return fe(V,L,F,X);if(ye(F)){if(ce=ye(F),typeof ce!="function")throw Error(s(150));return F=ce.call(F),Te(V,L,F,X)}if(typeof F.then=="function")return dt(V,L,Gc(F),X);if(F.$$typeof===I)return dt(V,L,oh(V,F),X);$c(V,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,L!==null&&L.tag===6?(o(V,L.sibling),X=f(L,F),X.return=V,V=X):(o(V,L),X=bm(F,V.mode,X),X.return=V,V=X),v(V)):o(V,L)}return function(V,L,F,X){try{Ul=0;var ce=dt(V,L,F,X);return uo=null,ce}catch(me){if(me===Pl)throw me;var Re=Wn(29,me,null,V.mode);return Re.lanes=X,Re.return=V,Re}finally{}}}var na=Ey(!0),Ty=Ey(!1),co=je(null),Kc=je(0);function by(i,r){i=gs,$e(Kc,i),$e(co,r),gs=i|r.baseLanes}function Id(){$e(Kc,gs),$e(co,co.current)}function Nd(){gs=Kc.current,ut(co),ut(Kc)}var $n=je(null),Di=null;function nr(i){var r=i.alternate;$e(It,It.current&1),$e($n,i),Di===null&&(r===null||co.current!==null||r.memoizedState!==null)&&(Di=i)}function wy(i){if(i.tag===22){if($e(It,It.current),$e($n,i),Di===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Di=i)}}else ir()}function ir(){$e(It,It.current),$e($n,$n.current)}function as(i){ut($n),Di===i&&(Di=null),ut(It)}var It=je(0);function Yc(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $A=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},KA=n.unstable_scheduleCallback,YA=n.unstable_NormalPriority,Nt={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Od(){return{controller:new $A,data:new Map,refCount:0}}function jl(i){i.refCount--,i.refCount===0&&KA(YA,function(){i.controller.abort()})}var zl=null,Dd=0,ho=0,fo=null;function WA(i,r){if(zl===null){var o=zl=[];Dd=0,ho=Vm(),fo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Dd++,r.then(Sy,Sy),r}function Sy(){if(--Dd===0&&zl!==null){fo!==null&&(fo.status="fulfilled");var i=zl;zl=null,ho=0,fo=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function QA(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var Ay=C.S;C.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&WA(i,r),Ay!==null&&Ay(i,r)};var ia=je(null);function kd(){var i=ia.current;return i!==null?i:Ze.pooledCache}function Wc(i,r){r===null?$e(ia,ia.current):$e(ia,r.pool)}function Cy(){var i=kd();return i===null?null:{parent:Nt._currentValue,pool:i}}var sr=0,Ae=null,Ye=null,vt=null,Qc=!1,mo=!1,sa=!1,Xc=0,Bl=0,po=null,XA=0;function gt(){throw Error(s(321))}function Md(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Rn(i[o],r[o]))return!1;return!0}function Pd(i,r,o,u,f,p){return sr=p,Ae=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,C.H=i===null||i.memoizedState===null?ra:rr,sa=!1,p=o(u,f),sa=!1,mo&&(p=xy(r,o,u,f)),Ry(i),p}function Ry(i){C.H=ki;var r=Ye!==null&&Ye.next!==null;if(sr=0,vt=Ye=Ae=null,Qc=!1,Bl=0,po=null,r)throw Error(s(300));i===null||Lt||(i=i.dependencies,i!==null&&ah(i)&&(Lt=!0))}function xy(i,r,o,u){Ae=i;var f=0;do{if(mo&&(po=null),Bl=0,mo=!1,25<=f)throw Error(s(301));if(f+=1,vt=Ye=null,i.updateQueue!=null){var p=i.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}C.H=aa,p=r(o,u)}while(mo);return p}function ZA(){var i=C.H,r=i.useState()[0];return r=typeof r.then=="function"?Fl(r):r,i=i.useState()[0],(Ye!==null?Ye.memoizedState:null)!==i&&(Ae.flags|=1024),r}function Ld(){var i=Xc!==0;return Xc=0,i}function Ud(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Vd(i){if(Qc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qc=!1}sr=0,vt=Ye=Ae=null,mo=!1,Bl=Xc=0,po=null}function Tn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ae.memoizedState=vt=i:vt=vt.next=i,vt}function Et(){if(Ye===null){var i=Ae.alternate;i=i!==null?i.memoizedState:null}else i=Ye.next;var r=vt===null?Ae.memoizedState:vt.next;if(r!==null)vt=r,Ye=i;else{if(i===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));Ye=i,i={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},vt===null?Ae.memoizedState=vt=i:vt=vt.next=i}return vt}var Zc;Zc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Fl(i){var r=Bl;return Bl+=1,po===null&&(po=[]),i=_y(po,i,r),r=Ae,(vt===null?r.memoizedState:vt.next)===null&&(r=r.alternate,C.H=r===null||r.memoizedState===null?ra:rr),i}function Jc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Fl(i);if(i.$$typeof===I)return tn(i)}throw Error(s(438,String(i)))}function jd(i){var r=null,o=Ae.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ae.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Zc(),Ae.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=ae;return r.index++,o}function os(i,r){return typeof r=="function"?r(i):r}function eh(i){var r=Et();return zd(r,Ye,i)}function zd(i,r,o){var u=i.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=i.baseQueue,p=u.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}r.baseQueue=f=p,u.pending=null}if(p=i.baseState,f===null)i.memoizedState=p;else{r=f.next;var w=v=null,x=null,U=r,W=!1;do{var J=U.lane&-536870913;if(J!==U.lane?(Pe&J)===J:(sr&J)===J){var q=U.revertLane;if(q===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),J===ho&&(W=!0);else if((sr&q)===q){U=U.next,q===ho&&(W=!0);continue}else J={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},x===null?(w=x=J,v=p):x=x.next=J,Ae.lanes|=q,mr|=q;J=U.action,sa&&o(p,J),p=U.hasEagerState?U.eagerState:o(p,J)}else q={lane:J,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},x===null?(w=x=q,v=p):x=x.next=q,Ae.lanes|=J,mr|=J;U=U.next}while(U!==null&&U!==r);if(x===null?v=p:x.next=w,!Rn(p,i.memoizedState)&&(Lt=!0,W&&(o=fo,o!==null)))throw o;i.memoizedState=p,i.baseState=v,i.baseQueue=x,u.lastRenderedState=p}return f===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Bd(i){var r=Et(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=i;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=i(p,v.action),v=v.next;while(v!==f);Rn(p,r.memoizedState)||(Lt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Iy(i,r,o){var u=Ae,f=Et(),p=Be;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!Rn((Ye||f).memoizedState,o);if(v&&(f.memoizedState=o,Lt=!0),f=f.queue,qd(Dy.bind(null,u,f,i),[i]),f.getSnapshot!==r||v||vt!==null&&vt.memoizedState.tag&1){if(u.flags|=2048,go(9,Oy.bind(null,u,f,o,r),{destroy:void 0},null),Ze===null)throw Error(s(349));p||(sr&60)!==0||Ny(u,r,o)}return o}function Ny(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ae.updateQueue,r===null?(r=Zc(),Ae.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Oy(i,r,o,u){r.value=o,r.getSnapshot=u,ky(r)&&My(i)}function Dy(i,r,o){return o(function(){ky(r)&&My(i)})}function ky(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Rn(i,o)}catch{return!0}}function My(i){var r=tr(i,2);r!==null&&_n(r,i,2)}function Fd(i){var r=Tn();if(typeof i=="function"){var o=i;if(i=o(),sa){Ei(!0);try{o()}finally{Ei(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:i},r}function Py(i,r,o,u){return i.baseState=o,zd(i,Ye,typeof u=="function"?u:os)}function JA(i,r,o,u,f){if(ih(i))throw Error(s(485));if(i=r.action,i!==null){var p={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};C.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,Ly(r,p)):(p.next=o.next,r.pending=o.next=p)}}function Ly(i,r){var o=r.action,u=r.payload,f=i.state;if(r.isTransition){var p=C.T,v={};C.T=v;try{var w=o(f,u),x=C.S;x!==null&&x(v,w),Uy(i,r,w)}catch(U){Hd(i,r,U)}finally{C.T=p}}else try{p=o(f,u),Uy(i,r,p)}catch(U){Hd(i,r,U)}}function Uy(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Vy(i,r,u)},function(u){return Hd(i,r,u)}):Vy(i,r,o)}function Vy(i,r,o){r.status="fulfilled",r.value=o,jy(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Ly(i,o)))}function Hd(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,jy(r),r=r.next;while(r!==u)}i.action=null}function jy(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function zy(i,r){return r}function By(i,r){if(Be){var o=Ze.formState;if(o!==null){e:{var u=Ae;if(Be){if($t){t:{for(var f=$t,p=Oi;f.nodeType!==8;){if(!p){f=null;break t}if(f=li(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){$t=li(f.nextSibling),u=f.data==="F!";break e}}ta(u)}u=!1}u&&(r=o[0])}}return o=Tn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zy,lastRenderedState:r},o.queue=u,o=rv.bind(null,Ae,u),u.dispatch=o,u=Fd(!1),p=Wd.bind(null,Ae,!1,u.queue),u=Tn(),f={state:r,dispatch:null,action:i,pending:null},u.queue=f,o=JA.bind(null,Ae,f,p,o),f.dispatch=o,u.memoizedState=i,[r,o,!1]}function Fy(i){var r=Et();return Hy(r,Ye,i)}function Hy(i,r,o){r=zd(i,r,zy)[0],i=eh(os)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Fl(r):r;var u=Et(),f=u.queue,p=f.dispatch;return o!==u.memoizedState&&(Ae.flags|=2048,go(9,eC.bind(null,f,o),{destroy:void 0},null)),[r,p,i]}function eC(i,r){i.action=r}function qy(i){var r=Et(),o=Ye;if(o!==null)return Hy(r,o,i);Et(),r=r.memoizedState,o=Et();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function go(i,r,o,u){return i={tag:i,create:r,inst:o,deps:u,next:null},r=Ae.updateQueue,r===null&&(r=Zc(),Ae.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Gy(){return Et().memoizedState}function th(i,r,o,u){var f=Tn();Ae.flags|=i,f.memoizedState=go(1|r,o,{destroy:void 0},u===void 0?null:u)}function nh(i,r,o,u){var f=Et();u=u===void 0?null:u;var p=f.memoizedState.inst;Ye!==null&&u!==null&&Md(u,Ye.memoizedState.deps)?f.memoizedState=go(r,o,p,u):(Ae.flags|=i,f.memoizedState=go(1|r,o,p,u))}function $y(i,r){th(8390656,8,i,r)}function qd(i,r){nh(2048,8,i,r)}function Ky(i,r){return nh(4,2,i,r)}function Yy(i,r){return nh(4,4,i,r)}function Wy(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Qy(i,r,o){o=o!=null?o.concat([i]):null,nh(4,4,Wy.bind(null,r,i),o)}function Gd(){}function Xy(i,r){var o=Et();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Md(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Zy(i,r){var o=Et();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Md(r,u[1]))return u[0];if(u=i(),sa){Ei(!0);try{i()}finally{Ei(!1)}}return o.memoizedState=[u,r],u}function $d(i,r,o){return o===void 0||(sr&1073741824)!==0?i.memoizedState=r:(i.memoizedState=o,i=e0(),Ae.lanes|=i,mr|=i,o)}function Jy(i,r,o,u){return Rn(o,r)?o:co.current!==null?(i=$d(i,o,u),Rn(i,r)||(Lt=!0),i):(sr&42)===0?(Lt=!0,i.memoizedState=o):(i=e0(),Ae.lanes|=i,mr|=i,r)}function ev(i,r,o,u,f){var p=le.p;le.p=p!==0&&8>p?p:8;var v=C.T,w={};C.T=w,Wd(i,!1,r,o);try{var x=f(),U=C.S;if(U!==null&&U(w,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var W=QA(x,u);Hl(i,r,W,On(i))}else Hl(i,r,u,On(i))}catch(J){Hl(i,r,{then:function(){},status:"rejected",reason:J},On())}finally{le.p=p,C.T=v}}function tC(){}function Kd(i,r,o,u){if(i.tag!==5)throw Error(s(476));var f=tv(i).queue;ev(i,f,r,Se,o===null?tC:function(){return nv(i),o(u)})}function tv(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:Se,baseState:Se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:Se},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function nv(i){var r=tv(i).next.queue;Hl(i,r,{},On())}function Yd(){return tn(uu)}function iv(){return Et().memoizedState}function sv(){return Et().memoizedState}function nC(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=On();i=lr(o);var u=ur(r,i,o);u!==null&&(_n(u,r,o),$l(u,r,o)),r={cache:Od()},i.payload=r;return}r=r.return}}function iC(i,r,o){var u=On();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ih(i)?av(r,o):(o=Sd(i,r,o,u),o!==null&&(_n(o,i,u),ov(o,r,u)))}function rv(i,r,o){var u=On();Hl(i,r,o,u)}function Hl(i,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ih(i))av(r,f);else{var p=i.alternate;if(i.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,w=p(v,o);if(f.hasEagerState=!0,f.eagerState=w,Rn(w,v))return zc(i,r,f,0),Ze===null&&jc(),!1}catch{}finally{}if(o=Sd(i,r,f,u),o!==null)return _n(o,i,u),ov(o,r,u),!0}return!1}function Wd(i,r,o,u){if(u={lane:2,revertLane:Vm(),action:u,hasEagerState:!1,eagerState:null,next:null},ih(i)){if(r)throw Error(s(479))}else r=Sd(i,o,u,2),r!==null&&_n(r,i,2)}function ih(i){var r=i.alternate;return i===Ae||r!==null&&r===Ae}function av(i,r){mo=Qc=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function ov(i,r,o){if((o&4194176)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Gs(i,o)}}var ki={readContext:tn,use:Jc,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt};ki.useCacheRefresh=gt,ki.useMemoCache=gt,ki.useHostTransitionStatus=gt,ki.useFormState=gt,ki.useActionState=gt,ki.useOptimistic=gt;var ra={readContext:tn,use:Jc,useCallback:function(i,r){return Tn().memoizedState=[i,r===void 0?null:r],i},useContext:tn,useEffect:$y,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,th(4194308,4,Wy.bind(null,r,i),o)},useLayoutEffect:function(i,r){return th(4194308,4,i,r)},useInsertionEffect:function(i,r){th(4,2,i,r)},useMemo:function(i,r){var o=Tn();r=r===void 0?null:r;var u=i();if(sa){Ei(!0);try{i()}finally{Ei(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Tn();if(o!==void 0){var f=o(r);if(sa){Ei(!0);try{o(r)}finally{Ei(!1)}}}else f=r;return u.memoizedState=u.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},u.queue=i,i=i.dispatch=iC.bind(null,Ae,i),[u.memoizedState,i]},useRef:function(i){var r=Tn();return i={current:i},r.memoizedState=i},useState:function(i){i=Fd(i);var r=i.queue,o=rv.bind(null,Ae,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Gd,useDeferredValue:function(i,r){var o=Tn();return $d(o,i,r)},useTransition:function(){var i=Fd(!1);return i=ev.bind(null,Ae,i.queue,!0,!1),Tn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ae,f=Tn();if(Be){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),Ze===null)throw Error(s(349));(Pe&60)!==0||Ny(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,$y(Dy.bind(null,u,p,i),[i]),u.flags|=2048,go(9,Oy.bind(null,u,p,o,r),{destroy:void 0},null),o},useId:function(){var i=Tn(),r=Ze.identifierPrefix;if(Be){var o=rs,u=ss;o=(u&~(1<<32-dn(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Xc++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=XA++,r=":"+r+"r"+o.toString(32)+":";return i.memoizedState=r},useCacheRefresh:function(){return Tn().memoizedState=nC.bind(null,Ae)}};ra.useMemoCache=jd,ra.useHostTransitionStatus=Yd,ra.useFormState=By,ra.useActionState=By,ra.useOptimistic=function(i){var r=Tn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Wd.bind(null,Ae,!0,o),o.dispatch=r,[i,r]};var rr={readContext:tn,use:Jc,useCallback:Xy,useContext:tn,useEffect:qd,useImperativeHandle:Qy,useInsertionEffect:Ky,useLayoutEffect:Yy,useMemo:Zy,useReducer:eh,useRef:Gy,useState:function(){return eh(os)},useDebugValue:Gd,useDeferredValue:function(i,r){var o=Et();return Jy(o,Ye.memoizedState,i,r)},useTransition:function(){var i=eh(os)[0],r=Et().memoizedState;return[typeof i=="boolean"?i:Fl(i),r]},useSyncExternalStore:Iy,useId:iv};rr.useCacheRefresh=sv,rr.useMemoCache=jd,rr.useHostTransitionStatus=Yd,rr.useFormState=Fy,rr.useActionState=Fy,rr.useOptimistic=function(i,r){var o=Et();return Py(o,Ye,i,r)};var aa={readContext:tn,use:Jc,useCallback:Xy,useContext:tn,useEffect:qd,useImperativeHandle:Qy,useInsertionEffect:Ky,useLayoutEffect:Yy,useMemo:Zy,useReducer:Bd,useRef:Gy,useState:function(){return Bd(os)},useDebugValue:Gd,useDeferredValue:function(i,r){var o=Et();return Ye===null?$d(o,i,r):Jy(o,Ye.memoizedState,i,r)},useTransition:function(){var i=Bd(os)[0],r=Et().memoizedState;return[typeof i=="boolean"?i:Fl(i),r]},useSyncExternalStore:Iy,useId:iv};aa.useCacheRefresh=sv,aa.useMemoCache=jd,aa.useHostTransitionStatus=Yd,aa.useFormState=qy,aa.useActionState=qy,aa.useOptimistic=function(i,r){var o=Et();return Ye!==null?Py(o,Ye,i,r):(o.baseState=i,[i,o.queue.dispatch])};function Qd(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:N({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var Xd={isMounted:function(i){return(i=i._reactInternals)?ge(i)===i:!1},enqueueSetState:function(i,r,o){i=i._reactInternals;var u=On(),f=lr(u);f.payload=r,o!=null&&(f.callback=o),r=ur(i,f,u),r!==null&&(_n(r,i,u),$l(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=On(),f=lr(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=ur(i,f,u),r!==null&&(_n(r,i,u),$l(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=On(),u=lr(o);u.tag=2,r!=null&&(u.callback=r),r=ur(i,u,o),r!==null&&(_n(r,i,o),$l(r,i,o))}};function lv(i,r,o,u,f,p,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Nl(o,u)||!Nl(f,p):!0}function uv(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&Xd.enqueueReplaceState(r,r.state,null)}function oa(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=N({},o));for(var f in i)o[f]===void 0&&(o[f]=i[f])}return o}var sh=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function cv(i){sh(i)}function hv(i){console.error(i)}function fv(i){sh(i)}function rh(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function dv(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Zd(i,r,o){return o=lr(o),o.tag=3,o.payload={element:null},o.callback=function(){rh(i,r)},o}function mv(i){return i=lr(i),i.tag=3,i}function pv(i,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;i.payload=function(){return f(p)},i.callback=function(){dv(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(i.callback=function(){dv(r,o,u),typeof f!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function sC(i,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Gl(r,o,f,!0),o=$n.current,o!==null){switch(o.tag){case 13:return Di===null?km():o.alternate===null&&ft===0&&(ft=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===xd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Pm(i,u,f)),!1;case 22:return o.flags|=65536,u===xd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Pm(i,u,f)),!1}throw Error(s(435,o.tag))}return Pm(i,u,f),km(),!1}if(Be)return r=$n.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Rd&&(i=Error(s(422),{cause:u}),Ml(Hn(i,o)))):(u!==Rd&&(r=Error(s(423),{cause:u}),Ml(Hn(r,o))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,u=Hn(u,o),f=Zd(i.stateNode,u,f),dm(i,f),ft!==4&&(ft=2)),!1;var p=Error(s(520),{cause:u});if(p=Hn(p,o),eu===null?eu=[p]:eu.push(p),ft!==4&&(ft=2),r===null)return!0;u=Hn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=f&-f,o.lanes|=i,i=Zd(o.stateNode,u,i),dm(o,i),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(pr===null||!pr.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=mv(f),pv(f,i,o,u),dm(o,f),!1}o=o.return}while(o!==null);return!1}var gv=Error(s(461)),Lt=!1;function Kt(i,r,o,u){r.child=i===null?Ty(r,null,o,u):na(r,i.child,o,u)}function _v(i,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var v={};for(var w in u)w!=="ref"&&(v[w]=u[w])}else v=u;return ua(r),u=Pd(i,r,o,v,p,f),w=Ld(),i!==null&&!Lt?(Ud(i,r,f),ls(i,r,f)):(Be&&w&&Ad(r),r.flags|=1,Kt(i,r,u,f),r.child)}function yv(i,r,o,u,f){if(i===null){var p=o.type;return typeof p=="function"&&!Tm(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,vv(i,r,p,u,f)):(i=ch(o.type,null,u,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(p=i.child,!om(i,f)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Nl,o(v,u)&&i.ref===r.ref)return ls(i,r,f)}return r.flags|=1,i=dr(p,u),i.ref=r.ref,i.return=r,r.child=i}function vv(i,r,o,u,f){if(i!==null){var p=i.memoizedProps;if(Nl(p,u)&&i.ref===r.ref)if(Lt=!1,r.pendingProps=u=p,om(i,f))(i.flags&131072)!==0&&(Lt=!0);else return r.lanes=i.lanes,ls(i,r,f)}return Jd(i,r,o,u,f)}function Ev(i,r,o){var u=r.pendingProps,f=u.children,p=(r.stateNode._pendingVisibility&2)!==0,v=i!==null?i.memoizedState:null;if(ql(i,r),u.mode==="hidden"||p){if((r.flags&128)!==0){if(u=v!==null?v.baseLanes|o:o,i!==null){for(f=r.child=i.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return Tv(i,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Wc(r,v!==null?v.cachePool:null),v!==null?by(r,v):Id(),wy(r);else return r.lanes=r.childLanes=536870912,Tv(i,r,v!==null?v.baseLanes|o:o,o)}else v!==null?(Wc(r,v.cachePool),by(r,v),ir(),r.memoizedState=null):(i!==null&&Wc(r,null),Id(),ir());return Kt(i,r,f,o),r.child}function Tv(i,r,o,u){var f=kd();return f=f===null?null:{parent:Nt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},i!==null&&Wc(r,null),Id(),wy(r),i!==null&&Gl(i,r,u,!0),null}function ql(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(i===null||i.ref!==o)&&(r.flags|=2097664)}}function Jd(i,r,o,u,f){return ua(r),o=Pd(i,r,o,u,void 0,f),u=Ld(),i!==null&&!Lt?(Ud(i,r,f),ls(i,r,f)):(Be&&u&&Ad(r),r.flags|=1,Kt(i,r,o,f),r.child)}function bv(i,r,o,u,f,p){return ua(r),r.updateQueue=null,o=xy(r,u,o,f),Ry(i),u=Ld(),i!==null&&!Lt?(Ud(i,r,p),ls(i,r,p)):(Be&&u&&Ad(r),r.flags|=1,Kt(i,r,o,p),r.child)}function wv(i,r,o,u,f){if(ua(r),r.stateNode===null){var p=ao,v=o.contextType;typeof v=="object"&&v!==null&&(p=tn(v)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Xd,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},hm(r),v=o.contextType,p.context=typeof v=="object"&&v!==null?tn(v):ao,p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Qd(r,o,v,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&Xd.enqueueReplaceState(p,p.state,null),Yl(r,u,p,f),Kl(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){p=r.stateNode;var w=r.memoizedProps,x=oa(o,w);p.props=x;var U=p.context,W=o.contextType;v=ao,typeof W=="object"&&W!==null&&(v=tn(W));var J=o.getDerivedStateFromProps;W=typeof J=="function"||typeof p.getSnapshotBeforeUpdate=="function",w=r.pendingProps!==w,W||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(w||U!==v)&&uv(r,p,u,v),or=!1;var q=r.memoizedState;p.state=q,Yl(r,u,p,f),Kl(),U=r.memoizedState,w||q!==U||or?(typeof J=="function"&&(Qd(r,o,J,u),U=r.memoizedState),(x=or||lv(r,o,x,u,q,U,v))?(W||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=U),p.props=u,p.state=U,p.context=v,u=x):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,fm(i,r),v=r.memoizedProps,W=oa(o,v),p.props=W,J=r.pendingProps,q=p.context,U=o.contextType,x=ao,typeof U=="object"&&U!==null&&(x=tn(U)),w=o.getDerivedStateFromProps,(U=typeof w=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==J||q!==x)&&uv(r,p,u,x),or=!1,q=r.memoizedState,p.state=q,Yl(r,u,p,f),Kl();var Y=r.memoizedState;v!==J||q!==Y||or||i!==null&&i.dependencies!==null&&ah(i.dependencies)?(typeof w=="function"&&(Qd(r,o,w,u),Y=r.memoizedState),(W=or||lv(r,o,W,u,q,Y,x)||i!==null&&i.dependencies!==null&&ah(i.dependencies))?(U||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,Y,x),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,Y,x)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Y),p.props=u,p.state=Y,p.context=x,u=W):(typeof p.componentDidUpdate!="function"||v===i.memoizedProps&&q===i.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&q===i.memoizedState||(r.flags|=1024),u=!1)}return p=u,ql(i,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,i!==null&&u?(r.child=na(r,i.child,null,f),r.child=na(r,null,o,f)):Kt(i,r,o,f),r.memoizedState=p.state,i=r.child):i=ls(i,r,f),i}function Sv(i,r,o,u){return kl(),r.flags|=256,Kt(i,r,o,u),r.child}var em={dehydrated:null,treeContext:null,retryLane:0};function tm(i){return{baseLanes:i,cachePool:Cy()}}function nm(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Qn),i}function Av(i,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,v;if((v=p)||(v=i!==null&&i.memoizedState===null?!1:(It.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,i===null){if(Be){if(f?nr(r):ir(),Be){var w=$t,x;if(x=w){e:{for(x=w,w=Oi;x.nodeType!==8;){if(!w){w=null;break e}if(x=li(x.nextSibling),x===null){w=null;break e}}w=x}w!==null?(r.memoizedState={dehydrated:w,treeContext:Jr!==null?{id:ss,overflow:rs}:null,retryLane:536870912},x=Wn(18,null,null,0),x.stateNode=w,x.return=r,r.child=x,gn=r,$t=null,x=!0):x=!1}x||ta(r)}if(w=r.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return w.data==="$!"?r.lanes=16:r.lanes=536870912,null;as(r)}return w=u.children,u=u.fallback,f?(ir(),f=r.mode,w=sm({mode:"hidden",children:w},f),u=ha(u,f,o,null),w.return=r,u.return=r,w.sibling=u,r.child=w,f=r.child,f.memoizedState=tm(o),f.childLanes=nm(i,v,o),r.memoizedState=em,u):(nr(r),im(r,w))}if(x=i.memoizedState,x!==null&&(w=x.dehydrated,w!==null)){if(p)r.flags&256?(nr(r),r.flags&=-257,r=rm(i,r,o)):r.memoizedState!==null?(ir(),r.child=i.child,r.flags|=128,r=null):(ir(),f=u.fallback,w=r.mode,u=sm({mode:"visible",children:u.children},w),f=ha(f,w,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,na(r,i.child,null,o),u=r.child,u.memoizedState=tm(o),u.childLanes=nm(i,v,o),r.memoizedState=em,r=f);else if(nr(r),w.data==="$!"){if(v=w.nextSibling&&w.nextSibling.dataset,v)var U=v.dgst;v=U,u=Error(s(419)),u.stack="",u.digest=v,Ml({value:u,source:null,stack:null}),r=rm(i,r,o)}else if(Lt||Gl(i,r,o,!1),v=(o&i.childLanes)!==0,Lt||v){if(v=Ze,v!==null){if(u=o&-o,(u&42)!==0)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==x.retryLane)throw x.retryLane=u,tr(i,u),_n(v,i,u),gv}w.data==="$?"||km(),r=rm(i,r,o)}else w.data==="$?"?(r.flags|=128,r.child=i.child,r=vC.bind(null,i),w._reactRetry=r,r=null):(i=x.treeContext,$t=li(w.nextSibling),gn=r,Be=!0,ai=null,Oi=!1,i!==null&&(qn[Gn++]=ss,qn[Gn++]=rs,qn[Gn++]=Jr,ss=i.id,rs=i.overflow,Jr=r),r=im(r,u.children),r.flags|=4096);return r}return f?(ir(),f=u.fallback,w=r.mode,x=i.child,U=x.sibling,u=dr(x,{mode:"hidden",children:u.children}),u.subtreeFlags=x.subtreeFlags&31457280,U!==null?f=dr(U,f):(f=ha(f,w,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,w=i.child.memoizedState,w===null?w=tm(o):(x=w.cachePool,x!==null?(U=Nt._currentValue,x=x.parent!==U?{parent:U,pool:U}:x):x=Cy(),w={baseLanes:w.baseLanes|o,cachePool:x}),f.memoizedState=w,f.childLanes=nm(i,v,o),r.memoizedState=em,u):(nr(r),o=i.child,i=o.sibling,o=dr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(v=r.deletions,v===null?(r.deletions=[i],r.flags|=16):v.push(i)),r.child=o,r.memoizedState=null,o)}function im(i,r){return r=sm({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function sm(i,r){return Xv(i,r,0,null)}function rm(i,r,o){return na(r,i.child,null,o),i=im(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function Cv(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),um(i.return,r,o)}function am(i,r,o,u,f){var p=i.memoizedState;p===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function Rv(i,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(Kt(i,r,u.children,o),u=It.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Cv(i,o,r);else if(i.tag===19)Cv(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch($e(It,u),f){case"forwards":for(o=r.child,f=null;o!==null;)i=o.alternate,i!==null&&Yc(i)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),am(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&Yc(i)===null){r.child=f;break}i=f.sibling,f.sibling=o,o=f,f=i}am(r,!0,o,null,p);break;case"together":am(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ls(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),mr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(Gl(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,o=dr(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=dr(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function om(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&ah(i)))}function rC(i,r,o){switch(r.tag){case 3:js(r,r.stateNode.containerInfo),ar(r,Nt,i.memoizedState.cache),kl();break;case 27:case 5:ul(r);break;case 4:js(r,r.stateNode.containerInfo);break;case 10:ar(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(nr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Av(i,r,o):(nr(r),i=ls(i,r,o),i!==null?i.sibling:null);nr(r);break;case 19:var f=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Gl(i,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Rv(i,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$e(It,It.current),u)break;return null;case 22:case 23:return r.lanes=0,Ev(i,r,o);case 24:ar(r,Nt,i.memoizedState.cache)}return ls(i,r,o)}function xv(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Lt=!0;else{if(!om(i,o)&&(r.flags&128)===0)return Lt=!1,rC(i,r,o);Lt=(i.flags&131072)!==0}else Lt=!1,Be&&(r.flags&1048576)!==0&&fy(r,Hc,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Tm(u)?(i=oa(u,i),r.tag=1,r=wv(null,r,u,i,o)):(r.tag=0,r=Jd(null,r,u,i,o));else{if(u!=null){if(f=u.$$typeof,f===D){r.tag=11,r=_v(null,r,u,i,o);break e}else if(f===K){r.tag=14,r=yv(null,r,u,i,o);break e}}throw r=R(u)||u,Error(s(306,r,""))}}return r;case 0:return Jd(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=oa(u,r.pendingProps),wv(i,r,u,f,o);case 3:e:{if(js(r,r.stateNode.containerInfo),i===null)throw Error(s(387));var p=r.pendingProps;f=r.memoizedState,u=f.element,fm(i,r),Yl(r,p,null,o);var v=r.memoizedState;if(p=v.cache,ar(r,Nt,p),p!==f.cache&&cm(r,[Nt],o,!0),Kl(),p=v.element,f.isDehydrated)if(f={element:p,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=Sv(i,r,p,o);break e}else if(p!==u){u=Hn(Error(s(424)),r),Ml(u),r=Sv(i,r,p,o);break e}else for($t=li(r.stateNode.containerInfo.firstChild),gn=r,Be=!0,ai=null,Oi=!0,o=Ty(r,null,p,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(kl(),p===u){r=ls(i,r,o);break e}Kt(i,r,p,o)}r=r.child}return r;case 26:return ql(i,r),i===null?(o=O0(r.type,null,r.pendingProps,null))?r.memoizedState=o:Be||(o=r.type,i=r.pendingProps,u=bh(Pn.current).createElement(o),u[kt]=r,u[Ct]=i,Yt(u,o,i),at(u),r.stateNode=u):r.memoizedState=O0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return ul(r),i===null&&Be&&(u=r.stateNode=x0(r.type,r.pendingProps,Pn.current),gn=r,Oi=!0,$t=li(u.firstChild)),u=r.pendingProps.children,i!==null||Be?Kt(i,r,u,o):r.child=na(r,null,u,o),ql(i,r),r.child;case 5:return i===null&&Be&&((f=u=$t)&&(u=PC(u,r.type,r.pendingProps,Oi),u!==null?(r.stateNode=u,gn=r,$t=li(u.firstChild),Oi=!1,f=!0):f=!1),f||ta(r)),ul(r),f=r.type,p=r.pendingProps,v=i!==null?i.memoizedProps:null,u=p.children,Km(f,p)?u=null:v!==null&&Km(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Pd(i,r,ZA,null,null,o),uu._currentValue=f),ql(i,r),Kt(i,r,u,o),r.child;case 6:return i===null&&Be&&((i=o=$t)&&(o=LC(o,r.pendingProps,Oi),o!==null?(r.stateNode=o,gn=r,$t=null,i=!0):i=!1),i||ta(r)),null;case 13:return Av(i,r,o);case 4:return js(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=na(r,null,u,o):Kt(i,r,u,o),r.child;case 11:return _v(i,r,r.type,r.pendingProps,o);case 7:return Kt(i,r,r.pendingProps,o),r.child;case 8:return Kt(i,r,r.pendingProps.children,o),r.child;case 12:return Kt(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ar(r,r.type,u.value),Kt(i,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,ua(r),f=tn(f),u=u(f),r.flags|=1,Kt(i,r,u,o),r.child;case 14:return yv(i,r,r.type,r.pendingProps,o);case 15:return vv(i,r,r.type,r.pendingProps,o);case 19:return Rv(i,r,o);case 22:return Ev(i,r,o);case 24:return ua(r),u=tn(Nt),i===null?(f=kd(),f===null&&(f=Ze,p=Od(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},hm(r),ar(r,Nt,f)):((i.lanes&o)!==0&&(fm(i,r),Yl(r,null,null,o),Kl()),f=i.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),ar(r,Nt,u)):(u=p.cache,ar(r,Nt,u),u!==f.cache&&cm(r,[Nt],o,!0))),Kt(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}var lm=je(null),la=null,us=null;function ar(i,r,o){$e(lm,r._currentValue),r._currentValue=o}function cs(i){i._currentValue=lm.current,ut(lm)}function um(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function cm(i,r,o,u){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var w=p;p=f;for(var x=0;x<r.length;x++)if(w.context===r[x]){p.lanes|=o,w=p.alternate,w!==null&&(w.lanes|=o),um(p.return,o,i),u||(v=null);break e}p=w.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,p=v.alternate,p!==null&&(p.lanes|=o),um(v,o,i),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Gl(i,r,o,u){i=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var w=f.type;Rn(f.pendingProps.value,v.value)||(i!==null?i.push(w):i=[w])}}else if(f===Vs.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(uu):i=[uu])}f=f.return}i!==null&&cm(r,i,o,u),r.flags|=262144}function ah(i){for(i=i.firstContext;i!==null;){if(!Rn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function ua(i){la=i,us=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function tn(i){return Iv(la,i)}function oh(i,r){return la===null&&ua(i),Iv(i,r)}function Iv(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},us===null){if(i===null)throw Error(s(308));us=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else us=us.next=r;return o}var or=!1;function hm(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function lr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ur(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(lt&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Bc(i),cy(i,null,o),r}return zc(i,u,r,o),Bc(i)}function $l(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Gs(i,o)}}function dm(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var mm=!1;function Kl(){if(mm){var i=fo;if(i!==null)throw i}}function Yl(i,r,o,u){mm=!1;var f=i.updateQueue;or=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var x=w,U=x.next;x.next=null,v===null?p=U:v.next=U,v=x;var W=i.alternate;W!==null&&(W=W.updateQueue,w=W.lastBaseUpdate,w!==v&&(w===null?W.firstBaseUpdate=U:w.next=U,W.lastBaseUpdate=x))}if(p!==null){var J=f.baseState;v=0,W=U=x=null,w=p;do{var q=w.lane&-536870913,Y=q!==w.lane;if(Y?(Pe&q)===q:(u&q)===q){q!==0&&q===ho&&(mm=!0),W!==null&&(W=W.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var fe=i,Te=w;q=r;var dt=o;switch(Te.tag){case 1:if(fe=Te.payload,typeof fe=="function"){J=fe.call(dt,J,q);break e}J=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=Te.payload,q=typeof fe=="function"?fe.call(dt,J,q):fe,q==null)break e;J=N({},J,q);break e;case 2:or=!0}}q=w.callback,q!==null&&(i.flags|=64,Y&&(i.flags|=8192),Y=f.callbacks,Y===null?f.callbacks=[q]:Y.push(q))}else Y={lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},W===null?(U=W=Y,x=J):W=W.next=Y,v|=q;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;Y=w,w=Y.next,Y.next=null,f.lastBaseUpdate=Y,f.shared.pending=null}}while(!0);W===null&&(x=J),f.baseState=x,f.firstBaseUpdate=U,f.lastBaseUpdate=W,p===null&&(f.shared.lanes=0),mr|=v,i.lanes=v,i.memoizedState=J}}function Nv(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function Ov(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)Nv(o[i],r)}function Wl(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&i)===i){u=void 0;var p=o.create,v=o.inst;u=p(),v.destroy=u}o=o.next}while(o!==f)}}catch(w){Xe(r,r.return,w)}}function cr(i,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&i)===i){var v=u.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,f=r;var x=o;try{w()}catch(U){Xe(f,x,U)}}}u=u.next}while(u!==p)}}catch(U){Xe(r,r.return,U)}}function Dv(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{Ov(r,o)}catch(u){Xe(i,i.return,u)}}}function kv(i,r,o){o.props=oa(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){Xe(i,r,u)}}function ca(i,r){try{var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?i.refCleanup=o(f):o.current=f}}catch(p){Xe(i,r,p)}}function xn(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){Xe(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Xe(i,r,f)}else o.current=null}function Mv(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){Xe(i,i.return,f)}}function Pv(i,r,o){try{var u=i.stateNode;NC(u,i.type,o,r),u[Ct]=r}catch(f){Xe(i,i.return,f)}}function Lv(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function pm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Lv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function gm(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(i,r):o.insertBefore(i,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(i,o)):(r=o,r.appendChild(i)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Th));else if(u!==4&&u!==27&&(i=i.child,i!==null))for(gm(i,r,o),i=i.sibling;i!==null;)gm(i,r,o),i=i.sibling}function lh(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&u!==27&&(i=i.child,i!==null))for(lh(i,r,o),i=i.sibling;i!==null;)lh(i,r,o),i=i.sibling}var hs=!1,ht=!1,_m=!1,Uv=typeof WeakSet=="function"?WeakSet:Set,Ut=null,Vv=!1;function aC(i,r){if(i=i.containerInfo,Gm=xh,i=ty(i),vd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,w=-1,x=-1,U=0,W=0,J=i,q=null;t:for(;;){for(var Y;J!==o||f!==0&&J.nodeType!==3||(w=v+f),J!==p||u!==0&&J.nodeType!==3||(x=v+u),J.nodeType===3&&(v+=J.nodeValue.length),(Y=J.firstChild)!==null;)q=J,J=Y;for(;;){if(J===i)break t;if(q===o&&++U===f&&(w=v),q===p&&++W===u&&(x=v),(Y=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=Y}o=w===-1||x===-1?null:{start:w,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for($m={focusedElem:i,selectionRange:o},xh=!1,Ut=r;Ut!==null;)if(r=Ut,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,Ut=i;else for(;Ut!==null;){switch(r=Ut,p=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&p!==null){i=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var fe=oa(o.type,f,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(fe,p),u.__reactInternalSnapshotBeforeUpdate=i}catch(Te){Xe(o,o.return,Te)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Qm(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Qm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Ut=i;break}Ut=r.return}return fe=Vv,Vv=!1,fe}function jv(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:ds(i,o),u&4&&Wl(5,o);break;case 1:if(ds(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(w){Xe(o,o.return,w)}else{var f=oa(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(w){Xe(o,o.return,w)}}u&64&&Dv(o),u&512&&ca(o,o.return);break;case 3:if(ds(i,o),u&64&&(u=o.updateQueue,u!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{Ov(u,i)}catch(w){Xe(o,o.return,w)}}break;case 26:ds(i,o),u&512&&ca(o,o.return);break;case 27:case 5:ds(i,o),r===null&&u&4&&Mv(o),u&512&&ca(o,o.return);break;case 12:ds(i,o);break;case 13:ds(i,o),u&4&&Fv(i,o);break;case 22:if(f=o.memoizedState!==null||hs,!f){r=r!==null&&r.memoizedState!==null||ht;var p=hs,v=ht;hs=f,(ht=r)&&!v?hr(i,o,(o.subtreeFlags&8772)!==0):ds(i,o),hs=p,ht=v}u&512&&(o.memoizedProps.mode==="manual"?ca(o,o.return):xn(o,o.return));break;default:ds(i,o)}}function zv(i){var r=i.alternate;r!==null&&(i.alternate=null,zv(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&zr(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Tt=null,In=!1;function fs(i,r,o){for(o=o.child;o!==null;)Bv(i,r,o),o=o.sibling}function Bv(i,r,o){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(zs,o)}catch{}switch(o.tag){case 26:ht||xn(o,r),fs(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ht||xn(o,r);var u=Tt,f=In;for(Tt=o.stateNode,fs(i,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);zr(o),Tt=u,In=f;break;case 5:ht||xn(o,r);case 6:f=Tt;var p=In;if(Tt=null,fs(i,r,o),Tt=f,In=p,Tt!==null)if(In)try{i=Tt,u=o.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)}catch(v){Xe(o,r,v)}else try{Tt.removeChild(o.stateNode)}catch(v){Xe(o,r,v)}break;case 18:Tt!==null&&(In?(r=Tt,o=o.stateNode,r.nodeType===8?Wm(r.parentNode,o):r.nodeType===1&&Wm(r,o),du(r)):Wm(Tt,o.stateNode));break;case 4:u=Tt,f=In,Tt=o.stateNode.containerInfo,In=!0,fs(i,r,o),Tt=u,In=f;break;case 0:case 11:case 14:case 15:ht||cr(2,o,r),ht||cr(4,o,r),fs(i,r,o);break;case 1:ht||(xn(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&kv(o,r,u)),fs(i,r,o);break;case 21:fs(i,r,o);break;case 22:ht||xn(o,r),ht=(u=ht)||o.memoizedState!==null,fs(i,r,o),ht=u;break;default:fs(i,r,o)}}function Fv(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{du(i)}catch(o){Xe(r,r.return,o)}}function oC(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new Uv),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new Uv),r;default:throw Error(s(435,i.tag))}}function ym(i,r){var o=oC(i);r.forEach(function(u){var f=EC.bind(null,i,u);o.has(u)||(o.add(u),u.then(f,f))})}function Kn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=i,v=r,w=v;e:for(;w!==null;){switch(w.tag){case 27:case 5:Tt=w.stateNode,In=!1;break e;case 3:Tt=w.stateNode.containerInfo,In=!0;break e;case 4:Tt=w.stateNode.containerInfo,In=!0;break e}w=w.return}if(Tt===null)throw Error(s(160));Bv(p,v,f),Tt=null,In=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Hv(r,i),r=r.sibling}var oi=null;function Hv(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Kn(r,i),Yn(i),u&4&&(cr(3,i,i.return),Wl(3,i),cr(5,i,i.return));break;case 1:Kn(r,i),Yn(i),u&512&&(ht||o===null||xn(o,o.return)),u&64&&hs&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=oi;if(Kn(r,i),Yn(i),u&512&&(ht||o===null||xn(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Ks]||p[kt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),Yt(p,u,o),p[kt]=i,at(p),u=p;break e;case"link":var v=M0("link","href",f).get(u+(o.href||""));if(v){for(var w=0;w<v.length;w++)if(p=v[w],p.getAttribute("href")===(o.href==null?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(w,1);break t}}p=f.createElement(u),Yt(p,u,o),f.head.appendChild(p);break;case"meta":if(v=M0("meta","content",f).get(u+(o.content||""))){for(w=0;w<v.length;w++)if(p=v[w],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(w,1);break t}}p=f.createElement(u),Yt(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[kt]=i,at(p),u=p}i.stateNode=u}else P0(f,i.type,i.stateNode);else i.stateNode=k0(f,u,i.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?P0(f,i.type,i.stateNode):k0(f,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Pv(i,i.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&i.alternate===null){f=i.stateNode,p=i.memoizedProps;try{for(var x=f.firstChild;x;){var U=x.nextSibling,W=x.nodeName;x[Ks]||W==="HEAD"||W==="BODY"||W==="SCRIPT"||W==="STYLE"||W==="LINK"&&x.rel.toLowerCase()==="stylesheet"||f.removeChild(x),x=U}for(var J=i.type,q=f.attributes;q.length;)f.removeAttributeNode(q[0]);Yt(f,J,p),f[kt]=i,f[Ct]=p}catch(fe){Xe(i,i.return,fe)}}case 5:if(Kn(r,i),Yn(i),u&512&&(ht||o===null||xn(o,o.return)),i.flags&32){f=i.stateNode;try{Vn(f,"")}catch(fe){Xe(i,i.return,fe)}}u&4&&i.stateNode!=null&&(f=i.memoizedProps,Pv(i,f,o!==null?o.memoizedProps:f)),u&1024&&(_m=!0);break;case 6:if(Kn(r,i),Yn(i),u&4){if(i.stateNode===null)throw Error(s(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(fe){Xe(i,i.return,fe)}}break;case 3:if(Ah=null,f=oi,oi=wh(r.containerInfo),Kn(r,i),oi=f,Yn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{du(r.containerInfo)}catch(fe){Xe(i,i.return,fe)}_m&&(_m=!1,qv(i));break;case 4:u=oi,oi=wh(i.stateNode.containerInfo),Kn(r,i),Yn(i),oi=u;break;case 12:Kn(r,i),Yn(i);break;case 13:Kn(r,i),Yn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Rm=vn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,ym(i,u)));break;case 22:if(u&512&&(ht||o===null||xn(o,o.return)),x=i.memoizedState!==null,U=o!==null&&o.memoizedState!==null,W=hs,J=ht,hs=W||x,ht=J||U,Kn(r,i),ht=J,hs=W,Yn(i),r=i.stateNode,r._current=i,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=x?r._visibility&-2:r._visibility|1,x&&(r=hs||ht,o===null||U||r||_o(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(o=null,r=i;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){U=o=r;try{if(f=U.stateNode,x)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=U.stateNode,w=U.memoizedProps.style;var Y=w!=null&&w.hasOwnProperty("display")?w.display:null;v.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(fe){Xe(U,U.return,fe)}}}else if(r.tag===6){if(o===null){U=r;try{U.stateNode.nodeValue=x?"":U.memoizedProps}catch(fe){Xe(U,U.return,fe)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,ym(i,o))));break;case 19:Kn(r,i),Yn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,ym(i,u)));break;case 21:break;default:Kn(r,i),Yn(i)}}function Yn(i){var r=i.flags;if(r&2){try{if(i.tag!==27){e:{for(var o=i.return;o!==null;){if(Lv(o)){var u=o;break e}o=o.return}throw Error(s(160))}switch(u.tag){case 27:var f=u.stateNode,p=pm(i);lh(i,p,f);break;case 5:var v=u.stateNode;u.flags&32&&(Vn(v,""),u.flags&=-33);var w=pm(i);lh(i,w,v);break;case 3:case 4:var x=u.stateNode.containerInfo,U=pm(i);gm(i,U,x);break;default:throw Error(s(161))}}}catch(W){Xe(i,i.return,W)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function qv(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;qv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function ds(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)jv(i,r.alternate,r),r=r.sibling}function _o(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:cr(4,r,r.return),_o(r);break;case 1:xn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&kv(r,r.return,o),_o(r);break;case 26:case 27:case 5:xn(r,r.return),_o(r);break;case 22:xn(r,r.return),r.memoizedState===null&&_o(r);break;default:_o(r)}i=i.sibling}}function hr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=i,p=r,v=p.flags;switch(p.tag){case 0:case 11:case 15:hr(f,p,o),Wl(4,p);break;case 1:if(hr(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){Xe(u,u.return,U)}if(u=p,f=u.updateQueue,f!==null){var w=u.stateNode;try{var x=f.shared.hiddenCallbacks;if(x!==null)for(f.shared.hiddenCallbacks=null,f=0;f<x.length;f++)Nv(x[f],w)}catch(U){Xe(u,u.return,U)}}o&&v&64&&Dv(p),ca(p,p.return);break;case 26:case 27:case 5:hr(f,p,o),o&&u===null&&v&4&&Mv(p),ca(p,p.return);break;case 12:hr(f,p,o);break;case 13:hr(f,p,o),o&&v&4&&Fv(f,p);break;case 22:p.memoizedState===null&&hr(f,p,o),ca(p,p.return);break;default:hr(f,p,o)}r=r.sibling}}function vm(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&jl(o))}function Em(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&jl(i))}function fr(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Gv(i,r,o,u),r=r.sibling}function Gv(i,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:fr(i,r,o,u),f&2048&&Wl(9,r);break;case 3:fr(i,r,o,u),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&jl(i)));break;case 12:if(f&2048){fr(i,r,o,u),i=r.stateNode;try{var p=r.memoizedProps,v=p.id,w=p.onPostCommit;typeof w=="function"&&w(v,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(x){Xe(r,r.return,x)}}else fr(i,r,o,u);break;case 23:break;case 22:p=r.stateNode,r.memoizedState!==null?p._visibility&4?fr(i,r,o,u):Ql(i,r):p._visibility&4?fr(i,r,o,u):(p._visibility|=4,yo(i,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&vm(r.alternate,r);break;case 24:fr(i,r,o,u),f&2048&&Em(r.alternate,r);break;default:fr(i,r,o,u)}}function yo(i,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=i,v=r,w=o,x=u,U=v.flags;switch(v.tag){case 0:case 11:case 15:yo(p,v,w,x,f),Wl(8,v);break;case 23:break;case 22:var W=v.stateNode;v.memoizedState!==null?W._visibility&4?yo(p,v,w,x,f):Ql(p,v):(W._visibility|=4,yo(p,v,w,x,f)),f&&U&2048&&vm(v.alternate,v);break;case 24:yo(p,v,w,x,f),f&&U&2048&&Em(v.alternate,v);break;default:yo(p,v,w,x,f)}r=r.sibling}}function Ql(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,f=u.flags;switch(u.tag){case 22:Ql(o,u),f&2048&&vm(u.alternate,u);break;case 24:Ql(o,u),f&2048&&Em(u.alternate,u);break;default:Ql(o,u)}r=r.sibling}}var Xl=8192;function vo(i){if(i.subtreeFlags&Xl)for(i=i.child;i!==null;)$v(i),i=i.sibling}function $v(i){switch(i.tag){case 26:vo(i),i.flags&Xl&&i.memoizedState!==null&&WC(oi,i.memoizedState,i.memoizedProps);break;case 5:vo(i);break;case 3:case 4:var r=oi;oi=wh(i.stateNode.containerInfo),vo(i),oi=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Xl,Xl=16777216,vo(i),Xl=r):vo(i));break;default:vo(i)}}function Kv(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Zl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ut=u,Wv(u,i)}Kv(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Yv(i),i=i.sibling}function Yv(i){switch(i.tag){case 0:case 11:case 15:Zl(i),i.flags&2048&&cr(9,i,i.return);break;case 3:Zl(i);break;case 12:Zl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&4&&(i.return===null||i.return.tag!==13)?(r._visibility&=-5,uh(i)):Zl(i);break;default:Zl(i)}}function uh(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ut=u,Wv(u,i)}Kv(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:cr(8,r,r.return),uh(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,uh(r));break;default:uh(r)}i=i.sibling}}function Wv(i,r){for(;Ut!==null;){var o=Ut;switch(o.tag){case 0:case 11:case 15:cr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:jl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ut=u;else e:for(o=i;Ut!==null;){u=Ut;var f=u.sibling,p=u.return;if(zv(u),u===o){Ut=null;break e}if(f!==null){f.return=p,Ut=f;break e}Ut=p}}}function lC(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(i,r,o,u){return new lC(i,r,o,u)}function Tm(i){return i=i.prototype,!(!i||!i.isReactComponent)}function dr(i,r){var o=i.alternate;return o===null?(o=Wn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&31457280,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Qv(i,r){i.flags&=31457282;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function ch(i,r,o,u,f,p){var v=0;if(u=i,typeof i=="function")Tm(i)&&(v=1);else if(typeof i=="string")v=KC(i,o,fn.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case m:return ha(o.children,f,p,r);case g:v=8,f|=24;break;case T:return i=Wn(12,o,r,f|2),i.elementType=T,i.lanes=p,i;case G:return i=Wn(13,o,r,f),i.elementType=G,i.lanes=p,i;case B:return i=Wn(19,o,r,f),i.elementType=B,i.lanes=p,i;case Q:return Xv(o,f,p,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:case I:v=10;break e;case S:v=9;break e;case D:v=11;break e;case K:v=14;break e;case ee:v=16,u=null;break e}v=29,o=Error(s(130,i===null?"null":typeof i,"")),u=null}return r=Wn(v,o,r,f),r.elementType=i,r.type=u,r.lanes=p,r}function ha(i,r,o,u){return i=Wn(7,i,u,r),i.lanes=o,i}function Xv(i,r,o,u){i=Wn(22,i,u,r),i.elementType=Q,i.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)===0){var v=tr(p,2);v!==null&&(f._pendingVisibility|=2,_n(v,p,2))}},attach:function(){var p=f._current;if(p===null)throw Error(s(456));if((f._pendingVisibility&2)!==0){var v=tr(p,2);v!==null&&(f._pendingVisibility&=-3,_n(v,p,2))}}};return i.stateNode=f,i}function bm(i,r,o){return i=Wn(6,i,null,r),i.lanes=o,i}function wm(i,r,o){return r=Wn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function ms(i){i.flags|=4}function Zv(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!L0(r)){if(r=$n.current,r!==null&&((Pe&4194176)===Pe?Di!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||r!==Di))throw Ll=xd,py;i.flags|=8192}}function hh(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Hs():536870912,i.lanes|=r,To|=r)}function Jl(i,r){if(!Be)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function ot(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function uC(i,r,o){var u=r.pendingProps;switch(Cd(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(r),null;case 1:return ot(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),cs(Nt),Ki(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(Dl(r)?ms(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ai!==null&&(Om(ai),ai=null))),ot(r),null;case 26:return o=r.memoizedState,i===null?(ms(r),o!==null?(ot(r),Zv(r,o)):(ot(r),r.flags&=-16777217)):o?o!==i.memoizedState?(ms(r),ot(r),Zv(r,o)):(ot(r),r.flags&=-16777217):(i.memoizedProps!==u&&ms(r),ot(r),r.flags&=-16777217),null;case 27:ja(r),o=Pn.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ms(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return ot(r),null}i=fn.current,Dl(r)?dy(r):(i=x0(f,u,o),r.stateNode=i,ms(r))}return ot(r),null;case 5:if(ja(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ms(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return ot(r),null}if(i=fn.current,Dl(r))dy(r);else{switch(f=bh(Pn.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}i[kt]=r,i[Ct]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;e:switch(Yt(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ms(r)}}return ot(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&ms(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(i=Pn.current,Dl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,f=gn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}i[kt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||b0(i.nodeValue,o)),i||ta(r)}else i=bh(i).createTextNode(u),i[kt]=r,r.stateNode=i}return ot(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Dl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[kt]=r}else kl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ot(r),f=!1}else ai!==null&&(Om(ai),ai=null),f=!0;if(!f)return r.flags&256?(as(r),r):(as(r),null)}if(as(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),hh(r,r.updateQueue),ot(r),null;case 4:return Ki(),i===null&&Fm(r.stateNode.containerInfo),ot(r),null;case 10:return cs(r.type),ot(r),null;case 19:if(ut(It),f=r.memoizedState,f===null)return ot(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)Jl(f,!1);else{if(ft!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(p=Yc(i),p!==null){for(r.flags|=128,Jl(f,!1),i=p.updateQueue,r.updateQueue=i,hh(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Qv(o,i),o=o.sibling;return $e(It,It.current&1|2),r.child}i=i.sibling}f.tail!==null&&vn()>fh&&(r.flags|=128,u=!0,Jl(f,!1),r.lanes=4194304)}else{if(!u)if(i=Yc(p),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,hh(r,i),Jl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Be)return ot(r),null}else 2*vn()-f.renderingStartTime>fh&&o!==536870912&&(r.flags|=128,u=!0,Jl(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(i=f.last,i!==null?i.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=vn(),r.sibling=null,i=It.current,$e(It,u?i&1|2:i&1),r):(ot(r),null);case 22:case 23:return as(r),Nd(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(ot(r),r.subtreeFlags&6&&(r.flags|=8192)):ot(r),o=r.updateQueue,o!==null&&hh(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&ut(ia),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),cs(Nt),ot(r),null;case 25:return null}throw Error(s(156,r.tag))}function cC(i,r){switch(Cd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return cs(Nt),Ki(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return ja(r),null;case 13:if(as(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));kl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ut(It),null;case 4:return Ki(),null;case 10:return cs(r.type),null;case 22:case 23:return as(r),Nd(),i!==null&&ut(ia),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return cs(Nt),null;case 25:return null;default:return null}}function Jv(i,r){switch(Cd(r),r.tag){case 3:cs(Nt),Ki();break;case 26:case 27:case 5:ja(r);break;case 4:Ki();break;case 13:as(r);break;case 19:ut(It);break;case 10:cs(r.type);break;case 22:case 23:as(r),Nd(),i!==null&&ut(ia);break;case 24:cs(Nt)}}var hC={getCacheForType:function(i){var r=tn(Nt),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},fC=typeof WeakMap=="function"?WeakMap:Map,lt=0,Ze=null,xe=null,Pe=0,Je=0,Nn=null,ps=!1,Eo=!1,Sm=!1,gs=0,ft=0,mr=0,fa=0,Am=0,Qn=0,To=0,eu=null,Mi=null,Cm=!1,Rm=0,fh=1/0,dh=null,pr=null,mh=!1,da=null,tu=0,xm=0,Im=null,nu=0,Nm=null;function On(){if((lt&2)!==0&&Pe!==0)return Pe&-Pe;if(C.T!==null){var i=ho;return i!==0?i:Vm()}return Ec()}function e0(){Qn===0&&(Qn=(Pe&536870912)===0||Be?ml():536870912);var i=$n.current;return i!==null&&(i.flags|=32),Qn}function _n(i,r,o){(i===Ze&&Je===2||i.cancelPendingCommit!==null)&&(bo(i,0),_s(i,Pe,Qn,!1)),pt(i,o),((lt&2)===0||i!==Ze)&&(i===Ze&&((lt&2)===0&&(fa|=o),ft===4&&_s(i,Pe,Qn,!1)),Pi(i))}function t0(i,r,o){if((lt&6)!==0)throw Error(s(327));var u=!o&&(r&60)===0&&(r&i.expiredLanes)===0||Fs(i,r),f=u?pC(i,r):Mm(i,r,!0),p=u;do{if(f===0){Eo&&!u&&_s(i,r,0,!1);break}else if(f===6)_s(i,r,0,!ps);else{if(o=i.current.alternate,p&&!dC(o)){f=Mm(i,r,!1),p=!1;continue}if(f===2){if(p=r,i.errorRecoveryDisabledLanes&p)var v=0;else v=i.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var w=i;f=eu;var x=w.current.memoizedState.isDehydrated;if(x&&(bo(w,v).flags|=256),v=Mm(w,v,!1),v!==2){if(Sm&&!x){w.errorRecoveryDisabledLanes|=p,fa|=p,f=4;break e}p=Mi,Mi=f,p!==null&&Om(p)}f=v}if(p=!1,f!==2)continue}}if(f===1){bo(i,0),_s(i,r,0,!0);break}e:{switch(u=i,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194176)===r){_s(u,r,Qn,!ps);break e}break;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(s(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(p=Rm+300-vn(),10<p)){if(_s(u,r,Qn,!ps),Ln(u,0)!==0)break e;u.timeoutHandle=A0(n0.bind(null,u,o,Mi,dh,Cm,r,Qn,fa,To,ps,2,-0,0),p);break e}n0(u,o,Mi,dh,Cm,r,Qn,fa,To,ps,0,-0,0)}}break}while(!0);Pi(i)}function Om(i){Mi===null?Mi=i:Mi.push.apply(Mi,i)}function n0(i,r,o,u,f,p,v,w,x,U,W,J,q){var Y=r.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(lu={stylesheets:null,count:0,unsuspend:YC},$v(r),r=QC(),r!==null)){i.cancelPendingCommit=r(u0.bind(null,i,o,u,f,v,w,x,1,J,q)),_s(i,p,v,!U);return}u0(i,o,u,f,v,w,x,W,J,q)}function dC(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!Rn(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _s(i,r,o,u){r&=~Am,r&=~fa,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var f=r;0<f;){var p=31-dn(f),v=1<<p;u[p]=-1,f&=~v}o!==0&&qs(i,o,r)}function ph(){return(lt&6)===0?(iu(0),!1):!0}function Dm(){if(xe!==null){if(Je===0)var i=xe.return;else i=xe,us=la=null,Vd(i),uo=null,Ul=0,i=xe;for(;i!==null;)Jv(i.alternate,i),i=i.return;xe=null}}function bo(i,r){i.finishedWork=null,i.finishedLanes=0;var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,DC(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Dm(),Ze=i,xe=o=dr(i.current,null),Pe=r,Je=0,Nn=null,ps=!1,Eo=Fs(i,r),Sm=!1,To=Qn=Am=fa=mr=ft=0,Mi=eu=null,Cm=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var f=31-dn(u),p=1<<f;r|=i[f],u&=~p}return gs=r,jc(),o}function i0(i,r){Ae=null,C.H=ki,r===Pl?(r=yy(),Je=3):r===py?(r=yy(),Je=4):Je=r===gv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Nn=r,xe===null&&(ft=1,rh(i,Hn(r,i.current)))}function s0(){var i=C.H;return C.H=ki,i===null?ki:i}function r0(){var i=C.A;return C.A=hC,i}function km(){ft=4,ps||(Pe&4194176)!==Pe&&$n.current!==null||(Eo=!0),(mr&134217727)===0&&(fa&134217727)===0||Ze===null||_s(Ze,Pe,Qn,!1)}function Mm(i,r,o){var u=lt;lt|=2;var f=s0(),p=r0();(Ze!==i||Pe!==r)&&(dh=null,bo(i,r)),r=!1;var v=ft;e:do try{if(Je!==0&&xe!==null){var w=xe,x=Nn;switch(Je){case 8:Dm(),v=6;break e;case 3:case 2:case 6:$n.current===null&&(r=!0);var U=Je;if(Je=0,Nn=null,wo(i,w,x,U),o&&Eo){v=0;break e}break;default:U=Je,Je=0,Nn=null,wo(i,w,x,U)}}mC(),v=ft;break}catch(W){i0(i,W)}while(!0);return r&&i.shellSuspendCounter++,us=la=null,lt=u,C.H=f,C.A=p,xe===null&&(Ze=null,Pe=0,jc()),v}function mC(){for(;xe!==null;)a0(xe)}function pC(i,r){var o=lt;lt|=2;var u=s0(),f=r0();Ze!==i||Pe!==r?(dh=null,fh=vn()+500,bo(i,r)):Eo=Fs(i,r);e:do try{if(Je!==0&&xe!==null){r=xe;var p=Nn;t:switch(Je){case 1:Je=0,Nn=null,wo(i,r,p,1);break;case 2:if(gy(p)){Je=0,Nn=null,o0(r);break}r=function(){Je===2&&Ze===i&&(Je=7),Pi(i)},p.then(r,r);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:gy(p)?(Je=0,Nn=null,o0(r)):(Je=0,Nn=null,wo(i,r,p,7));break;case 5:var v=null;switch(xe.tag){case 26:v=xe.memoizedState;case 5:case 27:var w=xe;if(!v||L0(v)){Je=0,Nn=null;var x=w.sibling;if(x!==null)xe=x;else{var U=w.return;U!==null?(xe=U,gh(U)):xe=null}break t}}Je=0,Nn=null,wo(i,r,p,5);break;case 6:Je=0,Nn=null,wo(i,r,p,6);break;case 8:Dm(),ft=6;break e;default:throw Error(s(462))}}gC();break}catch(W){i0(i,W)}while(!0);return us=la=null,C.H=u,C.A=f,lt=o,xe!==null?0:(Ze=null,Pe=0,jc(),ft)}function gC(){for(;xe!==null&&!ld();)a0(xe)}function a0(i){var r=xv(i.alternate,i,gs);i.memoizedProps=i.pendingProps,r===null?gh(i):xe=r}function o0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=bv(o,r,r.pendingProps,r.type,void 0,Pe);break;case 11:r=bv(o,r,r.pendingProps,r.type.render,r.ref,Pe);break;case 5:Vd(r);default:Jv(o,r),r=xe=Qv(r,gs),r=xv(o,r,gs)}i.memoizedProps=i.pendingProps,r===null?gh(i):xe=r}function wo(i,r,o,u){us=la=null,Vd(r),uo=null,Ul=0;var f=r.return;try{if(sC(i,f,r,o,Pe)){ft=1,rh(i,Hn(o,i.current)),xe=null;return}}catch(p){if(f!==null)throw xe=f,p;ft=1,rh(i,Hn(o,i.current)),xe=null;return}r.flags&32768?(Be||u===1?i=!0:Eo||(Pe&536870912)!==0?i=!1:(ps=i=!0,(u===2||u===3||u===6)&&(u=$n.current,u!==null&&u.tag===13&&(u.flags|=16384))),l0(r,i)):gh(r)}function gh(i){var r=i;do{if((r.flags&32768)!==0){l0(r,ps);return}i=r.return;var o=uC(r.alternate,r,gs);if(o!==null){xe=o;return}if(r=r.sibling,r!==null){xe=r;return}xe=r=i}while(r!==null);ft===0&&(ft=5)}function l0(i,r){do{var o=cC(i.alternate,i);if(o!==null){o.flags&=32767,xe=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){xe=i;return}xe=i=o}while(i!==null);ft=6,xe=null}function u0(i,r,o,u,f,p,v,w,x,U){var W=C.T,J=le.p;try{le.p=2,C.T=null,_C(i,r,o,u,J,f,p,v,w,x,U)}finally{C.T=W,le.p=J}}function _C(i,r,o,u,f,p,v,w){do So();while(da!==null);if((lt&6)!==0)throw Error(s(327));var x=i.finishedWork;if(u=i.finishedLanes,x===null)return null;if(i.finishedWork=null,i.finishedLanes=0,x===i.current)throw Error(s(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var U=x.lanes|x.childLanes;if(U|=wd,yc(i,u,U,p,v,w),i===Ze&&(xe=Ze=null,Pe=0),(x.subtreeFlags&10256)===0&&(x.flags&10256)===0||mh||(mh=!0,xm=U,Im=o,TC(Yi,function(){return So(),null})),o=(x.flags&15990)!==0,(x.subtreeFlags&15990)!==0||o?(o=C.T,C.T=null,p=le.p,le.p=2,v=lt,lt|=4,aC(i,x),Hv(x,i),BA($m,i.containerInfo),xh=!!Gm,$m=Gm=null,i.current=x,jv(i,x.alternate,x),cl(),lt=v,le.p=p,C.T=o):i.current=x,mh?(mh=!1,da=i,tu=u):c0(i,U),U=i.pendingLanes,U===0&&(pr=null),fl(x.stateNode),Pi(i),r!==null)for(f=i.onRecoverableError,x=0;x<r.length;x++)U=r[x],f(U.value,{componentStack:U.stack});return(tu&3)!==0&&So(),U=i.pendingLanes,(u&4194218)!==0&&(U&42)!==0?i===Nm?nu++:(nu=0,Nm=i):nu=0,iu(0),null}function c0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,jl(r)))}function So(){if(da!==null){var i=da,r=xm;xm=0;var o=vc(tu),u=C.T,f=le.p;try{if(le.p=32>o?32:o,C.T=null,da===null)var p=!1;else{o=Im,Im=null;var v=da,w=tu;if(da=null,tu=0,(lt&6)!==0)throw Error(s(331));var x=lt;if(lt|=4,Yv(v.current),Gv(v,v.current,w,o),lt=x,iu(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(zs,v)}catch{}p=!0}return p}finally{le.p=f,C.T=u,c0(i,r)}}return!1}function h0(i,r,o){r=Hn(o,r),r=Zd(i.stateNode,r,2),i=ur(i,r,2),i!==null&&(pt(i,2),Pi(i))}function Xe(i,r,o){if(i.tag===3)h0(i,i,o);else for(;r!==null;){if(r.tag===3){h0(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(pr===null||!pr.has(u))){i=Hn(o,i),o=mv(2),u=ur(r,o,2),u!==null&&(pv(o,u,r,i),pt(u,2),Pi(u));break}}r=r.return}}function Pm(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new fC;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Sm=!0,f.add(o),i=yC.bind(null,i,r,o),r.then(i,i))}function yC(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,Ze===i&&(Pe&o)===o&&(ft===4||ft===3&&(Pe&62914560)===Pe&&300>vn()-Rm?(lt&2)===0&&bo(i,0):Am|=o,To===Pe&&(To=0)),Pi(i)}function f0(i,r){r===0&&(r=Hs()),i=tr(i,r),i!==null&&(pt(i,r),Pi(i))}function vC(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),f0(i,o)}function EC(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,f=i.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),f0(i,o)}function TC(i,r){return Ur(i,r)}var _h=null,Ao=null,Lm=!1,yh=!1,Um=!1,ma=0;function Pi(i){i!==Ao&&i.next===null&&(Ao===null?_h=Ao=i:Ao=Ao.next=i),yh=!0,Lm||(Lm=!0,wC(bC))}function iu(i,r){if(!Um&&yh){Um=!0;do for(var o=!1,u=_h;u!==null;){if(i!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var v=u.suspendedLanes,w=u.pingedLanes;p=(1<<31-dn(42|i)+1)-1,p&=f&~(v&~w),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(o=!0,p0(u,p))}else p=Pe,p=Ln(u,u===Ze?p:0),(p&3)===0||Fs(u,p)||(o=!0,p0(u,p));u=u.next}while(o);Um=!1}}function bC(){yh=Lm=!1;var i=0;ma!==0&&(OC()&&(i=ma),ma=0);for(var r=vn(),o=null,u=_h;u!==null;){var f=u.next,p=d0(u,r);p===0?(u.next=null,o===null?_h=f:o.next=f,f===null&&(Ao=o)):(o=u,(i!==0||(p&3)!==0)&&(yh=!0)),u=f}iu(i)}function d0(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,f=i.expirationTimes,p=i.pendingLanes&-62914561;0<p;){var v=31-dn(p),w=1<<v,x=f[v];x===-1?((w&o)===0||(w&u)!==0)&&(f[v]=Fa(w,r)):x<=r&&(i.expiredLanes|=w),p&=~w}if(r=Ze,o=Pe,o=Ln(i,i===r?o:0),u=i.callbackNode,o===0||i===r&&Je===2||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Ba(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Fs(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Ba(u),vc(o)){case 2:case 8:o=Dt;break;case 32:o=Yi;break;case 268435456:o=hl;break;default:o=Yi}return u=m0.bind(null,i),o=Ur(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Ba(u),i.callbackPriority=2,i.callbackNode=null,2}function m0(i,r){var o=i.callbackNode;if(So()&&i.callbackNode!==o)return null;var u=Pe;return u=Ln(i,i===Ze?u:0),u===0?null:(t0(i,u,r),d0(i,vn()),i.callbackNode!=null&&i.callbackNode===o?m0.bind(null,i):null)}function p0(i,r){if(So())return null;t0(i,r,!0)}function wC(i){kC(function(){(lt&6)!==0?Ur(At,i):i()})}function Vm(){return ma===0&&(ma=ml()),ma}function g0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Si(""+i)}function _0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function SC(i,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=g0((f[Ct]||null).action),v=u.submitter;v&&(r=(r=v[Ct]||null)?g0(r.formAction):v.getAttribute("formAction"),r!==null&&(p=r,v=null));var w=new Wa("action","action",null,u,f);i.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ma!==0){var x=v?_0(f,v):new FormData(f);Kd(o,{pending:!0,data:x,method:f.method,action:p},null,x)}}else typeof p=="function"&&(w.preventDefault(),x=v?_0(f,v):new FormData(f),Kd(o,{pending:!0,data:x,method:f.method,action:p},p,x))},currentTarget:f}]})}}for(var jm=0;jm<uy.length;jm++){var zm=uy[jm],AC=zm.toLowerCase(),CC=zm[0].toUpperCase()+zm.slice(1);ri(AC,"on"+CC)}ri(sy,"onAnimationEnd"),ri(ry,"onAnimationIteration"),ri(ay,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(HA,"onTransitionRun"),ri(qA,"onTransitionStart"),ri(GA,"onTransitionCancel"),ri(oy,"onTransitionEnd"),En("onMouseEnter",["mouseout","mouseover"]),En("onMouseLeave",["mouseout","mouseover"]),En("onPointerEnter",["pointerout","pointerover"]),En("onPointerLeave",["pointerout","pointerover"]),An("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),An("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),An("onBeforeInput",["compositionend","keypress","textInput","paste"]),An("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),An("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var su="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(su));function y0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var w=u[v],x=w.instance,U=w.currentTarget;if(w=w.listener,x!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=U;try{p(f)}catch(W){sh(W)}f.currentTarget=null,p=x}else for(v=0;v<u.length;v++){if(w=u[v],x=w.instance,U=w.currentTarget,w=w.listener,x!==p&&f.isPropagationStopped())break e;p=w,f.currentTarget=U;try{p(f)}catch(W){sh(W)}f.currentTarget=null,p=x}}}}function Oe(i,r){var o=r[jr];o===void 0&&(o=r[jr]=new Set);var u=i+"__bubble";o.has(u)||(v0(r,i,2,!1),o.add(u))}function Bm(i,r,o){var u=0;r&&(u|=4),v0(o,i,u,r)}var vh="_reactListening"+Math.random().toString(36).slice(2);function Fm(i){if(!i[vh]){i[vh]=!0,gl.forEach(function(o){o!=="selectionchange"&&(RC.has(o)||Bm(o,!1,i),Bm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[vh]||(r[vh]=!0,Bm("selectionchange",!1,r))}}function v0(i,r,o,u){switch(F0(r)){case 2:var f=JC;break;case 8:f=e2;break;default:f=tp}o=f.bind(null,r,o,i),f=void 0,!zn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?i.addEventListener(r,o,{capture:!0,passive:f}):i.addEventListener(r,o,!0):f!==void 0?i.addEventListener(r,o,{passive:f}):i.addEventListener(r,o,!1)}function Hm(i,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var w=u.stateNode.containerInfo;if(w===f||w.nodeType===8&&w.parentNode===f)break;if(v===4)for(v=u.return;v!==null;){var x=v.tag;if((x===3||x===4)&&(x=v.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;v=v.return}for(;w!==null;){if(v=si(w),v===null)return;if(x=v.tag,x===5||x===6||x===26||x===27){u=p=v;continue e}w=w.parentNode}}u=u.return}Sc(function(){var U=p,W=Ya(o),J=[];e:{var q=ly.get(i);if(q!==void 0){var Y=Wa,fe=i;switch(i){case"keypress":if(Ci(o)===0)break e;case"keydown":case"keyup":Y=to;break;case"focusin":fe="focus",Y=Za;break;case"focusout":fe="blur",Y=Za;break;case"beforeblur":case"afterblur":Y=Za;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Dc;break;case sy:case ry:case ay:Y=Ja;break;case oy:Y=Mc;break;case"scroll":case"scrollend":Y=Ac;break;case"wheel":Y=no;break;case"copy":case"cut":case"paste":Y=eo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=xl;break;case"toggle":case"beforetoggle":Y=Lc}var Te=(r&4)!==0,dt=!Te&&(i==="scroll"||i==="scrollend"),V=Te?q!==null?q+"Capture":null:q;Te=[];for(var L=U,F;L!==null;){var X=L;if(F=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||F===null||V===null||(X=qr(L,V),X!=null&&Te.push(ru(L,X,F))),dt)break;L=L.return}0<Te.length&&(q=new Y(q,fe,null,o,W),J.push({event:q,listeners:Te}))}}if((r&7)===0){e:{if(q=i==="mouseover"||i==="pointerover",Y=i==="mouseout"||i==="pointerout",q&&o!==jn&&(fe=o.relatedTarget||o.fromElement)&&(si(fe)||fe[Wi]))break e;if((Y||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,Y?(fe=o.relatedTarget||o.toElement,Y=U,fe=fe?si(fe):null,fe!==null&&(dt=ge(fe),Te=fe.tag,fe!==dt||Te!==5&&Te!==27&&Te!==6)&&(fe=null)):(Y=null,fe=U),Y!==fe)){if(Te=Bn,X="onMouseLeave",V="onMouseEnter",L="mouse",(i==="pointerout"||i==="pointerover")&&(Te=xl,X="onPointerLeave",V="onPointerEnter",L="pointer"),dt=Y==null?q:Ys(Y),F=fe==null?q:Ys(fe),q=new Te(X,L+"leave",Y,o,W),q.target=dt,q.relatedTarget=F,X=null,si(W)===U&&(Te=new Te(V,L+"enter",fe,o,W),Te.target=F,Te.relatedTarget=dt,X=Te),dt=X,Y&&fe)t:{for(Te=Y,V=fe,L=0,F=Te;F;F=Co(F))L++;for(F=0,X=V;X;X=Co(X))F++;for(;0<L-F;)Te=Co(Te),L--;for(;0<F-L;)V=Co(V),F--;for(;L--;){if(Te===V||V!==null&&Te===V.alternate)break t;Te=Co(Te),V=Co(V)}Te=null}else Te=null;Y!==null&&E0(J,q,Y,Te,!1),fe!==null&&dt!==null&&E0(J,dt,fe,Te,!0)}}e:{if(q=U?Ys(U):window,Y=q.nodeName&&q.nodeName.toLowerCase(),Y==="select"||Y==="input"&&q.type==="file")var ce=K_;else if(xt(q))if(Y_)ce=jA;else{ce=UA;var Re=LA}else Y=q.nodeName,!Y||Y.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?U&&Tl(U.elementType)&&(ce=K_):ce=VA;if(ce&&(ce=ce(i,U))){is(J,ce,o,W);break e}Re&&Re(i,q,U),i==="focusout"&&U&&q.type==="number"&&U.memoizedProps.value!=null&&Ka(q,"number",q.value)}switch(Re=U?Ys(U):window,i){case"focusin":(xt(Re)||Re.contentEditable==="true")&&(io=Re,Ed=U,Ol=null);break;case"focusout":Ol=Ed=io=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,ny(J,o,W);break;case"selectionchange":if(FA)break;case"keydown":case"keyup":ny(J,o,W)}var me;if(Ii)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ke?$(i,o)&&(_e="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(y&&o.locale!=="ko"&&(ke||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ke&&(me=wl()):(Ai=W,er="value"in Ai?Ai.value:Ai.textContent,ke=!0)),Re=Eh(U,_e),0<Re.length&&(_e=new Cl(_e,i,null,o,W),J.push({event:_e,listeners:Re}),me?_e.data=me:(me=ie(o),me!==null&&(_e.data=me)))),(me=_?Rt(i,o):Me(i,o))&&(_e=Eh(U,"onBeforeInput"),0<_e.length&&(Re=new Cl("onBeforeInput","beforeinput",null,o,W),J.push({event:Re,listeners:_e}),Re.data=me)),SC(J,i,U,o,W)}y0(J,r)})}function ru(i,r,o){return{instance:i,listener:r,currentTarget:o}}function Eh(i,r){for(var o=r+"Capture",u=[];i!==null;){var f=i,p=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=qr(i,o),f!=null&&u.unshift(ru(i,f,p)),f=qr(i,r),f!=null&&u.push(ru(i,f,p))),i=i.return}return u}function Co(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function E0(i,r,o,u,f){for(var p=r._reactName,v=[];o!==null&&o!==u;){var w=o,x=w.alternate,U=w.stateNode;if(w=w.tag,x!==null&&x===u)break;w!==5&&w!==26&&w!==27||U===null||(x=U,f?(U=qr(o,p),U!=null&&v.unshift(ru(o,U,x))):f||(U=qr(o,p),U!=null&&v.push(ru(o,U,x)))),o=o.return}v.length!==0&&i.push({event:r,listeners:v})}var xC=/\r\n?/g,IC=/\u0000|\uFFFD/g;function T0(i){return(typeof i=="string"?i:""+i).replace(xC,`
`).replace(IC,"")}function b0(i,r){return r=T0(r),T0(i)===r}function Th(){}function We(i,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Vn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Vn(i,""+u);break;case"className":Xs(i,"class",u);break;case"tabIndex":Xs(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Xs(i,o,u);break;case"style":wc(i,u,p);break;case"data":if(r!=="object"){Xs(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Si(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&We(i,r,"name",f.name,f,null),We(i,r,"formEncType",f.formEncType,f,null),We(i,r,"formMethod",f.formMethod,f,null),We(i,r,"formTarget",f.formTarget,f,null)):(We(i,r,"encType",f.encType,f,null),We(i,r,"method",f.method,f,null),We(i,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=Si(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Th);break;case"onScroll":u!=null&&Oe("scroll",i);break;case"onScrollEnd":u!=null&&Oe("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=Si(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Oe("beforetoggle",i),Oe("toggle",i),Qs(i,"popover",u);break;case"xlinkActuate":Un(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Un(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Un(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Un(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Un(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Un(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Un(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Un(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Un(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Qs(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=dd.get(o)||o,Qs(i,o,u))}}function qm(i,r,o,u,f,p){switch(o){case"style":wc(i,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Vn(i,u):(typeof u=="number"||typeof u=="bigint")&&Vn(i,""+u);break;case"onScroll":u!=null&&Oe("scroll",i);break;case"onScrollEnd":u!=null&&Oe("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Th);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ga.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=i[Ct]||null,p=p!=null?p[o]:null,typeof p=="function"&&i.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,f);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Qs(i,o,u)}}}function Yt(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",i),Oe("load",i);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var v=o[p];if(v!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:We(i,r,p,v,o,null)}}f&&We(i,r,"srcSet",o.srcSet,o,null),u&&We(i,r,"src",o.src,o,null);return;case"input":Oe("invalid",i);var w=p=v=f=null,x=null,U=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":f=W;break;case"type":v=W;break;case"checked":x=W;break;case"defaultChecked":U=W;break;case"value":p=W;break;case"defaultValue":w=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,r));break;default:We(i,r,u,W,o,null)}}Fr(i,p,w,x,U,v,f,!1),Br(i);return;case"select":Oe("invalid",i),u=v=p=null;for(f in o)if(o.hasOwnProperty(f)&&(w=o[f],w!=null))switch(f){case"value":p=w;break;case"defaultValue":v=w;break;case"multiple":u=w;default:We(i,r,f,w,o,null)}r=p,o=v,i.multiple=!!u,r!=null?ze(i,!!u,r,!1):o!=null&&ze(i,!!u,o,!0);return;case"textarea":Oe("invalid",i),p=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(w=o[v],w!=null))switch(v){case"value":u=w;break;case"defaultValue":f=w;break;case"children":p=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:We(i,r,v,w,o,null)}Js(i,u,f,p),Br(i);return;case"option":for(x in o)if(o.hasOwnProperty(x)&&(u=o[x],u!=null))switch(x){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:We(i,r,x,u,o,null)}return;case"dialog":Oe("cancel",i),Oe("close",i);break;case"iframe":case"object":Oe("load",i);break;case"video":case"audio":for(u=0;u<su.length;u++)Oe(su[u],i);break;case"image":Oe("error",i),Oe("load",i);break;case"details":Oe("toggle",i);break;case"embed":case"source":case"link":Oe("error",i),Oe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in o)if(o.hasOwnProperty(U)&&(u=o[U],u!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:We(i,r,U,u,o,null)}return;default:if(Tl(r)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&qm(i,r,W,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&We(i,r,w,u,o,null))}function NC(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,w=null,x=null,U=null,W=null;for(Y in o){var J=o[Y];if(o.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":x=J;default:u.hasOwnProperty(Y)||We(i,r,Y,null,u,J)}}for(var q in u){var Y=u[q];if(J=o[q],u.hasOwnProperty(q)&&(Y!=null||J!=null))switch(q){case"type":p=Y;break;case"name":f=Y;break;case"checked":U=Y;break;case"defaultChecked":W=Y;break;case"value":v=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,r));break;default:Y!==J&&We(i,r,q,Y,u,J)}}Zs(i,v,w,x,U,W,p,f);return;case"select":Y=v=w=q=null;for(p in o)if(x=o[p],o.hasOwnProperty(p)&&x!=null)switch(p){case"value":break;case"multiple":Y=x;default:u.hasOwnProperty(p)||We(i,r,p,null,u,x)}for(f in u)if(p=u[f],x=o[f],u.hasOwnProperty(f)&&(p!=null||x!=null))switch(f){case"value":q=p;break;case"defaultValue":w=p;break;case"multiple":v=p;default:p!==x&&We(i,r,f,p,u,x)}r=w,o=v,u=Y,q!=null?ze(i,!!o,q,!1):!!u!=!!o&&(r!=null?ze(i,!!o,r,!0):ze(i,!!o,o?[]:"",!1));return;case"textarea":Y=q=null;for(w in o)if(f=o[w],o.hasOwnProperty(w)&&f!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:We(i,r,w,null,u,f)}for(v in u)if(f=u[v],p=o[v],u.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":q=f;break;case"defaultValue":Y=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&We(i,r,v,f,u,p)}Hr(i,q,Y);return;case"option":for(var fe in o)if(q=o[fe],o.hasOwnProperty(fe)&&q!=null&&!u.hasOwnProperty(fe))switch(fe){case"selected":i.selected=!1;break;default:We(i,r,fe,null,u,q)}for(x in u)if(q=u[x],Y=o[x],u.hasOwnProperty(x)&&q!==Y&&(q!=null||Y!=null))switch(x){case"selected":i.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:We(i,r,x,q,u,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in o)q=o[Te],o.hasOwnProperty(Te)&&q!=null&&!u.hasOwnProperty(Te)&&We(i,r,Te,null,u,q);for(U in u)if(q=u[U],Y=o[U],u.hasOwnProperty(U)&&q!==Y&&(q!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:We(i,r,U,q,u,Y)}return;default:if(Tl(r)){for(var dt in o)q=o[dt],o.hasOwnProperty(dt)&&q!==void 0&&!u.hasOwnProperty(dt)&&qm(i,r,dt,void 0,u,q);for(W in u)q=u[W],Y=o[W],!u.hasOwnProperty(W)||q===Y||q===void 0&&Y===void 0||qm(i,r,W,q,u,Y);return}}for(var V in o)q=o[V],o.hasOwnProperty(V)&&q!=null&&!u.hasOwnProperty(V)&&We(i,r,V,null,u,q);for(J in u)q=u[J],Y=o[J],!u.hasOwnProperty(J)||q===Y||q==null&&Y==null||We(i,r,J,q,u,Y)}var Gm=null,$m=null;function bh(i){return i.nodeType===9?i:i.ownerDocument}function w0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Km(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ym=null;function OC(){var i=window.event;return i&&i.type==="popstate"?i===Ym?!1:(Ym=i,!0):(Ym=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,DC=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,kC=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(i){return C0.resolve(null).then(i).catch(MC)}:A0;function MC(i){setTimeout(function(){throw i})}function Wm(i,r){var o=r,u=0;do{var f=o.nextSibling;if(i.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){i.removeChild(f),du(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);du(r)}function Qm(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Qm(o),zr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function PC(i,r,o,u){for(;i.nodeType===1;){var f=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Ks])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(p=i.getAttribute("rel"),p==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(p!==f.rel||i.getAttribute("href")!==(f.href==null?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(p=i.getAttribute("src"),(p!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===p)return i}else return i;if(i=li(i.nextSibling),i===null)break}return null}function LC(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=li(i.nextSibling),i===null))return null;return i}function li(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}function R0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function x0(i,r,o){switch(r=bh(o),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}var Xn=new Map,I0=new Set;function wh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ys=le.d;le.d={f:UC,r:VC,D:jC,C:zC,L:BC,m:FC,X:qC,S:HC,M:GC};function UC(){var i=ys.f(),r=ph();return i||r}function VC(i){var r=Qi(i);r!==null&&r.tag===5&&r.type==="form"?nv(r):ys.r(i)}var Ro=typeof document>"u"?null:document;function N0(i,r,o){var u=Ro;if(u&&typeof r=="string"&&r){var f=ct(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),I0.has(f)||(I0.add(f),i={rel:i,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Yt(r,"link",i),at(r),u.head.appendChild(r)))}}function jC(i){ys.D(i),N0("dns-prefetch",i,null)}function zC(i,r){ys.C(i,r),N0("preconnect",i,r)}function BC(i,r,o){ys.L(i,r,o);var u=Ro;if(u&&i&&r){var f='link[rel="preload"][as="'+ct(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+ct(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+ct(o.imageSizes)+'"]')):f+='[href="'+ct(i)+'"]';var p=f;switch(r){case"style":p=xo(i);break;case"script":p=Io(i)}Xn.has(p)||(i=N({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Xn.set(p,i),u.querySelector(f)!==null||r==="style"&&u.querySelector(au(p))||r==="script"&&u.querySelector(ou(p))||(r=u.createElement("link"),Yt(r,"link",i),at(r),u.head.appendChild(r)))}}function FC(i,r){ys.m(i,r);var o=Ro;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+ct(u)+'"][href="'+ct(i)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Io(i)}if(!Xn.has(p)&&(i=N({rel:"modulepreload",href:i},r),Xn.set(p,i),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ou(p)))return}u=o.createElement("link"),Yt(u,"link",i),at(u),o.head.appendChild(u)}}}function HC(i,r,o){ys.S(i,r,o);var u=Ro;if(u&&i){var f=Ws(u).hoistableStyles,p=xo(i);r=r||"default";var v=f.get(p);if(!v){var w={loading:0,preload:null};if(v=u.querySelector(au(p)))w.loading=5;else{i=N({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Xn.get(p))&&Xm(i,o);var x=v=u.createElement("link");at(x),Yt(x,"link",i),x._p=new Promise(function(U,W){x.onload=U,x.onerror=W}),x.addEventListener("load",function(){w.loading|=1}),x.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Sh(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:w},f.set(p,v)}}}function qC(i,r){ys.X(i,r);var o=Ro;if(o&&i){var u=Ws(o).hoistableScripts,f=Io(i),p=u.get(f);p||(p=o.querySelector(ou(f)),p||(i=N({src:i,async:!0},r),(r=Xn.get(f))&&Zm(i,r),p=o.createElement("script"),at(p),Yt(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function GC(i,r){ys.M(i,r);var o=Ro;if(o&&i){var u=Ws(o).hoistableScripts,f=Io(i),p=u.get(f);p||(p=o.querySelector(ou(f)),p||(i=N({src:i,async:!0,type:"module"},r),(r=Xn.get(f))&&Zm(i,r),p=o.createElement("script"),at(p),Yt(p,"link",i),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function O0(i,r,o,u){var f=(f=Pn.current)?wh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=xo(o.href),o=Ws(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=xo(o.href);var p=Ws(f).hoistableStyles,v=p.get(i);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(i,v),(p=f.querySelector(au(i)))&&!p._p&&(v.instance=p,v.state.loading=5),Xn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Xn.set(i,o),p||$C(f,i,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Io(o),o=Ws(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function xo(i){return'href="'+ct(i)+'"'}function au(i){return'link[rel="stylesheet"]['+i+"]"}function D0(i){return N({},i,{"data-precedence":i.precedence,precedence:null})}function $C(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Yt(r,"link",o),at(r),i.head.appendChild(r))}function Io(i){return'[src="'+ct(i)+'"]'}function ou(i){return"script[async]"+i}function k0(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+ct(o.href)+'"]');if(u)return r.instance=u,at(u),u;var f=N({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),at(u),Yt(u,"style",f),Sh(u,o.precedence,i),r.instance=u;case"stylesheet":f=xo(o.href);var p=i.querySelector(au(f));if(p)return r.state.loading|=4,r.instance=p,at(p),p;u=D0(o),(f=Xn.get(f))&&Xm(u,f),p=(i.ownerDocument||i).createElement("link"),at(p);var v=p;return v._p=new Promise(function(w,x){v.onload=w,v.onerror=x}),Yt(p,"link",u),r.state.loading|=4,Sh(p,o.precedence,i),r.instance=p;case"script":return p=Io(o.src),(f=i.querySelector(ou(p)))?(r.instance=f,at(f),f):(u=o,(f=Xn.get(p))&&(u=N({},o),Zm(u,f)),i=i.ownerDocument||i,f=i.createElement("script"),at(f),Yt(f,"link",u),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Sh(u,o.precedence,i));return r.instance}function Sh(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,v=0;v<u.length;v++){var w=u[v];if(w.dataset.precedence===r)p=w;else if(p!==f)break}p?p.parentNode.insertBefore(i,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function Xm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Zm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var Ah=null;function M0(i,r,o){if(Ah===null){var u=new Map,f=Ah=new Map;f.set(o,u)}else f=Ah,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),f=0;f<o.length;f++){var p=o[f];if(!(p[Ks]||p[kt]||i==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(r)||"";v=i+v;var w=u.get(v);w?w.push(p):u.set(v,[p])}}return u}function P0(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function KC(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function L0(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var lu=null;function YC(){}function WC(i,r,o){if(lu===null)throw Error(s(475));var u=lu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=xo(o.href),p=i.querySelector(au(f));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=Ch.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=p,at(p);return}p=i.ownerDocument||i,o=D0(o),(f=Xn.get(f))&&Xm(o,f),p=p.createElement("link"),at(p);var v=p;v._p=new Promise(function(w,x){v.onload=w,v.onerror=x}),Yt(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=Ch.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function QC(){if(lu===null)throw Error(s(475));var i=lu;return i.stylesheets&&i.count===0&&Jm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Jm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function Ch(){if(this.count--,this.count===0){if(this.stylesheets)Jm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Rh=null;function Jm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Rh=new Map,r.forEach(XC,i),Rh=null,Ch.call(i))}function XC(i,r){if(!(r.state.loading&4)){var o=Rh.get(i);if(o)var u=o.get(null);else{o=new Map,Rh.set(i,o);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),p=o.get(v)||u,p===u&&o.set(null,f),o.set(v,f),this.count++,u=Ch.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var uu={$$typeof:I,Provider:null,Consumer:null,_currentValue:Se,_currentValue2:Se,_threadCount:0};function ZC(i,r,o,u,f,p,v,w){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ha(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.hiddenUpdates=Ha(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function U0(i,r,o,u,f,p,v,w,x,U,W,J){return i=new ZC(i,r,o,v,w,x,U,J),r=1,p===!0&&(r|=24),p=Wn(3,null,null,r),i.current=p,p.stateNode=i,r=Od(),r.refCount++,i.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},hm(p),i}function V0(i){return i?(i=ao,i):ao}function j0(i,r,o,u,f,p){f=V0(f),u.context===null?u.context=f:u.pendingContext=f,u=lr(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=ur(i,u,r),o!==null&&(_n(o,i,r),$l(o,i,r))}function z0(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function ep(i,r){z0(i,r),(i=i.alternate)&&z0(i,r)}function B0(i){if(i.tag===13){var r=tr(i,67108864);r!==null&&_n(r,i,67108864),ep(i,67108864)}}var xh=!0;function JC(i,r,o,u){var f=C.T;C.T=null;var p=le.p;try{le.p=2,tp(i,r,o,u)}finally{le.p=p,C.T=f}}function e2(i,r,o,u){var f=C.T;C.T=null;var p=le.p;try{le.p=8,tp(i,r,o,u)}finally{le.p=p,C.T=f}}function tp(i,r,o,u){if(xh){var f=np(u);if(f===null)Hm(i,r,u,Ih,o),H0(i,u);else if(n2(f,i,r,o,u))u.stopPropagation();else if(H0(i,u),r&4&&-1<t2.indexOf(i)){for(;f!==null;){var p=Qi(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=ii(p.pendingLanes);if(v!==0){var w=p;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var x=1<<31-dn(v);w.entanglements[1]|=x,v&=~x}Pi(p),(lt&6)===0&&(fh=vn()+500,iu(0))}}break;case 13:w=tr(p,2),w!==null&&_n(w,p,2),ph(),ep(p,2)}if(p=np(u),p===null&&Hm(i,r,u,Ih,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Hm(i,r,u,null,o)}}function np(i){return i=Ya(i),ip(i)}var Ih=null;function ip(i){if(Ih=null,i=si(i),i!==null){var r=ge(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=He(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return Ih=i,null}function F0(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mc()){case At:return 2;case Dt:return 8;case Yi:case pc:return 32;case hl:return 268435456;default:return 32}default:return 32}}var sp=!1,gr=null,_r=null,yr=null,cu=new Map,hu=new Map,vr=[],t2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(i,r){switch(i){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":cu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hu.delete(r.pointerId)}}function fu(i,r,o,u,f,p){return i===null||i.nativeEvent!==p?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=Qi(r),r!==null&&B0(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function n2(i,r,o,u,f){switch(r){case"focusin":return gr=fu(gr,i,r,o,u,f),!0;case"dragenter":return _r=fu(_r,i,r,o,u,f),!0;case"mouseover":return yr=fu(yr,i,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return cu.set(p,fu(cu.get(p)||null,i,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,hu.set(p,fu(hu.get(p)||null,i,r,o,u,f)),!0}return!1}function q0(i){var r=si(i.target);if(r!==null){var o=ge(r);if(o!==null){if(r=o.tag,r===13){if(r=He(o),r!==null){i.blockedOn=r,$s(i.priority,function(){if(o.tag===13){var u=On(),f=tr(o,u);f!==null&&_n(f,o,u),ep(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Nh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=np(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);jn=u,o.target.dispatchEvent(u),jn=null}else return r=Qi(o),r!==null&&B0(r),i.blockedOn=o,!1;r.shift()}return!0}function G0(i,r,o){Nh(i)&&o.delete(r)}function i2(){sp=!1,gr!==null&&Nh(gr)&&(gr=null),_r!==null&&Nh(_r)&&(_r=null),yr!==null&&Nh(yr)&&(yr=null),cu.forEach(G0),hu.forEach(G0)}function Oh(i,r){i.blockedOn===r&&(i.blockedOn=null,sp||(sp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,i2)))}var Dh=null;function $0(i){Dh!==i&&(Dh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Dh===i&&(Dh=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],f=i[r+2];if(typeof u!="function"){if(ip(u||o)===null)continue;break}var p=Qi(o);p!==null&&(i.splice(r,3),r-=3,Kd(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function du(i){function r(x){return Oh(x,i)}gr!==null&&Oh(gr,i),_r!==null&&Oh(_r,i),yr!==null&&Oh(yr,i),cu.forEach(r),hu.forEach(r);for(var o=0;o<vr.length;o++){var u=vr[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<vr.length&&(o=vr[0],o.blockedOn===null);)q0(o),o.blockedOn===null&&vr.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],v=f[Ct]||null;if(typeof p=="function")v||$0(o);else if(v){var w=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[Ct]||null)w=v.formAction;else if(ip(f)!==null)continue}else w=v.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),$0(o)}}}function rp(i){this._internalRoot=i}kh.prototype.render=rp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=On();j0(o,u,i,r,null,null)},kh.prototype.unmount=rp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;i.tag===0&&So(),j0(i.current,2,null,i,null,null),ph(),r[Wi]=null}};function kh(i){this._internalRoot=i}kh.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ec();i={blockedOn:null,target:i,priority:r};for(var o=0;o<vr.length&&r!==0&&r<vr[o].priority;o++);vr.splice(o,0,i),o===0&&q0(i)}};var K0=e.version;if(K0!=="19.0.0")throw Error(s(527,K0,"19.0.0"));le.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=te(r),i=i!==null?de(i):null,i=i===null?null:i.stateNode,i};var s2={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:si,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mh.isDisabled&&Mh.supportsFiber)try{zs=Mh.inject(s2),en=Mh}catch{}}return pu.createRoot=function(i,r){if(!a(i))throw Error(s(299));var o=!1,u="",f=cv,p=hv,v=fv,w=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks)),r=U0(i,1,!1,null,null,o,u,f,p,v,w,null),i[Wi]=r.current,Fm(i.nodeType===8?i.parentNode:i),new rp(r)},pu.hydrateRoot=function(i,r,o){if(!a(i))throw Error(s(299));var u=!1,f="",p=cv,v=hv,w=fv,x=null,U=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(x=o.unstable_transitionCallbacks),o.formState!==void 0&&(U=o.formState)),r=U0(i,1,!0,r,o??null,u,f,p,v,w,x,U),r.context=V0(null),o=r.current,u=On(),f=lr(u),f.callback=null,ur(o,f,u),r.current.lanes=u,pt(r,u),Pi(r),i[Wi]=r.current,Fm(i),new kh(r)},pu.version="19.0.0",pu}var iE;function g2(){if(iE)return lp.exports;iE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),lp.exports=p2(),lp.exports}var _2=g2(),gu={},sE;function y2(){if(sE)return gu;sE=1,Object.defineProperty(gu,"__esModule",{value:!0}),gu.parse=c,gu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function c(S,I){const D=new l,G=S.length;if(G<2)return D;const B=(I==null?void 0:I.decode)||T;let K=0;do{const ee=S.indexOf("=",K);if(ee===-1)break;const Q=S.indexOf(";",K),ae=Q===-1?G:Q;if(ee>ae){K=S.lastIndexOf(";",ee-1)+1;continue}const ue=d(S,K,ee),ye=m(S,ee,ue),M=S.slice(ue,ye);if(D[M]===void 0){let R=d(S,ee+1,ae),C=m(S,ae,R);const N=B(S.slice(R,C));D[M]=N}K=ae+1}while(K<G);return D}function d(S,I,D){do{const G=S.charCodeAt(I);if(G!==32&&G!==9)return I}while(++I<D);return D}function m(S,I,D){for(;I>D;){const G=S.charCodeAt(--I);if(G!==32&&G!==9)return I+1}return D}function g(S,I,D){const G=(D==null?void 0:D.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const B=G(I);if(!e.test(B))throw new TypeError(`argument val is invalid: ${I}`);let K=S+"="+B;if(!D)return K;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);K+="; Max-Age="+D.maxAge}if(D.domain){if(!t.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);K+="; Domain="+D.domain}if(D.path){if(!s.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);K+="; Path="+D.path}if(D.expires){if(!b(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);K+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(K+="; HttpOnly"),D.secure&&(K+="; Secure"),D.partitioned&&(K+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":K+="; Priority=Low";break;case"medium":K+="; Priority=Medium";break;case"high":K+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":K+="; SameSite=Strict";break;case"lax":K+="; SameSite=Lax";break;case"none":K+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return K}function T(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function b(S){return a.call(S)==="[object Date]"}return gu}y2();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rE="popstate";function v2(n={}){function e(s,a){let{pathname:l,search:c,hash:d}=s.location;return Pp("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:Vu(a)}return T2(e,t,null,n)}function rt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function _i(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function E2(){return Math.random().toString(36).substring(2,10)}function aE(n,e){return{usr:n.state,key:n.key,idx:e}}function Pp(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Xo(e):e,state:t,key:e&&e.key||s||E2()}}function Vu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Xo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function T2(n,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,c=a.history,d="POP",m=null,g=T();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function T(){return(c.state||{idx:null}).idx}function b(){d="POP";let B=T(),K=B==null?null:B-g;g=B,m&&m({action:d,location:G.location,delta:K})}function S(B,K){d="PUSH";let ee=Pp(G.location,B,K);g=T()+1;let Q=aE(ee,g),ae=G.createHref(ee);try{c.pushState(Q,"",ae)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;a.location.assign(ae)}l&&m&&m({action:d,location:G.location,delta:1})}function I(B,K){d="REPLACE";let ee=Pp(G.location,B,K);g=T();let Q=aE(ee,g),ae=G.createHref(ee);c.replaceState(Q,"",ae),l&&m&&m({action:d,location:G.location,delta:0})}function D(B){let K=a.location.origin!=="null"?a.location.origin:a.location.href,ee=typeof B=="string"?B:Vu(B);return ee=ee.replace(/ $/,"%20"),rt(K,`No window.location.(origin|href) available to create URL for href: ${ee}`),new URL(ee,K)}let G={get action(){return d},get location(){return n(a,c)},listen(B){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(rE,b),m=B,()=>{a.removeEventListener(rE,b),m=null}},createHref(B){return e(a,B)},createURL:D,encodeLocation(B){let K=D(B);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:S,replace:I,go(B){return c.go(B)}};return G}function w1(n,e,t="/"){return b2(n,e,t,!1)}function b2(n,e,t,s){let a=typeof e=="string"?Xo(e):e,l=Is(a.pathname||"/",t);if(l==null)return null;let c=S1(n);w2(c);let d=null;for(let m=0;d==null&&m<c.length;++m){let g=M2(l);d=D2(c[m],g,s)}return d}function S1(n,e=[],t=[],s=""){let a=(l,c,d)=>{let m={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};m.relativePath.startsWith("/")&&(rt(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=Ss([s,m.relativePath]),T=t.concat(m);l.children&&l.children.length>0&&(rt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),S1(l.children,e,T,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:N2(g,l.index),routesMeta:T})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let m of A1(l.path))a(l,c,m)}),e}function A1(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let c=A1(s.join("/")),d=[];return d.push(...c.map(m=>m===""?l:[l,m].join("/"))),a&&d.push(...c),d.map(m=>n.startsWith("/")&&m===""?"/":m)}function w2(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:O2(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var S2=/^:[\w-]+$/,A2=3,C2=2,R2=1,x2=10,I2=-2,oE=n=>n==="*";function N2(n,e){let t=n.split("/"),s=t.length;return t.some(oE)&&(s+=I2),e&&(s+=C2),t.filter(a=>!oE(a)).reduce((a,l)=>a+(S2.test(l)?A2:l===""?R2:x2),s)}function O2(n,e){return n.length===e.length&&n.slice(0,-1).every((s,a)=>s===e[a])?n[n.length-1]-e[e.length-1]:0}function D2(n,e,t=!1){let{routesMeta:s}=n,a={},l="/",c=[];for(let d=0;d<s.length;++d){let m=s[d],g=d===s.length-1,T=l==="/"?e:e.slice(l.length)||"/",b=sf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},T),S=m.route;if(!b&&g&&t&&!s[s.length-1].route.index&&(b=sf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},T)),!b)return null;Object.assign(a,b.params),c.push({params:a,pathname:Ss([l,b.pathname]),pathnameBase:V2(Ss([l,b.pathnameBase])),route:S}),b.pathnameBase!=="/"&&(l=Ss([l,b.pathnameBase]))}return c}function sf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=k2(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((g,{paramName:T,isOptional:b},S)=>{if(T==="*"){let D=d[S]||"";c=l.slice(0,l.length-D.length).replace(/(.)\/+$/,"$1")}const I=d[S];return b&&!I?g[T]=void 0:g[T]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function k2(n,e=!1,t=!0){_i(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function M2(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _i(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Is(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function P2(n,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof n=="string"?Xo(n):n;return{pathname:t?t.startsWith("/")?t:L2(t,e):e,search:j2(s),hash:z2(a)}}function L2(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function fp(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U2(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Sg(n){let e=U2(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Ag(n,e,t,s=!1){let a;typeof n=="string"?a=Xo(n):(a={...n},rt(!a.pathname||!a.pathname.includes("?"),fp("?","pathname","search",a)),rt(!a.pathname||!a.pathname.includes("#"),fp("#","pathname","hash",a)),rt(!a.search||!a.search.includes("#"),fp("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let b=e.length-1;if(!s&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),b-=1;a.pathname=S.join("/")}d=b>=0?e[b]:"/"}let m=P2(a,d),g=c&&c!=="/"&&c.endsWith("/"),T=(l||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||T)&&(m.pathname+="/"),m}var Ss=n=>n.join("/").replace(/\/\/+/g,"/"),V2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),j2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,z2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function B2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var C1=["POST","PUT","PATCH","DELETE"];new Set(C1);var F2=["GET",...C1];new Set(F2);var Zo=H.createContext(null);Zo.displayName="DataRouter";var jf=H.createContext(null);jf.displayName="DataRouterState";var R1=H.createContext({isTransitioning:!1});R1.displayName="ViewTransition";var H2=H.createContext(new Map);H2.displayName="Fetchers";var q2=H.createContext(null);q2.displayName="Await";var vi=H.createContext(null);vi.displayName="Navigation";var Qu=H.createContext(null);Qu.displayName="Location";var Hi=H.createContext({outlet:null,matches:[],isDataRoute:!1});Hi.displayName="Route";var Cg=H.createContext(null);Cg.displayName="RouteError";function G2(n,{relative:e}={}){rt(Jo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(vi),{hash:a,pathname:l,search:c}=Xu(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Ss([t,l])),s.createHref({pathname:d,search:c,hash:a})}function Jo(){return H.useContext(Qu)!=null}function Mr(){return rt(Jo(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(Qu).location}var x1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function I1(n){H.useContext(vi).static||H.useLayoutEffect(n)}function zf(){let{isDataRoute:n}=H.useContext(Hi);return n?sR():$2()}function $2(){rt(Jo(),"useNavigate() may be used only in the context of a <Router> component.");let n=H.useContext(Zo),{basename:e,navigator:t}=H.useContext(vi),{matches:s}=H.useContext(Hi),{pathname:a}=Mr(),l=JSON.stringify(Sg(s)),c=H.useRef(!1);return I1(()=>{c.current=!0}),H.useCallback((m,g={})=>{if(_i(c.current,x1),!c.current)return;if(typeof m=="number"){t.go(m);return}let T=Ag(m,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Ss([e,T.pathname])),(g.replace?t.replace:t.push)(T,g.state,g)},[e,t,l,a,n])}H.createContext(null);function Xu(n,{relative:e}={}){let{matches:t}=H.useContext(Hi),{pathname:s}=Mr(),a=JSON.stringify(Sg(t));return H.useMemo(()=>Ag(n,JSON.parse(a),s,e==="path"),[n,a,s,e])}function K2(n,e){return N1(n,e)}function N1(n,e,t,s){var ee;rt(Jo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=H.useContext(vi),{matches:c}=H.useContext(Hi),d=c[c.length-1],m=d?d.params:{},g=d?d.pathname:"/",T=d?d.pathnameBase:"/",b=d&&d.route;{let Q=b&&b.path||"";O1(g,!b||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let S=Mr(),I;if(e){let Q=typeof e=="string"?Xo(e):e;rt(T==="/"||((ee=Q.pathname)==null?void 0:ee.startsWith(T)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),I=Q}else I=S;let D=I.pathname||"/",G=D;if(T!=="/"){let Q=T.replace(/^\//,"").split("/");G="/"+D.replace(/^\//,"").split("/").slice(Q.length).join("/")}let B=!l&&t&&t.matches&&t.matches.length>0?t.matches:w1(n,{pathname:G});_i(b||B!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),_i(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let K=Z2(B&&B.map(Q=>Object.assign({},Q,{params:Object.assign({},m,Q.params),pathname:Ss([T,a.encodeLocation?a.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?T:Ss([T,a.encodeLocation?a.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,s);return e&&K?H.createElement(Qu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},K):K}function Y2(){let n=iR(),e=B2(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:l},"ErrorBoundary")," or"," ",H.createElement("code",{style:l},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:a},t):null,c)}var W2=H.createElement(Y2,null),Q2=class extends H.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?H.createElement(Hi.Provider,{value:this.props.routeContext},H.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function X2({routeContext:n,match:e,children:t}){let s=H.useContext(Zo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Hi.Provider,{value:n},t)}function Z2(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);rt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(t)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:T,errors:b}=t,S=g.route.loader&&!T.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||S){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,g,T)=>{let b,S=!1,I=null,D=null;t&&(b=l&&g.route.id?l[g.route.id]:void 0,I=g.route.errorElement||W2,c&&(d<0&&T===0?(O1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,D=null):d===T&&(S=!0,D=g.route.hydrateFallbackElement||null)));let G=e.concat(a.slice(0,T+1)),B=()=>{let K;return b?K=I:S?K=D:g.route.Component?K=H.createElement(g.route.Component,null):g.route.element?K=g.route.element:K=m,H.createElement(X2,{match:g,routeContext:{outlet:m,matches:G,isDataRoute:t!=null},children:K})};return t&&(g.route.ErrorBoundary||g.route.errorElement||T===0)?H.createElement(Q2,{location:t.location,revalidation:t.revalidation,component:I,error:b,children:B(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):B()},null)}function Rg(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J2(n){let e=H.useContext(Zo);return rt(e,Rg(n)),e}function eR(n){let e=H.useContext(jf);return rt(e,Rg(n)),e}function tR(n){let e=H.useContext(Hi);return rt(e,Rg(n)),e}function xg(n){let e=tR(n),t=e.matches[e.matches.length-1];return rt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function nR(){return xg("useRouteId")}function iR(){var s;let n=H.useContext(Cg),e=eR("useRouteError"),t=xg("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function sR(){let{router:n}=J2("useNavigate"),e=xg("useNavigate"),t=H.useRef(!1);return I1(()=>{t.current=!0}),H.useCallback(async(a,l={})=>{_i(t.current,x1),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var lE={};function O1(n,e,t){!e&&!lE[n]&&(lE[n]=!0,_i(!1,t))}H.memo(rR);function rR({routes:n,future:e,state:t}){return N1(n,void 0,t,e)}function aR({to:n,replace:e,state:t,relative:s}){rt(Jo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=H.useContext(vi);_i(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=H.useContext(Hi),{pathname:c}=Mr(),d=zf(),m=Ag(n,Sg(l),c,s==="path"),g=JSON.stringify(m);return H.useEffect(()=>{d(JSON.parse(g),{replace:e,state:t,relative:s})},[d,g,s,e,t]),null}function wu(n){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oR({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){rt(!Jo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=H.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=Xo(t));let{pathname:m="/",search:g="",hash:T="",state:b=null,key:S="default"}=t,I=H.useMemo(()=>{let D=Is(m,c);return D==null?null:{location:{pathname:D,search:g,hash:T,state:b,key:S},navigationType:s}},[c,m,g,T,b,S,s]);return _i(I!=null,`<Router basename="${c}"> is not able to match the URL "${m}${g}${T}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:H.createElement(vi.Provider,{value:d},H.createElement(Qu.Provider,{children:e,value:I}))}function lR({children:n,location:e}){return K2(Lp(n),e)}function Lp(n,e=[]){let t=[];return H.Children.forEach(n,(s,a)=>{if(!H.isValidElement(s))return;let l=[...e,a];if(s.type===H.Fragment){t.push.apply(t,Lp(s.props.children,l));return}rt(s.type===wu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=Lp(s.props.children,l)),t.push(c)}),t}var Gh="get",$h="application/x-www-form-urlencoded";function Bf(n){return n!=null&&typeof n.tagName=="string"}function uR(n){return Bf(n)&&n.tagName.toLowerCase()==="button"}function cR(n){return Bf(n)&&n.tagName.toLowerCase()==="form"}function hR(n){return Bf(n)&&n.tagName.toLowerCase()==="input"}function fR(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function dR(n,e){return n.button===0&&(!e||e==="_self")&&!fR(n)}var Ph=null;function mR(){if(Ph===null)try{new FormData(document.createElement("form"),0),Ph=!1}catch{Ph=!0}return Ph}var pR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dp(n){return n!=null&&!pR.has(n)?(_i(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$h}"`),null):n}function gR(n,e){let t,s,a,l,c;if(cR(n)){let d=n.getAttribute("action");s=d?Is(d,e):null,t=n.getAttribute("method")||Gh,a=dp(n.getAttribute("enctype"))||$h,l=new FormData(n)}else if(uR(n)||hR(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(s=m?Is(m,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Gh,a=dp(n.getAttribute("formenctype"))||dp(d.getAttribute("enctype"))||$h,l=new FormData(d,n),!mR()){let{name:g,type:T,value:b}=n;if(T==="image"){let S=g?`${g}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else g&&l.append(g,b)}}else{if(Bf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Gh,s=null,a=$h,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:c}}function Ig(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function _R(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yR(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function vR(n,e,t){let s=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await _R(l,t);return c.links?c.links():[]}return[]}));return wR(s.flat(1).filter(yR).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function uE(n,e,t,s,a,l){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,d=(m,g)=>{var T;return t[g].pathname!==m.pathname||((T=t[g].route.path)==null?void 0:T.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>c(m,g)||d(m,g)):l==="data"?e.filter((m,g)=>{var b;let T=s.routes[m.route.id];if(!T||!T.hasLoader)return!1;if(c(m,g)||d(m,g))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((b=t[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function ER(n,e,{includeHydrateFallback:t}={}){return TR(n.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function TR(n){return[...new Set(n)]}function bR(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function wR(n,e){let t=new Set;return new Set(e),n.reduce((s,a)=>{let l=JSON.stringify(bR(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}function SR(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Is(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function D1(){let n=H.useContext(Zo);return Ig(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function AR(){let n=H.useContext(jf);return Ig(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ng=H.createContext(void 0);Ng.displayName="FrameworkContext";function k1(){let n=H.useContext(Ng);return Ig(n,"You must render this element inside a <HydratedRouter> element"),n}function CR(n,e){let t=H.useContext(Ng),[s,a]=H.useState(!1),[l,c]=H.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:g,onMouseLeave:T,onTouchStart:b}=e,S=H.useRef(null);H.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let G=K=>{K.forEach(ee=>{c(ee.isIntersecting)})},B=new IntersectionObserver(G,{threshold:.5});return S.current&&B.observe(S.current),()=>{B.disconnect()}}},[n]),H.useEffect(()=>{if(s){let G=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(G)}}},[s]);let I=()=>{a(!0)},D=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:_u(d,I),onBlur:_u(m,D),onMouseEnter:_u(g,I),onMouseLeave:_u(T,D),onTouchStart:_u(b,I)}]:[!1,S,{}]}function _u(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function RR({page:n,...e}){let{router:t}=D1(),s=H.useMemo(()=>w1(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?H.createElement(IR,{page:n,matches:s,...e}):null}function xR(n){let{manifest:e,routeModules:t}=k1(),[s,a]=H.useState([]);return H.useEffect(()=>{let l=!1;return vR(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),s}function IR({page:n,matches:e,...t}){let s=Mr(),{manifest:a,routeModules:l}=k1(),{basename:c}=D1(),{loaderData:d,matches:m}=AR(),g=H.useMemo(()=>uE(n,e,m,a,s,"data"),[n,e,m,a,s]),T=H.useMemo(()=>uE(n,e,m,a,s,"assets"),[n,e,m,a,s]),b=H.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let D=new Set,G=!1;if(e.forEach(K=>{var Q;let ee=a.routes[K.route.id];!ee||!ee.hasLoader||(!g.some(ae=>ae.route.id===K.route.id)&&K.route.id in d&&((Q=l[K.route.id])!=null&&Q.shouldRevalidate)||ee.hasClientLoader?G=!0:D.add(K.route.id))}),D.size===0)return[];let B=SR(n,c);return G&&D.size>0&&B.searchParams.set("_routes",e.filter(K=>D.has(K.route.id)).map(K=>K.route.id).join(",")),[B.pathname+B.search]},[c,d,s,a,g,e,n,l]),S=H.useMemo(()=>ER(T,a),[T,a]),I=xR(T);return H.createElement(H.Fragment,null,b.map(D=>H.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),S.map(D=>H.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),I.map(({key:D,link:G})=>H.createElement("link",{key:D,...G})))}function NR(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var M1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{M1&&(window.__reactRouterVersion="7.3.0")}catch{}function OR({basename:n,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=v2({window:t,v5Compat:!0}));let a=s.current,[l,c]=H.useState({action:a.action,location:a.location}),d=H.useCallback(m=>{H.startTransition(()=>c(m))},[c]);return H.useLayoutEffect(()=>a.listen(d),[a,d]),H.createElement(oR,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var P1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L1=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:c,state:d,target:m,to:g,preventScrollReset:T,viewTransition:b,...S},I){let{basename:D}=H.useContext(vi),G=typeof g=="string"&&P1.test(g),B,K=!1;if(typeof g=="string"&&G&&(B=g,M1))try{let C=new URL(window.location.href),N=g.startsWith("//")?new URL(C.protocol+g):new URL(g),P=Is(N.pathname,D);N.origin===C.origin&&P!=null?g=P+N.search+N.hash:K=!0}catch{_i(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ee=G2(g,{relative:a}),[Q,ae,ue]=CR(s,S),ye=PR(g,{replace:c,state:d,target:m,preventScrollReset:T,relative:a,viewTransition:b});function M(C){e&&e(C),C.defaultPrevented||ye(C)}let R=H.createElement("a",{...S,...ue,href:B||ee,onClick:K||l?e:M,ref:NR(I,ae),target:m,"data-discover":!G&&t==="render"?"true":void 0});return Q&&!G?H.createElement(H.Fragment,null,R,H.createElement(RR,{page:ee})):R});L1.displayName="Link";var DR=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:c,viewTransition:d,children:m,...g},T){let b=Xu(c,{relative:g.relative}),S=Mr(),I=H.useContext(jf),{navigator:D,basename:G}=H.useContext(vi),B=I!=null&&zR(b)&&d===!0,K=D.encodeLocation?D.encodeLocation(b).pathname:b.pathname,ee=S.pathname,Q=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(ee=ee.toLowerCase(),Q=Q?Q.toLowerCase():null,K=K.toLowerCase()),Q&&G&&(Q=Is(Q,G)||Q);const ae=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ue=ee===K||!a&&ee.startsWith(K)&&ee.charAt(ae)==="/",ye=Q!=null&&(Q===K||!a&&Q.startsWith(K)&&Q.charAt(K.length)==="/"),M={isActive:ue,isPending:ye,isTransitioning:B},R=ue?e:void 0,C;typeof s=="function"?C=s(M):C=[s,ue?"active":null,ye?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(M):l;return H.createElement(L1,{...g,"aria-current":R,className:C,ref:T,style:N,to:c,viewTransition:d},typeof m=="function"?m(M):m)});DR.displayName="NavLink";var kR=H.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:c=Gh,action:d,onSubmit:m,relative:g,preventScrollReset:T,viewTransition:b,...S},I)=>{let D=VR(),G=jR(d,{relative:g}),B=c.toLowerCase()==="get"?"get":"post",K=typeof d=="string"&&P1.test(d),ee=Q=>{if(m&&m(Q),Q.defaultPrevented)return;Q.preventDefault();let ae=Q.nativeEvent.submitter,ue=(ae==null?void 0:ae.getAttribute("formmethod"))||c;D(ae||Q.currentTarget,{fetcherKey:e,method:ue,navigate:t,replace:a,state:l,relative:g,preventScrollReset:T,viewTransition:b})};return H.createElement("form",{ref:I,method:B,action:G,onSubmit:s?m:ee,...S,"data-discover":!K&&n==="render"?"true":void 0})});kR.displayName="Form";function MR(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U1(n){let e=H.useContext(Zo);return rt(e,MR(n)),e}function PR(n,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=zf(),m=Mr(),g=Xu(n,{relative:l});return H.useCallback(T=>{if(dR(T,e)){T.preventDefault();let b=t!==void 0?t:Vu(m)===Vu(g);d(n,{replace:b,state:s,preventScrollReset:a,relative:l,viewTransition:c})}},[m,d,g,t,s,e,n,a,l,c])}var LR=0,UR=()=>`__${String(++LR)}__`;function VR(){let{router:n}=U1("useSubmit"),{basename:e}=H.useContext(vi),t=nR();return H.useCallback(async(s,a={})=>{let{action:l,method:c,encType:d,formData:m,body:g}=gR(s,e);if(a.navigate===!1){let T=a.fetcherKey||UR();await n.fetch(T,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function jR(n,{relative:e}={}){let{basename:t}=H.useContext(vi),s=H.useContext(Hi);rt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...Xu(n||".",{relative:e})},c=Mr();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),m=d.getAll("index");if(m.some(T=>T==="")){d.delete("index"),m.filter(b=>b).forEach(b=>d.append("index",b));let T=d.toString();l.search=T?`?${T}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ss([t,l.pathname])),Vu(l)}function zR(n,e={}){let t=H.useContext(R1);rt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=U1("useViewTransitionState"),a=Xu(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Is(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Is(t.nextLocation.pathname,s)||t.nextLocation.pathname;return sf(a.pathname,c)!=null||sf(a.pathname,l)!=null}new TextEncoder;const BR=()=>{};var cE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(n,e){if(!n)throw el(e)},el=function(n){return new Error("Firebase Database ("+V1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},FR=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const a=n[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Og={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,m=a+2<n.length,g=m?n[a+2]:0,T=l>>2,b=(l&3)<<4|d>>4;let S=(d&15)<<2|g>>6,I=g&63;m||(I=64,c||(S=64)),s.push(t[T],t[b],t[S],t[I])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(j1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):FR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const b=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||b==null)throw new HR;const S=l<<2|d>>4;if(s.push(S),g!==64){const I=d<<4&240|g>>2;if(s.push(I),b!==64){const D=g<<6&192|b;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const z1=function(n){const e=j1(n);return Og.encodeByteArray(e,!0)},rf=function(n){return z1(n).replace(/\./g,"")},af=function(n){try{return Og.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(n){return B1(void 0,n)}function B1(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!GR(t)||(n[t]=B1(n[t],e[t]));return n}function GR(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR=()=>$R().__FIREBASE_DEFAULTS__,YR=()=>{if(typeof process>"u"||typeof cE>"u")return;const n=cE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},WR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&af(n[1]);return e&&JSON.parse(e)},Ff=()=>{try{return BR()||KR()||YR()||WR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},F1=n=>{var e,t;return(t=(e=Ff())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dg=n=>{const e=F1(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},H1=()=>{var n;return(n=Ff())===null||n===void 0?void 0:n.config},q1=n=>{var e;return(e=Ff())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rf(JSON.stringify(t)),rf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function QR(){var n;const e=(n=Ff())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function G1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZR(){const n=hn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function JR(){return V1.NODE_ADMIN===!0}function ex(){return!QR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function K1(){try{return typeof indexedDB=="object"}catch{return!1}}function Y1(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function tx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="FirebaseError";class ni extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nx,Object.setPrototypeOf(this,ni.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?ix(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new ni(a,d,s)}}function ix(n,e){return n.replace(sx,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const sx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){return JSON.parse(n)}function Qt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=function(n){let e={},t={},s={},a="";try{const l=n.split(".");e=ju(af(l[0])||""),t=ju(af(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},rx=function(n){const e=W1(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ax=function(n){const e=W1(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fo(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Up(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function of(n,e,t){const s={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(s[a]=e.call(t,n[a],a,n));return s}function Ns(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=n[a],c=e[a];if(hE(l)&&hE(c)){if(!Ns(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function hE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Su(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Au(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let b=0;b<16;b++)s[b]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let b=0;b<16;b++)s[b]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let b=16;b<80;b++){const S=s[b-3]^s[b-8]^s[b-14]^s[b-16];s[b]=(S<<1|S>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,T;for(let b=0;b<80;b++){b<40?b<20?(g=d^l&(c^d),T=1518500249):(g=l^c^d,T=1859775393):b<60?(g=l&c|d&(l|c),T=2400959708):(g=l^c^d,T=3395469782);const S=(a<<5|a>>>27)+g+m+T+s[b]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=S}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function lx(n,e){const t=new ux(n,e);return t.subscribe.bind(t)}class ux{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");cx(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=mp),a.error===void 0&&(a.error=mp),a.complete===void 0&&(a.complete=mp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cx(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function mp(){}function hx(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,re(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Hf=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=1e3,mx=2,px=4*60*60*1e3,gx=.5;function fE(n,e=dx,t=mx){const s=e*Math.pow(t,n),a=Math.round(gx*s*(Math.random()-.5)*2);return Math.min(px,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){return n&&n._delegate?n._delegate:n}class Mn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new kg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vx(e))try{this.getOrInitializeService({instanceIdentifier:pa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=pa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pa){return this.instances.has(e)}getOptions(e=pa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yx(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=pa){return this.component?this.component.multipleInstances?e:pa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yx(n){return n===pa?void 0:n}function vx(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _x(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const Tx={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},bx=Ie.INFO,wx={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},Sx=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),a=wx[e];if(a)console[a](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zu{constructor(e){this.name=e,this._logLevel=bx,this._logHandler=Sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const Ax=(n,e)=>e.some(t=>n instanceof t);let dE,mE;function Cx(){return dE||(dE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rx(){return mE||(mE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q1=new WeakMap,Vp=new WeakMap,X1=new WeakMap,pp=new WeakMap,Lg=new WeakMap;function xx(n){const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ar(n.result)),a()},c=()=>{s(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Q1.set(t,n)}).catch(()=>{}),Lg.set(e,n),e}function Ix(n){if(Vp.has(n))return;const e=new Promise((t,s)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Vp.set(n,e)}let jp={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||X1.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ar(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Nx(n){jp=n(jp)}function Ox(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(gp(this),e,...t);return X1.set(s,e.sort?e.sort():[e]),Ar(s)}:Rx().includes(n)?function(...e){return n.apply(gp(this),e),Ar(Q1.get(this))}:function(...e){return Ar(n.apply(gp(this),e))}}function Dx(n){return typeof n=="function"?Ox(n):(n instanceof IDBTransaction&&Ix(n),Ax(n,Cx())?new Proxy(n,jp):n)}function Ar(n){if(n instanceof IDBRequest)return xx(n);if(pp.has(n))return pp.get(n);const e=Dx(n);return e!==n&&(pp.set(n,e),Lg.set(e,n)),e}const gp=n=>Lg.get(n);function Z1(n,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=Ar(c);return s&&c.addEventListener("upgradeneeded",m=>{s(Ar(c.result),m.oldVersion,m.newVersion,Ar(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const kx=["get","getKey","getAll","getAllKeys","count"],Mx=["put","add","delete","clear"],_p=new Map;function pE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_p.get(e))return _p.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=Mx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||kx.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&m.done]))[0]};return _p.set(e,l),l}Nx(n=>({...n,get:(e,t,s)=>pE(e,t)||n.get(e,t,s),has:(e,t)=>!!pE(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Lx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Lx(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zp="@firebase/app",gE="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=new Zu("@firebase/app"),Ux="@firebase/app-compat",Vx="@firebase/analytics-compat",jx="@firebase/analytics",zx="@firebase/app-check-compat",Bx="@firebase/app-check",Fx="@firebase/auth",Hx="@firebase/auth-compat",qx="@firebase/database",Gx="@firebase/data-connect",$x="@firebase/database-compat",Kx="@firebase/functions",Yx="@firebase/functions-compat",Wx="@firebase/installations",Qx="@firebase/installations-compat",Xx="@firebase/messaging",Zx="@firebase/messaging-compat",Jx="@firebase/performance",eI="@firebase/performance-compat",tI="@firebase/remote-config",nI="@firebase/remote-config-compat",iI="@firebase/storage",sI="@firebase/storage-compat",rI="@firebase/firestore",aI="@firebase/vertexai",oI="@firebase/firestore-compat",lI="firebase",uI="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="[DEFAULT]",cI={[zp]:"fire-core",[Ux]:"fire-core-compat",[jx]:"fire-analytics",[Vx]:"fire-analytics-compat",[Bx]:"fire-app-check",[zx]:"fire-app-check-compat",[Fx]:"fire-auth",[Hx]:"fire-auth-compat",[qx]:"fire-rtdb",[Gx]:"fire-data-connect",[$x]:"fire-rtdb-compat",[Kx]:"fire-fn",[Yx]:"fire-fn-compat",[Wx]:"fire-iid",[Qx]:"fire-iid-compat",[Xx]:"fire-fcm",[Zx]:"fire-fcm-compat",[Jx]:"fire-perf",[eI]:"fire-perf-compat",[tI]:"fire-rc",[nI]:"fire-rc-compat",[iI]:"fire-gcs",[sI]:"fire-gcs-compat",[rI]:"fire-fst",[oI]:"fire-fst-compat",[aI]:"fire-vertex","fire-js":"fire-js",[lI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map,hI=new Map,Fp=new Map;function _E(n,e){try{n.container.addComponent(e)}catch(t){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jn(n){const e=n.name;if(Fp.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;Fp.set(e,n);for(const t of lf.values())_E(t,n);for(const t of hI.values())_E(t,n);return!0}function Ls(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new ka("app","Firebase",fI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=uI;function J1(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bp,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw Cr.create("bad-app-name",{appName:String(a)});if(t||(t=H1()),!t)throw Cr.create("no-options");const l=lf.get(a);if(l){if(Ns(t,l.options)&&Ns(s,l.config))return l;throw Cr.create("duplicate-app",{appName:a})}const c=new Ex(a);for(const m of Fp.values())c.addComponent(m);const d=new dI(t,s,c);return lf.set(a,d),d}function Ju(n=Bp){const e=lf.get(n);if(!e&&n===Bp&&H1())return J1();if(!e)throw Cr.create("no-app",{appName:n});return e}function cn(n,e,t){var s;let a=(s=cI[n])!==null&&s!==void 0?s:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(d.join(" "));return}Jn(new Mn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firebase-heartbeat-database",pI=1,zu="firebase-heartbeat-store";let yp=null;function eb(){return yp||(yp=Z1(mI,pI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cr.create("idb-open",{originalErrorMessage:n.message})})),yp}async function gI(n){try{const t=(await eb()).transaction(zu),s=await t.objectStore(zu).get(tb(n));return await t.done,s}catch(e){if(e instanceof ni)Os.warn(e.message);else{const t=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(t.message)}}}async function yE(n,e){try{const s=(await eb()).transaction(zu,"readwrite");await s.objectStore(zu).put(e,tb(n)),await s.done}catch(t){if(t instanceof ni)Os.warn(t.message);else{const s=Cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Os.warn(s.message)}}}function tb(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=1024,yI=30;class vI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=vE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>yI){const c=bI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Os.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vE(),{heartbeatsToSend:s,unsentEntries:a}=EI(this._heartbeatsCache.heartbeats),l=rf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Os.warn(t),""}}}function vE(){return new Date().toISOString().substring(0,10)}function EI(n,e=_I){const t=[];let s=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),EE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),EE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class TI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K1()?Y1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return yE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return yE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function EE(n){return rf(JSON.stringify({version:2,heartbeats:n})).length}function bI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(n){Jn(new Mn("platform-logger",e=>new Px(e),"PRIVATE")),Jn(new Mn("heartbeat",e=>new vI(e),"PRIVATE")),cn(zp,gE,n),cn(zp,gE,"esm2017"),cn("fire-js","")}wI("");var SI="firebase",AI="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(SI,AI,"app");const nb="@firebase/installations",Ug="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib=1e4,sb=`w:${Ug}`,rb="FIS_v2",CI="https://firebaseinstallations.googleapis.com/v1",RI=60*60*1e3,xI="installations",II="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},wa=new ka(xI,II,NI);function ab(n){return n instanceof ni&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob({projectId:n}){return`${CI}/projects/${n}/installations`}function lb(n){return{token:n.token,requestStatus:2,expiresIn:DI(n.expiresIn),creationTime:Date.now()}}async function ub(n,e){const s=(await e.json()).error;return wa.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function cb({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function OI(n,{refreshToken:e}){const t=cb(n);return t.append("Authorization",kI(e)),t}async function hb(n){const e=await n();return e.status>=500&&e.status<600?n():e}function DI(n){return Number(n.replace("s","000"))}function kI(n){return`${rb} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=ob(n),a=cb(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={fid:t,authVersion:rb,appId:n.appId,sdkVersion:sb},d={method:"POST",headers:a,body:JSON.stringify(c)},m=await hb(()=>fetch(s,d));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:lb(g.authToken)}}else throw await ub("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/^[cdef][\w-]{21}$/,Hp="";function UI(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=VI(n);return LI.test(t)?t:Hp}catch{return Hp}}function VI(n){return PI(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new Map;function mb(n,e){const t=qf(n);pb(t,e),jI(t,e)}function pb(n,e){const t=db.get(n);if(t)for(const s of t)s(e)}function jI(n,e){const t=zI();t&&t.postMessage({key:n,fid:e}),BI()}let _a=null;function zI(){return!_a&&"BroadcastChannel"in self&&(_a=new BroadcastChannel("[Firebase] FID Change"),_a.onmessage=n=>{pb(n.data.key,n.data.fid)}),_a}function BI(){db.size===0&&_a&&(_a.close(),_a=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firebase-installations-database",HI=1,Sa="firebase-installations-store";let vp=null;function Vg(){return vp||(vp=Z1(FI,HI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Sa)}}})),vp}async function uf(n,e){const t=qf(n),a=(await Vg()).transaction(Sa,"readwrite"),l=a.objectStore(Sa),c=await l.get(t);return await l.put(e,t),await a.done,(!c||c.fid!==e.fid)&&mb(n,e.fid),e}async function gb(n){const e=qf(n),s=(await Vg()).transaction(Sa,"readwrite");await s.objectStore(Sa).delete(e),await s.done}async function Gf(n,e){const t=qf(n),a=(await Vg()).transaction(Sa,"readwrite"),l=a.objectStore(Sa),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await a.done,d&&(!c||c.fid!==d.fid)&&mb(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(n){let e;const t=await Gf(n.appConfig,s=>{const a=qI(s),l=GI(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===Hp?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function qI(n){const e=n||{fid:UI(),registrationStatus:0};return _b(e)}function GI(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(wa.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=$I(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KI(n)}:{installationEntry:e}}async function $I(n,e){try{const t=await MI(n,e);return uf(n.appConfig,t)}catch(t){throw ab(t)&&t.customData.serverCode===409?await gb(n.appConfig):await uf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function KI(n){let e=await TE(n.appConfig);for(;e.registrationStatus===1;)await fb(100),e=await TE(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await jg(n);return s||t}return e}function TE(n){return Gf(n,e=>{if(!e)throw wa.create("installation-not-found");return _b(e)})}function _b(n){return YI(n)?{fid:n.fid,registrationStatus:0}:n}function YI(n){return n.registrationStatus===1&&n.registrationTime+ib<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI({appConfig:n,heartbeatServiceProvider:e},t){const s=QI(n,t),a=OI(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={installation:{sdkVersion:sb,appId:n.appId}},d={method:"POST",headers:a,body:JSON.stringify(c)},m=await hb(()=>fetch(s,d));if(m.ok){const g=await m.json();return lb(g)}else throw await ub("Generate Auth Token",m)}function QI(n,{fid:e}){return`${ob(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zg(n,e=!1){let t;const s=await Gf(n.appConfig,l=>{if(!yb(l))throw wa.create("not-registered");const c=l.authToken;if(!e&&JI(c))return l;if(c.requestStatus===1)return t=XI(n,e),l;{if(!navigator.onLine)throw wa.create("app-offline");const d=tN(l);return t=ZI(n,d),d}});return t?await t:s.authToken}async function XI(n,e){let t=await bE(n.appConfig);for(;t.authToken.requestStatus===1;)await fb(100),t=await bE(n.appConfig);const s=t.authToken;return s.requestStatus===0?zg(n,e):s}function bE(n){return Gf(n,e=>{if(!yb(e))throw wa.create("not-registered");const t=e.authToken;return nN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ZI(n,e){try{const t=await WI(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await uf(n.appConfig,s),t}catch(t){if(ab(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await gb(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await uf(n.appConfig,s)}throw t}}function yb(n){return n!==void 0&&n.registrationStatus===2}function JI(n){return n.requestStatus===2&&!eN(n)}function eN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+RI}function tN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function nN(n){return n.requestStatus===1&&n.requestTime+ib<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(n){const e=n,{installationEntry:t,registrationPromise:s}=await jg(e);return s?s.catch(console.error):zg(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(n,e=!1){const t=n;return await rN(t),(await zg(t,e)).token}async function rN(n){const{registrationPromise:e}=await jg(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aN(n){if(!n||!n.options)throw Ep("App Configuration");if(!n.name)throw Ep("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ep(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ep(n){return wa.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="installations",oN="installations-internal",lN=n=>{const e=n.getProvider("app").getImmediate(),t=aN(e),s=Ls(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uN=n=>{const e=n.getProvider("app").getImmediate(),t=Ls(e,vb).getImmediate();return{getId:()=>iN(t),getToken:a=>sN(t,a)}};function cN(){Jn(new Mn(vb,lN,"PUBLIC")),Jn(new Mn(oN,uN,"PRIVATE"))}cN();cn(nb,Ug);cn(nb,Ug,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="analytics",hN="firebase_id",fN="origin",dN=60*1e3,mN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Zu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Dn=new ka("analytics","Analytics",pN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(n){if(!n.startsWith(Bg)){const e=Dn.create("invalid-gtag-resource",{gtagURL:n});return Sn.warn(e.message),""}return n}function Eb(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function _N(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function yN(n,e){const t=_N("firebase-js-sdk-policy",{createScriptURL:gN}),s=document.createElement("script"),a=`${Bg}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function vN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function EN(n,e,t,s,a,l){const c=s[a];try{if(c)await e[c];else{const m=(await Eb(t)).find(g=>g.measurementId===a);m&&await e[m.appId]}}catch(d){Sn.error(d)}n("config",a,l)}async function TN(n,e,t,s,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const d=await Eb(t);for(const m of c){const g=d.find(b=>b.measurementId===m),T=g&&e[g.appId];if(T)l.push(T);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,a||{})}catch(l){Sn.error(l)}}function bN(n,e,t,s){async function a(l,...c){try{if(l==="event"){const[d,m]=c;await TN(n,e,t,d,m)}else if(l==="config"){const[d,m]=c;await EN(n,e,t,s,d,m)}else if(l==="consent"){const[d,m]=c;n("consent",d,m)}else if(l==="get"){const[d,m,g]=c;n("get",d,m,g)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){Sn.error(d)}}return a}function wN(n,e,t,s,a){let l=function(...c){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=bN(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function SN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bg)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=30,CN=1e3;class RN{constructor(e={},t=CN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tb=new RN;function xN(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function IN(n){var e;const{appId:t,apiKey:s}=n,a={method:"GET",headers:xN(s)},l=mN.replace("{app-id}",t),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let d="";try{const m=await c.json();!((e=m.error)===null||e===void 0)&&e.message&&(d=m.error.message)}catch{}throw Dn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function NN(n,e=Tb,t){const{appId:s,apiKey:a,measurementId:l}=n.options;if(!s)throw Dn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:s};throw Dn.create("no-api-key")}const c=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new kN;return setTimeout(async()=>{d.abort()},dN),bb({appId:s,apiKey:a,measurementId:l},c,d,e)}async function bb(n,{throttleEndTimeMillis:e,backoffCount:t},s,a=Tb){var l;const{appId:c,measurementId:d}=n;try{await ON(s,e)}catch(m){if(d)return Sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:d};throw m}try{const m=await IN(n);return a.deleteThrottleMetadata(c),m}catch(m){const g=m;if(!DN(g)){if(a.deleteThrottleMetadata(c),d)return Sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw m}const T=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?fE(t,a.intervalMillis,AN):fE(t,a.intervalMillis),b={throttleEndTimeMillis:Date.now()+T,backoffCount:t+1};return a.setThrottleMetadata(c,b),Sn.debug(`Calling attemptFetch again in ${T} millis`),bb(n,b,s,a)}}function ON(n,e){return new Promise((t,s)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),s(Dn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DN(n){if(!(n instanceof ni)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class kN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MN(n,e,t,s,a){if(a&&a.global){n("event",t,s);return}else{const l=await e,c=Object.assign(Object.assign({},s),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(){if(K1())try{await Y1()}catch(n){return Sn.warn(Dn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Sn.warn(Dn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function LN(n,e,t,s,a,l,c){var d;const m=NN(n);m.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Sn.error(I)),e.push(m);const g=PN().then(I=>{if(I)return s.getId()}),[T,b]=await Promise.all([m,g]);SN(l)||yN(l,T.measurementId),a("js",new Date);const S=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return S[fN]="firebase",S.update=!0,b!=null&&(S[hN]=b),a("config",T.measurementId,S),T.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.app=e}_delete(){return delete Ru[this.app.options.appId],Promise.resolve()}}let Ru={},wE=[];const SE={};let Tp="dataLayer",VN="gtag",AE,wb,CE=!1;function jN(){const n=[];if(G1()&&n.push("This is a browser extension environment."),tx()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,a)=>`(${a+1}) ${s}`).join(" "),t=Dn.create("invalid-analytics-context",{errorInfo:e});Sn.warn(t.message)}}function zN(n,e,t){jN();const s=n.options.appId;if(!s)throw Dn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Dn.create("no-api-key");if(Ru[s]!=null)throw Dn.create("already-exists",{id:s});if(!CE){vN(Tp);const{wrappedGtag:l,gtagCore:c}=wN(Ru,wE,SE,Tp,VN);wb=l,AE=c,CE=!0}return Ru[s]=LN(n,wE,SE,e,AE,Tp,t),new UN(n)}function BN(n=Ju()){n=Ot(n);const e=Ls(n,cf);return e.isInitialized()?e.getImmediate():FN(n)}function FN(n,e={}){const t=Ls(n,cf);if(t.isInitialized()){const a=t.getImmediate();if(Ns(e,t.getOptions()))return a;throw Dn.create("already-initialized")}return t.initialize({options:e})}function HN(n,e,t,s){n=Ot(n),MN(wb,Ru[n.app.options.appId],e,t,s).catch(a=>Sn.error(a))}const RE="@firebase/analytics",xE="0.10.12";function qN(){Jn(new Mn(cf,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return zN(s,a,t)},"PUBLIC")),Jn(new Mn("analytics-internal",n,"PRIVATE")),cn(RE,xE),cn(RE,xE,"esm2017");function n(e){try{const t=e.getProvider(cf).getImmediate();return{logEvent:(s,a,l)=>HN(t,s,a,l)}}catch(t){throw Dn.create("interop-component-reg-failed",{reason:t})}}}qN();function Fg(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(t[s[a]]=n[s[a]]);return t}function Sb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GN=Sb,Ab=new ka("auth","Firebase",Sb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Zu("@firebase/auth");function $N(n,...e){hf.logLevel<=Ie.WARN&&hf.warn(`Auth (${Pr}): ${n}`,...e)}function Kh(n,...e){hf.logLevel<=Ie.ERROR&&hf.error(`Auth (${Pr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n,...e){throw qg(n,...e)}function pi(n,...e){return qg(n,...e)}function Hg(n,e,t){const s=Object.assign(Object.assign({},GN()),{[e]:t});return new ka("auth","Firebase",s).create(e,{appName:n.name})}function As(n){return Hg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function KN(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&ei(n,"argument-error"),Hg(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qg(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ab.create(n,...e)}function pe(n,e,...t){if(!n)throw qg(e,...t)}function Es(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kh(e),new Error(e)}function Ds(n,e){n||Es(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function YN(){return IE()==="http:"||IE()==="https:"}function IE(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YN()||G1()||"connection"in navigator)?navigator.onLine:!0}function QN(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ds(t>e,"Short delay should be less than long delay!"),this.isMobile=Pg()||$1()}get(){return WN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){Ds(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new ec(3e4,6e4);function Us(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function qi(n,e,t,s,a={}){return Rb(n,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=tl(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},l);return XR()||(g.referrerPolicy="no-referrer"),Cb.fetch()(xb(n,n.config.apiHost,t,d),g)})}async function Rb(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},XN),e);try{const a=new eO(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Lh(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lh(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Lh(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw Lh(n,"user-disabled",c);const T=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Hg(n,T,g);ei(n,T)}}catch(a){if(a instanceof ni)throw a;ei(n,"network-request-failed",{message:String(a)})}}async function tc(n,e,t,s,a={}){const l=await qi(n,e,t,s,a);return"mfaPendingCredential"in l&&ei(n,"multi-factor-auth-required",{_serverResponse:l}),l}function xb(n,e,t,s){const a=`${e}${t}?${s}`;return n.config.emulator?Gg(n.config,a):`${n.config.apiScheme}://${a}`}function JN(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pi(this.auth,"network-request-failed")),ZN.get())})}}function Lh(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=pi(n,e,s);return a.customData._tokenResponse=t,a}function NE(n){return n!==void 0&&n.enterprise!==void 0}class tO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return JN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nO(n,e){return qi(n,"GET","/v2/recaptchaConfig",Us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(n,e){return qi(n,"POST","/v1/accounts:delete",e)}async function Ib(n,e){return qi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sO(n,e=!1){const t=Ot(n),s=await t.getIdToken(e),a=$g(s);pe(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:s,authTime:xu(bp(a.auth_time)),issuedAtTime:xu(bp(a.iat)),expirationTime:xu(bp(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function bp(n){return Number(n)*1e3}function $g(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Kh("JWT malformed, contained fewer than 3 sections"),null;try{const a=af(t);return a?JSON.parse(a):(Kh("Failed to decode base64 JWT payload"),null)}catch(a){return Kh("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function OE(n){const e=$g(n);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ni&&rO(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function rO({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xu(this.lastLoginAt),this.creationTime=xu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(n){var e;const t=n.auth,s=await n.getIdToken(),a=await Ho(n,Ib(t,{idToken:s}));pe(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Nb(l.providerUserInfo):[],d=lO(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),T=m?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Gp(l.createdAt,l.lastLoginAt),isAnonymous:T};Object.assign(n,b)}async function oO(n){const e=Ot(n);await ff(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lO(n,e){return[...n.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Nb(n){return n.map(e=>{var{providerId:t}=e,s=Fg(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(n,e){const t=await Rb(n,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=xb(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Cb.fetch()(c,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cO(n,e){return qi(n,"POST","/v2/accounts:revokeToken",Us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=OE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await uO(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new Lo;return s&&(pe(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(pe(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(pe(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lo,this.toJSON())}_performRefresh(){return Es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n,e){pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ts{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=Fg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Gp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sO(this,e)}reload(){return oO(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ff(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(As(this.auth));const e=await this.getIdToken();return await Ho(this,iO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,m,g,T;const b=(s=t.displayName)!==null&&s!==void 0?s:void 0,S=(a=t.email)!==null&&a!==void 0?a:void 0,I=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,D=(c=t.photoURL)!==null&&c!==void 0?c:void 0,G=(d=t.tenantId)!==null&&d!==void 0?d:void 0,B=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,K=(g=t.createdAt)!==null&&g!==void 0?g:void 0,ee=(T=t.lastLoginAt)!==null&&T!==void 0?T:void 0,{uid:Q,emailVerified:ae,isAnonymous:ue,providerData:ye,stsTokenManager:M}=t;pe(Q&&M,e,"internal-error");const R=Lo.fromJSON(this.name,M);pe(typeof Q=="string",e,"internal-error"),Tr(b,e.name),Tr(S,e.name),pe(typeof ae=="boolean",e,"internal-error"),pe(typeof ue=="boolean",e,"internal-error"),Tr(I,e.name),Tr(D,e.name),Tr(G,e.name),Tr(B,e.name),Tr(K,e.name),Tr(ee,e.name);const C=new Ts({uid:Q,auth:e,email:S,emailVerified:ae,displayName:b,isAnonymous:ue,photoURL:D,phoneNumber:I,tenantId:G,stsTokenManager:R,createdAt:K,lastLoginAt:ee});return ye&&Array.isArray(ye)&&(C.providerData=ye.map(N=>Object.assign({},N))),B&&(C._redirectEventId=B),C}static async _fromIdTokenResponse(e,t,s=!1){const a=new Lo;a.updateFromServerResponse(t);const l=new Ts({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await ff(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];pe(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Nb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new Lo;d.updateFromIdToken(s);const m=new Ts({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Gp(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=new Map;function bs(n){Ds(n instanceof Function,"Expected a class definition");let e=DE.get(n);return e?(Ds(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,DE.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ob.type="NONE";const kE=Ob;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,e,t){return`firebase:${n}:${e}:${t}`}class Uo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Yh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Yh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Uo(bs(kE),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||bs(kE);const c=Yh(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const T=await g._get(c);if(T){const b=Ts._fromJSON(e,T);g!==l&&(d=b),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Uo(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Uo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Db(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ub(e))return"Blackberry";if(Vb(e))return"Webos";if(kb(e))return"Safari";if((e.includes("chrome/")||Mb(e))&&!e.includes("edge/"))return"Chrome";if(Lb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Db(n=hn()){return/firefox\//i.test(n)}function kb(n=hn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mb(n=hn()){return/crios\//i.test(n)}function Pb(n=hn()){return/iemobile/i.test(n)}function Lb(n=hn()){return/android/i.test(n)}function Ub(n=hn()){return/blackberry/i.test(n)}function Vb(n=hn()){return/webos/i.test(n)}function Kg(n=hn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hO(n=hn()){var e;return Kg(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fO(){return ZR()&&document.documentMode===10}function jb(n=hn()){return Kg(n)||Lb(n)||Vb(n)||Ub(n)||/windows phone/i.test(n)||Pb(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(n,e=[]){let t;switch(n){case"Browser":t=ME(hn());break;case"Worker":t=`${ME(hn())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(n,e={}){return qi(n,"GET","/v2/passwordPolicy",Us(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=6;class gO{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:pO,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new PE(this),this.idTokenSubscription=new PE(this),this.beforeStateQueue=new dO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ab,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bs(t)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ib(this,{idToken:e}),s=await Ts._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(yn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ff(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(As(this));const t=e?Ot(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(As(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(As(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mO(this),t=new gO(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ka("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await cO(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bs(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[bs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&$N(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Lr(n){return Ot(n)}class PE{constructor(e){this.auth=e,this.observer=null,this.addObserver=lx(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yO(n){$f=n}function Bb(n){return $f.loadJS(n)}function vO(){return $f.recaptchaEnterpriseScript}function EO(){return $f.gapiScript}function TO(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class bO{constructor(){this.enterprise=new wO}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wO{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const SO="recaptcha-enterprise",Fb="NO_RECAPTCHA";class AO{constructor(e){this.type=SO,this.auth=Lr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{nO(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new tO(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{d(m)})})}function a(l,c,d){const m=window.grecaptcha;NE(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(Fb)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&NE(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=vO();m.length!==0&&(m+=d),Bb(m).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function LE(n,e,t,s=!1,a=!1){const l=new AO(n);let c;if(a)c=Fb;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function $p(n,e,t,s,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await LE(n,e,t,t==="getOobCode");return s(n,c)}else return s(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await LE(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(n,e){const t=Ls(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Ns(l,e??{}))return a;ei(a,"already-initialized")}return t.initialize({options:e})}function RO(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(bs);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function xO(n,e,t){const s=Lr(n);pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Hb(e),{host:c,port:d}=IO(e),m=d===null?"":`:${d}`,g={url:`${l}//${c}${m}/`},T=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){pe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),pe(Ns(g,s.config.emulator)&&Ns(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,NO()}function Hb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function IO(n){const e=Hb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:UE(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:UE(c)}}}function UE(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function NO(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Es("not implemented")}_getIdTokenResponse(e){return Es("not implemented")}_linkToIdToken(e,t){return Es("not implemented")}_getReauthenticationResolver(e){return Es("not implemented")}}async function OO(n,e){return qi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(n,e){return tc(n,"POST","/v1/accounts:signInWithPassword",Us(n,e))}async function kO(n,e){return qi(n,"POST","/v1/accounts:sendOobCode",Us(n,e))}async function MO(n,e){return kO(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PO(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",Us(n,e))}async function LO(n,e){return tc(n,"POST","/v1/accounts:signInWithEmailLink",Us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Yg{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Bu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Bu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $p(e,t,"signInWithPassword",DO);case"emailLink":return PO(e,{email:this._email,oobCode:this._password});default:ei(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $p(e,s,"signUpPassword",OO);case"emailLink":return LO(e,{idToken:t,email:this._email,oobCode:this._password});default:ei(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n,e){return tc(n,"POST","/v1/accounts:signInWithIdp",Us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO="http://localhost";class ks extends Yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ei("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=Fg(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new ks(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Vo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Vo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vo(e,t)}buildRequest(){const e={requestUri:UO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jO(n){const e=Su(Au(n)).link,t=e?Su(Au(e)).deep_link_id:null,s=Su(Au(n)).deep_link_id;return(s?Su(Au(s)).link:null)||s||t||e||n}class Wg{constructor(e){var t,s,a,l,c,d;const m=Su(Au(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,T=(s=m.oobCode)!==null&&s!==void 0?s:null,b=VO((a=m.mode)!==null&&a!==void 0?a:null);pe(g&&T&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=T,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=jO(e);try{return new Wg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,t){return Bu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Wg.parseLink(t);return pe(s,"argument-error"),Bu._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Iu extends il{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return pe("providerId"in t&&"signInMethod"in t,"argument-error"),ks._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return pe(e.idToken||e.accessToken,"argument-error"),ks._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Iu.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Iu.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:d}=e;if(!s&&!a&&!t&&!l||!d)return null;try{return new Iu(d)._credential({idToken:t,accessToken:s,nonce:c,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends il{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ks._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ui.credential(t,s)}catch{return null}}}Ui.GOOGLE_SIGN_IN_METHOD="google.com";Ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends il{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends il{constructor(){super("twitter.com")}static credential(e,t){return ks._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Sr.credential(t,s)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(n,e){return tc(n,"POST","/v1/accounts:signUp",Us(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await Ts._fromIdTokenResponse(e,s,a),c=VE(s);return new Aa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=VE(s);return new Aa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function VE(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends ni{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,df.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new df(e,t,s,a)}}function qb(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?df._fromErrorAndOperation(n,l,e,s):l})}async function BO(n,e,t=!1){const s=await Ho(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Aa._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(n,e,t=!1){const{auth:s}=n;if(yn(s.app))return Promise.reject(As(s));const a="reauthenticate";try{const l=await Ho(n,qb(s,a,e,n),t);pe(l.idToken,s,"internal-error");const c=$g(l.idToken);pe(c,s,"internal-error");const{sub:d}=c;return pe(n.uid===d,s,"user-mismatch"),Aa._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ei(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(n,e,t=!1){if(yn(n.app))return Promise.reject(As(n));const s="signIn",a=await qb(n,s,e),l=await Aa._fromIdTokenResponse(n,s,a);return t||await n._updateCurrentUser(l.user),l}async function HO(n,e){return Gb(Lr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(n,e,t){var s;pe(((s=t.url)===null||s===void 0?void 0:s.length)>0,n,"invalid-continue-uri"),pe(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),pe(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(pe(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(pe(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(n){const e=Lr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GO(n,e,t){if(yn(n.app))return Promise.reject(As(n));const s=Lr(n),c=await $p(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zO).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&$b(n),m}),d=await Aa._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function $O(n,e,t){return yn(n.app)?Promise.reject(As(n)):HO(Ot(n),nl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&$b(n),s})}async function Xg(n,e){const t=Ot(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&qO(t.auth,a,e);const{email:l}=await MO(t.auth,a);l!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(n,e){return qi(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ot(n),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Ho(s,KO(s.auth,l));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const d=s.providerData.find(({providerId:m})=>m==="password");d&&(d.displayName=s.displayName,d.photoURL=s.photoURL),await s._updateTokensIfNecessary(c)}function WO(n,e,t,s){return Ot(n).onIdTokenChanged(e,t,s)}function QO(n,e,t){return Ot(n).beforeAuthStateChanged(e,t)}function XO(n,e,t,s){return Ot(n).onAuthStateChanged(e,t,s)}const mf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mf,"1"),this.storage.removeItem(mf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=1e3,JO=10;class Yb extends Kb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);fO()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,JO):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ZO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yb.type="LOCAL";const eD=Yb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb extends Kb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wb.type="SESSION";const Qb=Wb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Kf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await tD(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=Zg("",20);a.port1.start();const T=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(b){const S=b;if(S.data.eventId===g)switch(S.data.status){case"ack":clearTimeout(T),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(T),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(){return window}function iD(n){ji().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(){return typeof ji().WorkerGlobalScope<"u"&&typeof ji().importScripts=="function"}async function sD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rD(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aD(){return Xb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="firebaseLocalStorageDb",oD=1,pf="firebaseLocalStorage",Jb="fbase_key";class nc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yf(n,e){return n.transaction([pf],e?"readwrite":"readonly").objectStore(pf)}function lD(){const n=indexedDB.deleteDatabase(Zb);return new nc(n).toPromise()}function Kp(){const n=indexedDB.open(Zb,oD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(pf,{keyPath:Jb})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(pf)?e(s):(s.close(),await lD(),e(await Kp()))})})}async function jE(n,e,t){const s=Yf(n,!0).put({[Jb]:e,value:t});return new nc(s).toPromise()}async function uD(n,e){const t=Yf(n,!1).get(e),s=await new nc(t).toPromise();return s===void 0?null:s.value}function zE(n,e){const t=Yf(n,!0).delete(e);return new nc(t).toPromise()}const cD=800,hD=3;class ew{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>hD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kf._getInstance(aD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sD(),!this.activeServiceWorker)return;this.sender=new nD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kp();return await jE(e,mf,"1"),await zE(e,mf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>jE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>uD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Yf(a,!1).getAll();return new nc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ew.type="LOCAL";const fD=ew;new ec(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(n,e){return e?bs(e):(pe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dD(n){return Gb(n.auth,new Jg(n),n.bypassAuthState)}function mD(n){const{auth:e,user:t}=n;return pe(t,e,"internal-error"),FO(t,new Jg(n),n.bypassAuthState)}async function pD(n){const{auth:e,user:t}=n;return pe(t,e,"internal-error"),BO(t,new Jg(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dD;case"linkViaPopup":case"linkViaRedirect":return pD;case"reauthViaPopup":case"reauthViaRedirect":return mD;default:ei(this.auth,"internal-error")}}resolve(e){Ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ds(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=new ec(2e3,1e4);async function iw(n,e,t){if(yn(n.app))return Promise.reject(pi(n,"operation-not-supported-in-this-environment"));const s=Lr(n);KN(n,e,Qg);const a=tw(s,t);return new ya(s,"signInViaPopup",e,a).executeNotNull()}class ya extends nw{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,ya.currentPopupAction&&ya.currentPopupAction.cancel(),ya.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Ds(this.filter.length===1,"Popup operations only handle one event");const e=Zg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ya.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gD.get())};e()}}ya.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="pendingRedirect",Wh=new Map;class yD extends nw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wh.get(this.auth._key());if(!e){try{const s=await vD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wh.set(this.auth._key(),e)}return this.bypassAuthState||Wh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vD(n,e){const t=bD(e),s=TD(n);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function ED(n,e){Wh.set(n._key(),e)}function TD(n){return bs(n._redirectPersistence)}function bD(n){return Yh(_D,n.config.apiKey,n.name)}async function wD(n,e,t=!1){if(yn(n.app))return Promise.reject(As(n));const s=Lr(n),a=tw(s,e),c=await new yD(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=10*60*1e3;class AD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!sw(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(pi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SD&&this.cachedEventUids.clear(),this.cachedEventUids.has(BE(e))}saveEventToCache(e){this.cachedEventUids.add(BE(e)),this.lastProcessedEventTime=Date.now()}}function BE(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CD(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RD(n,e={}){return qi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ID=/^https?/;async function ND(n){if(n.config.emulator)return;const{authorizedDomains:e}=await RD(n);for(const t of e)try{if(OD(t))return}catch{}ei(n,"unauthorized-domain")}function OD(n){const e=qp(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!ID.test(t))return!1;if(xD.test(n))return s===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=new ec(3e4,6e4);function FE(){const n=ji().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kD(n){return new Promise((e,t)=>{var s,a,l;function c(){FE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{FE(),t(pi(n,"network-request-failed"))},timeout:DD.get()})}if(!((a=(s=ji().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=ji().gapi)===null||l===void 0)&&l.load)c();else{const d=TO("iframefcb");return ji()[d]=()=>{gapi.load?c():t(pi(n,"network-request-failed"))},Bb(`${EO()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw Qh=null,e})}let Qh=null;function MD(n){return Qh=Qh||kD(n),Qh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new ec(5e3,15e3),LD="__/auth/iframe",UD="emulator/auth/iframe",VD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zD(n){const e=n.config;pe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gg(e,UD):`https://${n.config.authDomain}/${LD}`,s={apiKey:e.apiKey,appName:n.name,v:Pr},a=jD.get(n.config.apiHost);a&&(s.eid=a);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${tl(s).slice(1)}`}async function BD(n){const e=await MD(n),t=ji().gapi;return pe(t,n,"internal-error"),e.open({where:document.body,url:zD(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VD,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=pi(n,"network-request-failed"),d=ji().setTimeout(()=>{l(c)},PD.get());function m(){ji().clearTimeout(d),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HD=500,qD=600,GD="_blank",$D="http://localhost";class HE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KD(n,e,t,s=HD,a=qD){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m=Object.assign(Object.assign({},FD),{width:s.toString(),height:a.toString(),top:l,left:c}),g=hn().toLowerCase();t&&(d=Mb(g)?GD:t),Db(g)&&(e=e||$D,m.scrollbars="yes");const T=Object.entries(m).reduce((S,[I,D])=>`${S}${I}=${D},`,"");if(hO(g)&&d!=="_self")return YD(e||"",d),new HE(null);const b=window.open(e||"",d,T);pe(b,n,"popup-blocked");try{b.focus()}catch{}return new HE(b)}function YD(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="__/auth/handler",QD="emulator/auth/handler",XD=encodeURIComponent("fac");async function qE(n,e,t,s,a,l){pe(n.config.authDomain,n,"auth-domain-config-required"),pe(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Pr,eventId:a};if(e instanceof Qg){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Up(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,b]of Object.entries({}))c[T]=b}if(e instanceof il){const T=e.getScopes().filter(b=>b!=="");T.length>0&&(c.scopes=T.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const T of Object.keys(d))d[T]===void 0&&delete d[T];const m=await n._getAppCheckToken(),g=m?`#${XD}=${encodeURIComponent(m)}`:"";return`${ZD(n)}?${tl(d).slice(1)}${g}`}function ZD({config:n}){return n.emulator?Gg(n,QD):`https://${n.authDomain}/${WD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="webStorageSupport";class JD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qb,this._completeRedirectFn=wD,this._overrideRedirectResult=ED}async _openPopup(e,t,s,a){var l;Ds((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await qE(e,t,s,qp(),a);return KD(e,c,Zg())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await qE(e,t,s,qp(),a);return iD(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ds(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await BD(e),s=new AD(e);return t.register("authEvent",a=>(pe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wp,{type:wp},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[wp];c!==void 0&&t(!!c),ei(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ND(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jb()||kb()||Kg()}}const e4=JD;var GE="@firebase/auth",$E="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i4(n){Jn(new Mn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;pe(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zb(n)},g=new _O(s,a,l,m);return RO(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Jn(new Mn("auth-internal",e=>{const t=Lr(e.getProvider("auth").getImmediate());return(s=>new t4(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(GE,$E,n4(n)),cn(GE,$E,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=5*60,r4=q1("authIdTokenMaxAge")||s4;let KE=null;const a4=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>r4)return;const a=t==null?void 0:t.token;KE!==a&&(KE=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function o4(n=Ju()){const e=Ls(n,"auth");if(e.isInitialized())return e.getImmediate();const t=CO(n,{popupRedirectResolver:e4,persistence:[fD,eD,Qb]}),s=q1("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=a4(l.toString());QO(t,c,()=>c(t.currentUser)),WO(t,d=>c(d))}}const a=F1("auth");return a&&xO(t,`http://${a}`),t}function l4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yO({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=a=>{const l=pi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",l4().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i4("Browser");var YE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function C(){}C.prototype=R.prototype,M.D=R.prototype,M.prototype=new C,M.prototype.constructor=M,M.C=function(N,P,z){for(var O=Array(arguments.length-2),St=2;St<arguments.length;St++)O[St-2]=arguments[St];return R.prototype[P].apply(N,O)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,R,C){C||(C=0);var N=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)N[P]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(P=0;16>P;++P)N[P]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=M.g[0],C=M.g[1],P=M.g[2];var z=M.g[3],O=R+(z^C&(P^z))+N[0]+3614090360&4294967295;R=C+(O<<7&4294967295|O>>>25),O=z+(P^R&(C^P))+N[1]+3905402710&4294967295,z=R+(O<<12&4294967295|O>>>20),O=P+(C^z&(R^C))+N[2]+606105819&4294967295,P=z+(O<<17&4294967295|O>>>15),O=C+(R^P&(z^R))+N[3]+3250441966&4294967295,C=P+(O<<22&4294967295|O>>>10),O=R+(z^C&(P^z))+N[4]+4118548399&4294967295,R=C+(O<<7&4294967295|O>>>25),O=z+(P^R&(C^P))+N[5]+1200080426&4294967295,z=R+(O<<12&4294967295|O>>>20),O=P+(C^z&(R^C))+N[6]+2821735955&4294967295,P=z+(O<<17&4294967295|O>>>15),O=C+(R^P&(z^R))+N[7]+4249261313&4294967295,C=P+(O<<22&4294967295|O>>>10),O=R+(z^C&(P^z))+N[8]+1770035416&4294967295,R=C+(O<<7&4294967295|O>>>25),O=z+(P^R&(C^P))+N[9]+2336552879&4294967295,z=R+(O<<12&4294967295|O>>>20),O=P+(C^z&(R^C))+N[10]+4294925233&4294967295,P=z+(O<<17&4294967295|O>>>15),O=C+(R^P&(z^R))+N[11]+2304563134&4294967295,C=P+(O<<22&4294967295|O>>>10),O=R+(z^C&(P^z))+N[12]+1804603682&4294967295,R=C+(O<<7&4294967295|O>>>25),O=z+(P^R&(C^P))+N[13]+4254626195&4294967295,z=R+(O<<12&4294967295|O>>>20),O=P+(C^z&(R^C))+N[14]+2792965006&4294967295,P=z+(O<<17&4294967295|O>>>15),O=C+(R^P&(z^R))+N[15]+1236535329&4294967295,C=P+(O<<22&4294967295|O>>>10),O=R+(P^z&(C^P))+N[1]+4129170786&4294967295,R=C+(O<<5&4294967295|O>>>27),O=z+(C^P&(R^C))+N[6]+3225465664&4294967295,z=R+(O<<9&4294967295|O>>>23),O=P+(R^C&(z^R))+N[11]+643717713&4294967295,P=z+(O<<14&4294967295|O>>>18),O=C+(z^R&(P^z))+N[0]+3921069994&4294967295,C=P+(O<<20&4294967295|O>>>12),O=R+(P^z&(C^P))+N[5]+3593408605&4294967295,R=C+(O<<5&4294967295|O>>>27),O=z+(C^P&(R^C))+N[10]+38016083&4294967295,z=R+(O<<9&4294967295|O>>>23),O=P+(R^C&(z^R))+N[15]+3634488961&4294967295,P=z+(O<<14&4294967295|O>>>18),O=C+(z^R&(P^z))+N[4]+3889429448&4294967295,C=P+(O<<20&4294967295|O>>>12),O=R+(P^z&(C^P))+N[9]+568446438&4294967295,R=C+(O<<5&4294967295|O>>>27),O=z+(C^P&(R^C))+N[14]+3275163606&4294967295,z=R+(O<<9&4294967295|O>>>23),O=P+(R^C&(z^R))+N[3]+4107603335&4294967295,P=z+(O<<14&4294967295|O>>>18),O=C+(z^R&(P^z))+N[8]+1163531501&4294967295,C=P+(O<<20&4294967295|O>>>12),O=R+(P^z&(C^P))+N[13]+2850285829&4294967295,R=C+(O<<5&4294967295|O>>>27),O=z+(C^P&(R^C))+N[2]+4243563512&4294967295,z=R+(O<<9&4294967295|O>>>23),O=P+(R^C&(z^R))+N[7]+1735328473&4294967295,P=z+(O<<14&4294967295|O>>>18),O=C+(z^R&(P^z))+N[12]+2368359562&4294967295,C=P+(O<<20&4294967295|O>>>12),O=R+(C^P^z)+N[5]+4294588738&4294967295,R=C+(O<<4&4294967295|O>>>28),O=z+(R^C^P)+N[8]+2272392833&4294967295,z=R+(O<<11&4294967295|O>>>21),O=P+(z^R^C)+N[11]+1839030562&4294967295,P=z+(O<<16&4294967295|O>>>16),O=C+(P^z^R)+N[14]+4259657740&4294967295,C=P+(O<<23&4294967295|O>>>9),O=R+(C^P^z)+N[1]+2763975236&4294967295,R=C+(O<<4&4294967295|O>>>28),O=z+(R^C^P)+N[4]+1272893353&4294967295,z=R+(O<<11&4294967295|O>>>21),O=P+(z^R^C)+N[7]+4139469664&4294967295,P=z+(O<<16&4294967295|O>>>16),O=C+(P^z^R)+N[10]+3200236656&4294967295,C=P+(O<<23&4294967295|O>>>9),O=R+(C^P^z)+N[13]+681279174&4294967295,R=C+(O<<4&4294967295|O>>>28),O=z+(R^C^P)+N[0]+3936430074&4294967295,z=R+(O<<11&4294967295|O>>>21),O=P+(z^R^C)+N[3]+3572445317&4294967295,P=z+(O<<16&4294967295|O>>>16),O=C+(P^z^R)+N[6]+76029189&4294967295,C=P+(O<<23&4294967295|O>>>9),O=R+(C^P^z)+N[9]+3654602809&4294967295,R=C+(O<<4&4294967295|O>>>28),O=z+(R^C^P)+N[12]+3873151461&4294967295,z=R+(O<<11&4294967295|O>>>21),O=P+(z^R^C)+N[15]+530742520&4294967295,P=z+(O<<16&4294967295|O>>>16),O=C+(P^z^R)+N[2]+3299628645&4294967295,C=P+(O<<23&4294967295|O>>>9),O=R+(P^(C|~z))+N[0]+4096336452&4294967295,R=C+(O<<6&4294967295|O>>>26),O=z+(C^(R|~P))+N[7]+1126891415&4294967295,z=R+(O<<10&4294967295|O>>>22),O=P+(R^(z|~C))+N[14]+2878612391&4294967295,P=z+(O<<15&4294967295|O>>>17),O=C+(z^(P|~R))+N[5]+4237533241&4294967295,C=P+(O<<21&4294967295|O>>>11),O=R+(P^(C|~z))+N[12]+1700485571&4294967295,R=C+(O<<6&4294967295|O>>>26),O=z+(C^(R|~P))+N[3]+2399980690&4294967295,z=R+(O<<10&4294967295|O>>>22),O=P+(R^(z|~C))+N[10]+4293915773&4294967295,P=z+(O<<15&4294967295|O>>>17),O=C+(z^(P|~R))+N[1]+2240044497&4294967295,C=P+(O<<21&4294967295|O>>>11),O=R+(P^(C|~z))+N[8]+1873313359&4294967295,R=C+(O<<6&4294967295|O>>>26),O=z+(C^(R|~P))+N[15]+4264355552&4294967295,z=R+(O<<10&4294967295|O>>>22),O=P+(R^(z|~C))+N[6]+2734768916&4294967295,P=z+(O<<15&4294967295|O>>>17),O=C+(z^(P|~R))+N[13]+1309151649&4294967295,C=P+(O<<21&4294967295|O>>>11),O=R+(P^(C|~z))+N[4]+4149444226&4294967295,R=C+(O<<6&4294967295|O>>>26),O=z+(C^(R|~P))+N[11]+3174756917&4294967295,z=R+(O<<10&4294967295|O>>>22),O=P+(R^(z|~C))+N[2]+718787259&4294967295,P=z+(O<<15&4294967295|O>>>17),O=C+(z^(P|~R))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(P+(O<<21&4294967295|O>>>11))&4294967295,M.g[2]=M.g[2]+P&4294967295,M.g[3]=M.g[3]+z&4294967295}s.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var C=R-this.blockSize,N=this.B,P=this.h,z=0;z<R;){if(P==0)for(;z<=C;)a(this,M,z),z+=this.blockSize;if(typeof M=="string"){for(;z<R;)if(N[P++]=M.charCodeAt(z++),P==this.blockSize){a(this,N),P=0;break}}else for(;z<R;)if(N[P++]=M[z++],P==this.blockSize){a(this,N),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var C=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=C&255,C/=256;for(this.u(M),M=Array(16),R=C=0;4>R;++R)for(var N=0;32>N;N+=8)M[C++]=this.g[R]>>>N&255;return M};function l(M,R){var C=d;return Object.prototype.hasOwnProperty.call(C,M)?C[M]:C[M]=R(M)}function c(M,R){this.h=R;for(var C=[],N=!0,P=M.length-1;0<=P;P--){var z=M[P]|0;N&&z==R||(C[P]=z,N=!1)}this.g=C}var d={};function m(M){return-128<=M&&128>M?l(M,function(R){return new c([R|0],0>R?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return B(g(-M));for(var R=[],C=1,N=0;M>=C;N++)R[N]=M/C|0,C*=4294967296;return new c(R,0)}function T(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return B(T(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(R,8)),N=b,P=0;P<M.length;P+=8){var z=Math.min(8,M.length-P),O=parseInt(M.substring(P,P+z),R);8>z?(z=g(Math.pow(R,z)),N=N.j(z).add(g(O))):(N=N.j(C),N=N.add(g(O)))}return N}var b=m(0),S=m(1),I=m(16777216);n=c.prototype,n.m=function(){if(G(this))return-B(this).m();for(var M=0,R=1,C=0;C<this.g.length;C++){var N=this.i(C);M+=(0<=N?N:4294967296+N)*R,R*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(D(this))return"0";if(G(this))return"-"+B(this).toString(M);for(var R=g(Math.pow(M,6)),C=this,N="";;){var P=ae(C,R).g;C=K(C,P.j(R));var z=((0<C.g.length?C.g[0]:C.h)>>>0).toString(M);if(C=P,D(C))return z+N;for(;6>z.length;)z="0"+z;N=z+N}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function D(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function G(M){return M.h==-1}n.l=function(M){return M=K(this,M),G(M)?-1:D(M)?0:1};function B(M){for(var R=M.g.length,C=[],N=0;N<R;N++)C[N]=~M.g[N];return new c(C,~M.h).add(S)}n.abs=function(){return G(this)?B(this):this},n.add=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0,P=0;P<=R;P++){var z=N+(this.i(P)&65535)+(M.i(P)&65535),O=(z>>>16)+(this.i(P)>>>16)+(M.i(P)>>>16);N=O>>>16,z&=65535,O&=65535,C[P]=O<<16|z}return new c(C,C[C.length-1]&-2147483648?-1:0)};function K(M,R){return M.add(B(R))}n.j=function(M){if(D(this)||D(M))return b;if(G(this))return G(M)?B(this).j(B(M)):B(B(this).j(M));if(G(M))return B(this.j(B(M)));if(0>this.l(I)&&0>M.l(I))return g(this.m()*M.m());for(var R=this.g.length+M.g.length,C=[],N=0;N<2*R;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var P=0;P<M.g.length;P++){var z=this.i(N)>>>16,O=this.i(N)&65535,St=M.i(P)>>>16,_t=M.i(P)&65535;C[2*N+2*P]+=O*_t,ee(C,2*N+2*P),C[2*N+2*P+1]+=z*_t,ee(C,2*N+2*P+1),C[2*N+2*P+1]+=O*St,ee(C,2*N+2*P+1),C[2*N+2*P+2]+=z*St,ee(C,2*N+2*P+2)}for(N=0;N<R;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=R;N<2*R;N++)C[N]=0;return new c(C,0)};function ee(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function Q(M,R){this.g=M,this.h=R}function ae(M,R){if(D(R))throw Error("division by zero");if(D(M))return new Q(b,b);if(G(M))return R=ae(B(M),R),new Q(B(R.g),B(R.h));if(G(R))return R=ae(M,B(R)),new Q(B(R.g),R.h);if(30<M.g.length){if(G(M)||G(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,N=R;0>=N.l(M);)C=ue(C),N=ue(N);var P=ye(C,1),z=ye(N,1);for(N=ye(N,2),C=ye(C,2);!D(N);){var O=z.add(N);0>=O.l(M)&&(P=P.add(C),z=O),N=ye(N,1),C=ye(C,1)}return R=K(M,P.j(R)),new Q(P,R)}for(P=b;0<=M.l(R);){for(C=Math.max(1,Math.floor(M.m()/R.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),z=g(C),O=z.j(R);G(O)||0<O.l(M);)C-=N,z=g(C),O=z.j(R);D(z)&&(z=S),P=P.add(z),M=K(M,O)}return new Q(P,M)}n.A=function(M){return ae(this,M).h},n.and=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)&M.i(N);return new c(C,this.h&M.h)},n.or=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)|M.i(N);return new c(C,this.h|M.h)},n.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)^M.i(N);return new c(C,this.h^M.h)};function ue(M){for(var R=M.g.length+1,C=[],N=0;N<R;N++)C[N]=M.i(N)<<1|M.i(N-1)>>>31;return new c(C,M.h)}function ye(M,R){var C=R>>5;R%=32;for(var N=M.g.length-C,P=[],z=0;z<N;z++)P[z]=0<R?M.i(z+C)>>>R|M.i(z+C+1)<<32-R:M.i(z+C);return new c(P,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=T,e_=c}).apply(typeof YE<"u"?YE:typeof self<"u"?self:typeof window<"u"?window:{});var Uh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rw,Cu,aw,Xh,Yp,ow,lw,uw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uh=="object"&&Uh];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var j=h[A];if(!(j in y))break e;y=y[j]}h=h[h.length-1],A=y[h],_=_(A),_!=A&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,A=!1,j={next:function(){if(!A&&y<h.length){var $=y++;return{value:_($,h[$]),done:!1}}return A=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function T(h,_,y){return h.call.apply(h.bind,arguments)}function b(h,_,y){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,A),h.apply(_,j)}}return function(){return h.apply(_,arguments)}}function S(h,_,y){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,S.apply(null,arguments)}function I(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function D(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(A,j,$){for(var ie=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)ie[ke-2]=arguments[ke];return _.prototype[j].apply(A,ie)}}function G(h){const _=h.length;if(0<_){const y=Array(_);for(let A=0;A<_;A++)y[A]=h[A];return y}return[]}function B(h,_){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(m(A)){const j=h.length||0,$=A.length||0;h.length=j+$;for(let ie=0;ie<$;ie++)h[j+ie]=A[ie]}else h.push(A)}}class K{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ee(h){return/^[\s\xa0]*$/.test(h)}function Q(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ae(h){return ae[" "](h),h}ae[" "]=function(){};var ue=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ye(h,_,y){for(const A in h)_.call(y,h[A],A,h)}function M(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function R(h){const _={};for(const y in h)_[y]=h[y];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let y,A;for(let j=1;j<arguments.length;j++){A=arguments[j];for(y in A)h[y]=A[y];for(let $=0;$<C.length;$++)y=C[$],Object.prototype.hasOwnProperty.call(A,y)&&(h[y]=A[y])}}function P(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function z(h){d.setTimeout(()=>{throw h},0)}function O(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class St{constructor(){this.h=this.g=null}add(_,y){const A=_t.get();A.set(_,y),this.h?this.h.next=A:this.g=A,this.h=A}}var _t=new K(()=>new se,h=>h.reset());class se{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,He=new St,k=()=>{const h=d.Promise.resolve(void 0);ve=()=>{h.then(te)}};var te=()=>{for(var h;h=O();){try{h.h.call(h.g)}catch(y){z(y)}var _=_t;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ge=!1};function de(){this.s=this.s,this.C=this.C}de.prototype.s=!1,de.prototype.ma=function(){this.s||(this.s=!0,this.N())},de.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h}();function Se(h,_){if(oe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ue){e:{try{ae(_.nodeName);var j=!0;break e}catch{}j=!1}j||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:be[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Se.aa.h.call(this)}}D(Se,oe);var be={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),je=0;function ut(h,_,y,A,j){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!A,this.ha=j,this.key=++je,this.da=this.fa=!1}function $e(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function fn(h){this.src=h,this.g={},this.h=0}fn.prototype.add=function(h,_,y,A,j){var $=h.toString();h=this.g[$],h||(h=this.g[$]=[],this.h++);var ie=Pn(h,_,A,j);return-1<ie?(_=h[ie],y||(_.fa=!1)):(_=new ut(_,this.src,$,!!A,j),_.fa=y,h.push(_)),_};function $i(h,_){var y=_.type;if(y in h.g){var A=h.g[y],j=Array.prototype.indexOf.call(A,_,void 0),$;($=0<=j)&&Array.prototype.splice.call(A,j,1),$&&($e(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Pn(h,_,y,A){for(var j=0;j<h.length;++j){var $=h[j];if(!$.da&&$.listener==_&&$.capture==!!y&&$.ha==A)return j}return-1}var Vs="closure_lm_"+(1e6*Math.random()|0),js={};function Ki(h,_,y,A,j){if(Array.isArray(_)){for(var $=0;$<_.length;$++)Ki(h,_[$],y,A,j);return null}return y=mc(y),h&&h[yt]?h.K(_,y,g(A)?!!A.capture:!1,j):ul(h,_,y,!1,A,j)}function ul(h,_,y,A,j,$){if(!_)throw Error("Invalid event type");var ie=g(j)?!!j.capture:!!j,ke=cl(h);if(ke||(h[Vs]=ke=new fn(h)),y=ke.add(_,y,A,ie,$),y.proxy)return y;if(A=ja(),y.proxy=A,A.src=h,A.listener=y,h.addEventListener)le||(j=ie),j===void 0&&(j=!1),h.addEventListener(_.toString(),A,j);else if(h.attachEvent)h.attachEvent(Ba(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ja(){function h(y){return _.call(h.src,h.listener,y)}const _=ld;return h}function za(h,_,y,A,j){if(Array.isArray(_))for(var $=0;$<_.length;$++)za(h,_[$],y,A,j);else A=g(A)?!!A.capture:!!A,y=mc(y),h&&h[yt]?(h=h.i,_=String(_).toString(),_ in h.g&&($=h.g[_],y=Pn($,y,A,j),-1<y&&($e($[y]),Array.prototype.splice.call($,y,1),$.length==0&&(delete h.g[_],h.h--)))):h&&(h=cl(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Pn(_,y,A,j)),(y=-1<h?_[h]:null)&&Ur(y))}function Ur(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[yt])$i(_.i,h);else{var y=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(y,A,h.capture):_.detachEvent?_.detachEvent(Ba(y),A):_.addListener&&_.removeListener&&_.removeListener(A),(y=cl(_))?($i(y,h),y.h==0&&(y.src=null,_[Vs]=null)):$e(h)}}}function Ba(h){return h in js?js[h]:js[h]="on"+h}function ld(h,_){if(h.da)h=!0;else{_=new Se(_,this);var y=h.listener,A=h.ha||h.src;h.fa&&Ur(h),h=y.call(A,_)}return h}function cl(h){return h=h[Vs],h instanceof fn?h:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function mc(h){return typeof h=="function"?h:(h[vn]||(h[vn]=function(_){return h.handleEvent(_)}),h[vn])}function At(){de.call(this),this.i=new fn(this),this.M=this,this.F=null}D(At,de),At.prototype[yt]=!0,At.prototype.removeEventListener=function(h,_,y,A){za(this,h,_,y,A)};function Dt(h,_){var y,A=h.F;if(A)for(y=[];A;A=A.F)y.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new oe(_,h);else if(_ instanceof oe)_.target=_.target||h;else{var j=_;_=new oe(A,h),N(_,j)}if(j=!0,y)for(var $=y.length-1;0<=$;$--){var ie=_.g=y[$];j=Yi(ie,A,!0,_)&&j}if(ie=_.g=h,j=Yi(ie,A,!0,_)&&j,j=Yi(ie,A,!1,_)&&j,y)for($=0;$<y.length;$++)ie=_.g=y[$],j=Yi(ie,A,!1,_)&&j}At.prototype.N=function(){if(At.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],A=0;A<y.length;A++)$e(y[A]);delete h.g[_],h.h--}}this.F=null},At.prototype.K=function(h,_,y,A){return this.i.add(String(h),_,!1,y,A)},At.prototype.L=function(h,_,y,A){return this.i.add(String(h),_,!0,y,A)};function Yi(h,_,y,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var j=!0,$=0;$<_.length;++$){var ie=_[$];if(ie&&!ie.da&&ie.capture==y){var ke=ie.listener,Rt=ie.ha||ie.src;ie.fa&&$i(h.i,ie),j=ke.call(Rt,A)!==!1&&j}}return j&&!A.defaultPrevented}function pc(h,_,y){if(typeof h=="function")y&&(h=S(h,y));else if(h&&typeof h.handleEvent=="function")h=S(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function hl(h){h.g=pc(()=>{h.g=null,h.i&&(h.i=!1,hl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class ud extends de{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(h){de.call(this),this.h=h,this.g={}}D(Vr,de);var zs=[];function en(h){ye(h.g,function(_,y){this.g.hasOwnProperty(y)&&Ur(_)},h),h.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),en(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fl=d.JSON.stringify,Ei=d.JSON.parse,dn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function dl(){}dl.prototype.h=null;function gc(h){return h.h||(h.h=h.i())}function _c(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bs(){oe.call(this,"d")}D(Bs,oe);function ii(){oe.call(this,"c")}D(ii,oe);var Ln={},Fs=null;function Fa(){return Fs=Fs||new At}Ln.La="serverreachability";function ml(h){oe.call(this,Ln.La,h)}D(ml,oe);function Hs(h){const _=Fa();Dt(_,new ml(_))}Ln.STAT_EVENT="statevent";function Ha(h,_){oe.call(this,Ln.STAT_EVENT,h),this.stat=_}D(Ha,oe);function pt(h){const _=Fa();Dt(_,new Ha(_,h))}Ln.Ma="timingevent";function yc(h,_){oe.call(this,Ln.Ma,h),this.size=_}D(yc,oe);function qs(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gs(){this.g=!0}Gs.prototype.xa=function(){this.g=!1};function vc(h,_,y,A,j,$){h.info(function(){if(h.g)if($)for(var ie="",ke=$.split("&"),Rt=0;Rt<ke.length;Rt++){var Me=ke[Rt].split("=");if(1<Me.length){var Pt=Me[0];Me=Me[1];var xt=Pt.split("_");ie=2<=xt.length&&xt[1]=="type"?ie+(Pt+"="+Me+"&"):ie+(Pt+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+A+") [attempt "+j+"]: "+_+`
`+y+`
`+ie})}function Ec(h,_,y,A,j,$,ie){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+j+"]: "+_+`
`+y+`
`+$+" "+ie})}function $s(h,_,y,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+kt(h,y)+(A?" "+A:"")})}function bi(h,_){h.info(function(){return"TIMEOUT: "+_})}Gs.prototype.info=function(){};function kt(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var A=y[h];if(!(2>A.length)){var j=A[1];if(Array.isArray(j)&&!(1>j.length)){var $=j[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<j.length;ie++)j[ie]=""}}}}return fl(y)}catch{return _}}var Ct={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function qa(){}D(qa,dl),qa.prototype.g=function(){return new XMLHttpRequest},qa.prototype.i=function(){return{}},jr=new qa;function wi(h,_,y,A){this.j=h,this.i=_,this.l=y,this.R=A||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var Ks={},zr={};function si(h,_,y){h.L=1,h.v=Hr(ct(_)),h.m=y,h.P=!0,Qi(h,null)}function Qi(h,_){h.F=Date.now(),at(h),h.A=ct(h.v);var y=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Ji(y.i,"t",A),h.C=0,y=h.j.J,h.h=new pl,h.g=Mc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new ud(S(h.Y,h,h.g),h.O)),_=h.U,y=h.g,A=h.ca;var j="readystatechange";Array.isArray(j)||(j&&(zs[0]=j.toString()),j=zs);for(var $=0;$<j.length;$++){var ie=Ki(y,j[$],A||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Hs(),vc(h.i,h.u,h.A,h.l,h.R,h.m)}wi.prototype.ca=function(h){h=h.target;const _=this.M;_&&Bn(h)==3?_.j():this.Y(h)},wi.prototype.Y=function(h){try{if(h==this.g)e:{const xt=Bn(this.g);var _=this.g.Ba();const is=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Cc(this.g)))){this.J||xt!=4||_==7||(_==8||0>=is?Hs(3):Hs(2)),Ga(this);var y=this.g.Z();this.X=y;t:if(Ys(this)){var A=Cc(this.g);h="";var j=A.length,$=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),An(this);var ie="";break t}this.h.i=new d.TextDecoder}for(_=0;_<j;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!($&&_==j-1)});A.length=0,this.h.g+=h,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=y==200,Ec(this.i,this.u,this.A,this.l,this.R,xt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,Rt=this.g;if((ke=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(ke)){var Me=ke;break t}}Me=null}if(y=Me)$s(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cn(this,y);else{this.o=!1,this.s=3,pt(12),En(this),An(this);break e}}if(this.P){y=!0;let Gt;for(;!this.J&&this.C<ie.length;)if(Gt=Ws(this,ie),Gt==zr){xt==4&&(this.s=4,pt(14),y=!1),$s(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Ks){this.s=4,pt(15),$s(this.i,this.l,ie,"[Invalid Chunk]"),y=!1;break}else $s(this.i,this.l,Gt,null),Cn(this,Gt);if(Ys(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||ie.length!=0||this.h.h||(this.s=1,pt(16),y=!1),this.o=this.o&&y,!y)$s(this.i,this.l,ie,"[Invalid Chunked Response]"),En(this),An(this);else if(0<ie.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Qr(Pt),Pt.M=!0,pt(11))}}else $s(this.i,this.l,ie,null),Cn(this,ie);xt==4&&En(this),this.o&&!this.J&&(xt==4?Oc(this.j,this):(this.o=!1,at(this)))}else pd(this.g),y==400&&0<ie.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),En(this),An(this)}}}catch{}finally{}};function Ys(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ws(h,_){var y=h.C,A=_.indexOf(`
`,y);return A==-1?zr:(y=Number(_.substring(y,A)),isNaN(y)?Ks:(A+=1,A+y>_.length?zr:(_=_.slice(A,A+y),h.C=A+y,_)))}wi.prototype.cancel=function(){this.J=!0,En(this)};function at(h){h.S=Date.now()+h.I,gl(h,h.I)}function gl(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=qs(S(h.ba,h),_)}function Ga(h){h.B&&(d.clearTimeout(h.B),h.B=null)}wi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(bi(this.i,this.A),this.L!=2&&(Hs(),pt(17)),En(this),this.s=2,An(this)):gl(this,this.S-h)};function An(h){h.j.G==0||h.J||Oc(h.j,h)}function En(h){Ga(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,en(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Cn(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||Qs(y.h,h))){if(!h.K&&Qs(y.h,h)&&y.G==3){try{var A=y.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var j=A;if(j[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)to(y),Ja(y);else break e;Rl(y),pt(18)}}else y.za=j[1],0<y.za-y.T&&37500>j[2]&&y.F&&y.v==0&&!y.C&&(y.C=qs(S(y.Za,y),6e3));if(1>=Tc(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ns(y,11)}else if((h.K||y.g==h)&&to(y),!ee(_))for(j=y.Da.g.parse(_),_=0;_<j.length;_++){let Me=j[_];if(y.T=Me[0],Me=Me[1],y.G==2)if(Me[0]=="c"){y.K=Me[1],y.ia=Me[2];const Pt=Me[3];Pt!=null&&(y.la=Pt,y.j.info("VER="+y.la));const xt=Me[4];xt!=null&&(y.Aa=xt,y.j.info("SVER="+y.Aa));const is=Me[5];is!=null&&typeof is=="number"&&0<is&&(A=1.5*is,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Gt=h.g;if(Gt){const Ni=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var $=A.h;$.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Xs($,$.h),$.h=null))}if(A.D){const Il=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Il&&(A.ya=Il,ze(A.I,A.D,Il))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var ie=h;if(A.qa=kc(A,A.J?A.ia:null,A.W),ie.K){Un(A.h,ie);var ke=ie,Rt=A.L;Rt&&(ke.I=Rt),ke.B&&(Ga(ke),at(ke)),A.g=ie}else Ic(A);0<y.i.length&&eo(y)}else Me[0]!="stop"&&Me[0]!="close"||ns(y,7);else y.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?ns(y,7):Al(y):Me[0]!="noop"&&y.l&&y.l.ta(Me),y.v=0)}}Hs(4)}catch{}}var cd=class{constructor(h,_){this.g=h,this.map=_}};function _l(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function yl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Tc(h){return h.h?1:h.g?h.g.size:0}function Qs(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Xs(h,_){h.g?h.g.add(_):h.h=_}function Un(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}_l.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function mn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return G(h.i)}function bc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],y=h.length,A=0;A<y;A++)_.push(h[A]);return _}_=[],y=0;for(A in h)_[y++]=h[A];return _}function hd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const A in h)_[y++]=A;return _}}}function Br(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=hd(h),A=bc(h),j=A.length,$=0;$<j;$++)_.call(void 0,A[$],y&&y[$],h)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $a(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var A=h[y].indexOf("="),j=null;if(0<=A){var $=h[y].substring(0,A);j=h[y].substring(A+1)}else $=h[y];_($,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Xi(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Xi){this.h=h.h,Zs(this,h.j),this.o=h.o,this.g=h.g,Fr(this,h.s),this.l=h.l;var _=h.i,y=new Si;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ka(this,y),this.m=h.m}else h&&(_=String(h).match(vl))?(this.h=!1,Zs(this,_[1]||"",!0),this.o=Js(_[2]||""),this.g=Js(_[3]||"",!0),Fr(this,_[4]),this.l=Js(_[5]||"",!0),Ka(this,_[6]||"",!0),this.m=Js(_[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Xi.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Vn(_,El,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Vn(_,El,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Vn(y,y.charAt(0)=="/"?Tl:wc,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Vn(y,md)),h.join("")};function ct(h){return new Xi(h)}function Zs(h,_,y){h.j=y?Js(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Fr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ka(h,_,y){_ instanceof Si?(h.i=_,bl(h.i,h.h)):(y||(_=Vn(_,dd)),h.i=new Si(_,h.h))}function ze(h,_,y){h.i.set(_,y)}function Hr(h){return ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Js(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Vn(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,fd),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function fd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var El=/[#\/\?@]/g,wc=/[#\?:]/g,Tl=/[#\?]/g,dd=/[#\?@]/g,md=/#/g;function Si(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function jn(h){h.g||(h.g=new Map,h.h=0,h.i&&$a(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}n=Si.prototype,n.add=function(h,_){jn(this),this.i=null,h=es(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Ya(h,_){jn(h),_=es(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Zi(h,_){return jn(h),_=es(h,_),h.g.has(_)}n.forEach=function(h,_){jn(this),this.g.forEach(function(y,A){y.forEach(function(j){h.call(_,j,A,this)},this)},this)},n.na=function(){jn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let A=0;A<_.length;A++){const j=h[A];for(let $=0;$<j.length;$++)y.push(_[A])}return y},n.V=function(h){jn(this);let _=[];if(typeof h=="string")Zi(this,h)&&(_=_.concat(this.g.get(es(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},n.set=function(h,_){return jn(this),this.i=null,h=es(this,h),Zi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Ji(h,_,y){Ya(h,_),0<y.length&&(h.i=null,h.g.set(es(h,_),G(y)),h.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var A=_[y];const $=encodeURIComponent(String(A)),ie=this.V(A);for(A=0;A<ie.length;A++){var j=$;ie[A]!==""&&(j+="="+encodeURIComponent(String(ie[A]))),h.push(j)}}return this.i=h.join("&")};function es(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function bl(h,_){_&&!h.j&&(jn(h),h.i=null,h.g.forEach(function(y,A){var j=A.toLowerCase();A!=j&&(Ya(this,A),Ji(this,j,y))},h)),h.j=_}function Sc(h,_){const y=new Gs;if(d.Image){const A=new Image;A.onload=I(zn,y,"TestLoadImage: loaded",!0,_,A),A.onerror=I(zn,y,"TestLoadImage: error",!1,_,A),A.onabort=I(zn,y,"TestLoadImage: abort",!1,_,A),A.ontimeout=I(zn,y,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function qr(h,_){const y=new Gs,A=new AbortController,j=setTimeout(()=>{A.abort(),zn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then($=>{clearTimeout(j),$.ok?zn(y,"TestPingServer: ok",!0,_):zn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(j),zn(y,"TestPingServer: error",!1,_)})}function zn(h,_,y,A,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),A(y)}catch{}}function Gr(){this.g=new dn}function Ai(h,_,y){const A=y||"";try{Br(h,function(j,$){let ie=j;g(j)&&(ie=fl(j)),_.push(A+$+"="+encodeURIComponent(ie))})}catch(j){throw _.push(A+"type="+encodeURIComponent("_badmap")),j}}function er(h){this.l=h.Ub||null,this.j=h.eb||!1}D(er,dl),er.prototype.g=function(){return new ts(this.l,this.j)},er.prototype.i=function(h){return function(){return h}}({});function ts(h,_){At.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ts,At),n=ts.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ri(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ci(this):Ri(this),this.readyState==3&&wl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ci(this))},n.Qa=function(h){this.g&&(this.response=h,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ri(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function Ri(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Sl(h){let _="";return ye(h,function(y,A){_+=A,_+=":",_+=y,_+=`\r
`}),_}function Mt(h,_,y){e:{for(A in y){var A=!1;break e}A=!0}A||(y=Sl(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):ze(h,_,y))}function qe(h){At.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(qe,At);var Wa=/^https?$/i,$r=["POST","PUT"];n=qe.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?gc(this.o):gc(jr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch($){Ac(this,$);return}if(h=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var j in A)y.set(j,A[j]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const $ of A.keys())y.set($,A.get($));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find($=>$.toLowerCase()=="content-type"),j=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call($r,_,void 0))||A||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of y)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kr(this),this.u=!0,this.g.send(h),this.u=!1}catch($){Ac(this,$)}};function Ac(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Qa(h),xi(h)}function Qa(h){h.A||(h.A=!0,Dt(h,"complete"),Dt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Dt(this,"complete"),Dt(this,"abort"),xi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xi(this,!0)),qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xa(this):this.bb())},n.bb=function(){Xa(this)};function Xa(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Bn(h)!=4||h.Z()!=2)){if(h.u&&Bn(h)==4)pc(h.Ea,0,h);else if(Dt(h,"readystatechange"),Bn(h)==4){h.h=!1;try{const ie=h.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var A;if(A=ie===0){var j=String(h.D).match(vl)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),A=!Wa.test(j?j.toLowerCase():"")}y=A}if(y)Dt(h,"complete"),Dt(h,"success");else{h.m=6;try{var $=2<Bn(h)?h.g.statusText:""}catch{$=""}h.l=$+" ["+h.Z()+"]",Qa(h)}}finally{xi(h)}}}}function xi(h,_){if(h.g){Kr(h);const y=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Dt(h,"ready");try{y.onreadystatechange=A}catch{}}}function Kr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Bn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ei(_)}};function Cc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function pd(h){const _={};h=(h.g&&2<=Bn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(ee(h[A]))continue;var y=P(h[A]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const $=_[j]||[];_[j]=$,$.push(y)}M(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yr(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function Za(h){this.Aa=0,this.i=[],this.j=new Gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yr("baseRetryDelayMs",5e3,h),this.cb=Yr("retryDelaySeedMs",1e4,h),this.Wa=Yr("forwardChannelMaxRetries",2,h),this.wa=Yr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new _l(h&&h.concurrentRequestLimit),this.Da=new Gr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Za.prototype,n.la=8,n.G=1,n.connect=function(h,_,y,A){pt(0),this.W=h,this.H=_||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=kc(this,null,this.W),eo(this)};function Al(h){if(Rc(h),h.G==3){var _=h.U++,y=ct(h.I);if(ze(y,"SID",h.K),ze(y,"RID",_),ze(y,"TYPE","terminate"),Wr(h,y),_=new wi(h,h.j,_),_.L=2,_.v=Hr(ct(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=Mc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),at(_)}Dc(h)}function Ja(h){h.g&&(Qr(h),h.g.cancel(),h.g=null)}function Rc(h){Ja(h),h.u&&(d.clearTimeout(h.u),h.u=null),to(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function eo(h){if(!yl(h.h)&&!h.s){h.s=!0;var _=h.Ga;ve||k(),ge||(ve(),ge=!0),He.add(_,h),h.B=0}}function gd(h,_){return Tc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=qs(S(h.Ga,h,_),xl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const j=new wi(this,this.j,h);let $=this.o;if(this.S&&($?($=R($),N($,this.S)):$=this.S),this.m!==null||this.O||(j.H=$,$=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=xc(this,j,_),y=ct(this.I),ze(y,"RID",h),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Wr(this,y),$&&(this.O?_="headers="+encodeURIComponent(String(Sl($)))+"&"+_:this.m&&Mt(y,this.m,$)),Xs(this.h,j),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",_),ze(y,"SID","null"),j.T=!0,si(j,y,null)):si(j,y,_),this.G=2}}else this.G==3&&(h?Cl(this,h):this.i.length==0||yl(this.h)||Cl(this))};function Cl(h,_){var y;_?y=_.l:y=h.U++;const A=ct(h.I);ze(A,"SID",h.K),ze(A,"RID",y),ze(A,"AID",h.T),Wr(h,A),h.m&&h.o&&Mt(A,h.m,h.o),y=new wi(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=xc(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Xs(h.h,y),si(y,A,_)}function Wr(h,_){h.H&&ye(h.H,function(y,A){ze(_,A,y)}),h.l&&Br({},function(y,A){ze(_,A,y)})}function xc(h,_,y){y=Math.min(h.i.length,y);var A=h.l?S(h.l.Na,h.l,h):null;e:{var j=h.i;let $=-1;for(;;){const ie=["count="+y];$==-1?0<y?($=j[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let ke=!0;for(let Rt=0;Rt<y;Rt++){let Me=j[Rt].g;const Pt=j[Rt].map;if(Me-=$,0>Me)$=Math.max(0,j[Rt].g-100),ke=!1;else try{Ai(Pt,ie,"req"+Me+"_")}catch{A&&A(Pt)}}if(ke){A=ie.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,A}function Ic(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ve||k(),ge||(ve(),ge=!0),He.add(_,h),h.v=0}}function Rl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=qs(S(h.Fa,h),xl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Nc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=qs(S(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Ja(this),Nc(this))};function Qr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Nc(h){h.g=new wi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=ct(h.qa);ze(_,"RID","rpc"),ze(_,"SID",h.K),ze(_,"AID",h.T),ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&ze(_,"TO",h.ja),ze(_,"TYPE","xmlhttp"),Wr(h,_),h.m&&h.o&&Mt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=Hr(ct(_)),y.m=null,y.P=!0,Qi(y,h)}n.Za=function(){this.C!=null&&(this.C=null,Ja(this),Rl(this),pt(19))};function to(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Oc(h,_){var y=null;if(h.g==_){to(h),Qr(h),h.g=null;var A=2}else if(Qs(h.h,_))y=_.D,Un(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var j=h.B;A=Fa(),Dt(A,new yc(A,y)),eo(h)}else Ic(h);else if(j=_.s,j==3||j==0&&0<_.X||!(A==1&&gd(h,_)||A==2&&Rl(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),j){case 1:ns(h,5);break;case 4:ns(h,10);break;case 3:ns(h,6);break;default:ns(h,2)}}}function xl(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function ns(h,_){if(h.j.info("Error code "+_),_==2){var y=S(h.fb,h),A=h.Xa;const j=!A;A=new Xi(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Zs(A,"https"),Hr(A),j?Sc(A.toString(),y):qr(A.toString(),y)}else pt(2);h.G=0,h.l&&h.l.sa(_),Dc(h),Rc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Dc(h){if(h.G=0,h.ka=[],h.l){const _=mn(h.h);(_.length!=0||h.i.length!=0)&&(B(h.ka,_),B(h.ka,h.i),h.h.i.length=0,G(h.i),h.i.length=0),h.l.ra()}}function kc(h,_,y){var A=y instanceof Xi?ct(y):new Xi(y);if(A.g!="")_&&(A.g=_+"."+A.g),Fr(A,A.s);else{var j=d.location;A=j.protocol,_=_?_+"."+j.hostname:j.hostname,j=+j.port;var $=new Xi(null);A&&Zs($,A),_&&($.g=_),j&&Fr($,j),y&&($.l=y),A=$}return y=h.D,_=h.ya,y&&_&&ze(A,y,_),ze(A,"VER",h.la),Wr(h,A),A}function Mc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new qe(new er({eb:y})):new qe(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function no(){}no.prototype.g=function(h,_){return new pn(h,_)};function pn(h,_){At.call(this),this.g=new Za(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ee(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ee(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ii(this)}D(pn,At),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Al(this.g)},pn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=fl(h),h=y);_.i.push(new cd(_.Ya++,h)),_.G==3&&eo(_)},pn.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,pn.aa.N.call(this)};function Lc(h){Bs.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}D(Lc,Bs);function Uc(){ii.call(this),this.status=1}D(Uc,ii);function Ii(h){this.g=h}D(Ii,Pc),Ii.prototype.ua=function(){Dt(this.g,"a")},Ii.prototype.ta=function(h){Dt(this.g,new Lc(h))},Ii.prototype.sa=function(h){Dt(this.g,new Uc)},Ii.prototype.ra=function(){Dt(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,uw=function(){return new no},lw=function(){return Fa()},ow=Ln,Yp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ct.NO_ERROR=0,Ct.TIMEOUT=8,Ct.HTTP_ERROR=6,Xh=Ct,Wi.COMPLETE="complete",aw=Wi,_c.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",At.prototype.listen=At.prototype.K,Cu=_c,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,rw=qe}).apply(typeof Uh<"u"?Uh:typeof self<"u"?self:typeof window<"u"?window:{});const WE="@firebase/firestore",QE="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Zu("@firebase/firestore");function Oo(){return Ca.logLevel}function he(n,...e){if(Ca.logLevel<=Ie.DEBUG){const t=e.map(t_);Ca.debug(`Firestore (${sl}): ${n}`,...t)}}function Ra(n,...e){if(Ca.logLevel<=Ie.ERROR){const t=e.map(t_);Ca.error(`Firestore (${sl}): ${n}`,...t)}}function Wf(n,...e){if(Ca.logLevel<=Ie.WARN){const t=e.map(t_);Ca.warn(`Firestore (${sl}): ${n}`,...t)}}function t_(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n="Unexpected state"){const e=`FIRESTORE (${sl}) INTERNAL ASSERTION FAILED: `+n;throw Ra(e),new Error(e)}function mt(n,e){n||Ne()}function et(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends ni{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rn.UNAUTHENTICATED))}shutdown(){}}class c4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class h4{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){mt(this.o===void 0);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new Ta;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ta,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ta)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(mt(typeof s.accessToken=="string"),new cw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string"),new rn(e)}}class f4{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class d4{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new f4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){mt(this.o===void 0);const s=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,he("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new XE(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(mt(typeof t.token=="string"),this.R=t.token,new XE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=p4(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ke(n,e){return n<e?-1:n>e?1:0}function qo(n,e,t){return n.length===e.length&&n.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=-62135596800,JE=1e6;class qt{static now(){return qt.fromMillis(Date.now())}static fromDate(e){return qt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*JE);return new qt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ZE)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/JE}_compareTo(e){return this.seconds===e.seconds?Ke(this.nanoseconds,e.nanoseconds):Ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ZE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static fromTimestamp(e){return new st(e)}static min(){return new st(new qt(0,0))}static max(){return new st(new qt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="__name__";class Li{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ne(),s===void 0?s=e.length-t:s>e.length-t&&Ne(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Li.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Li?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Li.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Li.isNumericId(e),a=Li.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Li.extractNumericId(e).compare(Li.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return e_.fromString(e.substring(4,e.length-2))}}class wt extends Li{construct(e,t,s){return new wt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Ee(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new wt(t)}static emptyPath(){return new wt([])}}const g4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends Li{construct(e,t,s){return new Xt(e,t,s)}static isValidIdentifier(e){return g4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===eT}static keyField(){return new Xt([eT])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new Ee(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new Ee(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Ee(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new Ee(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(t)}static emptyPath(){return new Xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.path=e}static fromPath(e){return new Ce(wt.fromString(e))}static fromName(e){return new Ce(wt.fromString(e).popFirst(5))}static empty(){return new Ce(wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&wt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return wt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ce(new wt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=-1;function _4(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,a=st.fromTimestamp(s===1e9?new qt(t+1,0):new qt(t,s));return new Ir(a,Ce.empty(),e)}function y4(n){return new Ir(n.readTime,n.key,Fu)}class Ir{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ir(st.min(),Ce.empty(),Fu)}static max(){return new Ir(st.max(),Ce.empty(),Fu)}}function v4(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ce.comparator(n.documentKey,e.documentKey),t!==0?t:Ke(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==E4)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,s)=>{t(e)})}static reject(e){return new Z((t,s)=>{s(e)})}static waitFor(e){return new Z((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},m=>s(m))}),c=!0,l===a&&t()})}static or(e){let t=Z.resolve(!1);for(const s of e)t=t.next(a=>a?Z.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new Z((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(T=>{c[g]=T,++d,d===l&&s(c)},T=>a(T))}})}static doWhile(e,t){return new Z((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function b4(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ic(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}i_.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=-1;function r_(n){return n==null}function gf(n){return n===0&&1/n==-1/0}function w4(n){return typeof n=="number"&&Number.isInteger(n)&&!gf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="";function S4(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=tT(e)),e=A4(n.get(t),e);return tT(e)}function A4(n,e){let t=e;const s=n.length;for(let a=0;a<s;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case fw:t+="";break;default:t+=l}}return t}function tT(n){return n+fw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rl(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi=class Wp{constructor(e,t){this.comparator=e,this.root=t||Rr.EMPTY}insert(e,t){return new Wp(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rr.BLACK,null,null))}remove(e){return new Wp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vh(this.root,e,this.comparator,!0)}},Vh=class{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Rr=class vs{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??vs.RED,this.left=a??vs.EMPTY,this.right=l??vs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new vs(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return vs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return vs.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ne();const e=this.left.check();if(e!==this.right.check())throw Ne();return e+(this.isRed()?0:1)}};Rr.EMPTY=null,Rr.RED=!0,Rr.BLACK=!1;Rr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne()}get value(){throw Ne()}get color(){throw Ne()}get left(){throw Ne()}get right(){throw Ne()}copy(e,t,s,a,l){return this}insert(e,t,s){return new Rr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.comparator=e,this.data=new yi(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iT(this.data.getIterator())}getIteratorFrom(e){return new iT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Zt(this.comparator);return t.data=e,t}}class iT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new fi([])}unionWith(e){let t=new Zt(Xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new fi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new C4("Invalid base64 string: "+l):l}}(e);return new zi(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new zi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}zi.EMPTY_BYTE_STRING=new zi("");const R4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xa(n){if(mt(!!n),typeof n=="string"){let e=0;const t=R4.exec(n);if(mt(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Wt(n.seconds),nanos:Wt(n.nanos)}}function Wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Go(n){return typeof n=="string"?zi.fromBase64String(n):zi.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="server_timestamp",pw="__type__",gw="__previous_value__",_w="__local_write_time__";function a_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pw])===null||t===void 0?void 0:t.stringValue)===mw}function o_(n){const e=n.mapValue.fields[gw];return a_(e)?o_(e):e}function _f(n){const e=xa(n.mapValue.fields[_w].timestampValue);return new qt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,t,s,a,l,c,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g}}const yf="(default)";class vf{constructor(e,t){this.projectId=e,this.database=t||yf}static empty(){return new vf("","")}get isDefaultDatabase(){return this.database===yf}isEqual(e){return e instanceof vf&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="__type__",I4="__max__",jh={mapValue:{}},vw="__vector__",Qp="value";function Ia(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?a_(n)?4:O4(n)?9007199254740991:N4(n)?10:11:Ne()}function Bi(n,e){if(n===e)return!0;const t=Ia(n);if(t!==Ia(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _f(n).isEqual(_f(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=xa(a.timestampValue),d=xa(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Go(a.bytesValue).isEqual(Go(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return Wt(a.geoPointValue.latitude)===Wt(l.geoPointValue.latitude)&&Wt(a.geoPointValue.longitude)===Wt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Wt(a.integerValue)===Wt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Wt(a.doubleValue),d=Wt(l.doubleValue);return c===d?gf(c)===gf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return qo(n.arrayValue.values||[],e.arrayValue.values||[],Bi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(nT(c)!==nT(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!Bi(c[m],d[m])))return!1;return!0}(n,e);default:return Ne()}}function Hu(n,e){return(n.values||[]).find(t=>Bi(t,e))!==void 0}function $o(n,e){if(n===e)return 0;const t=Ia(n),s=Ia(e);if(t!==s)return Ke(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ke(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Wt(l.integerValue||l.doubleValue),m=Wt(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(n,e);case 3:return sT(n.timestampValue,e.timestampValue);case 4:return sT(_f(n),_f(e));case 5:return Ke(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Go(l),m=Go(c);return d.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const T=Ke(d[g],m[g]);if(T!==0)return T}return Ke(d.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ke(Wt(l.latitude),Wt(c.latitude));return d!==0?d:Ke(Wt(l.longitude),Wt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return rT(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,g,T;const b=l.fields||{},S=c.fields||{},I=(d=b[Qp])===null||d===void 0?void 0:d.arrayValue,D=(m=S[Qp])===null||m===void 0?void 0:m.arrayValue,G=Ke(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((T=D==null?void 0:D.values)===null||T===void 0?void 0:T.length)||0);return G!==0?G:rT(I,D)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===jh.mapValue&&c===jh.mapValue)return 0;if(l===jh.mapValue)return 1;if(c===jh.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},T=Object.keys(g);m.sort(),T.sort();for(let b=0;b<m.length&&b<T.length;++b){const S=Ke(m[b],T[b]);if(S!==0)return S;const I=$o(d[m[b]],g[T[b]]);if(I!==0)return I}return Ke(m.length,T.length)}(n.mapValue,e.mapValue);default:throw Ne()}}function sT(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ke(n,e);const t=xa(n),s=xa(e),a=Ke(t.seconds,s.seconds);return a!==0?a:Ke(t.nanos,s.nanos)}function rT(n,e){const t=n.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=$o(t[a],s[a]);if(l)return l}return Ke(t.length,s.length)}function Ko(n){return Xp(n)}function Xp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=xa(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Go(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Xp(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Xp(t.fields[c])}`;return a+"}"}(n.mapValue):Ne()}function Zh(n){switch(Ia(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=o_(n);return e?16+Zh(e):16;case 5:return 2*n.stringValue.length;case 6:return Go(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Zh(l),0)}(n.arrayValue);case 10:case 11:return function(s){let a=0;return rl(s.fields,(l,c)=>{a+=l.length+Zh(c)}),a}(n.mapValue);default:throw Ne()}}function Zp(n){return!!n&&"integerValue"in n}function l_(n){return!!n&&"arrayValue"in n}function Jh(n){return!!n&&"mapValue"in n}function N4(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[yw])===null||t===void 0?void 0:t.stringValue)===vw}function Nu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return rl(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Nu(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function O4(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===I4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.value=e}static empty(){return new ci({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Jh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nu(t)}setAll(e){let t=Xt.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Nu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Jh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Jh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){rl(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new ci(Nu(this.value))}}function Ew(n){const e=[];return rl(n.fields,(t,s)=>{const a=new Xt([t]);if(Jh(s)){const l=Ew(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new fi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new ui(e,0,st.min(),st.min(),st.min(),ci.empty(),0)}static newFoundDocument(e,t,s,a){return new ui(e,1,t,st.min(),s,a,0)}static newNoDocument(e,t){return new ui(e,2,t,st.min(),st.min(),ci.empty(),0)}static newUnknownDocument(e,t){return new ui(e,3,t,st.min(),st.min(),ci.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(st.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ci.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ui&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ui(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t){this.position=e,this.inclusive=t}}function aT(n,e,t){let s=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?s=Ce.comparator(Ce.fromName(c.referenceValue),t.key):s=$o(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function oT(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Bi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t="asc"){this.field=e,this.dir=t}}function D4(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{}class Ft extends Tw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new M4(e,t,s):t==="array-contains"?new U4(e,s):t==="in"?new V4(e,s):t==="not-in"?new j4(e,s):t==="array-contains-any"?new z4(e,s):new Ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new P4(e,s):new L4(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($o(t,this.value)):t!==null&&Ia(this.value)===Ia(t)&&this.matchesComparison($o(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends Tw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Nr(e,t)}matches(e){return bw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function bw(n){return n.op==="and"}function ww(n){return k4(n)&&bw(n)}function k4(n){for(const e of n.filters)if(e instanceof Nr)return!1;return!0}function Jp(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+Ko(n.value);if(ww(n))return n.filters.map(e=>Jp(e)).join(",");{const e=n.filters.map(t=>Jp(t)).join(",");return`${n.op}(${e})`}}function Sw(n,e){return n instanceof Ft?function(s,a){return a instanceof Ft&&s.op===a.op&&s.field.isEqual(a.field)&&Bi(s.value,a.value)}(n,e):n instanceof Nr?function(s,a){return a instanceof Nr&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&Sw(c,a.filters[d]),!0):!1}(n,e):void Ne()}function Aw(n){return n instanceof Ft?function(t){return`${t.field.canonicalString()} ${t.op} ${Ko(t.value)}`}(n):n instanceof Nr?function(t){return t.op.toString()+" {"+t.getFilters().map(Aw).join(" ,")+"}"}(n):"Filter"}class M4 extends Ft{constructor(e,t,s){super(e,t,s),this.key=Ce.fromName(s.referenceValue)}matches(e){const t=Ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class P4 extends Ft{constructor(e,t){super(e,"in",t),this.keys=Cw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class L4 extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=Cw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Ce.fromName(s.referenceValue))}class U4 extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return l_(t)&&Hu(t.arrayValue,this.value)}}class V4 extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Hu(this.value.arrayValue,t)}}class j4 extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Hu(this.value.arrayValue,t)}}class z4 extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!l_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Hu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function lT(n,e=null,t=[],s=[],a=null,l=null,c=null){return new B4(n,e,t,s,a,l,c)}function u_(n){const e=et(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Jp(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),r_(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ko(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ko(s)).join(",")),e.le=t}return e.le}function c_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!D4(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!oT(n.startAt,e.startAt)&&oT(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function F4(n,e,t,s,a,l,c,d){return new Qf(n,e,t,s,a,l,c,d)}function H4(n){return new Qf(n)}function uT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function q4(n){return n.collectionGroup!==null}function Ou(n){const e=et(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Zt(Xt.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Tf(l,s))}),t.has(Xt.keyField().canonicalString())||e.he.push(new Tf(Xt.keyField(),s))}return e.he}function ba(n){const e=et(n);return e.Pe||(e.Pe=G4(e,Ou(n))),e.Pe}function G4(n,e){if(n.limitType==="F")return lT(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Tf(a.field,l)});const t=n.endAt?new Ef(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ef(n.startAt.position,n.startAt.inclusive):null;return lT(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function eg(n,e,t){return new Qf(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Rw(n,e){return c_(ba(n),ba(e))&&n.limitType===e.limitType}function xw(n){return`${u_(ba(n))}|lt:${n.limitType}`}function yu(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Aw(a)).join(", ")}]`),r_(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Ko(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Ko(a)).join(",")),`Target(${s})`}(ba(n))}; limitType=${n.limitType})`}function h_(n,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Ce.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,a){for(const l of Ou(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(s,a){return!(s.startAt&&!function(c,d,m){const g=aT(c,d,m);return c.inclusive?g<=0:g<0}(s.startAt,Ou(s),a)||s.endAt&&!function(c,d,m){const g=aT(c,d,m);return c.inclusive?g>=0:g>0}(s.endAt,Ou(s),a))}(n,e)}function $4(n){return(e,t)=>{let s=!1;for(const a of Ou(n)){const l=K4(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function K4(n,e,t){const s=n.field.isKeyField()?Ce.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?$o(m,g):Ne()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){rl(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return dw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=new yi(Ce.comparator);function bf(){return Y4}const Iw=new yi(Ce.comparator);function zh(...n){let e=Iw;for(const t of n)e=e.insert(t.key,t);return e}function Nw(n){let e=Iw;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function va(){return Du()}function Ow(){return Du()}function Du(){return new Ma(n=>n.toString(),(n,e)=>n.isEqual(e))}const W4=new yi(Ce.comparator),Q4=new Zt(Ce.comparator);function an(...n){let e=Q4;for(const t of n)e=e.add(t);return e}const X4=new Zt(Ke);function Z4(){return X4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gf(e)?"-0":e}}function Dw(n){return{integerValue:""+n}}function J4(n,e){return w4(e)?Dw(e):f_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this._=void 0}}function ek(n,e,t){return n instanceof wf?function(a,l){const c={fields:{[pw]:{stringValue:mw},[_w]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&a_(l)&&(l=o_(l)),l&&(c.fields[gw]=l),{mapValue:c}}(t,e):n instanceof qu?Mw(n,e):n instanceof Gu?Pw(n,e):function(a,l){const c=kw(a,l),d=cT(c)+cT(a.Ie);return Zp(c)&&Zp(a.Ie)?Dw(d):f_(a.serializer,d)}(n,e)}function tk(n,e,t){return n instanceof qu?Mw(n,e):n instanceof Gu?Pw(n,e):t}function kw(n,e){return n instanceof Sf?function(s){return Zp(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class wf extends Xf{}class qu extends Xf{constructor(e){super(),this.elements=e}}function Mw(n,e){const t=Lw(e);for(const s of n.elements)t.some(a=>Bi(a,s))||t.push(s);return{arrayValue:{values:t}}}class Gu extends Xf{constructor(e){super(),this.elements=e}}function Pw(n,e){let t=Lw(e);for(const s of n.elements)t=t.filter(a=>!Bi(a,s));return{arrayValue:{values:t}}}class Sf extends Xf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function cT(n){return Wt(n.integerValue||n.doubleValue)}function Lw(n){return l_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function nk(n,e){return n.field.isEqual(e.field)&&function(s,a){return s instanceof qu&&a instanceof qu||s instanceof Gu&&a instanceof Gu?qo(s.elements,a.elements,Bi):s instanceof Sf&&a instanceof Sf?Bi(s.Ie,a.Ie):s instanceof wf&&a instanceof wf}(n.transform,e.transform)}class ik{constructor(e,t){this.version=e,this.transformResults=t}}class Cs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cs}static exists(e){return new Cs(void 0,e)}static updateTime(e){return new Cs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ef(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zf{}function Uw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jw(n.key,Cs.none()):new sc(n.key,n.data,Cs.none());{const t=n.data,s=ci.empty();let a=new Zt(Xt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Pa(n.key,s,new fi(a.toArray()),Cs.none())}}function sk(n,e,t){n instanceof sc?function(a,l,c){const d=a.value.clone(),m=fT(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Pa?function(a,l,c){if(!ef(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=fT(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(Vw(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function ku(n,e,t,s){return n instanceof sc?function(l,c,d,m){if(!ef(l.precondition,c))return d;const g=l.value.clone(),T=dT(l.fieldTransforms,m,c);return g.setAll(T),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,s):n instanceof Pa?function(l,c,d,m){if(!ef(l.precondition,c))return d;const g=dT(l.fieldTransforms,m,c),T=c.data;return T.setAll(Vw(l)),T.setAll(g),c.convertToFoundDocument(c.version,T).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(n,e,t,s):function(l,c,d){return ef(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function rk(n,e){let t=null;for(const s of n.fieldTransforms){const a=e.data.field(s.field),l=kw(s.transform,a||null);l!=null&&(t===null&&(t=ci.empty()),t.set(s.field,l))}return t||null}function hT(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&qo(s,a,(l,c)=>nk(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class sc extends Zf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Pa extends Zf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Vw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function fT(n,e,t){const s=new Map;mt(n.length===t.length);for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,tk(c,d,t[a]))}return s}function dT(n,e,t){const s=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);s.set(a.field,ek(l,c,e))}return s}class jw extends Zf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ak extends Zf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&sk(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ku(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ku(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ow();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=Uw(c,d);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(st.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),an())}isEqual(e){return this.batchId===e.batchId&&qo(this.mutations,e.mutations,(t,s)=>hT(t,s))&&qo(this.baseMutations,e.baseMutations,(t,s)=>hT(t,s))}}class d_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){mt(e.mutations.length===s.length);let a=function(){return W4}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new d_(e,t,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt,Le;function uk(n){switch(n){case ne.OK:return Ne();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ne()}}function ck(n){if(n===void 0)return Ra("GRPC error has no .code"),ne.UNKNOWN;switch(n){case bt.OK:return ne.OK;case bt.CANCELLED:return ne.CANCELLED;case bt.UNKNOWN:return ne.UNKNOWN;case bt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case bt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case bt.INTERNAL:return ne.INTERNAL;case bt.UNAVAILABLE:return ne.UNAVAILABLE;case bt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case bt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case bt.NOT_FOUND:return ne.NOT_FOUND;case bt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case bt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case bt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case bt.ABORTED:return ne.ABORTED;case bt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case bt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case bt.DATA_LOSS:return ne.DATA_LOSS;default:return Ne()}}(Le=bt||(bt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new e_([4294967295,4294967295],0);class hk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tg(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fk(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function dk(n,e){return tg(n,e.toTimestamp())}function jo(n){return mt(!!n),st.fromTimestamp(function(t){const s=xa(t);return new qt(s.seconds,s.nanos)}(n))}function zw(n,e){return ng(n,e).canonicalString()}function ng(n,e){const t=function(a){return new wt(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mk(n){const e=wt.fromString(n);return mt(bk(e)),e}function ig(n,e){return zw(n.databaseId,e.path)}function pk(n){const e=mk(n);return e.length===4?wt.emptyPath():_k(e)}function gk(n){return new wt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _k(n){return mt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function mT(n,e,t){return{name:ig(n,e),fields:t.value.mapValue.fields}}function yk(n,e){let t;if(e instanceof sc)t={update:mT(n,e.key,e.value)};else if(e instanceof jw)t={delete:ig(n,e.key)};else if(e instanceof Pa)t={update:mT(n,e.key,e.data),updateMask:Tk(e.fieldMask)};else{if(!(e instanceof ak))return Ne();t={verify:ig(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof wf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof qu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Gu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Sf)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Ne()}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:dk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ne()}(n,e.precondition)),t}function vk(n,e){return n&&n.length>0?(mt(e!==void 0),n.map(t=>function(a,l){let c=a.updateTime?jo(a.updateTime):jo(l);return c.isEqual(st.min())&&(c=jo(l)),new ik(c,a.transformResults||[])}(t,e))):[]}function Ek(n){let e=pk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){mt(s===1);const T=t.from[0];T.allDescendants?a=T.collectionId:e=e.child(T.collectionId)}let l=[];t.where&&(l=function(b){const S=Bw(b);return S instanceof Nr&&ww(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(b){return b.map(S=>function(D){return new Tf(Do(D.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(b){let S;return S=typeof b=="object"?b.value:b,r_(S)?null:S}(t.limit));let m=null;t.startAt&&(m=function(b){const S=!!b.before,I=b.values||[];return new Ef(I,S)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const S=!b.before,I=b.values||[];return new Ef(I,S)}(t.endAt)),F4(e,a,c,l,d,"F",m,g)}function Bw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Do(t.unaryFilter.field);return Ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Do(t.unaryFilter.field);return Ft.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Do(t.unaryFilter.field);return Ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Do(t.unaryFilter.field);return Ft.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ne()}}(n):n.fieldFilter!==void 0?function(t){return Ft.create(Do(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nr.create(t.compositeFilter.filters.map(s=>Bw(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ne()}}(t.compositeFilter.op))}(n):Ne()}function Do(n){return Xt.fromServerFormat(n.fieldPath)}function Tk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bk(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.Tt=e}}function Sk(n){const e=Ek({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.Tn=new Ck}addToCollectionParentIndex(e,t){return this.Tn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Ir.min())}updateCollectionGroup(e,t,s){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Zt(wt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Zt(wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Fw=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(Fw,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Yo(0)}static Un(){return new Yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="LruGarbageCollector",Rk=1048576;function _T([n,e],[t,s]){const a=Ke(n,t);return a===0?Ke(e,s):a}class xk{constructor(e){this.Hn=e,this.buffer=new Zt(_T),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_T(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ik{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){he(gT,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ic(t)?he(gT,"Ignoring IndexedDB error during garbage collection: ",t):await n_(t)}await this.er(3e5)})}}class Nk{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(i_.ae);const s=new xk(t);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(pT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pT):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,a,l,c,d,m,g;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),a=this.params.maximumSequenceNumbersToCollect):a=b,c=Date.now(),this.nthSequenceNumber(e,a))).next(b=>(s=b,d=Date.now(),this.removeTargets(e,s,t))).next(b=>(l=b,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(g=Date.now(),Oo()<=Ie.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-T}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${b} documents in `+(g-m)+`ms
Total Duration: ${g-T}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:b})))}}function Ok(n,e){return new Nk(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.changes=new Ma(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ui.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&ku(s.mutation,a,fi.empty(),qt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,an()).next(()=>s))}getLocalViewOfDocuments(e,t,s=an()){const a=va();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=zh();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=va();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,an()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=bf();const c=Du(),d=function(){return Du()}();return t.forEach((m,g)=>{const T=s.get(g.key);a.has(g.key)&&(T===void 0||T.mutation instanceof Pa)?l=l.insert(g.key,g):T!==void 0?(c.set(g.key,T.mutation.getFieldMask()),ku(T.mutation,g,T.mutation.getFieldMask(),qt.now())):c.set(g.key,fi.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,T)=>c.set(g,T)),t.forEach((g,T)=>{var b;return d.set(g,new kk(T,(b=c.get(g))!==null&&b!==void 0?b:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Du();let a=new yi((c,d)=>c-d),l=an();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let T=s.get(m)||fi.empty();T=d.applyToLocalView(g,T),s.set(m,T);const b=(a.get(d.batchId)||an()).add(m);a=a.insert(d.batchId,b)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,T=m.value,b=Ow();T.forEach(S=>{if(!l.has(S)){const I=Uw(t.get(S),s.get(S));I!==null&&b.set(S,I),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return Z.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return Ce.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):q4(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):Z.resolve(va());let d=Fu,m=l;return c.next(g=>Z.forEach(g,(T,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(T)?Z.resolve():this.remoteDocumentCache.getEntry(e,T).next(S=>{m=m.insert(T,S)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,an())).next(T=>({batchId:d,changes:Nw(T)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ce(t)).next(s=>{let a=zh();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=zh();return this.indexManager.getCollectionParents(e,l).next(d=>Z.forEach(d,m=>{const g=function(b,S){return new Qf(S,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(T=>{T.forEach((b,S)=>{c=c.insert(b,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((m,g)=>{const T=g.getKey();c.get(T)===null&&(c=c.insert(T,ui.newInvalidDocument(T)))});let d=zh();return c.forEach((m,g)=>{const T=l.get(m);T!==void 0&&ku(T.mutation,g,fi.empty(),qt.now()),h_(t,g)&&(d=d.insert(m,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Z.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:jo(a.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:Sk(a.bundledQuery),readTime:jo(a.readTime)}}(t)),Z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.overlays=new yi(Ce.comparator),this.Rr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const s=va();return Z.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.Et(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),Z.resolve()}getOverlaysForCollection(e,t,s){const a=va(),l=t.length+1,c=new Ce(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return Z.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new yi((g,T)=>g-T);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let T=l.get(g.largestBatchId);T===null&&(T=va(),l=l.insert(g.largestBatchId,T)),T.set(g.getKey(),g)}}const d=va(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,T)=>d.set(g,T)),!(d.size()>=a)););return Z.resolve(d)}Et(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new lk(t,s));let l=this.Rr.get(t);l===void 0&&(l=an(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.sessionToken=zi.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.Vr=new Zt(zt.mr),this.gr=new Zt(zt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new zt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new zt(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new Ce(new wt([])),s=new zt(t,e),a=new zt(t,e+1),l=[];return this.gr.forEachInRange([s,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ce(new wt([])),s=new zt(t,e),a=new zt(t,e+1);let l=an();return this.gr.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new zt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class zt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ce.comparator(e.key,t.key)||Ke(e.Cr,t.Cr)}static pr(e,t){return Ke(e.Cr,t.Cr)||Ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Zt(zt.mr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new ok(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new zt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Nr(s),l=a<0?0:a;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?s_:this.Fr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new zt(t,0),a=new zt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,a],c=>{const d=this.Or(c.Cr);l.push(d)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Zt(Ke);return t.forEach(a=>{const l=new zt(a,0),c=new zt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{s=s.add(d.Cr)})}),Z.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;Ce.isDocumentKey(l)||(l=l.child(""));const c=new zt(new Ce(l),0);let d=new Zt(Ke);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(m.Cr)),!0)},c),Z.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){mt(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Z.forEach(t.mutations,a=>{const l=new zt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new zt(t,0),a=this.Mr.firstAfterOrEqual(s);return Z.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.kr=e,this.docs=function(){return new yi(Ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Z.resolve(s?s.document.mutableCopy():ui.newInvalidDocument(t))}getEntries(e,t){let s=bf();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():ui.newInvalidDocument(a))}),Z.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=bf();const c=t.path,d=new Ce(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:T}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||v4(y4(T),s)<=0||(a.has(T.key)||h_(t,T))&&(l=l.insert(T.key,T.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Ne()}qr(e,t){return Z.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new zk(this)}getSize(e){return Z.resolve(this.size)}}class zk extends Dk{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),Z.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.persistence=e,this.Qr=new Ma(t=>u_(t),c_),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.$r=0,this.Kr=new m_,this.targetCount=0,this.Ur=Yo.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,a)=>t(a)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),Z.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Yo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.zn(t),Z.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),Z.waitFor(l).next(()=>a)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return Z.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),Z.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return Z.resolve(s)}containsKey(e,t){return Z.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new i_(0),this.zr=!1,this.zr=!0,this.jr=new Uk,this.referenceDelegate=e(this),this.Hr=new Bk(this),this.indexManager=new Ak,this.remoteDocumentCache=function(a){return new jk(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new wk(t),this.Yr=new Pk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Lk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new Vk(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){he("MemoryPersistence","Starting transaction:",e);const a=new Fk(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return Z.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class Fk extends T4{constructor(e){super(),this.currentSequenceNumber=e}}class p_{constructor(e){this.persistence=e,this.ti=new m_,this.ni=null}static ri(e){return new p_(e)}get ii(){if(this.ni)return this.ni;throw Ne()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),Z.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Z.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.ii,s=>{const a=Ce.fromPath(s);return this.si(e,a).next(l=>{l||t.removeEntry(a,st.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return Z.or([()=>Z.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Af{constructor(e,t){this.persistence=e,this.oi=new Ma(s=>S4(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=Ok(this,t)}static ri(e,t){return new Af(e,t)}Zr(){}Xr(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return Z.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(l=>l?Z.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(s++,l.removeEntry(c,st.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Z.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zh(e.data.value)),t}ar(e,t,s){return Z.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return Z.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=a}static Yi(e,t){let s=an(),a=an();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new g_(e,t.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ex()?8:b4(hn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new Hk;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,s,a){return s.documentReadCount<this.es?(Oo()<=Ie.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",yu(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Z.resolve()):(Oo()<=Ie.DEBUG&&he("QueryEngine","Query:",yu(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Oo()<=Ie.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",yu(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ba(t))):Z.resolve())}rs(e,t){if(uT(t))return Z.resolve(null);let s=ba(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=eg(t,null,"F"),s=ba(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=an(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.cs(t,d);return this.ls(t,g,c,m.readTime)?this.rs(e,eg(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,s,a){return uT(t)||a.isEqual(st.min())?Z.resolve(null):this.ns.getDocuments(e,s).next(l=>{const c=this.cs(t,l);return this.ls(t,c,s,a)?Z.resolve(null):(Oo()<=Ie.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),yu(t)),this.hs(e,c,t,_4(a,Fu)).next(d=>d))})}cs(e,t){let s=new Zt($4(e));return t.forEach((a,l)=>{h_(e,l)&&(s=s.add(l))}),s}ls(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,s){return Oo()<=Ie.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",yu(t)),this.ns.getDocumentsMatchingQuery(e,t,Ir.min(),s)}hs(e,t,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="LocalStore";class $k{constructor(e,t,s,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new yi(Ke),this.Is=new Ma(l=>u_(l),c_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mk(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Kk(n,e,t,s){return new $k(n,e,t,s)}async function qw(n,e){const t=et(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let m=an();for(const g of a){c.push(g.batchId);for(const T of g.mutations)m=m.add(T.key)}for(const g of l){d.push(g.batchId);for(const T of g.mutations)m=m.add(T.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Rs:g,removedBatchIds:c,addedBatchIds:d}))})})}function Yk(n,e){const t=et(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,m,g,T){const b=g.batch,S=b.keys();let I=Z.resolve();return S.forEach(D=>{I=I.next(()=>T.getEntry(m,D)).next(G=>{const B=g.docVersions.get(D);mt(B!==null),G.version.compareTo(B)<0&&(b.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),T.addEntry(G)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(m,b))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let m=an();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(m=m.add(d.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Wk(n){const e=et(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Qk(n,e){const t=et(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=s_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class yT{constructor(){this.activeTargetIds=Z4()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xk{constructor(){this.ho=new yT,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new yT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="ConnectivityMonitor";class ET{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){he(vT,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){he(vT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh=null;function sg(){return Bh===null?Bh=function(){return 268435456+Math.round(2147483648*Math.random())}():Bh++,"0x"+Bh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="RestConnection",Jk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class eM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===yf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}bo(e,t,s,a,l){const c=sg(),d=this.So(e,t.toUriEncodedString());he(Sp,`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,l),this.vo(e,d,m,s).then(g=>(he(Sp,`Received RPC '${e}' ${c}: `,g),g),g=>{throw Wf(Sp,`RPC '${e}' ${c} failed with error: `,g,"url: ",d,"request:",s),g})}Co(e,t,s,a,l,c){return this.bo(e,t,s,a,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}So(e,t){const s=Jk[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="WebChannelConnection";class nM extends eM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,a){const l=sg();return new Promise((c,d)=>{const m=new rw;m.setWithCredentials(!0),m.listenOnce(aw.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Xh.NO_ERROR:const T=m.getResponseJson();he(sn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(T)),c(T);break;case Xh.TIMEOUT:he(sn,`RPC '${e}' ${l} timed out`),d(new Ee(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Xh.HTTP_ERROR:const b=m.getStatus();if(he(sn,`RPC '${e}' ${l} failed with status:`,b,"response text:",m.getResponseText()),b>0){let S=m.getResponseJson();Array.isArray(S)&&(S=S[0]);const I=S==null?void 0:S.error;if(I&&I.status&&I.message){const D=function(B){const K=B.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(K)>=0?K:ne.UNKNOWN}(I.status);d(new Ee(D,I.message))}else d(new Ee(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new Ee(ne.UNAVAILABLE,"Connection failed."));break;default:Ne()}}finally{he(sn,`RPC '${e}' ${l} completed.`)}});const g=JSON.stringify(a);he(sn,`RPC '${e}' ${l} sending request:`,a),m.send(t,"POST",g,s,15)})}Wo(e,t,s){const a=sg(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=uw(),d=lw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const T=l.join("");he(sn,`Creating RPC '${e}' stream ${a}: ${T}`,m);const b=c.createWebChannel(T,m);let S=!1,I=!1;const D=new tM({Fo:B=>{I?he(sn,`Not sending because RPC '${e}' stream ${a} is closed:`,B):(S||(he(sn,`Opening RPC '${e}' stream ${a} transport.`),b.open(),S=!0),he(sn,`RPC '${e}' stream ${a} sending:`,B),b.send(B))},Mo:()=>b.close()}),G=(B,K,ee)=>{B.listen(K,Q=>{try{ee(Q)}catch(ae){setTimeout(()=>{throw ae},0)}})};return G(b,Cu.EventType.OPEN,()=>{I||(he(sn,`RPC '${e}' stream ${a} transport opened.`),D.Qo())}),G(b,Cu.EventType.CLOSE,()=>{I||(I=!0,he(sn,`RPC '${e}' stream ${a} transport closed`),D.Ko())}),G(b,Cu.EventType.ERROR,B=>{I||(I=!0,Wf(sn,`RPC '${e}' stream ${a} transport errored:`,B),D.Ko(new Ee(ne.UNAVAILABLE,"The operation could not be completed")))}),G(b,Cu.EventType.MESSAGE,B=>{var K;if(!I){const ee=B.data[0];mt(!!ee);const Q=ee,ae=(Q==null?void 0:Q.error)||((K=Q[0])===null||K===void 0?void 0:K.error);if(ae){he(sn,`RPC '${e}' stream ${a} received error:`,ae);const ue=ae.status;let ye=function(C){const N=bt[C];if(N!==void 0)return ck(N)}(ue),M=ae.message;ye===void 0&&(ye=ne.INTERNAL,M="Unknown error status: "+ue+" with message "+ae.message),I=!0,D.Ko(new Ee(ye,M)),b.close()}else he(sn,`RPC '${e}' stream ${a} received:`,ee),D.Uo(ee)}}),G(d,ow.STAT_EVENT,B=>{B.stat===Yp.PROXY?he(sn,`RPC '${e}' stream ${a} detected buffering proxy`):B.stat===Yp.NOPROXY&&he(sn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Ap(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n){return new hk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-s);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="PersistentStream";class iM{constructor(e,t,s,a,l,c,d,m){this.Ti=e,this.n_=s,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Gw(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(Ra(t.toString()),Ra("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===t&&this.V_(s,a)},s=>{e(()=>{const a=new Ee(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return he(TT,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(he(TT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sM extends iM{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return mt(!!e.streamToken),this.lastStreamToken=e.streamToken,mt(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){mt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=vk(e.writeResults,e.commitTime),s=jo(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=gk(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>yk(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{}class aM extends rM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new Ee(ne.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.bo(e,ng(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Ee(ne.UNKNOWN,l.toString())})}Co(e,t,s,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,ng(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Ee(ne.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class oM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ra(t),this.N_=!1):he("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="RemoteStore";class lM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{s.enqueueAndForget(async()=>{oc(this)&&(he(rc,"Restarting streams for network reachability change."),await async function(m){const g=et(m);g.W_.add(4),await ac(g),g.j_.set("Unknown"),g.W_.delete(4),await ed(g)}(this))})}),this.j_=new oM(s,a)}}async function ed(n){if(oc(n))for(const e of n.G_)await e(!0)}async function ac(n){for(const e of n.G_)await e(!1)}function oc(n){return et(n).W_.size===0}async function $w(n,e,t){if(!ic(e))throw e;n.W_.add(1),await ac(n),n.j_.set("Offline"),t||(t=()=>Wk(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(rc,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ed(n)})}function Kw(n,e){return e().catch(t=>$w(n,t,e))}async function td(n){const e=et(n),t=Or(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:s_;for(;uM(e);)try{const a=await Qk(e.localStore,s);if(a===null){e.K_.length===0&&t.P_();break}s=a.batchId,cM(e,a)}catch(a){await $w(e,a)}Yw(e)&&Ww(e)}function uM(n){return oc(n)&&n.K_.length<10}function cM(n,e){n.K_.push(e);const t=Or(n);t.c_()&&t.b_&&t.S_(e.mutations)}function Yw(n){return oc(n)&&!Or(n).u_()&&n.K_.length>0}function Ww(n){Or(n).start()}async function hM(n){Or(n).C_()}async function fM(n){const e=Or(n);for(const t of n.K_)e.S_(t.mutations)}async function dM(n,e,t){const s=n.K_.shift(),a=d_.from(s,e,t);await Kw(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await td(n)}async function mM(n,e){e&&Or(n).b_&&await async function(s,a){if(function(c){return uk(c)&&c!==ne.ABORTED}(a.code)){const l=s.K_.shift();Or(s).h_(),await Kw(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await td(s)}}(n,e),Yw(n)&&Ww(n)}async function bT(n,e){const t=et(n);t.asyncQueue.verifyOperationInProgress(),he(rc,"RemoteStore received new credentials");const s=oc(t);t.W_.add(3),await ac(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ed(t)}async function pM(n,e){const t=et(n);e?(t.W_.delete(2),await ed(t)):e||(t.W_.add(2),await ac(t),t.j_.set("Unknown"))}function Or(n){return n.Y_||(n.Y_=function(t,s,a){const l=et(t);return l.M_(),new sM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:hM.bind(null,n),Lo:mM.bind(null,n),D_:fM.bind(null,n),v_:dM.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await td(n)):(await n.Y_.stop(),n.K_.length>0&&(he(rc,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new Ta,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new __(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qw(n,e){if(Ra("AsyncQueue",`${e}: ${n}`),ic(n))return new Ee(ne.UNAVAILABLE,`${e}: ${n}`);throw n}class gM{constructor(){this.queries=wT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const a=et(t),l=a.queries;a.queries=wT(),l.forEach((c,d)=>{for(const m of d.ta)m.onError(s)})})(this,new Ee(ne.ABORTED,"Firestore shutting down"))}}function wT(){return new Ma(n=>xw(n),Rw)}function _M(n){n.ia.forEach(e=>{e.next()})}var ST,AT;(AT=ST||(ST={}))._a="default",AT.Cache="cache";const yM="SyncEngine";class vM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Ma(d=>xw(d),Rw),this.qa=new Map,this.Qa=new Set,this.$a=new yi(Ce.comparator),this.Ka=new Map,this.Ua=new m_,this.Wa={},this.Ga=new Map,this.za=Yo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function EM(n,e,t){const s=SM(n);try{const a=await function(c,d){const m=et(c),g=qt.now(),T=d.reduce((I,D)=>I.add(D.key),an());let b,S;return m.persistence.runTransaction("Locally write mutations","readwrite",I=>{let D=bf(),G=an();return m.ds.getEntries(I,T).next(B=>{D=B,D.forEach((K,ee)=>{ee.isValidDocument()||(G=G.add(K))})}).next(()=>m.localDocuments.getOverlayedDocuments(I,D)).next(B=>{b=B;const K=[];for(const ee of d){const Q=rk(ee,b.get(ee.key).overlayedDocument);Q!=null&&K.push(new Pa(ee.key,Q,Ew(Q.value.mapValue),Cs.exists(!0)))}return m.mutationQueue.addMutationBatch(I,g,K,d)}).next(B=>{S=B;const K=B.applyToLocalDocumentSet(b,G);return m.documentOverlayCache.saveOverlays(I,B.batchId,K)})}).then(()=>({batchId:S.batchId,changes:Nw(b)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,m){let g=c.Wa[c.currentUser.toKey()];g||(g=new yi(Ke)),g=g.insert(d,m),c.Wa[c.currentUser.toKey()]=g}(s,a.batchId,t),await nd(s,a.changes),await td(s.remoteStore)}catch(a){const l=Qw(a,"Failed to persist write");t.reject(l)}}function CT(n,e,t){const s=et(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const m=et(c);m.onlineState=d;let g=!1;m.queries.forEach((T,b)=>{for(const S of b.ta)S.sa(d)&&(g=!0)}),g&&_M(m)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function TM(n,e){const t=et(n),s=e.batch.batchId;try{const a=await Yk(t.localStore,e);Zw(t,s,null),Xw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await nd(t,a)}catch(a){await n_(a)}}async function bM(n,e,t){const s=et(n);try{const a=await function(c,d){const m=et(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let T;return m.mutationQueue.lookupMutationBatch(g,d).next(b=>(mt(b!==null),T=b.keys(),m.mutationQueue.removeMutationBatch(g,b))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,T,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,T)).next(()=>m.localDocuments.getDocuments(g,T))})}(s.localStore,e);Zw(s,e,t),Xw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await nd(s,a)}catch(a){await n_(a)}}function Xw(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Zw(n,e,t){const s=et(n);let a=s.Wa[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}async function nd(n,e,t){const s=et(n),a=[],l=[],c=[];s.ka.isEmpty()||(s.ka.forEach((d,m)=>{c.push(s.Ha(m,e,t).then(g=>{var T;if((g||t)&&s.isPrimaryClient){const b=g?!g.fromCache:(T=void 0)===null||T===void 0?void 0:T.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(g){a.push(g);const b=g_.Yi(m.targetId,g);l.push(b)}}))}),await Promise.all(c),s.La.p_(a),await async function(m,g){const T=et(m);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>Z.forEach(g,S=>Z.forEach(S.Hi,I=>T.persistence.referenceDelegate.addReference(b,S.targetId,I)).next(()=>Z.forEach(S.Ji,I=>T.persistence.referenceDelegate.removeReference(b,S.targetId,I)))))}catch(b){if(!ic(b))throw b;he(Gk,"Failed to update sequence numbers: "+b)}for(const b of g){const S=b.targetId;if(!b.fromCache){const I=T.Ts.get(S),D=I.snapshotVersion,G=I.withLastLimboFreeSnapshotVersion(D);T.Ts=T.Ts.insert(S,G)}}}(s.localStore,l))}async function wM(n,e){const t=et(n);if(!t.currentUser.isEqual(e)){he(yM,"User change. New user:",e.toKey());const s=await qw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(m=>{m.reject(new Ee(ne.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nd(t,s.Rs)}}function SM(n){const e=et(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bM.bind(null,e),e}class Cf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Kk(this.persistence,new qk,e.initialUser,this.serializer)}Xa(e){return new Hw(p_.ri,this.serializer)}Za(e){return new Xk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cf.provider={build:()=>new Cf};class AM extends Cf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){mt(this.persistence.referenceDelegate instanceof Af);const s=this.persistence.referenceDelegate.garbageCollector;return new Ik(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new Hw(s=>Af.ri(s,t),this.serializer)}}class rg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>CT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wM.bind(null,this.syncEngine),await pM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gM}()}createDatastore(e){const t=Jf(e.databaseInfo.databaseId),s=function(l){return new nM(l)}(e.databaseInfo);return function(l,c,d,m){return new aM(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new lM(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>CT(this.syncEngine,t,0),function(){return ET.D()?new ET:new Zk}())}createSyncEngine(e,t){return function(a,l,c,d,m,g,T){const b=new vM(a,l,c,d,m,g);return T&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=et(a);he(rc,"RemoteStore shutting down."),l.W_.add(5),await ac(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}rg.provider={build:()=>new rg};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="FirestoreClient";class CM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=rn.UNAUTHENTICATED,this.clientId=hw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{he(Dr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(he(Dr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ta;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Qw(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Cp(n,e){n.asyncQueue.verifyOperationInProgress(),he(Dr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async a=>{s.isEqual(a)||(await qw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function RT(n,e){n.asyncQueue.verifyOperationInProgress();const t=await RM(n);he(Dr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>bT(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,a)=>bT(e.remoteStore,a)),n._onlineComponents=e}async function RM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Dr,"Using user provided OfflineComponentProvider");try{await Cp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Wf("Error using user provided cache. Falling back to memory cache: "+t),await Cp(n,new Cf)}}else he(Dr,"Using default OfflineComponentProvider"),await Cp(n,new AM(void 0));return n._offlineComponents}async function xM(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Dr,"Using user provided OnlineComponentProvider"),await RT(n,n._uninitializedComponentsProvider._online)):(he(Dr,"Using default OnlineComponentProvider"),await RT(n,new rg))),n._onlineComponents}function IM(n){return xM(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(n,e,t){if(!t)throw new Ee(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function OM(n,e,t,s){if(e===!0&&s===!0)throw new Ee(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function IT(n){if(!Ce.isDocumentKey(n))throw new Ee(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function y_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ne()}function ag(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Ee(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=y_(n);throw new Ee(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firestore.googleapis.com",NT=!0;class OT{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=eS,this.ssl=NT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:NT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Fw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Rk)throw new Ee(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Ee(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Ee(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Ee(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class v_{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new OT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ee(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ee(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new OT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new u4;switch(s.type){case"firstParty":return new d4(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Ee(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=xT.get(t);s&&(he("ComponentProvider","Removing Datastore"),xT.delete(t),s.terminate())}(this),Promise.resolve()}}function DM(n,e,t,s={}){var a;const l=(n=ag(n,v_))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==eS&&l.host!==d&&Wf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:s});if(!Ns(m,c)&&(n._setSettings(m),s.mockUserToken)){let g,T;if(typeof s.mockUserToken=="string")g=s.mockUserToken,T=rn.MOCK_USER;else{g=Mg(s.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new Ee(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new rn(b)}n._authCredentials=new c4(new cw(g,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new E_(this.firestore,e,this._query)}}class Rs{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $u(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rs(this.firestore,e,this._key)}}class $u extends E_{constructor(e,t,s){super(e,t,H4(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rs(this.firestore,null,new Ce(e))}withConverter(e){return new $u(this.firestore,e,this._path)}}function T_(n,e,...t){if(n=Ot(n),arguments.length===1&&(e=hw.newId()),NM("doc","path",e),n instanceof v_){const s=wt.fromString(e,...t);return IT(s),new Rs(n,null,new Ce(s))}{if(!(n instanceof Rs||n instanceof $u))throw new Ee(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(wt.fromString(e,...t));return IT(s),new Rs(n.firestore,n instanceof $u?n.converter:null,new Ce(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="AsyncQueue";class kT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Gw(this,"async_queue_retry"),this.bu=()=>{const s=Ap();s&&he(DT,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=Ap();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Ap();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ta;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ic(e))throw e;he(DT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(s);throw Ra("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=__.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Ne()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class tS extends v_{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new kT,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kT(e),this._firestoreClient=void 0,await e}}}function kM(n,e){const t=typeof n=="object"?n:Ju(),s=typeof n=="string"?n:yf,a=Ls(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Dg("firestore");l&&DM(a,...l)}return a}function MM(n){if(n._terminated)throw new Ee(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PM(n),n._firestoreClient}function PM(n){var e,t,s;const a=n._freezeSettings(),l=function(d,m,g,T){return new x4(d,m,g,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,Jw(T.experimentalLongPollingOptions),T.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new CM(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ku(zi.fromBase64String(e))}catch(t){throw new Ee(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ku(zi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Ee(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ee(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ee(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ke(this._lat,e._lat)||Ke(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=/^__.*__$/;class UM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pa(e,this.data,this.fieldMask,t,this.fieldTransforms):new sc(e,this.data,t,this.fieldTransforms)}}function aS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne()}}class b_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new b_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Rf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(aS(this.Lu)&&LM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class VM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Jf(e)}ju(e,t,s,a=!1){return new b_({Lu:e,methodName:t,zu:s,path:Xt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jM(n){const e=n._freezeSettings(),t=Jf(n._databaseId);return new VM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zM(n,e,t,s,a,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,a);cS("Data must be an object, but it was:",c,s);const d=lS(s,c);let m,g;if(l.merge)m=new fi(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const T=[];for(const b of l.mergeFields){const S=BM(e,b,t);if(!c.contains(S))throw new Ee(ne.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);qM(T,S)||T.push(S)}m=new fi(T),g=c.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,g=c.fieldTransforms;return new UM(new ci(d),m,g)}function oS(n,e){if(uS(n=Ot(n)))return cS("Unsupported field value:",e,n),lS(n,e);if(n instanceof iS)return function(s,a){if(!aS(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let m=oS(d,a.Uu(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(n,e)}return function(s,a){if((s=Ot(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return J4(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=qt.fromDate(s);return{timestampValue:tg(a.serializer,l)}}if(s instanceof qt){const l=new qt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tg(a.serializer,l)}}if(s instanceof sS)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ku)return{bytesValue:fk(a.serializer,s._byteString)};if(s instanceof Rs){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:zw(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof rS)return function(c,d){return{mapValue:{fields:{[yw]:{stringValue:vw},[Qp]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return f_(d.serializer,g)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${y_(s)}`)}(n,e)}function lS(n,e){const t={};return dw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rl(n,(s,a)=>{const l=oS(a,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function uS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof qt||n instanceof sS||n instanceof Ku||n instanceof Rs||n instanceof iS||n instanceof rS)}function cS(n,e,t){if(!uS(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const s=y_(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function BM(n,e,t){if((e=Ot(e))instanceof nS)return e._internalPath;if(typeof e=="string")return HM(n,e);throw Rf("Field path arguments must be of type string or ",n,!1,void 0,t)}const FM=new RegExp("[~\\*/\\[\\]]");function HM(n,e,t){if(e.search(FM)>=0)throw Rf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nS(...e.split("."))._internalPath}catch{throw Rf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Rf(n,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new Ee(ne.INVALID_ARGUMENT,d+n+m)}function qM(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(n,e,t){let s;return s=n?n.toFirestore(e):e,s}function w_(n,e,t){n=ag(n,Rs);const s=ag(n.firestore,tS),a=GM(n.converter,e);return $M(s,[zM(jM(s),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Cs.none())])}function $M(n,e){return function(s,a){const l=new Ta;return s.asyncQueue.enqueueAndForget(async()=>EM(await IM(s),a,l)),l.promise}(MM(n),e)}(function(e,t=!0){(function(a){sl=a})(Pr),Jn(new Mn("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new tS(new h4(s.getProvider("auth-internal")),new m4(c,s.getProvider("app-check-internal")),function(g,T){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Ee(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vf(g.options.projectId,T)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),cn(WE,QE,e),cn(WE,QE,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="firebasestorage.googleapis.com",KM="storageBucket",YM=2*60*1e3,WM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends ni{constructor(e,t,s=0){super(Rp(e),`Firebase Storage: ${t} (${Rp(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fi||(Fi={}));function Rp(n){return"storage/"+n}function QM(){const n="An unknown error occurred, please check the error payload for server response.";return new Gi(Fi.UNKNOWN,n)}function XM(){return new Gi(Fi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZM(){return new Gi(Fi.CANCELED,"User canceled the upload/download.")}function JM(n){return new Gi(Fi.INVALID_URL,"Invalid URL '"+n+"'.")}function e3(n){return new Gi(Fi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function MT(n){return new Gi(Fi.INVALID_ARGUMENT,n)}function fS(){return new Gi(Fi.APP_DELETED,"The Firebase app was deleted.")}function t3(n){return new Gi(Fi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=di.makeFromUrl(e,t)}catch{return new di(e,"")}if(s.path==="")return s;throw e3(e)}static makeFromUrl(e,t){let s=null;const a="([A-Za-z0-9.\\-_]+)";function l(ae){ae.path.charAt(ae.path.length-1)==="/"&&(ae.path_=ae.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+a+c,"i"),m={bucket:1,path:3};function g(ae){ae.path_=decodeURIComponent(ae.path)}const T="v[A-Za-z0-9_]+",b=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",I=new RegExp(`^https?://${b}/${T}/b/${a}/o${S}`,"i"),D={bucket:1,path:3},G=t===hS?"(?:storage.googleapis.com|storage.cloud.google.com)":t,B="([^?#]*)",K=new RegExp(`^https?://${G}/${a}/${B}`,"i"),Q=[{regex:d,indices:m,postModify:l},{regex:I,indices:D,postModify:g},{regex:K,indices:{bucket:1,path:2},postModify:g}];for(let ae=0;ae<Q.length;ae++){const ue=Q[ae],ye=ue.regex.exec(e);if(ye){const M=ye[ue.indices.bucket];let R=ye[ue.indices.path];R||(R=""),s=new di(M,R),ue.postModify(s);break}}if(s==null)throw JM(e);return s}}class n3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(n,e,t){let s=1,a=null,l=null,c=!1,d=0;function m(){return d===2}let g=!1;function T(...B){g||(g=!0,e.apply(null,B))}function b(B){a=setTimeout(()=>{a=null,n(I,m())},B)}function S(){l&&clearTimeout(l)}function I(B,...K){if(g){S();return}if(B){S(),T.call(null,B,...K);return}if(m()||c){S(),T.call(null,B,...K);return}s<64&&(s*=2);let Q;d===1?(d=2,Q=0):Q=(s+Math.random())*1e3,b(Q)}let D=!1;function G(B){D||(D=!0,S(),!g&&(a!==null?(B||(d=2),clearTimeout(a),b(0)):B||(d=1)))}return b(0),l=setTimeout(()=>{c=!0,G(!0)},t),G}function s3(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r3(n){return n!==void 0}function PT(n,e,t,s){if(s<e)throw MT(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw MT(`Invalid value for '${n}'. Expected ${t} or less.`)}function a3(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const a=e(s)+"="+e(n[s]);t=t+a+"&"}return t=t.slice(0,-1),t}var xf;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(xf||(xf={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o3(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e,t,s,a,l,c,d,m,g,T,b,S=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=T,this.connectionFactory_=b,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,D)=>{this.resolve_=I,this.reject_=D,this.start_()})}start_(){const e=(s,a)=>{if(a){s(!1,new Fh(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const m=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===xf.NO_ERROR,m=l.getStatus();if(!d||o3(m,this.additionalRetryCodes_)&&this.retry){const T=l.getErrorCode()===xf.ABORT;s(!1,new Fh(!1,null,T));return}const g=this.successCodes_.indexOf(m)!==-1;s(!0,new Fh(g,l))})},t=(s,a)=>{const l=this.resolve_,c=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());r3(m)?l(m):l()}catch(m){c(m)}else if(d!==null){const m=QM();m.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,m)):c(m)}else if(a.canceled){const m=this.appDelete_?fS():ZM();c(m)}else{const m=XM();c(m)}};this.canceled_?t(!1,new Fh(!1,null,!0)):this.backoffId_=i3(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&s3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function u3(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function c3(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function h3(n,e){e&&(n["X-Firebase-GMPID"]=e)}function f3(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function d3(n,e,t,s,a,l,c=!0){const d=a3(n.urlParams),m=n.url+d,g=Object.assign({},n.headers);return h3(g,e),u3(g,t),c3(g,l),f3(g,s),new l3(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m3(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function p3(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this._service=e,t instanceof di?this._location=t:this._location=di.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new If(e,t)}get root(){const e=new di(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return p3(this._location.path)}get storage(){return this._service}get parent(){const e=m3(this._location.path);if(e===null)return null;const t=new di(this._location.bucket,e);return new If(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw t3(e)}}function LT(n,e){const t=e==null?void 0:e[KM];return t==null?null:di.makeFromBucketSpec(t,n)}function g3(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:a}=s;a&&(n._overrideAuthToken=typeof a=="string"?a:Mg(a,n.app.options.projectId))}class _3{constructor(e,t,s,a,l){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=a,this._firebaseVersion=l,this._bucket=null,this._host=hS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YM,this._maxUploadRetryTime=WM,this._requests=new Set,a!=null?this._bucket=di.makeFromBucketSpec(a,this._host):this._bucket=LT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=di.makeFromBucketSpec(this._url,e):this._bucket=LT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){PT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){PT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new If(this,e)}_makeRequest(e,t,s,a,l=!0){if(this._deleted)return new n3(fS());{const c=d3(e,this._appId,s,a,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,a).getPromise()}}const UT="@firebase/storage",VT="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="storage";function y3(n=Ju(),e){n=Ot(n);const s=Ls(n,dS).getImmediate({identifier:e}),a=Dg("storage");return a&&v3(s,...a),s}function v3(n,e,t,s={}){g3(n,e,t,s)}function E3(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new _3(t,s,a,e,Pr)}function T3(){Jn(new Mn(dS,E3,"PUBLIC").setMultipleInstances(!0)),cn(UT,VT,""),cn(UT,VT,"esm2017")}T3();var jT={};const zT="@firebase/database",BT="1.0.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mS="";function b3(n){mS=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ju(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ps(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new w3(e)}}catch{}return new S3},Ea=pS("localStorage"),A3=pS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Zu("@firebase/database"),C3=function(){let n=1;return function(){return n++}}(),gS=function(n){const e=fx(n),t=new ox;t.update(e);const s=t.digest();return Og.encodeByteArray(s)},lc=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=lc.apply(null,s):typeof s=="object"?e+=Qt(s):e+=s,e+=" "}return e};let Mu=null,FT=!0;const R3=function(n,e){re(!0,"Can't turn on custom loggers persistently."),zo.logLevel=Ie.VERBOSE,Mu=zo.log.bind(zo)},on=function(...n){if(FT===!0&&(FT=!1,Mu===null&&A3.get("logging_enabled")===!0&&R3()),Mu){const e=lc.apply(null,n);Mu(e)}},uc=function(n){return function(...e){on(n,...e)}},og=function(...n){const e="FIREBASE INTERNAL ERROR: "+lc(...n);zo.error(e)},Ms=function(...n){const e=`FIREBASE FATAL ERROR: ${lc(...n)}`;throw zo.error(e),new Error(e)},kn=function(...n){const e="FIREBASE WARNING: "+lc(...n);zo.warn(e)},x3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&kn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_S=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},I3=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Wo="[MIN_NAME]",Na="[MAX_NAME]",al=function(n,e){if(n===e)return 0;if(n===Wo||e===Na)return-1;if(e===Wo||n===Na)return 1;{const t=HT(n),s=HT(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},N3=function(n,e){return n===e?0:n<e?-1:1},vu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Qt(e))},S_=function(n){if(typeof n!="object"||n===null)return Qt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=Qt(e[s]),t+=":",t+=S_(n[e[s]]);return t+="}",t},yS=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(n.substring(a,t)):s.push(n.substring(a,a+e));return s};function ti(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const vS=function(n){re(!_S(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,m;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=d+s,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const T=g.join("");let b="";for(m=0;m<64;m+=8){let S=parseInt(T.substr(m,8),2).toString(16);S.length===1&&(S="0"+S),b=b+S}return b.toLowerCase()},O3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},D3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},k3=new RegExp("^-?(0*)\\d{1,10}$"),M3=-2147483648,P3=2147483647,HT=function(n){if(k3.test(n)){const e=Number(n);if(e>=M3&&e<=P3)return e}return null},cc=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw kn("Exception was thrown by user callback.",t),e},Math.floor(0))}},L3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,yn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){kn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(on("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',kn(e)}}class tf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="5",ES="v",TS="s",bS="r",wS="f",SS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,AS="ls",CS="p",lg="ac",RS="websocket",xS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,t,s,a,l=!1,c="",d=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ea.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ea.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function j3(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function NS(n,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let s;if(e===RS)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xS)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);j3(n)&&(t.ns=n.namespace);const a=[];return ti(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(){this.counters_={}}incrementCounter(e,t=1){Ps(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={},Ip={};function C_(n){const e=n.toString();return xp[e]||(xp[e]=new z3),xp[e]}function B3(n,e){const t=n.toString();return Ip[t]||(Ip[t]=e()),Ip[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&cc(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="start",H3="close",q3="pLPCommand",G3="pRTLPCB",OS="id",DS="pw",kS="ser",$3="cb",K3="seg",Y3="ts",W3="d",Q3="dframe",MS=1870,PS=30,X3=MS-PS,Z3=25e3,J3=3e4;class ko{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uc(e),this.stats_=C_(t),this.urlFn=m=>(this.appCheckToken&&(m[lg]=this.appCheckToken),NS(t,xS,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new F3(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J3)),I3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new R_((...l)=>{const[c,d,m,g,T]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===qT)this.id=d,this.password=m;else if(c===H3)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[qT]="t",s[kS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[$3]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ES]=A_,this.transportSessionId&&(s[TS]=this.transportSessionId),this.lastSessionId&&(s[AS]=this.lastSessionId),this.applicationId&&(s[CS]=this.applicationId),this.appCheckToken&&(s[lg]=this.appCheckToken),typeof location<"u"&&location.hostname&&SS.test(location.hostname)&&(s[bS]=wS);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ko.forceAllow_=!0}static forceDisallow(){ko.forceDisallow_=!0}static isAvailable(){return ko.forceAllow_?!0:!ko.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!O3()&&!D3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=z1(t),a=yS(s,X3);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Q3]="t",s[OS]=e,s[DS]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Qt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class R_{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C3(),window[q3+this.uniqueCallbackIdentifier]=e,window[G3+this.uniqueCallbackIdentifier]=t,this.myIFrame=R_.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){on("frame writing exception"),d.stack&&on(d.stack),on(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||on("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[OS]=this.myID,e[DS]=this.myPW,e[kS]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+PS+s.length<=MS;){const c=this.pendingSegs.shift();s=s+"&"+K3+a+"="+c.seg+"&"+Y3+a+"="+c.ts+"&"+W3+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(Z3)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{on("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e5=16384,t5=45e3;let Nf=null;typeof MozWebSocket<"u"?Nf=MozWebSocket:typeof WebSocket<"u"&&(Nf=WebSocket);class hi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uc(this.connId),this.stats_=C_(t),this.connURL=hi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[ES]=A_,typeof location<"u"&&location.hostname&&SS.test(location.hostname)&&(c[bS]=wS),t&&(c[TS]=t),s&&(c[AS]=s),a&&(c[lg]=a),l&&(c[CS]=l),NS(e,RS,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ea.set("previous_websocket_failure",!0);try{let s;JR(),this.mySock=new Nf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Nf!==null&&!hi.forceDisallow_}static previouslyFailed(){return Ea.isInMemoryStorage||Ea.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ea.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ju(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=Qt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=yS(t,e5);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t5))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{static get ALL_TRANSPORTS(){return[ko,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let s=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||kn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hi];else{const a=this.transports_=[];for(const l of Yu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Yu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n5=6e4,i5=5e3,s5=10*1024,r5=100*1024,Np="t",GT="d",a5="s",$T="r",o5="e",KT="o",YT="a",WT="n",QT="p",l5="h";class u5{constructor(e,t,s,a,l,c,d,m,g,T){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=T,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=uc("c:"+this.id+":"),this.transportManager_=new Yu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Pu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>r5?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>s5?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Np in e){const t=e[Np];t===YT?this.upgradeIfSecondaryHealthy_():t===$T?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===KT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=vu("t",e),s=vu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:QT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:YT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:WT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=vu("t",e),s=vu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=vu(Np,e);if(GT in e){const s=e[GT];if(t===l5){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===WT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===a5?this.onConnectionShutdown_(s):t===$T?this.onReset_(s):t===o5?og("Server Error: "+s):t===KT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):og("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),A_!==s&&kn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Pu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n5))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(i5))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:QT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ea.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends US{static getInstance(){return new Of}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=32,ZT=768;class it{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Qe(){return new it("")}function Ue(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function kr(n){return n.pieces_.length-n.pieceNum_}function nt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new it(n.pieces_,e)}function VS(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function c5(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function jS(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function zS(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new it(e,0)}function Ht(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof it)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new it(t,0)}function De(n){return n.pieceNum_>=n.pieces_.length}function Zn(n,e){const t=Ue(n),s=Ue(e);if(t===null)return e;if(t===s)return Zn(nt(n),nt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function BS(n,e){if(kr(n)!==kr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function mi(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(kr(n)>kr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class h5{constructor(e,t){this.errorPrefix_=t,this.parts_=jS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hf(this.parts_[s]);FS(this)}}function f5(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Hf(e),FS(n)}function d5(n){const e=n.parts_.pop();n.byteLength_-=Hf(e),n.parts_.length>0&&(n.byteLength_-=1)}function FS(n){if(n.byteLength_>ZT)throw new Error(n.errorPrefix_+"has a key path longer than "+ZT+" bytes ("+n.byteLength_+").");if(n.parts_.length>XT)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+XT+") or object contains a cycle "+ga(n))}function ga(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_ extends US{static getInstance(){return new x_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=1e3,m5=60*5*1e3,JT=30*1e3,p5=1.3,g5=3e4,_5="server_kill",e1=3;class xs extends LS{constructor(e,t,s,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=xs.nextPersistentConnectionId_++,this.log_=uc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Eu,this.maxReconnectDelay_=m5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");x_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Of.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Qt(l)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new kg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,g=d.s;xs.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ps(e,"w")){const s=Fo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();kn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ax(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=JT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rx(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):og("Unrecognized action received from server: "+Qt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Eu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Eu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>g5&&(this.reconnectDelay_=Eu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*p5)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+xs.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,s())},g=function(b){re(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(b)};this.realtime_={close:m,sendRequest:g};const T=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[b,S]=await Promise.all([this.authTokenProvider_.getToken(T),this.appCheckTokenProvider_.getToken(T)]);c?on("getToken() completed but was canceled"):(on("getToken() completed. Creating connection."),this.authToken_=b&&b.accessToken,this.appCheckToken_=S&&S.token,d=new u5(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,I=>{kn(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(_5)},l))}catch(b){this.log_("Failed to get token: "+b),c||(this.repoInfo_.nodeAdmin&&kn(b),m())}}}interrupt(e){on("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){on("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Up(this.interruptReasons_)&&(this.reconnectDelay_=Eu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>S_(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new it(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){on("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=e1&&(this.reconnectDelay_=JT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){on("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=e1&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+mS.replace(/\./g,"-")]=1,Pg()?e["framework.cordova"]=1:$1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Of.getInstance().currentlyOnline();return Up(this.interruptReasons_)&&e}}xs.nextPersistentConnectionId_=0;xs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Ve(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Ve(Wo,e),a=new Ve(Wo,t);return this.compare(s,a)!==0}minPost(){return Ve.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;class HS extends id{static get __EMPTY_NODE(){return Hh}static set __EMPTY_NODE(e){Hh=e}compare(e,t){return al(e.name,t.name)}isDefinedOn(e){throw el("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Ve.MIN}maxPost(){return new Ve(Na,Hh)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Ve(e,Hh)}toString(){return".key"}}const Bo=new HS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Bt.RED,this.left=a??wn.EMPTY_NODE,this.right=l??wn.EMPTY_NODE}copy(e,t,s,a,l){return new Bt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return wn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return wn.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bt.RED=!0;Bt.BLACK=!1;class y5{copy(e,t,s,a,l){return this}insert(e,t,s){return new Bt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wn{constructor(e,t=wn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new wn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new wn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qh(this.root_,null,this.comparator_,!0,e)}}wn.EMPTY_NODE=new y5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v5(n,e){return al(n.name,e.name)}function I_(n,e){return al(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;function E5(n){ug=n}const qS=function(n){return typeof n=="number"?"number:"+vS(n):"string:"+n},GS=function(n){if(n.isLeafNode()){const e=n.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ps(e,".sv"),"Priority must be a string or number.")}else re(n===ug||n.isEmpty(),"priority of unexpected type.");re(n===ug||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t1;class jt{static set __childrenNodeConstructor(e){t1=e}static get __childrenNodeConstructor(){return t1}constructor(e,t=jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new jt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return De(e)?this:Ue(e)===".priority"?this.priorityNode_:jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ue(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(re(s!==".priority"||kr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(nt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+qS(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=vS(this.value_):e+=this.value_,this.lazyHash_=gS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===jt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof jt.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=jt.VALUE_TYPE_ORDER.indexOf(t),l=jt.VALUE_TYPE_ORDER.indexOf(s);return re(a>=0,"Unknown leaf type: "+t),re(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $S,KS;function T5(n){$S=n}function b5(n){KS=n}class w5 extends id{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?al(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Ve.MIN}maxPost(){return new Ve(Na,new jt("[PRIORITY-POST]",KS))}makePost(e,t){const s=$S(e);return new Ve(t,new jt("[PRIORITY-POST]",s))}toString(){return".priority"}}const un=new w5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S5=Math.log(2);class A5{constructor(e){const t=l=>parseInt(Math.log(l)/S5,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Df=function(n,e,t,s){n.sort(e);const a=function(m,g){const T=g-m;let b,S;if(T===0)return null;if(T===1)return b=n[m],S=t?t(b):b,new Bt(S,b.node,Bt.BLACK,null,null);{const I=parseInt(T/2,10)+m,D=a(m,I),G=a(I+1,g);return b=n[I],S=t?t(b):b,new Bt(S,b.node,Bt.BLACK,D,G)}},l=function(m){let g=null,T=null,b=n.length;const S=function(D,G){const B=b-D,K=b;b-=D;const ee=a(B+1,K),Q=n[B],ae=t?t(Q):Q;I(new Bt(ae,Q.node,G,null,ee))},I=function(D){g?(g.left=D,g=D):(T=D,g=D)};for(let D=0;D<m.count;++D){const G=m.nextBitIsOne(),B=Math.pow(2,m.count-(D+1));G?S(B,Bt.BLACK):(S(B,Bt.BLACK),S(B,Bt.RED))}return T},c=new A5(n.length),d=l(c);return new wn(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Op;const No={};class ws{static get Default(){return re(No&&un,"ChildrenNode.ts has not been loaded"),Op=Op||new ws({".priority":No},{".priority":un}),Op}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wn?t:null}hasIndex(e){return Ps(this.indexSet_,e.toString())}addIndex(e,t){re(e!==Bo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Ve.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=Df(s,e.getCompare()):d=No;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const T=Object.assign({},this.indexes_);return T[m]=d,new ws(T,g)}addToIndexes(e,t){const s=of(this.indexes_,(a,l)=>{const c=Fo(this.indexSet_,l);if(re(c,"Missing index implementation for "+l),a===No)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(Ve.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&d.push(g),g=m.getNext();return d.push(e),Df(d,c.getCompare())}else return No;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new Ve(e.name,d))),m.insert(e,e.node)}});return new ws(s,this.indexSet_)}removeFromIndexes(e,t){const s=of(this.indexes_,a=>{if(a===No)return a;{const l=t.get(e.name);return l?a.remove(new Ve(e.name,l)):a}});return new ws(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;class Ge{static get EMPTY_NODE(){return Tu||(Tu=new Ge(new wn(I_),null,ws.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&GS(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tu}updatePriority(e){return this.children_.isEmpty()?this:new Ge(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Tu:t}}getChild(e){const t=Ue(e);return t===null?this:this.getImmediateChild(t).getChild(nt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Ve(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Tu:this.priorityNode_;return new Ge(a,c,l)}}updateChild(e,t){const s=Ue(e);if(s===null)return t;{re(Ue(e)!==".priority"||kr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(nt(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(un,(c,d)=>{t[c]=d.val(e),s++,l&&Ge.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+qS(this.getPriority().val())+":"),this.forEachChild(un,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":gS(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Ve(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Ve(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Ve(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Ve.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Ve.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hc?-1:0}withIndex(e){if(e===Bo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ge(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Bo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(un),a=t.getIterator(un);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Bo?null:this.indexMap_.get(e.toString())}}Ge.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class C5 extends Ge{constructor(){super(new wn(I_),Ge.EMPTY_NODE,ws.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ge.EMPTY_NODE}isEmpty(){return!1}}const hc=new C5;Object.defineProperties(Ve,{MIN:{value:new Ve(Wo,Ge.EMPTY_NODE)},MAX:{value:new Ve(Na,hc)}});HS.__EMPTY_NODE=Ge.EMPTY_NODE;jt.__childrenNodeConstructor=Ge;E5(hc);b5(hc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5=!0;function ln(n,e=null){if(n===null)return Ge.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new jt(t,ln(e))}if(!(n instanceof Array)&&R5){const t=[];let s=!1;if(ti(n,(c,d)=>{if(c.substring(0,1)!=="."){const m=ln(d);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new Ve(c,m)))}}),t.length===0)return Ge.EMPTY_NODE;const l=Df(t,v5,c=>c.name,I_);if(s){const c=Df(t,un.getCompare());return new Ge(l,ln(e),new ws({".priority":c},{".priority":un}))}else return new Ge(l,ln(e),ws.Default)}else{let t=Ge.EMPTY_NODE;return ti(n,(s,a)=>{if(Ps(n,s)&&s.substring(0,1)!=="."){const l=ln(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(ln(e))}}T5(ln);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x5 extends id{constructor(e){super(),this.indexPath_=e,re(!De(e)&&Ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?al(e.name,t.name):l}makePost(e,t){const s=ln(e),a=Ge.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ve(t,a)}maxPost(){const e=Ge.EMPTY_NODE.updateChild(this.indexPath_,hc);return new Ve(Na,e)}toString(){return jS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5 extends id{compare(e,t){const s=e.node.compareTo(t.node);return s===0?al(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Ve.MIN}maxPost(){return Ve.MAX}makePost(e,t){const s=ln(e);return new Ve(t,s)}toString(){return".value"}}const N5=new I5;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O5(n){return{type:"value",snapshotNode:n}}function D5(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function k5(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function n1(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function M5(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=un}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wo}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Na}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===un}copy(){const e=new N_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function i1(n){const e={};if(n.isDefault())return e;let t;if(n.index_===un?t="$priority":n.index_===N5?t="$value":n.index_===Bo?t="$key":(re(n.index_ instanceof x5,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Qt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=Qt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+Qt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=Qt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+Qt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function s1(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==un&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends LS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=uc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=kf.getListenId_(e,s),d={};this.listens_[c]=d;const m=i1(e._queryParams);this.restRequest_(l+".json",m,(g,T)=>{let b=T;if(g===404&&(b=null,g=null),g===null&&this.onDataUpdate_(l,b,!1,s),Fo(this.listens_,c)===d){let S;g?g===401?S="permission_denied":S="rest_error:"+g:S="ok",a(S,null)}})}unlisten(e,t){const s=kf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=i1(e._queryParams),s=e._path.toString(),a=new kg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+tl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=ju(d.responseText)}catch{kn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,m)}else d.status!==401&&d.status!==404&&kn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(){this.rootNode_=Ge.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(){return{value:null,children:new Map}}function YS(n,e,t){if(De(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ue(e);n.children.has(s)||n.children.set(s,Mf());const a=n.children.get(s);e=nt(e),YS(a,e,t)}}function cg(n,e,t){n.value!==null?t(e,n.value):L5(n,(s,a)=>{const l=new it(e.toString()+"/"+s);cg(a,l,t)})}function L5(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U5{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ti(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=10*1e3,V5=30*1e3,j5=5*60*1e3;class z5{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new U5(e);const s=r1+(V5-r1)*Math.random();Pu(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ti(e,(a,l)=>{l>0&&Ps(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Pu(this.reportStats_.bind(this),Math.floor(Math.random()*2*j5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vi||(Vi={}));function WS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function QS(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function XS(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Vi.ACK_USER_WRITE,this.source=WS()}operationForChild(e){if(De(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new it(e));return new Pf(Qe(),t,this.revert)}}else return re(Ue(this.path)===e,"operationForChild called for unrelated child."),new Pf(nt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Vi.OVERWRITE}operationForChild(e){return De(this.path)?new Oa(this.source,Qe(),this.snap.getImmediateChild(e)):new Oa(this.source,nt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Vi.MERGE}operationForChild(e){if(De(this.path)){const t=this.children.subtree(new it(e));return t.isEmpty()?null:t.value?new Oa(this.source,Qe(),t.value):new Wu(this.source,Qe(),t)}else return re(Ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wu(this.source,nt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(De(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ue(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function B5(n,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(M5(c.childName,c.snapshotNode))}),bu(n,a,"child_removed",e,s,t),bu(n,a,"child_added",e,s,t),bu(n,a,"child_moved",l,s,t),bu(n,a,"child_changed",e,s,t),bu(n,a,"value",e,s,t),a}function bu(n,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,m)=>H5(n,d,m)),c.forEach(d=>{const m=F5(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(m,n.query_))})})}function F5(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function H5(n,e,t){if(e.childName==null||t.childName==null)throw el("Should only compare child_ events.");const s=new Ve(e.childName,e.snapshotNode),a=new Ve(t.childName,t.snapshotNode);return n.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(n,e){return{eventCache:n,serverCache:e}}function Lu(n,e,t,s){return ZS(new O_(e,t,s),n.serverCache)}function JS(n,e,t,s){return ZS(n.eventCache,new O_(e,t,s))}function hg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Da(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dp;const q5=()=>(Dp||(Dp=new wn(N3)),Dp);class tt{static fromObject(e){let t=new tt(null);return ti(e,(s,a)=>{t=t.set(new it(s),a)}),t}constructor(e,t=q5()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Qe(),value:this.value};if(De(e))return null;{const s=Ue(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(nt(e),t);return l!=null?{path:Ht(new it(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(De(e))return this;{const t=Ue(e),s=this.children.get(t);return s!==null?s.subtree(nt(e)):new tt(null)}}set(e,t){if(De(e))return new tt(t,this.children);{const s=Ue(e),l=(this.children.get(s)||new tt(null)).set(nt(e),t),c=this.children.insert(s,l);return new tt(this.value,c)}}remove(e){if(De(e))return this.children.isEmpty()?new tt(null):new tt(null,this.children);{const t=Ue(e),s=this.children.get(t);if(s){const a=s.remove(nt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new tt(null):new tt(this.value,l)}else return this}}get(e){if(De(e))return this.value;{const t=Ue(e),s=this.children.get(t);return s?s.get(nt(e)):null}}setTree(e,t){if(De(e))return t;{const s=Ue(e),l=(this.children.get(s)||new tt(null)).setTree(nt(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new tt(this.value,c)}}fold(e){return this.fold_(Qe(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Ht(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Qe(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(De(e))return null;{const l=Ue(e),c=this.children.get(l);return c?c.findOnPath_(nt(e),Ht(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Qe(),t)}foreachOnPath_(e,t,s){if(De(e))return this;{this.value&&s(t,this.value);const a=Ue(e),l=this.children.get(a);return l?l.foreachOnPath_(nt(e),Ht(t,a),s):new tt(null)}}foreach(e){this.foreach_(Qe(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Ht(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.writeTree_=e}static empty(){return new gi(new tt(null))}}function Uu(n,e,t){if(De(e))return new gi(new tt(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Zn(a,e);return l=l.updateChild(c,t),new gi(n.writeTree_.set(a,l))}else{const a=new tt(t),l=n.writeTree_.setTree(e,a);return new gi(l)}}}function a1(n,e,t){let s=n;return ti(t,(a,l)=>{s=Uu(s,Ht(e,a),l)}),s}function o1(n,e){if(De(e))return gi.empty();{const t=n.writeTree_.setTree(e,new tt(null));return new gi(t)}}function fg(n,e){return La(n,e)!=null}function La(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Zn(t.path,e)):null}function l1(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(un,(s,a)=>{e.push(new Ve(s,a))}):n.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Ve(s,a.value))}),e}function xr(n,e){if(De(e))return n;{const t=La(n,e);return t!=null?new gi(new tt(t)):new gi(n.writeTree_.subtree(e))}}function dg(n){return n.writeTree_.isEmpty()}function Qo(n,e){return eA(Qe(),n.writeTree_,e)}function eA(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(re(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=eA(Ht(n,a),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(Ht(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(n,e){return aA(e,n)}function G5(n,e,t,s,a){re(s>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(n.visibleWrites=Uu(n.visibleWrites,e,t)),n.lastWriteId=s}function $5(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function K5(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let a=s.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&Y5(d,s.path)?a=!1:mi(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return W5(n),!0;if(s.snap)n.visibleWrites=o1(n.visibleWrites,s.path);else{const d=s.children;ti(d,m=>{n.visibleWrites=o1(n.visibleWrites,Ht(s.path,m))})}return!0}else return!1}function Y5(n,e){if(n.snap)return mi(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&mi(Ht(n.path,t),e))return!0;return!1}function W5(n){n.visibleWrites=nA(n.allWrites,Q5,Qe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Q5(n){return n.visible}function nA(n,e,t){let s=gi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)mi(t,c)?(d=Zn(t,c),s=Uu(s,d,l.snap)):mi(c,t)&&(d=Zn(c,t),s=Uu(s,Qe(),l.snap.getChild(d)));else if(l.children){if(mi(t,c))d=Zn(t,c),s=a1(s,d,l.children);else if(mi(c,t))if(d=Zn(c,t),De(d))s=a1(s,Qe(),l.children);else{const m=Fo(l.children,Ue(d));if(m){const g=m.getChild(nt(d));s=Uu(s,Qe(),g)}}}else throw el("WriteRecord should have .snap or .children")}}return s}function iA(n,e,t,s,a){if(!s&&!a){const l=La(n.visibleWrites,e);if(l!=null)return l;{const c=xr(n.visibleWrites,e);if(dg(c))return t;if(t==null&&!fg(c,Qe()))return null;{const d=t||Ge.EMPTY_NODE;return Qo(c,d)}}}else{const l=xr(n.visibleWrites,e);if(!a&&dg(l))return t;if(!a&&t==null&&!fg(l,Qe()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(mi(g.path,e)||mi(e,g.path))},d=nA(n.allWrites,c,e),m=t||Ge.EMPTY_NODE;return Qo(d,m)}}}function X5(n,e,t){let s=Ge.EMPTY_NODE;const a=La(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(un,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=xr(n.visibleWrites,e);return t.forEachChild(un,(c,d)=>{const m=Qo(xr(l,new it(c)),d);s=s.updateImmediateChild(c,m)}),l1(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=xr(n.visibleWrites,e);return l1(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function Z5(n,e,t,s,a){re(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Ht(e,t);if(fg(n.visibleWrites,l))return null;{const c=xr(n.visibleWrites,l);return dg(c)?a.getChild(t):Qo(c,a.getChild(t))}}function J5(n,e,t,s){const a=Ht(e,t),l=La(n.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=xr(n.visibleWrites,a);return Qo(c,s.getNode().getImmediateChild(t))}else return null}function eP(n,e){return La(n.visibleWrites,e)}function tP(n,e,t,s,a,l,c){let d;const m=xr(n.visibleWrites,e),g=La(m,Qe());if(g!=null)d=g;else if(t!=null)d=Qo(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const T=[],b=c.getCompare(),S=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let I=S.getNext();for(;I&&T.length<a;)b(I,s)!==0&&T.push(I),I=S.getNext();return T}else return[]}function nP(){return{visibleWrites:gi.empty(),allWrites:[],lastWriteId:-1}}function mg(n,e,t,s){return iA(n.writeTree,n.treePath,e,t,s)}function sA(n,e){return X5(n.writeTree,n.treePath,e)}function u1(n,e,t,s){return Z5(n.writeTree,n.treePath,e,t,s)}function Lf(n,e){return eP(n.writeTree,Ht(n.treePath,e))}function iP(n,e,t,s,a,l){return tP(n.writeTree,n.treePath,e,t,s,a,l)}function D_(n,e,t){return J5(n.writeTree,n.treePath,e,t)}function rA(n,e){return aA(Ht(n.treePath,e),n.writeTree)}function aA(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,n1(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,k5(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,D5(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,n1(s,e.snapshotNode,a.oldSnap));else throw el("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const oA=new rP;class k_{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new O_(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return D_(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Da(this.viewCache_),l=iP(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function aP(n,e){re(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function oP(n,e,t,s,a){const l=new sP;let c,d;if(t.type===Vi.OVERWRITE){const g=t;g.source.fromUser?c=pg(n,e,g.path,g.snap,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!De(g.path),c=Uf(n,e,g.path,g.snap,s,a,d,l))}else if(t.type===Vi.MERGE){const g=t;g.source.fromUser?c=uP(n,e,g.path,g.children,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=gg(n,e,g.path,g.children,s,a,d,l))}else if(t.type===Vi.ACK_USER_WRITE){const g=t;g.revert?c=fP(n,e,g.path,s,a,l):c=cP(n,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Vi.LISTEN_COMPLETE)c=hP(n,e,t.path,s,l);else throw el("Unknown operation type: "+t.type);const m=l.getChanges();return lP(e,c,m),{viewCache:c,changes:m}}function lP(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=hg(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(O5(hg(e)))}}function lA(n,e,t,s,a,l){const c=e.eventCache;if(Lf(s,t)!=null)return e;{let d,m;if(De(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Da(e),T=g instanceof Ge?g:Ge.EMPTY_NODE,b=sA(s,T);d=n.filter.updateFullNode(e.eventCache.getNode(),b,l)}else{const g=mg(s,Da(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Ue(t);if(g===".priority"){re(kr(t)===1,"Can't have a priority with additional path components");const T=c.getNode();m=e.serverCache.getNode();const b=u1(s,t,T,m);b!=null?d=n.filter.updatePriority(T,b):d=c.getNode()}else{const T=nt(t);let b;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const S=u1(s,t,c.getNode(),m);S!=null?b=c.getNode().getImmediateChild(g).updateChild(T,S):b=c.getNode().getImmediateChild(g)}else b=D_(s,g,e.serverCache);b!=null?d=n.filter.updateChild(c.getNode(),g,b,T,a,l):d=c.getNode()}}return Lu(e,d,c.isFullyInitialized()||De(t),n.filter.filtersNodes())}}function Uf(n,e,t,s,a,l,c,d){const m=e.serverCache;let g;const T=c?n.filter:n.filter.getIndexedFilter();if(De(t))g=T.updateFullNode(m.getNode(),s,null);else if(T.filtersNodes()&&!m.isFiltered()){const I=m.getNode().updateChild(t,s);g=T.updateFullNode(m.getNode(),I,null)}else{const I=Ue(t);if(!m.isCompleteForPath(t)&&kr(t)>1)return e;const D=nt(t),B=m.getNode().getImmediateChild(I).updateChild(D,s);I===".priority"?g=T.updatePriority(m.getNode(),B):g=T.updateChild(m.getNode(),I,B,D,oA,null)}const b=JS(e,g,m.isFullyInitialized()||De(t),T.filtersNodes()),S=new k_(a,b,l);return lA(n,b,t,a,S,d)}function pg(n,e,t,s,a,l,c){const d=e.eventCache;let m,g;const T=new k_(a,e,l);if(De(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),m=Lu(e,g,!0,n.filter.filtersNodes());else{const b=Ue(t);if(b===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),m=Lu(e,g,d.isFullyInitialized(),d.isFiltered());else{const S=nt(t),I=d.getNode().getImmediateChild(b);let D;if(De(S))D=s;else{const G=T.getCompleteChild(b);G!=null?VS(S)===".priority"&&G.getChild(zS(S)).isEmpty()?D=G:D=G.updateChild(S,s):D=Ge.EMPTY_NODE}if(I.equals(D))m=e;else{const G=n.filter.updateChild(d.getNode(),b,D,S,T,c);m=Lu(e,G,d.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function c1(n,e){return n.eventCache.isCompleteForChild(e)}function uP(n,e,t,s,a,l,c){let d=e;return s.foreach((m,g)=>{const T=Ht(t,m);c1(e,Ue(T))&&(d=pg(n,d,T,g,a,l,c))}),s.foreach((m,g)=>{const T=Ht(t,m);c1(e,Ue(T))||(d=pg(n,d,T,g,a,l,c))}),d}function h1(n,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function gg(n,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;De(t)?g=s:g=new tt(null).setTree(t,s);const T=e.serverCache.getNode();return g.children.inorderTraversal((b,S)=>{if(T.hasChild(b)){const I=e.serverCache.getNode().getImmediateChild(b),D=h1(n,I,S);m=Uf(n,m,new it(b),D,a,l,c,d)}}),g.children.inorderTraversal((b,S)=>{const I=!e.serverCache.isCompleteForChild(b)&&S.value===null;if(!T.hasChild(b)&&!I){const D=e.serverCache.getNode().getImmediateChild(b),G=h1(n,D,S);m=Uf(n,m,new it(b),G,a,l,c,d)}}),m}function cP(n,e,t,s,a,l,c){if(Lf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(De(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return Uf(n,e,t,m.getNode().getChild(t),a,l,d,c);if(De(t)){let g=new tt(null);return m.getNode().forEachChild(Bo,(T,b)=>{g=g.set(new it(T),b)}),gg(n,e,t,g,a,l,d,c)}else return e}else{let g=new tt(null);return s.foreach((T,b)=>{const S=Ht(t,T);m.isCompleteForPath(S)&&(g=g.set(T,m.getNode().getChild(S)))}),gg(n,e,t,g,a,l,d,c)}}function hP(n,e,t,s,a){const l=e.serverCache,c=JS(e,l.getNode(),l.isFullyInitialized()||De(t),l.isFiltered());return lA(n,c,t,s,oA,a)}function fP(n,e,t,s,a,l){let c;if(Lf(s,t)!=null)return e;{const d=new k_(s,e,a),m=e.eventCache.getNode();let g;if(De(t)||Ue(t)===".priority"){let T;if(e.serverCache.isFullyInitialized())T=mg(s,Da(e));else{const b=e.serverCache.getNode();re(b instanceof Ge,"serverChildren would be complete if leaf node"),T=sA(s,b)}T=T,g=n.filter.updateFullNode(m,T,l)}else{const T=Ue(t);let b=D_(s,T,e.serverCache);b==null&&e.serverCache.isCompleteForChild(T)&&(b=m.getImmediateChild(T)),b!=null?g=n.filter.updateChild(m,T,b,nt(t),d,l):e.eventCache.getNode().hasChild(T)?g=n.filter.updateChild(m,T,Ge.EMPTY_NODE,nt(t),d,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=mg(s,Da(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||Lf(s,Qe())!=null,Lu(e,g,c,n.filter.filtersNodes())}}function dP(n,e){const t=Da(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!De(e)&&!t.getImmediateChild(Ue(e)).isEmpty())?t.getChild(e):null}function f1(n,e,t,s){e.type===Vi.MERGE&&e.source.queryId!==null&&(re(Da(n.viewCache_),"We should always have a full cache before handling merges"),re(hg(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=oP(n.processor_,a,e,t,s);return aP(n.processor_,l.viewCache),re(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,mP(n,l.changes,l.viewCache.eventCache.getNode())}function mP(n,e,t,s){const a=n.eventRegistrations_;return B5(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d1;function pP(n){re(!d1,"__referenceConstructor has already been defined"),d1=n}function M_(n,e,t,s){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return re(l!=null,"SyncTree gave us an op for an invalid query."),f1(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(f1(c,e,t,s));return l}}function P_(n,e){let t=null;for(const s of n.views.values())t=t||dP(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m1;function gP(n){re(!m1,"__referenceConstructor has already been defined"),m1=n}class p1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tt(null),this.pendingWriteTree_=nP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _P(n,e,t,s,a){return G5(n.pendingWriteTree_,e,t,s,a),a?rd(n,new Oa(WS(),e,t)):[]}function Mo(n,e,t=!1){const s=$5(n.pendingWriteTree_,e);if(K5(n.pendingWriteTree_,e)){let l=new tt(null);return s.snap!=null?l=l.set(Qe(),!0):ti(s.children,c=>{l=l.set(new it(c),!0)}),rd(n,new Pf(s.path,l,t))}else return[]}function sd(n,e,t){return rd(n,new Oa(QS(),e,t))}function yP(n,e,t){const s=tt.fromObject(t);return rd(n,new Wu(QS(),e,s))}function vP(n,e,t,s){const a=fA(n,s);if(a!=null){const l=dA(a),c=l.path,d=l.queryId,m=Zn(c,e),g=new Oa(XS(d),m,t);return mA(n,c,g)}else return[]}function EP(n,e,t,s){const a=fA(n,s);if(a){const l=dA(a),c=l.path,d=l.queryId,m=Zn(c,e),g=tt.fromObject(t),T=new Wu(XS(d),m,g);return mA(n,c,T)}else return[]}function uA(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const m=Zn(c,e),g=P_(d,m);if(g)return g});return iA(a,e,l,t,!0)}function rd(n,e){return cA(e,n.syncPointTree_,null,tA(n.pendingWriteTree_,Qe()))}function cA(n,e,t,s){if(De(n.path))return hA(n,e,t,s);{const a=e.get(Qe());t==null&&a!=null&&(t=P_(a,Qe()));let l=[];const c=Ue(n.path),d=n.operationForChild(c),m=e.children.get(c);if(m&&d){const g=t?t.getImmediateChild(c):null,T=rA(s,c);l=l.concat(cA(d,m,g,T))}return a&&(l=l.concat(M_(a,n,s,t))),l}}function hA(n,e,t,s){const a=e.get(Qe());t==null&&a!=null&&(t=P_(a,Qe()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,g=rA(s,c),T=n.operationForChild(c);T&&(l=l.concat(hA(T,d,m,g)))}),a&&(l=l.concat(M_(a,n,s,t))),l}function fA(n,e){return n.tagToQueryMap.get(e)}function dA(n){const e=n.indexOf("$");return re(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new it(n.substr(0,e))}}function mA(n,e,t){const s=n.syncPointTree_.get(e);re(s,"Missing sync point for query tag that we're tracking");const a=tA(n.pendingWriteTree_,e);return M_(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new L_(t)}node(){return this.node_}}class U_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ht(this.path_,e);return new U_(this.syncTree_,t)}node(){return uA(this.syncTree_,this.path_)}}const TP=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},g1=function(n,e,t){if(!n||typeof n!="object")return n;if(re(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return bP(n[".sv"],e,t);if(typeof n[".sv"]=="object")return wP(n[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},bP=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+n)}},wP=function(n,e,t){n.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&re(!1,"Unexpected increment value: "+s);const a=e.node();if(re(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},SP=function(n,e,t,s){return V_(e,new U_(t,n),s)},AP=function(n,e,t){return V_(n,new L_(e),t)};function V_(n,e,t){const s=n.getPriority().val(),a=g1(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=g1(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new jt(d,ln(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new jt(a))),c.forEachChild(un,(d,m)=>{const g=V_(m,e.getImmediateChild(d),t);g!==m&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function z_(n,e){let t=e instanceof it?e:new it(e),s=n,a=Ue(t);for(;a!==null;){const l=Fo(s.node.children,a)||{children:{},childCount:0};s=new j_(a,s,l),t=nt(t),a=Ue(t)}return s}function ol(n){return n.node.value}function pA(n,e){n.node.value=e,_g(n)}function gA(n){return n.node.childCount>0}function CP(n){return ol(n)===void 0&&!gA(n)}function ad(n,e){ti(n.node.children,(t,s)=>{e(new j_(t,n,s))})}function _A(n,e,t,s){t&&e(n),ad(n,a=>{_A(a,e,!0)})}function RP(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fc(n){return new it(n.parent===null?n.name:fc(n.parent)+"/"+n.name)}function _g(n){n.parent!==null&&xP(n.parent,n.name,n)}function xP(n,e,t){const s=CP(t),a=Ps(n.node.children,e);s&&a?(delete n.node.children[e],n.node.childCount--,_g(n)):!s&&!a&&(n.node.children[e]=t.node,n.node.childCount++,_g(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=/[\[\].#$\/\u0000-\u001F\u007F]/,NP=/[\[\].#$\u0000-\u001F\u007F]/,kp=10*1024*1024,yA=function(n){return typeof n=="string"&&n.length!==0&&!IP.test(n)},OP=function(n){return typeof n=="string"&&n.length!==0&&!NP.test(n)},DP=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OP(n)},vA=function(n,e,t){const s=t instanceof it?new h5(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ga(s));if(typeof e=="function")throw new Error(n+"contains a function "+ga(s)+" with contents = "+e.toString());if(_S(e))throw new Error(n+"contains "+e.toString()+" "+ga(s));if(typeof e=="string"&&e.length>kp/3&&Hf(e)>kp)throw new Error(n+"contains a string greater than "+kp+" utf8 bytes "+ga(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ti(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!yA(c)))throw new Error(n+" contains an invalid key ("+c+") "+ga(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);f5(s,c),vA(n,d,s),d5(s)}),a&&l)throw new Error(n+' contains ".value" child '+ga(s)+" in addition to actual children.")}},kP=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!DP(t))throw new Error(hx(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PP(n,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!BS(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Ua(n,e,t){PP(n,t),LP(n,s=>mi(s,e)||mi(e,s))}function LP(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const a=n.eventLists_[s];if(a){const l=a.path;e(l)?(UP(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function UP(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Mu&&on("event: "+t.toString()),cc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="repo_interrupt",jP=25;class zP{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new MP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mf(),this.transactionQueueTree_=new j_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BP(n,e,t){if(n.stats_=C_(n.repoInfo_),n.forceRestClient_||L3())n.server_=new kf(n.repoInfo_,(s,a,l,c)=>{_1(n,s,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>y1(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new xs(n.repoInfo_,e,(s,a,l,c)=>{_1(n,s,a,l,c)},s=>{y1(n,s)},s=>{HP(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=B3(n.repoInfo_,()=>new z5(n.stats_,n.server_)),n.infoData_=new P5,n.infoSyncTree_=new p1({startListening:(s,a,l,c)=>{let d=[];const m=n.infoData_.getNode(s._path);return m.isEmpty()||(d=sd(n.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),B_(n,"connected",!1),n.serverSyncTree_=new p1({startListening:(s,a,l,c)=>(n.server_.listen(s,l,a,(d,m)=>{const g=c(d,m);Ua(n.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{n.server_.unlisten(s,a)}})}function FP(n){const t=n.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function EA(n){return TP({timestamp:FP(n)})}function _1(n,e,t,s,a){n.dataUpdateCount++;const l=new it(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=of(t,g=>ln(g));c=EP(n.serverSyncTree_,l,m,a)}else{const m=ln(t);c=vP(n.serverSyncTree_,l,m,a)}else if(s){const m=of(t,g=>ln(g));c=yP(n.serverSyncTree_,l,m)}else{const m=ln(t);c=sd(n.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=H_(n,l)),Ua(n.eventQueue_,d,c)}function y1(n,e){B_(n,"connected",e),e===!1&&GP(n)}function HP(n,e){ti(e,(t,s)=>{B_(n,t,s)})}function B_(n,e,t){const s=new it("/.info/"+e),a=ln(t);n.infoData_.updateSnapshot(s,a);const l=sd(n.infoSyncTree_,s,a);Ua(n.eventQueue_,s,l)}function qP(n){return n.nextWriteId_++}function GP(n){TA(n,"onDisconnectEvents");const e=EA(n),t=Mf();cg(n.onDisconnect_,Qe(),(a,l)=>{const c=SP(a,l,n.serverSyncTree_,e);YS(t,a,c)});let s=[];cg(t,Qe(),(a,l)=>{s=s.concat(sd(n.serverSyncTree_,a,l));const c=WP(n,a);H_(n,c)}),n.onDisconnect_=Mf(),Ua(n.eventQueue_,Qe(),s)}function $P(n){n.persistentConnection_&&n.persistentConnection_.interrupt(VP)}function TA(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),on(t,...e)}function bA(n,e,t){return uA(n.serverSyncTree_,e,t)||Ge.EMPTY_NODE}function F_(n,e=n.transactionQueueTree_){if(e||od(n,e),ol(e)){const t=SA(n,e);re(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&KP(n,fc(e),t)}else gA(e)&&ad(e,t=>{F_(n,t)})}function KP(n,e,t){const s=t.map(g=>g.currentWriteId),a=bA(n,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const T=t[g];re(T.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),T.status=1,T.retryCount++;const b=Zn(e,T.path);l=l.updateChild(b,T.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;n.server_.put(m.toString(),d,g=>{TA(n,"transaction put response",{path:m.toString(),status:g});let T=[];if(g==="ok"){const b=[];for(let S=0;S<t.length;S++)t[S].status=2,T=T.concat(Mo(n.serverSyncTree_,t[S].currentWriteId)),t[S].onComplete&&b.push(()=>t[S].onComplete(null,!0,t[S].currentOutputSnapshotResolved)),t[S].unwatcher();od(n,z_(n.transactionQueueTree_,e)),F_(n,n.transactionQueueTree_),Ua(n.eventQueue_,e,T);for(let S=0;S<b.length;S++)cc(b[S])}else{if(g==="datastale")for(let b=0;b<t.length;b++)t[b].status===3?t[b].status=4:t[b].status=0;else{kn("transaction at "+m.toString()+" failed: "+g);for(let b=0;b<t.length;b++)t[b].status=4,t[b].abortReason=g}H_(n,e)}},c)}function H_(n,e){const t=wA(n,e),s=fc(t),a=SA(n,t);return YP(n,a,s),s}function YP(n,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],g=Zn(t,m.path);let T=!1,b;if(re(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)T=!0,b=m.abortReason,a=a.concat(Mo(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=jP)T=!0,b="maxretry",a=a.concat(Mo(n.serverSyncTree_,m.currentWriteId,!0));else{const S=bA(n,m.path,c);m.currentInputSnapshot=S;const I=e[d].update(S.val());if(I!==void 0){vA("transaction failed: Data returned ",I,m.path);let D=ln(I);typeof I=="object"&&I!=null&&Ps(I,".priority")||(D=D.updatePriority(S.getPriority()));const B=m.currentWriteId,K=EA(n),ee=AP(D,S,K);m.currentOutputSnapshotRaw=D,m.currentOutputSnapshotResolved=ee,m.currentWriteId=qP(n),c.splice(c.indexOf(B),1),a=a.concat(_P(n.serverSyncTree_,m.path,ee,m.currentWriteId,m.applyLocally)),a=a.concat(Mo(n.serverSyncTree_,B,!0))}else T=!0,b="nodata",a=a.concat(Mo(n.serverSyncTree_,m.currentWriteId,!0))}Ua(n.eventQueue_,t,a),a=[],T&&(e[d].status=2,function(S){setTimeout(S,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(b==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(b),!1,null))))}od(n,n.transactionQueueTree_);for(let d=0;d<s.length;d++)cc(s[d]);F_(n,n.transactionQueueTree_)}function wA(n,e){let t,s=n.transactionQueueTree_;for(t=Ue(e);t!==null&&ol(s)===void 0;)s=z_(s,t),e=nt(e),t=Ue(e);return s}function SA(n,e){const t=[];return AA(n,e,t),t.sort((s,a)=>s.order-a.order),t}function AA(n,e,t){const s=ol(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);ad(e,a=>{AA(n,a,t)})}function od(n,e){const t=ol(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,pA(e,t.length>0?t:void 0)}ad(e,s=>{od(n,s)})}function WP(n,e){const t=fc(wA(n,e)),s=z_(n.transactionQueueTree_,e);return RP(s,a=>{Mp(n,a)}),Mp(n,s),_A(s,a=>{Mp(n,a)}),t}function Mp(n,e){const t=ol(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(re(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(re(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Mo(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?pA(e,void 0):t.length=l+1,Ua(n.eventQueue_,fc(e),a);for(let c=0;c<s.length;c++)cc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function XP(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):kn(`Invalid query segment '${t}' in query '${n}'`)}return e}const v1=function(n,e){const t=ZP(n),s=t.namespace;t.domain==="firebase.com"&&Ms(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ms("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||x3();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new IS(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new it(t.pathString)}},ZP=function(n){let e="",t="",s="",a="",l="",c=!0,d="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let T=n.indexOf("/");T===-1&&(T=n.length);let b=n.indexOf("?");b===-1&&(b=n.length),e=n.substring(0,Math.min(T,b)),T<b&&(a=QP(n.substring(T,b)));const S=XP(n.substring(Math.min(n.length,b)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const I=e.slice(0,g);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const D=e.indexOf(".");s=e.substring(0,D).toLowerCase(),t=e.substring(D+1),l=s}"ns"in S&&(l=S.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return De(this._path)?null:VS(this._path)}get ref(){return new ll(this._repo,this._path)}get _queryIdentifier(){const e=s1(this._queryParams),t=S_(e);return t==="{}"?"default":t}get _queryObject(){return s1(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof q_))return!1;const t=this._repo===e._repo,s=BS(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+c5(this._path)}}class ll extends q_{constructor(e,t){super(e,t,new N_,!1)}get parent(){const e=zS(this._path);return e===null?null:new ll(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}pP(ll);gP(ll);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="FIREBASE_DATABASE_EMULATOR_HOST",yg={};let e6=!1;function t6(n,e,t,s){n.repoInfo_=new IS(e,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function n6(n,e,t,s,a){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Ms("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),on("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=v1(l,a),d=c.repoInfo,m;typeof process<"u"&&jT&&(m=jT[JP]),m?(l=`http://${m}?ns=${d.namespace}`,c=v1(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new V3(n.name,n.options,e);kP("Invalid Firebase Database URL",c),De(c.path)||Ms("Database URL must point to the root of a Firebase Database (not including a child path).");const T=s6(d,n,g,new U3(n,t));return new r6(T,n)}function i6(n,e){const t=yg[e];(!t||t[n.key]!==n)&&Ms(`Database ${e}(${n.repoInfo_}) has already been deleted.`),$P(n),delete t[n.key]}function s6(n,e,t,s){let a=yg[e.name];a||(a={},yg[e.name]=a);let l=a[n.toURLString()];return l&&Ms("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new zP(n,e6,t,s),a[n.toURLString()]=l,l}let r6=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ll(this._repo,Qe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(i6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ms("Cannot call "+e+" on a deleted database.")}};function a6(n=Ju(),e){const t=Ls(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Dg("database");s&&o6(t,...s)}return t}function o6(n,e,t,s={}){n=Ot(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Ns(s,l.repoInfo_.emulatorOptions))return;Ms("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&Ms('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new tf(tf.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Mg(s.mockUserToken,n.app.options.projectId);c=new tf(d)}t6(l,a,s,c)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l6(n){b3(Pr),Jn(new Mn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return n6(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),cn(zT,BT,n),cn(zT,BT,"esm2017")}xs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};l6();const u6={apiKey:"AIzaSyCOX3dLbCghm1ivg7h2nnlrF3hhN8TQX2g",authDomain:"salimbigkas.firebaseapp.com",databaseURL:"https://salimbigkas-default-rtdb.firebaseio.com",projectId:"salimbigkas",storageBucket:"salimbigkas.firebasestorage.app",messagingSenderId:"63995274861",appId:"1:63995274861:web:4f8baea9d395547ad94164",measurementId:"G-2BK8NK3BVP"},dc=J1(u6);BN(dc);const Va=o4(dc),G_=kM(dc);y3(dc);a6(dc);const CA=c2.createContext(),$_=()=>H.useContext(CA),c6=({children:n})=>{const[e,t]=H.useState(null),[s,a]=H.useState(!1),[l,c]=H.useState(!1),[d,m]=H.useState(!1),[g,T]=H.useState(!1),[b,S]=H.useState(!0);H.useEffect(()=>XO(Va,I),[]);async function I(G){try{if(G){t({...G}),console.log("User logged in:",G);const B=G.providerData.some(Q=>Q.providerId==="password");c(B);const K=G.providerData.some(Q=>Q.providerId===Ui.PROVIDER_ID);m(K);const ee=G.providerData.some(Q=>Q.providerId==="apple.com");T(ee),a(!0)}else t(null),a(!1)}catch(B){console.error("Error initializing user:",B)}finally{S(!1)}}const D={userLoggedIn:s,isEmailUser:l,isGoogleUser:d,isAppleUser:g,currentUser:e,setCurrentUser:t,loading:b};return E.jsx(CA.Provider,{value:D,children:b?E.jsx("div",{className:"flex justify-center items-center h-screen bg-white",children:E.jsxs("svg",{className:"animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",style:{width:"50px",height:"50px",color:"#4A90E2"},children:[E.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),E.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"})]})}):n})},vg="/salimbigkas-filipino-e-learning-app/assets/man-BtWlv0TX.svg",nf="/salimbigkas-filipino-e-learning-app/assets/woman-CUIB64Fc.svg",h6=({openLoginModal:n})=>{const[e,t]=H.useState(!1);return H.useEffect(()=>{const s=localStorage.getItem("theme");if(s)t(s==="dark"),document.documentElement.classList.toggle("dark",s==="dark");else{const a=window.matchMedia("(prefers-color-scheme: dark)").matches;t(a),document.documentElement.classList.toggle("dark",a)}},[]),E.jsxs("header",{className:"flex flex-wrap w-full px-20 py-4 sticky top-0 left-0 right-0 text-black items-center bg-white",children:[E.jsxs("ul",{className:"flex gap-10 text-sm font-semibold",children:[E.jsx("li",{children:E.jsx("a",{href:"/home",children:"Home"})}),E.jsx("li",{children:E.jsx("a",{href:"",children:"About"})}),E.jsx("li",{children:E.jsx("a",{href:"",children:"Features"})}),E.jsx("li",{children:E.jsx("a",{href:"",children:"Contact"})})]}),E.jsx("button",{className:"ml-auto text-black hover:text-white text-base px-4 py-2 rounded-lg border-2 shadow-md drop-shadow-lg bg-none hover:bg-[#34495e] hover:border-[#34495e]",onClick:n,children:"Mag-Login"})]})},f6=async(n,e,t)=>{var l;const a=(await GO(Va,n,e)).user;return await YO(a,{displayName:t}),await Xg(a),await w_(T_(G_,"users",a.uid),{role:"student",name:t,email:n,createdAt:new Date,emailVerified:a.emailVerified,uid:a.uid,photoURL:a.photoURL||null,phoneNumber:a.phoneNumber||null,providerId:((l=a.providerData[0])==null?void 0:l.providerId)||"password"}),a},d6=async(n,e)=>{const s=(await $O(Va,n,e)).user;return s.emailVerified||(console.warn("Email not verified. Please verify your email."),await Xg(s)),console.log("User object:",s),s},RA=async()=>{const n=new Ui,t=(await iw(Va,n)).user;return await w_(T_(G_,"users",t.uid),{name:t.displayName||"Google User",email:t.email,createdAt:new Date}),t},xA=async()=>{const n=new Iu("apple.com");try{const t=(await iw(Va,n)).user;return await w_(T_(G_,"users",t.uid),{name:t.displayName||"Apple User",email:t.email,createdAt:new Date}),t}catch(e){throw console.error("Error signing in with Apple:",e),e}},IA=()=>Va.signOut(),m6=()=>Xg(Va.currentUser,{url:`${window.location.origin}/home`});/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g6=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),E1=n=>{const e=g6(n);return e.charAt(0).toUpperCase()+e.slice(1)},NA=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=H.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:c,...d},m)=>H.createElement("svg",{ref:m,..._6,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:NA("lucide",a),...d},[...c.map(([g,T])=>H.createElement(g,T)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=(n,e)=>{const t=H.forwardRef(({className:s,...a},l)=>H.createElement(y6,{ref:l,iconNode:e,className:NA(`lucide-${p6(E1(n))}`,`lucide-${n}`,s),...a}));return t.displayName=E1(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],OA=Jt("bell",v6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Po=Jt("book-open",E6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Eg=Jt("calendar",T6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],w6=Jt("chart-no-axes-column-increasing",b6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],A6=Jt("chevron-right",S6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],R6=Jt("database",C6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],DA=Jt("eye-closed",x6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],kA=Jt("eye",I6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],O6=Jt("file-text",N6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Vf=Jt("house",D6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],MA=Jt("log-out",k6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],P6=Jt("message-square",M6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],PA=Jt("mic",L6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Tg=Jt("settings",U6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],T1=Jt("shield",V6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z6=Jt("user",j6);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],bg=Jt("users",B6),F6=({isOpen:n,onClose:e,onSwitch:t})=>{const[s,a]=H.useState(!1),[l,c]=H.useState(!1);H.useEffect(()=>{n?(c(!0),setTimeout(()=>{a(!0)},10)):(a(!1),setTimeout(()=>{c(!1),Q(""),g(""),b(""),I(!1)},300))},[n]);const d=()=>{a(!1),c(!1),t()},[m,g]=H.useState(""),[T,b]=H.useState(""),[S,I]=H.useState(!1),[D,G]=H.useState(!1),[B,K]=H.useState(!1),[ee,Q]=H.useState(""),[ae,ue]=H.useState(!1),{userLoggedIn:ye}=$_(),M=N=>{N.preventDefault(),D||(I(!0),G(!0),RA().catch(P=>{I(!1),Q("An error occurred while signing in with Google. Please try again.")}))},R=N=>{N.preventDefault(),B||(I(!0),K(!0),xA().catch(P=>{I(!1),Q("An error occurred while signing in with Apple. Please try again.")}))},C=async N=>{if(N.preventDefault(),!S){if(!/\S+@\S+\.\S+/.test(m)){Q("Please enter a valid email address.");return}I(!0);try{await d6(m,T)}catch{Q("We could not log you in. Please check your email and password."),I(!1);return}finally{I(!1)}m6().catch(P=>{I(!1),Q("Please verify your email address.")})}};return l?E.jsxs("div",{children:[ye&&E.jsx(aR,{to:"/admin",replace:!0}),E.jsxs("main",{className:`relative flex-1 bg-white py-10 px-15 rounded-lg shadow-lg w-md transform transition-transform duration-300 ${s?"scale-100 translate-y-0":"scale-0 translate-y-10"}`,children:[E.jsx("a",{className:"absolute top-3 right-5 text-black text-2xl cursor-pointer",onClick:e,children:"×"}),ee&&E.jsxs("div",{className:"relative flex mt-5 mb-4 py-5 px-15 bg-[#FBE6E6] text-xs justify-center items-center rounded-sm",children:[E.jsx("svg",{className:"w-5 h-5 absolute top-auto left-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"rgb(211, 0, 1)",children:E.jsx("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none","fill-rule":"evenodd"})}),E.jsx("p",{children:ee})]}),E.jsx("h2",{className:"text-xl font-bold mb-4",children:"SalimBigkas Account"}),E.jsxs("form",{onSubmit:C,children:[E.jsxs("div",{className:"mt-10 mb-4 text-left relative",children:[E.jsx("input",{type:"email",id:"email",autoComplete:"email",required:!0,autoFocus:!0,className:`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${m?"border-[#2C3E50]":"border-gray-300"}`,placeholder:" ",value:m,onChange:N=>g(N.target.value)}),E.jsx("label",{htmlFor:"email",className:`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${m?"bg-white top-[-10px] text-[#2C3E50] text-sm":"top-4 text-gray-500 text-base"}`,children:"Email"})]}),E.jsxs("div",{className:"mt-5 mb-4 text-left relative",children:[E.jsx("input",{type:ae?"text":"password",id:"password",autoComplete:"current-password",required:!0,minLength:8,className:`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${T?"border-[#2C3E50]":"border-gray-300"}`,placeholder:" ",value:T,onChange:N=>b(N.target.value)}),E.jsx("button",{type:"button",className:"absolute right-4 top-4.5 border-none bg-transparent cursor-pointer",onClick:()=>ue(!ae),children:ae?E.jsx(kA,{size:24,color:`${T?"#2C3E50":"oklch(87.2% 0.01 258.338)"}`}):E.jsx(DA,{size:24,color:`${T?"#2C3E50":"oklch(87.2% 0.01 258.338)"}`})}),E.jsx("label",{htmlFor:"password",className:`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${T?"bg-white top-[-10px] text-[#2C3E50] text-sm":"top-4 text-gray-500 text-base"}`,children:"Password"})]}),E.jsx("p",{className:"mt-4 text-[12px] text-left",children:E.jsx("a",{className:"hover:underline",href:"#",children:"Forgot password?"})}),E.jsx("button",{type:"submit",className:`w-full mt-5 bg-[#2C3E50] text-white p-4 rounded-lg shadow-md drop-shadow-lg ${S?"opacity-50 cursor-not-allowed":"hover:font-medium hover:border-[#386BF6] hover:bg-[#34495e]"}`,children:S?"Signing In...":"Login"})]}),E.jsxs("div",{className:"flex flex-row mt-5 w-full",children:[E.jsx("div",{className:"border-b-1 mb-2.5 mr-2 w-full border-gray-200"}),E.jsx("div",{className:"text-sm mb-0.5 w-fit text-gray-500",children:"or"}),E.jsx("div",{className:"border-b-2 mb-2.5 ml-2 w-full border-gray-200"})]}),E.jsxs("button",{disabled:S,onClick:N=>{M(N)},className:`relative w-full flex mt-5 items-center justify-center text-black p-4 border rounded-lg shadow-md drop-shadow-lg ${S?"cursor-not-allowed":"hover:bg-[#e0f2f1] hover:text-[#2C3E50]  hover:border-[#386BF6] transition duration-300 active:bg-[#ecf0f1]"}`,children:[E.jsxs("svg",{className:"w-5 h-5 absolute top-auto left-5",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[E.jsxs("g",{clipPath:"url(#clip0_17_40)",children:[E.jsx("path",{d:"M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z",fill:"#4285F4"}),E.jsx("path",{d:"M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z",fill:"#34A853"}),E.jsx("path",{d:"M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z",fill:"#FBBC04"}),E.jsx("path",{d:"M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z",fill:"#EA4335"})]}),E.jsx("defs",{children:E.jsx("clipPath",{id:"clip0_17_40",children:E.jsx("rect",{width:"48",height:"48",fill:"white"})})})]}),D?"Signing In...":"Continue with Google"]}),E.jsxs("button",{disabled:S,onClick:N=>{R(N)},className:`relative w-full flex mt-4 items-center justify-center p-4 border rounded-lg shadow-md drop-shadow-lg ${S?"cursor-not-allowed":"hover:bg-[#e0f2f1] hover:text-[#2C3E50]  hover:border-[#386BF6] transition duration-300 active:bg-[#ecf0f1]"}`,children:[E.jsx("svg",{className:"w-5 h-5 absolute top-auto left-5",xmlns:"http://www.w3.org/2000/svg",fill:"black",viewBox:"0 0 22.773 22.773",children:E.jsxs("g",{children:[E.jsx("path",{d:"M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"}),E.jsx("path",{d:"M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"})]})}),B?"Signing In...":"Continue with Apple"]}),E.jsxs("p",{className:"mt-4 text-sm",children:["New to SalimBigkas? ",E.jsx("a",{className:"hover:underline",href:"#",onClick:d,children:"Create yours now."})]})]})]}):null},H6=({isOpen:n,onClose:e,onSwitch:t})=>{const[s,a]=H.useState(!1),[l,c]=H.useState(!1);H.useEffect(()=>{n?(c(!0),setTimeout(()=>{a(!0)},10)):(a(!1),setTimeout(()=>{c(!1)},300))},[n]);const d=()=>{a(!1),c(!1),t()},[m,g]=H.useState(""),[T,b]=H.useState(""),[S,I]=H.useState(""),[D,G]=H.useState(!1),[B,K]=H.useState(!1),[ee,Q]=H.useState(""),[ae,ue]=H.useState(!1),ye=async C=>{if(C.preventDefault(),!B){K(!0),Q("");try{await f6(T,S,m),t()}catch(N){Q(N.message||"An error occurred while registering. Please try again.")}finally{K(!1)}}},M=C=>{C.preventDefault(),D||(G(!0),RA().catch(N=>{G(!1),Q("An error occurred while signing in with Google. Please try again.")}))},R=C=>{C.preventDefault(),D||(G(!0),xA().catch(N=>{G(!1),Q("An error occurred while signing in with Apple. Please try again.")}))};return l?E.jsx("div",{children:E.jsxs("main",{className:`relative bg-white py-10 px-15 rounded-lg shadow-lg w-md transform transition-transform duration-300 ${s?"scale-100 translate-y-0":"scale-0 translate-y-10"}`,children:[E.jsx("a",{className:"absolute top-3 right-5 text-2xl cursor-pointer",onClick:e,children:"×"}),ee&&E.jsxs("div",{className:"relative flex gap-2 mt-5 mb-4 py-5 px-15 bg-[#FBE6E6] text-xs justify-center items-center rounded-sm",children:[E.jsx("svg",{className:"w-5 h-5 absolute top-auto left-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"rgb(211, 0, 1)",children:E.jsx("path",{d:"M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 ",stroke:"none","fill-rule":"evenodd"})}),E.jsx("p",{children:ee})]}),E.jsx("h2",{className:"text-xl font-bold mb-4",children:"Create Your SalimBigkas Account"}),E.jsxs("form",{onSubmit:ye,children:[E.jsxs("div",{className:"mt-10 mb-4 text-left relative",children:[E.jsx("input",{type:"text",id:"fullname",autoComplete:"name",required:!0,autoFocus:!0,minLength:5,className:`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${m?"border-[#2C3E50]":"border-gray-300"}`,placeholder:" ",value:m,onChange:C=>g(C.target.value)}),E.jsx("label",{className:`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${m?"bg-white top-[-10px] text-[#2C3E50] text-sm":"top-4 text-gray-500 text-base"}`,htmlFor:"fullname",children:"Full Name"})]}),E.jsxs("div",{className:"mt-5 mb-4 text-left relative",children:[E.jsx("input",{type:"email",id:"email",autoComplete:"email",required:!0,minLength:5,className:`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${T?"border-[#2C3E50]":"border-gray-300"}`,placeholder:" ",value:T,onChange:C=>b(C.target.value)}),E.jsx("label",{className:`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${T?"bg-white top-[-10px] text-[#2C3E50] text-sm":"top-4 text-gray-500 text-base"}`,htmlFor:"email",children:"Email"})]}),E.jsxs("div",{className:"mt-5 mb-4 text-left relative",children:[E.jsx("input",{type:ae?"text":"password",id:"password",autoComplete:"current-password",required:!0,minLength:8,className:`w-full p-4 border rounded-sm transition-all duration-300 focus:ring-2 focus:ring-[#2C3E50] focus:outline-none ${S?"border-[#2C3E50]":"border-gray-300"}`,placeholder:" ",value:S,onChange:C=>I(C.target.value)}),E.jsx("button",{type:"button",className:"absolute right-4 top-4.5 border-none bg-transparent cursor-pointer",onClick:()=>ue(!ae),children:ae?E.jsx(kA,{size:24,color:`${S?"#2C3E50":"oklch(87.2% 0.01 258.338)"}`}):E.jsx(DA,{size:24,color:`${S?"#2C3E50":"oklch(87.2% 0.01 258.338)"}`})}),E.jsx("label",{htmlFor:"password",className:`absolute text-sm font-medium left-4 top-4 text-[#2C3E50] px-1 transition-all duration-300 transform ${S?"bg-white top-[-10px] text-[#2C3E50] text-sm":"top-4 text-gray-500 text-base"}`,children:"Password"})]}),E.jsx("button",{type:"submit",className:`w-full mt-5 bg-[#2C3E50] text-white p-4 rounded-lg shadow-md drop-shadow-lg ${B?"opacity-50 cursor-not-allowed":"hover:font-medium hover:border-[#386BF6] hover:bg-[#34495e]"}`,disabled:B,children:B?"Registering...":"Register"})]}),E.jsxs("div",{className:"flex flex-row mt-5 w-full",children:[E.jsx("div",{className:"border-b-1 mb-2.5 mr-2 w-full border-gray-200"}),E.jsx("div",{className:"text-sm mb-0.5 w-fit text-gray-500",children:"or"}),E.jsx("div",{className:"border-b-2 mb-2.5 ml-2 w-full border-gray-200"})]}),E.jsxs("button",{disabled:D,onClick:C=>{M(C)},className:`relative w-full flex mt-5 items-center justify-center text-black p-4 border rounded-lg shadow-md drop-shadow-lg ${D?"cursor-not-allowed":"hover:bg-[#e0f2f1] hover:text-[#2C3E50]  hover:border-[#386BF6] transition duration-300 active:bg-[#ecf0f1]"}`,children:[E.jsxs("svg",{className:"w-5 h-5 absolute top-auto left-5",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[E.jsxs("g",{clipPath:"url(#clip0_17_40)",children:[E.jsx("path",{d:"M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z",fill:"#4285F4"}),E.jsx("path",{d:"M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z",fill:"#34A853"}),E.jsx("path",{d:"M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z",fill:"#FBBC04"}),E.jsx("path",{d:"M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z",fill:"#EA4335"})]}),E.jsx("defs",{children:E.jsx("clipPath",{id:"clip0_17_40",children:E.jsx("rect",{width:"48",height:"48",fill:"white"})})})]}),D?"Signing In...":"Continue with Google"]}),E.jsxs("button",{disabled:D,onClick:C=>{R(C)},className:`relative w-full flex mt-4 items-center justify-center text-black p-4 border rounded-lg shadow-md drop-shadow-lg ${D?"cursor-not-allowed":"hover:bg-[#e0f2f1] hover:text-[#2C3E50]  hover:border-[#386BF6] transition duration-300 active:bg-[#ecf0f1]"}`,children:[E.jsx("svg",{className:"w-5 h-5 absolute top-auto left-5",xmlns:"http://www.w3.org/2000/svg",fill:"black",viewBox:"0 0 22.773 22.773",children:E.jsxs("g",{children:[E.jsx("path",{d:"M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"}),E.jsx("path",{d:"M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"})]})}),D?"Signing In...":"Continue with Apple"]}),E.jsxs("p",{className:"mt-4 text-sm",children:["Already on SalimBigkas? ",E.jsx("a",{className:"hover:underline",href:"#",onClick:d,children:"Login"}),"."]})]})}):null},b1=()=>{const[n,e]=H.useState(!1),[t,s]=H.useState(!0),a=()=>{e(!0),s(!0)},l=()=>{e(!0),s(!1)},c=()=>{e(!1)};return E.jsxs("div",{className:"flex flex-wrap mx-auto bg-[#2C3E50]",children:[E.jsx(h6,{openLoginModal:a}),E.jsxs("div",{className:"flex w-full bg-white px-20 p-4 shadow-lg rounded-bl-4xl rounded-br-4xl text-left justify-between items-center",children:[E.jsxs("div",{className:"flex flex-col mt-5",children:[E.jsx("h1",{className:"text-5xl leading-[3.5rem] font-semibold",children:"Maligayang Pagdating sa SalimBigkas!"}),E.jsx("h2",{className:"mt-5 text-xl font-medium",children:"Matuto ng Filipino nang Mas Madali at Mas Matalino!"}),E.jsx("button",{className:"mt-10 w-60 text-white text-lg px-4 py-4 rounded-4xl shadow-md drop-shadow-lg bg-[#2C3E50] hover:bg-[#34495e]",children:"Simulan ang Pag-aaral"}),E.jsxs("h2",{className:"mt-5 mb-5",children:["Wala pang account? ",E.jsx("a",{href:"#",onClick:l,children:"Magrehistro!"})]})]}),E.jsxs("div",{className:"flex right-0 top-0",children:[E.jsx("img",{src:vg,alt:"Sample Icon",className:"w-auto h-auto absolute top-30 right-60"}),E.jsx("img",{src:nf,alt:"Sample Icon",className:"w-auto h-auto absolute top-30 right-15"})]})]}),n&&E.jsx("div",{className:"fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center",children:t?E.jsx(F6,{isOpen:n,onClose:c,onSwitch:l}):E.jsx(H6,{isOpen:n,onClose:c,onSwitch:a})})]})},q6=()=>{const[n,e]=H.useState("dashboard"),[t,s]=H.useState(!1),a=zf(),{currentUser:l}=$_(),c=l||{displayName:"Admin",email:"admin@salimbigkas.edu",notifications:8},d={totalUsers:1245,activeTeachers:32,activeStudents:1213,totalCourses:48},m=[{id:1,type:"user",action:"New user registered",name:"Zyron Enrique",role:"Student",time:"10 minutes ago"},{id:2,type:"course",action:"New course created",name:"Tamang Bigkas at Diin",teacher:"Prof. Emily Chen",time:"2 hours ago"},{id:3,type:"system",action:"System update completed",details:"Version 2.4.1",time:"Yesterday"},{id:4,type:"user",action:"User role changed",name:"Cheryl Lou Tinaan",role:"Teacher",time:"Yesterday"}],g=[{id:1,name:"Database",status:"Operational",uptime:"99.9%",color:"green"},{id:2,name:"API Services",status:"Operational",uptime:"99.7%",color:"green"},{id:3,name:"Storage",status:"Operational",uptime:"99.8%",color:"green"},{id:4,name:"Authentication",status:"Operational",uptime:"99.9%",color:"green"}],T=I=>{s(!0),setTimeout(()=>{e(I),s(!1)},100)},b=()=>{s(!0),setTimeout(()=>{IA().then(()=>{a("/")}).catch(I=>{console.error("Error signing out:",I)})},800)},S=I=>{s(!0),setTimeout(()=>{a(`/${I}`)},800)};return E.jsxs("div",{className:"min-h-screen bg-white flex",children:[E.jsxs("div",{className:"w-20 hover:w-64 border-r border-gray-200 flex flex-col justify-between overflow-hidden transition-width duration-300 ease-in-out sticky top-0 h-screen",children:[E.jsxs("div",{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"relative w-64 px-20 py-4 flex items-center gap-2 border-b-1 border-gray-200",children:[E.jsx(T1,{size:34,className:"absolute top-auto left-6"}),E.jsx("h2",{className:"whitespace-nowrap font-bold",children:"SalimBigkas Admin"})]}),E.jsxs("nav",{className:"flex-1 p-4 space-y-2",children:[E.jsx("button",{variant:n==="dashboard"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="dashboard"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("dashboard"),autoFocus:!0,children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Vf,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Dashboard"})]})}),E.jsx("button",{variant:n==="users"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="users"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("users"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(bg,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Users"})]})}),E.jsx("button",{variant:"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="courses"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("courses"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Po,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Courses"})]})}),E.jsx("button",{variant:n==="pronunciation"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="pronunciation"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("pronunciation"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(PA,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Pronunciation"})]})}),E.jsx("button",{variant:"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="calendar"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("calendar"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(w6,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Analytics"})]})}),E.jsx("button",{variant:n==="system"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="system"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("system"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(R6,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"System"})]})}),E.jsx("div",{className:"border-b-1 mb-2.5 mr-2 w-full border-gray-200"}),E.jsx("button",{variant:"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="settings"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("settings"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Tg,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Settings"})]})}),E.jsx("button",{variant:"ghost",className:"w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg",onClick:()=>a("/"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Vf,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Home"})]})}),E.jsx("button",{variant:"ghost",className:"w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg",onClick:b,children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(MA,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Logout"})]})})]})]}),E.jsx("div",{className:"p-5 border-t border-gray-200",children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx("img",{src:vg,alt:"Admin Avatar",className:"absolute top-auto left-0 h-10 w-10 rounded-full border border-gray-200 shadow-sm"}),E.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[E.jsx("p",{className:"text-sm font-medium truncate",children:c.displayName}),E.jsx("p",{className:"text-xs",children:c.email})]})]})})]}),E.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[E.jsxs("header",{className:"h-16 border-b border-gray-200 flex items-center justify-between px-6",children:[E.jsx("div",{className:"md:hidden",children:E.jsx(T1,{className:"h-6 w-6 text-primary"})}),E.jsxs("div",{className:"flex items-center gap-4 justify-between w-full",children:[E.jsxs("div",{className:"flex gap-2",children:[E.jsx("button",{variant:"outline",className:"px-3 py-2 text-sm shadow-sm rounded-sm border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",onClick:()=>S("teacher"),children:"Teacher View"}),E.jsx("button",{variant:"outline",className:"px-3 py-2 text-sm shadow-sm rounded-sm border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",onClick:()=>S("student"),children:"Student View"})]}),E.jsxs("div",{className:"flex gap-4 items-center justify-between",children:[E.jsxs("button",{variant:"ghost",size:"icon",className:"relative",children:[E.jsx(OA,{className:"h-5 w-5"}),c.notifications>0&&E.jsx("div",{className:"absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0",children:c.notifications})]}),E.jsx("img",{src:vg,alt:"Admin Avatar",className:"h-10 w-10 rounded-full border border-gray-200 shadow-sm hover:cursor-pointer"})]})]})]}),E.jsx("main",{className:"flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6",children:E.jsxs("div",{className:"max-w-8xl mx-auto space-y-6",children:[n==="dashboard"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Admin Dashboard"}),E.jsxs("button",{variant:"outline",className:"flex items-center gap-2 px-3 py-2 text-sm shadow-sm rounded-sm border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",children:[E.jsx(Eg,{className:"mr-2 h-4 w-4"}),"April 2025"]})]}),E.jsxs("div",{className:"grid gap-4 md:grid-cols-4",children:[E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Total Users"})}),E.jsxs("div",{children:[E.jsx("div",{className:"text-2xl font-bold",children:d.totalUsers}),E.jsx("p",{className:"text-xs text-gray-500 text-muted-foreground",children:"+24 from last month"})]})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Active Teachers"})}),E.jsxs("div",{children:[E.jsx("div",{className:"text-2xl font-bold",children:d.activeTeachers}),E.jsx("p",{className:"text-xs text-gray-500 text-muted-foreground",children:"+3 from last month"})]})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Active Students"})}),E.jsxs("div",{children:[E.jsx("div",{className:"text-2xl font-bold",children:d.activeStudents}),E.jsx("p",{className:"text-xs text-gray-500 text-muted-foreground",children:"+21 from last month"})]})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Total Courses"})}),E.jsxs("div",{children:[E.jsx("div",{className:"text-2xl font-bold",children:d.totalCourses}),E.jsx("p",{className:"text-xs text-gray-500 text-muted-foreground",children:"+5 from last month"})]})]})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"Recent Activities"}),E.jsx("h2",{className:"text-gray-400",children:"Latest actions across the platform"})]}),E.jsx("div",{className:"w-full space-y-4 mt-5",children:m.map(I=>E.jsxs("div",{className:"flex items-start gap-4 p-3 rounded-lg transition-colors duration-200 hover:bg-gray-50 justify-between",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsxs("div",{className:"rounded-full p-2 bg-[#2C3E50] flex items-center justify-center",children:[I.type==="user"&&E.jsx(z6,{size:18,color:"white"}),I.type==="course"&&E.jsx(Po,{size:18,color:"white"}),I.type==="system"&&E.jsx(Tg,{size:18,color:"white"})]}),E.jsxs("div",{className:"flex-1",children:[E.jsx("h4",{className:"text-sm font-medium",children:I.action}),E.jsxs("div",{className:"text-xs text-gray-500 text-muted-foreground mt-1",children:[I.name&&E.jsx("p",{children:I.name}),I.role&&E.jsxs("p",{children:["Role: ",I.role]}),I.teacher&&E.jsxs("p",{children:["Teacher: ",I.teacher]}),I.details&&E.jsx("p",{children:I.details})]})]})]}),E.jsx("div",{className:"text-xs text-muted-foreground",children:I.time})]},I.id))})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"System Status"}),E.jsx("h2",{className:"text-gray-400",children:"Current status of platform services"})]}),E.jsx("div",{className:"w-full space-y-4 mt-5",children:g.map(I=>E.jsxs("div",{className:"flex items-center justify-between px-6 py-3 rounded-lg border border-gray-200 transition-colors duration-200 hover:bg-gray-50",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:`h-3 w-3 rounded-full ${I.color==="green"?"bg-green-500":I.color==="red"?"bg-red-500":I.color==="yellow"?"bg-yellow-500":"bg-gray-500"}`}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium",children:I.name}),E.jsxs("p",{className:"text-sm text-muted-foreground text-gray-500",children:["Uptime: ",I.uptime]})]})]}),E.jsx("div",{className:"rounded-sm px-2 py-1 text-xs font-medium text-green-500 border border-green-200 bg-green-50",children:I.status})]},I.id))})]})]}),n==="users"&&E.jsxs("div",{className:"space-y-6",children:[E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"User Management"})}),E.jsxs("div",{children:[E.jsxs("div",{children:[E.jsx("div",{children:"All Users"}),E.jsx("div",{children:"Manage users and their roles"})]}),E.jsx("div",{children:E.jsx("div",{className:"space-y-4",children:E.jsx("p",{children:"User management interface would go here."})})})]})]}),n==="pronunciation"&&E.jsxs("div",{className:"space-y-6",children:[E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Pronunciation Exercises"})}),E.jsx("div",{className:"grid gap-6 md:grid-cols-1 flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:E.jsxs("div",{children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"Pronunciation Management"}),E.jsx("h2",{className:"text-gray-500",children:"Manage pronunciation exercises across the platform"})]}),E.jsx("div",{className:"space-y-4 mt-5",children:E.jsx("p",{children:"Pronunciation management interface would go here."})})]})})]}),n==="system"&&E.jsxs("div",{className:"space-y-6 ",children:[E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"System Management"})}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"System Status"}),E.jsx("h2",{className:"text-gray-400",children:"Current status of platform services"})]}),E.jsx("div",{className:"w-full space-y-4 mt-5",children:g.map(I=>E.jsxs("div",{className:"flex items-center justify-between px-6 py-3 rounded-lg border border-gray-200 transition-colors duration-200 hover:bg-gray-50",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:`h-3 w-3 rounded-full ${I.color==="green"?"bg-green-500":I.color==="red"?"bg-red-500":I.color==="yellow"?"bg-yellow-500":"bg-gray-500"}`}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium",children:I.name}),E.jsxs("p",{className:"text-sm text-muted-foreground text-gray-500",children:["Uptime: ",I.uptime]})]})]}),E.jsx("div",{className:"rounded-sm px-2 py-1 text-xs font-medium text-green-500 border border-green-200 bg-green-50",children:I.status})]},I.id))})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"System Configuration"}),E.jsx("h2",{className:"text-gray-400",children:"Manage platform settings"})]}),E.jsx("div",{className:"space-y-4 mt-5",children:E.jsx("p",{children:"System configuration interface would go here."})})]})]})]})})]})]})},G6=()=>{const[n,e]=H.useState("dashboard"),[t,s]=H.useState(!1),a=zf(),{currentUser:l}=$_(),c=l||{displayName:"Teacher",email:"teacher@salimbigkas.edu",notifications:8},d={activeStudents:87,coursesManaged:4,averageScore:78},m=[{id:1,title:"Pagkilala sa Alpabeto",date:"Today",time:"2:00 PM",students:24},{id:2,title:"Pangngalan at Pandiwa",date:"Tomorrow",time:"10:00 AM",students:18},{id:3,title:"Pagkilala sa Alpabeto",date:"Apr 18",time:"1:30 PM",students:15}],g=[{id:1,title:"Unang Pagususlit",course:"Pagkilala sa Alpabeto",submissions:22,pending:2},{id:2,title:"Pandiwa'y iyong itama",course:"Pangngalan at Pandiwa",submissions:15,pending:3},{id:3,title:"Bigkasin ang sampung salita",course:"Tamang Bigkas at Diin",submissions:12,pending:3}],T=S=>{s(!0),setTimeout(()=>{e(S),s(!1)},100)},b=()=>{s(!0),setTimeout(()=>{IA().then(()=>{a("/")}).catch(S=>{console.error("Error signing out:",S)})},800)};return E.jsxs("div",{className:"min-h-screen bg-white flex",children:[E.jsxs("div",{className:"w-20 hover:w-64 border-r border-gray-200 flex flex-col justify-between overflow-hidden transition-width duration-300 ease-in-out sticky top-0 h-screen",children:[E.jsxs("div",{className:"flex flex-col h-full",children:[E.jsxs("div",{className:"relative w-64 px-20 py-4 flex items-center gap-2 border-b-1 border-gray-200",children:[E.jsx(Po,{size:34,className:"absolute top-auto left-6"}),E.jsx("h2",{className:"whitespace-nowrap font-bold",children:"SalimBigkas Teacher"})]}),E.jsxs("nav",{className:"flex-1 p-4 space-y-2",children:[E.jsx("button",{variant:n==="dashboard"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="dashboard"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("dashboard"),autoFocus:!0,children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Vf,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Dashboard"})]})}),E.jsx("button",{variant:n==="courses"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="courses"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("courses"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Po,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{className:"whitespace-nowrap",children:"My Courses"})]})}),E.jsx("button",{variant:n==="students"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="students"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("students"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(bg,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Students"})]})}),E.jsx("button",{variant:n==="assignments"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="assignments"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("assignments"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(O6,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Assignments"})]})}),E.jsx("button",{variant:n==="pronunciation"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="pronunciation"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("pronunciation"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(PA,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Pronunciation"})]})}),E.jsx("button",{variant:n==="schedules"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="schedules"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("schedules"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Eg,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Schedule"})]})}),E.jsx("button",{variant:n==="messages"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="messages"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("messages"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(P6,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Messages"})]})}),E.jsx("div",{className:"border-b-1 mb-2.5 mr-2 w-full border-gray-200"}),E.jsx("button",{variant:n==="settings"?"default":"ghost",className:`w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg ${n==="settings"?"bg-[#2C3E50] text-white":""}`,onClick:()=>T("settings"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Tg,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Settings"})]})}),E.jsx("button",{variant:"ghost",className:"w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg",onClick:()=>a("/"),children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(Vf,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Home"})]})}),E.jsx("button",{variant:"ghost",className:"w-full py-1.5 px-3 rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:shadow-sm focus:drop-shadow-lg",onClick:b,children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx(MA,{size:22,className:"absolute top-0 left-0"}),E.jsx("span",{children:"Logout"})]})})]})]}),E.jsx("div",{className:"p-5 border-t border-gray-200",children:E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx("img",{src:nf,alt:"Teacher Avatar",className:"absolute top-auto left-0 h-10 w-10 rounded-full border border-gray-200 shadow-sm"}),E.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[E.jsx("p",{className:"text-sm font-medium truncate",children:c.displayName}),E.jsx("p",{className:"text-xs",children:c.email})]})]})})]}),E.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[E.jsxs("header",{className:"h-16 border-b border-gray-200 flex items-center justify-between px-6",children:[E.jsx("div",{className:"md:hidden",children:E.jsx(Po,{className:"h-6 w-6 text-primary"})}),E.jsxs("div",{className:"flex items-center gap-4 justify-end w-full",children:[E.jsxs("button",{variant:"ghost",size:"icon",className:"relative",children:[E.jsx(OA,{className:"h-5 w-5"}),c.notifications>0&&E.jsx("div",{className:"absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0",children:c.notifications})]}),E.jsx("img",{src:nf,alt:"Teacher Avatar",className:"h-10 w-10 rounded-full border border-gray-200 shadow-sm hover:cursor-pointer"})]})]}),E.jsx("main",{className:"flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6",children:E.jsxs("div",{className:"max-w-8xl mx-auto space-y-6",children:[n==="dashboard"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Teacher Dashboard"}),E.jsxs("button",{variant:"outline",className:"flex items-center gap-2 px-3 py-2 text-sm shadow-sm rounded-sm border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",children:[E.jsx(Eg,{className:"mr-2 h-4 w-4"}),"April 2025"]})]}),E.jsxs("div",{className:"grid gap-4 md:grid-cols-3",children:[E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Active Students"})}),E.jsxs("div",{children:[E.jsx("div",{className:"text-2xl font-bold",children:d.activeStudents}),E.jsx("p",{className:"text-xs text-gray-500 text-muted-foreground",children:"+5 students from last month"})]})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Courses Managed"})}),E.jsxs("div",{children:[E.jsx("div",{className:"text-2xl font-bold",children:d.coursesManaged}),E.jsx("p",{className:"text-xs text-gray-500 text-muted-foreground",children:"2 active, 2 upcoming"})]})]}),E.jsxs("div",{className:"flex flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsx("div",{className:"pb-2",children:E.jsx("div",{className:"text-sm font-medium",children:"Average Student Score"})}),E.jsxs("div",{className:"w-full",children:[E.jsxs("div",{className:"text-2xl font-bold",children:[d.averageScore,"%"]}),E.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mt-2",children:E.jsx("div",{className:"bg-[#2C3E50] h-2 rounded-full",style:{width:`${d.averageScore}%`}})})]})]})]}),E.jsxs("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-7",children:[E.jsxs("div",{className:"lg:col-span-4 flex flex-col text-left items-start p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{className:"w-full",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("h2",{className:"font-medium",children:"Upcoming Sessions"}),E.jsxs("button",{variant:"ghost",size:"sm",className:"gap-1 px-3 py-2 flex items-center text-xs rounded-sm hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",children:["View All ",E.jsx(A6,{size:16})]})]}),E.jsx("h2",{className:"text-gray-500 text-sm mt-2",children:"Your scheduled teaching sessions"})]}),E.jsx("div",{className:"space-y-4 w-full mt-5",children:m.map(S=>E.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg border-gray-200",children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:"rounded-full p-2 bg-[#2C3E50] flex items-center justify-center",children:E.jsx(Po,{size:18,color:"white"})}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium",children:S.title}),E.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[E.jsx("p",{className:"text-xs text-gray-400",children:S.date}),E.jsx("span",{className:"text-xs text-gray-400",children:"•"}),E.jsx("p",{className:"text-xs text-gray-400",children:S.time})]})]})]}),E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500",children:[E.jsx(bg,{size:14}),E.jsx("span",{className:"text-sm text-muted-foreground",children:S.students})]}),E.jsx("button",{className:"flex items-center gap-1 px-3 py-2 text-xs shadow-sm rounded-xs border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",children:"Prepare"})]})]},S.id))})]}),E.jsxs("div",{className:"flex flex-col lg:col-span-3 text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"Recent Assignments"}),E.jsx("h2",{className:"text-gray-400",children:"Track student submissions"})]}),E.jsx("div",{className:"w-full space-y-4 mt-5",children:g.map(S=>E.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg space-y-2 justify-between",children:[E.jsxs("div",{className:"flex justify-between items-start",children:[E.jsx("h4",{className:"font-medium",children:S.title}),E.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-sm border border-gray-200",children:[S.pending," pending"]})]}),E.jsx("p",{className:"text-xs text-muted-foreground",children:S.course}),E.jsxs("div",{className:"flex justify-between items-center",children:[E.jsxs("div",{className:"text-sm",children:[E.jsx("span",{className:"font-medium",children:S.submissions})," ",E.jsx("span",{className:"text-gray-500",children:"submissions"})]}),E.jsx("button",{className:"flex items-center gap-1 px-3 py-2 text-xs rounded-xs hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",children:"Review"})]})]},S.id))})]})]})]}),n==="pronunciation"&&E.jsxs("div",{className:"space-y-6",children:[E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Pronunciation Exercises"})}),E.jsx("div",{className:"grid gap-6 md:grid-cols-1 flex-col text-left items-start justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:E.jsxs("div",{children:[E.jsxs("div",{children:[E.jsx("h2",{className:"font-medium",children:"Pronunciation Management"}),E.jsx("h2",{className:"text-gray-500",children:"Manage pronunciation exercises across the platform"})]}),E.jsx("div",{className:"space-y-4 mt-5",children:E.jsx("p",{children:"Pronunciation management interface would go here."})})]})})]}),n==="students"&&E.jsxs("div",{className:"space-y-6",children:[E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("h1",{className:"text-2xl font-bold tracking-tight",children:"Student Management"})}),E.jsxs("div",{className:"grid gap-6 md:grid-cols-1 flex-col text-left items-center justify-between p-6 rounded-lg bg-white shadow-sm border border-gray-200",children:[E.jsxs("div",{className:"flex flex-col justify-between",children:[E.jsx("h2",{className:"font-medium",children:"Student List"}),E.jsx("h2",{className:"text-sm text-gray-500",children:"Manage your students and their progress"})]}),E.jsx("div",{className:"grid gap-6 md:grid-cols-1 flex-col text-left items-center justify-between",children:E.jsx("div",{className:"space-y-4",children:[{id:1,name:"Alex Johnson",email:"alex.j@example.com",progress:78,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"},{id:2,name:"Jamie Smith",email:"jamie.s@example.com",progress:92,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie"},{id:3,name:"Taylor Wilson",email:"taylor.w@example.com",progress:65,avatar:"https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor"}].map(S=>E.jsxs("div",{className:"flex items-center justify-between p-4 rounded-lg border border-gray-200",children:[E.jsxs("div",{className:"relative flex items-center gap-3 px-15",children:[E.jsx("img",{src:nf,alt:"Teacher Avatar",className:"absolute top-auto left-0 h-10 w-10 rounded-full border border-gray-200 shadow-sm"}),E.jsxs("div",{children:[E.jsx("h4",{className:"font-medium",children:S.name}),E.jsx("p",{className:"text-sm text-muted-foreground",children:S.email})]})]}),E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsxs("div",{className:"text-right",children:[E.jsxs("div",{className:"font-medium",children:[S.progress,"%"]}),E.jsx("div",{className:"text-xs text-gray-500",children:"Progress"})]}),E.jsx("button",{className:"flex items-center gap-1 px-3 py-2 text-xs rounded-xs shadow-xs border border-gray-200 hover:bg-gray-100 focus:text-white focus:bg-[#2C3E50] focus:drop-shadow-lg",children:"View Details"})]})]},S.id))})})]})]})]})})]})]})};function $6(){return E.jsx("div",{className:"App",children:E.jsx(c6,{children:E.jsxs(lR,{children:[E.jsx(wu,{path:"/",element:E.jsx(b1,{})}),E.jsx(wu,{path:"/home",element:E.jsx(b1,{})}),E.jsx(wu,{path:"/admin",element:E.jsx(q6,{})}),E.jsx(wu,{path:"/teacher",element:E.jsx(G6,{})})]})})})}const K6="/salimbigkas-filipino-e-learning-app/";_2.createRoot(document.getElementById("root")).render(E.jsx(H.StrictMode,{children:E.jsx(OR,{basename:K6,children:E.jsx($6,{})})}));
