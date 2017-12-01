    /*--- buttons----*/

    $(document).ready(function() {

    });

    $("#button-one").on("click",function(){
        $("#button-one").addClass("button-add");
    });

    $("#button-two").on("click",function(){
        $("#button-two").removeClass("color-button-two");
    });

    $("#button-three").on("click",function(){
        $("#button-three").toggleClass("color-button-three");
    });

    $("#button-four").on("click",function(){
        alert($("#button-four").attr("data-animal"));
    });

    $("#button-five").on("click",function(){
        $("#button-five").attr("data-animal","animal");
    });

    $("#button-six").on("click",function(){
        alert("The button was clicked with value " + $(this).text());
    });

    $("#button-seven").on("click",function(){
        $("#button-six").trigger("click");
    });

    $("#button-eight").on("click",function(){
        $("#button-eight").clone().text("cloned").appendTo(".wrapper");
    });

    $("#button-nine").on("click",function(){
        console.log(
            $('#button-nine').closest(".wrapper-btn"));
    });

    $("#button-ten").on("click",function(){
        $.each($('button'),function(){
            console.log($(this).text());
        });
    });

    $("#button-eleven").on("click",function(){
        $("this").find("#button-eleven");
        console.log($(this).text());
    });

    $("#button-twelve").on("click",function(){
        $(".text-button-twelve").fadeIn("slow");
    });

    $("#button-thirteen").on("click",function(){
        $(".text-button-thirteen").fadeOut("slow");
    });

    $("#button-fourteenth").on("click",function(){
        $(".text-button-fourteenth").hide("slow");
    });

    $("#button-fifteenth").on("click",function(){
        $(".text-button-fifteenth").show("slow");
    });

    $("#button-sixteenth").on("click",function(){

        var styleProps = $(this).css([
            "width", "height", "background-color"
        ]);

        $.each( styleProps, function( prop, value ) {
           console.log(prop + ": " + value);
        });

        console.log($(this).offset());

        $(this).each(function() {
            $.each(this.attributes, function() {
            if(this.specified) {
                console.log(this.name, this.value);
                }
            });
        });
        console.log($(this).parent());
        console.log($(this).text());
        console.log($(this).siblings());
    });

    /*--- methods----*/

    $("#myButton").on("click",function(){
        console.log($(this).data("animal"));
    });

    $("#delete").on("click",function(){
        content = $(".detach").detach();
    });

    $(document).ready(function() {
        $("li:eq(2)").addClass("yellow");
        $("li:eq(-4)").addClass("yellow");
    });

    $("#hasclass").on("click",function(){
        console.log($("p").hasClass("orange"));
    });

    $("#button-html").on("click",function(){
        $("span").html("This is a text html");
    });

    $("a").on("click",function(){
        console.log($(this).index());
    });

    $("h3").on("click",function(){
        $("h3").off("click");
     });

    $("input[type='checkbox']").prop(
    "checked", true);

    $("#button-remove").on("click",function(){
        $("h4").remove();
    });

    $("#button-removeattr").on("click",function(){
        $("#button-removeattr").removeAttr("class");
    });

     $(function(){
        $(window).resize(function(){
            console.log('resize');
        });
    });

    $(function(){
        $(window).scroll(function(){
            console.log('scroll');
        });
    });

    // $(function(){
    //     $(window).scroll(function(){
    //         if($(this).scrollTop() > 100){
    //             $(this).scrollTop(0);
    //         }
    //     });
    // });

    $("#button-rslideup").on("click",function(){
        $("#slide").slideUp();
    });

    $("#button-slidedown").on("click",function(){
        $("#slide").slideDown();
    });

    $("#button-slidetoggle").on("click",function(){
        $("#slide-toggle").slideToggle();
    });



