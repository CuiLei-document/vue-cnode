(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],p=0,f=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-cnode/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a51":function(t,e,n){},"360d":function(t,e,n){"use strict";n("0a51")},"41a5":function(t,e,n){},"51ea":function(t,e,n){"use strict";n("7079")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"post"},[n("router-view",{attrs:{name:"sidebar"}}),n("router-view",{attrs:{name:"main"}})],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"wrapper"},[t._m(0),n("ul",{staticClass:"rightNav"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v(" 首页 ")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("API")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("入门")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("新手")])],1),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("关于")])],1)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:"//static2.cnodejs.org/public/images/cnodejs_light.svg"}})])}],c={name:"Header"},u=c,l=(n("51ea"),n("2877")),p=Object(l["a"])(u,o,r,!1,null,"414bb6d1",null),f=p.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"postList"},[t.isLoading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:n("cf1c"),alt:""}})]):s("div",{staticClass:"posts"},[s("ul",{staticClass:"list"},[t._m(0),t._l(t.posts,(function(e,n){return s("li",{key:n},[s("img",{attrs:{src:e.author.avatar_url}}),s("span",{staticClass:"allcount"},[s("span",{staticClass:"reply_count"},[t._v(t._s(e.reply_count))]),t._v(" / "+t._s(e.visit_count)+" ")]),s("span",{class:[{put_good:!0===e.good,put_top:!0===e.good,"topiclist-tab":!0!==e.good&&!0!==e.top}]},[s("span",[t._v(" "+t._s(t._f("formatPost")(e))+" ")])]),s("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[s("span",[t._v(t._s(e.title))])]),s("span",{staticClass:"last_reply"},[t._v(" "+t._s(t._f("formatDate")(e.last_reply_at))+" ")])],1)})),s("li",[s("Pagination",{on:{henderList:t.renderList}})],1)],2)])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"toobar"},[n("span",[t._v("全部")]),n("span",[t._v("精华")]),n("span",[t._v("分享")]),n("span",[t._v("问答")]),n("span",[t._v("招聘")])])}],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("button",{on:{click:t.btnPage}},[t._v("首页")]),n("button",{on:{click:t.btnPage}},[t._v("上一页")]),t.expand?n("button",{staticClass:"expand"},[t._v(".....")]):t._e(),t._l(t.pageBtn,(function(e){return n("button",{key:e,class:[{currentPage:e===t.currentBtn},"pagebtn"],on:{click:function(n){return t.btnPage(e)}}},[t._v(" "+t._s(e)+" ")])})),t.expand?n("button",{staticClass:"expand"},[t._v(".....")]):t._e(),n("button",{on:{click:t.btnPage}},[t._v("下一页")])],2)},h=[],g=(n("a434"),n("1157")),m=n.n(g),b={data:function(){return{pageBtn:[1,2,3,4,5],currentBtn:1,expand:!1}},methods:{btnPage:function(t){if("number"===typeof t)this.currentBtn=t,this.expand=t>4,t===this.pageBtn[4]?(this.pageBtn.shift(),this.pageBtn.splice(4,0,this.pageBtn[3]+1)):t===this.pageBtn[0]&&1!==t&&(console.log(t),this.pageBtn.unshift(this.pageBtn[0]-1),this.pageBtn.splice(5,1)),this.$emit("henderList",this.currentBtn),console.log(this.currentBtn);else switch(t.target.innerText){case"上一页":m()("button.currentPage").prev().click();break;case"下一页":m()("button.currentPage").next().click();break;case"首页":this.pageBtn=[1,2,3,4,5],this.btnPage(1);break;default:break}}}},y=b,C=(n("ffc7"),Object(l["a"])(y,v,h,!1,null,"72567970",null)),P=C.exports,k={components:{Pagination:P},data:function(){return{isLoading:!1,posts:[],postList:1}},methods:{getPost:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postList,limit:30}}).then((function(e){t.isLoading=!1,t.posts=e.data.data})).catch((function(t){console.log(t)}))},renderList:function(t){this.postList=t,this.getPost()}},beforeMount:function(){this.isLoading=!0,this.getPost()}},x=k,L=(n("edf8"),Object(l["a"])(x,d,_,!1,null,"1df9f2ce",null)),j=L.exports,$={components:{Header:f,PostList:j}},w=$,O=(n("5c0b"),Object(l["a"])(w,a,i,!1,null,null,null)),B=O.exports,M=n("8c4f"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article"},[t.isLoading?s("div",{staticClass:"loading"},[s("img",{attrs:{src:n("cf1c"),alt:""}})]):s("div",[s("div",{staticClass:"topic_header"},[s("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),s("ul",[s("li",[t._v("发布于："+t._s(t._f("formatDate")(t.post.create_at)))]),s("li",[t._v("作者： "+t._s(t.post.author.loginname))]),s("li",[t._v(t._s(t.post.visit_count)+"次浏览")]),s("li",[t._v("来自 "+t._s(t._f("formatPost")(t.post)))])])]),s("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}})]),s("div",{attrs:{id:"reply"}},[s("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,(function(e,n){return s("div",{key:n.id,staticClass:"replySec"},[s("div",{staticClass:"replyUp"},[s("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})]),s("span",[t._v(t._s(e.author.loginname))]),s("span",[t._v(" "+t._s(n+1)+"楼 ")]),e.ups.length>0?s("span",[t._v(" ⭐ "+t._s(e.ups.length)+" ")]):s("span")],1),s("p",{domProps:{innerHTML:t._s(e.content)}})])}))],2)])},E=[],D={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getPost:function(){var t=this;this.$axios("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then((function(e){!0===e.data.success&&(t.post=e.data.data,t.isLoading=!1)})).catch((function(t){console.log(t+"错误")}))}},beforeMount:function(){this.getPost(),this.isLoading=!0},watch:{$route:function(t,e){this.getPost()}}},T=D,H=(n("7703"),Object(l["a"])(T,S,E,!1,null,null,null)),Y=H.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"UserInfo"},[t.isLoading?s("div",[s("img",{attrs:{src:n("cf1c")}})]):s("div",{staticClass:"userInfomation"},[s("section",[s("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),s("span",[t._v(t._s(t.userinfo.loginname))]),s("p",[t._v(t._s(t.userinfo.score)+"积分")]),s("div",[t._v("github名字："+t._s(t.userinfo.githubUsername))]),s("span",[t._v("注册时间："+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),s("div",{staticClass:"replies"},[s("h4",[t._v("最近创建的主题")]),s("ul",t._l(t.userinfo.recent_topics,(function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),s("div",{staticClass:"topics"},[s("h4",[t._v("回复的主题")]),s("ul",t._l(t.userinfo.recent_replies,(function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])])},U=[],A=(n("b0c0"),{data:function(){return{isLoading:!1,userinfo:{}}},methods:{getPost:function(){var t=this;this.$axios.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(e){t.userinfo=e.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getPost()}}),J=A,N=(n("360d"),Object(l["a"])(J,I,U,!1,null,"7601ff00",null)),q=N.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autherinfo"},[n("div",{staticClass:"authersummay"},[n("div",{staticClass:"topbar"},[t._v("作者")]),n("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[n("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})]),n("span",[t._v(t._s(t.userinfo.loginname))]),n("p",[t._v("积分:"+t._s(t.userinfo.score))])],1),n("div",{staticClass:"recent_topics"},[n("div",{staticClass:"topbar"},[t._v("作者最近主题")]),n("ul",t._l(t.topicLength5,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),n("div",{staticClass:"recent_replies"},[n("div",{staticClass:"topbar"},[t._v("最近回复")]),n("ul",t._l(t.recentLength5,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},F=[],G=(n("fb6a"),{data:function(){return{userinfo:{}}},methods:{getPost:function(){var t=this;this.$axios("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(e){t.userinfo=e.data.data})).catch((function(t){console.log(t)}))}},computed:{topicLength5:function(){return this.userinfo.recent_topics?this.userinfo.recent_topics.slice(0,5):this.userinfo.recent_topics},recentLength5:function(){return this.userinfo.recent_replies?this.userinfo.recent_replies.slice(0,5):this.userinfo.recent_replies}},beforeMount:function(){this.getPost()}}),K=G,Q=(n("902c"),Object(l["a"])(K,z,F,!1,null,"d27ae294",null)),R=Q.exports;s["a"].use(M["a"]);var V=[{path:"/",components:{main:j}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:Y,sidebar:R}},{name:"user_info",path:"/user/:name",components:{main:q,sidebar:R}}],W=new M["a"]({mode:"history",base:"/vue-cnode/",routes:V}),X=W,Z=n("2f62");s["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=n("bc3a"),nt=n.n(et),st=n("5a0c");s["a"].prototype.$axios=nt.a,s["a"].config.productionTip=!1,new s["a"]({router:X,store:tt,render:function(t){return t(B)}}).$mount("#app"),s["a"].filter("formatDate",(function(t){var e=st(t),n=st();return e.isSame(n,"day")?e.format("m分钟前"):e.isSame(n.subtract(1,"day"),"day")?"昨天":e.isSame(n.subtract(2,"day"),"day")?"前天":e.format("YYYY年-MM月-DD日")})),s["a"].filter("formatPost",(function(t){return!0===t.good?"精华":!0===t.top?"置顶":"ask"===t.tab?"问答":"share"===t.tab?"分享":"招聘"}))},"5c0b":function(t,e,n){"use strict";n("9c0c")},7079:function(t,e,n){},7703:function(t,e,n){"use strict";n("e6ad")},"902c":function(t,e,n){"use strict";n("c72f")},"9c0c":function(t,e,n){},c72f:function(t,e,n){},cf1c:function(t,e,n){t.exports=n.p+"img/loading.078fcd09.gif"},e0a7:function(t,e,n){},e6ad:function(t,e,n){},edf8:function(t,e,n){"use strict";n("e0a7")},ffc7:function(t,e,n){"use strict";n("41a5")}});
//# sourceMappingURL=app.a24c11c1.js.map