import '../node_modules/font-awesome/css/font-awesome.min.css';
import './custom.scss';

import $ from "jquery";
window.$ = window.jQuery = $;  // make jQuery globally available

$(() => {
    setupClickHandler();
});

function setupClickHandler() {
    $("#search-button").click(search);
    $("#random-button").click(() => { window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank"); });
}

function search() {
    
    let searchTerm = $("#search-input").val();

    if (searchTerm) {
        getSearchResults(searchTerm).then(function(data) {
            if (data.query) {
                let results = data.query.pages;
                displayResults(results);
            }
            else {
                displayNoResultsFound();
            }
        });
    }
    
}

function getSearchResults(searchTerm) {
    let wikipediaApiEndpoint = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='" + searchTerm;
    return $.get(wikipediaApiEndpoint, function() {}, "jsonp");   
}

function displayNoResultsFound() {
    $("#search-results").empty();
    $("#search-results").append("<p>No articles found :-(</p>")
}

function displayResults(results) {

    $("#title").css("padding-top", "50px");
    $("#search-results").empty();
    let articleUrlPrefix = "https://en.wikipedia.org/?curid=";

    for(let articleId in results) {

        let article = results[articleId];

        let title = article.title;
        let pageId = article.pageid;
        let extract = article.extract;
        let articleUrl = articleUrlPrefix + pageId;

        var newArticle = $(`
            <div class='article'>
                <h3>${title}</h3>
                <p>${extract}</p>
                <div class="hover-block"></div>
            </div>
        `).appendTo("#search-results");

        newArticle.click(() => { window.open(articleUrl, "_blank") });

    }
}