(this["webpackJsonpcrypto-grid"]=this["webpackJsonpcrypto-grid"]||[]).push([[0],{199:function(e,a,t){e.exports=t(345)},209:function(e,a,t){},272:function(e,a,t){},273:function(e,a,t){},343:function(e,a,t){},345:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),i=t(35),o=t(29),s=t(26),m=t(347),u=t(42),d=t(349),E=t(193),p=t(355),v=t(357),h=t(358),y=t(359),g=t(360),f=t(361),N=(t(209),function(){var e=Object(n.useState)(!0),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(void 0),i=Object(u.a)(c,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){var e=function(){return m(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){r(!(s<=800))}),[s]),l.a.createElement("div",{className:"nav-container"},l.a.createElement("div",{className:"logo-container"},l.a.createElement(d.a.Title,{level:2,className:"logo"},l.a.createElement(o.b,{to:"/"},"Crypto Grid")),l.a.createElement(E.a,{className:"menu-control-container",onClick:function(){return r(!t)}},l.a.createElement(v.a,null))),t&&l.a.createElement(p.a,{theme:"dark",className:"ant-menu"},l.a.createElement(p.a.Item,{key:"homes",icon:l.a.createElement(h.a,null)},l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement(p.a.Item,{key:"cryptoss",icon:l.a.createElement(y.a,null)},l.a.createElement(o.b,{to:"/crypto"},"Crypto Currencies")),l.a.createElement(p.a.Item,{key:"exchangess",icon:l.a.createElement(g.a,null)},l.a.createElement(o.b,{to:"/exchanges"},"Exchanges")),l.a.createElement(p.a.Item,{key:"newss",icon:l.a.createElement(f.a,null)},l.a.createElement(o.b,{to:"/news"},"News"))))}),b=(t(272),function(){return l.a.createElement("div",{className:"loader-container"},l.a.createElement("div",{className:"loader"}))}),k=t(356),w=(t(273),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(d.a.Title,{level:5,style:{color:"#00748A",textAlign:"center"}},"The Crypto Grid"),l.a.createElement(k.b,null,l.a.createElement(o.b,{to:"/"},"Home"),l.a.createElement(o.b,{to:"/exchanges"},"Exchanges"),l.a.createElement(o.b,{to:"/news"},"News")))}),x=t(27),C=t.n(x),O=t(89),S=t(50),j=t(350),T=t(120),P=t(39),M={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"c374d33544msh7476492ca5f567dp1211d8jsn2a382df22e9d"},q=function(e){return{url:e,headers:M}},D=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(P.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return q("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return q("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var a=e.coinId,t=e.timePeriod;return q("/coin/".concat(a,"/history/").concat(t))}}),getExchanges:e.query({query:function(){return q("/exchanges")}})}}}),H=D.useGetCryptosQuery,$=D.useGetCryptoDetailsQuery,A=D.useGetCryptoHistoryQuery,F=D.useGetExchangesQuery,U=d.a.Title,I=function(){var e,a=H(10),t=a.data,n=a.isFetching,r=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.stats;return n?l.a.createElement(b,null):l.a.createElement(l.a.Fragment,null,"  ",l.a.createElement("div",{className:"global-stat-container"},l.a.createElement(U,{level:2,className:"heading"},"Global Crypto Stats"),l.a.createElement(O.a,{gutter:[32,32]},l.a.createElement(S.a,{span:12},l.a.createElement(j.a,{title:"Total Cryptocurrencies",value:r.total})),l.a.createElement(S.a,{span:12},l.a.createElement(j.a,{title:"Total Exchanges",value:C()(r.totalExchanges)})),l.a.createElement(S.a,{span:12},l.a.createElement(j.a,{title:"Total Market Cap",value:C()(r.totalMarketCap)})),l.a.createElement(S.a,{span:12},l.a.createElement(j.a,{title:"Total 24 Hour Volume",value:C()(r.total24hVolume)})),l.a.createElement(S.a,{span:12},l.a.createElement(j.a,{title:"Total Total Markets",value:C()(r.totalMarkets)})))),l.a.createElement("div",{className:"top-ten-container"},l.a.createElement("div",{className:"home-heading-container"},l.a.createElement(U,{level:2,className:"home-title"},"Top 10 Cryptocurrencies"),l.a.createElement(U,{level:3,className:"show-more"},l.a.createElement(o.b,{to:"/crypto"},"Show More")))),l.a.createElement(_,{simplified:!0}),l.a.createElement("div",{className:"home-heading-container"},l.a.createElement(U,{level:2,className:"home-title"},"Latest Crytpo News"),l.a.createElement(U,{level:3},l.a.createElement(o.b,{to:"/news"},"Show More"))),l.a.createElement(fe,{simplified:!0}))},G=t(353),L=t(354),Q=t(122),V=d.a.Text,W=G.a.Panel,z=function(){var e,a=F(),t=a.data,n=a.isFetching,r=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.exchanges;return n?l.a.createElement(b,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{className:"exchange-header-container"},l.a.createElement(S.a,{span:6}," Exchanges"),l.a.createElement(S.a,{span:6}," 24 Hour Trade Volume "),l.a.createElement(S.a,{span:6}," Markets"),l.a.createElement(S.a,{span:6}," Change")),l.a.createElement(O.a,{className:"exchange-container"},r.map((function(e){return l.a.createElement(S.a,{span:24},l.a.createElement(G.a,null,l.a.createElement(W,{key:e.id,showArrow:!1,header:l.a.createElement(O.a,{key:e.id},l.a.createElement(S.a,{span:6},l.a.createElement(V,null,l.a.createElement("strong",null,e.rank,".")),l.a.createElement(L.a,{className:"exchange-image",src:e.iconUrl}),l.a.createElement(V,null,l.a.createElement("strong",null,e.name))),l.a.createElement(S.a,{span:6},"$",C()(e.volume)),l.a.createElement(S.a,{span:6},"$",C()(e.numberOfMarkets)),l.a.createElement(S.a,{span:6},"$",C()(e.marketShare)))},Object(Q.a)(e.description||""))))}))))},J=t(352),R=t(348),_=function(e){var a=e.simplified,t=H(a?10:100),r=t.data,c=t.isFetching,i=Object(n.useState)(),s=Object(u.a)(i,2),m=s[0],d=s[1],E=Object(n.useState)(""),p=Object(u.a)(E,2),v=p[0],h=p[1];return Object(n.useEffect)((function(){var e,a;d(null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.coins);var t=null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.coins.filter((function(e){return e.name.toLowerCase().includes(v)}));d(t)}),[r,v]),c?l.a.createElement(b,null):l.a.createElement(l.a.Fragment,null,!a&&l.a.createElement("div",{className:"search-crypto"},l.a.createElement(J.a,{placeholder:"Search Crypto",onChange:function(e){return h(e.target.value)}})),l.a.createElement(O.a,{gutter:[32,32],className:"crypto-card-container"},null===m||void 0===m?void 0:m.map((function(e){return l.a.createElement(S.a,{xs:24,sm:12,lg:6,className:"crypto-card",key:e.id},l.a.createElement(o.b,{to:"/crypto/".concat(e.id)},l.a.createElement(R.a,{theme:"dark",title:"".concat(e.rank,". ").concat(e.name),extra:l.a.createElement("img",{className:"crypto-image",src:e.iconUrl,alt:"crypto-icon"}),hoverable:!0},l.a.createElement("p",null,"Price: $",C()(e.price)," USD"),l.a.createElement("p",null,"Market Cap: ",C()(e.marketCap)),l.a.createElement("p",null,"Daily Change: ",C()(e.change)))))}))))},B=t(351),Z=t(362),K=t(363),X=t(364),Y=t(365),ee=t(123),ae=t(366),te=t(196),ne=t(190),le=d.a.Title,re=function(e){for(var a,t=e.coinHistory,n=e.currentPrice,r=e.coinName,c=[],i=[],o=0;o<(null===t||void 0===t||null===(s=t.data)||void 0===s||null===(m=s.history)||void 0===m?void 0:m.length);o+=1){var s,m;c.push(t.data.history[o].price),i.push(new Date(t.data.history[o].timestamp).toLocaleDateString())}var u={labels:i,datasets:[{label:"Price in USD",data:c,fill:!1,backgroundColor:"#00f9ff",borderColor:"#00f9ff"}]};return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.a,{className:"chart-header"},l.a.createElement(le,{level:2,className:"chart-title"},r),l.a.createElement(S.a,{className:"price-container"},l.a.createElement(le,{level:5,className:"price-change"},null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.change,"%"),l.a.createElement(le,{level:5,className:"current-price"},"Current ",r," Price: $ ",n,"%"))),l.a.createElement(ne.a,{data:u,options:{scale:{yAxes:[{ticks:{beginAtZero:!0}}]}}}))},ce=d.a.Title,ie=d.a.Text,oe=B.a.Option,se=function(){var e,a=Object(s.f)().coinId,t=Object(n.useState)("24h"),r=Object(u.a)(t,2),c=r[0],i=r[1],o=$(a),m=o.data,d=o.isFetching,E=A({coinId:a,timePeriod:c}).data,p=null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.coin;if(d)return l.a.createElement(b,null);var v=[{title:"Price to USD",value:"$ ".concat(p.price&&C()(p.price)),icon:l.a.createElement(Z.a,null)},{title:"Rank",value:p.rank,icon:l.a.createElement(K.a,null)},{title:"24h Volume",value:"$ ".concat(p.volume&&C()(p.volume)),icon:l.a.createElement(X.a,null)},{title:"Market Cap",value:"$ ".concat(p.marketCap&&C()(p.marketCap)),icon:l.a.createElement(Z.a,null)},{title:"All Time High(Daily Avg.)",value:"$ ".concat(C()(p.allTimeHigh.price)),icon:l.a.createElement(Y.a,null)}],h=[{title:"Number Of Markets",value:p.numberOfMarkets,icon:l.a.createElement(y.a,null)},{title:"Number Of Exchanges",value:p.numberOfExchanges,icon:l.a.createElement(g.a,null)},{title:"Aprroved Supply",value:p.approvedSupply?l.a.createElement(ee.a,null):l.a.createElement(ae.a,null),icon:l.a.createElement(te.a,null)},{title:"Total Supply",value:"$ ".concat(C()(p.totalSupply)),icon:l.a.createElement(te.a,null)},{title:"Circulating Supply",value:"$ ".concat(C()(p.circulatingSupply)),icon:l.a.createElement(te.a,null)}];return console.log(E),l.a.createElement(S.a,{className:"coin-detail-container"},l.a.createElement(S.a,{className:"coin-heading-container"},l.a.createElement(ce,{level:2,className:"coin-name"},p.name," (",p.slug,") Price"),l.a.createElement("p",null,p.name," live price in USD. View value statistics, market cap and supply.")),l.a.createElement(B.a,{theme:"dark",defaultValue:"24h",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return i(e)}},["24h","7d","30d","1y","5y"].map((function(e){return l.a.createElement(oe,{key:e},e)}))),l.a.createElement(re,{coinHistory:E,currentPrice:C()(p.price),coinName:p.name}),l.a.createElement(S.a,{className:"stats-container"},l.a.createElement(S.a,{className:"coin-value-statistics"},l.a.createElement(S.a,{className:"coin-value-statistics-heading"},l.a.createElement(ce,{level:3,className:"coin-details-heading"},p.name," Value Statistics"),l.a.createElement("p",null,p.name," statistic overivew:")),v.map((function(e){var a=e.icon,t=e.title,n=e.value;return l.a.createElement(S.a,{className:"coin-stats",key:t},l.a.createElement(S.a,{className:"coin-stats-name"},l.a.createElement(ie,null,a),l.a.createElement(ie,null,t)),l.a.createElement(ie,{className:"stats"},n))}))),l.a.createElement(S.a,{className:"other-stats-info"},l.a.createElement(S.a,{className:"coin-value-statistics-heading"},l.a.createElement(ce,{level:3,className:"coin-details-heading"},"Other Statistics"),l.a.createElement("p",null,"Statistic overivew of all Cryptocurrencies:")),h.map((function(e){var a=e.icon,t=e.title,n=e.value;return l.a.createElement(S.a,{className:"coin-stats",key:t},l.a.createElement(S.a,{className:"coin-stats-name"},l.a.createElement(ie,null,a),l.a.createElement(ie,null,t)),l.a.createElement(ie,{className:"stats"},n))})))),l.a.createElement(S.a,{className:"coin-desc-link"},l.a.createElement(O.a,{className:"coin-desc"},l.a.createElement(ce,{level:3,className:"coin-details-heading"},"What is ",p.name,Object(Q.a)(p.description))),l.a.createElement(S.a,{className:"coin-links"},l.a.createElement(ce,{level:3,className:"coin-details-heading"},p.name," Links"),p.links.map((function(e){return l.a.createElement(O.a,{className:"coin-link",key:e.name},l.a.createElement(ce,{level:5,className:"link-name"},e.type),l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name))})))))},me=t(189),ue=t.n(me),de={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"c374d33544msh7476492ca5f567dp1211d8jsn2a382df22e9d"},Ee=Object(T.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(P.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var a=e.newsCategory,t=e.count;return{url:"/news/search?q=".concat(a,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(t),headers:de}}})}}}),pe=Ee.useGetCryptoNewsQuery,ve=d.a.Text,he=d.a.Title,ye=B.a.Option,ge="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg",fe=function(e){var a,t=e.simplified,r=Object(n.useState)("Cryptocurrency"),c=Object(u.a)(r,2),i=c[0],o=c[1],s=pe({newsCategory:i,count:t?6:12}).data,m=H(100).data;return(null===s||void 0===s?void 0:s.value)?l.a.createElement(O.a,{gutter:[24,24],className:"crypto-card-container"},!t&&l.a.createElement(S.a,{span:24},l.a.createElement(B.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return o(e)},filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},l.a.createElement(ye,{value:"Cryptocurrency"},"Cryptocurrency"),null===m||void 0===m||null===(a=m.data)||void 0===a?void 0:a.coins.map((function(e){return l.a.createElement(ye,{value:e.name},e.name)})))),s.value.map((function(e,a){var t,n,r,c,i,o;return l.a.createElement(S.a,{xs:24,sm:12,lg:8,key:a},l.a.createElement(R.a,{hoverable:!0,className:"news-card"},l.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"news-image-container"},l.a.createElement(he,{className:"news-title",level:4},e.name),l.a.createElement("img",{style:{maxWidth:"200px",maxHeight:"200px"},src:(null===e||void 0===e||null===(t=e.image)||void 0===t||null===(n=t.thumbnail)||void 0===n?void 0:n.contentUrl)||ge,alt:"news"})),l.a.createElement("p",null,e.description>100?"".concat(e.description.substring(0,100),"..."):e.description),l.a.createElement("div",{className:"provider-container"},l.a.createElement("div",null,l.a.createElement(L.a,{src:(null===(r=e.provider[0])||void 0===r||null===(c=r.image)||void 0===c||null===(i=c.thumbnail)||void 0===i?void 0:i.contentUrl)||ge,alt:"news"}),l.a.createElement(ve,{className:"provider-name"},null===(o=e.provider[0])||void 0===o?void 0:o.name)),l.a.createElement(ve,null,ue()(e.datePublished).startOf("ss").fromNow())))))}))):l.a.createElement(b,null)};t(343);var Ne,be=function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"navbar"},l.a.createElement(N,null)),l.a.createElement("div",{className:"main"},l.a.createElement(m.a,null,l.a.createElement("div",{className:"routes"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(I,null)),l.a.createElement(s.a,{exact:!0,path:"/crypto-grid"},l.a.createElement(I,null)),l.a.createElement(s.a,{exact:!0,path:"/exchanges"},l.a.createElement(z,null)),l.a.createElement(s.a,{exact:!0,path:"/crypto"},l.a.createElement(_,null)),l.a.createElement(s.a,{exact:!0,path:"/crypto/:coinId"},l.a.createElement(se,null)),l.a.createElement(s.a,{exact:!0,path:"/news"},l.a.createElement(fe,null))))),l.a.createElement(w,null)))},ke=t(28),we=t(10),xe=Object(we.a)({reducer:(Ne={},Object(ke.a)(Ne,D.reducerPath,D.reducer),Object(ke.a)(Ne,Ee.reducerPath,Ee.reducer),Ne),middleware:function(e){return e().concat(D.middleware)}});t(344);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o.a,null,l.a.createElement(i.a,{store:xe},l.a.createElement(be,null)))),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.8285c44d.chunk.js.map