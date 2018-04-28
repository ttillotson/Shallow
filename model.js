function runModel(video, callModel){
    const canvas = document.getElementById('canvas');
    const selectedImages = videoSlicer(20);
    // const results = callModel(selectedImages);
    
    function videoSlicer(numFrames) {
        const totalVideoFrames = null;
        const cropped = [];
        const _imageCropper = () => {
            const randomFrame = totalVideoFrames.sample; // grab a random frame
            const face = cropFrame(randomFrame); // assign user input to a variable
            if (face !== null) cropped.push(face); // save face if cropped
            if (cropped.length < numFrames) {
                return _imageCropper();
            } else {
                return callModel(selectedImages);
            }
        };

        // Michael will create
        
        function cropFrame(frame) {
            // return face 
        }
    }
}