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
            var element = `<img data-img-col = ${imgCol} data-img-row = ${imgRow} class = 'img-fluid hero-img' src = '${img}'/>`;
            $(".hero-img-col").eq(imgCol - 1).append(element);
            imgRow++;
        });
        imgCol++;
        imgRow = 1;
    });

    //Moving images
    anime({
        targets: ".hero-img",
        translateX: -130,
        translateY: -1000,
        duration: 600000,
        loop: true,
    });


    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            var img = mutationRecord.target;
            var imgCol = $(img).attr("data-img-col");
            if (($(img).offset().top + $(img).outerHeight()) < 0) {
                $(img).remove();
                $(`#hero-img-col-${imgCol}`).append($(img));
            }
        });
    });
    $(".hero-img").each(function() {
        observer.observe(this, {
            attributes: true,
            attributeFilter: ["style"]
        });
    });
});