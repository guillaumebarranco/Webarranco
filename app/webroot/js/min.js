$(document).ready(function(){function a(b,c,d,e){if(0==c)var f;lelien=document.getElementById("warp"),d<b.length?(f=lelien.innerHTML.substring(0,lelien.innerHTML.length-1),f+=b.charAt(d)+"_",lelien.innerHTML=f):(e++,1>e&&(lelien.innerHTML="",d=-1)),d++,setTimeout(function(){a(b,1,d,e)},80)}if(annyang){var b={home:function(){window.location.href=SITE_URL+"/home"}};annyang.addCommands(b),annyang.start()}0!==$(".page-about").length?$(".link-about").addClass("active"):0!==$(".page-home").length?$(".link-home").addClass("active"):0!==$(".page-projects").length?$(".link-projects").addClass("active"):0!==$(".page-skills").length?$(".link-skills").addClass("active"):0!==$(".page-contact").length?$(".link-contact").addClass("active"):0!==$(".page-blog").length&&$(".link-blog").addClass("active"),0!=$(".page-about").length&&$.ajax({type:"GET",url:SITE_URL+":3000/PSN/guillaumanga",success:function(a){console.log(a);var b=a.trophySummary.earnedTrophies;$(".bronze .trophies").append(b.bronze),$(".silver .trophies").append(b.silver),$(".gold .trophies").append(b.gold),$(".platinum .trophies").append(b.platinum)},error:function(){console.log("error")}}),$(window).off("scroll"),$(window).on("scroll",function(){$(".graphic-bar-html5").width(180),setTimeout(function(){$(".graphic-bar-css3").width(180)},200),setTimeout(function(){$(".graphic-bar-js").width(150)},400),setTimeout(function(){$(".graphic-bar-php").width(150)},600),setTimeout(function(){$(".graphic-bar-sql").width(130)},800),setTimeout(function(){$(".graphic-bar-curieux").width(220)},1e3)});var c=0,d=0,e=0;$(document).keydown(function(b){0==d?d=74==b.which?1:0:1==d?d=69==b.which?2:0:2==d?d=84==b.which?3:0:3==d?d=52==b.which?4:0:4==d?d=65==b.which?5:0:5==d?d=73==b.which?6:0:6==d?d=77==b.which?7:0:7==d&&(69==b.which?($(".bloc").css("background","#EF597B"),$(".bloc").css("color","black")):d=0),1===c?40==b.which?c=2:(c=0,$(".cheat").css("background","#F4FA58"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F"),$(".cheat").css("color","black")):2===c?39==b.which?c=3:(c=0,$(".cheat").css("background","#F4FA58"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F"),$(".cheat").css("color","black")):3===c?37==b.which?c=4:(c=0,$(".cheat").css("background","#F4FA58"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F"),$(".cheat").css("color","black")):4===c?65==b.which?c=5:(c=0,$(".cheat").css("background","#F4FA58"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F"),$(".cheat").css("color","black")):5===c?66==b.which?c=6:(c=0,$(".cheat").css("background","#F4FA58"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F"),$(".cheat").css("color","black")):38==b.which?c=1:(c=0,$(".cheat").css("background","#F4FA58"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F"),$(".cheat").css("color","black")),1===c?$(".cheat-1").css("background","black"):2===c?$(".cheat-2").css("background","black"):3===c?$(".cheat-3").css("background","black"):4===c?$(".cheat-4").css("background","black"):5===c?($(".cheat-a").css("background","black"),$(".cheat-a").css("color","#FAFA58")):6===c&&($("body").append('<div class="warp-zone"><h1 id="warp"></h1></div>'),$("html, body").css("overflow","hidden"),$(".warp-zone").width($(window).width()),$(".warp-zone").height($(window).height()),$(".warp-zone").fadeIn(800),$(".warp-zone").append('<video class="warpzonevideo" src="img/warpzone.mp4" muted autoplay="true" />'),$("html, body").css("overflow","hidden"),setTimeout(function(){$("html, body").css("overflow","auto"),$(".warpzonevideo").remove(),a("~ Vous venez d'entrer dans la Warp Zone ~",0,0,0),setTimeout(function(){$(".warp-zone").append('<img src="img/mask.png" class="theclip"/>'),setTimeout(function(){$(".warp-zone").append('<a href="#" class="leave_warp">Quitter la Warp Zone</a>'),e=1;var b=0,c=0,d=0,f=0,g=0,h=0,i=0,j=0;$(document).keydown(function(k){console.log(k.which),1===e&&(0===b?0==c?c=77==k.which?1:0:1==c?c=65==k.which?2:0:2==c?c=74==k.which?3:0:3==c?c=79==k.which?4:0:4==c?c=82==k.which?5:0:5==c&&(65==k.which?(b=1,$("#warp").empty(),a("Bien joué ! 1ère réponse trouvée !",0,0,0),setTimeout(function(){$(".theclip").attr("src","img/jo.jpg")},3e3)):c=0):1===b&&0===d?0==f?f=74==k.which?1:0:1==f?f=79==k.which?2:0:2==f?f=75==k.which?3:0:3==f?f=69==k.which?4:0:4==f&&(82==k.which?(d=1,$("#warp").empty(),a("Bien joué ! 2ème réponse trouvée !",0,0,0),setTimeout(function(){$(".theclip").attr("src","img/smb.jpg")},3e3)):f=0):1===d&&0===g?0==h?h=77==k.which?1:0:1==h?h=69==k.which?2:0:2==h?h=65==k.which?3:0:3==h?h=84==k.which?4:0:4==h?h=66==k.which?5:0:5==h?h=79==k.which?6:0:6==h&&(89==k.which?(g=1,$("#warp").empty(),a("Bien joué ! 3ème réponse trouvée !",0,0,0),setTimeout(function(){$(".theclip").attr("src","img/glitch.jpg")},3e3)):h=0):1===g&&0===i&&(0==j?j=77==k.which?1:0:1==j?j=73==k.which?2:0:2==j?j=83==k.which?3:0:3==j?j=83==k.which?4:0:4==j?j=73==k.which?5:0:5==j?j=78==k.which?6:0:6==j?j=71==k.which?7:0:7==j?j=78==k.which?8:0:8==j&&(79==k.which?(i=1,$("#warp").empty(),a("Bien joué ! 4ème réponse trouvée !",0,0,0),setTimeout(function(){$(".theclip").attr("src","img/koko.jpg")},3e3)):h=0)))})},500)},3500)},3e3),$(".cheat-b").css("background","black"),$(".cheat-b").css("color","#FAFA58"),$(".cheat-a").css("color","#FAFA58"),setTimeout(function(){$(".cheat").css("background","#F4FA58"),$(".cheat").css("color","black"),$(".cheat-a").css("background","#2E64FE"),$(".cheat-b").css("background","#04B45F")},500))}),$(document).on("click",".leave_warp",function(b){b.preventDefault(),$("#warp").empty(),a("Au revoir niark niark",0,0,0),setTimeout(function(){$(".warp-zone").fadeOut(500),setTimeout(function(){$(".warp-zone").remove(),$("html,body").css("overflow","initial"),$("html").css("overflow-x","hidden")},500)},2e3)});var f=150,g=f+70,h=0;$(".bloc-about-film").css("left",f),$(".bloc-about-musique").css("left",2*f),$(".bloc-about-jeux").css("left",3*f);for(var i=0;i<$(".bloc-about-manga").length;i++)i*g+g<$(".w").height()?($(".bloc-about-manga:eq("+i+")").css("top",i*g+"px"),$(".bloc-about-musique:eq("+i+")").css("top",i*g+"px")):($(".bloc-about-manga:eq("+i+")").css("left",4*f+"px"),$(".bloc-about-manga:eq("+i+")").css("top",h*g+"px"),h+=1,$(".bloc-about-musique:eq("+i+")").css("left",4*f+"px"),$(".bloc-about-musique:eq("+i+")").css("top",h*g+"px"),h+=1),$(".bloc-about-manga:eq("+i+")").css("background-color","#8"+i+"2"),$(".bloc-about-musique:eq("+i+")").css("background-color","#8"+i+"2");for(var j=0;j<$(".bloc-about-film").length;j++)105+j*g+g<$(".w").height()?($(".bloc-about-film:eq("+j+")").css("top",105+j*g+"px"),$(".bloc-about-jeux:eq("+j+")").css("top",105+j*g+"px")):($(".bloc-about-film:eq("+j+")").css("left",4*f+"px"),$(".bloc-about-film:eq("+j+")").css("top",h*g+"px"),h+=1,$(".bloc-about-jeux:eq("+j+")").css("left",4*f+"px"),$(".bloc-about-jeux:eq("+j+")").css("top",h*g+"px"),h+=1),$(".bloc-about-film:eq("+j+")").css("background-color","#8"+(j+1)+"2"),$(".bloc-about-jeux:eq("+j+")").css("background-color","#8"+(j+1)+"2");$(".bloc-about").addClass("bloc-about-selected"),$(".type-about a").on("click",function(a){a.preventDefault();var b=$(this).attr("data-type");"all"===b?($(".bloc-about").removeClass("bloc-about-selected"),$(".bloc-about").addClass("bloc-about-selected"),$(".separator").css("opacity","1")):($(".bloc-about").removeClass("bloc-about-selected"),$(".bloc-about-"+b).addClass("bloc-about-selected"),$(".separator").css("opacity","0.3"))});var k,l="";$(".bloc-about.bloc-about-selected").hover(function(){""!==l?$(".bloc-about[data-name="+l+"]").offset().top>$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left==$(this).offset().left?k="y_moins_150":$(".bloc-about[data-name="+l+"]").offset().top<$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left==$(this).offset().left?k="y_plus_150":$(".bloc-about[data-name="+l+"]").offset().top==$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left>$(this).offset().left?k="x_moins_150":$(".bloc-about[data-name="+l+"]").offset().top==$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left<$(this).offset().left?k="x_plus_150":$(".bloc-about[data-name="+l+"]").offset().top>$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left<$(this).offset().left?k="xy_moins_150":$(".bloc-about[data-name="+l+"]").offset().top<$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left<$(this).offset().left?k="xy_plus_150":$(".bloc-about[data-name="+l+"]").offset().top>$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left>$(this).offset().left?k="yx_plus_150":$(".bloc-about[data-name="+l+"]").offset().top<$(this).offset().top&&$(".bloc-about[data-name="+l+"]").offset().left>$(this).offset().left&&(k="yx_moins_150"):k="y_moins_150",$(this).find("div").addClass(k)},function(){l=$(this).attr("data-name"),$(this).find("div").removeClass(k)});var m=0;$(".menu_mobile").find(".traits_menu").append("<span></span><span></span><span></span>"),$(".menu_mobile ul").hide(),$(".menu_mobile").click(function(){$(this).find(".traits_menu").empty(),0===m?($(this).find(".traits_menu").append("X"),$(".menu_mobile ul").slideDown(),$(this).css("height","auto"),m=1):($(this).find(".traits_menu").append("<span></span><span></span><span></span>"),$(".menu_mobile ul").slideUp(),$(this).css("height","auto"),m=0)}),$(".launch").click(function(){var a=$("html, body").offset().top+$("html, body").height();$("html, body").stop().animate({scrollTop:a},1e3)}),$(".form_contact").on("submit",function(a){a.preventDefault();var b=$(this).find("input[name=name]").val(),c=$(this).find("input[name=email]").val(),d=$(this).find("textarea[name=message]").val();$.ajax({type:"POST",url:"/contact/sendMessage",data:{name:b,email:c,message:d},success:function(a){console.log(a),$(".form_contact").prepend('<h3 style="color:green;">Votre message a été envoyé avec succès !</h3>')},error:function(){$(".form_contact").prepend('<h3 style="color:green;">Votre message a été envoyé avec succès !</h3>')}})});$("a, button, input, p").click(function(a){a.stopPropagation()}),0!=$(".page-about").length&&$.ajax({type:"GET",url:"http://www.webarranco:3000/PSN/guillaumanga",success:function(a){console.log(a)},error:function(){console.log("error")}})}),function(a){"use strict";function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define(g):a.classie=g}(window),function(){[].slice.call(document.querySelectorAll(".cbutton")).forEach(function(a){a.addEventListener("mouseenter",function(b){classie.add(a,"cbutton--click")}),a.addEventListener("mouseleave",function(b){classie.remove(a,"cbutton--click")})})}(),function(){function a(){f=window.innerWidth,g=130,l={x:0,y:g},h=document.getElementById("large-header"),h.style.height=g+"px",i=document.getElementById("demo-canvas"),i.width=f,i.height=g,j=i.getContext("2d"),k=[];for(var a=0;.5*f>a;a++){var b=new e;k.push(b)}d()}function b(){window.addEventListener("resize",c)}function c(){f=window.innerWidth,g=130,h.style.height=g+"px",i.width=f,i.height=g}function d(){if(m){j.clearRect(0,0,f,g);for(var a in k)k[a].draw()}requestAnimationFrame(d)}function e(){function a(){b.pos.x=Math.random()*f,b.pos.y=g+100*Math.random(),b.alpha=.1+.3*Math.random(),b.scale=.1+.3*Math.random(),b.velocity=Math.random()}var b=this;!function(){b.pos={},a()}(),this.draw=function(){b.alpha<=0&&a(),b.pos.y-=b.velocity,b.alpha-=5e-4,j.beginPath(),j.arc(b.pos.x,b.pos.y,10*b.scale,0,2*Math.PI,!1),j.fillStyle="rgba(255,255,255,"+b.alpha+")",j.fill()}}var f,g,h,i,j,k,l,m=!0;a(),b()}(),function(){var a=jQuery,b=function(){function a(){this.fadeDuration=500,this.fitImagesInViewport=!0,this.resizeDuration=700,this.positionFromTop=50,this.showImageNumberLabel=!0,this.alwaysShowNavOnTouchDevices=!1,this.wrapAround=!1}return a.prototype.albumLabel=function(a,b){return"Image "+a+" of "+b},a}(),c=function(){function b(a){this.options=a,this.album=[],this.currentImageIndex=void 0,this.init()}return b.prototype.init=function(){this.enable(),this.build()},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){var b=this;a("<div id='lightboxOverlay' class='lightboxOverlay'></div><div id='lightbox' class='lightbox'><div class='lb-outerContainer'><div class='lb-container'><img class='lb-image' src='' /><div class='lb-nav'><a class='lb-prev' href='' ></a><a class='lb-next' href='' ></a></div><div class='lb-loader'><a class='lb-cancel'></a></div></div></div><div class='lb-dataContainer'><div class='lb-data'><div class='lb-details'><span class='lb-caption'></span><span class='lb-number'></span></div><div class='lb-closeContainer'><a class='lb-close'></a></div></div></div></div>").appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.containerTopPadding=parseInt(this.$container.css("padding-top"),10),this.containerRightPadding=parseInt(this.$container.css("padding-right"),10),this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10),this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10),this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return b.changeImage(0===b.currentImageIndex?b.album.length-1:b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.changeImage(b.currentImageIndex===b.album.length-1?0:b.currentImageIndex+1),!1}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return b.end(),!1})},b.prototype.start=function(b){function c(a){d.album.push({link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),a("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this;this.disableKeyboardNav();var d=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var e=new Image;e.onload=function(){var f,g,h,i,j,k,l;d.attr("src",c.album[b].link),f=a(e),d.width(e.width),d.height(e.height),c.options.fitImagesInViewport&&(l=a(window).width(),k=a(window).height(),j=l-c.containerLeftPadding-c.containerRightPadding-20,i=k-c.containerTopPadding-c.containerBottomPadding-120,(e.width>j||e.height>i)&&(e.width/j>e.height/i?(h=j,g=parseInt(e.height/(e.width/h),10),d.width(h),d.height(g)):(g=i,h=parseInt(e.width/(e.height/g),10),d.width(h),d.height(g)))),c.sizeContainer(d.width(),d.height())},e.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){this.$overlay.width(a(window).width()).height(a(document).height())},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerLeftPadding+this.containerRightPadding,h=b+this.containerTopPadding+this.containerBottomPadding;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide(),this.$lightbox.find(".lb-image").fadeIn("slow"),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=this.options.alwaysShowNavOnTouchDevices?!0:!1}catch(b){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var b=this;"undefined"!=typeof this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title&&this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(){location.href=a(this).attr("href")}),this.album.length>1&&this.options.showImageNumberLabel?this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast"):this.$lightbox.find(".lb-number").hide(),this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return b.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var a=new Image;a.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var b=new Image;b.src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")},b.prototype.keyboardAction=function(a){var b=27,c=37,d=39,e=a.keyCode,f=String.fromCharCode(e).toLowerCase();e===b||f.match(/x|o|c/)?this.end():"p"===f||e===c?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):("n"===f||e===d)&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),a("select, object, embed").css({visibility:"visible"})},b}();a(function(){var a=new b;new c(a)})}.call(this);