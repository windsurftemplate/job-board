(()=>{var e={};e.id=680,e.ids=[680],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},90756:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>n.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=t(70260),a=t(28203),i=t(25155),n=t.n(i),l=t(67292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(r,o);let d=["",{children:["auth",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,68846)),"/home/keel/CascadeProjects/job-board/app/auth/signin/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,19611)),"/home/keel/CascadeProjects/job-board/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}],c=["/home/keel/CascadeProjects/job-board/app/auth/signin/page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/auth/signin/page",pathname:"/auth/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},79587:(e,r,t)=>{Promise.resolve().then(t.bind(t,68846))},45243:(e,r,t)=>{Promise.resolve().then(t.bind(t,55970))},55970:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var s=t(45512),a=t(90993),i=t(79334),n=t(58009),l=t(28531),o=t.n(l),d=t(87021),c=t(25409),u=t(53261),p=t(75339),m=t(97643),x=t(77784),f=t(5747);function h(){let e=(0,i.useRouter)(),[r,t]=(0,n.useState)(""),[l,h]=(0,n.useState)(!1),v=async r=>{r.preventDefault(),h(!0),t("");let s=new FormData(r.currentTarget),i=s.get("email"),n=s.get("password");try{let r=await (0,a.signIn)("credentials",{email:i,password:n,redirect:!1});if(r?.error){t("Invalid credentials");return}e.push("/"),e.refresh()}catch(e){t("An error occurred. Please try again.")}finally{h(!1)}};return(0,s.jsxs)(f.P.div,{className:"container relative min-h-[calc(100vh-4rem)] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,s.jsxs)("div",{className:"relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-zinc-900"}),(0,s.jsxs)("div",{className:"relative z-20 flex items-center text-lg font-medium",children:[(0,s.jsx)(x.F.logo,{className:"h-8 w-8 mr-2"}),"Job Board"]}),(0,s.jsx)("div",{className:"relative z-20 mt-auto",children:(0,s.jsxs)("blockquote",{className:"space-y-2",children:[(0,s.jsx)("p",{className:"text-lg",children:'"Finding the right talent has never been easier. The platform\'s intuitive design and powerful features make recruitment a breeze."'}),(0,s.jsx)("footer",{className:"text-sm",children:"David Chen, HR Director"})]})})]}),(0,s.jsx)("div",{className:"lg:p-8",children:(0,s.jsx)("div",{className:"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]",children:(0,s.jsx)(f.P.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:(0,s.jsxs)(m.Zp,{children:[(0,s.jsxs)(m.aR,{children:[(0,s.jsx)(m.ZB,{children:"Welcome back"}),(0,s.jsx)(m.BT,{children:"Sign in to your account to continue"})]}),(0,s.jsx)(m.Wu,{children:(0,s.jsxs)("form",{onSubmit:v,className:"space-y-4",children:[r&&(0,s.jsx)(p.Fc,{variant:"destructive",children:(0,s.jsx)(p.TN,{children:r})}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(u.J,{htmlFor:"email",children:"Email"}),(0,s.jsx)(c.p,{id:"email",name:"email",type:"email",required:!0,placeholder:"name@example.com"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(u.J,{htmlFor:"password",children:"Password"}),(0,s.jsx)(c.p,{id:"password",name:"password",type:"password",required:!0,placeholder:"••••••••"})]}),(0,s.jsxs)(d.$,{type:"submit",className:"w-full",disabled:l,children:[l&&(0,s.jsx)(x.F.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),l?"Signing in...":"Sign in"]})]})}),(0,s.jsx)(m.wL,{children:(0,s.jsxs)("div",{className:"text-sm text-muted-foreground",children:["Don't have an account?"," ",(0,s.jsx)(o(),{href:"/auth/signup",className:"text-primary underline-offset-4 hover:underline",children:"Sign up"})]})})]})})})})]})}},77784:(e,r,t)=>{"use strict";t.d(r,{F:()=>o});var s=t(45512),a=t(41680);let i=(0,a.A)("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);var n=t(32848);let l=(0,a.A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),o={sun:i,moon:n.A,logo:({...e})=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,s.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,s.jsx)("circle",{cx:"12",cy:"12",r:"9"}),(0,s.jsx)("line",{x1:"9",y1:"10",x2:"15",y2:"10"}),(0,s.jsx)("line",{x1:"9",y1:"14",x2:"15",y2:"14"})]}),spinner:l}},75339:(e,r,t)=>{"use strict";t.d(r,{Fc:()=>o,TN:()=>d});var s=t(45512),a=t(58009),i=t(21643),n=t(59462);let l=(0,i.F)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),o=a.forwardRef(({className:e,variant:r,...t},a)=>(0,s.jsx)("div",{ref:a,role:"alert",className:(0,n.cn)(l({variant:r}),e),...t}));o.displayName="Alert",a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("h5",{ref:t,className:(0,n.cn)("mb-1 font-medium leading-none tracking-tight",e),...r})).displayName="AlertTitle";let d=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,n.cn)("text-sm [&_p]:leading-relaxed",e),...r}));d.displayName="AlertDescription"},97643:(e,r,t)=>{"use strict";t.d(r,{BT:()=>d,Wu:()=>c,ZB:()=>o,Zp:()=>n,aR:()=>l,wL:()=>u});var s=t(45512),a=t(58009),i=t(59462);let n=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));n.displayName="Card";let l=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...r}));l.displayName="CardHeader";let o=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));o.displayName="CardTitle";let d=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",e),...r}));d.displayName="CardDescription";let c=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent";let u=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",e),...r}));u.displayName="CardFooter"},25409:(e,r,t)=>{"use strict";t.d(r,{p:()=>n});var s=t(45512),a=t(58009),i=t(59462);let n=a.forwardRef(({className:e,type:r,...t},a)=>(0,s.jsx)("input",{type:r,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));n.displayName="Input"},53261:(e,r,t)=>{"use strict";t.d(r,{J:()=>c});var s=t(45512),a=t(58009),i=t(30830),n=a.forwardRef((e,r)=>(0,s.jsx)(i.sG.label,{...e,ref:r,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));n.displayName="Label";var l=t(21643),o=t(59462);let d=(0,l.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef(({className:e,...r},t)=>(0,s.jsx)(n,{ref:t,className:(0,o.cn)(d(),e),...r}));c.displayName=n.displayName},79334:(e,r,t)=>{"use strict";var s=t(58686);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}}),t.o(s,"useSearchParams")&&t.d(r,{useSearchParams:function(){return s.useSearchParams}})},68846:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/keel/CascadeProjects/job-board/app/auth/signin/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/keel/CascadeProjects/job-board/app/auth/signin/page.tsx","default")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,571,519],()=>t(90756));module.exports=s})();