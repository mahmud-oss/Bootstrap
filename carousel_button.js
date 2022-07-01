$(document).ready(function(){
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carousel-pause').click(function () {
        $('#mycarousel').carousel('pause');
    });
    $('#carousel-play').click(function () {
        $('#mycarousel').carousel('cycle');
    })
})

// $(function() {
//     // Handler for .ready() called.
//     $('#mycarousel').carousel({ interval: 2000 });
//     $('#carousel-pause').trigger(function () {
//         $('#mycarousel').carousel('pause');
//     });
//     $('#carousel-play').trigger(function () {
//         $('#mycarousel').carousel('cycle');
//     })
// });