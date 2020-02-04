//Animation
const herodata = [
    [
        "imgs/Assets/Icons/cloud.svg",
        "imgs/Assets/Icons/server.svg",
        "imgs/Assets/Icons/pm.svg",
        "imgs/Assets/Icons/web.svg"
    ],
    [
        "imgs/Assets/Icons/android.svg",
        "imgs/Assets/Icons/opensource.svg",
        "imgs/Assets/Icons/blockchain.svg",
        "imgs/Assets/Icons/uxui.svg"
    ],
    [
        "imgs/Assets/Icons/ios.svg",
        "imgs/Assets/Icons/unity.svg",
        "imgs/Assets/Icons/alexa.svg"
    ]
]

$(function() {
    //Loading in Hero Images
    var imgCol = 1;
    herodata.forEach(col => {
        col.forEach(img => {
            var element = `<img class = 'img-fluid hero-img' src = '${img}'/>`;
            $(".hero-img-col").eq(imgCol - 1).append(element);
        });
        imgCol++;
    });

    //Moving images
    anime({
        targets: "#hero-img-col-1",
        translateX: [-10, 5],
        translateY: [-50, 25],
        duration: 5000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        loop: true
    });
    anime({
        targets: "#hero-img-col-2",
        translateX: [-10, 5],
        translateY: [-50, 25],
        duration: 5000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        delay: 100,
        loop: true
    });
    anime({
        targets: "#hero-img-col-3",
        translateX: [-10, 5],
        translateY: [-50, 25],
        duration: 5000,
        easing: 'easeInOutQuad',
        direction: "alternate",
        delay: 200,
        loop: true
    });
    /*FOR FUTURE USE: when we figure out how to infinitly scroll images and load back images 
    when they get off screen. For now, an easier animation.
    //Cheking for off-screen images and re-placing them
    var colCounter1 = 0,
        colCounter2 = 0,
        colCounter3 = 0,
        top = 0;
    var observer = new MutationObserver(mutations => {
        mutations.forEach(mutationRecord => {
            var img = mutationRecord.target;
            var imgCol = $(img).attr("data-img-col");
            if (($(img).offset().top + $(img).outerHeight()) < 0) {
                $(img).remove();
                $(`#hero-img-col-${imgCol}`).append($(img));
                switch (imgCol) {
                    case "1":
                        colCounter1++;
                        top = 100 + 25 * colCounter1;
                        console.log(colCounter1);
                        break;
                    case "2":
                        colCounter2++;
                        top = 100 + 25 * colCounter2;
                        break;
                    case "3":
                        colCounter3++;
                        top = 100 + 25 * colCounter3;
                        break;
                }
                $(img).css("top", `${top}%`);
            }
        });
    });
    $(".hero-img").each(function() {
        observer.observe(this, {
            attributes: true,
            attributeFilter: ["style"]
        });
    });
    */

    //Scrolling animations
    //Moving elements on scroll
    $.fn.moveIt = function() {
        var $window = $(window);
        var instances = [];

        $(this).each(function() {
            instances.push(new moveItItem($(this)));
        });
        window.addEventListener('scroll', function() {
            var scrollTop = $window.scrollTop();
            instances.forEach(function(inst) {
                inst.update(scrollTop);
            });
        }, { passive: true });

    }

    var moveItItem = function(el) {
        this.el = $(el);
        this.speed = parseInt(this.el.attr('data-scroll-speed'));
    };

    moveItItem.prototype.update = function(scrollTop) {
        var top_of_element = this.el.offset().top;
        var bottom_of_element = this.el.offset().top + this.el.outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            this.el.css('transform', 'translateY(' + ((scrollTop - top_of_element) / this.speed) + 'px)');
        }
    };
    $('[data-scroll-speed]').moveIt();


    //Making focus animation on form
    $(".form-control").click(function() {
        $(".gradient-border").fadeOut(150);
        $(this).prev().fadeToggle(200)
    })
    $("#slackCheck").click(function() {
            $("#slackEmailRow").toggle(200).css("display", "flex");
        })
        //Loading in mail form
    $("button").click(function() {
        $("#blur").removeClass("inactive-blur").addClass("active-blur");
        $("#invisible").removeClass("inactive-mailing").addClass("active-mailing");
    })
    $("#closeMail").click(function() {
        $("#blur").removeClass("active-blur").addClass("inactive-blur");
        $("#invisible").removeClass("active-mailing").addClass("inactive-mailing");
    });


    //Responsiveness
    window.addEventListener("resize", function() {
        //If window is bigger than hero background image
        if ($(window).width() > 1536) {
            $("#hero-back-image").width($(window).width());
        } else {
            $("#hero-back-image").width(1536);
        }

        if ($(window).width() < 900) {
            //Putting the hero-image-col as the background if display is small
            $("#hero-img-container").removeClass("col-6").addClass("position-absolute");
            $("#hero-text").addClass("text-center").addClass("hovered").addClass("col-12");
            $("#hero-img-container").addClass("lowered").addClass("col-8").css({
                "top": "30%",
                "left": "30%"
            });

            //Adding margin to slack
            $("#slack").css("margin-top", "50%")
        } else {
            $("#hero-img-container").removeClass("position-absolute").addClass("col-6");
            $("#hero-text").removeClass("text-center").removeClass("hovered").removeClass("col-12");
            $("#hero-img-container").removeClass("lowered").removeClass("col-8").addClass("col-4").css({
                "top": "0",
                "left": "0"
            });

            $("#slack").css("margin-top", "20%")
        }

        //fixing project board 
        if ($(window).width() < 1330) {
            $("#pComponents").css("opacity", "0.3");
            $("#project-text-container").css({
                "text-align": "center"
            });
        } else {
            $("#pComponents").css("opacity", "1");
            $("#project-text-container").css({
                "text-align": "left",
                "right": 0
            });
        }

        //fixing hack nights
        if ($(window).width() < 768) {
            $("#night-text-containter").css({
                "text-align": "center",
                "padding": 0
            });
        } else {
            $("#night-text-containter").css({
                "text-align": "left",
                "padding-left": "5rem"
            });
        }

        //fixing contact
        if ($(window).width() < 845) {
            $("#contact-text-container").css("text-align", "center");
        } else {
            $("#contact-text-container").css("text-align", "right");
        }
    })
});