
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );



      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  //has two parameters , first limk of teachable machine and 2nd modelLoaded function that is called to load the teachable machine
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/o9QsJPQXY/model.json',modelLoaded);
//check if the model has loaded

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image'); //captured image id of captured image
    classifier.classify(img, gotResult);   //gotresult is a function, it consists of things that are present in teachable machine that we have trained
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;  //element at 0 , array is sorted according to confidence
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
