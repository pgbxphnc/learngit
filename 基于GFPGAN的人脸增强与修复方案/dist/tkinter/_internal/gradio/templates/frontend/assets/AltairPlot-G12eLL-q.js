import{c as p}from"./Index-DB1XLvMK.js";import{g as R}from"./color-FyDVBI5Z.js";import{e as B}from"./vega-embed.module-B-qtr4Vf.js";import"./index-BQPjLIsY.js";import"./svelte/svelte.js";import"./dsv-DB8NKgIY.js";function G(o,t,i,a){let e=t.getPropertyValue("--color-accent"),r=t.getPropertyValue("--body-text-color"),c=t.getPropertyValue("--border-color-primary"),f=t.fontFamily,m=t.getPropertyValue("--block-title-text-weight");const b=s=>s.endsWith("px")?parseFloat(s.slice(0,-2)):12;let y=b(t.getPropertyValue("--text-md")),u=b(t.getPropertyValue("--text-sm")),h={autosize:{type:"fit",contains:"padding"},axis:{labelFont:f,labelColor:r,titleFont:f,titleColor:r,tickColor:c,labelFontSize:u,gridColor:c,titleFontWeight:"normal",titleFontSize:u,labelFontWeight:"normal",domain:!1,labelAngle:0},legend:{labelColor:r,labelFont:f,titleColor:r,titleFont:f,titleFontWeight:"normal",titleFontSize:u,labelFontWeight:"normal",offset:2},title:{color:r,font:f,fontSize:y,fontWeight:m,anchor:"middle"},view:{stroke:c}};o.config=h;let n=o.encoding,g=o.layer;switch(i){case"scatter":o.config.mark={stroke:e},n.color&&n.color.type=="nominal"?n.color.scale.range=n.color.scale.range.map((s,_)=>v(a,_)):n.color&&n.color.type=="quantitative"&&(n.color.scale.range=["#eff6ff","#1e3a8a"],n.color.scale.range.interpolate="hsl");break;case"line":o.config.mark={stroke:e,cursor:"crosshair"},g.forEach(s=>{s.encoding.color&&(s.encoding.color.scale.range=s.encoding.color.scale.range.map((_,w)=>v(a,w)))});break;case"bar":o.config.mark={opacity:.8,fill:e},n.color&&(n.color.scale.range=n.color.scale.range.map((s,_)=>v(a,_)));break}return o}function v(o,t){let i=o[t%o.length];return i&&i in p?p[i]?.primary:i||p[R(t)].primary}const{SvelteComponent:H,append:x,attr:F,binding_callbacks:q,detach:M,element:C,flush:d,init:I,insert:j,noop:O,safe_not_equal:K,set_data:Q,space:U,text:X}=window.__gradio__svelte__internal,{onMount:Y,onDestroy:Z}=window.__gradio__svelte__internal;function E(o){let t,i;return{c(){t=C("div"),i=X(o[0]),F(t,"class","caption layout svelte-1qhqpn7")},m(a,e){j(a,t,e),x(t,i)},p(a,e){e&1&&Q(i,a[0])},d(a){a&&M(t)}}}function $(o){let t,i,a,e=o[0]&&E(o);return{c(){t=C("div"),i=C("div"),a=U(),e&&e.c(),F(t,"data-testid","altair"),F(t,"class","altair layout svelte-1qhqpn7")},m(r,c){j(r,t,c),x(t,i),o[12](i),x(t,a),e&&e.m(t,null),o[13](t)},p(r,[c]){r[0]?e?e.p(r,c):(e=E(r),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},i:O,o:O,d(r){r&&M(t),o[12](null),e&&e.d(),o[13](null)}}}function tt(o,t,i){let a,e,r,{value:c}=t,{target:f}=t,{colors:m=[]}=t,{caption:b}=t,{show_actions_button:y}=t,{gradio:u}=t,h,n,g,{_selectable:s}=t,_=window.getComputedStyle(f),w,z;const P=()=>Math.min(n.offsetWidth,z||n.offsetWidth);let S=()=>{};const A=()=>{r&&i(10,e.width=P(),e),B(h,e,{actions:y}).then(function(l){if(g=l.view,S=()=>{g.signal("width",P()).run()},!s)return;const V=(et,it)=>{const k=g.signal("brush");if(k)if(Object.keys(k).length===0)u.dispatch("select",{value:null,index:null,selected:!1});else{const D=Object.keys(k)[0];let J=k[D].map(N=>N/1e3);u.dispatch("select",{value:k,index:J,selected:!0})}};g.addEventListener("mouseup",V),g.addEventListener("touchup",V)})};let W=new ResizeObserver(()=>{r&&e.width!==n.offsetWidth&&S()});Y(()=>{A(),W.observe(n)}),Z(()=>{W.disconnect()});function L(l){q[l?"unshift":"push"](()=>{h=l,i(1,h)})}function T(l){q[l?"unshift":"push"](()=>{n=l,i(2,n)})}return o.$$set=l=>{"value"in l&&i(3,c=l.value),"target"in l&&i(4,f=l.target),"colors"in l&&i(5,m=l.colors),"caption"in l&&i(0,b=l.caption),"show_actions_button"in l&&i(6,y=l.show_actions_button),"gradio"in l&&i(7,u=l.gradio),"_selectable"in l&&i(8,s=l._selectable)},o.$$.update=()=>{o.$$.dirty&8&&i(11,a=c?.plot),o.$$.dirty&2048&&i(10,e=JSON.parse(a)),o.$$.dirty&1280&&e&&e.params&&!s&&i(10,e.params=e.params.filter(l=>l.name!=="brush"),e),o.$$.dirty&1064&&c.chart&&i(10,e=G(e,_,c.chart,m)),o.$$.dirty&1536&&w!==e&&(i(9,w=e),z=e.width),o.$$.dirty&1032&&(r=!(e.encoding?.column?.field||e.encoding?.row?.field||c.chart===void 0))},[b,h,n,c,f,m,y,u,s,w,e,a,L,T]}class st extends H{constructor(t){super(),I(this,t,tt,$,K,{value:3,target:4,colors:5,caption:0,show_actions_button:6,gradio:7,_selectable:8})}get value(){return this.$$.ctx[3]}set value(t){this.$$set({value:t}),d()}get target(){return this.$$.ctx[4]}set target(t){this.$$set({target:t}),d()}get colors(){return this.$$.ctx[5]}set colors(t){this.$$set({colors:t}),d()}get caption(){return this.$$.ctx[0]}set caption(t){this.$$set({caption:t}),d()}get show_actions_button(){return this.$$.ctx[6]}set show_actions_button(t){this.$$set({show_actions_button:t}),d()}get gradio(){return this.$$.ctx[7]}set gradio(t){this.$$set({gradio:t}),d()}get _selectable(){return this.$$.ctx[8]}set _selectable(t){this.$$set({_selectable:t}),d()}}export{st as default};
//# sourceMappingURL=AltairPlot-G12eLL-q.js.map
