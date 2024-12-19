(()=>{var e={};e.id=630,e.ids=[630],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},80136:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d});var o=t(70260),s=t(28203),n=t(25155),a=t.n(n),l=t(67292),i={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);t.d(r,i);let d=["",{children:["jobs",{children:["post",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,73056)),"/home/keel/CascadeProjects/job-board/app/jobs/post/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,19611)),"/home/keel/CascadeProjects/job-board/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"]}],u=["/home/keel/CascadeProjects/job-board/app/jobs/post/page.tsx"],c={require:t,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/jobs/post/page",pathname:"/jobs/post",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},74973:(e,r,t)=>{Promise.resolve().then(t.bind(t,73056))},9885:(e,r,t)=>{Promise.resolve().then(t.bind(t,23084))},23084:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var o=t(45512),s=t(90993),n=t(79334),a=t(58009);function l(){let{data:e}=(0,s.useSession)(),r=(0,n.useRouter)(),[t,l]=(0,a.useState)(!1),[i,d]=(0,a.useState)("");if(!e||e.user?.role!=="employer")return r.push("/auth/signin"),null;let u=async e=>{e.preventDefault(),l(!0),d("");let t=new FormData(e.currentTarget),o={title:t.get("title"),company:t.get("company"),location:t.get("location"),type:t.get("type"),category:t.get("category"),salary:t.get("salary"),description:t.get("description"),requirements:t.get("requirements")};try{let e=await fetch("/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!e.ok){let r=await e.json();throw Error(r.message)}r.push("/jobs")}catch(e){d(e instanceof Error?e.message:"Failed to post job")}finally{l(!1)}};return(0,o.jsxs)("div",{className:"max-w-2xl mx-auto py-8",children:[(0,o.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Post a New Job"}),(0,o.jsxs)("form",{onSubmit:u,className:"space-y-6",children:[i&&(0,o.jsx)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",children:i}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Job Title"}),(0,o.jsx)("input",{type:"text",name:"title",id:"title",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700",children:"Company Name"}),(0,o.jsx)("input",{type:"text",name:"company",id:"company",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"location",className:"block text-sm font-medium text-gray-700",children:"Location"}),(0,o.jsx)("input",{type:"text",name:"location",id:"location",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"type",className:"block text-sm font-medium text-gray-700",children:"Job Type"}),(0,o.jsxs)("select",{name:"type",id:"type",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",children:[(0,o.jsx)("option",{value:"full-time",children:"Full-time"}),(0,o.jsx)("option",{value:"part-time",children:"Part-time"}),(0,o.jsx)("option",{value:"contract",children:"Contract"}),(0,o.jsx)("option",{value:"internship",children:"Internship"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),(0,o.jsxs)("select",{name:"category",id:"category",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",children:[(0,o.jsx)("option",{value:"technology",children:"Technology"}),(0,o.jsx)("option",{value:"marketing",children:"Marketing"}),(0,o.jsx)("option",{value:"sales",children:"Sales"}),(0,o.jsx)("option",{value:"design",children:"Design"}),(0,o.jsx)("option",{value:"engineering",children:"Engineering"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"salary",className:"block text-sm font-medium text-gray-700",children:"Salary Range"}),(0,o.jsx)("input",{type:"text",name:"salary",id:"salary",required:!0,placeholder:"e.g. $50,000 - $70,000",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Job Description"}),(0,o.jsx)("textarea",{name:"description",id:"description",rows:4,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"requirements",className:"block text-sm font-medium text-gray-700",children:"Requirements"}),(0,o.jsx)("textarea",{name:"requirements",id:"requirements",rows:4,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"submit",disabled:t,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:t?"Posting...":"Post Job"})})]})]})}},79334:(e,r,t)=>{"use strict";var o=t(58686);t.o(o,"useRouter")&&t.d(r,{useRouter:function(){return o.useRouter}}),t.o(o,"useSearchParams")&&t.d(r,{useSearchParams:function(){return o.useSearchParams}})},73056:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});let o=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/keel/CascadeProjects/job-board/app/jobs/post/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/keel/CascadeProjects/job-board/app/jobs/post/page.tsx","default")}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[638,571,519],()=>t(80136));module.exports=o})();