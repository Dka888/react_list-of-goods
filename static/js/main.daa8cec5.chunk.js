(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n,c=s(3),a=s.n(c),i=s(4),r=s(5),o=s(8),l=s(6),h=s(7),u=s(1),b=s.n(u),d=(s(13),s(14),s(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isReversed:!1,sortType:n.NONE},t.hadleClickAlphabetical=function(){t.setState({sortType:n.ALPHABET})},t.hadleClickLength=function(){t.setState({sortType:n.LENGTH})},t.hadleClickReverse=function(){t.setState({isReversed:!0})},t.hadleReset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(r.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,c=function(t,e){var s=e.sortType,c=e.isReversed,a=Object(h.a)(t);switch(s){case n.ALPHABET:a.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:a.sort((function(t,e){return t.length-e.length}))}return c&&a.reverse(),a}(p,this.state);return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(e!==n.ALPHABET&&"is-light"),onClick:this.hadleClickAlphabetical,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(e!==n.LENGTH&&"is-light"),onClick:this.hadleClickLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-warning ".concat(!s&&"is-light"),onClick:this.hadleClickReverse,children:"Reverse"}),(e!==n.NONE||s)&&Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.hadleReset,children:"Reset"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)("ul",{children:c.map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(b.a.Component);a.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.daa8cec5.chunk.js.map