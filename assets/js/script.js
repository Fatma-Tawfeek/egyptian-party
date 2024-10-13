/* Side Navigation */
$(".open-btn").on("click", function () {
    $(".sidenav").animate({ width: "25rem", paddingInline: "2rem" }, 500);
    $(".sidenav").css({ display: "block" });
    $(".open-btn").animate({ left: "26rem" }, 500);
});

$(".close-btn").on("click", function () {
    $(".sidenav").animate({ width: "0", paddingInline: "0" }, 500, function () {
        $(".sidenav").css({ display: "none" });
    });
    $(".open-btn").animate({ left: "1%" }, 500);
});

/* single section */

$(".singer-title").on("click", function () {
    $(".singer-body").slideUp(500);
    $(this).next(".singer-body").slideToggle(500);
});

/* count down section */
$(document).ready(function () {
    var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

    var countdownFunction = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".days").text(days + " D");
        $(".hours").text(hours + " h");
        $(".minutes").text(minutes + " m");
        $(".seconds").text(seconds + " s");

        if (distance < 0) {
            clearInterval(countdownFunction);
            $(".countdown-section").html("Countdown Ended");
        }
    }, 1000);
});

/* Contact Section */
$(document).ready(function () {
    var maxLength = 100;

    $(".message").on("input", function () {
        var remaining = maxLength - $(this).val().length;
        if (remaining >= 0) {
            $("#remaining").text(remaining);
        } else {
            $("#remaining").text("Character limit reached");
        }
    });
});
