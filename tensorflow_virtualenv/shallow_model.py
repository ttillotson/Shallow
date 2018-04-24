from keras import applications
from keras import optimizers
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.layers import Activation, Dropout, Flatten, Dense

# deprecated? Not on updated tutorial
# from keras.layers import Conv2D, MaxPooling2D
# from keras import backend as K 

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
# channels_first is a seeting from the keras config file and basically sets the input order
# channels refers to color channels of images, set to 3 because it is an array of length 3 (rgb)
# https://en.wikipedia.org/wiki/Channel_(digital_image)