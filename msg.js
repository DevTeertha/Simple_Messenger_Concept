var chatInput1 = document.getElementById("msgbox1");
var chatInput2 = document.getElementById("msgbox2");

var chatDisplay1 = document.querySelector(".msgdiv1");
var chatDisplay2 = document.querySelector(".msgdiv2");

var sendBtn1 = document.getElementById("send1");
var sendBtn2 = document.getElementById("send2");

var bleep = new Audio();

document.addEventListener("keypress",function(e){
    var enter = e.key;
    if(enter=="Enter"){
        Send1(enter);
        Send2(enter);
    }
});


sendBtn1.addEventListener("click",Send1);

sendBtn2.addEventListener("click",Send2);



function Send1(){
    if(chatInput1.value==0){
        bleep.src = "Error.mp3";
        bleep.play();
    }
    else{
    var msgdiv1 = document.createElement("div");
    var msgdiv2 = document.createElement("div");
    
    msgdiv1.classList.add("msg_Div1");
    msgdiv2.classList.add("msg_Div2");
    msgdiv1.id = "Send_To";
    msgdiv2.id = "Send_From";
        
    
    var msg1 = document.createElement("span");
    var msg2 = document.createElement("span");
    
    msg1.classList.add("msg_Span1");
    msg2.classList.add("msg_Span2");
    
    chatDisplay1.appendChild(msgdiv1);
    chatDisplay2.appendChild(msgdiv2);
    
    msgdiv1.appendChild(msg1);
    msgdiv2.appendChild(msg2);
    
    msg1.innerHTML = chatInput1.value;
    msg2.innerHTML = chatInput1.value;
    
    chatInput1.value = null;
    msg1.style.backgroundColor = "cornflowerblue";
    
    msg2.style.backgroundColor = "yellow";
    bleep.src = "insightShort.mp3";
    bleep.play();
        
    }
}

function Send2(){
    if(chatInput2.value==0){
        bleep.src = "Error.mp3";
        bleep.play();
    }
    else{
    var msgdiv1 = document.createElement("div");
    var msgdiv2 = document.createElement("div");
    
    msgdiv1.classList.add("msg_Div2");
    msgdiv2.classList.add("msg_Div1");
    
    var msg1 = document.createElement("span");
    var msg2 = document.createElement("span");
    
    msg1.classList.add("msg_Span1");
    msg2.classList.add("msg_Span2");
        
    msgdiv2.id = "Send_To";
    msgdiv1.id = "Send_From";
    
    chatDisplay1.appendChild(msgdiv1);
    chatDisplay2.appendChild(msgdiv2);
    
    msgdiv1.appendChild(msg1);
    msgdiv2.appendChild(msg2);
    
    msg1.innerHTML = chatInput2.value;
    msg2.innerHTML = chatInput2.value;
    
    chatInput2.value = null;
    
    msg2.style.backgroundColor = "cornflowerblue";
    msg1.style.backgroundColor = "yellow";
    bleep.src = "insightShort.mp3";
    bleep.play();
        
   
    }
}