(this["webpackJsonpweb-pokemon"]=this["webpackJsonpweb-pokemon"]||[]).push([[0],{183:function(e,a,t){e.exports=t(380)},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},196:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},375:function(e,a,t){},376:function(e,a,t){},377:function(e,a,t){},378:function(e,a,t){},380:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(19),l=t.n(o),c=(t(188),t(189),t(87)),m=t.n(c),s=function(){return r.a.createElement("div",{className:m.a.banner},r.a.createElement("h1",{className:m.a.title},"Welcome to Poke App"))},i=t(59),u=(t(190),t(11)),d=t(42),p=t.n(d),E=t(90),b=function(e){return function(){var a=Object(E.a)(p.a.mark((function a(t){var n,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n={},a.prev=1,a.next=4,fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=".concat(e));case 4:return r=a.sent,a.next=7,r.json();case 7:a.sent.results.forEach(function(){var e=Object(E.a)(p.a.mark((function e(a){var r,o,l,c,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a.url);case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.next=8,fetch(o.species.url);case 8:return l=e.sent,e.next=11,l.json();case 11:c=e.sent,n=o,m=c.flavor_text_entries.find((function(e){return"en"===e.language.name})).flavor_text,n.description=m,-1===c.gender_rate?n.gender="Genderless":c.gender_rate>=4?n.gender="Female":n.gender="Male",t({type:"FETCH_SUCCESS",payload:{pokemon:n}});case 17:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t({type:"FETCH_ERROR",error:a.t0});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()},f=Object(u.b)((function(e){return e}),(function(e){return{StartToquery:function(a){return e(function(e){return{type:"QUERY_POKEMONS",payload:{query:e}}}(a))},cancelQuery:function(){return e({type:"CANCEL_QUERY"})}}}))((function(e){var a=r.a.createRef(),t=Object(n.useState)("query-button hidden"),o=Object(i.a)(t,2),l=o[0],c=o[1];return r.a.createElement("div",{className:"navbar-custom"},r.a.createElement("div",{className:"titles"},r.a.createElement("span",{className:"main"},"Pok\xe9App"),r.a.createElement("p",{className:"description"},"Pokemons"),r.a.createElement("span",{className:"items-section"},"Items")),r.a.createElement("div",{className:"query-container"},r.a.createElement("input",{type:"text",placeholder:"Search",ref:a,className:"query-bar",onChange:function(a){if(""===a.target.value)return c("query-button hidden"),void e.cancelQuery();c("query-button"),e.StartToquery(a.target.value)}}),r.a.createElement("button",{onClick:function(){a.current.value="",c("query-button hidden"),e.cancelQuery()},className:l},"X")))})),k=(t(196),Object(u.b)((function(e){return e}),(function(e){return{openModal:function(a){return e(function(e){return{type:"OPEN_MODAL",payload:{pokemonData:e,comparedPokemon:e}}}(a))}}}))((function(e){return r.a.createElement("div",{className:"custom-card card",onClick:function(){e.openModal(e.data)}},r.a.createElement("img",{src:e.data.sprites.front_default,alt:"imagen pokemon",className:"card-img"}),r.a.createElement("div",{className:"card-name--container"},r.a.createElement("p",{className:"card-name"},e.data.name)))}))),y=t(7),N=t(382),h=t(383),g=t(144),v=t.n(g),x=(t(198),Object(u.b)((function(e){return e}),(function(e){return{fetch:function(a){return e(b(a))},nextPage:function(){return e({type:"INCREASE_ID"})}}}))((function(e){var a=e.pokemons.index,t=e.modalController.isComparing?"":"hidden";return r.a.createElement("div",null,e.modalController.isComparing&&r.a.createElement("div",{className:"card-alert-container ".concat(t)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header--alert"},r.a.createElement("span",null,"Comparing pokemon")),r.a.createElement("div",{className:"card-body--alert"},r.a.createElement("strong",null,r.a.createElement("span",null,e.modalController.pokemonData.name))))),r.a.createElement(N.a,{className:"pokemons-container"},null!==e.pokemons.queryPokemons?r.a.createElement(h.a,null,e.pokemons.queryPokemons.map((function(e){return r.a.createElement(y.a,{xs:6,sm:3,md:3,lg:3,key:e.id},r.a.createElement(k,{data:e}))}))):r.a.createElement(v.a,{loadMore:function(){e.fetch(a),e.nextPage()},hasMore:!0,loader:r.a.createElement("div",{className:"loader",key:0},"Loading ..."),initialLoad:!1,threshold:20},r.a.createElement(h.a,null,e.pokemons.pokemons.map((function(e){return r.a.createElement(y.a,{xs:6,sm:3,md:3,lg:2,key:e.id},r.a.createElement(k,{data:e}))}))))))}))),O=t(23),C=t(145),D=t(9),P={modalVisible:!1,pokemonData:null,isComparing:!1,comparedPokemon:null};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"OPEN_MODAL":return Object(D.a)(Object(D.a)({},e),{},{modalVisible:!0,pokemonData:e.isComparing?e.pokemonData:a.payload.pokemonData,comparedPokemon:e.isComparing?a.payload.comparedPokemon:null});case"CLOSE_MODAL":return Object(D.a)(Object(D.a)({},e),{},{modalVisible:!1,pokemonData:null,comparedPokemon:null,isComparing:!1});case"COMPARE":return Object(D.a)(Object(D.a)({},e),{},{modalVisible:!1,isComparing:!0});default:return e}},_=t(61),S={pokemons:[],queryPokemons:null,isFetching:!1,error:null,index:0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_SUCCESS":return Object(D.a)(Object(D.a)({},e),{},{pokemons:[].concat(Object(_.a)(e.pokemons),[a.payload.pokemon]),isFetching:!1});case"INCREASE_ID":return Object(D.a)(Object(D.a)({},e),{},{index:e.index+20});case"QUERY_POKEMONS":return Object(D.a)(Object(D.a)({},e),{},{queryPokemons:Object(_.a)(e.pokemons.filter((function(e){return e.name.includes(a.payload.query)})))});case"CANCEL_QUERY":return Object(D.a)(Object(D.a)({},e),{},{pokemons:Object(_.a)(e.pokemons),queryPokemons:null});case"FETCH_ERROR":return Object(D.a)(Object(D.a)({},e),{},{error:a.error});default:return e}},w=Object(O.c)({modalController:j,pokemons:M}),R=Object(O.d)(w,Object(O.a)(C.a)),q=(t(199),function(e){var a=e.data;return r.a.createElement(h.a,null,r.a.createElement(y.a,{xs:4},r.a.createElement("img",{className:"body-img",src:a.pokemonData.sprites.front_default,alt:a.pokemonData.name})),r.a.createElement(y.a,{xs:8,className:"body-text-container"},r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("p",{className:"body-description"},a.pokemonData.description)),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement(y.a,{className:"body-text-container--item"},r.a.createElement("p",{className:"body-title"},"Height"),r.a.createElement("p",null,"".concat(a.pokemonData.height,"m"))),r.a.createElement(y.a,{className:"body-text-container--item"},r.a.createElement("p",{className:"body-title"},"Weight"),r.a.createElement("p",null,"".concat(a.pokemonData.weight,"kg"))),r.a.createElement(y.a,{className:"body-text-container--item"},r.a.createElement("p",{className:"body-title"},"Gender"),r.a.createElement("p",null,a.pokemonData.gender))),r.a.createElement(h.a,{className:"body-list-items"},r.a.createElement(y.a,{className:"body-text-container--item"},r.a.createElement("p",{className:"body-title"},"Abilities"),r.a.createElement("section",null,r.a.createElement("ul",{className:"body-text-container--item-list"},a.pokemonData.abilities.map((function(e){return r.a.createElement("li",{key:e.ability.name},e.ability.name)}))))),r.a.createElement(y.a,{className:"body-text-container--item"},r.a.createElement("p",{className:"body-title"},"Types"),r.a.createElement("section",null,r.a.createElement("ul",{className:"body-text-container--item-list"},a.pokemonData.types.map((function(e){return r.a.createElement("li",{key:e.type.name},e.type.name)})))))))))}),A=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement("div",{className:"body-comparing--img"},r.a.createElement(y.a,{xs:6},r.a.createElement("img",{src:a.pokemonData.sprites.front_default,alt:a.pokemonData.name})),r.a.createElement(y.a,{xs:6},r.a.createElement("img",{src:a.comparedPokemon.sprites.front_default,alt:a.comparedPokemon.name})))),r.a.createElement(h.a,null,r.a.createElement(y.a,{xs:12},r.a.createElement("div",{className:"body-comparing-texts--container"},r.a.createElement("hr",null),r.a.createElement("div",{className:"body-comparing--description"},r.a.createElement(y.a,{xs:4},r.a.createElement("p",null,"".concat(a.pokemonData.height,"m"))),r.a.createElement(y.a,{xs:4},r.a.createElement("p",{className:"body-title"},"Height")),r.a.createElement(y.a,{xs:4},r.a.createElement("p",null,"".concat(a.comparedPokemon.height,"m")))),r.a.createElement("div",{className:"body-comparing--description"},r.a.createElement(y.a,{xs:4},r.a.createElement("p",null,"".concat(a.pokemonData.weight,"kg"))),r.a.createElement(y.a,{xs:4},r.a.createElement("p",{className:"body-title"},"Weight")),r.a.createElement(y.a,{xs:4},r.a.createElement("p",null,"".concat(a.comparedPokemon.weight,"kg")))),r.a.createElement("div",{className:"body-comparing--description"},r.a.createElement(y.a,{xs:4},r.a.createElement("p",null,"Male")),r.a.createElement(y.a,{xs:4},r.a.createElement("p",{className:"body-title"},"Gender")),r.a.createElement(y.a,{xs:4},r.a.createElement("p",null,"Female"))),r.a.createElement("div",{className:"body-comparing--description"},r.a.createElement(y.a,{xs:4,className:"body-comparing-list"},r.a.createElement("ul",null,a.pokemonData.abilities.map((function(e){return r.a.createElement("li",{className:"body-comparing-list--item",key:e.ability.name},e.ability.name)})))),r.a.createElement(y.a,{xs:4},r.a.createElement("p",{className:"body-title"},"Abilities")),r.a.createElement(y.a,{xs:4},r.a.createElement("ul",{className:"body-comparing-list"},a.comparedPokemon.abilities.map((function(e){return r.a.createElement("li",{className:"body-comparing-list--item",key:e.ability.name},e.ability.name)})))))))))},L=t(36),F=(t(375),function(e){var a,t=e.data,n=t.pokemonData.stats.map((function(e){return e.base_stat})),o=t.comparedPokemon?t.comparedPokemon.stats.map((function(e){return e.base_stat})):null;return a=null!==o?[{name:"hp",pokemonData:n[0],comparedPokemon:o[0]},{name:"attack",pokemonData:n[1],comparedPokemon:o[1]},{name:"",pokemonData:n[2],comparedPokemon:o[2]},{name:"special",pokemonData:n[3],comparedPokemon:o[3]},{name:"",pokemonData:n[4],comparedPokemon:o[4]},{name:"speed",pokemonData:n[5],comparedPokemon:o[5]}]:[{name:"hp",pokemonData:n[0]},{name:"attack",pokemonData:n[1]},{name:"",pokemonData:n[2]},{name:"special",pokemonData:n[3]},{name:"",pokemonData:n[4]},{name:"speed",pokemonData:n[5]}],r.a.createElement(L.b,{width:350,height:200,data:a,margin:{top:0,right:25,bottom:0,left:0},className:"stats-chart"},r.a.createElement(L.a,{dataKey:"pokemonData",barSize:35,fill:"#096700"}),null!==o&&r.a.createElement(L.a,{dataKey:"comparedPokemon",barSize:35,fill:"#12d400"}),r.a.createElement(L.c,{dataKey:"name"}),r.a.createElement(L.d,null))}),T=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(h.a,{className:"row-footer"},r.a.createElement("h4",{className:"footer-title"},"Stats")),r.a.createElement(h.a,{className:"row-footer"},r.a.createElement(F,{data:a})))},V=(t(376),function(e){var a=e.props,t=a.modalController;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header--texts"},r.a.createElement("h6",{className:"header-texts--name"},t.pokemonData.name),r.a.createElement("button",{onClick:function(){a.comparePokemons()},className:"header-texts--compare"},"Compare To...")),r.a.createElement("button",{onClick:function(){a.closeModal()},className:"header--close"},"X"))}),I=function(e){var a=e.props,t=a.modalController;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header--texts"},r.a.createElement("h6",{className:"header-texts--name"},t.pokemonData.name," VS."),r.a.createElement("h6",{className:"header-texts--name"},t.comparedPokemon.name)),r.a.createElement("button",{onClick:function(){a.closeModal()},className:"header--close"},"X"))},Q=Object(u.b)((function(e){return e}),(function(e){return{closeModal:function(a){return e({type:"CLOSE_MODAL"})},comparePokemons:function(){return e({type:"COMPARE"})}}}))((function(e){return r.a.createElement("div",null,e.modalController.isComparing?r.a.createElement(I,{props:e}):r.a.createElement(V,{props:e}))})),H=(t(377),Object(u.b)((function(e){return e}))((function(e){return e.modalController.modalVisible?l.a.createPortal(r.a.createElement("div",{className:"root-modal"},r.a.createElement(Q,null),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement("div",{className:"body"},e.modalController.isComparing?r.a.createElement(A,{data:e.modalController}):r.a.createElement(q,{data:e.modalController}),r.a.createElement("hr",null))),r.a.createElement(h.a,null,r.a.createElement("div",{className:"footer"},r.a.createElement(T,{data:e.modalController})))),document.getElementById("modal-root")):null}))),U=(t(378),Object(u.b)((function(e){return e}),(function(e){return{}}))((function(e){var a=Object(n.useState)("hidden"),t=Object(i.a)(a,2),o=t[0],l=t[1];return Object(n.useEffect)((function(){return e.modalController.modalVisible?l("open"):l("hidden"),function(){}}),[e.modalController.modalVisible]),r.a.createElement("div",{className:"overlay ".concat(o)})})));var K=function(){return r.a.createElement(u.a,{store:R},r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(s,null),r.a.createElement(f,null),r.a.createElement(H,null),r.a.createElement(x,null)))};t(379);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))},87:function(e,a,t){e.exports={banner:"banner_banner__-R6DW",title:"banner_title__3brMb"}}},[[183,1,2]]]);
//# sourceMappingURL=main.3afebcf8.chunk.js.map