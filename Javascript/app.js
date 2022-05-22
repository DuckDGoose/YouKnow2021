$(function () {
    $(document).scroll(function () {
        let $nav = $("#mainNav");
        let $header = $("#why-lambdas");
        $nav.toggleClass('scrolled', $(this).scrollTop() >= $header.height() - 200);
    });
});

$(document).ready(function () {
    // get the anchor link buttons
    const menuBtn = $('.menu');
    // when each button is clicked
    menuBtn.click(() => {
        // set a short timeout before taking action
        // so as to allow hash to be set
        setTimeout(() => {
            // call removeHash function after set timeout
            removeHash();
        }, 5); // 5 millisecond timeout in this case
    });

    // removeHash function
    // uses HTML5 history API to manipulate the location bar
    function removeHash() {
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search)
    };
});

(function () {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();



