const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
        $('#menu').addClass("bg-interno");
    } else {

        $("#menu").removeClass("bg-interno");
        $('#menu').addClass("navbar");
    }

});