import{r,L as j,j as e,B as i,T as c,Q as b,K as y,S as C,M as v}from"./index-BuwFU7Tj.js";const F=()=>{const[o,l]=r.useState(""),[g,d]=r.useState(""),h=j(),u=t=>{l(t.target.value)},m=t=>{const a=t.target.value;d(a),console.log(g),h("/categories")},p={electronics:{image:"./images/pic1.png",name:"TV we multimediýa",subcategories:["Laptops","Phones","TVs"]},fashion:{image:"./images/pic1.png",name:"Fashion",subcategories:["Shirts","Jeans","Shoes"]},home:{image:"./images/pic1.png",name:"Home",subcategories:["Furniture","Kitchenware","Decor"]}};return e.jsxs(e.Fragment,{children:[e.jsx(i,{sx:{background:"#C3000E5C",height:"34px",p:"10px",display:"flex",alignItems:"center",color:"#2E2F38"},children:e.jsx(c,{children:"Kategoriýa"})}),Object.entries(p).map(([t,{image:a,name:s,subcategories:x}])=>e.jsx(i,{sx:{mb:2},children:e.jsx(b,{fullWidth:!0,children:e.jsx(y,{value:o===s?s:"",onChange:u,renderValue:()=>e.jsxs(C,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx("img",{src:a,alt:s,style:{width:24,height:24}}),e.jsx(c,{children:s})]}),displayEmpty:!0,sx:{border:"none","& .MuiOutlinedInput-notchedOutline":{border:"none"},"& .MuiSelect-select":{display:"flex",alignItems:"center"}},children:x.map((n,S)=>e.jsx(v,{value:n,onClick:()=>m({target:{value:n}}),children:n},S))})})},t))]})},E=()=>e.jsx(e.Fragment,{children:e.jsx(F,{})});export{E as S};
