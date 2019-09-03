(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{108:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(4),c=a(3),o=a(5),l=a(0),i=a.n(l),s=a(106),u=a(86),p=a(19),d=a(96),m=a(89),b=a.n(m);function h(){var e=Object(d.a)(["\n    query($id: ID!){\n        product(id:$id){\n            id, name, description, category, price\n        }\n    }\n"]);return h=function(){return e},e}function f(){var e=Object(d.a)(["\n    query($page: Int, $pageSize: Int, $sort: String){\n        products{\n            totalSize,\n            products(page:$page, pageSize:$pageSize, sort:$sort){\n                id, name, category, price\n            }\n        }\n    }\n"]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\n    query($onlyShipped: Boolean, $page:Int, $pageSize:Int, $sort:String){\n        orders(onlyUnshipped: $onlyShipped){\n            totalSize,\n            orders(page: $page, pageSize: $pageSize, sort: $sort) {\n                id, name, email, shipped\n                products { quantity, product { price }}\n            }\n        }\n    }\n"]);return g=function(){return e},e}var E=b()(g()),v=b()(f()),O=b()(h()),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).calcTotal=function(e){return e.reduce(function(e,t){return e+t.quantity*t.product.price},0).toFixed(2)},a.getShipping=function(e){return e.shipped?i.a.createElement("i",{className:"fa fa-shipping-fast text-success"}):i.a.createElement("i",{className:"fa fa-exclamation-circle text-danger"})},a.render=function(){return i.a.createElement("tr",null,i.a.createElement("td",null,a.props.order.id),i.a.createElement("td",null,a.props.order.name),i.a.createElement("td",null,a.props.order.email),i.a.createElement("td",{className:"text-right"},"$",a.calcTotal(a.props.order.products)),i.a.createElement("td",{className:"text-center"},i.a.createElement("button",{className:"btn btn-sm btn-block bg-muted",onClick:a.props.toggleShipped},a.getShipping(a.props.order),i.a.createElement("span",null,a.props.order.shipped?" Shipped":" Pending"))))},a}return Object(o.a)(t,e),t}(l.Component),j=a(32),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",{className:"bg-secondary text-white text-center mt-2 p-2"},a.props.totalSize," Order(s)"),i.a.createElement("div",{className:"mx-2"},i.a.createElement(j.a,Object.assign({keys:["ID","Name"]},a.props)),i.a.createElement("table",{className:"table table-sm table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Email"),i.a.createElement("th",{className:"text-right"},"Total"),i.a.createElement("th",{className:"text-center"},"Shipped"))),i.a.createElement("tbody",null,a.props.orders.map(function(e){return i.a.createElement(N,{key:e.id,order:e,toggleShipped:function(){return a.props.toggleShipped(e.id,!e.shipped)}})})))))},a}return Object(o.a)(t,e),t}(l.Component);function S(){var e=Object(d.a)(["\n    mutation($id: ID!){\n        deleteProduct(id:$id){\n            id\n        }\n    }\n"]);return S=function(){return e},e}function w(){var e=Object(d.a)(["\n    mutation($product: productUpdate){\n        updateProduct(product:$product){\n            id, name, category, description, price\n        }\n    }\n"]);return w=function(){return e},e}function x(){var e=Object(d.a)(["\n    mutation($product: productStore){\n        storeProduct(product:$product){\n            id, name, category, description, price\n        }\n    }\n"]);return x=function(){return e},e}function z(){var e=Object(d.a)(["\n    mutation($id: ID!, $shipped: Boolean!) {\n        shipOrder(id: $id, shipped: $shipped) {\n        id, shipped\n    }\n}"]);return z=function(){return e},e}var C=b()(z()),$=b()(x()),k=b()(w()),P=b()(S()),A={onlyShipped:!1,page:1,pageSize:10,sort:"id"},M=Object(u.compose)(Object(u.graphql)(E,{options:function(e){return{variables:A}},props:function(e){var t=e.data,a=t.loading,n=t.orders,r=t.refetch;return{totalSize:a?0:n.totalSize,orders:a?[]:n.orders,currentPage:A.page,pageCount:a?0:Math.ceil(n.totalSize/A.pageSize),navigateToPage:function(e){A.page=Number(e),r(A)},pageSize:A.pageSize,setPageSize:function(e){A.pageSize=Number(e),r(A)},sortKey:A.sort,setSortProperty:function(e){A.sort=e,r(A)}}}}),Object(u.graphql)(C,{props:function(e){var t=e.mutate;return{toggleShipped:function(e,a){return t({variables:{id:e,shipped:a}})}}}}))(y),q=a(82),I=a(76),D=a(80),T=a(28),B=a(8),F=a(77),L=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return i.a.createElement("tr",null,i.a.createElement("td",null,a.props.product.id),i.a.createElement("td",null,a.props.product.name),i.a.createElement("td",null,a.props.product.category),i.a.createElement("td",{className:"text-right"}," $",a.props.product.price.toFixed(2)," "),i.a.createElement("td",{className:"text-center"},i.a.createElement("button",{className:"btn btn-sm btn-danger m-1",onClick:function(){return a.props.deleteProduct(a.props.product.id)}},"Delete"),i.a.createElement(F.a,{to:"/admin/products/".concat(a.props.product.id),className:"btn btn-sm btn-warning"},"Edit")))},a}return Object(o.a)(t,e),t}(l.Component),Q=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",{className:"bg-secondary text-white text-center mt-2 p-2"},a.props.totalSize," Product(s)"),i.a.createElement("div",{className:"mx-2"},i.a.createElement(j.a,Object.assign({key:["ID","Name","Category"]},a.props)),i.a.createElement("table",{className:"table table-sm table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Category"),i.a.createElement("th",{className:"text-right"},"Price"),i.a.createElement("th",{className:"text-center"},"Operations"))),i.a.createElement("tbody",null,a.props.products.map(function(e){return i.a.createElement(L,{key:e.id,product:e,deleteProduct:a.props.deleteProduct})})))),i.a.createElement("div",{className:"text-center"},i.a.createElement(F.a,{to:"/admin/products/create",className:"btn btn-primary"},"Create Product")))},a}return Object(o.a)(t,e),t}(l.Component),U={page:1,pageSize:10,sort:"id"},J=Object(u.compose)(Object(u.graphql)(v,{options:function(e){return{variables:U}},props:function(e){var t=e.data,a=t.loading,n=t.products,r=t.refetch;return{totalSize:a?0:n.totalSize,products:a?[]:n.products,currentPage:U.page,pageCount:a?0:Math.ceil(n.totalSize/U.pageSize),navigateToPage:function(e){U.page=Number(e),r(U)},pageSize:U.pageSize,setPageSize:function(e){U.pageSize=Number(e),r(U)},sortKey:U.sort,setSortProperty:function(e){U.sort=e,r(U)}}}}),Object(u.graphql)(P,{options:{update:function(e,t){var a=t.data.deleteProduct.id,n={query:v,variables:U},r=e.readQuery(n);r.products.products=r.products.products.filter(function(e){return e.id!==a}),r.products.totalSize=r.products.totalSize-1,e.writeQuery(Object(B.a)({},n,{data:r}))}},props:function(e){var t=e.mutate;return{deleteProduct:function(e){return t({variables:{id:e}})}}}}))(Q),K=a(16),V=a(6),G=a(31),H=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).navigate=function(){return a.props.history.push("/admin/products")},a.defaultAttrs={type:"text",required:!0},a.formModel=[{label:"Name"},{label:"Description"},{label:"Category"},{label:"Price",attrs:{type:"number"}}],a.mutation=$,"edit"===a.props.mode&&(a.mutation=k,a.formModel=[{label:"ID",attrs:{disabled:!0}}].concat(Object(K.a)(a.formModel)).map(function(e){return Object(B.a)({},e,{attrs:Object(B.a)({},e.attrs,{defaultValue:a.props.product[e.label.toLowerCase()]})})})),a}return Object(o.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col bg-secondary text-white mt-2"},i.a.createElement("div",{className:"navbar-brand"},"Product Details"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col m-2"},i.a.createElement(u.Mutation,{mutation:this.mutation},function(t,a){var n=a.client;return i.a.createElement(G.a,{formModel:e.formModel,defaultAttrs:e.defaultAttrs,submitCallback:function(a){t({variables:{product:Object(B.a)({},a,{price:Number(a.price)})}}),"edit"!==e.props.mode&&n.resetStore(),e.navigate()},cancelCallback:e.navigate,submitText:"Save",cancelText:"Cancel"})}))))}}]),t}(l.Component),R=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return i.a.createElement(u.Query,{query:O,variables:{id:a.props.match.params.id}},function(e){var t=e.loading,n=e.data;return t?null:i.a.createElement(H,Object.assign({},a.props,{product:n.product,mode:"edit"}))})},a}return Object(o.a)(t,e),t}(l.Component),W=a(81),X=a(39),Y=function(e){return function(t){function a(){var t,o;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),u=0;u<l;u++)s[u]=arguments[u];return(o=Object(r.a)(this,(t=Object(c.a)(a)).call.apply(t,[this].concat(s)))).render=function(){return i.a.createElement(X.a.Consumer,null,function(t){return i.a.createElement(e,Object.assign({},o.props,t))})},o}return Object(o.a)(a,t),a}(l.Component)},Z=Object(W.a)(Y(function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).authenticate=function(e){a.props.authenticate(e).catch(function(e){return a.setState({errorMessage:e.message})}).then(a.props.history.push("/admin"))},a.render=function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row mt-2"},i.a.createElement("div",{className:"col bg-secondary text-white"},i.a.createElement("div",{className:"navbar-brand"},"Enter as an Admin"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col m-2"},null!=a.state.errorMessage&&i.a.createElement("h4",{className:"bg-danger text-center text-white m-1 p-2"},a.state.errorMessage),i.a.createElement(G.a,{formModel:a.formModel,defaultAttrs:a.defaultAttrs,submitCallback:a.authenticate,submitText:"Login",cancelCallback:function(){return a.props.history.push("/")},cancelText:"Cancel"}))))},a.state={errorMessage:null},a.defaultAttrs={required:!0},a.formModel=[{label:"Username",attrs:{defaultValue:"admin"}},{label:"Password",attrs:{type:"password"}}],a}return Object(o.a)(t,e),t}(l.Component)));t.default=Y(function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).render=function(){return i.a.createElement(u.ApolloProvider,{client:a.client},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col bg-info text-white"},i.a.createElement("div",{className:"navbar-brand"},"Steven's Shop"))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 col-md-2 p-2"},i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light m-0 p-0"},i.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(e){return a.setState(function(e){return{click:!e.click}})}},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse ".concat(a.state.click?"show":"")},i.a.createElement("ul",{className:"navbar-nav flex-md-column w-100  justify-content-between"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(T.a,{to:"/admin/products"},"Products")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(T.a,{to:"/admin/orders"},"Orders")),i.a.createElement("br",null),!a.props.isAuthenticated&&i.a.createElement("li",{className:"nav-item mr-3"},i.a.createElement(T.a,{to:"/shop",className:"nav-link btn btn-block btn-success m-2"},"Go Back to Shop")),a.props.isAuthenticated&&i.a.createElement("li",{className:"nav-item mr-3"},i.a.createElement("button",{className:"btn btn-block btn-success m-2",onClick:a.props.signout},"Log Out")))))),i.a.createElement("div",{className:"col p-2"},i.a.createElement(q.a,null,!a.props.isAuthenticated&&i.a.createElement(I.a,{component:Z}),i.a.createElement(I.a,{path:"/admin/orders",component:M}),i.a.createElement(I.a,{path:"/admin/products/create",component:H}),i.a.createElement(I.a,{path:"/admin/products/:id",component:R}),i.a.createElement(I.a,{path:"/admin/products/",component:J}),i.a.createElement(D.a,{to:"/admin/products"}))))))},a.state={click:!1},a.client=new s.a({uri:p.a,request:function(e){return e.setContext({headers:{Authorization:"Bearer<".concat(a.props.webToken,">")}})}}),a}return Object(o.a)(t,e),t}(l.Component))}}]);
//# sourceMappingURL=4.36819705.chunk.js.map