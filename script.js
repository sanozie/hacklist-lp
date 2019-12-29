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
    var count = 0;
    //loading in images
    herodata.forEach(col => {
        col.forEach(img => {
            var element = `<img class = 'img-fluid hero-img' src = '${img}'/>`;
            $(".hero-img-col").eq(count).append(element);
        });
        count++;
    });
});