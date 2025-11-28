var Ao=Object.defineProperty;var Io=(s,i,e)=>i in s?Ao(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e;var Y=(s,i,e)=>(Io(s,typeof i!="symbol"?i+"":i,e),e),Fi=(s,i,e)=>{if(!i.has(s))throw TypeError("Cannot "+e)};var v=(s,i,e)=>(Fi(s,i,"read from private field"),e?e.call(s):i.get(s)),L=(s,i,e)=>{if(i.has(s))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(s):i.set(s,e)},he=(s,i,e,t)=>(Fi(s,i,"write to private field"),t?t.call(s,e):i.set(s,e),e);var X=(s,i,e)=>(Fi(s,i,"access private method"),e);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oi=globalThis,Sr=oi.ShadowRoot&&(oi.ShadyCSS===void 0||oi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dr=Symbol(),os=new WeakMap;let rn=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==Dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(Sr&&i===void 0){const t=e!==void 0&&e.length===1;t&&(i=os.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&os.set(e,i))}return i}toString(){return this.cssText}};const ko=s=>new rn(typeof s=="string"?s:s+"",void 0,Dr),B=(s,...i)=>{const e=s.length===1?s[0]:i.reduce((t,r,n)=>t+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new rn(e,s,Dr)},sn=(s,i)=>{if(Sr)s.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of i){const t=document.createElement("style"),r=oi.litNonce;r!==void 0&&t.setAttribute("nonce",r),t.textContent=e.cssText,s.appendChild(t)}},as=Sr?s=>s:s=>s instanceof CSSStyleSheet?(i=>{let e="";for(const t of i.cssRules)e+=t.cssText;return ko(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Po,defineProperty:Oo,getOwnPropertyDescriptor:Mo,getOwnPropertyNames:Ro,getOwnPropertySymbols:$o,getPrototypeOf:Lo}=Object,Ie=globalThis,ls=Ie.trustedTypes,Fo=ls?ls.emptyScript:"",zi=Ie.reactiveElementPolyfillSupport,Rt=(s,i)=>s,or={toAttribute(s,i){switch(i){case Boolean:s=s?Fo:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,i){let e=s;switch(i){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ar=(s,i)=>!Po(s,i),ds={attribute:!0,type:String,converter:or,reflect:!1,useDefault:!1,hasChanged:Ar};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ie.litPropertyMetadata??(Ie.litPropertyMetadata=new WeakMap);let et=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=ds){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){const t=Symbol(),r=this.getPropertyDescriptor(i,t,e);r!==void 0&&Oo(this.prototype,i,r)}}static getPropertyDescriptor(i,e,t){const{get:r,set:n}=Mo(this.prototype,i)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const a=r==null?void 0:r.call(this);n==null||n.call(this,o),this.requestUpdate(i,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??ds}static _$Ei(){if(this.hasOwnProperty(Rt("elementProperties")))return;const i=Lo(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(Rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rt("properties"))){const e=this.properties,t=[...Ro(e),...$o(e)];for(const r of t)this.createProperty(r,e[r])}const i=this[Symbol.metadata];if(i!==null){const e=litPropertyMetadata.get(i);if(e!==void 0)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const e=[];if(Array.isArray(i)){const t=new Set(i.flat(1/0).reverse());for(const r of t)e.unshift(as(r))}else i!==void 0&&e.push(as(i));return e}static _$Eu(i,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(e=>e(this))}addController(i){var e;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((e=i.hostConnected)==null||e.call(i))}removeController(i){var e;(e=this._$EO)==null||e.delete(i)}_$E_(){const i=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sn(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(e=>{var t;return(t=e.hostConnected)==null?void 0:t.call(e)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(e=>{var t;return(t=e.hostDisconnected)==null?void 0:t.call(e)})}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){var n;const t=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,t);if(r!==void 0&&t.reflect===!0){const o=(((n=t.converter)==null?void 0:n.toAttribute)!==void 0?t.converter:or).toAttribute(e,t.type);this._$Em=i,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(i,e){var n,o;const t=this.constructor,r=t._$Eh.get(i);if(r!==void 0&&this._$Em!==r){const a=t.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:or;this._$Em=r;const d=l.fromAttribute(e,a.type);this[r]=d??((o=this._$Ej)==null?void 0:o.get(r))??d,this._$Em=null}}requestUpdate(i,e,t){var r;if(i!==void 0){const n=this.constructor,o=this[i];if(t??(t=n.getPropertyOptions(i)),!((t.hasChanged??Ar)(o,e)||t.useDefault&&t.reflect&&o===((r=this._$Ej)==null?void 0:r.get(i))&&!this.hasAttribute(n._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:r,wrapped:n},o){t&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,o??e??this[i]),n!==!0||o!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),r===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,o]of r){const{wrapped:a}=o,l=this[n];a!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$EM()}catch(r){throw i=!1,this._$EM(),r}i&&this._$AE(e)}willUpdate(i){}_$AE(i){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostUpdated)==null?void 0:r.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(i){}firstUpdated(i){}};et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[Rt("elementProperties")]=new Map,et[Rt("finalized")]=new Map,zi==null||zi({ReactiveElement:et}),(Ie.reactiveElementVersions??(Ie.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=globalThis,ci=$t.trustedTypes,hs=ci?ci.createPolicy("lit-html",{createHTML:s=>s}):void 0,nn="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,on="?"+Se,zo=`<${on}>`,Ye=document,Ft=()=>Ye.createComment(""),zt=s=>s===null||typeof s!="object"&&typeof s!="function",Ir=Array.isArray,No=s=>Ir(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Ni=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,us=/>/g,Re=RegExp(`>|${Ni}(?:([^\\s"'>=/]+)(${Ni}*=${Ni}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fs=/'/g,_s=/"/g,an=/^(?:script|style|textarea|title)$/i,Ho=s=>(i,...e)=>({_$litType$:s,strings:i,values:e}),E=Ho(1),ut=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),ps=new WeakMap,ze=Ye.createTreeWalker(Ye,129);function ln(s,i){if(!Ir(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return hs!==void 0?hs.createHTML(i):i}const Bo=(s,i)=>{const e=s.length-1,t=[];let r,n=i===2?"<svg>":i===3?"<math>":"",o=xt;for(let a=0;a<e;a++){const l=s[a];let d,h,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===xt?h[1]==="!--"?o=cs:h[1]!==void 0?o=us:h[2]!==void 0?(an.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=Re):h[3]!==void 0&&(o=Re):o===Re?h[0]===">"?(o=r??xt,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?Re:h[3]==='"'?_s:fs):o===_s||o===fs?o=Re:o===cs||o===us?o=xt:(o=Re,r=void 0);const f=o===Re&&s[a+1].startsWith("/>")?" ":"";n+=o===xt?l+zo:c>=0?(t.push(d),l.slice(0,c)+nn+l.slice(c)+Se+f):l+Se+(c===-2?a:f)}return[ln(s,n+(s[e]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),t]};class Nt{constructor({strings:i,_$litType$:e},t){let r;this.parts=[];let n=0,o=0;const a=i.length-1,l=this.parts,[d,h]=Bo(i,e);if(this.el=Nt.createElement(d,t),ze.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=ze.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(nn)){const u=h[o++],f=r.getAttribute(c).split(Se),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?Wo:g[1]==="?"?Uo:g[1]==="@"?qo:Di}),r.removeAttribute(c)}else c.startsWith(Se)&&(l.push({type:6,index:n}),r.removeAttribute(c));if(an.test(r.tagName)){const c=r.textContent.split(Se),u=c.length-1;if(u>0){r.textContent=ci?ci.emptyScript:"";for(let f=0;f<u;f++)r.append(c[f],Ft()),ze.nextNode(),l.push({type:2,index:++n});r.append(c[u],Ft())}}}else if(r.nodeType===8)if(r.data===on)l.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(Se,c+1))!==-1;)l.push({type:7,index:n}),c+=Se.length-1}n++}}static createElement(i,e){const t=Ye.createElement("template");return t.innerHTML=i,t}}function ft(s,i,e=s,t){var o,a;if(i===ut)return i;let r=t!==void 0?(o=e._$Co)==null?void 0:o[t]:e._$Cl;const n=zt(i)?void 0:i._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,t)),t!==void 0?(e._$Co??(e._$Co=[]))[t]=r:e._$Cl=r),r!==void 0&&(i=ft(s,r._$AS(s,i.values),r,t)),i}class Vo{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:e},parts:t}=this._$AD,r=((i==null?void 0:i.creationScope)??Ye).importNode(e,!0);ze.currentNode=r;let n=ze.nextNode(),o=0,a=0,l=t[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new jt(n,n.nextSibling,this,i):l.type===1?d=new l.ctor(n,l.name,l.strings,this,i):l.type===6&&(d=new jo(n,this,i)),this._$AV.push(d),l=t[++a]}o!==(l==null?void 0:l.index)&&(n=ze.nextNode(),o++)}return ze.currentNode=Ye,r}p(i){let e=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}}class jt{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,e,t,r){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=ft(this,i,e),zt(i)?i===R||i==null||i===""?(this._$AH!==R&&this._$AR(),this._$AH=R):i!==this._$AH&&i!==ut&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):No(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==R&&zt(this._$AH)?this._$AA.nextSibling.data=i:this.T(Ye.createTextNode(i)),this._$AH=i}$(i){var n;const{values:e,_$litType$:t}=i,r=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=Nt.createElement(ln(t.h,t.h[0]),this.options)),t);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const o=new Vo(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(i){let e=ps.get(i.strings);return e===void 0&&ps.set(i.strings,e=new Nt(i)),e}k(i){Ir(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,r=0;for(const n of i)r===e.length?e.push(t=new jt(this.O(Ft()),this.O(Ft()),this,this.options)):t=e[r],t._$AI(n),r++;r<e.length&&(this._$AR(t&&t._$AB.nextSibling,r),e.length=r)}_$AR(i=this._$AA.nextSibling,e){var t;for((t=this._$AP)==null?void 0:t.call(this,!1,!0,e);i!==this._$AB;){const r=i.nextSibling;i.remove(),i=r}}setConnected(i){var e;this._$AM===void 0&&(this._$Cv=i,(e=this._$AP)==null||e.call(this,i))}}class Di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,t,r,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=i,this.name=e,this._$AM=r,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=R}_$AI(i,e=this,t,r){const n=this.strings;let o=!1;if(n===void 0)i=ft(this,i,e,0),o=!zt(i)||i!==this._$AH&&i!==ut,o&&(this._$AH=i);else{const a=i;let l,d;for(i=n[0],l=0;l<n.length-1;l++)d=ft(this,a[t+l],e,l),d===ut&&(d=this._$AH[l]),o||(o=!zt(d)||d!==this._$AH[l]),d===R?i=R:i!==R&&(i+=(d??"")+n[l+1]),this._$AH[l]=d}o&&!r&&this.j(i)}j(i){i===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class Wo extends Di{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===R?void 0:i}}class Uo extends Di{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==R)}}class qo extends Di{constructor(i,e,t,r,n){super(i,e,t,r,n),this.type=5}_$AI(i,e=this){if((i=ft(this,i,e,0)??R)===ut)return;const t=this._$AH,r=i===R&&t!==R||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,n=i!==R&&(t===R||r);r&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,i):this._$AH.handleEvent(i)}}class jo{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){ft(this,i)}}const Hi=$t.litHtmlPolyfillSupport;Hi==null||Hi(Nt,jt),($t.litHtmlVersions??($t.litHtmlVersions=[])).push("3.3.1");const kr=(s,i,e)=>{const t=(e==null?void 0:e.renderBefore)??i;let r=t._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;t._$litPart$=r=new jt(i.insertBefore(Ft(),n),n,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=globalThis;let H=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const i=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=i.firstChild),i}update(i){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=kr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return ut}};var en;H._$litElement$=!0,H.finalized=!0,(en=qe.litElementHydrateSupport)==null||en.call(qe,{LitElement:H});const Bi=qe.litElementPolyfillSupport;Bi==null||Bi({LitElement:H});(qe.litElementVersions??(qe.litElementVersions=[])).push("4.2.1");function we(s){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},we(s)}function M(s,i){if(i.length<s)throw new TypeError(s+" argument"+(s>1?"s":"")+" required, but only "+i.length+" present")}function W(s){M(1,arguments);var i=Object.prototype.toString.call(s);return s instanceof Date||we(s)==="object"&&i==="[object Date]"?new Date(s.getTime()):typeof s=="number"||i==="[object Number]"?new Date(s):((typeof s=="string"||i==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Yo(s){M(1,arguments);var i=W(s);return i.setHours(0,0,0,0),i}function ar(){return Yo(Date.now())}function K(s){if(s===null||s===!0||s===!1)return NaN;var i=Number(s);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}function Go(s,i){M(2,arguments);var e=W(s),t=K(i);return isNaN(t)?new Date(NaN):(t&&e.setDate(e.getDate()+t),e)}function gs(s,i){M(2,arguments);var e=K(i);return Go(s,-e)}function Ko(s){return M(1,arguments),s instanceof Date||we(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}function Qo(s){if(M(1,arguments),!Ko(s)&&typeof s!="number")return!1;var i=W(s);return!isNaN(Number(i))}function Xo(s,i){M(2,arguments);var e=W(s).getTime(),t=K(i);return new Date(e+t)}function dn(s,i){M(2,arguments);var e=K(i);return Xo(s,-e)}var Zo=864e5;function Jo(s){M(1,arguments);var i=W(s),e=i.getTime();i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0);var t=i.getTime(),r=e-t;return Math.floor(r/Zo)+1}function _t(s){M(1,arguments);var i=1,e=W(s),t=e.getUTCDay(),r=(t<i?7:0)+t-i;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function hn(s){M(1,arguments);var i=W(s),e=i.getUTCFullYear(),t=new Date(0);t.setUTCFullYear(e+1,0,4),t.setUTCHours(0,0,0,0);var r=_t(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var o=_t(n);return i.getTime()>=r.getTime()?e+1:i.getTime()>=o.getTime()?e:e-1}function ea(s){M(1,arguments);var i=hn(s),e=new Date(0);e.setUTCFullYear(i,0,4),e.setUTCHours(0,0,0,0);var t=_t(e);return t}var ta=6048e5;function cn(s){M(1,arguments);var i=W(s),e=_t(i).getTime()-ea(i).getTime();return Math.round(e/ta)+1}var ia={};function vt(){return ia}function Ge(s,i){var e,t,r,n,o,a,l,d;M(1,arguments);var h=vt(),c=K((e=(t=(r=(n=i==null?void 0:i.weekStartsOn)!==null&&n!==void 0?n:i==null||(o=i.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&r!==void 0?r:h.weekStartsOn)!==null&&t!==void 0?t:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=W(s),f=u.getUTCDay(),g=(f<c?7:0)+f-c;return u.setUTCDate(u.getUTCDate()-g),u.setUTCHours(0,0,0,0),u}function Pr(s,i){var e,t,r,n,o,a,l,d;M(1,arguments);var h=W(s),c=h.getUTCFullYear(),u=vt(),f=K((e=(t=(r=(n=i==null?void 0:i.firstWeekContainsDate)!==null&&n!==void 0?n:i==null||(o=i.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&r!==void 0?r:u.firstWeekContainsDate)!==null&&t!==void 0?t:(l=u.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,f),g.setUTCHours(0,0,0,0);var C=Ge(g,i),P=new Date(0);P.setUTCFullYear(c,0,f),P.setUTCHours(0,0,0,0);var N=Ge(P,i);return h.getTime()>=C.getTime()?c+1:h.getTime()>=N.getTime()?c:c-1}function ra(s,i){var e,t,r,n,o,a,l,d;M(1,arguments);var h=vt(),c=K((e=(t=(r=(n=i==null?void 0:i.firstWeekContainsDate)!==null&&n!==void 0?n:i==null||(o=i.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&r!==void 0?r:h.firstWeekContainsDate)!==null&&t!==void 0?t:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),u=Pr(s,i),f=new Date(0);f.setUTCFullYear(u,0,c),f.setUTCHours(0,0,0,0);var g=Ge(f,i);return g}var sa=6048e5;function un(s,i){M(1,arguments);var e=W(s),t=Ge(e,i).getTime()-ra(e,i).getTime();return Math.round(t/sa)+1}function S(s,i){for(var e=s<0?"-":"",t=Math.abs(s).toString();t.length<i;)t="0"+t;return e+t}var na={y:function(i,e){var t=i.getUTCFullYear(),r=t>0?t:1-t;return S(e==="yy"?r%100:r,e.length)},M:function(i,e){var t=i.getUTCMonth();return e==="M"?String(t+1):S(t+1,2)},d:function(i,e){return S(i.getUTCDate(),e.length)},a:function(i,e){var t=i.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(i,e){return S(i.getUTCHours()%12||12,e.length)},H:function(i,e){return S(i.getUTCHours(),e.length)},m:function(i,e){return S(i.getUTCMinutes(),e.length)},s:function(i,e){return S(i.getUTCSeconds(),e.length)},S:function(i,e){var t=e.length,r=i.getUTCMilliseconds(),n=Math.floor(r*Math.pow(10,t-3));return S(n,e.length)}};const Ee=na;var Qe={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},oa={G:function(i,e,t){var r=i.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(i,e,t){if(e==="yo"){var r=i.getUTCFullYear(),n=r>0?r:1-r;return t.ordinalNumber(n,{unit:"year"})}return Ee.y(i,e)},Y:function(i,e,t,r){var n=Pr(i,r),o=n>0?n:1-n;if(e==="YY"){var a=o%100;return S(a,2)}return e==="Yo"?t.ordinalNumber(o,{unit:"year"}):S(o,e.length)},R:function(i,e){var t=hn(i);return S(t,e.length)},u:function(i,e){var t=i.getUTCFullYear();return S(t,e.length)},Q:function(i,e,t){var r=Math.ceil((i.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(i,e,t){var r=Math.ceil((i.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return S(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(i,e,t){var r=i.getUTCMonth();switch(e){case"M":case"MM":return Ee.M(i,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(i,e,t){var r=i.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(i,e,t,r){var n=un(i,r);return e==="wo"?t.ordinalNumber(n,{unit:"week"}):S(n,e.length)},I:function(i,e,t){var r=cn(i);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):S(r,e.length)},d:function(i,e,t){return e==="do"?t.ordinalNumber(i.getUTCDate(),{unit:"date"}):Ee.d(i,e)},D:function(i,e,t){var r=Jo(i);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):S(r,e.length)},E:function(i,e,t){var r=i.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(i,e,t,r){var n=i.getUTCDay(),o=(n-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return S(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(n,{width:"short",context:"formatting"});case"eeee":default:return t.day(n,{width:"wide",context:"formatting"})}},c:function(i,e,t,r){var n=i.getUTCDay(),o=(n-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return S(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(n,{width:"narrow",context:"standalone"});case"cccccc":return t.day(n,{width:"short",context:"standalone"});case"cccc":default:return t.day(n,{width:"wide",context:"standalone"})}},i:function(i,e,t){var r=i.getUTCDay(),n=r===0?7:r;switch(e){case"i":return String(n);case"ii":return S(n,e.length);case"io":return t.ordinalNumber(n,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(i,e,t){var r=i.getUTCHours(),n=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(i,e,t){var r=i.getUTCHours(),n;switch(r===12?n=Qe.noon:r===0?n=Qe.midnight:n=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(i,e,t){var r=i.getUTCHours(),n;switch(r>=17?n=Qe.evening:r>=12?n=Qe.afternoon:r>=4?n=Qe.morning:n=Qe.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(i,e,t){if(e==="ho"){var r=i.getUTCHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Ee.h(i,e)},H:function(i,e,t){return e==="Ho"?t.ordinalNumber(i.getUTCHours(),{unit:"hour"}):Ee.H(i,e)},K:function(i,e,t){var r=i.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},k:function(i,e,t){var r=i.getUTCHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},m:function(i,e,t){return e==="mo"?t.ordinalNumber(i.getUTCMinutes(),{unit:"minute"}):Ee.m(i,e)},s:function(i,e,t){return e==="so"?t.ordinalNumber(i.getUTCSeconds(),{unit:"second"}):Ee.s(i,e)},S:function(i,e){return Ee.S(i,e)},X:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return ms(o);case"XXXX":case"XX":return Le(o);case"XXXXX":case"XXX":default:return Le(o,":")}},x:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();switch(e){case"x":return ms(o);case"xxxx":case"xx":return Le(o);case"xxxxx":case"xxx":default:return Le(o,":")}},O:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+vs(o,":");case"OOOO":default:return"GMT"+Le(o,":")}},z:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+vs(o,":");case"zzzz":default:return"GMT"+Le(o,":")}},t:function(i,e,t,r){var n=r._originalDate||i,o=Math.floor(n.getTime()/1e3);return S(o,e.length)},T:function(i,e,t,r){var n=r._originalDate||i,o=n.getTime();return S(o,e.length)}};function vs(s,i){var e=s>0?"-":"+",t=Math.abs(s),r=Math.floor(t/60),n=t%60;if(n===0)return e+String(r);var o=i||"";return e+String(r)+o+S(n,2)}function ms(s,i){if(s%60===0){var e=s>0?"-":"+";return e+S(Math.abs(s)/60,2)}return Le(s,i)}function Le(s,i){var e=i||"",t=s>0?"-":"+",r=Math.abs(s),n=S(Math.floor(r/60),2),o=S(r%60,2);return t+n+e+o}const aa=oa;var bs=function(i,e){switch(i){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},fn=function(i,e){switch(i){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},la=function(i,e){var t=i.match(/(P+)(p+)?/)||[],r=t[1],n=t[2];if(!n)return bs(i,e);var o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",bs(r,e)).replace("{{time}}",fn(n,e))},da={p:fn,P:la};const lr=da;function _n(s){var i=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()));return i.setUTCFullYear(s.getFullYear()),s.getTime()-i.getTime()}var ha=["D","DD"],ca=["YY","YYYY"];function pn(s){return ha.indexOf(s)!==-1}function gn(s){return ca.indexOf(s)!==-1}function ui(s,i,e){if(s==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(i,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(i,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(i,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ua={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},fa=function(i,e,t){var r,n=ua[i];return typeof n=="string"?r=n:e===1?r=n.one:r=n.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};const _a=fa;function Vi(s){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=i.width?String(i.width):s.defaultWidth,t=s.formats[e]||s.formats[s.defaultWidth];return t}}var pa={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ga={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},va={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ma={date:Vi({formats:pa,defaultWidth:"full"}),time:Vi({formats:ga,defaultWidth:"full"}),dateTime:Vi({formats:va,defaultWidth:"full"})};const ba=ma;var ya={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},wa=function(i,e,t,r){return ya[i]};const Ca=wa;function Et(s){return function(i,e){var t=e!=null&&e.context?String(e.context):"standalone",r;if(t==="formatting"&&s.formattingValues){var n=s.defaultFormattingWidth||s.defaultWidth,o=e!=null&&e.width?String(e.width):n;r=s.formattingValues[o]||s.formattingValues[n]}else{var a=s.defaultWidth,l=e!=null&&e.width?String(e.width):s.defaultWidth;r=s.values[l]||s.values[a]}var d=s.argumentCallback?s.argumentCallback(i):i;return r[d]}}var xa={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ea={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ta={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Sa={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Da={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Aa={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ia=function(i,e){var t=Number(i),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},ka={ordinalNumber:Ia,era:Et({values:xa,defaultWidth:"wide"}),quarter:Et({values:Ea,defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:Et({values:Ta,defaultWidth:"wide"}),day:Et({values:Sa,defaultWidth:"wide"}),dayPeriod:Et({values:Da,defaultWidth:"wide",formattingValues:Aa,defaultFormattingWidth:"wide"})};const Pa=ka;function Tt(s){return function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.width,r=t&&s.matchPatterns[t]||s.matchPatterns[s.defaultMatchWidth],n=i.match(r);if(!n)return null;var o=n[0],a=t&&s.parsePatterns[t]||s.parsePatterns[s.defaultParseWidth],l=Array.isArray(a)?Ma(a,function(c){return c.test(o)}):Oa(a,function(c){return c.test(o)}),d;d=s.valueCallback?s.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var h=i.slice(o.length);return{value:d,rest:h}}}function Oa(s,i){for(var e in s)if(s.hasOwnProperty(e)&&i(s[e]))return e}function Ma(s,i){for(var e=0;e<s.length;e++)if(i(s[e]))return e}function Ra(s){return function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=i.match(s.matchPattern);if(!t)return null;var r=t[0],n=i.match(s.parsePattern);if(!n)return null;var o=s.valueCallback?s.valueCallback(n[0]):n[0];o=e.valueCallback?e.valueCallback(o):o;var a=i.slice(r.length);return{value:o,rest:a}}}var $a=/^(\d+)(th|st|nd|rd)?/i,La=/\d+/i,Fa={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},za={any:[/^b/i,/^(a|c)/i]},Na={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ha={any:[/1/i,/2/i,/3/i,/4/i]},Ba={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Va={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wa={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ua={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},qa={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ja={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ya={ordinalNumber:Ra({matchPattern:$a,parsePattern:La,valueCallback:function(i){return parseInt(i,10)}}),era:Tt({matchPatterns:Fa,defaultMatchWidth:"wide",parsePatterns:za,defaultParseWidth:"any"}),quarter:Tt({matchPatterns:Na,defaultMatchWidth:"wide",parsePatterns:Ha,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:Tt({matchPatterns:Ba,defaultMatchWidth:"wide",parsePatterns:Va,defaultParseWidth:"any"}),day:Tt({matchPatterns:Wa,defaultMatchWidth:"wide",parsePatterns:Ua,defaultParseWidth:"any"}),dayPeriod:Tt({matchPatterns:qa,defaultMatchWidth:"any",parsePatterns:ja,defaultParseWidth:"any"})};const Ga=Ya;var Ka={code:"en-US",formatDistance:_a,formatLong:ba,formatRelative:Ca,localize:Pa,match:Ga,options:{weekStartsOn:0,firstWeekContainsDate:1}};const vn=Ka;var Qa=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xa=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Za=/^'([^]*?)'?$/,Ja=/''/g,el=/[a-zA-Z]/;function ai(s,i,e){var t,r,n,o,a,l,d,h,c,u,f,g,C,P,N,q,Q,G;M(2,arguments);var D=String(i),I=vt(),ne=(t=(r=e==null?void 0:e.locale)!==null&&r!==void 0?r:I.locale)!==null&&t!==void 0?t:vn,_e=K((n=(o=(a=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(d=e.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&a!==void 0?a:I.firstWeekContainsDate)!==null&&o!==void 0?o:(c=I.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(_e>=1&&_e<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Ce=K((f=(g=(C=(P=e==null?void 0:e.weekStartsOn)!==null&&P!==void 0?P:e==null||(N=e.locale)===null||N===void 0||(q=N.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&C!==void 0?C:I.weekStartsOn)!==null&&g!==void 0?g:(Q=I.locale)===null||Q===void 0||(G=Q.options)===null||G===void 0?void 0:G.weekStartsOn)!==null&&f!==void 0?f:0);if(!(Ce>=0&&Ce<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!ne.localize)throw new RangeError("locale must contain localize property");if(!ne.formatLong)throw new RangeError("locale must contain formatLong property");var xe=W(s);if(!Qo(xe))throw new RangeError("Invalid time value");var bt=_n(xe),yt=dn(xe,bt),wt={firstWeekContainsDate:_e,weekStartsOn:Ce,locale:ne,_originalDate:xe},Ri=D.match(Xa).map(function(j){var ee=j[0];if(ee==="p"||ee==="P"){var Me=lr[ee];return Me(j,ne.formatLong)}return j}).join("").match(Qa).map(function(j){if(j==="''")return"'";var ee=j[0];if(ee==="'")return tl(j);var Me=aa[ee];if(Me)return!(e!=null&&e.useAdditionalWeekYearTokens)&&gn(j)&&ui(j,i,String(s)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&pn(j)&&ui(j,i,String(s)),Me(yt,j,ne.localize,wt);if(ee.match(el))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ee+"`");return j}).join("");return Ri}function tl(s){var i=s.match(Za);return i?i[1].replace(Ja,"'"):s}function ys(s,i){(i==null||i>s.length)&&(i=s.length);for(var e=0,t=new Array(i);e<i;e++)t[e]=s[e];return t}function il(s,i){if(s){if(typeof s=="string")return ys(s,i);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ys(s,i)}}function ws(s,i){var e=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!e){if(Array.isArray(s)||(e=il(s))||i&&s&&typeof s.length=="number"){e&&(s=e);var t=0,r=function(){};return{s:r,n:function(){return t>=s.length?{done:!0}:{done:!1,value:s[t++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,o=!1,a;return{s:function(){e=e.call(s)},n:function(){var d=e.next();return n=d.done,d},e:function(d){o=!0,a=d},f:function(){try{!n&&e.return!=null&&e.return()}finally{if(o)throw a}}}}function rl(s,i){if(s==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(s[e]=i[e]);return s}function p(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function dr(s,i){return dr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},dr(s,i)}function y(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(i&&i.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),i&&dr(s,i)}function fi(s){return fi=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},fi(s)}function sl(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function nl(s,i){if(i&&(we(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(s)}function w(s){var i=sl();return function(){var t=fi(s),r;if(i){var n=fi(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return nl(this,r)}}function m(s,i){if(!(s instanceof i))throw new TypeError("Cannot call a class as a function")}function ol(s,i){if(we(s)!=="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var t=e.call(s,i||"default");if(we(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(s)}function mn(s){var i=ol(s,"string");return we(i)==="symbol"?i:String(i)}function Cs(s,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,mn(t.key),t)}}function b(s,i,e){return i&&Cs(s.prototype,i),e&&Cs(s,e),Object.defineProperty(s,"prototype",{writable:!1}),s}function _(s,i,e){return i=mn(i),i in s?Object.defineProperty(s,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[i]=e,s}var al=10,bn=function(){function s(){m(this,s),_(this,"priority",void 0),_(this,"subPriority",0)}return b(s,[{key:"validate",value:function(e,t){return!0}}]),s}(),ll=function(s){y(e,s);var i=w(e);function e(t,r,n,o,a){var l;return m(this,e),l=i.call(this),l.value=t,l.validateValue=r,l.setValue=n,l.priority=o,a&&(l.subPriority=a),l}return b(e,[{key:"validate",value:function(r,n){return this.validateValue(r,this.value,n)}},{key:"set",value:function(r,n,o){return this.setValue(r,n,this.value,o)}}]),e}(bn),dl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",al),_(p(t),"subPriority",-1),t}return b(e,[{key:"set",value:function(r,n){if(n.timestampIsSet)return r;var o=new Date(0);return o.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),o.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),o}}]),e}(bn),T=function(){function s(){m(this,s),_(this,"incompatibleTokens",void 0),_(this,"priority",void 0),_(this,"subPriority",void 0)}return b(s,[{key:"run",value:function(e,t,r,n){var o=this.parse(e,t,r,n);return o?{setter:new ll(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(e,t,r){return!0}}]),s}(),hl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",140),_(p(t),"incompatibleTokens",["R","u","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"G":case"GG":case"GGG":return o.era(r,{width:"abbreviated"})||o.era(r,{width:"narrow"});case"GGGGG":return o.era(r,{width:"narrow"});case"GGGG":default:return o.era(r,{width:"wide"})||o.era(r,{width:"abbreviated"})||o.era(r,{width:"narrow"})}}},{key:"set",value:function(r,n,o){return n.era=o,r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r}}]),e}(T),cl=6e4,ul=36e5,fl=1e3,F={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},ue={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function z(s,i){return s&&{value:i(s.value),rest:s.rest}}function O(s,i){var e=i.match(s);return e?{value:parseInt(e[0],10),rest:i.slice(e[0].length)}:null}function fe(s,i){var e=i.match(s);if(!e)return null;if(e[0]==="Z")return{value:0,rest:i.slice(1)};var t=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,n=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:t*(r*ul+n*cl+o*fl),rest:i.slice(e[0].length)}}function yn(s){return O(F.anyDigitsSigned,s)}function $(s,i){switch(s){case 1:return O(F.singleDigit,i);case 2:return O(F.twoDigits,i);case 3:return O(F.threeDigits,i);case 4:return O(F.fourDigits,i);default:return O(new RegExp("^\\d{1,"+s+"}"),i)}}function _i(s,i){switch(s){case 1:return O(F.singleDigitSigned,i);case 2:return O(F.twoDigitsSigned,i);case 3:return O(F.threeDigitsSigned,i);case 4:return O(F.fourDigitsSigned,i);default:return O(new RegExp("^-?\\d{1,"+s+"}"),i)}}function Or(s){switch(s){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function wn(s,i){var e=i>0,t=e?i:1-i,r;if(t<=50)r=s||100;else{var n=t+50,o=Math.floor(n/100)*100,a=s>=n%100;r=s+o-(a?100:0)}return e?r:1-r}function Cn(s){return s%400===0||s%4===0&&s%100!==0}var _l=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return{year:d,isTwoDigitYear:n==="yy"}};switch(n){case"y":return z($(4,r),a);case"yo":return z(o.ordinalNumber(r,{unit:"year"}),a);default:return z($(n.length,r),a)}}},{key:"validate",value:function(r,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(r,n,o){var a=r.getUTCFullYear();if(o.isTwoDigitYear){var l=wn(o.year,a);return r.setUTCFullYear(l,0,1),r.setUTCHours(0,0,0,0),r}var d=!("era"in n)||n.era===1?o.year:1-o.year;return r.setUTCFullYear(d,0,1),r.setUTCHours(0,0,0,0),r}}]),e}(T),pl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return{year:d,isTwoDigitYear:n==="YY"}};switch(n){case"Y":return z($(4,r),a);case"Yo":return z(o.ordinalNumber(r,{unit:"year"}),a);default:return z($(n.length,r),a)}}},{key:"validate",value:function(r,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(r,n,o,a){var l=Pr(r,a);if(o.isTwoDigitYear){var d=wn(o.year,l);return r.setUTCFullYear(d,0,a.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Ge(r,a)}var h=!("era"in n)||n.era===1?o.year:1-o.year;return r.setUTCFullYear(h,0,a.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Ge(r,a)}}]),e}(T),gl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n){return _i(n==="R"?4:n.length,r)}},{key:"set",value:function(r,n,o){var a=new Date(0);return a.setUTCFullYear(o,0,4),a.setUTCHours(0,0,0,0),_t(a)}}]),e}(T),vl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n){return _i(n==="u"?4:n.length,r)}},{key:"set",value:function(r,n,o){return r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r}}]),e}(T),ml=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",120),_(p(t),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"Q":case"QQ":return $(n.length,r);case"Qo":return o.ordinalNumber(r,{unit:"quarter"});case"QQQ":return o.quarter(r,{width:"abbreviated",context:"formatting"})||o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(r,{width:"wide",context:"formatting"})||o.quarter(r,{width:"abbreviated",context:"formatting"})||o.quarter(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=1&&n<=4}},{key:"set",value:function(r,n,o){return r.setUTCMonth((o-1)*3,1),r.setUTCHours(0,0,0,0),r}}]),e}(T),bl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",120),_(p(t),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"q":case"qq":return $(n.length,r);case"qo":return o.ordinalNumber(r,{unit:"quarter"});case"qqq":return o.quarter(r,{width:"abbreviated",context:"standalone"})||o.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(r,{width:"wide",context:"standalone"})||o.quarter(r,{width:"abbreviated",context:"standalone"})||o.quarter(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,n){return n>=1&&n<=4}},{key:"set",value:function(r,n,o){return r.setUTCMonth((o-1)*3,1),r.setUTCHours(0,0,0,0),r}}]),e}(T),yl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),_(p(t),"priority",110),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return d-1};switch(n){case"M":return z(O(F.month,r),a);case"MM":return z($(2,r),a);case"Mo":return z(o.ordinalNumber(r,{unit:"month"}),a);case"MMM":return o.month(r,{width:"abbreviated",context:"formatting"})||o.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(r,{width:"wide",context:"formatting"})||o.month(r,{width:"abbreviated",context:"formatting"})||o.month(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=11}},{key:"set",value:function(r,n,o){return r.setUTCMonth(o,1),r.setUTCHours(0,0,0,0),r}}]),e}(T),wl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",110),_(p(t),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return d-1};switch(n){case"L":return z(O(F.month,r),a);case"LL":return z($(2,r),a);case"Lo":return z(o.ordinalNumber(r,{unit:"month"}),a);case"LLL":return o.month(r,{width:"abbreviated",context:"standalone"})||o.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(r,{width:"wide",context:"standalone"})||o.month(r,{width:"abbreviated",context:"standalone"})||o.month(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=11}},{key:"set",value:function(r,n,o){return r.setUTCMonth(o,1),r.setUTCHours(0,0,0,0),r}}]),e}(T);function Cl(s,i,e){M(2,arguments);var t=W(s),r=K(i),n=un(t,e)-r;return t.setUTCDate(t.getUTCDate()-n*7),t}var xl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",100),_(p(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"w":return O(F.week,r);case"wo":return o.ordinalNumber(r,{unit:"week"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=53}},{key:"set",value:function(r,n,o,a){return Ge(Cl(r,o,a),a)}}]),e}(T);function El(s,i){M(2,arguments);var e=W(s),t=K(i),r=cn(e)-t;return e.setUTCDate(e.getUTCDate()-r*7),e}var Tl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",100),_(p(t),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"I":return O(F.week,r);case"Io":return o.ordinalNumber(r,{unit:"week"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=53}},{key:"set",value:function(r,n,o){return _t(El(r,o))}}]),e}(T),Sl=[31,28,31,30,31,30,31,31,30,31,30,31],Dl=[31,29,31,30,31,30,31,31,30,31,30,31],Al=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"subPriority",1),_(p(t),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"d":return O(F.date,r);case"do":return o.ordinalNumber(r,{unit:"date"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){var o=r.getUTCFullYear(),a=Cn(o),l=r.getUTCMonth();return a?n>=1&&n<=Dl[l]:n>=1&&n<=Sl[l]}},{key:"set",value:function(r,n,o){return r.setUTCDate(o),r.setUTCHours(0,0,0,0),r}}]),e}(T),Il=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"subpriority",1),_(p(t),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"D":case"DD":return O(F.dayOfYear,r);case"Do":return o.ordinalNumber(r,{unit:"date"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){var o=r.getUTCFullYear(),a=Cn(o);return a?n>=1&&n<=366:n>=1&&n<=365}},{key:"set",value:function(r,n,o){return r.setUTCMonth(0,o),r.setUTCHours(0,0,0,0),r}}]),e}(T);function Mr(s,i,e){var t,r,n,o,a,l,d,h;M(2,arguments);var c=vt(),u=K((t=(r=(n=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(a=e.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:c.weekStartsOn)!==null&&r!==void 0?r:(d=c.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&t!==void 0?t:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=W(s),g=K(i),C=f.getUTCDay(),P=g%7,N=(P+7)%7,q=(N<u?7:0)+g-C;return f.setUTCDate(f.getUTCDate()+q),f}var kl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"E":case"EE":case"EEE":return o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=6}},{key:"set",value:function(r,n,o,a){return r=Mr(r,o,a),r.setUTCHours(0,0,0,0),r}}]),e}(T),Pl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o,a){var l=function(h){var c=Math.floor((h-1)/7)*7;return(h+a.weekStartsOn+6)%7+c};switch(n){case"e":case"ee":return z($(n.length,r),l);case"eo":return z(o.ordinalNumber(r,{unit:"day"}),l);case"eee":return o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"eeeee":return o.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=6}},{key:"set",value:function(r,n,o,a){return r=Mr(r,o,a),r.setUTCHours(0,0,0,0),r}}]),e}(T),Ol=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o,a){var l=function(h){var c=Math.floor((h-1)/7)*7;return(h+a.weekStartsOn+6)%7+c};switch(n){case"c":case"cc":return z($(n.length,r),l);case"co":return z(o.ordinalNumber(r,{unit:"day"}),l);case"ccc":return o.day(r,{width:"abbreviated",context:"standalone"})||o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"});case"ccccc":return o.day(r,{width:"narrow",context:"standalone"});case"cccccc":return o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(r,{width:"wide",context:"standalone"})||o.day(r,{width:"abbreviated",context:"standalone"})||o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=6}},{key:"set",value:function(r,n,o,a){return r=Mr(r,o,a),r.setUTCHours(0,0,0,0),r}}]),e}(T);function Ml(s,i){M(2,arguments);var e=K(i);e%7===0&&(e=e-7);var t=1,r=W(s),n=r.getUTCDay(),o=e%7,a=(o+7)%7,l=(a<t?7:0)+e-n;return r.setUTCDate(r.getUTCDate()+l),r}var Rl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return d===0?7:d};switch(n){case"i":case"ii":return $(n.length,r);case"io":return o.ordinalNumber(r,{unit:"day"});case"iii":return z(o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return z(o.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return z(o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return z(o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),a)}}},{key:"validate",value:function(r,n){return n>=1&&n<=7}},{key:"set",value:function(r,n,o){return r=Ml(r,o),r.setUTCHours(0,0,0,0),r}}]),e}(T),$l=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",80),_(p(t),"incompatibleTokens",["b","B","H","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"a":case"aa":case"aaa":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,n,o){return r.setUTCHours(Or(o),0,0,0),r}}]),e}(T),Ll=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",80),_(p(t),"incompatibleTokens",["a","B","H","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"b":case"bb":case"bbb":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,n,o){return r.setUTCHours(Or(o),0,0,0),r}}]),e}(T),Fl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",80),_(p(t),"incompatibleTokens",["a","b","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"B":case"BB":case"BBB":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,n,o){return r.setUTCHours(Or(o),0,0,0),r}}]),e}(T),zl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["H","K","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"h":return O(F.hour12h,r);case"ho":return o.ordinalNumber(r,{unit:"hour"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=12}},{key:"set",value:function(r,n,o){var a=r.getUTCHours()>=12;return a&&o<12?r.setUTCHours(o+12,0,0,0):!a&&o===12?r.setUTCHours(0,0,0,0):r.setUTCHours(o,0,0,0),r}}]),e}(T),Nl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["a","b","h","K","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"H":return O(F.hour23h,r);case"Ho":return o.ordinalNumber(r,{unit:"hour"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=23}},{key:"set",value:function(r,n,o){return r.setUTCHours(o,0,0,0),r}}]),e}(T),Hl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["h","H","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"K":return O(F.hour11h,r);case"Ko":return o.ordinalNumber(r,{unit:"hour"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=11}},{key:"set",value:function(r,n,o){var a=r.getUTCHours()>=12;return a&&o<12?r.setUTCHours(o+12,0,0,0):r.setUTCHours(o,0,0,0),r}}]),e}(T),Bl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["a","b","h","H","K","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"k":return O(F.hour24h,r);case"ko":return o.ordinalNumber(r,{unit:"hour"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=24}},{key:"set",value:function(r,n,o){var a=o<=24?o%24:o;return r.setUTCHours(a,0,0,0),r}}]),e}(T),Vl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",60),_(p(t),"incompatibleTokens",["t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"m":return O(F.minute,r);case"mo":return o.ordinalNumber(r,{unit:"minute"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=59}},{key:"set",value:function(r,n,o){return r.setUTCMinutes(o,0,0),r}}]),e}(T),Wl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",50),_(p(t),"incompatibleTokens",["t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"s":return O(F.second,r);case"so":return o.ordinalNumber(r,{unit:"second"});default:return $(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=59}},{key:"set",value:function(r,n,o){return r.setUTCSeconds(o,0),r}}]),e}(T),Ul=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",30),_(p(t),"incompatibleTokens",["t","T"]),t}return b(e,[{key:"parse",value:function(r,n){var o=function(l){return Math.floor(l*Math.pow(10,-n.length+3))};return z($(n.length,r),o)}},{key:"set",value:function(r,n,o){return r.setUTCMilliseconds(o),r}}]),e}(T),ql=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",10),_(p(t),"incompatibleTokens",["t","T","x"]),t}return b(e,[{key:"parse",value:function(r,n){switch(n){case"X":return fe(ue.basicOptionalMinutes,r);case"XX":return fe(ue.basic,r);case"XXXX":return fe(ue.basicOptionalSeconds,r);case"XXXXX":return fe(ue.extendedOptionalSeconds,r);case"XXX":default:return fe(ue.extended,r)}}},{key:"set",value:function(r,n,o){return n.timestampIsSet?r:new Date(r.getTime()-o)}}]),e}(T),jl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",10),_(p(t),"incompatibleTokens",["t","T","X"]),t}return b(e,[{key:"parse",value:function(r,n){switch(n){case"x":return fe(ue.basicOptionalMinutes,r);case"xx":return fe(ue.basic,r);case"xxxx":return fe(ue.basicOptionalSeconds,r);case"xxxxx":return fe(ue.extendedOptionalSeconds,r);case"xxx":default:return fe(ue.extended,r)}}},{key:"set",value:function(r,n,o){return n.timestampIsSet?r:new Date(r.getTime()-o)}}]),e}(T),Yl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",40),_(p(t),"incompatibleTokens","*"),t}return b(e,[{key:"parse",value:function(r){return yn(r)}},{key:"set",value:function(r,n,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),e}(T),Gl=function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",20),_(p(t),"incompatibleTokens","*"),t}return b(e,[{key:"parse",value:function(r){return yn(r)}},{key:"set",value:function(r,n,o){return[new Date(o),{timestampIsSet:!0}]}}]),e}(T),Kl={G:new hl,y:new _l,Y:new pl,R:new gl,u:new vl,Q:new ml,q:new bl,M:new yl,L:new wl,w:new xl,I:new Tl,d:new Al,D:new Il,E:new kl,e:new Pl,c:new Ol,i:new Rl,a:new $l,b:new Ll,B:new Fl,h:new zl,H:new Nl,K:new Hl,k:new Bl,m:new Vl,s:new Wl,S:new Ul,X:new ql,x:new jl,t:new Yl,T:new Gl},Ql=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Xl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Zl=/^'([^]*?)'?$/,Jl=/''/g,ed=/\S/,td=/[a-zA-Z]/;function id(s,i,e,t){var r,n,o,a,l,d,h,c,u,f,g,C,P,N,q,Q,G,D;M(3,arguments);var I=String(s),ne=String(i),_e=vt(),Ce=(r=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:_e.locale)!==null&&r!==void 0?r:vn;if(!Ce.match)throw new RangeError("locale must contain match property");var xe=K((o=(a=(l=(d=t==null?void 0:t.firstWeekContainsDate)!==null&&d!==void 0?d:t==null||(h=t.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&l!==void 0?l:_e.firstWeekContainsDate)!==null&&a!==void 0?a:(u=_e.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(xe>=1&&xe<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var bt=K((g=(C=(P=(N=t==null?void 0:t.weekStartsOn)!==null&&N!==void 0?N:t==null||(q=t.locale)===null||q===void 0||(Q=q.options)===null||Q===void 0?void 0:Q.weekStartsOn)!==null&&P!==void 0?P:_e.weekStartsOn)!==null&&C!==void 0?C:(G=_e.locale)===null||G===void 0||(D=G.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&g!==void 0?g:0);if(!(bt>=0&&bt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(ne==="")return I===""?W(e):new Date(NaN);var yt={firstWeekContainsDate:xe,weekStartsOn:bt,locale:Ce},wt=[new dl],Ri=ne.match(Xl).map(function(V){var k=V[0];if(k in lr){var oe=lr[k];return oe(V,Ce.formatLong)}return V}).join("").match(Ql),j=[],ee=ws(Ri),Me;try{var So=function(){var k=Me.value;!(t!=null&&t.useAdditionalWeekYearTokens)&&gn(k)&&ui(k,ne,s),!(t!=null&&t.useAdditionalDayOfYearTokens)&&pn(k)&&ui(k,ne,s);var oe=k[0],Xt=Kl[oe];if(Xt){var rs=Xt.incompatibleTokens;if(Array.isArray(rs)){var ss=j.find(function(ns){return rs.includes(ns.token)||ns.token===oe});if(ss)throw new RangeError("The format string mustn't contain `".concat(ss.fullToken,"` and `").concat(k,"` at the same time"))}else if(Xt.incompatibleTokens==="*"&&j.length>0)throw new RangeError("The format string mustn't contain `".concat(k,"` and any other token at the same time"));j.push({token:oe,fullToken:k});var Li=Xt.run(I,k,Ce.match,yt);if(!Li)return{v:new Date(NaN)};wt.push(Li.setter),I=Li.rest}else{if(oe.match(td))throw new RangeError("Format string contains an unescaped latin alphabet character `"+oe+"`");if(k==="''"?k="'":oe==="'"&&(k=rd(k)),I.indexOf(k)===0)I=I.slice(k.length);else return{v:new Date(NaN)}}};for(ee.s();!(Me=ee.n()).done;){var Jr=So();if(we(Jr)==="object")return Jr.v}}catch(V){ee.e(V)}finally{ee.f()}if(I.length>0&&ed.test(I))return new Date(NaN);var Do=wt.map(function(V){return V.priority}).sort(function(V,k){return k-V}).filter(function(V,k,oe){return oe.indexOf(V)===k}).map(function(V){return wt.filter(function(k){return k.priority===V}).sort(function(k,oe){return oe.subPriority-k.subPriority})}).map(function(V){return V[0]}),$i=W(e);if(isNaN($i.getTime()))return new Date(NaN);var Ct=dn($i,_n($i)),es={},Kt=ws(Do),ts;try{for(Kt.s();!(ts=Kt.n()).done;){var is=ts.value;if(!is.validate(Ct,yt))return new Date(NaN);var Qt=is.set(Ct,es,yt);Array.isArray(Qt)?(Ct=Qt[0],rl(es,Qt[1])):Ct=Qt}}catch(V){Kt.e(V)}finally{Kt.f()}return Ct}function rd(s){return s.match(Zl)[1].replace(Jl,"'")}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var tn;(tn=window.Vaadin).featureFlags||(tn.featureFlags={});function sd(s){return s.replace(/-[a-z]/gu,i=>i[1].toUpperCase())}const pe={};function U(s,i="25.0.0-beta5"){if(Object.defineProperty(s,"version",{get(){return i}}),s.experimental){const t=typeof s.experimental=="string"?s.experimental:`${sd(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[t]&&!pe[t]){pe[t]=new Set,pe[t].add(s),Object.defineProperty(window.Vaadin.featureFlags,t,{get(){return pe[t].size===0},set(r){r&&pe[t].size>0&&(pe[t].forEach(n=>{customElements.define(n.is,n)}),pe[t].clear())}});return}else if(pe[t]){pe[t].add(s);return}}const e=customElements.get(s.is);if(!e)customElements.define(s.is,s);else{const t=e.version;t&&s.version&&t===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${e.version} is already in use. Something will probably break.`)}}const nd=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,li=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function od(){function s(){return!0}return xn(s)}function ad(){try{return ld()?!0:dd()?li?!hd():!od():!1}catch{return!1}}function ld(){return localStorage.getItem("vaadin.developmentmode.force")}function dd(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function hd(){return!!(li&&Object.keys(li).map(i=>li[i]).filter(i=>i.productionMode).length>0)}function xn(s,i){if(typeof s!="function")return;const e=nd.exec(s.toString());if(e)try{s=new Function(e[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return s(i)}window.Vaadin=window.Vaadin||{};const xs=function(s,i){if(window.Vaadin.developmentMode)return xn(s,i)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ad());function cd(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const ud=function(){if(typeof xs=="function")return xs(cd)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let Es=0,En=0;const rt=[];let hr=!1;function fd(){hr=!1;const s=rt.length;for(let i=0;i<s;i++){const e=rt[i];if(e)try{e()}catch(t){setTimeout(()=>{throw t})}}rt.splice(0,s),En+=s}const ie={after(s){return{run(i){return window.setTimeout(i,s)},cancel(i){window.clearTimeout(i)}}},run(s,i){return window.setTimeout(s,i)},cancel(s){window.clearTimeout(s)}},Pe={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},Tn={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},le={run(s){hr||(hr=!0,queueMicrotask(()=>fd())),rt.push(s);const i=Es;return Es+=1,i},cancel(s){const i=s-En;if(i>=0){if(!rt[i])throw new Error(`invalid async handle: ${s}`);rt[i]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ht=new Set;class x{static debounce(i,e,t){return i instanceof x?i._cancelAsync():i=new x,i.setConfig(e,t),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,e){this._asyncModule=i,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Ht.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ht.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function Sn(s){Ht.add(s)}function _d(){const s=!!Ht.size;return Ht.forEach(i=>{try{i.flush()}catch(e){setTimeout(()=>{throw e})}}),s}const kt=()=>{let s;do s=_d();while(s)};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ge=[];function cr(s,i,e=s.getAttribute("dir")){i?s.setAttribute("dir",i):e!=null&&s.removeAttribute("dir")}function ur(){return document.documentElement.getAttribute("dir")}function pd(){const s=ur();ge.forEach(i=>{cr(i,s)})}const gd=new MutationObserver(pd);gd.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const mt=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),cr(this,ur(),null))}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e!=="dir")return;const n=ur(),o=r===n&&ge.indexOf(this)===-1,a=!r&&t&&ge.indexOf(this)===-1;o||a?(this.__subscribe(),cr(this,n,r)):r!==n&&t===n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=ge.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,r){r==="dir"&&t===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,t,r)}_attributeToProperty(e,t,r){e==="dir"&&!t?this.dir="":super._attributeToProperty(e,t,r)}__subscribe(){ge.includes(this)||ge.push(this)}__unsubscribe(){ge.includes(this)&&ge.splice(ge.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){ud()};let Wi;const Ts=new Set,Oe=s=>class extends mt(s){static finalize(){super.finalize();const{is:e}=this;if(e&&!Ts.has(e)){window.Vaadin.registrations.push(this),Ts.add(e);const t=window.Vaadin.developmentModeCallback;t&&(Wi=x.debounce(Wi,Tn,()=>{t["vaadin-usage-statistics"]()}),Sn(Wi))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}},Dn=new WeakMap;function vd(s,i){let e=i;for(;e;){if(Dn.get(e)===s)return!0;e=Object.getPrototypeOf(e)}return!1}function de(s){return i=>{if(vd(s,i))return i;const e=s(i);return Dn.set(e,s),e}}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function pi(s,i){return s.split(".").reduce((e,t)=>e?e[t]:void 0,i)}function md(s,i,e){const t=s.split("."),r=t.pop(),n=t.reduce((o,a)=>o[a],e);n[r]=i}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ui={},bd=/([A-Z])/gu;function Ss(s){return Ui[s]||(Ui[s]=s.replace(bd,"-$1").toLowerCase()),Ui[s]}function Ds(s){return s[0].toUpperCase()+s.substring(1)}function qi(s){const[i,e]=s.split("("),t=e.replace(")","").split(",").map(r=>r.trim());return{method:i,observerProps:t}}function ji(s,i){return Object.prototype.hasOwnProperty.call(s,i)||(s[i]=new Map(s[i])),s[i]}const yd=s=>{class i extends s{static createProperty(t,r){[String,Boolean,Number,Array].includes(r)&&(r={type:r}),r&&r.reflectToAttribute&&(r.reflect=!0),super.createProperty(t,r)}static getOrCreateMap(t){return ji(this,t)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const t=this.getOrCreateMap("__complexObservers");this.observers.forEach(r=>{const{method:n,observerProps:o}=qi(r);t.set(n,o)})}}static addCheckedInitializer(t){super.addInitializer(r=>{r instanceof this&&t(r)})}static getPropertyDescriptor(t,r,n){const o=super.getPropertyDescriptor(t,r,n);let a=o;if(this.getOrCreateMap("__propKeys").set(t,r),n.sync&&(a={get:o.get,set(l){const d=this[t];Ar(l,d)&&(this[r]=l,this.requestUpdate(t,d,n),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),n.readOnly){const l=a.set;this.addCheckedInitializer(d=>{d[`_set${Ds(t)}`]=function(h){l.call(d,h)}}),a={get:a.get,set(){},configurable:!0,enumerable:!0}}if("value"in n&&this.addCheckedInitializer(l=>{const d=typeof n.value=="function"?n.value.call(l):n.value;n.readOnly?l[`_set${Ds(t)}`](d):l[t]=d}),n.observer){const l=n.observer;this.getOrCreateMap("__observers").set(t,l),this.addCheckedInitializer(d=>{d[l]||console.warn(`observer method ${l} not defined`)})}if(n.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const l=this.__notifyProps;this.__notifyProps=new Set(l)}this.__notifyProps.add(t)}if(n.computed){const l=`__assignComputed${t}`,d=qi(n.computed);this.prototype[l]=function(...h){this[t]=this[d.method](...h)},this.getOrCreateMap("__computedObservers").set(l,d.observerProps)}return n.attribute||(n.attribute=Ss(t)),a}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:t}=this.constructor;!this.hasUpdated&&!t.asyncFirstRender&&this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(t=>{this.$[t.id]=t})}ready(){}willUpdate(t){this.constructor.__computedObservers&&this.__runComplexObservers(t,this.constructor.__computedObservers)}updated(t){const r=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(t,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(t,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(t,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(t,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(t,this.constructor.__notifyProps),r||this.ready()}setProperties(t){Object.entries(t).forEach(([r,n])=>{const o=this.constructor.__propKeys.get(r),a=this[o];this[o]=n,this.requestUpdate(r,a)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(t){const r=ji(this,"__dynamicMethodObservers"),{method:n,observerProps:o}=qi(t);r.set(n,o)}_createPropertyObserver(t,r){ji(this,"__dynamicPropertyObservers").set(r,t)}__runComplexObservers(t,r){r.forEach((n,o)=>{n.some(a=>t.has(a))&&(this[o]?this[o](...n.map(a=>this[a])):console.warn(`observer method ${o} not defined`))})}__runDynamicObservers(t,r){r.forEach((n,o)=>{t.has(n)&&this[o]&&this[o](this[n],t.get(n))})}__runObservers(t,r){t.forEach((n,o)=>{const a=r.get(o);a!==void 0&&this[a]&&this[a](this[o],n)})}__runNotifyProps(t,r){t.forEach((n,o)=>{r.has(o)&&this.dispatchEvent(new CustomEvent(`${Ss(o)}-changed`,{detail:{value:this[o]}}))})}_get(t,r){return pi(t,r)}_set(t,r,n){md(t,r,n)}}return Y(i,"enabledWarnings",[]),i},Z=de(yd);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function wd(s){const i=[];for(;s;){if(s.nodeType===Node.DOCUMENT_NODE){i.push(s);break}if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i.push(s),s=s.host;continue}if(s.assignedSlot){s=s.assignedSlot;continue}s=s.parentNode}return i}function An(s,i){return i?i.closest(s)||An(s,i.getRootNode().host):null}function Rr(s){return s?new Set(s.split(" ")):new Set}function Ai(s){return s?[...s].join(" "):""}function $r(s,i,e){const t=Rr(s.getAttribute(i));t.add(e),s.setAttribute(i,Ai(t))}function In(s,i,e){const t=Rr(s.getAttribute(i));if(t.delete(e),t.size===0){s.removeAttribute(i);return}s.setAttribute(i,Ai(t))}function Cd(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ii{constructor(i,e){this.slot=i,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let e=[];const t=[],r=[];i.length&&(e=i.filter(n=>!this._storedNodes.includes(n))),this._storedNodes.length&&this._storedNodes.forEach((n,o)=>{const a=i.indexOf(n);a===-1?t.push(n):a!==o&&r.push(n)}),(e.length||t.length||r.length)&&this.callback({addedNodes:e,currentNodes:i,movedNodes:r,removedNodes:t}),this._storedNodes=i}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let xd=0;function ki(){return xd++}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ye extends EventTarget{static generateId(i,e="default"){return`${e}-${i.localName}-${ki()}`}constructor(i,e,t,r={}){super();const{initializer:n,multiple:o,observe:a,useUniqueId:l,uniqueIdPrefix:d}=r;this.host=i,this.slotName=e,this.tagName=t,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof o=="boolean"?o:!1,this.slotInitializer=n,o&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(i,d||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=i,i.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:i,slotName:e,tagName:t}=this;let r=this.defaultNode;return!r&&t&&(r=document.createElement(t),r instanceof Element&&(e!==""&&r.setAttribute("slot",e),this.defaultNode=r)),r&&(this.node=r,i.appendChild(r)),r}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.hasAttribute("data-slot-ignore")?!1:e.nodeType===Node.ELEMENT_NODE&&e.slot===i||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:e}=this;e&&e(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,e=i===""?"slot:not([name])":`slot[name=${i}]`,t=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Ii(t,({addedNodes:r,removedNodes:n})=>{const o=this.multiple?this.nodes:[this.node],a=r.filter(l=>!Cd(l)&&!o.includes(l)&&!(l.nodeType===Node.ELEMENT_NODE&&l.hasAttribute("data-slot-ignore")));n.length&&(this.nodes=o.filter(l=>!n.includes(l)),n.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Pi extends ye{constructor(i){super(i,"tooltip"),this.setTarget(i),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(i),i.addEventListener("content-changed",this.__onContentChange)}teardownNode(i){this.manual||this.host.removeAttribute("has-tooltip"),i.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(i){this.ariaTarget=i;const e=this.node;e&&(e.ariaTarget=i)}setContext(i){this.context=i;const e=this.node;e&&(e.context=i)}setManual(i){this.manual=i;const e=this.node;e&&(e.manual=i)}setOpened(i){this.opened=i;const e=this.node;e&&(e.opened=i)}setPosition(i){this.position=i;const e=this.node;e&&(e._position=i)}setShouldShow(i){this.shouldShow=i;const e=this.node;e&&(e.shouldShow=i)}setTarget(i){this.target=i;const e=this.node;e&&(e.target=i)}__onContentChange(i){this.__notifyChange(i.target)}__notifyChange(i){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:i}}))}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var me,De,He,lt,Be,Pt,Ve,Ot;const Xr=class Xr extends EventTarget{constructor(e){super();L(this,Be);L(this,Ve);L(this,me,void 0);L(this,De,new Set);L(this,He,void 0);L(this,lt,!1);he(this,me,e),he(this,He,new CSSStyleSheet)}observe(e){this.connect(),!v(this,De).has(e)&&(v(this,De).add(e),v(this,He).replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...v(this,De)].join(", ")} !important;
      }
    `))}connect(){v(this,lt)||(v(this,me).adoptedStyleSheets.unshift(v(this,He)),v(this,Ve,Ot).addEventListener("transitionstart",e=>X(this,Be,Pt).call(this,e)),v(this,Ve,Ot).addEventListener("transitionend",e=>X(this,Be,Pt).call(this,e)),he(this,lt,!0))}disconnect(){v(this,De).clear(),v(this,me).adoptedStyleSheets=v(this,me).adoptedStyleSheets.filter(e=>e!==v(this,He)),v(this,Ve,Ot).removeEventListener("transitionstart",X(this,Be,Pt)),v(this,Ve,Ot).removeEventListener("transitionend",X(this,Be,Pt)),he(this,lt,!1)}static for(e){return e.__cssPropertyObserver||(e.__cssPropertyObserver=new Xr(e)),e.__cssPropertyObserver}};me=new WeakMap,De=new WeakMap,He=new WeakMap,lt=new WeakMap,Be=new WeakSet,Pt=function(e){const{propertyName:t}=e;v(this,De).has(t)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:t}}))},Ve=new WeakSet,Ot=function(){return v(this,me).documentElement??v(this,me).host};let fr=Xr;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ed(s){const{baseStyles:i,themeStyles:e,elementStyles:t,lumoInjector:r}=s.constructor,n=s.__lumoStyleSheet;return n&&(i||e)?[...r.includeBaseStyles?i:[],n,...e]:[n,...t].filter(Boolean)}function kn(s){sn(s.shadowRoot,Ed(s))}function As(s,i){s.__lumoStyleSheet=i,kn(s)}function Yi(s){s.__lumoStyleSheet=void 0,kn(s)}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Is=new Set;function Pn(s){Is.has(s)||(Is.add(s),console.warn(s))}/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ks=new WeakMap;function Ps(s){try{return s.media.mediaText}catch{return Pn('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function Td(s){try{return s.cssRules}catch{return Pn('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function On(s,i={tags:new Map,modules:new Map}){var e;for(const t of Td(s)){if(t instanceof CSSImportRule){const r=Ps(t);r.startsWith("lumo_")?i.modules.set(r,[...t.styleSheet.cssRules]):On(t.styleSheet,i);continue}if(t instanceof CSSMediaRule){const r=Ps(t);r.startsWith("lumo_")&&i.modules.set(r,[...t.cssRules]);continue}if(t instanceof CSSStyleRule&&t.cssText.includes("-inject")){for(const r of t.style){const n=(e=r.match(/^--_lumo-(.*)-inject-modules$/u))==null?void 0:e[1];if(!n)continue;const o=t.style.getPropertyValue(r);i.tags.set(n,o.split(",").map(a=>a.trim().replace(/'|"/gu,"")))}continue}}return i}function Sd(s){let i=new Map,e=new Map;for(const t of s){let r=ks.get(t);r||(r=On(t),ks.set(t,r)),i=new Map([...i,...r.tags]),e=new Map([...e,...r.modules])}return{tags:i,modules:e}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Mn(s){return`--_lumo-${s.is}-inject`}var Vt,We,Ue,be,Ei,Rn,Wt,_r,Ti,$n;class Dd{constructor(i=document){L(this,Ei);L(this,Wt);L(this,Ti);L(this,Vt,void 0);L(this,We,void 0);L(this,Ue,new Map);L(this,be,new Map);he(this,Vt,i),this.handlePropertyChange=this.handlePropertyChange.bind(this),he(this,We,fr.for(i)),v(this,We).addEventListener("property-changed",this.handlePropertyChange)}disconnect(){v(this,We).removeEventListener("property-changed",this.handlePropertyChange),v(this,Ue).clear(),v(this,be).values().forEach(i=>i.forEach(Yi))}componentConnected(i){const{lumoInjector:e}=i.constructor,{is:t}=e;v(this,be).set(t,v(this,be).get(t)??new Set),v(this,be).get(t).add(i);const r=v(this,Ue).get(t);if(r){r.cssRules.length>0&&As(i,r);return}X(this,Ei,Rn).call(this,t);const n=Mn(e);v(this,We).observe(n)}componentDisconnected(i){var t;const{is:e}=i.constructor.lumoInjector;(t=v(this,be).get(e))==null||t.delete(i),Yi(i)}handlePropertyChange(i){var r;const{propertyName:e}=i.detail,t=(r=e.match(/^--_lumo-(.*)-inject$/u))==null?void 0:r[1];t&&X(this,Wt,_r).call(this,t)}}Vt=new WeakMap,We=new WeakMap,Ue=new WeakMap,be=new WeakMap,Ei=new WeakSet,Rn=function(i){v(this,Ue).set(i,new CSSStyleSheet),X(this,Wt,_r).call(this,i)},Wt=new WeakSet,_r=function(i){var o;const{tags:e,modules:t}=Sd(v(this,Ti,$n)),r=(e.get(i)??[]).flatMap(a=>t.get(a)??[]).map(a=>a.cssText).join(`
`),n=v(this,Ue).get(i);n.replaceSync(r),(o=v(this,be).get(i))==null||o.forEach(a=>{r?As(a,n):Yi(a)})},Ti=new WeakSet,$n=function(){let i=new Set;for(const e of[v(this,Vt),document])i=i.union(new Set(e.styleSheets)),i=i.union(new Set(e.adoptedStyleSheets));return[...i]};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Os=new Set;function Ln(s){const i=s.getRootNode();return i.host&&i.host.constructor.version?Ln(i.host):i}const re=s=>class extends s{static finalize(){super.finalize();const e=Mn(this.lumoInjector);this.is&&!Os.has(e)&&(Os.add(e),CSS.registerProperty({name:e,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){if(super.connectedCallback(),this.isConnected){const e=Ln(this);e.__lumoInjector||(e.__lumoInjector=new Dd(e)),this.__lumoInjector=e.__lumoInjector,this.__lumoInjector.componentConnected(this)}}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fn=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),e==="theme"&&this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pr=[],Ad=new Set,Id=new Set;function kd(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function Pd(s,i){return(s||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(i))}function Od(s){return s.map(i=>i.cssText).join(`
`)}const Md="vaadin-themable-mixin-style";function Rd(s,i){const e=document.createElement("style");e.id=Md,e.textContent=Od(s),i.content.appendChild(e)}function $d(s=""){let i=0;return s.startsWith("lumo-")||s.startsWith("material-")?i=1:s.startsWith("vaadin-")&&(i=2),i}function zn(s){const i=[];return s.include&&[].concat(s.include).forEach(e=>{const t=pr.find(r=>r.moduleId===e);t?i.push(...zn(t),...t.styles):console.warn(`Included moduleId ${e} not found in style registry`)},s.styles),i}function Ld(s){const i=`${s}-default-theme`,e=pr.filter(t=>t.moduleId!==i&&Pd(t.themeFor,s)).map(t=>({...t,styles:[...zn(t),...t.styles],includePriority:$d(t.moduleId)})).sort((t,r)=>r.includePriority-t.includePriority);return e.length>0?e:pr.filter(t=>t.moduleId===i)}const se=s=>class extends Fn(s){constructor(){super(),Ad.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Id.add(this.is),this.elementStyles)return;const e=this.prototype._template;!e||kd(this)||Rd(this.getStylesForThis(),e)}static finalizeStyles(e){return this.baseStyles=e?[e].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const e=s.__themes||[],t=Object.getPrototypeOf(this.prototype),r=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...r,...Ld(this.is)];const n=this.__themes.flatMap(o=>o.styles);return n.filter((o,a)=>a===n.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fd=(s,...i)=>{const e=document.createElement("style");e.id=s,e.textContent=i.map(t=>t.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(s=>{CSS.registerProperty({name:s,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})});Fd("vaadin-base",B`
    @layer vaadin.base {
      :where(html) {
        /* Background color */
        --vaadin-background-color: light-dark(#fff, #222);

        /* Container colors */
        --vaadin-background-container: color-mix(in oklab, var(--vaadin-text-color) 5%, var(--vaadin-background-color));
        --vaadin-background-container-strong: color-mix(
          in oklab,
          var(--vaadin-text-color) 10%,
          var(--vaadin-background-color)
        );

        /* Border colors */
        --vaadin-border-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 24%, transparent);
        --vaadin-border-color: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent); /* Above 3:1 contrast */

        /* Text colors */
        /* Above 3:1 contrast */
        --vaadin-text-color-disabled: color-mix(in oklab, var(--vaadin-text-color) 48%, transparent);
        /* Above 4.5:1 contrast */
        --vaadin-text-color-secondary: color-mix(in oklab, var(--vaadin-text-color) 68%, transparent);
        /* Above 7:1 contrast */
        --vaadin-text-color: light-dark(#1f1f1f, white);

        /* Padding */
        --vaadin-padding-xs: 6px;
        --vaadin-padding-s: 8px;
        --vaadin-padding-m: 12px;
        --vaadin-padding-l: 16px;
        --vaadin-padding-xl: 24px;
        --vaadin-padding-block-container: var(--vaadin-padding-xs);
        --vaadin-padding-inline-container: var(--vaadin-padding-s);

        /* Gap/spacing */
        --vaadin-gap-xs: 6px;
        --vaadin-gap-s: 8px;
        --vaadin-gap-m: 12px;
        --vaadin-gap-l: 16px;
        --vaadin-gap-xl: 24px;

        /* Border radius */
        --vaadin-radius-s: 3px;
        --vaadin-radius-m: 6px;
        --vaadin-radius-l: 12px;

        /* Focus outline */
        --vaadin-focus-ring-width: 2px;
        --vaadin-focus-ring-color: var(--vaadin-text-color);

        /* Icons, used as mask-image */
        --_vaadin-icon-arrow-up: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" /></svg>');
        --_vaadin-icon-calendar: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>');
        --_vaadin-icon-checkmark: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>');
        --_vaadin-icon-chevron-down: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>');
        --_vaadin-icon-clock: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>');
        --_vaadin-icon-cross: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>');
        --_vaadin-icon-drag: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M11 7c0 .82843-.6716 1.5-1.5 1.5C8.67157 8.5 8 7.82843 8 7s.67157-1.5 1.5-1.5c.8284 0 1.5.67157 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5Zm5-10c0 .82843-.6716 1.5-1.5 1.5S13 7.82843 13 7s.6716-1.5 1.5-1.5S16 6.17157 16 7Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 12.8284 13 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Zm0 5c0 .8284-.6716 1.5-1.5 1.5S13 17.8284 13 17s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5Z" fill="currentColor"/></svg>');
        --_vaadin-icon-eye: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>');
        --_vaadin-icon-eye-slash: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" /></svg>');
        --_vaadin-icon-fullscreen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>');
        --_vaadin-icon-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>');
        --_vaadin-icon-link: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>');
        --_vaadin-icon-menu: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>');
        --_vaadin-icon-minus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" /></svg>');
        --_vaadin-icon-paper-airplane: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>');
        --_vaadin-icon-pen: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>');
        --_vaadin-icon-play: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>');
        --_vaadin-icon-plus: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>');
        --_vaadin-icon-redo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/></svg>');
        --_vaadin-icon-refresh: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M22 10C22 10 19.995 7.26822 18.3662 5.63824C16.7373 4.00827 14.4864 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.1031 21 19.5649 18.2543 20.6482 14.5M22 10V4M22 10H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-resize: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.46967c.2929.29289.2929.76777 0 1.06066L8.53033 18.5304c-.29289.2929-.76777.2929-1.06066 0s-.29289-.7678 0-1.0607L17.4697 7.46967c.2929-.29289.7677-.29289 1.0606 0Zm0 4.50003c.2929.2929.2929.7678 0 1.0607l-5.5 5.5c-.2929.2928-.7677.2928-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l5.4999-5.5c.2929-.2929.7678-.2929 1.0607 0Zm0 4.5c.2929.2928.2929.7677 0 1.0606l-1 1.0001c-.2929.2928-.7677.2929-1.0606 0-.2929-.2929-.2929-.7678 0-1.0607l1-1c.2929-.2929.7677-.2929 1.0606 0Z" fill="currentColor"/></svg>');
        --_vaadin-icon-sort: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none"><path d="M7.49854 6.99951C7.92795 6.99951 8.15791 7.50528 7.87549 7.82861L4.37646 11.8296C4.17728 12.0571 3.82272 12.0571 3.62354 11.8296L0.125488 7.82861C-0.157248 7.50531 0.0719873 6.99956 0.501465 6.99951H7.49854ZM3.62354 0.17041C3.82275 -0.0573875 4.17725 -0.0573848 4.37646 0.17041L7.87549 4.17041C8.15825 4.49373 7.92806 5.00049 7.49854 5.00049L0.501465 4.99951C0.0719873 4.99946 -0.157248 4.49371 0.125488 4.17041L3.62354 0.17041Z" fill="black"/></svg>');
        --_vaadin-icon-undo: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>');
        --_vaadin-icon-upload: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" /></svg>');
        --_vaadin-icon-user: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        --_vaadin-icon-warn: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>');

        /* Cursors for interactive elements */
        --vaadin-clickable-cursor: pointer;
        --vaadin-disabled-cursor: not-allowed;

        /* Use units so that the values can be used in calc() */
        --safe-area-inset-top: env(safe-area-inset-top, 0px);
        --safe-area-inset-right: env(safe-area-inset-right, 0px);
        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);
        --safe-area-inset-left: env(safe-area-inset-left, 0px);
      }

      @supports not (color: hsl(0 0 0)) {
        :where(html) {
          --_vaadin-safari-17-deg: 1deg;
        }
      }

      @media (forced-colors: active) {
        html {
          --vaadin-background-color: Canvas;
          --vaadin-border-color: CanvasText;
          --vaadin-border-color-secondary: CanvasText;
          --vaadin-text-color-disabled: CanvasText;
          --vaadin-text-color-secondary: CanvasText;
          --vaadin-text-color: CanvasText;
          --vaadin-icon-color: CanvasText;
          --vaadin-focus-ring-color: Highlight;
        }
      }
    }
  `);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zd=B`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: var(--vaadin-button-gap, 0 var(--vaadin-gap-s));
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    cursor: var(--vaadin-clickable-cursor);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--vaadin-button-height, auto);
    margin: var(--vaadin-button-margin, 0);
    padding: var(--vaadin-button-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    font-family: var(--vaadin-button-font-family, inherit);
    font-size: var(--vaadin-button-font-size, inherit);
    line-height: var(--vaadin-button-line-height, inherit);
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--vaadin-button-text-color, var(--vaadin-text-color));
    background: var(--vaadin-button-background, var(--vaadin-background-container));
    background-origin: border-box;
    border: var(--vaadin-button-border-width, 1px) solid
      var(--vaadin-button-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-button-border-radius, var(--vaadin-radius-m));
    touch-action: manipulation;
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-button-container,
  [part='prefix'],
  [part='suffix'] {
    display: contents;
  }

  [part='label'] {
    display: inline-flex;
  }

  :host(:is([focus-ring], :focus-visible)) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: 1px;
  }

  :host([theme~='primary']) {
    --vaadin-button-background: var(--vaadin-text-color);
    --vaadin-button-text-color: var(--vaadin-background-color);
    --vaadin-button-border-color: transparent;
  }

  :host([theme~='tertiary']) {
    background: transparent;
    border-color: transparent;
  }

  :host([disabled]) {
    pointer-events: var(--_vaadin-button-disabled-pointer-events, none);
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
  }

  :host([disabled][theme~='primary']) {
    --vaadin-button-text-color: var(--vaadin-background-container-strong);
    --vaadin-button-background: var(--vaadin-text-color-disabled);
  }

  @media (forced-colors: active) {
    :host {
      --vaadin-button-border-width: 1px;
      --vaadin-button-background: ButtonFace;
      --vaadin-button-text-color: ButtonText;
    }

    :host([theme~='primary']) {
      forced-color-adjust: none;
      --vaadin-button-background: CanvasText;
      --vaadin-button-text-color: Canvas;
      --vaadin-icon-color: Canvas;
    }

    ::slotted(*) {
      forced-color-adjust: auto;
    }

    :host([disabled]) {
      --vaadin-button-background: transparent !important;
      --vaadin-button-border-color: GrayText !important;
      --vaadin-button-text-color: GrayText !important;
      opacity: 1;
    }
  }
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nd=!1,Hd=s=>s,Lr=typeof document.head.style.touchAction=="string",gr="__polymerGestures",Gi="__polymerGesturesHandled",vr="__polymerGesturesTouchAction",Ms=25,Rs=5,Bd=2,Vd=["mousedown","mousemove","mouseup","click"],Wd=[0,1,4,2],Ud=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Fr(s){return Vd.indexOf(s)>-1}let Nn=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){Nn=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function qd(s){if(!(Fr(s)||s==="touchend")&&Lr&&Nn&&Nd)return{passive:!0}}const jd=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),Yd={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function je(s){const i=s.type;if(!Fr(i))return!1;if(i==="mousemove"){let t=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!Ud&&(t=Wd[s.which]||0),!!(t&1)}return(s.button===void 0?0:s.button)===0}function Gd(s){if(s.type==="click"){if(s.detail===0)return!0;const i=ke(s);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const e=i.getBoundingClientRect(),t=s.pageX,r=s.pageY;return!(t>=e.left&&t<=e.right&&r>=e.top&&r<=e.bottom)}return!1}const ve={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Kd(s){let i="auto";const e=Bn(s);for(let t=0,r;t<e.length;t++)if(r=e[t],r[vr]){i=r[vr];break}return i}function Hn(s,i,e){s.movefn=i,s.upfn=e,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e)}function st(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const Bn=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],zr={},Ne=[];function Qd(s,i){let e=document.elementFromPoint(s,i),t=e;for(;t&&t.shadowRoot&&!window.ShadyDOM;){const r=t;if(t=t.shadowRoot.elementFromPoint(s,i),r===t)break;t&&(e=t)}return e}function ke(s){const i=Bn(s);return i.length>0?i[0]:s.target}function Xd(s){const i=s.type,t=s.currentTarget[gr];if(!t)return;const r=t[i];if(!r)return;if(!s[Gi]&&(s[Gi]={},i.startsWith("touch"))){const o=s.changedTouches[0];if(i==="touchstart"&&s.touches.length===1&&(ve.touch.id=o.identifier),ve.touch.id!==o.identifier)return;Lr||(i==="touchstart"||i==="touchmove")&&Zd(s)}const n=s[Gi];if(!n.skip){for(let o=0,a;o<Ne.length;o++)a=Ne[o],r[a.name]&&!n[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<Ne.length;o++)a=Ne[o],r[a.name]&&!n[a.name]&&(n[a.name]=!0,a[i](s))}}function Zd(s){const i=s.changedTouches[0],e=s.type;if(e==="touchstart")ve.touch.x=i.clientX,ve.touch.y=i.clientY,ve.touch.scrollDecided=!1;else if(e==="touchmove"){if(ve.touch.scrollDecided)return;ve.touch.scrollDecided=!0;const t=Kd(s);let r=!1;const n=Math.abs(ve.touch.x-i.clientX),o=Math.abs(ve.touch.y-i.clientY);s.cancelable&&(t==="none"?r=!0:t==="pan-x"?r=o>n:t==="pan-y"&&(r=n>o)),r?s.preventDefault():gi("track")}}function pt(s,i,e){return zr[i]?(Jd(s,i,e),!0):!1}function Jd(s,i,e){const t=zr[i],r=t.deps,n=t.name;let o=s[gr];o||(s[gr]=o={});for(let a=0,l,d;a<r.length;a++)l=r[a],!(jd&&Fr(l)&&l!=="click")&&(d=o[l],d||(o[l]=d={_count:0}),d._count===0&&s.addEventListener(l,Xd,qd(l)),d[n]=(d[n]||0)+1,d._count=(d._count||0)+1);s.addEventListener(i,e),t.touchAction&&th(s,t.touchAction)}function Nr(s){Ne.push(s),s.emits.forEach(i=>{zr[i]=s})}function eh(s){for(let i=0,e;i<Ne.length;i++){e=Ne[i];for(let t=0,r;t<e.emits.length;t++)if(r=e.emits[t],r===s)return e}return null}function th(s,i){Lr&&s instanceof HTMLElement&&le.run(()=>{s.style.touchAction=i}),s[vr]=i}function Hr(s,i,e){const t=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(t.detail=e,Hd(s).dispatchEvent(t),t.defaultPrevented){const r=e.preventer||e.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function gi(s){const i=eh(s);i.info&&(i.info.prevent=!0)}Nr({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){st(this.info)},mousedown(s){if(!je(s))return;const i=ke(s),e=this,t=n=>{je(n)||(St("up",i,n),st(e.info))},r=n=>{je(n)&&St("up",i,n),st(e.info)};Hn(this.info,t,r),St("down",i,s)},touchstart(s){St("down",ke(s),s.changedTouches[0],s)},touchend(s){St("up",ke(s),s.changedTouches[0],s)}});function St(s,i,e,t){i&&Hr(i,s,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t,prevent(r){return gi(r)}})}Nr({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>Bd&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,st(this.info)},mousedown(s){if(!je(s))return;const i=ke(s),e=this,t=n=>{const o=n.clientX,a=n.clientY;$s(e.info,o,a)&&(e.info.state=e.info.started?n.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&gi("tap"),e.info.addMove({x:o,y:a}),je(n)||(e.info.state="end",st(e.info)),i&&Ki(e.info,i,n),e.info.started=!0)},r=n=>{e.info.started&&t(n),st(e.info)};Hn(this.info,t,r),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(s){const i=ke(s),e=s.changedTouches[0],t=e.clientX,r=e.clientY;$s(this.info,t,r)&&(this.info.state==="start"&&gi("tap"),this.info.addMove({x:t,y:r}),Ki(this.info,i,e),this.info.state="track",this.info.started=!0)},touchend(s){const i=ke(s),e=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Ki(this.info,i,e))}});function $s(s,i,e){if(s.prevent)return!1;if(s.started)return!0;const t=Math.abs(s.x-i),r=Math.abs(s.y-e);return t>=Rs||r>=Rs}function Ki(s,i,e){if(!i)return;const t=s.moves[s.moves.length-2],r=s.moves[s.moves.length-1],n=r.x-s.x,o=r.y-s.y;let a,l=0;t&&(a=r.x-t.x,l=r.y-t.y),Hr(i,"track",{state:s.state,x:e.clientX,y:e.clientY,dx:n,dy:o,ddx:a,ddy:l,sourceEvent:e,hover(){return Qd(e.clientX,e.clientY)}})}Nr({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){je(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){je(s)&&Ls(this.info,s)},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(s){Ls(this.info,s.changedTouches[0],s)}});function Ls(s,i,e){const t=Math.abs(i.clientX-s.x),r=Math.abs(i.clientY-s.y),n=ke(e||i);!n||Yd[n.localName]&&n.hasAttribute("disabled")||(isNaN(t)||isNaN(r)||t<=Ms&&r<=Ms||Gd(i))&&(s.prevent||Hr(n,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vn=de(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yt=de(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=s=>class extends Vn(Yt(s)){get _activeKeys(){return[" "]}ready(){super.ready(),pt(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),pt(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Br=!1;window.addEventListener("keydown",()=>{Br=!0},{capture:!0});window.addEventListener("mousedown",()=>{Br=!1},{capture:!0});function mr(){let s=document.activeElement||document.body;for(;s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function Ke(){return Br}function Un(s){const i=s.style;if(i.visibility==="hidden"||i.display==="none")return!0;const e=window.getComputedStyle(s);return e.visibility==="hidden"||e.display==="none"}function ih(s,i){const e=Math.max(s.tabIndex,0),t=Math.max(i.tabIndex,0);return e===0||t===0?t>e:e>t}function rh(s,i){const e=[];for(;s.length>0&&i.length>0;)ih(s[0],i[0])?e.push(i.shift()):e.push(s.shift());return e.concat(s,i)}function br(s){const i=s.length;if(i<2)return s;const e=Math.ceil(i/2),t=br(s.slice(0,e)),r=br(s.slice(e));return rh(t,r)}function vi(s){return s.checkVisibility?!s.checkVisibility({visibilityProperty:!0}):s.offsetParent===null&&s.clientWidth===0&&s.clientHeight===0?!0:Un(s)}function Vr(s){return s.matches('[tabindex="-1"]')?!1:s.matches("input, select, textarea, button, object")?s.matches(":not([disabled])"):s.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function Wr(s){return s.getRootNode().activeElement===s}function sh(s){if(!Vr(s))return-1;const i=s.getAttribute("tabindex")||0;return Number(i)}function qn(s,i){if(s.nodeType!==Node.ELEMENT_NODE||Un(s))return!1;const e=s,t=sh(e);let r=t>0;t>=0&&i.push(e);let n=[];return e.localName==="slot"?n=e.assignedNodes({flatten:!0}):n=(e.shadowRoot||e).children,[...n].forEach(o=>{r=qn(o,i)||r}),r}function nh(s){const i=[];return qn(s,i)?br(i):i}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gt=de(s=>class extends s{get _keyboardActive(){return Ke()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(e){super.focus(e),e&&e.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=s=>class extends Vn(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),!this.__shouldAllowFocusWhenDisabled()&&(e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):t&&(this._lastTabIndex!==void 0?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(e){this.__shouldAllowFocusWhenDisabled()||this.disabled&&e!==-1&&(this._lastTabIndex=e,this.setAttribute("tabindex","-1"))}focus(e){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus(e)}__shouldAllowFocusWhenDisabled(){return!1}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oh=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],ah=s=>class extends Wn(Ur(Gt(s))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),oh.forEach(e=>{this.addEventListener(e,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}__onInteractionEvent(e){this.__shouldSuppressInteractionEvent(e)&&e.stopImmediatePropagation()}__shouldSuppressInteractionEvent(e){return this.disabled}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class lh extends ah(Oe(se(Z(re(H))))){static get is(){return"vaadin-button"}static get styles(){return zd}static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}render(){return E`
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>

        <slot name="tooltip"></slot>
      </div>
    `}ready(){super.ready(),this._tooltipController=new Pi(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}U(lh);/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dh=B`
  :host {
    display: flex;
    align-items: center;
    --_radius: var(--vaadin-input-field-border-radius, var(--vaadin-radius-m));
    border-radius:
      /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--_radius))
      var(--vaadin-input-field-top-end-radius, var(--_radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_radius));
    border: var(--vaadin-input-field-border-width, 1px) solid
      var(--vaadin-input-field-border-color, var(--vaadin-border-color));
    box-sizing: border-box;
    cursor: text;
    padding: var(
      --vaadin-input-field-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    gap: var(--vaadin-input-field-gap, var(--vaadin-gap-s));
    background: var(--vaadin-input-field-background, var(--vaadin-background-color));
    color: var(--vaadin-input-field-value-color, var(--vaadin-text-color));
    font-size: var(--vaadin-input-field-value-font-size, inherit);
    line-height: var(--vaadin-input-field-value-line-height, inherit);
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
  }

  :host([dir='rtl']) {
    --_radius: var(--vaadin-input-field-border-radius, var(--vaadin-radius-m));
    border-radius:
      /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_radius))
      var(--vaadin-input-field-top-start-radius, var(--_radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(:is(input, textarea)) {
    appearance: none;
    align-self: stretch;
    box-sizing: border-box;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: auto;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    color: inherit;
    background: transparent;
    cursor: inherit;
    text-align: inherit;
    caret-color: var(--vaadin-input-field-value-color);
  }

  ::slotted(*) {
    flex: none;
  }

  slot[name$='fix'] {
    cursor: auto;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(:is(input, textarea):placeholder-shown) to style the placeholder */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--vaadin-text-color-secondary));
  }

  :host(:focus-within) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-input-field-border-width, 1px) * -1);
  }

  :host([invalid]) {
    --vaadin-input-field-border-color: var(--vaadin-input-field-error-color, var(--vaadin-text-color));
  }

  :host([readonly]) {
    border-style: dashed;
  }

  :host([readonly]:focus-within) {
    outline-style: dashed;
    --vaadin-input-field-border-color: transparent;
  }

  :host([disabled]) {
    --vaadin-input-field-value-color: var(--vaadin-input-field-disabled-text-color, var(--vaadin-text-color-disabled));
    --vaadin-input-field-background: var(
      --vaadin-input-field-disabled-background,
      var(--vaadin-background-container-strong)
    );
    --vaadin-input-field-border-color: transparent;
  }

  @media (forced-colors: active) {
    :host {
      --vaadin-input-field-background: Field;
      --vaadin-input-field-value-color: FieldText;
      --vaadin-input-field-placeholder-color: GrayText;
    }

    :host([disabled]) {
      --vaadin-input-field-value-color: GrayText;
      --vaadin-icon-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hh extends se(mt(Z(re(H)))){static get is(){return"vaadin-input-container"}static get styles(){return dh}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}render(){return E`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}ready(){super.ready(),this.addEventListener("pointerdown",i=>{i.target===this&&i.preventDefault()}),this.addEventListener("click",i=>{i.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}U(hh);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jn=B`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints. Themes can
          override this to adjust the gap between the overlay and the viewport. */
    inset: max(env(safe-area-inset-top, 0px), var(--vaadin-overlay-viewport-inset, 8px))
      max(env(safe-area-inset-right, 0px), var(--vaadin-overlay-viewport-inset, 8px))
      max(env(safe-area-inset-bottom, 0px), var(--vaadin-overlay-viewport-bottom))
      max(env(safe-area-inset-left, 0px), var(--vaadin-overlay-viewport-inset, 8px));

    /* Override native [popover] user agent styles */
    width: auto;
    height: auto;
    border: none;
    padding: 0;
    background-color: transparent;
    overflow: visible;

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 8px;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    background: var(--vaadin-overlay-background, var(--vaadin-background-color));
    border: var(--vaadin-overlay-border-width, 1px) solid
      var(--vaadin-overlay-border-color, var(--vaadin-border-color-secondary));
    border-radius: var(--vaadin-overlay-border-radius, var(--vaadin-radius-m));
    box-shadow: var(--vaadin-overlay-shadow, 0 8px 24px -4px rgba(0, 0, 0, 0.3));
    box-sizing: border-box;
    max-width: 100%;
    overflow: auto;
    overscroll-behavior: contain;
    pointer-events: auto;
    -webkit-tap-highlight-color: initial;

    /* CSS reset for font styles */
    color: initial;
    font: initial;
    letter-spacing: initial;
    text-align: initial;
    text-decoration: initial;
    text-indent: initial;
    text-transform: initial;
    user-select: text;
    white-space: initial;
    word-spacing: initial;

    /* Inherit font-family */
    font-family: inherit;
  }

  [part='backdrop'] {
    background: var(--vaadin-overlay-backdrop-background, rgba(0, 0, 0, 0.2));
    content: '';
    inset: 0;
    pointer-events: auto;
    position: fixed;
    z-index: -1;
  }

  [part='overlay']:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      border: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ch=B`
  [part='overlay'] {
    display: flex;
    flex: auto;
    max-height: var(--vaadin-date-picker-overlay-max-height, 30rem);
    box-sizing: content-box;
    width: var(
      --vaadin-date-picker-overlay-width,
      calc(
        var(--vaadin-date-picker-date-width, 2rem) * 7 + var(--vaadin-date-picker-month-padding, 0.5rem) * 2 +
          var(--vaadin-date-picker-year-scroller-width, 3rem)
      )
    );
    cursor: default;
  }

  :host([fullscreen]) {
    --vaadin-date-picker-date-width: calc(100% / 7);
  }

  :host([fullscreen]) [part='backdrop'] {
    display: block;
  }

  :host([fullscreen]) [part='overlay'] {
    border: none;
    border-radius: 0;
    max-height: 75vh;
    width: 100%;
  }

  [part~='content'] {
    flex: auto;
  }

  @media (max-width: 450px), (max-height: 450px) {
    :host {
      inset: auto 0 0 !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oi=s=>s.test(navigator.userAgent),yr=s=>s.test(navigator.platform),uh=s=>s.test(navigator.vendor),Fs=Oi(/Android/u),Yn=Oi(/Chrome/u)&&uh(/Google Inc/u),fh=Oi(/Firefox/u),_h=yr(/^iPad/u)||yr(/^Mac/u)&&navigator.maxTouchPoints>1,ph=yr(/^iPhone/u),mi=ph||_h,qr=Oi(/^((?!chrome|android).)*safari/iu),jr=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gh{saveFocus(i){this.focusNode=i||mr()}restoreFocus(i){const e=this.focusNode;if(!e)return;const t={preventScroll:i?i.preventScroll:!1,focusVisible:i?i.focusVisible:!1};mr()===document.body?setTimeout(()=>e.focus(t)):e.focus(t),this.focusNode=null}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qi=[];class vh{constructor(i){this.host=i,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return nh(this.__trapNode)}get __focusedElementIndex(){const i=this.__focusableElements;return i.indexOf(i.filter(Wr).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(i){if(this.__trapNode=i,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Qi.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus({focusVisible:Ke()})}releaseFocus(){this.__trapNode=null,Qi.pop()}__onKeyDown(i){if(this.__trapNode&&this===Array.from(Qi).pop()&&i.key==="Tab"){i.preventDefault();const e=i.shiftKey;this.__focusNextElement(e)}}__focusNextElement(i=!1){const e=this.__focusableElements,t=i?-1:1,r=this.__focusedElementIndex,n=(e.length+r+t)%e.length,o=e[n];o.focus({focusVisible:!0}),o.localName==="input"&&o.select()}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mh=s=>class extends s{static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__focusTrapController=new vh(this),this.__focusRestorationController=new gh}get _contentRoot(){return this}ready(){super.ready(),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}get _focusTrapRoot(){return this.$.overlay}_resetFocus(){if(this.focusTrap&&this.__focusTrapController.releaseFocus(),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const e=Ke(),t=!e;this.__focusRestorationController.restoreFocus({preventScroll:t,focusVisible:e})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&this.__focusTrapController.trapFocus(this._focusTrapRoot)}_shouldRestoreFocus(){const e=mr();return e===document.body||this._deepContains(e)}_deepContains(e){if(this._contentRoot.contains(e))return!0;let t=e;const r=e.ownerDocument;for(;t&&t!==r&&t!==this._contentRoot;)t=t.parentNode||t.host;return t===this._contentRoot}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const di=new Set,bi=()=>[...di].filter(s=>!s.hasAttribute("closing")),Gn=s=>{const i=bi(),e=i[i.indexOf(s)+1];return e?s._deepContains(e)?Gn(e):!1:!0},zs=(s,i=e=>!0)=>{const e=bi().filter(i);return s===e.pop()},bh=s=>class extends s{get _last(){return zs(this)}get _isAttached(){return di.has(this)}bringToFront(){zs(this)||Gn(this)||(this.matches(":popover-open")&&(this.hidePopover(),this.showPopover()),this._removeAttachedInstance(),this._appendAttachedInstance())}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),bi().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=bi();let t;for(;(t=e.pop())&&!(t!==this&&(t.$.overlay.style.removeProperty("pointer-events"),!t.modeless)););}_appendAttachedInstance(){di.add(this)}_removeAttachedInstance(){this._isAttached&&di.delete(this)}};/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function yh(s,i){let e=null,t;const r=document.documentElement;function n(){t&&clearTimeout(t),e&&e.disconnect(),e=null}function o(a=!1,l=1){n();const{left:d,top:h,width:c,height:u}=s.getBoundingClientRect();if(a||i(),!c||!u)return;const f=Math.floor(h),g=Math.floor(r.clientWidth-(d+c)),C=Math.floor(r.clientHeight-(h+u)),P=Math.floor(d),q={rootMargin:`${-f}px ${-g}px ${-C}px ${-P}px`,threshold:Math.max(0,Math.min(1,l))||1};let Q=!0;function G(D){const I=D[0].intersectionRatio;if(I!==l){if(!Q)return o();I?o(!1,I):t=setTimeout(()=>{o(!1,1e-7)},1e3)}Q=!1}e=new IntersectionObserver(G,q),e.observe(s)}return o(!0),n}function J(s,i,e){const t=[s];s.owner&&t.push(s.owner),typeof e=="string"?t.forEach(r=>{r.setAttribute(i,e)}):e?t.forEach(r=>{r.setAttribute(i,"")}):t.forEach(r=>{r.removeAttribute(i)})}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kn=s=>class extends mh(bh(s)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_withBackdropChanged",sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}get _rendererRoot(){return this}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),mi&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}firstUpdated(){super.firstUpdated(),this.popover="manual",this.addEventListener("click",()=>{}),this.$.backdrop&&this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this._rendererRoot,this.owner,this.model)}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{overlay:this,sourceEvent:e}});this.dispatchEvent(t),document.body.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}setBounds(e,t=!0){const r=this.$.overlay,n={...e};t&&r.style.position!=="absolute"&&(r.style.position="absolute"),Object.keys(n).forEach(o=>{n[o]!==null&&!isNaN(n[o])&&(n[o]=`${n[o]}px`)}),Object.assign(r.style,n)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,r=window.innerWidth>e,n=document.documentElement.clientHeight;r&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${n-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_shouldAddGlobalListeners(){return!this.modeless}_addGlobalListeners(){this.__hasGlobalListeners||(this.__hasGlobalListeners=!0,document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0))}_removeGlobalListeners(){this.__hasGlobalListeners&&(this.__hasGlobalListeners=!1,document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0))}_rendererOrDataChanged(e,t,r,n){const o=this._oldOwner!==t||this._oldModel!==r;this._oldModel=r,this._oldOwner=t;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const d=this._oldOpened!==n;this._oldOpened=n,a&&l&&(this._rendererRoot.innerHTML="",delete this._rendererRoot._$litPart$),n&&e&&(a||d||o)&&this.requestContentUpdate()}_modelessChanged(e){this.opened&&(this._shouldAddGlobalListeners()?this._addGlobalListeners():this._removeGlobalListeners()),e?this._exitModalState():this.opened&&this._enterModalState(),J(this,"modeless",e)}_withBackdropChanged(e){J(this,"with-backdrop",e)}_openedChanged(e,t){if(e){if(!this.isConnected){this.opened=!1;return}this._saveFocus(),this._animatedOpening(),this.__scheduledOpen=requestAnimationFrame(()=>{setTimeout(()=>{this._trapFocus();const r=new CustomEvent("vaadin-overlay-open",{detail:{overlay:this},bubbles:!0});this.dispatchEvent(r),document.body.dispatchEvent(r)})}),document.addEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._addGlobalListeners()}else t&&(this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(e,t){const r=`__${e}Handler`,n=o=>{o&&o.target!==this||(t(),this.removeEventListener("animationend",n),delete this[r])};this[r]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this._isAttached&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this._appendAttachedInstance(),this.bringToFront(),this.modeless||this._enterModalState(),J(this,"opening",!0),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this.showPopover()}_finishOpening(){J(this,"opening",!1)}_finishClosing(){this._detachOverlay(),this._removeAttachedInstance(),this.$.overlay.style.removeProperty("pointer-events"),J(this,"closing",!1),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._isAttached&&(this._exitModalState(),J(this,"closing",!0),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this.hidePopover()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(!(!this._last||e.defaultPrevented)&&!(!this._shouldAddGlobalListeners()&&!e.composedPath().includes(this._focusTrapRoot))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xi={start:"top",end:"bottom"},Zi={start:"left",end:"right"},Ns=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),Qn=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}updated(e){if(super.updated(e),e.has("positionTarget")){const r=e.get("positionTarget");(!this.positionTarget&&r||this.positionTarget&&!r&&this.__margins)&&this.__resetPosition()}(e.has("opened")||e.has("positionTarget"))&&this.__updatePositionSettings(this.opened,this.positionTarget),["horizontalAlign","verticalAlign","noHorizontalOverlap","noVerticalOverlap","requiredVerticalSpace"].some(r=>e.has(r))&&this._updatePosition()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=wd(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=yh(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__updatePositionSettings(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,Ns.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,Ns.observe(t))),e){const r=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(r[n],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__onScroll(e){e.target instanceof Node&&this._deepContains(e.target)||this._updatePosition()}__resetPosition(){this.__margins=null,Object.assign(this.style,{justifyContent:"",alignItems:"",top:"",bottom:"",left:"",right:""}),J(this,"bottom-aligned",!1),J(this,"top-aligned",!1),J(this,"end-aligned",!1),J(this,"start-aligned",!1)}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const e=this.positionTarget.getBoundingClientRect();if(e.width===0&&e.height===0&&this.opened){this.opened=!1;return}const t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const r=this.__isRTL,n=this.__shouldAlignStartHorizontally(e,r),o=!r&&n||r&&!n;this.style.alignItems=o?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,Xi,this,t),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,Zi,this,n);Object.assign(this.style,l,d),J(this,"bottom-aligned",!t),J(this,"top-aligned",t),J(this,"end-aligned",!o),J(this,"start-aligned",o)}__shouldAlignStartHorizontally(e,t){const r=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,r,n,this.__margins,o,this.noHorizontalOverlap,Zi)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const r=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,r,this.__margins,n,this.noVerticalOverlap,Xi)}__shouldAlignStart(e,t,r,n,o,a,l){const d=r-e[a?l.end:l.start]-n[l.end],h=e[a?l.start:l.end]-n[l.start],c=o?d:h,f=c>(o?h:d)||c>t;return o===f}__adjustBottomProperty(e,t,r){let n;if(e===t.end){if(t.end===Xi.end){const o=Math.min(window.innerHeight,document.documentElement.clientHeight);if(r>o&&this.__oldViewportHeight){const a=this.__oldViewportHeight-o;n=r-a}this.__oldViewportHeight=o}if(t.end===Zi.end){const o=Math.min(window.innerWidth,document.documentElement.clientWidth);if(r>o&&this.__oldViewportWidth){const a=this.__oldViewportWidth-o;n=r-a}this.__oldViewportWidth=o}}return n}__calculatePositionInOneDimension(e,t,r,n,o,a){const l=a?n.start:n.end,d=a?n.end:n.start,h=parseFloat(o.style[l]||getComputedStyle(o)[l]),c=this.__adjustBottomProperty(l,n,h),u=t[a?n.start:n.end]-e[r===a?n.end:n.start],f=c?`${c}px`:`${h+u*(a?-1:1)}px`;return{[l]:f,[d]:""}}};/**
 * @license
 * Copyright (c) 2015 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wh=s=>class extends Qn(Kn(s)){_shouldCloseOnOutsideClick(e){return!e.composedPath().includes(this.positionTarget)}_mouseDownListener(e){super._mouseDownListener(e),this._shouldCloseOnOutsideClick(e)&&!Vr(e.composedPath()[0])&&e.preventDefault()}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ch extends wh(mt(se(Z(re(H))))){static get is(){return"vaadin-date-picker-overlay"}static get styles(){return[jn,ch]}render(){return E`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}get _contentRoot(){return this.owner._overlayContent}}U(Ch);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function xh(s){let i=s.getDay();i===0&&(i=7);const e=4-i,t=new Date(s.getTime()+e*24*3600*1e3),r=new Date(0,0);r.setFullYear(t.getFullYear());const n=t.getTime()-r.getTime(),o=Math.round(n/(24*3600*1e3));return Math.floor(o/7+1)}function wr(s){const i=new Date(s);return i.setHours(0,0,0,0),i}function ae(s,i,e=wr){return s instanceof Date&&i instanceof Date&&e(s).getTime()===e(i).getTime()}function Xn(s){return{day:s.getDate(),month:s.getMonth(),year:s.getFullYear()}}function nt(s,i,e,t){let r=!1;if(typeof t=="function"&&s){const n=Xn(s);r=t(n)}return(!i||s>=i)&&(!e||s<=e)&&!r}function Zn(s,i){return i.filter(e=>e!==void 0).reduce((e,t)=>{if(!t)return e;if(!e)return t;const r=Math.abs(s.getTime()-t.getTime()),n=Math.abs(e.getTime()-s.getTime());return r<n?t:e})}function Jn(s){const i=new Date,e=new Date(i);return e.setDate(1),e.setMonth(parseInt(s)+i.getMonth()),e}function Eh(s,i,e=0,t=1){if(i>99)throw new Error("The provided year cannot have more than 2 digits.");if(i<0)throw new Error("The provided year cannot be negative.");let r=i+Math.floor(s.getFullYear()/100)*100;return s<new Date(r-50,e,t)?r-=100:s>new Date(r+50,e,t)&&(r+=100),r}function Mt(s){const i=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(s);if(!i)return;const e=new Date(0,0);return e.setFullYear(parseInt(i[1],10)),e.setMonth(parseInt(i[2],10)-1),e.setDate(parseInt(i[3],10)),e}function Th(s){const i=(l,d="00")=>(d+l).substr((d+l).length-d.length);let e="",t="0000",r=s.year;r<0?(r=-r,e="-",t="000000"):s.year>=1e4&&(e="+",t="000000");const n=e+i(r,t),o=i(s.month+1),a=i(s.day);return[n,o,a].join("-")}function Sh(s){return s instanceof Date?Th({year:s.getFullYear(),month:s.getMonth(),day:s.getDate()}):""}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const eo=document.createElement("template");eo.innerHTML=`
  <style>
    :host {
      display: block;
      overflow: hidden;
      height: 500px;
    }

    #scroller {
      position: relative;
      height: 100%;
      overflow: auto;
      outline: none;
      overflow-x: hidden;
      scrollbar-width: none;
    }

    #scroller::-webkit-scrollbar {
      display: none;
    }

    .buffer {
      position: absolute;
      width: var(--vaadin-infinite-scroller-buffer-width, 100%);
      box-sizing: border-box;
      top: var(--vaadin-infinite-scroller-buffer-offset, 0);
    }
  </style>

  <div id="scroller" tabindex="-1">
    <div class="buffer"></div>
    <div class="buffer"></div>
    <div id="fullHeight"></div>
  </div>
`;class to extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(eo.content.cloneNode(!0)),this.bufferSize=20,this._initialScroll=5e5,this._initialIndex=0,this._activated=!1}get active(){return this._activated}set active(i){i&&!this._activated&&(this._createPool(),this._activated=!0)}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const i=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,i);const t=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(t)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(i){this._preventScrollEvent=!0,i>this._firstIndex&&i<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(i-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~i,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=i%1*this.itemHeight,this._scrollDisabled=!1)}connectedCallback(){this._ready||(this._ready=!0,this.$={},this.shadowRoot.querySelectorAll("[id]").forEach(i=>{this.$[i.id]=i}),this.$.scroller.addEventListener("scroll",()=>this._scroll()),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`)}disconnectedCallback(){this._debouncerScrollFinish&&this._debouncerScrollFinish.cancel(),this._debouncerUpdateClones&&this._debouncerUpdateClones.cancel(),this.__pendingFinishInit&&cancelAnimationFrame(this.__pendingFinishInit)}forceUpdate(){this._debouncerScrollFinish&&this._debouncerScrollFinish.flush(),this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(i,e){}_finishInit(){this._initDone||(this._buffers.forEach(i=>{[...i.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(i){const e=i?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const i=this.$.scroller.scrollTop;(i<this._bufferHeight||i>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,t=i>this._buffers[1].translateY+e,r=i<this._buffers[0].translateY+e;(t||r)&&(this._translateBuffer(r),this._updateClones()),this._preventScrollEvent||this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._preventScrollEvent=!1,this._debouncerScrollFinish=x.debounce(this._debouncerScrollFinish,ie.after(200),()=>{const n=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],n)&&!this._isVisible(this._buffers[1],n)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(i=>{i.style.transform=`translate3d(0, ${i.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=x.debounce(this._debouncerUpdateClones,ie.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const i=this.innerHeight;this._buffers.forEach(e=>{for(let t=0;t<this.bufferSize;t++){const r=document.createElement("div");r.style.height=`${this.itemHeight}px`,r.instance={};const n=`vaadin-infinite-scroller-item-content-${ki()}`,o=document.createElement("slot");o.setAttribute("name",n),o._itemWrapper=r,e.appendChild(o),r.setAttribute("slot",n),this.appendChild(r),this.itemHeight*t<=i&&this._ensureStampedInstance(r)}}),this.__pendingFinishInit=requestAnimationFrame(()=>{this._finishInit(),this.__pendingFinishInit=null})}_ensureStampedInstance(i){if(i.firstElementChild)return;const e=i.instance;i.instance=this._createElement(),i.appendChild(i.instance),Object.keys(e).forEach(t=>{i.instance[t]=e[t]})}_updateClones(i){this._firstIndex=Math.round((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=i?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((t,r)=>{if(!t.updated){const n=this._firstIndex+this.bufferSize*r;[...t.children].forEach((o,a)=>{const l=o._itemWrapper;(!i||this._isVisible(l,e))&&this._updateElement(l.instance,n+a)}),t.updated=!0}})}_isVisible(i,e){const t=i.getBoundingClientRect();return t.bottom>e.top&&t.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const io=document.createElement("template");io.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      grid-area: months;
      height: auto;
    }
  </style>
`;class Dh extends to{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(io.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(i,e){i.month=Jn(e)}}U(Dh);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ro=document.createElement("template");ro.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      position: relative;
      grid-area: years;
      height: auto;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;class Ah extends to{static get is(){return"vaadin-date-picker-year-scroller"}constructor(){super(),this.bufferSize=12,this.shadowRoot.appendChild(ro.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(i,e){i.year=this._yearAfterXYears(e)}_yearAfterXYears(i){const e=new Date,t=new Date(e);return t.setFullYear(parseInt(i)+e.getFullYear()),t.getFullYear()}}U(Ah);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ih=B`
  :host {
    display: block;
    height: 100%;
  }

  [part='year-number'] {
    align-items: center;
    display: flex;
    height: 50%;
    justify-content: center;
    transform: translateY(-50%);
    color: var(--vaadin-text-color-secondary);
  }

  :host([current]) [part='year-number'] {
    color: var(--vaadin-date-picker-year-scroller-current-year-color, var(--vaadin-text-color));
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kh extends se(Z(re(H))){static get is(){return"vaadin-date-picker-year"}static get styles(){return Ih}static get properties(){return{year:{type:String,sync:!0},selectedDate:{type:Object,sync:!0}}}render(){return E`
      <div part="year-number">${this.year}</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}updated(i){super.updated(i),i.has("year")&&this.toggleAttribute("current",this.year===new Date().getFullYear()),(i.has("year")||i.has("selectedDate"))&&this.toggleAttribute("selected",this.selectedDate&&this.selectedDate.getFullYear()===this.year)}}U(kh);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ph=B`
  :host {
    display: block;
    padding: var(--vaadin-date-picker-month-padding, var(--vaadin-padding-s));
  }

  [part='month-header'] {
    color: var(--vaadin-date-picker-month-header-color, var(--vaadin-text-color));
    font-size: var(--vaadin-date-picker-month-header-font-size, 0.9375rem);
    font-weight: var(--vaadin-date-picker-month-header-font-weight, 500);
    line-height: inherit;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  table {
    border-collapse: collapse;
    display: flex;
    flex-direction: column;
  }

  tr {
    display: flex;
    flex-wrap: wrap;
  }

  [part~='weekday'] {
    color: var(--vaadin-date-picker-weekday-color, var(--vaadin-text-color-secondary));
    font-size: var(--vaadin-date-picker-weekday-font-size, 0.75rem);
    font-weight: var(--vaadin-date-picker-weekday-font-weight, 500);
    margin-bottom: 0.375rem;
    width: var(--vaadin-date-picker-date-width, 2rem);
  }

  /* Week numbers are on a separate row, don't reserve space on weekday row. */
  [part~='weekday']:empty {
    display: none;
  }

  [part~='week-number'] {
    color: var(--vaadin-date-picker-week-number-color, var(--vaadin-text-color-secondary));
    font-size: var(--vaadin-date-picker-week-number-font-size, 0.7rem);
    line-height: 1;
    width: 100%;
    margin-top: 0.125em;
    margin-bottom: 0.125em;
    gap: 0.25em;
  }

  [part~='week-number']::after {
    content: '';
    height: 1px;
    flex: 1;
    background: var(
      --vaadin-date-picker-week-divider-color,
      var(--vaadin-divider-color, var(--vaadin-border-color-secondary))
    );
  }

  [part~='weekday'],
  [part~='week-number'],
  [part~='date'] {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0;
  }

  [part~='date'] {
    border-radius: var(--vaadin-date-picker-date-border-radius, var(--vaadin-radius-m));
    position: relative;
    width: var(--vaadin-date-picker-date-width, 2rem);
    height: var(--vaadin-date-picker-date-height, 2rem);
    cursor: var(--vaadin-clickable-cursor);
    outline: none;
  }

  [part~='date']::after {
    border-radius: inherit;
    content: '';
    position: absolute;
    z-index: -1;
    height: inherit;
    aspect-ratio: 1;
  }

  :where([part~='date']:focus)::after {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  [part~='today'] {
    color: var(--vaadin-date-picker-date-today-color, var(--vaadin-text-color));
  }

  [part~='selected'] {
    color: var(--vaadin-date-picker-date-selected-color, var(--vaadin-background-color));
  }

  [part~='selected']::after {
    background: var(--vaadin-date-picker-date-selected-background, var(--vaadin-text-color));
    outline-offset: 1px;
  }

  [disabled] {
    cursor: var(--vaadin-disabled-cursor);
    color: var(--vaadin-date-picker-date-disabled-color, var(--vaadin-text-color-disabled));
    opacity: 0.7;
  }

  [hidden] {
    display: none;
  }

  @media (forced-colors: active) {
    [part~='week-number']::after {
      background: CanvasText;
    }

    [part~='today'] {
      font-weight: 600;
    }

    [part~='selected'] {
      forced-color-adjust: none;
      --vaadin-date-picker-date-selected-color: SelectedItemText;
      color: SelectedItemText !important;
      --vaadin-date-picker-date-selected-background: SelectedItem;
    }

    [disabled] {
      color: GrayText !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oh=s=>class extends Gt(s){static get properties(){return{month:{type:Object,value:new Date,sync:!0},selectedDate:{type:Object,notify:!0,sync:!0},focusedDate:{type:Object},showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:{type:Boolean},minDate:{type:Date,value:null,sync:!0},maxDate:{type:Date,value:null,sync:!0},isDateDisabled:{type:Function,value:()=>!1},enteredDate:{type:Date},disabled:{type:Boolean,reflectToAttribute:!0,computed:"__computeDisabled(month, minDate, maxDate)"},_days:{type:Array,computed:"__computeDays(month, i18n, minDate, maxDate, isDateDisabled)"},_weeks:{type:Array,computed:"__computeWeeks(_days)"},_notTapping:{type:Boolean},__hasFocus:{type:Boolean}}}static get observers(){return["__focusedDateChanged(focusedDate, _days)","_showWeekNumbersChanged(showWeekNumbers, i18n)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(e=>ae(e.date,this.focusedDate))}ready(){super.ready(),pt(this.$.monthGrid,"tap",this._handleTap.bind(this))}_setFocused(e){super._setFocused(e),this.__hasFocus=e}__computeDisabled(e,t,r){const n=new Date(0,0);n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);const o=new Date(0,0);return o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()+1),o.setDate(0),t&&r&&t.getMonth()===r.getMonth()&&t.getMonth()===e.getMonth()&&r.getDate()-t.getDate()>=0?!1:!nt(n,t,r)&&!nt(o,t,r)}_getTitle(e,t){if(!(e===void 0||t===void 0))return t.formatTitle(t.monthNames[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(!(e===void 0||t===void 0))return e.slice(t).concat(e.slice(0,t))}__computeWeekDayNames(e,t){if(e===void 0||t===void 0)return[];const{weekdays:r,weekdaysShort:n,firstDayOfWeek:o}=e,a=this._applyFirstDayOfWeek(n,o);return this._applyFirstDayOfWeek(r,o).map((d,h)=>({weekDay:d,weekDayShort:a[h]})).slice(0,7)}__focusedDateChanged(e,t){Array.isArray(t)&&t.some(r=>ae(r,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}__computeShowWeekSeparator(e,t){return e&&t&&t.firstDayOfWeek===1}_isToday(e){return ae(new Date,e)}__computeDays(e,t){if(e===void 0||t===void 0)return[];const r=new Date(0,0);for(r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(1);r.getDay()!==t.firstDayOfWeek;)this._dateAdd(r,-1);const n=[],o=r.getMonth(),a=e.getMonth();for(;r.getMonth()===a||r.getMonth()===o;)n.push(r.getMonth()===a?new Date(r.getTime()):null),this._dateAdd(r,1);return n}__computeWeeks(e){return e.reduce((t,r,n)=>(n%7===0&&t.push([]),t[t.length-1].push(r),t),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__computeWeekNumber(e){const t=e.reduce((r,n)=>!r&&n?n:r);return xh(t)}__computeDayAriaLabel(e){if(!e)return"";let t=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(t+=`, ${this.i18n.today}`),t}_showWeekNumbersChanged(e,t){this.__computeShowWeekSeparator(e,t)?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}__computeDatePart(e,t,r,n,o,a,l,d){const h=["date"];return this.__isDayDisabled(e,n,o,a)&&h.push("disabled"),ae(e,t)&&(d||ae(e,l))&&h.push("focused"),this.__isDaySelected(e,r)&&h.push("selected"),this._isToday(e)&&h.push("today"),e<wr(new Date)&&h.push("past"),e>wr(new Date)&&h.push("future"),h.join(" ")}__isDaySelected(e,t){return ae(e,t)}__computeDayAriaSelected(e,t){return String(this.__isDaySelected(e,t))}__isDayDisabled(e,t,r,n){return!nt(e,t,r,n)}__computeDayAriaDisabled(e,t,r,n){return e===void 0||t===void 0&&r===void 0&&n===void 0?"false":String(this.__isDayDisabled(e,t,r,n))}__computeDayTabIndex(e,t){return ae(e,t)?"0":"-1"}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mh extends Oh(se(Z(re(H)))){static get is(){return"vaadin-month-calendar"}static get styles(){return Ph}render(){const i=this.__computeWeekDayNames(this.i18n,this.showWeekNumbers),e=this._weeks,t=!this.__computeShowWeekSeparator(this.showWeekNumbers,this.i18n);return E`
      <div part="month-header" id="month-header" aria-hidden="true">${this._getTitle(this.month,this.i18n)}</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        @touchend="${this._preventDefault}"
        @touchstart="${this._onMonthGridTouchStart}"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" ?hidden="${t}"></th>
            ${i.map(r=>E`
                <th role="columnheader" part="weekday" scope="col" abbr="${r.weekDay}" aria-hidden="true">
                  ${r.weekDayShort}
                </th>
              `)}
          </tr>
        </thead>
        <tbody id="days-container">
          ${e.map(r=>E`
              <tr role="row">
                <td part="week-number" aria-hidden="true" ?hidden="${t}">
                  ${this.__computeWeekNumber(r)}
                </td>
                ${r.map(n=>E`
                    <td
                      role="gridcell"
                      part="${this.__computeDatePart(n,this.focusedDate,this.selectedDate,this.minDate,this.maxDate,this.isDateDisabled,this.enteredDate,this.__hasFocus)}"
                      .date="${n}"
                      ?disabled="${this.__isDayDisabled(n,this.minDate,this.maxDate,this.isDateDisabled)}"
                      tabindex="${this.__computeDayTabIndex(n,this.focusedDate)}"
                      aria-selected="${this.__computeDayAriaSelected(n,this.selectedDate)}"
                      aria-disabled="${this.__computeDayAriaDisabled(n,this.minDate,this.maxDate,this.isDateDisabled)}"
                      aria-label="${this.__computeDayAriaLabel(n)}"
                      >${this._getDate(n)}</td
                    >
                  `)}
              </tr>
            `)}
        </tbody>
      </table>
    `}}U(Mh);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rh=B`
  :host {
    display: grid;
    grid-template-areas:
      'header header'
      'months years'
      'toolbar years';
    grid-template-columns: minmax(0, 1fr) 0;
    height: 100%;
    outline: none;
    overflow: hidden;
  }

  :host([desktop]) {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  :host([fullscreen][years-visible]) {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  [part='years-toggle-button'] {
    display: inline-flex;
    align-items: center;
    border-radius: var(--vaadin-button-border-radius, var(--vaadin-radius-m));
    color: var(--vaadin-text-color);
    font-size: var(--vaadin-button-font-size, inherit);
    font-weight: var(--vaadin-button-font-weight, 500);
    height: var(--vaadin-button-height, auto);
    line-height: var(--vaadin-button-line-height, inherit);
    padding: var(--vaadin-button-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    cursor: var(--vaadin-clickable-cursor);
  }

  :host([years-visible]) [part='years-toggle-button'] {
    background: var(--vaadin-text-color);
    color: var(--vaadin-background-color);
  }

  [hidden] {
    display: none !important;
  }

  ::slotted([slot='months']) {
    --vaadin-infinite-scroller-item-height: calc(
      16.5rem + var(--_vaadin-date-picker-week-numbers-visible, 0) *
        (var(--vaadin-date-picker-week-number-font-size, 0.7rem) * 1.25 * 6)
    );
  }

  :host([desktop]) ::slotted([slot='months']) {
    border-bottom: 1px solid var(--vaadin-border-color-secondary);
  }

  ::slotted([slot='years']) {
    visibility: hidden;
    background: var(--vaadin-date-picker-year-scroller-background, var(--vaadin-background-container));
    width: var(--vaadin-date-picker-year-scroller-width, 3rem);
    box-sizing: border-box;
    border-inline-start: 1px solid
      var(--vaadin-date-picker-year-scroller-border-color, var(--vaadin-border-color-secondary));
    overflow: visible;
    min-height: 0;
    clip-path: inset(0);
  }

  ::slotted([slot='years'])::before {
    background: var(--vaadin-overlay-background, var(--vaadin-background-color));
    border: 1px solid var(--vaadin-date-picker-year-scroller-border-color, var(--vaadin-border-color-secondary));
    width: 16px;
    height: 16px;
    position: absolute;
    left: auto;
    z-index: 1;
    rotate: 45deg;
    translate: calc(-50% - 1px) -50%;
    transform: none;
  }

  :host([dir='rtl']) ::slotted([slot='years'])::before {
    translate: calc(50% + 1px) -50%;
  }

  :host([desktop]) ::slotted([slot='years']),
  :host([years-visible]) ::slotted([slot='years']) {
    visibility: visible;
  }

  [part='toolbar'] {
    display: flex;
    grid-area: toolbar;
    justify-content: space-between;
    padding: var(--vaadin-date-picker-toolbar-padding, var(--vaadin-padding-s));
  }

  :host([fullscreen]) [part='toolbar'] {
    grid-area: header;
    border-bottom: 1px solid var(--vaadin-border-color-secondary);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class so{constructor(i,e){this.query=i,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $h=s=>class extends s{static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Object,value:null,sync:!0},focusedDate:{type:Object,notify:!0,observer:"_focusedDateChanged",sync:!0},_focusedMonthDate:Number,initialPosition:{type:Object,observer:"_initialPositionChanged",sync:!0},_originDate:{type:Object,value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Object,sync:!0},maxDate:{type:Object,sync:!0},isDateDisabled:{type:Function},enteredDate:{type:Date,sync:!0},label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme, isDateDisabled, enteredDate)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate, isDateDisabled)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}_initControllers(){this.addController(new so(this._desktopMediaQuery,e=>{this._desktopMode=e})),this.addController(new ye(this,"today-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",t=>this.__onTodayButtonKeyDown(t)),e.addEventListener("click",this._onTodayTap.bind(this)),this._todayButton=e}})),this.addController(new ye(this,"cancel-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",t=>this.__onCancelButtonKeyDown(t)),e.addEventListener("click",this._cancel.bind(this)),this._cancelButton=e}})),this.__initMonthScroller(),this.__initYearScroller()}reset(){this._closeYearScroller()}focusCancel(){this._cancelButton.focus()}scrollToDate(e,t){const r=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+r,t),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new ye(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:e=>{e.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),e.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),e.addEventListener("keydown",t=>{this.__onMonthCalendarKeyDown(t)}),e.addEventListener("init-done",()=>{const t=[...this.querySelectorAll("vaadin-month-calendar")];t.forEach(r=>{r.addEventListener("selected-date-changed",n=>{this.selectedDate=n.detail.value})}),this.calendars=t}),this._monthScroller=e}}))}__initYearScroller(){this.addController(new ye(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:e=>{e.setAttribute("aria-hidden","true"),pt(e,"tap",t=>{this._onYearTap(t)}),e.addEventListener("custom-scroll",()=>{this._onYearScroll()}),e.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),e.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=e}}))}__updateCancelButton(e,t){e&&(e.textContent=t&&t.cancel)}__updateTodayButton(e,t,r,n,o){e&&(e.textContent=t&&t.today,e.disabled=!this._isTodayAllowed(r,n,o))}__updateCalendars(e,t,r,n,o,a,l,d,h,c,u){e&&e.length&&e.forEach(f=>{f.i18n=t,f.minDate=r,f.maxDate=n,f.isDateDisabled=c,f.focusedDate=a,f.selectedDate=o,f.showWeekNumbers=l,f.ignoreTaps=d,f.enteredDate=u,h?f.setAttribute("theme",h):f.removeAttribute("theme")})}__updateYears(e,t,r){e&&e.length&&e.forEach(n=>{n.selectedDate=t,r?n.setAttribute("theme",r):n.removeAttribute("theme")})}_selectDate(e){return this._dateAllowed(e)?(this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0})),!0):!1}_desktopModeChanged(e){this.toggleAttribute("desktop",e)}_focusedDateChanged(e){this.revealDate(e)}revealDate(e,t=!0){if(!e)return;const r=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const d=this._calculateWeekScrollOffset(e);this._scrollToPosition(r+d,t);return}const n=this._monthScroller.position>r,a=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,l=this._monthScroller.position+a-1<r;n?this._scrollToPosition(r,t):l&&this._scrollToPosition(r-a+1,t)}_calculateWeekScrollOffset(e){const t=new Date(0,0);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(1);let r=0;for(;t.getDate()<e.getDate();)t.setDate(t.getDate()+1),t.getDay()===this.i18n.firstDayOfWeek&&(r+=1);return r/6}_initialPositionChanged(e){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(e)}_repositionYearScroller(){const e=this._monthScroller.position;this._visibleMonthIndex=Math.floor(e),this._yearScroller.position=(e+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=x.debounce(this._debouncer,ie.after(300),()=>{this._ignoreTaps=!1})}_onTodayTap(){const e=this._getTodayMidnight();Math.abs(this._monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const r=(e.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+r*12,!0)}}_scrollToPosition(e,t){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!t){this._monthScroller.position=e,this._monthScroller.forceUpdate(),this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let r;this._revealPromise=new Promise(d=>{r=d});const n=(d,h,c,u)=>(d/=u/2,d<1?c/2*d*d+h:(d-=1,-c/2*(d*(d-2)-1)+h));let o=0;const a=this._monthScroller.position,l=d=>{o||(o=d);const h=d-o;if(h<this.scrollDuration){const c=n(h,a,this._targetPosition-a,this.scrollDuration);this._monthScroller.position=c,window.requestAnimationFrame(l)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:a}})),this._monthScroller.position=this._targetPosition,this._monthScroller.forceUpdate(),this._targetPosition=void 0,r(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(l)}_toggleYearScroller(){this.toggleAttribute("years-visible")}_closeYearScroller(){this.removeAttribute("years-visible")}_yearAfterXMonths(e){return Jn(e).getFullYear()}_differenceInMonths(e,t){return(e.getFullYear()-t.getFullYear())*12-t.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}__toggleDate(e){ae(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate)&&(this._close(),t=!0);break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}t&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,t){switch(e.stopPropagation(),t){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const t=this.focusableDateElement;t&&ae(t.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,t.focus())}}async focusDate(e,t){const r=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=r,t||(this._focusedMonthDate=r.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(t=>{requestAnimationFrame(()=>{setTimeout(()=>{t()})})}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(Zn(e,[this.minDate,this.maxDate]))}_focusAllowedDate(e,t,r){this._dateAllowed(e,void 0,void 0,()=>!1)?this.focusDate(e,r):this._dateAllowed(this.focusedDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(e,t){const r=new Date(0,0);return r.setFullYear(this.focusedDate.getFullYear()),r.setMonth(this.focusedDate.getMonth()+e),t&&r.setDate(this.focusedDate.getDate()+t),r}_moveFocusByDays(e){const t=this._getDateDiff(0,e);this._focusAllowedDate(t,e,!1)}_moveFocusByMonths(e){const t=this._getDateDiff(e),r=t.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),t.setDate(this._focusedMonthDate),t.getMonth()!==r&&t.setDate(0),this._focusAllowedDate(t,e,!0)}_moveFocusInsideMonth(e,t){const r=new Date(0,0);r.setFullYear(e.getFullYear()),t==="minDate"?(r.setMonth(e.getMonth()),r.setDate(1)):(r.setMonth(e.getMonth()+1),r.setDate(0)),this._dateAllowed(r)?this.focusDate(r):this._dateAllowed(e)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t=this.minDate,r=this.maxDate,n=this.isDateDisabled){return nt(e,t,r,n)}_isTodayAllowed(e,t,r){return this._dateAllowed(this._getTodayMidnight(),e,t,r)}_getTodayMidnight(){const e=new Date,t=new Date(0,0);return t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate()),t}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Lh extends $h(se(mt(Z(re(H))))){static get is(){return"vaadin-date-picker-overlay-content"}static get styles(){return Rh}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return E`
      <slot name="months"></slot>
      <slot name="years"></slot>

      <div role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <div
          part="years-toggle-button"
          ?hidden="${this._desktopMode}"
          aria-hidden="true"
          @click="${this._toggleYearScroller}"
        >
          ${this._yearAfterXMonths(this._visibleMonthIndex)}
        </div>
        <slot name="cancel-button"></slot>
      </div>
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","dialog"),this._initControllers()}}U(Lh);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=s=>s??R;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const no=de(s=>class extends Gt(Ur(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged",sync:!0},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus()})}focus(e){this.focusElement&&!this.disabled&&(this.focusElement.focus(),e&&e.focusVisible===!1||this.setAttribute("focus-ring",""))}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0),e===void 0&&this.hasAttribute("tabindex")&&this.removeAttribute("tabindex")}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ji=new WeakMap;function Fh(s){return Ji.has(s)||Ji.set(s,new Set),Ji.get(s)}function zh(s,i){const e=document.createElement("style");e.textContent=s,i===document?document.head.appendChild(e):i.insertBefore(e,i.firstChild)}const Nh=de(s=>class extends s{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=Fh(e);this.slotStyles.forEach(r=>{t.has(r)||(zh(r,e),t.add(r))})}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oo=de(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged",sync:!0},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),!(e===""&&t===void 0)&&(this.__userInput||this._forwardInputValue(e))}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hh=s=>class extends oo(Yt(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){this._shouldKeepFocusOnClearMousedown()&&e.preventDefault(),jr||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&!this.readonly&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_shouldKeepFocusOnClearMousedown(){return Wr(this.inputElement)}};/**
 * @license
 * Copyright (c) 2023 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const er=new Map;function Yr(s){return er.has(s)||er.set(s,new WeakMap),er.get(s)}function ao(s,i){s&&s.removeAttribute(i)}function lo(s,i){if(!s||!i)return;const e=Yr(i);if(e.has(s))return;const t=Rr(s.getAttribute(i));e.set(s,new Set(t))}function Bh(s,i){if(!s||!i)return;const e=Yr(i),t=e.get(s);!t||t.size===0?s.removeAttribute(i):$r(s,i,Ai(t)),e.delete(s)}function tr(s,i,e={newId:null,oldId:null,fromUser:!1}){if(!s||!i)return;const{newId:t,oldId:r,fromUser:n}=e,o=Yr(i),a=o.get(s);if(!n&&a){r&&a.delete(r),t&&a.add(t);return}n&&(a?t||o.delete(s):lo(s,i),ao(s,i)),In(s,i,r);const l=t||Ai(a);l&&$r(s,i,l)}function Vh(s,i){lo(s,i),ao(s,i)}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wh{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,e=!1){const t=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,t,e),e?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(Vh(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(Bh(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,e,t){tr(this.__target,"aria-labelledby",{newId:i,oldId:e,fromUser:t})}__setErrorIdToAriaAttribute(i,e){tr(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(i,e){tr(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ce=document.createElement("div");ce.style.position="fixed";ce.style.clip="rect(0px, 0px, 0px, 0px)";ce.setAttribute("aria-live","polite");document.body.appendChild(ce);let Zt;function Uh(s,i={}){const e=i.mode||"polite",t=i.timeout===void 0?150:i.timeout;e==="alert"?(ce.removeAttribute("aria-live"),ce.removeAttribute("role"),Zt=x.debounce(Zt,Pe,()=>{ce.setAttribute("role","alert")})):(Zt&&Zt.cancel(),ce.removeAttribute("role"),ce.setAttribute("aria-live",e)),ce.textContent="",setTimeout(()=>{ce.textContent=s},t)}/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gr extends ye{constructor(i,e,t,r={}){super(i,e,t,{...r,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(t=>{const r=t.target,n=r===this.node;t.type==="attributes"?n&&this.__updateNodeId(r):(n||r.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const e=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!i.id&&(i.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qh extends Gr{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:e,invalid:t}=this,r=!!(t&&e&&e.trim()!=="");i&&(i.textContent=r?e:"",i.hidden=!r,r&&Uh(e,{mode:"assertive"})),super.updateDefaultNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jh extends Gr{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yh extends Gr{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gh=de(s=>class extends s{static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Yh(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ho=de(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,sync:!0},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0,sync:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}_requestValidation(){this.manualValidation||this.validate()}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kh=s=>class extends ho(Gh(s)){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Wh(this),this._helperController=new jh(this),this._errorController=new qh(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:r}=e.detail;this.__labelChanged(t,r)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:r}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,r)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const co=de(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((t,r)=>{this._delegateAttribute(t,e[r])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((t,r)=>{this._delegateProperty(t,e[r])})}_delegateAttribute(e,t){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",t?"true":!1),typeof t=="boolean"?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uo=de(s=>class extends co(ho(oo(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...t){if(!e)return;const r=this._hasValidConstraints(t),n=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this._requestValidation():n&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(e){e.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qh=s=>class extends Nh(no(uo(Kh(Hh(Yt(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){const e=this.localName;return[`
          /* Needed for Safari, where ::slotted(...)::placeholder does not work */
          ${e} > :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }

          /* Override built-in autofill styles */
          ${e} > input[slot='input']:autofill {
            -webkit-text-fill-color: var(--vaadin-input-field-autofill-color, black) !important;
            background-clip: text !important;
          }

          ${e}:has(> input[slot='input']:autofill)::part(input-field) {
            --vaadin-input-field-background: var(--vaadin-input-field-autofill-background, lightyellow) !important;
            --vaadin-input-field-value-color: var(--vaadin-input-field-autofill-color, black) !important;
            --vaadin-input-field-button-text-color: var(--vaadin-input-field-autofill-color, black) !important;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&e.target===this.inputElement&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=x.debounce(this._preventInputDebouncer,ie.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const t=e.clipboardData.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const t=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(t){console.error(t)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xh extends ye{constructor(i,e,t={}){const{uniqueIdPrefix:r}=t;super(i,"input","input",{initializer:(n,o)=>{o.value&&(n.value=o.value),o.type&&n.setAttribute("type",o.type),n.id=this.defaultId,typeof e=="function"&&e(n)},useUniqueId:!0,uniqueIdPrefix:r})}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Zh{constructor(i,e){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jh=B`
  [part$='button'] {
    color: var(--vaadin-input-field-button-text-color, var(--vaadin-text-color-secondary));
    cursor: var(--vaadin-clickable-cursor);
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    /* Ensure minimum click target (WCAG) */
    padding: max(0px, (24px - 1lh) / 2);
    margin: min(0px, (24px - 1lh) / -2);
  }

  /* Icon */
  [part$='button']::before {
    background: currentColor;
    content: '';
    display: block;
    height: var(--vaadin-icon-size, 1lh);
    width: var(--vaadin-icon-size, 1lh);
    mask-size: var(--vaadin-icon-visual-size, 100%);
    mask-position: 50%;
    mask-repeat: no-repeat;
  }

  :host(:is(:not([clear-button-visible][has-value]), [disabled], [readonly])) [part~='clear-button'] {
    display: none;
  }

  [part~='clear-button']::before {
    mask-image: var(--_vaadin-icon-cross);
  }

  :host(:is([readonly], [disabled])) [part$='button'] {
    color: var(--vaadin-text-color-disabled);
    cursor: var(--vaadin-disabled-cursor);
  }

  @media (forced-colors: active) {
    [part$='button']::before {
      background: CanvasText;
    }

    :host([disabled]) [part$='button'] {
      color: GrayText;
    }

    :host([disabled]) [part$='button']::before {
      background: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ec=B`
  :host {
    --_helper-below-field: initial;
    --_helper-above-field: ;
    --_no-label: initial;
    --_has-label: ;
    --_no-helper: initial;
    --_has-helper: ;
    --_no-error: initial;
    --_has-error: ;
    --_gap: var(--vaadin-input-field-container-gap, var(--vaadin-gap-xs));
    --_gap-s: round(var(--_gap) / 3, 2px);
    display: inline-grid;
    grid-template:
      'label' auto var(--_helper-above-field, 'helper' auto) 'baseline' 0 'input' 1fr var(
        --_helper-below-field,
        'helper' auto
      )
      'error' auto / 100%;
    outline: none;
    cursor: default;
    -webkit-tap-highlight-color: transparent;
  }

  :host([has-label]) {
    --_has-label: initial;
    --_no-label: ;
  }

  :host([has-helper]) {
    --_has-helper: initial;
    --_no-helper: ;
  }

  :host([has-error-message]) {
    --_has-error: initial;
    --_no-error: ;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-helper])) [part='helper-text'],
  :host(:not([has-error-message])) [part='error-message'] {
    display: none;
  }

  /* Baseline alignment guide */
  :host::before {
    content: '\\2003' / '';
    grid-column: 1;
    grid-row: var(--_has-label, label / baseline) var(--_no-label, label / input);
    align-self: var(--_has-label, end) var(--_no-label, start);
    font-size: var(--vaadin-input-field-value-font-size, inherit);
    line-height: var(--vaadin-input-field-value-line-height, inherit);
    padding: var(
      --vaadin-input-field-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    border: var(--vaadin-input-field-border-width, 1px) solid transparent;
    pointer-events: none;
    margin-bottom: var(--_no-label, 0)
      var(
        --_has-label,
        calc(
          var(
              --vaadin-field-baseline-input-height,
              (1lh + var(--vaadin-padding-xs) * 2 + var(--vaadin-input-field-border-width, 1px) * 2)
            ) *
            -1
        )
      );
  }

  [class$='container'] {
    display: contents;
  }

  [part] {
    grid-column: 1;
  }

  [part='label'] {
    font-size: var(--vaadin-input-field-label-font-size, inherit);
    line-height: var(--vaadin-input-field-label-line-height, inherit);
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    color: var(--vaadin-input-field-label-color, var(--vaadin-text-color));
    word-break: break-word;
    position: relative;
    grid-area: label;
    margin-bottom: var(--_helper-below-field, var(--_gap)) var(--_helper-above-field, var(--_no-helper, var(--_gap)));
  }

  ::slotted(label) {
    cursor: inherit;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) ::slotted(label) {
    opacity: 0.5;
  }

  :host([disabled]) [part='label'] ::slotted(label) {
    opacity: 1;
  }

  :host([required]) [part='label'] {
    padding-inline-end: 1em;
  }

  [part='required-indicator'] {
    display: inline-block;
    position: absolute;
    width: 1em;
    text-align: center;
    color: var(--vaadin-input-field-required-indicator-color, var(--vaadin-text-color-secondary));
  }

  [part='required-indicator']::after {
    content: var(--vaadin-input-field-required-indicator, '*');
  }

  :host(:not([required])) [part='required-indicator'] {
    display: none;
  }

  [part='label'],
  [part='helper-text'],
  [part='error-message'] {
    width: min-content;
    min-width: 100%;
  }

  [part='input-field'],
  [part='group-field'],
  [part='input-fields'] {
    grid-area: input;
  }

  [part='input-field'] {
    width: var(--vaadin-field-default-width, 12em);
    max-width: 100%;
    min-width: 100%;
  }

  :host([readonly]) [part='input-field'] {
    cursor: default;
  }

  :host([disabled]) [part='input-field'] {
    cursor: var(--vaadin-disabled-cursor);
  }

  [part='helper-text'] {
    font-size: var(--vaadin-input-field-helper-font-size, inherit);
    line-height: var(--vaadin-input-field-helper-line-height, inherit);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    color: var(--vaadin-input-field-helper-color, var(--vaadin-text-color-secondary));
    grid-area: helper;
    margin-top: var(--_helper-above-field, var(--_gap-s)) var(--_helper-below-field, var(--_gap));
    margin-bottom: var(--_helper-above-field, var(--_gap));
  }

  [part='error-message'] {
    font-size: var(--vaadin-input-field-error-font-size, inherit);
    line-height: var(--vaadin-input-field-error-line-height, inherit);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--vaadin-text-color));
    display: flex;
    gap: var(--vaadin-gap-xs);
    grid-area: error;
    margin-top: var(--_has-helper, var(--_helper-below-field, var(--_gap-s)) var(--_helper-above-field, var(--_gap)))
      var(--_no-helper, var(--_gap));
  }

  [part='error-message']::before {
    content: '';
    display: inline-block;
    flex: none;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    mask: var(--_vaadin-icon-warn) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    background: currentColor;
  }

  :host([theme~='helper-above-field']) {
    --_helper-above-field: initial;
    --_helper-below-field: ;
  }

  @media (forced-colors: active) {
    [part='error-message']::before {
      background: CanvasText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tc=[ec,Jh];/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ic=B`
  :host([opened]) {
    pointer-events: auto;
  }

  :host([week-numbers]) {
    --_vaadin-date-picker-week-numbers-visible: 1;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }

  [part~='toggle-button']::before {
    mask-image: var(--_vaadin-icon-calendar);
  }

  :host([readonly]) [part~='toggle-button'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Xe=new WeakMap,Jt=new WeakMap,ei={},ir=0;const Hs=s=>s&&s.nodeType===Node.ELEMENT_NODE,rr=(...s)=>{console.error(`Error: ${s.join(" ")}. Skip setting aria-hidden.`)},rc=(s,i)=>Hs(s)?i.map(e=>{if(!Hs(e))return rr(e,"is not a valid element"),null;let t=e;for(;t&&t!==s;){if(s.contains(t))return e;t=t.getRootNode().host}return rr(e,"is not contained inside",s),null}).filter(e=>!!e):(rr(s,"is not a valid element"),[]),sc=(s,i,e,t)=>{const r=rc(i,Array.isArray(s)?s:[s]);ei[e]||(ei[e]=new WeakMap);const n=ei[e],o=[],a=new Set,l=new Set(r),d=c=>{if(!c||a.has(c))return;a.add(c);const u=c.assignedSlot;u&&d(u),d(c.parentNode||c.host)};r.forEach(d);const h=c=>{if(!c||l.has(c))return;const u=c.shadowRoot;(u?[...c.children,...u.children]:[...c.children]).forEach(g=>{if(!["template","script","style"].includes(g.localName))if(a.has(g))h(g);else{const C=g.getAttribute(t),P=C!==null&&C!=="false",N=(Xe.get(g)||0)+1,q=(n.get(g)||0)+1;Xe.set(g,N),n.set(g,q),o.push(g),N===1&&P&&Jt.set(g,!0),q===1&&g.setAttribute(e,"true"),P||g.setAttribute(t,"true")}})};return h(i),a.clear(),ir+=1,()=>{o.forEach(c=>{const u=Xe.get(c)-1,f=n.get(c)-1;Xe.set(c,u),n.set(c,f),u||(Jt.has(c)?Jt.delete(c):c.removeAttribute(t)),f||c.removeAttribute(e)}),ir-=1,ir||(Xe=new WeakMap,Xe=new WeakMap,Jt=new WeakMap,ei={})}},nc=(s,i=document.body,e="data-aria-hidden")=>{const t=Array.from(Array.isArray(s)?s:[s]);return i&&t.push(...Array.from(i.querySelectorAll("[aria-live]"))),sc(t,i,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Bs(s,...i){const e=n=>Array.isArray(n),t=n=>n&&typeof n=="object"&&!e(n),r=(n,o)=>{t(o)&&t(n)&&Object.keys(o).forEach(a=>{const l=o[a];t(l)?(n[a]||(n[a]={}),r(n[a],l)):e(l)?n[a]=[...l]:l!=null&&(n[a]=l)})};return i.forEach(n=>{r(s,n)}),s}const oc=(s,i)=>class extends i{static get properties(){return{i18n:{type:Object},__effectiveI18n:{type:Object,sync:!0}}}constructor(){super(),this.i18n=Bs({},s)}get i18n(){return this.__customI18n}set i18n(t){t!==this.__customI18n&&(this.__customI18n=t,this.__effectiveI18n=Bs({},s,this.__customI18n))}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ac{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lc=Object.freeze({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(s){const i=String(s.year).replace(/\d+/u,e=>"0000".substr(e.length)+e);return[s.month+1,s.day,i].join("/")},parseDate(s){const i=s.split("/"),e=new Date;let t,r=e.getMonth(),n=e.getFullYear();if(i.length===3){if(r=parseInt(i[0])-1,t=parseInt(i[1]),n=parseInt(i[2]),i[2].length<3&&n>=0){const o=this.referenceDate?Mt(this.referenceDate):new Date;n=Eh(o,n,r,t)}}else i.length===2?(r=parseInt(i[0])-1,t=parseInt(i[1])):i.length===1&&(t=parseInt(i[0]));if(t!==void 0)return{day:t,month:r,year:n}},formatTitle:(s,i)=>`${s} ${i}`}),dc=s=>class extends oc(lc,no(uo(Yt(s)))){static get properties(){return{_selectedDate:{type:Object,sync:!0},_focusedDate:{type:Object,sync:!0},value:{type:String,notify:!0,value:"",sync:!0},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged",sync:!0},autoOpenDisabled:{type:Boolean,sync:!0},showWeekNumbers:{type:Boolean,value:!1,sync:!0},_fullscreen:{type:Boolean,value:!1,sync:!0},_fullscreenMediaQuery:{value:"(max-width: 450px), (max-height: 450px)"},min:{type:String,sync:!0},max:{type:String,sync:!0},isDateDisabled:{type:Function},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, __effectiveI18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:mi},_focusOverlayOnOpen:Boolean,_overlayContent:{type:Object,sync:!0},__enteredDate:{type:Date,sync:!0}}}static get observers(){return["_selectedDateChanged(_selectedDate, __effectiveI18n)","_focusedDateChanged(_focusedDate, __effectiveI18n)","__updateOverlayContent(_overlayContent, __effectiveI18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers, isDateDisabled, __enteredDate)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}get i18n(){return super.i18n}set i18n(e){super.i18n=e}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e;const t=this.__parseDate(e);this.__setEnteredDate(t)}get __unparsableValue(){return!this._inputElementValue||this.__parseDate(this._inputElementValue)?"":this._inputElementValue}_onFocus(e){super._onFocus(e),this._noInput&&!Ke()&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.__commitParsedOrFocusedDate(),document.hasFocus()&&this._requestValidation())}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new so(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new ac(this)),this._overlayElement=this.$.overlay}updated(e){super.updated(e),(e.has("showWeekNumbers")||e.has("__effectiveI18n"))&&this.toggleAttribute("week-numbers",this.showWeekNumbers&&this.__effectiveI18n.firstDayOfWeek===1)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}focus(e){this._noInput&&!Ke()?this.open():super.focus(e)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}__ensureContent(){if(this._overlayContent)return;const e=document.createElement("vaadin-date-picker-overlay-content");e.setAttribute("slot","overlay"),this.appendChild(e),this._overlayContent=e,e.addEventListener("close",()=>{this._close()}),e.addEventListener("focus-input",this._focusAndSelect.bind(this)),e.addEventListener("date-tap",t=>{this.__commitDate(t.detail.date),this._close()}),e.addEventListener("date-selected",t=>{this.__commitDate(t.detail.date)}),e.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),e.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),e.addEventListener("focused-date-changed",t=>{this._focusedDate=t.detail.value}),e.addEventListener("click",t=>t.stopPropagation())}__parseDate(e){if(!this.__effectiveI18n.parseDate)return;let t=this.__effectiveI18n.parseDate(e);if(t&&(t=Mt(`${t.year}-${t.month+1}-${t.day}`)),t&&!isNaN(t.getTime()))return t}__formatDate(e){if(this.__effectiveI18n.formatDate)return this.__effectiveI18n.formatDate(Xn(e))}checkValidity(){const e=this._inputElementValue,t=!e||!!this._selectedDate&&e===this.__formatDate(this._selectedDate),r=!this._selectedDate||nt(this._selectedDate,this._minDate,this._maxDate,this.isDateDisabled);let n=!0;return this.inputElement&&this.inputElement.checkValidity&&(n=this.inputElement.checkValidity()),t&&r&&n}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldKeepFocusOnClearMousedown(){return this.opened?!0:super._shouldKeepFocusOnClearMousedown()}_shouldRemoveFocus(e){const{relatedTarget:t}=e;return this.opened&&t!==null&&t!==document.body&&!this.contains(t)&&!this._overlayContent.contains(t)?!0:!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}__commitValueChange(){const e=this.__unparsableValue;this.__committedValue!==this.value?(this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValue!==e&&(this._requestValidation(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValue=e}__commitDate(e){this.__keepCommittedValue=!0,this._selectedDate=e,this.__keepCommittedValue=!1,this.__commitValueChange()}_close(){this._focus(),this.close()}_isNoInput(e,t,r,n,o,a){return!e||t&&(!a||o)||r&&o||!n.parseDate}_formatISO(e){return Sh(e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&this.__ensureContent(),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,t){e===void 0||t===void 0||(this.__keepInputValue||this._applyInputValue(e),this.value=this._formatISO(e),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1)}_focusedDateChanged(e,t){e===void 0||t===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,t){const r=Mt(e);if(e&&!r){this.value=t;return}e?ae(this._selectedDate,r)||(this._selectedDate=r,t!==void 0&&this._requestValidation()):this._selectedDate=null,this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValue=""),this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,t,r,n,o,a,l,d,h,c){e&&(e.i18n=t,e.label=r,e.minDate=n,e.maxDate=o,e.focusedDate=a,e.selectedDate=l,e.showWeekNumbers=d,e.isDateDisabled=h,e.enteredDate=c)}__updateOverlayContentTheme(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,t){e&&e.toggleAttribute("fullscreen",t)}_onOverlayEscapePress(e){e.stopPropagation(),this._focusedDate=this._selectedDate,this._applyInputValue(this._selectedDate),this._close()}_onOverlayOpened(){const e=this._overlayContent;e.reset();const t=this._getInitialPosition();e.initialPosition=t;const r=e.focusedDate||t;e.scrollToDate(r),this._ignoreFocusedDateChange=!0,e.focusedDate=r,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(e.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const n=this.inputElement;this._noInput&&n&&(n.blur(),this._overlayContent.focusDateElement());const o=this._noInput?e:this;this.__showOthers=nc(o)}_getInitialPosition(){const e=Mt(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||nt(t,this._minDate,this._maxDate,this.isDateDisabled)?t:this._minDate||this._maxDate?Zn(t,[this._minDate,this._maxDate]):new Date}__commitParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.__effectiveI18n.parseDate){const e=this._inputElementValue||"",t=this.__parseDate(e);t?this.__commitDate(t):(this.__keepInputValue=!0,this.__commitDate(null),this.__keepInputValue=!1)}else this._focusedDate&&this.__commitDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this.__commitParsedOrFocusedDate(),this.inputElement&&this.inputElement.selectionStart&&(this.inputElement.selectionStart=this.inputElement.selectionEnd),!this.value&&!this._keyboardActive&&this._requestValidation()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this.__formatDate(e):""}_setSelectionRange(e,t){this.inputElement&&this.inputElement.setSelectionRange(e,t)}_onChange(e){e.stopPropagation()}_onClick(e){e.composedPath().includes(this._overlayElement)||this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.__commitDate(null)}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&["Tab","Escape"].indexOf(e.key)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){e.composedPath().includes(this._overlayContent)||(this.opened?this.close():this.__commitParsedOrFocusedDate())}_onEscape(e){if(this.opened){this._onOverlayEscapePress(e);return}if(this.clearButtonVisible&&this.value&&!this.readonly){e.stopPropagation(),this._onClearButtonClick(e);return}this.inputElement.value===""?this.__commitDate(null):this._applyInputValue(this._selectedDate)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this._inputElementValue&&!this.autoOpenDisabled&&this.open();const e=this.__parseDate(this._inputElementValue||"");e&&(this._ignoreFocusedDateChange=!0,ae(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1),this.__setEnteredDate(e)}__setEnteredDate(e){e?ae(this.__enteredDate,e)||(this.__enteredDate=e):this.__enteredDate=null}__computeMinOrMaxDate(e){return Mt(e)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hc extends dc(Qh(se(Oe(Z(re(H)))))){static get is(){return"vaadin-date-picker"}static get styles(){return[tc,ic]}static get properties(){return{_positionTarget:{type:Object,sync:!0}}}get clearElement(){return this.$.clearButton}render(){return E`
      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" @click="${this.focus}"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          .readonly="${this.readonly}"
          .disabled="${this.disabled}"
          .invalid="${this.invalid}"
          theme="${yi(this._theme)}"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="field-button clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="field-button toggle-button" slot="suffix" aria-hidden="true" @click="${this._toggle}"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>

        <slot name="tooltip"></slot>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        .owner="${this}"
        ?fullscreen="${this._fullscreen}"
        theme="${yi(this._theme)}"
        .opened="${this.opened}"
        @opened-changed="${this._onOpenedChanged}"
        @vaadin-overlay-open="${this._onOverlayOpened}"
        @vaadin-overlay-close="${this._onVaadinOverlayClose}"
        @vaadin-overlay-closing="${this._onOverlayClosed}"
        restore-focus-on-close
        no-vertical-overlap
        exportparts="backdrop, overlay, content"
        .restoreFocusNode="${this.inputElement}"
        .positionTarget="${this._positionTarget}"
      >
        <slot name="overlay"></slot>
      </vaadin-date-picker-overlay>
    `}ready(){super.ready(),this.addController(new Xh(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e},{uniqueIdPrefix:"search-input"})),this.addController(new Zh(this.inputElement,this._labelController)),this._tooltipController=new Pi(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.shadowRoot.querySelector('[part="field-button toggle-button"]').addEventListener("mousedown",e=>e.preventDefault())}_onOpenedChanged(i){this.opened=i.detail.value}_onVaadinOverlayClose(i){const e=i.detail.sourceEvent;e&&e.composedPath().includes(this)&&!e.composedPath().includes(this._overlayElement)&&i.preventDefault()}_toggle(i){i.stopPropagation(),this.$.overlay.opened?this.close():this.open()}}U(hc);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function gt(s){return s.__cells||Array.from(s.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function te(s,i){[...s.children].forEach(i)}function Bt(s,i){gt(s).forEach(i),s.__detailsCell&&i(s.__detailsCell)}function cc(s,i,e){let t=1;s.forEach(r=>{t%10===0&&(t+=1),r._order=e+t*i,t+=1})}function Mi(s,i,e){switch(typeof e){case"boolean":s.toggleAttribute(i,e);break;case"string":s.setAttribute(i,e);break;default:s.removeAttribute(i);break}}function A(s,i,e){s.classList.toggle(i,e||e===""),s.part.toggle(i,e||e===""),s.part.length===0&&s.removeAttribute("part")}function wi(s,i,e){s.forEach(t=>{A(t,i,e)})}function tt(s,i){const e=gt(s);Object.entries(i).forEach(([t,r])=>{Mi(s,t,r);const n=`${t}-row`;A(s,n,r),wi(e,`${n}-cell`,r)})}function Vs(s,i){const e=gt(s);Object.entries(i).forEach(([t,r])=>{const n=s.getAttribute(t);if(Mi(s,t,r),n){const o=`${t}-${n}-row`;A(s,o,!1),wi(e,`${o}-cell`,!1)}if(r){const o=`${t}-${r}-row`;A(s,o,r),wi(e,`${o}-cell`,r)}})}function Fe(s,i,e,t,r){Mi(s,i,e),r&&A(s,r,!1),A(s,t||`${i}-cell`,e)}function uc(s){return gt(s).find(i=>i._content.querySelector("vaadin-grid-tree-toggle"))}class ot{constructor(i,e){this.__host=i,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=x.debounce(this.__initialCallDebouncer,le,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(e=>{i?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns=this.__currentColumns||[];const e=ot.getColumns(this.__host),t=e.filter(a=>!this.__currentColumns.includes(a)),r=this.__currentColumns.filter(a=>!e.includes(a)),n=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||t.length||r.length||n)&&this.__callback(t,r)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const e=[],t=i._isColumnElement||ot.__isColumnElement;return[...i.children].forEach(r=>{t(r)?e.push(r):r instanceof HTMLSlotElement&&[...r.assignedElements({flatten:!0})].filter(n=>t(n)).forEach(n=>e.push(n))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fc=s=>class extends s{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:{type:Object,sync:!0},_footerCell:{type:Object,sync:!0},_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{Fe(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||Fe(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{Fe(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||Fe(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach(r=>{r.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,r=t?`reorder-${t}-cell`:"",n=`reorder-${e}-cell`;this._allCells.forEach(o=>{Fe(o,"reorder-status",e,n,r)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(r=>{if(r){const n=r.querySelector('[part~="resize-handle"]');if(n&&r.removeChild(n),e){const o=document.createElement("div");A(o,"resize-handle",!0),r.appendChild(o)}}})}_textAlignChanged(e){if(!(e===void 0||this._grid===void 0)){if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}this._allCells.forEach(t=>{t._content.style.textAlign=e})}}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=x.debounce(this._grid._debouncerHiddenChanged,Pe,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,r){const n=r&&r.item&&!t.parentElement.hidden;if(!(n||e===this._headerRenderer||e===this._footerRenderer))return;const a=[t._content,this];n&&a.push(r),e.apply(this,a)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(r=>{if(!r.parentElement)return;const n=this._grid.__getRowModel(r.parentElement);e&&(r._renderer!==e&&this._clearCellContent(r),r._renderer=e,this._runRenderer(e,r,n))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...r){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,r,n){[{cell:e,partName:r},{cell:t,partName:n}].forEach(({cell:o,partName:a})=>{if(o){const l=o.__customParts||[];o.part.remove(...l),o.__customParts=a?a.trim().split(" "):[],o.part.add(...o.__customParts)}})}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...r){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:r}){this.path&&this.__setTextContent(e,pi(this.path,r))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},_c=s=>class extends fc(mt(s)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class pc extends _c(Z(H)){static get is(){return"vaadin-grid-column"}}U(pc);/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gc=B`
  /* stylelint-disable no-duplicate-selectors */
  :host {
    display: flex;
    max-width: 100%;
    height: 400px;
    min-height: var(--_grid-min-height, 0);
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
    background: var(--vaadin-grid-background, var(--vaadin-background-color));
    border: var(--vaadin-grid-border-width, 1px) solid var(--_border-color);
    cursor: default;
    --_border-color: var(--vaadin-grid-border-color, var(--vaadin-border-color-secondary));
    --_row-border-width: var(--vaadin-grid-row-border-width, 1px);
    --_column-border-width: var(--vaadin-grid-column-border-width, 0px);
    --_cell-padding: var(
      --vaadin-grid-cell-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    border-radius: var(--vaadin-grid-border-radius, var(--vaadin-radius-m));
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
    opacity: 0.7;
  }

  /* Variant: No outer border */
  :host([theme~='no-border']) {
    border-width: 0;
    border-radius: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    min-height: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }

  #scroller {
    contain: layout;
    position: relative;
    display: flex;
    width: 100%;
    min-width: 0;
    min-height: 0;
    align-self: stretch;
    overflow: hidden;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: sticky;
    width: 100%;
    left: 0;
    min-height: 1px;
    z-index: 1;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    position: relative;
    border-radius: inherit;
    /* Workaround for a Chrome bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  [no-scrollbars]:is([safari], [firefox]) #table {
    overflow: hidden;
  }

  #header,
  #footer {
    display: block;
    position: sticky;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  #header {
    top: 0;
  }

  #footer {
    bottom: 0;
  }

  th {
    text-align: inherit;
  }

  #header th,
  .reorder-ghost {
    font-size: var(--vaadin-grid-header-font-size, 1em);
    font-weight: var(--vaadin-grid-header-font-weight, 500);
    color: var(--vaadin-grid-header-text-color, var(--vaadin-text-color));
  }

  .row {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    position: relative;
  }

  .row:not(:focus-within) {
    --_non-focused-row-none: none;
  }

  .body-row[loading] .body-cell ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] .body-cell:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items .row:empty {
    height: 100%;
  }

  .cell {
    padding: 0;
    box-sizing: border-box;
  }

  .cell:where(:not(.details-cell)) {
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    white-space: nowrap;
  }

  /*
    Block borders

    ::after - row and cell focus outline
    ::before - header bottom and footer top borders that only appear when scrolling
  */

  .row::after {
    top: 0;
    bottom: calc(var(--_row-border-width) * -1);
  }

  .body-row {
    scroll-margin-bottom: var(--_row-border-width);
  }

  .cell {
    border-block: var(--_row-border-width) var(--_border-color);
    border-top-style: solid;
  }

  .cell::after {
    top: calc(var(--_row-border-width) * -1);
    bottom: calc(var(--_row-border-width) * -1);
  }

  /* Block borders / Last header row and first footer row */

  .last-header-row::before,
  .first-footer-row::before {
    position: absolute;
    inset-inline: 0;
    border-block: var(--_row-border-width) var(--_border-color);
    transform: translateX(var(--_grid-horizontal-scroll-position));
  }

  /* Block borders / First header row */

  .first-header-row-cell {
    border-top-style: none;
  }

  .first-header-row-cell::after {
    top: 0;
  }

  /* Block borders / Last header row */

  :host([overflow~='top']) .last-header-row::before {
    content: '';
    bottom: calc(var(--_row-border-width) * -1);
    border-bottom-style: solid;
  }

  /* Block borders / First body row */

  #table:not([has-header]) .first-row-cell {
    border-top-style: none;
  }

  #table:not([has-header]) .first-row-cell::after {
    top: 0;
  }

  /* Block borders / Last body row */

  .last-row::after {
    bottom: 0;
  }

  .last-row .details-cell,
  .last-row-cell:not(.details-opened-row-cell) {
    border-bottom-style: solid;
  }

  /* Block borders / Last body row without footer */

  :host([all-rows-visible]),
  :host([overflow~='top']),
  :host([overflow~='bottom']) {
    #table:not([has-footer]) .last-row .details-cell,
    #table:not([has-footer]) .last-row-cell:not(.details-opened-row-cell) {
      border-bottom-style: none;

      &::after {
        bottom: 0;
      }
    }
  }

  /* Block borders / First footer row */

  .first-footer-row::after {
    top: calc(var(--_row-border-width) * -1);
  }

  .first-footer-row-cell {
    border-top-style: none;
  }

  :host([overflow~='bottom']),
  :host(:not([overflow~='top']):not([all-rows-visible])) #scroller:not([empty-state]) {
    .first-footer-row::before {
      content: '';
      top: calc(var(--_row-border-width) * -1);
      border-top-style: solid;
    }
  }

  /* Block borders / Last footer row */

  .last-footer-row::after,
  .last-footer-row-cell::after {
    bottom: 0;
  }

  /* Inline borders */

  .cell {
    border-inline: var(--_column-border-width) var(--_border-color);
  }

  .header-cell:not(.first-column-cell),
  .footer-cell:not(.first-column-cell),
  .body-cell:not(.first-column-cell) {
    border-inline-start-style: solid;
  }

  .last-frozen-cell:not(.last-column-cell) {
    border-inline-end-style: solid;

    & + .cell {
      border-inline-start-style: none;
    }
  }

  /* Row and cell background */

  .row {
    background-color: var(--vaadin-grid-row-background-color, var(--vaadin-background-color));
  }

  .cell {
    --_cell-background-image: linear-gradient(
      var(--vaadin-grid-cell-background-color, transparent),
      var(--vaadin-grid-cell-background-color, transparent)
    );

    background-color: inherit;
    background-repeat: no-repeat;
    background-origin: padding-box;
    background-image: var(--_cell-background-image);
  }

  .body-cell {
    --_cell-highlight-background-image: linear-gradient(
      var(--vaadin-grid-row-highlight-background-color, transparent),
      var(--vaadin-grid-row-highlight-background-color, transparent)
    );

    background-image:
      var(--_row-hover-background-image, none), var(--_row-selected-background-image, none),
      var(--_cell-highlight-background-image, none), var(--_row-odd-background-image, none),
      var(--_cell-background-image, none);
  }

  .selected-row {
    --_row-selected-background-color: var(
      --vaadin-grid-row-selected-background-color,
      color-mix(in srgb, currentColor 8%, transparent)
    );
    --_row-selected-background-image: linear-gradient(
      var(--_row-selected-background-color),
      var(--_row-selected-background-color)
    );
  }

  @media (any-hover: hover) {
    .body-row:hover {
      --_row-hover-background-color: var(--vaadin-grid-row-hover-background-color, transparent);
      --_row-hover-background-image: linear-gradient(
        var(--_row-hover-background-color),
        var(--_row-hover-background-color)
      );
    }
  }

  :host([theme~='row-stripes']) .odd-row {
    --_row-odd-background-color: var(
      --vaadin-grid-row-odd-background-color,
      color-mix(in srgb, var(--vaadin-text-color) 4%, transparent)
    );
    --_row-odd-background-image: linear-gradient(var(--_row-odd-background-color), var(--_row-odd-background-color));
  }

  /* Variant: wrap cell contents */

  :host([theme~='wrap-cell-content']) .cell:not(.details-cell) {
    white-space: normal;
  }

  /* Raise highlighted rows above others */
  .row,
  .frozen-cell,
  .frozen-to-end-cell {
    &:focus,
    &:focus-within {
      z-index: 3;
    }
  }

  .details-cell {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .cell ::slotted(vaadin-grid-cell-content) {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: var(--_cell-padding);
    flex: 1;
    min-height: 1lh;
    min-width: 0;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  /* Empty state */
  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
    padding: var(--_cell-padding);
    outline: none;
    border-block: var(--_row-border-width) var(--_border-color);
  }

  #table[has-header] #emptystatecell {
    border-top-style: solid;
  }

  #table[has-footer] #emptystatecell {
    border-bottom-style: solid;
  }

  #emptystatecell:focus-visible {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  /* Reordering styles */
  :host([reordering]) .cell ::slotted(vaadin-grid-cell-content),
  :host([reordering]) .resize-handle,
  #scroller[no-content-pointer-events] .cell ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  .reorder-ghost {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    box-shadow:
      0 0 0 1px hsla(0deg, 0%, 0%, 0.2),
      0 8px 24px -2px hsla(0deg, 0%, 0%, 0.2);
    padding: var(--_cell-padding) !important;
    border-radius: 3px;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    inset-inline-start: 0;
  }

  :host([reordering]) {
    -webkit-user-select: none;
    user-select: none;
  }

  :host([reordering]) .cell {
    /* TODO expose a custom property to control this */
    --_reorder-curtain-filter: brightness(0.9) contrast(1.1);
  }

  :host([reordering]) .cell::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    -webkit-backdrop-filter: var(--_reorder-curtain-filter);
    backdrop-filter: var(--_reorder-curtain-filter);
    outline: 0;
  }

  :host([reordering]) .cell[reorder-status='allowed'] {
    /* TODO expose a custom property to control this */
    --_reorder-curtain-filter: brightness(0.94) contrast(1.07);
  }

  :host([reordering]) .cell[reorder-status='dragging'] {
    --_reorder-curtain-filter: none;
  }

  /* Resizing styles */
  .resize-handle {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
    opacity: 0;
    width: var(--vaadin-focus-ring-width);
    background: var(--vaadin-grid-column-resize-handle-color, var(--vaadin-focus-ring-color));
    transition: opacity 0.2s;
    translate: var(--_column-border-width);
  }

  .last-column-cell .resize-handle {
    translate: 0;
  }

  :host(:not([reordering])) *:not([column-resizing]) .resize-handle:hover,
  .resize-handle:active {
    opacity: 1;
    transition-delay: 0.15s;
  }

  .resize-handle::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 16px;
    translate: calc(-50% + var(--vaadin-focus-ring-width) / 2);
  }

  :host([dir='rtl']) .resize-handle::before {
    translate: calc(50% - var(--vaadin-focus-ring-width) / 2);
  }

  [first-frozen-to-end] .resize-handle::before,
  :is([last-column], [last-frozen]) .resize-handle::before {
    width: 8px;
    translate: 0;
  }

  :is([last-column], [last-frozen]) .resize-handle::before {
    inset-inline-end: 0;
  }

  [frozen-to-end] :is(.resize-handle, .resize-handle::before) {
    inset-inline: 0 auto;
  }

  [frozen-to-end] .resize-handle {
    translate: calc(var(--_column-border-width) * -1);
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  #scroller:is([column-resizing], [range-selecting]) {
    -webkit-user-select: none;
    user-select: none;
  }

  /* Focus outline element, also used for d'n'd indication */
  :is(.row, .cell)::after {
    position: absolute;
    z-index: 3;
    inset-inline: 0;
    pointer-events: none;
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  .row::after {
    transform: translateX(var(--_grid-horizontal-scroll-position));
  }

  .cell:where(:not(.details-cell))::after {
    inset-inline: calc(var(--_column-border-width) * -1);
  }

  .first-column-cell::after {
    inset-inline-start: 0;
  }

  .last-column-cell::after {
    inset-inline-end: 0;
  }

  :host([navigating]) .row:focus,
  :host([navigating]) .cell:focus {
    outline: 0;
  }

  .row:focus-visible,
  .cell:focus-visible {
    outline: 0;
  }

  .row:focus-visible::after,
  .cell:focus-visible::after,
  :host([navigating]) .row:focus::after,
  :host([navigating]) .cell:focus::after {
    content: '';
  }

  /* Drag'n'drop styles */
  :host([dragover]) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-grid-border-width, 1px) * -1);
  }

  .row[dragover] {
    z-index: 100 !important;
  }

  .row[dragover]::after {
    content: '';
  }

  .row[dragover='above']::after {
    outline: 0;
    border-top: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  .row:not(.first-row)[dragover='above']::after {
    top: calc(var(--vaadin-focus-ring-width) / -2);
  }

  .row[dragover='below']::after {
    outline: 0;
    border-bottom: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  .row:not(.last-row)[dragover='below']::after {
    bottom: calc(var(--vaadin-focus-ring-width) / -2);
  }

  .row[dragstart] .cell {
    border-block: none !important;
    padding-block: var(--_row-border-width) !important;
  }

  .row[dragstart] .cell[last-column] {
    border-radius: 0 3px 3px 0;
  }

  .row[dragstart] .cell[first-column] {
    border-radius: 3px 0 0 3px;
  }

  /* Indicates the number of dragged rows */
  /* TODO export custom properties to control styles */
  #scroller .row[dragstart]:not([dragstart=''])::before {
    position: absolute;
    left: var(--_grid-drag-start-x);
    top: var(--_grid-drag-start-y);
    z-index: 100;
    content: attr(dragstart);
    box-sizing: border-box;
    padding: 0.3em;
    color: white;
    background-color: red;
    border-radius: 1em;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: 500;
    min-width: 1.6em;
    text-align: center;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    visibility: hidden;
  }

  #sizer .details-cell,
  #sizer .cell ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  #sizer .cell {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer .cell::before {
    content: '-';
  }
`;/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ws=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),vc=Ws&&Ws[1]>=8,Us=3,mc={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;s=this._iterateItems((e,t)=>{if(i+=this._getPhysicalSizeIncrement(e),i>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{i<this._scrollBottom&&(s=t),i+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=s-this._scrollPosition;const e=i>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const t=Math.round(i/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),le)}},_getReusables(s){let i,e,t;const r=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(s?(i=this._physicalStart,e=c-d):(i=this._physicalEnd,e=h-u);t=this._getPhysicalSizeIncrement(i),e-=t,!(r.length>=l||e<=n);)if(s){if(a+r.length+1>=this._virtualCount||d+t>=c-this._scrollOffset)break;r.push(i),d+=t,i=(i+1)%l}else{if(o-r.length<=0||d+this._physicalSize-t<=u)break;r.push(i),d-=t,i=i===0?l-1:i-1}return{indexes:r,physicalTop:d-this._scrollOffset}},_update(s,i){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),i)for(;i.length;){const e=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const e=this._clamp(this._physicalCount+s,Us,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let n=0;n<e;n++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-r)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),Tn):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),le))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Us))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,Pe))},_iterateItems(s,i){let e,t,r,n;if(arguments.length===2&&i){for(n=0;n<i.length;n++)if(e=i[n],t=this._computeVidx(e),(r=s.call(this,e,t))!=null)return r}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((r=s.call(this,e,t))!=null)return r;for(e=0;e<this._physicalStart;e++,t++)if((r=s.call(this,e,t))!=null)return r}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${s}px`,0,this._physicalItems[i]),s+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const i=this._scrollPosition;!vc&&i>0&&this._resetScrollPosition(i-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(s||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(kt(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,e=this._virtualStart,t=0;const r=this._hiddenContentSize;for(;e<s&&t<=r;)t+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},Pe)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,i,e){return Math.min(e,Math.max(i,s))},_debounce(s,i,e){this._debouncers||(this._debouncers={}),this._debouncers[s]=x.debounce(this._debouncers[s],e,i.bind(this)),Sn(this._debouncers[s])}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bc=1e5,sr=1e3;class fo{constructor({createElements:i,updateElement:e,scrollTarget:t,scrollContainer:r,reorderElements:n,elementsContainer:o,__disableHeightPlaceholder:a}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=r,this.reorderElements=n,this.elementsContainer=o||r,this.__disableHeightPlaceholder=a??!1,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,PREVENT_OVERSCROLL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:d}])=>{const h=d.width===0&&d.height===0;!h&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=h}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("virtualizer-element-focused",d=>this.__onElementFocused(d)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(i/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):t<e?i<sr?(t=i,this._vidxOffset=0):(t=sr,this._vidxOffset=i-t):this._vidxOffset=i-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),kt(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}hostConnected(){this.scrollTarget.offsetParent&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition)}update(i=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(r=>{r.__virtualIndex>=i&&r.__virtualIndex<=e&&(this.__updateElement(r,r.__virtualIndex,!0),t.push(r))}),this.__afterElementsUpdated(t)}_updateMetrics(i){kt();let e=0,t=0;const r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((o,a)=>{t+=this._physicalSizes[o];const l=this._physicalSizes[o];this._physicalSizes[o]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[o])),this._physicalSizes[o]!==l&&(this.__resizeObserver.unobserve(this._physicalItems[o]),this.__resizeObserver.observe(this._physicalItems[o],{box:"border-box"})),e+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},i),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+e)/this._physicalAverageCount))}__getBorderBoxHeight(i){const e=getComputedStyle(i),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const r=parseFloat(e.paddingBottom)||0,n=parseFloat(e.paddingTop)||0,o=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return t+r+n+o+a}__updateElement(i,e,t){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.style.opacity="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==e||t)&&(this.updateElement(i,e),i.__lastUpdatedIndex=e)}__afterElementsUpdated(i){this.__disableHeightPlaceholder||i.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=x.debounce(this.__placeholderClearDebouncer,Pe,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const r=this.__elementHeightQueue.filter(n=>n!==void 0);this.__placeholderHeight=Math.round(r.reduce((n,o)=>n+o,0)/r.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===i);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,t;if(i>0&&(e=this.adjustedFirstVisibleIndex,t=this.__getIndexScrollOffset(e)),this.__size=i,this._itemsChanged({path:"items"}),kt(),i>0){e=Math.min(e,i-1),this.scrollToIndex(e);const r=this.__getIndexScrollOffset(e);t!==void 0&&r!==void 0&&(this._scrollTop+=t-r)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),kt(),this._debounce("_update",this._update,le)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,bc)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const e=this.createElements(i),t=document.createDocumentFragment();return e.forEach(r=>{r.style.position="absolute",t.appendChild(r),this.__resizeObserver.observe(r,{box:"border-box"})}),this.elementsContainer.appendChild(t),e}_assignModels(i){const e=[];this._iterateItems((t,r)=>{const n=this._physicalItems[t];n.hidden=r>=this.size,n.hidden?delete n.__lastUpdatedIndex:(n.__virtualIndex=r+(this._vidxOffset||0),this.__updateElement(n,n.__virtualIndex),e.push(n))},i),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,e,t,r){r.style.transform=`translateY(${e})`}toggleScrollListener(){}__getFocusedElement(i=this.__getVisibleElements()){return i.find(e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(i,e){return e.indexOf(i)===e.length-1&&this.size>i.__virtualIndex+1}__previousFocusableSiblingMissing(i,e){return e.indexOf(i)===0&&i.__virtualIndex>0}__onElementFocused(i){if(!this.reorderElements)return;const e=i.detail.element;if(!e)return;const t=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(e,t)||this.__nextFocusableSiblingMissing(e,t))&&this.flush();const r=this.__getVisibleElements();this.__nextFocusableSiblingMissing(e,r)?(this._scrollTop+=Math.ceil(e.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(e,r)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(e.getBoundingClientRect().top),this.flush())}_scrollHandler(){var e;if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-this._scrollPosition);const i=this._scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const t=i>=0,r=this._getReusables(!t);r.indexes.length&&(this._physicalTop=r.physicalTop,t?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=x.debounce(this.__fixInvalidItemPositioningDebouncer,ie.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning()),(e=this.__overscrollDebouncer)!=null&&e.isActive()||(this.scrollTarget.style.overscrollBehavior="none"),this.__overscrollDebouncer=x.debounce(this.__overscrollDebouncer,ie.after(this.timeouts.PREVENT_OVERSCROLL),()=>{this.scrollTarget.style.overscrollBehavior=null})),this.reorderElements&&(this.__scrollReorderDebouncer=x.debounce(this.__scrollReorderDebouncer,ie.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this._scrollPosition===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}_resizeHandler(){super._resizeHandler();const i=this.adjustedLastVisibleIndex===this.size-1,e=this._physicalTop-this._scrollPosition;if(i&&e>0){const t=Math.ceil(e/this._physicalAverage);this._virtualStart=Math.max(0,this._virtualStart-t),this._physicalStart=Math.max(0,this._physicalStart-t),super.scrollToIndex(this._virtualCount-1),this.scrollTarget.scrollTop=this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight}}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,r=this.adjustedLastVisibleIndex===this.size-1;if(i&&!t||e&&!r){const n=e,o=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(n?-1:1),this._scrollHandler(),this._ratio=o}}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,t)))}else super._increasePoolIfNeeded(i)}get _optPhysicalSize(){const i=super._optPhysicalSize;return i<=0||this.__hasPlaceholders()?i:i+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;const i=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),e=Math.max(...this._physicalSizes);return e>Math.min(...this._physicalSizes)?Math.max(0,e-i):0}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const e=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),t=this.__getFocusedElement(e)||e[0];if(!t)return;const r=t.__virtualIndex-i,n=e.indexOf(t)-r;if(n>0)for(let o=0;o<n;o++)this.elementsContainer.appendChild(e[o]);else if(n<0)for(let o=e.length+n;o<e.length;o++)this.elementsContainer.insertBefore(e[o],e[0]);if(qr){const{transform:o}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=o})}}_adjustVirtualIndexOffset(i){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(t*e)}else{const t=this._vidxOffset,r=sr,n=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<r&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,n),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-r&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,n),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(fo.prototype,mc);/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class yc{constructor(i){this.__adapter=new fo(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,e=this.size-1){this.__adapter.update(i,e)}flush(){this.__adapter.flush()}hostConnected(){this.__adapter.hostConnected()}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wc=s=>class extends s{static get properties(){return{accessibleName:{type:String}}}static get observers(){return["__a11yUpdateGridSize(size, _columnTree, __emptyState)"]}__a11yGetHeaderRowCount(e){return e.filter(t=>t.some(r=>r.headerRenderer||r.path&&r.header!==null||r.header)).length}__a11yGetFooterRowCount(e){return e.filter(t=>t.some(r=>r.footerRenderer)).length}__a11yUpdateGridSize(e,t,r){if(e===void 0||t===void 0)return;const n=this.__a11yGetHeaderRowCount(t),o=this.__a11yGetFooterRowCount(t),l=(r?1:e)+n+o;this.$.table.setAttribute("aria-rowcount",l);const d=t[t.length-1],h=r?1:l&&d&&d.length||0;this.$.table.setAttribute("aria-colcount",h),this.__a11yUpdateHeaderRows(),this.__a11yUpdateFooterRows()}__a11yUpdateHeaderRows(){te(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}__a11yUpdateFooterRows(){te(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this.__a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}__a11yUpdateRowRowindex(e){e.setAttribute("aria-rowindex",e.index+this.__a11yGetHeaderRowCount(this._columnTree)+1)}__a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),Bt(e,r=>{r.setAttribute("aria-selected",!!t)})}__a11yUpdateRowExpanded(e){const t=uc(e);this.__isRowExpandable(e)?(e.setAttribute("aria-expanded","false"),t&&t.setAttribute("aria-expanded","false")):this.__isRowCollapsible(e)?(e.setAttribute("aria-expanded","true"),t&&t.setAttribute("aria-expanded","true")):(e.removeAttribute("aria-expanded"),t&&t.removeAttribute("aria-expanded"))}__a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}__a11ySetRowDetailsCell(e,t){Bt(e,r=>{r!==t&&r.setAttribute("aria-controls",t.id)})}__a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}__a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cc=s=>s.offsetParent&&!s.part.contains("body-cell")&&Vr(s)&&getComputedStyle(s).visibility!=="hidden",xc=s=>class extends s{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,r=t?t.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_shouldPreventCellActivationOnClick(e){const{cell:t}=this._getGridEventLocation(e);return e.defaultPrevented||!t||t.part.contains("details-cell")||t===this.$.emptystatecell||t._content.contains(this.getRootNode().activeElement)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement}_onClick(e){if(this._shouldPreventCellActivationOnClick(e))return;const{cell:t}=this._getGridEventLocation(e);t&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_isFocusable(e){return Cc(e)}};/**
 * @license
 * Copyright (c) 2000 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function it(s,i){return s.split(".").reduce((e,t)=>e[t],i)}function qs(s,i,e){if(e.length===0)return!1;let t=!0;return s.forEach(({path:r})=>{if(!r||r.indexOf(".")===-1)return;const n=r.replace(/\.[^.]*$/u,"");it(n,e[0])===void 0&&(console.warn(`Path "${r}" used for ${i} does not exist in all of the items, ${i} is disabled.`),t=!1)}),t}function Ci(s){return[void 0,null].indexOf(s)>=0?"":isNaN(s)?s.toString():s}function js(s,i){return s=Ci(s),i=Ci(i),s<i?-1:s>i?1:0}function Ec(s,i){return s.sort((e,t)=>i.map(r=>r.direction==="asc"?js(it(r.path,e),it(r.path,t)):r.direction==="desc"?js(it(r.path,t),it(r.path,e)):0).reduce((r,n)=>r!==0?r:n,0))}function Tc(s,i){return s.filter(e=>i.every(t=>{const r=Ci(it(t.path,e)),n=Ci(t.value).toString().toLowerCase();return r.toString().toLowerCase().includes(n)}))}const Sc=s=>(i,e)=>{let t=s?[...s]:[];i.filters&&qs(i.filters,"filtering",t)&&(t=Tc(t,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&qs(i.sortOrders,"sorting",t)&&(t=Ec(t,i.sortOrders));const r=Math.min(t.length,i.pageSize),n=i.page*r,o=n+r,a=t.slice(n,o);e(a,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dc=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){const t=Sc(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,t,r){r&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?this.clearCache():this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ac=s=>class extends s{static get properties(){return{__pendingRecalculateColumnWidths:{type:Boolean,value:!0}}}static get observers(){return["__dataProviderChangedAutoWidth(dataProvider)","__columnTreeChangedAutoWidth(_columnTree)","__flatSizeChangedAutoWidth(_flatSize)"]}updated(i){super.updated(i),i.has("__hostVisible")&&!i.get("__hostVisible")&&this.__tryToRecalculateColumnWidthsIfPending()}__dataProviderChangedAutoWidth(i){this.__hasHadRenderedRowsForColumnWidthCalculation||this.recalculateColumnWidths()}__columnTreeChangedAutoWidth(i){queueMicrotask(()=>this.recalculateColumnWidths())}__flatSizeChangedAutoWidth(i){requestAnimationFrame(()=>{i&&!this.__hasHadRenderedRowsForColumnWidthCalculation?this.recalculateColumnWidths():this.__tryToRecalculateColumnWidthsIfPending()})}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_updateFrozenColumn(){super._updateFrozenColumn(),this.__tryToRecalculateColumnWidthsIfPending()}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,e){if(i==null||i===this)return 0;const t=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth(this.__getParentColumnGroup(i),i));if(!e)return t;const r=i,n=t,o=r._visibleChildColumns.map(h=>this.__getIntrinsicWidth(h)).reduce((h,c)=>h+c,0),a=Math.max(0,n-o),d=this.__getIntrinsicWidth(e)/o*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(n=>{n.__debounceUpdateHeaderFooterRowVisibility&&n.__debounceUpdateHeaderFooterRowVisibility.flush()}),this.__hasHadRenderedRowsForColumnWidthCalculation=this.__hasHadRenderedRowsForColumnWidthCalculation||this._getRenderedRows().length>0,this.__intrinsicWidthCache=new Map;const i=this._firstVisibleIndex,e=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(n=>n.index>=i&&n.index<=e);const t=this.__getAutoWidthColumns(),r=new Set;for(const n of t){let o=this.__getParentColumnGroup(n);for(;o&&!r.has(o);)r.add(o),o=this.__getParentColumnGroup(o)}this.__calculateAndCacheIntrinsicWidths([...t,...r]),t.forEach(n=>{n.width=`${this.__getDistributedWidth(n)}px`}),this.__intrinsicWidthCache.clear()}__getParentColumnGroup(i){const e=(i.assignedSlot||i).parentElement;return e&&e!==this?e:null}__setVisibleCellContentAutoWidth(i,e){i._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t.__measuringAutoWidth?(t.__originalWidth=t.style.width,t.style.width="auto",t.style.position="absolute"):(t.style.width=t.__originalWidth,delete t.__originalWidth,t.style.position="")}),e?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),i.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this.__isReadyForColumnWidthCalculation()){this.__pendingRecalculateColumnWidths=!0;return}this._recalculateColumnWidths()}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}__getAutoWidthColumns(){return this._getColumns().filter(i=>!i.hidden&&i.autoWidth)}__isReadyForColumnWidthCalculation(){if(!this._columnTree)return!1;const i=this.__getAutoWidthColumns().filter(o=>!customElements.get(o.localName));if(i.length)return Promise.all(i.map(o=>customElements.whenDefined(o.localName))).then(()=>{this.__tryToRecalculateColumnWidthsIfPending()}),!1;const e=[...this.$.items.children].some(o=>o.index===void 0),t=this._debouncerHiddenChanged&&this._debouncerHiddenChanged.isActive(),r=this.__debounceUpdateFrozenColumn&&this.__debounceUpdateFrozenColumn.isActive(),n=this.clientHeight>0;return!this._dataProviderController.isLoading()&&!e&&!vi(this)&&!t&&!r&&n}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ic=s=>class extends s{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),pt(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),jr||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),r=t[t.indexOf(this.$.header)-2];if(!r||!r._content||r._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.slice(0,Math.max(0,t.indexOf(this))).some(n=>n.draggable))return;const r=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!r||!r.part.contains("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=r._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const r=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,e.detail.x)){const n=this._columnTree.findIndex(h=>h.includes(r)),o=this._getColumnsInOrder(n),a=o.indexOf(this._draggedColumn),l=o.indexOf(r),d=a<l?1:-1;for(let h=a;h!==l;h+=d)this._swapColumnOrders(this._draggedColumn,o[h+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,r)=>t._order-r._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const r=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(r)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const r=this._reorderGhost.getBoundingClientRect(),n=e-r.width/2,o=t-r.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(r.left-n),this._reorderGhost._top=l-(r.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const r=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(n=>{t.style[n]=r[n]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),cc(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){te(e.parentNode,r=>{/column/u.test(r.localName)&&this._isSwapAllowed(r,e)&&(r._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const r=e!==t,n=e.parentElement===t.parentElement,o=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return r&&n&&o}}_isSwappableByPosition(e,t){const r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),n=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=r.getBoundingClientRect();return o.left>n.left?t>o.right-n.width:t<o.left+n.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let r=e._column;for(;r.parentElement!==t.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===t.parentElement?r:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kc=s=>class extends s{ready(){super.ready();const e=this.$.scroller;pt(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.part.contains("resize-handle")&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.part.contains("resize-handle")&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.part.contains("resize-handle")){let n=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);n.localName==="vaadin-grid-column-group";)n=n._childColumns.slice(0).sort((c,u)=>c._order-u._order).filter(c=>!c.hidden).pop();const o=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(c=>c._column===n);if(d.offsetWidth){const c=getComputedStyle(d._content),u=10+parseInt(c.paddingLeft)+parseInt(c.paddingRight)+parseInt(c.borderLeftWidth)+parseInt(c.borderRightWidth)+parseInt(c.marginLeft)+parseInt(c.marginRight);let f;const g=d.offsetWidth,C=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?f=g+(o?a-C.right:C.left-a):f=g+(o?C.left-a:a-C.right),n.width=`${Math.max(u,f)}px`,n.flexGrow=0}l.sort((c,u)=>c._column._order-u._column._order).forEach((c,u,f)=>{u<f.indexOf(d)&&(c._column.width=`${c.offsetWidth}px`,c._column.flexGrow=0)});const h=this._frozenToEndCells[0];if(h&&this.$.table.scrollWidth>this.$.table.offsetWidth){const c=h.getBoundingClientRect(),u=a-(o?c.right:c.left);(o&&u<=0||!o&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var Ae,dt,ht;const Zr=class Zr{constructor(i,e,t,r,n){Y(this,"context");Y(this,"pageSize");Y(this,"items",[]);Y(this,"pendingRequests",{});L(this,Ae,{});L(this,dt,0);L(this,ht,0);this.context=i,this.pageSize=e,this.size=t,this.parentCache=r,this.parentCacheIndex=n,he(this,ht,t||0)}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(v(this,Ae))}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return v(this,ht)}get size(){return v(this,dt)}set size(i){var t;if(v(this,dt)!==i){if(he(this,dt,i),this.context.placeholder!==void 0){this.items.length=i||0;for(let r=0;r<i;r++)(t=this.items)[r]||(t[r]=this.context.placeholder)}this.items.length>i&&(this.items.length=i||0),Object.keys(this.pendingRequests).forEach(r=>{parseInt(r)*this.pageSize>=this.size&&delete this.pendingRequests[r]})}}recalculateFlatSize(){he(this,ht,!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,e)=>(e.recalculateFlatSize(),i+e.flatSize),0):0)}setPage(i,e){const t=i*this.pageSize;e.forEach((r,n)=>{const o=t+n;(this.size===void 0||o<this.size)&&(this.items[o]=r)})}getSubCache(i){return v(this,Ae)[i]}removeSubCache(i){delete v(this,Ae)[i]}removeSubCaches(){he(this,Ae,{})}createSubCache(i){const e=new Zr(this.context,this.pageSize,0,this,i);return v(this,Ae)[i]=e,e}getFlatIndex(i){const e=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((t,r)=>{const n=r.parentCacheIndex;return e>n?t+r.flatSize:t},e)}};Ae=new WeakMap,dt=new WeakMap,ht=new WeakMap;let Cr=Zr;/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function _o(s,i,e=0){let t=i;for(const r of s.subCaches){const n=r.parentCacheIndex;if(t<=n)break;if(t<=n+r.flatSize)return _o(r,t-n-1,e+1);t-=r.flatSize}return{cache:s,item:s.items[t],index:t,page:Math.floor(t/s.pageSize),level:e}}function po({getItemId:s},i,e,t=0,r=0){for(let n=0;n<i.items.length;n++){const o=i.items[n];if(o&&s(o)===s(e))return{cache:i,level:t,item:o,index:n,page:Math.floor(n/i.pageSize),subCache:i.getSubCache(n),flatIndex:r+i.getFlatIndex(n)}}for(const n of i.subCaches){const o=r+i.getFlatIndex(n.parentCacheIndex),a=po({getItemId:s},n,e,t+1,o+1);if(a)return a}}function go(s,[i,...e],t=0){i===1/0&&(i=s.size-1);const r=s.getFlatIndex(i),n=s.getSubCache(i);return n&&n.flatSize>0&&e.length?go(n,e,t+r+1):t+r}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var Si,vo,Ut,xr,ct,hi,qt,Er;class Pc extends EventTarget{constructor(e,{size:t,pageSize:r,isExpanded:n,getItemId:o,isPlaceholder:a,placeholder:l,dataProvider:d,dataProviderParams:h}){super();L(this,Si);L(this,Ut);L(this,ct);L(this,qt);Y(this,"host");Y(this,"dataProvider");Y(this,"dataProviderParams");Y(this,"pageSize");Y(this,"isExpanded");Y(this,"getItemId");Y(this,"rootCache");Y(this,"placeholder");Y(this,"isPlaceholder");this.host=e,this.pageSize=r,this.getItemId=o,this.isExpanded=n,this.placeholder=l,this.isPlaceholder=a,this.dataProvider=d,this.dataProviderParams=h,this.rootCache=X(this,Ut,xr).call(this,t)}get flatSize(){return this.rootCache.flatSize}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=X(this,Ut,xr).call(this,this.rootCache.size)}getFlatIndexContext(e){return _o(this.rootCache,e)}getItemContext(e){return po({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return go(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:t,page:r,item:n}=this.getFlatIndexContext(e);X(this,qt,Er).call(this,n)||X(this,ct,hi).call(this,t,r)}ensureFlatIndexHierarchy(e){const{cache:t,item:r,index:n}=this.getFlatIndexContext(e);if(X(this,qt,Er).call(this,r)&&this.isExpanded(r)&&!t.getSubCache(n)){const o=t.createSubCache(n);X(this,ct,hi).call(this,o,0)}}loadFirstPage(){X(this,ct,hi).call(this,this.rootCache,0)}_shouldLoadCachePage(e,t){return!0}}Si=new WeakSet,vo=function(){return{isExpanded:this.isExpanded,placeholder:this.placeholder}},Ut=new WeakSet,xr=function(e){return new Cr(v(this,Si,vo),this.pageSize,e)},ct=new WeakSet,hi=function(e,t){if(!this.dataProvider||e.pendingRequests[t]||!this._shouldLoadCachePage(e,t))return;let r={page:t,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(r={...r,...this.dataProviderParams()});const n=(o,a)=>{e.pendingRequests[t]===n&&(a!==void 0?e.size=a:r.parentItem&&(e.size=o.length),e.setPage(t,o),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[t],this.dispatchEvent(new CustomEvent("page-loaded")))};e.pendingRequests[t]=n,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(r,n)},qt=new WeakSet,Er=function(e){return this.isPlaceholder?!this.isPlaceholder(e):this.placeholder?e!==this.placeholder:!!e};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oc=s=>class extends s{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new Pc(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}__getRowLevel(e){const{level:t}=this._dataProviderController.getFlatIndexContext(e.index);return t}__getRowItem(e){const{item:t}=this._dataProviderController.getFlatIndexContext(e.index);return t}__ensureRowItem(e){this._dataProviderController.ensureFlatIndexLoaded(e.index)}__ensureRowHierarchy(e){this._dataProviderController.ensureFlatIndexHierarchy(e.index)}getItemId(e){return this.itemIdPath?pi(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_hasChildren(e){return this.itemHasChildrenPath&&e&&!!pi(this.itemHasChildrenPath,e)}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const r=t||[],n=new Set;return r.forEach(o=>{n.add(this.getItemId(o))}),n}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldLoadAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach(e=>this.__ensureRowHierarchy(e)),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=x.debounce(this._debouncerApplyCachedData,ie.after(0),()=>{this._setLoading(!1);const e=this._shouldLoadAllRenderedRowsAfterPageLoad;this._shouldLoadAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach(t=>{this.__updateRow(t),e&&this.__ensureRowItem(t)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=x.debounce(this.__clearCacheDebouncer,le,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size||0,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=x.debounce(this._debouncerCheckSize,ie.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let r=-1;return t.forEach((n,o)=>{this._itemsEqual(n,e)&&(r=o)}),r}scrollToIndex(...e){if(!this.__virtualizer||!this.clientHeight||!this._columnTree){this.__pendingScrollToIndexes=e;return}let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);this._dataProviderController.isLoading()&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dt={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},Te={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Mc=s=>class extends s{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}const r=t.getBoundingClientRect();e.dataTransfer.setDragImage(t,e.clientX-r.left,e.clientY-r.top);let n=[t];this._isSelected(t._item)&&(n=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),this.__draggedItems=n.map(a=>a._item),e.dataTransfer.setData("text",this.__formatDefaultTransferData(n)),tt(t,{dragstart:n.length>1?`${n.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-r.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-r.top+10}px`),requestAnimationFrame(()=>{tt(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()});const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>t.setAttribute("dragstart",a)}});o.originalEvent=e,this.dispatchEvent(o)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(e){this.dropMode&&(e.stopPropagation(),this._clearDragStyles())}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(r=>r.localName==="tr");if(this.__updateRowScrollPositionProperty(t),!this._flatSize||this.dropMode===Dt.ON_GRID)this._dropLocation=Te.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===Dt.BETWEEN||this.dropMode===Dt.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(r=>!r.hidden).pop(),this._dropLocation=Te.BELOW;else return}else{const r=t.getBoundingClientRect();if(this._dropLocation=Te.ON_TOP,this.dropMode===Dt.BETWEEN){const n=e.clientY-r.top<r.bottom-e.clientY;this._dropLocation=n?Te.ABOVE:Te.BELOW}else this.dropMode===Dt.ON_TOP_OR_BETWEEN&&(e.clientY-r.top<r.height/3?this._dropLocation=Te.ABOVE:e.clientY-r.top>r.height/3*2&&(this._dropLocation=Te.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===Te.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&Vs(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(e){if(e.target.contains(this)){const t=[e.target,this.$.items,this.$.scroller],r=t.map(n=>n.style.cssText);this.$.table.scrollHeight>2e4&&(this.$.scroller.style.display="none"),Yn&&(e.target.style.willChange="transform"),qr&&(this.$.items.style.flexShrink=1),requestAnimationFrame(()=>{t.forEach((n,o)=>{n.style.cssText=r[o]})})}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,n=t-e+this.__dndAutoScrollThreshold,o=e-r+this.__dndAutoScrollThreshold;let a=0;if(o>0?a=o*2:n>0&&(a=-n*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(r=>{const n=r.getBoundingClientRect();return n.bottom>e&&n.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),te(this.$.items,e=>{Vs(e,{dragover:null})})}__updateDragSourceParts(e,t){tt(e,{"drag-source":this.__draggedItems.includes(t.item)})}_onDrop(e){if(this.dropMode&&this._dropLocation){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(n=>({type:n,data:e.dataTransfer.getData(n)}));this._clearDragStyles();const r=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});r.originalEvent=e,this.dispatchEvent(r)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(r=>!r.hidden&&!r.part.contains("details-cell")).sort((r,n)=>r._column._order>n._column._order?1:-1).map(r=>r._content.textContent.trim()).filter(r=>r).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){te(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const r=this.loading||e.hasAttribute("loading"),n=!this.rowsDraggable||r||this.dragFilter&&!this.dragFilter(t),o=!this.dropMode||r||this.dropFilter&&!this.dropFilter(t);Bt(e,a=>{n?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),tt(e,{"drag-disabled":!!n,"drop-disabled":!!o})}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function mo(s,i){if(!s||!i||s.length!==i.length)return!1;for(let e=0,t=s.length;e<t;e++)if(s[e]instanceof Array&&i[e]instanceof Array){if(!mo(s[e],i[e]))return!1}else if(s[e]!==i[e])return!1;return!0}const Rc=s=>class extends s{static get properties(){return{_columnTree:{type:Object,sync:!0}}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return ot.getColumns(e)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,r)=>t.concat(r),[])}_getColumnTree(){const e=ot.getColumns(this),t=[e];let r=e;for(;this._hasColumnGroups(r);)r=this._flattenColumnGroups(r),t.push(r);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=x.debounce(this.__updateColumnTreeDebouncer,le,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();mo(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new ot(this,(e,t)=>{const r=t.flatMap(o=>o._allCells),n=o=>r.filter(a=>a&&a._content.contains(o)).length;this.__removeSorters(this._sorters.filter(n)),this.__removeFilters(this._filters.filter(n)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=x.debounce(this._debouncerCheckImports,ie.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,r)=>t._column._order-r._column._order).forEach((t,r,n)=>{Fe(t,"first-column",r===0),Fe(t,"last-column",r===n.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $c=s=>class extends s{getEventContext(e){const t={},{cell:r}=this._getGridEventLocation(e);return r&&(t.section=["body","header","footer","details"].find(n=>r.part.contains(`${n}-cell`)),r._column&&(t.column=r._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(r.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lc=s=>class extends s{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ti(s){return s instanceof HTMLTableRowElement}function ii(s){return s instanceof HTMLTableCellElement}function $e(s){return s.matches('[part~="details-cell"]')}const Fc=s=>class extends s{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(ti)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const r=this[t];if(e){const n=r&&r.parentElement;ii(r)?this[t]=n:ii(n)&&(this[t]=n.parentElement)}else if(!e&&ti(r)){const n=r.firstElementChild;this[t]=n._focusButton||n}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&A(t,"focused-cell",!1),e&&A(e,"focused-cell",!0)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let r=this._itemsFocusable.parentElement,n=this._itemsFocusable;if(r){ii(r)&&(n=r,r=r.parentElement);const o=[...r.children].indexOf(n);this._itemsFocusable=this.__getFocusable(t,t.children[o])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let r;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space";break}this._detectInteracting(e),this.interacting&&r!=="Interaction"&&(r=void 0),r&&this[`_on${r}KeyDown`](e,t)}__ensureFlatIndexInViewport(e){const t=[...this.$.items.children].find(r=>r.index===e);t?this.__scrollIntoViewport(t):this._scrollToFlatIndex(e)}__isRowExpandable(e){return this._hasChildren(e._item)&&!this._isExpanded(e._item)}__isRowCollapsible(e){return this._isExpanded(e._item)}_onNavigationKeyDown(e,t){e.preventDefault();const r=this.__isRTL,n=e.composedPath().find(ti),o=e.composedPath().find(ii);let a=0,l=0;switch(t){case"ArrowRight":a=r?-1:1;break;case"ArrowLeft":a=r?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(n)){const c=this.__getIndexInGroup(n,this._focusedItemIndex);this._scrollToFlatIndex(c)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!n||!this.__rowFocusMode&&!o)return;const d=r?"ArrowLeft":"ArrowRight",h=r?"ArrowRight":"ArrowLeft";if(t===d){if(this.__rowFocusMode){if(this.__isRowExpandable(n)){this.expandItem(n._item);return}this.__rowFocusMode=!1,this._onCellNavigation(n.firstElementChild,0,0);return}}else if(t===h)if(this.__rowFocusMode){if(this.__isRowCollapsible(n)){this.collapseItem(n._item);return}}else{const c=[...n.children].sort((u,f)=>u._order-f._order);if(o===c[0]||$e(o)){this.__rowFocusMode=!0,this._onRowNavigation(n,0);return}}this.__rowFocusMode?this._onRowNavigation(n,l):this._onCellNavigation(o,a,l)}_onRowNavigation(e,t){const{dstRow:r}=this.__navigateRows(t,e);r&&r.focus()}__getIndexInGroup(e,t){const r=e.parentNode;return r===this.$.items?t!==void 0?t:e.index:[...r.children].indexOf(e)}__navigateRows(e,t,r){const n=this.__getIndexInGroup(t,this._focusedItemIndex),o=t.parentNode,a=(o===this.$.items?this._flatSize:o.children.length)-1;let l=Math.max(0,Math.min(n+e,a));if(o!==this.$.items){if(l>n)for(;l<a&&o.children[l].hidden;)l+=1;else if(l<n)for(;l>0&&o.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[l]}}let d=!1;if(r){const h=$e(r);if(o===this.$.items){const c=t._item,{item:u}=this._dataProviderController.getFlatIndexContext(l);h?d=e===0:d=e===1&&this._isDetailsOpened(c)||e===-1&&l!==n&&this._isDetailsOpened(u),d!==h&&(e===1&&d||e===-1&&!d)&&(l=n)}}return this.__ensureFlatIndexInViewport(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find(h=>!h.hidden&&h.index===l),dstIsRowDetails:d}}_onCellNavigation(e,t,r){const n=e.parentNode,{dstRow:o,dstIsRowDetails:a}=this.__navigateRows(r,n,e);if(!o)return;let l=[...n.children].indexOf(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(u=>u._column===e._column));const d=$e(e),h=n.parentNode,c=this.__getIndexInGroup(n,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(h,c).filter(u=>!u.hidden)[l]._order),a)[...o.children].find($e).focus();else{const u=this.__getIndexInGroup(o,this._focusedItemIndex),f=this._getColumns(h,u).filter(D=>!D.hidden),g=f.map(D=>D._order).sort((D,I)=>D-I),C=g.length-1,P=g.indexOf(g.slice(0).sort((D,I)=>Math.abs(D-this._focusedColumnOrder)-Math.abs(I-this._focusedColumnOrder))[0]),N=r===0&&d?P:Math.max(0,Math.min(P+t,C));N!==P&&(this._focusedColumnOrder=void 0);const Q=f.reduce((D,I,ne)=>(D[I._order]=ne,D),{})[g[N]];let G;if(this.$.items.contains(e)){const D=this.$.sizer.children[Q];this._lazyColumns&&(this.__isColumnInViewport(D._column)||D.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),G=[...o.children].find(I=>I._column===D._column),this._scrollHorizontallyToCell(G)}else G=o.children[Q],this._scrollHorizontallyToCell(G);G.focus({preventScroll:!0})}}_onInteractionKeyDown(e,t){const r=e.composedPath()[0],n=r.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(r.type);let o;switch(t){case"Enter":o=this.interacting?!n:!0;break;case"Escape":o=!1;break;case"F2":o=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==o&&a!==null)if(o){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const r=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit];let n=r.indexOf(e);for(n+=t;n>=0&&n<=r.length-1;){let a=r[n];if(a&&!this.__rowFocusMode&&(a=r[n].parentNode),!a||a.hidden)n+=t;else break}let o=r[n];if(o&&!this.__isHorizontallyInViewport(o)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(o===this._headerFocusable)o=a._headerCell;else if(o===this._itemsFocusable){const l=o._column._cells.indexOf(o);o=a._cells[l]}else o===this._footerFocusable&&(o=a._footerCell)}return o}_onTabKeyDown(e){let t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);t&&(e.stopPropagation(),t===this._itemsFocusable&&(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),t=this._itemsFocusable),t.focus(),t!==this.$.table&&t!==this.$.focusexit&&e.preventDefault(),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],r=ti(t);(r||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(r?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(r?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const r=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",r)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:r,row:n}=this._getGridEventLocation(e);if(!(!r&&!this.__rowFocusMode)&&(this._detectInteracting(e),t&&(r||n)))if(this._activeRowGroup=t,t===this.$.header?this._headerFocusable=this.__getFocusable(n,r):t===this.$.items?(this._itemsFocusable=this.__getFocusable(n,r),this._focusedItemIndex=n.index):t===this.$.footer&&(this._footerFocusable=this.__getFocusable(n,r)),r){const o=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&o.section==="body",!this.__pendingBodyCellFocus&&r!==this.$.emptystatecell&&r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:o}})),this._focusedCell=r._focusButton||r,Ke()&&e.target===r&&this._showTooltip(e)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(r=>r.localName==="slot"&&this.shadowRoot.contains(r));this._setInteracting(t),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),r=this.interacting&&t===this._activeRowGroup;e.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=x.debounce(this.__preventScrollerRotatingCellFocusDebouncer,Pe,()=>{const e=this._activeRowGroup===this.$.items;this._getRenderedRows().some(r=>r.index===this._focusedItemIndex)?(this.__updateItemsFocusable(),e&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):e&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))}))}_getColumns(e,t){let r=this._columnTree.length-1;return e===this.$.header?r=t:e===this.$.footer&&(r=this._columnTree.length-1-t),this._columnTree[r]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(n=>n.offsetHeight),r=t?[...t.children].find(n=>!n.hidden):null;t&&r&&(this[`_${e}Focusable`]=this.__getFocusable(t,r))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(r=>!r.hidden):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||$e(e))return;const t=e.getBoundingClientRect(),r=e.parentNode,n=Array.from(r.children).indexOf(e),o=this.$.table.getBoundingClientRect(),a=this.$.table.clientWidth-this.$.table.offsetWidth;let l=o.left-(this.__isRTL?a:0),d=o.right+(this.__isRTL?0:a);for(let h=n-1;h>=0;h--){const c=r.children[h];if(!(c.hasAttribute("hidden")||$e(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().right;break}}for(let h=n+1;h<r.children.length;h++){const c=r.children[h];if(!(c.hasAttribute("hidden")||$e(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){d=c.getBoundingClientRect().left;break}}t.left<l&&(this.$.table.scrollLeft+=t.left-l),t.right>d&&(this.$.table.scrollLeft+=t.right-d)}_getGridEventLocation(e){const t=e.__composedPath||e.composedPath(),r=t.indexOf(this.$.table),n=r>=1?t[r-1]:null,o=r>=2?t[r-2]:null,a=r>=3?t[r-3]:null;return{section:n,row:o,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zc=s=>class extends s{static get properties(){return{__hostVisible:{type:Boolean,value:!1},__tableRect:Object,__headerRect:Object,__itemsRect:Object,__footerRect:Object}}ready(){super.ready();const i=new ResizeObserver(e=>{e.findLast(({target:l})=>l===this)&&(this.__hostVisible=this.checkVisibility());const r=e.findLast(({target:l})=>l===this.$.table);r&&(this.__tableRect=r.contentRect);const n=e.findLast(({target:l})=>l===this.$.header);n&&(this.__headerRect=n.contentRect);const o=e.findLast(({target:l})=>l===this.$.items);o&&(this.__itemsRect=o.contentRect);const a=e.findLast(({target:l})=>l===this.$.footer);a&&(this.__footerRect=a.contentRect)});i.observe(this),i.observe(this.$.table),i.observe(this.$.header),i.observe(this.$.items),i.observe(this.$.footer)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nc=s=>class extends s{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)})})}_rowDetailsRendererChanged(e){e&&this._columnTree&&te(this.$.items,t=>{t.querySelector("[part~=details-cell]")||(this.__initRow(t,this._columnTree[this._columnTree.length-1]),this.__updateRow(t))})}_detailsOpenedItemsChanged(e,t){te(this.$.items,r=>{if(r.hasAttribute("details-opened")){this.__updateRow(r);return}t&&this._isDetailsOpened(r._item)&&this.__updateRow(r)})}_configureDetailsCell(e){A(e,"cell",!0),A(e,"details-cell",!0),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const r=e.querySelector('[part~="details-cell"]');r&&(r.hidden=!t,!r.hidden&&this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,t)))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){te(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Kr(s,i){const{scrollLeft:e}=s;return i!=="rtl"?e:s.scrollWidth-s.clientWidth+e}function Hc(s,i,e){i!=="rtl"?s.scrollLeft=e:s.scrollLeft=s.clientWidth-s.scrollWidth+e}/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qr{constructor(i,e){this.host=i,this.scrollTarget=e||i,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){const{host:i}=this;this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=x.debounce(this.__debounceOverflow,Pe,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(i),[...i.children].forEach(e=>{this.__resizeObserver.observe(e)}),this.__childObserver=new MutationObserver(e=>{e.forEach(({addedNodes:t,removedNodes:r})=>{t.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(n)}),r.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(n)})}),this.__updateOverflow()}),this.__childObserver.observe(i,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const i=this.scrollTarget;let e="";i.scrollTop>0&&(e+=" top"),Math.ceil(i.scrollTop)<Math.ceil(i.scrollHeight-i.clientHeight)&&(e+=" bottom");const t=Math.abs(i.scrollLeft);t>0&&(e+=" start"),Math.ceil(t)<Math.ceil(i.scrollWidth-i.clientWidth)&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ys={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},Bc=s=>class extends s{static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]}}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath(),r=t[t.indexOf(this.$.items)-1];if(r){if(!this._isMousedown){const n=this.$.table.clientHeight,o=this.$.header.clientHeight,a=this.$.footer.clientHeight,l=n-o-a,h=r.clientHeight>l?e.target:r;this.__scrollIntoViewport(h)}this.$.table.contains(e.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:r}}))}}),this.$.table.addEventListener("scroll",()=>this._afterScroll()),this.__overflowController=new Qr(this,this.$.table),this.addController(this.__overflowController)}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e);const t=[...this.$.items.children].find(r=>r.index===e);this.__scrollIntoViewport(t)}__scrollIntoViewport(e){if(!e)return;const t=e.getBoundingClientRect(),r=getComputedStyle(e),n=t.top+parseInt(r.scrollMarginTop||0),o=t.bottom+parseInt(r.scrollMarginBottom||0),a=this.$.footer.getBoundingClientRect().top,l=this.$.header.getBoundingClientRect().bottom;o>a?this.$.table.scrollTop+=o-a:n<l&&(this.$.table.scrollTop-=l-n)}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=x.debounce(this._debounceScrolling,ie.after(Ys.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._debounceColumnContentVisibility=x.debounce(this._debounceColumnContentVisibility,ie.after(Ys.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())})}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach(r=>{const n=this._lazyColumns&&!this.__isColumnInViewport(r);r._bodyContentHidden!==n&&(t=!0,r._cells.forEach(o=>{if(o!==r._sizerCell){if(n)o.remove();else if(o.__parentRow){const a=[...o.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(r));o.__parentRow.insertBefore(o,a)}}})),r._bodyContentHidden=n}),t&&this._frozenCellsChanged(),this._lazyColumns){const r=[...e].reverse().find(a=>a.frozen),n=this.__getColumnEnd(r),o=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(o)-n,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_frozenCellsChanged(){this._debouncerCacheElements=x.debounce(this._debouncerCacheElements,le,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=x.debounce(this.__debounceUpdateFrozenColumn,le,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((n,o)=>n._order-o._order);let t,r;for(let n=0;n<e.length;n++){const o=e[n];o._lastFrozen=!1,o._firstFrozenToEnd=!1,r===void 0&&o.frozenToEnd&&!o.hidden&&(r=n),o.frozen&&!o.hidden&&(t=n)}t!==void 0&&(e[t]._lastFrozen=!0),r!==void 0&&(e[r]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,r=Math.max(0,this.$.table.scrollLeft),n=Kr(this.$.table,this.getAttribute("dir")),o=`translate(${-r}px, 0)`;this.$.header.style.transform=o,this.$.footer.style.transform=o,this.$.items.style.transform=o;const a=this.__isRTL?n+t-e:r;this.__horizontalScrollPosition=a;const l=`translate(${a}px, 0)`;this._frozenCells.forEach(C=>{C.style.transform=l});const d=this.__isRTL?n:r+t-e,h=`translate(${d}px, 0)`;let c=h;if(this._lazyColumns&&this._areSizerCellsAssigned()){const C=this._getColumnsInOrder(),P=[...C].reverse().find(D=>!D.frozenToEnd&&!D._bodyContentHidden),N=this.__getColumnEnd(P),q=C.find(D=>D.frozenToEnd),Q=this.__getColumnStart(q);c=`translate(${d+(Q-N)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(C=>{this.$.items.contains(C)?C.style.transform=c:C.style.transform=h});const u=this.shadowRoot.querySelector("[part~='row']:focus");u&&this.__updateRowScrollPositionProperty(u);const f=this.$.header.querySelector("[part~='last-header-row']");f&&this.__updateRowScrollPositionProperty(f);const g=this.$.footer.querySelector("[part~='first-footer-row']");g&&this.__updateRowScrollPositionProperty(g)}__updateRowScrollPositionProperty(e){if(!(e instanceof HTMLTableRowElement))return;const t=`${this.__horizontalScrollPosition}px`;e.style.getPropertyValue("--_grid-horizontal-scroll-position")!==t&&e.style.setProperty("--_grid-horizontal-scroll-position",t)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vc=s=>class extends s{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function,notify:(()=>!0)()},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}__isItemSelectable(e){return!this.isItemSelectable||!e?!0:this.isItemSelectable(e)}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const r=t||[],n=new Set;return r.forEach(o=>{n.add(this.getItemId(o))}),n}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Gs="prepend";const Wc=s=>class extends s{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Gs},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Gs=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>!e.includes(t)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(t=>{t._order=null});const e=this._getActiveSorters();e.length>1&&e.forEach((t,r)=>{t._order=r})}__updateSorter(e,t,r){if(!e.direction&&!this._sorters.includes(e))return;e._order=null;const n=this._sorters.filter(o=>o!==e);this.multiSort&&(!this.multiSortOnShiftClick||!r)||this.multiSortOnShiftClick&&t?this.multiSortPriority==="append"?this._sorters=[...n,e]:this._sorters=[e,...n]:(e.direction||this.multiSortOnShiftClick)&&(this._sorters=e.direction?[e]:[],n.forEach(o=>{o._order=null,o.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this.__a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(e=>e.direction&&e.isConnected)}_mapSorters(){return this._getActiveSorters().map(e=>({path:e.path,direction:e.direction}))}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Uc=s=>class extends s{static get properties(){return{cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellPartNames(){te(this.$.items,e=>{e.hidden||this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellPartNames(e,t){Bt(e,r=>{if(r.__generatedParts&&r.__generatedParts.forEach(n=>{A(r,n,null)}),this.cellPartNameGenerator&&!e.hasAttribute("loading")){const n=this.cellPartNameGenerator(r._column,t);r.__generatedParts=n&&n.split(" ").filter(o=>o.length>0),r.__generatedParts&&r.__generatedParts.forEach(o=>{A(r,o,!0)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qc=s=>class extends Ac(Dc(Oc(Rc(xc(Bc(Vc(Wc(Nc(Fc(wc(Lc(Ic(kc($c(Mc(Uc(Ur(zc(s))))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:qr},_ios:{type:Boolean,value:mi},_firefox:{type:Boolean,value:fh},_android:{type:Boolean,value:Fs},_touchDevice:{type:Boolean,value:jr},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.__virtualizer.hostConnected()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const e=this.$.table.getBoundingClientRect(),t=i.getBoundingClientRect(),r=this.$.header.getBoundingClientRect().height,n=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+r&&t.top<e.bottom-n}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,e)=>i.index-e.index)}_getRowContainingNode(i){const e=An("vaadin-grid-cell-content",i);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,e){const t=this.__getRowModel(e);return this.getItemId(i)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new yc({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0,__disableHeightPlaceholder:!0}),this._tooltipController=new Pi(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new Ii(this.$.emptystateslot,({currentNodes:i})=>{this.$.emptystatecell._content=i[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content})}updated(i){super.updated(i),i.has("__hostVisible")&&!i.get("__hostVisible")&&(this._resetKeyboardNavigation(),requestAnimationFrame(()=>this.__scrollToPendingIndexes())),(i.has("__headerRect")||i.has("__footerRect")||i.has("__itemsRect"))&&setTimeout(()=>this.__updateMinHeight()),i.has("__tableRect")&&(setTimeout(()=>this.__updateColumnsBodyContentHidden()),this.__updateHorizontalScrollPosition())}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:e}){const t=this._getRenderedRows().find(n=>n._item===i),r=t&&[...t.children].find(n=>n._column===e);r&&r.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,e,t,r){if(e&&t&&r){const n=this.shadowRoot.activeElement,o=this.__getBodyCellCoordinates(n),a=e.size||0;e.size=i,e.update(a-1,a-1),i<a&&e.update(i-1,i-1),o&&n.parentElement.hidden&&this.__focusBodyCell(o),this._resetKeyboardNavigation()}}_createScrollerRows(i){const e=[];for(let t=0;t<i;t++){const r=document.createElement("tr");r.setAttribute("role","row"),r.setAttribute("tabindex","-1"),A(r,"row",!0),A(r,"body-row",!0),this._columnTree&&this.__initRow(r,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(r)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>{t.isConnected&&t._cells&&(t._cells=[...t._cells])}),this.__afterCreateScrollerRowsDebouncer=x.debounce(this.__afterCreateScrollerRowsDebouncer,Pe,()=>{this._afterScroll()}),e}_createCell(i,e){const r=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,n=document.createElement("vaadin-grid-cell-content");n.setAttribute("slot",r);const o=document.createElement(i);o.id=r.replace("-content-","-"),o.setAttribute("role",i==="td"?"gridcell":"columnheader"),!Fs&&!mi&&(o.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),o.addEventListener("mouseleave",()=>{this._hideTooltip()}),o.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",r),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),o.appendChild(l),o._focusButton=l,o.focus=function(d){o._focusButton.focus(d)},l.appendChild(a)}else o.setAttribute("tabindex","-1"),o.appendChild(a);return o._content=n,n.addEventListener("mousedown",()=>{if(Yn){const l=d=>{const h=n.contains(this.getRootNode().activeElement),c=d.composedPath().includes(n);!h&&c&&o.focus({preventScroll:!0}),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{n.contains(this.getRootNode().activeElement)||o.focus({preventScroll:!0})})}),o}__initRow(i,e,t="body",r=!1,n=!1){const o=document.createDocumentFragment();Bt(i,a=>{a._vacant=!0}),i.innerHTML="",t==="body"&&(i.__cells=[],i.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let h;if(t==="body"){a._cells||(a._cells=[]),h=a._cells.find(u=>u._vacant),h||(h=this._createCell("td",a),a._onCellKeyDown&&h.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(h)),A(h,"cell",!0),A(h,"body-cell",!0),h.__parentRow=i,i.__cells.push(h);const c=i===this.$.sizer;if((!a._bodyContentHidden||c)&&i.appendChild(h),c&&(a._sizerCell=h),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const u=this._detailsCells.find(f=>f._vacant)||this._createCell("td");this._detailsCells.indexOf(u)===-1&&this._detailsCells.push(u),u._content.parentElement||o.appendChild(u._content),this._configureDetailsCell(u),i.appendChild(u),i.__detailsCell=u,this.__a11ySetRowDetailsCell(i,u),u._vacant=!1}n||(a._cells=[...a._cells])}else{const c=t==="header"?"th":"td";r||a.localName==="vaadin-grid-column-group"?(h=a[`_${t}Cell`],h||(h=this._createCell(c),a._onCellKeyDown&&h.addEventListener("keydown",a._onCellKeyDown.bind(a))),h._column=a,i.appendChild(h),a[`_${t}Cell`]=h):(a._emptyCells||(a._emptyCells=[]),h=a._emptyCells.find(u=>u._vacant)||this._createCell(c),h._column=a,i.appendChild(h),a._emptyCells.indexOf(h)===-1&&a._emptyCells.push(h)),A(h,"cell",!0),A(h,`${t}-cell`,!0)}h._content.parentElement||o.appendChild(h._content),h._vacant=!1,h._column=a}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=x.debounce(i.__debounceUpdateHeaderFooterRowVisibility,le,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const e=Array.from(i.children).filter(t=>{const r=t._column;if(r._emptyCells&&r._emptyCells.indexOf(t)>-1)return!1;if(i.parentElement===this.$.header){if(r.headerRenderer)return!0;if(r.header===null)return!1;if(r.path||r.header!==void 0)return!0}else if(r.footerRenderer)return!0;return!1});i.hidden!==!e.length&&(i.hidden=!e.length),i.parentElement===this.$.header&&(this.$.table.toggleAttribute("has-header",this.$.header.querySelector("tr:not([hidden])")),this.__updateHeaderFooterRowParts("header")),i.parentElement===this.$.footer&&(this.$.table.toggleAttribute("has-footer",this.$.footer.querySelector("tr:not([hidden])")),this.__updateHeaderFooterRowParts("footer")),this._resetKeyboardNavigation(),this.__a11yUpdateGridSize(this.size,this._columnTree,this.__emptyState)}_updateScrollerItem(i,e){this._preventScrollerRotatingCellFocus(i,e),this._columnTree&&(i.index=e,this.__ensureRowItem(i),this.__ensureRowHierarchy(i),this.__updateRow(i))}_columnTreeChanged(i){this._renderColumnTree(i),this.__updateColumnsBodyContentHidden()}__updateRowOrderParts(i){tt(i,{first:i.index===0,last:i.index===this._flatSize-1,odd:i.index%2!==0,even:i.index%2===0})}__updateRowStateParts(i,{item:e,expanded:t,selected:r,detailsOpened:n}){tt(i,{expanded:t,collapsed:this.__isRowExpandable(i),selected:r,nonselectable:this.__isItemSelectable(e)===!1,"details-opened":n})}__computeEmptyState(i,e){return i===0&&e}_renderColumnTree(i){for(te(this.$.items,e=>{this.__initRow(e,i[i.length-1],"body",!1,!0),this.__updateRow(e)});this.$.header.children.length<i.length;){const e=document.createElement("tr");e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),A(e,"row",!0),A(e,"header-row",!0),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),A(t,"row",!0),A(t,"footer-row",!0),this.$.footer.appendChild(t)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);te(this.$.header,(e,t)=>{this.__initRow(e,i[t],"header",t===i.length-1)}),te(this.$.footer,(e,t)=>{this.__initRow(e,i[i.length-1-t],"footer",t===0)}),this.__initRow(this.$.sizer,i[i.length-1]),this.__updateHeaderFooterRowParts("header"),this.__updateHeaderFooterRowParts("footer"),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this.__a11yUpdateHeaderRows(),this.__a11yUpdateFooterRows(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}__updateHeaderFooterRowParts(i){const e=[...this.$[i].querySelectorAll("tr:not([hidden])")];[...this.$[i].children].forEach(t=>{A(t,`first-${i}-row`,t===e.at(0)),A(t,`last-${i}-row`,t===e.at(-1)),gt(t).forEach(r=>{A(r,`first-${i}-row-cell`,t===e.at(0)),A(r,`last-${i}-row-cell`,t===e.at(-1))})})}__updateRowLoading(i,e){const t=gt(i);Mi(i,"loading",e),wi(t,"loading-row-cell",e),e&&this._generateCellPartNames(i)}__updateRow(i){this.__a11yUpdateRowRowindex(i),this.__updateRowOrderParts(i);const e=this.__getRowItem(i);if(e)this.__updateRowLoading(i,!1);else{this.__updateRowLoading(i,!0);return}i._item=e;const t=this.__getRowModel(i);this._toggleDetailsCell(i,t.detailsOpened),this.__a11yUpdateRowLevel(i,t.level),this.__a11yUpdateRowSelected(i,t.selected),this.__updateRowStateParts(i,t),this._generateCellPartNames(i,t),this._filterDragAndDrop(i,t),this.__updateDragSourceParts(i,t),te(i,r=>{if(!(r._column&&!r._column.isConnected)&&r._renderer){const n=r._column||this;r._renderer.call(n,r._content,n,t)}}),this._updateDetailsCellHeight(i),this.__a11yUpdateRowExpanded(i,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}__getRowModel(i){return{index:i.index,item:i._item,level:this.__getRowLevel(i),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),hasChildren:this._hasChildren(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const e=this._tooltipController.node;if(e&&e.isConnected){const t=i.target;if(!this.__isCellFullyVisible(t))return;this._tooltipController.setTarget(t),this._tooltipController.setContext(this.getEventContext(i)),e._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"})}}__isCellFullyVisible(i){if(i.hasAttribute("frozen")||i.hasAttribute("frozen-to-end"))return!0;let{left:e,right:t}=this.getBoundingClientRect();const r=[...i.parentNode.children].find(a=>a.hasAttribute("last-frozen"));if(r){const a=r.getBoundingClientRect();e=this.__isRTL?e:a.right,t=this.__isRTL?a.left:t}const n=[...i.parentNode.children].find(a=>a.hasAttribute("first-frozen-to-end"));if(n){const a=n.getBoundingClientRect();e=this.__isRTL?a.right:e,t=this.__isRTL?t:a.left}const o=i.getBoundingClientRect();return o.left>=e&&o.right<=t}_hideTooltip(i){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(i,e){this.__virtualizer&&this.__virtualizer.update(i,e)}__updateMinHeight(){const e=this.$.header.clientHeight,t=this.$.footer.clientHeight,r=this.$.table.offsetHeight-this.$.table.clientHeight,n=e+36+t+r;this.__minHeightStyleSheet||(this.__minHeightStyleSheet=new CSSStyleSheet,this.shadowRoot.adoptedStyleSheets.push(this.__minHeightStyleSheet)),this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${n}px; }`)}};/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class jc extends qc(Oe(se(Z(re(H))))){static get is(){return"vaadin-grid"}static get styles(){return gc}render(){return E`
      <div
        id="scroller"
        ?safari="${this._safari}"
        ?ios="${this._ios}"
        ?loading="${this.loading}"
        ?column-reordering-allowed="${this.columnReorderingAllowed}"
        ?empty-state="${this.__emptyState}"
      >
        <table
          id="table"
          role="treegrid"
          aria-multiselectable="true"
          tabindex="0"
          aria-label="${yi(this.accessibleName)}"
        >
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" class="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost" class="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}}U(jc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yc=s=>(...i)=>({_$litDirective$:s,values:i});class Gc{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,t){this._$Ct=i,this._$AM=e,this._$Ci=t}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(s,i)=>{var t;const e=s._$AN;if(e===void 0)return!1;for(const r of e)(t=r._$AO)==null||t.call(r,i,!1),Lt(r,i);return!0},xi=s=>{let i,e;do{if((i=s._$AM)===void 0)break;e=i._$AN,e.delete(s),s=i}while((e==null?void 0:e.size)===0)},yo=s=>{for(let i;i=s._$AM;s=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(s))break;e.add(s),Zc(i)}};function Qc(s){this._$AN!==void 0?(xi(this),this._$AM=s,yo(this)):this._$AM=s}function Xc(s,i=!1,e=0){const t=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(i)if(Array.isArray(t))for(let n=e;n<t.length;n++)Lt(t[n],!1),xi(t[n]);else t!=null&&(Lt(t,!1),xi(t));else Lt(this,s)}const Zc=s=>{s.type==bo.CHILD&&(s._$AP??(s._$AP=Xc),s._$AQ??(s._$AQ=Qc))};class Jc extends Gc{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,t){super._$AT(i,e,t),yo(this),this.isConnected=i._$AU}_$AO(i,e=!0){var t,r;i!==this.isConnected&&(this.isConnected=i,i?(t=this.reconnected)==null||t.call(this):(r=this.disconnected)==null||r.call(this)),e&&(Lt(this,i),xi(this))}setValue(i){if(Kc(this._$Ct))this._$Ct._$AI(i,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright (c) 2016 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ks=Symbol("valueNotInitialized");class eu extends Jc{constructor(i){if(super(i),i.type!==bo.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=Ks}render(i,e){return R}update(i,[e,t]){return this.hasChanged(t)&&(this.host=i.options&&i.options.host,this.element=i.element,this.renderer=e,this.previousValue===Ks?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(t)?[...t]:t),R}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(i,...e){const t=this.renderer.call(this.host,...e);kr(t,i,{host:this.host})}hasChanged(i){return Array.isArray(i)?!Array.isArray(this.previousValue)||this.previousValue.length!==i.length?!0:i.some((e,t)=>e!==this.previousValue[t]):this.previousValue!==i}}/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qs=Symbol("contentUpdateDebouncer");/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class tu extends eu{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(i,e)=>{this.renderRenderer(i,e)}}runRenderer(){const i=this.element._grid;i[Qs]=x.debounce(i[Qs],le,()=>{i.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null}}class iu extends tu{get rendererProperty(){return"renderer"}addRenderer(){this.element[this.rendererProperty]=(i,e,t)=>{this.renderRenderer(i,t.item,t,e)}}}const Xs=Yc(iu);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ru=s=>class extends Wn(Gt(s)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(e){this.disabled||super.focus(e)}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const su=B`
  :host {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--vaadin-tab-gap, var(--vaadin-gap-s));
    padding: var(--vaadin-tab-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    cursor: var(--vaadin-clickable-cursor);
    font-size: var(--vaadin-tab-font-size, 1em);
    font-weight: var(--vaadin-tab-font-weight, 500);
    line-height: var(--vaadin-tab-line-height, inherit);
    color: var(--vaadin-tab-text-color, var(--vaadin-text-color-secondary));
    background: var(--vaadin-tab-background, transparent);
    border-radius: var(--vaadin-tab-border-radius, var(--vaadin-radius-m));
    border: var(--vaadin-tab-border-width, 0) solid var(--vaadin-tab-border-color, var(--vaadin-border-color-secondary));
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    justify-content: start;
  }

  :host([selected]) {
    --vaadin-tab-background: var(--vaadin-background-container);
    --vaadin-tab-text-color: var(--vaadin-text-color);
  }

  :host([disabled]) {
    cursor: var(--vaadin-disabled-cursor);
    opacity: 0.5;
  }

  :host(:is([focus-ring], :focus-visible)) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
    outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
  }

  slot {
    gap: inherit;
    align-items: inherit;
    justify-content: inherit;
  }

  ::slotted(a) {
    color: inherit;
    cursor: inherit;
    text-decoration: inherit;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    gap: inherit;
  }

  ::slotted(a)::before {
    content: '';
    position: absolute;
    inset: 0;
  }

  @media (forced-colors: active) {
    :host {
      border: 1px solid Canvas;
    }

    :host([selected]) {
      color: Highlight;
      border-color: Highlight;
    }

    :host([disabled]) {
      color: GrayText;
      opacity: 1;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nu extends ru(se(Oe(Z(re(H))))){static get is(){return"vaadin-tab"}static get styles(){return su}render(){return E`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Pi(this),this.addController(this._tooltipController)}_onKeyUp(i){const e=this.hasAttribute("active");if(super._onKeyUp(i),e){const t=this.querySelector("a");t&&t.click()}}}U(nu);/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ou=B`
  :host {
    display: flex;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    box-sizing: border-box;
    padding: var(--vaadin-tabs-padding);
    background: var(--vaadin-tabs-background);
    border-radius: var(--vaadin-tabs-border-radius);
    border: var(--vaadin-tabs-border-width, 0) solid
      var(--vaadin-tabs-border-color, var(--vaadin-border-color-secondary));
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  [part='tabs'] {
    flex: 1;
    overflow: auto;
    overscroll-behavior: contain;
    display: flex;
    flex-direction: column;
    gap: var(--vaadin-tabs-gap, var(--vaadin-gap-s));
  }

  :host([orientation='horizontal']) [part='tabs'] {
    flex-direction: row;
    scrollbar-width: none;
  }

  /* scrollbar-width is supported in Safari 18.2, use the following for earlier */
  :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
    display: none;
  }

  [part$='button'] {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    cursor: var(--vaadin-clickable-cursor);
    box-sizing: border-box;
    height: 100%;
    padding: var(--vaadin-tab-padding, var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container));
    background: var(--vaadin-background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  [part='forward-button'] {
    inset-inline-end: 0;
  }

  :host([overflow~='start']) [part='back-button'],
  :host([overflow~='end']) [part='forward-button'] {
    pointer-events: auto;
    opacity: 1;
  }

  [part$='button']::before {
    content: '';
    display: block;
    width: var(--vaadin-icon-size, 1lh);
    height: var(--vaadin-icon-size, 1lh);
    background: currentColor;
    mask: var(--_vaadin-icon-chevron-down) 50% / var(--vaadin-icon-visual-size, 100%) no-repeat;
    rotate: 90deg;
  }

  [part='forward-button']::before {
    rotate: -90deg;
  }

  :host(:is([orientation='vertical'], [theme~='hide-scroll-buttons'])) [part$='button'] {
    display: none;
  }

  @media (pointer: coarse) {
    :host(:not([theme~='show-scroll-buttons'])) [part$='button'] {
      display: none;
    }
  }

  :host([dir='rtl']) [part$='button']::before {
    scale: 1 -1;
  }

  @media (forced-colors: active) {
    [part$='button']::before {
      background: CanvasText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const au=s=>class extends Yt(s){get focused(){return(this._getItems()||[]).find(Wr)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(e){const t=this._getFocusableIndex();t>=0&&this._focus(t,e)}_getFocusableIndex(){const e=this._getItems();return Array.isArray(e)?this._getAvailableIndex(e,0,null,t=>!vi(t)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t,shiftKey:r}=e,n=this._getItems()||[],o=n.indexOf(this.focused);let a,l;const h=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKeyPressed(t,r)?(l=-h,a=o-h):this.__isNextKeyPressed(t,r)?(l=h,a=o+h):t==="Home"?(l=1,a=0):t==="End"&&(l=-1,a=n.length-1),a=this._getAvailableIndex(n,a,l,c=>!vi(c)),!(this._tabNavigation&&t==="Tab"&&(a>o&&e.shiftKey||a<o&&!e.shiftKey||a===o))&&a>=0&&(e.preventDefault(),this._focus(a,{focusVisible:!0},!0))}__isPrevKeyPressed(e,t){return this._vertical?e==="ArrowUp":e==="ArrowLeft"||this._tabNavigation&&e==="Tab"&&t}__isNextKeyPressed(e,t){return this._vertical?e==="ArrowDown":e==="ArrowRight"||this._tabNavigation&&e==="Tab"&&!t}_focus(e,t,r=!1){const n=this._getItems();this._focusItem(n[e],t,r)}_focusItem(e,t){e&&e.focus(t)}_getAvailableIndex(e,t,r,n){const o=e.length;let a=t;for(let l=0;typeof a=="number"&&l<o;l+=1,a+=r||1){a<0?a=o-1:a>=o&&(a=0);const d=e[a];if(this._isItemFocusable(d)&&this.__isMatchingItem(d,n))return a}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}_isItemFocusable(e){return!e.hasAttribute("disabled")}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lu=s=>class extends au(s){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(e){this._observer&&this._observer.flush();const t=Array.isArray(this.items)?this.items:[],r=this._getAvailableIndex(t,0,null,n=>n.tabIndex===0&&!vi(n));r>=0?this._focus(r,e):super.focus(e)}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Ii(e,()=>{this._setItems(this._filterItems([...this.children]))})}_getItems(){return this.items}_enhanceItems(e,t,r,n){if(!n&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(a=>{t?a.setAttribute("orientation",t):a.removeAttribute("orientation")}),this._setFocusable(r<0||!r?0:r);const o=e[r];e.forEach(a=>{a.selected=a===o}),o&&!o.disabled&&this._scrollToItem(r)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let r;t&&!t.disabled&&(r=this.items.indexOf(t))>=0&&(this.selected=r)}_searchKey(e,t){this._searchReset=x.debounce(this._searchReset,ie.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(n=>this.__isMatchingKey(n))||(this._searchBuf=t.toLowerCase());const r=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,r,1,n=>this.__isMatchingKey(n)&&getComputedStyle(n).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,r=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&t.length===1){const n=this._searchKey(r,t);n>=0&&this._focus(n);return}super._onKeyDown(e)}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(r=>{r.tabIndex=r===t?0:-1})}_focus(e,t){this.items.forEach((r,n)=>{r.focused=n===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e,t)}_scrollToItem(e){const t=this.items[e];if(!t)return;const r=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect();let l=0;!this._isRTL&&o[r[1]]>=n[r[1]]||this._isRTL&&o[r[1]]<=n[r[1]]?l=o[r[1]]-n[r[1]]:(!this._isRTL&&a[r[0]]<=n[r[0]]||this._isRTL&&a[r[0]]>=n[r[0]])&&(l=a[r[0]]-n[r[0]]),this._scroll(l)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",r=Kr(this._scrollerElement,t)+e;Hc(this._scrollerElement,t,r)}}};/**
 * @license
 * Copyright (c) 2021 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ri=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.isConnected&&(i.target.resizables?i.target.resizables.forEach(e=>{e._onResize(i.contentRect)}):i.target._onResize(i.contentRect))})})}),du=de(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),ri.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,ri.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),ri.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&ri.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hu=s=>class extends du(lu(s)){static get properties(){return{orientation:{value:"horizontal",type:String,reflectToAttribute:!0,sync:!0},selected:{value:0,type:Number,reflectToAttribute:!0}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist")}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(t=>{this.__itemsResizeObserver.observe(t)}),this._updateOverflow()}_scrollForward(){const e=this._getNavigationButtonVisibleWidth("forward-button"),t=this._getNavigationButtonVisibleWidth("back-button"),r=this._scrollerElement.getBoundingClientRect(),o=[...this.items].reverse().find(h=>this._isItemVisible(h,e,t,r)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let d;if(this.__isRTL){const h=r.right-l;d=o.right-h}else{const h=r.left+l;d=o.left-h}-this.__direction*d<1&&(d=-this.__direction*(this._scrollOffset-l)),this._scroll(d)}_scrollBack(){const e=this._getNavigationButtonVisibleWidth("forward-button"),t=this._getNavigationButtonVisibleWidth("back-button"),r=this._scrollerElement.getBoundingClientRect(),o=this.items.find(h=>this._isItemVisible(h,e,t,r)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let d;if(this.__isRTL){const h=r.left+l;d=o.left-h}else{const h=r.right-l;d=o.right-h}this.__direction*d<1&&(d=this.__direction*(this._scrollOffset-l)),this._scroll(d)}_isItemVisible(e,t,r,n){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const o=this.__isRTL?r:t,a=this.__isRTL?t:r,l=n.right-o,d=n.left+a,h=e.getBoundingClientRect();return l>Math.floor(h.left)&&d<Math.ceil(h.right)}_getNavigationButtonVisibleWidth(e){const t=this.shadowRoot.querySelector(`[part="${e}"]`);return window.getComputedStyle(t).opacity==="0"?0:t.clientWidth}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:Kr(this._scrollerElement,this.getAttribute("dir")),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let r=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(t-this._scrollOffset)&&(r+=" end"),this.__direction===1&&(r=r.replace(/start|end/giu,n=>n==="start"?"end":"start")),r?this.setAttribute("overflow",r.trim()):this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cu extends hu(Oe(se(Z(re(H))))){static get is(){return"vaadin-tabs"}static get styles(){return ou}render(){return E`
      <div @click="${this._scrollBack}" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div @click="${this._scrollForward}" part="forward-button" aria-hidden="true"></div>
    `}}U(cu);/**
 * @license
 * Copyright (c) 2020 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uu=B`
  :host {
    --_indicator-height: var(--vaadin-scroller-overflow-indicator-height, 1px);
    /* Don't let these properties inherit */
    --vaadin-scroller-padding-block: 0px;
    --vaadin-scroller-padding-inline: 0px;
    --vaadin-scroller-overflow-indicator-top-opacity: 0;
    --vaadin-scroller-overflow-indicator-bottom-opacity: 0;
    display: block;
    overflow: auto;
    outline: none;
    flex: 1;
    box-sizing: border-box;
    padding: 0 var(--vaadin-scroller-padding-inline);
  }

  :host([focus-ring]) {
    outline: var(--vaadin-focus-ring-width) solid var(--vaadin-focus-ring-color);
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([scroll-direction='vertical']) {
    overflow-x: hidden;
  }

  :host([scroll-direction='horizontal']) {
    overflow-y: hidden;
  }

  :host([scroll-direction='none']) {
    overflow: hidden;
  }

  :host::before,
  :host::after {
    content: '';
    display: block;
    opacity: 0;
    position: sticky;
    inset: 0 calc(var(--vaadin-scroller-padding-inline) * -1);
    z-index: 9999;
    pointer-events: none;
    box-sizing: border-box;
    height: var(--_indicator-height);
    margin-inline: calc(var(--vaadin-scroller-padding-inline) * -1);
    background: var(--vaadin-border-color-secondary);
  }

  :host::before {
    margin-bottom: calc(var(--vaadin-scroller-padding-block) - var(--_indicator-height));
  }

  :host::after {
    margin-top: calc(var(--vaadin-scroller-padding-block) - var(--_indicator-height));
  }

  :host([overflow~='top'])::before {
    opacity: var(--vaadin-scroller-overflow-indicator-top-opacity);
  }

  :host([overflow~='bottom'])::after {
    opacity: var(--vaadin-scroller-overflow-indicator-bottom-opacity);
  }

  :host([theme~='overflow-indicator-top'][overflow~='top']),
  :host([theme~='overflow-indicators'][overflow~='top']) {
    --vaadin-scroller-overflow-indicator-top-opacity: 1;
  }

  :host([theme~='overflow-indicators'][overflow~='bottom']),
  :host([theme~='overflow-indicator-bottom'][overflow~='bottom']) {
    --vaadin-scroller-overflow-indicator-bottom-opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2020 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fu=s=>class extends Gt(s){static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}_shouldSetFocus(e){return e.target===this}};/**
 * @license
 * Copyright (c) 2020 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wo extends fu(Oe(se(Z(re(H))))){static get is(){return"vaadin-scroller"}static get styles(){return uu}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return E`<slot></slot>`}ready(){super.ready(),this.__overflowController=new Qr(this),this.addController(this.__overflowController)}}U(wo);/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _u extends wo{static get is(){return"vaadin-tabsheet-scroller"}}U(_u);/**
 * @license
 * Copyright (c) 2025 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pu=B`
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
  }

  @keyframes spin {
    to {
      rotate: 1turn;
    }
  }

  [part='loader'] {
    animation:
      spin var(--vaadin-spinner-animation-duration, 1s) linear infinite,
      fade-in 0.3s 0.3s both;
    border: var(--vaadin-spinner-width, 2px) solid;
    --_spinner-color: var(--vaadin-spinner-color, var(--vaadin-text-color));
    --_spinner-color2: color-mix(in srgb, var(--_spinner-color) 20%, transparent);
    border-color: var(--_spinner-color) var(--_spinner-color) var(--_spinner-color2) var(--_spinner-color2);
    border-radius: 50%;
    box-sizing: border-box;
    height: var(--vaadin-spinner-size, 1lh);
    pointer-events: none;
    width: var(--vaadin-spinner-size, 1lh);
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gu=[pu,B`
    :host {
      display: flex;
      flex-direction: column;
      border: var(--vaadin-tabsheet-border-width, 1px) solid
        var(--vaadin-tabsheet-border-color, var(--vaadin-border-color-secondary));
      border-radius: var(--vaadin-tabsheet-border-radius, var(--vaadin-radius-l));
      overflow: hidden;
    }

    :host([hidden]) {
      display: none !important;
    }

    [part='tabs-container'] {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--vaadin-tabsheet-gap, var(--vaadin-gap-s));
      padding: var(--vaadin-tabsheet-padding, var(--vaadin-padding-m));
      box-sizing: border-box;
    }

    ::slotted([slot='tabs']) {
      flex: 1;
      align-self: stretch;
      min-width: 128px;
    }

    ::slotted([hidden]) {
      display: none !important;
    }

    [part='content'] {
      position: relative;
      flex: 1;
      box-sizing: border-box;
      --vaadin-scroller-padding-block: var(--vaadin-tabsheet-padding, var(--vaadin-padding-m));
      --vaadin-scroller-padding-inline: var(--vaadin-tabsheet-padding, var(--vaadin-padding-m));
      --vaadin-scroller-overflow-indicator-top-opacity: 1;
    }

    [part='content'][focus-ring] {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
      outline-offset: calc(var(--vaadin-focus-ring-width) * -1);
    }

    :host([loading]) [part='content'] {
      align-content: center;
    }

    [part='loader'] {
      margin: auto;
    }

    :host([theme~='no-border']) {
      border: 0;
      border-radius: 0;
    }

    :host([theme~='no-padding']) [part='content'] {
      padding: 0 !important;
      --vaadin-scroller-padding-block: 0px !important;
      --vaadin-scroller-padding-inline: 0px !important;
    }
  `];/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vu extends ye{constructor(i){super(i,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this),this.__tabIdObserver=new MutationObserver(e=>{e.forEach(t=>{const r=t.target;i.__linkTabAndPanel(r),r.selected&&i.__togglePanels(r)})})}__tabsItemsChangedListener(){this.__tabIdObserver.disconnect();const i=this.tabs.items||[];i.forEach(e=>{this.__tabIdObserver.observe(e,{attributeFilter:["id"]})}),this.host._setItems(i)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(i){if(!(i instanceof customElements.get("vaadin-tabs")))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=i,i.addEventListener("items-changed",this.__tabsItemsChangedListener),i.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=i,this.host.stateTarget=i,this.__tabsItemsChangedListener()}teardownNode(i){this.tabs=null,i.removeEventListener("items-changed",this.__tabsItemsChangedListener),i.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}const mu=s=>class extends co(s){static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected","_theme"]}ready(){super.ready(),this.__overflowController=new Qr(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new vu(this),this.addController(this._tabsSlotController);const i=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new Ii(i,({addedNodes:e,removedNodes:t})=>{e.length&&e.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&r.hidden&&(r.__customHidden=!0)}),t.length&&t.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&r.hidden&&(r.__customHidden?delete r.__customHidden:r.hidden=!1)}),this.__panels=Array.from(i.assignedNodes({flatten:!0})).filter(r=>r.nodeType===Node.ELEMENT_NODE)})}_delegateProperty(i,e){if(this.stateTarget){if(i==="_theme"){this._delegateAttribute("theme",e);return}super._delegateProperty(i,e)}}__itemsOrPanelsChanged(i,e){!i||!e||i.forEach(t=>{this.__linkTabAndPanel(t,e)})}__selectedTabItemChanged(i,e,t){!e||!t||i===void 0||this.__togglePanels(e[i],t)}__togglePanels(i,e=this.__panels){const t=i?i.id:"",r=e.find(a=>a.getAttribute("tab")===t),n=this.shadowRoot.querySelector('[part="content"]');this.toggleAttribute("loading",!r);const o=e.filter(a=>!a.hidden).length===1;r?n.style.minHeight="":o&&(n.style.minHeight=`${n.offsetHeight}px`),e.forEach(a=>{a.hidden=a!==r})}__linkTabAndPanel(i,e=this.__panels){const t=e.find(r=>r.getAttribute("tab")===i.id);t&&(t.role="tabpanel",t.id||(t.id=`tabsheet-panel-${ki()}`),t.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",t.id))}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bu extends mu(se(Oe(Z(re(H))))){static get is(){return"vaadin-tabsheet"}static get styles(){return gu}render(){return E`
      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}}U(bu);/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yu=s=>class extends Qn(Kn(s)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}_updatePosition(){if(super._updatePosition(),!(!this.positionTarget||!this.opened)){if(this.removeAttribute("arrow-centered"),this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),r=e.width/2-t.width/2;if(this.style.left){const n=t.left+r;n>0&&(this.style.left=`${n}px`,this.setAttribute("arrow-centered",""))}if(this.style.right){const n=parseFloat(this.style.right)+r;n>0&&(this.style.right=`${n}px`,this.setAttribute("arrow-centered",""))}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),r=e.height/2-t.height/2;this.style.top=`${t.top+r}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wu=B`
  :host {
    --_vaadin-tooltip-default-offset: 4px;
    line-height: normal;
  }

  [part='overlay'] {
    max-width: var(--vaadin-tooltip-max-width, 40ch);
    padding: var(
      --vaadin-tooltip-padding,
      var(--vaadin-padding-block-container) var(--vaadin-padding-inline-container)
    );
    border: var(--vaadin-tooltip-border-width, var(--vaadin-overlay-border-width, 1px)) solid
      var(--vaadin-tooltip-border-color, var(--vaadin-overlay-border-color, var(--vaadin-border-color-secondary)));
    border-radius: var(--vaadin-tooltip-border-radius, var(--vaadin-radius-m));
    background: var(--vaadin-tooltip-background, var(--vaadin-background-color));
    color: var(--vaadin-tooltip-text-color, inherit);
    font-size: var(--vaadin-tooltip-font-size, 0.9em);
    font-weight: var(--vaadin-tooltip-font-weight, inherit);
    line-height: var(--vaadin-tooltip-line-height, inherit);
    box-shadow: var(--vaadin-tooltip-shadow, 0 3px 8px -1px rgba(0, 0, 0, 0.2));
  }

  :host(:not([markdown])) [part='content'] {
    white-space: pre-wrap;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, var(--_vaadin-tooltip-default-offset));
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, var(--_vaadin-tooltip-default-offset));
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, var(--_vaadin-tooltip-default-offset));
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, var(--_vaadin-tooltip-default-offset));
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      border: 1px dashed !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cu extends yu(mt(se(Z(re(H))))){static get is(){return"vaadin-tooltip-overlay"}static get styles(){return[jn,wu]}render(){return E`
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}U(Cu);const xu="modulepreload",Eu=function(s,i){return new URL(s,i).href},Zs={},Tu=function(i,e,t){if(!e||e.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(e.map(n=>{if(n=Eu(n,t),n in Zs)return;Zs[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!t)for(let h=r.length-1;h>=0;h--){const c=r[h];if(c.href===n&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${a}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":xu,o||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),o)return new Promise((h,c)=>{d.addEventListener("load",h),d.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>i()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})};/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Su=s=>class extends s{static get properties(){return{position:{type:String},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"}}}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computePosition(e,t){return e||t}};/**
 * @license
 * Copyright (c) 2024 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Du=s=>class extends s{static get properties(){return{for:{type:String,observer:"__forChanged"},target:{type:Object},__isConnected:{type:Boolean,sync:!0}}}static get observers(){return["__targetOrConnectedChanged(target, __isConnected)"]}connectedCallback(){super.connectedCallback(),this.__isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__isConnected=!1}__forChanged(e){e&&(this.__setTargetByIdDebouncer=x.debounce(this.__setTargetByIdDebouncer,le,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" set via "for" property found on the page.`)}__targetOrConnectedChanged(e,t){this.__previousTarget&&(this.__previousTarget!==e||!t)&&this._removeTargetListeners(this.__previousTarget),e&&t&&this._addTargetListeners(e),this.__previousTarget=e}_addTargetListeners(e){}_removeTargetListeners(e){}},at=500;let Co=at,xo=at,Eo=at;const Ze=new Set;let At=!1,Je=null,It=null;class Au{constructor(i){this.host=i}get focusDelay(){const i=this.host;return i.focusDelay!=null&&i.focusDelay>=0?i.focusDelay:Co}get hoverDelay(){const i=this.host;return i.hoverDelay!=null&&i.hoverDelay>=0?i.hoverDelay:xo}get hideDelay(){const i=this.host;return i.hideDelay!=null&&i.hideDelay>=0?i.hideDelay:Eo}get isClosing(){return Ze.has(this.host)}open(i={immediate:!1}){const{immediate:e,hover:t,focus:r}=i,n=t&&this.hoverDelay>0,o=r&&this.focusDelay>0;!e&&(n||o)&&!this.__closeTimeout?this.__warmupTooltip(o):this.__showTooltip()}close(i){!i&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),At&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host.opened}_setOpened(i){this.host.opened=i}__flushClosingTooltips(){Ze.forEach(i=>{i._stateController.close(!0),Ze.delete(i)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),At=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(i){this._isOpened()||(At?this.__showTooltip():Je==null&&this.__scheduleWarmUp(i))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null),this.isClosing&&Ze.delete(this.host)}__abortCooldown(){It&&(clearTimeout(It),It=null)}__abortWarmUp(){Je&&(clearTimeout(Je),Je=null)}__scheduleClose(){this._isOpened()&&!this.isClosing&&(Ze.add(this.host),this.__closeTimeout=setTimeout(()=>{Ze.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){It=setTimeout(()=>{It=null,At=!1},this.hideDelay)}__scheduleWarmUp(i){const e=i?this.focusDelay:this.hoverDelay;Je=setTimeout(()=>{Je=null,At=!0,this.__showTooltip()},e)}}const Iu=s=>class extends Su(Du(s)){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__openedChanged",sync:!0},shouldShow:{type:Object,value:()=>(e,t)=>!0},text:{type:String},markdown:{type:Boolean,value:!1,reflectToAttribute:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0}}}static setDefaultFocusDelay(e){Co=e!=null&&e>=0?e:at}static setDefaultHideDelay(e){Eo=e!=null&&e>=0?e:at}static setDefaultHoverDelay(e){xo=e!=null&&e>=0?e:at}constructor(){super(),this._uniqueId=`vaadin-tooltip-${ki()}`,this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new Au(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this.opened&&!this.manual&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._overlayElement=this.$.overlay,this.__contentController=new ye(this,"overlay","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this.__contentNode=e}}),this.addController(this.__contentController)}updated(e){super.updated(e),(e.has("text")||e.has("generator")||e.has("context")||e.has("markdown"))&&this.__updateContent()}__openedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}_addTargetListeners(e){e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)})}_removeTargetListeners(e){e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e)}__onFocusin(e){this.manual||Ke()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this.opened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){this.manual||e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this.manual||this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this.opened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this.manual||this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__onOverlayMouseDown(e){e.stopPropagation()}__onOverlayClick(e){e.stopPropagation()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){if(this.manual)return;const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this.opened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}async __updateContent(){const e=typeof this.generator=="function"?this.generator(this.context):this.text;this.markdown&&e?(await this.constructor.__importMarkdownHelpers()).renderMarkdownToElement(this.__contentNode,e):this.__contentNode.textContent=e||"",this.$.overlay.toggleAttribute("hidden",this.__contentNode.textContent.trim()===""),this.dispatchEvent(new CustomEvent("content-changed",{detail:{content:this.__contentNode.textContent}}))}__computeAriaTarget(e,t){const r=o=>o&&o.nodeType===Node.ELEMENT_NODE,n=Array.isArray(e)?e.some(r):e;return e===null||n?e:t}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(r=>{In(r,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(r=>{$r(r,"aria-describedby",this._uniqueId)})}static __importMarkdownHelpers(){return this.__markdownHelpers||(this.__markdownHelpers=Tu(()=>import("./markdown-helpers-f6744b36.js"),[],import.meta.url)),this.__markdownHelpers}};/**
 * @license
 * Copyright (c) 2022 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ku extends Iu(Fn(Oe(Z(H)))){static get is(){return"vaadin-tooltip"}static get styles(){return B`
      :host {
        display: contents;
      }
    `}render(){const i=this.__effectivePosition;return E`
      <vaadin-tooltip-overlay
        id="overlay"
        .owner="${this}"
        theme="${yi(this._theme)}"
        .opened="${this._isConnected&&this.opened}"
        .positionTarget="${this.target}"
        .position="${i}"
        ?no-horizontal-overlap="${this.__computeNoHorizontalOverlap(i)}"
        ?no-vertical-overlap="${this.__computeNoVerticalOverlap(i)}"
        .horizontalAlign="${this.__computeHorizontalAlign(i)}"
        .verticalAlign="${this.__computeVerticalAlign(i)}"
        @click="${this.__onOverlayClick}"
        @mousedown="${this.__onOverlayMouseDown}"
        @mouseenter="${this.__onOverlayMouseEnter}"
        @mouseleave="${this.__onOverlayMouseLeave}"
        modeless
        ?markdown="${this.markdown}"
        exportparts="overlay, content"
        ><slot name="overlay"></slot
      ></vaadin-tooltip-overlay>
    `}}U(ku);const si={moon(){return E`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-moon-2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M16.418 4.157a8 8 0 0 0 0 15.686"></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      </svg>
    `},help(){return E`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-help"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 17l0 .01"></path>
      <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
    </svg>`},externalLink(){return E`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-external-link"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
        ></path>
        <path d="M11 13l9 -9"></path>
        <path d="M15 4h5v5"></path>
      </svg>
    `},spinner(){return E`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-loader-2"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3a9 9 0 1 0 9 9"></path>
      </svg>
    `}};async function Pu(s,i,e){async function t(o){let a=[];return e&&e(`Loading recently merged pulls: repo=${s}, page=${o}`),await fetch(`https://api.github.com/repos/${s}/pulls?sort=updated&direction=desc&state=closed&per_page=100&page=${o}`).then(l=>l.json()).then(l=>{l.forEach(d=>{new Date(d.merged_at)>=i&&a.push(Ru(d))})}),a}let r=1,n=[];for(;;){const o=await t(r);if(o.length===0)break;n=n.concat(o),r++}return n}async function Ou(s,i,e,t){async function r(a){let l=[];return t&&t(`Loading recently closed issues: repo=${s}, labels=${e}, page=${a}`),await fetch(`https://api.github.com/repos/${s}/issues?sort=updated&direction=desc&state=closed&labels=${e}&per_page=100&page=${a}`).then(d=>d.json()).then(d=>{d.forEach(h=>{new Date(h.closed_at)>=i&&l.push(To(s,h))})}),l}let n=1,o=[];for(;;){const a=await r(n);if(a.length===0)break;o=o.concat(a),n++}return o}async function Mu(s,i,e){async function t(o){let a=[];return e&&e(`Loading open issues: repo=${s}, labels=${i}, page=${o}`),await fetch(`https://api.github.com/repos/${s}/issues?sort=updated&direction=desc&state=open&labels=${i}&per_page=100&page=${o}`).then(l=>l.json()).then(l=>{l.forEach(d=>{a.push(To(s,d))})}),a}let r=1,n=[];for(;;){const o=await t(r);if(o.length===0)break;n=n.concat(o),r++}return n}function Ru(s){return{number:s.number,title:s.title,url:s.html_url,author:s.user.login,repo:s.head.repo.name,mergedAt:s.merged_at}}function To(s,i){return{number:i.number,title:i.title,url:i.html_url,repo:s.split("/")[1],closedAt:i.closed_at}}const nr={loadRecentlyMergedPulls:Pu,loadRecentlyClosedIssues:Ou,loadOpenIssues:Mu};class $u{saveGithubData(i){i.hash=Js();const e=JSON.stringify(i);localStorage.setItem("vdg-github-data",e)}loadGithubData(){const i=localStorage.getItem("vdg-github-data");if(i){const e=JSON.parse(i);if(e.hash===Js())return e}return null}saveSettings(i){const e=JSON.stringify(i);localStorage.setItem("vdg-settings",e)}loadSettings(){const i=localStorage.getItem("vdg-settings");return i?JSON.parse(i):{theme:"light"}}}function Js(){return ar().getTime()}const ni=new $u;class Tr extends H{constructor(){super(),this.loading=!1,this.loadingProgress="",this.dataStart=gs(ar(),30),this.rangeStart=gs(ar(),14),this.settings=ni.loadSettings()}createRenderRoot(){return this}async firstUpdated(){this.githubData=ni.loadGithubData(),this.githubData?this.refreshDashboard():await this.refreshData()}updated(i){i.has("settings")&&(document.documentElement.style.colorScheme=this.settings.theme==="dark"?"dark":"light")}render(){return E`
      <div class="dashboard">
        <div class="header aura-surface">
          <h1>Vaadin DS Github Dashboard</h1>
          <div class="actions">
            <vaadin-date-picker
              label="Show data since"
              .min="${ai(this.dataStart,"yyyy-MM-dd")}"
              .max="${ai(new Date,"yyyy-MM-dd")}"
              .value="${ai(this.rangeStart,"yyyy-MM-dd")}"
              @change="${this.handleRangeStartChange}"
            ></vaadin-date-picker>
            <vaadin-button @click="${this.refreshData}"
              >Refresh data
            </vaadin-button>
            <vaadin-button theme="tertiary" @click="${this.handleToggleTheme}">
              ${si.moon()}
            </vaadin-button>
            <vaadin-button id="help-icon" theme="tertiary"
              >${si.help()}</vaadin-button
            >
            <vaadin-tooltip
              for="help-icon"
              text="Github data is updated once per day and then cached in local storage. 'Refresh data' forces an update. Data contains pulls and issues from the last 30 days, which is the maximum time range that can be configured."
            ></vaadin-tooltip>
          </div>
        </div>
        <div class="main">
          ${this.loading?E` <div class="section flex">
                <div class="panel loading">
                  <div class="title">
                    <div class="spinner">${si.spinner()}</div>
                    <span>Loading Github Data</span>
                  </div>
                  <div class="progress">${this.loadingProgress}</div>
                </div>
              </div>`:null}
          ${this.dashboard?E`
                <div class="section flex">
                  ${this.renderStats("Merged PRs",[{label:"Features",value:this.dashboard.features.length},{label:"Fixes",value:this.dashboard.fixes.length},{label:"Refactors",value:this.dashboard.refactors.length},{label:"Chores",value:this.dashboard.chores.length}])}
                  ${this.renderStats("BFPs",[{label:"Closed",value:this.dashboard.closedWarrantyIssues.length},{label:"Open",value:this.dashboard.openWarrantyIssues.length}])}
                  ${this.renderStats("Contributions",[{label:"Contributions",value:this.dashboard.contributions.length}])}
                </div>

                <div class="section grid">
                  <div class="panel issues">
                    <h2>Merged PRs</h2>
                    <div class="card aura-surface">
                      <vaadin-tabsheet theme="no-border no-padding">
                        <vaadin-tabs slot="tabs">
                          <vaadin-tab id="features-tab">Features</vaadin-tab>
                          <vaadin-tab id="fixes-tab">Fixes</vaadin-tab>
                          <vaadin-tab id="refactors-tab">Refactors</vaadin-tab>
                          <vaadin-tab id="chores-tab">Chores</vaadin-tab>
                          <vaadin-tab id="contributions-tab"
                            >Contributions
                          </vaadin-tab>
                        </vaadin-tabs>
                        <div tab="features-tab">
                          ${this.renderGrid(this.dashboard.features)}
                        </div>
                        <div tab="fixes-tab">
                          ${this.renderGrid(this.dashboard.fixes)}
                        </div>
                        <div tab="refactors-tab">
                          ${this.renderGrid(this.dashboard.refactors)}
                        </div>
                        <div tab="chores-tab">
                          ${this.renderGrid(this.dashboard.chores)}
                        </div>
                        <div tab="contributions-tab">
                          ${this.renderGrid(this.dashboard.contributions,!0)}
                        </div>
                      </vaadin-tabsheet>
                    </div>
                  </div>

                  <div class="panel issues">
                    <h2>BFPs</h2>
                    <div class="card aura-surface">
                      <vaadin-tabsheet theme="no-border no-padding">
                        <vaadin-tabs slot="tabs">
                          <vaadin-tab id="closed-warranty-tab"
                            >Closed
                          </vaadin-tab>
                          <vaadin-tab id="open-warranty-tab">Open</vaadin-tab>
                        </vaadin-tabs>
                        <div tab="closed-warranty-tab">
                          ${this.renderGrid(this.dashboard.closedWarrantyIssues)}
                        </div>
                        <div tab="open-warranty-tab">
                          ${this.renderGrid(this.dashboard.openWarrantyIssues)}
                        </div>
                      </vaadin-tabsheet>
                    </div>
                  </div>
                </div>
              `:null}
        </div>
      </div>
    `}renderStats(i,e){return E`
      <div class="panel stats">
        <div class="card aura-surface">
          <div class="title">${i}</div>
          <div class="list">
            ${e.map(t=>E`
                <div class="stat">
                  <span class="value">${t.value}</span>
                  <span class="label">${t.label}</span>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}renderGrid(i,e=!1){return E`
      <vaadin-grid .items="${i}" theme="no-border">
        <vaadin-grid-column
          ${Xs(t=>E`
              <div class="title">${t.title}</div>
              <div class="details">
                <span>${t.repo}</span>
                ${t.author?E`<span>@${t.author}</span>`:null}
              </div>
            `)}
        ></vaadin-grid-column>
        <vaadin-grid-column
          width="60px"
          flex-grow="0"
          ${Xs(t=>E`
              <a href="${t.url}" target="_blank">
                ${si.externalLink()}
              </a>
            `)}
        ></vaadin-grid-column>
      </vaadin-grid>
    `}handleToggleTheme(){const i=this.settings.theme==="dark"?"light":"dark";this.settings={...this.settings,theme:i},ni.saveSettings(this.settings)}handleRangeStartChange(i){this.rangeStart=id(i.target.value,"yyyy-MM-dd",new Date),this.refreshDashboard()}async refreshData(){this.loading=!0,this.loadingProgress="",this.dashboard=null,this.githubData=await Lu(this.dataStart,i=>{this.loadingProgress+=i+`
`}),ni.saveGithubData(this.githubData),this.refreshDashboard(),this.loading=!1}refreshDashboard(){this.dashboard=Fu(this.githubData,this.rangeStart)}}Y(Tr,"styles",[B`
      :host {
        display: block;
        min-height: 100vh;
        box-sizing: border-box;
      }
    `]),Y(Tr,"properties",{loading:{type:Boolean},loadingProgress:{type:String},dataStart:{type:Date},rangeStart:{type:Date},githubData:{type:Object},dashboard:{type:Object},settings:{type:Object}});customElements.define("vgd-dashboard",Tr);async function Lu(s,i){const e=["vaadin/web-components","vaadin/flow-components","vaadin/react-components"],t=(await Promise.all(e.map(a=>nr.loadRecentlyMergedPulls(a,s,i)))).flat(),r=(await Promise.all(e.map(a=>nr.loadRecentlyClosedIssues(a,s,"BFP",i)))).flat(),n=(await Promise.all(e.map(a=>nr.loadOpenIssues(a,"BFP",i)))).flat();return{startDate:ai(s,"yyyy-MM-dd"),pulls:t,closedWarrantyIssues:r,openWarrantyIssues:n}}function Fu(s,i){const e=["DiegoCardoso","sissbruecker","tomivirkki","rolfsmeds","vursen","web-padawan","yuriy-fix","ugur-vaadin","vaadin-bot","dependabot[bot]"],t=[],r=[],n=[],o=[],a=[],l=[];s.pulls.forEach(c=>{const u=c.title.includes("CP:"),f=new Date(c.mergedAt)>=i;u||!f||(t.push(c),c.title.startsWith("feat")&&r.push(c),c.title.startsWith("fix")&&n.push(c),c.title.startsWith("refactor")&&o.push(c),(c.title.startsWith("chore")||c.title.startsWith("test")||c.title.startsWith("docs"))&&a.push(c),e.includes(c.author)||l.push(c))});const d=s.openWarrantyIssues,h=s.closedWarrantyIssues.filter(c=>new Date(c.closedAt)>=i);return{githubData:s,pulls:t,features:r,fixes:n,refactors:o,chores:a,contributions:l,openWarrantyIssues:d,closedWarrantyIssues:h}}kr(E` <vgd-dashboard></vgd-dashboard>`,document.getElementById("app"));
