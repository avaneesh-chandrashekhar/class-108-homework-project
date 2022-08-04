var alligator = 0;
var dog = 0;
var lion = 0;
var macaw = 0;
var background_noise = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KBwBYkzW9/model.json', modelReady);
}

function  modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
  
    console.log("Red "+random_number_r);
    console.log("Green "+random_number_g);
    console.log("Blue "+random_number_b);

    document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+ramdom_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+ramdom_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById("image");

        if(results[0].label == "alligator"){
            alligator = alligator+1;
            document.getElementById("detected").innerHTML = "Detected alligator - "+ alligator;
        }
        else if(results[0].label == "lion"){
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected lion - "+ lion;
        }
        else if(results[0].label == "macaw"){
            macaw = macaw+1;
            document.getElementById("detected").innerHTML = "Detected macaw - "+ macaw;
        }
        else if(results[0].label == "dog"){
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected dog - "+ dog;
        }
        else{
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}
