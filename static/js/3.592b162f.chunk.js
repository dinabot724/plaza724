(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(4),l=a(7),i=a(6),c=a(8),s=a(0),o=a.n(s),m=a(41),d=a(42),u=a(344),y=a(16),g=a(118),h=a(10),p=a(5),f=a.n(p),v=a(233),E=a(22),b=a.n(E),w=a(230),N=a.n(w),x=a(168),_=a(234),S=a.n(_),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).__refreshOrders=function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.add("fa-spin"),setTimeout(function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.remove("fa-spin")},2e3),a.props.refreshOrders()},a.getDeliveryGuyTotalEarning=function(e){var t=0;return e.commission&&(t+=parseFloat(e.commission)),e.tip_amount&&(t+=parseFloat(e.tip_amount)),t},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.remove("bg-grey"),document.getElementsByTagName("body")[0].classList.add("delivery-dark-bg")}},{key:"render",value:function(){var e=this,t=this.props.new_orders;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mb-100"},o.a.createElement("div",{className:"d-flex justify-content-between nav-dark"},o.a.createElement("div",{className:"delivery-tab-title px-20 py-15"},localStorage.getItem("deliveryNewOrdersTitle")),o.a.createElement("div",{className:"delivery-order-refresh"},o.a.createElement("button",{className:"btn btn-refreshOrders mr-15",onClick:this.__refreshOrders,style:{position:"relative"}},localStorage.getItem("deliveryOrdersRefreshBtn")," ",o.a.createElement("i",{ref:"btnSpinner",className:"fa fa-refresh"}),o.a.createElement(b.a,{duration:1200})))),0===t.length?o.a.createElement("p",{className:"text-center text-muted py-15 mb-10 bg-white"},localStorage.getItem("deliveryNoNewOrders")):o.a.createElement("div",{className:"p-15"},o.a.createElement("div",{className:"delivery-list-wrapper pb-20"},t.map(function(t){return o.a.createElement(x.a,{to:"/delivery/orders/".concat(t.unique_order_id),key:t.id,style:{position:"relative"}},o.a.createElement("div",{className:"delivery-list-item px-15 pb-5 pt-15"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement("p",{className:"m-0"},"true"===localStorage.getItem("showFromNowDate")?o.a.createElement(N.a,{fromNow:!0},t.updated_at):o.a.createElement(N.a,{format:"DD/MM/YYYY hh:mma"},t.updated_at))),o.a.createElement("div",null,"true"===localStorage.getItem("enableDeliveryGuyEarning")&&o.a.createElement("p",{className:"m-0 list-delivery-commission"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement(S.a,{to:e.getDeliveryGuyTotalEarning(t),speed:1e3,digits:2}),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")))),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"font-w700 list-delivery-store-name"},t.restaurant.name),o.a.createElement("div",null,o.a.createElement("p",{className:"m-0 font-w700"},"#",t.unique_order_id.substr(t.unique_order_id.length-8)))),o.a.createElement("p",null,"true"===localStorage.getItem("showDeliveryFullAddressOnList")?o.a.createElement("span",null,t.address):o.a.createElement("span",{className:"d-flex align-items-center"},o.a.createElement("i",{className:"si si-pointer mr-2"}),o.a.createElement("span",{style:{maxWidth:"100%",display:"block"},className:"truncate-text"},t.address)))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))})))))}}]),t}(s.Component),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).__refreshOrders=function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.add("fa-spin"),setTimeout(function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.remove("fa-spin")},2e3),a.props.refreshOrders()},a.getDeliveryGuyTotalEarning=function(e){var t=0;return e.commission&&(t+=parseFloat(e.commission)),e.tip_amount&&(t+=parseFloat(e.tip_amount)),t},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.remove("bg-grey"),document.getElementsByTagName("body")[0].classList.add("delivery-dark-bg")}},{key:"render",value:function(){var e=this,t=this.props.accepted_orders;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mb-100"},o.a.createElement("div",{className:"d-flex justify-content-between nav-dark"},o.a.createElement("div",{className:"delivery-tab-title px-20 py-15"},localStorage.getItem("deliveryAcceptedOrdersTitle")),o.a.createElement("div",{className:"delivery-order-refresh"},o.a.createElement("button",{className:"btn btn-refreshOrders mr-15",onClick:this.__refreshOrders,style:{position:"relative"}},localStorage.getItem("deliveryOrdersRefreshBtn")," ",o.a.createElement("i",{ref:"btnSpinner",className:"fa fa-refresh"}),o.a.createElement(b.a,{duration:1200})))),0===t.length?o.a.createElement("p",{className:"text-center text-muted py-15 mb-10 bg-white"},localStorage.getItem("deliveryNoOrdersAccepted")):o.a.createElement("div",{className:"p-15"},o.a.createElement("div",{className:"delivery-list-wrapper pb-20"},t.map(function(t){return o.a.createElement(x.a,{to:"/delivery/orders/".concat(t.unique_order_id),key:t.id,style:{position:"relative"}},o.a.createElement("div",{className:"delivery-list-item px-15 pb-5 pt-15"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement("p",{className:"m-0"},"true"===localStorage.getItem("showFromNowDate")?o.a.createElement(N.a,{fromNow:!0},t.updated_at):o.a.createElement(N.a,{format:"DD/MM/YYYY hh:mma"},t.updated_at))),o.a.createElement("div",null,"true"===localStorage.getItem("enableDeliveryGuyEarning")&&o.a.createElement("p",{className:"m-0 list-delivery-commission"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement(S.a,{to:e.getDeliveryGuyTotalEarning(t),speed:1e3,digits:2}),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")))),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"font-w700 list-delivery-store-name"},t.restaurant.name),o.a.createElement("div",null,o.a.createElement("p",{className:"m-0 font-w700"},"#",t.unique_order_id.substr(t.unique_order_id.length-8)))),o.a.createElement("p",null,"true"===localStorage.getItem("showDeliveryFullAddressOnList")?o.a.createElement("span",null,t.address):o.a.createElement("span",{className:"d-flex align-items-center"},o.a.createElement("i",{className:"si si-pointer mr-2"}),o.a.createElement("span",{style:{maxWidth:"100%",display:"block"},className:"truncate-text"},t.address)))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))})))))}}]),t}(s.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.order;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"delivery-account-orders-block p-15 mb-20"},o.a.createElement("div",{className:"d-flex justify-content-between mb-2"},o.a.createElement("div",{className:"font-w700"},o.a.createElement("h4",{className:"text-white mb-0"},"#",e.order.unique_order_id.substr(e.order.unique_order_id.length-6))),o.a.createElement("div",null,"true"===localStorage.getItem("showFromNowDate")?o.a.createElement(N.a,{fromNow:!0},e.updated_at):o.a.createElement(N.a,{format:"DD/MM/YYYY hh:mma"},e.updated_at))),o.a.createElement("div",{className:"d-flex justify-content-between mb-2"},o.a.createElement("div",{className:"mr-4"},e.is_complete?o.a.createElement("span",{className:"btn btn-sm btn-delivery-success min-width-125"},localStorage.getItem("deliveryCompletedText")):o.a.createElement("span",{className:"btn btn-sm btn-delivery-ongoing min-width-125"},localStorage.getItem("deliveryOnGoingText"))),o.a.createElement("div",null,"COD"===e.order.payment_mode?o.a.createElement("span",{className:"btn btn-sm btn-delivery-success min-width-175"},localStorage.getItem("deliveryCashOnDelivery"),":"," ","left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),e.order.payable,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")):o.a.createElement("span",{className:"btn btn-sm btn-delivery-success min-width-175"},o.a.createElement("i",{className:"si si-check mr-2"})," ",localStorage.getItem("deliveryOnlinePayment")))),o.a.createElement("div",null,o.a.createElement("i",{className:"si si-pointer mr-1"})," ",e.order.address)))}}]),t}(s.Component),D=a(291),T=a.n(D),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={series:[{name:"Earnings",data:[0,0,0,0,0,0,0]}],options:{chart:{height:350,type:"line",zoom:{enabled:!1},dropShadow:{enabled:!0,top:0,left:0,blur:3,opacity:.8},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",colors:["#18c775"]},title:{text:localStorage.getItem("deliveryLastSevenDaysEarningTitle"),align:"left",style:{color:"#fafafa"}},grid:{row:{colors:["#222b45","transparent"],opacity:1}},xaxis:{labels:{style:{colors:["#fafafa","#fafafa","#fafafa","#fafafa","#fafafa","#fafafa","#fafafa"]}}},yaxis:{labels:{style:{colors:["#fafafa","#fafafa","#fafafa","#fafafa","#fafafa","#fafafa","#fafafa"]}}},test:{name:"saurabh",age:"27"}}},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=[{name:"Earnings",data:e.data.chartData}];this.setState({series:t})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{options:this.state.options,series:this.state.series,type:"line",height:350}))}}]),t}(s.Component),F=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.transaction;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"delivery-account-orders-block p-15 mb-20"},o.a.createElement("div",{className:"d-flex justify-content-between mb-2"},o.a.createElement("div",null,o.a.createElement("h4",{className:"text-white mb-0"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),e.amount/100,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))),o.a.createElement("div",null,"true"===localStorage.getItem("showFromNowDate")?o.a.createElement(N.a,{fromNow:!0},e.created_at):o.a.createElement(N.a,{format:"DD/MM/YYYY hh:mma"},e.created_at))),o.a.createElement("div",{className:"mb-2 float-right"},"deposit"===e.type&&o.a.createElement("span",{className:"btn btn-sm delivery-wallet-deposit min-width-125"},localStorage.getItem("walletDepositText")),"withdraw"===e.type&&o.a.createElement("span",{className:"btn btn-sm delivery-wallet-withdraw min-width-125"},localStorage.getItem("walletWithdrawText"))),o.a.createElement("div",null,e.meta.description)))}}]),t}(s.Component),C=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={show_orderhistory:!0,show_earnings:!1},a.filterOnGoingOrders=function(){a.props.updateDeliveryOrderHistory(a.props.delivery_user.data.orders.filter(function(e){return 0===e.is_complete})),a.setState({show_orderhistory:!0,show_earnings:!1})},a.filterCompletedOrders=function(){a.props.updateDeliveryOrderHistory(a.props.delivery_user.data.orders.filter(function(e){return 1===e.is_complete})),a.setState({show_orderhistory:!0,show_earnings:!1})},a.showEarningsTable=function(){a.setState({show_orderhistory:!1,show_earnings:!0})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.delivery_user;this.props.updateDeliveryUserInfo(e.data.id,e.data.auth_token),document.getElementsByTagName("body")[0].classList.remove("bg-grey")}},{key:"render",value:function(){var e=this,t=this.props,a=t.delivery_user,r=t.logoutDeliveryUser,n=t.order_history;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"d-flex justify-content-between nav-dark"},o.a.createElement("div",{className:"delivery-tab-title px-20 py-15"},localStorage.getItem("deliveryWelcomeMessage")," ",a.data.name),o.a.createElement("div",{className:"delivery-order-refresh"},o.a.createElement("button",{className:"btn btn-delivery-logout mr-15",onClick:function(){return r(a)}},localStorage.getItem("deliveryLogoutDelivery")," ",o.a.createElement("i",{className:"si si-logout"})))),o.a.createElement("div",{className:"mb-100 pt-20"},o.a.createElement("div",{className:"pr-5"},o.a.createElement(j,{data:a.chart})),o.a.createElement("div",{className:"row gutters-tiny px-15 mt-20"},"true"===localStorage.getItem("enableDeliveryGuyEarning")&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-6",onClick:function(){return e.showEarningsTable()}},o.a.createElement("div",{className:"block shadow-light delivery-block-transparent",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"font-size-h3 font-w600"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement(S.a,{to:a.data.wallet_balance,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},digits:2}),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryEarningsText")))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))),o.a.createElement("div",{className:"col-6",onClick:function(){return e.showEarningsTable()}},o.a.createElement("div",{className:"block shadow-light delivery-block-transparent",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"font-size-h3 font-w600"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement(S.a,{to:a.data.totalEarnings,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},digits:2}),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryTotalEarningsText")))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"})))),o.a.createElement("div",{className:"col-6 col-xl-3",onClick:function(){return e.filterOnGoingOrders()}},o.a.createElement("div",{className:"block shadow-medium delivery-block-ongoing",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"float-right mt-10"},o.a.createElement("i",{className:"si si-control-forward fa-3x"})),o.a.createElement(S.a,{to:a.data.onGoingCount,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryOnGoingText"))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))),o.a.createElement("div",{className:"col-6 col-xl-3",onClick:function(){return e.filterCompletedOrders()}},o.a.createElement("div",{className:"block shadow-medium delivery-block-completed",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"float-right mt-10"},o.a.createElement("i",{className:"si si-check fa-3x"})),o.a.createElement(S.a,{to:a.data.completedCount,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryCompletedText"))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))),"true"===localStorage.getItem("showDeliveryCollection")&&o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"block shadow-light delivery-block-transparent",style:{position:"relative"}},o.a.createElement("div",{className:"block-content block-content-full clearfix text-white"},o.a.createElement("div",{className:"font-size-h3 font-w600"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement(S.a,{to:a.data.deliveryCollection,speed:1e3,className:"font-size-h3 font-w600",easing:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},digits:2}),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement("div",{className:"font-size-sm font-w600 text-uppercase"},localStorage.getItem("deliveryCollectionText")))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"})))),this.state.show_orderhistory&&o.a.createElement("div",{className:"orders-history px-15 mt-20"},n&&n.length>0?n.map(function(e){return o.a.createElement(k,{order:e,key:e.id})}):null),this.state.show_earnings&&o.a.createElement("div",{className:"delivery-earnings px-15 mt-20"},a.data.earnings&&a.data.earnings.map(function(e){return o.a.createElement(F,{key:e.id,transaction:e})}))))}}]),t}(s.Component),A=Object(y.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,order_history:e.delivery_user.order_history}},{updateDeliveryUserInfo:v.d,updateDeliveryOrderHistory:v.c})(C),L=a(227),Y=(a(293),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).__refreshOrders=function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.add("fa-spin"),setTimeout(function(){a.refs.btnSpinner&&a.refs.btnSpinner.classList.remove("fa-spin")},2e3),a.props.refreshOrders()},a.getDeliveryGuyTotalEarning=function(e){var t=0;return e.commission&&(t+=parseFloat(e.commission)),e.tip_amount&&(t+=parseFloat(e.tip_amount)),t},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.remove("bg-grey"),document.getElementsByTagName("body")[0].classList.add("delivery-dark-bg")}},{key:"render",value:function(){var e=this,t=this.props.pickedup_orders;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"mb-100"},o.a.createElement("div",{className:"d-flex justify-content-between nav-dark"},o.a.createElement("div",{className:"delivery-tab-title px-20 py-15"},localStorage.getItem("deliveryPickedupOrdersTitle")),o.a.createElement("div",{className:"delivery-order-refresh"},o.a.createElement("button",{className:"btn btn-refreshOrders mr-15",onClick:this.__refreshOrders,style:{position:"relative"}},localStorage.getItem("deliveryOrdersRefreshBtn")," ",o.a.createElement("i",{ref:"btnSpinner",className:"fa fa-refresh"}),o.a.createElement(b.a,{duration:1200})))),0===t.length?o.a.createElement("p",{className:"text-center text-muted py-15 mb-10 bg-white"},localStorage.getItem("deliveryNoPickedupOrdersMsg")):o.a.createElement("div",{className:"p-15"},o.a.createElement("div",{className:"delivery-list-wrapper pb-20"},t.map(function(t){return o.a.createElement(x.a,{to:"/delivery/orders/".concat(t.unique_order_id),key:t.id,style:{position:"relative"}},o.a.createElement("div",{className:"delivery-list-item px-15 pb-5 pt-15"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement("p",{className:"m-0"},"true"===localStorage.getItem("showFromNowDate")?o.a.createElement(N.a,{fromNow:!0},t.updated_at):o.a.createElement(N.a,{format:"DD/MM/YYYY hh:mma"},t.updated_at))),o.a.createElement("div",null,"true"===localStorage.getItem("enableDeliveryGuyEarning")&&o.a.createElement("p",{className:"m-0 list-delivery-commission"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),o.a.createElement(S.a,{to:e.getDeliveryGuyTotalEarning(t),speed:1e3,digits:2}),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")))),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",{className:"font-w700 list-delivery-store-name"},t.restaurant.name),o.a.createElement("div",null,o.a.createElement("p",{className:"m-0 font-w700"},"#",t.unique_order_id.substr(t.unique_order_id.length-8)))),o.a.createElement("p",null,"true"===localStorage.getItem("showDeliveryFullAddressOnList")?o.a.createElement("span",null,t.address):o.a.createElement("span",{className:"d-flex align-items-center"},o.a.createElement("i",{className:"si si-pointer mr-2"}),o.a.createElement("span",{style:{maxWidth:"100%",display:"block"},className:"truncate-text"},t.address)))),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))})))))}}]),t}(s.Component)),M=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={play:!1,tabIndex:0},a.audio=new Audio("/assets/audio/notification1.mp3"),a.__refreshOrders=function(){a.props.delivery_user.success&&a.props.getDeliveryOrders(a.props.delivery_user.data.auth_token)},a.getLocationName=function(e){try{return console.log("Came to try"),o.a.createElement("span",{style:{maxWidth:"100px",display:"block"},className:"truncate-text"},JSON.parse(e).address)}catch(t){return null}},a.onTabSelect=function(e){localStorage.setItem("deliveryTabIndex",e),a.setState({tabIndex:e})},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.delivery_user.success&&this.props.getDeliveryOrders(this.props.delivery_user.data.auth_token),this.refreshSetInterval=setInterval(function(){e.__refreshOrders()},15e3)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.delivery_orders;t.new_orders&&e.delivery_orders.new_orders.length>t.new_orders.length&&(this.audio.play(),"vibrate"in navigator&&navigator.vibrate(["100","150","100","100","150","100"]))}},{key:"componentWillUnmount",value:function(){clearInterval(this.refreshSetInterval)}},{key:"render",value:function(){var e=this;return window.innerWidth>768?o.a.createElement(u.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{seotitle:"Delivery Orders",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),o.a.createElement(L.d,{selectedIndex:null===localStorage.getItem("deliveryTabIndex")?this.state.tabIndex:parseInt(localStorage.getItem("deliveryTabIndex")),onSelect:function(t){return e.onTabSelect(t)}},o.a.createElement("div",{className:"content font-size-xs clearfix footer-fixed",style:{display:"block",width:"100%",padding:"0",height:"4.6rem"}},o.a.createElement(L.b,null,o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-bell fa-2x"})," ",o.a.createElement("br",null),localStorage.getItem("deliveryFooterNewTitle"),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-grid fa-2x"})," ",o.a.createElement("br",null),localStorage.getItem("deliveryFooterAcceptedTitle"),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-bag fa-2x"})," ",o.a.createElement("br",null),localStorage.getItem("deliveryFooterPickedup"),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))),o.a.createElement(L.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"si si-user fa-2x"})," ",o.a.createElement("br",null)," ",localStorage.getItem("deliveryFooterAccount"),o.a.createElement(b.a,{duration:"500",hasTouch:"true"}))))),o.a.createElement(L.c,null,this.props.delivery_orders.new_orders?o.a.createElement(O,{refreshOrders:this.__refreshOrders,getLocationName:this.getLocationName,new_orders:this.props.delivery_orders.new_orders}):o.a.createElement("div",{className:"pt-50"},o.a.createElement(m.a,{height:window.innerHeight,width:window.innerWidth,speed:1.2,primaryColor:"#161b31",secondaryColor:"#222b45"},o.a.createElement("rect",{x:"15",y:"30",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"30",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"70",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"173",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"173",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"213",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"316",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"316",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"356",rx:"0",ry:"0",width:"250",height:"23"})))),o.a.createElement(L.c,null,this.props.delivery_orders.accepted_orders?o.a.createElement(I,{refreshOrders:this.__refreshOrders,getLocationName:this.getLocationName,accepted_orders:this.props.delivery_orders.accepted_orders}):o.a.createElement("div",{className:"pt-50"},o.a.createElement(m.a,{height:window.innerHeight,width:window.innerWidth,speed:1.2,primaryColor:"#161b31",secondaryColor:"#222b45"},o.a.createElement("rect",{x:"15",y:"30",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"30",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"70",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"173",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"173",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"213",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"316",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"316",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"356",rx:"0",ry:"0",width:"250",height:"23"})))),o.a.createElement(L.c,null,this.props.delivery_orders.pickedup_orders?o.a.createElement(Y,{refreshOrders:this.__refreshOrders,getLocationName:this.getLocationName,pickedup_orders:this.props.delivery_orders.pickedup_orders}):o.a.createElement("div",{className:"pt-50"},o.a.createElement(m.a,{height:window.innerHeight,width:window.innerWidth,speed:1.2,primaryColor:"#161b31",secondaryColor:"#222b45"},o.a.createElement("rect",{x:"15",y:"30",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"30",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"70",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"173",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"173",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"213",rx:"0",ry:"0",width:"250",height:"23"}),o.a.createElement("rect",{x:"15",y:"316",rx:"0",ry:"0",width:"150",height:"30"}),o.a.createElement("rect",{x:"283",y:"316",rx:"0",ry:"0",width:"75",height:"30"}),o.a.createElement("rect",{x:"15",y:"356",rx:"0",ry:"0",width:"250",height:"23"})))),o.a.createElement(L.c,null,o.a.createElement(A,{delivery_user:this.props.delivery_user,logoutDeliveryUser:this.props.logoutDeliveryUser}))))}}]),t}(s.Component);t.default=Object(y.b)(function(e){return{delivery_user:e.delivery_user.delivery_user,delivery_orders:e.delivery_orders.delivery_orders}},{getDeliveryOrders:function(e){return function(t){f.a.post(h.q,{token:e}).then(function(e){var a=e.data;return t({type:g.a,payload:a})}).catch(function(e){console.log(e)})}},logoutDeliveryUser:v.b})(M)},233:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return o}),a.d(t,"c",function(){return m});var r=a(52),n=a(10),l=a(5),i=a.n(l),c=function(e,t){return function(a){i.a.post(n.O,{email:e,password:t}).then(function(e){var t=e.data;return a({type:r.a,payload:t})}).catch(function(e){console.log(e)})}},s=function(e){return function(t){e=[],t({type:r.b,payload:e})}},o=function(e,t){return function(a){i.a.post(n.ib,{token:t,user_id:e}).then(function(e){var t={delivery_user:e.data,order_history:e.data.data.orders};return a({type:r.d,payload:t})}).catch(function(e){console.log(e)})}},m=function(e){return function(t){t({type:r.c,payload:e})}}}}]);