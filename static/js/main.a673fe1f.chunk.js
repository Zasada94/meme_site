(this["webpackJsonpmemes-site"]=this["webpackJsonpmemes-site"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(10),r=a.n(o),i=a(32),c=a(156),s=a(166),l=a(88),d=a(172),m=a(21),j=a(29),u=a(19),b=a(5),p=a(162),O=a(39),h=a(161),v=a(163),f=a(84),x=a.n(f),g=a(178),y=a(89),w=a(160),k=a(4),_=Object(c.a)((function(e){return{title:Object(u.a)({marginLeft:"5%",color:e.palette.primary.light},e.breakpoints.down("sm"),{fontSize:"24px"}),menuButton:Object(u.a)({marginLeft:"auto",color:e.palette.primary.light,display:"none"},e.breakpoints.down("sm"),{display:"block"})}})),E=Object(b.a)((function(e){return{paper:Object(u.a)({display:"none"},e.breakpoints.down("sm"),{display:"block",border:"1px solid #d3d4d5",width:"200px"})}}))((function(e){return Object(k.jsx)(y.a,Object(j.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),N=Object(b.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(g.a),T=function(){var e=_(),t=Object(n.useState)(null),a=Object(m.a)(t,2),o=a[0],r=a[1],c=["regular","hot","favorites","add_meme"].map((function(e){return Object(k.jsx)(N,{button:!0,component:i.b,to:"/".concat(e),children:Object(k.jsx)(w.a,{primary:e.toUpperCase().replace(/_/g," ")})},e)}));return Object(k.jsx)(h.a,{position:"sticky",children:Object(k.jsxs)(p.a,{className:e.toolBar,children:[Object(k.jsx)(O.a,{className:e.title,variant:"h4",children:"MEME'S SITE"}),Object(k.jsx)(v.a,{edge:"end",className:e.menuButton,"aria-label":"menu",onClick:function(e){r(e.currentTarget)},children:Object(k.jsx)(x.a,{fontSize:"large"})}),Object(k.jsx)(E,{id:"customized-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){r(null)},children:c})]})})},A=a(165),C=a(164),F=Object(c.a)((function(e){return{root:Object(u.a)({width:300,marginTop:60,marginLeft:"auto",marginRight:"auto",position:"sticky",top:150},e.breakpoints.down("sm"),{display:"none"}),wrap:{padding:"10%"},button:Object(u.a)({marginBottom:30},e.breakpoints.up("md"),{"&:last-child":{marginBottom:0}}),notActiveButton:{"&:hover":{background:e.palette.primary.dark,color:e.palette.text.main,borderColor:e.palette.primary.dark}},isActiveButton:{background:e.palette.primary.main,color:e.palette.text.main,borderColor:e.palette.primary.main,"&:hover":{background:e.palette.primary.main}}}}));function D(){var e=F(),t=Object(n.useState)("regular"),a=Object(m.a)(t,2),o=a[0],r=a[1],c=["regular","hot","favorites","add_meme"].map((function(t){return Object(k.jsx)(C.a,{name:t,onClick:function(){return function(e){r(e)}(t)},component:i.c,to:"/".concat(t),variant:"outlined",className:o===t?"".concat(e.button," ").concat(e.isActiveButton):"".concat(e.button," ").concat(e.notActiveButton),children:t.replace(/_/g," ")},t)}));return Object(k.jsx)(A.a,{className:e.root,style:{zIndex:"3000"},children:Object(k.jsx)(s.a,{container:!0,direction:"column",className:e.wrap,children:c})})}var I=a(12),B=a(15),S=a(30),L=a(171),M=a(159),V="ADD_UP_VOTE",z="ADD_DOWN_VOTE",W="CHANGE_FAVORITE",R="ADD_MEME",U=a(170),G=a(168),H=a(167),P=a(169),X=a(85),J=a.n(X),q=a(87),Y=a.n(q),K=a(86),Q=a.n(K),Z=Object(c.a)({root:{maxWidth:560,marginBottom:"20px"},cardActions:{justifyContent:"space-evenly",marginTop:5,marginBottom:5},b:{fontSize:20,paddingLeft:10},favoriteIcon:{fontSize:30},isActiveFavoriteIcon:{color:"#FF2400"},notActiveFavoriteIcon:{color:"#00000042"}}),$=function(e){var t=e.title,a=e.img,n=e.upvotes,o=e.downvotes,r=e.id,i=e.favorite,c=Object(S.b)(),s=Z();return Object(k.jsxs)(A.a,{className:s.root,children:[Object(k.jsx)(H.a,{title:t}),Object(k.jsx)(G.a,{}),Object(k.jsx)(P.a,{component:"img",alt:t,image:a}),Object(k.jsxs)(U.a,{className:s.cardActions,children:[Object(k.jsxs)(C.a,{"aria-label":"add up vote",color:"primary",onClick:function(){return c(function(e){return{type:"ADD_UP_VOTE",payload:{upvotes:e.upvotes+1,id:e.id,type:e.type}}}({upvotes:n,id:r,type:"upvotes"}))},children:[Object(k.jsx)(J.a,{}),Object(k.jsx)("b",{className:s.b,children:n})]}),Object(k.jsx)(C.a,{"aria-label":"favorites",onClick:function(){var e;c({type:"CHANGE_FAVORITE",payload:{favorite:!(e={favorite:i,id:r}).favorite,id:e.id}})},children:Object(k.jsx)(Q.a,{className:!1===i?"".concat(s.favoriteIcon," ").concat(s.notActiveFavoriteIcon):"".concat(s.favoriteIcon," ").concat(s.isActiveFavoriteIcon)})}),Object(k.jsxs)(C.a,{"aria-label":"add down vote",color:"secondary",onClick:function(){return c({type:"ADD_DOWN_VOTE",payload:{downvotes:(e={downvotes:o,id:r,type:"downvotes"}).downvotes+1,id:e.id,type:e.type}});var e},children:[Object(k.jsx)(Y.a,{}),Object(k.jsx)("b",{className:s.b,children:o})]})]})]})};function ee(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null}var te=function(e){var t=e.array;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ee,{}),Object(k.jsx)(M.a,{children:function(e){return e.map((function(e){return Object(k.jsx)($,Object(j.a)({},e),e.id)}))}(t)})]})},ae=a(72),ne=a(174),oe=a(177),re=a(173),ie=a(179),ce=a(175),se=Object(c.a)((function(){return{root:{maxWidth:600,marginTop:10,display:"flex",flexDirection:"column"},form:{padding:20},textField:{marginBottom:25}}})),le={title:"",author:"",img:""},de=function(){var e=Object(S.b)(),t=se(),a=Object(n.useState)(""),o=Object(m.a)(a,2),r=o[0],i=o[1],c=Object(ae.b)({defaultValues:le}),s=c.control,l=c.handleSubmit,d=c.reset,u=[{nameField:"Title*",id:"title",helperText:"Add a title to your meme"},{nameField:"Link*",id:"img",helperText:"Enter URL link to meme"}].map((function(e){var a=e.nameField,n=e.id,o=e.helperText;return Object(k.jsxs)(re.a,{children:[Object(k.jsx)(ie.a,{htmlFor:n,children:a}),Object(k.jsx)(ae.a,{name:n,control:s,render:function(e){var a=e.field,r=a.onChange,i=a.value;return Object(k.jsx)(ne.a,{required:!0,fullWidth:!0,id:n,variant:"outlined",helperText:o,value:i,onChange:r,className:t.textField})}})]},n)}));function b(e){return Object(k.jsx)(ce.a,Object(j.a)({elevation:6,variant:"filled"},e))}var p=function(e){"clickaway"!==e&&i("")};return Object(k.jsxs)(A.a,{className:t.root,children:[Object(k.jsx)(H.a,{title:"Add meme"}),Object(k.jsxs)("form",{onSubmit:l((function(t){var a,n=t.title,o=t.img;e({type:"ADD_MEME",payload:{title:(a={title:n,img:o}).title,author:a.author,upvotes:0,downvotes:0,favorite:!1,img:a.img}}),i("Meme has been added"),d()})),className:t.form,children:[u,Object(k.jsxs)(re.a,{children:[Object(k.jsx)(C.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:{marginBottom:20},children:"submit"}),Object(k.jsx)(C.a,{type:"reset",variant:"contained",fullWidth:!0,onClick:function(){return d()},children:"reset form"})]})]}),r?Object(k.jsx)(oe.a,{open:!0,autoHideDuration:3e3,onClose:p,children:Object(k.jsx)(b,{onClose:p,severity:"success",children:r})}):null]})},me=Object(c.a)((function(e){return{root:Object(u.a)({width:"100%",maxWidth:600,paddingTop:20},e.breakpoints.down("sm"),{paddingTop:80})}})),je=function(){var e=me(),t=Object(S.c)((function(e){return e.memes.hot})),a=Object(S.c)((function(e){return e.memes.regular})),n=Object(S.c)((function(e){return[].concat(Object(I.a)(e.memes.hot),Object(I.a)(e.memes.regular)).filter((function(e){return e.favorite}))}));return Object(k.jsx)(L.a,{className:e.root,children:Object(k.jsxs)(B.d,{children:[Object(k.jsx)(B.b,{exact:!0,path:"/",children:Object(k.jsx)(B.a,{to:"/regular"})}),Object(k.jsx)(B.b,{exact:!0,path:"/meme_site",children:Object(k.jsx)(B.a,{to:"/regular"})}),Object(k.jsxs)(B.b,{exact:!0,path:"/regular",children:[Object(k.jsx)(B.a,{to:"/regular"}),Object(k.jsx)(te,{array:a})]}),Object(k.jsxs)(B.b,{exact:!0,path:"/hot",children:[Object(k.jsx)(B.a,{to:"/hot"}),Object(k.jsx)(te,{array:t})]}),Object(k.jsx)(B.b,{exact:!0,path:"/favorites",children:Object(k.jsx)(te,{array:n})}),Object(k.jsxs)(B.b,{exact:!0,path:"/add_meme",children:[Object(k.jsx)(B.a,{to:"/add_meme"}),Object(k.jsx)(de,{})]}),Object(k.jsx)(B.b,{path:"*"})]})})},ue=Object(l.a)({palette:{primary:{light:"#e7f5f0",middle:"#e7f5f0",main:"#0095b6",dark:"#001440"},secondary:{main:"#FF6347"},text:{main:"#FFF"}},typography:{fontFamily:"'Lato', sans-serif"}}),be=Object(c.a)({root:{flexGrow:1,backgroundColor:ue.palette.primary.light}});function pe(){var e=be();return Object(k.jsx)(i.a,{children:Object(k.jsx)(d.a,{theme:ue,children:Object(k.jsxs)("div",{className:e.root,style:{minHeight:"100vh"},children:[Object(k.jsx)(T,{}),Object(k.jsx)("main",{children:Object(k.jsxs)(s.a,{container:!0,justify:"center",children:[Object(k.jsx)(s.a,{item:!0,xs:12,md:3,children:Object(k.jsx)(D,{})}),Object(k.jsx)(s.a,{item:!0,xs:12,md:8,lg:6,children:Object(k.jsx)(je,{})})]})})]})})})}var Oe=a(90),he={hot:[{id:1,title:"Philosoraptor",upvotes:7,downvotes:0,favorite:!0,img:"https://i.kym-cdn.com/entries/icons/mobile/000/000/106/Philoso.jpg"},{id:4,title:"spider-man",upvotes:10,downvotes:3,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/original/000/005/482/50sspider-man-meme.jpg"},{id:6,title:"If You know what I mean",upvotes:10,downvotes:3,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/mobile/000/008/549/ifuknowwhatimean.jpg"}],regular:[{id:2,title:"Bear Grylls",upvotes:1,downvotes:2,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/original/000/003/793/maxresdefault-3.jpg"},{id:3,title:"Come at me bro",upvotes:3,downvotes:5,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/mobile/000/004/501/comeatmebr0.jpg"},{id:5,title:"Buisness cat",upvotes:5,downvotes:5,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/mobile/000/005/099/bird-business-cat.jpg"}]},ve=function(e,t,a){return e.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},Object(u.a)({},a,t.payload[a])):e}))};function fe(e,t,a){e.map((function(n,o){if("upvotes"===a.payload.type&&n.upvotes-n.downvotes>5||"downvotes"===a.payload.type&&n.upvotes-n.downvotes<=5){var r=e.splice(o,1);t.push(r[0])}return n}))}var xe=Object(Oe.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{memes:he},t=arguments.length>1?arguments[1]:void 0,a=Object(I.a)(e.memes.hot),n=Object(I.a)(e.memes.regular);switch(t.type){case V:var o=ve(a,t,"upvotes"),r=ve(n,t,"upvotes");return fe(r,o,t),{memes:{hot:o,regular:r}};case z:var i=ve(a,t,"downvotes"),c=ve(n,t,"downvotes");return fe(i,c,t),{memes:{hot:i,regular:c}};case W:var s=ve(a,t,"favorite"),l=ve(n,t,"favorite");return{memes:{hot:s,regular:l}};case R:var d=[].concat(Object(I.a)(e.memes.hot),Object(I.a)(e.memes.regular)).length+1,m=Object(j.a)({id:d},t.payload),u=Object(I.a)(a),b=[].concat(Object(I.a)(n),[m]);return{memes:{hot:u,regular:b}};default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(k.jsx)(S.a,{store:xe,children:Object(k.jsx)(pe,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.a673fe1f.chunk.js.map