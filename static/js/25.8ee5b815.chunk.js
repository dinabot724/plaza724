(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{209:function(e,t,a){"use strict";function n(e,t){var a=t.left,n=t.right,r=t.mirror,o=t.opposite,l=(a?1:0)|(n?2:0)|(r?16:0)|(o?32:0)|(e?64:0);if(u.hasOwnProperty(l))return u[l];if(!r!=!(e&&o)){var c=[n,a];a=c[0],n=c[1]}var s=a?"-100%":n?"100%":"0",m=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+s+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+s+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return u[l]=(0,i.animation)(m),u[l]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,o=e.duration,l=void 0===o?i.defaults.duration:o,s=e.delay,m=void 0===s?i.defaults.delay:s,u=e.count,d=void 0===u?i.defaults.count:u,g=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),p={make:n,duration:void 0===r?l:r,delay:m,forever:a,count:d,style:{animationFillMode:"both"}};return g.left,g.right,g.mirror,g.opposite,(0,c.default)(g,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,l=a(73),c=(o=l)&&o.__esModule?o:{default:o},s=a(2),i=a(56),m={out:s.bool,left:s.bool,right:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},u={};r.propTypes=m,t.default=r,e.exports=t.default},210:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),m=a(22),u=a.n(m),d=a(209),g=a.n(d),p=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},i.a.createElement("div",{className:"block m-0"},i.a.createElement("div",{className:"block-content p-0 ".concat(this.props.dark&&"nav-dark")},i.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&i.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"})),this.props.goto_orders_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-orders")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"})),this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-account")},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns ".concat(this.props.dark&&"nav-dark"),style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.goBack()},200)}},i.a.createElement("i",{className:"si si-arrow-left"}),i.a.createElement(u.a,{duration:"500"}))),i.a.createElement("p",{className:"form-control search-input d-flex align-items-center ".concat(this.props.dark&&"nav-dark")},this.props.logo&&i.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?i.a.createElement(i.a.Fragment,null,this.props.from_checkout?i.a.createElement("span",{className:"nav-page-title"},localStorage.getItem("cartToPayText")," ",i.a.createElement("span",{style:{color:localStorage.getItem("storeColor")}},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),this.props.title,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))):i.a.createElement("span",{className:"nav-page-title"},this.props.title)):null,this.props.has_delivery_icon&&i.a.createElement(g.a,{left:!0},i.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?i.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},i.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),i.a.createElement("br",null),i.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},i.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,i.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&i.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},i.a.createElement("i",{className:"si si-magnifier"}),i.a.createElement(u.a,{duration:"500"})),this.props.homeButton&&i.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},i.a.createElement("i",{className:"si si-home fa-2x text-muted"}),i.a.createElement(u.a,{duration:"500"}))))))))}}]),t}(s.Component);p.contextTypes={router:function(){return null}},t.a=p},211:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){if(e){var t=parseFloat(e);return t=t.toFixed(2)}return 0}},212:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(97),r=a(211),o=function(e){return function(t){var a={productQuantity:e.reduce(function(e,t){return++e},0),totalPrice:e.reduce(function(e,t){var a=0;return t.selectedaddons&&t.selectedaddons.map(function(e){return a+=parseFloat(e.price)}),e+=t.price*t.quantity+a*t.quantity,e=parseFloat(e),Object(r.a)(e),e},0)};t({type:n.a,payload:a})}}},213:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return l});var n=a(57),r=function(e){return{type:n.b,payload:e}},o=function(e){return{type:n.a,payload:e}},l=function(e){return function(t){return console.log("From action",e),t({type:n.c,payload:e})}}},235:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),m=a(22),u=a.n(m),d=a(221),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1},a._processAddons=function(e){var t=[];t.selectedaddons=[];for(var n=document.querySelectorAll("input[type=radio]:checked"),r=0;r<n.length;r++)t.selectedaddons.push({addon_category_name:n[r].name,addon_id:n[r].getAttribute("data-addon-id"),addon_name:n[r].getAttribute("data-addon-name"),price:n[r].value});for(var o=document.querySelectorAll("input[type=checkbox]:checked"),l=0;l<o.length;l++)t.selectedaddons.push({addon_category_name:o[l].name,addon_id:o[l].getAttribute("data-addon-id"),addon_name:o[l].getAttribute("data-addon-name"),price:o[l].value});a.props.addProduct(Object.assign(t,e))},a.handlePopupOpen=function(){a.setState({open:!0})},a.handlePopupClose=function(){a.setState({open:!1}),a.props.forceUpdate()},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")},onClick:this.handlePopupOpen},i.a.createElement("span",{className:"btn-inc"},"+"),i.a.createElement(u.a,{duration:"500"})),i.a.createElement(d.a,{open:this.state.open,onClose:this.handlePopupClose,closeIconSize:32},i.a.createElement("div",{style:{marginTop:"5rem",textAlign:"left"}},i.a.createElement("h3",{className:"mb-2"},localStorage.getItem("customizationHeading")),i.a.createElement("hr",{className:"mb-30 mt-10",style:{borderColor:"#ccc"}}),t.addon_categories.map(function(e){return i.a.createElement("div",{key:e.id,className:"addon-category-block"},i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"addon-category-name mb-2"},e.name),e.addons.length&&i.a.createElement(i.a.Fragment,null,e.addons.map(function(t,a){return i.a.createElement(i.a.Fragment,{key:t.id},i.a.createElement("div",{className:"form-group addon-list"},i.a.createElement("input",{type:"SINGLE"===e.type?"radio":"checkbox",className:"SINGLE"===e.type?"magic-radio":"magic-checkbox",name:e.name,"data-addon-id":t.id,"data-addon-name":t.name,value:t.price,defaultChecked:"SINGLE"===e.type&&0===a&&!0}),"SINGLE"===e.type&&i.a.createElement("label",{htmlFor:t.name}),i.a.createElement("label",{className:"text addon-label",htmlFor:t.name},t.name," ",i.a.createElement("span",{className:"addon-label-price ml-1"},"true"===localStorage.getItem("hidePriceWhenZero")&&"0.00"===t.price?null:i.a.createElement(i.a.Fragment,null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),t.price," ","right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))))})),i.a.createElement("hr",{className:"mb-20"})))}),i.a.createElement("button",{className:"btn btn-lg btn-customization-done",onClick:function(){e._processAddons(t),e.handlePopupClose()},style:{backgroundColor:localStorage.getItem("cartColorBg"),color:localStorage.getItem("cartColorText")}},localStorage.getItem("customizationDoneBtnText")))))}}]),t}(s.Component);t.a=g},242:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),m=a(213),u=a(47),d=a(50),g=a.n(d),p=a(22),h=a.n(p),f=a(16),y=a(211),b=a(212),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={isOpen:!1,removeProductFromPreviousRestaurant:!1},a.openFloatCart=function(){a.setState({isOpen:!0})},a.closeFloatCart=function(){a.setState({isOpen:!1})},a.addProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart;localStorage.setItem("activeRestaurant",e.restaurant_id);var o=!1;n.forEach(function(t){t.restaurant_id===e.restaurant_id?t.id===e.id&&JSON.stringify(t.selectedaddons)===JSON.stringify(e.selectedaddons)&&(t.quantity+=1,o=!0):(a.setState({removeProductFromPreviousRestaurant:!0}),setTimeout(function(){a.setState({removeProductFromPreviousRestaurant:!1})},4e3),n.splice(0,n.length))}),o||n.push(e),r(n),a.openFloatCart()},a.removeProduct=function(e){var t=a.props,n=t.cartProducts,r=t.updateCart,o=n.findIndex(function(t){return t.id===e.id});o>=0&&(n.forEach(function(t){t.id===e.id&&(1===t.quantity?n.splice(o,1):t.quantity-=e.quantity)}),r(n),n.length<1&&(a.closeFloatCart(),localStorage.removeItem("activeRestaurant")))},a.getTotalItemsInCart=function(){if("true"===localStorage.getItem("countQuantityAsTotalItemsOnCart")){var e=0;return a.props.cartProducts.forEach(function(t){e+=t.quantity}),e}return a.props.cartTotal.productQuantity},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.cartProducts.length&&this.setState({isOpen:!0})}},{key:"componentWillReceiveProps",value:function(e){e.newProduct!==this.props.newProduct&&this.addProduct(e.newProduct),e.productToRemove!==this.props.productToRemove&&this.removeProduct(e.productToRemove)}},{key:"render",value:function(){var e=this.props,t=e.cartTotal,a=e.cartProducts,n=["float-cart"];return this.state.isOpen&&n.push("float-cart--open"),i.a.createElement(i.a.Fragment,null,this.state.removeProductFromPreviousRestaurant&&i.a.createElement(g.a,{duration:250,bottom:!0},i.a.createElement("div",{className:"auth-error going-different-restaurant-notify"},i.a.createElement("div",{className:""},localStorage.getItem("itemsRemovedMsg")))),i.a.createElement("div",{className:n.join(" "),style:{backgroundColor:localStorage.getItem("cartColorBg"),color:localStorage.getItem("cartColorText")}},a.length?i.a.createElement(u.a,{to:"/cart",delay:200,className:"text-white"},i.a.createElement("span",null,this.getTotalItemsInCart()," ",localStorage.getItem("floatCartItemsText")),i.a.createElement("span",{className:"pl-5 pr-5"},"\xa0|\xa0"),i.a.createElement("span",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),Object(y.a)(t.totalPrice),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),i.a.createElement("span",{className:"pull-right"},localStorage.getItem("floatCartViewCartText")," ",i.a.createElement("i",{className:"si si-basket"})),i.a.createElement(h.a,{duration:"500"})):i.a.createElement("span",null,"\xa0")))}}]),t}(s.Component);t.a=Object(f.b)(function(e){return{cartProducts:e.cart.products,newProduct:e.cart.productToAdd,productToRemove:e.cart.productToRemove,cartTotal:e.total.data}},{loadCart:m.b,updateCart:b.a,removeProduct:m.c})(v)},243:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),m=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,1===this.props.item.is_recommended?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("recommendedBadgeColor")}},localStorage.getItem("recommendedBadgeText")):null,1===this.props.item.is_popular?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("popularBadgeColor")}},localStorage.getItem("popularBadgeText")):null,1===this.props.item.is_new?i.a.createElement("span",{className:"item-badge",style:{backgroundColor:localStorage.getItem("newBadgeColor")}},localStorage.getItem("newBadgeText")):null))}}]),t}(s.Component);t.a=m},244:function(e,t,a){"use strict";var n=a(3),r=a(4),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),m=a(210),u=a(41),d=a(168),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={withLinkToRestaurant:!1},a.fixedRestaurantInfo=function(e){a.child&&(e?a.child.heading.classList.add("hidden"):a.child.heading.classList.remove("hidden"))},a.scrollFunc=function(){if(document.documentElement.scrollTop>55){a.fixedRestaurantInfo(!1)}if(document.documentElement.scrollTop<55){a.fixedRestaurantInfo(!0)}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({withLinkToRestaurant:this.props.withLinkToRestaurant}),this.props.history.location.state&&this.props.history.location.state.fromExplorePage&&this.setState({withLinkToRestaurant:this.props.history.location.state.fromExplorePage}),this.registerScrollEvent()}},{key:"componentWillUnmount",value:function(){this.removeScrollEvent()}},{key:"registerScrollEvent",value:function(){window.addEventListener("scroll",this.scrollFunc)}},{key:"removeScrollEvent",value:function(){window.removeEventListener("scroll",this.scrollFunc)}},{key:"render",value:function(){var e=this,t=this.props,a=t.history,n=t.restaurant;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"height-25 bg-white"},i.a.createElement(m.a,{ref:function(t){e.child=t},history:a,boxshadow:!1,has_restaurant_info:!0,restaurant:n,disable_search:!0,homeButton:!0}),0===n.length?i.a.createElement(u.a,{height:170,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"20",y:"70",rx:"4",ry:"4",width:"80",height:"78"}),i.a.createElement("rect",{x:"144",y:"85",rx:"0",ry:"0",width:"115",height:"18"}),i.a.createElement("rect",{x:"144",y:"115",rx:"0",ry:"0",width:"165",height:"16"})):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{to:"../../stores/"+n.slug,className:this.state.withLinkToRestaurant?"":"no-click"},i.a.createElement("div",{className:"pt-50"},i.a.createElement("div",{className:"block-content block-content-full pt-2"},i.a.createElement("img",{src:n.image,alt:n.name,className:"restaurant-image mt-0"})),i.a.createElement("div",{className:"block-content block-content-full restaurant-info"},i.a.createElement("h4",{className:"font-w600 mb-5 text-dark"},n.name),i.a.createElement("div",{className:"font-size-sm text-muted truncate-text text-muted"},n.description),1===n.is_pureveg&&i.a.createElement("p",{className:"mb-0"},i.a.createElement("span",{className:"font-size-sm pr-1 text-muted"},localStorage.getItem("pureVegText")),i.a.createElement("img",{src:"/assets/img/various/pure-veg.png",alt:"PureVeg",style:{width:"20px"}})),i.a.createElement("div",{className:"text-center restaurant-meta mt-5 d-flex align-items-center justify-content-between text-muted"},i.a.createElement("div",{className:"col-2 p-0 text-left"},i.a.createElement("i",{className:"fa fa-star",style:{color:localStorage.getItem("storeColor")}})," ",n.rating),i.a.createElement("div",{className:"col-4 p-0 text-center"},i.a.createElement("i",{className:"si si-clock"})," ",n.delivery_time," ",localStorage.getItem("homePageMinsText")),i.a.createElement("div",{className:"col-6 p-0 text-center"},i.a.createElement("i",{className:"si si-wallet"})," ","left"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,localStorage.getItem("currencyFormat"),n.price_range," "),"right"===localStorage.getItem("currencySymbolAlign")&&i.a.createElement(i.a.Fragment,null,n.price_range,localStorage.getItem("currencyFormat")," "),localStorage.getItem("homePageForTwoText")))))))),"<p><br></p>"!==n.custom_message&&"null"!==n.custom_message&&""!==n.custom_message&&i.a.createElement("div",{style:{position:"relative",background:"#fff"},dangerouslySetInnerHTML:{__html:n.custom_message}}))}}]),t}(s.Component);t.a=g},339:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),o=a(7),l=a(6),c=a(8),s=a(0),i=a.n(s),m=a(102),u=a(213),d=a(75),g=a(235),p=a(50),h=a.n(p),f=a(242),y=a(22),b=a.n(y),v=a(243),E=a(43),S=a.n(E),N=a(344),I=a(244),_=a(16),x=a(41),k=a(32),w=a(27),C=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={update:!0,is_active:1,loading:!0,item_loading:!0},a.forceStateUpdate=function(){setTimeout(function(){a.forceUpdate(),a.state.update?a.setState({update:!1}):a.setState({update:!0})},100)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.getSettings(),this.props.getAllLanguages(),this.props.getRestaurantInfo(this.props.restaurant),this.props.getSingleItem(this.props.itemId).then(function(t){t&&t.payload.id&&e.setState({item_loading:!1})})}},{key:"componentWillReceiveProps",value:function(e){if("undefined"===e.restaurant_info.is_active&&this.setState({loading:!0}),1!==e.restaurant_info.is_active&&0!==e.restaurant_info.is_active||(this.setState({loading:!1}),this.setState({is_active:e.restaurant_info.is_active})),this.state.is_active||document.getElementsByTagName("html")[0].classList.add("page-inactive"),this.props.languages!==e.languages)if(localStorage.getItem("userPreferedLanguage"))this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));else if(e.languages.length){var t=e.languages.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(t)}}},{key:"componentWillUnmount",value:function(){document.getElementsByTagName("html")[0].classList.remove("page-inactive")}},{key:"render",value:function(){var e=this;if(window.innerWidth>768)return i.a.createElement(N.a,{to:"/"});var t=this.props,a=t.addProduct,n=t.removeProduct,r=t.cartProducts,o=t.single_item;return i.a.createElement(i.a.Fragment,null,i.a.createElement(I.a,{history:this.props.history,restaurant:this.props.restaurant_info,withLinkToRestaurant:!0}),o.id&&i.a.createElement("div",{className:"single-item px-15 mt-20 pb-100"},i.a.createElement("span",{className:"hidden"},o.quantity=1),i.a.createElement("div",{className:"category-list-item single-item-img",style:{display:"flex",justifyContent:"space-between"}},this.state.item_loading?i.a.createElement(x.a,{height:400,width:window.innerWidth,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},i.a.createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:window.innerWidth,height:"290"}),i.a.createElement("rect",{x:"0",y:"300",rx:"0",ry:"0",width:"115",height:"20"}),i.a.createElement("rect",{x:"0",y:"325",rx:"0",ry:"0",width:"75",height:"16"}),i.a.createElement("rect",{x:window.innerWidth-100,y:"300",rx:"4",ry:"4",width:"115",height:"35"}),i.a.createElement("rect",{x:window.innerWidth-50,y:"300",rx:"4",ry:"4",width:"115",height:"35"})):i.a.createElement(i.a.Fragment,null,""!==o.image&&i.a.createElement(S.a,null,i.a.createElement("img",{src:o.image,alt:o.name,style:{width:"100%",height:"auto"}}),i.a.createElement(i.a.Fragment,null,void 0!==r.find(function(e){return e.id===o.id})&&i.a.createElement(h.a,{duration:150},i.a.createElement("div",{className:"quantity-badge-list",style:{backgroundColor:localStorage.getItem("storeColor")}},i.a.createElement("span",null,o.addon_categories.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"si si-check",style:{lineHeight:"1.3rem"}})):i.a.createElement(i.a.Fragment,null,r.find(function(e){return e.id===o.id}).quantity)))))),i.a.createElement("div",{className:"single-item-meta"},i.a.createElement("div",{className:"item-actions pull-right pb-0 mt-2"},i.a.createElement("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"btnGroupIcons1"},o.is_active?i.a.createElement(i.a.Fragment,null,o.addon_categories.length?i.a.createElement("button",{disabled:!0,type:"button",className:"btn btn-add-remove mr-2",style:{color:localStorage.getItem("cartColor-bg")}},i.a.createElement("span",{className:"btn-dec"},"-"),i.a.createElement(b.a,{duration:"500"})):i.a.createElement("button",{type:"button",className:"btn btn-add-remove mr-2",style:{color:localStorage.getItem("cartColor-bg")},onClick:function(){o.quantity=1,n(o),e.forceStateUpdate()}},i.a.createElement("span",{className:"btn-dec"},"-"),i.a.createElement(b.a,{duration:"500"})),o.addon_categories.length?i.a.createElement(g.a,{product:o,addProduct:a,forceUpdate:this.forceStateUpdate}):i.a.createElement("button",{type:"button",className:"btn btn-add-remove",style:{color:localStorage.getItem("cartColor-bg")},onClick:function(){a(o),e.forceStateUpdate()}},i.a.createElement("span",{className:"btn-inc"},"+"),i.a.createElement(b.a,{duration:"500"}))):i.a.createElement("div",{className:"text-danger text-item-not-available"},localStorage.getItem("cartItemNotAvailable")))),i.a.createElement("div",{className:"item-name font-w600 mt-2"},"true"===localStorage.getItem("showVegNonVegBadge")&&null!==o.is_veg&&i.a.createElement(i.a.Fragment,null,o.is_veg?i.a.createElement("img",{src:"/assets/img/various/veg-icon.png",alt:"Veg",style:{width:"1rem"},className:"mr-1"}):i.a.createElement("img",{src:"/assets/img/various/non-veg-icon.png",alt:"Non-Veg",style:{width:"1rem"},className:"mr-1"})),o.name),i.a.createElement("div",{className:"item-price"},"true"===localStorage.getItem("hidePriceWhenZero")&&"0.00"===o.price?null:i.a.createElement(i.a.Fragment,null,o.old_price>0&&i.a.createElement("span",{className:"strike-text mr-1"}," ","left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")," ",o.old_price,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),i.a.createElement("span",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")," ",o.price,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")),o.old_price>0&&"true"===localStorage.getItem("showPercentageDiscount")&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"price-percentage-discount mb-0 ml-1",style:{color:localStorage.getItem("cartColorBg")}},parseFloat((parseFloat(o.old_price)-parseFloat(o.price))/parseFloat(o.old_price)*100).toFixed(0),localStorage.getItem("itemPercentageDiscountText")))),o.addon_categories.length>0&&i.a.createElement("span",{className:"ml-2 customizable-item-text",style:{color:localStorage.getItem("storeColor")}},localStorage.getItem("customizableItemText"))),i.a.createElement(v.a,{item:o}),null!==o.desc?i.a.createElement("div",{className:"mt-2 mb-100"},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.desc}})):i.a.createElement("br",null))))),!this.state.loading&&i.a.createElement(i.a.Fragment,null,this.state.is_active?i.a.createElement(f.a,null):i.a.createElement("div",{className:"auth-error no-click"},i.a.createElement("div",{className:"error-shake"},localStorage.getItem("notAcceptingOrdersMsg")))))}}]),t}(s.Component),F=Object(_.b)(function(e){return{restaurant_info:e.items.restaurant_info,cartProducts:e.cart.products,single_item:e.items.single_item,settings:e.settings.settings,languages:e.languages.languages,language:e.languages.language}},{getRestaurantInfo:d.b,getRestaurantItems:d.e,resetItems:d.h,resetInfo:d.g,getSingleItem:d.f,addProduct:u.a,removeProduct:u.c,getSettings:k.a,getAllLanguages:w.a,getSingleLanguageData:w.b})(C),O=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,window.innerWidth>=768?i.a.createElement(m.a,{restaurant:this.props.match.params.restaurant,itemId:this.props.match.params.id}):i.a.createElement(F,{restaurant:this.props.match.params.restaurant,itemId:this.props.match.params.id,history:this.props.history}))}}]),t}(s.Component);t.default=O}}]);