function Dc() {
    const tog = document.querySelector("#frm");
    const baContent = document.querySelector(".bt");
    if (tog) {
        tog.classList.add("popUp"); // Ensure "Dc" hides any "Ba" content
        tog.style.display = "block"; // Ensure "Dc" is shown
    }
    if (baContent) {
        baContent.classList.add("popUp");
        baContent.style.display = "none"; // Ensure "Ba" is hidden
    }
}

function ba() {
    const tog = document.querySelector("#frm");
    const togg = document.querySelector(".bt");
    if (tog) {
        tog.classList.add("popUp");
        tog.style.display = "none"; // Ensure "Dc" is hidden
    }
    if (togg) {
        togg.classList.remove("popUp");
        togg.style.display = "block"; // Ensure "Ba" is shown
    }
}

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
    e.preventDefault();

    let handler = PaystackPop.setup({
        key: 'pk_live_e456367a0cf5e02eda98f17e5f514f1256b1747d', // Replace with your public key
        email: document.getElementById("email-address").value,
        amount: document.getElementById("amount").value * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generates a pseudo-unique reference
        onClose: function () {
            alert('Window closed.');
        },
        callback: function (response) {
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
        }
    });

    handler.openIframe();
}
