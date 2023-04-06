from flask import Flask, jsonify, request

from keras.models import load_model
import numpy as np
import re 
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
import transliterate
from textblob import TextBlob
from deep_translator import GoogleTranslator


from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def hello():
    return 'Hello, World!'

def tokenize(text):
    max_fatures = 2000
    tokenizer = Tokenizer(num_words=max_fatures, split=' ')
    tokenizer.fit_on_texts(text)
    X = tokenizer.texts_to_sequences(text)
    return X

@app.route('/toEnglish', methods=['GET', 'POST'])
def convert():
    data = request.json
    sentence = data['string']

    if len(sentence) == 0:
        response = jsonify({'error': 'Something went wrong'})
        response.status_code = 400
        return response

    return GoogleTranslator(source='auto',target='en').translate(sentence)

@app.route('/isEnglish', methods=['GET', 'POST'])
def english():
    data = request.json
    sentence = data['string']

    if re.match('[a-zA-Z\s]+$', sentence):
        return "True"
    else:
        return "False"
    
@app.route('/isSinhala', methods=['GET', 'POST'])
def sinhala():
    data = request.json
    sentence = data['string']

    if re.match('^[\u0D80-\u0DFF\u200D\s]+$', sentence):
        return "True"
    else:
        return "False"
    
@app.route('/toSinhala', methods=['GET', 'POST'])
def runscript():
    data = request.json
    sentence = data['string']
    result = transliterate.Translate(sentence)
    return result


@app.route('/getPrediction', methods=['GET', 'POST'])
def prediction():
    data = request.json
    sentence = data['string']
    model = load_model('model2.h5')
    # print(model.summary())

    twt = [sentence]
    #vectorizing the tweet by the pre-fitted tokenizer instance
    twt = tokenize(twt)
    #padding the tweet to have exactly the same shape as `embedding_2` input
    twt = pad_sequences(twt, maxlen=29, dtype='int32', value=0)
    print(twt)
    sentiment = model.predict(twt,batch_size=1,verbose = 2)[0]
    if(np.argmax(sentiment) == 0):
        return "negative"
    elif (np.argmax(sentiment) == 1):
        return "positive"
    
@app.route("/getPredictionTextBlob",methods=['GET','POST'])
def blob():
    data = request.json
    sentence = data['string']
    b = TextBlob(sentence)
    print(b.sentiment.polarity)
    
    if(b.sentiment.polarity > 0.5):
        return "positive"
    else: 
        return "negative"

if __name__ == '__main__':
    app.run(debug=True)
