$(document).ready(function() {
    $(".filters p").click(function() {
        const $this = $(this);
        const filterId = $this.attr("id");

        $(".filters p").removeClass("fw-bold text-dark-green")
                      .find("img").attr("src", "./assets/icons/tick-mark.svg");
        $("header span").text($(this).text())
  
        $this.addClass("fw-bold text-dark-green")
             .find("img").attr("src", "./assets/icons/tick-mark-green.svg");
 
        $(".filterContent>div").addClass("d-none");
        $(`.${filterId}`).removeClass("d-none");
        document.querySelector("html").scrollIntoView({ behavior: 'smooth' });
        const imageName=filterId.split("-")[0]
        if(imageName!='filter'){
            $("header.header").css("background-image",`url('./assets/bg/immigration_${imageName}.png')`)
        }
    });
});
