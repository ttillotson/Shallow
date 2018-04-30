# Front Page

## Data Visualization
<!-- Graphs/ Heatmap-Gifs -->

## Accuracy Brag
Trained using the available Deep Fake videos, our model was able to achieve 97% accuracy during our tests. 

## Ethics

Deep Fakes are digital impersonation videos using deep learning to copy a person's likeness onto faces in videos. Surfacing in 2017, deep fakes were created as a way to create fake celebrity pornographic videos. Deep Fakes have already produced numerous scandals for the affected celebrities as well as various individuals who were targets of "revenge porn". As it currently stands, only the quality of the video is able to distinguish the authenticity.

Our goal with this project was to create a Convolutional Neural Network (CNN) capable of distinguishing between real and faked videos in order to protect the reputation and integrity of anyone who could be affected by faked videos.

## Business Application
As our goal is to just create a way to distinguish between real and fake videos, we encourage anyone who has need to use our application. If you are interested in commercially using our work, please reach out to us.

## Concrete Deep Fake Examples
<!-- Will be images -->

## Acknowledgements

Our model uses the VGG16 model, a deep learning neural network specializing in distinguishing images, as its base with the top layers being trained by our team. Further information of this model can be found in their paper:
```
Very Deep Convolutional Networks for Large-Scale Image Recognition
K. Simonyan, A. Zisserman
arXiv:1409.1556
```


## Team Bios
<!-- examples can be found at http://www.schemer.me/#/home/about -->

### Michael Valeriani

### Osbaldo (Ozzy) Paniagua

### Tommy Pham

Tommy is an analytical thinker that enjoys the challenges of debugging new code. His years of experience in the military left him with the problem-solving ability and head-on approach to problems that may intimidate others using Ruby, Ruby on Rails, React, Redux, Javascript, Python, and HTML5/CSS3. The firey passion engendered for the software industry is the result of a new found love for technology and how open-sourced the community and its tools are. He hopes to share this passion with many others and show that the only impossibilities in software is limited by the individuals creativity.

### Travis Tillotson

Travis is full-stack developer with experience in React, Redux, Ruby on Rails, Javascript and Python. With a background in psychology, he enjoys solving problems,  understanding complex relationships and learning about technology. 


# Data

Our model was created using the available Deep Fake videos and images of real people.

## Epoch

Epochs mark the number of times a model goes through a collection of data with a test at the end. Models modify themselves based on their optimizer and loss function based on the results of the test. The more epochs a model cycles through, the more opportunities a model has to "learn". A happy medium needs to be struck on the number of epochs: too few and the model will not have enough to learn from, too many and the model will be over-fitted to the training data.

For our tests, we found the model plateaued at about the 15th epoch with marginal gains after. Though the model did hit a higher accuracy after, we believe that this was the model becoming too fit to our training data and believe that the 15th epoch was the optimal choice for developing our model.

## Batch Size

Batch size is used as a way to break up the amount of data being fed into the model into more managable pieces. With that in mind, larger batches require more memory and do not let the model correct itself through backpropogation as often as smaller batches. Small batches, while easier on memory, can lead to over-corrections as the model generalizes what it learns in each batch. Due to these reasons, we felt the best batch size to balance the memory load and amount of data to be fed was 120.


