(()=>{var e={};e.id=531,e.ids=[531],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},9664:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var t=a(70260),s=a(28203),n=a(25155),o=a.n(n),i=a(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(r,l);let d=["",{children:["jobs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,89307)),"/home/keel/CascadeProjects/job-board/app/jobs/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,19611)),"/home/keel/CascadeProjects/job-board/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/keel/CascadeProjects/job-board/app/jobs/page.tsx"],u={require:a,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/jobs/page",pathname:"/jobs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},13736:(e,r,a)=>{Promise.resolve().then(a.bind(a,89307))},584:(e,r,a)=>{Promise.resolve().then(a.bind(a,78735))},78735:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>b});var t=a(45512),s=a(79334),n=a(58009),o=a(69635),i=a(87021),l=a(97643),d=a(21643),c=a(59462);let u=(0,d.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function p({className:e,variant:r,...a}){return(0,t.jsx)("div",{className:(0,c.cn)(u({variant:r}),e),...a})}var m=a(48857),x=a(31393);let h=(0,a(41680).A)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);var f=a(82901),g=a(75339),v=a(5747);let y={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1}}},j={hidden:{y:20,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}};function b(){(0,s.useSearchParams)();let[e,r]=(0,n.useState)([]),[a,d]=(0,n.useState)(!0),[u,b]=(0,n.useState)("");return(0,t.jsxs)("div",{className:"container py-8 space-y-8",children:[(0,t.jsx)(v.P.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:(0,t.jsx)(o.default,{})}),u&&(0,t.jsx)(v.P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.3},children:(0,t.jsx)(g.Fc,{variant:"destructive",children:(0,t.jsx)(g.TN,{children:u})})}),a?(0,t.jsx)("div",{className:"grid gap-6",children:[1,2,3].map(e=>(0,t.jsx)(l.Zp,{className:"p-6",children:(0,t.jsxs)("div",{className:"space-y-4 animate-pulse",children:[(0,t.jsx)("div",{className:"h-4 bg-muted rounded w-3/4"}),(0,t.jsx)("div",{className:"h-4 bg-muted rounded w-1/2"}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsx)("div",{className:"h-4 bg-muted rounded"}),(0,t.jsx)("div",{className:"h-4 bg-muted rounded"})]})]})},e))}):0===e.length?(0,t.jsx)(v.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"text-center py-8 text-muted-foreground",children:"No jobs found matching your criteria"}):(0,t.jsx)(v.P.div,{variants:y,initial:"hidden",animate:"show",className:"grid gap-6",children:e.map((e,r)=>(0,t.jsx)(v.P.div,{variants:j,custom:r,children:(0,t.jsxs)(l.Zp,{className:(0,c.cn)("p-6 group transition-all duration-200 hover:scale-[1.02]","hover:shadow-lg hover:shadow-primary/5 hover:border-primary/50"),children:[(0,t.jsx)("div",{className:"flex flex-col sm:flex-row justify-between gap-4",children:(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("h2",{className:"text-xl font-semibold group-hover:text-primary transition-colors",children:e.title}),(0,t.jsx)(p,{variant:"secondary",className:"h-fit",children:e.type})]}),(0,t.jsx)("p",{className:"text-muted-foreground",children:e.company})]})}),(0,t.jsxs)("div",{className:"mt-4 grid sm:grid-cols-4 gap-4 text-sm text-muted-foreground",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(m.A,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:e.location})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(x.A,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:e.salary})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(h,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"capitalize",children:e.category})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(f.A,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:e.type})]})]}),(0,t.jsx)("div",{className:"mt-6 flex justify-end",children:(0,t.jsxs)(i.$,{variant:"outline",className:"group-hover:border-primary/50 transition-all duration-200",children:["View Details",(0,t.jsx)("span",{className:"ml-2 group-hover:translate-x-1 transition-transform duration-200",children:"→"})]})})]})},e.id))})]})}},69635:(e,r,a)=>{"use strict";a.d(r,{default:()=>u});var t=a(45512),s=a(58009),n=a(79334);let o=(0,a(41680).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var i=a(48857),l=a(82901),d=a(31393),c=a(59462);function u(){let e=(0,n.useRouter)(),[r,a]=(0,s.useState)({keyword:"",location:"",category:"",salary:""});return(0,t.jsx)("form",{onSubmit:a=>{a.preventDefault();let t=new URLSearchParams;Object.entries(r).forEach(([e,r])=>{r&&t.append(e,r)}),e.push(`/jobs?${t.toString()}`)},className:"w-full max-w-4xl mx-auto px-4",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-card p-4 rounded-xl shadow-lg border",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(o,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,t.jsx)("input",{type:"text",placeholder:"Job title or keyword",className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.keyword,onChange:e=>a({...r,keyword:e.target.value})})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(i.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,t.jsx)("input",{type:"text",placeholder:"Location",className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.location,onChange:e=>a({...r,location:e.target.value})})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(l.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,t.jsxs)("select",{className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background appearance-none","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.category,onChange:e=>a({...r,category:e.target.value}),children:[(0,t.jsx)("option",{value:"",children:"All Categories"}),(0,t.jsx)("option",{value:"technology",children:"Technology"}),(0,t.jsx)("option",{value:"marketing",children:"Marketing"}),(0,t.jsx)("option",{value:"sales",children:"Sales"}),(0,t.jsx)("option",{value:"design",children:"Design"}),(0,t.jsx)("option",{value:"finance",children:"Finance"}),(0,t.jsx)("option",{value:"healthcare",children:"Healthcare"}),(0,t.jsx)("option",{value:"education",children:"Education"})]})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(d.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),(0,t.jsxs)("select",{className:(0,c.cn)("w-full pl-10 pr-4 py-2 rounded-md border bg-background appearance-none","focus:outline-none focus:ring-2 focus:ring-primary","placeholder:text-muted-foreground"),value:r.salary,onChange:e=>a({...r,salary:e.target.value}),children:[(0,t.jsx)("option",{value:"",children:"Salary Range"}),(0,t.jsx)("option",{value:"0-50000",children:"$0 - $50,000"}),(0,t.jsx)("option",{value:"50000-100000",children:"$50,000 - $100,000"}),(0,t.jsx)("option",{value:"100000-150000",children:"$100,000 - $150,000"}),(0,t.jsx)("option",{value:"150000+",children:"$150,000+"})]})]}),(0,t.jsx)("button",{type:"submit",className:(0,c.cn)("w-full md:col-span-2 lg:col-span-4 py-2 px-4 rounded-md","bg-primary text-primary-foreground font-medium","hover:bg-primary/90 transition-colors","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"),children:"Search Jobs"})]})})}},75339:(e,r,a)=>{"use strict";a.d(r,{Fc:()=>l,TN:()=>d});var t=a(45512),s=a(58009),n=a(21643),o=a(59462);let i=(0,n.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),l=s.forwardRef(({className:e,variant:r,...a},s)=>(0,t.jsx)("div",{ref:s,role:"alert",className:(0,o.cn)(i({variant:r}),e),...a}));l.displayName="Alert",s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("h5",{ref:a,className:(0,o.cn)("mb-1 font-medium leading-none tracking-tight",e),...r})).displayName="AlertTitle";let d=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("div",{ref:a,className:(0,o.cn)("text-sm [&_p]:leading-relaxed",e),...r}));d.displayName="AlertDescription"},97643:(e,r,a)=>{"use strict";a.d(r,{BT:()=>d,Wu:()=>c,ZB:()=>l,Zp:()=>o,aR:()=>i,wL:()=>u});var t=a(45512),s=a(58009),n=a(59462);let o=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("div",{ref:a,className:(0,n.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));o.displayName="Card";let i=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("div",{ref:a,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...r}));i.displayName="CardHeader";let l=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("h3",{ref:a,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));l.displayName="CardTitle";let d=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("p",{ref:a,className:(0,n.cn)("text-sm text-muted-foreground",e),...r}));d.displayName="CardDescription";let c=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("div",{ref:a,className:(0,n.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent";let u=s.forwardRef(({className:e,...r},a)=>(0,t.jsx)("div",{ref:a,className:(0,n.cn)("flex items-center p-6 pt-0",e),...r}));u.displayName="CardFooter"},82901:(e,r,a)=>{"use strict";a.d(r,{A:()=>t});let t=(0,a(41680).A)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},31393:(e,r,a)=>{"use strict";a.d(r,{A:()=>t});let t=(0,a(41680).A)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]])},48857:(e,r,a)=>{"use strict";a.d(r,{A:()=>t});let t=(0,a(41680).A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},79334:(e,r,a)=>{"use strict";var t=a(58686);a.o(t,"useRouter")&&a.d(r,{useRouter:function(){return t.useRouter}}),a.o(t,"useSearchParams")&&a.d(r,{useSearchParams:function(){return t.useSearchParams}})},89307:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>t});let t=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/keel/CascadeProjects/job-board/app/jobs/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/keel/CascadeProjects/job-board/app/jobs/page.tsx","default")}};var r=require("../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[638,571,519],()=>a(9664));module.exports=t})();