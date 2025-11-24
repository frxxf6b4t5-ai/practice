$(document).ready(function(){
    $(".tab_btn").find("li").eq(1).click(function(){
        ${"tab"}.find("li").fadeout()
        //${"tab"}.find("li").eq(0).fadeout() =>첫번째가 아닌 전체탭이 사라졌다가 클릭한거만 나타나게!
        ${"tab"}.find("li").eq(1).fadeIn()

        $("tab_btn").find("li").removeClass("on")
        $("tab_btn").find("li").eq(1)addClass("on")
    })
})