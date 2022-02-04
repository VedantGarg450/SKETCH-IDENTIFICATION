function preload(){
    classifier= ml5.imageClassifier("DoodleNet")
}
function setup(){
    canvas= createCanvas(450, 450)
    canvas.position(700, 370)
    background("white")
    canvas.mouseReleased(classify_canvas)
}
function draw(){
    strokeWeight(5)
    stroke("black")
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classify_canvas(){
    classifier.classify(canvas, gotResult)
}
function gotResult(error, result){
    if(error){
        console.log(error)
    }
        console.log(result)
        document.getElementById("label").innerHTML= result[0].label
        document.getElementById("confidence").innerHTML= (result[0].confidence*100).toFixed(1)+"%"

}