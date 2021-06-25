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
$(function loadMore(){
    let $data = $('.row.cards');
    let div = document.createElement("div")
    $.ajax({
        type: 'GET',
        url: './data/product-list.json',
        success: function (data){
            $.each(data, function(i, data){
                $data.append('<div class="cardx hidden"><div class="card-img" style="background-image: url(' + data.cardimg + ')"></div><div class="card-info"><h4 class="productname">' + data.productname + '</h4><span class="price-text"><a href="../product.html">'+ data.price +'</a></span></div><div class="card-hover"><div class="card-buttons"><button class="add" onclick="addCart()"><img src="./img/icons/Plus.svg" alt="Add"></button><button class="favorite" onclick="addFav()"><img src="./img/icons/Heart (24x24).svg" alt="Favorite"></button></div></div></div>');            
            });
            // when click button "load more" add 4 cards
            $("#load-more").click(function(){
                $(".row.cards .hidden").slice(0,4).removeClass("hidden");
                console.log("You are the best!!!", data);   
            });
            } 
        });
    });






// light box product with bootstrap
$(document).ready(function() {
    var $lightbox = $('#lightbox');    
    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };
            $lightbox.find('img').attr('src', src);
    });
});


// change cart image - JS function
function imgSlider (anything){ 
    document.querySelector('.product-zoom').src = anything;
}

// read more - product information paragraph 

$(document).ready(function(){
    $(".readmore-button").click(function(){
    $(".span-readmore").show();
    });
});
