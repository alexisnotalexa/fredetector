import keras
import os
import pickle

os.environ['KMP_DUPLICATE_LIB_OK']='True'

from keras.preprocessing.image import ImageDataGenerator
from keras.applications.resnet50 import preprocess_input

# Load model
model = pickle.load(open("/Users/alexisokamura/Desktop/fredetector_data/model/model.pkl", "rb"))
model = model['model']

# Load image
PREDICT_DIR = "/Users/alexisokamura/Desktop/fredetector_data/prediction_dataset"
HEIGHT = 150
WIDTH = 150
BATCH_SIZE = 3

prediction_datagen =  ImageDataGenerator(
    preprocessing_function=preprocess_input,
    rotation_range=90,
    horizontal_flip=True,
    vertical_flip=True
  )

prediction_generator = prediction_datagen.flow_from_directory(PREDICT_DIR, 
                                                    target_size=(HEIGHT, WIDTH), 
                                                    batch_size=BATCH_SIZE)

# Do prediction on new image
prediction = model.predict_generator(prediction_generator, steps = 1)

print(prediction)
#with open("/Users/alexisokamura/Desktop/fredetector_data/model/prediction.json", 'wb') as handle:
#    pickle.dump(prediction_object, handle, protocol=pickle.HIGHEST_PROTOCOL)