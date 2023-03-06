import sys
from deep_translator import GoogleTranslator

def googleTranslate(line):
   return GoogleTranslator(source='auto',target='en').translate(line)


if __name__ == '__main__':
    method_name = sys.argv[1]
    method_args = sys.argv[2:]
    method = globals()[method_name]  # Get the method by name
    result = method(*method_args)   # Call the method with the arguments
    print(result)