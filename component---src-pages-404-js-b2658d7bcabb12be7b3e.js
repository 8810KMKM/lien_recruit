(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(157),s=n(155);t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(s.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),i=n.n(a),l=n(4),s=n.n(l),r=n(33),o=n.n(r);n.d(t,"a",function(){return o.a});n(161);var c=i.a.createContext({}),u=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,n){"use strict";var a=n(156),i=n(0),l=n.n(i),s=n(4),r=n.n(s),o=n(165),c=n.n(o);function u(e){var t=e.description,n=e.lang,i=e.meta,s=e.title,r=a.data.site,o=t||r.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),title:r.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(e,t,n){"use strict";var a=n(167),i=n(0),l=n.n(i),s=n(4),r=n.n(s),o=n(152),c=(n(75),n(159),n(34),n(154),n(7)),u=n.n(c),m=n(168),d=n.n(m),h=n(162),p=n.n(h),f=n(35),k=n.n(f),E=n(169),g=n.n(E),v=[{title:"りあん",link:"/"},{title:"未来の保育士さんへ",link:"/message"},{title:"スタッフインタビュー",link:"/interview"},{title:"教室紹介",link:"/classrooms"},{title:"見学",link:"/visit"},{title:"制度",link:"/welfare"},{title:"募集要項",link:"/employment"}],y=function(e){function t(t){var n;return(n=e.call(this,t)||this).contents=v,n.isAppeared=t.isAppeared,n.state={isOpen:!1},n.hundleClick=n.hundleClick.bind(k()(n)),n}u()(t,e);var n=t.prototype;return n.headerMenu=function(){var e=this.contents.map(function(e){return l.a.createElement("div",{key:e.link,className:g.a.listItem},l.a.createElement(o.a,{to:e.link,className:g.a.link},e.title))});return this.state.isOpen?l.a.createElement("div",{className:g.a.openMenu},e):l.a.createElement("div",{className:g.a.closeMenu},e)},n.hundleClick=function(e){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return l.a.createElement("div",null,l.a.createElement("button",{className:g.a.slideButton,onClick:this.hundleClick},this.state.isOpen?"Close":"Menu"),this.headerMenu())},t}(l.a.Component),w=[{title:"りあん",link:""},{title:"未来の保育士さんへ",link:"message"},{title:"スタッフインタビュー",link:"interview"},{title:"教室紹介",link:"classrooms"},{title:"見学",link:"visit"},{title:"制度",link:"welfare"},{title:"募集要項",link:"employment"}],I=function(e){function t(t){var n;return(n=e.call(this,t)||this).contents=w,n.setMenuClass(),n.result1=!!(n.isIn(n.contents[1].link)||n.isIn(n.contents[2].link)||n.isIn(n.contents[3].link)),n.result2=!!(n.isIn(n.contents[4].link)||n.isIn(n.contents[5].link)||n.isIn(n.contents[6].link)),console.log(n.result1),console.log(n.result2),n}u()(t,e);var n=t.prototype;return n.isIn=function(e){return("undefined"!=typeof window&&window.location.href).toString().match(e)},n.tailOf=function(e){return this.splitedUrl[this.splitedUrl.length-e]},n.setMenuClass=function(){var e=this,t=this.contents.slice(1),n=!1;t.map(function(t){e.isIn(t.link)?(t.classes=p()(d.a.listItem,d.a.current),n=!0):t.classes=p()(d.a.listItem)}),this.contents[0].classes=n?p()(d.a.listItem):p()(d.a.listItem,d.a.current)},n.hero=function(){return l.a.createElement("div",{className:d.a.hero},l.a.createElement(o.a,{to:"/",className:d.a.hero__title},"りあん RECRUIT"))},n.headerImage=function(){console.log(this.result1),console.log(this.result2);var e=l.a.createElement("div",{className:d.a.homeImage},l.a.createElement("div",{className:d.a.homeImage__message},l.a.createElement("strong",null,"夢と誇りを持てる",l.a.createElement("br",null),"社会のために")));return this.result1?e=l.a.createElement("div",{className:d.a.firstImage}):this.result2&&(e=l.a.createElement("div",{className:d.a.secondImage})),e},n.headerMenu=function(){var e=this.contents.map(function(e){return l.a.createElement("div",{key:e.link,className:e.classes},l.a.createElement(o.a,{to:e.link,className:d.a.link},e.title))});return l.a.createElement("div",{className:d.a.headerMenu},e)},n.render=function(){return l.a.createElement("header",null,l.a.createElement(y,null),this.hero(),this.headerImage(),this.headerMenu())},t}(l.a.Component),N=n(170),b=n.n(N),M=function(){return l.a.createElement("footer",{className:b.a.footer},l.a.createElement("div",{className:b.a.top},l.a.createElement("p",null,"まずはお気軽にお問い合わせ下さい！"),l.a.createElement("div",{className:b.a.top__link},l.a.createElement("a",{className:b.a.tel,href:"tel:0948-26-8700"},"Tel: 0948-26-8700"),l.a.createElement("a",{className:b.a.mail,href:"https://ws.formzu.net/dist/S57550451/",target:"_blank"},"フォーム"))),l.a.createElement("div",{className:b.a.under},l.a.createElement("h2",null,"株式会社 Lien"),l.a.createElement("a",{href:"http://www.lien-inc.net/",target:"_blank"},"オフィシャルサイトはこちらから")))},C=(n(76),n(171)),U=n.n(C),O=[{title:"りあん",link:""},{title:"未来の保育士さんへ",link:"message"},{title:"スタッフインタビュー",link:"interview"},{title:"教室紹介",link:"classrooms"},{title:"見学",link:"visit"},{title:"制度",link:"welfare"},{title:"募集要項",link:"employment"}],q=function(e){function t(t){var n;return(n=e.call(this,t)||this).splitedUrl="undefined"!=typeof window&&window.location.href.split("/"),n.contents=O,n}u()(t,e);var n=t.prototype;return n.tailOf=function(e){return this.splitedUrl[this.splitedUrl.length-e]},n.isIn=function(e,t){return("undefined"!=typeof window&&window.location.href).toString().match(t)},n.render=function(){return this.isIn(this.splitedUrl,this.contents[1].link)||this.isIn(this.splitedUrl,this.contents[2].link)||this.isIn(this.splitedUrl,this.contents[3].link)||this.isIn(this.splitedUrl,this.contents[4].link)||this.isIn(this.splitedUrl,this.contents[5].link)||this.isIn(this.splitedUrl,this.contents[6].link)?l.a.createElement(o.a,{to:this.homeLink,className:U.a.homeButton},"Home"):l.a.createElement("div",null)},t}(l.a.Component),T=(n(172),function(e){var t=e.children;return l.a.createElement(o.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement(q,null),l.a.createElement("main",null,t)),l.a.createElement(M,null))},data:a})});T.propTypes={children:r.a.node.isRequired};t.a=T},161:function(e,t,n){var a;e.exports=(a=n(166))&&a.default||a},166:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),i=n.n(a),l=n(4),s=n.n(l),r=n(55),o=n(2),c=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-b2658d7bcabb12be7b3e.js.map