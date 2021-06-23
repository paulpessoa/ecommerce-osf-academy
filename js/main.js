// add one more item to favorite list
numFav = 0;  
function addFav() {
    numFav++;
    document.getElementById('add-favorite-sum').textContent = numFav;
    }  
// add one more item to cart
numCart = 0;
function addCart() {
    numCart++;
    document.getElementById('add-cart-sum').textContent = numCart;
    }
// load more button function



// light box product with bootstrap
$(document).ready(function() {
    var $lightbox = $('#lightbox');    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
    
        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
});


// change cart image - JS function
function imgSlider (anything){ 
    document.querySelector('.product-zoom').src = anything;
}