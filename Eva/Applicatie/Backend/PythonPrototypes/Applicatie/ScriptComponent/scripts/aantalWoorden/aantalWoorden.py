function_name = "test"
import spacy

from spacy import displacy, tokenizer

import pandas as pd

import nltk

import nl_core_news_sm

import unicodedata
import matplotlib.image as image

from nltk.tokenize.toktok import ToktokTokenizer


def number_of_words(data):
    tokens = tokenize_text(data)
    filtered_text = noise_removal(tokens)
    print(filtered_text)
    H = image(rand(100, 100, 3));
    imsave(H)


def tokenize_text(text):
    tokenizer = ToktokTokenizer()
    tokens = tokenizer.tokenize(text)
    return tokens

def noise_removal(tokens):
   stopword_list = nltk.corpus.stopwords.words('dutch')
   filtered_text = remove_stopwords(tokens, stopword_list)
   return filtered_text

def remove_stopwords(tokens, stopword_list):
    tokens = [token.strip() for token in tokens]
    filtered_tokens = [token for token in tokens if token.lower() not in stopword_list]
    filtered_text = ' '.join(filtered_tokens)
    return filtered_text

if __name__ == "__main__":
    number_of_words("abc")
