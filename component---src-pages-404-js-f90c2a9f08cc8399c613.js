(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(157),l=n(155);e.default=function(){return i.a.createElement(s.a,null,i.a.createElement(l.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),i=n.n(a),s=n(4),l=n.n(s),r=n(33),o=n.n(r);n.d(e,"a",function(){return o.a});n(161);var c=i.a.createContext({}),u=function(t){return i.a.createElement(c.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},155:function(t,e,n){"use strict";var a=n(156),i=n(0),s=n.n(i),l=n(4),r=n.n(l),o=n(165),c=n.n(o);function u(t){var e=t.description,n=t.lang,i=t.meta,l=t.title,r=a.data.site,o=e||r.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:l},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:o}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),title:r.a.string.isRequired},e.a=u},156:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(t,e,n){"use strict";var a=n(167),i=n(0),s=n.n(i),l=n(4),r=n.n(l),o=n(152),c=(n(154),n(75),n(159),n(34),n(76),n(7)),u=n.n(c),d=n(168),m=n.n(d),h=n(162),p=n.n(h),f=n(35),k=n.n(f),E=n(169),v=n.n(E),g=[{title:"りあん",link:"/"},{title:"未来の保育士さんへ",link:"/message"},{title:"スタッフインタビュー",link:"/interview"},{title:"教室紹介",link:"/classrooms"},{title:"見学",link:"/visit"},{title:"制度",link:"/welfare"},{title:"募集要項",link:"/employment"}],w=function(t){function e(e){var n;return(n=t.call(this,e)||this).contents=g,n.isAppeared=e.isAppeared,n.state={isOpen:!1},n.hundleClick=n.hundleClick.bind(k()(n)),n}u()(e,t);var n=e.prototype;return n.headerMenu=function(){var t=this.contents.map(function(t){return s.a.createElement("div",{key:t.link,className:v.a.listItem},s.a.createElement(o.a,{to:t.link,className:v.a.link},t.title))});return this.state.isOpen?s.a.createElement("div",{className:v.a.openMenu},t):s.a.createElement("div",{className:v.a.closeMenu},t)},n.hundleClick=function(t){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return s.a.createElement("div",null,s.a.createElement("button",{className:v.a.slideButton,onClick:this.hundleClick},this.state.isOpen?"Close":"Menu"),this.headerMenu())},e}(s.a.Component),y=[{title:"りあん",link:""},{title:"未来の保育士さんへ",link:"message"},{title:"スタッフインタビュー",link:"interview"},{title:"教室紹介",link:"classrooms"},{title:"見学",link:"visit"},{title:"制度",link:"welfare"},{title:"募集要項",link:"employment"}],I=function(t){function e(e){var n;return(n=t.call(this,e)||this).splitedUrl="undefined"!=typeof window&&window.location.href.split("/"),n.contents=y,n.setMenuClass(),n}u()(e,t);var n=e.prototype;return n.isIn=function(t,e){var n=("undefined"!=typeof window&&window.location.href).toString();return console.log(n),n.match(e)},n.tailOf=function(t){return this.splitedUrl[this.splitedUrl.length-t]},n.setMenuClass=function(){var t=this,e=this.contents.slice(1),n=!1;e.map(function(e){t.isIn(t.splitedUrl,e.link)?(e.classes=p()(m.a.listItem,m.a.current),n=!0):e.classes=p()(m.a.listItem)}),this.contents[0].classes=n?p()(m.a.listItem):p()(m.a.listItem,m.a.current)},n.hero=function(){return s.a.createElement("div",{className:m.a.hero},s.a.createElement(o.a,{to:"/",className:m.a.hero__title},"りあん RECRUIT"))},n.headerImage=function(){var t=s.a.createElement("div",{className:m.a.homeImage},s.a.createElement("div",{className:m.a.homeImage__message},s.a.createElement("strong",null,"夢と誇りを持てる",s.a.createElement("br",null),"社会のために"))),e=(this.splitedUrl,this.isIn(this.splitedUrl,this.contents[1].link)||this.isIn(this.splitedUrl,this.contents[2].link)||this.isIn(this.splitedUrl,this.contents[3].link)),n=this.isIn(this.splitedUrl,this.contents[4].link)||this.isIn(this.splitedUrl,this.contents[5].link)||this.isIn(this.splitedUrl,this.contents[6].link);return e?t=s.a.createElement("div",{className:m.a.firstImage}):n&&(t=s.a.createElement("div",{className:m.a.secondImage})),t},n.headerMenu=function(){var t=this.contents.map(function(t){return s.a.createElement("div",{key:t.link,className:t.classes},s.a.createElement(o.a,{to:t.link,className:m.a.link},t.title))});return s.a.createElement("div",{className:m.a.headerMenu},t)},n.render=function(){return s.a.createElement("header",null,s.a.createElement(w,null),this.hero(),this.headerImage(),this.headerMenu())},e}(s.a.Component),N=n(170),U=n.n(N),b=function(){return s.a.createElement("footer",{className:U.a.footer},s.a.createElement("div",{className:U.a.top},s.a.createElement("p",null,"まずはお気軽にお問い合わせ下さい！"),s.a.createElement("div",{className:U.a.top__link},s.a.createElement("a",{className:U.a.tel,href:"tel:0948-26-8700"},"Tel: 0948-26-8700"),s.a.createElement("a",{className:U.a.mail,href:"https://ws.formzu.net/dist/S57550451/",target:"_blank"},"フォーム"))),s.a.createElement("div",{className:U.a.under},s.a.createElement("h2",null,"株式会社 Lien"),s.a.createElement("a",{href:"http://www.lien-inc.net/",target:"_blank"},"オフィシャルサイトはこちらから")))},M=n(171),C=n.n(M),O=[{title:"りあん",link:""},{title:"未来の保育士さんへ",link:"message"},{title:"スタッフインタビュー",link:"interview"},{title:"教室紹介",link:"classrooms"},{title:"見学",link:"visit"},{title:"制度",link:"welfare"},{title:"募集要項",link:"employment"}],q=function(t){function e(e){var n;return(n=t.call(this,e)||this).splitedUrl="undefined"!=typeof window&&window.location.href.split("/"),n.contents=O,n}u()(e,t);var n=e.prototype;return n.tailOf=function(t){return this.splitedUrl[this.splitedUrl.length-t]},n.isIn=function(t,e){return("undefined"!=typeof window&&window.location.href).toString().match(e)},n.render=function(){return this.isIn(this.splitedUrl,this.contents[1].link)||this.isIn(this.splitedUrl,this.contents[2].link)||this.isIn(this.splitedUrl,this.contents[3].link)||this.isIn(this.splitedUrl,this.contents[4].link)||this.isIn(this.splitedUrl,this.contents[5].link)||this.isIn(this.splitedUrl,this.contents[6].link)?s.a.createElement(o.a,{to:this.homeLink,className:C.a.homeButton},"Home"):s.a.createElement("div",null)},e}(s.a.Component),T=(n(172),function(t){var e=t.children;return s.a.createElement(o.b,{query:"755544856",render:function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(I,null),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement(q,null),s.a.createElement("main",null,e)),s.a.createElement(b,null))},data:a})});T.propTypes={children:r.a.node.isRequired};e.a=T},161:function(t,e,n){var a;t.exports=(a=n(166))&&a.default||a},166:function(t,e,n){"use strict";n.r(e);n(36);var a=n(0),i=n.n(a),s=n(4),l=n.n(s),r=n(55),o=n(2),c=function(t){var e=t.location,n=o.default.getResourcesForPathnameSync(e.pathname);return n?i.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=c},167:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-f90c2a9f08cc8399c613.js.map