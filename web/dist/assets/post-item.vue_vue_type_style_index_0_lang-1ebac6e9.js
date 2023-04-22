import{p as N,a as S,_ as $,b as j,c as V}from"./content-6db84f50.js";import{d as H,n as R,_ as D,o as i,c as f,L as a,a3 as F,U as t,Y as o,F as I,$ as P,Z as v,a as l,e as r,M as c,K as p,O as _}from"./@vue-f70ab1bd.js";import{u as E}from"./vuex-cc1858c6.js";import{b as K,u as U}from"./vue-router-29025daf.js";import{a as Y}from"./formatTime-fb8b4c0f.js";import{j as Z,l as A,m as G,o as J}from"./@vicons-477062ff.js";import{o as Q,M as W,j as X,a as tt,L as et}from"./naive-ui-f5d716a8.js";const st={class:"nickname-wrap"},ot={class:"username-wrap"},nt={class:"timestamp"},at=["innerHTML"],it={class:"opt-item"},rt={class:"opt-item"},ct={class:"opt-item"},pt={class:"opt-item"},ft=H({__name:"post-item",props:{post:null},setup(x){const C=x;K();const d=U(),z=E(),e=R(()=>{let n=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},C.post);return n.contents.map(s=>{(+s.type==1||+s.type==2)&&n.texts.push(s),+s.type==3&&n.imgs.push(s),+s.type==4&&n.videos.push(s),+s.type==6&&n.links.push(s),+s.type==7&&n.attachments.push(s),+s.type==8&&n.charge_attachments.push(s)}),n}),k=n=>{d.push({name:"post",query:{id:n}})},b=(n,s)=>{if(n.target.dataset.detail){const m=n.target.dataset.detail.split(":");if(m.length===2){z.commit("refresh"),m[0]==="tag"?d.push({name:"home",query:{q:m[1],t:"tag"}}):d.push({name:"user",query:{username:m[1]}});return}}k(s)};return(n,s)=>{const m=Q,w=D("router-link"),h=W,y=S,O=$,T=j,q=V,u=X,B=tt,L=et;return i(),f("div",{class:"post-item",onClick:s[2]||(s[2]=g=>k(t(e).id))},[a(L,{"content-indented":""},F({avatar:o(()=>[a(m,{round:"",size:30,src:t(e).user.avatar},null,8,["src"])]),header:o(()=>[l("span",st,[a(w,{onClick:s[0]||(s[0]=v(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{username:t(e).user.username}}},{default:o(()=>[r(c(t(e).user.nickname),1)]),_:1},8,["to"])]),l("span",ot," @"+c(t(e).user.username),1),t(e).is_top?(i(),p(h,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:o(()=>[r(" 置顶 ")]),_:1})):_("",!0),t(e).visibility==1?(i(),p(h,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:o(()=>[r(" 私密 ")]),_:1})):_("",!0),t(e).visibility==2?(i(),p(h,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:o(()=>[r(" 好友可见 ")]),_:1})):_("",!0)]),"header-extra":o(()=>[l("span",nt,c(t(e).ip_loc?t(e).ip_loc+" · ":t(e).ip_loc)+" "+c(t(Y)(t(e).created_on)),1)]),footer:o(()=>[t(e).attachments.length>0?(i(),p(y,{key:0,attachments:t(e).attachments},null,8,["attachments"])):_("",!0),t(e).charge_attachments.length>0?(i(),p(y,{key:1,attachments:t(e).charge_attachments,price:t(e).attachment_price},null,8,["attachments","price"])):_("",!0),t(e).imgs.length>0?(i(),p(O,{key:2,imgs:t(e).imgs},null,8,["imgs"])):_("",!0),t(e).videos.length>0?(i(),p(T,{key:3,videos:t(e).videos},null,8,["videos"])):_("",!0),t(e).links.length>0?(i(),p(q,{key:4,links:t(e).links},null,8,["links"])):_("",!0)]),action:o(()=>[a(B,{justify:"space-between"},{default:o(()=>[l("div",it,[a(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[a(t(Z))]),_:1}),r(" "+c(t(e).upvote_count),1)]),l("div",rt,[a(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[a(t(A))]),_:1}),r(" "+c(t(e).comment_count),1)]),l("div",ct,[a(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[a(t(G))]),_:1}),r(" "+c(t(e).collection_count),1)]),l("div",pt,[a(u,{size:"18",class:"opt-item-icon"},{default:o(()=>[a(t(J))]),_:1}),r(" "+c(t(e).share_count),1)])]),_:1})]),_:2},[t(e).texts.length>0?{name:"description",fn:o(()=>[(i(!0),f(I,null,P(t(e).texts,g=>(i(),f("span",{key:g.id,class:"post-text",onClick:s[1]||(s[1]=v(M=>b(M,t(e).id),["stop"])),innerHTML:t(N)(g.content).content},null,8,at))),128))]),key:"0"}:void 0]),1024)])}}});export{ft as _};
