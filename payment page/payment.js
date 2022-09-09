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


const renderCards = () => {
    const cards = JSON.parse(localStorage.getItem('cards')) || []

    document.querySelector("tbody").innerHTML = null
    cards.forEach((el, index) => {
        // save card
        var tr = document.createElement("tr");


        var td1 = document.createElement("td");
        td1.innerText = el.name;

        var td2 = document.createElement("td");
        td2.innerText = el.cnum;

        var td3 = document.createElement("td");
        td3.innerText = el.expiry;



        var td4 = document.createElement("td");
        td4.innerText = "Delete";
        td4.style.color = "crimson";
        td4.addEventListener("click", (event) => rowdelete(event, index))

        tr.append(td1, td2, td3, td4);
        document.querySelector("tbody").append(tr);


    })
}
renderCards();
function check(event) {

    event.preventDefault()

    var name = document.getElementById('cname').value;
    var cnum = document.getElementById('ccnum').value;
    var cvv = document.getElementById('ccvv').value;
    var expiry = document.getElementById('expmonth').value;



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
        // enabling continue button
        var continueBtn = document.querySelector('.continueBtn');
        continueBtn.style.opacity = '1';
        continueBtn.style.color = '#fff';
        continueBtn.removeAttribute('disabled');
        alert('Your Card id Added');

        const cards = JSON.parse(localStorage.getItem('cards')) || []
        cards.push({ name, cnum, cvv, expiry })
        localStorage.setItem('cards', JSON.stringify(cards))
        renderCards()

    }



}
// delete function in table
function rowdelete(event, index) {
    const cards = JSON.parse(localStorage.getItem('cards')) || []
    cards.splice(index, 1)
    // cards = JSON.parse(localStorage.getItem('cards')) || []
    localStorage.setItem('cards', JSON.stringify(cards))
    renderCards()
}

// promocode hide and show logic
document.getElementById("promoDown").addEventListener("click", promoClick);
function promoClick() {
    if (document.querySelector('.promoClass').style.display == 'block') {
        document.querySelector('.promoClass').style.display = 'none';
    }
    else {
        document.querySelector('.promoClass').style.display = 'block';
    }

}

// checking promocode is valid or not
document.getElementById("apply_coupon").addEventListener("click", validPromoCode);
function validPromoCode() {
    var valid = document.getElementById("code").value;
    if (valid === "MASAI30") {
        document.getElementById("validpromo").innerText = "You get 30 days extra free subscription";
    }
    else if (valid === "masai30") {
        document.getElementById("validpromo").innerText = "You get 30 days extra free subscription";
    }
    else {
        document.getElementById("validpromo").innerText = "Invalid PromoCode";
    }
}

// checking OTP and final payment 
document.querySelector(".continueBtn").addEventListener("submit", paid);
function paid() {
    var continueBtn = document.querySelector('.continueBtn');
    if (continueBtn.style.opacity === '1') {
        var otp = prompt('Enter a six digit OTP');
        if (otp.length == 6) {
            alert("Payment Successful");
            
            window.location.href = '/categoies/categories.html';
            
        }
        else {
            alert("Invalid OTP");
        }
    }


}