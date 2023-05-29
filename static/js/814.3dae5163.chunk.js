"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[814],{9814:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,a,o,s,d,c,p,x,l,u,h,b,f=t(168),m=t(7686),g=m.Z.h1(r||(r=(0,f.Z)(["\n  font-weight: 500;\n  font-size: 30px;\n  margin-bottom: 20px;\n"]))),Z=t(3329),v=function(n){var e=n.title;return(0,Z.jsx)(g,{children:e})},w=m.Z.form(i||(i=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  width: 300px;\n  padding: 20px;\n\n  border: 2px solid black;\n  border-radius: 10px;\n"]))),j=m.Z.h2(a||(a=(0,f.Z)(["\n  align-self: flex-start;\n  font-weight: 400;\n  font-size: 24px;\n"]))),y=m.Z.input(o||(o=(0,f.Z)(["\n  width: 200px;\n  padding: 5px 10px;\n\n  border: 1px solid black;\n  border-radius: 4px;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  :hover,\n  :focus {\n    border-color: #2c9cdd;\n    outline: none;\n  }\n\n  :focus {\n    box-shadow: gray 0px 4px 8px;\n  }\n"]))),k=m.Z.button(s||(s=(0,f.Z)(["\n  width: 100px;\n  margin-left: 20px;\n  padding: 5px 10px;\n\n  border: 1px solid black;\n  border-radius: 4px;\n\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  :hover {\n    box-shadow: gray 0px 4px 8px;\n  }\n"]))),z=t(9434),C=t(3634),A=function(n){return n.contacts},L=function(n){return n.filter},_=function(){var n=(0,z.v9)(A).items,e=(0,z.I0)();return(0,Z.jsxs)(w,{action:"",onSubmit:function(t){t.preventDefault();var r=t.target.elements,i=r.name,a=r.number;n.find((function(n){return n.name===i.value}))?alert("".concat(i.value," is already in contacts.")):(e((0,C.uK)({name:i.value,number:a.value})),i.value="",a.value="")},children:[(0,Z.jsx)(j,{children:"Name"}),(0,Z.jsx)(y,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,Z.jsx)(j,{children:"Number"}),(0,Z.jsx)(y,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,Z.jsx)(k,{type:"submit",children:"Add contact"})]})},N=t(4808),q=t(2791),D=m.Z.div(d||(d=(0,f.Z)(["\n  padding: 20px;\n"]))),F=m.Z.h2(c||(c=(0,f.Z)(["\n  font-weight: 400;\n  font-size: 24px;\n  margin-bottom: 20px;\n"]))),I=m.Z.label(p||(p=(0,f.Z)(["\n  display: block;\n  font-weight: 400;\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-style: italic;\n"]))),K=m.Z.input(x||(x=(0,f.Z)(["\n  width: 200px;\n  padding: 5px 10px;\n\n  border: 1px solid black;\n  border-radius: 4px;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  :hover,\n  :focus {\n    border-color: #2c9cdd;\n    outline: none;\n  }\n\n  :focus {\n    box-shadow: gray 0px 4px 8px;\n  }\n"]))),P=m.Z.ul(l||(l=(0,f.Z)(["\n  list-style: inside;\n  margin: 0;\n  padding: 0;\n"]))),B=m.Z.li(u||(u=(0,f.Z)(["\n  display: flex;\n  gap: 40px;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 400px;\n  height: 40px;\n  margin-left: 20px;\n\n  :first-of-type {\n    margin-top: 10px;\n  }\n"]))),E=m.Z.button(h||(h=(0,f.Z)(["\n  width: 80px;\n  height: 25px;\n\n  border: 1px solid black;\n  border-radius: 4px;\n\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  :hover {\n    box-shadow: gray 0px 4px 8px;\n  }\n"]))),G=function(n){var e=n.title,t=(0,z.v9)(A),r=t.items,i=t.isLoading,a=t.error,o=(0,z.v9)(L),s=(0,z.I0)();(0,q.useEffect)((function(){s((0,C.mk)())}),[s]);return(0,Z.jsxs)(D,{children:[(0,Z.jsx)(F,{children:e}),(0,Z.jsx)(I,{children:"Find contacts by name"}),(0,Z.jsx)(K,{type:"text",name:"filter",value:o,onChange:function(n){var e=n.target.value;s((0,N.x)(e))}}),(0,Z.jsxs)(P,{children:[i&&(0,Z.jsx)("h2",{children:"Loading..."}),a&&(0,Z.jsx)("h2",{children:a}),r.length>0&&function(){var n=o.toLowerCase();return r.filter((function(e){return e.name.toLowerCase().includes(n)}))}().map((function(n){var e=n.id,t=n.name,r=n.number;return(0,Z.jsxs)(B,{children:[(0,Z.jsxs)("p",{children:[t,": ",r]}),(0,Z.jsx)(E,{type:"button",onClick:function(){!function(n){s((0,C.GK)(n))}(e)},children:"Delete"})]},e)}))]})]})},J=m.Z.div(b||(b=(0,f.Z)(["\n  padding: 40px;\n"]))),M=function(){return(0,Z.jsxs)(J,{children:[(0,Z.jsx)(v,{title:"Phonebook"}),(0,Z.jsx)(_,{}),(0,Z.jsx)(G,{title:"Contacts"})]})}}}]);
//# sourceMappingURL=814.3dae5163.chunk.js.map