var period = new Audio("period.mp3")
var meltbitter = new Audio("melt bitter.mp3")

lwX = 0
lwY = 0

rwX = 0
rwY = 0

function preload(){
    period = loadSound("period.mp3")
    meltbitter = loadSound("melt bitter.mp3")
}

function setup(){
    canvar = createCanvas(1000, 1000)
    canvar.position(800, 300)

    mYvIdEoYaY = createCapture(VIDEO)
    mYvIdEoYaY.hide()

    fishNet = ml5.poseNet(mYvIdEoYaY, heehee)
    fishNet.on("pose", PosesInTheBank)
}

function draw(){}

function heehee(){
    console.log("Michael Jackson")
}

function PosesInTheBank(result){
    if(result.length > 0){
        console.log(result)

        lwX = result[0].pose.leftWrist.x
        lwY = result[0].pose.leftWrist.y
        console.log(lwX + ", " + lwY)

        rwX = result[0].pose.rightWrist.x
        rwY = result[0].pose.rightWrist.y
        console.log(rwX + ", " + rwY)
    }
}