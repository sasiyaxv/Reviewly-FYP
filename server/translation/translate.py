from deep_translator import GoogleTranslator

def googleTranslate(line):
   return GoogleTranslator(source='auto',target='en').translate(line)
   