//show current year
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

// open and close contact list
$(document).ready(function(){ if(window.outerWidth < 768) {
    $('#b-contact').click(function() {
        $('.contact-column').slideToggle('slow');
    }
    );
}
});

// open and close categoriest list
$(document).ready(function(){ if(window.outerWidth < 768) {
    $('.b-categoriest').click(function() {
        $('div.categoriest-column').slideToggle('slow');
    }
    );
}
});

// open and close about list
$(document).ready(function(){ if(window.outerWidth < 768) {
    $('.b-about').click(function() {
        $('div.about-column').slideToggle('slow');
    }
    );
}
});