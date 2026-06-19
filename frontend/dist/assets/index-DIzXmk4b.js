var nm=Object.defineProperty;var im=(n,t,e)=>t in n?nm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var q=(n,t,e)=>im(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const me={},Zs=[],qn=()=>{},Xf=()=>!1,ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ga=n=>n.startsWith("onUpdate:"),Ue=Object.assign,yc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},sm=Object.prototype.hasOwnProperty,se=(n,t)=>sm.call(n,t),Nt=Array.isArray,Qs=n=>to(n)==="[object Map]",qf=n=>to(n)==="[object Set]",ru=n=>to(n)==="[object Date]",Wt=n=>typeof n=="function",Ee=n=>typeof n=="string",yn=n=>typeof n=="symbol",oe=n=>n!==null&&typeof n=="object",Yf=n=>(oe(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),jf=Object.prototype.toString,to=n=>jf.call(n),rm=n=>to(n).slice(8,-1),$f=n=>to(n)==="[object Object]",_a=n=>Ee(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),va=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},om=/-\w/g,Ln=va(n=>n.replace(om,t=>t.slice(1).toUpperCase())),am=/\B([A-Z])/g,Xi=va(n=>n.replace(am,"-$1").toLowerCase()),Kf=va(n=>n.charAt(0).toUpperCase()+n.slice(1)),Va=va(n=>n?`on${Kf(n)}`:""),kn=(n,t)=>!Object.is(n,t),Wo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Jf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Sc=n=>{const t=parseFloat(n);return isNaN(t)?n:t},lm=n=>{const t=Ee(n)?Number(n):NaN;return isNaN(t)?n:t};let ou;const xa=()=>ou||(ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fi(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ee(i)?fm(i):Fi(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ee(n)||oe(n))return n}const cm=/;(?![^(]*\))/g,um=/:([^]+)/,hm=/\/\*[^]*?\*\//g;function fm(n){const t={};return n.replace(hm,"").split(cm).forEach(e=>{if(e){const i=e.split(um);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function li(n){let t="";if(Ee(n))t=n;else if(Nt(n))for(let e=0;e<n.length;e++){const i=li(n[e]);i&&(t+=i+" ")}else if(oe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=Mc(dm);function Zf(n){return!!n||n===""}function mm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Ec(n[i],t[i]);return e}function Ec(n,t){if(n===t)return!0;let e=ru(n),i=ru(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=yn(n),i=yn(t),e||i)return n===t;if(e=Nt(n),i=Nt(t),e||i)return e&&i?mm(n,t):!1;if(e=oe(n),i=oe(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Ec(n[o],t[o]))return!1}}return String(n)===String(t)}const Qf=n=>!!(n&&n.__v_isRef===!0),Qt=n=>Ee(n)?n:n==null?"":Nt(n)||oe(n)&&(n.toString===jf||!Wt(n.toString))?Qf(n)?Qt(n.value):JSON.stringify(n,td,2):String(n),td=(n,t)=>Qf(t)?td(n,t.value):Qs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ga(i,r)+" =>"]=s,e),{})}:qf(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ga(e))}:yn(t)?Ga(t):oe(t)&&!Nt(t)&&!$f(t)?String(t):t,Ga=(n,t="")=>{var e;return yn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class ed{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ie;try{return Ie=this,t()}finally{Ie=e}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function nd(n){return new ed(n)}function id(){return Ie}function gm(n,t=!1){Ie&&Ie.cleanups.push(n)}let _e;const ka=new WeakSet;class sd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ka.has(this)&&(ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||od(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,au(this),ad(this);const t=_e,e=In;_e=this,In=!0;try{return this.fn()}finally{ld(this),_e=t,In=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Tc(t);this.deps=this.depsTail=void 0,au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let rd=0,Nr,Or;function od(n,t=!1){if(n.flags|=8,t){n.next=Or,Or=n;return}n.next=Nr,Nr=n}function bc(){rd++}function wc(){if(--rd>0)return;if(Or){let t=Or;for(Or=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Nr;){let t=Nr;for(Nr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function ad(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ld(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Tc(i),_m(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function jl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(cd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function cd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qr)||(n.globalVersion=qr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!jl(n))))return;n.flags|=2;const t=n.dep,e=_e,i=In;_e=n,In=!0;try{ad(n);const s=n.fn(n._value);(t.version===0||kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,In=i,ld(n),n.flags&=-3}}function Tc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Tc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function _m(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let In=!0;const ud=[];function mi(){ud.push(In),In=!1}function gi(){const n=ud.pop();In=n===void 0?!0:n}function au(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let qr=0;class vm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ac{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!In||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new vm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,hd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,qr++,this.notify(t)}notify(t){bc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{wc()}}}function hd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)hd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const jo=new WeakMap,gs=Symbol(""),$l=Symbol(""),Yr=Symbol("");function We(n,t,e){if(In&&_e){let i=jo.get(n);i||jo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Ac),s.map=i,s.key=e),s.track()}}function ci(n,t,e,i,s,r){const o=jo.get(n);if(!o){qr++;return}const a=l=>{l&&l.trigger()};if(bc(),t==="clear")o.forEach(a);else{const l=Nt(n),c=l&&_a(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Yr||!yn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Yr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Qs(n)&&a(o.get($l)));break;case"delete":l||(a(o.get(gs)),Qs(n)&&a(o.get($l)));break;case"set":Qs(n)&&a(o.get(gs));break}}wc()}function xm(n,t){const e=jo.get(n);return e&&e.get(t)}function ys(n){const t=te(n);return t===n?t:(We(t,"iterate",Yr),dn(n)?t:t.map(Dn))}function Ma(n){return We(n=te(n),"iterate",Yr),n}function Hn(n,t){return _i(n)?rr(di(n)?Dn(t):t):Dn(t)}const Mm={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,n=>Hn(this,n))},concat(...n){return ys(this).concat(...n.map(t=>Nt(t)?ys(t):t))},entries(){return Wa(this,"entries",n=>(n[1]=Hn(this,n[1]),n))},every(n,t){return Kn(this,"every",n,t,void 0,arguments)},filter(n,t){return Kn(this,"filter",n,t,e=>e.map(i=>Hn(this,i)),arguments)},find(n,t){return Kn(this,"find",n,t,e=>Hn(this,e),arguments)},findIndex(n,t){return Kn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Kn(this,"findLast",n,t,e=>Hn(this,e),arguments)},findLastIndex(n,t){return Kn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Kn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return ys(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,t){return Kn(this,"map",n,t,void 0,arguments)},pop(){return gr(this,"pop")},push(...n){return gr(this,"push",n)},reduce(n,...t){return lu(this,"reduce",n,t)},reduceRight(n,...t){return lu(this,"reduceRight",n,t)},shift(){return gr(this,"shift")},some(n,t){return Kn(this,"some",n,t,void 0,arguments)},splice(...n){return gr(this,"splice",n)},toReversed(){return ys(this).toReversed()},toSorted(n){return ys(this).toSorted(n)},toSpliced(...n){return ys(this).toSpliced(...n)},unshift(...n){return gr(this,"unshift",n)},values(){return Wa(this,"values",n=>Hn(this,n))}};function Wa(n,t,e){const i=Ma(n),s=i[t]();return i!==n&&!dn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const ym=Array.prototype;function Kn(n,t,e,i,s,r){const o=Ma(n),a=o!==n&&!dn(n),l=o[t];if(l!==ym[t]){const h=l.apply(n,r);return a?Dn(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,Hn(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function lu(n,t,e,i){const s=Ma(n),r=s!==n&&!dn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Hn(n,c)),e.call(this,c,Hn(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?Hn(n,l):l}function Xa(n,t,e){const i=te(n);We(i,"iterate",Yr);const s=i[t](...e);return(s===-1||s===!1)&&ya(e[0])?(e[0]=te(e[0]),i[t](...e)):s}function gr(n,t,e=[]){mi(),bc();const i=te(n)[t].apply(n,e);return wc(),gi(),i}const Sm=Mc("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yn));function Em(n){yn(n)||(n=String(n));const t=te(this);return We(t,"has",n),t.hasOwnProperty(n)}class dd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Dm:_d:r?gd:md).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Nt(t);if(!s){let l;if(o&&(l=Mm[e]))return l;if(e==="hasOwnProperty")return Em}const a=Reflect.get(t,e,Te(t)?t:i);if((yn(e)?fd.has(e):Sm(e))||(s||We(t,"get",e),r))return a;if(Te(a)){const l=o&&_a(e)?a:a.value;return s&&oe(l)?Jl(l):l}return oe(a)?s?Jl(a):eo(a):a}}class pd extends dd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Nt(t)&&_a(e);if(!this._isShallow){const c=_i(r);if(!dn(i)&&!_i(i)&&(r=te(r),i=te(i)),!o&&Te(r)&&!Te(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:se(t,e),l=Reflect.set(t,e,i,Te(t)?t:s);return t===te(s)&&(a?kn(i,r)&&ci(t,"set",e,i):ci(t,"add",e,i)),l}deleteProperty(t,e){const i=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ci(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!yn(e)||!fd.has(e))&&We(t,"has",e),i}ownKeys(t){return We(t,"iterate",Nt(t)?"length":gs),Reflect.ownKeys(t)}}class bm extends dd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const wm=new pd,Tm=new bm,Am=new pd(!0);const Kl=n=>n,lo=n=>Reflect.getPrototypeOf(n);function Rm(n,t,e){return function(...i){const s=this.__v_raw,r=te(s),o=Qs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Kl:t?rr:Dn;return!t&&We(r,"iterate",l?$l:gs),Ue(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function co(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Cm(n,t){const e={get(s){const r=this.__v_raw,o=te(r),a=te(s);n||(kn(s,a)&&We(o,"get",s),We(o,"get",a));const{has:l}=lo(o),c=t?Kl:n?rr:Dn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&We(te(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=te(r),a=te(s);return n||(kn(s,a)&&We(o,"has",s),We(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=te(a),c=t?Kl:n?rr:Dn;return!n&&We(l,"iterate",gs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ue(e,n?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(s){const r=te(this),o=lo(r),a=te(s),l=!t&&!dn(s)&&!_i(s)?a:s;return o.has.call(r,l)||kn(s,l)&&o.has.call(r,s)||kn(a,l)&&o.has.call(r,a)||(r.add(l),ci(r,"add",l,l)),this},set(s,r){!t&&!dn(r)&&!_i(r)&&(r=te(r));const o=te(this),{has:a,get:l}=lo(o);let c=a.call(o,s);c||(s=te(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?kn(r,u)&&ci(o,"set",s,r):ci(o,"add",s,r),this},delete(s){const r=te(this),{has:o,get:a}=lo(r);let l=o.call(r,s);l||(s=te(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=te(this),r=s.size!==0,o=s.clear();return r&&ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Rm(s,n,t)}),e}function Rc(n,t){const e=Cm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(se(e,s)&&s in i?e:i,s,r)}const Pm={get:Rc(!1,!1)},Lm={get:Rc(!1,!0)},Im={get:Rc(!0,!1)};const md=new WeakMap,gd=new WeakMap,_d=new WeakMap,Dm=new WeakMap;function Um(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eo(n){return _i(n)?n:Cc(n,!1,wm,Pm,md)}function Nm(n){return Cc(n,!1,Am,Lm,gd)}function Jl(n){return Cc(n,!0,Tm,Im,_d)}function Cc(n,t,e,i,s){if(!oe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Um(rm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function di(n){return _i(n)?di(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function ya(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function Pc(n){return!se(n,"__v_skip")&&Object.isExtensible(n)&&Jf(n,"__v_skip",!0),n}const Dn=n=>oe(n)?eo(n):n,rr=n=>oe(n)?Jl(n):n;function Te(n){return n?n.__v_isRef===!0:!1}function Pe(n){return Om(n,!1)}function Om(n,t){return Te(n)?n:new Fm(n,t)}class Fm{constructor(t,e){this.dep=new Ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:Dn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||dn(t)||_i(t);t=i?t:te(t),kn(t,e)&&(this._rawValue=t,this._value=i?t:Dn(t),this.dep.trigger())}}function Lt(n){return Te(n)?n.value:n}const Bm={get:(n,t,e)=>t==="__v_raw"?n:Lt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Te(s)&&!Te(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function vd(n){return di(n)?n:new Proxy(n,Bm)}function zm(n){const t=Nt(n)?new Array(n.length):{};for(const e in n)t[e]=Vm(n,e);return t}class Hm{constructor(t,e,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=yn(e)?e:String(e),this._raw=te(t);let s=!0,r=t;if(!Nt(t)||yn(this._key)||!_a(this._key))do s=!ya(r)||dn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=Lt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Te(this._raw[this._key])){const e=this._object[this._key];if(Te(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return xm(this._raw,this._key)}}function Vm(n,t,e){return new Hm(n,t,e)}class Gm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return od(this,!0),!0}get value(){const t=this.dep.track();return cd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function km(n,t,e=!1){let i,s;return Wt(n)?i=n:(i=n.get,s=n.set),new Gm(i,s,e)}const uo={},$o=new WeakMap;let ls;function Wm(n,t=!1,e=ls){if(e){let i=$o.get(e);i||$o.set(e,i=[]),i.push(n)}}function Xm(n,t,e=me){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:dn(S)||s===!1||s===0?ui(S,1):ui(S);let u,h,f,d,g=!1,_=!1;if(Te(n)?(h=()=>n.value,g=dn(n)):di(n)?(h=()=>c(n),g=!0):Nt(n)?(_=!0,g=n.some(S=>di(S)||dn(S)),h=()=>n.map(S=>{if(Te(S))return S.value;if(di(S))return c(S);if(Wt(S))return l?l(S,2):S()})):Wt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){mi();try{f()}finally{gi()}}const S=ls;ls=u;try{return l?l(n,3,[d]):n(d)}finally{ls=S}}:h=qn,t&&s){const S=h,L=s===!0?1/0:s;h=()=>ui(S(),L)}const m=id(),p=()=>{u.stop(),m&&m.active&&yc(m.effects,u)};if(r&&t){const S=t;t=(...L)=>{const T=S(...L);return p(),T}}let E=_?new Array(n.length).fill(uo):uo;const x=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const L=u.run();if(S||s||g||(_?L.some((T,R)=>kn(T,E[R])):kn(L,E))){f&&f();const T=ls;ls=u;try{const R=[L,E===uo?void 0:_&&E[0]===uo?[]:E,d];E=L,l?l(t,3,R):t(...R)}finally{ls=T}}}else u.run()};return a&&a(x),u=new sd(h),u.scheduler=o?()=>o(x,!1):x,d=S=>Wm(S,!1,u),f=u.onStop=()=>{const S=$o.get(u);if(S){if(l)l(S,4);else for(const L of S)L();$o.delete(u)}},t?i?x(!0):E=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ui(n,t=1/0,e){if(t<=0||!oe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Te(n))ui(n.value,t,e);else if(Nt(n))for(let i=0;i<n.length;i++)ui(n[i],t,e);else if(qf(n)||Qs(n))n.forEach(i=>{ui(i,t,e)});else if($f(n)){for(const i in n)ui(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(n,t,e,i){try{return i?n(...i):n()}catch(s){Sa(s,t,e)}}function Sn(n,t,e,i){if(Wt(n)){const s=no(n,t,e,i);return s&&Yf(s)&&s.catch(r=>{Sa(r,t,e)}),s}if(Nt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Sn(n[r],t,e,i));return s}}function Sa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){mi(),no(r,null,10,[n,l,c]),gi();return}}qm(n,e,s,i,o)}function qm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ze=[];let Bn=-1;const tr=[];let Ni=null,Xs=0;const xd=Promise.resolve();let Ko=null;function Md(n){const t=Ko||xd;return n?t.then(this?n.bind(this):n):t}function Ym(n){let t=Bn+1,e=Ze.length;for(;t<e;){const i=t+e>>>1,s=Ze[i],r=jr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Lc(n){if(!(n.flags&1)){const t=jr(n),e=Ze[Ze.length-1];!e||!(n.flags&2)&&t>=jr(e)?Ze.push(n):Ze.splice(Ym(t),0,n),n.flags|=1,yd()}}function yd(){Ko||(Ko=xd.then(Ed))}function jm(n){Nt(n)?tr.push(...n):Ni&&n.id===-1?Ni.splice(Xs+1,0,n):n.flags&1||(tr.push(n),n.flags|=1),yd()}function cu(n,t,e=Bn+1){for(;e<Ze.length;e++){const i=Ze[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ze.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sd(n){if(tr.length){const t=[...new Set(tr)].sort((e,i)=>jr(e)-jr(i));if(tr.length=0,Ni){Ni.push(...t);return}for(Ni=t,Xs=0;Xs<Ni.length;Xs++){const e=Ni[Xs];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ni=null,Xs=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ed(n){try{for(Bn=0;Bn<Ze.length;Bn++){const t=Ze[Bn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),no(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Bn<Ze.length;Bn++){const t=Ze[Bn];t&&(t.flags&=-2)}Bn=-1,Ze.length=0,Sd(),Ko=null,(Ze.length||tr.length)&&Ed()}}let Mn=null,bd=null;function Jo(n){const t=Mn;return Mn=n,bd=n&&n.type.__scopeId||null,t}function $s(n,t=Mn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ta(-1);const r=Jo(t);let o;try{o=n(...s)}finally{Jo(r),i._d&&ta(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function $m(n,t){if(Mn===null)return n;const e=Ra(Mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=me]=t[s];r&&(Wt(r)&&(r={mounted:r,updated:r}),r.deep&&ui(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ki(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(mi(),Sn(l,e,8,[n.el,a,n,t]),gi())}}function Km(n,t){if(tn){let e=tn.provides;const i=tn.parent&&tn.parent.provides;i===e&&(e=tn.provides=Object.create(i)),e[n]=t}}function Fr(n,t,e=!1){const i=Fc();if(i||_s){let s=_s?_s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}function Jm(){return!!(Fc()||_s)}const Zm=Symbol.for("v-scx"),Qm=()=>Fr(Zm);function er(n,t,e){return wd(n,t,e)}function wd(n,t,e=me){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ue({},e),l=t&&i||!t&&r!=="post";let c;if(Jr){if(r==="sync"){const d=Qm();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=qn,d.resume=qn,d.pause=qn,d}}const u=tn;a.call=(d,g,_)=>Sn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{sn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Lc(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Xm(n,t,a);return Jr&&(c?c.push(f):l&&f()),f}function tg(n,t,e){const i=this.proxy,s=Ee(n)?n.includes(".")?Td(i,n):()=>i[n]:n.bind(i,i);let r;Wt(t)?r=t:(r=t.handler,e=t);const o=io(this),a=wd(s,r.bind(i),e);return o(),a}function Td(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const eg=Symbol("_vte"),Ad=n=>n.__isTeleport,vn=Symbol("_leaveCb"),_r=Symbol("_enterCb");function ng(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ic(()=>{n.isMounted=!0}),Nd(()=>{n.isUnmounting=!0}),n}const gn=[Function,Array],Rd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},Cd=n=>{const t=n.subTree;return t.component?Cd(t.component):t},ig={name:"BaseTransition",props:Rd,setup(n,{slots:t}){const e=Fc(),i=ng();return()=>{const s=t.default&&Id(t.default(),!0),r=s&&s.length?Pd(s):e.subTree?Tn():void 0;if(!r)return;const o=te(n),{mode:a}=o;if(i.isLeaving)return qa(r);const l=uu(r);if(!l)return qa(r);let c=Zl(l,o,i,e,h=>c=h);l.type!==Qe&&$r(l,c);let u=e.subTree&&uu(e.subTree);if(u&&u.type!==Qe&&!hs(u,l)&&Cd(e).type!==Qe){let h=Zl(u,o,i,e);if($r(u,h),a==="out-in"&&l.type!==Qe)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete h.afterLeave,u=void 0},qa(r);a==="in-out"&&l.type!==Qe?h.delayLeave=(f,d,g)=>{const _=Ld(i,u);_[String(u.key)]=u,f[vn]=()=>{d(),f[vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Pd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Qe){t=e;break}}return t}const sg=ig;function Ld(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Zl(n,t,e,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:x}=t,S=String(n.key),L=Ld(e,n),T=(y,M)=>{y&&Sn(y,i,9,M)},R=(y,M)=>{const P=M[1];T(y,M),Nt(y)?y.every(U=>U.length<=1)&&P():y.length<=1&&P()},I={mode:o,persisted:a,beforeEnter(y){let M=l;if(!e.isMounted)if(r)M=m||l;else return;y[vn]&&y[vn](!0);const P=L[S];P&&hs(n,P)&&P.el[vn]&&P.el[vn](),T(M,[y])},enter(y){if(L[S]===n)return;let M=c,P=u,U=h;if(!e.isMounted)if(r)M=p||c,P=E||u,U=x||h;else return;let z=!1;y[_r]=et=>{z||(z=!0,et?T(U,[y]):T(P,[y]),I.delayedLeave&&I.delayedLeave(),y[_r]=void 0)};const Z=y[_r].bind(null,!1);M?R(M,[y,Z]):Z()},leave(y,M){const P=String(n.key);if(y[_r]&&y[_r](!0),e.isUnmounting)return M();T(f,[y]);let U=!1;y[vn]=Z=>{U||(U=!0,M(),Z?T(_,[y]):T(g,[y]),y[vn]=void 0,L[P]===n&&delete L[P])};const z=y[vn].bind(null,!1);L[P]=n,d?R(d,[y,z]):z()},clone(y){const M=Zl(y,t,e,i,s);return s&&s(M),M}};return I}function qa(n){if(ba(n))return n=Vi(n),n.children=null,n}function uu(n){if(!ba(n))return Ad(n.type)&&n.children?Pd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Wt(e.default))return e.default()}}function $r(n,t){n.shapeFlag&6&&n.component?(n.transition=t,$r(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Id(n,t=!1,e){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:r);o.type===rn?(o.patchFlag&128&&s++,i=i.concat(Id(o.children,t,a))):(t||o.type!==Qe)&&i.push(a!=null?Vi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ea(n,t){return Wt(n)?Ue({name:n.name},t,{setup:n}):n}function Dd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function hu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Zo=new WeakMap;function Br(n,t,e,i,s=!1){if(Nt(n)){n.forEach((_,m)=>Br(_,t&&(Nt(t)?t[m]:t),e,i,s));return}if(zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Br(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ra(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===me?a.refs={}:a.refs,h=a.setupState,f=te(h),d=h===me?Xf:_=>hu(u,_)?!1:se(f,_),g=(_,m)=>!(m&&hu(u,m));if(c!=null&&c!==l){if(fu(t),Ee(c))u[c]=null,d(c)&&(h[c]=null);else if(Te(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Wt(l))no(l,a,12,[o,u]);else{const _=Ee(l),m=Te(l);if(_||m){const p=()=>{if(n.f){const E=_?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)Nt(E)&&yc(E,r);else if(Nt(E))E.includes(r)||E.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const x=[r];g(l,n.k)&&(l.value=x),n.k&&(u[n.k]=x)}}else _?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const E=()=>{p(),Zo.delete(n)};E.id=-1,Zo.set(n,E),sn(E,e)}else fu(n),p()}}}function fu(n){const t=Zo.get(n);t&&(t.flags|=8,Zo.delete(n))}xa().requestIdleCallback;xa().cancelIdleCallback;const zr=n=>!!n.type.__asyncLoader,ba=n=>n.type.__isKeepAlive;function rg(n,t){Ud(n,"a",t)}function og(n,t){Ud(n,"da",t)}function Ud(n,t,e=tn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(wa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&ag(i,t,e,s),s=s.parent}}function ag(n,t,e,i){const s=wa(t,n,i,!0);Dc(()=>{yc(i[t],s)},e)}function wa(n,t,e=tn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{mi();const a=io(e),l=Sn(t,e,n,o);return a(),gi(),l});return i?s.unshift(r):s.push(r),r}}const vi=n=>(t,e=tn)=>{(!Jr||n==="sp")&&wa(n,(...i)=>t(...i),e)},lg=vi("bm"),Ic=vi("m"),cg=vi("bu"),ug=vi("u"),Nd=vi("bum"),Dc=vi("um"),hg=vi("sp"),fg=vi("rtg"),dg=vi("rtc");function pg(n,t=tn){wa("ec",n,t)}const mg=Symbol.for("v-ndc");function gg(n,t,e,i){let s;const r=e,o=Nt(n);if(o||Ee(n)){const a=o&&di(n);let l=!1,c=!1;a&&(l=!dn(n),c=_i(n),n=Ma(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?rr(Dn(n[u])):Dn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(oe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Ql=n=>n?np(n)?Ra(n):Ql(n.parent):null,Hr=Ue(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ql(n.parent),$root:n=>Ql(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fd(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=Md.bind(n.proxy)),$watch:n=>tg.bind(n)}),Ya=(n,t)=>n!==me&&!n.__isScriptSetup&&se(n,t),_g={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ya(i,t))return o[t]=1,i[t];if(s!==me&&se(s,t))return o[t]=2,s[t];if(se(r,t))return o[t]=3,r[t];if(e!==me&&se(e,t))return o[t]=4,e[t];tc&&(o[t]=0)}}const c=Hr[t];let u,h;if(c)return t==="$attrs"&&We(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==me&&se(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,se(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ya(s,t)?(s[t]=e,!0):i!==me&&se(i,t)?(i[t]=e,!0):se(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==me&&a[0]!=="$"&&se(n,a)||Ya(t,a)||se(r,a)||se(i,a)||se(Hr,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:se(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function du(n){return Nt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let tc=!0;function vg(n){const t=Fd(n),e=n.proxy,i=n.ctx;tc=!1,t.beforeCreate&&pu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:x,unmounted:S,render:L,renderTracked:T,renderTriggered:R,errorCaptured:I,serverPrefetch:y,expose:M,inheritAttrs:P,components:U,directives:z,filters:Z}=t;if(c&&xg(c,i,null),o)for(const Q in o){const k=o[Q];Wt(k)&&(i[Q]=k.bind(e))}if(s){const Q=s.call(e,e);oe(Q)&&(n.data=eo(Q))}if(tc=!0,r)for(const Q in r){const k=r[Q],xt=Wt(k)?k.bind(e,e):Wt(k.get)?k.get.bind(e,e):qn,at=!Wt(k)&&Wt(k.set)?k.set.bind(e):qn,_t=An({get:xt,set:at});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>_t.value,set:At=>_t.value=At})}if(a)for(const Q in a)Od(a[Q],i,e,Q);if(l){const Q=Wt(l)?l.call(e):l;Reflect.ownKeys(Q).forEach(k=>{Km(k,Q[k])})}u&&pu(u,n,"c");function j(Q,k){Nt(k)?k.forEach(xt=>Q(xt.bind(e))):k&&Q(k.bind(e))}if(j(lg,h),j(Ic,f),j(cg,d),j(ug,g),j(rg,_),j(og,m),j(pg,I),j(dg,T),j(fg,R),j(Nd,E),j(Dc,S),j(hg,y),Nt(M))if(M.length){const Q=n.exposed||(n.exposed={});M.forEach(k=>{Object.defineProperty(Q,k,{get:()=>e[k],set:xt=>e[k]=xt,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===qn&&(n.render=L),P!=null&&(n.inheritAttrs=P),U&&(n.components=U),z&&(n.directives=z),y&&Dd(n)}function xg(n,t,e=qn){Nt(n)&&(n=ec(n));for(const i in n){const s=n[i];let r;oe(s)?"default"in s?r=Fr(s.from||i,s.default,!0):r=Fr(s.from||i):r=Fr(s),Te(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function pu(n,t,e){Sn(Nt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Od(n,t,e,i){let s=i.includes(".")?Td(e,i):()=>e[i];if(Ee(n)){const r=t[n];Wt(r)&&er(s,r)}else if(Wt(n))er(s,n.bind(e));else if(oe(n))if(Nt(n))n.forEach(r=>Od(r,t,e,i));else{const r=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(r)&&er(s,r,n)}}function Fd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Qo(l,c,o,!0)),Qo(l,t,o)),oe(t)&&r.set(t,l),l}function Qo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Qo(n,r,e,!0),s&&s.forEach(o=>Qo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Mg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Mg={data:mu,props:gu,emits:gu,methods:Pr,computed:Pr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Pr,directives:Pr,watch:Sg,provide:mu,inject:yg};function mu(n,t){return t?n?function(){return Ue(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function yg(n,t){return Pr(ec(n),ec(t))}function ec(n){if(Nt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function Pr(n,t){return n?Ue(Object.create(null),n,t):t}function gu(n,t){return n?Nt(n)&&Nt(t)?[...new Set([...n,...t])]:Ue(Object.create(null),du(n),du(t??{})):t}function Sg(n,t){if(!n)return t;if(!t)return n;const e=Ue(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function Bd(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Eg=0;function bg(n,t){return function(i,s=null){Wt(i)||(i=Ue({},i)),s!=null&&!oe(s)&&(s=null);const r=Bd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Eg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:n_,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...h)):Wt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Le(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ra(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Sn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=_s;_s=c;try{return u()}finally{_s=h}}};return c}}let _s=null;const wg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ln(t)}Modifiers`]||n[`${Xi(t)}Modifiers`];function Tg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||me;let s=e;const r=t.startsWith("update:"),o=r&&wg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ee(u)?u.trim():u)),o.number&&(s=e.map(Sc)));let a,l=i[a=Va(t)]||i[a=Va(Ln(t))];!l&&r&&(l=i[a=Va(Xi(t))]),l&&Sn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Sn(c,n,6,s)}}const Ag=new WeakMap;function zd(n,t,e=!1){const i=e?Ag:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=zd(c,t,!0);u&&(a=!0,Ue(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(oe(n)&&i.set(n,null),null):(Nt(r)?r.forEach(l=>o[l]=null):Ue(o,r),oe(n)&&i.set(n,o),o)}function Ta(n,t){return!n||!ma(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(n,t[0].toLowerCase()+t.slice(1))||se(n,Xi(t))||se(n,t))}function _u(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=Jo(n);let p,E;try{if(e.shapeFlag&4){const S=s||i,L=S;p=Vn(c.call(L,S,u,h,d,f,g)),E=a}else{const S=t;p=Vn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),E=t.props?a:Rg(a)}}catch(S){Vr.length=0,Sa(S,n,1),p=Le(Qe)}let x=p;if(E&&_!==!1){const S=Object.keys(E),{shapeFlag:L}=x;S.length&&L&7&&(r&&S.some(ga)&&(E=Cg(E,r)),x=Vi(x,E,!1,!0))}return e.dirs&&(x=Vi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(e.dirs):e.dirs),e.transition&&$r(x,e.transition),p=x,Jo(m),p}const Rg=n=>{let t;for(const e in n)(e==="class"||e==="style"||ma(e))&&((t||(t={}))[e]=n[e]);return t},Cg=(n,t)=>{const e={};for(const i in n)(!ga(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Pg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?vu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Hd(o,i,f)&&!Ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vu(i,o,c):!0:!!o;return!1}function vu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Hd(t,n,r)&&!Ta(e,r))return!0}return!1}function Hd(n,t,e){const i=n[e],s=t[e];return e==="style"&&oe(i)&&oe(s)?!Ec(i,s):i!==s}function Lg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Vd={},Gd=()=>Object.create(Vd),kd=n=>Object.getPrototypeOf(n)===Vd;function Ig(n,t,e,i=!1){const s={},r=Gd();n.propsDefaults=Object.create(null),Wd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Nm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Dg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=te(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(n.emitsOptions,f))continue;const d=t[f];if(l)if(se(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Ln(f);s[g]=nc(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Wd(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!se(t,h)&&((u=Xi(h))===h||!se(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=nc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!se(t,h))&&(delete r[h],c=!0)}c&&ci(n.attrs,"set","")}function Wd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ur(l))continue;const c=t[l];let u;s&&se(s,u=Ln(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=te(e),c=a||me;for(let u=0;u<r.length;u++){const h=r[u];e[h]=nc(s,l,h,c[h],n,!se(c,h))}}return o}function nc(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=io(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Xi(e))&&(i=!0))}return i}const Ug=new WeakMap;function Xd(n,t,e=!1){const i=e?Ug:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=h=>{l=!0;const[f,d]=Xd(h,t,!0);Ue(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return oe(n)&&i.set(n,Zs),Zs;if(Nt(r))for(let u=0;u<r.length;u++){const h=Ln(r[u]);xu(h)&&(o[h]=me)}else if(r)for(const u in r){const h=Ln(u);if(xu(h)){const f=r[u],d=o[h]=Nt(f)||Wt(f)?{type:f}:Ue({},f),g=d.type;let _=!1,m=!0;if(Nt(g))for(let p=0;p<g.length;++p){const E=g[p],x=Wt(E)&&E.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(m=!1)}else _=Wt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||se(d,"default"))&&a.push(h)}}const c=[o,a];return oe(n)&&i.set(n,c),c}function xu(n){return n[0]!=="$"&&!Ur(n)}const Uc=n=>n==="_"||n==="_ctx"||n==="$stable",Nc=n=>Nt(n)?n.map(Vn):[Vn(n)],Ng=(n,t,e)=>{if(t._n)return t;const i=$s((...s)=>Nc(t(...s)),e);return i._c=!1,i},qd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Uc(s))continue;const r=n[s];if(Wt(r))t[s]=Ng(s,r,i);else if(r!=null){const o=Nc(r);t[s]=()=>o}}},Yd=(n,t)=>{const e=Nc(t);n.slots.default=()=>e},jd=(n,t,e)=>{for(const i in t)(e||!Uc(i))&&(n[i]=t[i])},Og=(n,t,e)=>{const i=n.slots=Gd();if(n.vnode.shapeFlag&32){const s=t._;s?(jd(i,t,e),e&&Jf(i,"_",s,!0)):qd(t,i)}else t&&Yd(n,t)},Fg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=me;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:jd(s,t,e):(r=!t.$stable,qd(t,s)),o=t}else t&&(Yd(n,t),o={default:1});if(r)for(const a in s)!Uc(a)&&o[a]==null&&delete s[a]},sn=Gg;function Bg(n){return zg(n)}function zg(n,t){const e=xa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=qn,insertStaticContent:g}=n,_=(A,D,G,Y=null,tt=null,K=null,st=void 0,ct=null,b=!!D.dynamicChildren)=>{if(A===D)return;A&&!hs(A,D)&&(Y=gt(A),At(A,tt,K,!0),A=null),D.patchFlag===-2&&(b=!1,D.dynamicChildren=null);const{type:v,ref:F,shapeFlag:H}=D;switch(v){case Aa:m(A,D,G,Y);break;case Qe:p(A,D,G,Y);break;case Xo:A==null&&E(D,G,Y,st);break;case rn:U(A,D,G,Y,tt,K,st,ct,b);break;default:H&1?L(A,D,G,Y,tt,K,st,ct,b):H&6?z(A,D,G,Y,tt,K,st,ct,b):(H&64||H&128)&&v.process(A,D,G,Y,tt,K,st,ct,b,$t)}F!=null&&tt?Br(F,A&&A.ref,K,D||A,!D):F==null&&A&&A.ref!=null&&Br(A.ref,null,K,A,!0)},m=(A,D,G,Y)=>{if(A==null)i(D.el=a(D.children),G,Y);else{const tt=D.el=A.el;D.children!==A.children&&c(tt,D.children)}},p=(A,D,G,Y)=>{A==null?i(D.el=l(D.children||""),G,Y):D.el=A.el},E=(A,D,G,Y)=>{[A.el,A.anchor]=g(A.children,D,G,Y,A.el,A.anchor)},x=({el:A,anchor:D},G,Y)=>{let tt;for(;A&&A!==D;)tt=f(A),i(A,G,Y),A=tt;i(D,G,Y)},S=({el:A,anchor:D})=>{let G;for(;A&&A!==D;)G=f(A),s(A),A=G;s(D)},L=(A,D,G,Y,tt,K,st,ct,b)=>{if(D.type==="svg"?st="svg":D.type==="math"&&(st="mathml"),A==null)T(D,G,Y,tt,K,st,ct,b);else{const v=A.el&&A.el._isVueCE?A.el:null;try{v&&v._beginPatch(),y(A,D,tt,K,st,ct,b)}finally{v&&v._endPatch()}}},T=(A,D,G,Y,tt,K,st,ct)=>{let b,v;const{props:F,shapeFlag:H,transition:W,dirs:J}=A;if(b=A.el=o(A.type,K,F&&F.is,F),H&8?u(b,A.children):H&16&&I(A.children,b,null,Y,tt,ja(A,K),st,ct),J&&Ki(A,null,Y,"created"),R(b,A,A.scopeId,st,Y),F){for(const ut in F)ut!=="value"&&!Ur(ut)&&r(b,ut,null,F[ut],K,Y);"value"in F&&r(b,"value",null,F.value,K),(v=F.onVnodeBeforeMount)&&Fn(v,Y,A)}J&&Ki(A,null,Y,"beforeMount");const ft=Hg(tt,W);ft&&W.beforeEnter(b),i(b,D,G),((v=F&&F.onVnodeMounted)||ft||J)&&sn(()=>{try{v&&Fn(v,Y,A),ft&&W.enter(b),J&&Ki(A,null,Y,"mounted")}finally{}},tt)},R=(A,D,G,Y,tt)=>{if(G&&d(A,G),Y)for(let K=0;K<Y.length;K++)d(A,Y[K]);if(tt){let K=tt.subTree;if(D===K||Zd(K.type)&&(K.ssContent===D||K.ssFallback===D)){const st=tt.vnode;R(A,st,st.scopeId,st.slotScopeIds,tt.parent)}}},I=(A,D,G,Y,tt,K,st,ct,b=0)=>{for(let v=b;v<A.length;v++){const F=A[v]=ct?ai(A[v]):Vn(A[v]);_(null,F,D,G,Y,tt,K,st,ct)}},y=(A,D,G,Y,tt,K,st)=>{const ct=D.el=A.el;let{patchFlag:b,dynamicChildren:v,dirs:F}=D;b|=A.patchFlag&16;const H=A.props||me,W=D.props||me;let J;if(G&&Ji(G,!1),(J=W.onVnodeBeforeUpdate)&&Fn(J,G,D,A),F&&Ki(D,A,G,"beforeUpdate"),G&&Ji(G,!0),(H.innerHTML&&W.innerHTML==null||H.textContent&&W.textContent==null)&&u(ct,""),v?M(A.dynamicChildren,v,ct,G,Y,ja(D,tt),K):st||k(A,D,ct,null,G,Y,ja(D,tt),K,!1),b>0){if(b&16)P(ct,H,W,G,tt);else if(b&2&&H.class!==W.class&&r(ct,"class",null,W.class,tt),b&4&&r(ct,"style",H.style,W.style,tt),b&8){const ft=D.dynamicProps;for(let ut=0;ut<ft.length;ut++){const lt=ft[ut],Rt=H[lt],ot=W[lt];(ot!==Rt||lt==="value")&&r(ct,lt,Rt,ot,tt,G)}}b&1&&A.children!==D.children&&u(ct,D.children)}else!st&&v==null&&P(ct,H,W,G,tt);((J=W.onVnodeUpdated)||F)&&sn(()=>{J&&Fn(J,G,D,A),F&&Ki(D,A,G,"updated")},Y)},M=(A,D,G,Y,tt,K,st)=>{for(let ct=0;ct<D.length;ct++){const b=A[ct],v=D[ct],F=b.el&&(b.type===rn||!hs(b,v)||b.shapeFlag&198)?h(b.el):G;_(b,v,F,null,Y,tt,K,st,!0)}},P=(A,D,G,Y,tt)=>{if(D!==G){if(D!==me)for(const K in D)!Ur(K)&&!(K in G)&&r(A,K,D[K],null,tt,Y);for(const K in G){if(Ur(K))continue;const st=G[K],ct=D[K];st!==ct&&K!=="value"&&r(A,K,ct,st,tt,Y)}"value"in G&&r(A,"value",D.value,G.value,tt)}},U=(A,D,G,Y,tt,K,st,ct,b)=>{const v=D.el=A?A.el:a(""),F=D.anchor=A?A.anchor:a("");let{patchFlag:H,dynamicChildren:W,slotScopeIds:J}=D;J&&(ct=ct?ct.concat(J):J),A==null?(i(v,G,Y),i(F,G,Y),I(D.children||[],G,F,tt,K,st,ct,b)):H>0&&H&64&&W&&A.dynamicChildren&&A.dynamicChildren.length===W.length?(M(A.dynamicChildren,W,G,tt,K,st,ct),(D.key!=null||tt&&D===tt.subTree)&&$d(A,D,!0)):k(A,D,G,F,tt,K,st,ct,b)},z=(A,D,G,Y,tt,K,st,ct,b)=>{D.slotScopeIds=ct,A==null?D.shapeFlag&512?tt.ctx.activate(D,G,Y,st,b):Z(D,G,Y,tt,K,st,b):et(A,D,b)},Z=(A,D,G,Y,tt,K,st)=>{const ct=A.component=$g(A,Y,tt);if(ba(A)&&(ct.ctx.renderer=$t),Kg(ct,!1,st),ct.asyncDep){if(tt&&tt.registerDep(ct,j,st),!A.el){const b=ct.subTree=Le(Qe);p(null,b,D,G),A.placeholder=b.el}}else j(ct,A,D,G,tt,K,st)},et=(A,D,G)=>{const Y=D.component=A.component;if(Pg(A,D,G))if(Y.asyncDep&&!Y.asyncResolved){Q(Y,D,G);return}else Y.next=D,Y.update();else D.el=A.el,Y.vnode=D},j=(A,D,G,Y,tt,K,st)=>{const ct=()=>{if(A.isMounted){let{next:H,bu:W,u:J,parent:ft,vnode:ut}=A;{const Bt=Kd(A);if(Bt){H&&(H.el=ut.el,Q(A,H,st)),Bt.asyncDep.then(()=>{sn(()=>{A.isUnmounted||v()},tt)});return}}let lt=H,Rt;Ji(A,!1),H?(H.el=ut.el,Q(A,H,st)):H=ut,W&&Wo(W),(Rt=H.props&&H.props.onVnodeBeforeUpdate)&&Fn(Rt,ft,H,ut),Ji(A,!0);const ot=_u(A),bt=A.subTree;A.subTree=ot,_(bt,ot,h(bt.el),gt(bt),A,tt,K),H.el=ot.el,lt===null&&Lg(A,ot.el),J&&sn(J,tt),(Rt=H.props&&H.props.onVnodeUpdated)&&sn(()=>Fn(Rt,ft,H,ut),tt)}else{let H;const{el:W,props:J}=D,{bm:ft,m:ut,parent:lt,root:Rt,type:ot}=A,bt=zr(D);Ji(A,!1),ft&&Wo(ft),!bt&&(H=J&&J.onVnodeBeforeMount)&&Fn(H,lt,D),Ji(A,!0);{Rt.ce&&Rt.ce._hasShadowRoot()&&Rt.ce._injectChildStyle(ot,A.parent?A.parent.type:void 0);const Bt=A.subTree=_u(A);_(null,Bt,G,Y,A,tt,K),D.el=Bt.el}if(ut&&sn(ut,tt),!bt&&(H=J&&J.onVnodeMounted)){const Bt=D;sn(()=>Fn(H,lt,Bt),tt)}(D.shapeFlag&256||lt&&zr(lt.vnode)&&lt.vnode.shapeFlag&256)&&A.a&&sn(A.a,tt),A.isMounted=!0,D=G=Y=null}};A.scope.on();const b=A.effect=new sd(ct);A.scope.off();const v=A.update=b.run.bind(b),F=A.job=b.runIfDirty.bind(b);F.i=A,F.id=A.uid,b.scheduler=()=>Lc(F),Ji(A,!0),v()},Q=(A,D,G)=>{D.component=A;const Y=A.vnode.props;A.vnode=D,A.next=null,Dg(A,D.props,Y,G),Fg(A,D.children,G),mi(),cu(A),gi()},k=(A,D,G,Y,tt,K,st,ct,b=!1)=>{const v=A&&A.children,F=A?A.shapeFlag:0,H=D.children,{patchFlag:W,shapeFlag:J}=D;if(W>0){if(W&128){at(v,H,G,Y,tt,K,st,ct,b);return}else if(W&256){xt(v,H,G,Y,tt,K,st,ct,b);return}}J&8?(F&16&&Et(v,tt,K),H!==v&&u(G,H)):F&16?J&16?at(v,H,G,Y,tt,K,st,ct,b):Et(v,tt,K,!0):(F&8&&u(G,""),J&16&&I(H,G,Y,tt,K,st,ct,b))},xt=(A,D,G,Y,tt,K,st,ct,b)=>{A=A||Zs,D=D||Zs;const v=A.length,F=D.length,H=Math.min(v,F);let W;for(W=0;W<H;W++){const J=D[W]=b?ai(D[W]):Vn(D[W]);_(A[W],J,G,null,tt,K,st,ct,b)}v>F?Et(A,tt,K,!0,!1,H):I(D,G,Y,tt,K,st,ct,b,H)},at=(A,D,G,Y,tt,K,st,ct,b)=>{let v=0;const F=D.length;let H=A.length-1,W=F-1;for(;v<=H&&v<=W;){const J=A[v],ft=D[v]=b?ai(D[v]):Vn(D[v]);if(hs(J,ft))_(J,ft,G,null,tt,K,st,ct,b);else break;v++}for(;v<=H&&v<=W;){const J=A[H],ft=D[W]=b?ai(D[W]):Vn(D[W]);if(hs(J,ft))_(J,ft,G,null,tt,K,st,ct,b);else break;H--,W--}if(v>H){if(v<=W){const J=W+1,ft=J<F?D[J].el:Y;for(;v<=W;)_(null,D[v]=b?ai(D[v]):Vn(D[v]),G,ft,tt,K,st,ct,b),v++}}else if(v>W)for(;v<=H;)At(A[v],tt,K,!0),v++;else{const J=v,ft=v,ut=new Map;for(v=ft;v<=W;v++){const It=D[v]=b?ai(D[v]):Vn(D[v]);It.key!=null&&ut.set(It.key,v)}let lt,Rt=0;const ot=W-ft+1;let bt=!1,Bt=0;const Ut=new Array(ot);for(v=0;v<ot;v++)Ut[v]=0;for(v=J;v<=H;v++){const It=A[v];if(Rt>=ot){At(It,tt,K,!0);continue}let Ht;if(It.key!=null)Ht=ut.get(It.key);else for(lt=ft;lt<=W;lt++)if(Ut[lt-ft]===0&&hs(It,D[lt])){Ht=lt;break}Ht===void 0?At(It,tt,K,!0):(Ut[Ht-ft]=v+1,Ht>=Bt?Bt=Ht:bt=!0,_(It,D[Ht],G,null,tt,K,st,ct,b),Rt++)}const Mt=bt?Vg(Ut):Zs;for(lt=Mt.length-1,v=ot-1;v>=0;v--){const It=ft+v,Ht=D[It],Me=D[It+1],N=It+1<F?Me.el||Jd(Me):Y;Ut[v]===0?_(null,Ht,G,N,tt,K,st,ct,b):bt&&(lt<0||v!==Mt[lt]?_t(Ht,G,N,2):lt--)}}},_t=(A,D,G,Y,tt=null)=>{const{el:K,type:st,transition:ct,children:b,shapeFlag:v}=A;if(v&6){_t(A.component.subTree,D,G,Y);return}if(v&128){A.suspense.move(D,G,Y);return}if(v&64){st.move(A,D,G,$t);return}if(st===rn){i(K,D,G);for(let H=0;H<b.length;H++)_t(b[H],D,G,Y);i(A.anchor,D,G);return}if(st===Xo){x(A,D,G);return}if(Y!==2&&v&1&&ct)if(Y===0)ct.persisted&&!K[vn]?i(K,D,G):(ct.beforeEnter(K),i(K,D,G),sn(()=>ct.enter(K),tt));else{const{leave:H,delayLeave:W,afterLeave:J}=ct,ft=()=>{A.ctx.isUnmounted?s(K):i(K,D,G)},ut=()=>{const lt=K._isLeaving||!!K[vn];K._isLeaving&&K[vn](!0),ct.persisted&&!lt?ft():H(K,()=>{ft(),J&&J()})};W?W(K,ft,ut):ut()}else i(K,D,G)},At=(A,D,G,Y=!1,tt=!1)=>{const{type:K,props:st,ref:ct,children:b,dynamicChildren:v,shapeFlag:F,patchFlag:H,dirs:W,cacheIndex:J,memo:ft}=A;if(H===-2&&(tt=!1),ct!=null&&(mi(),Br(ct,null,G,A,!0),gi()),J!=null&&(D.renderCache[J]=void 0),F&256){D.ctx.deactivate(A);return}const ut=F&1&&W,lt=!zr(A);let Rt;if(lt&&(Rt=st&&st.onVnodeBeforeUnmount)&&Fn(Rt,D,A),F&6)ht(A.component,G,Y);else{if(F&128){A.suspense.unmount(G,Y);return}ut&&Ki(A,null,D,"beforeUnmount"),F&64?A.type.remove(A,D,G,$t,Y):v&&!v.hasOnce&&(K!==rn||H>0&&H&64)?Et(v,D,G,!1,!0):(K===rn&&H&384||!tt&&F&16)&&Et(b,D,G),Y&&Zt(A)}const ot=ft!=null&&J==null;(lt&&(Rt=st&&st.onVnodeUnmounted)||ut||ot)&&sn(()=>{Rt&&Fn(Rt,D,A),ut&&Ki(A,null,D,"unmounted"),ot&&(A.el=null)},G)},Zt=A=>{const{type:D,el:G,anchor:Y,transition:tt}=A;if(D===rn){nt(G,Y);return}if(D===Xo){S(A);return}const K=()=>{s(G),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(A.shapeFlag&1&&tt&&!tt.persisted){const{leave:st,delayLeave:ct}=tt,b=()=>st(G,K);ct?ct(A.el,K,b):b()}else K()},nt=(A,D)=>{let G;for(;A!==D;)G=f(A),s(A),A=G;s(D)},ht=(A,D,G)=>{const{bum:Y,scope:tt,job:K,subTree:st,um:ct,m:b,a:v}=A;Mu(b),Mu(v),Y&&Wo(Y),tt.stop(),K&&(K.flags|=8,At(st,A,D,G)),ct&&sn(ct,D),sn(()=>{A.isUnmounted=!0},D)},Et=(A,D,G,Y=!1,tt=!1,K=0)=>{for(let st=K;st<A.length;st++)At(A[st],D,G,Y,tt)},gt=A=>{if(A.shapeFlag&6)return gt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const D=f(A.anchor||A.el),G=D&&D[eg];return G?f(G):D};let qt=!1;const Xt=(A,D,G)=>{let Y;A==null?D._vnode&&(At(D._vnode,null,null,!0),Y=D._vnode.component):_(D._vnode||null,A,D,null,null,null,G),D._vnode=A,qt||(qt=!0,cu(Y),Sd(),qt=!1)},$t={p:_,um:At,m:_t,r:Zt,mt:Z,mc:I,pc:k,pbc:M,n:gt,o:n};return{render:Xt,hydrate:void 0,createApp:bg(Xt)}}function ja({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ji({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Hg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function $d(n,t,e=!1){const i=n.children,s=t.children;if(Nt(i)&&Nt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ai(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&$d(o,a)),a.type===Aa&&(a.patchFlag===-1&&(a=s[r]=ai(a)),a.el=o.el),a.type===Qe&&!a.el&&(a.el=o.el)}}function Vg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Kd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Kd(t)}function Mu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Jd(t.subTree):null}const Zd=n=>n.__isSuspense;function Gg(n,t){t&&t.pendingBranch?Nt(n)?t.effects.push(...n):t.effects.push(n):jm(n)}const rn=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),Vr=[];let fn=null;function ge(n=!1){Vr.push(fn=n?null:[])}function kg(){Vr.pop(),fn=Vr[Vr.length-1]||null}let Kr=1;function ta(n,t=!1){Kr+=n,n<0&&fn&&t&&(fn.hasOnce=!0)}function Qd(n){return n.dynamicChildren=Kr>0?fn||Zs:null,kg(),Kr>0&&fn&&fn.push(n),n}function ye(n,t,e,i,s,r){return Qd(pt(n,t,e,i,s,r,!0))}function ic(n,t,e,i,s){return Qd(Le(n,t,e,i,s,!0))}function ea(n){return n?n.__v_isVNode===!0:!1}function hs(n,t){return n.type===t.type&&n.key===t.key}const tp=({key:n})=>n??null,qo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ee(n)||Te(n)||Wt(n)?{i:Mn,r:n,k:t,f:!!e}:n:null);function pt(n,t=null,e=null,i=0,s=null,r=n===rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&tp(t),ref:t&&qo(t),scopeId:bd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return a?(Oc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ee(e)?8:16),Kr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const Le=Wg;function Wg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===mg)&&(n=Qe),ea(n)){const a=Vi(n,t,!0);return e&&Oc(a,e),Kr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(t_(n)&&(n=n.__vccOpts),t){t=Xg(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=li(a)),oe(l)&&(ya(l)&&!Nt(l)&&(l=Ue({},l)),t.style=Fi(l))}const o=Ee(n)?1:Zd(n)?128:Ad(n)?64:oe(n)?4:Wt(n)?2:0;return pt(n,t,e,i,s,o,r,!0)}function Xg(n){return n?ya(n)||kd(n)?Ue({},n):n:null}function Vi(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?qg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&tp(c),ref:t&&t.ref?e&&r?Nt(r)?r.concat(qo(t)):[r,qo(t)]:qo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==rn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vi(n.ssContent),ssFallback:n.ssFallback&&Vi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$r(u,l.clone(u)),u}function qs(n=" ",t=0){return Le(Aa,null,n,t)}function ep(n,t){const e=Le(Xo,null,n);return e.staticCount=t,e}function Tn(n="",t=!1){return t?(ge(),ic(Qe,null,n)):Le(Qe,null,n)}function Vn(n){return n==null||typeof n=="boolean"?Le(Qe):Nt(n)?Le(rn,null,n.slice()):ea(n)?ai(n):Le(Aa,null,String(n))}function ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vi(n)}function Oc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Nt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Oc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!kd(t)?t._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:Mn},e=32):(t=String(t),i&64?(e=16,t=[qs(t)]):e=8);n.children=t,n.shapeFlag|=e}function qg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=li([t.class,i.class]));else if(s==="style")t.style=Fi([t.style,i.style]);else if(ma(s)){const r=t[s],o=i[s];o&&r!==o&&!(Nt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ga(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Fn(n,t,e,i=null){Sn(n,t,7,[e,i])}const Yg=Bd();let jg=0;function $g(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Yg,r={uid:jg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ed(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(i,s),emitsOptions:zd(i,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Tg.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const Fc=()=>tn||Mn;let na,sc;{const n=xa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};na=t("__VUE_INSTANCE_SETTERS__",e=>tn=e),sc=t("__VUE_SSR_SETTERS__",e=>Jr=e)}const io=n=>{const t=tn;return na(n),n.scope.on(),()=>{n.scope.off(),na(t)}},yu=()=>{tn&&tn.scope.off(),na(null)};function np(n){return n.vnode.shapeFlag&4}let Jr=!1;function Kg(n,t=!1,e=!1){t&&sc(t);const{props:i,children:s}=n.vnode,r=np(n);Ig(n,i,r,t),Og(n,s,e||t);const o=r?Jg(n,t):void 0;return t&&sc(!1),o}function Jg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_g);const{setup:i}=e;if(i){mi();const s=n.setupContext=i.length>1?Qg(n):null,r=io(n),o=no(i,n,0,[n.props,s]),a=Yf(o);if(gi(),r(),(a||n.sp)&&!zr(n)&&Dd(n),a){if(o.then(yu,yu),t)return o.then(l=>{Su(n,l)}).catch(l=>{Sa(l,n,0)});n.asyncDep=o}else Su(n,o)}else ip(n)}function Su(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:oe(t)&&(n.setupState=vd(t)),ip(n)}function ip(n,t,e){const i=n.type;n.render||(n.render=i.render||qn);{const s=io(n);mi();try{vg(n)}finally{gi(),s()}}}const Zg={get(n,t){return We(n,"get",""),n[t]}};function Qg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Zg),slots:n.slots,emit:n.emit,expose:t}}function Ra(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(vd(Pc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Hr)return Hr[e](n)},has(t,e){return e in t||e in Hr}})):n.proxy}function t_(n){return Wt(n)&&"__vccOpts"in n}const An=(n,t)=>km(n,t,Jr);function e_(n,t,e){try{ta(-1);const i=arguments.length;return i===2?oe(t)&&!Nt(t)?ea(t)?Le(n,null,[t]):Le(n,t):Le(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&ea(e)&&(e=[e]),Le(n,t,e))}finally{ta(1)}}const n_="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rc;const Eu=typeof window<"u"&&window.trustedTypes;if(Eu)try{rc=Eu.createPolicy("vue",{createHTML:n=>n})}catch{}const sp=rc?n=>rc.createHTML(n):n=>n,i_="http://www.w3.org/2000/svg",s_="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,bu=oi&&oi.createElement("template"),r_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?oi.createElementNS(i_,n):t==="mathml"?oi.createElementNS(s_,n):e?oi.createElement(n,{is:e}):oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{bu.innerHTML=sp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=bu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Si="transition",vr="animation",Zr=Symbol("_vtc"),rp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},o_=Ue({},Rd,rp),a_=n=>(n.displayName="Transition",n.props=o_,n),Lr=a_((n,{slots:t})=>e_(sg,l_(n),t)),Zi=(n,t=[])=>{Nt(n)?n.forEach(e=>e(...t)):n&&n(...t)},wu=n=>n?Nt(n)?n.some(t=>t.length>1):n.length>1:!1;function l_(n){const t={};for(const U in n)U in rp||(t[U]=n[U]);if(n.css===!1)return t;const{name:e="v",type:i,duration:s,enterFromClass:r=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:f=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=c_(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:x,onLeave:S,onLeaveCancelled:L,onBeforeAppear:T=p,onAppear:R=E,onAppearCancelled:I=x}=t,y=(U,z,Z,et)=>{U._enterCancelled=et,Qi(U,z?u:a),Qi(U,z?c:o),Z&&Z()},M=(U,z)=>{U._isLeaving=!1,Qi(U,h),Qi(U,d),Qi(U,f),z&&z()},P=U=>(z,Z)=>{const et=U?R:E,j=()=>y(z,U,Z);Zi(et,[z,j]),Tu(()=>{Qi(z,U?l:r),Jn(z,U?u:a),wu(et)||Au(z,i,_,j)})};return Ue(t,{onBeforeEnter(U){Zi(p,[U]),Jn(U,r),Jn(U,o)},onBeforeAppear(U){Zi(T,[U]),Jn(U,l),Jn(U,c)},onEnter:P(!1),onAppear:P(!0),onLeave(U,z){U._isLeaving=!0;const Z=()=>M(U,z);Jn(U,h),U._enterCancelled?(Jn(U,f),Pu(U)):(Pu(U),Jn(U,f)),Tu(()=>{U._isLeaving&&(Qi(U,h),Jn(U,d),wu(S)||Au(U,i,m,Z))}),Zi(S,[U,Z])},onEnterCancelled(U){y(U,!1,void 0,!0),Zi(x,[U])},onAppearCancelled(U){y(U,!0,void 0,!0),Zi(I,[U])},onLeaveCancelled(U){M(U),Zi(L,[U])}})}function c_(n){if(n==null)return null;if(oe(n))return[$a(n.enter),$a(n.leave)];{const t=$a(n);return[t,t]}}function $a(n){return lm(n)}function Jn(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Zr]||(n[Zr]=new Set)).add(t)}function Qi(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Zr];e&&(e.delete(t),e.size||(n[Zr]=void 0))}function Tu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let u_=0;function Au(n,t,e,i){const s=n._endId=++u_,r=()=>{s===n._endId&&i()};if(e!=null)return setTimeout(r,e);const{type:o,timeout:a,propCount:l}=h_(n,t);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function h_(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),s=i(`${Si}Delay`),r=i(`${Si}Duration`),o=Ru(s,r),a=i(`${vr}Delay`),l=i(`${vr}Duration`),c=Ru(a,l);let u=null,h=0,f=0;t===Si?o>0&&(u=Si,h=o,f=r.length):t===vr?c>0&&(u=vr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Si:vr:null,f=u?u===Si?r.length:l.length:0);const d=u===Si&&/\b(?:transform|all)(?:,|$)/.test(i(`${Si}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Ru(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Cu(e)+Cu(n[i])))}function Cu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Pu(n){return(n?n.ownerDocument:document).body.offsetHeight}function f_(n,t,e){const i=n[Zr];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Lu=Symbol("_vod"),d_=Symbol("_vsh"),p_=Symbol(""),m_=/(?:^|;)\s*display\s*:/;function g_(n,t,e){const i=n.style,s=Ee(e);let r=!1;if(e&&!s){if(t)if(Ee(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Ir(i,a,"")}else for(const o in t)e[o]==null&&Ir(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?v_(n,o,!Ee(t)&&t?t[o]:void 0,a)||Ir(i,o,a):Ir(i,o,"")}}else if(s){if(t!==e){const o=i[p_];o&&(e+=";"+o),i.cssText=e,r=m_.test(e)}}else t&&n.removeAttribute("style");Lu in n&&(n[Lu]=r?i.display:"",n[d_]&&(i.display="none"))}const Iu=/\s*!important$/;function Ir(n,t,e){if(Nt(e))e.forEach(i=>Ir(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=__(n,t);Iu.test(e)?n.setProperty(Xi(i),e.replace(Iu,""),"important"):n[i]=e}}const Du=["Webkit","Moz","ms"],Ka={};function __(n,t){const e=Ka[t];if(e)return e;let i=Ln(t);if(i!=="filter"&&i in n)return Ka[t]=i;i=Kf(i);for(let s=0;s<Du.length;s++){const r=Du[s]+i;if(r in n)return Ka[t]=r}return t}function v_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ee(i)&&e===i}const Uu="http://www.w3.org/1999/xlink";function Nu(n,t,e,i,s,r=pm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Uu,t.slice(6,t.length)):n.setAttributeNS(Uu,t,e):e==null||r&&!Zf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":yn(e)?String(e):e)}function Ou(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?sp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Zf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Ys(n,t,e,i){n.addEventListener(t,e,i)}function x_(n,t,e,i){n.removeEventListener(t,e,i)}const Fu=Symbol("_vei");function M_(n,t,e,i,s=null){const r=n[Fu]||(n[Fu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=y_(t);if(i){const c=r[t]=b_(i,s);Ys(n,a,c,l)}else o&&(x_(n,a,o,l),r[t]=void 0)}}const Bu=/(?:Once|Passive|Capture)$/;function y_(n){let t;if(Bu.test(n)){t={};let i;for(;i=n.match(Bu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),t]}let Ja=0;const S_=Promise.resolve(),E_=()=>Ja||(S_.then(()=>Ja=0),Ja=Date.now());function b_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Nt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Sn(c,t,5,a)}}else Sn(s,t,5,[i])};return e.value=n,e.attached=E_(),e}const zu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,w_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?f_(n,i,o):t==="style"?g_(n,e,i):ma(t)?ga(t)||M_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):T_(n,t,i,o))?(Ou(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Nu(n,t,i,o,r,t!=="value")):n._isVueCE&&(A_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ee(i)))?Ou(n,Ln(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Nu(n,t,i,o))};function T_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&zu(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return zu(t)&&Ee(e)?!1:t in n}function A_(n,t){const e=n._def.props;if(!e)return!1;const i=Ln(t);return Array.isArray(e)?e.some(s=>Ln(s)===i):Object.keys(e).some(s=>Ln(s)===i)}const Hu=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Nt(t)?e=>Wo(t,e):t};function R_(n){n.target.composing=!0}function Vu(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Za=Symbol("_assign");function Gu(n,t,e){return t&&(n=n.trim()),e&&(n=Sc(n)),n}const C_={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[Za]=Hu(s);const r=i||s.props&&s.props.type==="number";Ys(n,t?"change":"input",o=>{o.target.composing||n[Za](Gu(n.value,e,r))}),(e||r)&&Ys(n,"change",()=>{n.value=Gu(n.value,e,r)}),t||(Ys(n,"compositionstart",R_),Ys(n,"compositionend",Vu),Ys(n,"change",Vu))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Za]=Hu(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Sc(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},P_=["ctrl","shift","alt","meta"],L_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>P_.some(e=>n[`${e}Key`]&&!t.includes(e))},I_=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=L_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},D_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},U_=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=s=>{if(!("key"in s))return;const r=Xi(s.key);if(t.some(o=>o===r||D_[o]===r))return n(s)})},N_=Ue({patchProp:w_},r_);let ku;function O_(){return ku||(ku=Bg(N_))}const F_=(...n)=>{const t=O_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=z_(i);if(!s)return;const r=t._component;!Wt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,B_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function B_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function z_(n){return Ee(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let op;const Ca=n=>op=n,ap=Symbol();function oc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Gr;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Gr||(Gr={}));function H_(){const n=nd(!0),t=n.run(()=>Pe({}));let e=[],i=[];const s=Pc({install(r){Ca(s),s._a=r,r.provide(ap,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const lp=()=>{};function Wu(n,t,e,i=lp){n.push(t);const s=()=>{const r=n.indexOf(t);r>-1&&(n.splice(r,1),i())};return!e&&id()&&gm(s),s}function Ss(n,...t){n.slice().forEach(e=>{e(...t)})}const V_=n=>n(),Xu=Symbol(),Qa=Symbol();function ac(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],s=n[e];oc(s)&&oc(i)&&n.hasOwnProperty(e)&&!Te(i)&&!di(i)?n[e]=ac(s,i):n[e]=i}return n}const G_=Symbol();function k_(n){return!oc(n)||!n.hasOwnProperty(G_)}const{assign:Ui}=Object;function W_(n){return!!(Te(n)&&n.effect)}function X_(n,t,e,i){const{state:s,actions:r,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=s?s():{});const u=zm(e.state.value[n]);return Ui(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Pc(An(()=>{Ca(e);const d=e._s.get(n);return o[f].call(d,d)})),h),{}))}return l=cp(n,c,t,e,i,!0),l}function cp(n,t,e={},i,s,r){let o;const a=Ui({actions:{}},e),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={});let _;function m(I){let y;c=u=!1,typeof I=="function"?(I(i.state.value[n]),y={type:Gr.patchFunction,storeId:n,events:d}):(ac(i.state.value[n],I),y={type:Gr.patchObject,payload:I,storeId:n,events:d});const M=_=Symbol();Md().then(()=>{_===M&&(c=!0)}),u=!0,Ss(h,y,i.state.value[n])}const p=r?function(){const{state:y}=e,M=y?y():{};this.$patch(P=>{Ui(P,M)})}:lp;function E(){o.stop(),h=[],f=[],i._s.delete(n)}const x=(I,y="")=>{if(Xu in I)return I[Qa]=y,I;const M=function(){Ca(i);const P=Array.from(arguments),U=[],z=[];function Z(Q){U.push(Q)}function et(Q){z.push(Q)}Ss(f,{args:P,name:M[Qa],store:L,after:Z,onError:et});let j;try{j=I.apply(this&&this.$id===n?this:L,P)}catch(Q){throw Ss(z,Q),Q}return j instanceof Promise?j.then(Q=>(Ss(U,Q),Q)).catch(Q=>(Ss(z,Q),Promise.reject(Q))):(Ss(U,j),j)};return M[Xu]=!0,M[Qa]=y,M},S={_p:i,$id:n,$onAction:Wu.bind(null,f),$patch:m,$reset:p,$subscribe(I,y={}){const M=Wu(h,I,y.detached,()=>P()),P=o.run(()=>er(()=>i.state.value[n],U=>{(y.flush==="sync"?u:c)&&I({storeId:n,type:Gr.direct,events:d},U)},Ui({},l,y)));return M},$dispose:E},L=eo(S);i._s.set(n,L);const R=(i._a&&i._a.runWithContext||V_)(()=>i._e.run(()=>(o=nd()).run(()=>t({action:x}))));for(const I in R){const y=R[I];if(Te(y)&&!W_(y)||di(y))r||(g&&k_(y)&&(Te(y)?y.value=g[I]:ac(y,g[I])),i.state.value[n][I]=y);else if(typeof y=="function"){const M=x(y,I);R[I]=M,a.actions[I]=y}}return Ui(L,R),Ui(te(L),R),Object.defineProperty(L,"$state",{get:()=>i.state.value[n],set:I=>{m(y=>{Ui(y,I)})}}),i._p.forEach(I=>{Ui(L,o.run(()=>I({store:L,app:i._a,pinia:i,options:a})))}),g&&r&&e.hydrate&&e.hydrate(L.$state,g),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function q_(n,t,e){let i,s;const r=typeof t=="function";i=n,s=r?e:t;function o(a,l){const c=Jm();return a=a||(c?Fr(ap,null):null),a&&Ca(a),a=op,a._s.has(i)||(r?cp(i,t,s,a):X_(i,s,a)),a._s.get(i)}return o.$id=i,o}const kr=[{id:"bicycle",name:"Bicycle",emoji:"🚲",price:0,desc:"Eco-friendly start"},{id:"scooter",name:"Scooter",emoji:"🛵",price:500,desc:"Faster city rides"},{id:"ev_bike",name:"EV Bike",emoji:"⚡",price:1500,desc:"Silent & powerful"},{id:"autorickshaw",name:"Auto Rickshaw",emoji:"🛺",price:3e3,desc:"High-load carrier"}],lc="bharat_runner_save_v2";function Y_(){try{const n=localStorage.getItem(lc);return n?JSON.parse(n):null}catch{return null}}const Bc=q_("game",()=>{const n=Y_(),t=Pe("menu"),e=Pe("Player"),i=Pe(12),s=Pe((n==null?void 0:n.coins)??100),r=Pe((n==null?void 0:n.score)??0),o=Pe((n==null?void 0:n.deliveriesDone)??0),a=Pe((n==null?void 0:n.ownedVehicles)??["bicycle"]),l=Pe((n==null?void 0:n.currentVehicle)??"bicycle"),c=Pe(null),u=Pe(null),h=Pe(!1),f=Pe(!1),d=Pe(null);let g=null;const _=An(()=>{const at=i.value,_t=at>=12?"PM":"AM";return`${at%12===0?12:at%12}:00 ${_t}`}),m=An(()=>{if(!c.value)return"00:00";const at=Math.ceil(c.value.timeRemaining),_t=Math.floor(at/60).toString().padStart(2,"0"),At=(at%60).toString().padStart(2,"0");return`${_t}:${At}`}),p=An(()=>c.value?c.value.timeRemaining/c.value.timeLimit:1);function E(at){e.value=at}function x(){t.value="playing"}function S(){t.value="paused"}function L(){t.value="playing"}function T(at){s.value+=at,k()}function R(at){o.value++,s.value+=at,r.value+=at*10,c.value=null,k(),y("success",at)}function I(){c.value=null,y("fail",0)}function y(at,_t){g&&(clearTimeout(g),g=null);const At=kr.find(Zt=>!a.value.includes(Zt.id))??null;d.value={type:at,reward:_t,totalCoins:s.value,nextVehicleName:(At==null?void 0:At.name)??null,nextVehicleEmoji:(At==null?void 0:At.emoji)??null,nextVehicleNeeded:At?Math.max(0,At.price-s.value):null,progressPct:At?Math.min(1,s.value/At.price):null},g=setTimeout(()=>{d.value=null,g=null},2800)}function M(at){c.value={...at}}function P(at){c.value&&(c.value.timeRemaining=at)}function U(){c.value=null}function z(at){u.value=at}function Z(at){h.value=at}function et(at){f.value=at}function j(at){const _t=kr.find(At=>At.id===at);return!_t||s.value<_t.price?!1:(a.value.includes(at)||(s.value-=_t.price,a.value=[...a.value,at]),l.value=at,k(),!0)}function Q(at){return a.value.includes(at)?(l.value=at,k(),!0):!1}function k(){const at={coins:s.value,deliveriesDone:o.value,score:r.value,ownedVehicles:a.value,currentVehicle:l.value};localStorage.setItem(lc,JSON.stringify(at))}function xt(){s.value=100,r.value=0,o.value=0,a.value=["bicycle"],l.value="bicycle",localStorage.removeItem(lc)}return{gameState:t,playerName:e,timeOfDay:i,coins:s,score:r,deliveriesDone:o,ownedVehicles:a,currentVehicle:l,hudMission:c,interactionHint:u,isMounted:h,nearGarage:f,deliveryOutcome:d,timeLabel:_,missionTimeFmt:m,missionTimePct:p,setName:E,startGame:x,pauseGame:S,resumeGame:L,addCoins:T,completeDelivery:R,failDelivery:I,setHudMission:M,updateMissionTimer:P,clearMission:U,setInteractionHint:z,setMounted:Z,setNearGarage:et,buyVehicle:j,selectVehicle:Q,resetProgress:xt}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="165",j_=0,qu=1,$_=2,up=1,hp=2,ri=3,Gi=0,en=1,on=2,Bi=0,nr=1,ia=2,Yu=3,ju=4,K_=5,fs=100,J_=101,Z_=102,Q_=103,t0=104,e0=200,n0=201,i0=202,s0=203,cc=204,uc=205,r0=206,o0=207,a0=208,l0=209,c0=210,u0=211,h0=212,f0=213,d0=214,p0=0,m0=1,g0=2,sa=3,_0=4,v0=5,x0=6,M0=7,Pa=0,y0=1,S0=2,zi=0,E0=1,b0=2,w0=3,T0=4,A0=5,R0=6,C0=7,fp=300,or=301,ar=302,hc=303,fc=304,La=306,dc=1e3,ps=1001,pc=1002,an=1003,P0=1004,ho=1005,Rn=1006,tl=1007,ms=1008,ki=1009,L0=1010,I0=1011,ra=1012,dp=1013,lr=1014,hi=1015,Ia=1016,pp=1017,mp=1018,cr=1020,D0=35902,U0=1021,N0=1022,Xn=1023,O0=1024,F0=1025,ir=1026,ur=1027,gp=1028,_p=1029,B0=1030,vp=1031,xp=1033,el=33776,nl=33777,il=33778,sl=33779,$u=35840,Ku=35841,Ju=35842,Zu=35843,Qu=36196,th=37492,eh=37496,nh=37808,ih=37809,sh=37810,rh=37811,oh=37812,ah=37813,lh=37814,ch=37815,uh=37816,hh=37817,fh=37818,dh=37819,ph=37820,mh=37821,rl=36492,gh=36494,_h=36495,z0=36283,vh=36284,xh=36285,Mh=36286,H0=3200,V0=3201,Hc=0,G0=1,Oi="",zn="srgb",qi="srgb-linear",Vc="display-p3",Da="display-p3-linear",oa="linear",xe="srgb",aa="rec709",la="p3",Es=7680,yh=519,k0=512,W0=513,X0=514,Mp=515,q0=516,Y0=517,j0=518,$0=519,mc=35044,Sh="300 es",fi=2e3,ca=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,gc=180/Math.PI;function Hi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Xe(n,t,e){return Math.max(t,Math.min(e,n))}function K0(n,t){return(n%t+t)%t}function al(n,t,e){return(1-e)*n+e*t}function Wn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function de(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,i,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],x=s[4],S=s[7],L=s[2],T=s[5],R=s[8];return r[0]=o*_+a*E+l*L,r[3]=o*m+a*x+l*T,r[6]=o*p+a*S+l*R,r[1]=c*_+u*E+h*L,r[4]=c*m+u*x+h*T,r[7]=c*p+u*S+h*R,r[2]=f*_+d*E+g*L,r[5]=f*m+d*x+g*T,r[8]=f*p+d*S+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=e*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new jt;function yp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function J0(){const n=ua("canvas");return n.style.display="block",n}const Eh={};function Gc(n){n in Eh||(Eh[n]=!0,console.warn(n))}function Z0(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const bh=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[qi]:{transfer:oa,primaries:aa,toReference:n=>n,fromReference:n=>n},[zn]:{transfer:xe,primaries:aa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Da]:{transfer:oa,primaries:la,toReference:n=>n.applyMatrix3(wh),fromReference:n=>n.applyMatrix3(bh)},[Vc]:{transfer:xe,primaries:la,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wh),fromReference:n=>n.applyMatrix3(bh).convertLinearToSRGB()}},Q0=new Set([qi,Da]),ce={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Q0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=fo[t].toReference,s=fo[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return fo[n].primaries},getTransfer:function(n){return n===Oi?oa:fo[n].transfer}};function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bs;class tv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=ua("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ua("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sr(e[i]/255)*255):e[i]=sr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ev=0;class Sp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ul(s[o].image)):r.push(ul(s[o]))}else r=ul(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;class qe extends dr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=ps,s=ps,r=Rn,o=ms,a=Xn,l=ki,c=qe.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Hi(),this.name="",this.source=new Sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=fp;qe.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,i=0,s=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(d+1)/2,L=(p+1)/2,T=(u+f)/4,R=(h+_)/4,I=(g+m)/4;return x>S&&x>L?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=R/i):S>L?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=I/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=I/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends dr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends iv{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ep extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sv extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,p*E);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const S=a*E;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hl=new C,Th=new jn;class xs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),mo.subVectors(this.max,xr),ws.subVectors(t.a,xr),Ts.subVectors(t.b,xr),As.subVectors(t.c,xr),Ei.subVectors(Ts,ws),bi.subVectors(As,Ts),ts.subVectors(ws,As);let e=[0,-Ei.z,Ei.y,0,-bi.z,bi.y,0,-ts.z,ts.y,Ei.z,0,-Ei.x,bi.z,0,-bi.x,ts.z,0,-ts.x,-Ei.y,Ei.x,0,-bi.y,bi.x,0,-ts.y,ts.x,0];return!fl(e,ws,Ts,As,mo)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,ws,Ts,As,mo))?!1:(go.crossVectors(Ei,bi),e=[go.x,go.y,go.z],fl(e,ws,Ts,As,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zn=[new C,new C,new C,new C,new C,new C,new C,new C],En=new C,po=new xs,ws=new C,Ts=new C,As=new C,Ei=new C,bi=new C,ts=new C,xr=new C,mo=new C,go=new C,es=new C;function fl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rv=new xs,Mr=new C,dl=new C;class Ms{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(dl)),this.expandByPoint(Mr.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new C,pl=new C,_o=new C,wi=new C,ml=new C,vo=new C,gl=new C;class kc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){pl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(pl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=wi.dot(this.direction),l=-wi.dot(_o),c=wi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pl).addScaledVector(_o,f),d}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,i,s,r){ml.subVectors(e,t),vo.subVectors(i,t),gl.crossVectors(ml,vo);let o=this.direction.dot(gl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,t);const l=a*this.direction.dot(vo.crossVectors(wi,vo));if(l<0)return null;const c=a*this.direction.dot(ml.cross(wi));if(c<0||l+c>o)return null;const u=-a*wi.dot(gl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ov,t,av)}lookAt(t,e,i){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ti.crossVectors(i,un),Ti.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ti.crossVectors(i,un)),Ti.normalize(),xo.crossVectors(un,Ti),s[0]=Ti.x,s[4]=xo.x,s[8]=un.x,s[1]=Ti.y,s[5]=xo.y,s[9]=un.y,s[2]=Ti.z,s[6]=xo.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],x=i[7],S=i[11],L=i[15],T=s[0],R=s[4],I=s[8],y=s[12],M=s[1],P=s[5],U=s[9],z=s[13],Z=s[2],et=s[6],j=s[10],Q=s[14],k=s[3],xt=s[7],at=s[11],_t=s[15];return r[0]=o*T+a*M+l*Z+c*k,r[4]=o*R+a*P+l*et+c*xt,r[8]=o*I+a*U+l*j+c*at,r[12]=o*y+a*z+l*Q+c*_t,r[1]=u*T+h*M+f*Z+d*k,r[5]=u*R+h*P+f*et+d*xt,r[9]=u*I+h*U+f*j+d*at,r[13]=u*y+h*z+f*Q+d*_t,r[2]=g*T+_*M+m*Z+p*k,r[6]=g*R+_*P+m*et+p*xt,r[10]=g*I+_*U+m*j+p*at,r[14]=g*y+_*z+m*Q+p*_t,r[3]=E*T+x*M+S*Z+L*k,r[7]=E*R+x*P+S*et+L*xt,r[11]=E*I+x*U+S*j+L*at,r[15]=E*y+x*z+S*Q+L*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+e*c*h-e*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,L=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,T=e*E+i*x+s*S+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=E*R,t[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*R,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*R,t[4]=x*R,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=S*R,t[9]=(g*h*r-u*_*r-g*i*d+e*_*d+u*i*p-e*h*p)*R,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*p+e*a*p)*R,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*d-e*a*d)*R,t[12]=L*R,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*R,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*R,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,E=l*c,x=l*u,S=l*h,L=i.x,T=i.y,R=i.z;return s[0]=(1-(_+p))*L,s[1]=(d+S)*L,s[2]=(g-x)*L,s[3]=0,s[4]=(d-S)*T,s[5]=(1-(f+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-E)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const c=1/r,u=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,e.setFromRotationMatrix(bn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=fi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(a===fi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=fi){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,d=(i+s)*u;let g,_;if(a===fi)g=(o+r)*h,_=-2*h;else if(a===ca)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new C,bn=new Jt,ov=new C(0,0,0),av=new C(1,1,1),Ti=new C,xo=new C,un=new C,Ah=new Jt,Rh=new jn;class Un{constructor(t=0,e=0,i=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lv=0;const Ch=new C,Cs=new jn,ti=new Jt,Mo=new C,yr=new C,cv=new C,uv=new jn,Ph=new C(1,0,0),Lh=new C(0,1,0),Ih=new C(0,0,1),Dh={type:"added"},hv={type:"removed"},Ps={type:"childadded",child:null},_l={type:"childremoved",child:null};class De extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new C,e=new Un,i=new jn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new jt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(yr,Mo,this.up):ti.lookAt(Mo,yr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ti),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hv),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,cv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,uv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}De.DEFAULT_UP=new C(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new C,ei=new C,vl=new C,ni=new C,Ls=new C,Is=new C,Uh=new C,xl=new C,Ml=new C,yl=new C;class Cn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){wn.subVectors(s,e),ei.subVectors(i,e),vl.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(ei),l=wn.dot(vl),c=ei.dot(ei),u=ei.dot(vl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(t,e,i,s){return wn.subVectors(i,e),ei.subVectors(t,e),wn.cross(ei).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),wn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Is.subVectors(r,i),xl.subVectors(t,i);const l=Ls.dot(xl),c=Is.dot(xl);if(l<=0&&c<=0)return e.copy(i);Ml.subVectors(t,s);const u=Ls.dot(Ml),h=Is.dot(Ml);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ls,o);yl.subVectors(t,r);const d=Ls.dot(yl),g=Is.dot(yl);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Is,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Uh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Uh,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},yo={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ft{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=K0(t,1),e=Xe(e,0,1),i=Xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=zn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zn){const i=wp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=cl(t.r),this.g=cl(t.g),this.b=cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return ce.fromWorkingColorSpace(ke.copy(this),t),Math.round(Xe(ke.r*255,0,255))*65536+Math.round(Xe(ke.g*255,0,255))*256+Math.round(Xe(ke.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=zn){ce.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==zn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(yo);const i=al(Ai.h,yo.h,e),s=al(Ai.s,yo.s,e),r=al(Ai.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Ft;Ft.NAMES=wp;let fv=0;class xi extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=nr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==uc&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pi extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new C,So=new wt;class pn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Gc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mc&&(t.usage=this.usage),t}}class Tp extends pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ap extends pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ve extends pn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dv=0;const _n=new Jt,El=new De,Ds=new C,hn=new xs,Sr=new xs,ze=new C;class Ve extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yp(t)?Ap:Tp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return El.lookAt(t),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(hn.min,Sr.min),hn.expandByPoint(ze),ze.addVectors(hn.max,Sr.max),hn.expandByPoint(ze)):(hn.expandByPoint(Sr.min),hn.expandByPoint(Sr.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),ze.add(Ds)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new C,l[I]=new C;const c=new C,u=new C,h=new C,f=new wt,d=new wt,g=new wt,_=new C,m=new C;function p(I,y,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),a[I].add(_),a[y].add(_),a[M].add(_),l[I].add(m),l[y].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,y=E.length;I<y;++I){const M=E[I],P=M.start,U=M.count;for(let z=P,Z=P+U;z<Z;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new C,S=new C,L=new C,T=new C;function R(I){L.fromBufferAttribute(s,I),T.copy(L);const y=a[I];x.copy(y),x.sub(L.multiplyScalar(L.dot(y))).normalize(),S.crossVectors(T,y);const P=S.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,y=E.length;I<y;++I){const M=E[I],P=M.start,U=M.count;for(let z=P,Z=P+U;z<Z;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new Jt,ns=new kc,Eo=new Ms,Oh=new C,Us=new C,Ns=new C,Os=new C,bl=new C,bo=new C,wo=new wt,To=new wt,Ao=new wt,Fh=new C,Bh=new C,zh=new C,Ro=new C,Co=new C;class Ct extends De{constructor(t=new Ve,e=new pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(bl.fromBufferAttribute(h,t),o?bo.addScaledVector(bl,u):bo.addScaledVector(bl.sub(e),u))}e.add(bo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Eo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Eo,Oh)===null||ns.origin.distanceToSquared(Oh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Nh),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=E,L=x;S<L;S+=3){const T=a.getX(S),R=a.getX(S+1),I=a.getX(S+2);s=Po(this,p,t,i,c,u,h,T,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=Po(this,o,t,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=E,L=x;S<L;S+=3){const T=S,R=S+1,I=S+2;s=Po(this,p,t,i,c,u,h,T,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,x=m+1,S=m+2;s=Po(this,o,t,i,c,u,h,E,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function pv(n,t,e,i,s,r,o,a){let l;if(t.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Po(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Us),n.getVertexPosition(l,Ns),n.getVertexPosition(c,Os);const u=pv(n,t,e,i,Us,Ns,Os,Ro);if(u){s&&(wo.fromBufferAttribute(s,a),To.fromBufferAttribute(s,l),Ao.fromBufferAttribute(s,c),u.uv=Cn.getInterpolation(Ro,Us,Ns,Os,wo,To,Ao,new wt)),r&&(wo.fromBufferAttribute(r,a),To.fromBufferAttribute(r,l),Ao.fromBufferAttribute(r,c),u.uv1=Cn.getInterpolation(Ro,Us,Ns,Os,wo,To,Ao,new wt)),o&&(Fh.fromBufferAttribute(o,a),Bh.fromBufferAttribute(o,l),zh.fromBufferAttribute(o,c),u.normal=Cn.getInterpolation(Ro,Us,Ns,Os,Fh,Bh,zh,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new C,materialIndex:0};Cn.getNormal(Us,Ns,Os,h.normal),u.face=h}return u}class re extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(h,2));function g(_,m,p,E,x,S,L,T,R,I,y){const M=S/R,P=L/I,U=S/2,z=L/2,Z=T/2,et=R+1,j=I+1;let Q=0,k=0;const xt=new C;for(let at=0;at<j;at++){const _t=at*P-z;for(let At=0;At<et;At++){const Zt=At*M-U;xt[_]=Zt*E,xt[m]=_t*x,xt[p]=Z,c.push(xt.x,xt.y,xt.z),xt[_]=0,xt[m]=0,xt[p]=T>0?1:-1,u.push(xt.x,xt.y,xt.z),h.push(At/R),h.push(1-at/I),Q+=1}}for(let at=0;at<I;at++)for(let _t=0;_t<R;_t++){const At=f+_t+et*at,Zt=f+_t+et*(at+1),nt=f+(_t+1)+et*(at+1),ht=f+(_t+1)+et*at;l.push(At,Zt,ht),l.push(Zt,nt,ht),k+=6}a.addGroup(d,k,y),d+=k,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Je(n){const t={};for(let e=0;e<n.length;e++){const i=hr(n[e]);for(const s in i)t[s]=i[s]}return t}function mv(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const gv={clone:hr,merge:Je};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=mv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cp extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new C,Hh=new wt,Vh=new wt;class xn extends Cp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Vh),e.subVectors(Vh,Hh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ol*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,Bs=1;class xv extends De{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);const r=new xn(Fs,Bs,t,e);r.layers=this.layers,this.add(r);const o=new xn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);const a=new xn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);const l=new xn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);const c=new xn(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pp extends qe{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mv extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new re(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Bi});r.uniforms.tEquirect.value=e;const o=new Ct(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=Rn),new xv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wl=new C,yv=new C,Sv=new jt;class cs{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wl.subVectors(i,e).cross(yv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Sv.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Ms,Lo=new C;class Wc{constructor(t=new cs,e=new cs,i=new cs,s=new cs,r=new cs,o=new cs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=fi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],x=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-d,S-p).normalize(),i[1].setComponents(l+r,f+c,m+d,S+p).normalize(),i[2].setComponents(l+o,f+u,m+g,S+E).normalize(),i[3].setComponents(l-o,f-u,m-g,S-E).normalize(),i[4].setComponents(l-a,f-h,m-_,S-x).normalize(),e===fi)i[5].setComponents(l+a,f+h,m+_,S+x).normalize();else if(e===ca)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ev(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),h.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(n.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ua extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let x=0;x<c;x++){const S=x*h-r;g.push(S,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const x=E+c*p,S=E+c*(p+1),L=E+1+c*(p+1),T=E+1+c*p;d.push(x,S,T),d.push(S,L,T)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
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
#endif`,Bv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yv=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,$v=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lM=`float getShadowMask() {
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
}`,cM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,dM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vM=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,PM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,LM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,IM=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,HM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,GM=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qM=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,jM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,KM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ey=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:bv,alphahash_pars_fragment:wv,alphamap_fragment:Tv,alphamap_pars_fragment:Av,alphatest_fragment:Rv,alphatest_pars_fragment:Cv,aomap_fragment:Pv,aomap_pars_fragment:Lv,batching_pars_vertex:Iv,batching_vertex:Dv,begin_vertex:Uv,beginnormal_vertex:Nv,bsdfs:Ov,iridescence_fragment:Fv,bumpmap_pars_fragment:Bv,clipping_planes_fragment:zv,clipping_planes_pars_fragment:Hv,clipping_planes_pars_vertex:Vv,clipping_planes_vertex:Gv,color_fragment:kv,color_pars_fragment:Wv,color_pars_vertex:Xv,color_vertex:qv,common:Yv,cube_uv_reflection_fragment:jv,defaultnormal_vertex:$v,displacementmap_pars_vertex:Kv,displacementmap_vertex:Jv,emissivemap_fragment:Zv,emissivemap_pars_fragment:Qv,colorspace_fragment:tx,colorspace_pars_fragment:ex,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:sx,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:ox,fog_vertex:ax,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:ux,gradientmap_pars_fragment:hx,lightmap_pars_fragment:fx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:Mx,lights_physical_fragment:yx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Ex,lights_fragment_maps:bx,lights_fragment_end:wx,logdepthbuf_fragment:Tx,logdepthbuf_pars_fragment:Ax,logdepthbuf_pars_vertex:Rx,logdepthbuf_vertex:Cx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Ix,map_particle_pars_fragment:Dx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Nx,morphinstance_vertex:Ox,morphcolor_vertex:Fx,morphnormal_vertex:Bx,morphtarget_pars_vertex:zx,morphtarget_vertex:Hx,normal_fragment_begin:Vx,normal_fragment_maps:Gx,normal_pars_fragment:kx,normal_pars_vertex:Wx,normal_vertex:Xx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:jx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Kx,opaque_fragment:Jx,packing:Zx,premultiplied_alpha_fragment:Qx,project_vertex:tM,dithering_fragment:eM,dithering_pars_fragment:nM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:rM,shadowmap_pars_vertex:oM,shadowmap_vertex:aM,shadowmask_pars_fragment:lM,skinbase_vertex:cM,skinning_pars_vertex:uM,skinning_vertex:hM,skinnormal_vertex:fM,specularmap_fragment:dM,specularmap_pars_fragment:pM,tonemapping_fragment:mM,tonemapping_pars_fragment:gM,transmission_fragment:_M,transmission_pars_fragment:vM,uv_pars_fragment:xM,uv_pars_vertex:MM,uv_vertex:yM,worldpos_vertex:SM,background_vert:EM,background_frag:bM,backgroundCube_vert:wM,backgroundCube_frag:TM,cube_vert:AM,cube_frag:RM,depth_vert:CM,depth_frag:PM,distanceRGBA_vert:LM,distanceRGBA_frag:IM,equirect_vert:DM,equirect_frag:UM,linedashed_vert:NM,linedashed_frag:OM,meshbasic_vert:FM,meshbasic_frag:BM,meshlambert_vert:zM,meshlambert_frag:HM,meshmatcap_vert:VM,meshmatcap_frag:GM,meshnormal_vert:kM,meshnormal_frag:WM,meshphong_vert:XM,meshphong_frag:qM,meshphysical_vert:YM,meshphysical_frag:jM,meshtoon_vert:$M,meshtoon_frag:KM,points_vert:JM,points_frag:ZM,shadow_vert:QM,shadow_frag:ty,sprite_vert:ey,sprite_frag:ny},vt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Gn={basic:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Je([vt.points,vt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Je([vt.common,vt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Je([vt.sprite,vt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Je([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Je([vt.lights,vt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Gn.physical={uniforms:Je([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Io={r:0,b:0,g:0},ss=new Un,iy=new Jt;function sy(n,t,e,i,s,r,o){const a=new Ft(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const S=g(E);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===La)?(u===void 0&&(u=new Ct(new re(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:hr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(ss)),u.material.toneMapped=ce.getTransfer(S.colorSpace)!==xe,(h!==S||f!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ct(new Ua(2,2),new Wi({name:"BackgroundMaterial",uniforms:hr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ce.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,x){E.getRGB(Io,Rp(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m}}function ry(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,P,U,z,Z){let et=!1;const j=h(z,U,P);r!==j&&(r=j,c(r.object)),et=d(M,z,U,Z),et&&g(M,z,U,Z),Z!==null&&t.update(Z,n.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,S(M,P,U,z),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,P,U){const z=U.wireframe===!0;let Z=i[M.id];Z===void 0&&(Z={},i[M.id]=Z);let et=Z[P.id];et===void 0&&(et={},Z[P.id]=et);let j=et[z];return j===void 0&&(j=f(l()),et[z]=j),j}function f(M){const P=[],U=[],z=[];for(let Z=0;Z<e;Z++)P[Z]=0,U[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,P,U,z){const Z=r.attributes,et=P.attributes;let j=0;const Q=U.getAttributes();for(const k in Q)if(Q[k].location>=0){const at=Z[k];let _t=et[k];if(_t===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;j++}return r.attributesNum!==j||r.index!==z}function g(M,P,U,z){const Z={},et=P.attributes;let j=0;const Q=U.getAttributes();for(const k in Q)if(Q[k].location>=0){let at=et[k];at===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),Z[k]=_t,j++}r.attributes=Z,r.attributesNum=j,r.index=z}function _(){const M=r.newAttributes;for(let P=0,U=M.length;P<U;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const U=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;U[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),Z[M]!==P&&(n.vertexAttribDivisor(M,P),Z[M]=P)}function E(){const M=r.newAttributes,P=r.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==M[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function x(M,P,U,z,Z,et,j){j===!0?n.vertexAttribIPointer(M,P,U,Z,et):n.vertexAttribPointer(M,P,U,z,Z,et)}function S(M,P,U,z){_();const Z=z.attributes,et=U.getAttributes(),j=P.defaultAttributeValues;for(const Q in et){const k=et[Q];if(k.location>=0){let xt=Z[Q];if(xt===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),xt!==void 0){const at=xt.normalized,_t=xt.itemSize,At=t.get(xt);if(At===void 0)continue;const Zt=At.buffer,nt=At.type,ht=At.bytesPerElement,Et=nt===n.INT||nt===n.UNSIGNED_INT||xt.gpuType===dp;if(xt.isInterleavedBufferAttribute){const gt=xt.data,qt=gt.stride,Xt=xt.offset;if(gt.isInstancedInterleavedBuffer){for(let $t=0;$t<k.locationSize;$t++)p(k.location+$t,gt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let $t=0;$t<k.locationSize;$t++)m(k.location+$t);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let $t=0;$t<k.locationSize;$t++)x(k.location+$t,_t/k.locationSize,nt,at,qt*ht,(Xt+_t/k.locationSize*$t)*ht,Et)}else{if(xt.isInstancedBufferAttribute){for(let gt=0;gt<k.locationSize;gt++)p(k.location+gt,xt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let gt=0;gt<k.locationSize;gt++)m(k.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let gt=0;gt<k.locationSize;gt++)x(k.location+gt,_t/k.locationSize,nt,at,_t*ht,_t/k.locationSize*gt*ht,Et)}}else if(j!==void 0){const at=j[Q];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(k.location,at);break;case 3:n.vertexAttrib3fv(k.location,at);break;case 4:n.vertexAttrib4fv(k.location,at);break;default:n.vertexAttrib1fv(k.location,at)}}}}E()}function L(){I();for(const M in i){const P=i[M];for(const U in P){const z=P[U];for(const Z in z)u(z[Z].object),delete z[Z];delete P[U]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const U in P){const z=P[U];for(const Z in z)u(z[Z].object),delete z[Z];delete P[U]}delete i[M.id]}function R(M){for(const P in i){const U=i[P];if(U[M.id]===void 0)continue;const z=U[M.id];for(const Z in z)u(z[Z].object),delete z[Z];delete U[M.id]}}function I(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function oy(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(c[d],u[d]);else{f.multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<f.length;_++)e.update(g,i,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ay(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Xn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ki&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hi&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:S,maxSamples:L}}function ly(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new cs,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,x=E*4;let S=p.clippingState||null;l.value=S,S=u(g,f,x,d);for(let L=0;L!==x;++L)S[L]=e[L];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function cy(n){let t=new WeakMap;function e(o,a){return a===hc?o.mapping=or:a===fc&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hc||a===fc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mv(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ip extends Cp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,Gh=[.125,.215,.35,.446,.526,.582],ds=20,Tl=new Ip,kh=new Ft;let Al=null,Rl=0,Cl=0,Pl=!1;const us=(1+Math.sqrt(5))/2,zs=1/us,Wh=[new C(-us,zs,0),new C(us,zs,0),new C(-zs,0,us),new C(zs,0,us),new C(0,us,-zs),new C(0,us,zs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Xh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Rl,Cl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ia,format:Xn,colorSpace:qi,depthBuffer:!1},s=qh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(r)),this._blurMaterial=hy(r,t,e)}return s}_compileMaterial(t){const e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,i,s){const a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kh),u.toneMapping=zi,u.autoClear=!1;const d=new pi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Ct(new re,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(kh),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Do(s,E*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===or||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Do(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Tl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wh[(s-r-1)%Wh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ct(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ds-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const p=[];let E=0;for(let R=0;R<ds;++R){const I=R/_,y=Math.exp(-I*I/2);p.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[s],L=3*S*(s>x-Ks?s-x+Ks:0),T=4*(this._cubeSize-S);Do(e,L,T,3*S,2*S),l.setRenderTarget(e),l.render(h,Tl)}}function uy(n){const t=[],e=[],i=[];let s=n;const r=n-Ks+1+Gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ks?l=Gh[o-n+Ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),x=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let T=0;T<d;T++){const R=T%3*2/3-1,I=T>2?0:-1,y=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(y,_*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];S.set(M,p*g*T)}const L=new Ve;L.setAttribute("position",new pn(E,_)),L.setAttribute("uv",new pn(x,m)),L.setAttribute("faceIndex",new pn(S,p)),t.push(L),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function qh(n,t,e){const i=new vs(n,t,e);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hy(n,t,e){const i=new Float32Array(ds),s=new C(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yh(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function jh(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function fy(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===fc,u=l===or||l===ar;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Xh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Xh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function dy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Gc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function py(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let x=0,S=E.length;x<S;x+=3){const L=E[x+0],T=E[x+1],R=E[x+2];f.push(L,T,T,R,R,L)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const L=x+0,T=x+1,R=x+2;f.push(L,T,T,R,R,L)}}else return;const m=new(yp(f)?Ap:Tp)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function my(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(f[m]/o,d[m]);else{_.multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E];for(let E=0;E<_.length;E++)e.update(p,i,_[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function gy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _y(n,t,e){const i=new WeakMap,s=new He;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=a.attributes.position.count*S,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*T*4*h),I=new Ep(R,L,T,h);I.type=hi,I.needsUpdate=!0;const y=S*4;for(let P=0;P<h;P++){const U=p[P],z=E[P],Z=x[P],et=L*T*4*P;for(let j=0;j<U.count;j++){const Q=j*y;g===!0&&(s.fromBufferAttribute(U,j),R[et+Q+0]=s.x,R[et+Q+1]=s.y,R[et+Q+2]=s.z,R[et+Q+3]=0),_===!0&&(s.fromBufferAttribute(z,j),R[et+Q+4]=s.x,R[et+Q+5]=s.y,R[et+Q+6]=s.z,R[et+Q+7]=0),m===!0&&(s.fromBufferAttribute(Z,j),R[et+Q+8]=s.x,R[et+Q+9]=s.y,R[et+Q+10]=s.z,R[et+Q+11]=Z.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new wt(L,T)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function vy(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Dp extends qe{constructor(t,e,i,s,r,o,a,l,c,u=ir){if(u!==ir&&u!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ir&&(i=lr),i===void 0&&u===ur&&(i=cr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Up=new qe,Np=new Dp(1,1);Np.compareFunction=Mp;const Op=new Ep,Fp=new sv,Bp=new Pp,$h=[],Kh=[],Jh=new Float32Array(16),Zh=new Float32Array(9),Qh=new Float32Array(4);function pr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Na(n,t){let e=Kh[t];e===void 0&&(e=new Int32Array(t),Kh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function xy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function My(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function Ey(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;Qh.set(i),n.uniformMatrix2fv(this.addr,!1,Qh),Oe(e,i)}}function by(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),Oe(e,i)}}function wy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;Jh.set(i),n.uniformMatrix4fv(this.addr,!1,Jh),Oe(e,i)}}function Ty(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function Cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function Py(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function Iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function Dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function Uy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Np:Up;e.setTexture2D(t||r,s)}function Ny(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Fp,s)}function Oy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Bp,s)}function Fy(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Op,s)}function By(n){switch(n){case 5126:return xy;case 35664:return My;case 35665:return yy;case 35666:return Sy;case 35674:return Ey;case 35675:return by;case 35676:return wy;case 5124:case 35670:return Ty;case 35667:case 35671:return Ay;case 35668:case 35672:return Ry;case 35669:case 35673:return Cy;case 5125:return Py;case 36294:return Ly;case 36295:return Iy;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Oy;case 36289:case 36303:case 36311:case 36292:return Fy}}function zy(n,t){n.uniform1fv(this.addr,t)}function Hy(n,t){const e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function Vy(n,t){const e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function Gy(n,t){const e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function ky(n,t){const e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Wy(n,t){const e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Xy(n,t){const e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function qy(n,t){n.uniform1iv(this.addr,t)}function Yy(n,t){n.uniform2iv(this.addr,t)}function jy(n,t){n.uniform3iv(this.addr,t)}function $y(n,t){n.uniform4iv(this.addr,t)}function Ky(n,t){n.uniform1uiv(this.addr,t)}function Jy(n,t){n.uniform2uiv(this.addr,t)}function Zy(n,t){n.uniform3uiv(this.addr,t)}function Qy(n,t){n.uniform4uiv(this.addr,t)}function tS(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Up,r[o])}function eS(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fp,r[o])}function nS(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bp,r[o])}function iS(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Op,r[o])}function sS(n){switch(n){case 5126:return zy;case 35664:return Hy;case 35665:return Vy;case 35666:return Gy;case 35674:return ky;case 35675:return Wy;case 35676:return Xy;case 5124:case 35670:return qy;case 35667:case 35671:return Yy;case 35668:case 35672:return jy;case 35669:case 35673:return $y;case 5125:return Ky;case 36294:return Jy;case 36295:return Zy;case 36296:return Qy;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return nS;case 36289:case 36303:case 36311:case 36292:return iS}}class rS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=By(e.type)}}class oS{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sS(e.type)}}class aS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function tf(n,t){n.seq.push(t),n.map[t.id]=t}function lS(n,t,e){const i=n.name,s=i.length;for(Ll.lastIndex=0;;){const r=Ll.exec(i),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){tf(e,c===void 0?new rS(a,n,t):new oS(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new aS(a),tf(e,h)),e=h}}}class Yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);lS(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ef(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const cS=37297;let uS=0;function hS(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function fS(n){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(n);let i;switch(t===e?i="":t===la&&e===aa?i="LinearDisplayP3ToLinearSRGB":t===aa&&e===la&&(i="LinearSRGBToLinearDisplayP3"),n){case qi:case Da:return[i,"LinearTransferOETF"];case zn:case Vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function nf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hS(n.getShaderSource(t),o)}else return s}function dS(n,t){const e=fS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function pS(n,t){let e;switch(t){case E0:e="Linear";break;case b0:e="Reinhard";break;case w0:e="OptimizedCineon";break;case T0:e="ACESFilmic";break;case R0:e="AgX";break;case C0:e="Neutral";break;case A0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function gS(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _S(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Dr(n){return n!==""}function sf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(n){return n.replace(vS,MS)}const xS=new Map;function MS(n,t){let e=Yt[t];if(e===void 0){const i=xS.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(n){return n.replace(yS,SS)}function SS(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function af(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ES(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===up?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ri&&(t="SHADOWMAP_TYPE_VSM"),t}function bS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wS(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function TS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pa:t="ENVMAP_BLENDING_MULTIPLY";break;case y0:t="ENVMAP_BLENDING_MIX";break;case S0:t="ENVMAP_BLENDING_ADD";break}return t}function AS(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function RS(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ES(e),c=bS(e),u=wS(e),h=TS(e),f=AS(e),d=mS(e),g=gS(r),_=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[af(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==zi?pS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,dS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=_c(o),o=sf(o,e),o=rf(o,e),a=_c(a),a=sf(a,e),a=rf(a,e),o=of(o),a=of(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,S=E+p+a,L=ef(s,s.VERTEX_SHADER,x),T=ef(s,s.FRAGMENT_SHADER,S);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(L).trim(),Z=s.getShaderInfoLog(T).trim();let et=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,T);else{const Q=nf(s,L,"vertex"),k=nf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Q+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||Z==="")&&(j=!1);j&&(P.diagnostics={runnable:et,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(L),s.deleteShader(T),I=new Yo(s,_),y=_S(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,cS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let CS=0;class PS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new LS(t),e.set(t,i)),i}}class LS{constructor(t){this.id=CS++,this.code=t,this.usedTimes=0}}function IS(n,t,e,i,s,r,o){const a=new bp,l=new PS,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,P,U,z){const Z=U.fog,et=z.geometry,j=y.isMeshStandardMaterial?U.environment:null,Q=(y.isMeshStandardMaterial?e:t).get(y.envMap||j),k=Q&&Q.mapping===La?Q.image.height:null,xt=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const at=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,_t=at!==void 0?at.length:0;let At=0;et.morphAttributes.position!==void 0&&(At=1),et.morphAttributes.normal!==void 0&&(At=2),et.morphAttributes.color!==void 0&&(At=3);let Zt,nt,ht,Et;if(xt){const ue=Gn[xt];Zt=ue.vertexShader,nt=ue.fragmentShader}else Zt=y.vertexShader,nt=y.fragmentShader,l.update(y),ht=l.getVertexShaderID(y),Et=l.getFragmentShaderID(y);const gt=n.getRenderTarget(),qt=z.isInstancedMesh===!0,Xt=z.isBatchedMesh===!0,$t=!!y.map,O=!!y.matcap,A=!!Q,D=!!y.aoMap,G=!!y.lightMap,Y=!!y.bumpMap,tt=!!y.normalMap,K=!!y.displacementMap,st=!!y.emissiveMap,ct=!!y.metalnessMap,b=!!y.roughnessMap,v=y.anisotropy>0,F=y.clearcoat>0,H=y.dispersion>0,W=y.iridescence>0,J=y.sheen>0,ft=y.transmission>0,ut=v&&!!y.anisotropyMap,lt=F&&!!y.clearcoatMap,Rt=F&&!!y.clearcoatNormalMap,ot=F&&!!y.clearcoatRoughnessMap,bt=W&&!!y.iridescenceMap,Bt=W&&!!y.iridescenceThicknessMap,Ut=J&&!!y.sheenColorMap,Mt=J&&!!y.sheenRoughnessMap,It=!!y.specularMap,Ht=!!y.specularColorMap,Me=!!y.specularIntensityMap,N=ft&&!!y.transmissionMap,yt=ft&&!!y.thicknessMap,it=!!y.gradientMap,rt=!!y.alphaMap,mt=y.alphaTest>0,Gt=!!y.alphaHash,ee=!!y.extensions;let Ae=zi;y.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const Fe={shaderID:xt,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:nt,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:Et,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Xt,batchingColor:Xt&&z._colorsTexture!==null,instancing:qt,instancingColor:qt&&z.instanceColor!==null,instancingMorph:qt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:gt===null?n.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:qi,alphaToCoverage:!!y.alphaToCoverage,map:$t,matcap:O,envMap:A,envMapMode:A&&Q.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:G,bumpMap:Y,normalMap:tt,displacementMap:f&&K,emissiveMap:st,normalMapObjectSpace:tt&&y.normalMapType===G0,normalMapTangentSpace:tt&&y.normalMapType===Hc,metalnessMap:ct,roughnessMap:b,anisotropy:v,anisotropyMap:ut,clearcoat:F,clearcoatMap:lt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ot,dispersion:H,iridescence:W,iridescenceMap:bt,iridescenceThicknessMap:Bt,sheen:J,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:It,specularColorMap:Ht,specularIntensityMap:Me,transmission:ft,transmissionMap:N,thicknessMap:yt,gradientMap:it,opaque:y.transparent===!1&&y.blending===nr&&y.alphaToCoverage===!1,alphaMap:rt,alphaTest:mt,alphaHash:Gt,combine:y.combine,mapUv:$t&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:G&&_(y.lightMap.channel),bumpMapUv:Y&&_(y.bumpMap.channel),normalMapUv:tt&&_(y.normalMap.channel),displacementMapUv:K&&_(y.displacementMap.channel),emissiveMapUv:st&&_(y.emissiveMap.channel),metalnessMapUv:ct&&_(y.metalnessMap.channel),roughnessMapUv:b&&_(y.roughnessMap.channel),anisotropyMapUv:ut&&_(y.anisotropyMap.channel),clearcoatMapUv:lt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(y.sheenRoughnessMap.channel),specularMapUv:It&&_(y.specularMap.channel),specularColorMapUv:Ht&&_(y.specularColorMap.channel),specularIntensityMapUv:Me&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:yt&&_(y.thicknessMap.channel),alphaMapUv:rt&&_(y.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(tt||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!et.attributes.uv&&($t||rt),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:At,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,decodeVideoTexture:$t&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ee&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(E(M,y),x(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),y.push(a.mask)}function S(y){const M=g[y.type];let P;if(M){const U=Gn[M];P=gv.clone(U.uniforms)}else P=y.uniforms;return P}function L(y,M){let P;for(let U=0,z=u.length;U<z;U++){const Z=u[U];if(Z.cacheKey===M){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new RS(n,M,y,r),u.push(P)),P}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:I}}function DS(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function US(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function lf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||US),i.length>1&&i.sort(f||lf),s.length>1&&s.sort(f||lf)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function NS(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new cf,n.set(i,[o])):s>=r.length?(o=new cf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function OS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ft};break;case"SpotLight":e={position:new C,direction:new C,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function FS(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let BS=0;function zS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function HS(n){const t=new OS,e=FS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new Jt,o=new Jt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,x=0,S=0,L=0,T=0,R=0;c.sort(zS);for(let y=0,M=c.length;y<M;y++){const P=c[y],U=P.color,z=P.intensity,Z=P.distance,et=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*z,h+=U.g*z,f+=U.b*z;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],z);R++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,k=e.get(P);k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=et,i.directionalShadowMatrix[d]=P.shadow.matrix,E++}i.directional[d]=j,d++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(U).multiplyScalar(z),j.distance=Z,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[_]=j;const Q=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,Q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=Q.matrix,P.castShadow){const k=e.get(P);k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=et,S++}_++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(U).multiplyScalar(z),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=j,m++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Q=P.shadow,k=e.get(P);k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=et,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=j,g++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(z),j.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[p]=j,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==x||I.numSpotShadows!==S||I.numSpotMaps!==L||I.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=x,I.numSpotShadows=S,I.numSpotMaps=L,I.numLightProbes=R,i.version=BS++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const x=c[p];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function uf(n){const t=new HS(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function VS(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new uf(n),t.set(s,[a])):r>=o.length?(a=new uf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class GS extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kS extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,t,e){let i=new Wc;const s=new wt,r=new wt,o=new He,a=new GS({depthPacking:V0}),l=new kS,c={},u=e.maxTextureSize,h={[Gi]:en,[en]:Gi,[on]:on},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ct(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(T,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Bi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==ri&&this.type===ri,Z=p===ri&&this.type!==ri;for(let et=0,j=T.length;et<j;et++){const Q=T[et],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const xt=k.getFrameExtents();if(s.multiply(xt),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/xt.x),s.x=r.x*xt.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/xt.y),s.y=r.y*xt.y,k.mapSize.y=r.y)),k.map===null||z===!0||Z===!0){const _t=this.type!==ri?{minFilter:an,magFilter:an}:{};k.map!==null&&k.map.dispose(),k.map=new vs(s.x,s.y,_t),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const at=k.getViewportCount();for(let _t=0;_t<at;_t++){const At=k.getViewport(_t);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(o),k.updateMatrices(Q,_t),i=k.getFrustum(),S(R,I,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===ri&&E(k,I),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,P)};function E(T,R){const I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vs(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,I,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,I,d,_,null)}function x(T,R,I,y){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=M.uuid,z=R.uuid;let Z=c[U];Z===void 0&&(Z={},c[U]=Z);let et=Z[z];et===void 0&&(et=M.clone(),Z[z]=et,R.addEventListener("dispose",L)),M=et}if(M.visible=R.visible,M.wireframe=R.wireframe,y===ri?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=I}return M}function S(T,R,I,y,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ri)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const z=t.update(T),Z=T.material;if(Array.isArray(Z)){const et=z.groups;for(let j=0,Q=et.length;j<Q;j++){const k=et[j],xt=Z[k.materialIndex];if(xt&&xt.visible){const at=x(T,xt,y,M);T.onBeforeShadow(n,T,R,I,z,at,k),n.renderBufferDirect(I,null,z,at,T,k),T.onAfterShadow(n,T,R,I,z,at,k)}}}else if(Z.visible){const et=x(T,Z,y,M);T.onBeforeShadow(n,T,R,I,z,et,null),n.renderBufferDirect(I,null,z,et,T,null),T.onAfterShadow(n,T,R,I,z,et,null)}}const U=T.children;for(let z=0,Z=U.length;z<Z;z++)S(U[z],R,I,y,M)}function L(T){T.target.removeEventListener("dispose",L);for(const I in c){const y=c[I],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}function YS(n){function t(){let N=!1;const yt=new He;let it=null;const rt=new He(0,0,0,0);return{setMask:function(mt){it!==mt&&!N&&(n.colorMask(mt,mt,mt,mt),it=mt)},setLocked:function(mt){N=mt},setClear:function(mt,Gt,ee,Ae,Fe){Fe===!0&&(mt*=Ae,Gt*=Ae,ee*=Ae),yt.set(mt,Gt,ee,Ae),rt.equals(yt)===!1&&(n.clearColor(mt,Gt,ee,Ae),rt.copy(yt))},reset:function(){N=!1,it=null,rt.set(-1,0,0,0)}}}function e(){let N=!1,yt=null,it=null,rt=null;return{setTest:function(mt){mt?Et(n.DEPTH_TEST):gt(n.DEPTH_TEST)},setMask:function(mt){yt!==mt&&!N&&(n.depthMask(mt),yt=mt)},setFunc:function(mt){if(it!==mt){switch(mt){case p0:n.depthFunc(n.NEVER);break;case m0:n.depthFunc(n.ALWAYS);break;case g0:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case _0:n.depthFunc(n.EQUAL);break;case v0:n.depthFunc(n.GEQUAL);break;case x0:n.depthFunc(n.GREATER);break;case M0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=mt}},setLocked:function(mt){N=mt},setClear:function(mt){rt!==mt&&(n.clearDepth(mt),rt=mt)},reset:function(){N=!1,yt=null,it=null,rt=null}}}function i(){let N=!1,yt=null,it=null,rt=null,mt=null,Gt=null,ee=null,Ae=null,Fe=null;return{setTest:function(ue){N||(ue?Et(n.STENCIL_TEST):gt(n.STENCIL_TEST))},setMask:function(ue){yt!==ue&&!N&&(n.stencilMask(ue),yt=ue)},setFunc:function(ue,Nn,On){(it!==ue||rt!==Nn||mt!==On)&&(n.stencilFunc(ue,Nn,On),it=ue,rt=Nn,mt=On)},setOp:function(ue,Nn,On){(Gt!==ue||ee!==Nn||Ae!==On)&&(n.stencilOp(ue,Nn,On),Gt=ue,ee=Nn,Ae=On)},setLocked:function(ue){N=ue},setClear:function(ue){Fe!==ue&&(n.clearStencil(ue),Fe=ue)},reset:function(){N=!1,yt=null,it=null,rt=null,mt=null,Gt=null,ee=null,Ae=null,Fe=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,E=null,x=null,S=null,L=null,T=new Ft(0,0,0),R=0,I=!1,y=null,M=null,P=null,U=null,z=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,j=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Q)[1]),et=j>=1):Q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),et=j>=2);let k=null,xt={};const at=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),At=new He().fromArray(at),Zt=new He().fromArray(_t);function nt(N,yt,it,rt){const mt=new Uint8Array(4),Gt=n.createTexture();n.bindTexture(N,Gt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ee=0;ee<it;ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(yt+ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return Gt}const ht={};ht[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Et(n.DEPTH_TEST),r.setFunc(sa),Y(!1),tt(qu),Et(n.CULL_FACE),D(Bi);function Et(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function gt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function qt(N,yt){return u[N]!==yt?(n.bindFramebuffer(N,yt),u[N]=yt,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=yt),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Xt(N,yt){let it=f,rt=!1;if(N){it=h.get(yt),it===void 0&&(it=[],h.set(yt,it));const mt=N.textures;if(it.length!==mt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let Gt=0,ee=mt.length;Gt<ee;Gt++)it[Gt]=n.COLOR_ATTACHMENT0+Gt;it.length=mt.length,rt=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,rt=!0);rt&&n.drawBuffers(it)}function $t(N){return d!==N?(n.useProgram(N),d=N,!0):!1}const O={[fs]:n.FUNC_ADD,[J_]:n.FUNC_SUBTRACT,[Z_]:n.FUNC_REVERSE_SUBTRACT};O[Q_]=n.MIN,O[t0]=n.MAX;const A={[e0]:n.ZERO,[n0]:n.ONE,[i0]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[c0]:n.SRC_ALPHA_SATURATE,[a0]:n.DST_COLOR,[r0]:n.DST_ALPHA,[s0]:n.ONE_MINUS_SRC_COLOR,[uc]:n.ONE_MINUS_SRC_ALPHA,[l0]:n.ONE_MINUS_DST_COLOR,[o0]:n.ONE_MINUS_DST_ALPHA,[u0]:n.CONSTANT_COLOR,[h0]:n.ONE_MINUS_CONSTANT_COLOR,[f0]:n.CONSTANT_ALPHA,[d0]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,yt,it,rt,mt,Gt,ee,Ae,Fe,ue){if(N===Bi){g===!0&&(gt(n.BLEND),g=!1);return}if(g===!1&&(Et(n.BLEND),g=!0),N!==K_){if(N!==_||ue!==I){if((m!==fs||x!==fs)&&(n.blendEquation(n.FUNC_ADD),m=fs,x=fs),ue)switch(N){case nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ia:n.blendFunc(n.ONE,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ia:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,E=null,S=null,L=null,T.set(0,0,0),R=0,_=N,I=ue}return}mt=mt||yt,Gt=Gt||it,ee=ee||rt,(yt!==m||mt!==x)&&(n.blendEquationSeparate(O[yt],O[mt]),m=yt,x=mt),(it!==p||rt!==E||Gt!==S||ee!==L)&&(n.blendFuncSeparate(A[it],A[rt],A[Gt],A[ee]),p=it,E=rt,S=Gt,L=ee),(Ae.equals(T)===!1||Fe!==R)&&(n.blendColor(Ae.r,Ae.g,Ae.b,Fe),T.copy(Ae),R=Fe),_=N,I=!1}function G(N,yt){N.side===on?gt(n.CULL_FACE):Et(n.CULL_FACE);let it=N.side===en;yt&&(it=!it),Y(it),N.blending===nr&&N.transparent===!1?D(Bi):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const rt=N.stencilWrite;o.setTest(rt),rt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Et(n.SAMPLE_ALPHA_TO_COVERAGE):gt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function tt(N){N!==j_?(Et(n.CULL_FACE),N!==M&&(N===qu?n.cullFace(n.BACK):N===$_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):gt(n.CULL_FACE),M=N}function K(N){N!==P&&(et&&n.lineWidth(N),P=N)}function st(N,yt,it){N?(Et(n.POLYGON_OFFSET_FILL),(U!==yt||z!==it)&&(n.polygonOffset(yt,it),U=yt,z=it)):gt(n.POLYGON_OFFSET_FILL)}function ct(N){N?Et(n.SCISSOR_TEST):gt(n.SCISSOR_TEST)}function b(N){N===void 0&&(N=n.TEXTURE0+Z-1),k!==N&&(n.activeTexture(N),k=N)}function v(N,yt,it){it===void 0&&(k===null?it=n.TEXTURE0+Z-1:it=k);let rt=xt[it];rt===void 0&&(rt={type:void 0,texture:void 0},xt[it]=rt),(rt.type!==N||rt.texture!==yt)&&(k!==it&&(n.activeTexture(it),k=it),n.bindTexture(N,yt||ht[N]),rt.type=N,rt.texture=yt)}function F(){const N=xt[k];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){At.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),At.copy(N))}function Mt(N){Zt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Zt.copy(N))}function It(N,yt){let it=l.get(yt);it===void 0&&(it=new WeakMap,l.set(yt,it));let rt=it.get(N);rt===void 0&&(rt=n.getUniformBlockIndex(yt,N.name),it.set(N,rt))}function Ht(N,yt){const rt=l.get(yt).get(N);a.get(yt)!==rt&&(n.uniformBlockBinding(yt,rt,N.__bindingPointIndex),a.set(yt,rt))}function Me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},k=null,xt={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,m=null,p=null,E=null,x=null,S=null,L=null,T=new Ft(0,0,0),R=0,I=!1,y=null,M=null,P=null,U=null,z=null,At.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Et,disable:gt,bindFramebuffer:qt,drawBuffers:Xt,useProgram:$t,setBlending:D,setMaterial:G,setFlipSided:Y,setCullFace:tt,setLineWidth:K,setPolygonOffset:st,setScissorTest:ct,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:H,compressedTexImage3D:W,texImage2D:bt,texImage3D:Bt,updateUBOMapping:It,uniformBlockBinding:Ht,texStorage2D:Rt,texStorage3D:ot,texSubImage2D:J,texSubImage3D:ft,compressedTexSubImage2D:ut,compressedTexSubImage3D:lt,scissor:Ut,viewport:Mt,reset:Me}}function jS(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):ua("canvas")}function _(b,v,F){let H=1;const W=ct(b);if((W.width>F||W.height>F)&&(H=F/Math.max(W.width,W.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const J=Math.floor(H*W.width),ft=Math.floor(H*W.height);h===void 0&&(h=g(J,ft));const ut=v?g(J,ft):h;return ut.width=J,ut.height=ft,ut.getContext("2d").drawImage(b,0,0,J,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+J+"x"+ft+")."),ut}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==an&&b.minFilter!==Rn}function p(b){n.generateMipmap(b)}function E(b,v,F,H,W=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let J=v;if(v===n.RED&&(F===n.FLOAT&&(J=n.R32F),F===n.HALF_FLOAT&&(J=n.R16F),F===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.R8UI),F===n.UNSIGNED_SHORT&&(J=n.R16UI),F===n.UNSIGNED_INT&&(J=n.R32UI),F===n.BYTE&&(J=n.R8I),F===n.SHORT&&(J=n.R16I),F===n.INT&&(J=n.R32I)),v===n.RG&&(F===n.FLOAT&&(J=n.RG32F),F===n.HALF_FLOAT&&(J=n.RG16F),F===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RG8UI),F===n.UNSIGNED_SHORT&&(J=n.RG16UI),F===n.UNSIGNED_INT&&(J=n.RG32UI),F===n.BYTE&&(J=n.RG8I),F===n.SHORT&&(J=n.RG16I),F===n.INT&&(J=n.RG32I)),v===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),v===n.RGBA){const ft=W?oa:ce.getTransfer(H);F===n.FLOAT&&(J=n.RGBA32F),F===n.HALF_FLOAT&&(J=n.RGBA16F),F===n.UNSIGNED_BYTE&&(J=ft===xe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(b,v){let F;return b?v===null||v===lr||v===cr?F=n.DEPTH24_STENCIL8:v===hi?F=n.DEPTH32F_STENCIL8:v===ra&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===lr||v===cr?F=n.DEPTH_COMPONENT24:v===hi?F=n.DEPTH_COMPONENT32F:v===ra&&(F=n.DEPTH_COMPONENT16),F}function S(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==an&&b.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function L(b){const v=b.target;v.removeEventListener("dispose",L),R(v),v.isVideoTexture&&u.delete(v)}function T(b){const v=b.target;v.removeEventListener("dispose",T),y(v)}function R(b){const v=i.get(b);if(v.__webglInit===void 0)return;const F=b.source,H=f.get(F);if(H){const W=H[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&I(b),Object.keys(H).length===0&&f.delete(F)}i.remove(b)}function I(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const F=b.source,H=f.get(F);delete H[v.__cacheKey],o.memory.textures--}function y(b){const v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(v.__webglFramebuffer[H]))for(let W=0;W<v.__webglFramebuffer[H].length;W++)n.deleteFramebuffer(v.__webglFramebuffer[H][W]);else n.deleteFramebuffer(v.__webglFramebuffer[H]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[H])}else{if(Array.isArray(v.__webglFramebuffer))for(let H=0;H<v.__webglFramebuffer.length;H++)n.deleteFramebuffer(v.__webglFramebuffer[H]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let H=0;H<v.__webglColorRenderbuffer.length;H++)v.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[H]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let H=0,W=F.length;H<W;H++){const J=i.get(F[H]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(F[H])}i.remove(b)}let M=0;function P(){M=0}function U(){const b=M;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),M+=1,b}function z(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const F=i.get(b);if(b.isVideoTexture&&K(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Zt(F,b,v);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+v)}function et(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Zt(F,b,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+v)}function j(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Zt(F,b,v);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+v)}function Q(b,v){const F=i.get(b);if(b.version>0&&F.__version!==b.version){nt(F,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+v)}const k={[dc]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[pc]:n.MIRRORED_REPEAT},xt={[an]:n.NEAREST,[P0]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[tl]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},at={[k0]:n.NEVER,[$0]:n.ALWAYS,[W0]:n.LESS,[Mp]:n.LEQUAL,[X0]:n.EQUAL,[j0]:n.GEQUAL,[q0]:n.GREATER,[Y0]:n.NOTEQUAL};function _t(b,v){if(v.type===hi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===tl||v.magFilter===ho||v.magFilter===ms||v.minFilter===Rn||v.minFilter===tl||v.minFilter===ho||v.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,k[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,k[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,k[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,xt[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==ho&&v.minFilter!==ms||v.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function At(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",L));const H=v.source;let W=f.get(H);W===void 0&&(W={},f.set(H,W));const J=z(v);if(J!==b.__cacheKey){W[J]===void 0&&(W[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[J].usedTimes++;const ft=W[b.__cacheKey];ft!==void 0&&(W[b.__cacheKey].usedTimes--,ft.usedTimes===0&&I(v)),b.__cacheKey=J,b.__webglTexture=W[J].texture}return F}function Zt(b,v,F){let H=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=n.TEXTURE_3D);const W=At(b,v),J=v.source;e.bindTexture(H,b.__webglTexture,n.TEXTURE0+F);const ft=i.get(J);if(J.version!==ft.__version||W===!0){e.activeTexture(n.TEXTURE0+F);const ut=ce.getPrimaries(ce.workingColorSpace),lt=v.colorSpace===Oi?null:ce.getPrimaries(v.colorSpace),Rt=v.colorSpace===Oi||ut===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=_(v.image,!1,s.maxTextureSize);ot=st(v,ot);const bt=r.convert(v.format,v.colorSpace),Bt=r.convert(v.type);let Ut=E(v.internalFormat,bt,Bt,v.colorSpace,v.isVideoTexture);_t(H,v);let Mt;const It=v.mipmaps,Ht=v.isVideoTexture!==!0,Me=ft.__version===void 0||W===!0,N=J.dataReady,yt=S(v,ot);if(v.isDepthTexture)Ut=x(v.format===ur,v.type),Me&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,Ut,ot.width,ot.height,0,bt,Bt,null));else if(v.isDataTexture)if(It.length>0){Ht&&Me&&e.texStorage2D(n.TEXTURE_2D,yt,Ut,It[0].width,It[0].height);for(let it=0,rt=It.length;it<rt;it++)Mt=It[it],Ht?N&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Bt,Mt.data):e.texImage2D(n.TEXTURE_2D,it,Ut,Mt.width,Mt.height,0,bt,Bt,Mt.data);v.generateMipmaps=!1}else Ht?(Me&&e.texStorage2D(n.TEXTURE_2D,yt,Ut,ot.width,ot.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,bt,Bt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,ot.width,ot.height,0,bt,Bt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&Me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Ut,It[0].width,It[0].height,ot.depth);for(let it=0,rt=It.length;it<rt;it++)if(Mt=It[it],v.format!==Xn)if(bt!==null)if(Ht){if(N)if(v.layerUpdates.size>0){for(const mt of v.layerUpdates){const Gt=Mt.width*Mt.height;e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,mt,Mt.width,Mt.height,1,bt,Mt.data.slice(Gt*mt,Gt*(mt+1)),0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,ot.depth,bt,Mt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Ut,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,ot.depth,bt,Bt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Ut,Mt.width,Mt.height,ot.depth,0,bt,Bt,Mt.data)}else{Ht&&Me&&e.texStorage2D(n.TEXTURE_2D,yt,Ut,It[0].width,It[0].height);for(let it=0,rt=It.length;it<rt;it++)Mt=It[it],v.format!==Xn?bt!==null?Ht?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,Mt.width,Mt.height,bt,Bt,Mt.data):e.texImage2D(n.TEXTURE_2D,it,Ut,Mt.width,Mt.height,0,bt,Bt,Mt.data)}else if(v.isDataArrayTexture)if(Ht){if(Me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,Ut,ot.width,ot.height,ot.depth),N)if(v.layerUpdates.size>0){let it;switch(Bt){case n.UNSIGNED_BYTE:switch(bt){case n.ALPHA:it=1;break;case n.LUMINANCE:it=1;break;case n.LUMINANCE_ALPHA:it=2;break;case n.RGB:it=3;break;case n.RGBA:it=4;break;default:throw new Error(`Unknown texel size for format ${bt}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:it=1;break;default:throw new Error(`Unknown texel size for type ${Bt}.`)}const rt=ot.width*ot.height*it;for(const mt of v.layerUpdates)e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,mt,ot.width,ot.height,1,bt,Bt,ot.data.slice(rt*mt,rt*(mt+1)));v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,bt,Bt,ot.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,bt,Bt,ot.data);else if(v.isData3DTexture)Ht?(Me&&e.texStorage3D(n.TEXTURE_3D,yt,Ut,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,bt,Bt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,bt,Bt,ot.data);else if(v.isFramebufferTexture){if(Me)if(Ht)e.texStorage2D(n.TEXTURE_2D,yt,Ut,ot.width,ot.height);else{let it=ot.width,rt=ot.height;for(let mt=0;mt<yt;mt++)e.texImage2D(n.TEXTURE_2D,mt,Ut,it,rt,0,bt,Bt,null),it>>=1,rt>>=1}}else if(It.length>0){if(Ht&&Me){const it=ct(It[0]);e.texStorage2D(n.TEXTURE_2D,yt,Ut,it.width,it.height)}for(let it=0,rt=It.length;it<rt;it++)Mt=It[it],Ht?N&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,bt,Bt,Mt):e.texImage2D(n.TEXTURE_2D,it,Ut,bt,Bt,Mt);v.generateMipmaps=!1}else if(Ht){if(Me){const it=ct(ot);e.texStorage2D(n.TEXTURE_2D,yt,Ut,it.width,it.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Bt,ot)}else e.texImage2D(n.TEXTURE_2D,0,Ut,bt,Bt,ot);m(v)&&p(H),ft.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function nt(b,v,F){if(v.image.length!==6)return;const H=At(b,v),W=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const J=i.get(W);if(W.version!==J.__version||H===!0){e.activeTexture(n.TEXTURE0+F);const ft=ce.getPrimaries(ce.workingColorSpace),ut=v.colorSpace===Oi?null:ce.getPrimaries(v.colorSpace),lt=v.colorSpace===Oi||ft===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let rt=0;rt<6;rt++)!Rt&&!ot?bt[rt]=_(v.image[rt],!0,s.maxCubemapSize):bt[rt]=ot?v.image[rt].image:v.image[rt],bt[rt]=st(v,bt[rt]);const Bt=bt[0],Ut=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),It=E(v.internalFormat,Ut,Mt,v.colorSpace),Ht=v.isVideoTexture!==!0,Me=J.__version===void 0||H===!0,N=W.dataReady;let yt=S(v,Bt);_t(n.TEXTURE_CUBE_MAP,v);let it;if(Rt){Ht&&Me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,It,Bt.width,Bt.height);for(let rt=0;rt<6;rt++){it=bt[rt].mipmaps;for(let mt=0;mt<it.length;mt++){const Gt=it[mt];v.format!==Xn?Ut!==null?Ht?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,Gt.width,Gt.height,Ut,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,It,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,Gt.width,Gt.height,Ut,Mt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,It,Gt.width,Gt.height,0,Ut,Mt,Gt.data)}}}else{if(it=v.mipmaps,Ht&&Me){it.length>0&&yt++;const rt=ct(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,yt,It,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ot){Ht?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,bt[rt].width,bt[rt].height,Ut,Mt,bt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,It,bt[rt].width,bt[rt].height,0,Ut,Mt,bt[rt].data);for(let mt=0;mt<it.length;mt++){const ee=it[mt].image[rt].image;Ht?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,ee.width,ee.height,Ut,Mt,ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,It,ee.width,ee.height,0,Ut,Mt,ee.data)}}else{Ht?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ut,Mt,bt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,It,Ut,Mt,bt[rt]);for(let mt=0;mt<it.length;mt++){const Gt=it[mt];Ht?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,Ut,Mt,Gt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,It,Ut,Mt,Gt.image[rt])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),J.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ht(b,v,F,H,W,J){const ft=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),lt=E(F.internalFormat,ft,ut,F.colorSpace);if(!i.get(v).__hasExternalTextures){const ot=Math.max(1,v.width>>J),bt=Math.max(1,v.height>>J);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,J,lt,ot,bt,v.depth,0,ft,ut,null):e.texImage2D(W,J,lt,ot,bt,0,ft,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,W,i.get(F).__webglTexture,0,Y(v)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,W,i.get(F).__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(b,v,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer){const H=v.depthTexture,W=H&&H.isDepthTexture?H.type:null,J=x(v.stencilBuffer,W),ft=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=Y(v);tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,J,v.width,v.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,b)}else{const H=v.textures;for(let W=0;W<H.length;W++){const J=H[W],ft=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),lt=E(J.internalFormat,ft,ut,J.colorSpace),Rt=Y(v);F&&tt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,lt,v.width,v.height):tt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,lt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,lt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const H=i.get(v.depthTexture).__webglTexture,W=Y(v);if(v.depthTexture.format===ir)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,H,0);else if(v.depthTexture.format===ur)tt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function qt(b){const v=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");gt(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]=n.createRenderbuffer(),Et(v.__webglDepthbuffer[H],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Et(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(b,v,F){const H=i.get(b);v!==void 0&&ht(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&qt(b)}function $t(b){const v=b.texture,F=i.get(b),H=i.get(v);b.addEventListener("dispose",T);const W=b.textures,J=b.isWebGLCubeRenderTarget===!0,ft=W.length>1;if(ft||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=v.version,o.memory.textures++),J){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let lt=0;lt<v.mipmaps.length;lt++)F.__webglFramebuffer[ut][lt]=n.createFramebuffer()}else F.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)F.__webglFramebuffer[ut]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ft)for(let ut=0,lt=W.length;ut<lt;ut++){const Rt=i.get(W[ut]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&tt(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<W.length;ut++){const lt=W[ut];F.__webglColorRenderbuffer[ut]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const Rt=r.convert(lt.format,lt.colorSpace),ot=r.convert(lt.type),bt=E(lt.internalFormat,Rt,ot,lt.colorSpace,b.isXRRenderTarget===!0),Bt=Y(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,bt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),_t(n.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)ht(F.__webglFramebuffer[ut][lt],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,lt);else ht(F.__webglFramebuffer[ut],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ut=0,lt=W.length;ut<lt;ut++){const Rt=W[ut],ot=i.get(Rt);e.bindTexture(n.TEXTURE_2D,ot.__webglTexture),_t(n.TEXTURE_2D,Rt),ht(F.__webglFramebuffer,b,Rt,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ut=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,H.__webglTexture),_t(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)ht(F.__webglFramebuffer[lt],b,v,n.COLOR_ATTACHMENT0,ut,lt);else ht(F.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ut,0);m(v)&&p(ut),e.unbindTexture()}b.depthBuffer&&qt(b)}function O(b){const v=b.textures;for(let F=0,H=v.length;F<H;F++){const W=v[F];if(m(W)){const J=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ft=i.get(W).__webglTexture;e.bindTexture(J,ft),p(J),e.unbindTexture()}}}const A=[],D=[];function G(b){if(b.samples>0){if(tt(b)===!1){const v=b.textures,F=b.width,H=b.height;let W=n.COLOR_BUFFER_BIT;const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(b),ut=v.length>1;if(ut)for(let lt=0;lt<v.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let lt=0;lt<v.length;lt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ut){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[lt]);const Rt=i.get(v[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,F,H,0,0,F,H,W,n.NEAREST),l===!0&&(A.length=0,D.length=0,A.push(n.COLOR_ATTACHMENT0+lt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(A.push(J),D.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,A))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ut)for(let lt=0;lt<v.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[lt]);const Rt=i.get(v[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Y(b){return Math.min(s.maxSamples,b.samples)}function tt(b){const v=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function K(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function st(b,v){const F=b.colorSpace,H=b.format,W=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==qi&&F!==Oi&&(ce.getTransfer(F)===xe?(H!==Xn||W!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function ct(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=Z,this.setTexture2DArray=et,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=Xt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=tt}function $S(n,t){function e(i,s=Oi){let r;const o=ce.getTransfer(s);if(i===ki)return n.UNSIGNED_BYTE;if(i===pp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===D0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===L0)return n.BYTE;if(i===I0)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===dp)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===Ia)return n.HALF_FLOAT;if(i===U0)return n.ALPHA;if(i===N0)return n.RGB;if(i===Xn)return n.RGBA;if(i===O0)return n.LUMINANCE;if(i===F0)return n.LUMINANCE_ALPHA;if(i===ir)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===gp)return n.RED;if(i===_p)return n.RED_INTEGER;if(i===B0)return n.RG;if(i===vp)return n.RG_INTEGER;if(i===xp)return n.RGBA_INTEGER;if(i===el||i===nl||i===il||i===sl)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$u||i===Ku||i===Ju||i===Zu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$u)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ku)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ju)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qu||i===th||i===eh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qu||i===th)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===sh||i===rh||i===oh||i===ah||i===lh||i===ch||i===uh||i===hh||i===fh||i===dh||i===ph||i===mh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===gh||i===_h)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===z0||i===vh||i===xh||i===Mh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class KS extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class le extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ZS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:ZS,fragmentShader:QS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class eE extends dr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new tE,m=e.getContextAttributes();let p=null,E=null;const x=[],S=[],L=new wt;let T=null;const R=new xn;R.layers.enable(1),R.viewport=new He;const I=new xn;I.layers.enable(2),I.viewport=new He;const y=[R,I],M=new KS;M.layers.enable(1),M.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=x[nt];return ht===void 0&&(ht=new Il,x[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=x[nt];return ht===void 0&&(ht=new Il,x[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=x[nt];return ht===void 0&&(ht=new Il,x[nt]=ht),ht.getHandSpace()};function z(nt){const ht=S.indexOf(nt.inputSource);if(ht===-1)return;const Et=x[ht];Et!==void 0&&(Et.update(nt.inputSource,nt.frame,c||o),Et.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Z(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",et);for(let nt=0;nt<x.length;nt++){const ht=S[nt];ht!==null&&(S[nt]=null,x[nt].disconnect(ht))}P=null,U=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,E=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ht={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new vs(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ht=null,Et=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=m.stencil?ur:ir,Et=m.stencil?cr:lr);const qt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new vs(f.textureWidth,f.textureHeight,{format:Xn,type:ki,depthTexture:new Dp(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function et(nt){for(let ht=0;ht<nt.removed.length;ht++){const Et=nt.removed[ht],gt=S.indexOf(Et);gt>=0&&(S[gt]=null,x[gt].disconnect(Et))}for(let ht=0;ht<nt.added.length;ht++){const Et=nt.added[ht];let gt=S.indexOf(Et);if(gt===-1){for(let Xt=0;Xt<x.length;Xt++)if(Xt>=S.length){S.push(Et),gt=Xt;break}else if(S[Xt]===null){S[Xt]=Et,gt=Xt;break}if(gt===-1)break}const qt=x[gt];qt&&qt.connect(Et)}}const j=new C,Q=new C;function k(nt,ht,Et){j.setFromMatrixPosition(ht.matrixWorld),Q.setFromMatrixPosition(Et.matrixWorld);const gt=j.distanceTo(Q),qt=ht.projectionMatrix.elements,Xt=Et.projectionMatrix.elements,$t=qt[14]/(qt[10]-1),O=qt[14]/(qt[10]+1),A=(qt[9]+1)/qt[5],D=(qt[9]-1)/qt[5],G=(qt[8]-1)/qt[0],Y=(Xt[8]+1)/Xt[0],tt=$t*G,K=$t*Y,st=gt/(-G+Y),ct=st*-G;ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ct),nt.translateZ(st),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert();const b=$t+st,v=O+st,F=tt-ct,H=K+(gt-ct),W=A*O/v*b,J=D*O/v*b;nt.projectionMatrix.makePerspective(F,H,W,J,b,v),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}function xt(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;_.texture!==null&&(nt.near=_.depthNear,nt.far=_.depthFar),M.near=I.near=R.near=nt.near,M.far=I.far=R.far=nt.far,(P!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,U=M.far,R.near=P,R.far=U,I.near=P,I.far=U,R.updateProjectionMatrix(),I.updateProjectionMatrix(),nt.updateProjectionMatrix());const ht=nt.parent,Et=M.cameras;xt(M,ht);for(let gt=0;gt<Et.length;gt++)xt(Et[gt],ht);Et.length===2?k(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),at(nt,M,ht)};function at(nt,ht,Et){Et===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Et.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=gc*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _t=null;function At(nt,ht){if(u=ht.getViewerPose(c||o),g=ht,u!==null){const Et=u.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let gt=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,gt=!0);for(let Xt=0;Xt<Et.length;Xt++){const $t=Et[Xt];let O=null;if(d!==null)O=d.getViewport($t);else{const D=h.getViewSubImage(f,$t);O=D.viewport,Xt===0&&(t.setRenderTargetTextures(E,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(E))}let A=y[Xt];A===void 0&&(A=new xn,A.layers.enable(Xt),A.viewport=new He,y[Xt]=A),A.matrix.fromArray($t.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray($t.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(O.x,O.y,O.width,O.height),Xt===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),gt===!0&&M.cameras.push(A)}const qt=s.enabledFeatures;if(qt&&qt.includes("depth-sensing")){const Xt=h.getDepthInformation(Et[0]);Xt&&Xt.isValid&&Xt.texture&&_.init(t,Xt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const gt=S[Et],qt=x[Et];gt!==null&&qt!==void 0&&qt.update(gt,ht,c||o)}_t&&_t(nt,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}const Zt=new Lp;Zt.setAnimationLoop(At),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const rs=new Un,nE=new Jt;function iE(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),x=E.envMap,S=E.envMapRotation;x&&(m.envMap.value=x,rs.copy(S),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(nE.makeRotationFromEuler(rs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sE(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function c(E,x){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const L=x.program;i.updateUBOMapping(E,L);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function u(E){const x=h();E.__bindingPointIndex=x;const S=n.createBuffer(),L=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=s[E.id],S=E.uniforms,L=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,R=S.length;T<R;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,M=I.length;y<M;y++){const P=I[y];if(d(P,T,y,L)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let et=0;et<z.length;et++){const j=z[et],Q=_(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,U+Z,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,Z),Z+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,x,S,L){const T=E.value,R=x+"_"+S;if(L[R]===void 0)return typeof T=="number"||typeof T=="boolean"?L[R]=T:L[R]=T.clone(),!0;{const I=L[R];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[R]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(E){const x=E.uniforms;let S=0;const L=16;for(let R=0,I=x.length;R<I;R++){const y=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,P=y.length;M<P;M++){const U=y[M],z=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,et=z.length;Z<et;Z++){const j=z[Z],Q=_(j),k=S%L;k!==0&&L-k<Q.boundary&&(S+=L-k),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Q.storage}}}const T=S%L;return T>0&&(S+=L-T),E.__size=S,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class rE{constructor(t={}){const{canvas:e=J0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=zi,this.toneMappingExposure=1;const x=this;let S=!1,L=0,T=0,R=null,I=-1,y=null;const M=new He,P=new He;let U=null;const z=new Ft(0);let Z=0,et=e.width,j=e.height,Q=1,k=null,xt=null;const at=new He(0,0,et,j),_t=new He(0,0,et,j);let At=!1;const Zt=new Wc;let nt=!1,ht=!1;const Et=new Jt,gt=new C,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function $t(){return R===null?Q:1}let O=i;function A(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zc}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",rt,!1),O===null){const B="webgl2";if(O=A(B,w),O===null)throw A(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let D,G,Y,tt,K,st,ct,b,v,F,H,W,J,ft,ut,lt,Rt,ot,bt,Bt,Ut,Mt,It,Ht;function Me(){D=new dy(O),D.init(),Mt=new $S(O,D),G=new ay(O,D,t,Mt),Y=new YS(O),tt=new gy(O),K=new DS,st=new jS(O,D,Y,K,G,Mt,tt),ct=new cy(x),b=new fy(x),v=new Ev(O),It=new ry(O,v),F=new py(O,v,tt,It),H=new vy(O,F,v,tt),bt=new _y(O,G,st),lt=new ly(K),W=new IS(x,ct,b,D,G,It,lt),J=new iE(x,K),ft=new NS,ut=new VS(D),ot=new sy(x,ct,b,Y,H,f,l),Rt=new qS(x,H,G),Ht=new sE(O,tt,G,Y),Bt=new oy(O,D,tt),Ut=new my(O,D,tt),tt.programs=W.programs,x.capabilities=G,x.extensions=D,x.properties=K,x.renderLists=ft,x.shadowMap=Rt,x.state=Y,x.info=tt}Me();const N=new eE(x,O);this.xr=N,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=D.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=D.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(et,j,!1))},this.getSize=function(w){return w.set(et,j)},this.setSize=function(w,B,X=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,j=B,e.width=Math.floor(w*Q),e.height=Math.floor(B*Q),X===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(et*Q,j*Q).floor()},this.setDrawingBufferSize=function(w,B,X){et=w,j=B,Q=X,e.width=Math.floor(w*X),e.height=Math.floor(B*X),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,B,X,$){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,B,X,$),Y.viewport(M.copy(at).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(_t)},this.setScissor=function(w,B,X,$){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,B,X,$),Y.scissor(P.copy(_t).multiplyScalar(Q).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(w){Y.setScissorTest(At=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){xt=w},this.getClearColor=function(w){return w.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(w=!0,B=!0,X=!0){let $=0;if(w){let V=!1;if(R!==null){const dt=R.texture.format;V=dt===xp||dt===vp||dt===_p}if(V){const dt=R.texture.type,St=dt===ki||dt===lr||dt===ra||dt===cr||dt===pp||dt===mp,Tt=ot.getClearColor(),Pt=ot.getClearAlpha(),zt=Tt.r,Vt=Tt.g,Ot=Tt.b;St?(d[0]=zt,d[1]=Vt,d[2]=Ot,d[3]=Pt,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=zt,g[1]=Vt,g[2]=Ot,g[3]=Pt,O.clearBufferiv(O.COLOR,0,g))}else $|=O.COLOR_BUFFER_BIT}B&&($|=O.DEPTH_BUFFER_BIT),X&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ft.dispose(),ut.dispose(),K.dispose(),ct.dispose(),b.dispose(),H.dispose(),It.dispose(),Ht.dispose(),W.dispose(),N.dispose(),N.removeEventListener("sessionstart",Nn),N.removeEventListener("sessionend",On),ji.stop()};function yt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=tt.autoReset,B=Rt.enabled,X=Rt.autoUpdate,$=Rt.needsUpdate,V=Rt.type;Me(),tt.autoReset=w,Rt.enabled=B,Rt.autoUpdate=X,Rt.needsUpdate=$,Rt.type=V}function rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function mt(w){const B=w.target;B.removeEventListener("dispose",mt),Gt(B)}function Gt(w){ee(w),K.remove(w)}function ee(w){const B=K.get(w).programs;B!==void 0&&(B.forEach(function(X){W.releaseProgram(X)}),w.isShaderMaterial&&W.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,X,$,V,dt){B===null&&(B=qt);const St=V.isMesh&&V.matrixWorld.determinant()<0,Tt=Zp(w,B,X,$,V);Y.setMaterial($,St);let Pt=X.index,zt=1;if($.wireframe===!0){if(Pt=F.getWireframeAttribute(X),Pt===void 0)return;zt=2}const Vt=X.drawRange,Ot=X.attributes.position;let ie=Vt.start*zt,be=(Vt.start+Vt.count)*zt;dt!==null&&(ie=Math.max(ie,dt.start*zt),be=Math.min(be,(dt.start+dt.count)*zt)),Pt!==null?(ie=Math.max(ie,0),be=Math.min(be,Pt.count)):Ot!=null&&(ie=Math.max(ie,0),be=Math.min(be,Ot.count));const we=be-ie;if(we<0||we===1/0)return;It.setup(V,$,Tt,X,Pt);let cn,ae=Bt;if(Pt!==null&&(cn=v.get(Pt),ae=Ut,ae.setIndex(cn)),V.isMesh)$.wireframe===!0?(Y.setLineWidth($.wireframeLinewidth*$t()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(V.isLine){let Dt=$.linewidth;Dt===void 0&&(Dt=1),Y.setLineWidth(Dt*$t()),V.isLineSegments?ae.setMode(O.LINES):V.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else V.isPoints?ae.setMode(O.POINTS):V.isSprite&&ae.setMode(O.TRIANGLES);if(V.isBatchedMesh)V._multiDrawInstances!==null?ae.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances):ae.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ae.renderInstances(ie,we,V.count);else if(X.isInstancedBufferGeometry){const Dt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,je=Math.min(X.instanceCount,Dt);ae.renderInstances(ie,we,je)}else ae.render(ie,we)};function Ae(w,B,X){w.transparent===!0&&w.side===on&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,oo(w,B,X),w.side=Gi,w.needsUpdate=!0,oo(w,B,X),w.side=on):oo(w,B,X)}this.compile=function(w,B,X=null){X===null&&(X=w),m=ut.get(X),m.init(B),E.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const $=new Set;return w.traverse(function(V){const dt=V.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Tt=dt[St];Ae(Tt,X,V),$.add(Tt)}else Ae(dt,X,V),$.add(dt)}),E.pop(),m=null,$},this.compileAsync=function(w,B,X=null){const $=this.compile(w,B,X);return new Promise(V=>{function dt(){if($.forEach(function(St){K.get(St).currentProgram.isReady()&&$.delete(St)}),$.size===0){V(w);return}setTimeout(dt,10)}D.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Fe=null;function ue(w){Fe&&Fe(w)}function Nn(){ji.stop()}function On(){ji.start()}const ji=new Lp;ji.setAnimationLoop(ue),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(w){Fe=w,N.setAnimationLoop(w),w===null?ji.stop():ji.start()},N.addEventListener("sessionstart",Nn),N.addEventListener("sessionend",On),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(B),B=N.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,B,R),m=ut.get(w,E.length),m.init(B),E.push(m),Et.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Zt.setFromProjectionMatrix(Et),ht=this.localClippingEnabled,nt=lt.init(this.clippingPlanes,ht),_=ft.get(w,p.length),_.init(),p.push(_),N.enabled===!0&&N.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&Fa(dt,B,-1/0,x.sortObjects)}Fa(w,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,xt),Xt=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,Xt&&ot.addToRenderList(_,w),this.info.render.frame++,nt===!0&&lt.beginShadows();const X=m.state.shadowsArray;Rt.render(X,w,B),nt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,V=_.transmissive;if(m.setupLights(),B.isArrayCamera){const dt=B.cameras;if(V.length>0)for(let St=0,Tt=dt.length;St<Tt;St++){const Pt=dt[St];tu($,V,w,Pt)}Xt&&ot.render(w);for(let St=0,Tt=dt.length;St<Tt;St++){const Pt=dt[St];Qc(_,w,Pt,Pt.viewport)}}else V.length>0&&tu($,V,w,B),Xt&&ot.render(w),Qc(_,w,B);R!==null&&(st.updateMultisampleRenderTarget(R),st.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,B),It.resetDefaultState(),I=-1,y=null,E.pop(),E.length>0?(m=E[E.length-1],nt===!0&&lt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Fa(w,B,X,$){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Zt.intersectsSprite(w)){$&&gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const St=H.update(w),Tt=w.material;Tt.visible&&_.push(w,St,Tt,X,gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Zt.intersectsObject(w))){const St=H.update(w),Tt=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),gt.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),gt.copy(St.boundingSphere.center)),gt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(Tt)){const Pt=St.groups;for(let zt=0,Vt=Pt.length;zt<Vt;zt++){const Ot=Pt[zt],ie=Tt[Ot.materialIndex];ie&&ie.visible&&_.push(w,St,ie,X,gt.z,Ot)}}else Tt.visible&&_.push(w,St,Tt,X,gt.z,null)}}const dt=w.children;for(let St=0,Tt=dt.length;St<Tt;St++)Fa(dt[St],B,X,$)}function Qc(w,B,X,$){const V=w.opaque,dt=w.transmissive,St=w.transparent;m.setupLightsView(X),nt===!0&&lt.setGlobalState(x.clippingPlanes,X),$&&Y.viewport(M.copy($)),V.length>0&&ro(V,B,X),dt.length>0&&ro(dt,B,X),St.length>0&&ro(St,B,X),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function tu(w,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new vs(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?Ia:ki,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const dt=m.state.transmissionRenderTarget[$.id],St=$.viewport||M;dt.setSize(St.z,St.w);const Tt=x.getRenderTarget();x.setRenderTarget(dt),x.getClearColor(z),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),Xt?ot.render(X):x.clear();const Pt=x.toneMapping;x.toneMapping=zi;const zt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),nt===!0&&lt.setGlobalState(x.clippingPlanes,$),ro(w,X,$),st.updateMultisampleRenderTarget(dt),st.updateRenderTargetMipmap(dt),D.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ot=0,ie=B.length;Ot<ie;Ot++){const be=B[Ot],we=be.object,cn=be.geometry,ae=be.material,Dt=be.group;if(ae.side===on&&we.layers.test($.layers)){const je=ae.side;ae.side=en,ae.needsUpdate=!0,eu(we,X,$,cn,ae,Dt),ae.side=je,ae.needsUpdate=!0,Vt=!0}}Vt===!0&&(st.updateMultisampleRenderTarget(dt),st.updateRenderTargetMipmap(dt))}x.setRenderTarget(Tt),x.setClearColor(z,Z),zt!==void 0&&($.viewport=zt),x.toneMapping=Pt}function ro(w,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let V=0,dt=w.length;V<dt;V++){const St=w[V],Tt=St.object,Pt=St.geometry,zt=$===null?St.material:$,Vt=St.group;Tt.layers.test(X.layers)&&eu(Tt,B,X,Pt,zt,Vt)}}function eu(w,B,X,$,V,dt){w.onBeforeRender(x,B,X,$,V,dt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(x,B,X,$,w,dt),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=en,V.needsUpdate=!0,x.renderBufferDirect(X,B,$,V,w,dt),V.side=Gi,V.needsUpdate=!0,x.renderBufferDirect(X,B,$,V,w,dt),V.side=on):x.renderBufferDirect(X,B,$,V,w,dt),w.onAfterRender(x,B,X,$,V,dt)}function oo(w,B,X){B.isScene!==!0&&(B=qt);const $=K.get(w),V=m.state.lights,dt=m.state.shadowsArray,St=V.state.version,Tt=W.getParameters(w,V.state,dt,B,X),Pt=W.getProgramCacheKey(Tt);let zt=$.programs;$.environment=w.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(w.isMeshStandardMaterial?b:ct).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",mt),zt=new Map,$.programs=zt);let Vt=zt.get(Pt);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===St)return iu(w,Tt),Vt}else Tt.uniforms=W.getUniforms(w),w.onBuild(X,Tt,x),w.onBeforeCompile(Tt,x),Vt=W.acquireProgram(Tt,Pt),zt.set(Pt,Vt),$.uniforms=Tt.uniforms;const Ot=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=lt.uniform),iu(w,Tt),$.needsLights=tm(w),$.lightsStateVersion=St,$.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.directionalShadowMap.value=V.state.directionalShadowMap,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotShadowMap.value=V.state.spotShadowMap,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMap.value=V.state.pointShadowMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function nu(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=Yo.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function iu(w,B){const X=K.get(w);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Zp(w,B,X,$,V){B.isScene!==!0&&(B=qt),st.resetTextureUnits();const dt=B.fog,St=$.isMeshStandardMaterial?B.environment:null,Tt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qi,Pt=($.isMeshStandardMaterial?b:ct).get($.envMap||St),zt=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ot=!!X.morphAttributes.position,ie=!!X.morphAttributes.normal,be=!!X.morphAttributes.color;let we=zi;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(we=x.toneMapping);const cn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=cn!==void 0?cn.length:0,Dt=K.get($),je=m.state.lights;if(nt===!0&&(ht===!0||w!==y)){const mn=w===y&&$.id===I;lt.setState($,w,mn)}let he=!1;$.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==je.state.version||Dt.outputColorSpace!==Tt||V.isBatchedMesh&&Dt.batching===!1||!V.isBatchedMesh&&Dt.batching===!0||V.isBatchedMesh&&Dt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Dt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Dt.instancing===!1||!V.isInstancedMesh&&Dt.instancing===!0||V.isSkinnedMesh&&Dt.skinning===!1||!V.isSkinnedMesh&&Dt.skinning===!0||V.isInstancedMesh&&Dt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Dt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Dt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Dt.instancingMorph===!1&&V.morphTexture!==null||Dt.envMap!==Pt||$.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==lt.numPlanes||Dt.numIntersection!==lt.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Vt||Dt.morphTargets!==Ot||Dt.morphNormals!==ie||Dt.morphColors!==be||Dt.toneMapping!==we||Dt.morphTargetsCount!==ae)&&(he=!0):(he=!0,Dt.__version=$.version);let $n=Dt.currentProgram;he===!0&&($n=oo($,B,V));let ao=!1,$i=!1,Ba=!1;const Be=$n.getUniforms(),yi=Dt.uniforms;if(Y.useProgram($n.program)&&(ao=!0,$i=!0,Ba=!0),$.id!==I&&(I=$.id,$i=!0),ao||y!==w){Be.setValue(O,"projectionMatrix",w.projectionMatrix),Be.setValue(O,"viewMatrix",w.matrixWorldInverse);const mn=Be.map.cameraPosition;mn!==void 0&&mn.setValue(O,gt.setFromMatrixPosition(w.matrixWorld)),G.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Be.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,$i=!0,Ba=!0)}if(V.isSkinnedMesh){Be.setOptional(O,V,"bindMatrix"),Be.setOptional(O,V,"bindMatrixInverse");const mn=V.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Be.setValue(O,"boneTexture",mn.boneTexture,st))}V.isBatchedMesh&&(Be.setOptional(O,V,"batchingTexture"),Be.setValue(O,"batchingTexture",V._matricesTexture,st),Be.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",V._colorsTexture,st));const za=X.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0)&&bt.update(V,X,$n),($i||Dt.receiveShadow!==V.receiveShadow)&&(Dt.receiveShadow=V.receiveShadow,Be.setValue(O,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yi.envMap.value=Pt,yi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(yi.envMapIntensity.value=B.environmentIntensity),$i&&(Be.setValue(O,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&Qp(yi,Ba),dt&&$.fog===!0&&J.refreshFogUniforms(yi,dt),J.refreshMaterialUniforms(yi,$,Q,j,m.state.transmissionRenderTarget[w.id]),Yo.upload(O,nu(Dt),yi,st)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Yo.upload(O,nu(Dt),yi,st),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Be.setValue(O,"center",V.center),Be.setValue(O,"modelViewMatrix",V.modelViewMatrix),Be.setValue(O,"normalMatrix",V.normalMatrix),Be.setValue(O,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const mn=$.uniformsGroups;for(let Ha=0,em=mn.length;Ha<em;Ha++){const su=mn[Ha];Ht.update(su,$n),Ht.bind(su,$n)}}return $n}function Qp(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function tm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,B,X){K.get(w.texture).__webglTexture=B,K.get(w.depthTexture).__webglTexture=X;const $=K.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,B){const X=K.get(w);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,X=0){R=w,L=B,T=X;let $=!0,V=null,dt=!1,St=!1;if(w){const Pt=K.get(w);Pt.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(O.FRAMEBUFFER,null),$=!1):Pt.__webglFramebuffer===void 0?st.setupRenderTarget(w):Pt.__hasExternalTextures&&st.rebindTextures(w,K.get(w.texture).__webglTexture,K.get(w.depthTexture).__webglTexture);const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(St=!0);const Vt=K.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?V=Vt[B][X]:V=Vt[B],dt=!0):w.samples>0&&st.useMultisampledRTT(w)===!1?V=K.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[X]:V=Vt,M.copy(w.viewport),P.copy(w.scissor),U=w.scissorTest}else M.copy(at).multiplyScalar(Q).floor(),P.copy(_t).multiplyScalar(Q).floor(),U=At;if(Y.bindFramebuffer(O.FRAMEBUFFER,V)&&$&&Y.drawBuffers(w,V),Y.viewport(M),Y.scissor(P),Y.setScissorTest(U),dt){const Pt=K.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,X)}else if(St){const Pt=K.get(w.texture),zt=B||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,X||0,zt)}I=-1},this.readRenderTargetPixels=function(w,B,X,$,V,dt,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){Y.bindFramebuffer(O.FRAMEBUFFER,Tt);try{const Pt=w.texture,zt=Pt.format,Vt=Pt.type;if(!G.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-$&&X>=0&&X<=w.height-V&&O.readPixels(B,X,$,V,Mt.convert(zt),Mt.convert(Vt),dt)}finally{const Pt=R!==null?K.get(R).__webglFramebuffer:null;Y.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,B,X,$,V,dt,St){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=K.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){Y.bindFramebuffer(O.FRAMEBUFFER,Tt);try{const Pt=w.texture,zt=Pt.format,Vt=Pt.type;if(!G.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=w.width-$&&X>=0&&X<=w.height-V){const Ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ot),O.bufferData(O.PIXEL_PACK_BUFFER,dt.byteLength,O.STREAM_READ),O.readPixels(B,X,$,V,Mt.convert(zt),Mt.convert(Vt),0),O.flush();const ie=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await Z0(O,ie,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,dt)}finally{O.deleteBuffer(Ot),O.deleteSync(ie)}return dt}}finally{const Pt=R!==null?K.get(R).__webglFramebuffer:null;Y.bindFramebuffer(O.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(w,B=null,X=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-X),V=Math.floor(w.image.width*$),dt=Math.floor(w.image.height*$),St=B!==null?B.x:0,Tt=B!==null?B.y:0;st.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,St,Tt,V,dt),Y.unbindTexture()},this.copyTextureToTexture=function(w,B,X=null,$=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],B=arguments[2],V=arguments[3]||0,X=null);let dt,St,Tt,Pt,zt,Vt;X!==null?(dt=X.max.x-X.min.x,St=X.max.y-X.min.y,Tt=X.min.x,Pt=X.min.y):(dt=w.image.width,St=w.image.height,Tt=0,Pt=0),$!==null?(zt=$.x,Vt=$.y):(zt=0,Vt=0);const Ot=Mt.convert(B.format),ie=Mt.convert(B.type);st.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const be=O.getParameter(O.UNPACK_ROW_LENGTH),we=O.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=O.getParameter(O.UNPACK_SKIP_PIXELS),ae=O.getParameter(O.UNPACK_SKIP_ROWS),Dt=O.getParameter(O.UNPACK_SKIP_IMAGES),je=w.isCompressedTexture?w.mipmaps[V]:w.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,je.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,je.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pt),w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,zt,Vt,dt,St,Ot,ie,je.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,zt,Vt,je.width,je.height,Ot,je.data):O.texSubImage2D(O.TEXTURE_2D,V,zt,Vt,Ot,ie,je),O.pixelStorei(O.UNPACK_ROW_LENGTH,be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we),O.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ae),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Dt),V===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(w,B,X=null,$=null,V=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,w=arguments[2],B=arguments[3],V=arguments[4]||0);let dt,St,Tt,Pt,zt,Vt,Ot,ie,be;const we=w.isCompressedTexture?w.mipmaps[V]:w.image;X!==null?(dt=X.max.x-X.min.x,St=X.max.y-X.min.y,Tt=X.max.z-X.min.z,Pt=X.min.x,zt=X.min.y,Vt=X.min.z):(dt=we.width,St=we.height,Tt=we.depth,Pt=0,zt=0,Vt=0),$!==null?(Ot=$.x,ie=$.y,be=$.z):(Ot=0,ie=0,be=0);const cn=Mt.convert(B.format),ae=Mt.convert(B.type);let Dt;if(B.isData3DTexture)st.setTexture3D(B,0),Dt=O.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)st.setTexture2DArray(B,0),Dt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);const je=O.getParameter(O.UNPACK_ROW_LENGTH),he=O.getParameter(O.UNPACK_IMAGE_HEIGHT),$n=O.getParameter(O.UNPACK_SKIP_PIXELS),ao=O.getParameter(O.UNPACK_SKIP_ROWS),$i=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,we.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,we.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pt),O.pixelStorei(O.UNPACK_SKIP_ROWS,zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt),w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Dt,V,Ot,ie,be,dt,St,Tt,cn,ae,we.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Dt,V,Ot,ie,be,dt,St,Tt,cn,we.data):O.texSubImage3D(Dt,V,Ot,ie,be,dt,St,Tt,cn,ae,we),O.pixelStorei(O.UNPACK_ROW_LENGTH,je),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$n),O.pixelStorei(O.UNPACK_SKIP_ROWS,ao),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$i),V===0&&B.generateMipmaps&&O.generateMipmap(Dt),Y.unbindTexture()},this.initRenderTarget=function(w){K.get(w).__webglFramebuffer===void 0&&st.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?st.setTextureCube(w,0):w.isData3DTexture?st.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?st.setTexture2DArray(w,0):st.setTexture2D(w,0),Y.unbindTexture()},this.resetState=function(){L=0,T=0,R=null,Y.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Vc?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Da?"display-p3":"srgb"}}class oE extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class aE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Gc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new C;class ha{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=de(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),i=de(i,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ha(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oa extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const Er=new C,Vs=new C,Gs=new C,ks=new wt,br=new wt,zp=new Jt,Uo=new C,wr=new C,No=new C,hf=new wt,Dl=new wt,ff=new wt;class qc extends De{constructor(t=new Oa){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new aE(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new ha(i,3,0,!1)),Hs.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),zp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Gs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Oo(Uo.set(-.5,-.5,0),Gs,o,Vs,s,r),Oo(wr.set(.5,-.5,0),Gs,o,Vs,s,r),Oo(No.set(.5,.5,0),Gs,o,Vs,s,r),hf.set(0,0),Dl.set(1,0),ff.set(1,1);let a=t.ray.intersectTriangle(Uo,wr,No,!1,Er);if(a===null&&(Oo(wr.set(-.5,.5,0),Gs,o,Vs,s,r),Dl.set(0,1),a=t.ray.intersectTriangle(Uo,No,wr,!1,Er),a===null))return;const l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:Cn.getInterpolation(Er,Uo,wr,No,hf,Dl,ff,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oo(n,t,e,i,s,r){ks.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(br.x=r*ks.x-s*ks.y,br.y=s*ks.x+r*ks.y):br.copy(ks),n.copy(t),n.x+=br.x,n.y+=br.y,n.applyMatrix4(zp)}class lE extends qe{constructor(t=null,e=1,i=1,s,r,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class df extends pn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ws=new Jt,pf=new Jt,Fo=[],mf=new xs,cE=new Jt,Tr=new Ct,Ar=new Ms;class ln extends Ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new df(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ws),mf.copy(t.boundingBox).applyMatrix4(Ws),this.boundingBox.union(mf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ws),Ar.copy(t.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),t.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),pf.multiplyMatrices(i,Ws),Tr.matrixWorld=pf,Tr.raycast(t,Fo);for(let o=0,a=Fo.length;o<a;o++){const l=Fo[o];l.instanceId=r,l.object=this,e.push(l)}Fo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new df(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lE(new Float32Array(s*this.count),s,this.count,gp,hi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Hp extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new C,da=new C,gf=new Jt,Rr=new kc,Bo=new Ms,Ul=new C,_f=new C;class uE extends De{constructor(t=new Ve,e=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)fa.fromBufferAttribute(e,s-1),da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=fa.distanceTo(da);t.setAttribute("lineDistance",new ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;gf.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),E=u.getX(_+1),x=zo(this,t,Rr,l,p,E);x&&e.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=zo(this,t,Rr,l,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=zo(this,t,Rr,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=zo(this,t,Rr,l,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),da.fromBufferAttribute(o,r),e.distanceSqToSegment(fa,da,Ul,_f)>i)return;Ul.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ul);if(!(l<t.near||l>t.far))return{distance:l,point:_f.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}class Vp extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vf=new Jt,vc=new kc,Ho=new Ms,Vo=new C;class hE extends De{constructor(t=new Ve,e=new Vp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;vf.copy(s).invert(),vc.copy(t.ray).applyMatrix4(vf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Vo.fromBufferAttribute(h,m),xf(Vo,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Vo.fromBufferAttribute(h,g),xf(Vo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xf(n,t,e,i,s,r,o){const a=vc.distanceSqToPoint(n);if(a<e){const l=new C;vc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Yc extends qe{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new wt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,s=[],r=[],o=[],a=new C,l=new Jt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Xe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gp extends Mi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fE extends Gp{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jc(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Go=new C,Nl=new jc,Ol=new jc,Fl=new jc;class kp extends Mi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),c=Go);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Nl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),Ol.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Fl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ol.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Fl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Nl.calc(l),Ol.calc(l),Fl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mf(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function dE(n,t){const e=1-n;return e*e*t}function pE(n,t){return 2*(1-n)*n*t}function mE(n,t){return n*n*t}function Wr(n,t,e,i){return dE(n,t)+pE(n,e)+mE(n,i)}function gE(n,t){const e=1-n;return e*e*e*t}function _E(n,t){const e=1-n;return 3*e*e*n*t}function vE(n,t){return 3*(1-n)*n*n*t}function xE(n,t){return n*n*n*t}function Xr(n,t,e,i,s){return gE(n,t)+_E(n,e)+vE(n,i)+xE(n,s)}class ME extends Mi{constructor(t=new wt,e=new wt,i=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new wt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yE extends Mi{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Xr(t,s.x,r.x,o.x,a.x),Xr(t,s.y,r.y,o.y,a.y),Xr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class SE extends Mi{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class EE extends Mi{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bE extends Mi{constructor(t=new wt,e=new wt,i=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new wt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wp extends Mi{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Wr(t,s.x,r.x,o.x),Wr(t,s.y,r.y,o.y),Wr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wE extends Mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Mf(a,l.x,c.x,u.x,h.x),Mf(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new wt().fromArray(s))}return this}}var TE=Object.freeze({__proto__:null,ArcCurve:fE,CatmullRomCurve3:kp,CubicBezierCurve:ME,CubicBezierCurve3:yE,EllipseCurve:Gp,LineCurve:SE,LineCurve3:EE,QuadraticBezierCurve:bE,QuadraticBezierCurve3:Wp,SplineCurve:wE});class Ye extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;E(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(d,2));function E(){const S=new C,L=new C;let T=0;const R=(e-t)/i;for(let I=0;I<=r;I++){const y=[],M=I/r,P=M*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,Z=z*l+a,et=Math.sin(Z),j=Math.cos(Z);L.x=P*et,L.y=-M*i+m,L.z=P*j,h.push(L.x,L.y,L.z),S.set(et,R,j).normalize(),f.push(S.x,S.y,S.z),d.push(z,1-M),y.push(g++)}_.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){const M=_[y][I],P=_[y+1][I],U=_[y+1][I+1],z=_[y][I+1];u.push(M,P,z),u.push(P,U,z),T+=6}c.addGroup(p,T,0),p+=T}function x(S){const L=g,T=new wt,R=new C;let I=0;const y=S===!0?t:e,M=S===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const Z=U/s*l+a,et=Math.cos(Z),j=Math.sin(Z);R.x=y*j,R.y=m*M,R.z=y*et,h.push(R.x,R.y,R.z),f.push(0,M,0),T.x=et*.5+.5,T.y=j*.5*M+.5,d.push(T.x,T.y),g++}for(let U=0;U<s;U++){const z=L+U,Z=P+U;S===!0?u.push(Z,Z+1,z):u.push(Z+1,Z,z),I+=3}c.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yi extends Ye{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Yi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $c extends Ve{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new C,S=new C,L=new C;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],S),d(e[T+2],L),l(x,S,L,E)}function l(E,x,S,L){const T=L+1,R=[];for(let I=0;I<=T;I++){R[I]=[];const y=E.clone().lerp(S,I/T),M=x.clone().lerp(S,I/T),P=T-I;for(let U=0;U<=P;U++)U===0&&I===T?R[I][U]=y:R[I][U]=y.clone().lerp(M,U/P)}for(let I=0;I<T;I++)for(let y=0;y<2*(T-I)-1;y++){const M=Math.floor(y/2);y%2===0?(f(R[I][M+1]),f(R[I+1][M]),f(R[I][M])):(f(R[I][M+1]),f(R[I+1][M+1]),f(R[I+1][M]))}}function c(E){const x=new C;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(E),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function u(){const E=new C;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const S=m(E)/2/Math.PI+.5,L=p(E)/Math.PI+.5;o.push(S,1-L)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const x=o[E+0],S=o[E+2],L=o[E+4],T=Math.max(x,S,L),R=Math.min(x,S,L);T>.9&&R<.1&&(x<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),L<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,x){const S=E*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function g(){const E=new C,x=new C,S=new C,L=new C,T=new wt,R=new wt,I=new wt;for(let y=0,M=0;y<r.length;y+=9,M+=6){E.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),S.set(r[y+6],r[y+7],r[y+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),L.copy(E).add(x).add(S).divideScalar(3);const P=m(L);_(T,M+0,E,P),_(R,M+2,x,P),_(I,M+4,S,P)}}function _(E,x,S,L){L<0&&E.x===1&&(o[x]=E.x-1),S.x===0&&S.z===0&&(o[x]=L/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.vertices,t.indices,t.radius,t.details)}}class Kc extends $c{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kc(t.radius,t.detail)}}class mr extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,d=new C,g=new wt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const E=p+m,x=E,S=E+i+1,L=E+i+2,T=E+1;a.push(x,S,T),a.push(S,L,T)}}this.setIndex(a),this.setAttribute("position",new ve(l,3)),this.setAttribute("normal",new ve(c,3)),this.setAttribute("uv",new ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yn extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],x=p/i;let S=0;p===0&&o===0?S=.5/e:p===i&&l===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+S,1-x),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){const x=u[p][E+1],S=u[p][E],L=u[p+1][E],T=u[p+1][E+1];(p!==0||o>0)&&d.push(x,S,T),(p!==i-1||l<Math.PI)&&d.push(S,L,T)}this.setIndex(d),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(_,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jc extends Ve{constructor(t=new Wp(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new wt;let u=new C;const h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ve(h,3)),this.setAttribute("normal",new ve(f,3)),this.setAttribute("uv",new ve(d,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),E(),p()}function m(x){u=t.getPointAt(x/e,u);const S=o.normals[x],L=o.binormals[x];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,I=Math.sin(R),y=-Math.cos(R);l.x=y*S.x+I*L.x,l.y=y*S.y+I*L.y,l.z=y*S.z+I*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let S=1;S<=s;S++){const L=(s+1)*(x-1)+(S-1),T=(s+1)*x+(S-1),R=(s+1)*x+S,I=(s+1)*(x-1)+S;g.push(L,T,I),g.push(T,R,I)}}function E(){for(let x=0;x<=e;x++)for(let S=0;S<=s;S++)c.x=x/e,c.y=S/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Jc(new TE[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class AE extends xi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ft(16777215),this.specular=new Ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pe extends xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xp extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Bl=new Jt,yf=new C,Sf=new C;class RE{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(yf),Sf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sf),e.updateMatrixWorld(),Bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class CE extends RE{constructor(){super(new Ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class PE extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new CE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class LE extends Xp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class IE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ef();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ef(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zc);const Se=50,bf=[{minY:-1,maxY:-.7,color:new Ft(1731466),name:"ocean"},{minY:-.7,maxY:-.4,color:new Ft(13936707),name:"sand"},{minY:-.4,maxY:.1,color:new Ft(4881471),name:"grass"},{minY:.1,maxY:.5,color:new Ft(4025141),name:"forest"},{minY:.5,maxY:.75,color:new Ft(8022869),name:"mountain"},{minY:.75,maxY:1,color:new Ft(15263976),name:"snow"}];function DE(n){for(const t of bf)if(n>=t.minY&&n<=t.maxY)return t.color.clone();return bf[2].color.clone()}function UE(n,t){const e=(1+Math.sqrt(5))/2,i=[-1,e,0,1,e,0,-1,-e,0,1,-e,0,0,-1,e,0,1,e,0,-1,-e,0,1,-e,e,0,-1,e,0,1,-e,0,-1,-e,0,1];let s=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],r=[];for(let d=0;d<i.length;d+=3)r.push(new C(i[d],i[d+1],i[d+2]).normalize());const o=new Map;function a(d,g){const _=d<g?`${d}_${g}`:`${g}_${d}`;if(o.has(_))return o.get(_);const m=r[d].clone().add(r[g]).normalize();r.push(m);const p=r.length-1;return o.set(_,p),p}for(let d=0;d<n;d++){const g=[];for(const[_,m,p]of s){const E=a(_,m),x=a(m,p),S=a(p,_);g.push([_,E,S],[m,x,E],[p,S,x],[E,x,S])}s=g}const l=[],c=[],u=[];function h(d,g,_){const m=Math.sin(d*127.1+g*311.7+_*74.7)*43758.5453;return(m-Math.floor(m))*2-1}for(const[d,g,_]of s){const m=r[d],p=r[g],E=r[_],x=m.clone().add(p).add(E).divideScalar(3).normalize();h(x.x,x.y,x.z)*.03;const S=m.clone().multiplyScalar(t*(1+h(m.x,m.y,m.z)*.025)),L=p.clone().multiplyScalar(t*(1+h(p.x,p.y,p.z)*.025)),T=E.clone().multiplyScalar(t*(1+h(E.x,E.y,E.z)*.025));l.push(S.x,S.y,S.z,L.x,L.y,L.z,T.x,T.y,T.z);const R=L.clone().sub(S),I=T.clone().sub(S),y=R.cross(I).normalize();for(let et=0;et<3;et++)u.push(y.x,y.y,y.z);const M=DE(x.y),P=.05,U=Math.max(0,Math.min(1,M.r+(Math.random()-.5)*P)),z=Math.max(0,Math.min(1,M.g+(Math.random()-.5)*P)),Z=Math.max(0,Math.min(1,M.b+(Math.random()-.5)*P));for(let et=0;et<3;et++)c.push(U,z,Z)}const f=new Ve;return f.setAttribute("position",new ve(l,3)),f.setAttribute("normal",new ve(u,3)),f.setAttribute("color",new ve(c,3)),f}function NE(){const n=UE(4,Se),t=new pe({vertexColors:!0}),e=new Ct(n,t);return e.receiveShadow=!0,e.castShadow=!1,e}function OE(n){return n.clone().normalize()}const FE=8,BE=16,zE=12,HE=25;class VE{constructor(){q(this,"mesh");q(this,"isMoving",!1);q(this,"isSprinting",!1);q(this,"angularOffset",0);q(this,"isGrounded",!0);q(this,"jumpVelocity",0);q(this,"legPhase",0);this.mesh=this.buildCharacter(),this.mesh.position.set(Se+1,0,0)}buildCharacter(){const t=new le,e=new Ct(new re(.6,.9,.4),new pe({color:15228164}));e.position.y=.45,e.castShadow=!0;const i=new Ct(new re(.5,.5,.5),new pe({color:13010498}));i.position.y=1.15,i.castShadow=!0;const s=new re(.25,.5,.3),r=new pe({color:16777215}),o=new Ct(s,r);o.position.set(-.175,-.25,0),o.castShadow=!0;const a=o.clone();a.position.set(.175,-.25,0);const l=new Ct(new re(.4,.5,.15),new pe({color:2976335}));return l.position.set(0,.5,-.275),t.add(e,i,o,a,l),t}update(t,e,i=1){const s=this.mesh.position,r=OE(s);s.length()-Se<=1.05?(this.isGrounded=!0,this.jumpVelocity=Math.max(0,this.jumpVelocity)):this.isGrounded=!1,this.isGrounded&&e.jump&&(this.jumpVelocity=zE,this.isGrounded=!1),this.isGrounded?this.jumpVelocity=0:this.jumpVelocity-=HE*t;const l=(e.sprint?BE:FE)*i;let c=!1;e.left&&(this.angularOffset+=2*t),e.right&&(this.angularOffset-=2*t);const u=new C(0,1,0);let h=new C().crossVectors(r,u).normalize();h.lengthSq()<.001&&h.set(1,0,0);const f=new C().crossVectors(h,r).normalize(),d=new jn().setFromAxisAngle(r,this.angularOffset),g=f.clone().applyQuaternion(d);h.clone().applyQuaternion(d);const _=new C;e.forward&&(_.add(g),c=!0),e.backward&&(_.sub(g),c=!0),c&&(_.normalize().multiplyScalar(l*t),s.add(_)),s.addScaledVector(r,this.jumpVelocity*t),s.length()<Se+1&&(s.normalize().multiplyScalar(Se+1),this.jumpVelocity<0&&(this.jumpVelocity=0)),this.alignToSurface(r,g),this.isMoving=c,this.isSprinting=c&&e.sprint,this.animateLegs(t,c)}alignToSurface(t,e){const i=new Jt().makeBasis(new C().crossVectors(e,t).normalize(),t,e.clone().negate());this.mesh.quaternion.setFromRotationMatrix(i)}animateLegs(t,e){if(!e){this.legPhase=0;return}this.legPhase+=t*8;const i=Math.sin(this.legPhase)*.3,s=[this.mesh.children[2],this.mesh.children[3]];s[0]&&(s[0].rotation.x=i),s[1]&&(s[1].rotation.x=-i)}get position(){return this.mesh.position}get quaternion(){return this.mesh.quaternion}}const GE=10,kE=4,WE=6;class XE{constructor(){q(this,"camera");q(this,"targetPos",new C);q(this,"currentPos",new C);this.camera=new xn(60,window.innerWidth/window.innerHeight,.1,2e3),this.camera.position.set(70,0,0)}update(t,e){const i=e.position,s=i.clone().normalize(),o=new C(0,0,-1).applyQuaternion(e.quaternion).clone().negate().multiplyScalar(GE),a=s.clone().multiplyScalar(kE);this.targetPos.copy(i).add(o).add(a),this.currentPos.lerp(this.targetPos,Math.min(1,WE*t)),this.camera.position.copy(this.currentPos);const l=i.clone().addScaledVector(s,1);this.camera.lookAt(l);const c=this.camera.position.clone().normalize();this.camera.up.copy(c)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}}class qE{constructor(){q(this,"state",eo({forward:!1,backward:!1,left:!1,right:!1,jump:!1,sprint:!1}));q(this,"_interactLatch",!1);q(this,"touchStart",null);q(this,"touchDelta",{x:0,y:0});q(this,"keyMap",{KeyW:"forward",ArrowUp:"forward",KeyS:"backward",ArrowDown:"backward",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ShiftLeft:"sprint",ShiftRight:"sprint"});q(this,"onKeyDown",t=>{const e=this.keyMap[t.code];e&&(this.state[e]=!0),t.code==="Space"&&t.preventDefault(),t.code==="KeyE"&&(this._interactLatch=!0)});q(this,"onKeyUp",t=>{const e=this.keyMap[t.code];e&&(this.state[e]=!1)});q(this,"onTouchStart",t=>{const e=t.touches[0];e.clientX<window.innerWidth/2?this.touchStart={x:e.clientX,y:e.clientY}:this.state.jump=!0});q(this,"onTouchMove",t=>{if(!this.touchStart)return;const e=t.touches[0];this.touchDelta.x=(e.clientX-this.touchStart.x)/40,this.touchDelta.y=(e.clientY-this.touchStart.y)/40,this.state.forward=this.touchDelta.y<-.3,this.state.backward=this.touchDelta.y>.3,this.state.left=this.touchDelta.x<-.3,this.state.right=this.touchDelta.x>.3});q(this,"onTouchEnd",()=>{this.touchStart=null,this.state.forward=!1,this.state.backward=!1,this.state.left=!1,this.state.right=!1,this.state.jump=!1});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("touchstart",this.onTouchStart,{passive:!0}),window.addEventListener("touchmove",this.onTouchMove,{passive:!0}),window.addEventListener("touchend",this.onTouchEnd,{passive:!0})}consumeInteract(){return this._interactLatch?(this._interactLatch=!1,!0):!1}destroy(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)}}const YE=600;class jE{constructor(t){q(this,"sunLight");q(this,"ambientLight");q(this,"skyColor",new Ft);q(this,"_timeOfDay",.35);q(this,"_daytimeRatio",1);this.sunLight=new PE(16774368,2.5),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.camera.near=1,this.sunLight.shadow.camera.far=300,this.sunLight.shadow.camera.left=-80,this.sunLight.shadow.camera.right=80,this.sunLight.shadow.camera.top=80,this.sunLight.shadow.camera.bottom=-80,this.ambientLight=new LE(16777215,.5),t.add(this.sunLight,this.ambientLight)}update(t,e){this._timeOfDay=(this._timeOfDay+t/YE)%1;const i=this._timeOfDay,s=(i-.5)*Math.PI*2,r=120;this.sunLight.position.set(Math.cos(s)*r,50,Math.sin(s)*r);const o=Math.max(0,Math.cos(s));this._daytimeRatio=o,this.sunLight.intensity=o*2.8,this.ambientLight.intensity=.5+o*.3;const a=i>.18&&i<.38,l=i>.62&&i<.82;if(o<.03&&!a&&!l)this.skyColor.setHex(329748);else if(a){const c=(i-.18)/.2;this.skyColor.setHex(16739871),this.skyColor.lerp(new Ft(8900331),c)}else if(l){const c=(i-.62)/.19999999999999996;this.skyColor.setHex(8900331),this.skyColor.lerp(new Ft(16739871),c)}else this.skyColor.setHex(8900331);e.setClearColor(this.skyColor)}get daytimeRatio(){return this._daytimeRatio}get currentHour(){return Math.floor(this._timeOfDay*24)}}function $E(n){KE(n,120),JE(n,60)}function qp(n,t,e=0){const i=t.clone().normalize(),s=i.clone().multiplyScalar(Se+e);n.position.copy(s);const r=new C(0,1,0),o=new C().crossVectors(i,r).normalize();o.lengthSq()<.001&&o.set(1,0,0);const a=new Jt().makeBasis(o,i,new C().crossVectors(o,i).normalize());n.quaternion.setFromRotationMatrix(a)}function Yp(){const n=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1);return new C(Math.sin(t)*Math.cos(n),Math.cos(t),Math.sin(t)*Math.sin(n))}function KE(n,t){const e=new Ye(.15,.25,1.5,6),i=new Yi(.8,2,6),s=new pe({color:7027983}),r=new pe({color:2980397});for(let o=0;o<t;o++){const a=Yp();if(Math.abs(a.y)>.7)continue;const l=new le,c=new Ct(e,s);c.position.y=.75,c.castShadow=!0;const u=new Ct(i,r);u.position.y=2.2,u.castShadow=!0,l.add(c,u),qp(l,a),n.add(l)}}function JE(n,t){const e=new pe({color:8947848});for(let i=0;i<t;i++){const s=Yp(),r=.3+Math.random()*.7,o=new Kc(r,0),a=new Ct(o,e);a.castShadow=!0,qp(a,s,r*.3),n.add(a)}}const xc=[{type:"RAILWAY_STATION",name:"Central Station",emoji:"🚆",color:1920649,buildingHeight:5,description:"Main rail terminus"},{type:"RAILWAY_STATION",name:"North Station",emoji:"🚆",color:1920649,buildingHeight:5,description:"North rail hub"},{type:"BUS_STAND",name:"City Bus Terminus",emoji:"🚌",color:16219904,buildingHeight:3,description:"Main bus stand"},{type:"BUS_STAND",name:"Old Bus Adda",emoji:"🚌",color:16219904,buildingHeight:3,description:"Historic bus stand"},{type:"TEMPLE",name:"Ganesh Mandir",emoji:"🛕",color:16765286,buildingHeight:6,description:"Shri Ganesh temple"},{type:"TEMPLE",name:"Shiva Mandir",emoji:"🛕",color:16765286,buildingHeight:6,description:"Lord Shiva temple"},{type:"HOSPITAL",name:"City Hospital",emoji:"🏥",color:15087942,buildingHeight:5,description:"District hospital"},{type:"HOSPITAL",name:"Community Health Ctr",emoji:"🏥",color:15087942,buildingHeight:4,description:"PHC clinic"},{type:"IT_PARK",name:"TechHub IT Park",emoji:"💻",color:448160,buildingHeight:7,description:"Software campus"},{type:"IT_PARK",name:"Silicon Campus",emoji:"💻",color:448160,buildingHeight:7,description:"Tech incubator"},{type:"COLLEGE",name:"Engineering College",emoji:"🎓",color:8072587,buildingHeight:4,description:"Engineering institute"},{type:"COLLEGE",name:"Arts & Science College",emoji:"🎓",color:8072587,buildingHeight:4,description:"Degree college"},{type:"MARKET",name:"Sadar Bazaar",emoji:"🛒",color:15681391,buildingHeight:3,description:"Main market"},{type:"MARKET",name:"Gandhi Market",emoji:"🛒",color:15681391,buildingHeight:3,description:"Vegetable market"},{type:"PETROL_PUMP",name:"HP Petrol Pump",emoji:"⛽",color:4770532,buildingHeight:3,description:"HP fuel station"},{type:"PETROL_PUMP",name:"IOCL Fuel Station",emoji:"⛽",color:4770532,buildingHeight:3,description:"IOCL outlet"},{type:"MALL",name:"City Mall",emoji:"🏬",color:16196997,buildingHeight:5,description:"Main shopping mall"},{type:"MALL",name:"D-Mart",emoji:"🏬",color:16196997,buildingHeight:4,description:"Hypermarket"},{type:"RESIDENTIAL",name:"Green Valley Colony",emoji:"🏘️",color:16483584,buildingHeight:3,description:"Gated housing"},{type:"RESIDENTIAL",name:"Sunrise Residency",emoji:"🏘️",color:16483584,buildingHeight:3,description:"Township"}];function ZE(n){const t=Math.PI*(3-Math.sqrt(5)),e=[];for(let i=0;i<n;i++){const s=1-i/(n-1)*2,r=Math.sqrt(Math.max(0,1-s*s)),o=t*i;e.push(new C(Math.cos(o)*r,s,Math.sin(o)*r))}return e}function zl(n,t){return Math.acos(Math.max(-1,Math.min(1,n.dot(t))))}function QE(n){const t=n.length,e=new Set,i=Array.from({length:t},()=>[]),s=(a,l)=>{const c=`${Math.min(a,l)}_${Math.max(a,l)}`;e.has(c)||(e.add(c),i[a].push(l),i[l].push(a))};for(let a=0;a<t;a++){const l=Array.from({length:t},(c,u)=>u).filter(c=>c!==a).sort((c,u)=>zl(n[a],n[c])-zl(n[a],n[u]));s(a,l[0]),s(a,l[1])}const r=new Uint8Array(t),o=a=>{const l=[a];for(r[a]=1;l.length;){const c=l.shift();for(const u of i[c])r[u]||(r[u]=1,l.push(u))}};o(0);for(let a=1;a<t;a++)if(!r[a]){let l=0,c=1/0;for(let u=0;u<t;u++)if(r[u]){const h=zl(n[a],n[u]);h<c&&(c=h,l=u)}s(a,l),o(a)}return Array.from(e).map(a=>{const[l,c]=a.split("_").map(Number);return{from:l,to:c}})}const wf="bharat_runner_world_v2";function tb(){const n=ZE(xc.length),t=xc.map((i,s)=>{const r=n[s],o=r.clone().multiplyScalar(Se);return{id:s,type:i.type,name:i.name,emoji:i.emoji,color:i.color,dir:{x:r.x,y:r.y,z:r.z},position:{x:o.x,y:o.y,z:o.z}}}),e=QE(n);return{version:"1.0",generatedAt:new Date().toISOString(),pois:t,roads:e}}function jp(){const n=localStorage.getItem(wf);if(n)try{return JSON.parse(n)}catch{}const t=tb();return localStorage.setItem(wf,JSON.stringify(t,null,2)),t}function eb(n){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download="bharat_runner_world.json",i.click(),URL.revokeObjectURL(e)}function nb(n){return new C(n.dir.x,n.dir.y,n.dir.z)}const $p={};for(const n of xc)$p[n.type]=n;function Qr(n,t,e=0){const i=t.clone().normalize();n.position.copy(i.clone().multiplyScalar(Se+e));const s=new C(0,1,0);let r=new C().crossVectors(i,s);r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize();const o=new C().crossVectors(r,i).normalize(),a=new Jt().makeBasis(r,i,o.negate());n.quaternion.setFromRotationMatrix(a)}function ib(n){return`rgb(${n>>16&255},${n>>8&255},${n&255})`}function sb(n){const i=document.createElement("canvas");i.width=320,i.height=72;const s=i.getContext("2d"),r=72/2;s.fillStyle="rgba(0,0,0,0.78)",s.beginPath(),s.moveTo(r,0),s.lineTo(320-r,0),s.arcTo(320,0,320,72,r),s.lineTo(320,72-r),s.arcTo(320,72,0,72,r),s.lineTo(r,72),s.arcTo(0,72,0,0,r),s.lineTo(0,r),s.arcTo(0,0,320,0,r),s.closePath(),s.fill(),s.fillStyle=ib(n.color),s.fillRect(0,0,8,72),s.font="36px serif",s.textBaseline="middle",s.fillText(n.emoji,18,72/2),s.font='bold 22px "Segoe UI", sans-serif',s.fillStyle="#ffffff",s.fillText(n.name,66,72/2-5),s.font='15px "Segoe UI", sans-serif',s.fillStyle="rgba(255,255,255,0.5)",s.fillText(n.type.replace(/_/g," ").toLowerCase(),67,72/2+17);const o=new Yc(i),a=new Oa({map:o,transparent:!0,depthTest:!1}),l=new qc(a);return l.scale.set(10,2.25,1),l.renderOrder=999,l}function fe(n){return new pe({color:n})}const Kt={white:fe(16777215),grey:fe(9279918),red:fe(15087942),navy:fe(1920649),yellow:fe(16765286),green:fe(2999891)};function kt(n,t,e,i,s=t/2){const r=new Ct(new re(n,t,e),i);return r.position.y=s,r.castShadow=!0,r}function nn(n,t,e,i,s,r=e/2){const o=new Ct(new Ye(n,t,e,i),s);return o.position.y=r,o.castShadow=!0,o}function Hl(n,t,e,i,s=t/2){const r=new Ct(new Yi(n,t,e),i);return r.position.y=s,r.castShadow=!0,r}const rb={RAILWAY_STATION(){const n=new le;n.add(kt(7,4,3,Kt.navy)),n.add(kt(10,.4,4,Kt.grey,.2));const t=nn(.5,.7,4,8,Kt.grey);t.position.set(3.5,0,0),n.add(t);const e=nn(.5,0,.8,8,Kt.white);return e.position.set(3.5,4.4,0),n.add(e),n.add(kt(1.2,5,1.2,fe(3835647),2.5)),n},BUS_STAND(){const n=new le;n.add(kt(6,.3,3,fe(16219904),3.3));for(const t of[-2.2,2.2]){const e=nn(.15,.15,3.3,6,Kt.grey);e.position.x=t,n.add(e)}for(const t of[-1.5,0,1.5]){const e=kt(1.2,.2,.5,Kt.white,.8);e.position.set(t,0,.8),n.add(e)}return n.add(kt(6,2.5,.2,Kt.yellow,1.25)),n},TEMPLE(){const n=new le,t=fe(16765286);n.add(kt(4,2,4,t),kt(3,1.5,3,t,2.75),kt(2,1.5,2,t,4.5)),n.add(nn(.5,.5,.8,8,fe(16753920),6));const e=new Ct(new Yn(.4,8,8),fe(16753920));e.position.y=6.8,n.add(e);const i=nn(.06,.06,3,6,Kt.grey);i.position.x=2.5,n.add(i);const s=kt(.9,.5,.05,Kt.red,2.75);return s.position.x=2.95,n.add(s),n},HOSPITAL(){const n=new le;return n.add(kt(5,5,3,Kt.white),kt(3,5,5,Kt.white)),n.add(kt(1.8,.5,.5,Kt.red,5.3),kt(.5,1.8,.5,Kt.red,5.3)),n},IT_PARK(){const n=new le,t=fe(448160);n.add(kt(3,7,3,t),kt(4,.2,4,Kt.grey,0));const e=new Ct(new Yn(.6,8,4,0,Math.PI),t);e.rotation.z=Math.PI/2,e.position.set(1.5,7.7,0),n.add(e),n.add(nn(.05,.05,1.5,4,Kt.grey,7.75));const i=kt(2,4,2,fe(297576));return i.position.x=3,n.add(i),n},COLLEGE(){const n=new le;n.add(kt(7,4,3,fe(8072587)));for(const t of[-2.5,-1,.5,2]){const e=nn(.15,.2,4,6,Kt.white);e.position.set(t,0,1.7),n.add(e)}return n.add(kt(2.5,.3,.4,Kt.white,4.15),Hl(4,1,4,Kt.white,4.5)),n},RESIDENTIAL(){const n=new le,t=[[-1.5,-1],[1.5,-1],[-1.5,1.2],[1.5,1.2]],e=[16483584,16758531,15681391,16483584];return t.forEach(([i,s],r)=>{const o=kt(2,2,2,fe(e[r]));o.position.set(i,0,s),n.add(o);const a=Hl(1.6,1,4,fe(9116186),2.5);a.position.set(i,0,s),a.rotation.y=Math.PI/4,n.add(a)}),n.add(kt(4.5,.15,.4,Kt.grey,.08)),n},MARKET(){const n=new le,t=[15681391,16765286,448160,16219904,3835647,11066076];return[[-2,0],[-2,1.8],[0,0],[0,1.8],[2,0],[2,1.8]].forEach(([i,s],r)=>{const o=fe(t[r]),a=kt(1.5,2,1.5,o);a.position.set(i,0,s);const l=new Ct(new re(1.8,.15,.8),o);l.position.set(i,2.08,s-.5),n.add(a,l)}),n},GOVT_OFFICE(){const n=new le;n.add(kt(7,5,4,fe(147082)));for(const e of[-3,-1.5,0,1.5,3]){const i=nn(.2,.25,5,8,Kt.white);i.position.set(e,0,2.2),n.add(i)}const t=new Ct(new Yn(1.2,16,8,0,Math.PI*2,0,Math.PI/2),Kt.white);return t.position.y=5,n.add(t),n.add(nn(.06,.06,2,4,Kt.grey,6.2),kt(.8,.4,.05,Kt.red,7.4)),n},PETROL_PUMP(){const n=new le;for(const[t,e]of[[-2.5,-2],[2.5,-2],[-2.5,2],[2.5,2]]){const i=nn(.12,.12,3,6,Kt.grey);i.position.set(t,0,e),n.add(i)}n.add(kt(6.5,.25,5.5,fe(4770532),3.1));for(const t of[-1,1]){const e=kt(.8,1.5,.6,fe(16219904));e.position.x=t,n.add(e)}return n.add(kt(4,.5,.1,Kt.yellow,3.5)),n},CHAI_STALL(){const n=new le;n.add(kt(2,1.8,1.5,fe(10671913)),kt(2,.15,.4,Kt.white,1.2)),n.add(nn(.06,.06,2,4,Kt.grey,1.9));const t=new Ct(new Yi(1.4,.6,8,1,!0),Kt.yellow);t.position.y=2.9,n.add(t);const e=nn(.25,.3,.4,8,fe(11184810));return e.position.set(.5,1.35,0),n.add(e),n},PHARMACY(){const n=new le;return n.add(kt(2.5,2.5,2,Kt.green),kt(1,.3,.1,Kt.white,1.5),kt(.3,1,.1,Kt.white,1.5)),n.add(kt(3,.2,2.5,Kt.white,2.6)),n},MALL(){const n=new le;n.add(kt(7,4,6,fe(16196997)));const t=new Ct(new Ye(2,2.2,1.5,16),fe(10081768));return t.position.y=4.75,n.add(t),n.add(kt(3,.2,1.5,Kt.yellow,2.6),kt(5,.7,.1,fe(16711790),3.8)),n},POLICE_STATION(){const n=new le,t=fe(3835647);n.add(kt(5,4,3.5,t));const e=kt(1.2,5,1.2,t);e.position.x=2.5,n.add(e);const i=Hl(1,.8,4,fe(1920649),5.4);return i.position.x=2.5,n.add(i),n.add(kt(3,2,.2,Kt.grey,1),nn(.06,.06,2.5,4,Kt.grey,4.25),kt(.8,.4,.05,Kt.red,5.65)),n},WAREHOUSE(){const n=new le;n.add(kt(9,3,6,fe(9279918)),kt(9,.3,6.2,Kt.grey,3.15));for(const t of[-3,0,3]){const e=kt(2,2,.2,Kt.grey,1);e.position.set(t,0,3.1),n.add(e)}return n.add(nn(.2,.2,1.5,6,Kt.grey,3.75)),n}};class ob{constructor(t){q(this,"objects",[]);this.scene=t}buildAll(t){for(const e of t.pois)this.buildOne(e)}buildOne(t){const e=nb(t),i=$p[t.type],s=rb[t.type],r=s?s():new le;Qr(r,e),this.scene.add(r);const o=((i==null?void 0:i.buildingHeight)??3)+3.5,a=sb(t);a.position.copy(e.clone().multiplyScalar(Se+o)),this.scene.add(a);const l=new Ct(new mr(1.8,2.5,16),new pi({color:t.color,side:on,depthWrite:!1,transparent:!0,opacity:.85}));l.renderOrder=1,Qr(l,e,.12),this.scene.add(l),this.objects.push({poi:t,group:r,label:a,position:new C(t.position.x,t.position.y,t.position.z)})}nearestPOI(t,e=8){let i=null,s=e;for(const r of this.objects){const o=t.distanceTo(r.position);o<s&&(s=o,i=r.poi)}return i}getObjects(){return this.objects}}const ab=.28,lb=.22,Tf=28,cb=6;function ub(n,t,e){const i=[],s=Math.max(-1,Math.min(1,n.dot(t))),r=Math.acos(s);for(let o=0;o<=e;o++){const a=o/e;let l;if(Math.abs(r)<1e-6)l=n.clone();else{const c=Math.sin((1-a)*r)/Math.sin(r),u=Math.sin(a*r)/Math.sin(r);l=n.clone().multiplyScalar(c).addScaledVector(t,u)}i.push(l.normalize().multiplyScalar(Se+ab))}return i}const hb=new pe({color:4013373}),fb=new Hp({color:16777113,transparent:!0,opacity:.25});class db{constructor(t){q(this,"roadMeshes",[]);q(this,"lineMeshes",[]);this.scene=t}buildAll(t){const e=new Map(t.pois.map(i=>[i.id,i]));for(const i of t.roads){const s=e.get(i.from),r=e.get(i.to);!s||!r||this.buildRoad(i,s,r)}}buildRoad(t,e,i){const s=new C(e.dir.x,e.dir.y,e.dir.z),r=new C(i.dir.x,i.dir.y,i.dir.z),o=ub(s,r,Tf),a=new kp(o),l=new Jc(a,Tf,lb,cb,!1),c=new Ct(l,hb);c.receiveShadow=!0,this.scene.add(c),this.roadMeshes.push(c);const u=new Ve().setFromPoints(o),h=new uE(u,fb);h.renderOrder=2,this.scene.add(h),this.lineMeshes.push(h)}dispose(){for(const t of this.roadMeshes)t.geometry.dispose(),this.scene.remove(t);for(const t of this.lineMeshes)t.geometry.dispose(),this.scene.remove(t);this.roadMeshes=[],this.lineMeshes=[]}}const Vl=120,Ci=72,Js=180,ii=Js/2,si=Js/2;function pb(n){return`#${n.toString(16).padStart(6,"0")}`}class mb{constructor(t){q(this,"pois",[]);q(this,"roads",[]);q(this,"_poiWorldDirs",[]);q(this,"worldData",null);q(this,"_dstPOIId",null);q(this,"_dstColor","#ffffff");q(this,"_pulseT",0);this.canvas=t,t.width=Js,t.height=Js}setDestination(t,e="#ffffff"){this._dstPOIId=t,this._dstColor=e}loadWorld(t){this.worldData=t,this._poiWorldDirs=t.pois.map(e=>new C(e.position.x,e.position.y,e.position.z))}draw(t,e,i=.016){this._pulseT+=i*3;const s=this.canvas.getContext("2d");if(!s||!this.worldData)return;s.clearRect(0,0,Js,Js);const r=t.clone().normalize(),o=new C(0,1,0);let a=new C().crossVectors(r,o);a.lengthSq()<1e-6&&a.set(1,0,0),a.normalize();const l=new C().crossVectors(a,r).normalize(),c=m=>{const p=m.clone().sub(t),E=p.dot(a)/Vl*Ci,x=-p.dot(l)/Vl*Ci,S=Math.sqrt(E*E+x*x);if(S<=Ci)return{cx:ii+E,cy:si+x,inside:!0};const T=Ci/S;return{cx:ii+E*T,cy:si+x*T,inside:!1}};s.save(),s.beginPath(),s.arc(ii,si,Ci,0,Math.PI*2),s.fillStyle="rgba(10,14,26,0.82)",s.fill(),s.strokeStyle="rgba(255,255,255,0.18)",s.lineWidth=2,s.stroke(),s.restore(),s.save(),s.beginPath(),s.arc(ii,si,Ci-1,0,Math.PI*2),s.clip(),s.strokeStyle="rgba(255,255,255,0.07)",s.lineWidth=1;for(const m of[.33,.66])s.beginPath(),s.arc(ii,si,Ci*m,0,Math.PI*2),s.stroke();if(this.worldData.roads.length>0){const m=new Map(this.worldData.pois.map(p=>[p.id,p]));s.strokeStyle="rgba(150,120,80,0.45)",s.lineWidth=2;for(const p of this.worldData.roads){const E=m.get(p.from),x=m.get(p.to);if(!E||!x)continue;const S=c(this._poiWorldDirs[p.from]),L=c(this._poiWorldDirs[p.to]);s.beginPath(),s.moveTo(S.cx,S.cy),s.lineTo(L.cx,L.cy),s.stroke()}}for(let m=0;m<this.worldData.pois.length;m++){const p=this.worldData.pois[m],{cx:E,cy:x,inside:S}=c(this._poiWorldDirs[m]),L=pb(p.color);if(S)s.beginPath(),s.arc(E,x,5,0,Math.PI*2),s.fillStyle=L,s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.stroke(),t.distanceTo(this._poiWorldDirs[m])<30&&(s.font="11px serif",s.fillText(p.emoji,E+7,x+4));else{s.save(),s.translate(E,x);const T=Math.atan2(x-si,E-ii);s.rotate(T+Math.PI/2),s.beginPath(),s.moveTo(0,-5),s.lineTo(4,3),s.lineTo(-4,3),s.closePath(),s.fillStyle=L,s.globalAlpha=.7,s.fill(),s.restore()}}s.restore();const u=new C(0,0,-1).applyQuaternion(e),h=u.dot(a),f=-u.dot(l),d=Math.atan2(h,f);if(s.save(),s.translate(ii,si),s.rotate(d),s.beginPath(),s.arc(0,0,8,0,Math.PI*2),s.fillStyle="rgba(255,255,255,0.25)",s.fill(),s.beginPath(),s.moveTo(0,-8),s.lineTo(5,5),s.lineTo(0,2),s.lineTo(-5,5),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.strokeStyle="#000000",s.lineWidth=1,s.stroke(),s.restore(),this._dstPOIId!==null&&this.worldData&&this._dstPOIId<this._poiWorldDirs.length){const m=this._poiWorldDirs[this._dstPOIId],p=c(m);s.save(),s.beginPath(),s.moveTo(ii,si),s.lineTo(p.cx,p.cy),s.strokeStyle=this._dstColor,s.lineWidth=2,s.globalAlpha=.75,s.setLineDash([6,5]),s.stroke(),s.setLineDash([]),s.restore();const E=.5+.5*Math.sin(this._pulseT),x=6+E*3;s.save(),s.translate(p.cx,p.cy),s.rotate(Math.PI/4),s.beginPath(),s.rect(-x/2,-x/2,x,x),s.fillStyle=this._dstColor,s.globalAlpha=.5+.4*E,s.fill(),s.strokeStyle="#ffffff",s.lineWidth=1.5,s.globalAlpha=1,s.stroke(),s.restore();const L=(t.distanceTo(m)*.12).toFixed(1);s.save(),s.font="bold 9px sans-serif",s.fillStyle=this._dstColor,s.globalAlpha=.9,s.fillText(`${L}km`,p.cx+9,p.cy-4),s.restore()}s.beginPath(),s.arc(ii,si,Ci,0,Math.PI*2),s.strokeStyle="rgba(255,200,100,0.5)",s.lineWidth=2,s.stroke();const g=new C(0,1,0),_=c(t.clone().add(g.multiplyScalar(Vl*.8)));s.font="bold 10px sans-serif",s.fillStyle="rgba(255,255,255,0.5)",s.fillText("N",_.cx-4,_.cy+4)}get element(){return this.canvas}}const gb=50,Af=2.5,_b=4.5,vb=4,Rf=3,xb=10,Cf=[15087942,16219904,16765286,448160,1149618,8072587,15681391,3835647,16739125,16483584,2999891,16196997,8599788,4770532,10671913];function Gl(n){return new pe({color:n})}function Mb(){const n=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1);return new C(Math.sin(t)*Math.cos(n),Math.cos(t),Math.sin(t)*Math.sin(n))}class yb{constructor(t,e,i){q(this,"group");q(this,"surfPos");q(this,"speed");q(this,"targetPOI");q(this,"state","walking");q(this,"waitTimer",0);q(this,"legPhase",0);q(this,"legL");q(this,"legR");this.speed=Af+Math.random()*(_b-Af),this.surfPos=Mb().multiplyScalar(Se+1),this.targetPOI=e[Math.floor(Math.random()*e.length)];const{group:s,legL:r,legR:o}=this.buildMesh(i);this.group=s,this.legL=r,this.legR=o,this.group.position.copy(this.surfPos),t.add(this.group)}update(t,e){if(this.state==="waiting"){this.waitTimer-=t,this.waitTimer<=0&&(this.state="walking",this.pickTarget(e));return}const i=new C(this.targetPOI.position.x,this.targetPOI.position.y,this.targetPOI.position.z);if(this.surfPos.distanceTo(i)<vb){this.state="waiting",this.waitTimer=Rf+Math.random()*(xb-Rf),this.legL.rotation.x=0,this.legR.rotation.x=0;return}const s=this.surfPos.clone().normalize(),r=i.clone().sub(this.surfPos);r.sub(s.clone().multiplyScalar(r.dot(s)));const o=r.length();if(o<1e-6){this.pickTarget(e);return}const a=r.divideScalar(o);this.surfPos.addScaledVector(a,this.speed*t),this.surfPos.normalize().multiplyScalar(Se+1),this.group.position.copy(this.surfPos),this.alignToSurface(s,a),this.animateLegs(t)}remove(t){t.remove(this.group)}pickTarget(t){let e=this.targetPOI;for(let i=0;i<10&&e===this.targetPOI;i++)e=t[Math.floor(Math.random()*t.length)];this.targetPOI=e}alignToSurface(t,e){const i=new C().crossVectors(e,t);if(i.lengthSq()<1e-6)return;i.normalize();const s=new Jt().makeBasis(i,t,e.clone().negate());this.group.quaternion.setFromRotationMatrix(s)}animateLegs(t){this.legPhase+=t*8;const e=Math.sin(this.legPhase)*.3;this.legL.rotation.x=e,this.legR.rotation.x=-e}buildMesh(t){const e=new le,i=Gl(t),s=Gl(13010498),r=Gl(1118498),o=new Ct(new re(.5,.8,.35),i);o.position.y=.4,o.castShadow=!0;const a=new Ct(new re(.42,.42,.42),s);a.position.y=1.01,a.castShadow=!0;const l=new re(.2,.45,.25),c=new Ct(l,r);c.position.set(-.15,-.22,0),c.castShadow=!0;const u=new Ct(l,r);return u.position.set(.15,-.22,0),u.castShadow=!0,e.add(o,a,c,u),{group:e,legL:c,legR:u}}}class Sb{constructor(t,e){q(this,"npcs",[]);for(let i=0;i<gb;i++){const s=Cf[i%Cf.length];this.npcs.push(new yb(t,e,s))}}update(t,e){for(const i of this.npcs)i.update(t,e)}dispose(t){for(const e of this.npcs)e.remove(t);this.npcs=[]}}const Pf=16770406,Eb=8026764,Cr=3.5;class bb{constructor(t,e){q(this,"headMats",[]);for(const i of e.pois){const s=new C(i.dir.x,i.dir.y,i.dir.z);this.headMats.push(this.buildPost(t,this.sideDir(s,5))),this.headMats.push(this.buildPost(t,this.sideDir(s,-5)))}}update(t){const e=Math.max(0,Math.min(1,1-t*4));for(const i of this.headMats)i.emissiveIntensity=e}buildPost(t,e){const i=new le;Qr(i,e);const s=new pe({color:Eb}),r=new Ct(new Ye(.07,.09,Cr,6),s);r.position.y=Cr/2,r.castShadow=!0,i.add(r);const o=new Ct(new Ye(.04,.04,1.1,4),s);o.rotation.z=Math.PI/2,o.position.set(.55,Cr,0),i.add(o);const a=new Ct(new Ye(.28,.18,.25,8),s);a.position.set(1.1,Cr+.3,0),i.add(a);const l=new pe({color:Pf,emissive:new Ft(Pf),emissiveIntensity:0}),c=new Ct(new Yn(.22,8,6),l);return c.position.set(1.1,Cr,0),i.add(c),t.add(i),l}sideDir(t,e){const i=t.clone().normalize(),s=new C(0,1,0);let r=new C().crossVectors(i,s);return r.lengthSq()<1e-6&&r.set(1,0,0),r.normalize(),i.clone().multiplyScalar(Se).addScaledVector(r,e).normalize()}}const wb=15,Tb=10,Ab=5,Rb=[5,9],Cb=[11,17],Pb=[7,11],Lf=new Ye(.24,.24,.07,8),If=new Ye(.2,.2,.09,8),kl=new Ye(.22,.22,.13,8),Wl=new Yn(.055,4,4),Df=new Yn(.075,4,4),os=new pe({color:1118481}),Uf=new pe({color:13010498}),Nf=new pe({color:1710638}),Lb=new pe({color:2236962}),Ib=new pe({color:11184810}),Of=new pe({color:16105728}),Xl=new pe({color:1118481}),Db=new pe({color:8956620,transparent:!0,opacity:.45}),js=new pi({color:0}),Ff=[3355477,5583667,3364147,5592405].map(n=>new pe({color:n})),Bf=[12065820,12423,8947848,16106818,2236962,20701,2258722,10035729,13395456,4456618].map(n=>new pe({color:n}));function pa(n,t,e){const i=n.clone().normalize(),s=t.clone().normalize(),r=Math.max(-1,Math.min(1,i.dot(s))),o=Math.acos(r);if(o<1e-6)return s.multiplyScalar(Se);const a=Math.sin(o);return i.multiplyScalar(Math.sin((1-e)*o)/a).addScaledVector(s,Math.sin(e*o)/a).multiplyScalar(Se)}function Ub(n,t,e){const s=pa(n,t,Math.max(0,e-.002)),r=pa(n,t,Math.min(1,e+.002));return r.sub(s),r.lengthSq()>1e-12?r.normalize():new C(0,0,-1)}function Nb(n,t,e){const i=new C().crossVectors(e,t);i.lengthSq()<1e-12||(i.normalize(),n.quaternion.setFromRotationMatrix(new Jt().makeBasis(i,t,e.clone().negate())))}function Ce(n,t,e,i){return new Ct(new re(n,t,e),i)}function as(n,t,e,i,s){const r=new le;r.position.set(e,i,s);const o=new Ct(n,t);return o.rotation.z=Math.PI/2,r.add(o),r}class Ob{constructor(t,e,i,s,r,o,a){q(this,"group",new le);q(this,"fromIdx");q(this,"toIdx");q(this,"prevIdx");q(this,"progress");q(this,"speed");q(this,"adj");q(this,"fromPos",new C);q(this,"toPos",new C);q(this,"wheels",[]);q(this,"spinAngle");q(this,"_up",new C);this.speed=r,this.adj=i,this.spinAngle=Math.random()*Math.PI*2;const l=o[a%o.length];this.fromIdx=l.from,this.toIdx=l.to,this.prevIdx=l.from,this.progress=a/Math.max(1,o.length)%1;const c=e[this.fromIdx].position,u=e[this.toIdx].position;this.fromPos.set(c.x,c.y,c.z),this.toPos.set(u.x,u.y,u.z),s==="bicycle"?this.buildBicycle():s==="scooter"?this.buildScooter():this.buildAuto(),this.group.position.copy(pa(this.fromPos,this.toPos,this.progress)),t.add(this.group)}update(t,e){const i=this.fromPos.clone().normalize(),s=this.toPos.clone().normalize(),r=Math.acos(Math.max(-1,Math.min(1,i.dot(s)))),o=Math.max(.5,r*Se);if(this.progress+=this.speed/o*t,this.progress>=1){this.progress=0,this.prevIdx=this.fromIdx,this.fromIdx=this.toIdx;const u=this.adj[this.fromIdx];if(u&&u.length>0){const d=u.filter(_=>_!==this.prevIdx),g=d.length>0?d:u;this.toIdx=g[Math.floor(Math.random()*g.length)]}const h=e[this.fromIdx].position,f=e[this.toIdx].position;this.fromPos.set(h.x,h.y,h.z),this.toPos.set(f.x,f.y,f.z)}const a=Math.min(1,this.progress),l=pa(this.fromPos,this.toPos,a),c=Ub(this.fromPos,this.toPos,a);this._up.copy(l).normalize(),this.group.position.copy(l),Nb(this.group,this._up,c),this.spinAngle=(this.spinAngle+this.speed*t*2.8)%(Math.PI*2);for(const u of this.wheels)u.rotation.x=this.spinAngle}remove(t){t.remove(this.group)}buildBicycle(){const t=this.group,e=Ff[Math.floor(Math.random()*Ff.length)],i=Ce(.05,.05,1.02,e);i.position.set(0,.25,0);const s=Ce(.05,.44,.05,e);s.position.set(0,.47,.32);const r=Ce(.05,.05,.76,e);r.position.set(0,.7,0);const o=Ce(.05,.05,.8,e);o.position.set(0,.46,-.18),o.rotation.x=.35;const a=Ce(.22,.04,.28,Lb);a.position.set(0,.71,.28);const l=Ce(.5,.05,.05,e);l.position.set(0,.77,-.46);const c=Ce(.27,.36,.21,Nf);c.position.set(0,.97,.1);const u=Ce(.21,.21,.21,Uf);u.position.set(0,1.24,-.06);const h=as(Lf,os,0,.24,-.48),f=as(Lf,os,0,.24,.48);this.wheels.push(h,f);const d=new Ct(Wl,js);d.position.set(0,.68,-.52),t.add(i,s,r,o,a,l,c,u,h,f,d)}buildScooter(){const t=this.group,e=Bf[Math.floor(Math.random()*Bf.length)],i=Ce(.52,.42,1.04,e);i.position.set(0,.44,0);const s=Ce(.46,.5,.35,e);s.position.set(0,.52,-.52);const r=Ce(.44,.1,.38,e);r.position.set(0,.21,.06);const o=Ce(.62,.07,.07,Ib);o.position.set(0,.88,-.53);const a=Ce(.36,.38,.26,Nf);a.position.set(0,.92,.18);const l=Ce(.26,.26,.26,Uf);l.position.set(0,1.22,.14);const c=as(If,os,0,.2,-.55),u=as(If,os,0,.2,.55);this.wheels.push(c,u);const h=new Ct(Wl,js),f=new Ct(Wl,js);h.position.set(-.15,.55,-.57),f.position.set(.15,.55,-.57),t.add(i,s,r,o,a,l,c,u,h,f)}buildAuto(){const t=this.group,e=Ce(1,.14,1.72,Xl);e.position.set(0,.18,.05);const i=Ce(.92,.88,1.18,Of);i.position.set(0,.78,.2);const s=Ce(1.02,.12,1.28,Of);s.position.set(0,1.28,.2);const r=Ce(.94,.14,1.2,Xl);r.position.set(0,.37,.2);const o=Ce(.8,.52,.52,Xl);o.position.set(0,.54,-.66);const a=Ce(.85,.48,.07,Db);a.position.set(0,.82,-.34);const l=as(kl,os,0,.22,-.72),c=as(kl,os,-.46,.22,.66),u=as(kl,os,.46,.22,.66);this.wheels.push(l,c,u);const h=new Ct(Df,js),f=new Ct(Df,js);h.position.set(-.24,.6,-.9),f.position.set(.24,.6,-.9),t.add(e,i,s,r,o,a,l,c,u,h,f)}}class Fb{constructor(t,e){q(this,"vehicles",[]);const{pois:i,roads:s}=e,r=i.map(()=>[]);for(const c of s)r[c.from].push(c.to),r[c.to].push(c.from);const o=s.map(c=>({from:c.from,to:c.to}));let a=0;const l=(c,u,h)=>{for(let f=0;f<u;f++,a++){const d=h[0]+Math.random()*(h[1]-h[0]);this.vehicles.push(new Ob(t,i,r,c,d,o,a))}};l("bicycle",wb,Rb),l("scooter",Tb,Cb),l("autorickshaw",Ab,Pb)}update(t,e,i){js.color.setHex(i<.25?16777130:0);for(const s of this.vehicles)s.update(t,e)}dispose(t){for(const e of this.vehicles)e.remove(t);this.vehicles=[]}}const zf=[{type:"food",label:"Food Delivery",emoji:"🍱",color:"#f77f00",baseReward:30,rewardPerUnit:3.2,baseTime:120,timePerUnit:5},{type:"medicine",label:"Medicine Delivery",emoji:"💊",color:"#e63946",baseReward:80,rewardPerUnit:5.5,baseTime:90,timePerUnit:4},{type:"parcel",label:"Parcel Delivery",emoji:"📦",color:"#06d6a0",baseReward:50,rewardPerUnit:3.8,baseTime:200,timePerUnit:6},{type:"document",label:"Govt. Document Run",emoji:"📄",color:"#7b2d8b",baseReward:100,rewardPerUnit:4.5,baseTime:150,timePerUnit:5}];function Bb(n,t){const e=new C(n.dir.x,n.dir.y,n.dir.z),i=new C(t.dir.x,t.dir.y,t.dir.z);return Math.acos(Math.max(-1,Math.min(1,e.dot(i))))*Se}class zb{constructor(t){q(this,"mission",null);q(this,"worldData");q(this,"onMissionStart");q(this,"onMissionUpdate");q(this,"onMissionComplete");q(this,"onMissionFail");this.worldData=t}get activeMission(){return this.mission}tryInteract(t){t&&(this.mission?t.id===this.mission.dstId&&this.completeMission():this.startMission(t))}update(t){var e;this.mission&&(this.mission.timeRemaining=Math.max(0,this.mission.timeRemaining-t),(e=this.onMissionUpdate)==null||e.call(this,this.mission.timeRemaining),this.mission.timeRemaining===0&&this.failMission())}interactionHint(t){return this.mission?t&&t.id===this.mission.dstId?`🎯 Press [E] to deliver at ${this.mission.dstEmoji} ${this.mission.dstName}!`:null:t?`${t.emoji} Press [E] at ${t.name} to pick up a delivery`:null}startMission(t){var f;const{pois:e}=this.worldData,i=zf[Math.floor(Math.random()*zf.length)],r=e.filter(d=>d.id!==t.id).map(d=>({poi:d,arc:Bb(t,d)}));r.sort((d,g)=>g.arc-d.arc);const o=r.slice(0,Math.max(1,Math.floor(r.length*.6))),{poi:a,arc:l}=o[Math.floor(Math.random()*o.length)],c=Math.max(20,Math.min(500,Math.round(i.baseReward+l*i.rewardPerUnit))),u=Math.round(i.baseTime+l*i.timePerUnit),h=(l*.12).toFixed(1);this.mission={type:i.type,label:i.label,emoji:i.emoji,color:i.color,srcName:t.name,srcEmoji:t.emoji,dstName:a.name,dstEmoji:a.emoji,dstId:a.id,distDisplay:`${h} km`,reward:c,timeLimit:u,timeRemaining:u},(f=this.onMissionStart)==null||f.call(this,this.mission)}completeMission(){var e;if(!this.mission)return;const t=this.mission.reward;this.mission=null,(e=this.onMissionComplete)==null||e.call(this,t)}failMission(){var t;this.mission=null,(t=this.onMissionFail)==null||t.call(this)}}const Kp=240,Hb=new Ye(.15,1.2,Kp,8,1,!0),Vb=new mr(4,7,32),Gb=new mr(2,8,32);class kb{constructor(t){q(this,"group");q(this,"beamMat");q(this,"ringMat");q(this,"pulseMat");q(this,"pulseRing");q(this,"pulseT",0);this.scene=t,this.beamMat=new pi({color:65450,transparent:!0,opacity:.3,side:on,depthWrite:!1,blending:ia}),this.ringMat=new pi({color:65450,transparent:!0,opacity:.8,side:on,depthWrite:!1}),this.pulseMat=new pi({color:65450,transparent:!0,opacity:.5,side:on,depthWrite:!1,blending:ia});const e=new Ct(Hb,this.beamMat);e.position.y=Kp/2;const i=new Ct(Vb,this.ringMat);i.rotation.x=-Math.PI/2,i.position.y=.15,this.pulseRing=new Ct(Gb,this.pulseMat),this.pulseRing.rotation.x=-Math.PI/2,this.pulseRing.position.y=.1,this.group=new le,this.group.add(e,i,this.pulseRing),this.group.visible=!1,t.add(this.group)}setDestination(t,e){if(!t){this.group.visible=!1;return}const i=new C(t.dir.x,t.dir.y,t.dir.z).normalize(),s=i.clone().multiplyScalar(Se+.5);this.group.position.copy(s);const r=new C(0,1,0);let o=new C().crossVectors(i,r);o.lengthSq()<.001&&o.set(1,0,0),o.normalize();const a=new C().crossVectors(o,i).normalize();this.group.quaternion.setFromRotationMatrix(new Jt().makeBasis(o,i,a));const l=new Ft(e);this.beamMat.color.copy(l),this.ringMat.color.copy(l),this.pulseMat.color.copy(l),this.group.visible=!0}update(t){if(!this.group.visible)return;this.pulseT+=t*1.8;const e=.5+.5*Math.sin(this.pulseT);this.pulseMat.opacity=.15+.35*e;const i=1+.6*e;this.pulseRing.scale.setScalar(i),this.beamMat.opacity=.15+.15*e}dispose(){this.scene.remove(this.group)}}function fr(n){const t=Math.sin(n*9301+49297)*233280;return t-Math.floor(t)}function Pn(n,t,e=0,i=new C,s=new C){s.copy(n).normalize();const r=s.clone().multiplyScalar(Se+t),o=new C(0,1,0);let a=i.crossVectors(s,o);a.lengthSq()<.001&&a.set(1,0,0),a=a.clone().normalize();const l=new C().crossVectors(a,s).normalize();if(e!==0){const c=new jn().setFromAxisAngle(s,e);a.applyQuaternion(c),l.applyQuaternion(c)}return new Jt().makeBasis(a,s,l).setPosition(r)}function so(n,t,e){const i=new C(n.dir.x,n.dir.y,n.dir.z),s=new C(0,1,0);let r=new C().crossVectors(i,s);r.lengthSq()<.001&&r.set(1,0,0),r.normalize();const o=new C().crossVectors(r,i).normalize(),a=fr(t)*Math.PI*2,l=fr(t+.3)*e;return i.clone().addScaledVector(r,Math.cos(a)*l).addScaledVector(o,Math.sin(a)*l).normalize()}function ne(n){return new pe({color:n})}const Pi=[ne(13935988),ne(15779962),ne(13928554),ne(13154458),ne(15260872),ne(12099728)],Li=[ne(12597547),ne(15158332),ne(9323693),ne(2719929),ne(2600544),ne(15965202)],Wb=new re(2.4,2.2,2),Xb=new Yi(1.9,1.1,4);function qb(n,t){const i=t.pois.length*4,s=Pi.map(()=>new ln(Wb,Pi[0],Math.ceil(i/Pi.length))),r=Li.map(()=>new ln(Xb,Li[0],Math.ceil(i/Li.length)));for(let c=0;c<Pi.length;c++)s[c].material=Pi[c];for(let c=0;c<Li.length;c++)r[c].material=Li[c];const o=new Array(Pi.length).fill(0),a=new Array(Li.length).fill(0);let l=0;for(const c of t.pois)for(let u=0;u<4;u++,l++){const h=l*.61803,f=so(c,h,.28),d=fr(h+1.5)*Math.PI*2,g=l%Pi.length,_=(l+2)%Li.length,m=Pn(f,1.1,d);s[g].setMatrixAt(o[g]++,m);const p=f.clone(),E=Pn(p,2.75,d);r[_].setMatrixAt(a[_]++,E)}for(let c=0;c<Pi.length;c++)s[c].count=o[c],s[c].instanceMatrix.needsUpdate=!0,s[c].castShadow=!0,n.add(s[c]);for(let c=0;c<Li.length;c++)r[c].count=a[c],r[c].instanceMatrix.needsUpdate=!0,r[c].castShadow=!0,n.add(r[c])}const Yb=new Ye(.07,.07,2.2,6),jb=new re(2.4,.12,1.1),Ii=[ne(16739125),ne(16237983),ne(4434571),ne(5731728),ne(15954476),ne(9485933)],$b=new re(2.7,.1,1.4),Kb=ne(9127187),Jb=ne(13935988);function Zb(n,t){const i=t.pois.length*2,s=i*4,r=new ln(Yb,Kb,s),o=new ln(jb,Jb,i),a=Ii.map(()=>new ln($b,Ii[0],Math.ceil(i/Ii.length)));for(let f=0;f<Ii.length;f++)a[f].material=Ii[f];const l=new Array(Ii.length).fill(0);let c=0,u=0;const h=[[-1.05,-.5],[1.05,-.5],[-1.05,.5],[1.05,.5]];for(const f of t.pois)for(let d=0;d<2;d++,c++){const g=c*.38197+50,_=so(f,g,.2),m=fr(g+2.1)*Math.PI*2,p=_.clone().normalize(),E=new C(0,1,0);let x=new C().crossVectors(p,E).normalize();x.lengthSq()<.001&&x.set(1,0,0);const S=new C().crossVectors(x,p).normalize(),L=new jn().setFromAxisAngle(p,m),T=x.clone().applyQuaternion(L),R=S.clone().applyQuaternion(L),I=p.clone().multiplyScalar(Se+.2);for(const[M,P]of h){const U=I.clone().addScaledVector(T,M).addScaledVector(R,P).addScaledVector(p,1.1),z=new Jt().makeBasis(T,p,R).setPosition(U);r.setMatrixAt(u++,z)}o.setMatrixAt(c,Pn(_,.9,m));const y=c%Ii.length;a[y].setMatrixAt(l[y]++,Pn(_,2.2,m))}r.count=u,r.instanceMatrix.needsUpdate=!0,n.add(r),o.count=c,o.instanceMatrix.needsUpdate=!0,n.add(o);for(let f=0;f<Ii.length;f++)a[f].count=l[f],a[f].instanceMatrix.needsUpdate=!0,n.add(a[f])}const Qb=new Ye(.1,.1,3.5,8),tw=new re(3,.15,1.4),ew=new re(2.2,.15,.5),nw=new re(.6,.5,.05),iw=ne(5592405),sw=ne(2201331),rw=ne(8947848),ow=ne(16771899);function aw(n,t){const e=Math.floor(t.pois.length/2),i=new ln(Qb,iw,e),s=new ln(tw,sw,e),r=new ln(ew,rw,e),o=new ln(nw,ow,e);let a=0;for(let l=0;l<t.pois.length;l+=2){const c=t.pois[l],u=l*.3+77,h=so(c,u,.17),f=fr(u+5)*Math.PI*2;i.setMatrixAt(a,Pn(h,1.75,f)),s.setMatrixAt(a,Pn(h,3.5,f)),r.setMatrixAt(a,Pn(h,.5,f)),o.setMatrixAt(a,Pn(h,3,f)),a++}for(const l of[i,s,r,o])l.count=a,l.instanceMatrix.needsUpdate=!0,n.add(l)}const lw=new re(1.8,.14,.5),cw=new re(1.8,.5,.1),uw=new re(.12,.52,.12),Hf=ne(10506797),hw=ne(5592405);function fw(n,t){const i=t.pois.length*2,s=new ln(lw,Hf,i),r=new ln(cw,Hf,i),o=new ln(uw,hw,i*4),a=[[-.7,-.18],[.7,-.18],[-.7,.18],[.7,.18]];let l=0,c=0;for(const u of t.pois)for(let h=0;h<2;h++,l++){const f=l*.5+20,d=so(u,f,.13),g=fr(f+3.3)*Math.PI*2,_=d.clone().normalize(),m=new C(0,1,0);let p=new C().crossVectors(_,m);p.lengthSq()<.001&&p.set(1,0,0),p.normalize();const E=new C().crossVectors(p,_).normalize(),x=new jn().setFromAxisAngle(_,g),S=p.clone().applyQuaternion(x),L=E.clone().applyQuaternion(x);s.setMatrixAt(l,Pn(d,.55,g));const T=_.clone().multiplyScalar(Se+.85).addScaledVector(L,.22);r.setMatrixAt(l,new Jt().makeBasis(S,_,L).setPosition(T));for(const[R,I]of a){const y=_.clone().multiplyScalar(Se+.28).addScaledVector(S,R).addScaledVector(L,I);o.setMatrixAt(c++,new Jt().makeBasis(S,_,L).setPosition(y))}}s.count=l,s.instanceMatrix.needsUpdate=!0,n.add(s),r.count=l,r.instanceMatrix.needsUpdate=!0,n.add(r),o.count=c,o.instanceMatrix.needsUpdate=!0,n.add(o)}const dw=new Ye(.12,.22,2,6),pw=new Yi(1,2.5,6),mw=ne(7027983),Di=[ne(2980397),ne(3836986),ne(1731354),ne(4889674)];function gw(n,t){const i=t.pois.length*3,s=new ln(dw,mw,i),r=Di.map(()=>new ln(pw,Di[0],Math.ceil(i/Di.length)));for(let l=0;l<Di.length;l++)r[l].material=Di[l];const o=new Array(Di.length).fill(0);let a=0;for(const l of t.pois)for(let c=0;c<3;c++,a++){const u=a*.41421+30,h=so(l,u,.32);s.setMatrixAt(a,Pn(h,1));const f=a%Di.length;r[f].setMatrixAt(o[f]++,Pn(h,2.8))}s.count=a,s.instanceMatrix.needsUpdate=!0,s.castShadow=!0,n.add(s);for(let l=0;l<Di.length;l++)r[l].count=o[l],r[l].instanceMatrix.needsUpdate=!0,r[l].castShadow=!0,n.add(r[l])}function _w(n,t){qb(n,t),Zb(n,t),aw(n,t),fw(n,t),gw(n,t)}class vw{constructor(){q(this,"ctx",null);q(this,"master",null);q(this,"running",!1);q(this,"bellTimer",0);q(this,"hornTimer",0)}init(){if(!this.running)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination),this.running=!0,this.buildAmbience()}catch{}}tryResume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}update(t,e){if(!this.ctx||!this.master||this.ctx.state!=="running")return;const i=e>.3?.55:.2;this.master.gain.setTargetAtTime(i,this.ctx.currentTime,1.5),this.bellTimer-=t,this.bellTimer<=0&&(this.bellTimer=18+Math.random()*20,this.playTemplebell()),this.hornTimer-=t,this.hornTimer<=0&&(this.hornTimer=6+Math.random()*10,this.playHorn())}playSuccess(){if(!this.ctx||!this.master||this.ctx.state!=="running")return;const t=this.ctx,e=t.currentTime,i=[[0,523,.22],[1,659,.18],[2,784,.14]];for(const[o,a,l]of i){const c=e+o*.13,u=t.createOscillator(),h=t.createGain();u.type="sine",u.frequency.value=a,h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(l,c+.03),h.gain.exponentialRampToValueAtTime(.001,c+.55),u.connect(h),h.connect(this.master),u.start(c),u.stop(c+.6)}const s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.value=1568,r.gain.setValueAtTime(.09,e+.32),r.gain.exponentialRampToValueAtTime(.001,e+1.3),s.connect(r),r.connect(this.master),s.start(e+.32),s.stop(e+1.35)}playFail(){if(!this.ctx||!this.master||this.ctx.state!=="running")return;const t=this.ctx,e=t.currentTime;for(const[i,s]of[[0,392],[.28,311]]){const r=e+i,o=t.createOscillator(),a=t.createGain(),l=t.createBiquadFilter();o.type="sawtooth",o.frequency.value=s,l.type="lowpass",l.frequency.value=900,a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(.16,r+.04),a.gain.exponentialRampToValueAtTime(.001,r+.45),o.connect(l),l.connect(a),a.connect(this.master),o.start(r),o.stop(r+.5)}}stop(){var t;(t=this.ctx)==null||t.close(),this.ctx=null,this.master=null,this.running=!1}buildAmbience(){this.createTrafficHum(),this.createWindRustle(),this.createCrowdMurmur(),this.createBirds()}createTrafficHum(){const t=this.ctx;for(const[e,i]of[[68,.06],[136,.03],[204,.015]]){const s=t.createOscillator(),r=t.createGain();s.type="sawtooth",s.frequency.value=e,s.frequency.setValueAtTime(e,t.currentTime),s.frequency.linearRampToValueAtTime(e*1.02,t.currentTime+4),s.frequency.linearRampToValueAtTime(e,t.currentTime+8),r.gain.value=i,s.connect(r),r.connect(this.master),s.start()}}createWindRustle(){const t=this.ctx,e=t.sampleRate*3,i=t.createBuffer(1,e,t.sampleRate),s=i.getChannelData(0);for(let c=0;c<e;c++)s[c]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=i,r.loop=!0;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=600;const a=t.createBiquadFilter();a.type="highpass",a.frequency.value=80;const l=t.createGain();l.gain.value=.025,r.connect(a),a.connect(o),o.connect(l),l.connect(this.master),r.start()}createCrowdMurmur(){const t=this.ctx,e=[180,240,310,380,460];for(const i of e){const s=t.createOscillator(),r=t.createOscillator(),o=t.createGain(),a=t.createGain();s.type="sine",s.frequency.value=i+(Math.random()-.5)*30,r.type="sine",r.frequency.value=.1+Math.random()*.3,o.gain.value=.008,a.gain.value=.018,r.connect(o),o.connect(a.gain),s.connect(a),a.connect(this.master),s.start(),r.start()}}createBirds(){const t=this.ctx;for(const e of[2400,3100,2700]){const i=t.createOscillator(),s=t.createOscillator(),r=t.createGain(),o=t.createGain();i.type="sine",i.frequency.value=e,s.type="sine",s.frequency.value=8+Math.random()*6,r.gain.value=180,o.gain.value=.012,s.connect(r),r.connect(i.frequency),i.connect(o),o.connect(this.master),i.start(),s.start()}}playTemplebell(){const t=this.ctx,e=t.currentTime;for(const[i,s]of[[1,.18],[2.75,.09],[5,.04]]){const r=t.createOscillator(),o=t.createGain();r.type="sine",r.frequency.value=880*i,o.gain.setValueAtTime(s,e),o.gain.exponentialRampToValueAtTime(1e-4,e+2.5),r.connect(o),o.connect(this.master),r.start(e),r.stop(e+2.6)}}playHorn(){const t=this.ctx,e=t.currentTime,i=280+Math.floor(Math.random()*4)*40,s=.2+Math.random()*.35,r=t.createOscillator(),o=t.createGain();r.type="sawtooth",r.frequency.value=i,o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.14,e+.03),o.gain.setValueAtTime(.14,e+s-.03),o.gain.linearRampToValueAtTime(0,e+s);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=1800,r.connect(a),a.connect(o),o.connect(this.master),r.start(e),r.stop(e+s+.05)}}const Vf=1500,xw=8e3;class Mw{constructor(t,e){q(this,"ws",null);q(this,"selfId","");q(this,"pendingStates",[]);q(this,"reconnectDelay",Vf);q(this,"reconnectTimer",null);q(this,"_status","idle");q(this,"onStatusChange");q(this,"onPlayerStates");q(this,"onPlayerLeft");q(this,"onEmoji");q(this,"onOnlineCount");q(this,"handleOpen",()=>{this.reconnectDelay=Vf,this.setStatus("connected")});q(this,"handleMessage",t=>{var i,s;let e;try{e=JSON.parse(t.data)}catch{return}switch(e.type){case"SELF_ID":{this.selfId=e.payload.playerId;for(const r of this.pendingStates)this.dispatchStates(r);this.pendingStates=[];break}case"WORLD_STATE":{const r=performance.now(),a=e.payload.map(l=>({...l,timestamp:r}));this.selfId?this.dispatchStates(a):this.pendingStates.push(a);break}case"PLAYER_LEFT":{const r=e.payload.playerId;(i=this.onPlayerLeft)==null||i.call(this,r);break}case"EMOJI":{const r=e.payload;r.playerId!==this.selfId&&((s=this.onEmoji)==null||s.call(this,r.playerId,r.emoji));break}}});q(this,"handleError",()=>{});q(this,"handleClose",()=>{this.ws=null,this._status!=="idle"&&(this.setStatus("reconnecting"),this.reconnectTimer=window.setTimeout(()=>{this.reconnectDelay=Math.min(this.reconnectDelay*1.5,xw),this.connect()},this.reconnectDelay))});this.wsUrl=t,this.username=e}connect(){if(!(this.ws&&this.ws.readyState<=WebSocket.OPEN)){this.setStatus("connecting");try{this.ws=new WebSocket(this.wsUrl),this.ws.onopen=this.handleOpen,this.ws.onmessage=this.handleMessage,this.ws.onerror=this.handleError,this.ws.onclose=this.handleClose}catch{this.setStatus("failed")}}}disconnect(){var t;this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),(t=this.ws)==null||t.close(1e3,"client disconnect"),this.ws=null,this.setStatus("idle")}sendState(t){this.send({type:"PLAYER_STATE",payload:t})}sendEmoji(t){this.send({type:"EMOJI",payload:{emoji:t}})}get isConnected(){return this._status==="connected"}get status(){return this._status}get id(){return this.selfId}dispatchStates(t){var i,s;const e=t.filter(r=>r.playerId!==this.selfId);(i=this.onOnlineCount)==null||i.call(this,t.length),(s=this.onPlayerStates)==null||s.call(this,e)}send(t){var e;((e=this.ws)==null?void 0:e.readyState)===WebSocket.OPEN&&this.ws.send(JSON.stringify(t))}setStatus(t){var e;this._status=t,(e=this.onStatusChange)==null||e.call(this,t)}}const yw=100,Sw=12,Gf=[3835647,16196997,448160,16765286,15681391,11066076,16739125,8599788,46296,15320170,2792847,15167313];function Ew(n){let t=0;for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)>>>0;return Gf[t%Gf.length]}function ko(n){return new pe({color:n})}function bw(n,t){const s=document.createElement("canvas");s.width=256,s.height=56;const r=s.getContext("2d"),o=56/2;r.fillStyle="rgba(4,6,16,0.82)",r.beginPath(),r.moveTo(o,0),r.lineTo(256-o,0),r.arcTo(256,0,256,56,o),r.lineTo(256,56-o),r.arcTo(256,56,0,56,o),r.lineTo(o,56),r.arcTo(0,56,0,0,o),r.lineTo(0,o),r.arcTo(0,0,256,0,o),r.closePath(),r.fill(),r.fillStyle=`#${t.toString(16).padStart(6,"0")}`,r.fillRect(0,0,7,56),r.font='bold 22px "Segoe UI", sans-serif',r.fillStyle="#ffffff",r.textBaseline="middle",r.fillText(n.slice(0,14),18,56/2);const a=new Yc(s),l=new Oa({map:a,transparent:!0,depthTest:!1}),c=new qc(l);return c.scale.set(8,1.75,1),c.renderOrder=997,c}function ww(n){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");i.font="80px serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128/2,128/2+6);const s=new Yc(e),r=new Oa({map:s,transparent:!0,depthTest:!1,opacity:1}),o=new qc(r);return o.scale.set(3.2,3.2,1),o.renderOrder=998,o}class Tw{constructor(t,e,i){q(this,"group");q(this,"playerId");q(this,"username");q(this,"bodyColor");q(this,"buffer",[]);q(this,"nameLabel");q(this,"emojiSprite",null);q(this,"connDot");q(this,"legL");q(this,"legR");q(this,"legPhase",0);q(this,"emojiTimer",0);q(this,"lastSnapshotAt",0);this.playerId=t,this.username=e,this.bodyColor=Ew(t),this.group=new le;const{legL:s,legR:r}=this.buildCharacter();this.legL=s,this.legR=r,this.nameLabel=bw(e,this.bodyColor),this.nameLabel.position.set(0,2.6,0),this.group.add(this.nameLabel),this.connDot=new Ct(new Yn(.2,8,8),new pi({color:8947848})),this.connDot.position.set(3,2.6,0),this.connDot.renderOrder=996,this.group.add(this.connDot),i.add(this.group)}pushSnapshot(t){this.buffer.push(t),this.buffer.length>Sw&&this.buffer.shift(),this.lastSnapshotAt=t.t}showEmoji(t){var e;this.emojiSprite&&(this.group.remove(this.emojiSprite),(e=this.emojiSprite.material.map)==null||e.dispose(),this.emojiSprite.material.dispose()),this.emojiSprite=ww(t),this.emojiSprite.position.set(0,4.2,0),this.group.add(this.emojiSprite),this.emojiTimer=3}update(t){const e=performance.now()-yw,i=this.interpolate(e);i&&(this.group.position.copy(i.pos),this.group.quaternion.copy(i.quat),this.animateLegs(t,i.isMoving));const s=performance.now()-this.lastSnapshotAt,r=this.connDot.material;if(s<200?r.color.setHex(58998):s<600?r.color.setHex(16755520):r.color.setHex(16717636),this.emojiTimer>0&&this.emojiSprite){this.emojiTimer-=t;const o=this.emojiSprite.material;o.opacity=Math.max(0,Math.min(1,this.emojiTimer/.6)),this.emojiTimer<=0&&(this.group.remove(this.emojiSprite),this.emojiSprite=null)}}remove(t){t.remove(this.group)}interpolate(t){const e=this.buffer;if(e.length===0)return null;if(e.length===1)return e[0];const i=e[0],s=e[e.length-1];if(t<=i.t)return i;if(t>=s.t)return s;for(let r=0;r<e.length-1;r++){const o=e[r],a=e[r+1];if(o.t<=t&&t<a.t){const l=(t-o.t)/(a.t-o.t);return{t,pos:o.pos.clone().lerp(a.pos,l),quat:o.quat.clone().slerp(a.quat,l),isMoving:a.isMoving,isSprinting:a.isSprinting}}}return s}buildCharacter(){const t=ko(this.bodyColor),e=ko(13010498),i=ko(16777215),s=ko(2976335),r=new Ct(new re(.6,.9,.4),t);r.position.y=.45,r.castShadow=!0;const o=new Ct(new re(.5,.5,.5),e);o.position.y=1.15,o.castShadow=!0;const a=new re(.25,.5,.3),l=new Ct(a,i);l.position.set(-.175,-.25,0),l.castShadow=!0;const c=new Ct(a,i);c.position.set(.175,-.25,0),c.castShadow=!0;const u=new Ct(new re(.4,.5,.15),s);return u.position.set(0,.5,-.275),this.group.add(r,o,l,c,u),{legL:l,legR:c}}animateLegs(t,e){if(!e){this.legPhase=0,this.legL.rotation.x=0,this.legR.rotation.x=0;return}this.legPhase+=t*8;const i=Math.sin(this.legPhase)*.3;this.legL.rotation.x=i,this.legR.rotation.x=-i}}class Aw{constructor(t){q(this,"players",new Map);this.scene=t}updateFromWorldState(t){const e=new Set;for(const i of t){e.add(i.playerId);let s=this.players.get(i.playerId);s||(s=new Tw(i.playerId,i.username,this.scene),this.players.set(i.playerId,s)),s.pushSnapshot({t:i.timestamp,pos:new C(i.x,i.y,i.z),quat:new jn(i.qx,i.qy,i.qz,i.qw),isMoving:i.isMoving,isSprinting:i.isSprinting})}for(const[i,s]of this.players)e.has(i)||(s.remove(this.scene),this.players.delete(i))}removePlayer(t){const e=this.players.get(t);e&&(e.remove(this.scene),this.players.delete(t))}showEmoji(t,e){var i;(i=this.players.get(t))==null||i.showEmoji(e)}update(t){for(const e of this.players.values())e.update(t)}dispose(){for(const t of this.players.values())t.remove(this.scene);this.players.clear()}get count(){return this.players.size}get all(){return Array.from(this.players.values())}}const kf=.05,ql=12,Yl=new C(1,.18,.25).normalize(),Wf={bicycle:1,scooter:1.9,ev_bike:2.4,autorickshaw:1.5},Rw={bicycle:"🚲 Bicycle",scooter:"🛵 Scooter",ev_bike:"⚡ EV Bike",autorickshaw:"🛺 Auto Rickshaw"};class Cw{constructor(t,e){q(this,"renderer");q(this,"scene");q(this,"worldData");q(this,"camera");q(this,"player");q(this,"input");q(this,"dayNight");q(this,"poiMgr");q(this,"roads");q(this,"minimap");q(this,"npcSystem");q(this,"streetLights");q(this,"vehicleSystem");q(this,"missionSystem");q(this,"beacon");q(this,"ambientAudio");q(this,"clock");q(this,"animId",0);q(this,"garagePos");q(this,"_isMounted",!1);q(this,"_currentVehicle","bicycle");q(this,"_speedMult",1);q(this,"_prevNearGarage",!1);q(this,"mpClient",null);q(this,"remotePlayers",null);q(this,"sendTimer",0);q(this,"mpUsername","");q(this,"onTimeUpdate");q(this,"onPlayerPosition");q(this,"onNearPOI");q(this,"onOnlineCount");q(this,"onMpStatus");q(this,"onMissionStart");q(this,"onMissionUpdate");q(this,"onMissionComplete");q(this,"onMissionFail");q(this,"onInteractionHint");q(this,"onVehicleMounted");q(this,"onNearGarage");q(this,"loop",()=>{var r,o,a,l,c,u,h;this.animId=requestAnimationFrame(this.loop);const t=Math.min(this.clock.getDelta(),.05);if(this.ambientAudio.tryResume(),this.player.update(t,this.input.state,this._speedMult),this.camera.update(t,this.player),this.dayNight.update(t,this.renderer),this.streetLights.update(this.dayNight.daytimeRatio),this.npcSystem.update(t,this.worldData.pois),this.vehicleSystem.update(t,this.worldData.pois,this.dayNight.daytimeRatio),this.beacon.update(t),this.ambientAudio.update(t,this.dayNight.daytimeRatio),(r=this.remotePlayers)==null||r.update(t),(o=this.mpClient)!=null&&o.isConnected&&(this.sendTimer+=t,this.sendTimer>=kf)){this.sendTimer-=kf;const f=this.player.position,d=this.player.quaternion;this.mpClient.sendState({username:this.mpUsername,x:f.x,y:f.y,z:f.z,qx:d.x,qy:d.y,qz:d.z,qw:d.w,isMoving:this.player.isMoving,isSprinting:this.player.isSprinting,vehicle:this._isMounted?this._currentVehicle:"none"})}this.minimap.draw(this.player.position,this.player.quaternion,t);const e=this.poiMgr.nearestPOI(this.player.position,10),i=this.player.position.distanceTo(this.garagePos)<ql;i!==this._prevNearGarage&&(this._prevNearGarage=i,(a=this.onNearGarage)==null||a.call(this,i)),this.input.consumeInteract()&&(i?this.toggleMount():this.missionSystem.tryInteract(e)),this.missionSystem.update(t);let s=null;if(i){const f=Rw[this._currentVehicle]??this._currentVehicle;s=this._isMounted?`Press [E] at Garage to dismount ${f}`:`Press [E] at Garage to mount ${f}`}else s=this.missionSystem.interactionHint(e);(l=this.onInteractionHint)==null||l.call(this,s),(c=this.onNearPOI)==null||c.call(this,e),(u=this.onTimeUpdate)==null||u.call(this,this.dayNight.currentHour),(h=this.onPlayerPosition)==null||h.call(this,this.player.position),this.renderer.render(this.scene,this.camera.camera)});q(this,"onResize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.onResize()});this.renderer=new rE({canvas:t,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hp,this.scene=new oE,this.clock=new IE,this.worldData=jp(),this.scene.add(NE()),this.addStars(),this.addAtmosphere(),$E(this.scene),_w(this.scene,this.worldData),this.poiMgr=new ob(this.scene),this.poiMgr.buildAll(this.worldData),this.roads=new db(this.scene),this.roads.buildAll(this.worldData),this.streetLights=new bb(this.scene,this.worldData),this.npcSystem=new Sb(this.scene,this.worldData.pois),this.vehicleSystem=new Fb(this.scene,this.worldData),this.missionSystem=new zb(this.worldData),this.missionSystem.onMissionStart=i=>{var r;(r=this.onMissionStart)==null||r.call(this,i);const s=this.worldData.pois.find(o=>o.id===i.dstId)??null;this.beacon.setDestination(s,i.color),this.minimap.setDestination(i.dstId,i.color)},this.missionSystem.onMissionUpdate=i=>{var s;return(s=this.onMissionUpdate)==null?void 0:s.call(this,i)},this.missionSystem.onMissionComplete=i=>{var s;(s=this.onMissionComplete)==null||s.call(this,i),this.ambientAudio.playSuccess(),this.beacon.setDestination(null,"#ffffff"),this.minimap.setDestination(null)},this.missionSystem.onMissionFail=()=>{var i;(i=this.onMissionFail)==null||i.call(this),this.ambientAudio.playFail(),this.beacon.setDestination(null,"#ffffff"),this.minimap.setDestination(null)},this.beacon=new kb(this.scene),this.garagePos=Yl.clone().multiplyScalar(Se+1),this.buildGarageMarker(),this.ambientAudio=new vw,this.ambientAudio.init(),this.dayNight=new jE(this.scene),this.player=new VE,this.scene.add(this.player.mesh),this.camera=new XE,this.input=new qE,this.minimap=new mb(e),this.minimap.loadWorld(this.worldData),window.addEventListener("resize",this.onResize)}buildGarageMarker(){const t=new le,e=new pe({color:16747586}),i=new pe({color:1914199}),s=new pe({color:16765286}),r=new Ct(new re(3.5,2.8,3),e);r.position.y=1.4,r.castShadow=!0;const o=new Ct(new Yi(2.6,1.2,4),i);o.position.y=3.4,o.castShadow=!0;const a=new Ct(new re(2,.8,.1),s);a.position.set(0,2.2,1.55),t.add(r,o,a),Qr(t,Yl),this.scene.add(t);const l=new Ct(new mr(ql*.85,ql,48),new pi({color:16747586,side:on,transparent:!0,opacity:.15,depthWrite:!1}));l.renderOrder=1,Qr(l,Yl,.08),this.scene.add(l)}setVehicle(t){this._currentVehicle=t,this._speedMult=this._isMounted?Wf[t]??1:1}toggleMount(){var t;this._isMounted=!this._isMounted,this._speedMult=this._isMounted?Wf[this._currentVehicle]??1:1,(t=this.onVehicleMounted)==null||t.call(this,this._isMounted)}connectMultiplayer(t){if(this.mpClient)return;this.mpUsername=t,this.remotePlayers=new Aw(this.scene);const i=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/ws`;this.mpClient=new Mw(i,t),this.mpClient.onPlayerStates=s=>this.remotePlayers.updateFromWorldState(s),this.mpClient.onPlayerLeft=s=>this.remotePlayers.removePlayer(s),this.mpClient.onEmoji=(s,r)=>this.remotePlayers.showEmoji(s,r),this.mpClient.onOnlineCount=s=>{var r;return(r=this.onOnlineCount)==null?void 0:r.call(this,s)},this.mpClient.onStatusChange=s=>{var r;return(r=this.onMpStatus)==null?void 0:r.call(this,s)},this.mpClient.connect()}disconnectMultiplayer(){var t,e;(t=this.mpClient)==null||t.disconnect(),(e=this.remotePlayers)==null||e.dispose(),this.mpClient=null,this.remotePlayers=null,this.sendTimer=0}sendEmoji(t){var e;(e=this.mpClient)==null||e.sendEmoji(t)}get mpStatus(){var t;return((t=this.mpClient)==null?void 0:t.status)??"idle"}start(){this.clock.start(),this.loop()}stop(){cancelAnimationFrame(this.animId),this.disconnectMultiplayer(),this.npcSystem.dispose(this.scene),this.vehicleSystem.dispose(this.scene),this.beacon.dispose(),this.ambientAudio.stop(),this.input.destroy(),window.removeEventListener("resize",this.onResize)}addStars(){const e=new Float32Array(6e3);for(let s=0;s<2e3*3;s++)e[s]=(Math.random()-.5)*3e3;const i=new Ve;i.setAttribute("position",new pn(e,3)),this.scene.add(new hE(i,new Vp({color:16777215,size:.8})))}addAtmosphere(){const t=new Yn(55,32,32),e=new AE({color:4491519,transparent:!0,opacity:.06,side:en,depthWrite:!1});this.scene.add(new Ct(t,e))}}const Pw={class:"menu-overlay"},Lw={class:"menu-card"},Iw={class:"menu-body"},Dw={class:"input-group"},Uw=Ea({__name:"MainMenu",setup(n){const t=Bc(),e=Pe("Delivery Wala");function i(){e.value.trim()&&(t.setName(e.value.trim()),t.startGame())}return(s,r)=>(ge(),ye("div",Pw,[pt("div",Lw,[r[3]||(r[3]=pt("div",{class:"menu-logo"},[pt("div",{class:"logo-icon"},"🏍️"),pt("h1",{class:"logo-title"},"Bharat Runner"),pt("p",{class:"logo-subtitle"},"भारत रनर · Deliver Across India")],-1)),pt("div",Iw,[pt("div",Dw,[r[1]||(r[1]=pt("label",null,"Your Name",-1)),$m(pt("input",{"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),type:"text",placeholder:"Enter your name...",maxlength:"20",onKeyup:U_(i,["enter"])},null,544),[[C_,e.value]])]),pt("button",{class:"btn-play",onClick:i}," 🚀 Start Delivering! "),r[2]||(r[2]=ep('<div class="menu-features" data-v-7d30068d><div class="feature" data-v-7d30068d>🌏 Spherical planet world</div><div class="feature" data-v-7d30068d>📦 10+ delivery types</div><div class="feature" data-v-7d30068d>🏍️ 5 unlockable vehicles</div><div class="feature" data-v-7d30068d>🕌 8 Indian city zones</div></div>',1))]),r[4]||(r[4]=pt("div",{class:"menu-footer"}," Made with ❤️ for India · Multiplayer coming soon ",-1))])]))}}),Zc=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Nw=Zc(Uw,[["__scopeId","data-v-7d30068d"]]),Ow={class:"hud"},Fw={class:"hud-top"},Bw={class:"hud-pill"},zw={class:"hud-pill hud-time"},Hw={class:"hud-pill"},Vw={class:"mission-header"},Gw={class:"mission-emoji"},kw={class:"mission-title"},Ww={class:"mission-label"},Xw={class:"mission-route"},qw={class:"route-node src"},Yw={class:"route-node dst"},jw={class:"mission-stats"},$w={class:"stat"},Kw={class:"stat"},Jw={class:"mission-timer"},Zw={class:"timer-bar-bg"},Qw={key:0,class:"mission-idle"},tT={key:0,class:"interact-prompt"},eT={class:"garage-title"},nT={key:0,class:"garage-near-badge"},iT={class:"garage-items"},sT=["onClick"],rT={class:"veh-emoji"},oT={class:"veh-info"},aT={class:"veh-name"},lT={class:"veh-speed"},cT={key:0,class:"veh-status riding"},uT={key:1,class:"veh-status owned-badge"},hT=["disabled","onClick"],fT={key:0,class:"garage-tip"},dT={key:0,class:"controls-hint"},pT={class:"outcome-reward"},mT={class:"outcome-meta"},gT={class:"outcome-progress-label"},_T={key:0,class:"outcome-needed"},vT={key:1,class:"outcome-unlocked"},xT={class:"outcome-progress-bar"},MT={key:1,class:"outcome-all-unlocked"},yT={class:"hud-bottom"},ST={class:"hud-pill small"},ET=Ea({__name:"GameHUD",setup(n){const t=Bc(),e=Pe(!0),i={bicycle:"8 / 16 u/s",scooter:"15 / 30 u/s",ev_bike:"19 / 38 u/s",autorickshaw:"12 / 24 u/s"},s=An(()=>kr.find(d=>d.id===t.currentVehicle)??kr[0]),r=An(()=>s.value.emoji),o=An(()=>s.value.name);function a(d){return i[d]??""}function l(d){t.selectVehicle(d)}const c=An(()=>{const d=t.timeOfDay;return d>=6&&d<12?"🌅":d>=12&&d<17?"☀️":d>=17&&d<20?"🌆":"🌙"}),u=An(()=>{const d=t.missionTimePct;return d>.5?"#06d6a0":d>.25?"#f4a261":"#e63946"});function h(d){t.buyVehicle(d)}function f(){eb(jp())}return(d,g)=>(ge(),ye("div",Ow,[pt("div",Fw,[pt("div",Bw,[g[1]||(g[1]=pt("span",null,"🪙",-1)),pt("span",null,"₹"+Qt(Lt(t).coins),1)]),pt("div",zw,[pt("span",null,Qt(c.value),1),pt("span",null,Qt(Lt(t).timeLabel),1)]),pt("div",{class:li(["hud-pill",{mounted:Lt(t).isMounted}])},[pt("span",null,Qt(Lt(t).isMounted?r.value:"🚶"),1),pt("span",null,Qt(Lt(t).isMounted?o.value:"On foot"),1)],2),pt("div",Hw,[g[2]||(g[2]=pt("span",null,"⭐",-1)),pt("span",null,Qt(Lt(t).score),1)])]),Le(Lr,{name:"slide-right"},{default:$s(()=>[Lt(t).hudMission?(ge(),ye("div",{key:0,class:"mission-panel",style:Fi({"--accent":Lt(t).hudMission.color})},[pt("div",Vw,[pt("span",Gw,Qt(Lt(t).hudMission.emoji),1),pt("div",kw,[pt("span",Ww,Qt(Lt(t).hudMission.label),1),pt("span",{class:"mission-type-badge",style:Fi({background:Lt(t).hudMission.color})}," Active ",4)])]),pt("div",Xw,[pt("span",qw,Qt(Lt(t).hudMission.srcEmoji)+" "+Qt(Lt(t).hudMission.srcName),1),g[3]||(g[3]=pt("span",{class:"route-arrow"},"→",-1)),pt("span",Yw,Qt(Lt(t).hudMission.dstEmoji)+" "+Qt(Lt(t).hudMission.dstName),1)]),pt("div",jw,[pt("div",$w,[g[4]||(g[4]=pt("span",{class:"stat-icon"},"📍",-1)),pt("span",null,Qt(Lt(t).hudMission.distDisplay),1)]),pt("div",Kw,[g[5]||(g[5]=pt("span",{class:"stat-icon"},"💰",-1)),pt("span",null,"₹"+Qt(Lt(t).hudMission.reward),1)])]),pt("div",Jw,[pt("div",Zw,[pt("div",{class:"timer-bar-fill",style:Fi({width:Lt(t).missionTimePct*100+"%",background:u.value})},null,4)]),pt("span",{class:li(["timer-label",{urgent:Lt(t).missionTimePct<.25}])}," ⏱ "+Qt(Lt(t).missionTimeFmt),3)])],4)):Tn("",!0)]),_:1}),Le(Lr,{name:"slide-right"},{default:$s(()=>[Lt(t).hudMission?Tn("",!0):(ge(),ye("div",Qw,[...g[6]||(g[6]=[pt("span",null,"📦",-1),pt("span",null,[qs("Walk up to any location & press "),pt("kbd",null,"E"),qs(" to start a delivery")],-1)])]))]),_:1}),Le(Lr,{name:"pop"},{default:$s(()=>[Lt(t).interactionHint?(ge(),ye("div",tT,Qt(Lt(t).interactionHint),1)):Tn("",!0)]),_:1}),pt("div",{class:li(["garage-panel",{"garage-active":Lt(t).nearGarage}])},[pt("div",eT,[g[7]||(g[7]=qs(" 🏎️ Garage ",-1)),Lt(t).nearGarage?(ge(),ye("span",nT,"Nearby")):Tn("",!0)]),pt("div",iT,[(ge(!0),ye(rn,null,gg(Lt(kr),_=>(ge(),ye("div",{key:_.id,class:li(["garage-item",{owned:Lt(t).ownedVehicles.includes(_.id),active:Lt(t).currentVehicle===_.id,mounted:Lt(t).isMounted&&Lt(t).currentVehicle===_.id}]),onClick:m=>l(_.id)},[pt("span",rT,Qt(_.emoji),1),pt("div",oT,[pt("span",aT,Qt(_.name),1),pt("span",lT,Qt(a(_.id)),1)]),Lt(t).isMounted&&Lt(t).currentVehicle===_.id?(ge(),ye("span",cT," Riding ")):Lt(t).ownedVehicles.includes(_.id)?(ge(),ye("span",uT,Qt(Lt(t).currentVehicle===_.id?"✓ Selected":"Owned"),1)):(ge(),ye("button",{key:2,class:"buy-btn",disabled:Lt(t).coins<_.price,onClick:I_(m=>h(_.id),["stop"])}," ₹"+Qt(_.price),9,hT))],10,sT))),128))]),Lt(t).nearGarage?(ge(),ye("div",fT,[g[8]||(g[8]=qs(" Press ",-1)),g[9]||(g[9]=pt("kbd",null,"E",-1)),qs(" to "+Qt(Lt(t).isMounted?"dismount":"mount"),1)])):Tn("",!0)],2),e.value?(ge(),ye("div",dT,[g[10]||(g[10]=ep('<div class="ctrl-row" data-v-ccea40f8><kbd data-v-ccea40f8>W A S D</kbd><span data-v-ccea40f8>Move</span></div><div class="ctrl-row" data-v-ccea40f8><kbd data-v-ccea40f8>SHIFT</kbd><span data-v-ccea40f8>Sprint</span></div><div class="ctrl-row" data-v-ccea40f8><kbd data-v-ccea40f8>SPACE</kbd><span data-v-ccea40f8>Jump</span></div><div class="ctrl-row" data-v-ccea40f8><kbd data-v-ccea40f8>E</kbd><span data-v-ccea40f8>Interact</span></div>',4)),pt("button",{class:"dismiss-btn",onClick:g[0]||(g[0]=_=>e.value=!1)},"Got it!")])):Tn("",!0),Le(Lr,{name:"outcome-pop"},{default:$s(()=>[Lt(t).deliveryOutcome?(ge(),ye("div",{key:0,class:li(["outcome-overlay",Lt(t).deliveryOutcome.type])},[Lt(t).deliveryOutcome.type==="success"?(ge(),ye(rn,{key:0},[g[12]||(g[12]=pt("div",{class:"outcome-icon"},"🎉",-1)),g[13]||(g[13]=pt("div",{class:"outcome-title"},"DELIVERED!",-1)),pt("div",pT,"+₹"+Qt(Lt(t).deliveryOutcome.reward),1),pt("div",mT,[pt("span",null,"🪙 ₹"+Qt(Lt(t).deliveryOutcome.totalCoins)+" total",1),g[11]||(g[11]=pt("span",null,"·",-1)),pt("span",null,"📦 "+Qt(Lt(t).deliveriesDone)+" "+Qt(Lt(t).deliveriesDone===1?"delivery":"deliveries"),1)]),Lt(t).deliveryOutcome.nextVehicleName&&Lt(t).deliveryOutcome.progressPct!==null?(ge(),ye(rn,{key:0},[pt("div",gT,[pt("span",null,Qt(Lt(t).deliveryOutcome.nextVehicleEmoji)+" "+Qt(Lt(t).deliveryOutcome.nextVehicleName),1),Lt(t).deliveryOutcome.nextVehicleNeeded>0?(ge(),ye("span",_T," ₹"+Qt(Lt(t).deliveryOutcome.nextVehicleNeeded)+" more ",1)):(ge(),ye("span",vT,"Unlocked!"))]),pt("div",xT,[pt("div",{class:"outcome-progress-fill",style:Fi({width:Lt(t).deliveryOutcome.progressPct*100+"%"})},null,4)])],64)):(ge(),ye("div",MT,"🏆 All vehicles unlocked!"))],64)):(ge(),ye(rn,{key:1},[g[14]||(g[14]=pt("div",{class:"outcome-icon"},"⏰",-1)),g[15]||(g[15]=pt("div",{class:"outcome-title"},"TIME'S UP!",-1)),g[16]||(g[16]=pt("div",{class:"outcome-fail-msg"},"The delivery was cancelled.",-1)),g[17]||(g[17]=pt("div",{class:"outcome-fail-sub"},"Find a POI and try again!",-1))],64))],2)):Tn("",!0)]),_:1}),pt("div",yT,[pt("div",ST," 📦 "+Qt(Lt(t).deliveriesDone)+" deliveries ",1),pt("button",{class:"export-btn",onClick:f,title:"Export world JSON"}," 💾 Export World ")])]))}}),bT=Zc(ET,[["__scopeId","data-v-ccea40f8"]]),wT={class:"poi-banner-emoji"},TT={class:"poi-banner-text"},AT={class:"poi-banner-name"},RT=Ea({__name:"MinimapCanvas",props:{nearPOI:{},visible:{type:Boolean}},setup(n,{expose:t}){const e=n,i=Pe(),s=An(()=>e.nearPOI?`#${e.nearPOI.color.toString(16).padStart(6,"0")}`:"transparent");return t({canvasRef:i}),(r,o)=>(ge(),ye("div",{class:li(["minimap-wrapper",{hidden:!n.visible}])},[o[1]||(o[1]=pt("div",{class:"minimap-label"},"MAP",-1)),pt("canvas",{ref_key:"canvasRef",ref:i,class:"minimap-canvas"},null,512),Le(Lr,{name:"poi-fade"},{default:$s(()=>[n.nearPOI?(ge(),ye("div",{key:0,class:"poi-banner",style:Fi({borderColor:s.value})},[pt("span",wT,Qt(n.nearPOI.emoji),1),pt("div",TT,[pt("div",AT,Qt(n.nearPOI.name),1),o[0]||(o[0]=pt("div",{class:"poi-banner-hint"},"Press E to interact",-1))])],4)):Tn("",!0)]),_:1})],2))}}),CT=Zc(RT,[["__scopeId","data-v-31f1bbd2"]]),PT={id:"app-root"},LT=Ea({__name:"App",setup(n){const t=Bc(),e=Pe(),i=Pe(),s=Pe(null);let r=null;return er(()=>t.gameState,o=>{o==="playing"&&r&&r.connectMultiplayer(t.playerName)}),er(()=>t.currentVehicle,o=>{r==null||r.setVehicle(o)}),Ic(()=>{requestAnimationFrame(()=>{var a;if(!e.value)return;const o=(a=i.value)==null?void 0:a.canvasRef;o&&(r=new Cw(e.value,o),r.start(),r.onTimeUpdate=l=>{t.timeOfDay=l},r.onNearPOI=l=>{s.value=l},r.onMissionStart=l=>{t.setHudMission(l)},r.onMissionUpdate=l=>{t.updateMissionTimer(l)},r.onMissionComplete=l=>{t.completeDelivery(l)},r.onMissionFail=()=>{t.failDelivery()},r.onInteractionHint=l=>{t.setInteractionHint(l)},r.onVehicleMounted=l=>{t.setMounted(l)},r.onNearGarage=l=>{t.setNearGarage(l)},r.setVehicle(t.currentVehicle))})}),Dc(()=>r==null?void 0:r.stop()),(o,a)=>(ge(),ye("div",PT,[pt("canvas",{ref_key:"canvasRef",ref:e,class:"game-canvas"},null,512),Le(CT,{ref_key:"minimapRef",ref:i,"near-p-o-i":s.value,visible:Lt(t).gameState==="playing"},null,8,["near-p-o-i","visible"]),Lt(t).gameState==="menu"?(ge(),ic(Nw,{key:0})):Tn("",!0),Lt(t).gameState==="playing"?(ge(),ic(bT,{key:1})):Tn("",!0)]))}}),Jp=F_(LT);Jp.use(H_());Jp.mount("#app");
