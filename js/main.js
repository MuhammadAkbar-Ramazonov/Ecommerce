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
})