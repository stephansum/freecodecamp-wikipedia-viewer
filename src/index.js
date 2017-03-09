import '../node_modules/font-awesome/css/font-awesome.min.css';
import './custom.scss';

import $ from "jquery";
window.$ = window.jQuery = $;  // make jQuery globally available

$(() => {
    // $("#search-input").val("goethe");
    setupClickHandler();
});

function setupClickHandler() {
    $("#search-button").click(search);
}

function search() {
    let searchTerm = $("#search-input").val();
    getSearchResults(searchTerm).done(function(data) {
        let results = data.query.pages;
        displayResults(results);
    })
    
}

function getSearchResults(searchTerm) {
    let wikipediaApiEndpoint = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='" + searchTerm;
    return $.get(wikipediaApiEndpoint, function() {}, "jsonp");   
}

function displayResults(results) {
    
    $("#search-results").empty();
    let articleUrlPrefix = "https://en.wikipedia.org/?curid=";

    for(let articleId in results) {

        let article = results[articleId];

        let title = article.title;
        let pageId = article.pageid;
        let extract = article.extract;
        let articleUrl = articleUrlPrefix + pageId;

        // $("#search-results").append(`
        //     <div class='article'>
        //         <h3>${title}</h3>
        //         <p>${extract}</p>
        //     </div>
        // `);

        var newArticle = $(`
            <div class='article'>
                <h3>${title}</h3>
                <p>${extract}</p>
                <div class="hover-block"></div>
            </div>
        `).appendTo("#search-results");

        newArticle.click(() => { window.open(articleUrl, "_blank") });

        newArticle.mouseenter(
            (event) => { $(event.target).children(".hover-block").animate( { "opacity": "100" }, 3000); });
        newArticle.mouseleave(    
            (event) => { $(event.target).children(".hover-block").stop().css("opacity", "0"); }
        );
    }
}