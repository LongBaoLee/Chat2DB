"use strict";(self.webpackChunkchat_2_db=self.webpackChunkchat_2_db||[]).push([[6971],{43674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Chat2DB\u7b80\u4ecb",sidebar_position:1,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},u=void 0,c={unversionedId:"index",id:"index",title:"Chat2DB\u7b80\u4ecb",description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/dyte-in/docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Chat2DB\u7b80\u4ecb",sidebar_position:1,description:"Chat2DB\u4e00\u4e2a\u96c6\u6210\u4e86AI\u80fd\u529b\u7684\u3001\u652f\u6301Mysql\u3001Oracle\u7b49\u591a\u79cd\u6570\u636e\u5e93\u7ba1\u7406\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177"},sidebar:"docSidebar",next:{title:"Chat2DB\u7b80\u4ecb",permalink:"/docs/guides/what-is-chat-to-db"}},s={},p=[{value:"\ud83d\udcd6 \u7b80\u4ecb",id:"-\u7b80\u4ecb",level:2},{value:"\u2728 \u7279\u6027",id:"-\u7279\u6027",level:2},{value:"\ud83d\udcd1 Github\u5730\u5740",id:"-github\u5730\u5740",level:2},{value:"\ud83d\udd0c \u652f\u6301\u7684\u6570\u636e\u5e93",id:"-\u652f\u6301\u7684\u6570\u636e\u5e93",level:2},{value:"\u260e\ufe0f \u8054\u7cfb\u6211\u4eec",id:"\ufe0f-\u8054\u7cfb\u6211\u4eec",level:2}],b={toc:p},d="wrapper";function m(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-\u7b80\u4ecb"},"\ud83d\udcd6 \u7b80\u4ecb"),(0,n.kt)("p",null,"\u2003"," ","\u2003","Chat2DB \u662f\u4e00\u6b3e\u6709\u5f00\u6e90\u514d\u8d39\u7684\u591a\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u5de5\u5177\uff0c\u652f\u6301windows\u3001mac\u672c\u5730\u5b89\u88c5\uff0c\u4e5f\u652f\u6301\u670d\u52a1\u5668\u7aef\u90e8\u7f72\uff0cweb\u7f51\u9875\u8bbf\u95ee\u3002\u548c\u4f20\u7edf\u7684\u6570\u636e\u5e93\u5ba2\u6237\u7aef\u8f6f\u4ef6Navicat\u3001DBeaver \u76f8\u6bd4Chat2DB\u96c6\u6210\u4e86AIGC\u7684\u80fd\u529b\uff0c\u80fd\u591f\u5c06\u81ea\u7136\u8bed\u8a00\u8f6c\u6362\u4e3aSQL\uff0c\u4e5f\u53ef\u4ee5\u5c06SQL\u8f6c\u6362\u4e3a\u81ea\u7136\u8bed\u8a00\uff0c\u53ef\u4ee5\u7ed9\u51fa\u7814\u53d1\u4eba\u5458SQL\u7684\u4f18\u5316\u5efa\u8bae\uff0c\u6781\u5927\u7684\u63d0\u5347\u4eba\u5458\u7684\u6548\u7387\uff0c\u662fAI\u65f6\u4ee3\u6570\u636e\u5e93\u7814\u53d1\u4eba\u5458\u7684\u5229\u5668\uff0c\u672a\u6765\u5373\u4f7f\u4e0d\u61c2SQL\u7684\u8fd0\u8425\u4e1a\u52a1\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5feb\u901f\u67e5\u8be2\u4e1a\u52a1\u6570\u636e\u3001\u751f\u6210\u62a5\u8868\u80fd\u529b\u3002"),(0,n.kt)("h2",{id:"-\u7279\u6027"},"\u2728 \u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf4e Chat2DB\u6574\u4f53\u7684\u8bbe\u8ba1\u7b80\u5355\u6613\u7528\uff0c\u6ca1\u6709\u4efb\u4f55\u82b1\u91cc\u80e1\u54e8\u7684\u4e1c\u897f\uff0c\u7b26\u5408\u6280\u672f\u4eba\u559c\u6b22\u7b80\u6d01\u7684\u7279\u70b9\u3002"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc69 \u4e3a\u4e86\u4e0d\u540c\u7c7b\u578b\u7528\u6237\u7fa4\u91cc\u7684\u559c\u7231\uff0c\u540c\u65f6\u652f\u6301\u5ba2\u6237\u7aef\u7248\u3001web\u7248\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u5ba2\u6237\u7aef\u7248\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u3002  \u524d\u7aef\u4f7f\u7528 Electron \u5f00\u53d1\uff0c\u63d0\u4f9b Windows\u3001Mac\u3001Linux \u5ba2\u6237\u7aef\u3001\u7f51\u9875\u7248\u672c\u4e00\u4f53\u5316\u7684\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd27 \u7a81\u51fa\u4e86AI \u667a\u80fd\u751f\u6210SQL\u3001SQL\u89e3\u6790\u7684\u7684\u80fd\u529b\uff0c\u4f46\u5728\u4f20\u7edf\u6570\u636e\u5e93\u80fd\u529b\u65b9\u4fbf\u4e00\u70b9\u90fd\u4e0d\u5c11\u3002"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd0c \u5f3a\u5927\u7684\u6269\u5c55\u80fd\u529b\uff0c\u76ee\u524d\u5df2\u7ecf\u652f\u6301Mysql\u3001PostgreSQL\u3001Oracle\u3001SQLServer\u3001ClickHouse\u3001Oceanbase\u3001H2\u3001SQLite\u7b49\u7b49\uff0c\u672a\u6765\u4f1a\u652f\u6301\u66f4\u591a\u7684\u6570\u636e\u5e93"),(0,n.kt)("li",{parentName:"ul"},"\u2699\ufe0f \u5f3a\u5927\u7684\u6570\u636e\u7ba1\u7406\u80fd\u529b\uff0c\u652f\u6301\u6570\u636e\u8868\u3001\u89c6\u56fe\u3001\u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570\u3001\u89e6\u53d1\u5668\u3001\u7d22\u5f15\u3001\u5e8f\u5217\u3001\u7528\u6237\u3001\u89d2\u8272\u3001\u6388\u6743\u7b49\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc6d \u652f\u6301\u56e2\u961f\u534f\u4f5c\uff0c\u7814\u53d1\u65e0\u9700\u77e5\u9053\u7ebf\u4e0a\u6570\u636e\u5e93\u5bc6\u7801\uff0c\u89e3\u51b3\u4f01\u4e1a\u6570\u636e\u5e93\u8d26\u53f7\u5b89\u5168\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf81 \u652f\u6301\u73af\u5883\u9694\u79bb\u3001\u7ebf\u4e0a\u3001\u65e5\u5e38\u6570\u636e\u6743\u9650\u5206\u79bb")),(0,n.kt)("h2",{id:"-github\u5730\u5740"},"\ud83d\udcd1 Github\u5730\u5740"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://github.com/alibaba/Chat2DB/wiki"},"WIKI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://github.com/alibaba/Chat2DB/issues"},"Issue tracker"))),(0,n.kt)("h2",{id:"-\u652f\u6301\u7684\u6570\u636e\u5e93"},"\ud83d\udd0c \u652f\u6301\u7684\u6570\u636e\u5e93"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mysql"),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,n.kt)("li",{parentName:"ul"},"Oracle"),(0,n.kt)("li",{parentName:"ul"},"SQLServer"),(0,n.kt)("li",{parentName:"ul"},"ClickHouse"),(0,n.kt)("li",{parentName:"ul"},"Oceanbase"),(0,n.kt)("li",{parentName:"ul"},"H2"),(0,n.kt)("li",{parentName:"ul"},"SQLite"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u591a\u6570\u636e\u5e93\u652f\u6301\u4e2d...")),(0,n.kt)("h2",{id:"\ufe0f-\u8054\u7cfb\u6211\u4eec"},"\u260e\ufe0f \u8054\u7cfb\u6211\u4eec"),(0,n.kt)("a",null,(0,n.kt)("img",{src:"https://gw.alicdn.com/imgextra/i1/O1CN01VBaYST1MFzhUY9QP6_!!6000000001406-0-tps-723-731.jpg",width:"40%"})),(0,n.kt)("p",null,"\u5fae\u4fe1\uff1ayxccw132  \u9489\u9489\uff1a9135032392"))}m.isMDXComponent=!0}}]);