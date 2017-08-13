console.log('random.js loads');

document.getElementById("container").addEventListener("click", function (e) {
  document.getElementById("image").classList.remove("image-left");
  document.getElementById("image").classList.remove("image-right");
  var turn = Math.floor(Math.random()*2)+1;
  console.log('rando numba', turn);
  
  if(turn == 1){
    document.getElementsByTagName("img")[0].setAttribute("src", "arrow_left.png");
  } else {
  document.getElementsByTagName("img")[0].setAttribute("src", "arrow_right.png");
  }
});
