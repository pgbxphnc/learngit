import"./Index-DB1XLvMK.js";import{B as Ee}from"./BlockTitle-CXNngU7y.js";import{C as ze}from"./Check-CZUQOzJl.js";import{C as De}from"./Copy-B6RcHnoK.js";import{f as Ne}from"./Button-BIUaXfcG.js";/* empty css                                              */const{SvelteComponent:Be,action_destroyer:Ke,add_render_callback:Le,append:Se,attr:r,binding_callbacks:S,bubble:H,check_outros:I,create_component:J,create_in_transition:Ue,destroy_component:M,detach:k,element:z,empty:ee,flush:m,group_outros:O,init:qe,insert:w,is_function:Ye,listen:d,mount_component:P,noop:U,run_all:q,safe_not_equal:je,set_data:Ae,set_input_value:E,space:te,text:Fe,toggle_class:Z,transition_in:v,transition_out:T}=window.__gradio__svelte__internal,{beforeUpdate:Ge,afterUpdate:Ie,createEventDispatcher:Je,tick:x}=window.__gradio__svelte__internal;function Me(l){let e;return{c(){e=Fe(l[3])},m(t,o){w(t,e,o)},p(t,o){o[0]&8&&Ae(e,t[3])},d(t){t&&k(e)}}}function Oe(l){let e,t,o,i,s,u,h,c,f=l[6]&&l[10]&&$(l);return{c(){f&&f.c(),e=te(),t=z("textarea"),r(t,"data-testid","textbox"),r(t,"class","scroll-hide svelte-1f354aw"),r(t,"dir",o=l[11]?"rtl":"ltr"),r(t,"placeholder",l[2]),r(t,"rows",l[1]),t.disabled=l[5],t.autofocus=l[12],r(t,"maxlength",l[14]),r(t,"style",i=l[13]?"text-align: "+l[13]:"")},m(a,_){f&&f.m(a,_),w(a,e,_),w(a,t,_),E(t,l[0]),l[39](t),u=!0,l[12]&&t.focus(),h||(c=[Ke(s=l[21].call(null,t,l[0])),d(t,"input",l[38]),d(t,"keypress",l[19]),d(t,"blur",l[30]),d(t,"select",l[18]),d(t,"focus",l[31]),d(t,"scroll",l[20])],h=!0)},p(a,_){a[6]&&a[10]?f?(f.p(a,_),_[0]&1088&&v(f,1)):(f=$(a),f.c(),v(f,1),f.m(e.parentNode,e)):f&&(O(),T(f,1,1,()=>{f=null}),I()),(!u||_[0]&2048&&o!==(o=a[11]?"rtl":"ltr"))&&r(t,"dir",o),(!u||_[0]&4)&&r(t,"placeholder",a[2]),(!u||_[0]&2)&&r(t,"rows",a[1]),(!u||_[0]&32)&&(t.disabled=a[5]),(!u||_[0]&4096)&&(t.autofocus=a[12]),(!u||_[0]&16384)&&r(t,"maxlength",a[14]),(!u||_[0]&8192&&i!==(i=a[13]?"text-align: "+a[13]:""))&&r(t,"style",i),s&&Ye(s.update)&&_[0]&1&&s.update.call(null,a[0]),_[0]&1&&E(t,a[0])},i(a){u||(v(f),u=!0)},o(a){T(f),u=!1},d(a){a&&(k(e),k(t)),f&&f.d(a),l[39](null),h=!1,q(c)}}}function Pe(l){let e;function t(s,u){if(s[9]==="text")return Xe;if(s[9]==="password")return We;if(s[9]==="email")return Ve}let o=t(l),i=o&&o(l);return{c(){i&&i.c(),e=ee()},m(s,u){i&&i.m(s,u),w(s,e,u)},p(s,u){o===(o=t(s))&&i?i.p(s,u):(i&&i.d(1),i=o&&o(s),i&&(i.c(),i.m(e.parentNode,e)))},i:U,o:U,d(s){s&&k(e),i&&i.d(s)}}}function $(l){let e,t,o,i;const s=[Re,Qe],u=[];function h(c,f){return c[16]?0:1}return e=h(l),t=u[e]=s[e](l),{c(){t.c(),o=ee()},m(c,f){u[e].m(c,f),w(c,o,f),i=!0},p(c,f){let a=e;e=h(c),e===a?u[e].p(c,f):(O(),T(u[a],1,1,()=>{u[a]=null}),I(),t=u[e],t?t.p(c,f):(t=u[e]=s[e](c),t.c()),v(t,1),t.m(o.parentNode,o))},i(c){i||(v(t),i=!0)},o(c){T(t),i=!1},d(c){c&&k(o),u[e].d(c)}}}function Qe(l){let e,t,o,i,s;return t=new De({}),{c(){e=z("button"),J(t.$$.fragment),r(e,"aria-label","Copy"),r(e,"aria-roledescription","Copy text"),r(e,"class","svelte-1f354aw")},m(u,h){w(u,e,h),P(t,e,null),o=!0,i||(s=d(e,"click",l[17]),i=!0)},p:U,i(u){o||(v(t.$$.fragment,u),o=!0)},o(u){T(t.$$.fragment,u),o=!1},d(u){u&&k(e),M(t),i=!1,s()}}}function Re(l){let e,t,o,i;return t=new ze({}),{c(){e=z("button"),J(t.$$.fragment),r(e,"aria-label","Copied"),r(e,"aria-roledescription","Text copied"),r(e,"class","svelte-1f354aw")},m(s,u){w(s,e,u),P(t,e,null),i=!0},p:U,i(s){i||(v(t.$$.fragment,s),s&&(o||Le(()=>{o=Ue(e,Ne,{duration:300}),o.start()})),i=!0)},o(s){T(t.$$.fragment,s),i=!1},d(s){s&&k(e),M(t)}}}function Ve(l){let e,t,o;return{c(){e=z("input"),r(e,"data-testid","textbox"),r(e,"type","email"),r(e,"class","scroll-hide svelte-1f354aw"),r(e,"placeholder",l[2]),e.disabled=l[5],e.autofocus=l[12],r(e,"maxlength",l[14]),r(e,"autocomplete","email")},m(i,s){w(i,e,s),E(e,l[0]),l[37](e),l[12]&&e.focus(),t||(o=[d(e,"input",l[36]),d(e,"keypress",l[19]),d(e,"blur",l[28]),d(e,"select",l[18]),d(e,"focus",l[29])],t=!0)},p(i,s){s[0]&4&&r(e,"placeholder",i[2]),s[0]&32&&(e.disabled=i[5]),s[0]&4096&&(e.autofocus=i[12]),s[0]&16384&&r(e,"maxlength",i[14]),s[0]&1&&e.value!==i[0]&&E(e,i[0])},d(i){i&&k(e),l[37](null),t=!1,q(o)}}}function We(l){let e,t,o;return{c(){e=z("input"),r(e,"data-testid","password"),r(e,"type","password"),r(e,"class","scroll-hide svelte-1f354aw"),r(e,"placeholder",l[2]),e.disabled=l[5],e.autofocus=l[12],r(e,"maxlength",l[14]),r(e,"autocomplete","")},m(i,s){w(i,e,s),E(e,l[0]),l[35](e),l[12]&&e.focus(),t||(o=[d(e,"input",l[34]),d(e,"keypress",l[19]),d(e,"blur",l[26]),d(e,"select",l[18]),d(e,"focus",l[27])],t=!0)},p(i,s){s[0]&4&&r(e,"placeholder",i[2]),s[0]&32&&(e.disabled=i[5]),s[0]&4096&&(e.autofocus=i[12]),s[0]&16384&&r(e,"maxlength",i[14]),s[0]&1&&e.value!==i[0]&&E(e,i[0])},d(i){i&&k(e),l[35](null),t=!1,q(o)}}}function Xe(l){let e,t,o,i,s;return{c(){e=z("input"),r(e,"data-testid","textbox"),r(e,"type","text"),r(e,"class","scroll-hide svelte-1f354aw"),r(e,"dir",t=l[11]?"rtl":"ltr"),r(e,"placeholder",l[2]),e.disabled=l[5],e.autofocus=l[12],r(e,"maxlength",l[14]),r(e,"style",o=l[13]?"text-align: "+l[13]:"")},m(u,h){w(u,e,h),E(e,l[0]),l[33](e),l[12]&&e.focus(),i||(s=[d(e,"input",l[32]),d(e,"keypress",l[19]),d(e,"blur",l[24]),d(e,"select",l[18]),d(e,"focus",l[25])],i=!0)},p(u,h){h[0]&2048&&t!==(t=u[11]?"rtl":"ltr")&&r(e,"dir",t),h[0]&4&&r(e,"placeholder",u[2]),h[0]&32&&(e.disabled=u[5]),h[0]&4096&&(e.autofocus=u[12]),h[0]&16384&&r(e,"maxlength",u[14]),h[0]&8192&&o!==(o=u[13]?"text-align: "+u[13]:"")&&r(e,"style",o),h[0]&1&&e.value!==u[0]&&E(e,u[0])},d(u){u&&k(e),l[33](null),i=!1,q(s)}}}function Ze(l){let e,t,o,i,s,u;t=new Ee({props:{show_label:l[6],info:l[4],$$slots:{default:[Me]},$$scope:{ctx:l}}});const h=[Pe,Oe],c=[];function f(a,_){return a[1]===1&&a[8]===1?0:1}return i=f(l),s=c[i]=h[i](l),{c(){e=z("label"),J(t.$$.fragment),o=te(),s.c(),r(e,"class","svelte-1f354aw"),Z(e,"container",l[7])},m(a,_){w(a,e,_),P(t,e,null),Se(e,o),c[i].m(e,null),u=!0},p(a,_){const g={};_[0]&64&&(g.show_label=a[6]),_[0]&16&&(g.info=a[4]),_[0]&8|_[1]&262144&&(g.$$scope={dirty:_,ctx:a}),t.$set(g);let D=i;i=f(a),i===D?c[i].p(a,_):(O(),T(c[D],1,1,()=>{c[D]=null}),I(),s=c[i],s?s.p(a,_):(s=c[i]=h[i](a),s.c()),v(s,1),s.m(e,null)),(!u||_[0]&128)&&Z(e,"container",a[7])},i(a){u||(v(t.$$.fragment,a),v(s),u=!0)},o(a){T(t.$$.fragment,a),T(s),u=!1},d(a){a&&k(e),M(t),c[i].d()}}}function xe(l,e,t){let{value:o=""}=e,{value_is_output:i=!1}=e,{lines:s=1}=e,{placeholder:u="Type here..."}=e,{label:h}=e,{info:c=void 0}=e,{disabled:f=!1}=e,{show_label:a=!0}=e,{container:_=!0}=e,{max_lines:g}=e,{type:D="text"}=e,{show_copy_button:Q=!1}=e,{rtl:R=!1}=e,{autofocus:Y=!1}=e,{text_align:V=void 0}=e,{autoscroll:K=!0}=e,{max_length:W=void 0}=e,b,j=!1,A,F,X=0,G=!1;const N=Je();Ge(()=>{F=b&&b.offsetHeight+b.scrollTop>b.scrollHeight-100});const le=()=>{F&&K&&!G&&b.scrollTo(0,b.scrollHeight)};function ne(){N("change",o),i||N("input")}Ie(()=>{Y&&b.focus(),F&&K&&le(),t(22,i=!1)});async function ie(){"clipboard"in navigator&&(await navigator.clipboard.writeText(o),se())}function se(){t(16,j=!0),A&&clearTimeout(A),A=setTimeout(()=>{t(16,j=!1)},1e3)}function oe(n){const p=n.target,C=p.value,y=[p.selectionStart,p.selectionEnd];N("select",{value:C.substring(...y),index:y})}async function ue(n){await x(),(n.key==="Enter"&&n.shiftKey&&s>1||n.key==="Enter"&&!n.shiftKey&&s===1&&g>=1)&&(n.preventDefault(),N("submit"))}function ae(n){const p=n.target,C=p.scrollTop;C<X&&(G=!0),X=C;const y=p.scrollHeight-p.clientHeight;C>=y&&(G=!1)}async function L(n){if(await x(),s===g)return;let p=g===void 0?!1:g===void 0?21*11:21*(g+1),C=21*(s+1);const y=n.target;y.style.height="1px";let B;p&&y.scrollHeight>p?B=p:y.scrollHeight<C?B=C:B=y.scrollHeight,y.style.height=`${B}px`}function re(n,p){if(s!==g&&(n.style.overflowY="scroll",n.addEventListener("input",L),!!p.trim()))return L({target:n}),{destroy:()=>n.removeEventListener("input",L)}}function fe(n){H.call(this,l,n)}function _e(n){H.call(this,l,n)}function ce(n){H.call(this,l,n)}function he(n){H.call(this,l,n)}function de(n){H.call(this,l,n)}function be(n){H.call(this,l,n)}function me(n){H.call(this,l,n)}function ge(n){H.call(this,l,n)}function pe(){o=this.value,t(0,o)}function ke(n){S[n?"unshift":"push"](()=>{b=n,t(15,b)})}function we(){o=this.value,t(0,o)}function ye(n){S[n?"unshift":"push"](()=>{b=n,t(15,b)})}function ve(){o=this.value,t(0,o)}function Te(n){S[n?"unshift":"push"](()=>{b=n,t(15,b)})}function Ce(){o=this.value,t(0,o)}function He(n){S[n?"unshift":"push"](()=>{b=n,t(15,b)})}return l.$$set=n=>{"value"in n&&t(0,o=n.value),"value_is_output"in n&&t(22,i=n.value_is_output),"lines"in n&&t(1,s=n.lines),"placeholder"in n&&t(2,u=n.placeholder),"label"in n&&t(3,h=n.label),"info"in n&&t(4,c=n.info),"disabled"in n&&t(5,f=n.disabled),"show_label"in n&&t(6,a=n.show_label),"container"in n&&t(7,_=n.container),"max_lines"in n&&t(8,g=n.max_lines),"type"in n&&t(9,D=n.type),"show_copy_button"in n&&t(10,Q=n.show_copy_button),"rtl"in n&&t(11,R=n.rtl),"autofocus"in n&&t(12,Y=n.autofocus),"text_align"in n&&t(13,V=n.text_align),"autoscroll"in n&&t(23,K=n.autoscroll),"max_length"in n&&t(14,W=n.max_length)},l.$$.update=()=>{l.$$.dirty[0]&1&&o===null&&t(0,o=""),l.$$.dirty[0]&33027&&b&&s!==g&&L({target:b}),l.$$.dirty[0]&1&&ne()},[o,s,u,h,c,f,a,_,g,D,Q,R,Y,V,W,b,j,ie,oe,ue,ae,re,i,K,fe,_e,ce,he,de,be,me,ge,pe,ke,we,ye,ve,Te,Ce,He]}class st extends Be{constructor(e){super(),qe(this,e,xe,Ze,je,{value:0,value_is_output:22,lines:1,placeholder:2,label:3,info:4,disabled:5,show_label:6,container:7,max_lines:8,type:9,show_copy_button:10,rtl:11,autofocus:12,text_align:13,autoscroll:23,max_length:14},null,[-1,-1])}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),m()}get value_is_output(){return this.$$.ctx[22]}set value_is_output(e){this.$$set({value_is_output:e}),m()}get lines(){return this.$$.ctx[1]}set lines(e){this.$$set({lines:e}),m()}get placeholder(){return this.$$.ctx[2]}set placeholder(e){this.$$set({placeholder:e}),m()}get label(){return this.$$.ctx[3]}set label(e){this.$$set({label:e}),m()}get info(){return this.$$.ctx[4]}set info(e){this.$$set({info:e}),m()}get disabled(){return this.$$.ctx[5]}set disabled(e){this.$$set({disabled:e}),m()}get show_label(){return this.$$.ctx[6]}set show_label(e){this.$$set({show_label:e}),m()}get container(){return this.$$.ctx[7]}set container(e){this.$$set({container:e}),m()}get max_lines(){return this.$$.ctx[8]}set max_lines(e){this.$$set({max_lines:e}),m()}get type(){return this.$$.ctx[9]}set type(e){this.$$set({type:e}),m()}get show_copy_button(){return this.$$.ctx[10]}set show_copy_button(e){this.$$set({show_copy_button:e}),m()}get rtl(){return this.$$.ctx[11]}set rtl(e){this.$$set({rtl:e}),m()}get autofocus(){return this.$$.ctx[12]}set autofocus(e){this.$$set({autofocus:e}),m()}get text_align(){return this.$$.ctx[13]}set text_align(e){this.$$set({text_align:e}),m()}get autoscroll(){return this.$$.ctx[23]}set autoscroll(e){this.$$set({autoscroll:e}),m()}get max_length(){return this.$$.ctx[14]}set max_length(e){this.$$set({max_length:e}),m()}}export{st as T};
//# sourceMappingURL=Textbox-BxQ_qaNA.js.map
