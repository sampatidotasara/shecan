from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/intern')
def get_intern_data():
    return jsonify({
        "name": "Ronak Dotasara",
        "referralCode": "ronak2025",
        "donations": 1025
    })

if __name__ == '__main__':
    app.run(debug=True)

