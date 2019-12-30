const herodata = [
    [
        "imgs/Assets/Icons/cloud.svg",
        "imgs/Assets/Icons/pm.svg",
        "imgs/Assets/Icons/web.svg",
        "imgs/Assets/Icons/server.svg"
    ],
    [
        "imgs/Assets/Icons/uxui.svg",
        "imgs/Assets/Icons/android.svg",
        "imgs/Assets/Icons/opensource.svg",
        "imgs/Assets/Icons/blockchain.svg"
    ],
    [
        "imgs/Assets/Icons/ios.svg",
        "imgs/Assets/Icons/unity.svg",
        "imgs/Assets/Icons/alexa.svg"
    ]
]

$(function() {
    var imgCol = 1,
        imgRow = 1;
    //loading in images
    herodata.forEach(col => {
        col.forEach(img => {
<<<<<<< HEAD
            var element = `<img data-img-col = ${imgCol} data-img-row = ${imgRow} class = 'img-fluid hero-img' src = '${img}'/>`;
=======
            var element = `<img data-img-col = ${imgCol} data-img-row = ${imgRow} class = 'img-fluid position-absolute hero-img' src = '${img}'/>`;
>>>>>>> 928af1d... Absolute position for hero elements
            $(".hero-img-col").eq(imgCol - 1).append(element);
            var top = (imgRow - 1) * 25;
            $(`img[data-img-col = ${imgCol}][data-img-row = ${imgRow}]`).css("top", `${top}%`);
            imgRow++;
        });
        imgCol++;
<<<<<<< HEAD
        imgRow = 1;
=======
        imgRow = 0;
>>>>>>> 928af1d... Absolute position for hero elements
    });

    //Moving images
    anime({
        targets: ".hero-img",
        translateX: -130,
        translateY: -1000,
<<<<<<< HEAD
        duration: 600000,
=======
        duration: 800000,
>>>>>>> 928af1d... Absolute position for hero elements
        loop: true,
    });


    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
<<<<<<< HEAD
            var img = mutationRecord.target;
            var imgCol = $(img).attr("data-img-col");
            if (($(img).offset().top + $(img).outerHeight()) < 0) {
                $(img).remove();
                $(`#hero-img-col-${imgCol}`).append($(img));
            }
        });
=======
            $(".hero-img").each(function(index) {
                var img = $(this);
                if ((img.offset().top + img.outerHeight()) < 0) {
                    img.remove();
                    img.next().css("margin-top", `${img.outerHeight()*2}px`);
                    $(`#hero-img-col-${img.attr("data-img-col")}`).append(img);
                }
            })
        })
>>>>>>> 928af1d... Absolute position for hero elements
    });
    $(".hero-img").each(function() {
        observer.observe(this, {
            attributes: true,
            attributeFilter: ["style"]
        });
    });
});