$(document).ready(function() {
    $("#full_menu").hide();
    // $('#full_search').hide();
    $('#show_menu').on('click', function() {
        $('#full_menu').show();
    });
    $('#close_full_menu').on('click', function() {
        $('#full_menu').hide();
    });

    $('#show_search').on('click', function() {
        $('#full_search').show();
    });
    $('#close_search_form').on('click', function() {
        $('#full_search').hide();
    });



})
