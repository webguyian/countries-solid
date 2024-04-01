import{e as c,D as A,F as K,v as r,z as O,w as l,l as N,G as M,H as x,j as $,I as H,S as k,J as Q,K as I,L as Y,M as R,N as q,y as J,A as U}from"./index-Dk6Hz7A5.js";import{c as W}from"./createAsync-C64tTjj8.js";var Z=l('<div class="border-b border-gray-300 h-40 bg-no-repeat bg-cover bg-center dark:border-gray-700">'),T=l('<div class="p-5 text-left"><h2 class="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white"></h2><dl class="text-sm grid grid-cols-2"><dt class=font-bold>Capital:</dt><dd></dd><dt class=font-bold>Region:</dt><dd></dd><dt class=font-bold>Population:</dt><dd>');function V({country:n}){const{cca3:g,flags:f,region:s}=n,m=n.name?.common,u=n.capital?.[0]??"N/A",y=n.population?.toLocaleString("en-us");return c(O,{class:"appearance-none w-[250px] bg-white border border-gray-200 shadow dark:bg-gray-700 dark:border-gray-600",href:`/country/${g}`,get children(){return[(()=>{var a=Z();return A(p=>K(a,`background-image: url('${f?.svg}')`,p)),a})(),(()=>{var a=T(),p=a.firstChild,v=p.nextSibling,_=v.firstChild,e=_.nextSibling,o=e.nextSibling,h=o.nextSibling,t=h.nextSibling,i=t.nextSibling;return r(p,m),r(e,u),r(h,s),r(i,y),a})()]}})}var X=l("<input type=hidden name=region>"),ee=l("<span>Filter By: "),te=l('<button type=button class="text-red-600 font-bold w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Clear selected region'),re=l('<div class="flex flex-col md:flex-row justify-between mb-8"><form class="w-full md:max-w-72 mb-5 md:mb-0"><label for=search-filter class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label><div class=relative><div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400"aria-hidden=true xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 20 20"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input id=search-filter class="peer block w-full py-3 ps-12 pe-8 text-sm text-gray-900 shadow rounded bg-white dark:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-200 dark:placeholder-gray-400 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"name=search placeholder="Search for a country..."type=search required><button class="absolute inset-y-0 end-4 peer-invalid:hidden"title="Clear search"type=reset><svg class="w-4 h-4 text-gray-300 hover:text-gray-400 dark:text-gray-400"xmlns=http://www.w3.org/2000/svg viewBox="0 0 384 512"aria-hidden=true><path fill=currentColor d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path></svg></button></div></form><div class="relative min-w-52"><button id=dropdown-trigger class="inline-flex justify-between items-center w-full px-5 py-3 bg-white hover:bg-neutral-100 shadow focus:ring-2 focus:outline-none focus:ring-blue-200 rounded text-sm text-center dark:text-gray-300 dark:bg-gray-700"type=button><svg class="w-2.5 h-2.5 ms-3"aria-hidden=true xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="m1 1 4 4 4-4"></path></svg></button><div id=dropdownHover><ul class="py-2 text-sm text-gray-700 dark:text-gray-300"aria-labelledby=dropdown-trigger>'),ne=l("<span>Filter By Region"),ae=l('<li><button type=button class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">');function oe(){const[n,g]=M(),f=n[x],[s,m]=$(!1),[u,y]=$(f);let a;const p=t=>{const w=new FormData(t.target).get(R);t.preventDefault(),g({[R]:w})},v=t=>{a&&!a.contains(t.target)&&e()},_=()=>{g({[R]:void 0})},e=()=>{m(t=>!t),s()?document.addEventListener("click",v):document.removeEventListener("click",v)},o=()=>{e(),g({[x]:void 0}),y(void 0)},h=t=>{const i=t.target.textContent;e(),g({[x]:i})};return H(()=>{n[x]&&y(n[x])}),(()=>{var t=re(),i=t.firstChild,w=i.firstChild,C=w.nextSibling,S=C.firstChild,b=S.nextSibling,z=b.nextSibling,E=i.nextSibling,L=E.firstChild,G=L.firstChild,B=L.nextSibling,j=B.firstChild;i.addEventListener("submit",p),z.$$click=_,r(i,c(k,{get when(){return u()},get children(){var d=X();return A(()=>d.value=u()),d}}),null);var P=a;return typeof P=="function"?q(P,E):a=E,L.$$click=e,r(L,c(k,{get when(){return u()},get fallback(){return ne()},get children(){var d=ee();return d.firstChild,r(d,u,null),d}}),G),r(j,c(k,{get when(){return u()},get children(){var d=te();return d.$$click=o,d}}),null),r(j,c(I,{each:Q,children:d=>(()=>{var D=ae(),F=D.firstChild;return F.$$click=h,r(F,d),D})()}),null),A(()=>Y(B,`${s()?"absolute":"hidden"} top-12 z-10 w-full bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700`)),t})()}N(["click"]);var le=l('<div class="grid grid-cols-fluid justify-items-center gap-10 mb-8">'),se=l("<p>No matching countries found."),ie=l('<button class="py-2.5 px-8 mb-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700"type=button>Load more'),de=l("<div>");const ce=J(async()=>{const n=`${U}/all`;return(await fetch(n).then(s=>s.json())).slice(0).sort((s,m)=>s.name.common.localeCompare(m.name.common))},"countries");function he(){const[n]=M(),[g,f]=$(0),[s,m]=$(12),[u,y]=$(!1),[a,p]=$([]),v=W(()=>ce()),_=()=>{m(s()*2)};return H(()=>{const e=v(),o=n[x],h=n[R],t=b=>o?b.region===o:b,i=b=>h?b.name.common.toLowerCase().startsWith(h.toLowerCase()):b,w=e?.filter(t).filter(i),C=w?.slice(0,s()),S=w?.length??0;f(S),p(C),console.log("c",S,C?.length),y(S>C?.length)}),(()=>{var e=de();return r(e,c(oe,{}),null),r(e,c(k,{get when(){return a()},get children(){var o=le();return r(o,c(I,{get each(){return a()},children:h=>c(V,{country:h})})),o}}),null),r(e,c(k,{get when(){return g()===0},get children(){return se()}}),null),r(e,c(k,{get when(){return u()},get children(){var o=ie();return o.$$click=_,o}}),null),e})()}N(["click"]);export{he as default};
