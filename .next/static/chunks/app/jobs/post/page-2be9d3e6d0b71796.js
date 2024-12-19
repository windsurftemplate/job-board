(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[630],{1883:(e,r,o)=>{Promise.resolve().then(o.bind(o,4040))},4040:(e,r,o)=>{"use strict";o.r(r),o.d(r,{default:()=>a});var t=o(5155),s=o(2615),l=o(6046),n=o(2115);function a(){var e;let{data:r}=(0,s.useSession)(),o=(0,l.useRouter)(),[a,i]=(0,n.useState)(!1),[d,u]=(0,n.useState)("");if(!r||(null===(e=r.user)||void 0===e?void 0:e.role)!=="employer")return o.push("/auth/signin"),null;let c=async e=>{e.preventDefault(),i(!0),u("");let r=new FormData(e.currentTarget),t={title:r.get("title"),company:r.get("company"),location:r.get("location"),type:r.get("type"),category:r.get("category"),salary:r.get("salary"),description:r.get("description"),requirements:r.get("requirements")};try{let e=await fetch("/api/jobs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){let r=await e.json();throw Error(r.message)}o.push("/jobs")}catch(e){u(e instanceof Error?e.message:"Failed to post job")}finally{i(!1)}};return(0,t.jsxs)("div",{className:"max-w-2xl mx-auto py-8",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-8",children:"Post a New Job"}),(0,t.jsxs)("form",{onSubmit:c,className:"space-y-6",children:[d&&(0,t.jsx)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",children:d}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Job Title"}),(0,t.jsx)("input",{type:"text",name:"title",id:"title",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium text-gray-700",children:"Company Name"}),(0,t.jsx)("input",{type:"text",name:"company",id:"company",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"location",className:"block text-sm font-medium text-gray-700",children:"Location"}),(0,t.jsx)("input",{type:"text",name:"location",id:"location",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"type",className:"block text-sm font-medium text-gray-700",children:"Job Type"}),(0,t.jsxs)("select",{name:"type",id:"type",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",children:[(0,t.jsx)("option",{value:"full-time",children:"Full-time"}),(0,t.jsx)("option",{value:"part-time",children:"Part-time"}),(0,t.jsx)("option",{value:"contract",children:"Contract"}),(0,t.jsx)("option",{value:"internship",children:"Internship"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"category",className:"block text-sm font-medium text-gray-700",children:"Category"}),(0,t.jsxs)("select",{name:"category",id:"category",required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",children:[(0,t.jsx)("option",{value:"technology",children:"Technology"}),(0,t.jsx)("option",{value:"marketing",children:"Marketing"}),(0,t.jsx)("option",{value:"sales",children:"Sales"}),(0,t.jsx)("option",{value:"design",children:"Design"}),(0,t.jsx)("option",{value:"engineering",children:"Engineering"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"salary",className:"block text-sm font-medium text-gray-700",children:"Salary Range"}),(0,t.jsx)("input",{type:"text",name:"salary",id:"salary",required:!0,placeholder:"e.g. $50,000 - $70,000",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Job Description"}),(0,t.jsx)("textarea",{name:"description",id:"description",rows:4,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"requirements",className:"block text-sm font-medium text-gray-700",children:"Requirements"}),(0,t.jsx)("textarea",{name:"requirements",id:"requirements",rows:4,required:!0,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{type:"submit",disabled:a,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:a?"Posting...":"Post Job"})})]})]})}},6046:(e,r,o)=>{"use strict";var t=o(6658);o.o(t,"useRouter")&&o.d(r,{useRouter:function(){return t.useRouter}}),o.o(t,"useSearchParams")&&o.d(r,{useSearchParams:function(){return t.useSearchParams}})}},e=>{var r=r=>e(e.s=r);e.O(0,[615,441,517,358],()=>r(1883)),_N_E=e.O()}]);