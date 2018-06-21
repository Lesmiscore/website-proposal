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
    // in this website
    setupLinkHrefPreview(".sitemap-a-list", "#sitemap-link-preview");
    // images
    const images = ["rin.png", "miku.png"];
    let imageOffset = 0;
    setInterval(() => {
        imageOffset = (imageOffset + 1) % images.length;
        $(".images-display").css("background-image", `url(${images[imageOffset]})`);
    }, 5000);
});
/*
const bitcoin = require("bitcoinjs-lib");
(async () => {
    console.log("Vanitygen started");
    const regexes = [/^1HastuneDaishi[A-Z].+$/, /^1MikuHatsune[A-Z].+$/];
    while (1) {
        const key = bitcoin.ECPair.makeRandom();
        const addr = key.getAddress();
        for (i in regexes) {
            const rg = regexes[i];
            if (rg.test(addr)) {
                console.log(key.toWIF());
                break
            }
        }
    }
})();
*/