(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3amr":function(e,a,t){e.exports={pageHeader:"d_l"}},WoRd:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),s=t("4XLq"),n=t("1Dkr"),o=t("3amr"),l=t.n(o),m=t("o4Kd");a.default=function(e){var a=e.data,t=Object(n.a)().formatMessage;return r.createElement(s.a,{data:a},r.createElement("div",{className:"inner"},r.createElement("header",{className:l.a.pageHeader},r.createElement("h1",{className:"site-title  no-image"},t("navigation.films"))),r.createElement(m.a,{films:a.posts})))}},XFbW:function(e,a,t){e.exports={postCard:"v_h",postCardImageLink:"v_bV",postCardImage:"v_K",postCardContentLink:"v_bW",postCardHeader:"v_bX",noImage:"v_bk",postCardPrimaryTag:"v_H",postCardTitle:"v_J",postCardContent:"v_bY",postCardExcerpt:"v_L",postCardMeta:"v_bZ",postCardBylineContent:"v_M",postCardBylineDate:"v_b0",bull:"v_x",postCardLarge:"v_b1"}},o4Kd:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t("q1tI"),s=t("q8NG"),n=t.n(s),o=t("MLiK"),l=t("1Dkr"),m=t("EJ3M"),d=t("XFbW"),i=t.n(d),c=function(e){var a=e.post,t=e.i,s=e.isHome,n=a.frontmatter.featured;return r.createElement("article",{className:i.a.postCard+" "+(s&&n&&0==t%6&&i.a.postCardLarge||"")},r.createElement(o.a,{className:i.a.postCardImageLink,to:"/"+a.frontmatter.category+"/"+a.fields.slug},r.createElement(m.a,{className:i.a.postCardImage,alt:a.frontmatter.title,fluid:a.frontmatter.image.childImageSharp.fluid})),r.createElement("div",{className:i.a.postCardContent},r.createElement(o.a,{className:i.a.postCardContentLink,to:"/"+a.frontmatter.category+"/"+a.fields.slug},r.createElement("header",{className:i.a.postCardHeader},r.createElement("h2",{className:i.a.postCardTitle},a.frontmatter.title)))))},p=function(e){var a=e.films,t=e.isHome,s=Object(l.a)().formatMessage;return r.createElement("div",{className:"inner"},r.createElement("div",{className:n.a.posts},r.createElement("div",{className:n.a.postFeed},a.nodes.map((function(e,a){return r.createElement(c,{post:e,i:a,key:a,isHome:t})})))),t?r.createElement(o.a,{to:"/filmography"},r.createElement("h3",{className:n.a.readMore}," ",t?s("general.readMore"):null)):null)}},q8NG:function(e,a,t){e.exports={posts:"j_B",postFeed:"j_C",readMore:"j_D"}}}]);
//# sourceMappingURL=component---src-pages-filmography-tsx-e5386bdfbb9af5eec7f2.js.map