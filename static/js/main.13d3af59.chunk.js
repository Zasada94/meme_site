(this["webpackJsonpmemes-site"]=this["webpackJsonpmemes-site"]||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=a(25),s=a(156),l=a(166),d=a(88),m=a(172),j=a(21),u=a(30),b=a(19),p=a(5),O=a(162),h=a(39),v=a(161),f=a(163),x=a(84),g=a.n(x),y=a(178),w=a(89),k=a(160),_=a(4),E=Object(s.a)((function(e){return{title:Object(b.a)({marginLeft:"5%",color:e.palette.primary.light},e.breakpoints.down("sm"),{fontSize:"24px"}),menuButton:Object(b.a)({marginLeft:"auto",color:e.palette.primary.light,display:"none"},e.breakpoints.down("sm"),{display:"block"})}})),N=Object(p.a)((function(e){return{paper:Object(b.a)({display:"none"},e.breakpoints.down("sm"),{display:"block",border:"1px solid #d3d4d5",width:"200px"})}}))((function(e){return Object(_.jsx)(w.a,Object(u.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),T=Object(p.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(y.a),A=function(){var e=E(),t=Object(n.useState)(null),a=Object(j.a)(t,2),o=a[0],r=a[1],i=["regular","hot","favorites","add_meme"].map((function(e){return Object(_.jsx)(T,{button:!0,component:c.c,to:"/".concat(e),children:Object(_.jsx)(k.a,{primary:e.toUpperCase().replace(/_/g," ")})},e)}));return Object(_.jsx)(v.a,{position:"sticky",children:Object(_.jsxs)(O.a,{className:e.toolBar,children:[Object(_.jsx)(h.a,{className:e.title,variant:"h4",children:"MEME'S SITE"}),Object(_.jsx)(f.a,{edge:"end",className:e.menuButton,"aria-label":"menu",onClick:function(e){r(e.currentTarget)},children:Object(_.jsx)(g.a,{fontSize:"large"})}),Object(_.jsx)(N,{id:"customized-menu",anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:function(){r(null)},children:i})]})})},C=a(165),F=a(164),D=Object(s.a)((function(e){return{root:Object(b.a)({width:300,marginTop:60,marginLeft:"auto",marginRight:"auto",position:"sticky",top:150},e.breakpoints.down("sm"),{display:"none"}),wrap:{padding:"10%"},button:Object(b.a)({marginBottom:30},e.breakpoints.up("md"),{"&:last-child":{marginBottom:0}}),notActiveButton:{"&:hover":{background:e.palette.primary.dark,color:e.palette.text.main,borderColor:e.palette.primary.dark}},isActiveButton:{background:e.palette.primary.main,color:e.palette.text.main,borderColor:e.palette.primary.main,"&:hover":{background:e.palette.primary.main}}}}));function I(){var e=D(),t=Object(n.useState)("regular"),a=Object(j.a)(t,2),o=a[0],r=a[1],i=["regular","hot","favorites","add_meme"].map((function(t){return Object(_.jsx)(F.a,{name:t,onClick:function(){return function(e){r(e)}(t)},component:c.d,to:"/".concat(t),variant:"outlined",className:o===t?"".concat(e.button," ").concat(e.isActiveButton):"".concat(e.button," ").concat(e.notActiveButton),children:t.replace(/_/g," ")},t)}));return Object(_.jsx)(C.a,{className:e.root,style:{zIndex:"3000"},children:Object(_.jsx)(l.a,{container:!0,direction:"column",className:e.wrap,children:i})})}var B=a(12),S=a(15),L=a(31),M=a(171),V=a(159),z="ADD_UP_VOTE",W="ADD_DOWN_VOTE",R="CHANGE_FAVORITE",U="ADD_MEME",G=a(170),H=a(168),P=a(167),X=a(169),J=a(85),q=a.n(J),Y=a(87),K=a.n(Y),Q=a(86),Z=a.n(Q),$=Object(s.a)({root:{maxWidth:560,marginBottom:"20px"},cardActions:{justifyContent:"space-evenly",marginTop:5,marginBottom:5},b:{fontSize:20,paddingLeft:10},favoriteIcon:{fontSize:30},isActiveFavoriteIcon:{color:"#FF2400"},notActiveFavoriteIcon:{color:"#00000042"}}),ee=function(e){var t=e.title,a=e.img,n=e.upvotes,o=e.downvotes,r=e.id,i=e.favorite,c=Object(L.b)(),s=$();return Object(_.jsxs)(C.a,{className:s.root,children:[Object(_.jsx)(P.a,{title:t}),Object(_.jsx)(H.a,{}),Object(_.jsx)(X.a,{component:"img",alt:t,image:a}),Object(_.jsxs)(G.a,{className:s.cardActions,children:[Object(_.jsxs)(F.a,{"aria-label":"add up vote",color:"primary",onClick:function(){return c(function(e){return{type:"ADD_UP_VOTE",payload:{upvotes:e.upvotes+1,id:e.id,type:e.type}}}({upvotes:n,id:r,type:"upvotes"}))},children:[Object(_.jsx)(q.a,{}),Object(_.jsx)("b",{className:s.b,children:n})]}),Object(_.jsx)(F.a,{"aria-label":"favorites",onClick:function(){var e;c({type:"CHANGE_FAVORITE",payload:{favorite:!(e={favorite:i,id:r}).favorite,id:e.id}})},children:Object(_.jsx)(Z.a,{className:!1===i?"".concat(s.favoriteIcon," ").concat(s.notActiveFavoriteIcon):"".concat(s.favoriteIcon," ").concat(s.isActiveFavoriteIcon)})}),Object(_.jsxs)(F.a,{"aria-label":"add down vote",color:"secondary",onClick:function(){return c({type:"ADD_DOWN_VOTE",payload:{downvotes:(e={downvotes:o,id:r,type:"downvotes"}).downvotes+1,id:e.id,type:e.type}});var e},children:[Object(_.jsx)(K.a,{}),Object(_.jsx)("b",{className:s.b,children:o})]})]})]})};function te(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null}var ae=function(e){var t=e.array;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(te,{}),Object(_.jsx)(V.a,{children:function(e){return e.map((function(e){return Object(_.jsx)(ee,Object(u.a)({},e),e.id)}))}(t)})]})},ne=a(72),oe=a(174),re=a(177),ie=a(173),ce=a(179),se=a(175),le=Object(s.a)((function(){return{root:{maxWidth:600,marginTop:10,display:"flex",flexDirection:"column"},form:{padding:20},textField:{marginBottom:25}}})),de={title:"",author:"",img:""};function me(e){return Object(_.jsx)(se.a,Object(u.a)({elevation:6,variant:"filled"},e))}var je=function(){var e=Object(L.b)(),t=le(),a=Object(n.useState)(""),o=Object(j.a)(a,2),r=o[0],i=o[1],c=Object(ne.b)({defaultValues:de}),s=c.control,l=c.handleSubmit,d=c.reset,m=[{nameField:"Title*",id:"title",helperText:"Add a title to your meme"},{nameField:"Link*",id:"img",helperText:"Enter URL link to meme"}].map((function(e){var a=e.nameField,n=e.id,o=e.helperText;return Object(_.jsxs)(ie.a,{children:[Object(_.jsx)(ce.a,{htmlFor:n,children:a}),Object(_.jsx)(ne.a,{name:n,control:s,render:function(e){var a=e.field,r=a.onChange,i=a.value;return Object(_.jsx)(oe.a,{required:!0,fullWidth:!0,id:n,variant:"outlined",helperText:o,value:i,onChange:r,className:t.textField})}})]},n)})),u=function(e){"clickaway"!==e&&i("")};return Object(_.jsxs)(C.a,{className:t.root,children:[Object(_.jsx)(P.a,{title:"Add meme"}),Object(_.jsxs)("form",{onSubmit:l((function(t){var a,n=t.title,o=t.img;e({type:"ADD_MEME",payload:{title:(a={title:n,img:o}).title,author:a.author,upvotes:0,downvotes:0,favorite:!1,img:a.img}}),i("Meme has been added"),d()})),className:t.form,children:[m,Object(_.jsxs)(ie.a,{children:[Object(_.jsx)(F.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:{marginBottom:20},children:"submit"}),Object(_.jsx)(F.a,{type:"reset",variant:"contained",fullWidth:!0,onClick:function(){return d()},children:"reset form"})]})]}),r?Object(_.jsx)(re.a,{open:!0,autoHideDuration:3e3,onClose:u,children:Object(_.jsx)(me,{onClose:u,severity:"success",children:r})}):null]})},ue=Object(s.a)((function(e){return{root:Object(b.a)({width:"100%",maxWidth:600,paddingTop:20},e.breakpoints.down("sm"),{paddingTop:80})}})),be=function(){var e=ue(),t=Object(L.c)((function(e){return e.memes.hot})),a=Object(L.c)((function(e){return e.memes.regular})),n=Object(L.c)((function(e){return[].concat(Object(B.a)(e.memes.hot),Object(B.a)(e.memes.regular)).filter((function(e){return e.favorite}))}));return Object(_.jsx)(M.a,{className:e.root,children:Object(_.jsxs)(S.d,{children:[Object(_.jsx)(S.b,{exact:!0,path:"/",children:Object(_.jsx)(S.a,{to:"/regular"})}),Object(_.jsx)(S.b,{exact:!0,path:"/meme_site",children:Object(_.jsx)(S.a,{to:"/regular"})}),Object(_.jsx)(S.b,{path:"/regular",children:Object(_.jsx)(ae,{array:a})}),Object(_.jsx)(S.b,{path:"/hot",children:Object(_.jsx)(ae,{array:t})}),Object(_.jsx)(S.b,{path:"/favorites",children:Object(_.jsx)(ae,{array:n})}),Object(_.jsx)(S.b,{path:"/add_meme",children:Object(_.jsx)(je,{})}),Object(_.jsx)(S.b,{path:"*"})]})})},pe=Object(d.a)({palette:{primary:{light:"#e7f5f0",middle:"#e7f5f0",main:"#0095b6",dark:"#001440"},secondary:{main:"#FF6347"},text:{main:"#FFF"}},typography:{fontFamily:"'Lato', sans-serif"}}),Oe=Object(s.a)({root:{flexGrow:1,backgroundColor:pe.palette.primary.light}});function he(){var e=Oe();return Object(_.jsx)(c.a,{basename:"/meme_site",children:Object(_.jsx)(m.a,{theme:pe,children:Object(_.jsxs)("div",{className:e.root,style:{minHeight:"100vh"},children:[Object(_.jsx)(A,{}),Object(_.jsx)("main",{children:Object(_.jsxs)(l.a,{container:!0,justify:"center",children:[Object(_.jsx)(l.a,{item:!0,xs:12,md:3,children:Object(_.jsx)(I,{})}),Object(_.jsx)(l.a,{item:!0,xs:12,md:8,lg:6,children:Object(_.jsx)(be,{})})]})})]})})})}var ve=a(90),fe={hot:[{id:1,title:"Philosoraptor",upvotes:7,downvotes:0,favorite:!0,img:"https://i.kym-cdn.com/entries/icons/mobile/000/000/106/Philoso.jpg"},{id:4,title:"spider-man",upvotes:10,downvotes:3,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/original/000/005/482/50sspider-man-meme.jpg"},{id:6,title:"If You know what I mean",upvotes:10,downvotes:3,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/mobile/000/008/549/ifuknowwhatimean.jpg"}],regular:[{id:2,title:"Bear Grylls",upvotes:1,downvotes:2,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/original/000/003/793/maxresdefault-3.jpg"},{id:3,title:"Come at me bro",upvotes:3,downvotes:5,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/mobile/000/004/501/comeatmebr0.jpg"},{id:5,title:"Buisness cat",upvotes:5,downvotes:5,favorite:!1,img:"https://i.kym-cdn.com/entries/icons/mobile/000/005/099/bird-business-cat.jpg"}]},xe=function(e,t,a){return e.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},Object(b.a)({},a,t.payload[a])):e}))};function ge(e,t,a){e.map((function(n,o){if("upvotes"===a.payload.type&&n.upvotes-n.downvotes>5||"downvotes"===a.payload.type&&n.upvotes-n.downvotes<=5){var r=e.splice(o,1);t.push(r[0])}return n}))}var ye=Object(ve.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{memes:fe},t=arguments.length>1?arguments[1]:void 0,a=Object(B.a)(e.memes.hot),n=Object(B.a)(e.memes.regular);switch(t.type){case z:var o=xe(a,t,"upvotes"),r=xe(n,t,"upvotes");return ge(r,o,t),{memes:{hot:o,regular:r}};case W:var i=xe(a,t,"downvotes"),c=xe(n,t,"downvotes");return ge(i,c,t),{memes:{hot:i,regular:c}};case R:var s=xe(a,t,"favorite"),l=xe(n,t,"favorite");return{memes:{hot:s,regular:l}};case U:var d=[].concat(Object(B.a)(e.memes.hot),Object(B.a)(e.memes.regular)).length+1,m=Object(u.a)({id:d},t.payload),j=Object(B.a)(a),b=[].concat(Object(B.a)(n),[m]);return{memes:{hot:j,regular:b}};default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(c.b,{children:Object(_.jsx)(L.a,{store:ye,children:Object(_.jsx)(he,{})})})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.13d3af59.chunk.js.map