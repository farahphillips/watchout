var numArr = [1, 2, 3];

var body = d3.selectAll("body")
          .append("svg")
          .attr("class", "box")
          .attr("width", 1000)
          .attr("height", 500);

// enemy cartman elements
var cartman = body.selectAll(".cartman")
          .data(numArr)
          .enter()
          .append("svg:image")
          .attr("xlink:href", "cartman.png")
          .attr("width", 100)
          .attr("height", 100)
          .attr("x", function() { return 200 * Math.random() } )
          .attr("y", function() { return 200 * Math.random() } )
          .style('position', 'absolute');

// player (butters stotch)
var butters = body.selectAll(".butters")
          .data([1])
          .enter()
          .append("svg:image")
          .attr("xlink:href", "butters.png")
          .attr("class", "butters")
          .attr("width", 150)
          .attr("height", 100)
          .attr("x", function(d) { return d * 400 })
          .attr("y", function(d) { return d * 400 });

// move butters
body.on("mousemove", function() {
  var mouse = d3.mouse(this);
  body.select(".butters")
          .style("x", mouse[0])
          .style("y", mouse[1]);
  });

// move enemy cartmans
var loop = function(cartman) {
  cartman.transition().duration(750)
  .attr("x", function() { return 1000 * Math.random() } )
  .attr("y", function() { return 450 * Math.random() } )
  .each("end", function() { loop(d3.select(this)); });
}

loop(cartman);

// scoreboard
var score = 0;
var highScore = 0;
var scoreKeeper = function() {
  score = score+1;
  highScore = Math.max(score, highScore);
  d3.select(".high span").text(highScore);
  d3.select(".current span").text(score);
};
setInterval(scoreKeeper, 250);

// collisions
var previous = false;
var count = 0;

var detect = function() {
  var collision = false;

  cartman.each(function() {
    var enemy = d3.select(this);
    var a = butters.attr("x") - enemy.attr("x");
    var b = butters.attr("y") - enemy.attr("x");
    var c = a + b;
    if(c < 100) {
      collision = true;
    }
  });

  if(collision) {
    if(previous !== collision) {
      count = count+1;
      d3.select(".collisions span").text(count);
      score = 0;
    }
  }

  previous = collision;
};

d3.timer(detect);
