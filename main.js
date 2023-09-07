var failCount = 0;
function validate(){
   var isFNStartWCapLetter = firstName.value.charAt(0) === firstName.value.charAt(0).toUpperCase();
   var isLNUnder20 = lastName.value.length <= 20;
   var userAge = new Date().getFullYear()- +dob.value.substr(0,4)
   var isdobbtw_16_To_65 = userAge > 16 && userAge < 65;
   var isEmailVaild = email.value.lastIndexOf(".com")== email.value.length-4;
   var isTel10NumAndStart0 = phoneNumber.value.length = 10 && phoneNumber.value[0] === `0`;

   if(isFNStartWCapLetter && isLNUnder20 && isdobbtw_16_To_65 && isEmailVaild && isTel10NumAndStart0){
    failCount = 0;
    alert("form send successfully!");
    return true;
   } else{
    failCount++

    if(failCount===4){
        firstName.disabled = true;
            lastName.disabled = true;
            dob.disabled = true;
            email.disabled = true;
            phoneNumber.disabled = true;
            role.disabled = true;
            btn.disabled = true;

            alert("You need to wait 30 seconds before the next attempt.");
            
            var mySeconds = 30;
                  intervel =  setInterval(function () {
                      mySeconds--;
                      counter.textContent = `${mySeconds} seconds left to restart form`;
                      if(mySeconds ===0){
                          clearInterval(intervel)
                          counter.textContent ="";
                      }
                    }, 1000);

            setTimeout(function () {
                firstName.disabled = false;
                lastName.disabled = false;
                dob.disabled = false;
                email.disabled = false;
                phoneNumber.disabled = false;

                span1.innerHTML = "";
                span2.innerHTML = "";
                span3.innerHTML = "";
                span4.innerHTML = "";
                span5.innerHTML = "";
                firstName.style.border = "0.5px solid black";
                lastName.style.border = "0.5px solid black";
                dob.style.border = "0.5px solid black";
                email.style.border = "0.5px solid black";
                phoneNumber.style.border = "0.5px solid black";
            }, 30000);
        }

    if(!isFNStartWCapLetter){
        span1.innerText = "*first character isn't uppercase!";
        span1.style.color ="red";
        firstName.style.border = "1.5px solid red";
    }
    if(!isLNUnder20){
        span2.innerHTML = "*last name is over 20 characters";
        span2.style.color ="red";
        lastName.style.border = "1.5px solid red";
    }
    if(!isdobbtw_16_To_65){
        span3.innerHTML = "*age is not between 16-65";
        span3.style.color = "red";
        dob.style.border = "1.5px solid red";
    }
    if(!isEmailVaild){
        span4.innerHTML = "*email ia not ended with:`.com`";
        span4.style.color ="red";
        email.style.border = "1.5px solid red";
    }
    if(!isTel10NumAndStart0){
        span5.innerHTML = "*start your phone number with 0!";
        span5.style.color ="red";
        phoneNumber.style.border = "1.5px solid red";
    }
    return false;
   }
} 

// var interval;
// var mySeconds = 30;

// function updateCounter() {
//     counter.textContent = ` ${mySeconds} seconds left to restart form`;
// }

// function startTimer() {
//     if (!interval) {
//         interval = setInterval(function () {
//             mySeconds--;
//             updateCounter();
//         }, 1000); 
//     }
//     }
    // startTimer()

    
    // function updateCounter() {
    //     counter.textContent = ` ${mySeconds} seconds left to restart form`;
    // }
    
    // var interval;
    // var mySeconds = 3;
    //       intervel =  setInterval(function () {
    //           --mySeconds;
    //           counter.textContent = ` ${mySeconds} seconds left to restart form`;
    //           if(mySeconds ===0){
    //               clearInterval(intervel)
    //           }
    //         }, 1000); 

        