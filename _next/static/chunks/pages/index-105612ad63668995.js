(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(1296)}])},2525:function(e,r,a){"use strict";a.d(r,{Z:function(){return c}});var t=a(5893),n=a(9554),i=a.n(n),s=a(7294),o=a(6005);function d(e){let{value:r}=e,[a,n]=(0,s.useState)(""),[o,d]=(0,s.useState)("");return(0,s.useEffect)(()=>{""===a?n(r):(d("rollout"),setTimeout(()=>{n(r),d("rollin")},500))},[r,n,d]),(0,t.jsxs)("div",{className:"jsx-5d92f3f395e4384e container",children:[(0,t.jsx)("div",{className:"jsx-5d92f3f395e4384e "+(o||""),children:a},a),(0,t.jsx)(i(),{id:"5d92f3f395e4384e",children:".container.jsx-5d92f3f395e4384e{overflow:hidden}.before.jsx-5d92f3f395e4384e{-webkit-transform:translatey(-4rem);-moz-transform:translatey(-4rem);-ms-transform:translatey(-4rem);-o-transform:translatey(-4rem);transform:translatey(-4rem)}.rollin.jsx-5d92f3f395e4384e{-webkit-animation:.5s slidein;-moz-animation:.5s slidein;-o-animation:.5s slidein;animation:.5s slidein}.rollout.jsx-5d92f3f395e4384e{-webkit-animation:.5s slideout;-moz-animation:.5s slideout;-o-animation:.5s slideout;animation:.5s slideout}@-webkit-keyframes slidein{from{-webkit-transform:translatey(-4rem);transform:translatey(-4rem)}to{-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes slidein{from{-moz-transform:translatey(-4rem);transform:translatey(-4rem)}to{-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes slidein{from{-o-transform:translatey(-4rem);transform:translatey(-4rem)}to{-o-transform:translatey(0);transform:translatey(0)}}@keyframes slidein{from{-webkit-transform:translatey(-4rem);-moz-transform:translatey(-4rem);-o-transform:translatey(-4rem);transform:translatey(-4rem)}to{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes slideout{from{-webkit-transform:translatey(0);transform:translatey(0)}to{-webkit-transform:translatey(4rem);transform:translatey(4rem)}}@-moz-keyframes slideout{from{-moz-transform:translatey(0);transform:translatey(0)}to{-moz-transform:translatey(4rem);transform:translatey(4rem)}}@-o-keyframes slideout{from{-o-transform:translatey(0);transform:translatey(0)}to{-o-transform:translatey(4rem);transform:translatey(4rem)}}@keyframes slideout{from{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}to{-webkit-transform:translatey(4rem);-moz-transform:translatey(4rem);-o-transform:translatey(4rem);transform:translatey(4rem)}}"})]})}function c(){let e=(0,s.useContext)(o.R);return setTimeout(()=>{e.refresh()},3e4),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"jsx-cd7abe5ff0c9275a",children:"Current Budgets"}),(0,t.jsx)("div",{className:"jsx-cd7abe5ff0c9275a scrollable",children:(0,t.jsxs)("table",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("thead",{className:"jsx-cd7abe5ff0c9275a",children:(0,t.jsxs)("tr",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a",children:"Category"}),(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a divider"}),(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a",children:"Remaining"})]})}),(0,t.jsx)("tbody",{className:"jsx-cd7abe5ff0c9275a",children:Object.entries(e.budgets).map(e=>{let[r,a]=e,n=a.budgetRemaining>0?"":"red",i=Math.abs(a.budgetRemaining).toFixed(2),s=a.budgetRemaining>0?"$".concat(i):"-($".concat(i,")");return(0,t.jsxs)("tr",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a",children:r}),(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a divider"}),(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a "+(n||""),children:(0,t.jsx)(d,{value:s})})]},r)})})]})}),(0,t.jsx)(i(),{id:"cd7abe5ff0c9275a",children:"h1.jsx-cd7abe5ff0c9275a{color:white;font-size:1.5rem}.scrollable.jsx-cd7abe5ff0c9275a{overflow-y:scroll;padding:0 1rem}table.jsx-cd7abe5ff0c9275a{color:white;font-size:1.3rem;border-spacing:0 1rem}.red.jsx-cd7abe5ff0c9275a{color:#ff8e8e}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(1),tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(3){background-color:#fff2;padding:.3rem 1rem}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(1){-webkit-border-radius:1rem 0 0 1rem;-moz-border-radius:1rem 0 0 1rem;border-radius:1rem 0 0 1rem}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(3){-webkit-border-radius:0 1rem 1rem 0;-moz-border-radius:0 1rem 1rem 0;border-radius:0 1rem 1rem 0}th.jsx-cd7abe5ff0c9275a:nth-child(1){text-align:left;border-bottom:.2rem solid#fff2}td.jsx-cd7abe5ff0c9275a:nth-child(1){text-align:left}th.jsx-cd7abe5ff0c9275a:nth-child(2),td.jsx-cd7abe5ff0c9275a:nth-child(2){width:.5rem}th.jsx-cd7abe5ff0c9275a:nth-child(3){text-align:left;border-bottom:.2rem solid#fff2}td.jsx-cd7abe5ff0c9275a:nth-child(3){text-align:left}"})]})}},969:function(e,r,a){"use strict";a.d(r,{Z:function(){return o}});var t=a(5893),n=a(9554),i=a.n(n),s=a(7294);function o(e){let{name:r,disabled:a,processing:n,shadowOff:o,onClick:d}=e,c=(0,s.useCallback)(function(){!a&&d&&d()},[d,a]),l=o?"button":"button shadow";return(0,t.jsxs)(t.Fragment,{children:[a||n?(0,t.jsx)("div",{className:"jsx-131807496bc009c6 "+(l+(a?" disabled":"")||""),children:n?(0,t.jsx)("img",{src:"./tail-spin.svg",className:"jsx-131807496bc009c6"}):r}):(0,t.jsx)("button",{onClick:c,className:"jsx-131807496bc009c6 "+"".concat(l," ripple"),children:r}),(0,t.jsx)(i(),{id:"131807496bc009c6",children:".button.jsx-131807496bc009c6,.disabled-button.jsx-131807496bc009c6{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;font-family:inherit;color:white;outline:none;min-width:10rem;text-align:center;line-height:normal}.button.shadow.jsx-131807496bc009c6,.disabled-button.shadow.jsx-131807496bc009c6{-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black}.button.jsx-131807496bc009c6{background-color:#b3711c}.button.shadow.ripple.jsx-131807496bc009c6:active{-webkit-box-shadow:.2rem .2rem .3rem black;-moz-box-shadow:.2rem .2rem .3rem black;box-shadow:.2rem .2rem .3rem black}.button.disabled.jsx-131807496bc009c6{background-color:#666;color:#aaa}img.jsx-131807496bc009c6{height:2rem;margin:-.5rem}.ripple.jsx-131807496bc009c6{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:#b3711c -webkit-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -moz-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -o-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c radial-gradient(circle,transparent 1%,#925506 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-131807496bc009c6:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}},8769:function(e,r,a){"use strict";a.d(r,{Z:function(){return s}});var t=a(5893),n=a(9554),i=a.n(n);function s(e){let{small:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-56a4d91423853351"}),(0,t.jsx)(i(),{id:"56a4d91423853351",children:"div.jsx-56a4d91423853351{margin-top:2rem}"})]})}},4899:function(e,r,a){"use strict";a.d(r,{Z:function(){return s}});var t=a(5893),n=a(9554),i=a.n(n);function s(e){let{splash:r,children:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-73d4f474dd83a971 center",children:(0,t.jsxs)("div",{className:"jsx-73d4f474dd83a971 main",children:[r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"jsx-73d4f474dd83a971 head",children:[(0,t.jsx)("title",{className:"jsx-73d4f474dd83a971",children:"Lamb Family Budget"}),(0,t.jsx)("link",{rel:"icon",href:"/logo.svg",className:"jsx-73d4f474dd83a971"})]}),(0,t.jsx)("div",{className:"jsx-73d4f474dd83a971 splash-bg",children:(0,t.jsx)("div",{className:"jsx-73d4f474dd83a971 transition"})}),(0,t.jsxs)("div",{className:"jsx-73d4f474dd83a971 splash",children:[(0,t.jsx)("img",{src:"/logo_white.svg",className:"jsx-73d4f474dd83a971"}),(0,t.jsx)("h1",{className:"jsx-73d4f474dd83a971",children:"Track Your Spending"})]})]}),(0,t.jsx)("div",{className:"jsx-73d4f474dd83a971 content",children:a})]})}),(0,t.jsx)(i(),{id:"6f94b63af1ac32b3",children:'h1.jsx-73d4f474dd83a971{font-weight:lighter}.content.jsx-73d4f474dd83a971{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:200;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;overflow-y:hidden}.splash.jsx-73d4f474dd83a971{padding:5rem 0 2rem 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:white;font-weight:lighter;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:100}.splash.jsx-73d4f474dd83a971 img.jsx-73d4f474dd83a971{width:8rem}.splash-bg.jsx-73d4f474dd83a971{position:absolute;width:100%;z-index:1;background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat;padding-top:40%}.splash-bg.jsx-73d4f474dd83a971 .transition.jsx-73d4f474dd83a971{padding-top:20%;height:0;width:100%;background-image:-webkit-linear-gradient(top,#137c4c00,#137c4cff);background-image:-moz-linear-gradient(top,#137c4c00,#137c4cff);background-image:-o-linear-gradient(top,#137c4c00,#137c4cff);background-image:linear-gradient(to bottom,#137c4c00,#137c4cff)}.main.jsx-73d4f474dd83a971{max-width:50rem;width:100%;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:relative;overflow:clip;height:100%;background-color:#137c4c}.center.jsx-73d4f474dd83a971{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%}'}),(0,t.jsx)(i(),{id:"559604a6b5cd9115",children:"html,body{height:100%;background-color:#093e26;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}body>div{height:100%}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}a(7294)},9365:function(e,r,a){"use strict";a.d(r,{Z:function(){return o}});var t=a(5893),n=a(9554),i=a.n(n),s=a(7294);function o(e){let{placeholder:r,value:a,isPassword:n,onChange:o}=e,[d,c]=(0,s.useState)("");(0,s.useMemo)(()=>{c(a)},[a]);let l=(0,s.useCallback)(e=>{o?o(e.target.value):c(e.target.value)},[c]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:n?"password":"text",placeholder:r,value:d,onChange:l,className:"jsx-34eed70eb2825f87"}),(0,t.jsx)(i(),{id:"34eed70eb2825f87",children:"input.jsx-34eed70eb2825f87{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%}"})]})}},1296:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return b}});var t=a(5893),n=a(9554),i=a.n(n);a(9008);var s=a(969);a(9365);var o=a(4899),d=a(2525),c=a(8769),l=a(1163),m=a(7294);function b(){let e=(0,l.useRouter)(),r=(0,m.useCallback)(()=>{e.push("/edit_transaction")},[e]),a=(0,m.useCallback)(()=>{e.push("/edit_return")},[e]);return(0,t.jsxs)(o.Z,{splash:!0,children:[(0,t.jsx)("div",{className:"jsx-9562cf70ed893ab0 buttons",children:(0,t.jsx)(s.Z,{name:"Add New Expense",onClick:r})}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(i(),{id:"9562cf70ed893ab0",children:".buttons.jsx-9562cf70ed893ab0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:20rem;gap:2rem}"}),(0,t.jsx)("div",{className:"jsx-9562cf70ed893ab0 buttons",children:(0,t.jsx)(s.Z,{name:"Add New Return",onClick:a})})]})}},9008:function(e,r,a){a(6665)}},function(e){e.O(0,[554,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);