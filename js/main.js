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














