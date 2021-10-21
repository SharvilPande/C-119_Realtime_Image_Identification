function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/84EJAQfsc/model.json', modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
}

function modelLoaded() {
    console.log("Model has successfully been initialised");
}

function gotResults(error, results) {
     if (error) {
         console.error(error);
     } else {
         console.log(results);
         document.getElementById("result_for_object").innerHTML = results[0].label;
         document.getElementById("result_for_accuracy").innerHTML = results[0].confidence.toFixed(2)*100+"%";
     }
}