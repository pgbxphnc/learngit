import{r as p}from"./file-url-SIRImsEF.js";const{SvelteComponent:v,assign:a,compute_rest_props:u,detach:w,element:I,exclude_internal_props:j,flush:q,get_spread_update:y,init:b,insert:x,listen:C,noop:d,safe_not_equal:D,set_attributes:m,src_url_equal:E,toggle_class:g}=window.__gradio__svelte__internal,{createEventDispatcher:P}=window.__gradio__svelte__internal;function S(n){let e,r,l,i,_=[{src:r=n[0]},n[2]],s={};for(let t=0;t<_.length;t+=1)s=a(s,_[t]);return{c(){e=I("img"),m(e,s),g(e,"svelte-1pijsyv",!0)},m(t,c){x(t,e,c),l||(i=C(e,"load",n[5]),l=!0)},p(t,[c]){m(e,s=y(_,[c&1&&!E(e.src,r=t[0])&&{src:r},c&4&&t[2]])),g(e,"svelte-1pijsyv",!0)},i:d,o:d,d(t){t&&w(e),l=!1,i()}}}function k(n,e,r){const l=["src"];let i=u(e,l);const _=P();let{src:s=void 0}=e,t,c;const f=()=>_("load");return n.$$set=o=>{e=a(a({},e),j(o)),r(2,i=u(e,l)),"src"in o&&r(3,s=o.src)},n.$$.update=()=>{if(n.$$.dirty&24){r(0,t=s),r(4,c=s);const o=s;p(o).then(h=>{c===o&&r(0,t=h)})}},[t,_,i,s,c,f]}class z extends v{constructor(e){super(),b(this,e,k,S,D,{src:3})}get src(){return this.$$.ctx[3]}set src(e){this.$$set({src:e}),q()}}const B=z;export{B as I};
//# sourceMappingURL=Image-CJc3fwmN.js.map
