var h,M,C,b={sm:568,md:768,lg:992,xl:1200,xxl:1800},l=function(){h=document.documentElement;var P=function(){var e=document.getElementById("header"),t="header--fixed";if(!e)return!1;var a=function(){window.pageYOffset>e.offsetHeight?l.addClass(h,t):l.removeClass(h,t)};a(),document.addEventListener("scroll",a)},N=function(){var e=document.querySelector(".navbar-toggler"),t=document.querySelector(".bg-navbar"),a=document.querySelector(".navbar-collapse"),r="menu--open";e&&e.addEventListener("click",function(){$(h).toggleClass(r),l.hasClass(h,r)?l.calcVH(a):a.removeAttribute("style")}),t&&t.addEventListener("click",function(){$(h).removeClass(r)}),window.addEventListener("resize",function(n){})},B=function(){var e=document.querySelector(".search-toggler"),t=document.querySelector(".bg-search"),a="overflow-hidden";e&&e.addEventListener("click",function(){l.hasClass(h,a)?l.removeClass(h,a):l.addClass(h,a)}),t&&t.addEventListener("click",function(){$(h).removeClass("overflow-hidden"),$("#searchMain").collapse("hide")});var r=document.querySelector(".js-input-search");r&&(r.addEventListener("focus",function(){l.addClass(h,"search--focus")},!0),r.addEventListener("blur",function(){l.removeClass(h,"search--focus")},!0),r.addEventListener("keyup",function(){$.ajax({type:"POST",url:BASE_URL+"search",data:"inputSearchVal="+r.value,success:function(n){}})}))},_=function(){var e=document.querySelector(".main-slider");if(!e)return!1;var t=e.querySelector(".main-slider__main"),a=e.querySelector(".main-slider__logo"),r=".swiper-button-prev",n=".swiper-button-next",i=function(){var d=a.querySelectorAll(".swiper-slide");d.forEach(function(f){f.style.width=parseInt(a.offsetWidth)/3+"px"})},o=new Swiper(a,{loop:!0,autoplay:{delay:7e3},autoplay:!1,slidesPerView:3,spaceBetween:0,slideToClickedSlide:!0,centeredSlides:!0,loopedSlides:3}),s=new Swiper(t,{loop:!0,effect:"fade",lazy:!0,lazy:{loadPrevNext:!1,loadOnTransitionStart:!0},autoplay:{delay:7e3},autoplay:!1,slidesPerView:1,centeredSlides:!0,keyboard:!0,navigation:{nextEl:e.querySelector(n),prevEl:e.querySelector(r)},loopedSlides:3});s.controller.control=o,o.controller.control=s,setTimeout(function(){T()},500);var c=t.querySelectorAll(".swiper-slide");if(window.addEventListener("resize",function(){for(var d=0;d<c.length;d++)l.calcVH(c[d]);i()},!0),window.innerWidth>=b.lg){for(var u=0;u<c.length;u++)l.calcVH(c[u]);l.calcVH(e)}else{l.calcVH(e);for(var u=0;u<c.length;u++)l.calcVH(c[u],".main-slider__logos")}i()},V=function(){var e=document.querySelector(".mouse-scroll"),t=function(a){a.preventDefault();var r=document.getElementById(e.dataset.target),n=r.getBoundingClientRect();$("html, body").animate({scrollTop:n.top-80},1e3)};e&&e.addEventListener("click",t)},H=function(){var e=document.querySelector(".home-project");if(!e)return!1;e.querySelector(".slider-desktop");var t=e.querySelector(".slider-mobile");if($(document).on("click",".swiper-slide",function(){$(this).closest(e)&&$(this).index()}),window.innerWidth>=b.lg){var a=!1,r=function(o){var s=".js-slide",c='[data-slide="item"]',u='[data-slide="image"]',d="clicked",f=function(p){if((l.hasClass(h,"tablet")||l.hasClass(h,"mobile"))&&p.type==="mouseover")return!1;var m=this,y=!!l.hasClass(h,"tablet"),g=l.findClosest(m,s),w=g.querySelectorAll(c);if(v(g,m.dataset.id),y&&w.forEach(function(S){S==m?l.hasClass(S,d)?(l.removeClass(S,d),a=!1):(l.addClass(S,d),a=!0):l.removeClass(S,d)}),a)return!1},v=function(p,m){var y=p.querySelectorAll(u);y.forEach(function(g){g.dataset.id===m?g.setAttribute("active","true"):g.removeAttribute("active")})};$(document).on("click",c,f),l.hasClass("desktop")&&$(document).on("mouseover",c,f)};r()}else{let o=function(s){var c=s.realIndex+2;c>=s.slides.length&&(c=1);var u=s.slides[c];$(s.slides).removeClass("next-slide"),$(u).addClass("next-slide")};var i=o,n=new Swiper(t,{loop:!0,autoplay:!1,keyboard:!0,effect:"fade",slidesPerView:1,spaceBetween:0,observer:!0,observeParents:!0,speed:500,slidesPerGroup:1,slideToClickedSlide:!0,navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},on:{init:function(){o(this)}}});n.on("slideChange",function(){o(this)})}},z=function(){var e=document.querySelector(".block-concept");if(!e)return!1;var t=e.querySelector(".swiper-button-prev"),a=e.querySelector(".swiper-button-next"),r=e.querySelector(".swiper-container"),n="fade",i=500;window.innerWidth<b.md?(n="fade",i=0):(n="slide",i=500);var o=new Swiper(r,{effect:n,loop:!0,speed:i,autoplay:!1,keyboard:!0,simulateTouch:!0,navigation:{nextEl:a,prevEl:t},on:{init:function(){s(this)}}});function s(u){if(l.hasClass(e,"project-concept")){var d=u.realIndex+1,f=u.slides[d];l.hasClass(f,"project-concept__slide-first")?l.removeClass(e,"concept-theme"):l.hasClass(f,"is-bg")?l.addClass(e,"concept-theme"):l.removeClass(e,"concept-theme")}}o.on("transitionStart",function(){this.previousIndex<this.activeIndex?c("direction-next","direction-prev"):c("direction-prev","direction-next")}),o.on("slideChange",function(){s(o)});function c(u,d){l.removeClass(r,d),l.addClass(r,u),setTimeout(function(){l.removeClass(r,u)},500)}t.addEventListener("click",function(){c("direction-prev","direction-next")}),a.addEventListener("click",function(){c("direction-next","direction-prev")}),window.innerWidth<b.md&&c("direction-next","direction-prev")},D=function(){var e=document.querySelector(".block-milestone");if(!e)return!1;var t=e.querySelector(".block-milestone__main"),a=e.querySelector(".block-milestone__media"),r=".swiper-button-prev",n=".swiper-button-next",i=".swiper-container",u,o,s=!1,c="slide";window.innerWidth<b.md,c="slide",s=!0;var u=new Swiper(a.querySelector(i),{loop:s,effect:c,slidesPerView:"auto",spaceBetween:0,slidesPerGroup:1,speed:330,autoplay:{delay:5e3,disableOnInteraction:!1},loopedSlides:3,navigation:{nextEl:a.querySelector(n),prevEl:a.querySelector(r)},slideToClickedSlide:!0});window.innerWidth>768&&(o=new Swiper(t.querySelector(i),{loop:s,autoplay:{delay:5e3,disableOnInteraction:!1},keyboard:!0,SlidesPerView:1,navigation:{nextEl:t.querySelector(n),prevEl:t.querySelector(r)},speed:330,loopedSlides:3,breakpoints:{768:{slidesPerView:1,spaceBetween:0},1200:{slidesPerView:1,spaceBetween:0}}}),o.controller.control=u,u.controller.control=o)},j=function(){var e=document.querySelector(".block-addworth");if(!e)return!1;new Swiper(e.querySelector(".swiper-container"),{loop:!0,effect:"fade",autoplay:{delay:6e3},slidesPerView:1,keyboard:!0})},R=function(){var e=document.querySelector(".block-gallery");if(e){var t=e.querySelector(".swiper-container"),a=new Swiper(t,{loop:!1,autoplay:{delay:5e3,disableOnInteraction:!1},keyboard:!0,slidesPerView:"auto",spaceBetween:2,slidesPerGroup:1,slideToClickedSlide:!0,centeredSlides:!1,loopedSlides:3,pagination:{el:e.querySelector(".swiper-pagination"),type:"fraction"},navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},speed:500});E(e,a),$(t).hover(function(){a.autoplay.stop()},function(){a.autoplay.start()})}},G=function(){var e=document.querySelectorAll(".select-custom-wrapper");if(e){for(var t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.querySelector(".select-custom").classList.toggle("open")});for(const a of document.querySelectorAll(".select-custom-option"))a.addEventListener("click",function(){if(!this.classList.contains("selected")){this.parentNode.querySelector(".select-custom-option.selected").classList.remove("selected"),this.classList.add("selected"),this.closest(".select-custom").querySelector(".select-custom__trigger span").textContent=this.textContent,this.closest(".select-custom").querySelector(".select-custom__trigger input").value=this.dataset.value,this.closest(".select-custom").querySelector(".select-custom__trigger input").setAttribute("data-value",this.dataset.value);var r=document.createEvent("HTMLEvents");r.initEvent("change",!1,!0),this.closest(".select-custom").querySelector(".select-custom__trigger input").dispatchEvent(r)}});window.addEventListener("click",function(a){const r=document.querySelector(".select-custom");if(!r)return!1;r.contains(a.target)||r.classList.remove("open")})}},E=function(e,t){var a='[data-filter="item"]',r='[data-filter="toggle"]',n='[data-filter="toggle"]',i="active",o="d-none";if(!e)return!1;var s=e.querySelectorAll(r);e.querySelectorAll(a);function c(){var d=[],f=e.querySelectorAll(a);if(this.dataset.filterType==="link")for(var v=document.querySelectorAll(n),p=0;p<v.length;p++)this===v[p]?l.addClass(v[p],i):l.removeClass(v[p],i);for(var m=0;m<s.length;m++)(s[m].dataset.filterType==="link"&&l.hasClass(s[m],i)||s[m].dataset.filterType==="input")&&d.push(s[m].dataset.value);for(var p=0;p<f.length;p++){var y=d.filter(function(k){return k==="*"}).length;if(y===d.length)l.removeClass(f[p],o);else{for(var g=0;g<d.length;)d[g]==="*"?d.splice(g,1):++g;var w=d.join(",");w=w.replace(/,/g,"."),w="."+w,$(f[p]).is(w)?l.removeClass(f[p],o):l.addClass(f[p],o)}}t&&(t.update(),t.slideTo(0)),AOS.init()}for(var u=0;u<s.length;u++)s[u].dataset.filterType==="input"?$(s[u]).change(c):s[u].dataset.filterType==="link"&&$(s[u]).click(c)},F=function(){$(".js-counter").counterUp({delay:10,time:1800})},O=function(){var e=document.querySelector(".filter-tab");if(!e)return!1;var t=new Swiper(e.querySelector(".swiper-container"),{loop:!1,autoplay:!1,keyboard:!0,slidesPerView:"auto",spaceBetween:0,centeredSlides:!(window.innerWidth>=b.lg),slidesPerGroup:1,slideToClickedSlide:!0,breakpoints:{992:{slidesPerView:3,slidesPerGroup:3}},on:{init:function(){this.slideTo(1),a(this.slides[1])}}});function a(r){var n=r.querySelector("A");n.click()}t.on("slideChange",function(){a(this.slides[this.activeIndex])})},W=function(){var e=document.querySelectorAll(".js-magazine");if(e.length===0)return!1;for(var t=function(){var r=this,n=".modal-magazine",i=document.getElementById("magazine"),o=r.dataset.magazine,s=parseInt(window.innerHeight)*.9,c={height:s,duration:800};i.innerHTML="";var u=document.createElement("DIV");u.className="magazine-area",i.appendChild(u),$(u).flipBook(o,c),l.fancy.open(n,"inline")},a=0;a<e.length;a++)$(e[a]).click(t)},U=function(){if(window.innerWidth<b.lg){var e=document.querySelector(".project-hero");if(e){var t=e.querySelector(".project-hero__body");window.addEventListener("resize",function(){l.calcVH(e),l.calcVH(t,".project-detail__buttons")},!0),l.calcVH(e),l.calcVH(t,".project-detail__buttons")}}},K=function(e){if(e.length===0||!e)return!1;function t(){var o=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}],s={center:new google.maps.LatLng(25.0872747,55.0780077),zoom:13,styles:o,mapTypeId:google.maps.MapTypeId.ROADMAP,icon:"theme/assets/img/map_marker.png"},c=new google.maps.Map(document.getElementById("map"),s);a(c,e)}function a(o,s){var c,u,d,f;for(u=0;u<s.length;u++){var v=s[u][0],p=s[u][1],m=s[u][2],y=s[u][3],g=u==0?"theme/assets/img/map_marker_default.png":"theme/assets/img/map_marker.png",w=new google.maps.LatLng(p,m),S={url:g,scaledSize:new google.maps.Size(40,45)},c=new google.maps.Marker({map:o,title:v,position:w,icon:S});o.setCenter(c.getPosition()),i(c),v=u==0?'<a href="https://www.google.com/maps/dir/?api=1&destination='+p+","+m+'" target="_blank">'+v+"</a>":v;var k='<div class="map-info map-info_'+u+' t--color"><label class="map-info__label">'+v+'</label><span class="map-info__text">'+y+"</span></div>",q=new google.maps.InfoWindow;google.maps.event.addListener(c,"click",function(x,le,L){return function(){f&&(f.close(),r(d)),L.setContent(le),L.open(o,x),i(x),n(x,80,90),d=this,f=L}}(c,k,q)),google.maps.event.addListener(q,"closeclick",function(){r(d)}),u==0&&(q.setContent(k),q.open(o,c),i(c),n(c,80,90),d=c,f=q)}}function r(o){o.setAnimation(null),n(o,40,45)}function n(o,s,c){o.setIcon(new google.maps.MarkerImage(o.getIcon().url,new google.maps.Size(s,c),o.icon.origin,null,new google.maps.Size(s,c)))}function i(o){o.getAnimation()!==null?o.setAnimation(null):o.setAnimation(google.maps.Animation.BOUNCE)}t()},J=function(){var e=document.querySelector(".block-opportunity");if(!e)return!1;var t=e.querySelector(".slider-opportunity"),a=e.querySelector(".opportunity-body"),r=".swiper-button-next",n=".swiper-button-prev";new Swiper(t,{loop:!0,slidesPerView:"auto",spaceBetween:0,slidesPerGroup:1,speed:500,autoplay:!1,loopedSlides:3,navigation:{nextEl:e.querySelector(r),prevEl:e.querySelector(n)},slideToClickedSlide:!0});function i(){if(window.innerWidth>=b.lg){l.removeClass(a,"d-none");var o=t.nextElementSibling;if(o){var s=e.querySelector(".opportunity");s&&s.firstChild&&s.parentNode.insertBefore(o,s.nextSibling)}}else a&&(a.cloneNode(!0),t.parentNode.insertBefore(a,t.nextElementSibling))}i(),window.addEventListener("resize",function(o){i()})},Y=function(){var e=document.querySelector(".block-plan-stance");if(!e)return!1;var t=e.querySelectorAll(".stance-number"),a=new Swiper(e.querySelector(".swiper-container"),{effect:"fade",loop:!0,speed:0,autoplay:!1,keyboard:!0,navigation:{nextEl:e.querySelector(".swiper-button-next"),prevEl:e.querySelector(".swiper-button-prev")},on:{init:function(){var i=this.realIndex;r(t,i)}}});function r(i,o){for(var s=0;s<i.length;s++)s===o?l.addClass(i[s],"active"):l.removeClass(i[s],"active")}a.on("slideChange",function(){var i=this.realIndex;r(t,i)});for(var n=0;n<t.length;n++)t[n].addEventListener("click",function(){var i=l.getIndex(this);r(t,i);var o=a.el.querySelector('[data-swiper-slide-index="'+i+'"]');a.slideTo(l.getIndex(o))})},Z=function(){var e=document.querySelector(".block-room");if(!e)return!1;var t=e.querySelector(".block-room__main"),a=e.querySelector(".block-room__media"),r=new Swiper(t,{effect:"fade",loop:!0,speed:500,autoplay:!1,keyboard:!0}),n=new Swiper(a,{effect:"fade",loop:!0,speed:500,autoplay:!1,keyboard:!0,navigation:{nextEl:a.querySelector(".swiper-button-next"),prevEl:a.querySelector(".swiper-button-prev")}});r.controller.control=n,n.controller.control=r},Q=function(){var e=document.querySelector(".block-projects");if(!e)return!1;E(e)},X=function(){var e=document.querySelector(".block-review");if(!e)return!1;var t=e.querySelector(".block-review__main"),a=e.querySelector(".block-review__media"),r=".swiper-button-prev",n=".swiper-button-next",i=".swiper-container",u,o,s=!1,c="slide";window.innerWidth<b.md,c="slide",s=!0;var u=new Swiper(a.querySelector(i),{loop:s,effect:c,slidesPerView:"auto",spaceBetween:0,slidesPerGroup:1,speed:500,autoplay:!1,loopedSlides:3,navigation:{nextEl:a.querySelector(n),prevEl:a.querySelector(r)},slideToClickedSlide:!0});window.innerWidth>768&&(o=new Swiper(t.querySelector(i),{loop:s,autoplay:{delay:5e3,disableOnInteraction:!1},keyboard:!0,SlidesPerView:1,navigation:{nextEl:t.querySelector(n),prevEl:t.querySelector(r)},speed:500,loopedSlides:3,breakpoints:{768:{slidesPerView:1,spaceBetween:0},1200:{slidesPerView:1,spaceBetween:0}}}),o.controller.control=u,u.controller.control=o)},ee=function(){var e=".js-autocomplete",t=".autocomplete-dropdown",a=".autocomplete-list",r="autocomplete-item",n=".autocomplete-query",i=".autocomplete-count",o='[data-autocomplete="input"]',s="autocomplete-active",c=function(){var f=this,v=f.value,p=l.findClosest(f,e),m=p.querySelector(t),y=p.querySelector(a);y.innerHTML="",v.length<3?(y.innerHTML="",l.removeClass(m,s)):(m.classList.remove(s),u(m,y,v))},u=function(f,v,p){$.ajax({type:"POST",url:BASE_URL+"search",data:"inputSearchVal="+p,success:function(m){var y=JSON.parse(m);d(f,v,y),l.addClass(f,s)}})},d=function(f,v,p){var m=f.querySelector(n),y=f.querySelector(i),g=p.result;m.innerHTML=p.query,y.innerHTML=p.count;for(var w=0;w<g.length;w++){var S=document.createElement("LI");document.createElement("H5"),document.createElement("A"),document.createElement("P"),S.className=r;var k='<h5 class="autocomplete-item__title"><a href="'+g[w].url+'">'+g[w].title+'</a></h5><p class="autocomplete-item__text">'+g[w].text+"</p>";S.innerHTML=k,v.appendChild(S)}};if(document.querySelectorAll(e).length===0)return!1;$(document).on("keyup",o,c)},te={init:function(){var e=this;const t=[["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)","af","93"],["Albania (Shqip\xEBri)","al","355"],["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (\xD6sterreich)","at","43"],["Azerbaijan (Az\u0259rbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)","bh","973"],["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)","bd","880"],["Barbados","bb","1246"],["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)","by","375"],["Belgium (Belgi\xEB)","be","32"],["Belize","bz","501"],["Benin (B\xE9nin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (R\xE9publique centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (\u4E2D\u56FD)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xF4te d\u2019Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Cura\xE7ao","cw","599",0],["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)","cy","357"],["Czech Republic (\u010Cesk\xE1 republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (Rep\xFAblica Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (F\xF8royar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane fran\xE7aise)","gf","594"],["French Polynesia (Polyn\xE9sie fran\xE7aise)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guin\xE9e)","gn","224"],["Guinea-Bissau (Guin\xE9 Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (\u9999\u6E2F)","hk","852"],["Hungary (Magyarorsz\xE1g)","hu","36"],["Iceland (\xCDsland)","is","354"],["India (\u092D\u093E\u0930\u0924)","in","91"],["Indonesia","id","62"],["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)","ir","98"],["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (\u65E5\u672C)","jp","81"],["Jersey","je","44",3],["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)","jo","962"],["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)","kw","965"],["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)","kg","996"],["Laos (\u0EA5\u0EB2\u0EA7)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (\u6FB3\u9580)","mo","853"],["Macedonia (FYROM) (\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (M\xE9xico)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)","ma","212",0],["Mozambique (Mo\xE7ambique)","mz","258"],["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)","mm","95"],["Namibia (Namibi\xEB)","na","264"],["Nauru","nr","674"],["Nepal (\u0928\u0947\u092A\u093E\u0932)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Cal\xE9donie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)","om","968"],["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)","pk","92"],["Palau","pw","680"],["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)","ps","970"],["Panama (Panam\xE1)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Per\xFA)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)","qa","974"],["R\xE9union (La R\xE9union)","re","262",0],["Romania (Rom\xE2nia)","ro","40"],["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)","ru","7",0],["Rwanda","rw","250"],["Saint Barth\xE9lemy (Saint-Barth\xE9lemy)","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie fran\xE7aise))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)","st","239"],["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)","sa","966"],["Senegal (S\xE9n\xE9gal)","sn","221"],["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (\uB300\uD55C\uBBFC\uAD6D)","kr","82"],["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","ss","211"],["Spain (Espa\xF1a)","es","34"],["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)","lk","94"],["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)","sy","963"],["Taiwan (\u53F0\u7063)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (\u0E44\u0E17\u0E22)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)","tn","216"],["Turkey (T\xFCrkiye)","tr","90","(999) 999 9999"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)","ua","380"],["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (O\u02BBzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Citt\xE0 del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Vi\u1EC7t Nam)","vn","84"],["Wallis and Futuna","wf","681"],["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)","eh","212",1],["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xC5land Islands","ax","358",1]];var a=document.querySelectorAll(".phone-country");if(a.length==0)return!1;const r={element:"country",container:"country-container",selected:"country-selected",flag:"country-flag",arrow:"country-arrow",input:"country-input",list:"country-list",listItem:"country-list-item",open:"country-open"};e.setCountries(t),a.forEach(function(n){e.createInput(n,r)}),e.initDropdownHandler(r),e.clickDropdownItem(r),e.initInputChange(r)},setCountries:function(e){for(var t=this,a=0;a<e.length;a++){var r=e[a];t.countries[a]={name:r[0].trim(),dial:r[2].trim(),flag:r[1].trim(),mask:r[3]?r[3]:""},t.dialCodes.push(r[2]),t.flagCodes.push(r[1])}},countries:[],dialCodes:[],flagCodes:[],prevDialCode:"",createInput:function(e,t){var a=this,r="",n=document.createElement("DIV");n.className=t.element;var i=document.createElement("DIV");i.className=t.container;var o=document.createElement("DIV");o.className=t.selected;var s=document.createElement("SPAN");s.className=t.flag;var c=document.createElement("SPAN");c.className=t.arrow;var u=document.createElement("UL");u.className=t.list,e.className+=" "+t.input;var d=e.parentElement;e.dataset.prefer&&(r=a.getPrefer(e.dataset.prefer,t));var f=r+a.createCountryList(a.countries,t);o.append(s),o.append(c),i.append(o),i.append(u),n.append(i),u.innerHTML=f,n.append(i),n.append(e),d.append(n)},createCountryList:function(e,t){for(var a="",r=0;r<e.length;r++){var n=e[r];a+="<li class='"+t.listItem+"' data-dial='"+n.dial+"' data-flag='"+n.flag+"'>",a+="<div class='country-list-item-flag'><div class='"+t.flag+" "+n.flag+"'></div></div>",a+="<span class='country-list-item-name'>"+n.name+"</span>",a+="<span class='country-list-item-code'>+"+n.dial+"</span>",a+="</li>"}return a},initDropdownHandler:function(e){var t=this;$("."+e.selected).on("click",function(a){var r=l.findClosest(this,"."+e.element);return l.hasClass(r,e.open)?r.classList.remove(e.open):r.classList.add(e.open),!1}),$(document).on("keydown",function(a){var r=a.which||a.keyCode;r===27&&t.closeDropdownAll(e)}),$(document).on("click",function(a){var r=a.target,n=r.closest("."+e.element);n||t.closeDropdownAll(e)})},initInputChange:function(e){for(var t=this,a=document.querySelectorAll("."+e.input),r=0;r<a.length;r++)a[r].addEventListener("input",function(n){var i=this;n.preventDefault();var o=i.closest("."+e.element),s=o.getElementsByClassName(e.flag)[0],c=t.getDialCode(i.value);c=c.substring(1);var u=t.getFlagFromDial(t.countries,c);return t.setFlag(s,u),t.setInputValue(i,c),!1})},clickDropdownItem:function(e){for(var t=this,a=document.querySelectorAll("."+e.listItem),r=0;r<a.length;r++)a[r].addEventListener("click",function(n){return n.preventDefault(),t.setListItem(this,e),!1})},setFlag:function(e,t){var a=e.className.split(" ");e.className=a[0]+" "+t},setInputValue:function(e,t){var a=this,r=e.value,n,i="+"+t;if(r.charAt(0)=="+"){var o=a.prevDialCode;o?(o=o=="+"?"":o,n=r.replace(o,i)):r.length>4?n=r:n=i}else r?n=i+r:n=i;var s=a.getMaskFromDial(a.countries,t);a.setMaskInput(e,i,s),n=n=="+"?"":n,e.value=n,a.prevDialCode=i},setMaskInput:function(e,t,a){if(a){var r=t+a,n=r.length;console.log(n),$(e).setAttr("minlength",n),$(e).inputmask(r)}else $(e).removeAttr("minlength"),$(e).inputmask("remove")},getMaskFromDial:function(e,t){for(var a="",r=0;r<e.length;r++){var n=e[r];n.dial===t&&(a=n.mask)}return a},getFlagFromDial:function(e,t){for(var a="",r=0;r<e.length;r++){var n=e[r];n.dial===t&&(a=n.flag)}return a},getPrefer:function(e,t){for(var a=this,r=[],n=e.split(","),i=a.countries,o=0,s=0;s<i.length;s++){var c=i[s];n.indexOf(c.flag)!==-1&&(r[o]=c,o++)}return a.createCountryList(r,t)},getDialCode:function(e){var t=this,a="";if(e.charAt(0)=="+")for(var r="",n=999,i=0;i<e.length;i++){var o=e.charAt(i);if($.isNumeric(o)&&(r+=o,t.dialCodes[r]&&(a=e.substr(0,i+1),n=a.length),r.length===n))break}return a},setListItem:function(e,t){var a=this,r=e.closest("."+t.element),n=e.dataset.dial,i=e.dataset.flag,o=r.getElementsByClassName(t.flag)[0],s=r.getElementsByClassName(t.input)[0];a.setFlag(o,i),a.setInputValue(s,n),s.focus(),a.closeDropdownAll(t)},closeDropdownAll:function(e){var t=document.querySelectorAll("."+e.element);if(t.length==0)return!1;for(var a=0;a<t.length;a++)t[a].classList.remove(e.open)}},ae=function(){var e=l.els(".scrollable");if(e.length===0)return!1;for(var t=[],a=0;a<e.length;a++){var r=e[a];r.style.width=r.offsetWidth+"px",r.style.height=r.offsetHeight+"px",t[a]=new PerfectScrollbar(r)}window.addEventListener("resize",function(){for(var n=0;n<e.length;n++){var i=e[n];i.removeAttribute("style"),i.style.width=i.offsetWidth+"px",i.style.height=i.offsetHeight+"px",t[n].update()}},!0)},I={init:function(){if($.fn.fancybox()){var t=document.querySelectorAll(".fancybox");if(t!==null||t.length>0){for(var a=0;a<t.length;a++){var r=t[a];$(r).fancybox()}$("[data-fancybox]").fancybox({afterShow:function(n,i){}})}}},open:function(e,t){t=t!==""?t:"inline",$.fancybox.open({src:e,type:t,opts:{transitionDuration:2e3,protect:!1,keyboard:!1,touch:!1,smallBtn:!0,clickSlide:!0,beforeLoad:function(a,r){a.showLoading(),a.$refs.toolbar.show()},afterClose:function(a,r){return!1}}})}},A=function(){if(window.innerWidth>=b.lg){var e=document.getElementsByClassName("parallax");if(e.length<1)return!1;for(var t=0;t<e.length;t++){var a=M+window.innerHeight,r=parseInt(e[t].offsetTop),n=parseInt(r+e[t].offsetHeight);if(a>=n){var i=e[t].querySelector(".parallax-item"),o=(a-n*2)*.00725;i.style.transform="translate(0,-"+o+"px)"}}}},re=function(e,t,a){var r={},n={errorPlacement:function(i,o){i.addClass("help-block"),o.prop("type")==="checkbox"?i.insertAfter(o.parent("label")):i.insertAfter(o.closest(".input, .select, .textarea"))},highlight:function(i,o,s){$(i).parents(".form-group").addClass("has-error").removeClass("has-success")},unhighlight:function(i,o,s){$(i).parents(".form-group").addClass("has-success").removeClass("has-error")}};a!==null?r=$.extend({},n,a):r=MT.addObj(n,r),$(e).validate({ignore:":hidden:not(:checkbox)",errorPlacement:function(i,o){i.addClass("help-block"),o.prop("type")==="checkbox"?i.insertAfter(o.parent("label")):o.closest(".form-group").append(i)},highlight:function(i,o,s){$(i).parents(".form-group").addClass("has-error").removeClass("has-success")},unhighlight:function(i,o,s){$(i).parents(".form-group").addClass("has-success").removeClass("has-error")},submitHandler:t,showErrors:function(i,o){this.numberOfInvalids(),this.defaultShowErrors()}})},ne=function(){var e=document.querySelector(".cookie"),t=document.querySelector(".btn-cookie"),a="flkrt__cca";if(!e)return!1;var r=localStorage.getItem(BASE_URL+a);r?e.classList.add("d-none"):e.classList.remove("d-none"),$(t).on("click",function(){localStorage.setItem(BASE_URL+a,!0),e.classList.add("d-none")})},ie=function(){var e=document.querySelectorAll(".mask"),t={date:"99.99.9999",phone:"99 (999) 999 9999",phonenumber:"(999) 999 9999",card:"9999 9999 9999 9999"};if(e.length>0)for(var a=0;a<e.length;a++){var r=e[a],n=r.getAttribute("data-mask");$(r).inputmask(t[n])}},T=function(){var e=[].slice.call(document.querySelectorAll(".lazy")),t=function(r){for(var n in r.children){var i=r.children[n];typeof i.tagName=="string"&&i.tagName==="SOURCE"&&(i.src=i.dataset.src)}r.load()};if("IntersectionObserver"in window){var a=new IntersectionObserver(function(r,n){r.forEach(function(i){if(i.isIntersecting){var o=i.target;if(l.hasClass(o,"loading"))return!1;o.tagName=="VIDEO"?t(o):o.src=o.dataset.src,setTimeout(function(){l.addClass(o,"loading");var s=l.findClosest(o,".picture");s&&l.addClass(s,"loading")},150),a.unobserve(o)}})});e.forEach(function(r){a.observe(r)})}else e.forEach(function(r){r.tagName=="VIDEO"?t(r):r.src=r.dataset.src})},oe=function(){var e=navigator.userAgent,t,a=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(a[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],{name:"IE",version:t[1]||""}):a[1]==="Chrome"&&(t=e.match(/\b(OPR|Edge)\/(\d+)/),t!=null)?{name:t[1].replace("OPR","Opera"),version:t[2]}:(a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,"-?"],(t=e.match(/version\/(\d+)/i))!=null&&a.splice(1,1,t[1]),{name:a[0],version:a[1]})},se=function(){var e="";C=new MobileDetect(window.navigator.userAgent),C.mobile()&&!C.tablet()&&(e+="mobile "),C.tablet()&&(e+="tablet "),C.is("iPhone")&&(e+="iphone "),C.os()&&(e+="os "),!C.mobile()&&!C.tablet()&&(e="desktop ");var t=oe(),a=t.name.toLowerCase(),r=t.version;a==="msie"&&t.version<11&&(r="old"),e+=a+" "+a+"_"+r,l.addClass(h,e.trim())};return{init:function(){se(),P(),N(),T(),_(),H(),z(),D(),j(),Q(),U(),R(),J(),Y(),Z(),X(),V(),B(),ie(),A(),I.init(),ae(),G(),F(),O(),ee(),te.init(),W(),AOS.init(),ne();var e=document.querySelectorAll("FORM");if(e.length>0)for(var t=0;t<e.length;t++)re(e[t],function(s){e[t].submit()});$("body").on("keydown",".fullname",function(s){if(s.which===32&&s.target.selectionStart===0)return!1}),window.addEventListener("scroll",function(s){M=window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop,A()});var a=document.querySelector(".block-magazine");a&&E(a);var r=document.querySelector(".sc");if(r){var n=$(".project-hero__body").height(),i=$(".project-hero").height(),o=window.innerWidth+" - "+window.innerHeight+" - "+h.className+" - "+n+" - "+i;r.innerHTML=o,window.addEventListener("scroll",function(s){var c=$(".main-slider__main").find(".swiper-slide").height(),u=window.innerWidth+" - "+window.innerHeight+" - "+h.className+" - "+c;r.innerHTML=u})}window.addEventListener("orientationchange",function(){$(window).trigger("resize")},!1)},el:function(e){var t;return e===document?document:e&&e.nodeType===1?e:(t=document.querySelector(e))?t:(t=document.getElementsByTagName(e))||(t=document.getElementsByClassName(e))?t[0]:null},els:function(e){var t;return e===document?document:e&&e.nodeType===1?e:(t=document.querySelectorAll(e))?t:null},getID:function(e){return e&&e.nodeType===1?e:document.getElementById(e)},find:function(e,t){if(e=l.el(e),e)return e.querySelector(t)},findAll:function(e,t){if(e=l.el(e),e)return e.querySelectorAll(t)},trim:function(e){return e.trim()},findClosest:function(e,t){var a;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some(function(n){return typeof document.body[n]=="function"?(a=n,!0):!1});for(var r;e;){if(r=e.parentElement,r&&r[a](t))return r;e=r}return null},hasClass:function(e,t){if(!!e)return e.classList?e.classList.contains(t):new RegExp(" "+t+" ").test(" "+e.className+" ")},addClass:function(e,t){if(!(!e||typeof t>"u")){var a=t.split(" ");if(e.classList)for(var r=0;r<a.length;r++)a[r]&&a[r].length>0&&e.classList.add(l.trim(a[r]));else if(!l.hasClass(e,t))for(var n=0;n<a.length;n++)e.className+=" "+l.trim(a[n])}},isNumber:function(e){var t=e||window.event;if(t.type==="paste")a=event.clipboardData.getData("text/plain");else{var a=t.keyCode||t.which;a=String.fromCharCode(a)}var r=/[0-9]|\./;r.test(a)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())},removeClass:function(e,t){if(!(!e||typeof t>"u")){var a=t.split(" ");if(e.classList)for(var r=0;r<a.length;r++)e.classList.remove(l.trim(a[r]));else if(l.hasClass(e,t))for(var n=0;n<a.length;n++)e.className=e.className.replace(new RegExp("\\b"+l.trim(a[n])+"\\b","g"),"")}},getIndex:function(e){for(var t=0;e=e.previousElementSibling;)t++;return t},isTouch:function(){return"ontouchstart"in window},formatMoney:function(e){var t=e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");return t},formatNumberFromMoney:function(e){var t=e.replace(",","");return parseFloat(t)},getSpace:function(){var e=parseInt(window.innerWidth),t=document.getElementById("header"),a=t.querySelector(".container"),r=(e-parseInt(a.offsetWidth))/2;return r},setAttr:function(e,t){for(var a in t)e.setAttribute(a,t[a])},addObj:function(t,a){for(var r in a)t[r]=a[r];return t},calcVH:function(e,t){var a=window.innerHeight,r=0;if(t){var n=document.querySelector(t);r=n.offsetHeight}e&&e.setAttribute("style","height:"+(a-r)+"px;")},map:function(e){K(e)},fancy:{open:function(e,t){I.open(e,t)}}}}();document.addEventListener("DOMContentLoaded",function(){l.init()});
