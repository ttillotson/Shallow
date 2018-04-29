# Shallow

[Check us out!]()

Shallow is a web-based application capable of distinguishing between authentic and face-swapped videos. Developed using VGG16, a Keras convolutional neural network specializing in photo-recognition, Shallow uses React.js and Tensorflow.js.

## Why we made Shallow

In 2017, fake celebrity pornographic videos called Deep Fakes surfaced, creating scandals for all involved and opening the door to what is actually possible to fake. Since it's introduction, the technology behind DeepFakes has been used in politics as well as "revenge porn". As it currently stands, only the quality of the video is able to distinguish the authenticity, and that will disappear as the process is refined.

Our goal with this project was to create a Convolutional Neural Network (CNN) capable of distinguishing between real and faked videos in order to protect the reputation and integrity of anyone who could be affected by faked videos.

## How Effective is it?

![Loss vs. Accuracy Graph]()

Our base model for Shallow is VGG16, an award winning photo-recognition CNN. Since we are using an already establish model, we only needed to fine tune it for our purposes. With that in mind, we were able to achieve 99% accuracy with our model. 

It should be noted though, that our model was trained on the data available to us and may not be fully representative for all people. With that in mind, we aspire to continue teaching and developing our model if the current trend continues to grow.

## User Application

![Demo-Gif]()

Users will be able to upload a video, select the face crops they want to test, and once they have 20, run them through the model. From there, the user will wait as the model processes the image and then told whether our model believes the image is fake or not.