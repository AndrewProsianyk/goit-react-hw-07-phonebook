(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={label:"Filter_label__1vclj",input:"Filter_input__nJOEi"}},58:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=n(5),u=n(21),b=n(13),i=function(t){return t.contacts.contacts},l=function(t){return t.contacts.filter},j=Object(b.a)([i,l],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),d=n(11),O=n.n(d),f=n(2),m=Object(f.b)("contacts/fetchContactRequest"),h=Object(f.b)("contacts/fetchContactSuccess"),p=Object(f.b)("contacts/fetchContactError"),_=Object(f.b)("contacts/addContactRequest"),x=Object(f.b)("contacts/addContactSuccess"),C=Object(f.b)("contacts/addContactError"),v=Object(f.b)("contacts/deleteContactRequest"),g=Object(f.b)("contacts/deleteContactSuccess"),N=Object(f.b)("contacts/deleteContactError"),y=Object(f.b)("contacts/changeFilter");O.a.defaults.baseURL="http://localhost:4040";var L=n(7),w=n.n(L),k=n(1);var F=function(){var t=Object(s.c)(),e=Object(s.d)(i),n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],o=a[1],b=Object(c.useState)(""),l=Object(u.a)(b,2),j=l[0],d=l[1],f=function(t){switch(t.currentTarget.name){case"name":o(t.currentTarget.value);break;case"number":d(t.currentTarget.value);break;default:return}};return Object(k.jsxs)("form",{className:w.a.form,onSubmit:function(n){n.preventDefault(),e.map((function(t){return t.name})).includes(r)?alert("You already have ".concat(r," in contacs.")):(t(function(t,e){return function(n){var c={name:t,number:e};n(_()),O.a.post("/contacts",c).then((function(t){var e=t.data;return n(x(e))})).catch((function(t){return n(C(t))}))}}(r,j)),o(""),d(""))},children:[Object(k.jsxs)("label",{className:w.a.label,children:[Object(k.jsx)("span",{className:w.a.name,children:"Name"}),Object(k.jsx)("input",{className:w.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:f,value:r})]}),Object(k.jsxs)("label",{className:w.a.label,children:[Object(k.jsx)("span",{children:"Number"}),Object(k.jsx)("input",{className:w.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:f})]}),Object(k.jsx)("button",{className:w.a.button,type:"submit",children:"Add contact"})]})},A=n(20),E=n.n(A),I=function(){var t=Object(s.c)(),e=Object(s.d)(l);return Object(k.jsxs)("label",{className:E.a.label,children:[Object(k.jsx)("span",{children:"Let's find somebody"}),Object(k.jsx)("input",{className:E.a.input,type:"text",onChange:function(e){return t(y(e.currentTarget.value))},value:e})]})},S=n(9),q=n.n(S),T=function(){var t=Object(s.c)();Object(c.useEffect)((function(){t((function(t){t(m()),O.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))}))}),[t]);var e=Object(s.d)(j);return e.length>0?Object(k.jsx)("div",{children:Object(k.jsx)("ul",{className:q.a.contactList,children:e.map((function(e){return Object(k.jsxs)("li",{className:q.a.listItem,children:[Object(k.jsxs)("span",{className:q.a.name,children:[e.name,":"]}),Object(k.jsx)("span",{className:q.a.number,children:e.number}),Object(k.jsx)("button",{className:q.a.button,onClick:function(){return t((n=e.id,function(t){t(v()),O.a.delete("/contacts/".concat(n)).then((function(){return t(g(n))})).catch((function(e){return t(N(e))}))}));var n},children:"\u0445"})]},e.id)}))})}):Object(k.jsx)("p",{children:"No contacts yet."})};var z,R,J=Object(s.b)()((function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Phonebook"}),Object(k.jsx)(F,{}),Object(k.jsx)("h2",{children:"Contacts"}),Object(k.jsx)(I,{}),Object(k.jsx)(T,{})]})})),Z=n(15),M=n(3),B=n(6),U=Object(f.c)([],(z={},Object(M.a)(z,x,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(M.a)(z,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(M.a)(z,h,(function(t,e){return e.payload})),z)),D=Object(f.c)("",Object(M.a)({},y,(function(t,e){return e.payload}))),K=Object(f.c)(!1,(R={},Object(M.a)(R,x,(function(){return!1})),Object(M.a)(R,_,(function(){return!0})),Object(M.a)(R,C,(function(){return!1})),Object(M.a)(R,g,(function(){return!1})),Object(M.a)(R,v,(function(){return!0})),Object(M.a)(R,N,(function(){return!1})),Object(M.a)(R,h,(function(){return!1})),Object(M.a)(R,m,(function(){return!0})),Object(M.a)(R,p,(function(){return!1})),R)),P=Object(f.c)(null,{}),V=Object(B.b)({contacts:U,filter:D,loading:K,error:P}),X=n(8),Y=Object(f.a)({reducer:{contacts:V},devTools:!1,middleware:Object(Z.a)(Object(f.d)({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}}))});o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(s.a,{store:Y,children:Object(k.jsx)(J,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__23gdi",input:"ContactForm_input__18KRp",button:"ContactForm_button__3MpUV",label:"ContactForm_label__2EXwN"}},9:function(t,e,n){t.exports={contactList:"ContactList_contactList__2mIOw",listItem:"ContactList_listItem__1Zwdq",button:"ContactList_button__2myIF",number:"ContactList_number__grih1",name:"ContactList_name__2cTbI"}}},[[58,1,2]]]);
//# sourceMappingURL=main.183da41a.chunk.js.map