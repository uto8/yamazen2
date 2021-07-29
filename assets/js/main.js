$(".footer_btn").on("click",()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
$(".contact_btn").on("click",()=>{
  location.href = "#section06";
});
let num=1;
$(".btn-more").on("click",()=>{
  num=num +1;
  if((num%3)==1){
    $(".hidden1").addClass("closed").removeClass("opened");
    $(".hidden2").addClass("closed").removeClass("opened");
    $(".btn-more").addClass("closed").removeClass("opened");
  }else if((num%3)==2){
    $(".hidden1").addClass("opened").removeClass("closed");
  }else{
    $(".hidden2").addClass("opened").removeClass("closed");
    $(".btn-more").addClass("opened").removeClass("closed");
  }
})

$(window).scroll(function() {
	let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
	let areaTop = jQuery("#section01").offset().top; // 対象エリアの上部の位置
	let areaBottom = areaTop + jQuery("#section01").innerHeight(); // 対象エリアの下部の位置

	if (scrollTop < areaBottom) {
		 $("#header").addClass("view").removeClass("inview");
	} else {
		$("#header").removeClass("view").addClass("inview");
	}
});
