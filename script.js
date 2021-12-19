$(function() {

    // sets colors on box and in code preview
    function setColors() {
        let backgroundColor = "rgba(" + $(".slider").eq(0).val() + ", " + $(".slider").eq(1).val() + ", " + $(".slider").eq(2).val() + ", " + $(".slider").eq(3).val() + ")";
        let backdropFilter = "blur(" + $(".slider").eq(4).val() + "px)";
        $("#box").css({
            "background-color" : backgroundColor,
            "backdrop-filter" : backdropFilter
        });
        $("#background-color").html(backgroundColor);
        $("#backdrop-filter").html(backdropFilter);
    }

    // sets text in main spans
    function setText() {
        for (let i = 0; i < $(".slider").length; i++) {
            $(".span").eq(i).html($(".slider").eq(i).val());
        }
    }

    // calls functions on input
    $(".slider").on('input', function () {
        setColors();
        setText();
    })

    // toggles lock buttons
    $(".button-lock").on('click', function () {
        if ($(this).val() == "lock") {
            $(this).val("locked");
            $(this).css("outline", "white solid 2px");
        } else {
            $(this).val("lock");
            $(this).css("outline", "transparent solid 1px");
        }
    })

    // randomize function
    function randomizeColors() {
        for (let i = 0; i < $(".slider").length; i++) {
            if ($(".button-lock").eq(i).val() == "lock") {
                let min = $(".slider").eq(i).attr('min');
                let max = $(".slider").eq(i).attr('max');
                $(".slider").eq(i).val(Math.random() * (max - min) + min);
            }
        }
    }

    // randomizes options
    $("#button-random").on('click', function () {
        randomizeColors();
        setColors();
        setText();
    })

    // changes background image and shows note after first background change
    let noteHasBeenShown = false;
    $(".button-background").on('click', function () {
        let value = $(this).text();
        console.log(value);
        $("body").css("background-image", "url(https://source.unsplash.com/random/?" + value + ")");
        if (!noteHasBeenShown) {
            $("#note").slideDown(400).css("display", "block");
            noteHasBeenShown = true;
        }
    })

    // close note
    $("#note-close").on('click', function () {
        $("#note").fadeOut(600);
    })
})
