function runModel(video, callModel){
    const canvas = document.getElementById('canvas');
    const selectedImages = videoSlicer(20);
    // const results = callModel(selectedImages);
    
    function videoSlicer(numFrames) {
        let cropped = []; // stores all crops to be passed model

        const _imageCropper = () => {
            let frames = []; // stores all frames to be passed to user; will keep selected images
            while (frames.length < numFrames) {
                const randomFrame = sample(totalVideoFrames); // grab a random frame
                frames.push(randomFrame);
            } 

            cropped = cropFrames(frames);

            if (cropped.length < numFrames) {
                return _imageCropper();
            } else {
                return callModel(selectedImages);
            }
        };

        
        // Michael will create
        
        function cropFrames(stateObj) {
            // return face 
        }
    }
    function sample(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}


// To stop people from recropping images that have already been selected, maybe set a rule on the image size?
    // if it's below a threshold (250?) it's greyed out and has been selected? 
    // Maybe assign another attribute to the image and we then map the image into cropped?
    // Serve them both crops and the frames, crops rerenders with each new batch
        // frames would serve numFrames - cropped.length images and cropped would show as selected

// We will need to store available frames and face crops in React State to trigger the actual rerender. How?
    // User will select all the images they want and either submit or requst more (up to 20)
    // Use a function to handle this logic outside of cropFrames?
        // cropFrames is given cropped and frames, and will update React State accordingly.
        // Shoud be fed as an obj then
        // OR, fed frames and returns cropped; it will keep setState on submit/moreFrames to handle cropped



// Is there a difference between naming a function and assigning an unnamed function to a variable