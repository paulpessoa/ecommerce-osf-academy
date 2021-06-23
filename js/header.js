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
$(document).ready(function(){ if(window.outerWidth < 768) {
    $('#link-service').click(function() {
        $('.column-products, .column-sales').slideToggle('slow');
    }
    );
}
});

// open and close just product list
$(document).ready(function(){ if(window.outerWidth < 768) {
    $('#list-pro').click(function() {
        $('.menu-products').slideToggle('slow');
    }
    );
}
});

// open and close just sale list
$(document).ready(function(){ if(window.outerWidth < 768) {
    $('#list-sale').click(function() {
        $('.menu-sales').slideToggle('slow');
    }
    );
}
});