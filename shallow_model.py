from keras.preprocessing.image import ImageDataGenerator
from keras.mdodels import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import Activation, Dropout, Flatten, Dense
from keras import backend as K 

img_width, img_height = 224, 224

training_data_dir = 'tbd'
validation_data_dir = 'tbd'
num_training_samples = 50
num_testing_samples = 50
epochs = 50 
batch_size = 5

if K.image_data_format() == 'channels_first':
    input_shape = (3, img_width, img_height)
else:
    input_shape = (img_width, img_height, 3)
# channels corresponds 