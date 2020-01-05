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
});