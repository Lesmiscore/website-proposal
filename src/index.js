console.log("Loaded");

const $ = require("jquery");

function setupLinkHrefPreview(links, text) {
    $(links).hover(function () {
        $(text).text($(this).attr("href"));
    }, () => {});
}

$(() => {
    // links
    setupLinkHrefPreview(".links-a-list", "#links-link-preview");
    // images
    const images = ["rin.png", "miku.png"];
    let imageOffset = 0;
    setInterval(() => {
        imageOffset = (imageOffset + 1) % images.length;
        $(".images-display").css("background-image", `url(${images[imageOffset]})`);
    }, 5000);
});