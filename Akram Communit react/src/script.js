$('a[href^="#"]').on("click", function(event) {
  var target = $(this.getAttribute("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

const text = document.querySelector(".typing-text");

const words = ["recycle", "bottle", "beer"];

setTyper(text, words);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}

$(function() {
  $(".img-w").each(function() {
    $(this).wrap("<div class='img-c'></div>");
    let imgSrc = $(this)
      .find("img")
      .attr("src");
    $(this).css("background-image", "url(" + imgSrc + ")");
  });

  $(".img-c").click(function() {
    let w = $(this).outerWidth();
    let h = $(this).outerHeight();
    let x = $(this).offset().left;
    let y = $(this).offset().top;

    $(".active")
      .not($(this))
      .remove();
    let copy = $(this).clone();
    copy
      .insertAfter($(this))
      .height(h)
      .width(w)
      .delay(500)
      .addClass("active");
    $(".active").css("top", y - 8);
    $(".active").css("left", x - 8);

    setTimeout(function() {
      copy.addClass("positioned");
    }, 0);
  });
});

$(document).on("click", ".img-c.active", function() {
  let copy = $(this);
  copy.removeClass("positioned active").addClass("postactive");
  setTimeout(function() {
    copy.remove();
  }, 500);
});

jQuery(window).on("load", function() {
  var loader = $(".loader");
  var wHeight = $(window).height();
  var wWidth = $(window).width();
  var o = 0;

  loader.css({
    top: wHeight / 2 - 2.5,
    left: wWidth / 2 - 200
  });

  do {
    loader.animate(
      {
        width: o
      },
      10
    );
    o += 3;
  } while (o <= 400);
  if (o === 402) {
    loader.animate({
      left: 0,
      width: "100%"
    });
    loader.animate({
      top: "0",
      height: "100vh"
    });
    setTimeout(function() {
      jQuery(".loader-wrapper").fadeOut(500);
      jQuery(".loader").fadeOut(500);
    }, 3000);
  }
});
