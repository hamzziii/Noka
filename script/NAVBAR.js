window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
function openSidebar(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    $(".Open").css("color", "rgba(148, 146, 146, 0)");
}
function closeSidebar(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    $(".Open").css("color", "white");
}