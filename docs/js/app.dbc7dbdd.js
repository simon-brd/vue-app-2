(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},s=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-app-2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1d54":function(e,t,a){e.exports=a.p+"img/coin.1b95dda6.png"},4341:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"secondary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("span",[e._v("DRAW'IT")])],1),a("v-spacer"),a("v-btn",{staticClass:"mx-2",attrs:{to:"/",color:"primary"}},[e._v("Jouer")]),a("v-btn",{staticClass:"mx-2",attrs:{to:"/rules",color:"primary"}},[e._v("Règles")]),a("v-btn",{staticClass:"mx-2",attrs:{to:"/scoreboard",color:"primary"}},[e._v("Tableau des scores")])],1),a("v-main",[a("router-view")],1)],1)},s=[],o={name:"App",data:function(){return{}}},i=o,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),m=a("40dc"),p=a("8336"),v=a("adda"),f=a("f6c4"),h=a("2fa4"),b=Object(c["a"])(i,n,s,!1,null,null,null),g=b.exports;u()(b,{VApp:d["a"],VAppBar:m["a"],VBtn:p["a"],VImg:v["a"],VMain:f["a"],VSpacer:h["a"]});var y=a("9483");Object(y["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var w=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"container-drawit"},[a("v-col",[a("h1",[e._v("Bienvenue sur Draw'it")]),!1===e.shuffled?a("v-row",[a("v-col",{staticClass:"mx-auto my-3",attrs:{cols:"4",md:"4",sm:"4"}},[a("v-text-field",{attrs:{label:"Nom du joueur"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1):e._e(),!1===e.shuffled?a("v-btn",{attrs:{disabled:!e.name,elevation:"2"},on:{click:function(t){return e.shuffleCards()}}},[e._v("Démarrer une partie")]):e._e(),e.shuffled?a("Draw",{attrs:{deck:e.deck,name:e.name}}):e._e()],1)],1)],1)},x=[],C=(a("96cf"),a("1da1")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",[e._v(" Bonne chance "+e._s(e.name)+" ! "),r("v-img",{staticClass:"mx-auto my-4",attrs:{src:a("1d54"),width:"70"}}),e._v(" Vous avez "+e._s(e.money)+" pièces ! "),r("v-row",{staticClass:"d-flex my-3"},[r("v-select",{staticClass:"color",attrs:{items:e.cardColors,"item-text":"value","item-value":"id",label:"Couleur de la carte"},model:{value:e.betColor,callback:function(t){e.betColor=t},expression:"betColor"}}),r("v-text-field",{staticClass:"amount",attrs:{type:"number",label:"Nombre de pièces à parier"},on:{change:e.updatePotentialGain},model:{value:e.betAmount,callback:function(t){e.betAmount=t},expression:"betAmount"}})],1),r("v-row",{attrs:{justify:"center"}},[r("p",{staticClass:"my-auto"},[e._v("Gain potentiel :")]),r("v-chip",{staticClass:"ma-2",attrs:{color:"yellow",label:""}},[e._v(" "+e._s(e.potentialGain)+" ")]),r("v-img",{attrs:{src:a("1d54"),"max-width":"50"}})],1),0!==e.card.remaining?r("v-btn",{staticClass:"my-5",attrs:{elevation:"2",disabled:0===e.betAmount},on:{click:function(t){return e.drawCard(e.deck.deck_id)}}},[e._v("Parier !")]):e._e(),0!==e.card.remaining?r("div",[e._v(" Il reste "+e._s(e.card.remaining?e.card.remaining:"52")+" cartes dans le jeu ")]):e._e(),r("v-row",{staticClass:"d-flex justify-center my-3"},[e.card.cards?r("v-img",{attrs:{src:e.card.cards[0].image,"max-height":"300","max-width":"200"}}):e._e()],1),e.win?r("v-alert",{staticClass:"mx-auto my-3",attrs:{dismissible:"",text:"",type:"success",width:"300"}},[e._v("Vous avez gagné "+e._s(e.potentialGain)+" pièces")]):e._e(),e.lose?r("v-alert",{staticClass:"mx-auto my-3",attrs:{dismissible:"",text:"",type:"error",width:"300"}},[e._v("Vous avez perdu "+e._s(e.betAmount)+" pièces")]):e._e(),0===e.card.remaining?r("v-alert",{staticClass:"mx-auto my-3",attrs:{dismissible:"",text:"",type:"info",width:"500"}},[e._v("Partie terminée, il n'y a plus de cartes dans le deck")]):e._e(),0===e.card.remaining?r("v-btn",{on:{click:e.saveScore}},[e._v("Enregistrer ma partie")]):e._e()],1)],1)},V=[],S=(a("b0c0"),a("a9e3"),a("bc3a")),j=a.n(S),O="https://deckofcardsapi.com/api",A={name:"Draw",props:{deck:Object,name:String},data:function(){return{money:20,card:[],win:!1,lose:!1,betColor:null,betAmount:0,potentialGain:0,cardValues:["KING","QUEEN","JACK","10","9","8","7","6","5","4","3","2","ACE"],cardColors:[{id:"SPADES",value:"PIQUE"},{id:"CLUBS",value:"TREFLE"},{id:"DIAMONDS",value:"CARREAU"},{id:"HEARTS",value:"COEUR"}]}},methods:{drawCard:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(O+"/deck/"+t+"/draw");case 2:a=e.sent,this.card=a.data,this.checkBet();case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),checkBet:function(){var e=this.card.cards[0].suit;this.win=!1,this.lose=!1,e===this.betColor?(this.money+=4*Number(this.betAmount),this.win=!0):(this.money-=Number(this.betAmount),this.lose=!0)},updatePotentialGain:function(){this.potentialGain=4*Number(this.betAmount)},saveScore:function(){var e=localStorage.getItem("scores");if(e){var t=JSON.parse(e);console.log(t),t.push({name:this.$props.name,score:this.money});var a=JSON.stringify(t);localStorage.setItem("scores",a)}else{var r=[{name:this.$props.name,score:this.money}],n=JSON.stringify(r);localStorage.setItem("scores",n)}}}},E=A,R=(a("7db4"),a("0798")),N=a("cc20"),P=a("62ad"),D=a("0fd9"),I=a("b974"),B=a("8654"),T=Object(c["a"])(E,k,V,!1,null,"07613102",null),G=T.exports;u()(T,{VAlert:R["a"],VBtn:p["a"],VChip:N["a"],VCol:P["a"],VImg:v["a"],VRow:D["a"],VSelect:I["a"],VTextField:B["a"]});var J="https://deckofcardsapi.com/api",$={name:"Home",components:{Draw:G},data:function(){return{shuffled:!1,deck:[],cardDrawn:[],name:null}},methods:{shuffleCards:function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.a.get(J+"/deck/new/shuffle");case 2:t=e.sent,this.deck=t.data,this.shuffled=!0;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},L=$,M=(a("cccb"),a("a523")),U=Object(c["a"])(L,_,x,!1,null,null,null),q=U.exports;u()(U,{VBtn:p["a"],VCol:P["a"],VContainer:M["a"],VRow:D["a"],VTextField:B["a"]});var F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{staticClass:"text-center"},[a("h1",{staticClass:"mb-7"},[e._v("Règles")]),a("v-alert",{staticClass:"mx-auto my-3",attrs:{text:"",type:"info",width:"800"}},[e._v("Draw'it est une application de pari sur des tirages de cartes.")]),a("v-alert",{staticClass:"mx-auto my-3",attrs:{text:"",type:"info",width:"800"}},[e._v("Chaque joueur commence la partie avec 20 pièces.")]),a("v-alert",{staticClass:"mx-auto my-3",attrs:{text:"",type:"info",width:"800"}},[e._v("Un deck de cartes est composée de 52 cartes.")]),a("v-alert",{staticClass:"mx-auto my-3",attrs:{text:"",type:"info",width:"800"}},[e._v("Lorsqu'il n'y a plus de cartes, la partie est terminée.")]),a("v-alert",{staticClass:"mx-auto my-3",attrs:{text:"",type:"warning",width:"800"}},[e._v("Lorsqu'un joueur se retrouve avec 0 pièces, il a perdu !")]),a("v-alert",{staticClass:"mx-auto my-3",attrs:{text:"",type:"success",width:"800"}},[e._v("Lorsqu'une partie est terminée, le nombre de pièces du joueur est enregistré sur le ScoreBoard !")])],1)],1)],1)},z=[],H={name:"rules"},K=H,Q=Object(c["a"])(K,F,z,!1,null,null,null),W=Q.exports;u()(Q,{VAlert:R["a"],VCol:P["a"],VContainer:M["a"],VRow:D["a"]});var X=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{staticClass:"ma-auto",attrs:{cols:"4",sm:"4",md:"4"}},[r("h1",{staticClass:"mt-2 mb-5"},[e._v("Tableau des scores")]),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.players,"sort-by":"score","sort-desc":"true"},scopedSlots:e._u([{key:"item.score",fn:function(t){var n=t.item;return[r("v-row",[e._v(" "+e._s(n.score)+" "),r("v-img",{staticClass:"mx-2",attrs:{src:a("1d54"),"max-width":"20"}})],1)]}},{key:"no-data",fn:function(){return[e._v(" Pas de partie enregistrée ")]},proxy:!0}])})],1)],1)],1)},Y=[],Z={name:"Scoreboard",data:function(){return{headers:[{text:"Nom",value:"name"},{text:"Score",value:"score"}],players:[]}},created:function(){this.getScores()},methods:{getScores:function(){var e=localStorage.getItem("scores");e&&(this.players=JSON.parse(e))}}},ee=Z,te=a("8fea"),ae=Object(c["a"])(ee,X,Y,!1,null,null,null),re=ae.exports;u()(ae,{VCol:P["a"],VContainer:M["a"],VDataTable:te["a"],VImg:v["a"],VRow:D["a"]}),r["a"].use(w["a"]);var ne=[{path:"/",name:"Home",component:q},{path:"/rules",name:"Rules",component:W},{path:"/scoreboard",name:"Scoreboard",component:re}],se=new w["a"]({routes:ne}),oe=se,ie=a("f309");r["a"].use(ie["a"]);var ce=new ie["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:oe,vuetify:ce,render:function(e){return e(g)}}).$mount("#app")},"5ced":function(e,t,a){},"7db4":function(e,t,a){"use strict";a("4341")},cccb:function(e,t,a){"use strict";a("5ced")}});
//# sourceMappingURL=app.dbc7dbdd.js.map