import requests

# Set your Paystack secret key
PAYSTACK_SECRET_KEY = 'sk_test_9995bdc439b6742a0cdafe8d401299c1f5205d74'

# Set the endpoint for initiating transactions
PAYSTACK_INIT_TRANSACTION_URL = 'https://api.paystack.co/transaction/initialize'

# Handle the donation request
def initiate_donation(amount, email, reference):
    headers = {
        'Authorization': f'Bearer {PAYSTACK_SECRET_KEY}',
        'Content-Type': 'application/json'
    }
 
    data = {
        'amount': amount,
        'email': email,
        'reference': reference,
        'callback_url': 'http://127.0.0.1:5500/index.html#[object%20Object]'
    }

    response = requests.post(PAYSTACK_INIT_TRANSACTION_URL, json=data, headers=headers)
    return response.json()

# Example usage
if __name__ == "__main__":
    amount = 5000  # amount in kobo (Nigerian currency)
    email = 'example@example.com'  # donor's email
    reference = 'unique_reference'  # unique reference for the donation

    result = initiate_donation(amount, email, reference)
    print(result)


from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Paystack API keys
PAYSTACK_SECRET_KEY = 'sk_test_9995bdc439b6742a0cdafe8d401299c1f5205d74'

# URL for Paystack's payment gateway
PAYSTACK_PAYMENT_URL = 'https://api.paystack.co/transaction/initialize'

@app.route('/pay', methods=['POST'])
def initiate_payment():
    # Retrieve amount and email from request
    amount = request.json['amount']
    email = request.json['email']

    # Payload to send to Paystack's API
    payload = {
        'amount': amount,
        'email': email,
        'currency': 'NGN'
    }

    headers = {
        'Authorization': 'Bearer ' + PAYSTACK_SECRET_KEY,
        'Content-Type': 'application/json'
    }

    # Make request to Paystack's API
    response = requests.post(PAYSTACK_PAYMENT_URL, json=payload, headers=headers)

    # Return the response from Paystack's API
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
