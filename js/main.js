var elTabLink = document.querySelectorAll(".nav-link");
var elTabItem = document.querySelectorAll(".nav-item");

elTabLink.forEach(function(link){

    link.addEventListener("click" , function(evt){
        evt.preventDefault();
        

        elTabItem.forEach(function(item){
            item.classList.remove("active-item");
        })

        link.parentElement.classList.add("active-item");

    })
});

// let modalBtn = document.querySelector(".header__js-modal");
// let modalButton = document.querySelector(".header__modal")
// let modalBlock = document.querySelector(".modal__block");
// let modalClose = document.querySelector(".modal__btn");


// modalBtn.addEventListener("click" , function(){
//     modalBlock.classList.add("shownav");
// })
// modalButton.addEventListener("click" , function(){
//     modalBlock.classList.add("shownav"); 
// })

// modalClose.addEventListener("click" , function(){
//     modalBlock.classList.remove("shownav");
// })




// $('.customer__carousel').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           arrows: false,
//           centerMode: true,
//         //   centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
      
//     ]
//   });

$('.customer__carousel').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  });

