import{B as u}from"./Button-BIUaXfcG.js";import"./Index-DB1XLvMK.js";import"./index-BQPjLIsY.js";import"./svelte/svelte.js";const{SvelteComponent:f,create_component:d,create_slot:g,destroy_component:b,flush:o,get_all_dirty_from_scope:h,get_slot_changes:$,init:v,mount_component:p,safe_not_equal:k,transition_in:a,transition_out:m,update_slot_base:w}=window.__gradio__svelte__internal;function B(n){let e;const l=n[3].default,t=g(l,n,n[4],null);return{c(){t&&t.c()},m(s,i){t&&t.m(s,i),e=!0},p(s,i){t&&t.p&&(!e||i&16)&&w(t,l,s,s[4],e?$(l,s[4],i,null):h(s[4]),null)},i(s){e||(a(t,s),e=!0)},o(s){m(t,s),e=!1},d(s){t&&t.d(s)}}}function q(n){let e,l;return e=new u({props:{elem_id:n[0],elem_classes:n[1],visible:n[2],explicit_call:!0,$$slots:{default:[B]},$$scope:{ctx:n}}}),{c(){d(e.$$.fragment)},m(t,s){p(e,t,s),l=!0},p(t,[s]){const i={};s&1&&(i.elem_id=t[0]),s&2&&(i.elem_classes=t[1]),s&4&&(i.visible=t[2]),s&16&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){l||(a(e.$$.fragment,t),l=!0)},o(t){m(e.$$.fragment,t),l=!1},d(t){b(e,t)}}}function C(n,e,l){let{$$slots:t={},$$scope:s}=e,{elem_id:i}=e,{elem_classes:c}=e,{visible:r=!0}=e;return n.$$set=_=>{"elem_id"in _&&l(0,i=_.elem_id),"elem_classes"in _&&l(1,c=_.elem_classes),"visible"in _&&l(2,r=_.visible),"$$scope"in _&&l(4,s=_.$$scope)},[i,c,r,t,s]}class A extends f{constructor(e){super(),v(this,e,C,q,k,{elem_id:0,elem_classes:1,visible:2})}get elem_id(){return this.$$.ctx[0]}set elem_id(e){this.$$set({elem_id:e}),o()}get elem_classes(){return this.$$.ctx[1]}set elem_classes(e){this.$$set({elem_classes:e}),o()}get visible(){return this.$$.ctx[2]}set visible(e){this.$$set({visible:e}),o()}}export{A as default};
//# sourceMappingURL=Index-DlGXsSlG.js.map
