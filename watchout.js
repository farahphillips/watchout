// start slingin' some d3 here.

// Draw the enemies in an svg element.

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var svg = d3.selectAll("body")
          .append("svg")
          .attr("width", 1000)
          .attr("height", 1000)
          .style("border", "1px solid black");

var enemies = svg.selectAll(".enemies")
          .data(numArr)
          .enter()
          .append("svg:image")
          .attr("xlink:href", "butters.png")
          .attr("width", 100)
          .attr("height", 100)
          .attr("x", function(d) { return d * 75 })
          .attr("y", function(d) { return d * 75 });

// Make it so that the enemies move to a new random location every second.
// Make a differently-colored dot to represent the player. Make it draggable.
// Detect when a enemy touches you.
// Keep track of the user's score, and display it
