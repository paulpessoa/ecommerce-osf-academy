//hide or show password
$(document).ready(function() {
    $("#eye-pwd").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password').attr("type") == "text"){
            $('#show_hide_password').attr('type', 'password');
        }else if($('#show_hide_password').attr("type") == "password"){
            $('#show_hide_password').attr('type', 'text'); 
        }
    });
});

// show cookie modal after 10 seconds
$(document).ready(function(){
    // this function show the cookie if the cache is clean
    if (!localStorage.osfCookies) {
        setTimeout(function(){
            $('#myModal').modal('show');
        }, 10000);
    }
    // this function will hide the modal if to click the "accept button" 
    const acceptCookies = () => {
        document.querySelector("#myModal").classList.remove('show');
        //this save on User Browser the value "accept" that wil be used for the function
        localStorage.setItem("osfCookies", "accept");
    };
    //this variable save the button coockie class      
    const btnCookies = document.querySelector(".btn-cookies");
    //this active the function to "hide coockies modal"
    btnCookies.addEventListener('click', acceptCookies);    
});

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
$(function getAJson (){
    let $data = $('.row.cards');
    $.ajax({
        type: 'GET',
        url: './data/product-list.json',
        success: function addDiv (data){
            $.each(data, function(i, data){
                $data.append('<div class="cardx hidden"><div class="card-img" style="background-image: url(' + data.cardimg + ')"></div><div class="card-info"><h4 class="productname">' + data.productname + '</h4><span class="price-text"><a href="../product.html">'+ data.price +'</a></span></div><div class="card-hover"><div class="card-buttons"><button class="add" onclick="addCart()"><img src="./img/icons/Plus.svg" alt="Add"></button><button class="favorite" onclick="addFav()"><img src="./img/icons/Heart (24x24).svg" alt="Favorite"></button></div></div></div>');            
            });
            // when click button "load more" add 4 cards
            $("#load-more, #load-more1").click(function loadMore (){
                $(".row.cards .hidden").slice(0,4).removeClass("hidden");  
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

// add and subtract items on the product page
function upItem() {
    document.getElementById("oneItem").stepUp(1);
};
function downItem() {
    document.getElementById("oneItem").stepDown(1);
};

// read more - product information paragraph 
$(document).ready(function(){
    $(".linkbutton").click(function(){
    $(".span-readmore").show();
    });
});

// carousel function slider cards
$(document).ready(function(){
    $('.featuredcarousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });    
});


//Call the plugin on the print button and done.




$('.print').click(function(){
    window.print();
    return false;
});
