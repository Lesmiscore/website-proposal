console.log("Loaded");

const $ = require("jquery");

$(() => {
    $(".links-a-list").hover(function () {
        $("#links-link-preview").text($(this).attr("href"));
    }, () => {});
});