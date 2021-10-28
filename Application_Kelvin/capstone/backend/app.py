################################################################################################
##                                                                                            ##
## This is the backend of the application, it receive data from the frontend and pass them to ##
## the pickle file, which is a digital intergration version of random forest algorithm. The   ##
## result will later pass back to the frontend and display to the user.                       ##
##                                                                                            ##
################################################################################################

import numpy as np
from flask import Flask, request, make_response
import pickle
from flask_cors import CORS, cross_origin
import re

app = Flask(__name__)
cors = CORS(app, supports_credentials=True)
# cors.init_app(app=app, resources={r"/*": {"origins": "http://192.168.1.168:3000"}})

# load serialized model
model = pickle.load(open('model.pkl', 'rb'))

# display the index page
@app.route('/<data>', methods=['GET'])
@cross_origin()
def home(data):
    s = [float(s) for s in re.findall(r'-?\d+\.?\d*', data)]
    final_values = [np.array(s)]
    print(final_values)
    prediction = model.predict(final_values)
    if prediction == 0:
        output = '000'
    else:
        output = '111'
    res = make_response(output)
    # res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Access-Control-Allow-Method'] = 'GET'
    res.headers['Access-Control-Allow-Headers'] = '*'

    return res

if __name__ == "__main__":
    app.run(port=5000, debug=True)
