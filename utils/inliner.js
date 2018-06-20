const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const staticPath = path.join(process.cwd(), "static");
const staticResult = path.join(process.cwd(), "public");

const indexHtml = fs.readFileSync(path.join(staticPath, "index.html"), 'UTF-8');

const $ = cheerio.load(indexHtml);

$('script').each(function (i, elem) {
    elem = $(this);
    const src = elem.attr("src");
    console.log(`Inlining ${src}`);
    const code = fs.readFileSync(path.join(staticPath, src), 'UTF-8');
    elem.text(code);
    elem.removeAttr("src");
});

let css = "";
$('link[rel=\"stylesheet\"]').each(function (i, elem) {
    elem = $(this);
    const src = elem.attr("href");
    console.log(`Inlining ${src}`);
    const code = fs.readFileSync(path.join(staticPath, src), 'UTF-8');
    css += `${code}\n`;
    elem.remove();
});

$('head').append(`<style>\n${css}</style>`);

fs.writeFileSync(path.join(staticResult, "index.html"), $.html());