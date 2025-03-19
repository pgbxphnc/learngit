const __vite__fileDeps=["./PlotlyPlot-cVBHujOn.js","./index-BQPjLIsY.js","./index-BOW2xVAS.css","./BokehPlot-CHWxUyLl.js","./BokehPlot-Cd-I2ErV.css","./AltairPlot-G12eLL-q.js","./Index-DB1XLvMK.js","./Index-BEyjvDG_.css","./color-FyDVBI5Z.js","./vega-embed.module-B-qtr4Vf.js","./dsv-DB8NKgIY.js","./AltairPlot-CSe9xcFj.css","./MatplotlibPlot-CgZqwhB9.js","./MatplotlibPlot-AF_QcUtc.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as w}from"./index-BQPjLIsY.js";import"./Index-DB1XLvMK.js";import{E as q}from"./Empty-BgF7sXBn.js";const{SvelteComponent:j,append:g,attr:l,detach:z,init:H,insert:N,noop:P,safe_not_equal:B,svg_element:m}=window.__gradio__svelte__internal;function Y(_){let e,o,n,r,a,t,s;return{c(){e=m("svg"),o=m("circle"),n=m("circle"),r=m("circle"),a=m("circle"),t=m("circle"),s=m("path"),l(o,"cx","20"),l(o,"cy","4"),l(o,"r","2"),l(o,"fill","currentColor"),l(n,"cx","8"),l(n,"cy","16"),l(n,"r","2"),l(n,"fill","currentColor"),l(r,"cx","28"),l(r,"cy","12"),l(r,"r","2"),l(r,"fill","currentColor"),l(a,"cx","11"),l(a,"cy","7"),l(a,"r","2"),l(a,"fill","currentColor"),l(t,"cx","16"),l(t,"cy","24"),l(t,"r","2"),l(t,"fill","currentColor"),l(s,"fill","currentColor"),l(s,"d","M30 3.413L28.586 2L4 26.585V2H2v26a2 2 0 0 0 2 2h26v-2H5.413Z"),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),l(e,"aria-hidden","true"),l(e,"role","img"),l(e,"class","iconify iconify--carbon"),l(e,"width","100%"),l(e,"height","100%"),l(e,"preserveAspectRatio","xMidYMid meet"),l(e,"viewBox","0 0 32 32")},m(i,u){N(i,e,u),g(e,o),g(e,n),g(e,r),g(e,a),g(e,t),g(e,s)},p:P,i:P,o:P,d(i){i&&z(e)}}}let Z=class extends j{constructor(e){super(),H(this,e,null,Y,B,{})}};const{SvelteComponent:F,bubble:L,check_outros:T,construct_svelte_component:O,create_component:v,destroy_component:p,detach:A,empty:M,flush:f,group_outros:R,init:G,insert:S,mount_component:k,safe_not_equal:J,transition_in:b,transition_out:d}=window.__gradio__svelte__internal;function K(_){let e,o;return e=new q({props:{unpadded_box:!0,size:"large",$$slots:{default:[U]},$$scope:{ctx:_}}}),{c(){v(e.$$.fragment)},m(n,r){k(e,n,r),o=!0},p(n,r){const a={};r&32768&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){o||(b(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){p(e,n)}}}function Q(_){let e,o,n;var r=_[10];function a(t,s){return{props:{value:t[0],target:t[1],colors:t[2],theme_mode:t[3],caption:t[4],bokeh_version:t[5],show_actions_button:t[6],gradio:t[7],_selectable:t[9],x_lim:t[8]}}}return r&&(e=O(r,a(_)),e.$on("load",_[11]),e.$on("select",_[12])),{c(){e&&v(e.$$.fragment),o=M()},m(t,s){e&&k(e,t,s),S(t,o,s),n=!0},p(t,s){if(s&1024&&r!==(r=t[10])){if(e){R();const i=e;d(i.$$.fragment,1,0,()=>{p(i,1)}),T()}r?(e=O(r,a(t)),e.$on("load",t[11]),e.$on("select",t[12]),v(e.$$.fragment),b(e.$$.fragment,1),k(e,o.parentNode,o)):e=null}else if(r){const i={};s&1&&(i.value=t[0]),s&2&&(i.target=t[1]),s&4&&(i.colors=t[2]),s&8&&(i.theme_mode=t[3]),s&16&&(i.caption=t[4]),s&32&&(i.bokeh_version=t[5]),s&64&&(i.show_actions_button=t[6]),s&128&&(i.gradio=t[7]),s&512&&(i._selectable=t[9]),s&256&&(i.x_lim=t[8]),e.$set(i)}},i(t){n||(e&&b(e.$$.fragment,t),n=!0)},o(t){e&&d(e.$$.fragment,t),n=!1},d(t){t&&A(o),e&&p(e,t)}}}function U(_){let e,o;return e=new Z({}),{c(){v(e.$$.fragment)},m(n,r){k(e,n,r),o=!0},i(n){o||(b(e.$$.fragment,n),o=!0)},o(n){d(e.$$.fragment,n),o=!1},d(n){p(e,n)}}}function W(_){let e,o,n,r;const a=[Q,K],t=[];function s(i,u){return i[0]&&i[10]?0:1}return e=s(_),o=t[e]=a[e](_),{c(){o.c(),n=M()},m(i,u){t[e].m(i,u),S(i,n,u),r=!0},p(i,[u]){let h=e;e=s(i),e===h?t[e].p(i,u):(R(),d(t[h],1,1,()=>{t[h]=null}),T(),o=t[e],o?o.p(i,u):(o=t[e]=a[e](i),o.c()),b(o,1),o.m(n.parentNode,n))},i(i){r||(b(o),r=!0)},o(i){d(o),r=!1},d(i){i&&A(n),t[e].d(i)}}}function X(_,e,o){let{value:n}=e,{target:r}=e,{colors:a=[]}=e,{theme_mode:t}=e,{caption:s}=e,{bokeh_version:i}=e,{show_actions_button:u}=e,{gradio:h}=e,{x_lim:C=null}=e,{_selectable:E}=e,y=null,V=n?.type;const x={plotly:()=>w(()=>import("./PlotlyPlot-cVBHujOn.js"),__vite__mapDeps([0,1,2]),import.meta.url),bokeh:()=>w(()=>import("./BokehPlot-CHWxUyLl.js"),__vite__mapDeps([3,4]),import.meta.url),altair:()=>w(()=>import("./AltairPlot-G12eLL-q.js"),__vite__mapDeps([5,6,1,2,7,8,9,10,11]),import.meta.url),matplotlib:()=>w(()=>import("./MatplotlibPlot-CgZqwhB9.js"),__vite__mapDeps([12,13]),import.meta.url)};function D(c){L.call(this,_,c)}function I(c){L.call(this,_,c)}return _.$$set=c=>{"value"in c&&o(0,n=c.value),"target"in c&&o(1,r=c.target),"colors"in c&&o(2,a=c.colors),"theme_mode"in c&&o(3,t=c.theme_mode),"caption"in c&&o(4,s=c.caption),"bokeh_version"in c&&o(5,i=c.bokeh_version),"show_actions_button"in c&&o(6,u=c.show_actions_button),"gradio"in c&&o(7,h=c.gradio),"x_lim"in c&&o(8,C=c.x_lim),"_selectable"in c&&o(9,E=c._selectable)},_.$$.update=()=>{if(_.$$.dirty&1){let c=n?.type;c!==V&&o(10,y=null),c&&c in x&&x[c]().then($=>{o(10,y=$.default)})}},[n,r,a,t,s,i,u,h,C,E,y,D,I]}class ee extends F{constructor(e){super(),G(this,e,X,W,J,{value:0,target:1,colors:2,theme_mode:3,caption:4,bokeh_version:5,show_actions_button:6,gradio:7,x_lim:8,_selectable:9})}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),f()}get target(){return this.$$.ctx[1]}set target(e){this.$$set({target:e}),f()}get colors(){return this.$$.ctx[2]}set colors(e){this.$$set({colors:e}),f()}get theme_mode(){return this.$$.ctx[3]}set theme_mode(e){this.$$set({theme_mode:e}),f()}get caption(){return this.$$.ctx[4]}set caption(e){this.$$set({caption:e}),f()}get bokeh_version(){return this.$$.ctx[5]}set bokeh_version(e){this.$$set({bokeh_version:e}),f()}get show_actions_button(){return this.$$.ctx[6]}set show_actions_button(e){this.$$set({show_actions_button:e}),f()}get gradio(){return this.$$.ctx[7]}set gradio(e){this.$$set({gradio:e}),f()}get x_lim(){return this.$$.ctx[8]}set x_lim(e){this.$$set({x_lim:e}),f()}get _selectable(){return this.$$.ctx[9]}set _selectable(e){this.$$set({_selectable:e}),f()}}const le=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{Z as P,ee as a,le as b};
//# sourceMappingURL=Plot-Ce8WWIhc.js.map
