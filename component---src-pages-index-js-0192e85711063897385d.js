/*! For license information please see component---src-pages-index-js-0192e85711063897385d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),r=a.n(l),c=a("Bl7J"),i=a("pyUO"),o=a.n(i),s=a("TSYQ"),u=a.n(s);let m=function(e){function t(t){var a;return(a=e.call(this,t)||this).showStats=()=>{a.setState({showSts:!0})},a.hideStats=()=>{a.setState({showSts:!1})},a.nextPage=()=>{a.setState({page:(a.state.page+1)%a.pageCount})},a.render=()=>r.a.createElement("div",{className:o.a.characterSheet,onMouseEnter:a.showStats,onMouseLeave:a.hideStats,onMouseDown:a.nextPage,role:"button",tabIndex:0},r.a.createElement("figure",null,r.a.createElement("div",{className:o.a.pfp},a.pfp(),a.renderStats()),r.a.createElement("figcaption",null,r.a.createElement("span",null,"click for skill card"),r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"x-small"}},"pfp by ",r.a.createElement("a",{href:"https://twitter.com/ouroborose"},"Rose Peng"))))),a.state={showSts:!1,page:0},a.pageCount=2,a.stats=[],r.a.Children.forEach(t.children,e=>{a.stats.push(e.props.children)}),a}Object(n.a)(t,e);var a=t.prototype;return a.pfp=function(){return r.a.createElement("img",{src:"https://jmaliksitest.files.wordpress.com/2021/01/a0a37a8d-3390-46b9-83f2-9b520987c568_1_105_c.jpeg",alt:"bulbasaur in a suit"})},a.renderStats=function(){let e=this.stats.length/this.pageCount;return r.a.createElement("div",{className:o.a.statdiv},r.a.createElement("ul",{className:o.a.statlist},this.stats.slice(e*this.state.page,e+e*this.state.page).map(e=>r.a.createElement("li",{key:e},e))))},t}(r.a.Component),p=function(e){function t(t){var a;(a=e.call(this,t)||this).onMouseEnter=()=>{a.setState({clean:!0})};const{name:n,domain:l}=t;return a.displayToken=String.fromCharCode(65312),a.cleanEmail=`${n}@${l}`,a.email=Array.prototype.map.call(`${n}${a.displayToken}${l}`,e=>e+String.fromCharCode(8291)),a.state={clean:!1},a}return Object(n.a)(t,e),t.prototype.render=function(){return this.state.clean?r.a.createElement("a",{href:"mailto:"+this.cleanEmail},this.cleanEmail):r.a.createElement("a",{href:"mailto:gotcha@wobscale.lol');DROP TABLE emails;--",onMouseDown:this.onMouseEnter,onMouseEnter:this.onMouseEnter},this.email)},t}(r.a.Component);function h(){return r.a.createElement("div",null,r.a.createElement("h2",null,"contact"),r.a.createElement("div",{className:o.a.contactSection},r.a.createElement("div",{className:o.a.contactLabel},"come talk"),r.a.createElement("div",{className:o.a.contactInfo},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p,{name:"joe",domain:"wobscale.lol"}))))),r.a.createElement("div",{className:o.a.contactSection},r.a.createElement("div",{className:o.a.contactLabel},"or just stalk"),r.a.createElement("div",{className:o.a.contactInfo},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/jmaliksi/"},"GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.linkedin.com/pub/joseph-maliksi/35/b/903"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/ch00beh"},"Twitter"))))))}t.default=e=>{let{data:t}=e;return r.a.createElement(c.a,{highlight:"About"},r.a.createElement("div",{className:u()(o.a.content,"popCard")},r.a.createElement("h1",null,"hi"),r.a.createElement("h2",{id:"about"},"about"),r.a.createElement(m,null,r.a.createElement("li",null,"wrangling: +2"),r.a.createElement("li",null,"creativity: +1"),r.a.createElement("li",null,"programming: +3"),r.a.createElement("li",null,"jokes: +3"),r.a.createElement("li",null,"impulse control: -1"),r.a.createElement("li",null,"lawyer: -1"),r.a.createElement("li",null,"napping: -2"),r.a.createElement("li",null,"relaxing: +2"),r.a.createElement("li",null,"balance: +1"),r.a.createElement("li",null,"speaking: -1"),r.a.createElement("li",null,"quietness: -1"),r.a.createElement("li",null,"crafting: +2"),r.a.createElement("li",null,"friend shape: +2"),r.a.createElement("li",null,"cooking: +1"),r.a.createElement("li",null,"executive function: -2"),r.a.createElement("li",null,"computers: -0")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.wordpressPage.content},className:o.a.about}),r.a.createElement(h,null)))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},pyUO:function(e,t,a){e.exports={content:"index-module--content--2FCb0",contactSection:"index-module--contactSection--3-3e-",contactLabel:"index-module--contactLabel--1_IOZ",contactInfo:"index-module--contactInfo--JRH8v",pfp:"index-module--pfp--2bUkb",characterSheet:"index-module--characterSheet--20Xb4",statdiv:"index-module--statdiv--2V40D",statlist:"index-module--statlist--2nZep",about:"index-module--about--jXzWA"}}}]);
//# sourceMappingURL=component---src-pages-index-js-0192e85711063897385d.js.map