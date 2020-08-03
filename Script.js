/*document.querySelector("#p1").style.display = "none";
        document.querySelector(".reg").style.display = "none";
         document.getElementById("profile1").style.display = "block";

document.querySelector("#p2").style.display = "none";
        document.querySelector("#reg").style.display = "none";
        document.getElementById("profile2").style.display = "block";
*/














function Person1(){
    var username1 = document.getElementById("person1_input").value;
    if(username1==0){
        alert("Please Enter Your Username");
    }
    
    else{
        alert("Welcome "+username1);
         document.querySelector("#p1").style.display = "none";
        document.querySelector(".reg").style.display = "none";
         document.getElementById("profile1").style.display = "block";
        
        var name1 = document.getElementById("name1");
        name1.innerHTML = username1;
    }
    
}

function Person2(){
    var username2 = document.getElementById("person2_input").value;
    
    if(username2==0){
        alert("Please Enter Your Username");
    }
    
    else{
        alert("Welcome "+username2);
        document.querySelector("#p2").style.display = "none";
        document.querySelector("#reg").style.display = "none";
        document.getElementById("profile2").style.display = "block";
        
        var name2 = document.getElementById("name2");
        name2.innerHTML = username2;
    }
}