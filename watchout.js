// Draw the enemies in an svg element.

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var svg = d3.selectAll("body")
          .append("svg")
          .attr("width", 1000)
          .attr("height", 1000);

var cartman = svg.selectAll(".cartman")
          .data(numArr)
          .enter()
          .append("svg:image")
          .attr("xlink:href", "cartman.png")
          .attr("width", 100)
          .attr("height", 100)
          .attr("x", function() { return 600 * Math.random() } )
          .attr("y", function() { return 600 * Math.random() } )
          .style('position', 'absolute');

// Make a differently-colored dot to represent the player.
var butters = svg.selectAll(".butters")
          .data([1])
          .enter()
          .append("svg:image")
          .attr("xlink:href", "butters.png")
          .attr("width", 150)
          .attr("height", 100)
          .attr("x", function(d) { return d * 400 })
          .attr("y", function(d) { return d * 400 });

// Make the player draggable.

// drag = d3.behavior.drag()
//        .on("drag", mover);



// Make it so that the enemies move to a new random location every second.

var loop = function(cartman) {
  cartman.transition().duration(750)
  .attr("x", function() { return 800 * Math.random() } )
  .attr("y", function() { return 800 * Math.random() } )
  .each("end", function() { loop(d3.select(this)); });
}

loop(cartman);

// Detect when a enemy touches you.





// Keep track of the user's score, and display it
