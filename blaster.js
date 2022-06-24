status ="";
img ="";
objects = [];
function preload(){
   img = loadImage('nerf_blaster.jpg');
}

function setup(){
    canvas = createCanvas(200,200);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML  = "decting - object";
}

function draw(){
    image(img,0,0,200,200);

    if(status !="")
    {
        for(i=0;i =objects.lengths;i++){

Fill("#ed1509");
percent = floor(objects[i].confidence *100);
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
nofill();
stroke("#ed1509");
rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

function modelLoaded(){
    console.log("model loaded !");
    status = true;
    objectDetector.detect(img,gotRelust);
    
}

function gotRelust(error,results)
{
    objects = results;
    if(error)
    {
        console.log(error);

    } else {
        console.log(results);
    }
}