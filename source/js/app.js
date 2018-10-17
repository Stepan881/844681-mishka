var popap = document.querySelector(".popap");
var popapopen = document.querySelector(".baskets__btn-order");
var popapcloseesc = document.querySelector(".popap__overoverlay");

popapopen.addEventListener("click", function(evt) {
  evt.preventDefault();
  popap.classList.remove("popap__checked");
  console.log("open");
});

popapcloseesc.addEventListener("click", function(evt ){
  evt.preventDefault();
  popap.classList.add("popap__checked");
  console.log("close");
});
