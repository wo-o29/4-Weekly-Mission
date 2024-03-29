"use strict";exports.id=917,exports.ids=[917],exports.modules={4196:(e,r,i)=>{i.d(r,{Z:()=>U});var t=i(997),n=i(6689);let o=e=>{let r=new Date,i=new Date(e),t=Math.floor((r.getTime()-i.getTime())/6e4),n=Math.floor(t/60),o=Math.floor(n/24),a=Math.floor(o/30),d=Math.floor(a/12);if(t<2)return"1 minute ago";if(t<=59)return`${t} minutes ago`;if(n<2)return"1 hour ago";if(n<=23)return`${n} hours ago`;if(o<2)return"1 day ago";if(o<=30)return`${o} days ago`;if(a<2)return"1 month ago";else if(a<=11)return`${a} months ago`;else if(d<2)return"1 year ago";else return`${d} years ago`},a=e=>{let r={year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate()};return`${r.year}. ${r.month}. ${r.date}`};var d=i(7518),c=i.n(d),s=i(5675),l=i.n(s);let m=c().div.withConfig({componentId:"sc-f66a0496-0"})(["display:grid;width:66.25rem;grid-template-columns:repeat(3,21.25rem);gap:1.56rem 1.25rem;@media screen and (max-width:1124px){width:44rem;grid-template-columns:repeat(2,21.25rem);gap:1.56rem 1.5rem;}@media screen and (max-width:767px){width:20.3rem;grid-template-columns:repeat(1,20.3rem);gap:1.25rem 0;}"]),f=c().a.withConfig({componentId:"sc-f66a0496-1"})(["width:21.25rem;height:auto;box-shadow:0px 5px 25px 0px rgba(0,0,0,0.08);border-radius:0.9375rem;position:relative;@media screen and (max-width:767px){width:20rem;}"]),h=c().div.withConfig({componentId:"sc-f66a0496-2"})(["text-align:center;padding:2.56rem 0 2.19rem;width:66.25rem;height:21.6rem;font-size:1rem;@media screen and (max-width:1124px){width:44rem;}@media screen and (max-width:767px){width:20.3125rem;padding:0rem 5rem;font-size:0.875rem;line-height:6.25rem;}"]),g=c()(l()).withConfig({componentId:"sc-f66a0496-3"})(["position:absolute;top:0.94rem;right:0.94rem;z-index:1;"]),p=c().figure.withConfig({componentId:"sc-f66a0496-4"})(["height:15.85913rem;border-radius:0.9375rem 0.9375rem 0rem 0rem;overflow:hidden;background:",";"],({$imgSrc:e,$icon:r})=>e?"#ffffff":`#dddfff url(${r}) no-repeat center`),x=c().img.withConfig({componentId:"sc-f66a0496-5"})(["width:100%;height:100%;background-color:#ccd5e3;&:hover{transform:scale(1.3);transition:0.7s;}display:",";"],({src:e})=>e?"block":"none"),u=c().div.withConfig({componentId:"sc-f66a0496-6"})(["padding:0.94rem 1.25rem;height:auto;border-radius:0rem 0rem 0.9375rem 0.9375rem;",":hover &{transition:0.5s;background-color:var(--Linkbrary-bg);}"],f),w=c().div.withConfig({componentId:"sc-f66a0496-7"})(["display:flex;justify-content:space-between;position:relative;"]),b=c().p.withConfig({componentId:"sc-f66a0496-8"})(["color:#666666;font-size:0.8125rem;"]),y=c().ul.withConfig({componentId:"sc-f66a0496-9"})(["position:absolute;box-shadow:0px 2px 8px 0px rgba(51,50,54,0.1);top:1rem;right:-5rem;background:#fff;z-index:99;text-align:center;display:flex;flex-direction:column;gap:0.125rem;@media screen and (max-width:767px){right:0rem;}"]),j=c().li.withConfig({componentId:"sc-f66a0496-10"})(["font-size:0.875rem;width:5.8rem;padding:0.44rem 0.75rem;&:hover{background-color:#e7effb;color:#6d6afe;}"]),v=c().p.withConfig({componentId:"sc-f66a0496-11"})(["font-size:1rem;line-height:1.5rem;margin:0.62rem 0;height:3.0625rem;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;"]),k=c().time.withConfig({componentId:"sc-f66a0496-12"})(["color:#333333;font-size:0.875rem;height:1.1875rem;"]),C=function({handleKebabClick:e,selectCardId:r,linkList:i,option:n,handleModalAction:d}){let c=(e,r,i)=>{d&&(i.preventDefault(),d(e,r))},s=(r,i)=>{e&&(r.preventDefault(),e(i))};return i.length?t.jsx(m,{children:i.map(e=>{let{id:i,createdAt:d,created_at:l,imageSource:m,image_source:h,description:C,url:I}=e,L=m??h??"",T=d??l??"",$=new Date(T),E=o(T),S=a($);return(0,t.jsxs)(f,{href:I,children:[n&&t.jsx(g,{width:34,height:34,src:"/icon/star.svg",alt:"별 아이콘"}),t.jsx(p,{$imgSrc:L,$icon:"/icon/default-card.svg",children:t.jsx(x,{width:340,height:253,src:L,alt:"카드 이미지"})}),(0,t.jsxs)(u,{children:[n?(0,t.jsxs)(w,{children:[t.jsx(b,{children:E}),t.jsx("img",{onClick:e=>s(e,i),className:"content__kebab",src:"/icon/kebab.svg",alt:"케밥 아이콘"}),r===i&&(0,t.jsxs)(y,{children:[t.jsx(j,{onClick:e=>c("링크 삭제",I,e),children:"삭제하기"}),t.jsx(j,{onClick:e=>c("폴더에 추가",I,e),children:"폴더에 추가"})]})]}):t.jsx(b,{children:E}),t.jsx(v,{children:C}),t.jsx(k,{children:S})]})]},i)})}):t.jsx(m,{children:t.jsx(h,{children:"저장된 링크가 없습니다"})})},I=c().div.withConfig({componentId:"sc-6138195e-0"})(["display:flex;justify-content:space-between;"]),L=c().ul.withConfig({componentId:"sc-6138195e-1"})(["display:flex;flex-wrap:wrap;gap:0.5rem;"]),T=c().li.withConfig({componentId:"sc-6138195e-2"})(["padding:0.6rem 0.75rem 0.5rem;border-radius:0.3125rem;border:1px solid var(--Linkbrary-primary-color);cursor:pointer;&:hover{background-color:var(--Linkbrary-primary-color);color:#ffffff;}background-color:",";color:",";"],({$isSelect:e})=>e?"#6d6afe":"#ffffff",({$isSelect:e})=>e?"#ffffff":"#000000"),$=c().div.withConfig({componentId:"sc-6138195e-3"})(["display:flex;align-items:center;gap:0.25rem;height:2rem;width:5rem;cursor:pointer;@media screen and (max-width:767px){display:none;}"]),E=c().span.withConfig({componentId:"sc-6138195e-4"})(["color:var(--Linkbrary-primary-color);letter-spacing:-0.01875rem;font-weight:500;line-height:2rem;width:5rem;"]),S=c()(l()).withConfig({componentId:"sc-6138195e-5"})(["width:1rem;height:1rem;"]),z=c().div.withConfig({componentId:"sc-6138195e-6"})(["display:flex;justify-content:space-between;margin:1.5rem 0;@media screen and (max-width:767px){flex-direction:column;gap:0.75rem;margin:1.75rem 0 1.25rem;}"]),_=c().p.withConfig({componentId:"sc-6138195e-7"})(["font-size:1.5rem;font-weight:600;letter-spacing:-0.0125rem;"]),D=c().ul.withConfig({componentId:"sc-6138195e-8"})(["display:flex;gap:0.75rem;align-items:center;"]),A=c()(l()).withConfig({componentId:"sc-6138195e-9"})(["width:1.125rem;height:1.125rem;"]),N=c().span.withConfig({componentId:"sc-6138195e-10"})(["color:var(--Linkbrary-gray60);font-size:0.875rem;font-weight:600;margin-left:0.25rem;"]),R=[{img:"/icon/category-share.svg",actionText:"폴더 공유",text:"공유"},{img:"/icon/category-modify.svg",actionText:"폴더 이름 변경",text:"수정"},{img:"/icon/category-delete.svg",actionText:"폴더 삭제",text:"삭제"}],q=function({categoryList:e,selectCategory:r,allLinkLoad:i,handleSelectCategory:n,handleModalAction:o}){if(!e||!r||!i||!n||!o)return null;let a="전체"!==r.name;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(I,{children:[t.jsx(L,{children:e.map(e=>{let o=r.id===e.id;return t.jsx(T,{$isSelect:o,onClick:()=>0===e.id?i():n(e.id,e.name),children:e.name},e.id)})}),(0,t.jsxs)($,{onClick:()=>o("폴더 추가"),children:[t.jsx(E,{children:"폴더 추가"}),t.jsx(S,{width:16,height:16,src:"/icon/category-add.svg",alt:"폴더 추가 아이콘"})]})]}),(0,t.jsxs)(z,{children:[t.jsx(_,{children:r.name}),a&&t.jsx(D,{children:R.map((e,i)=>(0,t.jsxs)("li",{onClick:()=>{let i=`${window.location.origin}/shared/${r.id}`;o(e.actionText,r.name,i)},children:[t.jsx(A,{width:18,height:18,src:e.img,alt:`${e.text} 이미지`}),t.jsx(N,{children:e.text})]},i))})]})]})},M=c().section.withConfig({componentId:"sc-265fa39d-0"})(["width:66.25rem;margin:2.5rem auto;@media screen and (max-width:1124px){width:44rem;}@media screen and (max-width:767px){width:20.3rem;}"]),F=c().label.withConfig({componentId:"sc-265fa39d-1"})(["position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip-path:polygon(0 0,0 0,0 0);"]),P=c().input.withConfig({componentId:"sc-265fa39d-2"})(["width:66.25rem;padding:0.9375rem 1rem;border-radius:0.625rem;background-color:#f5f5f5;border:none;outline:none;margin-bottom:2.5rem;@media screen and (max-width:1124px){width:44rem;}@media screen and (max-width:767px){width:20.3rem;margin-bottom:2rem;}"]),G=c().div.withConfig({componentId:"sc-265fa39d-3"})(["font-size:2rem;font-weight:600;color:var(--Linkbrary-gray60);margin:0 0 2.5rem;"]),O=c().span.withConfig({componentId:"sc-265fa39d-4"})(["color:var(--Linkbrary-gray100);"]),U=function({categoryList:e,selectCategory:r,allLinkLoad:i,handleSelectCategory:o,handleKebabClick:a,selectCardId:d,linkList:c,option:s,handleModalAction:l,setLinkList:m}){let[f,h]=(0,n.useState)(""),g=(0,n.useRef)([]);(0,n.useEffect)(()=>{!f&&c&&(g.current=c)},[c]);let p=e=>{h(e.target.value)},x=e=>{if(!f){m(g.current);return}let r=e.toLocaleLowerCase();m(g.current?.filter(e=>e.title?.toLowerCase().includes(r)||e.description?.toLowerCase().includes(r)))};return(0,n.useEffect)(()=>{let e=setTimeout(()=>{x(f)},500);return()=>clearTimeout(e)},[f]),(0,t.jsxs)(M,{children:[(0,t.jsxs)("form",{children:[t.jsx(F,{htmlFor:"content--search",children:"링크 검색"}),t.jsx(P,{value:f,onChange:e=>p(e),id:"content--search",type:"search",placeholder:"\uD83D\uDD0D  링크를 검색해 보세요."})]}),f&&(0,t.jsxs)(G,{children:[t.jsx(O,{children:f}),"로 검색한 결과입니다."]}),s&&t.jsx(q,{categoryList:e,selectCategory:r,allLinkLoad:i,handleSelectCategory:o,handleModalAction:l}),t.jsx(C,{handleKebabClick:a,selectCardId:d,linkList:c,option:s,handleModalAction:l})]})}},839:(e,r,i)=>{i.d(r,{Z:()=>x});var t=i(997),n=i(5675),o=i.n(n),a=i(7518),d=i.n(a),c=i(1664),s=i.n(c);let l=d().footer.withConfig({componentId:"sc-2a3e1423-0"})(["background-color:var(--footerBgColor);display:flex;justify-content:space-between;padding:2rem 6.5rem 4rem;margin-top:3.75rem;height:10rem;font-size:1rem;@media screen and (max-width:767px){margin-top:2.5rem;padding:2rem 2rem 4rem;position:relative;}"]),m=d()(s()).withConfig({componentId:"sc-2a3e1423-1"})(["color:var(--footerText1);@media screen and (max-width:767px){position:absolute;bottom:2rem;}"]),f=d().ul.withConfig({componentId:"sc-2a3e1423-2"})(["display:flex;gap:1.88rem;"]),h=d()(s()).withConfig({componentId:"sc-2a3e1423-3"})(["color:var(--footerText2);"]),g=d().ul.withConfig({componentId:"sc-2a3e1423-4"})(["display:flex;gap:0.75rem;"]),p=[{url:"https://facebook.com/?locale=ko_KR",icon:"/icon/footer-facebook.svg",text:"페이스북"},{url:"https://twitter.com/?lang=ko",icon:"/icon/footer-twitter.svg",text:"트위터"},{url:"https://www.youtube.com",icon:"/icon/footer-youtube.svg",text:"유튜브"},{url:"https://www.instagram.com",icon:"/icon/footer-instargram.svg",text:"인스타그램"}],x=function(){return(0,t.jsxs)(l,{children:[t.jsx(m,{href:"/",children:"\xa9codeit - 2023"}),(0,t.jsxs)(f,{children:[t.jsx("li",{children:t.jsx(h,{href:"/privacy",children:"Privacy Policy"})}),t.jsx("li",{children:t.jsx(h,{href:"/faq",children:"FAQ"})})]}),t.jsx(g,{children:p.map((e,r)=>{let{url:i,icon:n,text:a}=e;return t.jsx("li",{children:t.jsx("a",{href:i,target:"_blank",rel:"noreferrer",children:t.jsx(o(),{width:20,height:20,src:n,alt:`${a} 아이콘`})})},r)})})]})}},9450:(e,r,i)=>{i.d(r,{Z:()=>w});var t=i(997),n=i(6689),o=i(1664),a=i.n(o),d=i(828),c=i(7518),s=i.n(c),l=i(5675),m=i.n(l);let f=s().div.withConfig({componentId:"sc-26dc6d5e-0"})(["width:100%;max-width:1920px;min-width:375px;background-color:var(--Linkbrary-bg);position:",";top:0;left:0;z-index:999;padding:2rem 0;@media screen and (max-width:767px){padding:1.125rem 0;}"],({$isSticky:e})=>e?"sticky":"static"),h=s().div.withConfig({componentId:"sc-26dc6d5e-1"})(["display:flex;justify-content:space-between;align-items:center;margin:0 12.5rem;@media screen and (max-width:1124px){margin:0 auto;width:47rem;}@media screen and (max-width:767px){width:auto;margin:0 2rem;}"]),g=s().div.withConfig({componentId:"sc-26dc6d5e-2"})(["display:flex;gap:0.375rem;align-items:center;"]),p=s()(m()).withConfig({componentId:"sc-26dc6d5e-3"})(["border-radius:50%;width:1.75rem;height:1.75rem;"]),x=s().span.withConfig({componentId:"sc-26dc6d5e-4"})(["color:var(--Linkbrary-gray100);font-size:0.875rem;display:inline-block;"]),u=s()(a()).withConfig({componentId:"sc-26dc6d5e-5"})(["width:8rem;text-align:center;padding:1rem 1.25rem;background:var(--button);font-size:1.125rem;border-radius:0.5rem;color:var(--Grey-Light,#f5f5f5);cursor:pointer;@media screen and (max-width:767px){padding:1rem 0.62rem;font-size:0.875rem;width:5rem;}"]),w=function({isSticky:e=!0}){let[r,i]=(0,n.useState)({loginStatus:!1,email:"",profileImg:""});return(0,n.useEffect)(()=>{let e=new AbortController,{signal:r}=e;return(async()=>{try{let e=await fetch(d.v.HEADER_USER_INFO,{method:"GET",signal:r});if(!e.ok)throw Error("API 요청 에러 발생");let t=await e.json();i({loginStatus:!0,email:t.data[0].email,profileImg:t.data[0].image_source})}catch(e){console.error(e)}})(),()=>e.abort()},[]),t.jsx(f,{$isSticky:e,children:(0,t.jsxs)(h,{children:[t.jsx(a(),{href:"/",children:t.jsx("img",{src:"/icon/header-logo.svg",alt:"헤더 로고 이미지"})}),r.loginStatus?(0,t.jsxs)(g,{children:[t.jsx(p,{width:28,height:28,src:r.profileImg,alt:"헤더 유저 이미지"}),t.jsx(x,{children:r.email})]}):t.jsx(u,{href:"/signin",children:"로그인"})]})})}},2828:(e,r,i)=>{i.r(r),i.d(r,{default:()=>o});var t=i(997);let n=(0,i(7518).createGlobalStyle)([":root{margin:0;padding:0;box-sizing:border-box;--button:linear-gradient(91deg,#6d6afe 0.12%,#6ae3fe 101.84%);--mainText:linear-gradient(91deg,#6d6afe 17.28%,#ff9f9f 74.98%);--text1:linear-gradient(96deg,#fe8a8a 1.72%,#a4ceff 74.97%);--text2:linear-gradient(277deg,#6fbaff 59.22%,#ffd88b 93.66%);--text3:linear-gradient(99deg,#6d7ccd 19.76%,rgba(82,136,133,0.22) 52.69%);--text4:linear-gradient(271deg,#fe578f -9.84%,#68e8f9 107.18%);--mobileText1:linear-gradient(96deg,#fe8a8a 1.73%,#a4ceff 33.89%);--mobileText2:linear-gradient(277deg,#6fbaff 44.56%,#ffd88b 60.93%);--mobileText3:linear-gradient(99deg,#6d7ccd 53.86%,rgba(82,136,133,0.22) 99.4%);--mobileText4:linear-gradient(271deg,#fe578f 27.48%,#68e8f9 59.2%);--gra-purpleblue-to-skyblue:linear-gradient(91deg,#6d6afe 0.12%,#6ae3fe 101.84%);--Linkbrary-gray100:#373740;--mainBgColor:#f0f6ff;--subText:#6b6b6b;--Grey-Light:#f5f5f5;--gray20:#ccd5e3;--Linkbrary-bg:#f0f6ff;--footerBgColor:#111322;--footerText1:#676767;--footerText2:#cfcfcf;--purpleBorder:#6d6afe;--Linkbrary-primary-color:#6d6afe;--Linkbrary-gray60:#9fa6b2;--Linkbrary-gray10:#e7effb;--Linkbrary-red:#ff5b56;--Stroke-light:#dee2e6;--black:#000;--Linkbrary-white:#fff;font-family:'Pretendard';color:#000000;}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:middle;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul,li{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}a{text-decoration:none;color:#000000;}.label--hidden{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip-path:polygon(0 0,0 0,0 0);}html{font-size:16px;}button{outline:none;border:none;}"]);function o({Component:e,pageProps:r}){return(0,t.jsxs)(t.Fragment,{children:[t.jsx(n,{}),t.jsx(e,{...r})]})}},6100:(e,r,i)=>{i.r(r),i.d(r,{default:()=>o});var t=i(997),n=i(6859);function o(){return(0,t.jsxs)(n.Html,{lang:"ko",children:[t.jsx(n.Head,{}),(0,t.jsxs)("body",{children:[t.jsx(n.Main,{}),t.jsx(n.NextScript,{})]})]})}},828:(e,r,i)=>{i.d(r,{v:()=>n});let t=process.env.NEXT_PUBLIC_BASE_URL,n={SIGNIN:`${t}/api/sign-in`,SIGNUP:`${t}/api/sign-up`,CHECK_EMAIL:`${t}/api/check-email`,HEADER_USER_INFO:`${t}/api/users/1`,SAMPLE_FOLDER:`${t}/api/sample/folder`,USER_FOLDER:`${t}/api/users/11/folders`,ALL_LINK:`${t}/api/users/11/links`,CATEGORY_LINK:`${t}/api/users/11/links?folderId=`}},2018:(e,r,i)=>{i.d(r,{Z:()=>n});let t=async(e,r,i)=>await fetch(e,{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),n={get:async e=>await t(e,"GET"),post:async(e,r)=>await t(e,"POST",r),put:async(e,r)=>await t(e,"PUT",r),delete:async e=>await t(e,"DELETE")}}};