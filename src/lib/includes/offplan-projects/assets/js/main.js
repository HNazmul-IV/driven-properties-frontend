"use strict";

var html,
    body,
    st,
    md,
    breakpoints = {
        sm: 568,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1800,
    };

var APP = (function() {
    html = document.documentElement;
    body = document.body;

    var sw = function() {
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker
                    .register("theme/assets/js/sw.js")
                    .then(function() {
                        //console.log("Service Worker registered!");
                    });
            } else {
                //console.log("Browser not supported!");
            }
        },
        stickyHeader = function() {
            var header = document.getElementById("header"),
                activeClass = "header--fixed";
            if (!header) {
                return false;
            }
            var setFixed = function() {
                if (window.pageYOffset > header.offsetHeight) {
                    APP.addClass(html, activeClass);
                } else {
                    APP.removeClass(html, activeClass);
                }
            };
            setFixed();

            document.addEventListener("scroll", setFixed);
        },
        menu = function() {
            var btn = document.querySelector(".navbar-toggler"),
                bgNavbar = document.querySelector(".bg-navbar"),
                mainMenu = document.querySelector(".navbar-collapse"),
                cl = "menu--open",
                active = "active";

            if (btn) {
                btn.addEventListener("click", function() {
                    $(html).toggleClass(cl);
                    if (APP.hasClass(html, cl)) {
                        APP.calcVH(mainMenu);
                    } else {
                        mainMenu.removeAttribute("style");
                    }
                });
            }
            if (bgNavbar) {
                bgNavbar.addEventListener("click", function() {
                    $(html).removeClass(cl);
                });
            }

            window.addEventListener("resize", function(e) {
                //setTop();
            });
        },
        pageWheel = function() {
            var sections = document.querySelectorAll(".fp-section");
            if (sections.length < 1) {
                return false;
            }
            if (window.innerWidth > breakpoints.lg) {
                $(sections).on("wheel DOMMouseScroll", function(e) {
                    e.preventDefault();
                    $(sections).removeClass("fp-active");
                    if (e.originalEvent.wheelDelta >= 0) {
                        if ($(this).prev().length) {
                            var prev = "#" + $(this).prev().attr("id");
                            document
                                .querySelector(prev)
                                .scrollIntoView({ behavior: "smooth" });
                            $(prev).addClass("fp-active");
                        }
                    } else {
                        if ($(this).next().length) {
                            var next = "#" + $(this).next().attr("id");
                            document
                                .querySelector(next)
                                .scrollIntoView({ behavior: "smooth" });

                            $(next).addClass("fp-active");
                        }
                    }
                });
            }
        },
        toggleSearch = function() {
            var btnSearch = document.querySelector(".search-toggler"),
                bgSearch = document.querySelector(".bg-search"),
                cl = "overflow-hidden";
            if(btnSearch) {
                btnSearch.addEventListener("click", function() {
                    if (!APP.hasClass(html,cl)) {
                        APP.addClass(html, cl);
                    } else {
                        APP.removeClass(html, cl);
                    }
                });
                
            }
            if(bgSearch) {
                bgSearch.addEventListener("click", function() {
                    $(html).removeClass("overflow-hidden");
                    $("#searchMain").collapse('hide');
                });
                
            }
            
            function setDisableScroll(e) {
                if (APP.hasClass(html,cl)) {
                    
                    window.scrollTo(0, 0);
                    e.preventDefault();
                    return false;
                }
                return false;
            };

            var inputSearch = document.querySelector(".js-input-search");
            if(inputSearch) {
                inputSearch.addEventListener("focus", function(){
                    APP.addClass(html, "search--focus");
                }, true);
                inputSearch.addEventListener("blur", function() {
                    APP.removeClass(html, "search--focus");
                }, true);
                
                inputSearch.addEventListener("keyup", function() {
                    $.ajax({
                        type: "POST",
                        url:  BASE_URL+"search",
                        data: "inputSearchVal="+inputSearch.value,
                        success: function(data){
                        }
                    });
                });
            }

            //window.addEventListener("scroll", setDisableScroll);
        },
        mainSlider = function() {
            var container = document.querySelector(".main-slider");
            if (!container) {
                return false;
            }
            var main = container.querySelector(".main-slider__main"),
                logo = container.querySelector(".main-slider__logo"),
                prev = ".swiper-button-prev",
                next = ".swiper-button-next";
            var setLogoWidth = function() {
                var logoSlides = logo.querySelectorAll(".swiper-slide");
                logoSlides.forEach(function(element) {
                    element.style.width = parseInt(logo.offsetWidth) / 3 + "px";
                });
            };
            var swpLogo = new Swiper(logo, {
                    loop: true,
                    autoplay: {
                        delay: 7000,
                    },
                    autoplay:false,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                    centeredSlides: true,
                    loopedSlides: 3,
                }),
                swpMain = new Swiper(main, {
                    loop: true,
                    effect: "fade",
                    lazy: true,
                    lazy: {
                        loadPrevNext:false,
                        loadOnTransitionStart:true,

                    },
                    autoplay: {
                        delay: 7000,
                    },
                    autoplay:false,
                    slidesPerView: 1,
                    centeredSlides: true,
                    keyboard: true,
                    navigation: {
                        nextEl: container.querySelector(next),
                        prevEl: container.querySelector(prev),
                    },
                    loopedSlides: 3,
                });

            swpMain.controller.control = swpLogo;
            swpLogo.controller.control = swpMain;
            setTimeout(function() {
                lazy();
            },500);
            var slides = main.querySelectorAll(".swiper-slide");
            window.addEventListener(
                "resize",
                function() {
                    
                    for(var i=0;i<slides.length;i++) {
                        APP.calcVH(slides[i]);
                    }
                    setLogoWidth();
                },
                true
            );
            if (window.innerWidth >= breakpoints.lg) {
                for(var i=0;i<slides.length;i++) {
                    APP.calcVH(slides[i]);
                }
				APP.calcVH(container);
            } else {
                
                APP.calcVH(container);
                for(var i=0;i<slides.length;i++) {
                    APP.calcVH(slides[i], ".main-slider__logos");
                }
            }
            
            setLogoWidth();
        },
        mouseScroll = function() {
            var mouse = document.querySelector(".mouse-scroll");
            var onScroll = function(e) {
                e.preventDefault();
                var target = document.getElementById(mouse.dataset.target),
                    elRect = target.getBoundingClientRect();
                    $('html, body').animate({
                        scrollTop: elRect.top - 80
                 }, 1000);
                 /*
                window.scrollBy({
                    top: elRect.top - 80,
                    left: 0,
                    behavior: "smooth",
                });
                */
            };
            if (mouse) {
                mouse.addEventListener("click", onScroll);
            }
        },
        mainProjectSlider = function() {
            var el = document.querySelector(".home-project");
            if (!el) {
                return false;
            }
            var desktop = el.querySelector(".slider-desktop"),
                mobile = el.querySelector(".slider-mobile");
              
            $(document).on("click", ".swiper-slide", function() {
                if ($(this).closest(el)) {
                    var ind = $(this).index();
                    //swpMain.slideTo(0);
                }
            });
            
            if (window.innerWidth >= breakpoints.lg) {
                var isClicked = false;
                var jsSlide = function(obj) {
                    var container = ".js-slide",
                        item = '[data-slide="item"]',
                        media = '[data-slide="media"]',
                        image = '[data-slide="image"]',
                        next = '[data-slide="button-next"]',
                        prev = '[data-slide="button-prev"]',
                        clicked = "clicked",
                        i = 0,
                        j = 0,
                        k = 0,
                        timer = 0,
                        autoSlide = function() {
                            i++;
                            if (i % 3 === 0) {
                                changeHandler(j);
                                if (j < 3) {
                                    j++;
                                } else {
                                    j = 0;
                                }
                            }
                            k = i;
                            timer = setTimeout(autoSlide, 1000);
                        },
                        clickHandler = function(e) {
                            //e.preventDefault();
                            if(APP.hasClass(html,"tablet") || APP.hasClass(html,"mobile")) {
                                if(e.type === "mouseover") {
                                    return false;
                                }
                            }
                            var pItem = this,
                                isTablet = (APP.hasClass(html,"tablet")) ? true :false;
                                
                            var elContainer = APP.findClosest(pItem, container);
                            var els = elContainer.querySelectorAll(item);
                            changeHandler(elContainer, pItem.dataset.id);
                            if(isTablet) {
                                els.forEach(function(el) {
                                    if(el == pItem) {
                                        if(APP.hasClass(el,clicked)) {
                                            APP.removeClass(el,clicked);
                                            isClicked = false;
                                        } else {
                                            APP.addClass(el,clicked);
                                            isClicked = true;
                                        }
                                    } else {
                                        APP.removeClass(el,clicked);
                                    }
                                });
                            }
                            if(isClicked) {
                                return false;
                            }
                        },
                        changeHandler = function(cont, i) {
                            var items = cont.querySelectorAll(image);
                            items.forEach(function(item) {
                                if(item.dataset.id === i) {
                                    item.setAttribute("active","true");
                                } else {
                                    item.removeAttribute("active");
                                }
                            });
                        };
                    
                    $(document).on("click", item, clickHandler);
                    if(APP.hasClass("desktop")) {
                        $(document).on("mouseover", item, clickHandler);
                    }
                    
                };

                jsSlide();
            } else {
                var lastIndex = 0;
                var swpMobile = new Swiper(mobile, {
                    loop: true,
                    autoplay: false,
                    keyboard: true,
                    effect: "fade",
                    slidesPerView:1,
                    spaceBetween: 0,
                    observer: true,
                    observeParents: true,
                    speed: 500,
                    slidesPerGroup: 1,
                    slideToClickedSlide: true,
                    navigation: {
                        nextEl: el.querySelector(".swiper-button-next"),
                        prevEl: el.querySelector(".swiper-button-prev"),
                    },
                    on: {
                        init: function() {
                            jsNextContent(this);
                        }
                    }
                });
                swpMobile.on("slideChange", function() {
                    jsNextContent(this);
                });
                function jsNextContent(obj) {
                    var nextIndex = obj.realIndex + 2;
                    if(nextIndex >= obj.slides.length) {
                        nextIndex = 1;
                    }
                    var nextSlide = obj.slides[nextIndex];
                    $(obj.slides).removeClass("next-slide");
                    $(nextSlide).addClass("next-slide");
                    /*
                    var ind = obj.activeIndex,
                        nextInd, next2Index;
                        console.log(ind);
                    if(obj.activeIndex >= obj.previousIndex) {
                        console.log("+");
                        nextInd = ind === 0 ? 0 : ind  ;
                        next2Index = !obj.isEnd ? nextInd + 1 : 2;
                    } else {
                        console.log("-");
                        nextInd = obj.isEnd ? 0 : nextInd - 1;
                        
                        next2Index = !obj.isEnd ? nextInd + 1 : 1;
                    }

                    
                    var currentSlide = obj.slides[nextInd];
                    
                    var nextSlide = obj.slides[next2Index];
                    
                    console.log("realIndex: " +ind + " - activeIndex: " +lastIndex +" - nextInd: " + nextInd + " - nextIndex: " + next2Index);
                    
                    //var nextBody = nextSlide.querySelector(".content-banner__body").innerHTML;
                    //currentSlide.querySelector(".content-banner__body-next").innerHTML = nextBody;

                    lastIndex = ind;
                    */

                };
            } 
        },
        mainAboutSlider = function() {
            var el = document.querySelector(".block-concept");
            if (!el) {
                return false;
            }
            var prev = el.querySelector(".swiper-button-prev"),
                next = el.querySelector(".swiper-button-next"),
                container = el.querySelector(".swiper-container"),
                effect = "fade",
                speed = 500;
            if (window.innerWidth < breakpoints.md) {
                effect = "fade";
                speed = 0;
            } else {
                effect = "slide";
                speed = 500;
            }
            
            var swpConcept = new Swiper(container, {
                effect: effect,
                loop: true,
                speed: speed,
                /*
                autoplay: {
                    delay: 5000,
                },
                */
                autoplay:false,
                keyboard: true,
                simulateTouch: true,
                navigation: {
                    nextEl: next,
                    prevEl: prev,
                },
                on: {
                    init: function() {
                        setSlideBG(this);
                    }
                }
            });
            function setSlideBG(obj) {
                if (APP.hasClass(el, "project-concept")) {
                    var cIndex = obj.realIndex+1,
                        currentSlide = obj.slides[cIndex]; 
                    if(!APP.hasClass(currentSlide,"project-concept__slide-first")) {
                        if(APP.hasClass(currentSlide,"is-bg")) {
                            APP.addClass(el, "concept-theme");
                        } else {
                            APP.removeClass(el, "concept-theme");
                        }
                    } else {
                        APP.removeClass(el, "concept-theme");
                    }
                }
            };
            
            swpConcept.on("transitionStart", function() {
                if (this.previousIndex < this.activeIndex) {
                    setClass("direction-next", "direction-prev");
                } else {
                    setClass("direction-prev", "direction-next");
                }
            });
            swpConcept.on("slideChange", function() {
                setSlideBG(swpConcept);
                
            });

            function setClass(newClass, oldClass) {
                APP.removeClass(container, oldClass);
                APP.addClass(container, newClass);
                setTimeout(function() {
                    APP.removeClass(container, newClass);
                }, 500);
            }
            prev.addEventListener("click", function() {
                setClass("direction-prev", "direction-next");
            });
            next.addEventListener("click", function() {
                setClass("direction-next", "direction-prev");
            });

            if (window.innerWidth < breakpoints.md) {
                setClass("direction-next", "direction-prev");
            }
        },
        mainMilestoneSlider = function() {
            var milestone = document.querySelector(".block-milestone");
            if (!milestone) {
                return false;
            }
            var main = milestone.querySelector(".block-milestone__main"),
                media = milestone.querySelector(".block-milestone__media"),
                prev = ".swiper-button-prev",
                next = ".swiper-button-next",
                container = ".swiper-container",
                swpMedia,
                swpMain,
                loop = false,
                center = false,
                effect = "slide";
            if (window.innerWidth < breakpoints.md) {
                effect = "slide";
                loop = true;
                center = true;
            } else {
                effect = "slide";
                loop = true;
                center = false;
            }
            var swpMedia = new Swiper(media.querySelector(container), {
                loop: loop,
                effect: effect,
                slidesPerView: "auto",
                spaceBetween: 0,
                slidesPerGroup: 1,
                speed: 330,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                loopedSlides: 3,
                navigation: {
                    nextEl: media.querySelector(next),
                    prevEl: media.querySelector(prev),
                },
                slideToClickedSlide: true,
            });

            if (window.innerWidth > 768) {
                swpMain = new Swiper(main.querySelector(container), {
                    loop: loop,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    keyboard: true,
                    SlidesPerView: 1,
                    navigation: {
                        nextEl: main.querySelector(next),
                        prevEl: main.querySelector(prev),
                    },
                    speed: 330,
                    loopedSlides: 3,
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                    },
                });

                swpMain.controller.control = swpMedia;
                swpMedia.controller.control = swpMain;

                /*
                swpMain.on("slideChange", function() {
                    swpMedia.slideTo(swpMain.activeIndex);
                });
                swpMedia.on("slideChange", function() {
                    swpMain.slideTo(swpMedia.activeIndex);
                });
                */
            }
        },
        mainAddWorthSlider = function() {
            var element = document.querySelector(".block-addworth");
            if (!element) {
                return false;
            }
            new Swiper(element.querySelector(".swiper-container"), {
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 6000,
                },
                slidesPerView: 1,
                keyboard: true,
            });
        },
        projectDetailGallery = function() {
            var block = document.querySelector(".block-gallery");
            if (block) {
                var centered = true,
                    slider = block.querySelector(".swiper-container");
                if (window.innerWidth >= breakpoints.md) {
                    centered = false;
                }
                var swpGallery = new Swiper(slider, {
                    loop: false,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    keyboard: true,
                    slidesPerView: "auto",
                    spaceBetween: 2,
                    slidesPerGroup: 1,
                    slideToClickedSlide: true,
                    centeredSlides: false,
                    loopedSlides: 3,
                    pagination: {
                        el: block.querySelector(".swiper-pagination"),
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: block.querySelector(".swiper-button-next"),
                        prevEl: block.querySelector(".swiper-button-prev"),
                    },
                    speed: 500,
                });

                jsFilter(block, swpGallery);

                $(slider).hover(
                    function() {
                        swpGallery.autoplay.stop();
                    },
                    function() {
                        swpGallery.autoplay.start();
                    }
                );
            }
        },
        selectCustom = function() {
            var wrappers = document.querySelectorAll(".select-custom-wrapper");
            if (wrappers) {
                for (var i = 0; i < wrappers.length; i++) {
                    wrappers[i].addEventListener("click", function() {
                        this.querySelector(".select-custom").classList.toggle(
                            "open"
                        );
                    });
                }

                for (const option of document.querySelectorAll(
                        ".select-custom-option"
                    )) {
                    option.addEventListener("click", function() {
                        if (!this.classList.contains("selected")) {
                            this.parentNode
                                .querySelector(".select-custom-option.selected")
                                .classList.remove("selected");
                            this.classList.add("selected");
                            this.closest(".select-custom").querySelector(
                                ".select-custom__trigger span"
                            ).textContent = this.textContent;
                            this.closest(".select-custom").querySelector(
                                ".select-custom__trigger input"
                            ).value = this.dataset.value;
                            this.closest(".select-custom")
                                .querySelector(".select-custom__trigger input")
                                .setAttribute("data-value", this.dataset.value);

                            var evt = document.createEvent("HTMLEvents");
                            evt.initEvent("change", false, true);
                            this.closest(".select-custom")
                                .querySelector(".select-custom__trigger input")
                                .dispatchEvent(evt);
                        }
                    });
                }

                window.addEventListener("click", function(e) {
                    const select = document.querySelector(".select-custom");
                    if (!select) {
                        return false;
                    }
                    if (!select.contains(e.target)) {
                        select.classList.remove("open");
                    }
                });
            }
        },
        jsFilter = function(element, obj) {
            var t = this;
            var item = '[data-filter="item"]',
                input = '[data-filter="toggle"]',
                link = '[data-filter="toggle"]',
                active = "active",
                passive = "d-none";
            
            if(!element) {return false;}
            var inputs = element.querySelectorAll(input),
                items = element.querySelectorAll(item);

            function changeHandler() {
                var values = [],
                    items = element.querySelectorAll(item);
                if (this.dataset.filterType === "link") {
                    var links = document.querySelectorAll(link);
                    for (var i = 0; i < links.length; i++) {
                        if (this === links[i]) {
                            APP.addClass(links[i], active);
                        } else {
                            APP.removeClass(links[i], active);
                        }
                    }
                }
                for (var j = 0; j < inputs.length; j++) {
                    if (
                        inputs[j].dataset.filterType === "link" &&
                        APP.hasClass(inputs[j], active)
                    ) {
                        values.push(inputs[j].dataset.value);
                    } else if (inputs[j].dataset.filterType === "input") {
                        values.push(inputs[j].dataset.value);
                    }
                }
                for (var i = 0; i < items.length; i++) {
                    var allCount = values.filter(function(value) {
                        return value === "*";
                    }).length;
                    if (allCount === values.length) {
                        APP.removeClass(items[i], passive);
                    } else {
                        var k = 0;
                        while (k < values.length) {
                            if (values[k] === "*") {
                                values.splice(k, 1);
                            } else {
                                ++k;
                            }
                        }
                        var valuesStr = values.join(",");
                        valuesStr = valuesStr.replace(/,/g, ".");
                        valuesStr = "." + valuesStr;
                        if (!$(items[i]).is(valuesStr)) {
                            APP.addClass(items[i], passive);
                        } else {
                            //console.log(items[i]);
                            APP.removeClass(items[i], passive);
                        }
                    }
                }
                if (obj) {
                    obj.update();
                    obj.slideTo(0);
                }
                AOS.init();
            }
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].dataset.filterType === "input") {
                    $(inputs[i]).change(changeHandler);
                } else if (inputs[i].dataset.filterType === "link") {
                    $(inputs[i]).click(changeHandler);
                }
            }
        },
        jsCounter = function() {
            $(".js-counter").counterUp({
                delay: 10,
                time: 1800,
            });
        },
        jsFilterTab = function(){
            var el = document.querySelector(".filter-tab");
            if (!el) { return false; }
            var swp = new Swiper(el.querySelector(".swiper-container"), {
                loop: false,
                autoplay: false,
                keyboard: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                centeredSlides: window.innerWidth >= breakpoints.lg ? false : true,
                slidesPerGroup: 1,
                slideToClickedSlide: true,
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                },
                on: {
                    init: function() {
                        this.slideTo(1);
                        setActive(this.slides[1]);
                    }
                }
            });

            function setActive(slide) {
                var  activeLink = slide.querySelector("A");
                activeLink.click();
            }
            
            swp.on("slideChange", function() {
                setActive(this.slides[this.activeIndex]);
            });
        
        
        },
        jsMagazine = function() {
            var els = document.querySelectorAll(".js-magazine");
            if(els.length === 0) {return false;}
            var initHandler = function() {
                var btn = this,
                    modal = ".modal-magazine",
                    el = document.getElementById("magazine"), 
                    pdf = btn.dataset.magazine,
                    h = parseInt(window.innerHeight) * 0.9;
                var options = {height: h, duration: 800};
                el.innerHTML = "";
                var div = document.createElement("DIV");
                div.className="magazine-area";
                el.appendChild(div);
            var flipBook = $(div).flipBook(pdf, options);
                APP.fancy.open(modal,"inline");
            };
            for (var i = 0; i < els.length; i++) {
                $(els[i]).click(initHandler);
            }
        }, 
        productDetailHero = function() {
            if (window.innerWidth < breakpoints.lg) {
                var el = document.querySelector(".project-hero");
                if (el) {
					var elB = el.querySelector(".project-hero__body");
                    window.addEventListener(
                        "resize",
                        function() {
							APP.calcVH(el);
							APP.calcVH(elB,".project-detail__buttons");
                        },
                        true
                    );
                    APP.calcVH(el);
					APP.calcVH(elB,".project-detail__buttons");
                }
            }
        },
        projectMap = function(locations) {
            if(locations.length === 0 || !locations) {return false;}

            function initialize() {
                var grayStyle = [
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ];
                var myOptions = {
                    center: new google.maps.LatLng(25.0872747,55.0780077),
                    zoom: 13,
                    styles: grayStyle,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    icon: "theme/assets/img/map_marker.png"
                };
                
                var map = new google.maps.Map(document.getElementById("map"),
                    myOptions);
                setMarkers(map, locations);
            }
            
            function setMarkers(map, locations) {
                var marker, i,currentMarker,lastWindow;
                for (i = 0; i < locations.length; i++) {
            
                    var title = locations[i][0];
                    var lat = locations[i][1];
                    var long = locations[i][2];
                    var number = locations[i][3],
						iconURL = (i==0) ? "theme/assets/img/map_marker_default.png" : "theme/assets/img/map_marker.png";
					
                    var latlngset = new google.maps.LatLng(lat, long);

                    var icon = {
                        url: iconURL,
                        scaledSize: new google.maps.Size(40, 45),
                        //origin: new google.maps.Point(0,0),
                        //anchor: new google.maps.Point(0,0)
                    };
                    var marker = new google.maps.Marker({
                        map: map,
                        title: title,
                        position: latlngset,
                        icon: icon
                    });
                    map.setCenter(marker.getPosition());
                    toggleBounce(marker);
                    title = (i==0) ? '<a href="https://www.google.com/maps/dir/?api=1&destination='+lat +','+ long+'" target="_blank">'+title+'</a>' : title;
                    var content = '<div class="map-info map-info_'+i+' t--color"><label class="map-info__label">'+title+'</label><span class="map-info__text">'+number+'</span></div>';
                    var infowindow = new google.maps.InfoWindow();
                    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                        return function () {
                            if(lastWindow) {
                                lastWindow.close();
                                setMarkerDefault(currentMarker);
                            }
                            
                            infowindow.setContent(content);
                            infowindow.open(map, marker);
                            toggleBounce(marker);
                            setMarkerSize(marker,80,90);

                            currentMarker = this;
                            lastWindow = infowindow;
                            
                        };
                    })(marker, content, infowindow));

                    google.maps.event.addListener(infowindow,'closeclick',function(){
                        setMarkerDefault(currentMarker);
                    });
                    if(i==0) {
                        infowindow.setContent(content);
                            infowindow.open(map, marker);
                            toggleBounce(marker);
                            setMarkerSize(marker,80,90);
                            currentMarker = marker;
                            lastWindow = infowindow;
                    }
                }
            }

            function setMarkerDefault(m) {
                m.setAnimation(null);
                setMarkerSize(m,40,45);
            }

            function setMarkerSize(m,w,h) {
                m.setIcon(
                    new google.maps.MarkerImage(
                        m.getIcon().url,
                        new google.maps.Size(w,h),
                        m.icon.origin,//origin
                        null,//new google.maps.Point(0,0), //anchor
                        new google.maps.Size(w,h)//changes the scale
                    )
                );  
            }

            function toggleBounce(m) {
                if (m.getAnimation() !== null) {
                  m.setAnimation(null);
                } else {
                  m.setAnimation(google.maps.Animation.BOUNCE);
                }
              }

            initialize();
        },
        projectOpportunity = function() {
            var element = document.querySelector(".block-opportunity");
            if (!element) {
                return false;
            }
            var slider = element.querySelector(".slider-opportunity"),
                body = element.querySelector(".opportunity-body"),
                next = ".swiper-button-next",
                prev= ".swiper-button-prev";
            var swp = new Swiper(slider, {
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 0,
                slidesPerGroup: 1,
                speed: 500,
                autoplay: false,
                loopedSlides: 3,
                navigation: {
                    nextEl: element.querySelector(next),
                    prevEl: element.querySelector(prev),
                },
                slideToClickedSlide: true,
            });
            function setPosition() {
                if(window.innerWidth >= breakpoints.lg) {
                    APP.removeClass(body,"d-none");
                    var nextBody = slider.nextElementSibling;
                    if(nextBody) {
                        var op = element.querySelector(".opportunity");
                        if(op && op.firstChild) {
                            op.parentNode.insertBefore(nextBody, op.nextSibling);
                        }
                        
                    }
                    
                } else {
                    if(body) {
                        var cloneBody = body.cloneNode( true );
                        slider.parentNode.insertBefore(body, slider.nextElementSibling);
                    }
                   
                }
            }
            setPosition();
            window.addEventListener("resize", function(e) {
                setPosition();
            });
        },
        projectDetailStance = function() {
            var el = document.querySelector(".block-plan-stance");
            if (!el) {
                return false;
            }
            var numbers = el.querySelectorAll(".stance-number");
            var swp = new Swiper(el.querySelector(".swiper-container"), {
                effect: "fade",
                loop: true,
                speed: 0,
                /*
                autoplay: {
                    delay: 8000,
                },
                */
               autoplay:false,
                keyboard: true,
                navigation: {
                    nextEl: el.querySelector(".swiper-button-next"),
                    prevEl: el.querySelector(".swiper-button-prev"),
                },
                on: {
                    init: function() {
                        var index = this.realIndex;
                    setButtons(numbers,index);
                    }
                }
            });

            function setButtons(numb, ind) {
                for(var i=0;i<numb.length;i++) {
                    if(i=== ind) {
                        APP.addClass(numb[i],"active");
                    } else {
                        APP.removeClass(numb[i],"active");
                    }
                }
            } 

            swp.on("slideChange", function() {
                var index = this.realIndex;
                setButtons(numbers,index);
            });

            for(var i=0;i<numbers.length;i++) {
                numbers[i].addEventListener("click", function() {
                    var ind = APP.getIndex(this);
                    setButtons(numbers,ind);
                    var actSlide = swp.el.querySelector('[data-swiper-slide-index="'+ind+'"]');
                    swp.slideTo(APP.getIndex(actSlide));
                });
            }
            
            
        },
        projectDetailRoom = function() {
            var el = document.querySelector(".block-room");
            if (!el) {
                return false;
            }

            var main = el.querySelector(".block-room__main"),
                media = el.querySelector(".block-room__media");

            var swpMain = new Swiper(main, {
                effect: "fade",
                loop: true,
                speed: 500,
                autoplay:false,
                keyboard: true,
            });

            var swpMedia = new Swiper(media, {
                effect: "fade",
                loop: true,
                speed: 500,
                autoplay: false,
                keyboard: true,
                navigation: {
                    nextEl: media.querySelector(".swiper-button-next"),
                    prevEl: media.querySelector(".swiper-button-prev"),
                },
            });

            swpMain.controller.control = swpMedia;
            swpMedia.controller.control = swpMain;
        },
        projectList = function() {
            var element = document.querySelector(".block-projects");
            if (!element) {
                return false;
            }

            jsFilter(element);
        },
        reviewSlider = function() {
            var milestone = document.querySelector(".block-review");
            if (!milestone) {
                return false;
            }
            var main = milestone.querySelector(".block-review__main"),
                media = milestone.querySelector(".block-review__media"),
                prev = ".swiper-button-prev",
                next = ".swiper-button-next",
                container = ".swiper-container",
                swpMedia,
                swpMain,
                loop = false,
                center = false,
                effect = "slide";
            if (window.innerWidth < breakpoints.md) {
                effect = "slide";
                loop = true;
                center = true;
            } else {
                effect = "slide";
                loop = true;
                center = false;
            }
            var swpMedia = new Swiper(media.querySelector(container), {
                loop: loop,
                effect: effect,
                slidesPerView: "auto",
                spaceBetween: 0,
                slidesPerGroup: 1,
                speed: 500,
                autoplay: false,
                loopedSlides: 3,
                navigation: {
                    nextEl: media.querySelector(next),
                    prevEl: media.querySelector(prev),
                },
                slideToClickedSlide: true,
            });

            if (window.innerWidth > 768) {
                swpMain = new Swiper(main.querySelector(container), {
                    loop: loop,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    keyboard: true,
                    SlidesPerView: 1,
                    navigation: {
                        nextEl: main.querySelector(next),
                        prevEl: main.querySelector(prev),
                    },
                    speed: 500,
                    loopedSlides: 3,
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                    },
                });
                swpMain.controller.control = swpMedia;
                swpMedia.controller.control = swpMain;
                /*
                swpMain.on("slideChange", function() {
                    swpMedia.slideTo(swpMain.activeIndex);
                });
                swpMedia.on("slideChange", function() {
                    swpMain.slideTo(swpMedia.activeIndex);
                });
                */
            }
        },
        autocomplete = function() {
            var t = this;
            var element = ".js-autocomplete",
                    dropdown= ".autocomplete-dropdown",
                    list= '.autocomplete-list',
                    item= 'autocomplete-item',
                    query = '.autocomplete-query',
                    count = '.autocomplete-count',
                    title = "autocomplete-item__title",
                    text = "autocomplete-item__text",
                    input= '[data-autocomplete="input"]',
                    active= "autocomplete-active",
                inputHandler = function() {
                    var input = this,
                        val = input.value,
                        el = APP.findClosest(input, element),
                        elDropdown = el.querySelector(dropdown),
                        elList = el.querySelector(list);
                        
                        elList.innerHTML = "";
                    if (val.length < 3) {
                        elList.innerHTML = "";
                        APP.removeClass(elDropdown, active);
                    } else {
                        elDropdown.classList.remove(active);

                        ajaxHandler(elDropdown, elList, val);
                    }
                },
                /* Burada ajax iÅlemleri yapÄ±lacak */
                ajaxHandler = function(drp, list, val) {
                    $.ajax({
                        type:"POST",
                        url: BASE_URL + "search",
                        data: "inputSearchVal="+ val,
                        success: function(data) {
                            var d = JSON.parse(data);
                            addItems(drp,list, d);
                            APP.addClass(drp, active);
                        }
                    });
                    
                },
                addItems = function(drp,list, data) {
                    var elQuery = drp.querySelector(query),
                        elCount = drp.querySelector(count),
                        result = data.result;
                        elQuery.innerHTML = data.query;
                        elCount.innerHTML = data.count;
                    for (var i = 0; i < result.length; i++) {
                        var li = document.createElement("LI"),
                            elH5 = document.createElement("H5"),
                            elA = document.createElement("A"),
                            elP = document.createElement("P");

                        li.className = item;
                        var itemHTML = '<h5 class="autocomplete-item__title"><a href="'+result[i].url+'">'+result[i].title+'</a></h5>'+
                            '<p class="autocomplete-item__text">'+result[i].text+'</p>';
                        li.innerHTML= itemHTML;
                        list.appendChild(li);
                    }
                };
            if (document.querySelectorAll(element).length === 0) {
                return false;
            }

            $(document).on("keyup", input, inputHandler);
        },
        country =  {
            init: function() {

                var ths = this;

                const allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1684" ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1264" ], [ "Antigua and Barbuda", "ag", "1268" ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1242" ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1246" ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1441" ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1284" ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1 ], [ "Cayman Islands", "ky", "1345" ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2 ], [ "Cocos (Keeling) Islands", "cc", "61", 1 ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1767" ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1473" ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1671" ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1 ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2 ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1876" ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3 ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1 ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1 ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1664" ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1670" ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1869" ], [ "Saint Lucia", "lc", "1758" ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1784" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1721" ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1 ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1868" ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90","(999) 999 9999" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1649" ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1340" ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1 ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1 ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1 ] ];
                
                var elements = document.querySelectorAll(".phone-country");
                if(elements.length == 0 ) {return false;}

                
                const CL = {
                    element:"country",
                    container: "country-container",
                    selected: "country-selected",
                    flag: "country-flag",
                    arrow: "country-arrow",
                    input: "country-input",
                    list: "country-list",
                    listItem: "country-list-item",
                    open: "country-open"
                }

                ths.setCountries(allCountries);

                elements.forEach(function(el) {
                    ths.createInput(el, CL);
                });

                ths.initDropdownHandler(CL);
                ths.clickDropdownItem(CL);
                ths.initInputChange(CL);

            },
            setCountries: function(countries) {
                var ths = this;
                for (var i = 0; i < countries.length; i++) {
                    var c = countries[i];
                    ths.countries[i] = {
                        name: c[0].trim(),
                        dial: c[2].trim(),
                        flag: c[1].trim(),
                        mask: (c[3] ? c[3] : "")
                    };
                    
                    ths.dialCodes.push(c[2]);
                    ths.flagCodes.push(c[1]);
                }
            },
            countries: [],
            dialCodes: [],
            flagCodes: [],
            prevDialCode: "",
            createInput: function(input, cl) {
                var ths = this,
                listPrefer = "";

                var countryInput = document.createElement("DIV");
                countryInput.className=cl.element;
                var countryContainer = document.createElement("DIV");
                countryContainer.className=cl.container;
                var countrySelected = document.createElement("DIV");
                countrySelected.className=cl.selected;
                var countryFlag = document.createElement("SPAN");
                countryFlag.className=cl.flag;
                var countryArrow = document.createElement("SPAN");
                countryArrow.className=cl.arrow;

                var countryList = document.createElement("UL");
                countryList.className=cl.list;

                input.className += " " + cl.input;
                var elParent = input.parentElement;
                if(input.dataset.prefer) {
                    listPrefer = ths.getPrefer(input.dataset.prefer,cl);
                }
                var listCountry = listPrefer + ths.createCountryList(ths.countries, cl);

                countrySelected.append(countryFlag); 
                countrySelected.append(countryArrow); 
                countryContainer.append(countrySelected); 
                countryContainer.append(countryList); 
                countryInput.append(countryContainer);
                countryList.innerHTML = listCountry;
                countryInput.append(countryContainer);
                countryInput.append(input);

                elParent.append(countryInput);

            },
            createCountryList: function(countries,cl) {
                var ths = this;
                var tmp = "";
                for (var i = 0; i < countries.length; i++) {
                    var c = countries[i];
                    tmp += "<li class='" + cl.listItem  + "' data-dial='" + c.dial + "' data-flag='" + c.flag + "'>";
                    tmp += "<div class='country-list-item-flag'><div class='" + cl.flag + " " +  c.flag + "'></div></div>";
                    tmp += "<span class='country-list-item-name'>" + c.name + "</span>";
                    tmp += "<span class='country-list-item-code'>+" + c.dial + "</span>";
                    tmp += "</li>";
                }

                return tmp;
            },
            initDropdownHandler: function(cl) {
                var ths = this;
                $("." + cl.selected).on("click" , function(e) {
                    var element = APP.findClosest(this, "." + cl.element);
                    if(APP.hasClass(element, cl.open)) {
                        element.classList.remove(cl.open);
                        //list.classList.remove("show");
                    } else {
                        element.classList.add(cl.open);
                        //list.classList.add("show");
                    }
                    return false;
                });

                $(document).on("keydown", function(e) {
                    var kyCode = e.which || e.keyCode;
                    if(kyCode === 27) {
                        ths.closeDropdownAll(cl);
                    }
                });

                $(document).on("click", function(e) {
                    var el = e.target;
                    var isClosest = el.closest("." + cl.element);
                    if(!isClosest) {
                        ths.closeDropdownAll(cl);
                    }

                });
            },
            initInputChange: function(cl) {
                var ths = this;
                var inputs = document.querySelectorAll("." + cl.input);
                for(var i=0;i<inputs.length;i++) {
                    inputs[i].addEventListener("input", function(e) {
                        var elInput = this;
                        e.preventDefault();
                        var element = elInput.closest("." + cl.element),
                            elFlag = element.getElementsByClassName(cl.flag)[0],
                            dial = ths.getDialCode(elInput.value);

                            dial = dial.substring(1);
                            var flag = ths.getFlagFromDial(ths.countries,dial);
                        
                        ths.setFlag(elFlag,flag);
                        ths.setInputValue(elInput,dial);
                        return false;
                    });
                }
            },
            clickDropdownItem: function(cl) {
                var ths = this;
                var listItems = document.querySelectorAll("." + cl.listItem);
                for(var i=0;i<listItems.length;i++) {
                    listItems[i].addEventListener("click", function(e) {
                        e.preventDefault();
                        ths.setListItem(this, cl);
                        return false;
                    });
                }
            },
            setFlag: function(el, flag) {
                var clFlags = el.className.split(" ");
                el.className = clFlags[0] + " " + flag;
            },
            setInputValue: function(el,dial) {
                var ths = this;
                var inputVal = el.value,
                    newNumber,
                    newDialCode = "+" + dial;
                    
                if (inputVal.charAt(0) == "+") {
                    var prevDialCode = ths.prevDialCode;
                    if(prevDialCode) {
                        prevDialCode = (prevDialCode == "+") ? "" : prevDialCode;
                        newNumber = inputVal.replace(prevDialCode, newDialCode);
                    } else if(inputVal.length > 4) {
                        newNumber = inputVal;
                    } else  {
                        newNumber = newDialCode;
                    }
                } else {
                    if(inputVal) {
                        newNumber = newDialCode + inputVal;
                    } else {
                        newNumber = newDialCode;
                    }
                }
                var mask = ths.getMaskFromDial(ths.countries,dial);
                ths.setMaskInput(el,newDialCode,mask);
                newNumber = (newNumber == "+") ? "" : newNumber;
                el.value = newNumber;
                ths.prevDialCode = newDialCode;

            },
            setMaskInput: function(el,dial,mask) {
                if(mask) {
                    var m = dial + mask;
					var l = m.length;
					console.log(l);
					$(el).setAttr("minlength",l);
                    $(el).inputmask(m);
                } else {
					$(el).removeAttr("minlength");
                    $(el).inputmask('remove');
                }
            },
            getMaskFromDial: function(countries, dial) {
                var mask = "";
                for (var i = 0; i < countries.length; i++) {
                    var c = countries[i];
                    if(c.dial === dial) {
                        mask = c.mask;
                    }
                }
                return mask;
            },
            getFlagFromDial: function(countries, dial) {
                var flag = "";
                for (var i = 0; i < countries.length; i++) {
                    var c = countries[i];
                    if(c.dial === dial) {
                        flag = c.flag;
                    }
                }
                return flag;
            },
            getPrefer: function(prefer,cl) {
                var ths = this,
                    preferCountry = []
                var arrPref = prefer.split(",");
                var countries = ths.countries;
                var k = 0;
                for (var i = 0; i < countries.length; i++) {
                    var c = countries[i];
                    if(arrPref.indexOf(c.flag) !== -1) {
                        preferCountry[k] = c;
                        k++;
                    }
                }
                return ths.createCountryList(preferCountry,cl);

            },
            getDialCode: function(number) {
                var ths = this;
                var dialCode = "";
                if (number.charAt(0) == "+") {
                    var numericChars = "",
                    dialLength = 999;
                    for (var i = 0; i < number.length; i++) {
                        var c = number.charAt(i);
                        if ($.isNumeric(c)) {
                            numericChars += c;
                            if (ths.dialCodes[numericChars]) {
                                dialCode = number.substr(0, i+1);
                                dialLength = dialCode.length; 
                            }
                            if (numericChars.length === dialLength) {
                                break;
                            }
                        }
                    }
                }
                return dialCode;
            },
            setListItem: function(el, cl) {
                var ths = this;
                var element = el.closest("." + cl.element),
                    dial = el.dataset.dial,
                    flag = el.dataset.flag,
                    elFlag = element.getElementsByClassName(cl.flag)[0],
                    elInput = element.getElementsByClassName(cl.input)[0];
                    
                    ths.setFlag(elFlag,flag);
                    ths.setInputValue(elInput,dial);
                    elInput.focus();
                    ths.closeDropdownAll(cl);
            },
            closeDropdownAll: function(cl) {
                var elements = document.querySelectorAll( "." + cl.element);
                if(elements.length == 0) {return false;}
                for(var i=0;i<elements.length;i++) {
                    elements[i].classList.remove(cl.open);
                }
            }
        },
		phoneCountry = function() {
			var phones = document.querySelectorAll(".phone-country"),
			phoneARR = [];
			if(phones.length ===0) {
				return false;
			}
			phones.forEach(function(phone) {
				$(phone).intlTelInput({
					autoPlaceholder: 'on',
					formatOnDisplay: true,
					nationalMode: false,
					preferredCountries: ['AE','SA','IN','PK','GB','US','DE','TR'],
					placeholderNumberType: "MOBILE",
					utilsScript: "theme/assets/plugins/intlTelInput/utils.js"

				});
				
				$(phone).val("971");
			});
            
			
			$(phones).on("countrychange", function(e,countryData) {
				var input = this;
				$(input).val("");
				var code = countryData.dialCode;
				$(input).val(code);
				var number = $(input).closest("form").find("[name=phonenumber]").val();
				$(input).closest("form").find("[name=phone]").val(code + number);
			});
			
			$("[name=phonenumber]").on('change keydown keypress keyup mousedown click mouseup', function() {
				var number = this.value,
					code = $(this).closest("form").find("[name=phonecode]").val();
				$(this).closest("form").find("[name=phone]").val(code + number);
			});
			
		},
        initScroll = function() {
            var elements = APP.els(".scrollable");
            if (elements.length === 0) {
                return false;
            }
            var ps = [];
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                element.style.width = element.offsetWidth + "px";
                element.style.height = element.offsetHeight + "px";
                ps[i] = new PerfectScrollbar(element);
            }

            window.addEventListener(
                "resize",
                function() {
                    for (var i = 0; i < elements.length; i++) {
                        var element = elements[i];
                        element.removeAttribute("style");
                        element.style.width = element.offsetWidth + "px";
                        element.style.height = element.offsetHeight + "px";
                        ps[i].update();
                    }
                },
                true
            );
        },
        fancy = {
            init: function p() {
                if ($.fn.fancybox()) {
                    var element = document.querySelectorAll(".fancybox");
                    if (element !== null || element.length > 0) {
                        for (var i = 0; i < element.length; i++) {
                            var el = element[i];
                            $(el).fancybox();
                        }
                        $("[data-fancybox]").fancybox({
                            afterShow: function(instance, current) {},
                        });
                    }
                }
            },
            open: function(el, type) {
                type = type !== "" ? type : "inline";
                $.fancybox.open({
                    src: el,
                    type: type,
                    opts: {
                        transitionDuration: 2000,
                        protect: false,
                        keyboard: false,
                        touch: false,
                        smallBtn: true,
                        clickSlide: true,
                        beforeLoad: function(instance, current) {
                            instance.showLoading();
                            instance.$refs.toolbar.show();
                        },
                        afterClose: function(instance, current) {
                            return false;
                        },
                    },
                });
            },
        },
        parallax = function() {
            if (window.innerWidth >= breakpoints.lg) {
                var elements = document.getElementsByClassName("parallax");

                if (elements.length < 1) {
                    return false;
                }
                for (var i = 0; i < elements.length; i++) {
                    var wBottomOffset = st + window.innerHeight,
                        itemTop = parseInt(elements[i].offsetTop),
                        itemBottom = parseInt(
                            itemTop + elements[i].offsetHeight
                        );
                    if (wBottomOffset >= itemBottom) {
                        var el = elements[i].querySelector(".parallax-item");
                        var valY = (wBottomOffset - itemBottom * 2) * 0.00725;
                        el.style.transform = "translate(0,-" + valY + "px)";
                    }
                }
            }
        },
        formValidation = function(form, callback, opt) {
            var newObj = {},
                defaultOpt = {
                    errorPlacement: function(error, element) {
                        error.addClass("help-block");

                        if (element.prop("type") === "checkbox") {
                            error.insertAfter(element.parent("label"));
                        } else {
                            error.insertAfter(
                                element.closest(".input, .select, .textarea")
                            );
                        }
                    },
                    highlight: function(element, errorClass, validClass) {
                        $(element)
                            .parents(".form-group")
                            .addClass("has-error")
                            .removeClass("has-success");
                    },
                    unhighlight: function(element, errorClass, validClass) {
                        $(element)
                            .parents(".form-group")
                            .addClass("has-success")
                            .removeClass("has-error");
                    },
                };
            if (opt !== null) {
                newObj = $.extend({}, defaultOpt, opt);
            } else {
                newObj = MT.addObj(defaultOpt, newObj);
            }
            $(form).validate({
                ignore: ":hidden:not(:checkbox)",
                errorPlacement: function(error, element) {
                    error.addClass("help-block");
                    if (element.prop("type") === "checkbox") {
                        error.insertAfter(element.parent("label"));
                    } else {
                        element.closest(".form-group").append(error);
                    }
                },
                highlight: function(element, errorClass, validClass) {
                    $(element)
                        .parents(".form-group")
                        .addClass("has-error")
                        .removeClass("has-success");
                },
                unhighlight: function(element, errorClass, validClass) {
                    $(element)
                        .parents(".form-group")
                        .addClass("has-success")
                        .removeClass("has-error");
                },
                submitHandler: callback,
                showErrors: function(errorMap, errorList) {
                    var errors = this.numberOfInvalids(); // <- NUMBER OF INVALIDS
                    //console.log(errorList);
                    this.defaultShowErrors(); // <- ENABLE default MESSAGES
                },
            });
        },
        cookieAccept = function() {
            var _t = this;
            var cookieArea = document.querySelector(".cookie"),
                cookieBtn = document.querySelector(".btn-cookie"),
                alias = "flkrt__cca";
            if (!cookieArea) {
                return false;
            }
            var cookieAgreementAccepted = localStorage.getItem(
                BASE_URL + alias
            );
            if (cookieAgreementAccepted) {
                cookieArea.classList.add("d-none");
            } else {
                cookieArea.classList.remove("d-none");
            }
            $(cookieBtn).on("click", function() {
                localStorage.setItem(BASE_URL + alias, true);
                cookieArea.classList.add("d-none");
            });
        },
        mask = function() {
            var element = document.querySelectorAll(".mask"),
                maskARRAY = {
                    date: "99.99.9999",
                    phone: "99 (999) 999 9999",
					phonenumber: "(999) 999 9999",
                    card: "9999 9999 9999 9999",
                };
            if (element.length > 0) {
                for (var i = 0; i < element.length; i++) {
                    var el = element[i],
                        maskType = el.getAttribute("data-mask");
                    $(el).inputmask(maskARRAY[maskType]);
                }
            }
        },
        lazy = function() {
            var lazyElements = [].slice.call(
                document.querySelectorAll(".lazy")
            );
            var loadVideo = function(element) {
                for (var source in element.children) {
                    var videoSource = element.children[source];
                    if (
                        typeof videoSource.tagName === "string" &&
                        videoSource.tagName === "SOURCE"
                    ) {
                        videoSource.src = videoSource.dataset.src;
                    }
                }
                element.load();
            };
            if ("IntersectionObserver" in window) {
                var lazyImageObserver = new IntersectionObserver(function(
                    entries,
                    observer
                ) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            var lazyElement = entry.target;
                            if (APP.hasClass(lazyElement, "loading")) {
                                return false;
                            }
                            if (lazyElement.tagName == "VIDEO") {
                                loadVideo(lazyElement);
                            } else {
                                lazyElement.src = lazyElement.dataset.src;
                            }
                            setTimeout(function() {
                                APP.addClass(lazyElement,"loading");
                                var picture = APP.findClosest(lazyElement,".picture");
                                if(picture) {
                                    APP.addClass(picture,"loading");
                                }
                            }, 150);
                            lazyImageObserver.unobserve(lazyElement);
                        }
                    });
                });
                lazyElements.forEach(function(lazyElement) {
                    lazyImageObserver.observe(lazyElement);
                });
            } else {
                lazyElements.forEach(function(lazyElement) {
                    if (lazyElement.tagName == "VIDEO") {
                        loadVideo(lazyElement);
                    } else {
                        lazyElement.src = lazyElement.dataset.src;
                    }
                });
            }
        },
        browserSpecs = function() {
            var ua = navigator.userAgent,
                tem,
                M =
                ua.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                ) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return { name: "IE", version: tem[1] || "" };
            }
            if (M[1] === "Chrome") {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null)
                    return {
                        name: tem[1].replace("OPR", "Opera"),
                        version: tem[2],
                    };
            }
            M = M[2] ?
                [M[1], M[2]] :
                [navigator.appName, navigator.appVersion, "-?"];
            if ((tem = ua.match(/version\/(\d+)/i)) != null)
                M.splice(1, 1, tem[1]);
            return { name: M[0], version: M[1] };
        },
        isDevice = function() {
            var check = false,
                userClass = "";

            md = new MobileDetect(window.navigator.userAgent);    
            

            if (md.mobile() && !md.tablet()) {
                userClass += "mobile ";
            }
            if (md.tablet()) {
                userClass += "tablet ";
            }
            if (md.is('iPhone')) {
                userClass += "iphone ";
            }
            if (md.os()) {
                userClass += "os ";
            }
            if (!md.mobile() && !md.tablet())  {
                userClass = "desktop ";
            }
            var browserARR = browserSpecs(),
                bName = browserARR.name.toLowerCase(),
                bVersion = browserARR.version;
            if (bName === "msie" && browserARR.version < 11) {
                bVersion = "old";
            }
            userClass += bName + " " + bName + "_" + bVersion;
            APP.addClass(html, userClass.trim());
            //document.documentElement.className += " " + userClass.trim();
        };

    return {
        init: function() {
            
            isDevice();
            stickyHeader();
            menu();
            lazy();

            mainSlider();
            mainProjectSlider();
            mainAboutSlider();
            mainMilestoneSlider();
            mainAddWorthSlider();
            projectList();
            productDetailHero();
            projectDetailGallery();
            projectOpportunity();
            projectDetailStance();
            projectDetailRoom();
            reviewSlider();
           
            mouseScroll();
            toggleSearch();
            mask();
            parallax();
            fancy.init();
            initScroll();
            selectCustom();
            jsCounter();
            jsFilterTab();
            autocomplete();
			
			/*phoneCountry();*/
			
			country.init();

           
            jsMagazine();

            AOS.init();

            cookieAccept();

            var forms = document.querySelectorAll("FORM");
            if (forms.length > 0) {
                for (var i = 0; i < forms.length; i++) {
                    formValidation(forms[i], function(form) {
                        forms[i].submit();
                    });
                }
            }
			
			$('body').on('keydown', '.fullname', function(e) {
				if (e.which === 32 &&  e.target.selectionStart === 0) {
				  return false;
				}  
			  });

            window.addEventListener("scroll", function(e) {
                st =
                    window.scrollY ||
                    window.scrollTop ||
                    document.getElementsByTagName("html")[0].scrollTop;
                parallax();
            });

            var magazine = document.querySelector(".block-magazine");
            if(magazine) {
                jsFilter(magazine);
            }
			
            var sc = document.querySelector(".sc");
            if(sc) {
				var sh = $(".project-hero__body").height(),
					msh = $(".project-hero").height();
                var wh = window.innerWidth + " - " + window.innerHeight + " - " + html.className + " - " + sh + " - " + msh; 
                sc.innerHTML = wh;

                window.addEventListener("scroll", function(e) {
					var sh = $(".main-slider__main").find(".swiper-slide").height();
                var wh = window.innerWidth + " - " + window.innerHeight + " - " + html.className + " - " + sh; 
                    sc.innerHTML = wh;
                });
            }
			

            window.addEventListener("orientationchange", function() {
                $(window).trigger('resize');
              }, false);

            
        },
        el: function(q) {
            var el;
            if (q === document) {
                return document;
            }
            if (!!(q && q.nodeType === 1)) {
                return q;
            }
            if ((el = document.querySelector(q))) {
                return el;
            } else if ((el = document.getElementsByTagName(q))) {
                return el[0];
            } else if ((el = document.getElementsByClassName(q))) {
                return el[0];
            } else {
                return null;
            }
        },
        els: function(q) {
            var el;
            if (q === document) {
                return document;
            }
            if (!!(q && q.nodeType === 1)) {
                return q;
            }
            if ((el = document.querySelectorAll(q))) {
                return el;
            } else {
                return null;
            }
        },
        getID: function(q) {
            if (!!(q && q.nodeType === 1)) {
                return q;
            }
            return document.getElementById(q);
        },
        find: function(parent, query) {
            parent = APP.el(parent);
            if (parent) {
                return parent.querySelector(query);
            }
        },
        findAll: function(parent, query) {
            parent = APP.el(parent);
            if (parent) {
                return parent.querySelectorAll(query);
            }
        },
        trim: function(string) {
            return string.trim();
        },
        findClosest: function(el, cls) {
            var matchesFn;

            // find vendor prefix
            [
                "matches",
                "webkitMatchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
            ].some(function(fn) {
                if (typeof document.body[fn] == "function") {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            var parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](cls)) {
                    return parent;
                }
                el = parent;
            }

            return null;
        },
        hasClass: function(el, className) {
            if (!el) {
                return;
            }
            return el.classList ?
                el.classList.contains(className) :
                new RegExp(" " + className + " ").test(
                    " " + el.className + " "
                );
        },
        addClass: function(el, className) {
            if (!el || typeof className === "undefined") {
                return;
            }
            var classNames = className.split(" ");

            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    if (classNames[i] && classNames[i].length > 0) {
                        el.classList.add(APP.trim(classNames[i]));
                    }
                }
            } else if (!APP.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className += " " + APP.trim(classNames[x]);
                }
            }
        },
		isNumber: function(evt) {
			var theEvent = evt || window.event;

			// Handle paste
			if (theEvent.type === 'paste') {
				key = event.clipboardData.getData('text/plain');
			} else {
				// Handle key press
				var key = theEvent.keyCode || theEvent.which;
				key = String.fromCharCode(key);
			}
			var regex = /[0-9]|\./;
			if (!regex.test(key)) {
				theEvent.returnValue = false;
				if (theEvent.preventDefault) theEvent.preventDefault();
			}
		},
        removeClass: function(el, className) {
            if (!el || typeof className === "undefined") {
                return;
            }
            var classNames = className.split(" ");
            if (el.classList) {
                for (var i = 0; i < classNames.length; i++) {
                    el.classList.remove(APP.trim(classNames[i]));
                }
            } else if (APP.hasClass(el, className)) {
                for (var x = 0; x < classNames.length; x++) {
                    el.className = el.className.replace(
                        new RegExp(
                            "\\b" + APP.trim(classNames[x]) + "\\b",
                            "g"
                        ),
                        ""
                    );
                }
            }
        },
        getIndex: function(node) {
            var index = 0;
            while ((node = node.previousElementSibling)) {
                index++;
            }
            return index;
        },
        isTouch: function() {
            return !!('ontouchstart' in window);
        },
        formatMoney: function(str) {
            var price = str
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            return price;
        },
        formatNumberFromMoney: function(str) {
            var price = str.replace(",", "");
            return parseFloat(price);
        },
        getSpace: function() {
            var ww = parseInt(window.innerWidth),
                header = document.getElementById("header"),
                container = header.querySelector(".container"),
                space = (ww - parseInt(container.offsetWidth)) / 2;
            return space;
        },
        setAttr: function(el, attrs) {
            for (var key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        },
        addObj: function p(defaultObj, newObj) {
            for (var prop in newObj) {
                defaultObj[prop] = newObj[prop];
            }
            return defaultObj;
        },
        calcVH: function(el,ignore) {
            var vH = window.innerHeight,
            ingoreH = 0;
            if(ignore) {
                var elIgnore = document.querySelector(ignore);
                ingoreH = elIgnore.offsetHeight;
            }
            if (el) {
                el.setAttribute("style", "height:" + (vH - ingoreH) + "px;");
            }
        },
        map: function(loc) {
            projectMap(loc);
        },
        fancy: {
            open: function(el, type) {
                fancy.open(el, type);
            },
        },
    };
})();

document.addEventListener("DOMContentLoaded", function() {
    APP.init();
});