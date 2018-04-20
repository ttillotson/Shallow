# Pre-Proposal

## Background / Overview 
	- History of DeepFake.
        - DeepFakes made their first online-appearance as an innocent tech-demo, meant to simply swap   faces. Eventually, the software made its way into the hands of the Internet who proceeded to make NSFW videos using popular movie actresses.
	- What does DeepFake do?
        - FakeApp (The modern generator of DeepFakes) will take in a considerable amount of images for a particular person before being given a video. Using the 3-dimensional model of the face, the AI maps over the old face with it’s idea of the target.
	- What is the reason you want to combat this? Moral? Ethical? Consent?
	- What is TensorFlow?
	- Why did we choose it?
	- How will we incorporate it?

## Functionality / MVP
    - How are we going to collect the data?
    - What kind of processing will go into the data?
    - What model will you be using or how will you decide on the model?
    - What kind of training data will you give to the machine? Will it be biased?
        - Images
            - Light-weight 
            - Probably less accurate
        - Videos
            - Heavier
            - Thorough, comprehensive
            - Expected higher accuracy

    - How will you evaluate the data? 
    - What type of dataset will you use to evaluate your process? 
    - What is the basis of your review of the output? Prediction?

## Technologies / Challenges
### Technologies
	- TensorFlow.js
	- Keras 
	- Python 
	- React / Redux 
	- Possible MERN stack
	- AWS / Google Cloud Computing
	- Scraper / Selenium
### Challenges
    - Learning Python, Keras, TensorFlow.js, and core concepts of machine learning
    - Data bias
    - Do we need the entire video or just parts of it?
    - Optimization of data used, data processing, and actual machine training
        - Do we need the entire video or just parts of it?


## Tasks / Timeline
### Tasks
	- Collecting training data
        - This includes false positives and false negatives
        - This is where our bias challenge will arise but more of that data will help
        - Data must not lean more towards positive or negative results; unbiased
    - Preparing the training data
    - Collect evaluation data
        - Must be different from training data
        - Follow the 80 / 20 rule in regards to amount of evaluation data
    - Preparing the evaluation data
    - Train the model
    - Review and evaluate prediction and record results
    - Rinse and repeat until certain time has elapsed or until accurate / effective
    - Front-end stuff such as video upload and analysis
### Timeline 
TBD


