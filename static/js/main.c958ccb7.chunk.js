(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{64:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(10),r=c.n(n),a=c(55),s=c.n(a),i=c(11),u=(c(64),c(20)),o=c(0),j=c.n(o),l=c(2),d=c(21),b=c(56),h=c.n(b),p=c(32),O=c(57),x=c(24),m=(Object(O.a)({apiKey:"AIzaSyB_rU5LvaoKCAbsZI8I2va6R12kGmT8cOw",authDomain:"shopping-cart-d9b6c.firebaseapp.com",projectId:"shopping-cart-d9b6c",storageBucket:"shopping-cart-d9b6c.appspot.com",messagingSenderId:"552100885948",appId:"1:552100885948:web:53e691b1697b7cf6fce7b9"}),Object(x.d)()),f=c(16),v="ADD_PRODUCT",g="REMOVE_PRODUCT",y="UPDATE_PRODUCT",N="REMOVE_WHOLE_CART",S=function(e,t){return e.findIndex((function(e){return e.id===t.id}))},C=function(e,t){switch(t.type){case v:return function(e,t){var c=S(e,t.payload),n=Object(f.a)(e),r=e[c];return c>-1?(r=Object(d.a)(Object(d.a)({},r),{},{quantity:1*r.quantity+1}),n[c]=r):n.push(t.payload),n}(e,t);case g:return function(e,t){var c=S(e,t.payload),n=Object(f.a)(e);return n.splice(c,1),n}(e,t);case N:return[];case y:return function(e,t){var c=S(e,t.payload),n=Object(f.a)(e),r=e[c],a=t.payload.quantity;return r=Object(d.a)(Object(d.a)({},r),{},{quantity:a}),n[c]=r,n}(e,t);default:return e}},w=c(14),P=c(5),k=r.a.createContext(),q=function(){return Object(n.useContext)(k)};function E(e){var t=e.children,c=Object(n.useReducer)(C,[]),r=Object(i.a)(c,2),a=r[0],s=r[1],u=Object(n.useState)([]),o=Object(i.a)(u,2),b=o[0],O=o[1],f=Object(n.useState)(null),S=Object(i.a)(f,2),q=S[0],E=S[1],D=Object(n.useState)(!0),I=Object(i.a)(D,2),R=I[0],A=I[1],L=Object(p.b)(),U=Object(w.f)();Object(n.useEffect)((function(){h.a.get("https://fakestoreapi.com/products").then((function(e){var t=e.data;O(t)}))}),[]),Object(n.useEffect)((function(){return Object(p.c)(L,(function(e){E(e),T(),A(!1)}))}),[L]);var T=function(){s({type:N})},_={cart:a,product:b,currentUser:q,addProduct:function(e){s({type:v,payload:Object(d.a)(Object(d.a)({},e),{},{quantity:1})})},removeProduct:function(e){s({type:g,payload:e})},updateProduct:function(e){s({type:y,payload:e})},signup:function(e,t){return Object(p.a)(L,e,t).then((function(){return alert("Registration successful!")})).catch((function(){return alert("Registration fail! Please try again")}))},login:function(e,t){return Object(p.d)(L,e,t).then((function(){return U.push("/Shopping-Cart"),alert("Login successful!")})).catch((function(){return alert("Your email or password is not correct!")}))},logOut:function(){return Object(p.e)(L).then((function(){return console.log("Sign out")})).catch((function(e){return console.log(e.message)}))},checkOut:function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(x.a)(Object(x.b)(m,"PurchaseInfo"),t);case 3:if(!e.sent.id){e.next=6;break}return e.abrupt("return",alert("Your purchase was successful!"));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error adding document: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()};return Object(P.jsx)(k.Provider,{value:_,children:!R&&t})}function D(e){var t=e.isDropdownOpen,c=e.setIsDropdownOpen,n=q(),r=n.cart,a=n.currentUser,s=n.logOut,i=r.length>0?"(".concat(r.length,")"):"";return Object(P.jsx)("div",{className:"navbar",children:Object(P.jsxs)("nav",{className:"flex-wrapper-1",children:[Object(P.jsx)(u.b,{className:"nav-link",to:"/Shopping-Cart",children:"Shop"}),Object(P.jsxs)(u.b,{className:"nav-link",to:"/Shopping-Cart/cart",children:["Cart ",i]}),a?Object(P.jsxs)("div",{className:"dropdown",children:[Object(P.jsx)("div",{className:"nav-link dd",to:"/login",onClick:function(){return c(!t)},children:a.email}),t&&Object(P.jsxs)("div",{className:"dropdown-menu",children:[Object(P.jsx)(u.b,{className:"nav-link dd",to:"/Shopping-Cart/purchasehistory",children:"Purchase History"}),Object(P.jsx)(u.b,{className:"nav-link dd",to:"/Shopping-Cart/login",onClick:function(){s(),c(!1)},children:"Log out"})]})]}):Object(P.jsxs)("div",{className:"flex-wrapper-2",children:[Object(P.jsx)(u.b,{className:"nav-link",to:"/Shopping-Cart/signup",children:"Sign up"}),"/",Object(P.jsx)(u.b,{className:"nav-link",to:"/Shopping-Cart/login",children:"Login"})]})]})})}function I(e){var t=e.item,c=e.addProduct,n=e.removeProduct,r=e.updateProduct,a=t.image,s=t.price,i=t.title,u=t.description,o=t.quantity;return Object(P.jsxs)("div",{className:"product-card",children:[Object(P.jsx)("img",{src:a,alt:"product"}),Object(P.jsxs)("div",{className:"product-info",children:[Object(P.jsx)("h3",{className:"line-clamp-2",children:i}),c&&Object(P.jsx)("p",{className:"description line-clamp-3",children:u}),Object(P.jsxs)("div",{className:"price-and-quantity",children:[c?Object(P.jsxs)("strong",{className:"price",children:[s,"$"]}):Object(P.jsxs)("strong",{className:"price",children:[(s*o).toFixed(2),"$"]}),!c&&Object(P.jsx)("input",{className:"quantity",type:"number",onChange:function(e){return function(e){var c=e.target.value;c>999||(""===c||c>0)&&r(Object(d.a)(Object(d.a)({},t),{},{quantity:e.target.value}))}(e)},value:o})]}),c&&Object(P.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"Add to cart"}),!c&&Object(P.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Remove"})]})]})}function R(){var e=q(),t=e.product,c=e.addProduct;return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"shop",children:[Object(P.jsx)("h2",{className:"header",children:"Shop"}),Object(P.jsx)("div",{className:"shop-row",children:t.map((function(e){return Object(P.jsx)(I,{item:e,addProduct:c},e.id)}))})]})})}function A(e){var t=e.submitHandler,c=e.total,r=Object(n.useState)(""),a=Object(i.a)(r,2),s=a[0],u=a[1],o=Object(n.useState)(""),j=Object(i.a)(o,2),l=j[0],d=j[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),p=h[0],O=h[1],x=q().currentUser;if(!x)return Object(P.jsx)("div",{className:"alert-info",children:"Please login your account to purchase"});var m=x.email;return Object(P.jsxs)("div",{className:"payment-form",children:[Object(P.jsx)("h3",{children:"Billing Address"}),Object(P.jsxs)("form",{onSubmit:function(e){return t(e,{fullName:s,userEmail:m,address:l,phoneNumber:p,total:c})},children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Full Name"}),Object(P.jsx)("input",{type:"text",required:!0,value:s,onChange:function(e){return u(e.target.value)}})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Email"}),Object(P.jsx)("input",{type:"text",readOnly:!0,value:m})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Address"}),Object(P.jsx)("input",{type:"text",required:!0,value:l,onChange:function(e){return d(e.target.value)}})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Phone Number"}),Object(P.jsx)("input",{type:"number",required:!0,value:p,onChange:function(e){return O(e.target.value)}})]}),Object(P.jsxs)("h4",{children:["Total: ",c," $"]}),Object(P.jsx)("button",{type:"submit",children:"Purchase"})]})]})}function L(){var e=q(),t=e.cart,c=e.removeProduct,n=e.updateProduct,r=e.checkOut,a=e.currentUser,s=t.length>0,i=t.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2);return s?Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"cart",children:[Object(P.jsx)("h2",{className:"header",children:"Cart"}),Object(P.jsxs)("div",{className:"flex-wrapper",children:[Object(P.jsx)("div",{className:"shopping-cart",children:t.map((function(e){return Object(P.jsx)(I,{item:e,removeProduct:c,updateProduct:n},e.id)}))}),Object(P.jsx)(A,{submitHandler:function(e,c){console.log(e),e.preventDefault();for(var n=0;n<t.length;n++)if(!t[n].quantity)return alert("please dont leave quantity blank");var s=t.map((function(e){return delete e.description,delete e.rating,e})),i=a.uid;r(Object(d.a)(Object(d.a)({},c),{},{userId:i,cart:s,created:Object(x.g)()}))},total:i})]})]})}):Object(P.jsxs)("div",{className:"alert-info",children:["Your cart has no item. ",Object(P.jsx)(u.b,{to:"/Shopping-Cart",children:"Shop now"})]})}function U(){var e=q().signup,t=Object(n.useState)(""),c=Object(i.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),j=o[0],l=o[1],d=Object(n.useState)(""),b=Object(i.a)(d,2),h=b[0],p=b[1];return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"sign-up",children:[Object(P.jsx)("h2",{children:"Sign up"}),Object(P.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),j!==h)return alert("passwords do not match");e(r,j)},children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Email"}),Object(P.jsx)("input",{type:"email",required:!0,value:r,onChange:function(e){return a(e.target.value)}})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Password"}),Object(P.jsx)("input",{type:"password",required:!0,value:j,onChange:function(e){return l(e.target.value)}})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Password Confirm"}),Object(P.jsx)("input",{type:"password",required:!0,value:h,onChange:function(e){return p(e.target.value)}})]}),Object(P.jsx)("small",{className:"autofill",onClick:function(){l("123456"),p("123456")},children:'Autofill password with "123456"'}),Object(P.jsx)("button",{type:"submit",children:"Submit"}),Object(P.jsxs)("div",{children:["Already have an account?"," ",Object(P.jsx)(u.b,{to:"/Shopping-Cart/login",children:"Log in"})]})]})]})})}function T(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(i.a)(a,2),o=s[0],j=s[1],l=q().login;return Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"login",children:[Object(P.jsx)("h2",{children:"Login"}),Object(P.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(c,o),console.log("submit")},children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Email"}),Object(P.jsx)("input",{type:"email",required:!0,value:c,onChange:function(e){return r(e.target.value)}})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("h4",{children:"Password"}),Object(P.jsx)("input",{type:"password",required:!0,value:o,onChange:function(e){return j(e.target.value)}})]}),Object(P.jsx)("button",{type:"submit",children:"Submit"}),Object(P.jsxs)("div",{children:["Need an account? ",Object(P.jsx)(u.b,{to:"/Shopping-Cart/signup",children:"Sign up"})]})]})]})})}function _(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(i.a)(a,2),u=s[0],o=s[1],d=q().currentUser;Object(n.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(x.f)(Object(x.b)(m,"PurchaseInfo"),Object(x.h)("userId","==",d.uid),Object(x.e)("created","desc")),e.next=3,Object(x.c)(t);case 3:c=e.sent,n=[],c.forEach((function(e){n.push(e.data())})),r(n),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d.uid]);var b=c.map((function(e){return e.cart}));return u?Object(P.jsx)("div",{className:"alert-info",children:"Loading ..."}):0===c.length?Object(P.jsx)("div",{className:"alert-danger",children:"You haven't bought anything yet ..."}):Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"purchase-history",children:[Object(P.jsx)("h2",{className:"header",children:"Purchase History"}),Object(P.jsx)(H,{allCarts:b,receipts:c})]})})}var H=function(e){var t=e.allCarts,c=e.receipts;return t.map((function(e,t){return Object(P.jsx)($,{singleCart:e,receipt:c[t]},t)}))},$=function(e){var t=e.singleCart,c=e.receipt,n=c.total,r=c.created,a=new Date(1e3*r.seconds).toLocaleString();return Object(P.jsxs)("div",{className:"single-buy",children:[t.map((function(e,t){return Object(P.jsx)(B,{item:e},t)})),Object(P.jsxs)("div",{className:"purchase-time",children:[Object(P.jsx)("strong",{children:"Purchase at:"}),a]}),Object(P.jsxs)("h4",{children:["Total: ",n,"$"]})]})},B=function(e){var t=e.item,c=t.title,n=t.image,r=t.price,a=t.quantity;return Object(P.jsxs)("div",{className:"single-item",children:[Object(P.jsx)("h4",{children:c}),Object(P.jsxs)("div",{className:"img-and-price",children:[Object(P.jsx)("div",{className:"img-wrapper",children:Object(P.jsx)("img",{src:n,alt:"\\#"})}),Object(P.jsxs)("strong",{className:"price",children:[r,"$"]})]}),Object(P.jsxs)("h4",{className:"quantity",children:["Quantity: ",a]})]})};var Y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(P.jsx)("div",{className:"app",onClick:function(e){return function(e){e.target.classList.contains("dd")||r(!1)}(e)},children:Object(P.jsx)(u.a,{children:Object(P.jsxs)(E,{children:[Object(P.jsx)(D,{isDropdownOpen:c,setIsDropdownOpen:r}),Object(P.jsxs)(w.c,{children:[Object(P.jsx)(w.a,{path:"/Shopping-Cart",exact:!0,component:R}),Object(P.jsx)(w.a,{path:"/Shopping-Cart/cart",component:L}),Object(P.jsx)(w.a,{path:"/Shopping-Cart/signup",component:U}),Object(P.jsx)(w.a,{path:"/Shopping-Cart/login",component:T}),Object(P.jsx)(w.a,{path:"/Shopping-Cart/purchasehistory",component:_})]})]})})})};s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(Y,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.c958ccb7.chunk.js.map