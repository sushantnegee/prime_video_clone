// hide and show logic of add card
function ShowAndHide() {
    var x = document.querySelector(".card_details");
    let y = document.getElementById('checkbox-input')

    if (y.checked) {
        x.style.display = "flex";
    }
    else {
        x.style.display = "none";
    }
}
// card details checking logic
document.getElementById("add_card").addEventListener("click", check);
function check(event) {

    event.preventDefault()

    var name = document.getElementById('cname').value;
    var cnum = document.getElementById('ccnum').value;
    var cvv = document.getElementById('ccvv').value;
    var expiry=document.getElementById('expmonth');


    
    if (name.length == 0 && cnum.length == 0) {
        alert('Please fill in name and cardNumber');

    } else if (name.length == 0) {
        alert('Please fill in Name of card');

    } else if (cnum.length == 0) {
        alert('Please fill in Card Number');
    } else if (cnum.length < 16) {
        alert('Card Number less than 16');

    } else if (cvv.length != 3) {
        alert("CVV not valid");
    } else {
        localStorage.setItem('name', name);
        localStorage.setItem('cnum', cnum);
        localStorage.setItem('cvv', cvv);
        localStorage.setItem('expiry',expiry.value);
        // enabling continue button
        var continueBtn = document.querySelector('.continueBtn');
        continueBtn.style.opacity = '1';
        continueBtn.style.color = '#fff';
        continueBtn.removeAttribute('disabled');
        alert('Your Card id Added');

        // save card
        var tr=document.createElement("tr");


        var td1=document.createElement("td");
        td1.innerText=name;

        var td2=document.createElement("td");
        td2.innerText=cnum;

        var td3=document.createElement("td");
        td3.innerText=cvv;

        
        
        var td4=document.createElement("td");
        td4.innerText="Delete";
        td4.style.color="crimson";
        td4.addEventListener("click",rowdelete)

        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
    }

   
    
}
// delete function in table
function rowdelete(){
    event.target.parentNode.remove();
    event.target.parentNode.innerHTML = "";
    }

// promocode hide and show logic
document.getElementById("promoDown").addEventListener("click", promoClick);
function promoClick() {
    if(document.querySelector('.promoClass').style.display == 'block')
    {
        document.querySelector('.promoClass').style.display = 'none';
    }
    else
    {
        document.querySelector('.promoClass').style.display = 'block';
    }
    
}

// checking promocode is valid or not
document.getElementById("apply_coupon").addEventListener("click",validPromoCode);
function validPromoCode(){
    var valid=document.getElementById("code").value;
    if(valid==="MASAI30")
    {
        document.getElementById("validpromo").innerText="You get 30 days extra free subscription";
    }
    else if(valid==="masai30")
    {
        document.getElementById("validpromo").innerText="You get 30 days extra free subscription";
    }
    else{
        document.getElementById("validpromo").innerText="Invalid PromoCode";
    }
}

// checking OTP and final payment 
document.querySelector(".continueBtn").addEventListener("submit",paid);
function paid(){
    var continueBtn = document.querySelector('.continueBtn');
    if(continueBtn.style.opacity === '1')
    {
        var otp = prompt('Enter a six digit OTP');
        if(otp.length==6)
        {
            alert("Payment Successful");
        }
        else{
            alert("Invalid OTP");
        }
    }


}


