$(document).ready(function() {
  // d3-tagcloud
  var maxFreq = 0;
  tagCloudList.forEach(function(tag){
    if (tag.frequency > maxFreq) maxFreq = tag.frequency;
  });
  var fill = d3.scale.category20();

  if (maxFreq > 0) {
    d3.layout.cloud().size([300, 300])
        .words(tagCloudList.map(function(t) {
          return {text: t.name, frequency: t.frequency};
        }))
        .rotate(function() { return ~~((Math.random()-0.5)*5)*15 })
        .font("Impact")
        .fontSize(function(t) { return tagScale(t.frequency); })
        .on("end", draw)
        .start();
  }

  function draw(words) {
    d3.select("#d3-tag-cloud-canvas").append("svg")
        .attr("width", 300)
        .attr("height", 300)
      .append("g")
        .attr("transform", "translate(150,150)")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }

  function tagScale(f) {
    return 10 + (Math.log(f) / Math.log(maxFreq)) * 50;
  }
});
