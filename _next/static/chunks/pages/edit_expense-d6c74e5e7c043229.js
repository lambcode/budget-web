(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{7385:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit_expense",function(){return r(5706)}])},2525:function(e,a,r){"use strict";r.d(a,{Z:function(){return l}});var t=r(5893),i=r(9554),o=r.n(i),n=r(7294),s=r(6005);function c(e){let{value:a}=e,[r,i]=(0,n.useState)(""),[s,c]=(0,n.useState)("");return(0,n.useEffect)(()=>{""===r?i(a):(c("rollout"),setTimeout(()=>{i(a),c("rollin")},500))},[a,i,c]),(0,t.jsxs)("div",{className:"jsx-5d92f3f395e4384e container",children:[(0,t.jsx)("div",{className:"jsx-5d92f3f395e4384e "+(s||""),children:r},r),(0,t.jsx)(o(),{id:"5d92f3f395e4384e",children:".container.jsx-5d92f3f395e4384e{overflow:hidden}.before.jsx-5d92f3f395e4384e{-webkit-transform:translatey(-4rem);-moz-transform:translatey(-4rem);-ms-transform:translatey(-4rem);-o-transform:translatey(-4rem);transform:translatey(-4rem)}.rollin.jsx-5d92f3f395e4384e{-webkit-animation:.5s slidein;-moz-animation:.5s slidein;-o-animation:.5s slidein;animation:.5s slidein}.rollout.jsx-5d92f3f395e4384e{-webkit-animation:.5s slideout;-moz-animation:.5s slideout;-o-animation:.5s slideout;animation:.5s slideout}@-webkit-keyframes slidein{from{-webkit-transform:translatey(-4rem);transform:translatey(-4rem)}to{-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes slidein{from{-moz-transform:translatey(-4rem);transform:translatey(-4rem)}to{-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes slidein{from{-o-transform:translatey(-4rem);transform:translatey(-4rem)}to{-o-transform:translatey(0);transform:translatey(0)}}@keyframes slidein{from{-webkit-transform:translatey(-4rem);-moz-transform:translatey(-4rem);-o-transform:translatey(-4rem);transform:translatey(-4rem)}to{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes slideout{from{-webkit-transform:translatey(0);transform:translatey(0)}to{-webkit-transform:translatey(4rem);transform:translatey(4rem)}}@-moz-keyframes slideout{from{-moz-transform:translatey(0);transform:translatey(0)}to{-moz-transform:translatey(4rem);transform:translatey(4rem)}}@-o-keyframes slideout{from{-o-transform:translatey(0);transform:translatey(0)}to{-o-transform:translatey(4rem);transform:translatey(4rem)}}@keyframes slideout{from{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}to{-webkit-transform:translatey(4rem);-moz-transform:translatey(4rem);-o-transform:translatey(4rem);transform:translatey(4rem)}}"})]})}function l(){let e=(0,n.useContext)(s.R);return setTimeout(()=>{e.refresh()},3e4),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"jsx-cd7abe5ff0c9275a",children:"Current Budgets"}),(0,t.jsx)("div",{className:"jsx-cd7abe5ff0c9275a scrollable",children:(0,t.jsxs)("table",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("thead",{className:"jsx-cd7abe5ff0c9275a",children:(0,t.jsxs)("tr",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a",children:"Category"}),(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a divider"}),(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a",children:"Remaining"})]})}),(0,t.jsx)("tbody",{className:"jsx-cd7abe5ff0c9275a",children:Object.entries(e.budgets).map(e=>{let[a,r]=e,i=r.budgetRemaining>0?"":"red",o=Math.abs(r.budgetRemaining).toFixed(2),n=r.budgetRemaining>0?"$".concat(o):"-($".concat(o,")");return(0,t.jsxs)("tr",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a",children:a}),(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a divider"}),(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a "+(i||""),children:(0,t.jsx)(c,{value:n})})]},a)})})]})}),(0,t.jsx)(o(),{id:"cd7abe5ff0c9275a",children:"h1.jsx-cd7abe5ff0c9275a{color:white;font-size:1.5rem}.scrollable.jsx-cd7abe5ff0c9275a{overflow-y:scroll;padding:0 1rem}table.jsx-cd7abe5ff0c9275a{color:white;font-size:1.3rem;border-spacing:0 1rem}.red.jsx-cd7abe5ff0c9275a{color:#ff8e8e}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(1),tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(3){background-color:#fff2;padding:.3rem 1rem}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(1){-webkit-border-radius:1rem 0 0 1rem;-moz-border-radius:1rem 0 0 1rem;border-radius:1rem 0 0 1rem}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(3){-webkit-border-radius:0 1rem 1rem 0;-moz-border-radius:0 1rem 1rem 0;border-radius:0 1rem 1rem 0}th.jsx-cd7abe5ff0c9275a:nth-child(1){text-align:left;border-bottom:.2rem solid#fff2}td.jsx-cd7abe5ff0c9275a:nth-child(1){text-align:left}th.jsx-cd7abe5ff0c9275a:nth-child(2),td.jsx-cd7abe5ff0c9275a:nth-child(2){width:.5rem}th.jsx-cd7abe5ff0c9275a:nth-child(3){text-align:left;border-bottom:.2rem solid#fff2}td.jsx-cd7abe5ff0c9275a:nth-child(3){text-align:left}"})]})}},969:function(e,a,r){"use strict";r.d(a,{Z:function(){return s}});var t=r(5893),i=r(9554),o=r.n(i),n=r(7294);function s(e){let{name:a,disabled:r,processing:i,shadowOff:s,onClick:c}=e,l=(0,n.useCallback)(function(){!r&&c&&c()},[c,r]),d=s?"button":"button shadow";return(0,t.jsxs)(t.Fragment,{children:[r||i?(0,t.jsx)("div",{className:"jsx-131807496bc009c6 "+(d+(r?" disabled":"")||""),children:i?(0,t.jsx)("img",{src:"./tail-spin.svg",className:"jsx-131807496bc009c6"}):a}):(0,t.jsx)("button",{onClick:l,className:"jsx-131807496bc009c6 "+"".concat(d," ripple"),children:a}),(0,t.jsx)(o(),{id:"131807496bc009c6",children:".button.jsx-131807496bc009c6,.disabled-button.jsx-131807496bc009c6{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;font-family:inherit;color:white;outline:none;min-width:10rem;text-align:center;line-height:normal}.button.shadow.jsx-131807496bc009c6,.disabled-button.shadow.jsx-131807496bc009c6{-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black}.button.jsx-131807496bc009c6{background-color:#b3711c}.button.shadow.ripple.jsx-131807496bc009c6:active{-webkit-box-shadow:.2rem .2rem .3rem black;-moz-box-shadow:.2rem .2rem .3rem black;box-shadow:.2rem .2rem .3rem black}.button.disabled.jsx-131807496bc009c6{background-color:#666;color:#aaa}img.jsx-131807496bc009c6{height:2rem;margin:-.5rem}.ripple.jsx-131807496bc009c6{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:#b3711c -webkit-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -moz-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -o-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c radial-gradient(circle,transparent 1%,#925506 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-131807496bc009c6:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}},8769:function(e,a,r){"use strict";r.d(a,{Z:function(){return n}});var t=r(5893),i=r(9554),o=r.n(i);function n(e){let{small:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-6802dde8b2e43cb7"}),(0,t.jsx)(o(),{id:"6802dde8b2e43cb7",children:"div.jsx-6802dde8b2e43cb7{margin-top:3rem}"})]})}},4899:function(e,a,r){"use strict";r.d(a,{Z:function(){return n}});var t=r(5893),i=r(9554),o=r.n(i);function n(e){let{splash:a,children:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-c0f127d128b40af7 center",children:(0,t.jsxs)("div",{className:"jsx-c0f127d128b40af7 main",children:[a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"jsx-c0f127d128b40af7 head",children:[(0,t.jsx)("title",{className:"jsx-c0f127d128b40af7",children:"Lamb Family Budget"}),(0,t.jsx)("link",{rel:"icon",href:"/logo.svg",className:"jsx-c0f127d128b40af7"})]}),(0,t.jsx)("div",{className:"jsx-c0f127d128b40af7 splash-bg",children:(0,t.jsx)("div",{className:"jsx-c0f127d128b40af7 transition"})}),(0,t.jsxs)("div",{className:"jsx-c0f127d128b40af7 splash",children:[(0,t.jsx)("img",{src:"/logo_white.svg",className:"jsx-c0f127d128b40af7"}),(0,t.jsx)("h1",{className:"jsx-c0f127d128b40af7",children:"Track Your Spending"})]})]}),(0,t.jsx)("div",{className:"jsx-c0f127d128b40af7 content",children:r})]})}),(0,t.jsx)(o(),{id:"da5bb45be08d2ccc",children:'h1.jsx-c0f127d128b40af7{font-weight:lighter}.content.jsx-c0f127d128b40af7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:200;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:auto;-moz-box-flex:1;-ms-flex:auto;flex:auto;overflow-y:hidden}.splash.jsx-c0f127d128b40af7{padding:5rem 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:white;font-weight:lighter;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;z-index:100}.splash.jsx-c0f127d128b40af7 img.jsx-c0f127d128b40af7{width:8rem}.splash-bg.jsx-c0f127d128b40af7{position:absolute;width:100%;z-index:1;background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");background-image:-o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,.5)),url("/desk_photo.jpg");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat;padding-top:40%}.splash-bg.jsx-c0f127d128b40af7 .transition.jsx-c0f127d128b40af7{padding-top:20%;height:0;width:100%;background-image:-webkit-linear-gradient(top,#137c4c00,#137c4cff);background-image:-moz-linear-gradient(top,#137c4c00,#137c4cff);background-image:-o-linear-gradient(top,#137c4c00,#137c4cff);background-image:linear-gradient(to bottom,#137c4c00,#137c4cff)}.main.jsx-c0f127d128b40af7{max-width:50rem;width:100%;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:relative;overflow:clip;height:100%;background-color:#137c4c}.center.jsx-c0f127d128b40af7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%}'}),(0,t.jsx)(o(),{id:"559604a6b5cd9115",children:"html,body{height:100%;background-color:#093e26;padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}body>div{height:100%}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}r(7294)},9365:function(e,a,r){"use strict";r.d(a,{Z:function(){return s}});var t=r(5893),i=r(9554),o=r.n(i),n=r(7294);function s(e){let{placeholder:a,value:r,isPassword:i,onChange:s}=e,[c,l]=(0,n.useState)("");(0,n.useMemo)(()=>{l(r)},[r]);let d=(0,n.useCallback)(e=>{s?s(e.target.value):l(e.target.value)},[l]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:i?"password":"text",placeholder:a,value:c,onChange:d,className:"jsx-34eed70eb2825f87"}),(0,t.jsx)(o(),{id:"34eed70eb2825f87",children:"input.jsx-34eed70eb2825f87{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%}"})]})}},5706:function(e,a,r){"use strict";r.r(a),r.d(a,{default:function(){return C}});var t,i,o,n,s=r(5893),c=r(9554),l=r.n(c);r(9008);var d=r(969),b=r(9365),m=r(4899);r(2525);var x=r(8769);function f(e){let{type:a,children:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"jsx-fe6386af1e0d1b00 row",children:[(0,s.jsx)("img",{src:a.toString(),className:"jsx-fe6386af1e0d1b00"}),(0,s.jsx)("div",{className:"jsx-fe6386af1e0d1b00 multi",children:r})]}),(0,s.jsx)(l(),{id:"fe6386af1e0d1b00",children:".row.jsx-fe6386af1e0d1b00{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%}.row.jsx-fe6386af1e0d1b00 *.jsx-fe6386af1e0d1b00:last-child{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.row.jsx-fe6386af1e0d1b00 *.jsx-fe6386af1e0d1b00:first-child{width:10rem}.multi.jsx-fe6386af1e0d1b00{margin-top:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}img.jsx-fe6386af1e0d1b00{width:100%}"})]})}(t=o||(o={})).Description="/section_label.png",t.Amount="/section_amount.png",t.Expense="/section_expense.png",t.Liability="/section_liability.png",t.Date="/section_date.png",t.Receipt="/section_receipt.png";var u=r(7294),g=r(3935);function p(e){let{children:a,onClose:r}=e,t=(0,u.useRef)(null);t.current||(t.current=document.createElement("div")),(0,u.useEffect)(()=>(document.body.appendChild(t.current),()=>document.body.removeChild(t.current)),[]);let i=(0,u.useCallback)(e=>{r()},[r]);return(0,g.createPortal)((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"jsx-1cca60daeddb9eb6 overlay-dark"}),(0,s.jsx)("div",{onClick:i,className:"jsx-1cca60daeddb9eb6 drawer-container",children:(0,s.jsx)("div",{onClick:e=>{e.stopPropagation()},className:"jsx-1cca60daeddb9eb6 drawer",children:a})}),(0,s.jsx)(l(),{id:"1cca60daeddb9eb6",children:".overlay-dark.jsx-1cca60daeddb9eb6{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#000a;z-index:1000;opacity:0;-webkit-animation:smooth-appear.2s ease forwards;-moz-animation:smooth-appear.2s ease forwards;-o-animation:smooth-appear.2s ease forwards;animation:smooth-appear.2s ease forwards}.drawer-container.jsx-1cca60daeddb9eb6{position:fixed;padding-left:3rem;padding-right:3rem;z-index:1000;width:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;bottom:-100%;opacity:0;-webkit-animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards;-moz-animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards;-o-animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards;animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards}@-webkit-keyframes smooth-from-bottom{to{bottom:0}}@-moz-keyframes smooth-from-bottom{to{bottom:0}}@-o-keyframes smooth-from-bottom{to{bottom:0}}@keyframes smooth-from-bottom{to{bottom:0}}@-webkit-keyframes smooth-appear{to{opacity:1}}@-moz-keyframes smooth-appear{to{opacity:1}}@-o-keyframes smooth-appear{to{opacity:1}}@keyframes smooth-appear{to{opacity:1}}.drawer.jsx-1cca60daeddb9eb6{background-color:white;min-width:2rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;max-height:80%;min-height:20rem;-webkit-border-radius:.5rem .5rem 0 0;-moz-border-radius:.5rem .5rem 0 0;border-radius:.5rem .5rem 0 0}"})]}),t.current)}function h(e){let{placeholder:a,value:r,onChange:t}=e,[i,o]=(0,u.useState)(""),[n,c]=(0,u.useState)(!1);(0,u.useMemo)(()=>{o(r)},[r]);let b=(0,u.useCallback)(e=>{t?t(e.target.value):o(e.target.value)},[o]),[m,x]=(0,u.useState)(""),f=(0,u.useCallback)(e=>{x(""),c(!0)},[c,i]),g=(0,u.useCallback)(()=>{c(!1)},[c]),h=(0,u.useCallback)(e=>{if("number"==typeof e){let a=m;-1!==a.indexOf(".")&&a.indexOf(".")<a.length-2&&(a=a.substring(0,a.length-1)),""==a&&0==e||x(a+e)}else if("."===e){let e=m;-1!==e.indexOf(".")&&(e=e.substring(0,e.indexOf("."))),x(e+".")}else"<"===e&&x(m.substring(0,m.length-1))},[x,m]),k=(0,u.useCallback)(()=>{t(m),c(!1)},[t,m]),j=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 0===e.length?a?"":"$0.00":-1===e.indexOf(".")?"$"+e+".00":e.indexOf(".")===e.length-1?"$"+e+"00":e.indexOf(".")===e.length-2?"$"+e+"0":"$"+e};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{inputMode:"none",type:"text",placeholder:a,value:j(i,!0),onChange:b,onFocus:f,className:"jsx-c7033b8f6a7442ed inline-display"}),n&&(0,s.jsxs)(p,{onClose:g,children:[(0,s.jsx)("input",{inputMode:"none",type:"text",value:j(m),className:"jsx-c7033b8f6a7442ed popup-display"}),(0,s.jsxs)("div",{className:"jsx-c7033b8f6a7442ed grid",children:[[...Array(10)].map((e,a)=>(0,s.jsx)("div",{style:{gridArea:"a".concat(a)},className:"jsx-c7033b8f6a7442ed",children:(0,s.jsx)(d.Z,{shadowOff:!0,name:"".concat(a),onClick:()=>{h(a)}})})),(0,s.jsx)("div",{style:{gridArea:"back"},className:"jsx-c7033b8f6a7442ed",children:(0,s.jsx)(d.Z,{shadowOff:!0,name:"<",onClick:()=>h("<")})}),(0,s.jsx)("div",{style:{gridArea:"dot"},className:"jsx-c7033b8f6a7442ed",children:(0,s.jsx)(d.Z,{shadowOff:!0,name:".",onClick:()=>h(".")})}),(0,s.jsx)("div",{style:{gridArea:"accept"},className:"jsx-c7033b8f6a7442ed",children:(0,s.jsx)(d.Z,{shadowOff:!0,name:"OK",onClick:k})})]})]}),(0,s.jsx)(l(),{id:"c7033b8f6a7442ed",children:'input.jsx-c7033b8f6a7442ed{border:none;border-bottom:.1rem solid black;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;text-align:right}input.inline-display.jsx-c7033b8f6a7442ed{border:none;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;width:100%}input.jsx-c7033b8f6a7442ed::-webkit-input-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed:-moz-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed::-moz-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed:-ms-input-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed::-ms-input-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed::placeholder{text-align:left}.grid.jsx-c7033b8f6a7442ed{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-areas:"a7 a8 a9""a4 a5 a6""a1 a2 a3""dot a0 back"". . accept";-webkit-column-gap:.3rem;-moz-column-gap:.3rem;column-gap:.3rem;row-gap:.3rem;margin:.3rem}.popup-display.jsx-c7033b8f6a7442ed{width:100%}'})]})}var k=r(6005);function j(e){let{type:a,placeholder:r,value:t,onChange:i}=e,[o,n]=(0,u.useState)(""),[c,d]=(0,u.useState)(!1);(0,u.useMemo)(()=>{n(t)},[t]);let b=(0,u.useCallback)(e=>{d(!0)},[d]),m=(0,u.useCallback)(()=>{d(!1)},[d]),x=(0,u.useCallback)(e=>{i?i(e):n(e),d(!1)},[i,n,d]),f=(0,u.useContext)(k.R),g=[];return g=1===a?["Liabilities:US:Discover","Liabilities:US:Chase","Assets:US:ICCU:Checking","Assets:US:Cash"]:f.expenseAccounts,(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"text",inputMode:"none",placeholder:r,value:o,onFocus:b,className:"jsx-7db8b2184444b3d6"}),c&&(0,s.jsx)(p,{onClose:m,children:(0,s.jsx)("div",{className:"jsx-7db8b2184444b3d6 options",children:g.map((e,a)=>(0,s.jsx)("span",{onClick:()=>x(e),className:"jsx-7db8b2184444b3d6 option ripple",children:e},a))})}),(0,s.jsx)(l(),{id:"7db8b2184444b3d6",children:"input.jsx-7db8b2184444b3d6{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%}.options.jsx-7db8b2184444b3d6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.option.jsx-7db8b2184444b3d6{font-size:1.4rem;padding:1rem 3rem;cursor:default}.ripple.jsx-7db8b2184444b3d6{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:white -webkit-radial-gradient(circle,transparent 1%,#aaa 1%)center;background:white -moz-radial-gradient(circle,transparent 1%,#aaa 1%)center;background:white -o-radial-gradient(circle,transparent 1%,#aaa 1%)center;background:white radial-gradient(circle,transparent 1%,#aaa 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-7db8b2184444b3d6:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}function w(e){let{placeholder:a,value:r,onChange:t}=e,[i,o]=(0,u.useState)("");(0,u.useMemo)(()=>{o(r)},[r]);let n=(0,u.useCallback)(e=>{t?t(e.target.value):o(e.target.value)},[o]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"date",placeholder:a,value:i,onChange:n,className:"jsx-34eed70eb2825f87"}),(0,s.jsx)(l(),{id:"34eed70eb2825f87",children:"input.jsx-34eed70eb2825f87{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%}"})]})}function y(e){let{placeholder:a,onChange:r}=e,t=(0,u.useCallback)(e=>{if(r){let a=e.target.files[0],t=new FileReader;t.readAsBinaryString(a),t.onload=()=>{r(btoa(t.result))}}},[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"file",accept:"image/*,capture=camera",placeholder:a,onChange:t,className:"jsx-4991deb061cf4b13"}),(0,s.jsx)(l(),{id:"4991deb061cf4b13",children:"input.jsx-4991deb061cf4b13{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;background-color:white;outline:none;width:100%}"})]})}function z(e){let{src:a,disabled:r,processing:t,shadowOff:i,onClick:o}=e,n=(0,u.useCallback)(function(){!r&&o&&o()},[o,r]),c=i?"button":"button shadow";return(0,s.jsxs)(s.Fragment,{children:[r||t?(0,s.jsx)("div",{className:"jsx-dda5fa9510aa8884 "+(c+(r?" disabled":"")||""),children:t?(0,s.jsx)("img",{src:"./tail-spin.svg",className:"jsx-dda5fa9510aa8884"}):(0,s.jsx)("img",{src:a,className:"jsx-dda5fa9510aa8884"})}):(0,s.jsx)("button",{onClick:n,className:"jsx-dda5fa9510aa8884 "+"".concat(c," ripple"),children:(0,s.jsx)("img",{src:a,className:"jsx-dda5fa9510aa8884"})}),(0,s.jsx)(l(),{id:"dda5fa9510aa8884",children:".button.jsx-dda5fa9510aa8884,.disabled-button.jsx-dda5fa9510aa8884{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;font-family:inherit;color:white;outline:none;text-align:center;line-height:normal}.button.shadow.jsx-dda5fa9510aa8884,.disabled-button.shadow.jsx-dda5fa9510aa8884{-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black}.button.jsx-dda5fa9510aa8884{background-color:#b3711c}.button.shadow.ripple.jsx-dda5fa9510aa8884:active{-webkit-box-shadow:.2rem .2rem .3rem black;-moz-box-shadow:.2rem .2rem .3rem black;box-shadow:.2rem .2rem .3rem black}.button.disabled.jsx-dda5fa9510aa8884{background-color:#666;color:#aaa}img.jsx-dda5fa9510aa8884{height:2rem;margin:-.5rem}.ripple.jsx-dda5fa9510aa8884{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:#b3711c -webkit-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -moz-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -o-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c radial-gradient(circle,transparent 1%,#925506 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-dda5fa9510aa8884:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}(i=n||(n={}))[i.Expense=0]="Expense",i[i.Liability=1]="Liability";var v=r(1163),N=r(1582);function C(){let[e,a]=(0,u.useState)(""),[r,t]=(0,u.useState)(""),[i,c]=(0,u.useState)(""),[g,p]=(0,u.useState)(""),[C,S]=(0,u.useState)(""),[_,Z]=(0,u.useState)(()=>{let e=new Date;var a=("0"+e.getDate()).slice(-2),r=("0"+(e.getMonth()+1)).slice(-2);return e.getFullYear()+"-"+r+"-"+a}),[F,A]=(0,u.useState)([]),[E,O]=(0,u.useState)([]),[R,M]=(0,u.useState)(""),D=(0,u.useCallback)(()=>{A([...F,{account:"",amount:""}])},[A,F]),L=(0,u.useCallback)(e=>{A(F.toSpliced(e,1))},[A,F]),U=(0,u.useCallback)((e,a)=>{let r=[...F];r[e].amount=a,A(r)},[A,F]),$=(0,u.useCallback)((e,a)=>{let r=[...F];r[e].account=a,A(r)},[A,F]),P=(0,u.useCallback)(()=>{O([...E,{account:"",amount:""}])},[O,E]),T=(0,u.useCallback)(e=>{O(E.toSpliced(e,1))},[O,E]),B=(0,u.useCallback)((e,a)=>{let r=[...E];r[e].amount=a,O(r)},[O,E]),X=(0,u.useCallback)((e,a)=>{let r=[...E];r[e].account=a,O(r)},[O,E]),I=(0,v.useRouter)(),{setNextRefreshToWait:Y}=(0,u.useContext)(k.R),H=(0,u.useMemo)(()=>{let a=""!==e&&""!==i&&"0.00"!==i&&""!==g&&""!==C,r=[...E,...F].reduce((e,a)=>e&&""!==a.amount&&""!==a.account,!0);return a&&r},[e,r,i,g,C,E,_,R]),J=(0,u.useCallback)(()=>{let a=Date.parse(_);fetch("".concat(N.X,"/add_expense"),{method:"POST",body:JSON.stringify({business:e,description:r,amount:i,expenseAccount:g,liabilityAccount:C,expenseSplits:F,liabilitySplits:E,date:a,image:R}),credentials:"include"}).then(()=>{Y(),I.push("/")})},[e,r,i,g,C,_,F,E,R,I,Y]);return(0,s.jsxs)(m.Z,{splash:!1,children:[(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 scrollable",children:[(0,s.jsx)("h1",{className:"jsx-4cfc4ef8633b2cf6",children:"New Expense"}),(0,s.jsxs)(f,{type:o.Description,children:[(0,s.jsx)(b.Z,{placeholder:"Business",value:e,onChange:e=>{a(e)}}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(b.Z,{placeholder:"Description (optional)",value:r,onChange:e=>{t(e)}})]}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(f,{type:o.Amount,children:(0,s.jsx)(h,{placeholder:"Amount",value:i,onChange:e=>{c(e)}})}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)(f,{type:o.Expense,children:[(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 inner-row",children:[(0,s.jsx)(j,{type:n.Expense,placeholder:"Expense",value:g,onChange:e=>{p(e)}}),(0,s.jsx)(z,{src:"/icon_split.png",disabled:""===g,onClick:D})]}),F.map((e,a)=>(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 full-width",children:[(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 inner-row",children:[(0,s.jsx)(j,{type:n.Expense,placeholder:"Expense",value:e.account,onChange:e=>{$(a,e)}}),(0,s.jsx)(h,{placeholder:"Amount",value:e.amount,onChange:e=>{U(a,e)}}),(0,s.jsx)(z,{src:"/icon_delete.png",disabled:""===g,onClick:()=>{L(a)}})]})]},a))]}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)(f,{type:o.Liability,children:[(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 inner-row",children:[(0,s.jsx)(j,{type:n.Liability,placeholder:"Payment Method",value:C,onChange:e=>{S(e)}}),(0,s.jsx)(z,{src:"/icon_split.png",disabled:""===C,onClick:P})]}),E.map((e,a)=>(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 full-width",children:[(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:"jsx-4cfc4ef8633b2cf6 inner-row",children:[(0,s.jsx)(j,{type:n.Liability,placeholder:"Expense",value:e.account,onChange:e=>{X(a,e)}}),(0,s.jsx)(h,{placeholder:"Amount",value:e.amount,onChange:e=>{B(a,e)}}),(0,s.jsx)(z,{src:"/icon_delete.png",disabled:""===g,onClick:()=>{T(a)}})]})]},a))]}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(f,{type:o.Date,children:(0,s.jsx)(w,{placeholder:"Date",value:_,onChange:e=>{Z(e)}})}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(f,{type:o.Receipt,children:(0,s.jsx)(y,{name:"Add receipt (optional)",onChange:e=>{M(e)}})}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(d.Z,{name:"Add",processing:!1,disabled:!H,onClick:J})]}),(0,s.jsx)(l(),{id:"4cfc4ef8633b2cf6",children:"h1.jsx-4cfc4ef8633b2cf6{font-size:2rem;font-weight:normal;color:white}.scrollable.jsx-4cfc4ef8633b2cf6{overflow-y:scroll;padding:0 4rem 1rem 2rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.inner-row.jsx-4cfc4ef8633b2cf6{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem}.full-width.jsx-4cfc4ef8633b2cf6{width:100%}"})]})}}},function(e){e.O(0,[261,888,774,179],function(){return e(e.s=7385)}),_N_E=e.O()}]);