(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{2160:(e,r,t)=>{Promise.resolve().then(t.bind(t,8563))},8563:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var a=t(5155),n=t(6046),s=t(2115),l=t(4615),i=t(4085),o=t(5007),d=t(1027),c=t(9602);let u=(0,d.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function p(e){let{className:r,variant:t,...n}=e;return(0,a.jsx)("div",{className:(0,c.cn)(u({variant:t}),r),...n})}var f=t(7223),m=t(4807);let h=(0,t(7401).A)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);var g=t(4839),v=t(9677),x=t(1934);let y={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},j={hidden:{y:20,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}};function b(){let e=(0,n.useSearchParams)(),[r,t]=(0,s.useState)([]),[d,u]=(0,s.useState)(!0),[b,N]=(0,s.useState)("");return(0,s.useEffect)(()=>{(async()=>{try{u(!0);let r=e.toString(),a=await fetch("/api/jobs".concat(r?"?".concat(r):""));if(!a.ok)throw Error("Failed to fetch jobs");let n=await a.json();t(n)}catch(e){N("Failed to load jobs"),console.error("Fetch jobs error:",e)}finally{u(!1)}})()},[e]),(0,a.jsxs)("div",{className:"container py-8 space-y-8",children:[(0,a.jsx)(x.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,a.jsx)(l.default,{})}),b&&(0,a.jsx)(x.P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:(0,a.jsx)(v.Fc,{variant:"destructive",children:(0,a.jsx)(v.TN,{children:b})})}),d?(0,a.jsx)("div",{className:"grid gap-6",children:[1,2,3].map(e=>(0,a.jsx)(o.Zp,{className:"p-6",children:(0,a.jsxs)("div",{className:"space-y-4 animate-pulse",children:[(0,a.jsx)("div",{className:"h-4 bg-muted rounded w-3/4"}),(0,a.jsx)("div",{className:"h-4 bg-muted rounded w-1/2"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)("div",{className:"h-4 bg-muted rounded"}),(0,a.jsx)("div",{className:"h-4 bg-muted rounded"})]})]})},e))}):0===r.length?(0,a.jsx)(x.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"text-center py-8 text-muted-foreground",children:"No jobs found matching your criteria"}):(0,a.jsx)(x.P.div,{variants:y,initial:"hidden",animate:"show",className:"grid gap-6",children:r.map((e,r)=>(0,a.jsx)(x.P.div,{variants:j,custom:r,children:(0,a.jsxs)(o.Zp,{className:(0,c.cn)("p-6 group transition-all duration-200 hover:scale-[1.02]","hover:shadow-lg hover:shadow-primary/5 hover:border-primary/50"),children:[(0,a.jsx)("div",{className:"flex flex-col sm:flex-row justify-between gap-4",children:(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold group-hover:text-primary transition-colors",children:e.title}),(0,a.jsx)(p,{variant:"secondary",className:"h-fit",children:e.type})]}),(0,a.jsx)("p",{className:"text-muted-foreground",children:e.company})]})}),(0,a.jsxs)("div",{className:"mt-4 grid sm:grid-cols-4 gap-4 text-sm text-muted-foreground",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(f.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:e.location})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(m.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:e.salary})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(h,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"capitalize",children:e.category})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(g.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:e.type})]})]}),(0,a.jsx)("div",{className:"mt-6 flex justify-end",children:(0,a.jsxs)(i.$,{variant:"outline",className:"group-hover:border-primary/50 transition-all duration-200",children:["View Details",(0,a.jsx)("span",{className:"ml-2 group-hover:translate-x-1 transition-transform duration-200",children:"→"})]})})]})},e.id))})]})}},4615:(e,r,t)=>{"use strict";t.d(r,{default:()=>u});var a=t(5155),n=t(2115),s=t(6046);let l=(0,t(7401).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var i=t(7223),o=t(4839),d=t(4807),c=t(9602);function u(){let e=(0,s.useRouter)(),[r,t]=(0,n.useState)({keyword:"",location:"",category:"",salary:""});return(0,a.jsx)("form",{onSubmit:t=>{t.preventDefault();let a=new URLSearchParams;Object.entries(r).forEach(e=>{let[r,t]=e;t&&a.append(r,t)}),e.push("/jobs?".concat(a.toString()))},className:"w-full max-w-4xl mx-auto px-4",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-card p-4 rounded-xl shadow-lg border",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(l,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,a.jsx)("input",{type:"text",placeholder:"Job title or keyword",className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.keyword,onChange:e=>t({...r,keyword:e.target.value})})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(i.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,a.jsx)("input",{type:"text",placeholder:"Location",className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.location,onChange:e=>t({...r,location:e.target.value})})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(o.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,a.jsxs)("select",{className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background appearance-none","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.category,onChange:e=>t({...r,category:e.target.value}),children:[(0,a.jsx)("option",{value:"",children:"All Categories"}),(0,a.jsx)("option",{value:"technology",children:"Technology"}),(0,a.jsx)("option",{value:"marketing",children:"Marketing"}),(0,a.jsx)("option",{value:"sales",children:"Sales"}),(0,a.jsx)("option",{value:"design",children:"Design"}),(0,a.jsx)("option",{value:"finance",children:"Finance"}),(0,a.jsx)("option",{value:"healthcare",children:"Healthcare"}),(0,a.jsx)("option",{value:"education",children:"Education"})]})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(d.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,a.jsxs)("select",{className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background appearance-none","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.salary,onChange:e=>t({...r,salary:e.target.value}),children:[(0,a.jsx)("option",{value:"",children:"Salary Range"}),(0,a.jsx)("option",{value:"0-50000",children:"$0 - $50,000"}),(0,a.jsx)("option",{value:"50000-100000",children:"$50,000 - $100,000"}),(0,a.jsx)("option",{value:"100000-150000",children:"$100,000 - $150,000"}),(0,a.jsx)("option",{value:"150000+",children:"$150,000+"})]})]}),(0,a.jsx)("button",{type:"submit",className:(0,c.cn)("w-full md:col-span-2 lg:col-span-4 py-2 px-4 rounded-md","bg-primary text-primary-foreground font-medium","hover:bg-primary/90 transition-colors","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"),children:"Search Jobs"})]})})}},9677:(e,r,t)=>{"use strict";t.d(r,{Fc:()=>o,TN:()=>d});var a=t(5155),n=t(2115),s=t(1027),l=t(9602);let i=(0,s.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),o=n.forwardRef((e,r)=>{let{className:t,variant:n,...s}=e;return(0,a.jsx)("div",{ref:r,role:"alert",className:(0,l.cn)(i({variant:n}),t),...s})});o.displayName="Alert",n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("h5",{ref:r,className:(0,l.cn)("mb-1 font-medium leading-none tracking-tight",t),...n})}).displayName="AlertTitle";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("text-sm [&_p]:leading-relaxed",t),...n})});d.displayName="AlertDescription"},4085:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var a=t(5155),n=t(2115),s=t(2317),l=t(1027),i=t(9602);let o=(0,l.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,r)=>{let{className:t,variant:n,size:l,asChild:d=!1,...c}=e,u=d?s.DX:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:n,size:l,className:t})),ref:r,...c})});d.displayName="Button"},5007:(e,r,t)=>{"use strict";t.d(r,{BT:()=>d,Wu:()=>c,ZB:()=>o,Zp:()=>l,aR:()=>i,wL:()=>u});var a=t(5155),n=t(2115),s=t(9602);let l=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...n})});l.displayName="Card";let i=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...n})});i.displayName="CardHeader";let o=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...n})});o.displayName="CardTitle";let d=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...n})});c.displayName="CardContent";let u=n.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...n})});u.displayName="CardFooter"},9602:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var a=t(3463),n=t(9795);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,a.$)(r))}},4839:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},4807:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},7223:(e,r,t)=>{"use strict";t.d(r,{A:()=>a});let a=(0,t(7401).A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},6046:(e,r,t)=>{"use strict";var a=t(6658);t.o(a,"useRouter")&&t.d(r,{useRouter:function(){return a.useRouter}}),t.o(a,"useSearchParams")&&t.d(r,{useSearchParams:function(){return a.useSearchParams}})},8068:(e,r,t)=>{"use strict";t.d(r,{s:()=>l,t:()=>s});var a=t(2115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function s(...e){return r=>{let t=!1,a=e.map(e=>{let a=n(e,r);return t||"function"!=typeof a||(t=!0),a});if(t)return()=>{for(let r=0;r<a.length;r++){let t=a[r];"function"==typeof t?t():n(e[r],null)}}}}function l(...e){return a.useCallback(s(...e),e)}},2317:(e,r,t)=>{"use strict";t.d(r,{DX:()=>l});var a=t(2115),n=t(8068),s=t(5155),l=a.forwardRef((e,r)=>{let{children:t,...n}=e,l=a.Children.toArray(t),o=l.find(d);if(o){let e=o.props.children,t=l.map(r=>r!==o?r:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,s.jsx)(i,{...n,ref:r,children:a.isValidElement(e)?a.cloneElement(e,void 0,t):null})}return(0,s.jsx)(i,{...n,ref:r,children:t})});l.displayName="Slot";var i=a.forwardRef((e,r)=>{let{children:t,...s}=e;if(a.isValidElement(t)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=r&&"isReactWarning"in r&&r.isReactWarning;return t?e.ref:(t=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(t);return a.cloneElement(t,{...function(e,r){let t={...r};for(let a in r){let n=e[a],s=r[a];/^on[A-Z]/.test(a)?n&&s?t[a]=(...e)=>{s(...e),n(...e)}:n&&(t[a]=n):"style"===a?t[a]={...n,...s}:"className"===a&&(t[a]=[n,s].filter(Boolean).join(" "))}return{...e,...t}}(s,t.props),ref:r?(0,n.t)(r,e):e})}return a.Children.count(t)>1?a.Children.only(null):null});i.displayName="SlotClone";var o=({children:e})=>(0,s.jsx)(s.Fragment,{children:e});function d(e){return a.isValidElement(e)&&e.type===o}},1027:(e,r,t)=>{"use strict";t.d(r,{F:()=>l});var a=t(3463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,s=a.$,l=(e,r)=>t=>{var a;if((null==r?void 0:r.variants)==null)return s(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:l,defaultVariants:i}=r,o=Object.keys(l).map(e=>{let r=null==t?void 0:t[e],a=null==i?void 0:i[e];if(null===r)return null;let s=n(r)||n(a);return l[e][s]}),d=t&&Object.entries(t).reduce((e,r)=>{let[t,a]=r;return void 0===a||(e[t]=a),e},{});return s(e,o,null==r?void 0:null===(a=r.compoundVariants)||void 0===a?void 0:a.reduce((e,r)=>{let{class:t,className:a,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...d}[r]):({...i,...d})[r]===t})?[...e,t,a]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},e=>{var r=r=>e(e.s=r);e.O(0,[525,934,441,517,358],()=>r(2160)),_N_E=e.O()}]);