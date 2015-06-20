var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var body = d3.selectAll("body")
          .append("svg")
          .attr("class", "box")
          .attr("width", 1000)
          .attr("height", 500);

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

body.on("mousemove", function() {
  var mouse = d3.mouse(this);
  body.select(".butters")
          .style("x", mouse[0])
          .style("y", mouse[1]);
  });

var loop = function(cartman) {
  cartman.transition().duration(750)
  .style("x", function() { return 1000 * Math.random() } )
  .style("y", function() { return 450 * Math.random() } )
  .each("end", function() { loop(d3.select(this)); });
}

loop(cartman);

// Detect when a enemy touches you.




// Keep track of the user's score, and display it
