// var dett = document.getElementById("rtq").innerHTML
// var winr = document.getElementById("swe").value
// var time;
// function clik(){
//     document.getElementById("rtq").innerHTML 
//     = document.getElementById("swe").value;
//     time = setInterval(function(){
//         document.getElementById("rtq").innerHTML
//         = document.getElementById("rtq").innerHTML - 1}, 1000
//     )

//    if(document.getElementById("rtq").innerHTML == 0){
//             clearInterval(time)
//     }
    
    
// }


// setTimeout(function(){
//     alert("welcome ")
// } , 3000)

// setTimeout(function(){
//     prompt('adebaty')
// } , 9000)



var inp = document.getElementById('swe').value ;
var div = document.getElementById('rtq').innerHTML;
var tiim ;
function start(){
    
    tiim = document.getElementById("rtq").innerText = 
    document.getElementById('swe').value 
    tiim = setInterval(function(){document.getElementById('rtq').innerHTML = document.getElementById('rtq').innerHTML -1;

        if(document.getElementById('rtq').innerHTML == 0){
            clearInterval(tiim)
            alert("Your time is up")
            clearInterval(tiim)
        }
    },1000)
}
function stop(){
    clearInterval(tiim)
    
}


