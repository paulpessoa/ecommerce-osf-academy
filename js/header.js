//change 'hamburger' to 'X'

$('.fa-bars').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('fa-bars fa-times');
});



//this hover shows the dropdown content

$(document).ready(function(){
    $('.fa-bars').click(function(){
        $('.d-menu-content').slideToggle('slow');
    }
    );
});



// open and close all services

  $(document).ready(function(){ if(window.outerWidth < 425) {
    $('#link-service').click(function() {
        $('div#link-service').css('color', '$secondary-color');
        $('#list-pro, #list-sale').slideToggle('slow');
    }
    );
}
});



// open and close just product list

  $(document).ready(function(){ if(window.outerWidth < 425) {
    $('#list-pro').click(function() {
        $('div#list-pro').css('color', '$secondary-color');
        $('.menu-products').slideToggle('slow');
    }
    );
}
});


// open and close just sale list

$(document).ready(function(){ if(window.outerWidth < 425) {
    $('#list-sale').click(function() {
        $('div#list-sale').css('color', '$secondary-color');
        $('.menu-sales').slideToggle('slow');
    }
    );
}
});




 
    