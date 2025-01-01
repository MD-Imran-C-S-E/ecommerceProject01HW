$(document).ready(function () {
  // Search Section
  let serchManuForm = document.querySelector('#serchManu');
  let addInputwith = document.querySelector('#serchManu input');
  
  if (serchManuForm && addInputwith) {
  $('#searchForm03, #searchForm02, #searchForm01').click(function () {
  serchManuForm.classList.add("active");
  addInputwith.classList.add("active");
  });
  
  $('#serchManu .closeBtn').click(function () {
  serchManuForm.classList.remove("active");
  addInputwith.classList.remove("active");
  });
  }

  //Popup section
  // let popup = document.querySelector("#popupSection")
  //   let popupCloseBtn = document.querySelector("#popupSection .closeBtn")
  //     if (popup && popupCloseBtn) {
  //         window.addEventListener("load", ()=>{
  //           setTimeout(()=>{
  //             popup.classList.add("active");
  //           },4000)
  //         })
  //         popupCloseBtn.addEventListener("click", ()=>{
  //           popup.classList.remove("active");
  //         })
  //     }

  // Product Details Section
  $(".btnDec1,.btnDec2,.btnDec3").click(function () {
  $(".btnDec1,.btnDec2,.btnDec3").removeClass("active");
  $(this).addClass("active");
  });

  $(".btnDec1").click(function () {
  $("#productDesc .contant1,#productDesc .contant2,#productDesc .contant3").removeClass("active");
  $("#productDesc .contant1").addClass("active");
  });

  $(".btnDec2").click(function () {
    $("#productDesc .contant1,#productDesc .contant2,#productDesc .contant3").removeClass("active");
    $("#productDesc .contant2").addClass("active");
  });

  $(".btnDec3").click(function () {
    $("#productDesc .contant1,#productDesc .contant2,#productDesc .contant3").removeClass("active");
    $("#productDesc .contant3").addClass("active");
  });
  
  // Tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerList.length > 0) {
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
  
  // Video Icon
  let videoIconHight = document.querySelector(".video a");
  if (videoIconHight) {
  videoIconHight.addEventListener("click", () => {
  videoIconHight.classList.add("active");
  });
  }
  
  // Sliders
  $('.sliders1').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  dotsClass: "container test",
  });
  
  $('#products .cardSlider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  prevArrow: "#productsleftArrow",
  nextArrow: "#productsrightArrow",
  responsive: [
  { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
  });
  
  $('#OfTheDaysSection .slider2').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  responsive: [
  { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
  });
  
  $('.slider3').slick({
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  responsive: [
  { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
  });
  
  // Countdown Timer
  $('.OfTheDaysSlider .timer').countdown('2024/12/28', function (event) {
  $(".days").html(event.strftime('%d'));
  $(".hour").html(event.strftime('%H'));
  $(".minute").html(event.strftime('%M'));
  $(".sec").html(event.strftime('%S'));
  });

  //productDetails Slider.
  $('#productDetails .fullSlide .productImgSlide').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "#imgSlideLeftArrow",
    nextArrow: "#imgSlideRightArrow",
    responsive: [
    { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 576, settings: { slidesToShow: 3, slidesToScroll: 1 } }
    ]
    });


    //Releted product Details Slider.
  $('#reletedProducts .productSlider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: "#reletedProductsLeftArrow",
    nextArrow: "#reletedProductsRightArrow",
    responsive: [
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
    });

    let couNumber = document.querySelector("#productDetails .count .couNumber")
    if (couNumber) {
      $("#productDetails #decrementBtn").click(()=>{
        if (couNumber.value > 1) {
          let newValu = Number(couNumber.value) - 1;
          couNumber.value = newValu;
        } else {
          alert("Minimam order 1pc");
        }
        
      })
      $("#productDetails #incrementBtn").click(()=>{
        let newValu = Number(couNumber.value) + 1;
        couNumber.value = newValu;
      })
    }


  });
