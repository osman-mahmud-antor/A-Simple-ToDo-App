(this["webpackJsonpdaily-do"]=this["webpackJsonpdaily-do"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),c=n.n(i),s=n(7),r=n.n(s),l=(n(14),n(8)),o=n(2),d=n(3),u=n(5),j=n(4),b=(n(15),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.item,n=t.handleChange,i=t.handleSubmit;return Object(a.jsx)("div",{className:"card card-body my-3",children:Object(a.jsxs)("form",{onSubmit:i,children:[Object(a.jsxs)("div",{className:"input-group",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text bg-primary text-white",children:Object(a.jsx)("i",{className:"fa fa-book"})})}),Object(a.jsx)("input",{type:"text",className:"form-control text-capitalize",placeholder:"Enter a To Do item",value:e,onChange:n})]}),Object(a.jsx)("button",{type:"submit",className:"fa fa-plus-square-o btn btn-block btn-primary mt-3",children:" Add Item"})]})})}}]),n}(i.Component)),h=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.handleDelete;return Object(a.jsxs)("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2",children:[Object(a.jsx)("h6",{children:e}),Object(a.jsx)("div",{className:"todo-icon",children:Object(a.jsx)("span",{className:"mx-2 text-danger",onClick:n,children:Object(a.jsx)("i",{className:"fa fa-trash"})})})]})}}]),n}(i.Component),m=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.items,n=t.clearList,i=t.handleDelete;return Object(a.jsxs)("ul",{className:"list-group my-5",children:[Object(a.jsx)("h3",{className:"text-capitalize text-center",children:"To Do list"}),e.map((function(t){return Object(a.jsx)(h,{title:t.title,handleDelete:function(){return i(t.id)}},t.id)})),Object(a.jsx)("button",{className:"btn btn-danger btn-block text-capitalize mt-5",onClick:n,children:"Clear List"})]})}}]),n}(i.Component),p=(n(16),n(19)),O=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={items:[],id:0,item:"",editItem:!1},t.handleChange=function(e){t.setState({item:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n={id:t.state.id,title:t.state.item},a=[].concat(Object(l.a)(t.state.items),[n]);t.setState({items:a,item:"",id:Object(p.a)(),editItem:!1})},t.clearList=function(){t.setState({items:[]})},t.handleDelete=function(e){var n=t.state.items.filter((function(t){return t.id!==e}));t.setState({items:n})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-10 mx-auto col-md-8 mt-4",children:[Object(a.jsx)("h3",{className:"text-capitalize text-center",children:"To Do Input"}),Object(a.jsx)(b,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),Object(a.jsx)(m,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete})]})})})}}]),n}(i.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.04f687c3.chunk.js.map