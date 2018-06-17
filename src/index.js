console.log("Loaded");

const $ = require("jquery");

$(() => {
    // links
    $(".links-a-list").hover(function () {
        $("#links-link-preview").text($(this).attr("href"));
    }, () => {});
    // images
    const images = ["rin.png", "miku.png"];
    let imageOffset = 0;
    setInterval(() => {
        imageOffset = (imageOffset + 1) % images.length;
        $(".images-display").css("background-image", `url(${images[imageOffset]})`);
    }, 5000);
});