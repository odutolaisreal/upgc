function Dc() {
    const tog = document.querySelector("#frm")
    tog.classList.toggle("popUp")
};
function ba() {
    var togg = document.querySelector(".bt")
    togg.classList.toggle("popUp").style.display = "block"
};

const form = document.getElementById("payForm");
form.addEventListener("submit", payNow);












function pay(e) {
    e.preventdefault();

    var donation_amt = document.getElementById("donation_amt").value
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-878a97640fc55cccbf0f33f1c35fa41c-X",
        tx_ref: txRef,
        amount: document.getElementById('donation_amt').value * 100,
        currency: "NGN",
        redirect_url: "http://127.0.0.1:5501/success.html",
        meta: {
            address: address,
            date: date,
        },




        customer: {
            email: email,
            phone_number: phone,
            name: name,


        },
        customizations: {
            title: "UPGC Ministries",
            description: "Payment for purchase",
            logo: "http://127.0.0.1:5501/assets/images/UPGC%20LOGO.PNG",
        },
        onclose: function () { },
        callback: function (data) {
            const reference = data.tx_ref;
            console.log("This is the data returned after a charge", data);
            if (data.tx.chargedata == "00" || data.tx.chargedata == "0") {
                window.location = "http://127.0.0.1:5501/success.html"
                // redirect to a success page
            } else {
                window.location = "http://127.0.0.1:5501/failure.html"
                // redirect to a failure page.
            }
        },
    });
}