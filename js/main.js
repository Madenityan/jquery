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
        $("#button-eight").clone().appendTo(".wrapper");
    });











