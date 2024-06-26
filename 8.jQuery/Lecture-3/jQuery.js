/* jQuery css */
/* Removeclass() , Addclass() , Toggleclass() Method */
// $(function(){
//     $("#btn1").click(function(){
//         $("#demo").removeClass("box")
//     })
//     $("#btn2").click(function(){
//         $("#demo").addClass("box-1")
//     })
//     $("#btn3").click(function(){
//         $("#demo"). toggleClass("box-1")
//     })
// })


/* css */
// $(function(){
//     $("#btn1").click(function(){
//         $("#demo").css(
//             {
//                 "background-color" : "fuchsia",
//                 "height" : "200px",
//                 "width" : "200px" ,
//                 "border" : "1px solid black"
//             }
//         )
//     })
// })



/* parent , parents , parentsUntils */
// $(function(){
//     $("#btn").click(function(){
//         $(".bChild").parent().css({"background-color" : "fuchsia"})
//     })
// })
    
// $(function(){
//     $("#btn").click(function(){
//         $(".bChild").parents().css({"background-color" : "fuchsia"})
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $(".bChild").parentsUntil(".divParent").css({"background-color" : "fuchsia"})
//     })
// })



/* children , find */
// $(function(){
//     $("#btn").click(function(){
//         $(".ulParent").children().css({"background-color" : "fuchsia"})
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $(".ulParent").children().css({"background-color" : "fuchsia"})
//     })
// })

// $(function(){
//     $("#btn").click(function(){
//         $(".divParent").find(".spanChild").css({"background-color" : "fuchsia"})
//     })
// })


/* sibling , next , nextAll ,  nextUntil  , prev , prevAll ,  prevUntil */

// $(function(){
//     $('#btn').click(function(){
//         $('div').siblings().css({
//             "background-color":"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').next().css({
//             "background-color":"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').nextAll().css({
//             "background-color":"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').nextUntil('span').css({
//             "background-color":"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').prev().css({
//             "background-color":"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').prevAll().css({
//             "background-color":"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').prevUntil('p').css({
//             "background-color":"fuchsia"
//         })
//     })
// })

/* Filtering  not , first , last , eq  , filter */
// $(function(){
//     $('#btn').click(function(){
//         $('div').first().css({
//             'background-color':"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').last().css({
//             'background-color':"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').not('.heading').css({
//             'background-color':"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').eq(8).css({
//             'background-color':"fuchsia"
//         })
//     })
// })

// $(function(){
//     $('#btn').click(function(){
//         $('div').filter('.heading').css({
//             'background-color':"fuchsia"
//         })
//     })
// })