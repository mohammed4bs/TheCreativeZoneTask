$(document).ready(function() {
    $("#full_menu").hide();
    $('#full_search').hide();
    

    // Remove other Elements
    $('.heart').hide();
    $('.support').hide();
    // Removing styles from other elements
    //First
    $('.heart_btn img').attr('src', 'images/heart_icon.png');
    $('.heart_btn').css({'borderColor':'#b7b7b7'});
    // Second
    $('.support_btn img').attr('src', 'images/support_icon.png');
    $('.support_btn').css({'borderColor':'#b7b7b7'});
    // applying styles
    $('.secure_btn img').attr('src', 'images/lock_icon.png');
    $('.secure_btn').css({'borderColor':'#24a227'});
    // Show the text belong to this element
    $('.secure').show();

    // Full Page Menu Toggle
    $('#show_menu').on('click', function() {
        
        $('#full_menu').show(function() {
            
        });
        

    });
    
    $('#close_full_menu').on('click', function() {
        
        $('#full_menu').hide(function() {
            
        });

    });
    


    // Full Page Search Toggle 

    $('#show_search').on('click', function() {
        $('#full_search').show(function() {

        });
    });
    $('#close_search_form').on('click', function() {
        $('#full_search').hide(function() {

        });
    });

    // Featured buttons click
    $('.secure_btn').on('click', function() {
        // Remove other Elements
        $('.heart').hide();
        $('.support').hide();
        // Removing styles from other elements
        //First
        $('.heart_btn img').attr('src', 'images/heart_icon.png');
        $('.heart_btn').css({'borderColor':'#b7b7b7'});
        // Second
        $('.support_btn img').attr('src', 'images/support_icon.png');
        $('.support_btn').css({'borderColor':'#b7b7b7'});
        // applying styles
        $('.secure_btn img').attr('src', 'images/lock_icon.png');
        $('.secure_btn').css({'borderColor':'#24a227'});
        // Show the text belong to this element
        $('.secure').addClass('animated fadeIn');
        $('.secure').show();
    });

    $('.heart_btn').on('click', function() {
        $('.secure').hide();
        $('.support').hide();
        // removing styles from other elements
        //First
        $('.secure_btn img').attr('src', 'images/lock_icon_o.png');
        $('.secure_btn').css({'borderColor':'#b7b7b7'});
        // Second
        $('.support_btn img').attr('src', 'images/support_icon.png');
        $('.support_btn').css({'borderColor':'#b7b7b7'});
        // appling styles
        $('.heart_btn img').attr('src', 'images/heart_icon_colored.png');
        $('.heart_btn').css({'borderColor':'#24a227'});
        $('.heart').addClass('animated fadeInDown');
        $('.heart').show();
    });

    $('.support_btn').on('click', function() {
        $('.secure').hide();
        $('.heart').hide();
        // removing styles from other elements
        //First
        $('.secure_btn img').attr('src', 'images/lock_icon_o.png');
        $('.secure_btn').css({'borderColor':'#b7b7b7'});
        // Second
        $('.heart_btn img').attr('src', 'images/heart_icon.png');
        $('.heart_btn').css({'borderColor':'#b7b7b7'});
        // appling styles
        $('.support_btn img').attr('src', 'images/support_icon_colored.png');
        $('.support_btn').css({'borderColor':'#24a227'});
        $('.support').addClass('animated fadeInUp');
        $('.support').show();
    });

    // Animations
    $('.hero-text').addClass('animated bounceInLeft');
    $('.hero-boxes').addClass('animated fadeInUp');
    $('.about_img').addClass('animated fadeIn delay-2s');

})
