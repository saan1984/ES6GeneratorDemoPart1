System.registerModule("../dev/my-generator.js", [], function() {
  "use strict";
  var __moduleName = "../dev/my-generator.js";
  var FruitGenerator = $traceurRuntime.initGeneratorFunction(function $__0() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return "Apple";
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = 6;
            return "Orange";
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            $ctx.state = 10;
            return "Grapes";
          case 10:
            $ctx.maybeThrow();
            $ctx.state = 12;
            break;
          case 12:
            $ctx.state = 14;
            return "Mango";
          case 14:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__0, this);
  });
  var aFruitGenerator = FruitGenerator(),
      nextFruit = aFruitGenerator.next(),
      messageElement = document.getElementById("message");
  console.log(JSON.stringify(nextFruit));
  while (!nextFruit.done) {
    var liElement = document.createElement('li');
    liElement.innerText = nextFruit.value;
    messageElement.appendChild(liElement);
    nextFruit = aFruitGenerator.next();
  }
  return {};
});
System.get("../dev/my-generator.js" + '');
