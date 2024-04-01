import{createContext as A,useContext as x,createMemo as C,untrack as I,createSignal as b,getOwner as T,getListener as j,onCleanup as M,startTransition as m,sharedConfig as d}from"solid-js";import{isServer as u,getRequestEvent as y}from"solid-js/web";const v=/^\/+|(\/)\/+$/g;function Q(e,r=!1){const t=e.replace(v,"$1");return t?r||/^[?#]/.test(t)?t:"/"+t:""}function D(e,r){if(e==null)throw new Error(r);return e}function H(e,r){const t=new URLSearchParams(e);Object.entries(r).forEach(([s,c])=>{c==null||c===""?t.delete(s):t.set(s,String(c))});const a=t.toString();return a?`?${a}`:""}const k=A(),G=A(),p=()=>D(x(k),"<A> and 'use' router primitives can be only used inside a Route."),N=()=>x(G)||p().base,V=e=>{const r=N();return C(()=>r.resolvePath(e()))},X=e=>{const r=p();return C(()=>{const t=e();return t!==void 0?r.renderPath(t):t})},L=()=>p().navigatorFactory(),U=()=>p().location,Z=()=>p().params,ee=()=>{const e=U(),r=L(),t=(a,s)=>{const c=I(()=>e.pathname+H(e.search,a)+e.hash);r(c,{scroll:!1,resolve:!1,...s})};return[e.query,t]};let q;function B(){return q}const F="Location",K=5e3,$=18e4;let E=new Map;u||setInterval(()=>{const e=Date.now();for(let[r,t]of E.entries())!t[3].count&&e-t[0]>$&&E.delete(r)},3e5);function R(){if(!u)return E;const e=y();if(!e)throw new Error("Cannot find cache context");return(e.router||(e.router={})).cache||(e.router.cache=new Map)}function _(e,r){e.GET&&(e=e.GET);const t=(...a)=>{const s=R(),c=B(),S=T()?L():void 0,w=Date.now(),f=r+P(a);let n=s.get(f),O;if(u){const o=y();if(o){const i=(o.router||(o.router={})).dataOnly;if(i){const l=o&&(o.router.data||(o.router.data={}));if(l&&f in l)return l[f];if(Array.isArray(i)&&!i.includes(f))return l[f]=void 0,Promise.resolve()}}}if(j()&&!u&&(O=!0,M(()=>n[3].count--)),n&&n[0]&&(u||c==="native"||n[3].count||Date.now()-n[0]<K)){O&&(n[3].count++,n[3][0]()),n[2]==="preload"&&c!=="preload"&&(n[0]=w);let o=n[1];return o="then"in n[1]?n[1].then(g(!1),g(!0)):g(!1)(n[1]),!u&&c==="navigate"&&m(()=>n[3][1](n[0])),o}let h=!u&&d.context&&d.has(f)?d.load(f):e(...a);if(n?(n[0]=w,n[1]=h,n[2]=c,!u&&c==="navigate"&&m(()=>n[3][1](n[0]))):(s.set(f,n=[w,h,c,b(w)]),n[3].count=0),O&&(n[3].count++,n[3][0]()),u){const o=y();if(o&&o.router.dataOnly)return o.router.data[f]=h}if(h="then"in h?h.then(g(!1),g(!0)):g(!1)(h),u&&d.context&&d.context.async&&!d.context.noHydrate){const o=y();(!o||!o.serverOnly)&&d.context.serialize(f,h)}return h;function g(o){return async i=>{if(i instanceof Response){if(i.headers.has("Location")){S&&m(()=>{let l=i.headers.get(F);l&&l.startsWith("/")?S(l,{replace:!0}):!u&&l&&(window.location.href=l)});return}i.customBody&&(i=await i.customBody())}if(o)throw i;return i}}};return t.keyFor=(...a)=>r+P(a),t.key=r,t}_.set=(e,r)=>{const t=R(),a=Date.now();let s=t.get(e);s?(s[0]=a,s[1]=r,s[2]="preload"):(t.set(e,s=[a,r,,b(a)]),s[3].count=0)};_.clear=()=>R().clear();function P(e){return JSON.stringify(e,(r,t)=>z(t)?Object.keys(t).sort().reduce((a,s)=>(a[s]=t[s],a),{}):t)}function z(e){let r;return e!=null&&typeof e=="object"&&(!(r=Object.getPrototypeOf(e))||r===Object.prototype)}const te="https://restcountries.com/v3.1",ne=["Africa","Americas","Antarctic","Asia","Europe","Oceania"],re="region",oe="search";export{te as A,re as R,oe as S,ne as a,Z as b,_ as c,V as d,X as e,U as f,Q as n,ee as u};
