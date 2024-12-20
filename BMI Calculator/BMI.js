setInterval(
    function getHeight() {
        let heightVal = document.getElementById("heightval");
        let height = document.getElementById("height").value;
        let dataHeight = "Height:" + height + "cm";
        heightVal.innerHTML = dataHeight;
    }, 5)


setInterval(
    function getWeight() {
        let weightVal = document.getElementById("weightval");
        let weight = document.getElementById("weight").value;
        let dataWeight = "Weight:" + weight + "kg";
        weightVal.innerHTML = dataWeight;
    }, 5)

setInterval( 
    function getBMI() {
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        let heightm = height/100
        let heightmsq = heightm * heightm
        let bmiContainer = document.getElementById("BMI");
        let BMI = Math.round(weight / heightmsq);
        bmiContainer.innerHTML = BMI + "kg/m^2";
        
}, 5);