var inp = document.getElementById('swe').value ;
var div = document.getElementById('rtq').innerHTML;
var tiim ;
var uio ;
var fft ;
function stop(){
    clearInterval(tiim)
    clearInterval(uio)
    clearInterval(fft)
}

function start(){
    // document.getElementById('we').innerHTML = "00"
    // document.getElementById('wq').innerHTML = "00"
    // document.getElementById('ww').innerHTML = "00"
    var hour = document.getElementById("ww").innerText
    var min = document.getElementById("wq").innerText
    var sec = document.getElementById("we").innerText

    tiim = setInterval(function(){document.getElementById("we").innerText = + document.getElementById("we").innerText + 1 ;
        if(document.getElementById('we').innerHTML == 10){
                    
                    document.getElementById('we').innerHTML = 1
                    
                }
    }, 100 )

    uio = setInterval(function(){document.getElementById("wq").innerText = + document.getElementById("wq").innerText + 1;
    if(document.getElementById('wq').innerHTML == 60){
        document.getElementById('wq').innerHTML = 1
        
    }}, 1000)
         
    fft = setInterval(function(){document.getElementById("ww").innerText = + document.getElementById("ww").innerText + 1;
    if(document.getElementById('ww').innerHTML == 60){
        document.getElementById('ww').innerHTML = 1
        
    }}, 60000)



        
    // document.getElementById("rtq").innerText = 
    // document.getElementById('swe').value 
    // tiim = setInterval(function(){document.getElementById('rtq').innerHTML = document.getElementById('rtq').innerHTML -1;

    //     if(document.getElementById('rtq').innerHTML == 0){
    //         clearInterval(tiim)
    //         alert("Your time is up")
    //     }
    // },1000)
}

function llap(){
    document.getElementById('we').innerHTML = "00"
    document.getElementById('wq').innerHTML = "00"
    document.getElementById('ww').innerHTML = "00"


    tiim = setInterval(function(){document.getElementById("we").innerText = + document.getElementById("we").innerText + 1 ;
        if(document.getElementById('we').innerHTML == 10){
                    
                    document.getElementById('we').innerHTML = 0
                    
                }
    }, 100 )

    uio = setInterval(function(){document.getElementById("wq").innerText = + document.getElementById("wq").innerText + 1;
    if(document.getElementById('wq').innerHTML == 60){
        document.getElementById('wq').innerHTML = 1
        
    }}, 1000)
         
    fft = setInterval(function(){document.getElementById("ww").innerText = + document.getElementById("ww").innerText + 1;
    if(document.getElementById('ww').innerHTML == 60){
        document.getElementById('ww').innerHTML = 0
        
    }}, 60000)
    
}
function stop(){
    clearInterval(tiim)
    clearInterval(uio)
    clearInterval(fft)
}

var gist ;
function slop (){
    gist = document.createElement("li").innerText
    // gist.appendChild(document.getElementById("ww").innerHTML + ":" +
    // document.getElementById("wq").innerHTML + ":" +document.getElementById("we").innerHTML )

    var text = document.createTextNode(document.getElementById("ww").innerHTML + ":" +
    document.getElementById("wq").innerHTML + ":" +document.getElementById("we").innerHTML )

    document.createElement("li").appendChild(document.createTextNode(document.getElementById("ww").innerHTML + ":" +
    document.getElementById("wq").innerHTML + ":" +document.getElementById("we").innerHTML )
)
    (document.getElementById('oolll')).appendChild(gist)


    
}


