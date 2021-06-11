$(document).ready(function() {
    $('i').click (
        function(){
            $('div.d-menu-content').slideDown(500);
        },
            function(){
            $('div.d-menu-content').slideUp(500);
            }
    );
});

$(document).ready(function(){
    $("i").click(function(){
        $('div.d-menu-content').slideDown(500);
    }
    );
  });