function runModel(video, callModel){
    const canvas = document.getElement
    const selectedImages = videoSlicer(video, imageCropper);
    const results = callModel(selectedImages);
    
    function videoSlicer() {
        const totalVideoFrames = null;
        const cropped = [];
        while (cropped.length < 20) {
            const imageSample = totalVideoFrames.sample;
            cropped.push(imageCropper(imageSample, canvas));
        }
        
        
        // Michael will create
        
        function imageCropper(frame) {
            return face 
        }
    }
}