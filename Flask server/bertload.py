from flask import Flask, jsonify, request
from transformers import BertForSequenceClassification

from transformers import BertTokenizer

from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)


@app.route("/bertPrediction", methods=['GET', 'POST'])
def predict():
    data = request.json
    sentence = data['string']

    if len(sentence) == 0:
        response = jsonify({'error': 'Something went wrong'})
        response.status_code = 400
        return response
   

    output_dir = './model_save/'
    model = BertForSequenceClassification.from_pretrained(output_dir)
    
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

    
    inputs = tokenizer.encode_plus(sentence, add_special_tokens=True, return_tensors='pt')
    outputs = model(**inputs)
    
    predictions = outputs.logits.argmax(dim=-1)

    print(predictions)
    number = predictions.item()
    if number == 1:
        return "positive"
    else:
        return "negative"
    
    
if __name__ == "__main__":
    app.run(debug=True)