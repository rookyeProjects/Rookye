$(function() {
!function(a){
    "use strict";
    a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
        if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
            var e=a(this.hash);
            if((e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({
                scrollTop:e.offset().top-57
            }
            ,1e3,"easeInOutExpo"),!1
        }
    }
    ),a(".js-scroll-trigger").click(function(){
        a(".navbar-collapse").collapse("hide")
    }
    ),a("body").scrollspy({
        target:"#mainNav",offset:57
    }
    );
    var e=function(){

        if( $("#mainNav").offset().top>100 )
        {
            $("#mainNav").addClass("navbar-shrink");
        }
        else
        {
        $("#mainNav").removeClass("navbar-shrink");
        }
        
    }
    ;
    e(),a(window).scroll(e) 
}
(jQuery);
});