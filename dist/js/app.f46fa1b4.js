(function(){"use strict";var e={2969:function(e,t,n){var i=n(9242),o=n(3396),a=n(7718),l=n(3140);function r(e,t,n,i,r,s){const d=(0,o.up)("HeaderComp"),u=(0,o.up)("HeroComp"),c=(0,o.up)("BioComp"),m=(0,o.up)("ProjectComp"),p=(0,o.up)("DocumentCompVue"),f=(0,o.up)("TimelineExpComp"),g=(0,o.up)("FooterComp");return(0,o.wg)(),(0,o.j4)(a.q,{id:"home"},{default:(0,o.w5)((()=>[(0,o.Wm)(d),(0,o.Wm)(l.O,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u),(0,o.Wm)(c),(0,o.Wm)(m),(0,o.Wm)(p),(0,o.Wm)(f)])),_:1}),(0,o.Wm)(g)])),_:1})}var s=n(7139),d=n(588),u=n(7312),c=n(9234),m=n(3289),p=n(4647),f=n(9457),g=n(2127),w=n(4193),h=n(9657),v=n(7073),_=n(5030);const b={key:2,id:"container",style:{display:"flex","justify-content":"flex-end"}};function k(e,t,n,a,l,r){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(h.V,{modelValue:l.drawer,"onUpdate:modelValue":t[2]||(t[2]=e=>l.drawer=e),temporary:"",class:"drawer",style:{opacity:"0.9","padding-top":"5vh","padding-left":"2vh"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.menus,((e,n)=>((0,o.wg)(),(0,o.j4)(p.i,{nav:"",key:n},{default:(0,o.w5)((()=>[(0,o.Wm)(f.l,{onClick:t[1]||(t[1]=e=>l.drawer=null),"prepend-icon":e.icon,href:e.link},{default:(0,o.w5)((()=>[(0,o.Wm)(g.V,{class:"mobileLinks",onClick:t[0]||(t[0]=e=>l.drawer=null)},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["prepend-icon","href"])])),_:2},1024)))),128))])),_:1},8,["modelValue"]),(0,o.Wm)(d.L,{app:"",dark:"",elevation:"0","elevate-on-scroll":""},{default:(0,o.w5)((()=>[l.windowWidth>350?((0,o.wg)(),(0,o.j4)(_.q,{key:0,class:"logo"},{default:(0,o.w5)((()=>[(0,o.Uk)("Arnaud Cossu")])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(c.C),l.windowWidth>945?((0,o.wg)(),(0,o.j4)(p.i,{key:1,class:"d-flex align-center"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.menus,((e,t)=>((0,o.wg)(),(0,o.j4)(f.l,{link:"",key:t,href:e.link},{default:(0,o.w5)((()=>[(0,o.Wm)(g.V,{class:"menus"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["href"])))),128)),(0,o.Wm)(f.l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(v.G,{modelValue:l.ex11,"onUpdate:modelValue":t[3]||(t[3]=e=>l.ex11=e),"false-icon":"mdi-white-balance-sunny","true-icon":"mdi-weather-night",value:"grey","hide-details":"",class:"ml-2",inset:"",onClick:a.toggleTheme},{default:(0,o.w5)((()=>[(0,o.Wm)(m.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-magnify")])),_:1})])),_:1},8,["modelValue","onClick"])])),_:1})])),_:1})):(0,o.kq)("",!0),l.windowWidth<=945?((0,o.wg)(),(0,o.iD)("div",b,[(0,o.Wm)(v.G,{"false-icon":"mdi-white-balance-sunny","true-icon":"mdi-weather-night",value:"grey","hide-details":"",inset:"",onClick:a.toggleTheme},null,8,["onClick"])])):(0,o.kq)("",!0),l.windowWidth<=960?((0,o.wg)(),(0,o.j4)(w.T,{key:3,right:""},{activator:(0,o.w5)((({on:e})=>[(0,o.Wm)(u.T,(0,o.dG)({color:"primary"},e,{onClick:t[4]||(t[4]=(0,i.iM)((e=>l.drawer=!l.drawer),["stop"]))}),{default:(0,o.w5)((()=>[(0,o.Wm)(m.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-menu")])),_:1})])),_:2},1040)])),default:(0,o.w5)((()=>[(0,o.Wm)(p.i,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.menus,((e,t)=>((0,o.wg)(),(0,o.j4)(f.l,{link:"",key:t,href:e.link},{default:(0,o.w5)((()=>[(0,o.Wm)(g.V,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:2},1024)])),_:2},1032,["href"])))),128))])),_:1})])),_:1})):(0,o.kq)("",!0)])),_:1})],64)}var y=n(7041),W={setup(){const e=(0,y.Fg)();return{theme:e,toggleTheme:()=>e.global.name.value=e.global.current.value.dark?"light":"dark"}},data(){return{drawer:null,windowWidth:0,ex11:"enable",menus:[{title:"Accueil",link:"#home",icon:"mdi-home"},{title:"Projets",link:"#projects",icon:"mdi-folder"},{title:"Expériences",link:"#experiences",icon:"mdi-briefcase"},{title:"Documents",link:"#documents",icon:"mdi-file"},{title:"Contact",link:"#contact",icon:"mdi-email"}]}},mounted(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()},beforeUnmount(){window.removeEventListener("resize",this.getWindowWidth)},methods:{getWindowWidth(){this.windowWidth=window.innerWidth}}},C=n(89);const j=(0,C.Z)(W,[["render",k],["__scopeId","data-v-3aba8740"]]);var x=j,S=n(4075),T=n(3369),U=n(6824);const A=e=>((0,o.dD)("data-v-070dccae"),e=e(),(0,o.Cn)(),e),D=A((()=>(0,o._)("div",{class:"projectTitle d-flex align-center justify-center"},[(0,o._)("h1",null,"Projets")],-1)));function z(e,t,n,i,a,l){const r=(0,o.up)("CardProject");return(0,o.wg)(),(0,o.j4)(T.K,{id:"projects",class:"pt-15"},{default:(0,o.w5)((()=>[(0,o.Wm)(S.J),D,(0,o.Wm)(U.o,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.cards,((e,t)=>((0,o.wg)(),(0,o.j4)(r,{key:t,title:e.title,body:e.body,src:e.src,languages:e.languages,link:e.link,class:"elevation-5 cardProject"},null,8,["title","body","src","languages","link"])))),128))])),_:1})])),_:1})}var O=n(9752),V=n(6572),R=n(1888),L=n(1334),P=n(1037),E=n(2356),q=n(3947);const N=e=>((0,o.dD)("data-v-7a83c810"),e=e(),(0,o.Cn)(),e),F=N((()=>(0,o._)("div",{class:"my-4 text-subtitle-1"},null,-1)));function I(e,t,n,i,a,l){return(0,o.wg)(),(0,o.j4)(O._,{loading:e.loading,class:"mx-auto my-12 roundedCard"},{default:(0,o.w5)((()=>[(0,o.Wm)(q.f,{class:"projectImages",height:"250",src:n.src,cover:""},null,8,["src"]),(0,o.Wm)(V.E,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(n.title),1)])),_:1}),(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(U.o,{style:{},class:"mx-0"}),F,(0,o._)("div",null,(0,s.zw)(n.body),1)])),_:1}),(0,o.Wm)(S.J,{class:"mx-4"}),(0,o.Wm)(V.E,null,{default:(0,o.w5)((()=>[(0,o.Uk)("Langages utilisés")])),_:1}),(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(E.N,{modelValue:e.selection,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selection=t),"active-class":"deep-purple accent-4 white--text",column:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.languages,(e=>((0,o.wg)(),(0,o.j4)(P.v,{key:e},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e),1)])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(L.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.T,{color:"projectButton",rounded:"",class:"white--text",target:"_blank",href:n.link},{default:(0,o.w5)((()=>[(0,o.Uk)(" Voir le projet ")])),_:1},8,["href"])])),_:1})])),_:1},8,["loading"])}var M={name:"CardProject",props:["title","body","src","languages","link"],data(){return{}}};const H=(0,C.Z)(M,[["render",I],["__scopeId","data-v-7a83c810"]]);var K=H,Z={name:"ProjectComp",components:{CardProject:K},data(){return{cards:[{title:"Suivi Achat Revente",body:"Site web de gestion d'achat revente avec suivi",src:"https://i.ibb.co/3zLYV2k/notebook-mockup-on-desk.png",languages:["HTML","CSS","BootStrap","SQL","JS","AJAX"],link:"https://cashboard.arnaudcs.repl.co/index.php"},{title:"Analyseur Mail",body:"Analyseur avec statistique sur corpus de mails",src:"https://i.ibb.co/tBLHVXS/Analyseur-De-Mail.png",languages:["Python"],link:"https://github.com/Gaiko19/INTER2-HUT"},{title:"Jeux IOS Morpion",body:"Jeu du morpion avec IA (simple)",src:"https://i.ibb.co/KmMsTk4/Morpion-Mockup.png",languages:["Swift"],link:"https://github.com/ArnaudCs/Projects/tree/main/TickityTacTow-main"},{title:"Calculatrice React",body:"Caclulatrice avec mode Dark Theme en React Native",src:"https://i.ibb.co/GJx6LZn/two-standing-smartphones-mockup.png",languages:["React Native"],link:"https://github.com/ArnaudCs/Projects/tree/main/React_Calculatrice"},{title:"Tasker React",body:"Application de tâches (gestionnaire) en React Native",src:"https://i.ibb.co/tDScLKQ/Tasker-Mockup.png",languages:["React Native"],link:"https://github.com/ArnaudCs/Projects/tree/main/React_to_do_list"},{title:"Suivi Achat Revente",body:"Site web de gestion d'achat revente avec suivi",src:"https://i.ibb.co/3zLYV2k/notebook-mockup-on-desk.png",languages:["HTML","CSS","BootStrap","SQL","JS","AJAX"],link:"https://cashboard.arnaudcs.repl.co/index.php"}]}}};const B=(0,C.Z)(Z,[["render",z],["__scopeId","data-v-070dccae"]]);var J=B,Y=n(1666);const G=(0,o._)("strong",null,"Arnaud Cossu",-1);function Q(e,t,n,i,a,l){return(0,o.wg)(),(0,o.j4)(Y.c,{dark:"",padless:"",id:"contact",class:"d-flex align-center justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(O._,{flat:"",tile:"",class:"indigo lighten-1 white--text text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.socialLinks,(e=>((0,o.wg)(),(0,o.j4)(u.T,{key:e.icon,class:"mx-4 my-4 white--text",href:e.link,icon:!0,target:"_blank"},{default:(0,o.w5)((()=>[(0,o.Wm)(m.t,{size:"24px"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.icon),1)])),_:2},1024)])),_:2},1032,["href"])))),128))])),_:1}),(0,o.Wm)(R.Z,{class:"white--text pt-0"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Made with Love "),(0,o.Wm)(m.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-heart")])),_:1}),(0,o.Uk)(" and VueJS"),(0,o.Wm)(m.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-vuetify")])),_:1}),(0,o.Uk)(". Optimized for Desktop and Tablet. ")])),_:1}),(0,o.Wm)(S.J),(0,o.Wm)(R.Z,{class:"white--text"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)((new Date).getFullYear())+" — ",1),G])),_:1})])),_:1})])),_:1})}var X={name:"FooterComp",data:()=>({socialLinks:[{icon:"mdi-email",link:"mailto:arnaud.cossu@gmail.com"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/arnaud-c-65357215a/"},{icon:"mdi-github",link:"https://github.com/ArnaudCs"},{icon:"mdi-gitlab",link:"https://gitlab.etu.umontpellier.fr/e20190000683"}]})};const $=(0,C.Z)(X,[["render",Q]]);var ee=$,te=n.p+"img/developer.d30886eb.svg",ne=n.p+"img/developer-dark.cfadf07a.svg",ie=n(8521);const oe=e=>((0,o.dD)("data-v-2c5dcf90"),e=e(),(0,o.Cn)(),e),ae=oe((()=>(0,o._)("h2",{class:"intro-text my-5"},"Etudiant en informatique",-1))),le=oe((()=>(0,o._)("h4",{class:"description my-5"},"Etudiant en Master Génie Logiciel à l'université de Montpellier.",-1))),re=oe((()=>(0,o._)("a",{href:"/files/CV_2023.pdf",style:{color:"white","text-decoration":"none"},class:"downloadcv",download:"CV_COSSU_ARNAUD.pdf"},"Télécharger mon CV",-1)));function se(e,t,n,i,a,l){return(0,o.wg)(),(0,o.j4)(T.K,{class:"pt-5"},{default:(0,o.w5)((()=>[(0,o.Wm)(U.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ie.D,{lg:"4",cols:"12",sm:"6",class:"order-first order-lg-first"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.K,{class:"text-center",style:{"vertical-align":"center"}},{default:(0,o.w5)((()=>[ae,le,(0,o.Wm)(T.K,{class:"d-flex justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(u.T,{color:"indigo",class:"white--text cvBtn",rounded:""},{default:(0,o.w5)((()=>[(0,o.Wm)(m.t,null,{default:(0,o.w5)((()=>[(0,o.Uk)("mdi-download")])),_:1}),re])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(ie.D,{lg:"8",cols:"12",sm:"6",class:"order-last order-lg-last"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.K,{class:"d-flex align-center justify-center"},{default:(0,o.w5)((()=>["light"==l.theme?((0,o.wg)(),(0,o.j4)(q.f,{key:0,"lazy-src":te,src:te,class:"img"})):((0,o.wg)(),(0,o.j4)(q.f,{key:1,"lazy-src":ne,src:ne,class:"img"}))])),_:1})])),_:1})])),_:1})])),_:1})}var de={name:"HeroComp",data(){return{}},computed:{theme(){return this.$vuetify.theme.currentTheme}}};const ue=(0,C.Z)(de,[["render",se],["__scopeId","data-v-2c5dcf90"]]);var ce=ue,me=n(3601),pe=n(678);const fe=e=>((0,o.dD)("data-v-b3d898bc"),e=e(),(0,o.Cn)(),e),ge={class:"d-flex align-center justify-center"},we=fe((()=>(0,o._)("div",{class:"text-center"},[(0,o._)("h1",null,"Documents"),(0,o._)("h3",{class:"pt-2 docText"},"Ici sont disponibles tous les documents numérisées utiles et obtenus lors de mon parcours")],-1))),he=fe((()=>(0,o._)("span",{class:"dialogText"},"Téléchargement des documents",-1))),ve=["href","download"];function _e(e,t,n,i,a,l){return(0,o.wg)(),(0,o.iD)("div",ge,[(0,o.Wm)(O._,{id:"documents",class:"elevation-10"},{default:(0,o.w5)((()=>[(0,o.Wm)(T.K,{class:"d-flex align-center justify-center docContainer"},{default:(0,o.w5)((()=>[we])),_:1}),(0,o.Wm)(T.K,{class:"d-flex align-center justify-center docContainer"},{default:(0,o.w5)((()=>[(0,o.Wm)(U.o,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(me.B,{modelValue:a.dialog,"onUpdate:modelValue":t[1]||(t[1]=e=>a.dialog=e),width:"1000"},{activator:(0,o.w5)((({props:e})=>[(0,o.Wm)(u.T,(0,o.dG)({color:"indigo"},e,{rounded:""}),{default:(0,o.w5)((()=>[(0,o.Uk)(" Voir les documents ")])),_:2},1040)])),default:(0,o.w5)((()=>[(0,o.Wm)(O._,null,{default:(0,o.w5)((()=>[(0,o.Wm)(V.E,null,{default:(0,o.w5)((()=>[he])),_:1}),(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.documentsInfos,(e=>((0,o.wg)(),(0,o.j4)(O._,{key:e,elevation:"8",class:"mx-auto my-4 cardDoc",width:"96%","prepend-icon":"mdi-file"},{title:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),default:(0,o.w5)((()=>[(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.body),1)])),_:2},1024),(0,o.Wm)(L.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u.T,{color:"primary",rounded:"pill"},{default:(0,o.w5)((()=>[(0,o._)("a",{href:e.pdf_url,download:e.pdfName,class:"anchorDownload"},"Télécharger",8,ve)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,o.Wm)(L.h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c.C),(0,o.Wm)(u.T,{color:"primary",variant:"text",onClick:t[0]||(t[0]=e=>a.dialog=!1)},{default:(0,o.w5)((()=>[(0,o.Wm)(pe.N,{activator:"parent",location:"top"},{default:(0,o.w5)((()=>[(0,o.Uk)("J'ai ce qu'il me faut")])),_:1}),(0,o.Uk)(" Fermer ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])}var be={name:"DocumentComp",components:{},data(){return{model:"tab-2",showDialog:!1,dialog:!1,documentsInfos:[{title:"TOEIC",body:"Le Certificat Voltaire est un examen créé en 2010 par le Projet Voltaire. Il est censé permettre d'attester de son niveau en orthographe et en expression française.",pdf_url:"",pdfName:"VOLTAIRE_COSSU_ARNAUD.pdf",logoSrc:"https://i.ibb.co/mqY8vgh/logocertifvoltaire.png"},{title:"LanguageCert",body:"LanguageCert propose des examens certifiants, alignés sur le CECRL et réglementés officiellement de façon externe par Ofqual, l’organisme gouvernemental de règlementation des diplômes en Angleterre.",pdf_url:"/files/LANGUAGECERT_COSSU_ARNAUD.pdf",pdfName:"LANGUAGECERT_COSSU_ARNAUD.pdf",logoSrc:"https://i.ibb.co/CvCRrcR/languagecert-logo.png"},{title:"Diplôme du PIX",body:"PIX est un outil permettant d'évaluer en ligne les compétences numériques des élèves, des étudiants et des stagiaires en formation continue.",pdf_url:"/files/PIX_COSSU_ARNAUD.pdf",pdfName:"PIX_COSSU_ARNAUD.pdf",logoSrc:"https://i.ibb.co/LppmPFH/t-l-chargement.png"},{title:"DeutscheSprache Diplom",body:"La certification d’allemand pour l’obtention du Deutsches Sprachdiplom, est un examen qui permet d’attester un niveau de compétence reconnu dans tout l’espace européen.",pdf_url:"/files/SPRACHEDIPLOM_COSSU_ARNAUD.pdf",pdfName:"SPRACHEDIPLOM_COSSU_ARNAUD.pdf",logoSrc:"https://i.ibb.co/Wt2Rryh/deutsches-sprachdiplom-bild.jpg"},{title:"Certification Voltaire",body:"Le Certificat Voltaire est un examen créé en 2010 par le Projet Voltaire. Il est censé permettre d'attester de son niveau en orthographe et en expression française.",pdf_url:"",pdfName:"VOLTAIRE_COSSU_ARNAUD.pdf",logoSrc:"https://i.ibb.co/mqY8vgh/logocertifvoltaire.png"}]}}};const ke=(0,C.Z)(be,[["render",_e],["__scopeId","data-v-b3d898bc"]]);var ye=ke,We=n(652),Ce=n(1332),je=n(795),xe=n(2773);const Se=(0,o._)("div",{class:"expTitle d-flex align-center justify-center"},[(0,o._)("h1",null,"Expériences")],-1);function Te(e,t,n,i,a,l){return(0,o.wg)(),(0,o.j4)(T.K,{id:"experiences",class:"pa-7 pt-15"},{default:(0,o.w5)((()=>[Se,e.windowWidth>960?((0,o.wg)(),(0,o.j4)(je.R,{key:0,"truncate-line":"both"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.exps,(e=>((0,o.wg)(),(0,o.j4)(xe.N,{size:"large",key:e},{opposite:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.date),1)])),icon:(0,o.w5)((()=>[(0,o.Wm)(We.V,{image:e.logoSrc,size:e.size},null,8,["image","size"])])),default:(0,o.w5)((()=>[(0,o.Wm)(O._,{class:"elevation-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(V.E,{class:"text-h5"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.entreprise),1)])),_:2},1024),(0,o.Wm)(Ce.Q,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:2},1024),(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.description),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,o.kq)("",!0),e.windowWidth<=960?((0,o.wg)(),(0,o.j4)(je.R,{key:1,"truncate-line":"both",side:"end"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.exps,(e=>((0,o.wg)(),(0,o.j4)(xe.N,{size:"large",key:e},{icon:(0,o.w5)((()=>[(0,o.Wm)(We.V,{image:e.logoSrc,size:e.size},null,8,["image","size"])])),default:(0,o.w5)((()=>[(0,o.Wm)(O._,{class:"elevation-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(V.E,{class:"text-h5"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.entreprise),1)])),_:2},1024),(0,o.Wm)(Ce.Q,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.title),1)])),_:2},1024),(0,o.Wm)(R.Z,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.zw)(e.description),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,o.kq)("",!0)])),_:1})}var Ue={data:()=>({tab:null,windowWidth:0,exps:[{entreprise:"VOGO",color:"deep-purple",date:"2022",description:"Stagiaire Web dans l'entreprise VOGO (équipe de développement). Réalisations de modules pour la partie Web Front et Back. Utilisation de différents langages comme HTML, CSS, JavaScript, SQL, VueJS",title:"Stagiaire Développeur Web",logoSrc:"https://i.ibb.co/CQqJBch/logoVogo.png",size:"60"},{description:"Réalisation de plusieurs stage, Mavis avec la reconstitution en 3D d'un musée, comprenant des batiments et un environnement complet. Réalisation d'un deuxième stage avec un analyseur de mails en Python",entreprise:"Lirmm",date:"2020-2021",title:"Stagiaire Développeur",logoSrc:"https://i.ibb.co/2cx9xzR/logo-Lirmm.png",size:"60"},{description:"Vendeur et conseiller multimédia dans les rayons Télévision, Hi-Fi, Téléphonie et Informatique. Réalisation de différents supports et affiches graphiques pour la vente.",entreprise:"Electro Depôt",date:"2021",title:"Vendeur Conseiller",logoSrc:"https://i.ibb.co/h21Zv5D/log-depot.png",size:"60"},{description:"Vendeur conseiller mécanicien, avec formation de 3 jours sur le montage et l'entretien des vélos. Rayons chasse et pêche et cyclisme. Apprentissage de la caisse manuelle et automatique avec système RFID.",entreprise:"Décathlon",date:"2019",title:"Vendeur Conseiller",logoSrc:"https://i.ibb.co/rxpmSYW/logo-Decat.jpg",size:"60"}]}),mounted(){window.addEventListener("resize",this.getWindowWidth),this.getWindowWidth()},beforeUnmount(){window.removeEventListener("resize",this.getWindowWidth)},methods:{getWindowWidth(){this.windowWidth=window.innerWidth}}};const Ae=(0,C.Z)(Ue,[["render",Te]]);var De=Ae,ze=n.p+"img/palmsModified.47d90e5d.jpg",Oe=n(6075);const Ve={class:"bioContainer"},Re={class:"bioTitle pb-2"},Le={class:"bioText"},Pe={class:"bioText"},Ee={class:"bioText"};function qe(e,t,n,i,a,l){return(0,o.wg)(),(0,o.j4)(T.K,{class:"bioCard"},{default:(0,o.w5)((()=>[(0,o.Wm)(Oe.B,{class:"bioCard d-flex align-center justify-center",src:ze},{default:(0,o.w5)((()=>[(0,o._)("div",Ve,[(0,o._)("p",Re,(0,s.zw)(e.title),1),(0,o._)("p",Le,(0,s.zw)(e.body),1),(0,o._)("p",Pe,(0,s.zw)(e.body1),1),(0,o._)("p",Ee,(0,s.zw)(e.body2),1)])])),_:1})])),_:1})}var Ne={name:"BioComp",data:()=>({title:"Quelques informations",body:"Jeune étudiant en informatique je suis passionné depuis tout petit par les nouvelles technologies. Tout commence par de l'électronique, puis cela se propage sur la création de site web simples, pour finir en master informatique.                 Au lycée je choisis donc l'option ICN (informatique et création numérique) lors de mon année de première. Cette option est basée sur le volontariat et n'est pas obligatoire.                 C'est là où les premières bases du code apparaissent, avec le Pascal et le C.",body1:"Puis en terminale je choisis l'option ISN (informatique et science du numérique) afin de continuer mon parcours,                 où les bases du code sont un peu plus poussées et où un projet final est attendu.                 Par la suite je choisis donc de m'inscrire en CMI informatique à la faculté des sciences de Montpellier, afin de continuer dans le domaine qui m'intéresse depuis tant d'années. ",body2:"Après avoir passé les 3 années de licence, je suis maintenant en Master Génie Logiciel à la faculté des sciences de Montpellier."})};const Fe=(0,C.Z)(Ne,[["render",qe],["__scopeId","data-v-f276cc90"]]);var Ie=Fe,Me={name:"App",components:{HeaderComp:x,ProjectComp:J,FooterComp:ee,HeroComp:ce,DocumentCompVue:ye,TimelineExpComp:De,BioComp:Ie},data(){return{}},methods:{scrollToTimeline(){const e=this.$refs.timeline.$el;window.scrollTo({top:e.offsetTop,behavior:"smooth"})}}};const He=(0,C.Z)(Me,[["render",r]]);var Ke=He,Ze=(n(9773),n(8957)),Be=(0,Ze.Rd)({theme:{defaultTheme:"light",themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",projectButton:"deep-purple"},dark:{primary:"#2196F3",secondary:"#757575",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",projectButton:"#79A2FF"}}}});async function Je(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Je(),(0,i.ri)(Ke).use(Be).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,a){if(!i){var l=1/0;for(u=0;u<e.length;u++){i=e[u][0],o=e[u][1],a=e[u][2];for(var r=!0,s=0;s<i.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(r=!1,a<l&&(l=a));if(r){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"===typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"===typeof i.then)return i}var a=Object.create(null);n.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var r=2&o&&i;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){l[e]=function(){return i[e]}}));return l["default"]=function(){return i},n.d(a,l),a}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.4add6019.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio-vuejs:";n.l=function(i,o,a,l){if(e[i])e[i].push(o);else{var r,s;if(void 0!==a)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==t+a){r=c;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+a),r.src=i),e[i]=[o];var m=function(t,n){r.onerror=r.onload=null,clearTimeout(p);var o=e[i];if(delete e[i],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Arnaudcs.github.io/"}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var a=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=a);var l=n.p+n.u(t),r=new Error,s=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",r.name="ChunkLoadError",r.type=a,r.request=l,o[1](r)}};n.l(l,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,l=i[0],r=i[1],s=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(s)var u=s(n)}for(t&&t(i);d<l.length;d++)a=l[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},i=self["webpackChunkportfolio_vuejs"]=self["webpackChunkportfolio_vuejs"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2969)}));i=n.O(i)})();
//# sourceMappingURL=app.f46fa1b4.js.map