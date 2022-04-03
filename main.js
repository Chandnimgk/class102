prediction_1="";
prediction_2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quilte:90
});
camer=document.getElementById("camera");
Webcam.attach('#camra');

function take_snapshot(){
    Webcam.sanp(function(data_url)
    {document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_url+'">';
})
}  
console.log('ml5version;',ml5.version);
classfier=ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/dBCYdwF_T/model.json',modelloaded);
function modelloaded()
{
    console.log("model loded");
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="and the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
      synth.speak(utterThis);
}

function check()
{
   img=document.getElementById('capture_image');
   classfier.classify(img , gotresult);
}

function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if(prediction_1=="happy")
        {
            document.getElementById("update_emoji").innerHTML="&#128522";
        }
        if(prediction_1=="sad")
        {
            document.getElementById("update_emoji").innerHTML="&#128532";
        }
        if(prediction_1=="angry")
        {
            document.getElementById("update_emoji").innerHTML="&#128548";
        }
        if(prediction_2=="happy")
        {
            document.getElementById("update_emoji2").innerHTML="&#128522";
        }
        if(prediction_2=="sad")
        {
            document.getElementById("update_emoji2").innerHTML="&#128532";
        }
        if(prediction_2=="angry")
        {
            document.getElementById("update_emoji2").innerHTML="&#128548";
        }
    }
}