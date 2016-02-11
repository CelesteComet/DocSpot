window.onload = function(){

  var squares_htmlcollection = document.getElementsByClassName('square');

  var squares = []

  setInterval(function(){
    colorSquare(getRandomSquare())
  }, 250)

  setInterval(function(){
    // set a breakpoint here 
  }, 249)

  for(var i = 0; i < squares_htmlcollection.length; i++){
    squares.push(squares_htmlcollection[i]);
  }
  
  function getRandomNumber(max){
    return Math.floor(Math.random() * (0 + max) + 0);
  }

  function getRandomSquare(){
    var square = squares.splice(Math.floor(Math.random() * squares.length), 1)[0]
    return square
  }

  function timeout(square){
    setTimeout(function(){
      squares.push(square);
      square.style.backgroundColor = 'red';
    }, 2000)
  }

  function colorSquare(square){
    var colors = ['green','orange','blue','purple','yellow'];
    colors.splice(colors.indexOf(square.style.backgroundColor), 1);
    square.style.backgroundColor = colors[getRandomNumber(colors.length)];
    timeout(square);
  }

};