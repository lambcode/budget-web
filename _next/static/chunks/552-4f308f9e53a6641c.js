(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{2525:function(e,a,r){"use strict";r.d(a,{Z:function(){return d}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294),i=r(6005);function c(e){let{value:a}=e,[r,o]=(0,n.useState)(""),[i,c]=(0,n.useState)("");return(0,n.useEffect)(()=>{""===r?o(a):(c("rollout"),setTimeout(()=>{o(a),c("rollin")},500))},[a,o,c]),(0,t.jsxs)("div",{className:"jsx-5d92f3f395e4384e container",children:[(0,t.jsx)("div",{className:"jsx-5d92f3f395e4384e "+(i||""),children:r},r),(0,t.jsx)(s(),{id:"5d92f3f395e4384e",children:".container.jsx-5d92f3f395e4384e{overflow:hidden}.before.jsx-5d92f3f395e4384e{-webkit-transform:translatey(-4rem);-moz-transform:translatey(-4rem);-ms-transform:translatey(-4rem);-o-transform:translatey(-4rem);transform:translatey(-4rem)}.rollin.jsx-5d92f3f395e4384e{-webkit-animation:.5s slidein;-moz-animation:.5s slidein;-o-animation:.5s slidein;animation:.5s slidein}.rollout.jsx-5d92f3f395e4384e{-webkit-animation:.5s slideout;-moz-animation:.5s slideout;-o-animation:.5s slideout;animation:.5s slideout}@-webkit-keyframes slidein{from{-webkit-transform:translatey(-4rem);transform:translatey(-4rem)}to{-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes slidein{from{-moz-transform:translatey(-4rem);transform:translatey(-4rem)}to{-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes slidein{from{-o-transform:translatey(-4rem);transform:translatey(-4rem)}to{-o-transform:translatey(0);transform:translatey(0)}}@keyframes slidein{from{-webkit-transform:translatey(-4rem);-moz-transform:translatey(-4rem);-o-transform:translatey(-4rem);transform:translatey(-4rem)}to{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes slideout{from{-webkit-transform:translatey(0);transform:translatey(0)}to{-webkit-transform:translatey(4rem);transform:translatey(4rem)}}@-moz-keyframes slideout{from{-moz-transform:translatey(0);transform:translatey(0)}to{-moz-transform:translatey(4rem);transform:translatey(4rem)}}@-o-keyframes slideout{from{-o-transform:translatey(0);transform:translatey(0)}to{-o-transform:translatey(4rem);transform:translatey(4rem)}}@keyframes slideout{from{-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}to{-webkit-transform:translatey(4rem);-moz-transform:translatey(4rem);-o-transform:translatey(4rem);transform:translatey(4rem)}}"})]})}function d(){let e=(0,n.useContext)(i.R);return setTimeout(()=>{e.refresh()},3e4),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"jsx-cd7abe5ff0c9275a",children:"Current Budgets"}),(0,t.jsx)("div",{className:"jsx-cd7abe5ff0c9275a scrollable",children:(0,t.jsxs)("table",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("thead",{className:"jsx-cd7abe5ff0c9275a",children:(0,t.jsxs)("tr",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a",children:"Category"}),(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a divider"}),(0,t.jsx)("th",{className:"jsx-cd7abe5ff0c9275a",children:"Remaining"})]})}),(0,t.jsx)("tbody",{className:"jsx-cd7abe5ff0c9275a",children:Object.entries(e.budgets).map(e=>{let[a,r]=e,o=r.budgetRemaining>0?"":"red",s=Math.abs(r.budgetRemaining).toFixed(2),n=r.budgetRemaining>0?"$".concat(s):"-($".concat(s,")");return(0,t.jsxs)("tr",{className:"jsx-cd7abe5ff0c9275a",children:[(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a",children:a}),(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a divider"}),(0,t.jsx)("td",{className:"jsx-cd7abe5ff0c9275a "+(o||""),children:(0,t.jsx)(c,{value:n})})]},a)})})]})}),(0,t.jsx)(s(),{id:"cd7abe5ff0c9275a",children:"h1.jsx-cd7abe5ff0c9275a{color:white;font-size:1.5rem}.scrollable.jsx-cd7abe5ff0c9275a{overflow-y:scroll;padding:0 1rem}table.jsx-cd7abe5ff0c9275a{color:white;font-size:1.3rem;border-spacing:0 1rem}.red.jsx-cd7abe5ff0c9275a{color:#ff8e8e}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(1),tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(3){background-color:#fff2;padding:.3rem 1rem}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(1){-webkit-border-radius:1rem 0 0 1rem;-moz-border-radius:1rem 0 0 1rem;border-radius:1rem 0 0 1rem}tbody.jsx-cd7abe5ff0c9275a tr.jsx-cd7abe5ff0c9275a td.jsx-cd7abe5ff0c9275a:nth-child(3){-webkit-border-radius:0 1rem 1rem 0;-moz-border-radius:0 1rem 1rem 0;border-radius:0 1rem 1rem 0}th.jsx-cd7abe5ff0c9275a:nth-child(1){text-align:left;border-bottom:.2rem solid#fff2}td.jsx-cd7abe5ff0c9275a:nth-child(1){text-align:left}th.jsx-cd7abe5ff0c9275a:nth-child(2),td.jsx-cd7abe5ff0c9275a:nth-child(2){width:.5rem}th.jsx-cd7abe5ff0c9275a:nth-child(3){text-align:left;border-bottom:.2rem solid#fff2}td.jsx-cd7abe5ff0c9275a:nth-child(3){text-align:left}"})]})}},969:function(e,a,r){"use strict";r.d(a,{Z:function(){return i}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294);function i(e){let{name:a,disabled:r,processing:o,shadowOff:i,onClick:c}=e,d=(0,n.useCallback)(function(){!r&&c&&c()},[c,r]),l=i?"button":"button shadow";return(0,t.jsxs)(t.Fragment,{children:[r||o?(0,t.jsx)("div",{className:"jsx-131807496bc009c6 "+(l+(r?" disabled":"")||""),children:o?(0,t.jsx)("img",{src:"./tail-spin.svg",className:"jsx-131807496bc009c6"}):a}):(0,t.jsx)("button",{onClick:d,className:"jsx-131807496bc009c6 "+"".concat(l," ripple"),children:a}),(0,t.jsx)(s(),{id:"131807496bc009c6",children:".button.jsx-131807496bc009c6,.disabled-button.jsx-131807496bc009c6{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;font-family:inherit;color:white;outline:none;min-width:10rem;text-align:center;line-height:normal}.button.shadow.jsx-131807496bc009c6,.disabled-button.shadow.jsx-131807496bc009c6{-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black}.button.jsx-131807496bc009c6{background-color:#b3711c}.button.shadow.ripple.jsx-131807496bc009c6:active{-webkit-box-shadow:.2rem .2rem .3rem black;-moz-box-shadow:.2rem .2rem .3rem black;box-shadow:.2rem .2rem .3rem black}.button.disabled.jsx-131807496bc009c6{background-color:#666;color:#aaa}img.jsx-131807496bc009c6{height:2rem;margin:-.5rem}.ripple.jsx-131807496bc009c6{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:#b3711c -webkit-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -moz-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -o-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c radial-gradient(circle,transparent 1%,#925506 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-131807496bc009c6:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}},2540:function(e,a,r){"use strict";r.d(a,{Z:function(){return d}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294),i=r(2014),c=r(969);function d(e){let{placeholder:a,value:r,onChange:o}=e,[d,l]=(0,n.useState)(""),[m,b]=(0,n.useState)(!1);(0,n.useMemo)(()=>{l(r)},[r]);let f=(0,n.useCallback)(e=>{o?o(e.target.value):l(e.target.value)},[l]),[x,u]=(0,n.useState)(""),h=(0,n.useCallback)(e=>{u(""),b(!0)},[b,d]),p=(0,n.useCallback)(()=>{b(!1)},[b]),k=(0,n.useCallback)(e=>{if("number"==typeof e){let a=x;-1!==a.indexOf(".")&&a.indexOf(".")<a.length-2&&(a=a.substring(0,a.length-1)),""==a&&0==e||u(a+e)}else if("."===e){let e=x;-1!==e.indexOf(".")&&(e=e.substring(0,e.indexOf("."))),u(e+".")}else"<"===e&&u(x.substring(0,x.length-1))},[u,x]),g=(0,n.useCallback)(()=>{o(x),b(!1)},[o,x]),j=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return 0===e.length?a?"":"$0.00":-1===e.indexOf(".")?"$"+e+".00":e.indexOf(".")===e.length-1?"$"+e+"00":e.indexOf(".")===e.length-2?"$"+e+"0":"$"+e};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{inputMode:"none",type:"text",placeholder:a,value:j(d,!0),onChange:f,onFocus:h,className:"jsx-c7033b8f6a7442ed inline-display"}),m&&(0,t.jsxs)(i.Z,{onClose:p,children:[(0,t.jsx)("input",{inputMode:"none",type:"text",value:j(x),className:"jsx-c7033b8f6a7442ed popup-display"}),(0,t.jsxs)("div",{className:"jsx-c7033b8f6a7442ed grid",children:[[...Array(10)].map((e,a)=>(0,t.jsx)("div",{style:{gridArea:"a".concat(a)},className:"jsx-c7033b8f6a7442ed",children:(0,t.jsx)(c.Z,{shadowOff:!0,name:"".concat(a),onClick:()=>{k(a)}})})),(0,t.jsx)("div",{style:{gridArea:"back"},className:"jsx-c7033b8f6a7442ed",children:(0,t.jsx)(c.Z,{shadowOff:!0,name:"<",onClick:()=>k("<")})}),(0,t.jsx)("div",{style:{gridArea:"dot"},className:"jsx-c7033b8f6a7442ed",children:(0,t.jsx)(c.Z,{shadowOff:!0,name:".",onClick:()=>k(".")})}),(0,t.jsx)("div",{style:{gridArea:"accept"},className:"jsx-c7033b8f6a7442ed",children:(0,t.jsx)(c.Z,{shadowOff:!0,name:"OK",onClick:g})})]})]}),(0,t.jsx)(s(),{id:"c7033b8f6a7442ed",children:'input.jsx-c7033b8f6a7442ed{border:none;border-bottom:.1rem solid black;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;text-align:right}input.inline-display.jsx-c7033b8f6a7442ed{border:none;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;width:100%}input.jsx-c7033b8f6a7442ed::-webkit-input-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed:-moz-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed::-moz-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed:-ms-input-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed::-ms-input-placeholder{text-align:left}input.jsx-c7033b8f6a7442ed::placeholder{text-align:left}.grid.jsx-c7033b8f6a7442ed{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;grid-template-areas:"a7 a8 a9""a4 a5 a6""a1 a2 a3""dot a0 back"". . accept";-webkit-column-gap:.3rem;-moz-column-gap:.3rem;column-gap:.3rem;row-gap:.3rem;margin:.3rem}.popup-display.jsx-c7033b8f6a7442ed{width:100%}'})]})}},9108:function(e,a,r){"use strict";r.d(a,{Z:function(){return i}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294);function i(e){let{placeholder:a,value:r,onChange:o}=e,[i,c]=(0,n.useState)("");(0,n.useMemo)(()=>{c(r)},[r]);let d=(0,n.useCallback)(e=>{o?o(e.target.value):c(e.target.value)},[c]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"date",placeholder:a,value:i,onChange:d,className:"jsx-34eed70eb2825f87"}),(0,t.jsx)(s(),{id:"34eed70eb2825f87",children:"input.jsx-34eed70eb2825f87{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%}"})]})}},8769:function(e,a,r){"use strict";r.d(a,{Z:function(){return n}});var t=r(5893),o=r(9554),s=r.n(o);function n(e){let{small:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-56a4d91423853351"}),(0,t.jsx)(s(),{id:"56a4d91423853351",children:"div.jsx-56a4d91423853351{margin-top:2rem}"})]})}},2014:function(e,a,r){"use strict";r.d(a,{Z:function(){return c}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294),i=r(3935);function c(e){let{children:a,onClose:r}=e,o=(0,n.useRef)(null);o.current||(o.current=document.createElement("div")),(0,n.useEffect)(()=>(document.body.appendChild(o.current),()=>document.body.removeChild(o.current)),[]);let c=(0,n.useCallback)(e=>{r()},[r]);return(0,i.createPortal)((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"jsx-1cca60daeddb9eb6 overlay-dark"}),(0,t.jsx)("div",{onClick:c,className:"jsx-1cca60daeddb9eb6 drawer-container",children:(0,t.jsx)("div",{onClick:e=>{e.stopPropagation()},className:"jsx-1cca60daeddb9eb6 drawer",children:a})}),(0,t.jsx)(s(),{id:"1cca60daeddb9eb6",children:".overlay-dark.jsx-1cca60daeddb9eb6{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#000a;z-index:1000;opacity:0;-webkit-animation:smooth-appear.2s ease forwards;-moz-animation:smooth-appear.2s ease forwards;-o-animation:smooth-appear.2s ease forwards;animation:smooth-appear.2s ease forwards}.drawer-container.jsx-1cca60daeddb9eb6{position:fixed;padding-left:3rem;padding-right:3rem;z-index:1000;width:100%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;height:100%;bottom:-100%;opacity:0;-webkit-animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards;-moz-animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards;-o-animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards;animation:smooth-appear.3s ease forwards,smooth-from-bottom.3s ease forwards}@-webkit-keyframes smooth-from-bottom{to{bottom:0}}@-moz-keyframes smooth-from-bottom{to{bottom:0}}@-o-keyframes smooth-from-bottom{to{bottom:0}}@keyframes smooth-from-bottom{to{bottom:0}}@-webkit-keyframes smooth-appear{to{opacity:1}}@-moz-keyframes smooth-appear{to{opacity:1}}@-o-keyframes smooth-appear{to{opacity:1}}@keyframes smooth-appear{to{opacity:1}}.drawer.jsx-1cca60daeddb9eb6{background-color:white;min-width:2rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;max-height:80%;min-height:20rem;-webkit-border-radius:.5rem .5rem 0 0;-moz-border-radius:.5rem .5rem 0 0;border-radius:.5rem .5rem 0 0}"})]}),o.current)}},9186:function(e,a,r){"use strict";r.d(a,{D:function(){return o},Z:function(){return m}});var t,o,s=r(5893),n=r(9554),i=r.n(n),c=r(7294),d=r(2014),l=r(6005);function m(e){let{type:a,placeholder:r,value:t,onChange:o}=e,[n,m]=(0,c.useState)(""),[b,f]=(0,c.useState)(!1);(0,c.useMemo)(()=>{m(t)},[t]);let x=(0,c.useCallback)(e=>{f(!0)},[f]),u=(0,c.useCallback)(()=>{f(!1)},[f]),h=(0,c.useCallback)(e=>{o?o(e):m(e),f(!1)},[o,m,f]),p=(0,c.useContext)(l.R),k=[];return k=1===a?["Liabilities:US:Discover","Liabilities:US:Chase","Assets:US:ICCU:Checking","Assets:US:Cash"]:[...p.expenseAccounts,"Expenses:Other","Assets:US:Share:Valerie","Assets:US:Share:MomAndDad","Assets:US:Share:Tim","Assets:US:Share:Whitney","Assets:US:Share:MomZarco"],(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{type:"text",inputMode:"none",placeholder:r,value:n,onFocus:x,className:"jsx-127e9c538926ca79"}),b&&(0,s.jsx)(d.Z,{onClose:u,children:(0,s.jsx)("div",{className:"jsx-127e9c538926ca79 options",children:k.map((e,a)=>(0,s.jsx)("span",{onClick:()=>h(e),className:"jsx-127e9c538926ca79 option ripple",children:e},a))})}),(0,s.jsx)(i(),{id:"127e9c538926ca79",children:"input.jsx-127e9c538926ca79{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%;caret-color:transparent}.options.jsx-127e9c538926ca79{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow-y:auto}.option.jsx-127e9c538926ca79{font-size:1.4rem;padding:1rem 3rem;cursor:default}.ripple.jsx-127e9c538926ca79{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:white -webkit-radial-gradient(circle,transparent 1%,#aaa 1%)center;background:white -moz-radial-gradient(circle,transparent 1%,#aaa 1%)center;background:white -o-radial-gradient(circle,transparent 1%,#aaa 1%)center;background:white radial-gradient(circle,transparent 1%,#aaa 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-127e9c538926ca79:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}(t=o||(o={}))[t.Expense=0]="Expense",t[t.Liability=1]="Liability"},6912:function(e,a,r){"use strict";r.d(a,{Z:function(){return w},i:function(){return o}});var t,o,s=r(5893),n=r(9554),i=r.n(n),c=r(7294),d=r(1163),l=r(6005),m=r(1582),b=r(7640),f=r(9365),x=r(8769),u=r(2540),h=r(9186),p=r(4858),k=r(9108),g=r(1243),j=r(969);function w(e){let{type:a}=e,[r,t]=(0,c.useState)(""),[o,n]=(0,c.useState)(""),[w,y]=(0,c.useState)(""),[z,v]=(0,c.useState)(""),[C,N]=(0,c.useState)(""),[Z,S]=(0,c.useState)(()=>{let e=new Date;var a=("0"+e.getDate()).slice(-2),r=("0"+(e.getMonth()+1)).slice(-2);return e.getFullYear()+"-"+r+"-"+a}),[A,E]=(0,c.useState)([]),[F,D]=(0,c.useState)([]),[O,R]=(0,c.useState)(""),_=(0,c.useCallback)(()=>{E([...A,{account:"",amount:""}])},[E,A]),M=(0,c.useCallback)(e=>{E(A.toSpliced(e,1))},[E,A]),U=(0,c.useCallback)((e,a)=>{let r=[...A];r[e].amount=a,E(r)},[E,A]),L=(0,c.useCallback)((e,a)=>{let r=[...A];r[e].account=a,E(r)},[E,A]),$=(0,c.useCallback)(()=>{D([...F,{account:"",amount:""}])},[D,F]),P=(0,c.useCallback)(e=>{D(F.toSpliced(e,1))},[D,F]),B=(0,c.useCallback)((e,a)=>{let r=[...F];r[e].amount=a,D(r)},[D,F]),T=(0,c.useCallback)((e,a)=>{let r=[...F];r[e].account=a,D(r)},[D,F]),I=(0,d.useRouter)(),{setNextRefreshToWait:J}=(0,c.useContext)(l.R),K=(0,c.useMemo)(()=>{let e=""!==r&&""!==w&&"0.00"!==w&&""!==z&&""!==C,a=[...F,...A].reduce((e,a)=>e&&""!==a.amount&&""!==a.account,!0);return e&&a},[r,o,w,z,C,F,Z,O]),V=(0,c.useCallback)(()=>{let e=localStorage.getItem("password"),t=Date.parse(Z);fetch("".concat(m.X,"/add_transaction"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)},body:JSON.stringify({business:r,description:o,amount:w,toAccount:0===a?z:C,fromAccount:0===a?C:z,toSplits:0===a?A:F,fromSplits:0===a?F:A,date:t,image:O}),credentials:"include"}).then(()=>{J(),I.back()})},[r,o,w,z,C,Z,A,F,O,I,J]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 scrollable",children:[(0,s.jsx)("h1",{className:"jsx-cc8ef964beccc3f6",children:0===a?"New Expense":"New Return"}),(0,s.jsxs)(b.Z,{type:b.b.Description,children:[(0,s.jsx)(f.Z,{placeholder:"Business",value:r,isPassword:!1,onChange:e=>{t(e)}}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(f.Z,{placeholder:"Description (optional)",value:o,isPassword:!1,onChange:e=>{n(e)}})]}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(b.Z,{type:b.b.Amount,children:(0,s.jsx)(u.Z,{placeholder:"Amount",value:w,onChange:e=>{y(e)}})}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)(b.Z,{type:b.b.Expense,children:[(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 inner-row",children:[(0,s.jsx)(h.Z,{type:h.D.Expense,placeholder:"Expense",value:z,onChange:e=>{v(e)}}),(0,s.jsx)(p.Z,{src:"/icon_split.png",disabled:""===z,onClick:_})]}),A.map((e,a)=>(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 full-width",children:[(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 inner-row",children:[(0,s.jsx)(h.Z,{type:h.D.Expense,placeholder:"Expense",value:e.account,onChange:e=>{L(a,e)}}),(0,s.jsx)(u.Z,{placeholder:"Amount",value:e.amount,onChange:e=>{U(a,e)}}),(0,s.jsx)(p.Z,{src:"/icon_delete.png",disabled:""===z,onClick:()=>{M(a)}})]})]},a))]}),(0,s.jsx)(x.Z,{}),(0,s.jsxs)(b.Z,{type:b.b.Liability,children:[(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 inner-row",children:[(0,s.jsx)(h.Z,{type:h.D.Liability,placeholder:"Payment Method",value:C,onChange:e=>{N(e)}}),(0,s.jsx)(p.Z,{src:"/icon_split.png",disabled:""===C,onClick:$})]}),F.map((e,a)=>(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 full-width",children:[(0,s.jsx)(x.Z,{}),(0,s.jsxs)("div",{className:"jsx-cc8ef964beccc3f6 inner-row",children:[(0,s.jsx)(h.Z,{type:h.D.Liability,placeholder:"Expense",value:e.account,onChange:e=>{T(a,e)}}),(0,s.jsx)(u.Z,{placeholder:"Amount",value:e.amount,onChange:e=>{B(a,e)}}),(0,s.jsx)(p.Z,{src:"/icon_delete.png",disabled:""===z,onClick:()=>{P(a)}})]})]},a))]}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(b.Z,{type:b.b.Date,children:(0,s.jsx)(k.Z,{placeholder:"Date",value:Z,onChange:e=>{S(e)}})}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(b.Z,{type:b.b.Receipt,children:(0,s.jsx)(g.Z,{placeholder:"Add receipt (optional)",onChange:e=>{R(e)}})}),(0,s.jsx)(x.Z,{}),(0,s.jsx)(j.Z,{name:"Add",processing:!1,disabled:!K,onClick:V})]}),(0,s.jsx)(i(),{id:"cc8ef964beccc3f6",children:"h1.jsx-cc8ef964beccc3f6{font-size:2rem;font-weight:normal;color:white}.scrollable.jsx-cc8ef964beccc3f6{overflow-y:scroll;padding:0 4rem 1rem 2rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%}.inner-row.jsx-cc8ef964beccc3f6{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem}.full-width.jsx-cc8ef964beccc3f6{width:100%}"})]})}(t=o||(o={}))[t.Expense=0]="Expense",t[t.Return=1]="Return"},4858:function(e,a,r){"use strict";r.d(a,{Z:function(){return i}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294);function i(e){let{src:a,disabled:r,processing:o,shadowOff:i,onClick:c}=e,d=(0,n.useCallback)(function(){!r&&c&&c()},[c,r]),l=i?"button":"button shadow";return(0,t.jsxs)(t.Fragment,{children:[r||o?(0,t.jsx)("div",{className:"jsx-dda5fa9510aa8884 "+(l+(r?" disabled":"")||""),children:o?(0,t.jsx)("img",{src:"./tail-spin.svg",className:"jsx-dda5fa9510aa8884"}):(0,t.jsx)("img",{src:a,className:"jsx-dda5fa9510aa8884"})}):(0,t.jsx)("button",{onClick:d,className:"jsx-dda5fa9510aa8884 "+"".concat(l," ripple"),children:(0,t.jsx)("img",{src:a,className:"jsx-dda5fa9510aa8884"})}),(0,t.jsx)(s(),{id:"dda5fa9510aa8884",children:".button.jsx-dda5fa9510aa8884,.disabled-button.jsx-dda5fa9510aa8884{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;padding:1rem 2rem;font-size:1.4rem;font-family:inherit;color:white;outline:none;text-align:center;line-height:normal}.button.shadow.jsx-dda5fa9510aa8884,.disabled-button.shadow.jsx-dda5fa9510aa8884{-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black}.button.jsx-dda5fa9510aa8884{background-color:#b3711c}.button.shadow.ripple.jsx-dda5fa9510aa8884:active{-webkit-box-shadow:.2rem .2rem .3rem black;-moz-box-shadow:.2rem .2rem .3rem black;box-shadow:.2rem .2rem .3rem black}.button.disabled.jsx-dda5fa9510aa8884{background-color:#666;color:#aaa}img.jsx-dda5fa9510aa8884{height:2rem;margin:-.5rem}.ripple.jsx-dda5fa9510aa8884{background-position:center;-webkit-transition:background.6s;-moz-transition:background.6s;-o-transition:background.6s;transition:background.6s;background:#b3711c -webkit-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -moz-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c -o-radial-gradient(circle,transparent 1%,#925506 1%)center;background:#b3711c radial-gradient(circle,transparent 1%,#925506 1%)center;-webkit-background-size:15e3%;-moz-background-size:15e3%;-o-background-size:15e3%;background-size:15e3%}.ripple.jsx-dda5fa9510aa8884:active{-webkit-background-size:100%;-moz-background-size:100%;-o-background-size:100%;background-size:100%;-webkit-transition:background 0s;-moz-transition:background 0s;-o-transition:background 0s;transition:background 0s}"})]})}},1243:function(e,a,r){"use strict";r.d(a,{Z:function(){return i}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294);function i(e){let{placeholder:a,onChange:r}=e,o=(0,n.useCallback)(e=>{if(r){let a=e.target.files[0],t=new FileReader;t.readAsBinaryString(a),t.onload=()=>{r(btoa(t.result))}}},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"file",accept:"image/*,capture=camera",placeholder:a,onChange:o,className:"jsx-4991deb061cf4b13"}),(0,t.jsx)(s(),{id:"4991deb061cf4b13",children:"input.jsx-4991deb061cf4b13{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;background-color:white;outline:none;width:100%}"})]})}},7640:function(e,a,r){"use strict";r.d(a,{Z:function(){return c},b:function(){return o}});var t,o,s=r(5893),n=r(9554),i=r.n(n);function c(e){let{type:a,children:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"jsx-fe6386af1e0d1b00 row",children:[(0,s.jsx)("img",{src:a.toString(),className:"jsx-fe6386af1e0d1b00"}),(0,s.jsx)("div",{className:"jsx-fe6386af1e0d1b00 multi",children:r})]}),(0,s.jsx)(i(),{id:"fe6386af1e0d1b00",children:".row.jsx-fe6386af1e0d1b00{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%}.row.jsx-fe6386af1e0d1b00 *.jsx-fe6386af1e0d1b00:last-child{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.row.jsx-fe6386af1e0d1b00 *.jsx-fe6386af1e0d1b00:first-child{width:10rem}.multi.jsx-fe6386af1e0d1b00{margin-top:1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}img.jsx-fe6386af1e0d1b00{width:100%}"})]})}(t=o||(o={})).Description="/section_label.png",t.Amount="/section_amount.png",t.Expense="/section_expense.png",t.Liability="/section_liability.png",t.Date="/section_date.png",t.Receipt="/section_receipt.png"},9365:function(e,a,r){"use strict";r.d(a,{Z:function(){return i}});var t=r(5893),o=r(9554),s=r.n(o),n=r(7294);function i(e){let{placeholder:a,value:r,isPassword:o,onChange:i}=e,[c,d]=(0,n.useState)("");(0,n.useMemo)(()=>{d(r)},[r]);let l=(0,n.useCallback)(e=>{i?i(e.target.value):d(e.target.value)},[d]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:o?"password":"text",placeholder:a,value:c,onChange:l,className:"jsx-34eed70eb2825f87"}),(0,t.jsx)(s(),{id:"34eed70eb2825f87",children:"input.jsx-34eed70eb2825f87{border:none;-webkit-border-radius:.1rem;-moz-border-radius:.1rem;border-radius:.1rem;-webkit-box-shadow:.3rem .3rem 1rem black;-moz-box-shadow:.3rem .3rem 1rem black;box-shadow:.3rem .3rem 1rem black;padding:1rem 2rem;font-size:1.4rem;color:black;outline:none;width:100%}"})]})}},9008:function(e,a,r){r(6665)}}]);