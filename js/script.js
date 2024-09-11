// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".main-header");
//   if (this.scrollY >= 100) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// });

// nav

$("#menu-bar").click(function () {
  $(".nav").toggleClass("active");
  $("#menu-bar").toggleClass("ph-x");
});

// nav  end

// gallery

$(".port-img img ").click(function () {
  var portGal = $(".image-modal img");
  portGal.attr("src", this.src);
  $(".image-modal").addClass("active");
});
$("#image-close ").click(function () {
  $(".image-modal").removeClass("active");
});

// gallery  end





// counter

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;
    // console.log(increment);

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// counter  end


