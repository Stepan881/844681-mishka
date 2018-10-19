var popap = document.querySelector(".popap");
var popapopen = document.querySelector(".baskets__btn-order");
var popapcloseesc = document.querySelector(".popap__overoverlay");
var myList = document.querySelectorAll(".catalog__icon");

console.log(myList);

for (var i = 0; i < myList.length; i++) {
  myList[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('press');
    popap.classList.remove("popap__checked");
  });

  popapcloseesc.addEventListener("click", function(evt){
    evt.preventDefault();
    popap.classList.add("popap__checked");
    console.log("close");
  });
}

popapopen.addEventListener("click", function(evt) {
  evt.preventDefault();
  popap.classList.remove("popap__checked");
  console.log("open");
});

popapcloseesc.addEventListener("click", function(evt){
  evt.preventDefault();
  popap.classList.add("popap__checked");
  console.log("close");
});
