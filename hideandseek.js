var random_value = Math.floor(Math.random() * 4+1);
     var guess = 1;
     document.getElementById("submitvalue").onclick = function(){
        var user_value = document.getElementById("uservalue").value;
        if(random_value == user_value){
            alert("Congratulatios !! You Guessed it right in " + guess + " Guess ");
        }
        else if(user_value>random_value){
            guess++;
            alert("Please Enter the small value");
        }
        else{
            guess++;
            alert("Please Enter the Greater Number");
        }
     }