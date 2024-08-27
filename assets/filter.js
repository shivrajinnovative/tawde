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
        document.querySelector("#contentSection").scrollIntoView({ behavior: 'smooth' });
    });
});
