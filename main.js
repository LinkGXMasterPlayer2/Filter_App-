function preload(){


}

function setup(){

    canvas = createCanvas(640,480);
    canvas.position(100,250);
    video = createCapture(VIDEO);
    video.hide();

    tintColor = "";
    
}

function draw(){

    image(video,0,0,640,480);
    tint(tintColor);
}

function take_snapshot(){

    save("student.png");

}

function filter_tint(){

    tintColor = document.getElementById("colorPicker").value;

}