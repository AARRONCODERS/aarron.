var speechrecognition=window.webkitSpeechRecognition;
var recogonition=new speechrecognition();
function start()
{
    document.getElementById("textarea").innerHTML="";
    recogonition.start();
}
recogonition.onresult=function (event){
    console.log(event);
    output=event.results[0][0].transcript;
    console.log(output);
    document.getElementById("textarea").innerHTML=output;
}
