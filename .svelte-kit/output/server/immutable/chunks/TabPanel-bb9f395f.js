import{c as g,a as _,s as E,o as I,g as y,d as p}from"./index-7b7abb97.js";/* empty css                                               */import{w as m}from"./index-5fb08a48.js";let S=1;function C(){return`svelte-tabs-${S++}`}const x={};function B(s,n,$){const e=s.indexOf(n);s.splice(e,1),$.update(l=>l===n?s[e]||s[s.length-1]:l)}const k=g((s,n,$,e)=>{let l,{initialSelectedIndex:d=0}=n;const i=[],o=[],b=m({}),c=m({}),r=m(null);l=_(r,t=>t);const f=m(null);function u(t,a,v){t.push(a),v.update(P=>P||a),I(()=>B(t,a,v))}function T(t){const a=i.indexOf(t);r.set(t),f.set(o[a])}return E(x,{registerTab(t){u(i,t,r)},registerTabElement(t){},registerPanel(t){u(o,t,f)},selectTab:T,selectedTab:r,selectedPanel:f,controls:b,labeledBy:c}),n.initialSelectedIndex===void 0&&$.initialSelectedIndex&&d!==void 0&&$.initialSelectedIndex(d),l(),`<div class="svelte-tabs">${e.default?e.default({}):""}</div>`}),h={code:".svelte-tabs__tab.svelte-1fbofsd{border:none;border-bottom:2px solid transparent;color:#000000;cursor:pointer;list-style:none;display:inline-block;padding:0.5em 0.75em}.svelte-tabs__tab.svelte-1fbofsd:focus{outline:thin dotted}.svelte-tabs__selected.svelte-1fbofsd{border-bottom:2px solid #4F81E5;color:#4F81E5}",map:null},D=g((s,n,$,e)=>{let l,d,i,o,b;const c={id:C()},{registerTab:r,registerTabElement:f,selectTab:u,selectedTab:T,controls:t}=y(x);d=_(T,v=>l=v),o=_(t,v=>i=v);let a;return r(c),s.css.add(h),a=l===c,d(),o(),`<li role="tab"${p("id",c.id,0)}${p("aria-controls",i[c.id],0)}${p("aria-selected",a,0)}${p("tabindex",a?0:-1,0)} class="${["svelte-tabs__tab svelte-1fbofsd",a?"svelte-tabs__selected":""].join(" ").trim()}"${p("this",b,0)}>${e.default?e.default({}):""}</li>`}),w={code:".svelte-tabs__tab-list.svelte-12yby2a{border-bottom:1px solid #CCCCCC;margin:0;padding:0}",map:null},L=g((s,n,$,e)=>(s.css.add(w),`<ul role="tablist" class="svelte-tabs__tab-list svelte-12yby2a">${e.default?e.default({}):""}</ul>`)),A={code:".svelte-tabs__tab-panel.svelte-epfyet{margin-top:0.5em}",map:null},U=g((s,n,$,e)=>{let l,d,i,o;const b={id:C()},{registerPanel:c,selectedPanel:r,labeledBy:f}=y(x);return o=_(r,u=>i=u),d=_(f,u=>l=u),c(b),s.css.add(A),d(),o(),`<div${p("id",b.id,0)}${p("aria-labelledby",l[b.id],0)} class="svelte-tabs__tab-panel svelte-epfyet" role="tabpanel">${i===b?`${e.default?e.default({}):""}`:""}</div>`});export{k as T,L as a,D as b,U as c};
