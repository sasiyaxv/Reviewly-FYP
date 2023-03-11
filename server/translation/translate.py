import sys
from deep_translator import GoogleTranslator

# Translate Sinhala to English
# Free API is utilized since this is not the main focus of this research
def googleTranslate(line):
   return GoogleTranslator(source='auto',target='en').translate(line)


if __name__ == '__main__':
    method_name = sys.argv[1]
    method_args = sys.argv[2:]
    method = globals()[method_name]  
    result = method(*method_args)   
    print(result)