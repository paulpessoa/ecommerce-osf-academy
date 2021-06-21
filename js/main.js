
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

    let $data = $('#more-products');

    $.ajax({
        type: 'GET',
        url: './data/product-list.json',
        success: function(data){
            $.each(data, function(i, data){
                console.log('Sucess', data)
                $data.append("<br> <li class='hidden'> <img src='" + data.cardimg + "' alt='Image not found'/><p>" + data.productname + '<br>'  + data.price + "</li></p>");
            });

            function loadMore(){
                $("#more-products .hidden").slice(0,4).removeClass("hidden");
            }
        
            loadMore();
        
            $("#btnLoadMore").on("click",loadMore);    


        } 
    });
});



