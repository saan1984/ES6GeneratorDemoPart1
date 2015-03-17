var FruitGenerator = function*(){
    yield "Apple";
    yield "Orange";
    yield "Grapes";
    yield "Mango";
};


var aFruitGenerator = FruitGenerator(),
    nextFruit = aFruitGenerator.next(),
    messageElement = document.getElementById("message");

//next object  has value and done property
console.log(JSON.stringify(nextFruit));

while(!nextFruit.done){
    var liElement = document.createElement('li');
    liElement.innerText = nextFruit.value;
    messageElement.appendChild(liElement);
    nextFruit = aFruitGenerator.next();
}

