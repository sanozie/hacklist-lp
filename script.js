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
    var imgCol = 1;
    var imgRow = 1;
    //loading in images
    herodata.forEach(col => {
        col.forEach(img => {
            var element = `<img id = "hero-img-${imgCol}-${imgRow}" class = 'img-fluid hero-img' src = '${img}'/>`;
            $(".hero-img-col").eq(imgCol - 1).append(element);
            imgRow++;
        });
        imgCol++;
    });

    //Moving images
    anime({
        targets: ".hero-img",
        translateX: -130,
        translateY: -1000,
        duration: 500000,
        loop: true,
    });


    //if (($(".hero-img").offset().top + $(".hero-img").outerHeight) < 0) {

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutationRecord) {
            $(".hero-img").each(function(index) {
                if (($(this).offset().top + $(this).outerHeight()) < 0) {
                    $(this).remove();
                }
            })
        })
    });
    $(".hero-img").each(function() {
        observer.observe(this, { attributes: true, });
    });
});