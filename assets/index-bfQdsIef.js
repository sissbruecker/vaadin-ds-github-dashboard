(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const It=globalThis,Li=It.ShadowRoot&&(It.ShadyCSS===void 0||It.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Fi=Symbol(),vr=new WeakMap;let hs=class{constructor(i,e,t){if(this._$cssResult$=!0,t!==Fi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(Li&&i===void 0){const t=e!==void 0&&e.length===1;t&&(i=vr.get(e)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&vr.set(e,i))}return i}toString(){return this.cssText}};const On=s=>new hs(typeof s=="string"?s:s+"",void 0,Fi),N=(s,...i)=>{const e=s.length===1?s[0]:i.reduce(((t,r,n)=>t+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1]),s[0]);return new hs(e,s,Fi)},cs=(s,i)=>{if(Li)s.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of i){const t=document.createElement("style"),r=It.litNonce;r!==void 0&&t.setAttribute("nonce",r),t.textContent=e.cssText,s.appendChild(t)}},mr=Li?s=>s:s=>s instanceof CSSStyleSheet?(i=>{let e="";for(const t of i.cssRules)e+=t.cssText;return On(e)})(s):s;const{is:Mn,defineProperty:Rn,getOwnPropertyDescriptor:$n,getOwnPropertyNames:Ln,getOwnPropertySymbols:Fn,getPrototypeOf:zn}=Object,jt=globalThis,br=jt.trustedTypes,Nn=br?br.emptyScript:"",Hn=jt.reactiveElementPolyfillSupport,lt=(s,i)=>s,Ci={toAttribute(s,i){switch(i){case Boolean:s=s?Nn:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,i){let e=s;switch(i){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},zi=(s,i)=>!Mn(s,i),yr={attribute:!0,type:String,converter:Ci,reflect:!1,useDefault:!1,hasChanged:zi};Symbol.metadata??=Symbol("metadata"),jt.litPropertyMetadata??=new WeakMap;let $e=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??=[]).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,e=yr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(i,e),!e.noAccessor){const t=Symbol(),r=this.getPropertyDescriptor(i,t,e);r!==void 0&&Rn(this.prototype,i,r)}}static getPropertyDescriptor(i,e,t){const{get:r,set:n}=$n(this.prototype,i)??{get(){return this[e]},set(o){this[e]=o}};return{get:r,set(o){const a=r?.call(this);n?.call(this,o),this.requestUpdate(i,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??yr}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const i=zn(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const e=this.properties,t=[...Ln(e),...Fn(e)];for(const r of t)this.createProperty(r,e[r])}const i=this[Symbol.metadata];if(i!==null){const e=litPropertyMetadata.get(i);if(e!==void 0)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const e=[];if(Array.isArray(i)){const t=new Set(i.flat(1/0).reverse());for(const r of t)e.unshift(mr(r))}else i!==void 0&&e.push(mr(i));return e}static _$Eu(i,e){const t=e.attribute;return t===!1?void 0:typeof t=="string"?t:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((i=>i(this)))}addController(i){(this._$EO??=new Set).add(i),this.renderRoot!==void 0&&this.isConnected&&i.hostConnected?.()}removeController(i){this._$EO?.delete(i)}_$E_(){const i=new Map,e=this.constructor.elementProperties;for(const t of e.keys())this.hasOwnProperty(t)&&(i.set(t,this[t]),delete this[t]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cs(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((i=>i.hostConnected?.()))}enableUpdating(i){}disconnectedCallback(){this._$EO?.forEach((i=>i.hostDisconnected?.()))}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$ET(i,e){const t=this.constructor.elementProperties.get(i),r=this.constructor._$Eu(i,t);if(r!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:Ci).toAttribute(e,t.type);this._$Em=i,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(i,e){const t=this.constructor,r=t._$Eh.get(i);if(r!==void 0&&this._$Em!==r){const n=t.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Ci;this._$Em=r;const a=o.fromAttribute(e,n.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(i,e,t){if(i!==void 0){const r=this.constructor,n=this[i];if(t??=r.getPropertyOptions(i),!((t.hasChanged??zi)(n,e)||t.useDefault&&t.reflect&&n===this._$Ej?.get(i)&&!this.hasAttribute(r._$Eu(i,t))))return;this.C(i,e,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,e,{useDefault:t,reflect:r,wrapped:n},o){t&&!(this._$Ej??=new Map).has(i)&&(this._$Ej.set(i,o??e??this[i]),n!==!0||o!==void 0)||(this._$AL.has(i)||(this.hasUpdated||t||(e=void 0),this._$AL.set(i,e)),r===!0&&this._$Em!==i&&(this._$Eq??=new Set).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[r,n]of t){const{wrapped:o}=n,a=this[r];o!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,n,a)}}let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(t){throw i=!1,this._$EM(),t}i&&this._$AE(e)}willUpdate(i){}_$AE(i){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(i){}firstUpdated(i){}};$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[lt("elementProperties")]=new Map,$e[lt("finalized")]=new Map,Hn?.({ReactiveElement:$e}),(jt.reactiveElementVersions??=[]).push("2.1.1");const Ni=globalThis,Mt=Ni.trustedTypes,wr=Mt?Mt.createPolicy("lit-html",{createHTML:s=>s}):void 0,us="$lit$",pe=`lit$${Math.random().toFixed(9).slice(2)}$`,fs="?"+pe,Bn=`<${fs}>`,Ae=document,ht=()=>Ae.createComment(""),ct=s=>s===null||typeof s!="object"&&typeof s!="function",Hi=Array.isArray,Vn=s=>Hi(s)||typeof s?.[Symbol.iterator]=="function",ri=`[ 	
\f\r]`,Je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cr=/-->/g,xr=/>/g,we=RegExp(`>|${ri}(?:([^\\s"'>=/]+)(${ri}*=${ri}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,Tr=/"/g,_s=/^(?:script|style|textarea|title)$/i,Un=s=>(i,...e)=>({_$litType$:s,strings:i,values:e}),x=Un(1),Ue=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),Sr=new WeakMap,Te=Ae.createTreeWalker(Ae,129);function ps(s,i){if(!Hi(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return wr!==void 0?wr.createHTML(i):i}const Wn=(s,i)=>{const e=s.length-1,t=[];let r,n=i===2?"<svg>":i===3?"<math>":"",o=Je;for(let a=0;a<e;a++){const l=s[a];let d,h,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,h=o.exec(l),h!==null);)u=o.lastIndex,o===Je?h[1]==="!--"?o=Cr:h[1]!==void 0?o=xr:h[2]!==void 0?(_s.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=we):h[3]!==void 0&&(o=we):o===we?h[0]===">"?(o=r??Je,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?we:h[3]==='"'?Tr:Er):o===Tr||o===Er?o=we:o===Cr||o===xr?o=Je:(o=we,r=void 0);const f=o===we&&s[a+1].startsWith("/>")?" ":"";n+=o===Je?l+Bn:c>=0?(t.push(d),l.slice(0,c)+us+l.slice(c)+pe+f):l+pe+(c===-2?a:f)}return[ps(s,n+(s[e]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),t]};class ut{constructor({strings:i,_$litType$:e},t){let r;this.parts=[];let n=0,o=0;const a=i.length-1,l=this.parts,[d,h]=Wn(i,e);if(this.el=ut.createElement(d,t),Te.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=Te.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(us)){const u=h[o++],f=r.getAttribute(c).split(pe),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?jn:g[1]==="?"?Yn:g[1]==="@"?Gn:Yt}),r.removeAttribute(c)}else c.startsWith(pe)&&(l.push({type:6,index:n}),r.removeAttribute(c));if(_s.test(r.tagName)){const c=r.textContent.split(pe),u=c.length-1;if(u>0){r.textContent=Mt?Mt.emptyScript:"";for(let f=0;f<u;f++)r.append(c[f],ht()),Te.nextNode(),l.push({type:2,index:++n});r.append(c[u],ht())}}}else if(r.nodeType===8)if(r.data===fs)l.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(pe,c+1))!==-1;)l.push({type:7,index:n}),c+=pe.length-1}n++}}static createElement(i,e){const t=Ae.createElement("template");return t.innerHTML=i,t}}function We(s,i,e=s,t){if(i===Ue)return i;let r=t!==void 0?e._$Co?.[t]:e._$Cl;const n=ct(i)?void 0:i._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,t)),t!==void 0?(e._$Co??=[])[t]=r:e._$Cl=r),r!==void 0&&(i=We(s,r._$AS(s,i.values),r,t)),i}class qn{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:e},parts:t}=this._$AD,r=(i?.creationScope??Ae).importNode(e,!0);Te.currentNode=r;let n=Te.nextNode(),o=0,a=0,l=t[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new pt(n,n.nextSibling,this,i):l.type===1?d=new l.ctor(n,l.name,l.strings,this,i):l.type===6&&(d=new Kn(n,this,i)),this._$AV.push(d),l=t[++a]}o!==l?.index&&(n=Te.nextNode(),o++)}return Te.currentNode=Ae,r}p(i){let e=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}}class pt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(i,e,t,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&i?.nodeType===11&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=We(this,i,e),ct(i)?i===M||i==null||i===""?(this._$AH!==M&&this._$AR(),this._$AH=M):i!==this._$AH&&i!==Ue&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):Vn(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==M&&ct(this._$AH)?this._$AA.nextSibling.data=i:this.T(Ae.createTextNode(i)),this._$AH=i}$(i){const{values:e,_$litType$:t}=i,r=typeof t=="number"?this._$AC(i):(t.el===void 0&&(t.el=ut.createElement(ps(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===r)this._$AH.p(e);else{const n=new qn(r,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(i){let e=Sr.get(i.strings);return e===void 0&&Sr.set(i.strings,e=new ut(i)),e}k(i){Hi(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,r=0;for(const n of i)r===e.length?e.push(t=new pt(this.O(ht()),this.O(ht()),this,this.options)):t=e[r],t._$AI(n),r++;r<e.length&&(this._$AR(t&&t._$AB.nextSibling,r),e.length=r)}_$AR(i=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);i!==this._$AB;){const t=i.nextSibling;i.remove(),i=t}}setConnected(i){this._$AM===void 0&&(this._$Cv=i,this._$AP?.(i))}}class Yt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,e,t,r,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=i,this.name=e,this._$AM=r,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=M}_$AI(i,e=this,t,r){const n=this.strings;let o=!1;if(n===void 0)i=We(this,i,e,0),o=!ct(i)||i!==this._$AH&&i!==Ue,o&&(this._$AH=i);else{const a=i;let l,d;for(i=n[0],l=0;l<n.length-1;l++)d=We(this,a[t+l],e,l),d===Ue&&(d=this._$AH[l]),o||=!ct(d)||d!==this._$AH[l],d===M?i=M:i!==M&&(i+=(d??"")+n[l+1]),this._$AH[l]=d}o&&!r&&this.j(i)}j(i){i===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}}class jn extends Yt{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===M?void 0:i}}class Yn extends Yt{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==M)}}class Gn extends Yt{constructor(i,e,t,r,n){super(i,e,t,r,n),this.type=5}_$AI(i,e=this){if((i=We(this,i,e,0)??M)===Ue)return;const t=this._$AH,r=i===M&&t!==M||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,n=i!==M&&(t===M||r);r&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,i):this._$AH.handleEvent(i)}}class Kn{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){We(this,i)}}const Qn=Ni.litHtmlPolyfillSupport;Qn?.(ut,pt),(Ni.litHtmlVersions??=[]).push("3.3.1");const Bi=(s,i,e)=>{const t=e?.renderBefore??i;let r=t._$litPart$;if(r===void 0){const n=e?.renderBefore??null;t._$litPart$=r=new pt(i.insertBefore(ht(),n),n,void 0,e??{})}return r._$AI(s),r};const Vi=globalThis;let z=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const i=super.createRenderRoot();return this.renderOptions.renderBefore??=i.firstChild,i}update(i){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=Bi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ue}};z._$litElement$=!0,z.finalized=!0,Vi.litElementHydrateSupport?.({LitElement:z});const Xn=Vi.litElementPolyfillSupport;Xn?.({LitElement:z});(Vi.litElementVersions??=[]).push("4.2.1");function ue(s){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},ue(s)}function O(s,i){if(i.length<s)throw new TypeError(s+" argument"+(s>1?"s":"")+" required, but only "+i.length+" present")}function W(s){O(1,arguments);var i=Object.prototype.toString.call(s);return s instanceof Date||ue(s)==="object"&&i==="[object Date]"?new Date(s.getTime()):typeof s=="number"||i==="[object Number]"?new Date(s):((typeof s=="string"||i==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Zn(s){O(1,arguments);var i=W(s);return i.setHours(0,0,0,0),i}function xi(){return Zn(Date.now())}function Y(s){if(s===null||s===!0||s===!1)return NaN;var i=Number(s);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}function Jn(s,i){O(2,arguments);var e=W(s),t=Y(i);return isNaN(t)?new Date(NaN):(t&&e.setDate(e.getDate()+t),e)}function Dr(s,i){O(2,arguments);var e=Y(i);return Jn(s,-e)}function eo(s){return O(1,arguments),s instanceof Date||ue(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}function to(s){if(O(1,arguments),!eo(s)&&typeof s!="number")return!1;var i=W(s);return!isNaN(Number(i))}function io(s,i){O(2,arguments);var e=W(s).getTime(),t=Y(i);return new Date(e+t)}function gs(s,i){O(2,arguments);var e=Y(i);return io(s,-e)}var ro=864e5;function so(s){O(1,arguments);var i=W(s),e=i.getTime();i.setUTCMonth(0,1),i.setUTCHours(0,0,0,0);var t=i.getTime(),r=e-t;return Math.floor(r/ro)+1}function qe(s){O(1,arguments);var i=1,e=W(s),t=e.getUTCDay(),r=(t<i?7:0)+t-i;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function vs(s){O(1,arguments);var i=W(s),e=i.getUTCFullYear(),t=new Date(0);t.setUTCFullYear(e+1,0,4),t.setUTCHours(0,0,0,0);var r=qe(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var o=qe(n);return i.getTime()>=r.getTime()?e+1:i.getTime()>=o.getTime()?e:e-1}function no(s){O(1,arguments);var i=vs(s),e=new Date(0);e.setUTCFullYear(i,0,4),e.setUTCHours(0,0,0,0);var t=qe(e);return t}var oo=6048e5;function ms(s){O(1,arguments);var i=W(s),e=qe(i).getTime()-no(i).getTime();return Math.round(e/oo)+1}var ao={};function Ge(){return ao}function Ie(s,i){var e,t,r,n,o,a,l,d;O(1,arguments);var h=Ge(),c=Y((e=(t=(r=(n=i?.weekStartsOn)!==null&&n!==void 0?n:i==null||(o=i.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&r!==void 0?r:h.weekStartsOn)!==null&&t!==void 0?t:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&e!==void 0?e:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=W(s),f=u.getUTCDay(),g=(f<c?7:0)+f-c;return u.setUTCDate(u.getUTCDate()-g),u.setUTCHours(0,0,0,0),u}function Ui(s,i){var e,t,r,n,o,a,l,d;O(1,arguments);var h=W(s),c=h.getUTCFullYear(),u=Ge(),f=Y((e=(t=(r=(n=i?.firstWeekContainsDate)!==null&&n!==void 0?n:i==null||(o=i.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&r!==void 0?r:u.firstWeekContainsDate)!==null&&t!==void 0?t:(l=u.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,f),g.setUTCHours(0,0,0,0);var v=Ie(g,i),I=new Date(0);I.setUTCFullYear(c,0,f),I.setUTCHours(0,0,0,0);var H=Ie(I,i);return h.getTime()>=v.getTime()?c+1:h.getTime()>=H.getTime()?c:c-1}function lo(s,i){var e,t,r,n,o,a,l,d;O(1,arguments);var h=Ge(),c=Y((e=(t=(r=(n=i?.firstWeekContainsDate)!==null&&n!==void 0?n:i==null||(o=i.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&r!==void 0?r:h.firstWeekContainsDate)!==null&&t!==void 0?t:(l=h.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&e!==void 0?e:1),u=Ui(s,i),f=new Date(0);f.setUTCFullYear(u,0,c),f.setUTCHours(0,0,0,0);var g=Ie(f,i);return g}var ho=6048e5;function bs(s,i){O(1,arguments);var e=W(s),t=Ie(e,i).getTime()-lo(e,i).getTime();return Math.round(t/ho)+1}function S(s,i){for(var e=s<0?"-":"",t=Math.abs(s).toString();t.length<i;)t="0"+t;return e+t}var fe={y:function(i,e){var t=i.getUTCFullYear(),r=t>0?t:1-t;return S(e==="yy"?r%100:r,e.length)},M:function(i,e){var t=i.getUTCMonth();return e==="M"?String(t+1):S(t+1,2)},d:function(i,e){return S(i.getUTCDate(),e.length)},a:function(i,e){var t=i.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(i,e){return S(i.getUTCHours()%12||12,e.length)},H:function(i,e){return S(i.getUTCHours(),e.length)},m:function(i,e){return S(i.getUTCMinutes(),e.length)},s:function(i,e){return S(i.getUTCSeconds(),e.length)},S:function(i,e){var t=e.length,r=i.getUTCMilliseconds(),n=Math.floor(r*Math.pow(10,t-3));return S(n,e.length)}},Pe={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},co={G:function(i,e,t){var r=i.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(i,e,t){if(e==="yo"){var r=i.getUTCFullYear(),n=r>0?r:1-r;return t.ordinalNumber(n,{unit:"year"})}return fe.y(i,e)},Y:function(i,e,t,r){var n=Ui(i,r),o=n>0?n:1-n;if(e==="YY"){var a=o%100;return S(a,2)}return e==="Yo"?t.ordinalNumber(o,{unit:"year"}):S(o,e.length)},R:function(i,e){var t=vs(i);return S(t,e.length)},u:function(i,e){var t=i.getUTCFullYear();return S(t,e.length)},Q:function(i,e,t){var r=Math.ceil((i.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(i,e,t){var r=Math.ceil((i.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return S(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(i,e,t){var r=i.getUTCMonth();switch(e){case"M":case"MM":return fe.M(i,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(i,e,t){var r=i.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(i,e,t,r){var n=bs(i,r);return e==="wo"?t.ordinalNumber(n,{unit:"week"}):S(n,e.length)},I:function(i,e,t){var r=ms(i);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):S(r,e.length)},d:function(i,e,t){return e==="do"?t.ordinalNumber(i.getUTCDate(),{unit:"date"}):fe.d(i,e)},D:function(i,e,t){var r=so(i);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):S(r,e.length)},E:function(i,e,t){var r=i.getUTCDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(i,e,t,r){var n=i.getUTCDay(),o=(n-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return S(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(n,{width:"short",context:"formatting"});case"eeee":default:return t.day(n,{width:"wide",context:"formatting"})}},c:function(i,e,t,r){var n=i.getUTCDay(),o=(n-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return S(o,e.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(n,{width:"narrow",context:"standalone"});case"cccccc":return t.day(n,{width:"short",context:"standalone"});case"cccc":default:return t.day(n,{width:"wide",context:"standalone"})}},i:function(i,e,t){var r=i.getUTCDay(),n=r===0?7:r;switch(e){case"i":return String(n);case"ii":return S(n,e.length);case"io":return t.ordinalNumber(n,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(i,e,t){var r=i.getUTCHours(),n=r/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(i,e,t){var r=i.getUTCHours(),n;switch(r===12?n=Pe.noon:r===0?n=Pe.midnight:n=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(i,e,t){var r=i.getUTCHours(),n;switch(r>=17?n=Pe.evening:r>=12?n=Pe.afternoon:r>=4?n=Pe.morning:n=Pe.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(i,e,t){if(e==="ho"){var r=i.getUTCHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return fe.h(i,e)},H:function(i,e,t){return e==="Ho"?t.ordinalNumber(i.getUTCHours(),{unit:"hour"}):fe.H(i,e)},K:function(i,e,t){var r=i.getUTCHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},k:function(i,e,t){var r=i.getUTCHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},m:function(i,e,t){return e==="mo"?t.ordinalNumber(i.getUTCMinutes(),{unit:"minute"}):fe.m(i,e)},s:function(i,e,t){return e==="so"?t.ordinalNumber(i.getUTCSeconds(),{unit:"second"}):fe.s(i,e)},S:function(i,e){return fe.S(i,e)},X:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return Ir(o);case"XXXX":case"XX":return xe(o);case"XXXXX":case"XXX":default:return xe(o,":")}},x:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();switch(e){case"x":return Ir(o);case"xxxx":case"xx":return xe(o);case"xxxxx":case"xxx":default:return xe(o,":")}},O:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ar(o,":");case"OOOO":default:return"GMT"+xe(o,":")}},z:function(i,e,t,r){var n=r._originalDate||i,o=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ar(o,":");case"zzzz":default:return"GMT"+xe(o,":")}},t:function(i,e,t,r){var n=r._originalDate||i,o=Math.floor(n.getTime()/1e3);return S(o,e.length)},T:function(i,e,t,r){var n=r._originalDate||i,o=n.getTime();return S(o,e.length)}};function Ar(s,i){var e=s>0?"-":"+",t=Math.abs(s),r=Math.floor(t/60),n=t%60;if(n===0)return e+String(r);var o=i;return e+String(r)+o+S(n,2)}function Ir(s,i){if(s%60===0){var e=s>0?"-":"+";return e+S(Math.abs(s)/60,2)}return xe(s,i)}function xe(s,i){var e=i||"",t=s>0?"-":"+",r=Math.abs(s),n=S(Math.floor(r/60),2),o=S(r%60,2);return t+n+e+o}var kr=function(i,e){switch(i){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},ys=function(i,e){switch(i){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},uo=function(i,e){var t=i.match(/(P+)(p+)?/)||[],r=t[1],n=t[2];if(!n)return kr(i,e);var o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",kr(r,e)).replace("{{time}}",ys(n,e))},Ei={p:ys,P:uo};function ws(s){var i=new Date(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate(),s.getHours(),s.getMinutes(),s.getSeconds(),s.getMilliseconds()));return i.setUTCFullYear(s.getFullYear()),s.getTime()-i.getTime()}var fo=["D","DD"],_o=["YY","YYYY"];function Cs(s){return fo.indexOf(s)!==-1}function xs(s){return _o.indexOf(s)!==-1}function Rt(s,i,e){if(s==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(i,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(i,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(s==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(i,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var po={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},go=function(i,e,t){var r,n=po[i];return typeof n=="string"?r=n:e===1?r=n.one:r=n.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function si(s){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=i.width?String(i.width):s.defaultWidth,t=s.formats[e]||s.formats[s.defaultWidth];return t}}var vo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yo={date:si({formats:vo,defaultWidth:"full"}),time:si({formats:mo,defaultWidth:"full"}),dateTime:si({formats:bo,defaultWidth:"full"})},wo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Co=function(i,e,t,r){return wo[i]};function et(s){return function(i,e){var t=e!=null&&e.context?String(e.context):"standalone",r;if(t==="formatting"&&s.formattingValues){var n=s.defaultFormattingWidth||s.defaultWidth,o=e!=null&&e.width?String(e.width):n;r=s.formattingValues[o]||s.formattingValues[n]}else{var a=s.defaultWidth,l=e!=null&&e.width?String(e.width):s.defaultWidth;r=s.values[l]||s.values[a]}var d=s.argumentCallback?s.argumentCallback(i):i;return r[d]}}var xo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Eo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},To={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},So={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Do={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ao={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Io=function(i,e){var t=Number(i),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},ko={ordinalNumber:Io,era:et({values:xo,defaultWidth:"wide"}),quarter:et({values:Eo,defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:et({values:To,defaultWidth:"wide"}),day:et({values:So,defaultWidth:"wide"}),dayPeriod:et({values:Do,defaultWidth:"wide",formattingValues:Ao,defaultFormattingWidth:"wide"})};function tt(s){return function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=e.width,r=t&&s.matchPatterns[t]||s.matchPatterns[s.defaultMatchWidth],n=i.match(r);if(!n)return null;var o=n[0],a=t&&s.parsePatterns[t]||s.parsePatterns[s.defaultParseWidth],l=Array.isArray(a)?Oo(a,function(c){return c.test(o)}):Po(a,function(c){return c.test(o)}),d;d=s.valueCallback?s.valueCallback(l):l,d=e.valueCallback?e.valueCallback(d):d;var h=i.slice(o.length);return{value:d,rest:h}}}function Po(s,i){for(var e in s)if(s.hasOwnProperty(e)&&i(s[e]))return e}function Oo(s,i){for(var e=0;e<s.length;e++)if(i(s[e]))return e}function Mo(s){return function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=i.match(s.matchPattern);if(!t)return null;var r=t[0],n=i.match(s.parsePattern);if(!n)return null;var o=s.valueCallback?s.valueCallback(n[0]):n[0];o=e.valueCallback?e.valueCallback(o):o;var a=i.slice(r.length);return{value:o,rest:a}}}var Ro=/^(\d+)(th|st|nd|rd)?/i,$o=/\d+/i,Lo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fo={any:[/^b/i,/^(a|c)/i]},zo={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},No={any:[/1/i,/2/i,/3/i,/4/i]},Ho={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Bo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vo={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Uo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Wo={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},qo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},jo={ordinalNumber:Mo({matchPattern:Ro,parsePattern:$o,valueCallback:function(i){return parseInt(i,10)}}),era:tt({matchPatterns:Lo,defaultMatchWidth:"wide",parsePatterns:Fo,defaultParseWidth:"any"}),quarter:tt({matchPatterns:zo,defaultMatchWidth:"wide",parsePatterns:No,defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:tt({matchPatterns:Ho,defaultMatchWidth:"wide",parsePatterns:Bo,defaultParseWidth:"any"}),day:tt({matchPatterns:Vo,defaultMatchWidth:"wide",parsePatterns:Uo,defaultParseWidth:"any"}),dayPeriod:tt({matchPatterns:Wo,defaultMatchWidth:"any",parsePatterns:qo,defaultParseWidth:"any"})},Es={code:"en-US",formatDistance:go,formatLong:yo,formatRelative:Co,localize:ko,match:jo,options:{weekStartsOn:0,firstWeekContainsDate:1}},Yo=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Go=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ko=/^'([^]*?)'?$/,Qo=/''/g,Xo=/[a-zA-Z]/;function kt(s,i,e){var t,r,n,o,a,l,d,h,c,u,f,g,v,I;O(2,arguments);var H=String(i),k=Ge(),B=(t=(r=void 0)!==null&&r!==void 0?r:k.locale)!==null&&t!==void 0?t:Es,V=Y((n=(o=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:k.firstWeekContainsDate)!==null&&o!==void 0?o:(d=k.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(V>=1&&V<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=Y((c=(u=(f=(g=void 0)!==null&&g!==void 0?g:void 0)!==null&&f!==void 0?f:k.weekStartsOn)!==null&&u!==void 0?u:(v=k.locale)===null||v===void 0||(I=v.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&c!==void 0?c:0);if(!(T>=0&&T<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!B.localize)throw new RangeError("locale must contain localize property");if(!B.formatLong)throw new RangeError("locale must contain formatLong property");var F=W(s);if(!to(F))throw new RangeError("Invalid time value");var be=ws(F),Qe=gs(F,be),Xe={firstWeekContainsDate:V,weekStartsOn:T,locale:B,_originalDate:F},ei=H.match(Go).map(function(j){var Q=j[0];if(Q==="p"||Q==="P"){var ye=Ei[Q];return ye(j,B.formatLong)}return j}).join("").match(Yo).map(function(j){if(j==="''")return"'";var Q=j[0];if(Q==="'")return Zo(j);var ye=co[Q];if(ye)return xs(j)&&Rt(j,i,String(s)),Cs(j)&&Rt(j,i,String(s)),ye(Qe,j,B.localize,Xe);if(Q.match(Xo))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Q+"`");return j}).join("");return ei}function Zo(s){var i=s.match(Ko);return i?i[1].replace(Qo,"'"):s}function Pr(s,i){(i==null||i>s.length)&&(i=s.length);for(var e=0,t=new Array(i);e<i;e++)t[e]=s[e];return t}function Jo(s,i){if(s){if(typeof s=="string")return Pr(s,i);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Pr(s,i)}}function Or(s,i){var e=typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(!e){if(Array.isArray(s)||(e=Jo(s))||i){e&&(s=e);var t=0,r=function(){};return{s:r,n:function(){return t>=s.length?{done:!0}:{done:!1,value:s[t++]}},e:function(d){throw d},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var n=!0,o=!1,a;return{s:function(){e=e.call(s)},n:function(){var d=e.next();return n=d.done,d},e:function(d){o=!0,a=d},f:function(){try{!n&&e.return!=null&&e.return()}finally{if(o)throw a}}}}function ea(s,i){if(s==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&(s[e]=i[e]);return s}function p(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ti(s,i){return Ti=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},Ti(s,i)}function y(s,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(i&&i.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),i&&Ti(s,i)}function $t(s){return $t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$t(s)}function ta(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ia(s,i){if(i&&(ue(i)==="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(s)}function w(s){var i=ta();return function(){var t=$t(s),r;if(i){var n=$t(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);return ia(this,r)}}function m(s,i){if(!(s instanceof i))throw new TypeError("Cannot call a class as a function")}function ra(s,i){if(ue(s)!=="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var t=e.call(s,i);if(ue(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(s)}function Ts(s){var i=ra(s,"string");return ue(i)==="symbol"?i:String(i)}function sa(s,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(s,Ts(t.key),t)}}function b(s,i,e){return i&&sa(s.prototype,i),Object.defineProperty(s,"prototype",{writable:!1}),s}function _(s,i,e){return i=Ts(i),i in s?Object.defineProperty(s,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[i]=e,s}var na=10,Ss=(function(){function s(){m(this,s),_(this,"priority",void 0),_(this,"subPriority",0)}return b(s,[{key:"validate",value:function(e,t){return!0}}]),s})(),oa=(function(s){y(e,s);var i=w(e);function e(t,r,n,o,a){var l;return m(this,e),l=i.call(this),l.value=t,l.validateValue=r,l.setValue=n,l.priority=o,a&&(l.subPriority=a),l}return b(e,[{key:"validate",value:function(r,n){return this.validateValue(r,this.value,n)}},{key:"set",value:function(r,n,o){return this.setValue(r,n,this.value,o)}}]),e})(Ss),aa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",na),_(p(t),"subPriority",-1),t}return b(e,[{key:"set",value:function(r,n){if(n.timestampIsSet)return r;var o=new Date(0);return o.setFullYear(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()),o.setHours(r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds()),o}}]),e})(Ss),E=(function(){function s(){m(this,s),_(this,"incompatibleTokens",void 0),_(this,"priority",void 0),_(this,"subPriority",void 0)}return b(s,[{key:"run",value:function(e,t,r,n){var o=this.parse(e,t,r,n);return o?{setter:new oa(o.value,this.validate,this.set,this.priority,this.subPriority),rest:o.rest}:null}},{key:"validate",value:function(e,t,r){return!0}}]),s})(),la=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",140),_(p(t),"incompatibleTokens",["R","u","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"G":case"GG":case"GGG":return o.era(r,{width:"abbreviated"})||o.era(r,{width:"narrow"});case"GGGGG":return o.era(r,{width:"narrow"});case"GGGG":default:return o.era(r,{width:"wide"})||o.era(r,{width:"abbreviated"})||o.era(r,{width:"narrow"})}}},{key:"set",value:function(r,n,o){return n.era=o,r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r}}]),e})(E),da=6e4,ha=36e5,ca=1e3,$={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},oe={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function L(s,i){return s&&{value:i(s.value),rest:s.rest}}function P(s,i){var e=i.match(s);return e?{value:parseInt(e[0],10),rest:i.slice(e[0].length)}:null}function ae(s,i){var e=i.match(s);if(!e)return null;if(e[0]==="Z")return{value:0,rest:i.slice(1)};var t=e[1]==="+"?1:-1,r=e[2]?parseInt(e[2],10):0,n=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:t*(r*ha+n*da+o*ca),rest:i.slice(e[0].length)}}function Ds(s){return P($.anyDigitsSigned,s)}function R(s,i){switch(s){case 1:return P($.singleDigit,i);case 2:return P($.twoDigits,i);case 3:return P($.threeDigits,i);case 4:return P($.fourDigits,i);default:return P(new RegExp("^\\d{1,"+s+"}"),i)}}function Lt(s,i){switch(s){case 1:return P($.singleDigitSigned,i);case 2:return P($.twoDigitsSigned,i);case 3:return P($.threeDigitsSigned,i);case 4:return P($.fourDigitsSigned,i);default:return P(new RegExp("^-?\\d{1,"+s+"}"),i)}}function Wi(s){switch(s){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function As(s,i){var e=i>0,t=e?i:1-i,r;if(t<=50)r=s||100;else{var n=t+50,o=Math.floor(n/100)*100,a=s>=n%100;r=s+o-(a?100:0)}return e?r:1-r}function Is(s){return s%400===0||s%4===0&&s%100!==0}var ua=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return{year:d,isTwoDigitYear:n==="yy"}};switch(n){case"y":return L(R(4,r),a);case"yo":return L(o.ordinalNumber(r,{unit:"year"}),a);default:return L(R(n.length,r),a)}}},{key:"validate",value:function(r,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(r,n,o){var a=r.getUTCFullYear();if(o.isTwoDigitYear){var l=As(o.year,a);return r.setUTCFullYear(l,0,1),r.setUTCHours(0,0,0,0),r}var d=!("era"in n)||n.era===1?o.year:1-o.year;return r.setUTCFullYear(d,0,1),r.setUTCHours(0,0,0,0),r}}]),e})(E),fa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return{year:d,isTwoDigitYear:n==="YY"}};switch(n){case"Y":return L(R(4,r),a);case"Yo":return L(o.ordinalNumber(r,{unit:"year"}),a);default:return L(R(n.length,r),a)}}},{key:"validate",value:function(r,n){return n.isTwoDigitYear||n.year>0}},{key:"set",value:function(r,n,o,a){var l=Ui(r,a);if(o.isTwoDigitYear){var d=As(o.year,l);return r.setUTCFullYear(d,0,a.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Ie(r,a)}var h=!("era"in n)||n.era===1?o.year:1-o.year;return r.setUTCFullYear(h,0,a.firstWeekContainsDate),r.setUTCHours(0,0,0,0),Ie(r,a)}}]),e})(E),_a=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n){return Lt(n==="R"?4:n.length,r)}},{key:"set",value:function(r,n,o){var a=new Date(0);return a.setUTCFullYear(o,0,4),a.setUTCHours(0,0,0,0),qe(a)}}]),e})(E),pa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",130),_(p(t),"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n){return Lt(n==="u"?4:n.length,r)}},{key:"set",value:function(r,n,o){return r.setUTCFullYear(o,0,1),r.setUTCHours(0,0,0,0),r}}]),e})(E),ga=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",120),_(p(t),"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"Q":case"QQ":return R(n.length,r);case"Qo":return o.ordinalNumber(r,{unit:"quarter"});case"QQQ":return o.quarter(r,{width:"abbreviated",context:"formatting"})||o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return o.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return o.quarter(r,{width:"wide",context:"formatting"})||o.quarter(r,{width:"abbreviated",context:"formatting"})||o.quarter(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=1&&n<=4}},{key:"set",value:function(r,n,o){return r.setUTCMonth((o-1)*3,1),r.setUTCHours(0,0,0,0),r}}]),e})(E),va=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",120),_(p(t),"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"q":case"qq":return R(n.length,r);case"qo":return o.ordinalNumber(r,{unit:"quarter"});case"qqq":return o.quarter(r,{width:"abbreviated",context:"standalone"})||o.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return o.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return o.quarter(r,{width:"wide",context:"standalone"})||o.quarter(r,{width:"abbreviated",context:"standalone"})||o.quarter(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,n){return n>=1&&n<=4}},{key:"set",value:function(r,n,o){return r.setUTCMonth((o-1)*3,1),r.setUTCHours(0,0,0,0),r}}]),e})(E),ma=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]),_(p(t),"priority",110),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return d-1};switch(n){case"M":return L(P($.month,r),a);case"MM":return L(R(2,r),a);case"Mo":return L(o.ordinalNumber(r,{unit:"month"}),a);case"MMM":return o.month(r,{width:"abbreviated",context:"formatting"})||o.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return o.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return o.month(r,{width:"wide",context:"formatting"})||o.month(r,{width:"abbreviated",context:"formatting"})||o.month(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=11}},{key:"set",value:function(r,n,o){return r.setUTCMonth(o,1),r.setUTCHours(0,0,0,0),r}}]),e})(E),ba=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",110),_(p(t),"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return d-1};switch(n){case"L":return L(P($.month,r),a);case"LL":return L(R(2,r),a);case"Lo":return L(o.ordinalNumber(r,{unit:"month"}),a);case"LLL":return o.month(r,{width:"abbreviated",context:"standalone"})||o.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return o.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return o.month(r,{width:"wide",context:"standalone"})||o.month(r,{width:"abbreviated",context:"standalone"})||o.month(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=11}},{key:"set",value:function(r,n,o){return r.setUTCMonth(o,1),r.setUTCHours(0,0,0,0),r}}]),e})(E);function ya(s,i,e){O(2,arguments);var t=W(s),r=Y(i),n=bs(t,e)-r;return t.setUTCDate(t.getUTCDate()-n*7),t}var wa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",100),_(p(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"w":return P($.week,r);case"wo":return o.ordinalNumber(r,{unit:"week"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=53}},{key:"set",value:function(r,n,o,a){return Ie(ya(r,o,a),a)}}]),e})(E);function Ca(s,i){O(2,arguments);var e=W(s),t=Y(i),r=ms(e)-t;return e.setUTCDate(e.getUTCDate()-r*7),e}var xa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",100),_(p(t),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"I":return P($.week,r);case"Io":return o.ordinalNumber(r,{unit:"week"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=53}},{key:"set",value:function(r,n,o){return qe(Ca(r,o))}}]),e})(E),Ea=[31,28,31,30,31,30,31,31,30,31,30,31],Ta=[31,29,31,30,31,30,31,31,30,31,30,31],Sa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"subPriority",1),_(p(t),"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"d":return P($.date,r);case"do":return o.ordinalNumber(r,{unit:"date"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){var o=r.getUTCFullYear(),a=Is(o),l=r.getUTCMonth();return a?n>=1&&n<=Ta[l]:n>=1&&n<=Ea[l]}},{key:"set",value:function(r,n,o){return r.setUTCDate(o),r.setUTCHours(0,0,0,0),r}}]),e})(E),Da=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"subpriority",1),_(p(t),"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"D":case"DD":return P($.dayOfYear,r);case"Do":return o.ordinalNumber(r,{unit:"date"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){var o=r.getUTCFullYear(),a=Is(o);return a?n>=1&&n<=366:n>=1&&n<=365}},{key:"set",value:function(r,n,o){return r.setUTCMonth(0,o),r.setUTCHours(0,0,0,0),r}}]),e})(E);function qi(s,i,e){var t,r,n,o,a,l,d,h;O(2,arguments);var c=Ge(),u=Y((t=(r=(n=(o=e?.weekStartsOn)!==null&&o!==void 0?o:e==null||(a=e.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:c.weekStartsOn)!==null&&r!==void 0?r:(d=c.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&t!==void 0?t:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=W(s),g=Y(i),v=f.getUTCDay(),I=g%7,H=(I+7)%7,k=(H<u?7:0)+g-v;return f.setUTCDate(f.getUTCDate()+k),f}var Aa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["D","i","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"E":case"EE":case"EEE":return o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return o.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=6}},{key:"set",value:function(r,n,o,a){return r=qi(r,o,a),r.setUTCHours(0,0,0,0),r}}]),e})(E),Ia=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o,a){var l=function(h){var c=Math.floor((h-1)/7)*7;return(h+a.weekStartsOn+6)%7+c};switch(n){case"e":case"ee":return L(R(n.length,r),l);case"eo":return L(o.ordinalNumber(r,{unit:"day"}),l);case"eee":return o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"eeeee":return o.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=6}},{key:"set",value:function(r,n,o,a){return r=qi(r,o,a),r.setUTCHours(0,0,0,0),r}}]),e})(E),ka=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o,a){var l=function(h){var c=Math.floor((h-1)/7)*7;return(h+a.weekStartsOn+6)%7+c};switch(n){case"c":case"cc":return L(R(n.length,r),l);case"co":return L(o.ordinalNumber(r,{unit:"day"}),l);case"ccc":return o.day(r,{width:"abbreviated",context:"standalone"})||o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"});case"ccccc":return o.day(r,{width:"narrow",context:"standalone"});case"cccccc":return o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return o.day(r,{width:"wide",context:"standalone"})||o.day(r,{width:"abbreviated",context:"standalone"})||o.day(r,{width:"short",context:"standalone"})||o.day(r,{width:"narrow",context:"standalone"})}}},{key:"validate",value:function(r,n){return n>=0&&n<=6}},{key:"set",value:function(r,n,o,a){return r=qi(r,o,a),r.setUTCHours(0,0,0,0),r}}]),e})(E);function Pa(s,i){O(2,arguments);var e=Y(i);e%7===0&&(e=e-7);var t=1,r=W(s),n=r.getUTCDay(),o=e%7,a=(o+7)%7,l=(a<t?7:0)+e-n;return r.setUTCDate(r.getUTCDate()+l),r}var Oa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",90),_(p(t),"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){var a=function(d){return d===0?7:d};switch(n){case"i":case"ii":return R(n.length,r);case"io":return o.ordinalNumber(r,{unit:"day"});case"iii":return L(o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return L(o.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return L(o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return L(o.day(r,{width:"wide",context:"formatting"})||o.day(r,{width:"abbreviated",context:"formatting"})||o.day(r,{width:"short",context:"formatting"})||o.day(r,{width:"narrow",context:"formatting"}),a)}}},{key:"validate",value:function(r,n){return n>=1&&n<=7}},{key:"set",value:function(r,n,o){return r=Pa(r,o),r.setUTCHours(0,0,0,0),r}}]),e})(E),Ma=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",80),_(p(t),"incompatibleTokens",["b","B","H","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"a":case"aa":case"aaa":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,n,o){return r.setUTCHours(Wi(o),0,0,0),r}}]),e})(E),Ra=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",80),_(p(t),"incompatibleTokens",["a","B","H","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"b":case"bb":case"bbb":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,n,o){return r.setUTCHours(Wi(o),0,0,0),r}}]),e})(E),$a=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",80),_(p(t),"incompatibleTokens",["a","b","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"B":case"BB":case"BBB":return o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return o.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return o.dayPeriod(r,{width:"wide",context:"formatting"})||o.dayPeriod(r,{width:"abbreviated",context:"formatting"})||o.dayPeriod(r,{width:"narrow",context:"formatting"})}}},{key:"set",value:function(r,n,o){return r.setUTCHours(Wi(o),0,0,0),r}}]),e})(E),La=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["H","K","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"h":return P($.hour12h,r);case"ho":return o.ordinalNumber(r,{unit:"hour"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=12}},{key:"set",value:function(r,n,o){var a=r.getUTCHours()>=12;return a&&o<12?r.setUTCHours(o+12,0,0,0):!a&&o===12?r.setUTCHours(0,0,0,0):r.setUTCHours(o,0,0,0),r}}]),e})(E),Fa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["a","b","h","K","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"H":return P($.hour23h,r);case"Ho":return o.ordinalNumber(r,{unit:"hour"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=23}},{key:"set",value:function(r,n,o){return r.setUTCHours(o,0,0,0),r}}]),e})(E),za=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["h","H","k","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"K":return P($.hour11h,r);case"Ko":return o.ordinalNumber(r,{unit:"hour"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=11}},{key:"set",value:function(r,n,o){var a=r.getUTCHours()>=12;return a&&o<12?r.setUTCHours(o+12,0,0,0):r.setUTCHours(o,0,0,0),r}}]),e})(E),Na=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",70),_(p(t),"incompatibleTokens",["a","b","h","H","K","t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"k":return P($.hour24h,r);case"ko":return o.ordinalNumber(r,{unit:"hour"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=1&&n<=24}},{key:"set",value:function(r,n,o){var a=o<=24?o%24:o;return r.setUTCHours(a,0,0,0),r}}]),e})(E),Ha=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",60),_(p(t),"incompatibleTokens",["t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"m":return P($.minute,r);case"mo":return o.ordinalNumber(r,{unit:"minute"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=59}},{key:"set",value:function(r,n,o){return r.setUTCMinutes(o,0,0),r}}]),e})(E),Ba=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",50),_(p(t),"incompatibleTokens",["t","T"]),t}return b(e,[{key:"parse",value:function(r,n,o){switch(n){case"s":return P($.second,r);case"so":return o.ordinalNumber(r,{unit:"second"});default:return R(n.length,r)}}},{key:"validate",value:function(r,n){return n>=0&&n<=59}},{key:"set",value:function(r,n,o){return r.setUTCSeconds(o,0),r}}]),e})(E),Va=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",30),_(p(t),"incompatibleTokens",["t","T"]),t}return b(e,[{key:"parse",value:function(r,n){var o=function(l){return Math.floor(l*Math.pow(10,-n.length+3))};return L(R(n.length,r),o)}},{key:"set",value:function(r,n,o){return r.setUTCMilliseconds(o),r}}]),e})(E),Ua=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",10),_(p(t),"incompatibleTokens",["t","T","x"]),t}return b(e,[{key:"parse",value:function(r,n){switch(n){case"X":return ae(oe.basicOptionalMinutes,r);case"XX":return ae(oe.basic,r);case"XXXX":return ae(oe.basicOptionalSeconds,r);case"XXXXX":return ae(oe.extendedOptionalSeconds,r);case"XXX":default:return ae(oe.extended,r)}}},{key:"set",value:function(r,n,o){return n.timestampIsSet?r:new Date(r.getTime()-o)}}]),e})(E),Wa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",10),_(p(t),"incompatibleTokens",["t","T","X"]),t}return b(e,[{key:"parse",value:function(r,n){switch(n){case"x":return ae(oe.basicOptionalMinutes,r);case"xx":return ae(oe.basic,r);case"xxxx":return ae(oe.basicOptionalSeconds,r);case"xxxxx":return ae(oe.extendedOptionalSeconds,r);case"xxx":default:return ae(oe.extended,r)}}},{key:"set",value:function(r,n,o){return n.timestampIsSet?r:new Date(r.getTime()-o)}}]),e})(E),qa=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",40),_(p(t),"incompatibleTokens","*"),t}return b(e,[{key:"parse",value:function(r){return Ds(r)}},{key:"set",value:function(r,n,o){return[new Date(o*1e3),{timestampIsSet:!0}]}}]),e})(E),ja=(function(s){y(e,s);var i=w(e);function e(){var t;m(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=i.call.apply(i,[this].concat(n)),_(p(t),"priority",20),_(p(t),"incompatibleTokens","*"),t}return b(e,[{key:"parse",value:function(r){return Ds(r)}},{key:"set",value:function(r,n,o){return[new Date(o),{timestampIsSet:!0}]}}]),e})(E),Ya={G:new la,y:new ua,Y:new fa,R:new _a,u:new pa,Q:new ga,q:new va,M:new ma,L:new ba,w:new wa,I:new xa,d:new Sa,D:new Da,E:new Aa,e:new Ia,c:new ka,i:new Oa,a:new Ma,b:new Ra,B:new $a,h:new La,H:new Fa,K:new za,k:new Na,m:new Ha,s:new Ba,S:new Va,X:new Ua,x:new Wa,t:new qa,T:new ja},Ga=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ka=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Qa=/^'([^]*?)'?$/,Xa=/''/g,Za=/\S/,Ja=/[a-zA-Z]/;function el(s,i,e,t){var r,n,o,a,l,d,h,c,u,f,g,v,I,H;O(3,arguments);var k=String(s),B=String(i),V=Ge(),T=(r=(n=void 0)!==null&&n!==void 0?n:V.locale)!==null&&r!==void 0?r:Es;if(!T.match)throw new RangeError("locale must contain match property");var F=Y((o=(a=(l=(d=void 0)!==null&&d!==void 0?d:void 0)!==null&&l!==void 0?l:V.firstWeekContainsDate)!==null&&a!==void 0?a:(h=V.locale)===null||h===void 0||(c=h.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(F>=1&&F<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var be=Y((u=(f=(g=(v=void 0)!==null&&v!==void 0?v:void 0)!==null&&g!==void 0?g:V.weekStartsOn)!==null&&f!==void 0?f:(I=V.locale)===null||I===void 0||(H=I.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&u!==void 0?u:0);if(!(be>=0&&be<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(B==="")return k===""?W(e):new Date(NaN);var Qe={firstWeekContainsDate:F,weekStartsOn:be,locale:T},Xe=[new aa],ei=B.match(Ka).map(function(U){var A=U[0];if(A in Ei){var te=Ei[A];return te(U,T.formatLong)}return U}).join("").match(Ga),j=[],Q=Or(ei),ye;try{var kn=function(){var A=ye.value;!(t!=null&&t.useAdditionalWeekYearTokens)&&xs(A)&&Rt(A,B,s),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Cs(A)&&Rt(A,B,s);var te=A[0],yt=Ya[te];if(yt){var _r=yt.incompatibleTokens;if(Array.isArray(_r)){var pr=j.find(function(gr){return _r.includes(gr.token)||gr.token===te});if(pr)throw new RangeError("The format string mustn't contain `".concat(pr.fullToken,"` and `").concat(A,"` at the same time"))}else if(yt.incompatibleTokens==="*"&&j.length>0)throw new RangeError("The format string mustn't contain `".concat(A,"` and any other token at the same time"));j.push({token:te,fullToken:A});var ii=yt.run(k,A,T.match,Qe);if(!ii)return{v:new Date(NaN)};Xe.push(ii.setter),k=ii.rest}else{if(te.match(Ja))throw new RangeError("Format string contains an unescaped latin alphabet character `"+te+"`");if(A==="''"?A="'":te==="'"&&(A=tl(A)),k.indexOf(A)===0)k=k.slice(A.length);else return{v:new Date(NaN)}}};for(Q.s();!(ye=Q.n()).done;){var hr=kn();if(ue(hr)==="object")return hr.v}}catch(U){Q.e(U)}finally{Q.f()}if(k.length>0&&Za.test(k))return new Date(NaN);var Pn=Xe.map(function(U){return U.priority}).sort(function(U,A){return A-U}).filter(function(U,A,te){return te.indexOf(U)===A}).map(function(U){return Xe.filter(function(A){return A.priority===U}).sort(function(A,te){return te.subPriority-A.subPriority})}).map(function(U){return U[0]}),ti=W(e);if(isNaN(ti.getTime()))return new Date(NaN);var Ze=gs(ti,ws(ti)),cr={},mt=Or(Pn),ur;try{for(mt.s();!(ur=mt.n()).done;){var fr=ur.value;if(!fr.validate(Ze,Qe))return new Date(NaN);var bt=fr.set(Ze,cr,Qe);Array.isArray(bt)?(Ze=bt[0],ea(cr,bt[1])):Ze=bt}}catch(U){mt.e(U)}finally{mt.f()}return Ze}function tl(s){return s.match(Qa)[1].replace(Xa,"'")}window.Vaadin||={};window.Vaadin.featureFlags||={};function il(s){return s.replace(/-[a-z]/gu,i=>i[1].toUpperCase())}const le={};function q(s,i="25.0.0-beta5"){if(Object.defineProperty(s,"version",{get(){return i}}),s.experimental){const t=typeof s.experimental=="string"?s.experimental:`${il(s.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[t]&&!le[t]){le[t]=new Set,le[t].add(s),Object.defineProperty(window.Vaadin.featureFlags,t,{get(){return le[t].size===0},set(r){r&&le[t].size>0&&(le[t].forEach(n=>{customElements.define(n.is,n)}),le[t].clear())}});return}else if(le[t]){le[t].add(s);return}}const e=customElements.get(s.is);if(!e)customElements.define(s.is,s);else{const t=e.version;t&&s.version&&t===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${e.version} is already in use. Something will probably break.`)}}const rl=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function sl(){function s(){return!0}return ks(s)}function nl(){try{return ol()?!0:al()?Pt?!ll():!sl():!1}catch{return!1}}function ol(){return localStorage.getItem("vaadin.developmentmode.force")}function al(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ll(){return!!(Pt&&Object.keys(Pt).map(i=>Pt[i]).filter(i=>i.productionMode).length>0)}function ks(s,i){if(typeof s!="function")return;const e=rl.exec(s.toString());if(e)try{s=new Function(e[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return s(i)}window.Vaadin=window.Vaadin||{};const Mr=function(s,i){if(window.Vaadin.developmentMode)return ks(s,i)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=nl());function dl(){}const hl=function(){if(typeof Mr=="function")return Mr(dl)};let Rr=0,Ps=0;const ze=[];let Si=!1;function cl(){Si=!1;const s=ze.length;for(let i=0;i<s;i++){const e=ze[i];if(e)try{e()}catch(t){setTimeout(()=>{throw t})}}ze.splice(0,s),Ps+=s}const Z={after(s){return{run(i){return window.setTimeout(i,s)},cancel(i){window.clearTimeout(i)}}},run(s,i){return window.setTimeout(s,i)},cancel(s){window.clearTimeout(s)}},ve={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},Os={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},re={run(s){Si||(Si=!0,queueMicrotask(()=>cl())),ze.push(s);const i=Rr;return Rr+=1,i},cancel(s){const i=s-Ps;if(i>=0){if(!ze[i])throw new Error(`invalid async handle: ${s}`);ze[i]=null}}};const ft=new Set;class C{static debounce(i,e,t){return i instanceof C?i._cancelAsync():i=new C,i.setConfig(e,t),i}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,e){this._asyncModule=i,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ft.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ft.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function Ms(s){ft.add(s)}function ul(){const s=!!ft.size;return ft.forEach(i=>{try{i.flush()}catch(e){setTimeout(()=>{throw e})}}),s}const ot=()=>{let s;do s=ul();while(s)};const de=[];function Di(s,i,e=s.getAttribute("dir")){i?s.setAttribute("dir",i):e!=null&&s.removeAttribute("dir")}function Ai(){return document.documentElement.getAttribute("dir")}function fl(){const s=Ai();de.forEach(i=>{Di(i,s)})}const _l=new MutationObserver(fl);_l.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ke=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Di(this,Ai(),null))}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),e!=="dir")return;const n=Ai(),o=r===n&&de.indexOf(this)===-1,a=!r&&t&&de.indexOf(this)===-1;o||a?(this.__subscribe(),Di(this,n,r)):r!==n&&t===n&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=de.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,t,r){r==="dir"&&t===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,t,r)}_attributeToProperty(e,t,r){e==="dir"&&!t?this.dir="":super._attributeToProperty(e,t,r)}__subscribe(){de.includes(this)||de.push(this)}__unsubscribe(){de.includes(this)&&de.splice(de.indexOf(this),1)}};window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){hl()};let ni;const $r=new Set,me=s=>class extends Ke(s){static finalize(){super.finalize();const{is:e}=this;if(e&&!$r.has(e)){window.Vaadin.registrations.push(this),$r.add(e);const t=window.Vaadin.developmentModeCallback;t&&(ni=C.debounce(ni,Os,()=>{t["vaadin-usage-statistics"]()}),Ms(ni))}}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}},Rs=new WeakMap;function pl(s,i){let e=i;for(;e;){if(Rs.get(e)===s)return!0;e=Object.getPrototypeOf(e)}return!1}function se(s){return i=>{if(pl(s,i))return i;const e=s(i);return Rs.set(e,s),e}}function Ft(s,i){return s.split(".").reduce((e,t)=>e?e[t]:void 0,i)}function gl(s,i,e){const t=s.split("."),r=t.pop(),n=t.reduce((o,a)=>o[a],e);n[r]=i}const oi={},vl=/([A-Z])/gu;function Lr(s){return oi[s]||(oi[s]=s.replace(vl,"-$1").toLowerCase()),oi[s]}function Fr(s){return s[0].toUpperCase()+s.substring(1)}function ai(s){const[i,e]=s.split("("),t=e.replace(")","").split(",").map(r=>r.trim());return{method:i,observerProps:t}}function li(s,i){return Object.prototype.hasOwnProperty.call(s,i)||(s[i]=new Map(s[i])),s[i]}const ml=s=>{class i extends s{static enabledWarnings=[];static createProperty(t,r){[String,Boolean,Number,Array].includes(r)&&(r={type:r}),r&&r.reflectToAttribute&&(r.reflect=!0),super.createProperty(t,r)}static getOrCreateMap(t){return li(this,t)}static finalize(){if(window.litIssuedWarnings&&(window.litIssuedWarnings.add("no-override-create-property"),window.litIssuedWarnings.add("no-override-get-property-descriptor")),super.finalize(),Array.isArray(this.observers)){const t=this.getOrCreateMap("__complexObservers");this.observers.forEach(r=>{const{method:n,observerProps:o}=ai(r);t.set(n,o)})}}static addCheckedInitializer(t){super.addInitializer(r=>{r instanceof this&&t(r)})}static getPropertyDescriptor(t,r,n){const o=super.getPropertyDescriptor(t,r,n);let a=o;if(this.getOrCreateMap("__propKeys").set(t,r),n.sync&&(a={get:o.get,set(l){const d=this[t];zi(l,d)&&(this[r]=l,this.requestUpdate(t,d,n),this.hasUpdated&&this.performUpdate())},configurable:!0,enumerable:!0}),n.readOnly){const l=a.set;this.addCheckedInitializer(d=>{d[`_set${Fr(t)}`]=function(h){l.call(d,h)}}),a={get:a.get,set(){},configurable:!0,enumerable:!0}}if("value"in n&&this.addCheckedInitializer(l=>{const d=typeof n.value=="function"?n.value.call(l):n.value;n.readOnly?l[`_set${Fr(t)}`](d):l[t]=d}),n.observer){const l=n.observer;this.getOrCreateMap("__observers").set(t,l),this.addCheckedInitializer(d=>{d[l]||console.warn(`observer method ${l} not defined`)})}if(n.notify){if(!this.__notifyProps)this.__notifyProps=new Set;else if(!this.hasOwnProperty("__notifyProps")){const l=this.__notifyProps;this.__notifyProps=new Set(l)}this.__notifyProps.add(t)}if(n.computed){const l=`__assignComputed${t}`,d=ai(n.computed);this.prototype[l]=function(...h){this[t]=this[d.method](...h)},this.getOrCreateMap("__computedObservers").set(l,d.observerProps)}return n.attribute||(n.attribute=Lr(t)),a}static get polylitConfig(){return{asyncFirstRender:!1}}connectedCallback(){super.connectedCallback();const{polylitConfig:t}=this.constructor;!this.hasUpdated&&!t.asyncFirstRender&&this.performUpdate()}firstUpdated(){super.firstUpdated(),this.$||(this.$={}),this.renderRoot.querySelectorAll("[id]").forEach(t=>{this.$[t.id]=t})}ready(){}willUpdate(t){this.constructor.__computedObservers&&this.__runComplexObservers(t,this.constructor.__computedObservers)}updated(t){const r=this.__isReadyInvoked;this.__isReadyInvoked=!0,this.constructor.__observers&&this.__runObservers(t,this.constructor.__observers),this.constructor.__complexObservers&&this.__runComplexObservers(t,this.constructor.__complexObservers),this.__dynamicPropertyObservers&&this.__runDynamicObservers(t,this.__dynamicPropertyObservers),this.__dynamicMethodObservers&&this.__runComplexObservers(t,this.__dynamicMethodObservers),this.constructor.__notifyProps&&this.__runNotifyProps(t,this.constructor.__notifyProps),r||this.ready()}setProperties(t){Object.entries(t).forEach(([r,n])=>{const o=this.constructor.__propKeys.get(r),a=this[o];this[o]=n,this.requestUpdate(r,a)}),this.hasUpdated&&this.performUpdate()}_createMethodObserver(t){const r=li(this,"__dynamicMethodObservers"),{method:n,observerProps:o}=ai(t);r.set(n,o)}_createPropertyObserver(t,r){li(this,"__dynamicPropertyObservers").set(r,t)}__runComplexObservers(t,r){r.forEach((n,o)=>{n.some(a=>t.has(a))&&(this[o]?this[o](...n.map(a=>this[a])):console.warn(`observer method ${o} not defined`))})}__runDynamicObservers(t,r){r.forEach((n,o)=>{t.has(n)&&this[o]&&this[o](this[n],t.get(n))})}__runObservers(t,r){t.forEach((n,o)=>{const a=r.get(o);a!==void 0&&this[a]&&this[a](this[o],n)})}__runNotifyProps(t,r){t.forEach((n,o)=>{r.has(o)&&this.dispatchEvent(new CustomEvent(`${Lr(o)}-changed`,{detail:{value:this[o]}}))})}_get(t,r){return Ft(t,r)}_set(t,r,n){gl(t,r,n)}}return i},G=se(ml);function bl(s){const i=[];for(;s;){if(s.nodeType===Node.DOCUMENT_NODE){i.push(s);break}if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i.push(s),s=s.host;continue}if(s.assignedSlot){s=s.assignedSlot;continue}s=s.parentNode}return i}function $s(s,i){return i?i.closest(s)||$s(s,i.getRootNode().host):null}function ji(s){return s?new Set(s.split(" ")):new Set}function Gt(s){return s?[...s].join(" "):""}function Yi(s,i,e){const t=ji(s.getAttribute(i));t.add(e),s.setAttribute(i,Gt(t))}function Ls(s,i,e){const t=ji(s.getAttribute(i));if(t.delete(e),t.size===0){s.removeAttribute(i);return}s.setAttribute(i,Gt(t))}function yl(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}class Kt{constructor(i,e){this.slot=i,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let e=[];const t=[],r=[];i.length&&(e=i.filter(n=>!this._storedNodes.includes(n))),this._storedNodes.length&&this._storedNodes.forEach((n,o)=>{const a=i.indexOf(n);a===-1?t.push(n):a!==o&&r.push(n)}),(e.length||t.length||r.length)&&this.callback({addedNodes:e,currentNodes:i,movedNodes:r,removedNodes:t}),this._storedNodes=i}}let wl=0;function Qt(){return wl++}class ce extends EventTarget{static generateId(i,e="default"){return`${e}-${i.localName}-${Qt()}`}constructor(i,e,t,r={}){super();const{initializer:n,multiple:o,observe:a,useUniqueId:l,uniqueIdPrefix:d}=r;this.host=i,this.slotName=e,this.tagName=t,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof o=="boolean"?o:!1,this.slotInitializer=n,o&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(i,d||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=i,i.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:i,slotName:e,tagName:t}=this;let r=this.defaultNode;return!r&&t&&(r=document.createElement(t),r instanceof Element&&(e!==""&&r.setAttribute("slot",e),this.defaultNode=r)),r&&(this.node=r,i.appendChild(r)),r}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.hasAttribute("data-slot-ignore")?!1:e.nodeType===Node.ELEMENT_NODE&&e.slot===i||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:e}=this;e&&e(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,e=i===""?"slot:not([name])":`slot[name=${i}]`,t=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Kt(t,({addedNodes:r,removedNodes:n})=>{const o=this.multiple?this.nodes:[this.node],a=r.filter(l=>!yl(l)&&!o.includes(l)&&!(l.nodeType===Node.ELEMENT_NODE&&l.hasAttribute("data-slot-ignore")));n.length&&(this.nodes=o.filter(l=>!n.includes(l)),n.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...o,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}class Xt extends ce{constructor(i){super(i,"tooltip"),this.setTarget(i),this.__onContentChange=this.__onContentChange.bind(this)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.manual||this.host.setAttribute("has-tooltip",""),this.__notifyChange(i),i.addEventListener("content-changed",this.__onContentChange)}teardownNode(i){this.manual||this.host.removeAttribute("has-tooltip"),i.removeEventListener("content-changed",this.__onContentChange),this.__notifyChange(null)}setAriaTarget(i){this.ariaTarget=i;const e=this.node;e&&(e.ariaTarget=i)}setContext(i){this.context=i;const e=this.node;e&&(e.context=i)}setManual(i){this.manual=i;const e=this.node;e&&(e.manual=i)}setOpened(i){this.opened=i;const e=this.node;e&&(e.opened=i)}setPosition(i){this.position=i;const e=this.node;e&&(e._position=i)}setShouldShow(i){this.shouldShow=i;const e=this.node;e&&(e.shouldShow=i)}setTarget(i){this.target=i;const e=this.node;e&&(e.target=i)}__onContentChange(i){this.__notifyChange(i.target)}__notifyChange(i){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:i}}))}}class Gi extends EventTarget{#e;#t=new Set;#i;#r=!1;constructor(i){super(),this.#e=i,this.#i=new CSSStyleSheet}#n(i){const{propertyName:e}=i;this.#t.has(e)&&this.dispatchEvent(new CustomEvent("property-changed",{detail:{propertyName:e}}))}observe(i){this.connect(),!this.#t.has(i)&&(this.#t.add(i),this.#i.replaceSync(`
      :root::before, :host::before {
        content: '' !important;
        position: absolute !important;
        top: -9999px !important;
        left: -9999px !important;
        visibility: hidden !important;
        transition: 1ms allow-discrete step-end !important;
        transition-property: ${[...this.#t].join(", ")} !important;
      }
    `))}connect(){this.#r||(this.#e.adoptedStyleSheets.unshift(this.#i),this.#s.addEventListener("transitionstart",i=>this.#n(i)),this.#s.addEventListener("transitionend",i=>this.#n(i)),this.#r=!0)}disconnect(){this.#t.clear(),this.#e.adoptedStyleSheets=this.#e.adoptedStyleSheets.filter(i=>i!==this.#i),this.#s.removeEventListener("transitionstart",this.#n),this.#s.removeEventListener("transitionend",this.#n),this.#r=!1}get#s(){return this.#e.documentElement??this.#e.host}static for(i){return i.__cssPropertyObserver||=new Gi(i),i.__cssPropertyObserver}}function Cl(s){const{baseStyles:i,themeStyles:e,elementStyles:t,lumoInjector:r}=s.constructor,n=s.__lumoStyleSheet;return n&&(i||e)?[...r.includeBaseStyles?i:[],n,...e]:[n,...t].filter(Boolean)}function Fs(s){cs(s.shadowRoot,Cl(s))}function zr(s,i){s.__lumoStyleSheet=i,Fs(s)}function di(s){s.__lumoStyleSheet=void 0,Fs(s)}const Nr=new Set;function zs(s){Nr.has(s)||(Nr.add(s),console.warn(s))}const Hr=new WeakMap;function Br(s){try{return s.media.mediaText}catch{return zs('[LumoInjector] Browser denied to access property "mediaText" for some CSS rules, so they were skipped.'),""}}function xl(s){try{return s.cssRules}catch{return zs('[LumoInjector] Browser denied to access property "cssRules" for some CSS stylesheets, so they were skipped.'),[]}}function Ns(s,i={tags:new Map,modules:new Map}){for(const e of xl(s)){if(e instanceof CSSImportRule){const t=Br(e);t.startsWith("lumo_")?i.modules.set(t,[...e.styleSheet.cssRules]):Ns(e.styleSheet,i);continue}if(e instanceof CSSMediaRule){const t=Br(e);t.startsWith("lumo_")&&i.modules.set(t,[...e.cssRules]);continue}if(e instanceof CSSStyleRule&&e.cssText.includes("-inject")){for(const t of e.style){const r=t.match(/^--_lumo-(.*)-inject-modules$/u)?.[1];if(!r)continue;const n=e.style.getPropertyValue(t);i.tags.set(r,n.split(",").map(o=>o.trim().replace(/'|"/gu,"")))}continue}}return i}function El(s){let i=new Map,e=new Map;for(const t of s){let r=Hr.get(t);r||(r=Ns(t),Hr.set(t,r)),i=new Map([...i,...r.tags]),e=new Map([...e,...r.modules])}return{tags:i,modules:e}}function Hs(s){return`--_lumo-${s.is}-inject`}class Tl{#e;#t;#i=new Map;#r=new Map;constructor(i=document){this.#e=i,this.handlePropertyChange=this.handlePropertyChange.bind(this),this.#t=Gi.for(i),this.#t.addEventListener("property-changed",this.handlePropertyChange)}disconnect(){this.#t.removeEventListener("property-changed",this.handlePropertyChange),this.#i.clear(),this.#r.values().forEach(i=>i.forEach(di))}componentConnected(i){const{lumoInjector:e}=i.constructor,{is:t}=e;this.#r.set(t,this.#r.get(t)??new Set),this.#r.get(t).add(i);const r=this.#i.get(t);if(r){r.cssRules.length>0&&zr(i,r);return}this.#n(t);const n=Hs(e);this.#t.observe(n)}componentDisconnected(i){const{is:e}=i.constructor.lumoInjector;this.#r.get(e)?.delete(i),di(i)}handlePropertyChange(i){const{propertyName:e}=i.detail,t=e.match(/^--_lumo-(.*)-inject$/u)?.[1];t&&this.#s(t)}#n(i){this.#i.set(i,new CSSStyleSheet),this.#s(i)}#s(i){const{tags:e,modules:t}=El(this.#o),r=(e.get(i)??[]).flatMap(o=>t.get(o)??[]).map(o=>o.cssText).join(`
`),n=this.#i.get(i);n.replaceSync(r),this.#r.get(i)?.forEach(o=>{r?zr(o,n):di(o)})}get#o(){let i=new Set;for(const e of[this.#e,document])i=i.union(new Set(e.styleSheets)),i=i.union(new Set(e.adoptedStyleSheets));return[...i]}}const Vr=new Set;function Bs(s){const i=s.getRootNode();return i.host&&i.host.constructor.version?Bs(i.host):i}const J=s=>class extends s{static finalize(){super.finalize();const e=Hs(this.lumoInjector);this.is&&!Vr.has(e)&&(Vr.add(e),CSS.registerProperty({name:e,syntax:"<number>",inherits:!0,initialValue:"0"}))}static get lumoInjector(){return{is:this.is,includeBaseStyles:!1}}connectedCallback(){if(super.connectedCallback(),this.isConnected){const e=Bs(this);e.__lumoInjector||=new Tl(e),this.__lumoInjector=e.__lumoInjector,this.__lumoInjector.componentConnected(this)}}disconnectedCallback(){super.disconnectedCallback(),this.__lumoInjector&&(this.__lumoInjector.componentDisconnected(this),this.__lumoInjector=void 0)}};const Vs=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r),e==="theme"&&this._set_theme(r)}};const Ii=[],Sl=new Set,Dl=new Set;function Al(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function Il(s,i){return(s||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(i))}function kl(s){return s.map(i=>i.cssText).join(`
`)}const Pl="vaadin-themable-mixin-style";function Ol(s,i){const e=document.createElement("style");e.id=Pl,e.textContent=kl(s),i.content.appendChild(e)}function Ml(s=""){let i=0;return s.startsWith("lumo-")||s.startsWith("material-")?i=1:s.startsWith("vaadin-")&&(i=2),i}function Us(s){const i=[];return s.include&&[].concat(s.include).forEach(e=>{const t=Ii.find(r=>r.moduleId===e);t?i.push(...Us(t),...t.styles):console.warn(`Included moduleId ${e} not found in style registry`)},s.styles),i}function Rl(s){const i=`${s}-default-theme`,e=Ii.filter(t=>t.moduleId!==i&&Il(t.themeFor,s)).map(t=>({...t,styles:[...Us(t),...t.styles],includePriority:Ml(t.moduleId)})).sort((t,r)=>r.includePriority-t.includePriority);return e.length>0?e:Ii.filter(t=>t.moduleId===i)}const ee=s=>class extends Vs(s){constructor(){super(),Sl.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Dl.add(this.is),this.elementStyles)return;const e=this.prototype._template;!e||Al(this)||Ol(this.getStylesForThis(),e)}static finalizeStyles(e){return this.baseStyles=e?[e].flat(1/0):[],this.themeStyles=this.getStylesForThis(),[...this.baseStyles,...this.themeStyles]}static getStylesForThis(){const e=s.__themes||[],t=Object.getPrototypeOf(this.prototype),r=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...r,...Rl(this.is)];const n=this.__themes.flatMap(o=>o.styles);return n.filter((o,a)=>a===n.lastIndexOf(o))}};const $l=(s,...i)=>{const e=document.createElement("style");e.id=s,e.textContent=i.map(t=>t.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)};["--vaadin-text-color","--vaadin-text-color-disabled","--vaadin-text-color-secondary","--vaadin-border-color","--vaadin-border-color-secondary","--vaadin-background-color"].forEach(s=>{CSS.registerProperty({name:s,syntax:"<color>",inherits:!0,initialValue:"light-dark(black, white)"})});$l("vaadin-base",N`
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
  `);const Ll=N`
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
`;const Fl=s=>s,Ws=typeof document.head.style.touchAction=="string",ki="__polymerGestures",hi="__polymerGesturesHandled",Pi="__polymerGesturesTouchAction",Ur=25,Wr=5,zl=2,Nl=["mousedown","mousemove","mouseup","click"],Hl=[0,1,4,2],Bl=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Ki(s){return Nl.indexOf(s)>-1}let Vl=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){Vl=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function Ul(s){Ki(s)}const Wl=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),ql={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function De(s){const i=s.type;if(!Ki(i))return!1;if(i==="mousemove"){let t=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!Bl&&(t=Hl[s.which]||0),!!(t&1)}return(s.button===void 0?0:s.button)===0}function jl(s){if(s.type==="click"){if(s.detail===0)return!0;const i=ge(s);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const e=i.getBoundingClientRect(),t=s.pageX,r=s.pageY;return!(t>=e.left&&t<=e.right&&r>=e.top&&r<=e.bottom)}return!1}const he={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Yl(s){let i="auto";const e=js(s);for(let t=0,r;t<e.length;t++)if(r=e[t],r[Pi]){i=r[Pi];break}return i}function qs(s,i,e){s.movefn=i,s.upfn=e,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e)}function Ne(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const js=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],Qi={},Se=[];function Gl(s,i){let e=document.elementFromPoint(s,i),t=e;for(;t&&t.shadowRoot&&!window.ShadyDOM;){const r=t;if(t=t.shadowRoot.elementFromPoint(s,i),r===t)break;t&&(e=t)}return e}function ge(s){const i=js(s);return i.length>0?i[0]:s.target}function Kl(s){const i=s.type,t=s.currentTarget[ki];if(!t)return;const r=t[i];if(!r)return;if(!s[hi]&&(s[hi]={},i.startsWith("touch"))){const o=s.changedTouches[0];if(i==="touchstart"&&s.touches.length===1&&(he.touch.id=o.identifier),he.touch.id!==o.identifier)return;Ws||(i==="touchstart"||i==="touchmove")&&Ql(s)}const n=s[hi];if(!n.skip){for(let o=0,a;o<Se.length;o++)a=Se[o],r[a.name]&&!n[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<Se.length;o++)a=Se[o],r[a.name]&&!n[a.name]&&(n[a.name]=!0,a[i](s))}}function Ql(s){const i=s.changedTouches[0],e=s.type;if(e==="touchstart")he.touch.x=i.clientX,he.touch.y=i.clientY,he.touch.scrollDecided=!1;else if(e==="touchmove"){if(he.touch.scrollDecided)return;he.touch.scrollDecided=!0;const t=Yl(s);let r=!1;const n=Math.abs(he.touch.x-i.clientX),o=Math.abs(he.touch.y-i.clientY);s.cancelable&&(t==="none"?r=!0:t==="pan-x"?r=o>n:t==="pan-y"&&(r=n>o)),r?s.preventDefault():zt("track")}}function je(s,i,e){return Qi[i]?(Xl(s,i,e),!0):!1}function Xl(s,i,e){const t=Qi[i],r=t.deps,n=t.name;let o=s[ki];o||(s[ki]=o={});for(let a=0,l,d;a<r.length;a++)l=r[a],!(Wl&&Ki(l)&&l!=="click")&&(d=o[l],d||(o[l]=d={_count:0}),d._count===0&&s.addEventListener(l,Kl,Ul(l)),d[n]=(d[n]||0)+1,d._count=(d._count||0)+1);s.addEventListener(i,e),t.touchAction&&Jl(s,t.touchAction)}function Xi(s){Se.push(s),s.emits.forEach(i=>{Qi[i]=s})}function Zl(s){for(let i=0,e;i<Se.length;i++){e=Se[i];for(let t=0,r;t<e.emits.length;t++)if(r=e.emits[t],r===s)return e}return null}function Jl(s,i){Ws&&s instanceof HTMLElement&&re.run(()=>{s.style.touchAction=i}),s[Pi]=i}function Zi(s,i,e){const t=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(t.detail=e,Fl(s).dispatchEvent(t),t.defaultPrevented){const r=e.preventer||e.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function zt(s){const i=Zl(s);i.info&&(i.info.prevent=!0)}Xi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Ne(this.info)},mousedown(s){if(!De(s))return;const i=ge(s),e=this,t=n=>{De(n)||(it("up",i,n),Ne(e.info))},r=n=>{De(n)&&it("up",i,n),Ne(e.info)};qs(this.info,t,r),it("down",i,s)},touchstart(s){it("down",ge(s),s.changedTouches[0],s)},touchend(s){it("up",ge(s),s.changedTouches[0],s)}});function it(s,i,e,t){i&&Zi(i,s,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t,prevent(r){return zt(r)}})}Xi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>zl&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ne(this.info)},mousedown(s){if(!De(s))return;const i=ge(s),e=this,t=n=>{const o=n.clientX,a=n.clientY;qr(e.info,o,a)&&(e.info.state=e.info.started?n.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&zt("tap"),e.info.addMove({x:o,y:a}),De(n)||(e.info.state="end",Ne(e.info)),i&&ci(e.info,i,n),e.info.started=!0)},r=n=>{e.info.started&&t(n),Ne(e.info)};qs(this.info,t,r),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(s){const i=ge(s),e=s.changedTouches[0],t=e.clientX,r=e.clientY;qr(this.info,t,r)&&(this.info.state==="start"&&zt("tap"),this.info.addMove({x:t,y:r}),ci(this.info,i,e),this.info.state="track",this.info.started=!0)},touchend(s){const i=ge(s),e=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),ci(this.info,i,e))}});function qr(s,i,e){if(s.prevent)return!1;if(s.started)return!0;const t=Math.abs(s.x-i),r=Math.abs(s.y-e);return t>=Wr||r>=Wr}function ci(s,i,e){if(!i)return;const t=s.moves[s.moves.length-2],r=s.moves[s.moves.length-1],n=r.x-s.x,o=r.y-s.y;let a,l=0;t&&(a=r.x-t.x,l=r.y-t.y),Zi(i,"track",{state:s.state,x:e.clientX,y:e.clientY,dx:n,dy:o,ddx:a,ddy:l,sourceEvent:e,hover(){return Gl(e.clientX,e.clientY)}})}Xi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){De(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){De(s)&&jr(this.info,s)},touchstart(s){const i=s.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(s){jr(this.info,s.changedTouches[0],s)}});function jr(s,i,e){const t=Math.abs(i.clientX-s.x),r=Math.abs(i.clientY-s.y),n=ge(e||i);!n||ql[n.localName]&&n.hasAttribute("disabled")||(isNaN(t)||isNaN(r)||t<=Ur&&r<=Ur||jl(i))&&(s.prevent||Zi(n,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:e}))}const Ys=se(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});const gt=se(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});const Gs=s=>class extends Ys(gt(s)){get _activeKeys(){return[" "]}ready(){super.ready(),je(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),je(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};let Ji=!1;window.addEventListener("keydown",()=>{Ji=!0},{capture:!0});window.addEventListener("mousedown",()=>{Ji=!1},{capture:!0});function Oi(){let s=document.activeElement||document.body;for(;s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function ke(){return Ji}function Ks(s){const i=s.style;if(i.visibility==="hidden"||i.display==="none")return!0;const e=window.getComputedStyle(s);return e.visibility==="hidden"||e.display==="none"}function ed(s,i){const e=Math.max(s.tabIndex,0),t=Math.max(i.tabIndex,0);return e===0||t===0?t>e:e>t}function td(s,i){const e=[];for(;s.length>0&&i.length>0;)ed(s[0],i[0])?e.push(i.shift()):e.push(s.shift());return e.concat(s,i)}function Mi(s){const i=s.length;if(i<2)return s;const e=Math.ceil(i/2),t=Mi(s.slice(0,e)),r=Mi(s.slice(e));return td(t,r)}function Nt(s){return s.checkVisibility?!s.checkVisibility({visibilityProperty:!0}):s.offsetParent===null&&s.clientWidth===0&&s.clientHeight===0?!0:Ks(s)}function er(s){return s.matches('[tabindex="-1"]')?!1:s.matches("input, select, textarea, button, object")?s.matches(":not([disabled])"):s.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function tr(s){return s.getRootNode().activeElement===s}function id(s){if(!er(s))return-1;const i=s.getAttribute("tabindex")||0;return Number(i)}function Qs(s,i){if(s.nodeType!==Node.ELEMENT_NODE||Ks(s))return!1;const e=s,t=id(e);let r=t>0;t>=0&&i.push(e);let n=[];return e.localName==="slot"?n=e.assignedNodes({flatten:!0}):n=(e.shadowRoot||e).children,[...n].forEach(o=>{r=Qs(o,i)||r}),r}function rd(s){const i=[];return Qs(s,i)?Mi(i):i}const vt=se(s=>class extends s{get _keyboardActive(){return ke()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}focus(e){super.focus(e),e&&e.focusVisible===!1||this.setAttribute("focus-ring","")}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});const ir=s=>class extends Ys(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged",sync:!0},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),!this.__shouldAllowFocusWhenDisabled()&&(e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.setAttribute("tabindex","-1")):t&&(this._lastTabIndex!==void 0?this.setAttribute("tabindex",this._lastTabIndex):this.tabindex=void 0))}_tabindexChanged(e){this.__shouldAllowFocusWhenDisabled()||this.disabled&&e!==-1&&(this._lastTabIndex=e,this.setAttribute("tabindex","-1"))}focus(e){(!this.disabled||this.__shouldAllowFocusWhenDisabled())&&super.focus(e)}__shouldAllowFocusWhenDisabled(){return!1}};const sd=["mousedown","mouseup","click","dblclick","keypress","keydown","keyup"],nd=s=>class extends Gs(ir(vt(s))){constructor(){super(),this.__onInteractionEvent=this.__onInteractionEvent.bind(this),sd.forEach(e=>{this.addEventListener(e,this.__onInteractionEvent,!0)}),this.tabindex=0}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button"),this.__shouldAllowFocusWhenDisabled()&&this.style.setProperty("--_vaadin-button-disabled-pointer-events","auto")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}__onInteractionEvent(e){this.__shouldSuppressInteractionEvent(e)&&e.stopImmediatePropagation()}__shouldSuppressInteractionEvent(e){return this.disabled}};class od extends nd(me(ee(G(J(z))))){static get is(){return"vaadin-button"}static get styles(){return Ll}static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}render(){return x`
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
    `}ready(){super.ready(),this._tooltipController=new Xt(this),this.addController(this._tooltipController)}__shouldAllowFocusWhenDisabled(){return window.Vaadin.featureFlags.accessibleDisabledButtons}}q(od);const ad=N`
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
`;class ld extends ee(Ke(G(J(z)))){static get is(){return"vaadin-input-container"}static get styles(){return ad}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}render(){return x`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}ready(){super.ready(),this.addEventListener("pointerdown",i=>{i.target===this&&i.preventDefault()}),this.addEventListener("click",i=>{i.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(e=>e.focus&&e.focus())})}}q(ld);const Xs=N`
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
`;const dd=N`
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
`;const Zt=s=>s.test(navigator.userAgent),Ri=s=>s.test(navigator.platform),hd=s=>s.test(navigator.vendor),Yr=Zt(/Android/u),Zs=Zt(/Chrome/u)&&hd(/Google Inc/u),cd=Zt(/Firefox/u),ud=Ri(/^iPad/u)||Ri(/^Mac/u)&&navigator.maxTouchPoints>1,fd=Ri(/^iPhone/u),Ht=fd||ud,rr=Zt(/^((?!chrome|android).)*safari/iu),sr=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();class _d{saveFocus(i){this.focusNode=i||Oi()}restoreFocus(i){const e=this.focusNode;if(!e)return;const t={preventScroll:i?i.preventScroll:!1,focusVisible:i?i.focusVisible:!1};Oi()===document.body?setTimeout(()=>e.focus(t)):e.focus(t),this.focusNode=null}}const ui=[];class pd{constructor(i){this.host=i,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return rd(this.__trapNode)}get __focusedElementIndex(){const i=this.__focusableElements;return i.indexOf(i.filter(tr).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(i){if(this.__trapNode=i,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");ui.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus({focusVisible:ke()})}releaseFocus(){this.__trapNode=null,ui.pop()}__onKeyDown(i){if(this.__trapNode&&this===Array.from(ui).pop()&&i.key==="Tab"){i.preventDefault();const e=i.shiftKey;this.__focusNextElement(e)}}__focusNextElement(i=!1){const e=this.__focusableElements,t=i?-1:1,r=this.__focusedElementIndex,n=(e.length+r+t)%e.length,o=e[n];o.focus({focusVisible:!0}),o.localName==="input"&&o.select()}}const gd=s=>class extends s{static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__focusTrapController=new pd(this),this.__focusRestorationController=new _d}get _contentRoot(){return this}ready(){super.ready(),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}get _focusTrapRoot(){return this.$.overlay}_resetFocus(){if(this.focusTrap&&this.__focusTrapController.releaseFocus(),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const e=ke(),t=!e;this.__focusRestorationController.restoreFocus({preventScroll:t,focusVisible:e})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&this.__focusTrapController.trapFocus(this._focusTrapRoot)}_shouldRestoreFocus(){const e=Oi();return e===document.body||this._deepContains(e)}_deepContains(e){if(this._contentRoot.contains(e))return!0;let t=e;const r=e.ownerDocument;for(;t&&t!==r&&t!==this._contentRoot;)t=t.parentNode||t.host;return t===this._contentRoot}};const Ot=new Set,Bt=()=>[...Ot].filter(s=>!s.hasAttribute("closing")),Js=s=>{const i=Bt(),e=i[i.indexOf(s)+1];return e?s._deepContains(e)?Js(e):!1:!0},Gr=(s,i=e=>!0)=>{const e=Bt().filter(i);return s===e.pop()},vd=s=>class extends s{get _last(){return Gr(this)}get _isAttached(){return Ot.has(this)}bringToFront(){Gr(this)||Js(this)||(this.matches(":popover-open")&&(this.hidePopover(),this.showPopover()),this._removeAttachedInstance(),this._appendAttachedInstance())}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Bt().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Bt();let t;for(;(t=e.pop())&&!(t!==this&&(t.$.overlay.style.removeProperty("pointer-events"),!t.modeless)););}_appendAttachedInstance(){Ot.add(this)}_removeAttachedInstance(){this._isAttached&&Ot.delete(this)}};function md(s,i){let e=null,t;const r=document.documentElement;function n(){t&&clearTimeout(t),e&&e.disconnect(),e=null}function o(a=!1,l=1){n();const{left:d,top:h,width:c,height:u}=s.getBoundingClientRect();if(a||i(),!c||!u)return;const f=Math.floor(h),g=Math.floor(r.clientWidth-(d+c)),v=Math.floor(r.clientHeight-(h+u)),I=Math.floor(d),k={rootMargin:`${-f}px ${-g}px ${-v}px ${-I}px`,threshold:Math.max(0,Math.min(1,l))||1};let B=!0;function V(T){const F=T[0].intersectionRatio;if(F!==l){if(!B)return o();F?o(!1,F):t=setTimeout(()=>{o(!1,1e-7)},1e3)}B=!1}e=new IntersectionObserver(V,k),e.observe(s)}return o(!0),n}function K(s,i,e){const t=[s];s.owner&&t.push(s.owner),typeof e=="string"?t.forEach(r=>{r.setAttribute(i,e)}):e?t.forEach(r=>{r.setAttribute(i,"")}):t.forEach(r=>{r.removeAttribute(i)})}const en=s=>class extends gd(vd(s)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_withBackdropChanged",sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}get _rendererRoot(){return this}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Ht&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}firstUpdated(){super.firstUpdated(),this.popover="manual",this.addEventListener("click",()=>{}),this.$.backdrop&&this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this._rendererRoot,this.owner,this.model)}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{overlay:this,sourceEvent:e}});this.dispatchEvent(t),document.body.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}setBounds(e,t=!0){const r=this.$.overlay,n={...e};t&&r.style.position!=="absolute"&&(r.style.position="absolute"),Object.keys(n).forEach(o=>{n[o]!==null&&!isNaN(n[o])&&(n[o]=`${n[o]}px`)}),Object.assign(r.style,n)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,r=window.innerWidth>e,n=document.documentElement.clientHeight;r&&n>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${n-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_shouldAddGlobalListeners(){return!this.modeless}_addGlobalListeners(){this.__hasGlobalListeners||(this.__hasGlobalListeners=!0,document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0))}_removeGlobalListeners(){this.__hasGlobalListeners&&(this.__hasGlobalListeners=!1,document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0))}_rendererOrDataChanged(e,t,r,n){const o=this._oldOwner!==t||this._oldModel!==r;this._oldModel=r,this._oldOwner=t;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const d=this._oldOpened!==n;this._oldOpened=n,a&&l&&(this._rendererRoot.innerHTML="",delete this._rendererRoot._$litPart$),n&&e&&(a||d||o)&&this.requestContentUpdate()}_modelessChanged(e){this.opened&&(this._shouldAddGlobalListeners()?this._addGlobalListeners():this._removeGlobalListeners()),e?this._exitModalState():this.opened&&this._enterModalState(),K(this,"modeless",e)}_withBackdropChanged(e){K(this,"with-backdrop",e)}_openedChanged(e,t){if(e){if(!this.isConnected){this.opened=!1;return}this._saveFocus(),this._animatedOpening(),this.__scheduledOpen=requestAnimationFrame(()=>{setTimeout(()=>{this._trapFocus();const r=new CustomEvent("vaadin-overlay-open",{detail:{overlay:this},bubbles:!0});this.dispatchEvent(r),document.body.dispatchEvent(r)})}),document.addEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._addGlobalListeners()}else t&&(this.__scheduledOpen&&(cancelAnimationFrame(this.__scheduledOpen),this.__scheduledOpen=null),this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this._shouldAddGlobalListeners()&&this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(e,t){const r=`__${e}Handler`,n=o=>{o&&o.target!==this||(t(),this.removeEventListener("animationend",n),delete this[r])};this[r]=n,this.addEventListener("animationend",n)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this._isAttached&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this._appendAttachedInstance(),this.bringToFront(),this.modeless||this._enterModalState(),K(this,"opening",!0),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this.showPopover()}_finishOpening(){K(this,"opening",!1)}_finishClosing(){this._detachOverlay(),this._removeAttachedInstance(),this.$.overlay.style.removeProperty("pointer-events"),K(this,"closing",!1),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._isAttached&&(this._exitModalState(),K(this,"closing",!0),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this.hidePopover()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(!(!this._last||e.defaultPrevented)&&!(!this._shouldAddGlobalListeners()&&!e.composedPath().includes(this._focusTrapRoot))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}};const fi={start:"top",end:"bottom"},_i={start:"left",end:"right"},Kr=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),tn=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}updated(e){if(super.updated(e),e.has("positionTarget")){const r=e.get("positionTarget");(!this.positionTarget&&r||this.positionTarget&&!r&&this.__margins)&&this.__resetPosition()}(e.has("opened")||e.has("positionTarget"))&&this.__updatePositionSettings(this.opened,this.positionTarget),["horizontalAlign","verticalAlign","noHorizontalOverlap","noVerticalOverlap","requiredVerticalSpace"].some(r=>e.has(r))&&this._updatePosition()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=bl(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=md(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__updatePositionSettings(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,Kr.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,Kr.observe(t))),e){const r=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(n=>{this.__margins[n]=parseInt(r[n],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__onScroll(e){e.target instanceof Node&&this._deepContains(e.target)||this._updatePosition()}__resetPosition(){this.__margins=null,Object.assign(this.style,{justifyContent:"",alignItems:"",top:"",bottom:"",left:"",right:""}),K(this,"bottom-aligned",!1),K(this,"top-aligned",!1),K(this,"end-aligned",!1),K(this,"start-aligned",!1)}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const e=this.positionTarget.getBoundingClientRect();if(e.width===0&&e.height===0&&this.opened){this.opened=!1;return}const t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const r=this.__isRTL,n=this.__shouldAlignStartHorizontally(e,r),o=!r&&n||r&&!n;this.style.alignItems=o?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,fi,this,t),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,_i,this,n);Object.assign(this.style,l,d),K(this,"bottom-aligned",!t),K(this,"top-aligned",t),K(this,"end-aligned",!o),K(this,"start-aligned",o)}__shouldAlignStartHorizontally(e,t){const r=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const n=Math.min(window.innerWidth,document.documentElement.clientWidth),o=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,r,n,this.__margins,o,this.noHorizontalOverlap,_i)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const r=Math.min(window.innerHeight,document.documentElement.clientHeight),n=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,r,this.__margins,n,this.noVerticalOverlap,fi)}__shouldAlignStart(e,t,r,n,o,a,l){const d=r-e[a?l.end:l.start]-n[l.end],h=e[a?l.start:l.end]-n[l.start],c=o?d:h,f=c>(o?h:d)||c>t;return o===f}__adjustBottomProperty(e,t,r){let n;if(e===t.end){if(t.end===fi.end){const o=Math.min(window.innerHeight,document.documentElement.clientHeight);if(r>o&&this.__oldViewportHeight){const a=this.__oldViewportHeight-o;n=r-a}this.__oldViewportHeight=o}if(t.end===_i.end){const o=Math.min(window.innerWidth,document.documentElement.clientWidth);if(r>o&&this.__oldViewportWidth){const a=this.__oldViewportWidth-o;n=r-a}this.__oldViewportWidth=o}}return n}__calculatePositionInOneDimension(e,t,r,n,o,a){const l=a?n.start:n.end,d=a?n.end:n.start,h=parseFloat(o.style[l]||getComputedStyle(o)[l]),c=this.__adjustBottomProperty(l,n,h),u=t[a?n.start:n.end]-e[r===a?n.end:n.start],f=c?`${c}px`:`${h+u*(a?-1:1)}px`;return{[l]:f,[d]:""}}};const bd=s=>class extends tn(en(s)){_shouldCloseOnOutsideClick(e){return!e.composedPath().includes(this.positionTarget)}_mouseDownListener(e){super._mouseDownListener(e),this._shouldCloseOnOutsideClick(e)&&!er(e.composedPath()[0])&&e.preventDefault()}};class yd extends bd(Ke(ee(G(J(z))))){static get is(){return"vaadin-date-picker-overlay"}static get styles(){return[Xs,dd]}render(){return x`
      <div id="backdrop" part="backdrop" ?hidden="${!this.withBackdrop}"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}get _contentRoot(){return this.owner._overlayContent}}q(yd);function wd(s){let i=s.getDay();i===0&&(i=7);const e=4-i,t=new Date(s.getTime()+e*24*3600*1e3),r=new Date(0,0);r.setFullYear(t.getFullYear());const n=t.getTime()-r.getTime(),o=Math.round(n/(24*3600*1e3));return Math.floor(o/7+1)}function $i(s){const i=new Date(s);return i.setHours(0,0,0,0),i}function ie(s,i,e=$i){return s instanceof Date&&i instanceof Date&&e(s).getTime()===e(i).getTime()}function rn(s){return{day:s.getDate(),month:s.getMonth(),year:s.getFullYear()}}function He(s,i,e,t){let r=!1;if(typeof t=="function"&&s){const n=rn(s);r=t(n)}return(!i||s>=i)&&(!e||s<=e)&&!r}function sn(s,i){return i.filter(e=>e!==void 0).reduce((e,t)=>{if(!t)return e;if(!e)return t;const r=Math.abs(s.getTime()-t.getTime()),n=Math.abs(e.getTime()-s.getTime());return r<n?t:e})}function nn(s){const i=new Date,e=new Date(i);return e.setDate(1),e.setMonth(parseInt(s)+i.getMonth()),e}function Cd(s,i,e=0,t=1){if(i>99)throw new Error("The provided year cannot have more than 2 digits.");if(i<0)throw new Error("The provided year cannot be negative.");let r=i+Math.floor(s.getFullYear()/100)*100;return s<new Date(r-50,e,t)?r-=100:s>new Date(r+50,e,t)&&(r+=100),r}function at(s){const i=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(s);if(!i)return;const e=new Date(0,0);return e.setFullYear(parseInt(i[1],10)),e.setMonth(parseInt(i[2],10)-1),e.setDate(parseInt(i[3],10)),e}function xd(s){const i=(l,d="00")=>(d+l).substr((d+l).length-d.length);let e="",t="0000",r=s.year;r<0?(r=-r,e="-",t="000000"):s.year>=1e4&&(e="+",t="000000");const n=e+i(r,t),o=i(s.month+1),a=i(s.day);return[n,o,a].join("-")}function Ed(s){return s instanceof Date?xd({year:s.getFullYear(),month:s.getMonth(),day:s.getDate()}):""}const on=document.createElement("template");on.innerHTML=`
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
`;class an extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(on.content.cloneNode(!0)),this.bufferSize=20,this._initialScroll=5e5,this._initialIndex=0,this._activated=!1}get active(){return this._activated}set active(i){i&&!this._activated&&(this._createPool(),this._activated=!0)}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const i=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,i);const t=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(t)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(i){this._preventScrollEvent=!0,i>this._firstIndex&&i<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(i-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~i,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=i%1*this.itemHeight,this._scrollDisabled=!1)}connectedCallback(){this._ready||(this._ready=!0,this.$={},this.shadowRoot.querySelectorAll("[id]").forEach(i=>{this.$[i.id]=i}),this.$.scroller.addEventListener("scroll",()=>this._scroll()),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`)}disconnectedCallback(){this._debouncerScrollFinish&&this._debouncerScrollFinish.cancel(),this._debouncerUpdateClones&&this._debouncerUpdateClones.cancel(),this.__pendingFinishInit&&cancelAnimationFrame(this.__pendingFinishInit)}forceUpdate(){this._debouncerScrollFinish&&this._debouncerScrollFinish.flush(),this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(i,e){}_finishInit(){this._initDone||(this._buffers.forEach(i=>{[...i.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(i){const e=i?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const i=this.$.scroller.scrollTop;(i<this._bufferHeight||i>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,t=i>this._buffers[1].translateY+e,r=i<this._buffers[0].translateY+e;(t||r)&&(this._translateBuffer(r),this._updateClones()),this._preventScrollEvent||this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._preventScrollEvent=!1,this._debouncerScrollFinish=C.debounce(this._debouncerScrollFinish,Z.after(200),()=>{const n=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],n)&&!this._isVisible(this._buffers[1],n)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(i=>{i.style.transform=`translate3d(0, ${i.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=C.debounce(this._debouncerUpdateClones,Z.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const i=this.innerHeight;this._buffers.forEach(e=>{for(let t=0;t<this.bufferSize;t++){const r=document.createElement("div");r.style.height=`${this.itemHeight}px`,r.instance={};const n=`vaadin-infinite-scroller-item-content-${Qt()}`,o=document.createElement("slot");o.setAttribute("name",n),o._itemWrapper=r,e.appendChild(o),r.setAttribute("slot",n),this.appendChild(r),this.itemHeight*t<=i&&this._ensureStampedInstance(r)}}),this.__pendingFinishInit=requestAnimationFrame(()=>{this._finishInit(),this.__pendingFinishInit=null})}_ensureStampedInstance(i){if(i.firstElementChild)return;const e=i.instance;i.instance=this._createElement(),i.appendChild(i.instance),Object.keys(e).forEach(t=>{i.instance[t]=e[t]})}_updateClones(i){this._firstIndex=Math.round((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=i?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((t,r)=>{if(!t.updated){const n=this._firstIndex+this.bufferSize*r;[...t.children].forEach((o,a)=>{const l=o._itemWrapper;(!i||this._isVisible(l,e))&&this._updateElement(l.instance,n+a)}),t.updated=!0}})}_isVisible(i,e){const t=i.getBoundingClientRect();return t.bottom>e.top&&t.top<e.bottom}}const ln=document.createElement("template");ln.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      grid-area: months;
      height: auto;
    }
  </style>
`;class Td extends an{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(ln.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(i,e){i.month=nn(e)}}q(Td);const dn=document.createElement("template");dn.innerHTML=`
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
`;class Sd extends an{static get is(){return"vaadin-date-picker-year-scroller"}constructor(){super(),this.bufferSize=12,this.shadowRoot.appendChild(dn.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(i,e){i.year=this._yearAfterXYears(e)}_yearAfterXYears(i){const e=new Date,t=new Date(e);return t.setFullYear(parseInt(i)+e.getFullYear()),t.getFullYear()}}q(Sd);const Dd=N`
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
`;class Ad extends ee(G(J(z))){static get is(){return"vaadin-date-picker-year"}static get styles(){return Dd}static get properties(){return{year:{type:String,sync:!0},selectedDate:{type:Object,sync:!0}}}render(){return x`
      <div part="year-number">${this.year}</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}updated(i){super.updated(i),i.has("year")&&this.toggleAttribute("current",this.year===new Date().getFullYear()),(i.has("year")||i.has("selectedDate"))&&this.toggleAttribute("selected",this.selectedDate&&this.selectedDate.getFullYear()===this.year)}}q(Ad);const Id=N`
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
`;const kd=s=>class extends vt(s){static get properties(){return{month:{type:Object,value:new Date,sync:!0},selectedDate:{type:Object,notify:!0,sync:!0},focusedDate:{type:Object},showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:{type:Boolean},minDate:{type:Date,value:null,sync:!0},maxDate:{type:Date,value:null,sync:!0},isDateDisabled:{type:Function,value:()=>!1},enteredDate:{type:Date},disabled:{type:Boolean,reflectToAttribute:!0,computed:"__computeDisabled(month, minDate, maxDate)"},_days:{type:Array,computed:"__computeDays(month, i18n, minDate, maxDate, isDateDisabled)"},_weeks:{type:Array,computed:"__computeWeeks(_days)"},_notTapping:{type:Boolean},__hasFocus:{type:Boolean}}}static get observers(){return["__focusedDateChanged(focusedDate, _days)","_showWeekNumbersChanged(showWeekNumbers, i18n)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(e=>ie(e.date,this.focusedDate))}ready(){super.ready(),je(this.$.monthGrid,"tap",this._handleTap.bind(this))}_setFocused(e){super._setFocused(e),this.__hasFocus=e}__computeDisabled(e,t,r){const n=new Date(0,0);n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);const o=new Date(0,0);return o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()+1),o.setDate(0),t&&r&&t.getMonth()===r.getMonth()&&t.getMonth()===e.getMonth()&&r.getDate()-t.getDate()>=0?!1:!He(n,t,r)&&!He(o,t,r)}_getTitle(e,t){if(!(e===void 0||t===void 0))return t.formatTitle(t.monthNames[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(!(e===void 0||t===void 0))return e.slice(t).concat(e.slice(0,t))}__computeWeekDayNames(e,t){if(e===void 0||t===void 0)return[];const{weekdays:r,weekdaysShort:n,firstDayOfWeek:o}=e,a=this._applyFirstDayOfWeek(n,o);return this._applyFirstDayOfWeek(r,o).map((d,h)=>({weekDay:d,weekDayShort:a[h]})).slice(0,7)}__focusedDateChanged(e,t){Array.isArray(t)&&t.some(r=>ie(r,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}__computeShowWeekSeparator(e,t){return e&&t&&t.firstDayOfWeek===1}_isToday(e){return ie(new Date,e)}__computeDays(e,t){if(e===void 0||t===void 0)return[];const r=new Date(0,0);for(r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(1);r.getDay()!==t.firstDayOfWeek;)this._dateAdd(r,-1);const n=[],o=r.getMonth(),a=e.getMonth();for(;r.getMonth()===a||r.getMonth()===o;)n.push(r.getMonth()===a?new Date(r.getTime()):null),this._dateAdd(r,1);return n}__computeWeeks(e){return e.reduce((t,r,n)=>(n%7===0&&t.push([]),t[t.length-1].push(r),t),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__computeWeekNumber(e){const t=e.reduce((r,n)=>!r&&n?n:r);return wd(t)}__computeDayAriaLabel(e){if(!e)return"";let t=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(t+=`, ${this.i18n.today}`),t}_showWeekNumbersChanged(e,t){this.__computeShowWeekSeparator(e,t)?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}__computeDatePart(e,t,r,n,o,a,l,d){const h=["date"];return this.__isDayDisabled(e,n,o,a)&&h.push("disabled"),ie(e,t)&&(d||ie(e,l))&&h.push("focused"),this.__isDaySelected(e,r)&&h.push("selected"),this._isToday(e)&&h.push("today"),e<$i(new Date)&&h.push("past"),e>$i(new Date)&&h.push("future"),h.join(" ")}__isDaySelected(e,t){return ie(e,t)}__computeDayAriaSelected(e,t){return String(this.__isDaySelected(e,t))}__isDayDisabled(e,t,r,n){return!He(e,t,r,n)}__computeDayAriaDisabled(e,t,r,n){return e===void 0||t===void 0&&r===void 0&&n===void 0?"false":String(this.__isDayDisabled(e,t,r,n))}__computeDayTabIndex(e,t){return ie(e,t)?"0":"-1"}};class Pd extends kd(ee(G(J(z)))){static get is(){return"vaadin-month-calendar"}static get styles(){return Id}render(){const i=this.__computeWeekDayNames(this.i18n,this.showWeekNumbers),e=this._weeks,t=!this.__computeShowWeekSeparator(this.showWeekNumbers,this.i18n);return x`
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
            ${i.map(r=>x`
                <th role="columnheader" part="weekday" scope="col" abbr="${r.weekDay}" aria-hidden="true">
                  ${r.weekDayShort}
                </th>
              `)}
          </tr>
        </thead>
        <tbody id="days-container">
          ${e.map(r=>x`
              <tr role="row">
                <td part="week-number" aria-hidden="true" ?hidden="${t}">
                  ${this.__computeWeekNumber(r)}
                </td>
                ${r.map(n=>x`
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
    `}}q(Pd);const Od=N`
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
`;class hn{constructor(i,e){this.query=i,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}const Md=s=>class extends s{static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Object,value:null,sync:!0},focusedDate:{type:Object,notify:!0,observer:"_focusedDateChanged",sync:!0},_focusedMonthDate:Number,initialPosition:{type:Object,observer:"_initialPositionChanged",sync:!0},_originDate:{type:Object,value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Object,sync:!0},maxDate:{type:Object,sync:!0},isDateDisabled:{type:Function},enteredDate:{type:Date,sync:!0},label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme, isDateDisabled, enteredDate)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate, isDateDisabled)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}_initControllers(){this.addController(new hn(this._desktopMediaQuery,e=>{this._desktopMode=e})),this.addController(new ce(this,"today-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",t=>this.__onTodayButtonKeyDown(t)),e.addEventListener("click",this._onTodayTap.bind(this)),this._todayButton=e}})),this.addController(new ce(this,"cancel-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",t=>this.__onCancelButtonKeyDown(t)),e.addEventListener("click",this._cancel.bind(this)),this._cancelButton=e}})),this.__initMonthScroller(),this.__initYearScroller()}reset(){this._closeYearScroller()}focusCancel(){this._cancelButton.focus()}scrollToDate(e,t){const r=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+r,t),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new ce(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:e=>{e.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),e.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),e.addEventListener("keydown",t=>{this.__onMonthCalendarKeyDown(t)}),e.addEventListener("init-done",()=>{const t=[...this.querySelectorAll("vaadin-month-calendar")];t.forEach(r=>{r.addEventListener("selected-date-changed",n=>{this.selectedDate=n.detail.value})}),this.calendars=t}),this._monthScroller=e}}))}__initYearScroller(){this.addController(new ce(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:e=>{e.setAttribute("aria-hidden","true"),je(e,"tap",t=>{this._onYearTap(t)}),e.addEventListener("custom-scroll",()=>{this._onYearScroll()}),e.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),e.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=e}}))}__updateCancelButton(e,t){e&&(e.textContent=t&&t.cancel)}__updateTodayButton(e,t,r,n,o){e&&(e.textContent=t&&t.today,e.disabled=!this._isTodayAllowed(r,n,o))}__updateCalendars(e,t,r,n,o,a,l,d,h,c,u){e&&e.length&&e.forEach(f=>{f.i18n=t,f.minDate=r,f.maxDate=n,f.isDateDisabled=c,f.focusedDate=a,f.selectedDate=o,f.showWeekNumbers=l,f.ignoreTaps=d,f.enteredDate=u,h?f.setAttribute("theme",h):f.removeAttribute("theme")})}__updateYears(e,t,r){e&&e.length&&e.forEach(n=>{n.selectedDate=t,r?n.setAttribute("theme",r):n.removeAttribute("theme")})}_selectDate(e){return this._dateAllowed(e)?(this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0})),!0):!1}_desktopModeChanged(e){this.toggleAttribute("desktop",e)}_focusedDateChanged(e){this.revealDate(e)}revealDate(e,t=!0){if(!e)return;const r=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const d=this._calculateWeekScrollOffset(e);this._scrollToPosition(r+d,t);return}const n=this._monthScroller.position>r,a=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,l=this._monthScroller.position+a-1<r;n?this._scrollToPosition(r,t):l&&this._scrollToPosition(r-a+1,t)}_calculateWeekScrollOffset(e){const t=new Date(0,0);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(1);let r=0;for(;t.getDate()<e.getDate();)t.setDate(t.getDate()+1),t.getDay()===this.i18n.firstDayOfWeek&&(r+=1);return r/6}_initialPositionChanged(e){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(e)}_repositionYearScroller(){const e=this._monthScroller.position;this._visibleMonthIndex=Math.floor(e),this._yearScroller.position=(e+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=C.debounce(this._debouncer,Z.after(300),()=>{this._ignoreTaps=!1})}_onTodayTap(){const e=this._getTodayMidnight();Math.abs(this._monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const r=(e.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+r*12,!0)}}_scrollToPosition(e,t){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!t){this._monthScroller.position=e,this._monthScroller.forceUpdate(),this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let r;this._revealPromise=new Promise(d=>{r=d});const n=(d,h,c,u)=>(d/=u/2,d<1?c/2*d*d+h:(d-=1,-c/2*(d*(d-2)-1)+h));let o=0;const a=this._monthScroller.position,l=d=>{o||(o=d);const h=d-o;if(h<this.scrollDuration){const c=n(h,a,this._targetPosition-a,this.scrollDuration);this._monthScroller.position=c,window.requestAnimationFrame(l)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:a}})),this._monthScroller.position=this._targetPosition,this._monthScroller.forceUpdate(),this._targetPosition=void 0,r(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(l)}_toggleYearScroller(){this.toggleAttribute("years-visible")}_closeYearScroller(){this.removeAttribute("years-visible")}_yearAfterXMonths(e){return nn(e).getFullYear()}_differenceInMonths(e,t){return(e.getFullYear()-t.getFullYear())*12-t.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}__toggleDate(e){ie(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate)&&(this._close(),t=!0);break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}t&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,t){switch(e.stopPropagation(),t){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const t=this.focusableDateElement;t&&ie(t.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,t.focus())}}async focusDate(e,t){const r=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=r,t||(this._focusedMonthDate=r.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(t=>{requestAnimationFrame(()=>{setTimeout(()=>{t()})})}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(sn(e,[this.minDate,this.maxDate]))}_focusAllowedDate(e,t,r){this._dateAllowed(e,void 0,void 0,()=>!1)?this.focusDate(e,r):this._dateAllowed(this.focusedDate)?t>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(e,t){const r=new Date(0,0);return r.setFullYear(this.focusedDate.getFullYear()),r.setMonth(this.focusedDate.getMonth()+e),t&&r.setDate(this.focusedDate.getDate()+t),r}_moveFocusByDays(e){const t=this._getDateDiff(0,e);this._focusAllowedDate(t,e,!1)}_moveFocusByMonths(e){const t=this._getDateDiff(e),r=t.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),t.setDate(this._focusedMonthDate),t.getMonth()!==r&&t.setDate(0),this._focusAllowedDate(t,e,!0)}_moveFocusInsideMonth(e,t){const r=new Date(0,0);r.setFullYear(e.getFullYear()),t==="minDate"?(r.setMonth(e.getMonth()),r.setDate(1)):(r.setMonth(e.getMonth()+1),r.setDate(0)),this._dateAllowed(r)?this.focusDate(r):this._dateAllowed(e)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t=this.minDate,r=this.maxDate,n=this.isDateDisabled){return He(e,t,r,n)}_isTodayAllowed(e,t,r){return this._dateAllowed(this._getTodayMidnight(),e,t,r)}_getTodayMidnight(){const e=new Date,t=new Date(0,0);return t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate()),t}};class Rd extends Md(ee(Ke(G(J(z))))){static get is(){return"vaadin-date-picker-overlay-content"}static get styles(){return Od}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return x`
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
    `}firstUpdated(){super.firstUpdated(),this.setAttribute("role","dialog"),this._initControllers()}}q(Rd);const Vt=s=>s??M;const cn=se(s=>class extends vt(ir(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged",sync:!0},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus()})}focus(e){this.focusElement&&!this.disabled&&(this.focusElement.focus(),e&&e.focusVisible===!1||this.setAttribute("focus-ring",""))}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0),e===void 0&&this.hasAttribute("tabindex")&&this.removeAttribute("tabindex")}});const pi=new WeakMap;function $d(s){return pi.has(s)||pi.set(s,new Set),pi.get(s)}function Ld(s,i){const e=document.createElement("style");e.textContent=s,i===document?document.head.appendChild(e):i.insertBefore(e,i.firstChild)}const Fd=se(s=>class extends s{get slotStyles(){return[]}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=$d(e);this.slotStyles.forEach(r=>{t.has(r)||(Ld(r,e),t.add(r))})}});const un=se(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged",sync:!0},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0}}}constructor(){super(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),!(e===""&&t===void 0)&&(this.__userInput||this._forwardInputValue(e))}});const zd=s=>class extends un(gt(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){this._shouldKeepFocusOnClearMousedown()&&e.preventDefault(),sr||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&!this.readonly&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_shouldKeepFocusOnClearMousedown(){return tr(this.inputElement)}};const gi=new Map;function nr(s){return gi.has(s)||gi.set(s,new WeakMap),gi.get(s)}function fn(s,i){s&&s.removeAttribute(i)}function _n(s,i){if(!s||!i)return;const e=nr(i);if(e.has(s))return;const t=ji(s.getAttribute(i));e.set(s,new Set(t))}function Nd(s,i){if(!s||!i)return;const e=nr(i),t=e.get(s);!t||t.size===0?s.removeAttribute(i):Yi(s,i,Gt(t)),e.delete(s)}function vi(s,i,e={newId:null,oldId:null,fromUser:!1}){if(!s||!i)return;const{newId:t,oldId:r,fromUser:n}=e,o=nr(i),a=o.get(s);if(!n&&a){r&&a.delete(r),t&&a.add(t);return}n&&(a?t||o.delete(s):_n(s,i),fn(s,i)),Ls(s,i,r);const l=t||Gt(a);l&&Yi(s,i,l)}function Hd(s,i){_n(s,i),fn(s,i)}class Bd{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,e=!1){const t=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,t,e),e?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(Hd(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&(Nd(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,e,t){vi(this.__target,"aria-labelledby",{newId:i,oldId:e,fromUser:t})}__setErrorIdToAriaAttribute(i,e){vi(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(i,e){vi(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}const ne=document.createElement("div");ne.style.position="fixed";ne.style.clip="rect(0px, 0px, 0px, 0px)";ne.setAttribute("aria-live","polite");document.body.appendChild(ne);let wt;function Vd(s,i={}){const e=i.mode||"polite",t=i.timeout===void 0?150:i.timeout;e==="alert"?(ne.removeAttribute("aria-live"),ne.removeAttribute("role"),wt=C.debounce(wt,ve,()=>{ne.setAttribute("role","alert")})):(wt&&wt.cancel(),ne.removeAttribute("role"),ne.setAttribute("aria-live",e)),ne.textContent="",setTimeout(()=>{ne.textContent=s},t)}class or extends ce{constructor(i,e,t,r={}){super(i,e,t,{...r,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(t=>{const r=t.target,n=r===this.node;t.type==="attributes"?n&&this.__updateNodeId(r):(n||r.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const e=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!i.id&&(i.id=this.defaultId)}}class Ud extends or{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:e,invalid:t}=this,r=!!(t&&e&&e.trim()!=="");i&&(i.textContent=r?e:"",i.hidden=!r,r&&Vd(e,{mode:"assertive"})),super.updateDefaultNode(i)}}class Wd extends or{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}class qd extends or{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}const jd=se(s=>class extends s{static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new qd(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});const pn=se(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1,sync:!0},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0,sync:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}_requestValidation(){this.manualValidation||this.validate()}});const Yd=s=>class extends pn(jd(s)){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Bd(this),this._helperController=new Wd(this),this._errorController=new Ud(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:r}=e.detail;this.__labelChanged(t,r)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:r}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,r)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)})}};const gn=se(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((t,r)=>{this._delegateAttribute(t,e[r])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((t,r)=>{this._delegateProperty(t,e[r])})}_delegateAttribute(e,t){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",t?"true":!1),typeof t=="boolean"?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}});const vn=se(s=>class extends gn(pn(un(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...t){if(!e)return;const r=this._hasValidConstraints(t),n=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this._requestValidation():n&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(e){e.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});const Gd=s=>class extends Fd(cn(vn(Yd(zd(gt(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){const e=this.localName;return[`
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
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&e.target===this.inputElement&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=C.debounce(this._preventInputDebouncer,Z.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const t=e.clipboardData.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const t=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(t){console.error(t)}}};class Kd extends ce{constructor(i,e,t={}){const{uniqueIdPrefix:r}=t;super(i,"input","input",{initializer:(n,o)=>{o.value&&(n.value=o.value),o.type&&n.setAttribute("type",o.type),n.id=this.defaultId,typeof e=="function"&&e(n)},useUniqueId:!0,uniqueIdPrefix:r})}}class Qd{constructor(i,e){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}const Xd=N`
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
`;const Zd=N`
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
`;const Jd=[Zd,Xd];const eh=N`
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
`;let Oe=new WeakMap,Ct=new WeakMap,xt={},mi=0;const Qr=s=>s&&s.nodeType===Node.ELEMENT_NODE,bi=(...s)=>{console.error(`Error: ${s.join(" ")}. Skip setting aria-hidden.`)},th=(s,i)=>Qr(s)?i.map(e=>{if(!Qr(e))return bi(e,"is not a valid element"),null;let t=e;for(;t&&t!==s;){if(s.contains(t))return e;t=t.getRootNode().host}return bi(e,"is not contained inside",s),null}).filter(e=>!!e):(bi(s,"is not a valid element"),[]),ih=(s,i,e,t)=>{const r=th(i,Array.isArray(s)?s:[s]);xt[e]||(xt[e]=new WeakMap);const n=xt[e],o=[],a=new Set,l=new Set(r),d=c=>{if(!c||a.has(c))return;a.add(c);const u=c.assignedSlot;u&&d(u),d(c.parentNode||c.host)};r.forEach(d);const h=c=>{if(!c||l.has(c))return;const u=c.shadowRoot;(u?[...c.children,...u.children]:[...c.children]).forEach(g=>{if(!["template","script","style"].includes(g.localName))if(a.has(g))h(g);else{const v=g.getAttribute(t),I=v!==null&&v!=="false",H=(Oe.get(g)||0)+1,k=(n.get(g)||0)+1;Oe.set(g,H),n.set(g,k),o.push(g),H===1&&I&&Ct.set(g,!0),k===1&&g.setAttribute(e,"true"),I||g.setAttribute(t,"true")}})};return h(i),a.clear(),mi+=1,()=>{o.forEach(c=>{const u=Oe.get(c)-1,f=n.get(c)-1;Oe.set(c,u),n.set(c,f),u||(Ct.has(c)?Ct.delete(c):c.removeAttribute(t)),f||c.removeAttribute(e)}),mi-=1,mi||(Oe=new WeakMap,Oe=new WeakMap,Ct=new WeakMap,xt={})}},rh=(s,i=document.body,e="data-aria-hidden")=>{const t=Array.from(Array.isArray(s)?s:[s]);return i&&t.push(...Array.from(i.querySelectorAll("[aria-live]"))),ih(t,i,e,"aria-hidden")};function Xr(s,...i){const e=n=>Array.isArray(n),t=n=>n&&typeof n=="object"&&!e(n),r=(n,o)=>{t(o)&&t(n)&&Object.keys(o).forEach(a=>{const l=o[a];t(l)?(n[a]||(n[a]={}),r(n[a],l)):e(l)?n[a]=[...l]:l!=null&&(n[a]=l)})};return i.forEach(n=>{r(s,n)}),s}const sh=(s,i)=>class extends i{static get properties(){return{i18n:{type:Object},__effectiveI18n:{type:Object,sync:!0}}}constructor(){super(),this.i18n=Xr({},s)}get i18n(){return this.__customI18n}set i18n(t){t!==this.__customI18n&&(this.__customI18n=t,this.__effectiveI18n=Xr({},s,this.__customI18n))}};class nh{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}const oh=Object.freeze({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(s){const i=String(s.year).replace(/\d+/u,e=>"0000".substr(e.length)+e);return[s.month+1,s.day,i].join("/")},parseDate(s){const i=s.split("/"),e=new Date;let t,r=e.getMonth(),n=e.getFullYear();if(i.length===3){if(r=parseInt(i[0])-1,t=parseInt(i[1]),n=parseInt(i[2]),i[2].length<3&&n>=0){const o=this.referenceDate?at(this.referenceDate):new Date;n=Cd(o,n,r,t)}}else i.length===2?(r=parseInt(i[0])-1,t=parseInt(i[1])):i.length===1&&(t=parseInt(i[0]));if(t!==void 0)return{day:t,month:r,year:n}},formatTitle:(s,i)=>`${s} ${i}`}),ah=s=>class extends sh(oh,cn(vn(gt(s)))){static get properties(){return{_selectedDate:{type:Object,sync:!0},_focusedDate:{type:Object,sync:!0},value:{type:String,notify:!0,value:"",sync:!0},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged",sync:!0},autoOpenDisabled:{type:Boolean,sync:!0},showWeekNumbers:{type:Boolean,value:!1,sync:!0},_fullscreen:{type:Boolean,value:!1,sync:!0},_fullscreenMediaQuery:{value:"(max-width: 450px), (max-height: 450px)"},min:{type:String,sync:!0},max:{type:String,sync:!0},isDateDisabled:{type:Function},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)"},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)"},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, __effectiveI18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Ht},_focusOverlayOnOpen:Boolean,_overlayContent:{type:Object,sync:!0},__enteredDate:{type:Date,sync:!0}}}static get observers(){return["_selectedDateChanged(_selectedDate, __effectiveI18n)","_focusedDateChanged(_focusedDate, __effectiveI18n)","__updateOverlayContent(_overlayContent, __effectiveI18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers, isDateDisabled, __enteredDate)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}get i18n(){return super.i18n}set i18n(e){super.i18n=e}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e;const t=this.__parseDate(e);this.__setEnteredDate(t)}get __unparsableValue(){return!this._inputElementValue||this.__parseDate(this._inputElementValue)?"":this._inputElementValue}_onFocus(e){super._onFocus(e),this._noInput&&!ke()&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.__commitParsedOrFocusedDate(),document.hasFocus()&&this._requestValidation())}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new hn(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new nh(this)),this._overlayElement=this.$.overlay}updated(e){super.updated(e),(e.has("showWeekNumbers")||e.has("__effectiveI18n"))&&this.toggleAttribute("week-numbers",this.showWeekNumbers&&this.__effectiveI18n.firstDayOfWeek===1)}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}focus(e){this._noInput&&!ke()?this.open():super.focus(e)}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}__ensureContent(){if(this._overlayContent)return;const e=document.createElement("vaadin-date-picker-overlay-content");e.setAttribute("slot","overlay"),this.appendChild(e),this._overlayContent=e,e.addEventListener("close",()=>{this._close()}),e.addEventListener("focus-input",this._focusAndSelect.bind(this)),e.addEventListener("date-tap",t=>{this.__commitDate(t.detail.date),this._close()}),e.addEventListener("date-selected",t=>{this.__commitDate(t.detail.date)}),e.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),e.addEventListener("focusout",t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)}),e.addEventListener("focused-date-changed",t=>{this._focusedDate=t.detail.value}),e.addEventListener("click",t=>t.stopPropagation())}__parseDate(e){if(!this.__effectiveI18n.parseDate)return;let t=this.__effectiveI18n.parseDate(e);if(t&&(t=at(`${t.year}-${t.month+1}-${t.day}`)),t&&!isNaN(t.getTime()))return t}__formatDate(e){if(this.__effectiveI18n.formatDate)return this.__effectiveI18n.formatDate(rn(e))}checkValidity(){const e=this._inputElementValue,t=!e||!!this._selectedDate&&e===this.__formatDate(this._selectedDate),r=!this._selectedDate||He(this._selectedDate,this._minDate,this._maxDate,this.isDateDisabled);let n=!0;return this.inputElement&&this.inputElement.checkValidity&&(n=this.inputElement.checkValidity()),t&&r&&n}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldKeepFocusOnClearMousedown(){return this.opened?!0:super._shouldKeepFocusOnClearMousedown()}_shouldRemoveFocus(e){const{relatedTarget:t}=e;return this.opened&&t!==null&&t!==document.body&&!this.contains(t)&&!this._overlayContent.contains(t)?!0:!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}__commitValueChange(){const e=this.__unparsableValue;this.__committedValue!==this.value?(this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValue!==e&&(this._requestValidation(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValue=e}__commitDate(e){this.__keepCommittedValue=!0,this._selectedDate=e,this.__keepCommittedValue=!1,this.__commitValueChange()}_close(){this._focus(),this.close()}_isNoInput(e,t,r,n,o,a){return!e||t&&(!a||o)||r&&o||!n.parseDate}_formatISO(e){return Ed(e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&this.__ensureContent(),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,t){e===void 0||t===void 0||(this.__keepInputValue||this._applyInputValue(e),this.value=this._formatISO(e),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1)}_focusedDateChanged(e,t){e===void 0||t===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,t){const r=at(e);if(e&&!r){this.value=t;return}e?ie(this._selectedDate,r)||(this._selectedDate=r,t!==void 0&&this._requestValidation()):this._selectedDate=null,this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValue=""),this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,t,r,n,o,a,l,d,h,c){e&&(e.i18n=t,e.label=r,e.minDate=n,e.maxDate=o,e.focusedDate=a,e.selectedDate=l,e.showWeekNumbers=d,e.isDateDisabled=h,e.enteredDate=c)}__updateOverlayContentTheme(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,t){e&&e.toggleAttribute("fullscreen",t)}_onOverlayEscapePress(e){e.stopPropagation(),this._focusedDate=this._selectedDate,this._applyInputValue(this._selectedDate),this._close()}_onOverlayOpened(){const e=this._overlayContent;e.reset();const t=this._getInitialPosition();e.initialPosition=t;const r=e.focusedDate||t;e.scrollToDate(r),this._ignoreFocusedDateChange=!0,e.focusedDate=r,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(e.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const n=this.inputElement;this._noInput&&n&&(n.blur(),this._overlayContent.focusDateElement());const o=this._noInput?e:this;this.__showOthers=rh(o)}_getInitialPosition(){const e=at(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||He(t,this._minDate,this._maxDate,this.isDateDisabled)?t:this._minDate||this._maxDate?sn(t,[this._minDate,this._maxDate]):new Date}__commitParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.__effectiveI18n.parseDate){const e=this._inputElementValue||"",t=this.__parseDate(e);t?this.__commitDate(t):(this.__keepInputValue=!0,this.__commitDate(null),this.__keepInputValue=!1)}else this._focusedDate&&this.__commitDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this.__commitParsedOrFocusedDate(),this.inputElement&&this.inputElement.selectionStart&&(this.inputElement.selectionStart=this.inputElement.selectionEnd),!this.value&&!this._keyboardActive&&this._requestValidation()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this.__formatDate(e):""}_setSelectionRange(e,t){this.inputElement&&this.inputElement.setSelectionRange(e,t)}_onChange(e){e.stopPropagation()}_onClick(e){e.composedPath().includes(this._overlayElement)||this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.__commitDate(null)}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&["Tab","Escape"].indexOf(e.key)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){e.composedPath().includes(this._overlayContent)||(this.opened?this.close():this.__commitParsedOrFocusedDate())}_onEscape(e){if(this.opened){this._onOverlayEscapePress(e);return}if(this.clearButtonVisible&&this.value&&!this.readonly){e.stopPropagation(),this._onClearButtonClick(e);return}this.inputElement.value===""?this.__commitDate(null):this._applyInputValue(this._selectedDate)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){!this.opened&&this._inputElementValue&&!this.autoOpenDisabled&&this.open();const e=this.__parseDate(this._inputElementValue||"");e&&(this._ignoreFocusedDateChange=!0,ie(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1),this.__setEnteredDate(e)}__setEnteredDate(e){e?ie(this.__enteredDate,e)||(this.__enteredDate=e):this.__enteredDate=null}__computeMinOrMaxDate(e){return at(e)}};class lh extends ah(Gd(ee(me(G(J(z)))))){static get is(){return"vaadin-date-picker"}static get styles(){return[Jd,eh]}static get properties(){return{_positionTarget:{type:Object,sync:!0}}}get clearElement(){return this.$.clearButton}render(){return x`
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
          theme="${Vt(this._theme)}"
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
        theme="${Vt(this._theme)}"
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
    `}ready(){super.ready(),this.addController(new Kd(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e},{uniqueIdPrefix:"search-input"})),this.addController(new Qd(this.inputElement,this._labelController)),this._tooltipController=new Xt(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.shadowRoot.querySelector('[part="field-button toggle-button"]').addEventListener("mousedown",e=>e.preventDefault())}_onOpenedChanged(i){this.opened=i.detail.value}_onVaadinOverlayClose(i){const e=i.detail.sourceEvent;e&&e.composedPath().includes(this)&&!e.composedPath().includes(this._overlayElement)&&i.preventDefault()}_toggle(i){i.stopPropagation(),this.$.overlay.opened?this.close():this.open()}}q(lh);function Ye(s){return s.__cells||Array.from(s.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function X(s,i){[...s.children].forEach(i)}function _t(s,i){Ye(s).forEach(i),s.__detailsCell&&i(s.__detailsCell)}function dh(s,i,e){let t=1;s.forEach(r=>{t%10===0&&(t+=1),r._order=e+t*i,t+=1})}function Jt(s,i,e){switch(typeof e){case"boolean":s.toggleAttribute(i,e);break;case"string":s.setAttribute(i,e);break;default:s.removeAttribute(i);break}}function D(s,i,e){s.classList.toggle(i,e||e===""),s.part.toggle(i,e||e===""),s.part.length===0&&s.removeAttribute("part")}function Ut(s,i,e){s.forEach(t=>{D(t,i,e)})}function Le(s,i){const e=Ye(s);Object.entries(i).forEach(([t,r])=>{Jt(s,t,r);const n=`${t}-row`;D(s,n,r),Ut(e,`${n}-cell`,r)})}function Zr(s,i){const e=Ye(s);Object.entries(i).forEach(([t,r])=>{const n=s.getAttribute(t);if(Jt(s,t,r),n){const o=`${t}-${n}-row`;D(s,o,!1),Ut(e,`${o}-cell`,!1)}if(r){const o=`${t}-${r}-row`;D(s,o,r),Ut(e,`${o}-cell`,r)}})}function Ee(s,i,e,t,r){Jt(s,i,e),r&&D(s,r,!1),D(s,t||`${i}-cell`,e)}function hh(s){return Ye(s).find(i=>i._content.querySelector("vaadin-grid-tree-toggle"))}class Be{constructor(i,e){this.__host=i,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=C.debounce(this.__initialCallDebouncer,re,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(e=>{i?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns=this.__currentColumns||[];const e=Be.getColumns(this.__host),t=e.filter(a=>!this.__currentColumns.includes(a)),r=this.__currentColumns.filter(a=>!e.includes(a)),n=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||t.length||r.length||n)&&this.__callback(t,r)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const e=[],t=i._isColumnElement||Be.__isColumnElement;return[...i.children].forEach(r=>{t(r)?e.push(r):r instanceof HTMLSlotElement&&[...r.assignedElements({flatten:!0})].filter(n=>t(n)).forEach(n=>e.push(n))}),e}}const ch=s=>class extends s{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:{type:Object,sync:!0},_footerCell:{type:Object,sync:!0},_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{Ee(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||Ee(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{Ee(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||Ee(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach(r=>{r.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,r=t?`reorder-${t}-cell`:"",n=`reorder-${e}-cell`;this._allCells.forEach(o=>{Ee(o,"reorder-status",e,n,r)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(r=>{if(r){const n=r.querySelector('[part~="resize-handle"]');if(n&&r.removeChild(n),e){const o=document.createElement("div");D(o,"resize-handle",!0),r.appendChild(o)}}})}_textAlignChanged(e){if(!(e===void 0||this._grid===void 0)){if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}this._allCells.forEach(t=>{t._content.style.textAlign=e})}}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=C.debounce(this._grid._debouncerHiddenChanged,ve,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,r){const n=r&&r.item&&!t.parentElement.hidden;if(!(n||e===this._headerRenderer||e===this._footerRenderer))return;const a=[t._content,this];n&&a.push(r),e.apply(this,a)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(r=>{if(!r.parentElement)return;const n=this._grid.__getRowModel(r.parentElement);e&&(r._renderer!==e&&this._clearCellContent(r),r._renderer=e,this._runRenderer(e,r,n))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...r){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,r,n){[{cell:e,partName:r},{cell:t,partName:n}].forEach(({cell:o,partName:a})=>{if(o){const l=o.__customParts||[];o.part.remove(...l),o.__customParts=a?a.trim().split(" "):[],o.part.add(...o.__customParts)}})}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...r){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:r}){this.path&&this.__setTextContent(e,Ft(this.path,r))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},uh=s=>class extends ch(Ke(s)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};class fh extends uh(G(z)){static get is(){return"vaadin-grid-column"}}q(fh);const _h=N`
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
`;const Jr=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),ph=Jr&&Jr[1]>=8,es=3,gh={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;s=this._iterateItems((e,t)=>{if(i+=this._getPhysicalSizeIncrement(e),i>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{i<this._scrollBottom&&(s=t),i+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=s-this._scrollPosition;const e=i>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const t=Math.round(i/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),re)}},_getReusables(s){let i,e,t;const r=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(s?(i=this._physicalStart,e=c-d):(i=this._physicalEnd,e=h-u);t=this._getPhysicalSizeIncrement(i),e-=t,!(r.length>=l||e<=n);)if(s){if(a+r.length+1>=this._virtualCount||d+t>=c-this._scrollOffset)break;r.push(i),d+=t,i=(i+1)%l}else{if(o-r.length<=0||d+this._physicalSize-t<=u)break;r.push(i),d-=t,i=i===0?l-1:i-1}return{indexes:r,physicalTop:d-this._scrollOffset}},_update(s,i){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),i)for(;i.length;){const e=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const e=this._clamp(this._physicalCount+s,es,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let n=0;n<e;n++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-r)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),Os):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),re))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(es))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,ve))},_iterateItems(s,i){let e,t,r,n;if(arguments.length===2&&i){for(n=0;n<i.length;n++)if(e=i[n],t=this._computeVidx(e),(r=s.call(this,e,t))!=null)return r}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((r=s.call(this,e,t))!=null)return r;for(e=0;e<this._physicalStart;e++,t++)if((r=s.call(this,e,t))!=null)return r}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${s}px`,0,this._physicalItems[i]),s+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const i=this._scrollPosition;!ph&&i>0&&this._resetScrollPosition(i-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(s||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(ot(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,e=this._virtualStart,t=0;const r=this._hiddenContentSize;for(;e<s&&t<=r;)t+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},ve)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,i,e){return Math.min(e,Math.max(i,s))},_debounce(s,i,e){this._debouncers||(this._debouncers={}),this._debouncers[s]=C.debounce(this._debouncers[s],e,i.bind(this)),Ms(this._debouncers[s])}};const vh=1e5,yi=1e3;class mn{constructor({createElements:i,updateElement:e,scrollTarget:t,scrollContainer:r,reorderElements:n,elementsContainer:o,__disableHeightPlaceholder:a}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=r,this.reorderElements=n,this.elementsContainer=o||r,this.__disableHeightPlaceholder=a??!1,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,PREVENT_OVERSCROLL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:d}])=>{const h=d.width===0&&d.height===0;!h&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=h}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("virtualizer-element-focused",d=>this.__onElementFocused(d)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(i/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):t<e?i<yi?(t=i,this._vidxOffset=0):(t=yi,this._vidxOffset=i-t):this._vidxOffset=i-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),ot(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}hostConnected(){this.scrollTarget.offsetParent&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition)}update(i=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(r=>{r.__virtualIndex>=i&&r.__virtualIndex<=e&&(this.__updateElement(r,r.__virtualIndex,!0),t.push(r))}),this.__afterElementsUpdated(t)}_updateMetrics(i){ot();let e=0,t=0;const r=this._physicalAverageCount,n=this._physicalAverage;this._iterateItems((o,a)=>{t+=this._physicalSizes[o];const l=this._physicalSizes[o];this._physicalSizes[o]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[o])),this._physicalSizes[o]!==l&&(this.__resizeObserver.unobserve(this._physicalItems[o]),this.__resizeObserver.observe(this._physicalItems[o],{box:"border-box"})),e+=this._physicalSizes[o],this._physicalAverageCount+=this._physicalSizes[o]?1:0},i),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((n*r+e)/this._physicalAverageCount))}__getBorderBoxHeight(i){const e=getComputedStyle(i),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const r=parseFloat(e.paddingBottom)||0,n=parseFloat(e.paddingTop)||0,o=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return t+r+n+o+a}__updateElement(i,e,t){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.style.opacity="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==e||t)&&(this.updateElement(i,e),i.__lastUpdatedIndex=e)}__afterElementsUpdated(i){this.__disableHeightPlaceholder||i.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=C.debounce(this.__placeholderClearDebouncer,ve,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const r=this.__elementHeightQueue.filter(n=>n!==void 0);this.__placeholderHeight=Math.round(r.reduce((n,o)=>n+o,0)/r.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===i);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,t;if(i>0&&(e=this.adjustedFirstVisibleIndex,t=this.__getIndexScrollOffset(e)),this.__size=i,this._itemsChanged({path:"items"}),ot(),i>0){e=Math.min(e,i-1),this.scrollToIndex(e);const r=this.__getIndexScrollOffset(e);t!==void 0&&r!==void 0&&(this._scrollTop+=t-r)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),ot(),this._debounce("_update",this._update,re)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,vh)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const e=this.createElements(i),t=document.createDocumentFragment();return e.forEach(r=>{r.style.position="absolute",t.appendChild(r),this.__resizeObserver.observe(r,{box:"border-box"})}),this.elementsContainer.appendChild(t),e}_assignModels(i){const e=[];this._iterateItems((t,r)=>{const n=this._physicalItems[t];n.hidden=r>=this.size,n.hidden?delete n.__lastUpdatedIndex:(n.__virtualIndex=r+(this._vidxOffset||0),this.__updateElement(n,n.__virtualIndex),e.push(n))},i),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,e,t,r){r.style.transform=`translateY(${e})`}toggleScrollListener(){}__getFocusedElement(i=this.__getVisibleElements()){return i.find(e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(i,e){return e.indexOf(i)===e.length-1&&this.size>i.__virtualIndex+1}__previousFocusableSiblingMissing(i,e){return e.indexOf(i)===0&&i.__virtualIndex>0}__onElementFocused(i){if(!this.reorderElements)return;const e=i.detail.element;if(!e)return;const t=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(e,t)||this.__nextFocusableSiblingMissing(e,t))&&this.flush();const r=this.__getVisibleElements();this.__nextFocusableSiblingMissing(e,r)?(this._scrollTop+=Math.ceil(e.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(e,r)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(e.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-this._scrollPosition);const i=this._scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=i>=0,t=this._getReusables(!e);t.indexes.length&&(this._physicalTop=t.physicalTop,e?(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length):(this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=C.debounce(this.__fixInvalidItemPositioningDebouncer,Z.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning()),this.__overscrollDebouncer?.isActive()||(this.scrollTarget.style.overscrollBehavior="none"),this.__overscrollDebouncer=C.debounce(this.__overscrollDebouncer,Z.after(this.timeouts.PREVENT_OVERSCROLL),()=>{this.scrollTarget.style.overscrollBehavior=null})),this.reorderElements&&(this.__scrollReorderDebouncer=C.debounce(this.__scrollReorderDebouncer,Z.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this._scrollPosition===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}_resizeHandler(){super._resizeHandler();const i=this.adjustedLastVisibleIndex===this.size-1,e=this._physicalTop-this._scrollPosition;if(i&&e>0){const t=Math.ceil(e/this._physicalAverage);this._virtualStart=Math.max(0,this._virtualStart-t),this._physicalStart=Math.max(0,this._physicalStart-t),super.scrollToIndex(this._virtualCount-1),this.scrollTarget.scrollTop=this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight}}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,r=this.adjustedLastVisibleIndex===this.size-1;if(i&&!t||e&&!r){const n=e,o=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(n?-1:1),this._scrollHandler(),this._ratio=o}}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,t)))}else super._increasePoolIfNeeded(i)}get _optPhysicalSize(){const i=super._optPhysicalSize;return i<=0||this.__hasPlaceholders()?i:i+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;const i=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),e=Math.max(...this._physicalSizes);return e>Math.min(...this._physicalSizes)?Math.max(0,e-i):0}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const e=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),t=this.__getFocusedElement(e)||e[0];if(!t)return;const r=t.__virtualIndex-i,n=e.indexOf(t)-r;if(n>0)for(let o=0;o<n;o++)this.elementsContainer.appendChild(e[o]);else if(n<0)for(let o=e.length+n;o<e.length;o++)this.elementsContainer.insertBefore(e[o],e[0]);if(rr){const{transform:o}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=o})}}_adjustVirtualIndexOffset(i){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(t*e)}else{const t=this._vidxOffset,r=yi,n=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<r&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,n),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-r&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,n),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(mn.prototype,gh);class mh{constructor(i){this.__adapter=new mn(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,e=this.size-1){this.__adapter.update(i,e)}flush(){this.__adapter.flush()}hostConnected(){this.__adapter.hostConnected()}}const bh=s=>class extends s{static get properties(){return{accessibleName:{type:String}}}static get observers(){return["__a11yUpdateGridSize(size, _columnTree, __emptyState)"]}__a11yGetHeaderRowCount(e){return e.filter(t=>t.some(r=>r.headerRenderer||r.path&&r.header!==null||r.header)).length}__a11yGetFooterRowCount(e){return e.filter(t=>t.some(r=>r.footerRenderer)).length}__a11yUpdateGridSize(e,t,r){if(e===void 0||t===void 0)return;const n=this.__a11yGetHeaderRowCount(t),o=this.__a11yGetFooterRowCount(t),l=(r?1:e)+n+o;this.$.table.setAttribute("aria-rowcount",l);const d=t[t.length-1],h=r?1:l&&d&&d.length||0;this.$.table.setAttribute("aria-colcount",h),this.__a11yUpdateHeaderRows(),this.__a11yUpdateFooterRows()}__a11yUpdateHeaderRows(){X(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}__a11yUpdateFooterRows(){X(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this.__a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}__a11yUpdateRowRowindex(e){e.setAttribute("aria-rowindex",e.index+this.__a11yGetHeaderRowCount(this._columnTree)+1)}__a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),_t(e,r=>{r.setAttribute("aria-selected",!!t)})}__a11yUpdateRowExpanded(e){const t=hh(e);this.__isRowExpandable(e)?(e.setAttribute("aria-expanded","false"),t&&t.setAttribute("aria-expanded","false")):this.__isRowCollapsible(e)?(e.setAttribute("aria-expanded","true"),t&&t.setAttribute("aria-expanded","true")):(e.removeAttribute("aria-expanded"),t&&t.removeAttribute("aria-expanded"))}__a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}__a11ySetRowDetailsCell(e,t){_t(e,r=>{r!==t&&r.setAttribute("aria-controls",t.id)})}__a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}__a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};const yh=s=>s.offsetParent&&!s.part.contains("body-cell")&&er(s)&&getComputedStyle(s).visibility!=="hidden",wh=s=>class extends s{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,r=t?t.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_shouldPreventCellActivationOnClick(e){const{cell:t}=this._getGridEventLocation(e);return e.defaultPrevented||!t||t.part.contains("details-cell")||t===this.$.emptystatecell||t._content.contains(this.getRootNode().activeElement)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement}_onClick(e){if(this._shouldPreventCellActivationOnClick(e))return;const{cell:t}=this._getGridEventLocation(e);t&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_isFocusable(e){return yh(e)}};function Fe(s,i){return s.split(".").reduce((e,t)=>e[t],i)}function ts(s,i,e){if(e.length===0)return!1;let t=!0;return s.forEach(({path:r})=>{if(!r||r.indexOf(".")===-1)return;const n=r.replace(/\.[^.]*$/u,"");Fe(n,e[0])===void 0&&(console.warn(`Path "${r}" used for ${i} does not exist in all of the items, ${i} is disabled.`),t=!1)}),t}function Wt(s){return[void 0,null].indexOf(s)>=0?"":isNaN(s)?s.toString():s}function is(s,i){return s=Wt(s),i=Wt(i),s<i?-1:s>i?1:0}function Ch(s,i){return s.sort((e,t)=>i.map(r=>r.direction==="asc"?is(Fe(r.path,e),Fe(r.path,t)):r.direction==="desc"?is(Fe(r.path,t),Fe(r.path,e)):0).reduce((r,n)=>r!==0?r:n,0))}function xh(s,i){return s.filter(e=>i.every(t=>{const r=Wt(Fe(t.path,e)),n=Wt(t.value).toString().toLowerCase();return r.toString().toLowerCase().includes(n)}))}const Eh=s=>(i,e)=>{let t=s?[...s]:[];i.filters&&ts(i.filters,"filtering",t)&&(t=xh(t,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&ts(i.sortOrders,"sorting",t)&&(t=Ch(t,i.sortOrders));const r=Math.min(t.length,i.pageSize),n=i.page*r,o=n+r,a=t.slice(n,o);e(a,t.length)};const Th=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){const t=Eh(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,t,r){r&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?this.clearCache():this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}};const Sh=s=>class extends s{static get properties(){return{__pendingRecalculateColumnWidths:{type:Boolean,value:!0}}}static get observers(){return["__dataProviderChangedAutoWidth(dataProvider)","__columnTreeChangedAutoWidth(_columnTree)","__flatSizeChangedAutoWidth(_flatSize)"]}updated(i){super.updated(i),i.has("__hostVisible")&&!i.get("__hostVisible")&&this.__tryToRecalculateColumnWidthsIfPending()}__dataProviderChangedAutoWidth(i){this.__hasHadRenderedRowsForColumnWidthCalculation||this.recalculateColumnWidths()}__columnTreeChangedAutoWidth(i){queueMicrotask(()=>this.recalculateColumnWidths())}__flatSizeChangedAutoWidth(i){requestAnimationFrame(()=>{i&&!this.__hasHadRenderedRowsForColumnWidthCalculation?this.recalculateColumnWidths():this.__tryToRecalculateColumnWidthsIfPending()})}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_updateFrozenColumn(){super._updateFrozenColumn(),this.__tryToRecalculateColumnWidthsIfPending()}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,e){if(i==null||i===this)return 0;const t=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth(this.__getParentColumnGroup(i),i));if(!e)return t;const r=i,n=t,o=r._visibleChildColumns.map(h=>this.__getIntrinsicWidth(h)).reduce((h,c)=>h+c,0),a=Math.max(0,n-o),d=this.__getIntrinsicWidth(e)/o*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(n=>{n.__debounceUpdateHeaderFooterRowVisibility&&n.__debounceUpdateHeaderFooterRowVisibility.flush()}),this.__hasHadRenderedRowsForColumnWidthCalculation=this.__hasHadRenderedRowsForColumnWidthCalculation||this._getRenderedRows().length>0,this.__intrinsicWidthCache=new Map;const i=this._firstVisibleIndex,e=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(n=>n.index>=i&&n.index<=e);const t=this.__getAutoWidthColumns(),r=new Set;for(const n of t){let o=this.__getParentColumnGroup(n);for(;o&&!r.has(o);)r.add(o),o=this.__getParentColumnGroup(o)}this.__calculateAndCacheIntrinsicWidths([...t,...r]),t.forEach(n=>{n.width=`${this.__getDistributedWidth(n)}px`}),this.__intrinsicWidthCache.clear()}__getParentColumnGroup(i){const e=(i.assignedSlot||i).parentElement;return e&&e!==this?e:null}__setVisibleCellContentAutoWidth(i,e){i._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t.__measuringAutoWidth?(t.__originalWidth=t.style.width,t.style.width="auto",t.style.position="absolute"):(t.style.width=t.__originalWidth,delete t.__originalWidth,t.style.position="")}),e?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),i.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this.__isReadyForColumnWidthCalculation()){this.__pendingRecalculateColumnWidths=!0;return}this._recalculateColumnWidths()}__tryToRecalculateColumnWidthsIfPending(){this.__pendingRecalculateColumnWidths&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}__getAutoWidthColumns(){return this._getColumns().filter(i=>!i.hidden&&i.autoWidth)}__isReadyForColumnWidthCalculation(){if(!this._columnTree)return!1;const i=this.__getAutoWidthColumns().filter(o=>!customElements.get(o.localName));if(i.length)return Promise.all(i.map(o=>customElements.whenDefined(o.localName))).then(()=>{this.__tryToRecalculateColumnWidthsIfPending()}),!1;const e=[...this.$.items.children].some(o=>o.index===void 0),t=this._debouncerHiddenChanged&&this._debouncerHiddenChanged.isActive(),r=this.__debounceUpdateFrozenColumn&&this.__debounceUpdateFrozenColumn.isActive(),n=this.clientHeight>0;return!this._dataProviderController.isLoading()&&!e&&!Nt(this)&&!t&&!r&&n}};const Dh=s=>class extends s{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),je(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),sr||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),r=t[t.indexOf(this.$.header)-2];if(!r||!r._content||r._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.slice(0,Math.max(0,t.indexOf(this))).some(n=>n.draggable))return;const r=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!r||!r.part.contains("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=r._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const r=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,e.detail.x)){const n=this._columnTree.findIndex(h=>h.includes(r)),o=this._getColumnsInOrder(n),a=o.indexOf(this._draggedColumn),l=o.indexOf(r),d=a<l?1:-1;for(let h=a;h!==l;h+=d)this._swapColumnOrders(this._draggedColumn,o[h+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,r)=>t._order-r._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const r=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(r)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const r=this._reorderGhost.getBoundingClientRect(),n=e-r.width/2,o=t-r.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(r.left-n),this._reorderGhost._top=l-(r.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const r=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(n=>{t.style[n]=r[n]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),dh(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){X(e.parentNode,r=>{/column/u.test(r.localName)&&this._isSwapAllowed(r,e)&&(r._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const r=e!==t,n=e.parentElement===t.parentElement,o=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return r&&n&&o}}_isSwappableByPosition(e,t){const r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),n=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=r.getBoundingClientRect();return o.left>n.left?t>o.right-n.width:t<o.left+n.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let r=e._column;for(;r.parentElement!==t.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===t.parentElement?r:e._column}}};const Ah=s=>class extends s{ready(){super.ready();const e=this.$.scroller;je(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.part.contains("resize-handle")&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.part.contains("resize-handle")&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.part.contains("resize-handle")){let n=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);n.localName==="vaadin-grid-column-group";)n=n._childColumns.slice(0).sort((c,u)=>c._order-u._order).filter(c=>!c.hidden).pop();const o=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(c=>c._column===n);if(d.offsetWidth){const c=getComputedStyle(d._content),u=10+parseInt(c.paddingLeft)+parseInt(c.paddingRight)+parseInt(c.borderLeftWidth)+parseInt(c.borderRightWidth)+parseInt(c.marginLeft)+parseInt(c.marginRight);let f;const g=d.offsetWidth,v=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?f=g+(o?a-v.right:v.left-a):f=g+(o?v.left-a:a-v.right),n.width=`${Math.max(u,f)}px`,n.flexGrow=0}l.sort((c,u)=>c._column._order-u._column._order).forEach((c,u,f)=>{u<f.indexOf(d)&&(c._column.width=`${c.offsetWidth}px`,c._column.flexGrow=0)});const h=this._frozenToEndCells[0];if(h&&this.$.table.scrollWidth>this.$.table.offsetWidth){const c=h.getBoundingClientRect(),u=a-(o?c.right:c.left);(o&&u<=0||!o&&u>=0)&&(this.$.table.scrollLeft+=u)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}};class ar{context;pageSize;items=[];pendingRequests={};#e={};#t=0;#i=0;constructor(i,e,t,r,n){this.context=i,this.pageSize=e,this.size=t,this.parentCache=r,this.parentCacheIndex=n,this.#i=t||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.#e)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.#i}get size(){return this.#t}set size(i){if(this.#t!==i){if(this.#t=i,this.context.placeholder!==void 0){this.items.length=i||0;for(let t=0;t<i;t++)this.items[t]||=this.context.placeholder}this.items.length>i&&(this.items.length=i||0),Object.keys(this.pendingRequests).forEach(t=>{parseInt(t)*this.pageSize>=this.size&&delete this.pendingRequests[t]})}}recalculateFlatSize(){this.#i=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,e)=>(e.recalculateFlatSize(),i+e.flatSize),0):0}setPage(i,e){const t=i*this.pageSize;e.forEach((r,n)=>{const o=t+n;(this.size===void 0||o<this.size)&&(this.items[o]=r)})}getSubCache(i){return this.#e[i]}removeSubCache(i){delete this.#e[i]}removeSubCaches(){this.#e={}}createSubCache(i){const e=new ar(this.context,this.pageSize,0,this,i);return this.#e[i]=e,e}getFlatIndex(i){const e=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((t,r)=>{const n=r.parentCacheIndex;return e>n?t+r.flatSize:t},e)}}function bn(s,i,e=0){let t=i;for(const r of s.subCaches){const n=r.parentCacheIndex;if(t<=n)break;if(t<=n+r.flatSize)return bn(r,t-n-1,e+1);t-=r.flatSize}return{cache:s,item:s.items[t],index:t,page:Math.floor(t/s.pageSize),level:e}}function yn({getItemId:s},i,e,t=0,r=0){for(let n=0;n<i.items.length;n++){const o=i.items[n];if(o&&s(o)===s(e))return{cache:i,level:t,item:o,index:n,page:Math.floor(n/i.pageSize),subCache:i.getSubCache(n),flatIndex:r+i.getFlatIndex(n)}}for(const n of i.subCaches){const o=r+i.getFlatIndex(n.parentCacheIndex),a=yn({getItemId:s},n,e,t+1,o+1);if(a)return a}}function wn(s,[i,...e],t=0){i===1/0&&(i=s.size-1);const r=s.getFlatIndex(i),n=s.getSubCache(i);return n&&n.flatSize>0&&e.length?wn(n,e,t+r+1):t+r}class Ih extends EventTarget{host;dataProvider;dataProviderParams;pageSize;isExpanded;getItemId;rootCache;placeholder;isPlaceholder;constructor(i,{size:e,pageSize:t,isExpanded:r,getItemId:n,isPlaceholder:o,placeholder:a,dataProvider:l,dataProviderParams:d}){super(),this.host=i,this.pageSize=t,this.getItemId=n,this.isExpanded=r,this.placeholder=a,this.isPlaceholder=o,this.dataProvider=l,this.dataProviderParams=d,this.rootCache=this.#t(e)}get flatSize(){return this.rootCache.flatSize}get#e(){return{isExpanded:this.isExpanded,placeholder:this.placeholder}}isLoading(){return this.rootCache.isLoading}setPageSize(i){this.pageSize=i,this.clearCache()}setDataProvider(i){this.dataProvider=i,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.#t(this.rootCache.size)}getFlatIndexContext(i){return bn(this.rootCache,i)}getItemContext(i){return yn({getItemId:this.getItemId},this.rootCache,i)}getFlatIndexByPath(i){return wn(this.rootCache,i)}ensureFlatIndexLoaded(i){const{cache:e,page:t,item:r}=this.getFlatIndexContext(i);this.#r(r)||this.#i(e,t)}ensureFlatIndexHierarchy(i){const{cache:e,item:t,index:r}=this.getFlatIndexContext(i);if(this.#r(t)&&this.isExpanded(t)&&!e.getSubCache(r)){const n=e.createSubCache(r);this.#i(n,0)}}loadFirstPage(){this.#i(this.rootCache,0)}_shouldLoadCachePage(i,e){return!0}#t(i){return new ar(this.#e,this.pageSize,i)}#i(i,e){if(!this.dataProvider||i.pendingRequests[e]||!this._shouldLoadCachePage(i,e))return;let t={page:e,pageSize:this.pageSize,parentItem:i.parentItem};this.dataProviderParams&&(t={...t,...this.dataProviderParams()});const r=(n,o)=>{i.pendingRequests[e]===r&&(o!==void 0?i.size=o:t.parentItem&&(i.size=n.length),i.setPage(e,n),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete i.pendingRequests[e],this.dispatchEvent(new CustomEvent("page-loaded")))};i.pendingRequests[e]=r,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(t,r)}#r(i){return this.isPlaceholder?!this.isPlaceholder(i):this.placeholder?i!==this.placeholder:!!i}}const kh=s=>class extends s{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new Ih(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}__getRowLevel(e){const{level:t}=this._dataProviderController.getFlatIndexContext(e.index);return t}__getRowItem(e){const{item:t}=this._dataProviderController.getFlatIndexContext(e.index);return t}__ensureRowItem(e){this._dataProviderController.ensureFlatIndexLoaded(e.index)}__ensureRowHierarchy(e){this._dataProviderController.ensureFlatIndexHierarchy(e.index)}getItemId(e){return this.itemIdPath?Ft(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_hasChildren(e){return this.itemHasChildrenPath&&e&&!!Ft(this.itemHasChildrenPath,e)}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const r=t||[],n=new Set;return r.forEach(o=>{n.add(this.getItemId(o))}),n}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldLoadAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach(e=>this.__ensureRowHierarchy(e)),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=C.debounce(this._debouncerApplyCachedData,Z.after(0),()=>{this._setLoading(!1);const e=this._shouldLoadAllRenderedRowsAfterPageLoad;this._shouldLoadAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach(t=>{this.__updateRow(t),e&&this.__ensureRowItem(t)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=C.debounce(this.__clearCacheDebouncer,re,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size||0,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=C.debounce(this._debouncerCheckSize,Z.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let r=-1;return t.forEach((n,o)=>{this._itemsEqual(n,e)&&(r=o)}),r}scrollToIndex(...e){if(!this.__virtualizer||!this.clientHeight||!this._columnTree){this.__pendingScrollToIndexes=e;return}let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);this._dataProviderController.isLoading()&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};const rt={BETWEEN:"between",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},_e={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},Ph=s=>class extends s{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}const r=t.getBoundingClientRect();e.dataTransfer.setDragImage(t,e.clientX-r.left,e.clientY-r.top);let n=[t];this._isSelected(t._item)&&(n=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),this.__draggedItems=n.map(a=>a._item),e.dataTransfer.setData("text",this.__formatDefaultTransferData(n)),Le(t,{dragstart:n.length>1?`${n.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-r.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-r.top+10}px`),requestAnimationFrame(()=>{Le(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()});const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>t.setAttribute("dragstart",a)}});o.originalEvent=e,this.dispatchEvent(o)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(e){this.dropMode&&(e.stopPropagation(),this._clearDragStyles())}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(r=>r.localName==="tr");if(this.__updateRowScrollPositionProperty(t),!this._flatSize||this.dropMode===rt.ON_GRID)this._dropLocation=_e.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===rt.BETWEEN||this.dropMode===rt.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(r=>!r.hidden).pop(),this._dropLocation=_e.BELOW;else return}else{const r=t.getBoundingClientRect();if(this._dropLocation=_e.ON_TOP,this.dropMode===rt.BETWEEN){const n=e.clientY-r.top<r.bottom-e.clientY;this._dropLocation=n?_e.ABOVE:_e.BELOW}else this.dropMode===rt.ON_TOP_OR_BETWEEN&&(e.clientY-r.top<r.height/3?this._dropLocation=_e.ABOVE:e.clientY-r.top>r.height/3*2&&(this._dropLocation=_e.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===_e.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&Zr(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(e){if(e.target.contains(this)){const t=[e.target,this.$.items,this.$.scroller],r=t.map(n=>n.style.cssText);this.$.table.scrollHeight>2e4&&(this.$.scroller.style.display="none"),Zs&&(e.target.style.willChange="transform"),rr&&(this.$.items.style.flexShrink=1),requestAnimationFrame(()=>{t.forEach((n,o)=>{n.style.cssText=r[o]})})}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,n=t-e+this.__dndAutoScrollThreshold,o=e-r+this.__dndAutoScrollThreshold;let a=0;if(o>0?a=o*2:n>0&&(a=-n*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(r=>{const n=r.getBoundingClientRect();return n.bottom>e&&n.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),X(this.$.items,e=>{Zr(e,{dragover:null})})}__updateDragSourceParts(e,t){Le(e,{"drag-source":this.__draggedItems.includes(t.item)})}_onDrop(e){if(this.dropMode&&this._dropLocation){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(n=>({type:n,data:e.dataTransfer.getData(n)}));this._clearDragStyles();const r=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});r.originalEvent=e,this.dispatchEvent(r)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(r=>!r.hidden&&!r.part.contains("details-cell")).sort((r,n)=>r._column._order>n._column._order?1:-1).map(r=>r._content.textContent.trim()).filter(r=>r).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){X(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const r=this.loading||e.hasAttribute("loading"),n=!this.rowsDraggable||r||this.dragFilter&&!this.dragFilter(t),o=!this.dropMode||r||this.dropFilter&&!this.dropFilter(t);_t(e,a=>{n?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),Le(e,{"drag-disabled":!!n,"drop-disabled":!!o})}};function Cn(s,i){if(!s||!i||s.length!==i.length)return!1;for(let e=0,t=s.length;e<t;e++)if(s[e]instanceof Array&&i[e]instanceof Array){if(!Cn(s[e],i[e]))return!1}else if(s[e]!==i[e])return!1;return!0}const Oh=s=>class extends s{static get properties(){return{_columnTree:{type:Object,sync:!0}}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return Be.getColumns(e)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,r)=>t.concat(r),[])}_getColumnTree(){const e=Be.getColumns(this),t=[e];let r=e;for(;this._hasColumnGroups(r);)r=this._flattenColumnGroups(r),t.push(r);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=C.debounce(this.__updateColumnTreeDebouncer,re,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();Cn(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new Be(this,(e,t)=>{const r=t.flatMap(o=>o._allCells),n=o=>r.filter(a=>a&&a._content.contains(o)).length;this.__removeSorters(this._sorters.filter(n)),this.__removeFilters(this._filters.filter(n)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=C.debounce(this._debouncerCheckImports,Z.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,r)=>t._column._order-r._column._order).forEach((t,r,n)=>{Ee(t,"first-column",r===0),Ee(t,"last-column",r===n.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};const Mh=s=>class extends s{getEventContext(e){const t={},{cell:r}=this._getGridEventLocation(e);return r&&(t.section=["body","header","footer","details"].find(n=>r.part.contains(`${n}-cell`)),r._column&&(t.column=r._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(r.parentElement))),t}};const Rh=s=>class extends s{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};function Et(s){return s instanceof HTMLTableRowElement}function Tt(s){return s instanceof HTMLTableCellElement}function Ce(s){return s.matches('[part~="details-cell"]')}const $h=s=>class extends s{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(Et)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const r=this[t];if(e){const n=r&&r.parentElement;Tt(r)?this[t]=n:Tt(n)&&(this[t]=n.parentElement)}else if(!e&&Et(r)){const n=r.firstElementChild;this[t]=n._focusButton||n}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&D(t,"focused-cell",!1),e&&D(e,"focused-cell",!0)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let r=this._itemsFocusable.parentElement,n=this._itemsFocusable;if(r){Tt(r)&&(n=r,r=r.parentElement);const o=[...r.children].indexOf(n);this._itemsFocusable=this.__getFocusable(t,t.children[o])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let r;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space";break}this._detectInteracting(e),this.interacting&&r!=="Interaction"&&(r=void 0),r&&this[`_on${r}KeyDown`](e,t)}__ensureFlatIndexInViewport(e){const t=[...this.$.items.children].find(r=>r.index===e);t?this.__scrollIntoViewport(t):this._scrollToFlatIndex(e)}__isRowExpandable(e){return this._hasChildren(e._item)&&!this._isExpanded(e._item)}__isRowCollapsible(e){return this._isExpanded(e._item)}_onNavigationKeyDown(e,t){e.preventDefault();const r=this.__isRTL,n=e.composedPath().find(Et),o=e.composedPath().find(Tt);let a=0,l=0;switch(t){case"ArrowRight":a=r?-1:1;break;case"ArrowLeft":a=r?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(n)){const c=this.__getIndexInGroup(n,this._focusedItemIndex);this._scrollToFlatIndex(c)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!n||!this.__rowFocusMode&&!o)return;const d=r?"ArrowLeft":"ArrowRight",h=r?"ArrowRight":"ArrowLeft";if(t===d){if(this.__rowFocusMode){if(this.__isRowExpandable(n)){this.expandItem(n._item);return}this.__rowFocusMode=!1,this._onCellNavigation(n.firstElementChild,0,0);return}}else if(t===h)if(this.__rowFocusMode){if(this.__isRowCollapsible(n)){this.collapseItem(n._item);return}}else{const c=[...n.children].sort((u,f)=>u._order-f._order);if(o===c[0]||Ce(o)){this.__rowFocusMode=!0,this._onRowNavigation(n,0);return}}this.__rowFocusMode?this._onRowNavigation(n,l):this._onCellNavigation(o,a,l)}_onRowNavigation(e,t){const{dstRow:r}=this.__navigateRows(t,e);r&&r.focus()}__getIndexInGroup(e,t){const r=e.parentNode;return r===this.$.items?t!==void 0?t:e.index:[...r.children].indexOf(e)}__navigateRows(e,t,r){const n=this.__getIndexInGroup(t,this._focusedItemIndex),o=t.parentNode,a=(o===this.$.items?this._flatSize:o.children.length)-1;let l=Math.max(0,Math.min(n+e,a));if(o!==this.$.items){if(l>n)for(;l<a&&o.children[l].hidden;)l+=1;else if(l<n)for(;l>0&&o.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[l]}}let d=!1;if(r){const h=Ce(r);if(o===this.$.items){const c=t._item,{item:u}=this._dataProviderController.getFlatIndexContext(l);h?d=e===0:d=e===1&&this._isDetailsOpened(c)||e===-1&&l!==n&&this._isDetailsOpened(u),d!==h&&(e===1&&d||e===-1&&!d)&&(l=n)}}return this.__ensureFlatIndexInViewport(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find(h=>!h.hidden&&h.index===l),dstIsRowDetails:d}}_onCellNavigation(e,t,r){const n=e.parentNode,{dstRow:o,dstIsRowDetails:a}=this.__navigateRows(r,n,e);if(!o)return;let l=[...n.children].indexOf(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(u=>u._column===e._column));const d=Ce(e),h=n.parentNode,c=this.__getIndexInGroup(n,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(h,c).filter(u=>!u.hidden)[l]._order),a)[...o.children].find(Ce).focus();else{const u=this.__getIndexInGroup(o,this._focusedItemIndex),f=this._getColumns(h,u).filter(T=>!T.hidden),g=f.map(T=>T._order).sort((T,F)=>T-F),v=g.length-1,I=g.indexOf(g.slice(0).sort((T,F)=>Math.abs(T-this._focusedColumnOrder)-Math.abs(F-this._focusedColumnOrder))[0]),H=r===0&&d?I:Math.max(0,Math.min(I+t,v));H!==I&&(this._focusedColumnOrder=void 0);const B=f.reduce((T,F,be)=>(T[F._order]=be,T),{})[g[H]];let V;if(this.$.items.contains(e)){const T=this.$.sizer.children[B];this._lazyColumns&&(this.__isColumnInViewport(T._column)||T.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),V=[...o.children].find(F=>F._column===T._column),this._scrollHorizontallyToCell(V)}else V=o.children[B],this._scrollHorizontallyToCell(V);V.focus({preventScroll:!0})}}_onInteractionKeyDown(e,t){const r=e.composedPath()[0],n=r.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(r.type);let o;switch(t){case"Enter":o=this.interacting?!n:!0;break;case"Escape":o=!1;break;case"F2":o=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==o&&a!==null)if(o){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const r=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit];let n=r.indexOf(e);for(n+=t;n>=0&&n<=r.length-1;){let a=r[n];if(a&&!this.__rowFocusMode&&(a=r[n].parentNode),!a||a.hidden)n+=t;else break}let o=r[n];if(o&&!this.__isHorizontallyInViewport(o)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(o===this._headerFocusable)o=a._headerCell;else if(o===this._itemsFocusable){const l=o._column._cells.indexOf(o);o=a._cells[l]}else o===this._footerFocusable&&(o=a._footerCell)}return o}_onTabKeyDown(e){let t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);t&&(e.stopPropagation(),t===this._itemsFocusable&&(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),t=this._itemsFocusable),t.focus(),t!==this.$.table&&t!==this.$.focusexit&&e.preventDefault(),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],r=Et(t);(r||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(r?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(r?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const r=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",r)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:r,row:n}=this._getGridEventLocation(e);if(!(!r&&!this.__rowFocusMode)&&(this._detectInteracting(e),t&&(r||n)))if(this._activeRowGroup=t,t===this.$.header?this._headerFocusable=this.__getFocusable(n,r):t===this.$.items?(this._itemsFocusable=this.__getFocusable(n,r),this._focusedItemIndex=n.index):t===this.$.footer&&(this._footerFocusable=this.__getFocusable(n,r)),r){const o=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&o.section==="body",!this.__pendingBodyCellFocus&&r!==this.$.emptystatecell&&r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:o}})),this._focusedCell=r._focusButton||r,ke()&&e.target===r&&this._showTooltip(e)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(r=>r.localName==="slot"&&this.shadowRoot.contains(r));this._setInteracting(t),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),r=this.interacting&&t===this._activeRowGroup;e.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=C.debounce(this.__preventScrollerRotatingCellFocusDebouncer,ve,()=>{const e=this._activeRowGroup===this.$.items;this._getRenderedRows().some(r=>r.index===this._focusedItemIndex)?(this.__updateItemsFocusable(),e&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):e&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))}))}_getColumns(e,t){let r=this._columnTree.length-1;return e===this.$.header?r=t:e===this.$.footer&&(r=this._columnTree.length-1-t),this._columnTree[r]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(n=>n.offsetHeight),r=t?[...t.children].find(n=>!n.hidden):null;t&&r&&(this[`_${e}Focusable`]=this.__getFocusable(t,r))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(r=>!r.hidden):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||Ce(e))return;const t=e.getBoundingClientRect(),r=e.parentNode,n=Array.from(r.children).indexOf(e),o=this.$.table.getBoundingClientRect(),a=this.$.table.clientWidth-this.$.table.offsetWidth;let l=o.left-(this.__isRTL?a:0),d=o.right+(this.__isRTL?0:a);for(let h=n-1;h>=0;h--){const c=r.children[h];if(!(c.hasAttribute("hidden")||Ce(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().right;break}}for(let h=n+1;h<r.children.length;h++){const c=r.children[h];if(!(c.hasAttribute("hidden")||Ce(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){d=c.getBoundingClientRect().left;break}}t.left<l&&(this.$.table.scrollLeft+=t.left-l),t.right>d&&(this.$.table.scrollLeft+=t.right-d)}_getGridEventLocation(e){const t=e.__composedPath||e.composedPath(),r=t.indexOf(this.$.table),n=r>=1?t[r-1]:null,o=r>=2?t[r-2]:null,a=r>=3?t[r-3]:null;return{section:n,row:o,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};const Lh=s=>class extends s{static get properties(){return{__hostVisible:{type:Boolean,value:!1},__tableRect:Object,__headerRect:Object,__itemsRect:Object,__footerRect:Object}}ready(){super.ready();const i=new ResizeObserver(e=>{e.findLast(({target:l})=>l===this)&&(this.__hostVisible=this.checkVisibility());const r=e.findLast(({target:l})=>l===this.$.table);r&&(this.__tableRect=r.contentRect);const n=e.findLast(({target:l})=>l===this.$.header);n&&(this.__headerRect=n.contentRect);const o=e.findLast(({target:l})=>l===this.$.items);o&&(this.__itemsRect=o.contentRect);const a=e.findLast(({target:l})=>l===this.$.footer);a&&(this.__footerRect=a.contentRect)});i.observe(this),i.observe(this.$.table),i.observe(this.$.header),i.observe(this.$.items),i.observe(this.$.footer)}};const Fh=s=>class extends s{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)})})}_rowDetailsRendererChanged(e){e&&this._columnTree&&X(this.$.items,t=>{t.querySelector("[part~=details-cell]")||(this.__initRow(t,this._columnTree[this._columnTree.length-1]),this.__updateRow(t))})}_detailsOpenedItemsChanged(e,t){X(this.$.items,r=>{if(r.hasAttribute("details-opened")){this.__updateRow(r);return}t&&this._isDetailsOpened(r._item)&&this.__updateRow(r)})}_configureDetailsCell(e){D(e,"cell",!0),D(e,"details-cell",!0),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const r=e.querySelector('[part~="details-cell"]');r&&(r.hidden=!t,!r.hidden&&this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,t)))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){X(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};function lr(s,i){const{scrollLeft:e}=s;return i!=="rtl"?e:s.scrollWidth-s.clientWidth+e}function zh(s,i,e){i!=="rtl"?s.scrollLeft=e:s.scrollLeft=s.clientWidth-s.scrollWidth+e}class dr{constructor(i,e){this.host=i,this.scrollTarget=e||i,this.__boundOnScroll=this.__onScroll.bind(this)}hostConnected(){this.initialized||(this.initialized=!0,this.observe())}observe(){const{host:i}=this;this.__resizeObserver=new ResizeObserver(()=>{this.__debounceOverflow=C.debounce(this.__debounceOverflow,ve,()=>{this.__updateOverflow()})}),this.__resizeObserver.observe(i),[...i.children].forEach(e=>{this.__resizeObserver.observe(e)}),this.__childObserver=new MutationObserver(e=>{e.forEach(({addedNodes:t,removedNodes:r})=>{t.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.observe(n)}),r.forEach(n=>{n.nodeType===Node.ELEMENT_NODE&&this.__resizeObserver.unobserve(n)})}),this.__updateOverflow()}),this.__childObserver.observe(i,{childList:!0}),this.scrollTarget.addEventListener("scroll",this.__boundOnScroll),this.__updateOverflow()}__onScroll(){this.__updateOverflow()}__updateOverflow(){const i=this.scrollTarget;let e="";i.scrollTop>0&&(e+=" top"),Math.ceil(i.scrollTop)<Math.ceil(i.scrollHeight-i.clientHeight)&&(e+=" bottom");const t=Math.abs(i.scrollLeft);t>0&&(e+=" start"),Math.ceil(t)<Math.ceil(i.scrollWidth-i.clientWidth)&&(e+=" end"),e=e.trim(),e.length>0&&this.host.getAttribute("overflow")!==e?this.host.setAttribute("overflow",e):e.length===0&&this.host.hasAttribute("overflow")&&this.host.removeAttribute("overflow")}}const rs={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},Nh=s=>class extends s{static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]}}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath(),r=t[t.indexOf(this.$.items)-1];if(r){if(!this._isMousedown){const n=this.$.table.clientHeight,o=this.$.header.clientHeight,a=this.$.footer.clientHeight,l=n-o-a,h=r.clientHeight>l?e.target:r;this.__scrollIntoViewport(h)}this.$.table.contains(e.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:r}}))}}),this.$.table.addEventListener("scroll",()=>this._afterScroll()),this.__overflowController=new dr(this,this.$.table),this.addController(this.__overflowController)}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e);const t=[...this.$.items.children].find(r=>r.index===e);this.__scrollIntoViewport(t)}__scrollIntoViewport(e){if(!e)return;const t=e.getBoundingClientRect(),r=getComputedStyle(e),n=t.top+parseInt(r.scrollMarginTop||0),o=t.bottom+parseInt(r.scrollMarginBottom||0),a=this.$.footer.getBoundingClientRect().top,l=this.$.header.getBoundingClientRect().bottom;o>a?this.$.table.scrollTop+=o-a:n<l&&(this.$.table.scrollTop-=l-n)}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=C.debounce(this._debounceScrolling,Z.after(rs.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._debounceColumnContentVisibility=C.debounce(this._debounceColumnContentVisibility,Z.after(rs.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())})}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach(r=>{const n=this._lazyColumns&&!this.__isColumnInViewport(r);r._bodyContentHidden!==n&&(t=!0,r._cells.forEach(o=>{if(o!==r._sizerCell){if(n)o.remove();else if(o.__parentRow){const a=[...o.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(r));o.__parentRow.insertBefore(o,a)}}})),r._bodyContentHidden=n}),t&&this._frozenCellsChanged(),this._lazyColumns){const r=[...e].reverse().find(a=>a.frozen),n=this.__getColumnEnd(r),o=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(o)-n,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_frozenCellsChanged(){this._debouncerCacheElements=C.debounce(this._debouncerCacheElements,re,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=C.debounce(this.__debounceUpdateFrozenColumn,re,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((n,o)=>n._order-o._order);let t,r;for(let n=0;n<e.length;n++){const o=e[n];o._lastFrozen=!1,o._firstFrozenToEnd=!1,r===void 0&&o.frozenToEnd&&!o.hidden&&(r=n),o.frozen&&!o.hidden&&(t=n)}t!==void 0&&(e[t]._lastFrozen=!0),r!==void 0&&(e[r]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,r=Math.max(0,this.$.table.scrollLeft),n=lr(this.$.table,this.getAttribute("dir")),o=`translate(${-r}px, 0)`;this.$.header.style.transform=o,this.$.footer.style.transform=o,this.$.items.style.transform=o;const a=this.__isRTL?n+t-e:r;this.__horizontalScrollPosition=a;const l=`translate(${a}px, 0)`;this._frozenCells.forEach(v=>{v.style.transform=l});const d=this.__isRTL?n:r+t-e,h=`translate(${d}px, 0)`;let c=h;if(this._lazyColumns&&this._areSizerCellsAssigned()){const v=this._getColumnsInOrder(),I=[...v].reverse().find(T=>!T.frozenToEnd&&!T._bodyContentHidden),H=this.__getColumnEnd(I),k=v.find(T=>T.frozenToEnd),B=this.__getColumnStart(k);c=`translate(${d+(B-H)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(v=>{this.$.items.contains(v)?v.style.transform=c:v.style.transform=h});const u=this.shadowRoot.querySelector("[part~='row']:focus");u&&this.__updateRowScrollPositionProperty(u);const f=this.$.header.querySelector("[part~='last-header-row']");f&&this.__updateRowScrollPositionProperty(f);const g=this.$.footer.querySelector("[part~='first-footer-row']");g&&this.__updateRowScrollPositionProperty(g)}__updateRowScrollPositionProperty(e){if(!(e instanceof HTMLTableRowElement))return;const t=`${this.__horizontalScrollPosition}px`;e.style.getPropertyValue("--_grid-horizontal-scroll-position")!==t&&e.style.setProperty("--_grid-horizontal-scroll-position",t)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};const Hh=s=>class extends s{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function,notify:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}__isItemSelectable(e){return!this.isItemSelectable||!e?!0:this.isItemSelectable(e)}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const r=t||[],n=new Set;return r.forEach(o=>{n.add(this.getItemId(o))}),n}};let ss="prepend";const Bh=s=>class extends s{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>ss},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){ss=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>!e.includes(t)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(t=>{t._order=null});const e=this._getActiveSorters();e.length>1&&e.forEach((t,r)=>{t._order=r})}__updateSorter(e,t,r){if(!e.direction&&!this._sorters.includes(e))return;e._order=null;const n=this._sorters.filter(o=>o!==e);this.multiSort&&(!this.multiSortOnShiftClick||!r)||this.multiSortOnShiftClick&&t?this.multiSortPriority==="append"?this._sorters=[...n,e]:this._sorters=[e,...n]:(e.direction||this.multiSortOnShiftClick)&&(this._sorters=e.direction?[e]:[],n.forEach(o=>{o._order=null,o.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this.__a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(e=>e.direction&&e.isConnected)}_mapSorters(){return this._getActiveSorters().map(e=>({path:e.path,direction:e.direction}))}};const Vh=s=>class extends s{static get properties(){return{cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellPartNames(){X(this.$.items,e=>{e.hidden||this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellPartNames(e,t){_t(e,r=>{if(r.__generatedParts&&r.__generatedParts.forEach(n=>{D(r,n,null)}),this.cellPartNameGenerator&&!e.hasAttribute("loading")){const n=this.cellPartNameGenerator(r._column,t);r.__generatedParts=n&&n.split(" ").filter(o=>o.length>0),r.__generatedParts&&r.__generatedParts.forEach(o=>{D(r,o,!0)})}})}};const Uh=s=>class extends Sh(Th(kh(Oh(wh(Nh(Hh(Bh(Fh($h(bh(Rh(Dh(Ah(Mh(Ph(Vh(ir(Lh(s))))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:rr},_ios:{type:Boolean,value:Ht},_firefox:{type:Boolean,value:cd},_android:{type:Boolean,value:Yr},_touchDevice:{type:Boolean,value:sr},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.__virtualizer.hostConnected()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const e=this.$.table.getBoundingClientRect(),t=i.getBoundingClientRect(),r=this.$.header.getBoundingClientRect().height,n=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+r&&t.top<e.bottom-n}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,e)=>i.index-e.index)}_getRowContainingNode(i){const e=$s("vaadin-grid-cell-content",i);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,e){const t=this.__getRowModel(e);return this.getItemId(i)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new mh({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0,__disableHeightPlaceholder:!0}),this._tooltipController=new Xt(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new Kt(this.$.emptystateslot,({currentNodes:i})=>{this.$.emptystatecell._content=i[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content})}updated(i){super.updated(i),i.has("__hostVisible")&&!i.get("__hostVisible")&&(this._resetKeyboardNavigation(),requestAnimationFrame(()=>this.__scrollToPendingIndexes())),(i.has("__headerRect")||i.has("__footerRect")||i.has("__itemsRect"))&&setTimeout(()=>this.__updateMinHeight()),i.has("__tableRect")&&(setTimeout(()=>this.__updateColumnsBodyContentHidden()),this.__updateHorizontalScrollPosition())}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:e}){const t=this._getRenderedRows().find(n=>n._item===i),r=t&&[...t.children].find(n=>n._column===e);r&&r.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,e,t,r){if(e&&t&&r){const n=this.shadowRoot.activeElement,o=this.__getBodyCellCoordinates(n),a=e.size||0;e.size=i,e.update(a-1,a-1),i<a&&e.update(i-1,i-1),o&&n.parentElement.hidden&&this.__focusBodyCell(o),this._resetKeyboardNavigation()}}_createScrollerRows(i){const e=[];for(let t=0;t<i;t++){const r=document.createElement("tr");r.setAttribute("role","row"),r.setAttribute("tabindex","-1"),D(r,"row",!0),D(r,"body-row",!0),this._columnTree&&this.__initRow(r,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(r)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>{t.isConnected&&t._cells&&(t._cells=[...t._cells])}),this.__afterCreateScrollerRowsDebouncer=C.debounce(this.__afterCreateScrollerRowsDebouncer,ve,()=>{this._afterScroll()}),e}_createCell(i,e){const r=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,n=document.createElement("vaadin-grid-cell-content");n.setAttribute("slot",r);const o=document.createElement(i);o.id=r.replace("-content-","-"),o.setAttribute("role",i==="td"?"gridcell":"columnheader"),!Yr&&!Ht&&(o.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),o.addEventListener("mouseleave",()=>{this._hideTooltip()}),o.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",r),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),o.appendChild(l),o._focusButton=l,o.focus=function(d){o._focusButton.focus(d)},l.appendChild(a)}else o.setAttribute("tabindex","-1"),o.appendChild(a);return o._content=n,n.addEventListener("mousedown",()=>{if(Zs){const l=d=>{const h=n.contains(this.getRootNode().activeElement),c=d.composedPath().includes(n);!h&&c&&o.focus({preventScroll:!0}),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{n.contains(this.getRootNode().activeElement)||o.focus({preventScroll:!0})})}),o}__initRow(i,e,t="body",r=!1,n=!1){const o=document.createDocumentFragment();_t(i,a=>{a._vacant=!0}),i.innerHTML="",t==="body"&&(i.__cells=[],i.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let h;if(t==="body"){a._cells||(a._cells=[]),h=a._cells.find(u=>u._vacant),h||(h=this._createCell("td",a),a._onCellKeyDown&&h.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(h)),D(h,"cell",!0),D(h,"body-cell",!0),h.__parentRow=i,i.__cells.push(h);const c=i===this.$.sizer;if((!a._bodyContentHidden||c)&&i.appendChild(h),c&&(a._sizerCell=h),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const u=this._detailsCells.find(f=>f._vacant)||this._createCell("td");this._detailsCells.indexOf(u)===-1&&this._detailsCells.push(u),u._content.parentElement||o.appendChild(u._content),this._configureDetailsCell(u),i.appendChild(u),i.__detailsCell=u,this.__a11ySetRowDetailsCell(i,u),u._vacant=!1}n||(a._cells=[...a._cells])}else{const c=t==="header"?"th":"td";r||a.localName==="vaadin-grid-column-group"?(h=a[`_${t}Cell`],h||(h=this._createCell(c),a._onCellKeyDown&&h.addEventListener("keydown",a._onCellKeyDown.bind(a))),h._column=a,i.appendChild(h),a[`_${t}Cell`]=h):(a._emptyCells||(a._emptyCells=[]),h=a._emptyCells.find(u=>u._vacant)||this._createCell(c),h._column=a,i.appendChild(h),a._emptyCells.indexOf(h)===-1&&a._emptyCells.push(h)),D(h,"cell",!0),D(h,`${t}-cell`,!0)}h._content.parentElement||o.appendChild(h._content),h._vacant=!1,h._column=a}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=C.debounce(i.__debounceUpdateHeaderFooterRowVisibility,re,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const e=Array.from(i.children).filter(t=>{const r=t._column;if(r._emptyCells&&r._emptyCells.indexOf(t)>-1)return!1;if(i.parentElement===this.$.header){if(r.headerRenderer)return!0;if(r.header===null)return!1;if(r.path||r.header!==void 0)return!0}else if(r.footerRenderer)return!0;return!1});i.hidden!==!e.length&&(i.hidden=!e.length),i.parentElement===this.$.header&&(this.$.table.toggleAttribute("has-header",this.$.header.querySelector("tr:not([hidden])")),this.__updateHeaderFooterRowParts("header")),i.parentElement===this.$.footer&&(this.$.table.toggleAttribute("has-footer",this.$.footer.querySelector("tr:not([hidden])")),this.__updateHeaderFooterRowParts("footer")),this._resetKeyboardNavigation(),this.__a11yUpdateGridSize(this.size,this._columnTree,this.__emptyState)}_updateScrollerItem(i,e){this._preventScrollerRotatingCellFocus(i,e),this._columnTree&&(i.index=e,this.__ensureRowItem(i),this.__ensureRowHierarchy(i),this.__updateRow(i))}_columnTreeChanged(i){this._renderColumnTree(i),this.__updateColumnsBodyContentHidden()}__updateRowOrderParts(i){Le(i,{first:i.index===0,last:i.index===this._flatSize-1,odd:i.index%2!==0,even:i.index%2===0})}__updateRowStateParts(i,{item:e,expanded:t,selected:r,detailsOpened:n}){Le(i,{expanded:t,collapsed:this.__isRowExpandable(i),selected:r,nonselectable:this.__isItemSelectable(e)===!1,"details-opened":n})}__computeEmptyState(i,e){return i===0&&e}_renderColumnTree(i){for(X(this.$.items,e=>{this.__initRow(e,i[i.length-1],"body",!1,!0),this.__updateRow(e)});this.$.header.children.length<i.length;){const e=document.createElement("tr");e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),D(e,"row",!0),D(e,"header-row",!0),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),D(t,"row",!0),D(t,"footer-row",!0),this.$.footer.appendChild(t)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);X(this.$.header,(e,t)=>{this.__initRow(e,i[t],"header",t===i.length-1)}),X(this.$.footer,(e,t)=>{this.__initRow(e,i[i.length-1-t],"footer",t===0)}),this.__initRow(this.$.sizer,i[i.length-1]),this.__updateHeaderFooterRowParts("header"),this.__updateHeaderFooterRowParts("footer"),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this.__a11yUpdateHeaderRows(),this.__a11yUpdateFooterRows(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}__updateHeaderFooterRowParts(i){const e=[...this.$[i].querySelectorAll("tr:not([hidden])")];[...this.$[i].children].forEach(t=>{D(t,`first-${i}-row`,t===e.at(0)),D(t,`last-${i}-row`,t===e.at(-1)),Ye(t).forEach(r=>{D(r,`first-${i}-row-cell`,t===e.at(0)),D(r,`last-${i}-row-cell`,t===e.at(-1))})})}__updateRowLoading(i,e){const t=Ye(i);Jt(i,"loading",e),Ut(t,"loading-row-cell",e),e&&this._generateCellPartNames(i)}__updateRow(i){this.__a11yUpdateRowRowindex(i),this.__updateRowOrderParts(i);const e=this.__getRowItem(i);if(e)this.__updateRowLoading(i,!1);else{this.__updateRowLoading(i,!0);return}i._item=e;const t=this.__getRowModel(i);this._toggleDetailsCell(i,t.detailsOpened),this.__a11yUpdateRowLevel(i,t.level),this.__a11yUpdateRowSelected(i,t.selected),this.__updateRowStateParts(i,t),this._generateCellPartNames(i,t),this._filterDragAndDrop(i,t),this.__updateDragSourceParts(i,t),X(i,r=>{if(!(r._column&&!r._column.isConnected)&&r._renderer){const n=r._column||this;r._renderer.call(n,r._content,n,t)}}),this._updateDetailsCellHeight(i),this.__a11yUpdateRowExpanded(i,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}__getRowModel(i){return{index:i.index,item:i._item,level:this.__getRowLevel(i),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),hasChildren:this._hasChildren(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const e=this._tooltipController.node;if(e&&e.isConnected){const t=i.target;if(!this.__isCellFullyVisible(t))return;this._tooltipController.setTarget(t),this._tooltipController.setContext(this.getEventContext(i)),e._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"})}}__isCellFullyVisible(i){if(i.hasAttribute("frozen")||i.hasAttribute("frozen-to-end"))return!0;let{left:e,right:t}=this.getBoundingClientRect();const r=[...i.parentNode.children].find(a=>a.hasAttribute("last-frozen"));if(r){const a=r.getBoundingClientRect();e=this.__isRTL?e:a.right,t=this.__isRTL?a.left:t}const n=[...i.parentNode.children].find(a=>a.hasAttribute("first-frozen-to-end"));if(n){const a=n.getBoundingClientRect();e=this.__isRTL?a.right:e,t=this.__isRTL?t:a.left}const o=i.getBoundingClientRect();return o.left>=e&&o.right<=t}_hideTooltip(i){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(i,e){this.__virtualizer&&this.__virtualizer.update(i,e)}__updateMinHeight(){const e=this.$.header.clientHeight,t=this.$.footer.clientHeight,r=this.$.table.offsetHeight-this.$.table.clientHeight,n=e+36+t+r;this.__minHeightStyleSheet||(this.__minHeightStyleSheet=new CSSStyleSheet,this.shadowRoot.adoptedStyleSheets.push(this.__minHeightStyleSheet)),this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${n}px; }`)}};class Wh extends Uh(me(ee(G(J(z))))){static get is(){return"vaadin-grid"}static get styles(){return _h}render(){return x`
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
          aria-label="${Vt(this.accessibleName)}"
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
    `}}q(Wh);const xn={CHILD:2,ELEMENT:6},qh=s=>(...i)=>({_$litDirective$:s,values:i});class jh{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,t){this._$Ct=i,this._$AM=e,this._$Ci=t}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}}const Yh=s=>s.strings===void 0;const dt=(s,i)=>{const e=s._$AN;if(e===void 0)return!1;for(const t of e)t._$AO?.(i,!1),dt(t,i);return!0},qt=s=>{let i,e;do{if((i=s._$AM)===void 0)break;e=i._$AN,e.delete(s),s=i}while(e?.size===0)},En=s=>{for(let i;i=s._$AM;s=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(s))break;e.add(s),Qh(i)}};function Gh(s){this._$AN!==void 0?(qt(this),this._$AM=s,En(this)):this._$AM=s}function Kh(s,i=!1,e=0){const t=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(i)if(Array.isArray(t))for(let n=e;n<t.length;n++)dt(t[n],!1),qt(t[n]);else t!=null&&(dt(t,!1),qt(t));else dt(this,s)}const Qh=s=>{s.type==xn.CHILD&&(s._$AP??=Kh,s._$AQ??=Gh)};class Xh extends jh{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,t){super._$AT(i,e,t),En(this),this.isConnected=i._$AU}_$AO(i,e=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),e&&(dt(this,i),qt(this))}setValue(i){if(Yh(this._$Ct))this._$Ct._$AI(i,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const ns=Symbol("valueNotInitialized");class Zh extends Xh{constructor(i){if(super(i),i.type!==xn.ELEMENT)throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);this.previousValue=ns}render(i,e){return M}update(i,[e,t]){return this.hasChanged(t)&&(this.host=i.options&&i.options.host,this.element=i.element,this.renderer=e,this.previousValue===ns?this.addRenderer():this.runRenderer(),this.previousValue=Array.isArray(t)?[...t]:t),M}reconnected(){this.addRenderer()}disconnected(){this.removeRenderer()}addRenderer(){throw new Error("The `addRenderer` method must be implemented.")}runRenderer(){throw new Error("The `runRenderer` method must be implemented.")}removeRenderer(){throw new Error("The `removeRenderer` method must be implemented.")}renderRenderer(i,...e){const t=this.renderer.call(this.host,...e);Bi(t,i,{host:this.host})}hasChanged(i){return Array.isArray(i)?!Array.isArray(this.previousValue)||this.previousValue.length!==i.length?!0:i.some((e,t)=>e!==this.previousValue[t]):this.previousValue!==i}}const os=Symbol("contentUpdateDebouncer");class Jh extends Zh{get rendererProperty(){throw new Error("The `rendererProperty` getter must be implemented.")}addRenderer(){this.element[this.rendererProperty]=(i,e)=>{this.renderRenderer(i,e)}}runRenderer(){const i=this.element._grid;i[os]=C.debounce(i[os],re,()=>{i.requestContentUpdate()})}removeRenderer(){this.element[this.rendererProperty]=null}}class ec extends Jh{get rendererProperty(){return"renderer"}addRenderer(){this.element[this.rendererProperty]=(i,e,t)=>{this.renderRenderer(i,t.item,t,e)}}}const as=qh(ec);const tc=s=>class extends Gs(vt(s)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(e){this.disabled||super.focus(e)}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};const ic=N`
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
`;class rc extends tc(ee(me(G(J(z))))){static get is(){return"vaadin-tab"}static get styles(){return ic}render(){return x`
      <slot></slot>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this.setAttribute("role","tab"),this._tooltipController=new Xt(this),this.addController(this._tooltipController)}_onKeyUp(i){const e=this.hasAttribute("active");if(super._onKeyUp(i),e){const t=this.querySelector("a");t&&t.click()}}}q(rc);const sc=N`
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
`;const nc=s=>class extends gt(s){get focused(){return(this._getItems()||[]).find(tr)}get _vertical(){return!0}get _tabNavigation(){return!1}focus(e){const t=this._getFocusableIndex();t>=0&&this._focus(t,e)}_getFocusableIndex(){const e=this._getItems();return Array.isArray(e)?this._getAvailableIndex(e,0,null,t=>!Nt(t)):-1}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t,shiftKey:r}=e,n=this._getItems()||[],o=n.indexOf(this.focused);let a,l;const h=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKeyPressed(t,r)?(l=-h,a=o-h):this.__isNextKeyPressed(t,r)?(l=h,a=o+h):t==="Home"?(l=1,a=0):t==="End"&&(l=-1,a=n.length-1),a=this._getAvailableIndex(n,a,l,c=>!Nt(c)),!(this._tabNavigation&&t==="Tab"&&(a>o&&e.shiftKey||a<o&&!e.shiftKey||a===o))&&a>=0&&(e.preventDefault(),this._focus(a,{focusVisible:!0},!0))}__isPrevKeyPressed(e,t){return this._vertical?e==="ArrowUp":e==="ArrowLeft"||this._tabNavigation&&e==="Tab"&&t}__isNextKeyPressed(e,t){return this._vertical?e==="ArrowDown":e==="ArrowRight"||this._tabNavigation&&e==="Tab"&&!t}_focus(e,t,r=!1){const n=this._getItems();this._focusItem(n[e],t,r)}_focusItem(e,t){e&&e.focus(t)}_getAvailableIndex(e,t,r,n){const o=e.length;let a=t;for(let l=0;typeof a=="number"&&l<o;l+=1,a+=r||1){a<0?a=o-1:a>=o&&(a=0);const d=e[a];if(this._isItemFocusable(d)&&this.__isMatchingItem(d,n))return a}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}_isItemFocusable(e){return!e.hasAttribute("disabled")}};const oc=s=>class extends nc(s){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(e){this._observer&&this._observer.flush();const t=Array.isArray(this.items)?this.items:[],r=this._getAvailableIndex(t,0,null,n=>n.tabIndex===0&&!Nt(n));r>=0?this._focus(r,e):super.focus(e)}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new Kt(e,()=>{this._setItems(this._filterItems([...this.children]))})}_getItems(){return this.items}_enhanceItems(e,t,r,n){if(!n&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(a=>{t?a.setAttribute("orientation",t):a.removeAttribute("orientation")}),this._setFocusable(r<0||!r?0:r);const o=e[r];e.forEach(a=>{a.selected=a===o}),o&&!o.disabled&&this._scrollToItem(r)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let r;t&&!t.disabled&&(r=this.items.indexOf(t))>=0&&(this.selected=r)}_searchKey(e,t){this._searchReset=C.debounce(this._searchReset,Z.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(n=>this.__isMatchingKey(n))||(this._searchBuf=t.toLowerCase());const r=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,r,1,n=>this.__isMatchingKey(n)&&getComputedStyle(n).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,r=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&t.length===1){const n=this._searchKey(r,t);n>=0&&this._focus(n);return}super._onKeyDown(e)}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(r=>{r.tabIndex=r===t?0:-1})}_focus(e,t){this.items.forEach((r,n)=>{r.focused=n===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e,t)}_scrollToItem(e){const t=this.items[e];if(!t)return;const r=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),o=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect();let l=0;!this._isRTL&&o[r[1]]>=n[r[1]]||this._isRTL&&o[r[1]]<=n[r[1]]?l=o[r[1]]-n[r[1]]:(!this._isRTL&&a[r[0]]<=n[r[0]]||this._isRTL&&a[r[0]]>=n[r[0]])&&(l=a[r[0]]-n[r[0]]),this._scroll(l)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",r=lr(this._scrollerElement,t)+e;zh(this._scrollerElement,t,r)}}};const St=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(i=>{i.target.isConnected&&(i.target.resizables?i.target.resizables.forEach(e=>{e._onResize(i.contentRect)}):i.target._onResize(i.contentRect))})})}),ac=se(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),St.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,St.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),St.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&St.unobserve(e)),this.__parent=null}}_onResize(e){}});const lc=s=>class extends ac(oc(s)){static get properties(){return{orientation:{value:"horizontal",type:String,reflectToAttribute:!0,sync:!0},selected:{value:0,type:Number,reflectToAttribute:!0}}}static get observers(){return["__tabsItemsChanged(items)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return!this._vertical&&this.__isRTL?1:-1}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist")}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(t=>{this.__itemsResizeObserver.observe(t)}),this._updateOverflow()}_scrollForward(){const e=this._getNavigationButtonVisibleWidth("forward-button"),t=this._getNavigationButtonVisibleWidth("back-button"),r=this._scrollerElement.getBoundingClientRect(),o=[...this.items].reverse().find(h=>this._isItemVisible(h,e,t,r)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="back-button"]').clientWidth;let d;if(this.__isRTL){const h=r.right-l;d=o.right-h}else{const h=r.left+l;d=o.left-h}-this.__direction*d<1&&(d=-this.__direction*(this._scrollOffset-l)),this._scroll(d)}_scrollBack(){const e=this._getNavigationButtonVisibleWidth("forward-button"),t=this._getNavigationButtonVisibleWidth("back-button"),r=this._scrollerElement.getBoundingClientRect(),o=this.items.find(h=>this._isItemVisible(h,e,t,r)).getBoundingClientRect(),l=20+this.shadowRoot.querySelector('[part="forward-button"]').clientWidth;let d;if(this.__isRTL){const h=r.left+l;d=o.left-h}else{const h=r.right-l;d=o.right-h}this.__direction*d<1&&(d=this.__direction*(this._scrollOffset-l)),this._scroll(d)}_isItemVisible(e,t,r,n){if(this._vertical)throw new Error("Visibility check is only supported for horizontal tabs.");const o=this.__isRTL?r:t,a=this.__isRTL?t:r,l=n.right-o,d=n.left+a,h=e.getBoundingClientRect();return l>Math.floor(h.left)&&d<Math.ceil(h.right)}_getNavigationButtonVisibleWidth(e){const t=this.shadowRoot.querySelector(`[part="${e}"]`);return window.getComputedStyle(t).opacity==="0"?0:t.clientWidth}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:lr(this._scrollerElement,this.getAttribute("dir")),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let r=Math.floor(e)>1?"start":"";Math.ceil(e)<Math.ceil(t-this._scrollOffset)&&(r+=" end"),this.__direction===1&&(r=r.replace(/start|end/giu,n=>n==="start"?"end":"start")),r?this.setAttribute("overflow",r.trim()):this.removeAttribute("overflow")}};class dc extends lc(me(ee(G(J(z))))){static get is(){return"vaadin-tabs"}static get styles(){return sc}render(){return x`
      <div @click="${this._scrollBack}" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div @click="${this._scrollForward}" part="forward-button" aria-hidden="true"></div>
    `}}q(dc);const hc=N`
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
`;const cc=s=>class extends vt(s){static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}_shouldSetFocus(e){return e.target===this}};class Tn extends cc(me(ee(G(J(z))))){static get is(){return"vaadin-scroller"}static get styles(){return hc}static get lumoInjector(){return{...super.lumoInjector,includeBaseStyles:!0}}render(){return x`<slot></slot>`}ready(){super.ready(),this.__overflowController=new dr(this),this.addController(this.__overflowController)}}q(Tn);class uc extends Tn{static get is(){return"vaadin-tabsheet-scroller"}}q(uc);const fc=N`
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
`;const _c=[fc,N`
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
  `];class pc extends ce{constructor(i){super(i,"tabs"),this.__tabsItemsChangedListener=this.__tabsItemsChangedListener.bind(this),this.__tabsSelectedChangedListener=this.__tabsSelectedChangedListener.bind(this),this.__tabIdObserver=new MutationObserver(e=>{e.forEach(t=>{const r=t.target;i.__linkTabAndPanel(r),r.selected&&i.__togglePanels(r)})})}__tabsItemsChangedListener(){this.__tabIdObserver.disconnect();const i=this.tabs.items||[];i.forEach(e=>{this.__tabIdObserver.observe(e,{attributeFilter:["id"]})}),this.host._setItems(i)}__tabsSelectedChangedListener(){this.host.selected=this.tabs.selected}initCustomNode(i){if(!(i instanceof customElements.get("vaadin-tabs")))throw Error('The "tabs" slot of a <vaadin-tabsheet> must only contain a <vaadin-tabs> element!');this.tabs=i,i.addEventListener("items-changed",this.__tabsItemsChangedListener),i.addEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=i,this.host.stateTarget=i,this.__tabsItemsChangedListener()}teardownNode(i){this.tabs=null,i.removeEventListener("items-changed",this.__tabsItemsChangedListener),i.removeEventListener("selected-changed",this.__tabsSelectedChangedListener),this.host.__tabs=null,this.host._setItems([]),this.host.stateTarget=void 0}}const gc=s=>class extends gn(s){static get properties(){return{items:{type:Array,readOnly:!0,notify:!0},selected:{value:0,type:Number,notify:!0},__tabs:{type:Object},__panels:{type:Array}}}static get observers(){return["__itemsOrPanelsChanged(items, __panels)","__selectedTabItemChanged(selected, items, __panels)"]}static get delegateProps(){return["selected","_theme"]}ready(){super.ready(),this.__overflowController=new dr(this,this.shadowRoot.querySelector('[part="content"]')),this.addController(this.__overflowController),this._tabsSlotController=new pc(this),this.addController(this._tabsSlotController);const i=this.shadowRoot.querySelector("#panel-slot");this.__panelsObserver=new Kt(i,({addedNodes:e,removedNodes:t})=>{e.length&&e.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&r.hidden&&(r.__customHidden=!0)}),t.length&&t.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&r.hidden&&(r.__customHidden?delete r.__customHidden:r.hidden=!1)}),this.__panels=Array.from(i.assignedNodes({flatten:!0})).filter(r=>r.nodeType===Node.ELEMENT_NODE)})}_delegateProperty(i,e){if(this.stateTarget){if(i==="_theme"){this._delegateAttribute("theme",e);return}super._delegateProperty(i,e)}}__itemsOrPanelsChanged(i,e){!i||!e||i.forEach(t=>{this.__linkTabAndPanel(t,e)})}__selectedTabItemChanged(i,e,t){!e||!t||i===void 0||this.__togglePanels(e[i],t)}__togglePanels(i,e=this.__panels){const t=i?i.id:"",r=e.find(a=>a.getAttribute("tab")===t),n=this.shadowRoot.querySelector('[part="content"]');this.toggleAttribute("loading",!r);const o=e.filter(a=>!a.hidden).length===1;r?n.style.minHeight="":o&&(n.style.minHeight=`${n.offsetHeight}px`),e.forEach(a=>{a.hidden=a!==r})}__linkTabAndPanel(i,e=this.__panels){const t=e.find(r=>r.getAttribute("tab")===i.id);t&&(t.role="tabpanel",t.id||(t.id=`tabsheet-panel-${Qt()}`),t.setAttribute("aria-labelledby",i.id),i.setAttribute("aria-controls",t.id))}};class vc extends gc(ee(me(G(J(z))))){static get is(){return"vaadin-tabsheet"}static get styles(){return _c}render(){return x`
      <div part="tabs-container">
        <slot name="prefix"></slot>
        <slot name="tabs"></slot>
        <slot name="suffix"></slot>
      </div>

      <vaadin-tabsheet-scroller part="content">
        <div part="loader"></div>
        <slot id="panel-slot"></slot>
      </vaadin-tabsheet-scroller>
    `}}q(vc);const mc=s=>class extends tn(en(s)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}_updatePosition(){if(super._updatePosition(),!(!this.positionTarget||!this.opened)){if(this.removeAttribute("arrow-centered"),this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),r=e.width/2-t.width/2;if(this.style.left){const n=t.left+r;n>0&&(this.style.left=`${n}px`,this.setAttribute("arrow-centered",""))}if(this.style.right){const n=parseFloat(this.style.right)+r;n>0&&(this.style.right=`${n}px`,this.setAttribute("arrow-centered",""))}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),r=e.height/2-t.height/2;this.style.top=`${t.top+r}px`}}}};const bc=N`
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
`;class yc extends mc(Ke(ee(G(J(z))))){static get is(){return"vaadin-tooltip-overlay"}static get styles(){return[Xs,bc]}render(){return x`
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}q(yc);const wc="modulepreload",Cc=function(s,i){return new URL(s,i).href},ls={},xc=function(i,e,t){let r=Promise.resolve();if(e&&e.length>0){let d=function(h){return Promise.all(h.map(c=>Promise.resolve(c).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");r=d(e.map(h=>{if(h=Cc(h,t),h in ls)return;ls[h]=!0;const c=h.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(t)for(let g=o.length-1;g>=0;g--){const v=o[g];if(v.href===h&&(!c||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":wc,c||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return i().catch(n)})};const Ec=s=>class extends s{static get properties(){return{position:{type:String},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"}}}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computePosition(e,t){return e||t}};const Tc=s=>class extends s{static get properties(){return{for:{type:String,observer:"__forChanged"},target:{type:Object},__isConnected:{type:Boolean,sync:!0}}}static get observers(){return["__targetOrConnectedChanged(target, __isConnected)"]}connectedCallback(){super.connectedCallback(),this.__isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__isConnected=!1}__forChanged(e){e&&(this.__setTargetByIdDebouncer=C.debounce(this.__setTargetByIdDebouncer,re,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" set via "for" property found on the page.`)}__targetOrConnectedChanged(e,t){this.__previousTarget&&(this.__previousTarget!==e||!t)&&this._removeTargetListeners(this.__previousTarget),e&&t&&this._addTargetListeners(e),this.__previousTarget=e}_addTargetListeners(e){}_removeTargetListeners(e){}},Ve=500;let Sn=Ve,Dn=Ve,An=Ve;const Me=new Set;let st=!1,Re=null,nt=null;class Sc{constructor(i){this.host=i}get focusDelay(){const i=this.host;return i.focusDelay!=null&&i.focusDelay>=0?i.focusDelay:Sn}get hoverDelay(){const i=this.host;return i.hoverDelay!=null&&i.hoverDelay>=0?i.hoverDelay:Dn}get hideDelay(){const i=this.host;return i.hideDelay!=null&&i.hideDelay>=0?i.hideDelay:An}get isClosing(){return Me.has(this.host)}open(i={immediate:!1}){const{immediate:e,hover:t,focus:r}=i,n=t&&this.hoverDelay>0,o=r&&this.focusDelay>0;!e&&(n||o)&&!this.__closeTimeout?this.__warmupTooltip(o):this.__showTooltip()}close(i){!i&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),st&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host.opened}_setOpened(i){this.host.opened=i}__flushClosingTooltips(){Me.forEach(i=>{i._stateController.close(!0),Me.delete(i)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),st=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(i){this._isOpened()||(st?this.__showTooltip():Re==null&&this.__scheduleWarmUp(i))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null),this.isClosing&&Me.delete(this.host)}__abortCooldown(){nt&&(clearTimeout(nt),nt=null)}__abortWarmUp(){Re&&(clearTimeout(Re),Re=null)}__scheduleClose(){this._isOpened()&&!this.isClosing&&(Me.add(this.host),this.__closeTimeout=setTimeout(()=>{Me.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){nt=setTimeout(()=>{nt=null,st=!1},this.hideDelay)}__scheduleWarmUp(i){const e=i?this.focusDelay:this.hoverDelay;Re=setTimeout(()=>{Re=null,st=!0,this.__showTooltip()},e)}}const Dc=s=>class extends Ec(Tc(s)){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__openedChanged",sync:!0},shouldShow:{type:Object,value:()=>(e,t)=>!0},text:{type:String},markdown:{type:Boolean,value:!1,reflectToAttribute:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0}}}static setDefaultFocusDelay(e){Sn=e!=null&&e>=0?e:Ve}static setDefaultHideDelay(e){An=e!=null&&e>=0?e:Ve}static setDefaultHoverDelay(e){Dn=e!=null&&e>=0?e:Ve}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Qt()}`,this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new Sc(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this.opened&&!this.manual&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._overlayElement=this.$.overlay,this.__contentController=new ce(this,"overlay","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this.__contentNode=e}}),this.addController(this.__contentController)}updated(e){super.updated(e),(e.has("text")||e.has("generator")||e.has("context")||e.has("markdown"))&&this.__updateContent()}__openedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}_addTargetListeners(e){e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)})}_removeTargetListeners(e){e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e)}__onFocusin(e){this.manual||ke()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this.opened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){this.manual||e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this.manual||this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this.opened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this.manual||this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__onOverlayMouseDown(e){e.stopPropagation()}__onOverlayClick(e){e.stopPropagation()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){if(this.manual)return;const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this.opened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}async __updateContent(){const e=typeof this.generator=="function"?this.generator(this.context):this.text;this.markdown&&e?(await this.constructor.__importMarkdownHelpers()).renderMarkdownToElement(this.__contentNode,e):this.__contentNode.textContent=e||"",this.$.overlay.toggleAttribute("hidden",this.__contentNode.textContent.trim()===""),this.dispatchEvent(new CustomEvent("content-changed",{detail:{content:this.__contentNode.textContent}}))}__computeAriaTarget(e,t){const r=o=>o&&o.nodeType===Node.ELEMENT_NODE,n=Array.isArray(e)?e.some(r):e;return e===null||n?e:t}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(r=>{Ls(r,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(r=>{Yi(r,"aria-describedby",this._uniqueId)})}static __importMarkdownHelpers(){return this.__markdownHelpers||(this.__markdownHelpers=xc(()=>import("./markdown-helpers-Ct--_gY3.js"),[],import.meta.url)),this.__markdownHelpers}};class Ac extends Dc(Vs(me(G(z)))){static get is(){return"vaadin-tooltip"}static get styles(){return N`
      :host {
        display: contents;
      }
    `}render(){const i=this.__effectivePosition;return x`
      <vaadin-tooltip-overlay
        id="overlay"
        .owner="${this}"
        theme="${Vt(this._theme)}"
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
    `}}q(Ac);const Dt={moon(){return x`
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
    `},help(){return x`<svg
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
    </svg>`},externalLink(){return x`
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
    `},spinner(){return x`
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
    `}};async function Ic(s,i,e){async function t(o){let a=[];return e&&e(`Loading recently merged pulls: repo=${s}, page=${o}`),await fetch(`https://api.github.com/repos/${s}/pulls?sort=updated&direction=desc&state=closed&per_page=100&page=${o}`).then(l=>l.json()).then(l=>{l.forEach(d=>{new Date(d.merged_at)>=i&&a.push(Oc(d))})}),a}let r=1,n=[];for(;;){const o=await t(r);if(o.length===0)break;n=n.concat(o),r++}return n}async function kc(s,i,e,t){async function r(a){let l=[];return t&&t(`Loading recently closed issues: repo=${s}, labels=${e}, page=${a}`),await fetch(`https://api.github.com/repos/${s}/issues?sort=updated&direction=desc&state=closed&labels=${e}&per_page=100&page=${a}`).then(d=>d.json()).then(d=>{d.forEach(h=>{new Date(h.closed_at)>=i&&l.push(In(s,h))})}),l}let n=1,o=[];for(;;){const a=await r(n);if(a.length===0)break;o=o.concat(a),n++}return o}async function Pc(s,i,e){async function t(o){let a=[];return e&&e(`Loading open issues: repo=${s}, labels=${i}, page=${o}`),await fetch(`https://api.github.com/repos/${s}/issues?sort=updated&direction=desc&state=open&labels=${i}&per_page=100&page=${o}`).then(l=>l.json()).then(l=>{l.forEach(d=>{a.push(In(s,d))})}),a}let r=1,n=[];for(;;){const o=await t(r);if(o.length===0)break;n=n.concat(o),r++}return n}function Oc(s){return{number:s.number,title:s.title,url:s.html_url,author:s.user.login,repo:s.head.repo.name,mergedAt:s.merged_at}}function In(s,i){return{number:i.number,title:i.title,url:i.html_url,repo:s.split("/")[1],closedAt:i.closed_at}}const wi={loadRecentlyMergedPulls:Ic,loadRecentlyClosedIssues:kc,loadOpenIssues:Pc};class Mc{saveGithubData(i){i.hash=ds();const e=JSON.stringify(i);localStorage.setItem("vdg-github-data",e)}loadGithubData(){const i=localStorage.getItem("vdg-github-data");if(i){const e=JSON.parse(i);if(e.hash===ds())return e}return null}saveSettings(i){const e=JSON.stringify(i);localStorage.setItem("vdg-settings",e)}loadSettings(){const i=localStorage.getItem("vdg-settings");return i?JSON.parse(i):{theme:"light"}}}function ds(){return xi().getTime()}const At=new Mc;class Rc extends z{static styles=[N`
      :host {
        display: block;
        min-height: 100vh;
        box-sizing: border-box;
      }
    `];static properties={loading:{type:Boolean},loadingProgress:{type:String},dataStart:{type:Date},rangeStart:{type:Date},githubData:{type:Object},dashboard:{type:Object},settings:{type:Object}};constructor(){super(),this.loading=!1,this.loadingProgress="",this.dataStart=Dr(xi(),30),this.rangeStart=Dr(xi(),14),this.settings=At.loadSettings()}createRenderRoot(){return this}async firstUpdated(){this.githubData=At.loadGithubData(),this.githubData?this.refreshDashboard():await this.refreshData()}updated(i){i.has("settings")&&(document.documentElement.style.colorScheme=this.settings.theme==="dark"?"dark":"light")}render(){return x`
      <div class="dashboard">
        <div class="header aura-surface">
          <h1>Vaadin DS Github Dashboard</h1>
          <div class="actions">
            <vaadin-date-picker
              label="Show data since"
              .min="${kt(this.dataStart,"yyyy-MM-dd")}"
              .max="${kt(new Date,"yyyy-MM-dd")}"
              .value="${kt(this.rangeStart,"yyyy-MM-dd")}"
              @change="${this.handleRangeStartChange}"
            ></vaadin-date-picker>
            <vaadin-button @click="${this.refreshData}"
              >Refresh data
            </vaadin-button>
            <vaadin-button theme="tertiary" @click="${this.handleToggleTheme}">
              ${Dt.moon()}
            </vaadin-button>
            <vaadin-button id="help-icon" theme="tertiary"
              >${Dt.help()}</vaadin-button
            >
            <vaadin-tooltip
              for="help-icon"
              text="Github data is updated once per day and then cached in local storage. 'Refresh data' forces an update. Data contains pulls and issues from the last 30 days, which is the maximum time range that can be configured."
            ></vaadin-tooltip>
          </div>
        </div>
        <div class="main">
          ${this.loading?x` <div class="section flex">
                <div class="panel loading">
                  <div class="title">
                    <div class="spinner">${Dt.spinner()}</div>
                    <span>Loading Github Data</span>
                  </div>
                  <div class="progress">${this.loadingProgress}</div>
                </div>
              </div>`:null}
          ${this.dashboard?x`
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
    `}renderStats(i,e){return x`
      <div class="panel stats">
        <div class="card aura-surface">
          <div class="title">${i}</div>
          <div class="list">
            ${e.map(t=>x`
                <div class="stat">
                  <span class="value">${t.value}</span>
                  <span class="label">${t.label}</span>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}renderGrid(i,e=!1){return x`
      <vaadin-grid .items="${i}" theme="no-border">
        <vaadin-grid-column
          ${as(t=>x`
              <div class="title">${t.title}</div>
              <div class="details">
                <span>${t.repo}</span>
                ${t.author?x`<span>@${t.author}</span>`:null}
              </div>
            `)}
        ></vaadin-grid-column>
        <vaadin-grid-column
          width="60px"
          flex-grow="0"
          ${as(t=>x`
              <a href="${t.url}" target="_blank">
                ${Dt.externalLink()}
              </a>
            `)}
        ></vaadin-grid-column>
      </vaadin-grid>
    `}handleToggleTheme(){const i=this.settings.theme==="dark"?"light":"dark";this.settings={...this.settings,theme:i},At.saveSettings(this.settings)}handleRangeStartChange(i){this.rangeStart=el(i.target.value,"yyyy-MM-dd",new Date),this.refreshDashboard()}async refreshData(){this.loading=!0,this.loadingProgress="",this.dashboard=null,this.githubData=await $c(this.dataStart,i=>{this.loadingProgress+=i+`
`}),At.saveGithubData(this.githubData),this.refreshDashboard(),this.loading=!1}refreshDashboard(){this.dashboard=Lc(this.githubData,this.rangeStart)}}customElements.define("vgd-dashboard",Rc);async function $c(s,i){const e=["vaadin/web-components","vaadin/flow-components","vaadin/react-components"],t=(await Promise.all(e.map(a=>wi.loadRecentlyMergedPulls(a,s,i)))).flat(),r=(await Promise.all(e.map(a=>wi.loadRecentlyClosedIssues(a,s,"BFP",i)))).flat(),n=(await Promise.all(e.map(a=>wi.loadOpenIssues(a,"BFP",i)))).flat();return{startDate:kt(s,"yyyy-MM-dd"),pulls:t,closedWarrantyIssues:r,openWarrantyIssues:n}}function Lc(s,i){const e=["DiegoCardoso","sissbruecker","tomivirkki","rolfsmeds","vursen","web-padawan","yuriy-fix","ugur-vaadin","vaadin-bot","dependabot[bot]"],t=[],r=[],n=[],o=[],a=[],l=[];s.pulls.forEach(c=>{const u=c.title.includes("CP:"),f=new Date(c.mergedAt)>=i;u||!f||(t.push(c),c.title.startsWith("feat")&&r.push(c),c.title.startsWith("fix")&&n.push(c),c.title.startsWith("refactor")&&o.push(c),(c.title.startsWith("chore")||c.title.startsWith("test")||c.title.startsWith("docs"))&&a.push(c),e.includes(c.author)||l.push(c))});const d=s.openWarrantyIssues,h=s.closedWarrantyIssues.filter(c=>new Date(c.closedAt)>=i);return{githubData:s,pulls:t,features:r,fixes:n,refactors:o,chores:a,contributions:l,openWarrantyIssues:d,closedWarrantyIssues:h}}Bi(x` <vgd-dashboard></vgd-dashboard>`,document.getElementById("app"));
