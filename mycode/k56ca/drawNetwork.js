
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function drawNetwork(nodes, links)
{
    //draw all the circle with name
    const margin = 30;
    var chartsvg = d3.select("#mysvg")
    var width = chartsvg.node().getBoundingClientRect().width
    var height = chartsvg.node().getBoundingClientRect().height
       
    var simulation = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(-2000))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('link', d3.forceLink().links(links))
        .on('tick', ticked);
    
    function updateLinks() {
        var u = d3.select('.links')
        .selectAll('line')
        .data(links)
    
        u.enter()
        .append('line')
        .merge(u)
        .attr('x1', function(d) {
            return d.source.x
        })
        .attr('y1', function(d) {
            return d.source.y
        })
        .attr('x2', function(d) {
            return d.target.x
        })
        .attr('y2', function(d) {
            return d.target.y
        })
    
        u.exit().remove()
    }
    
    function updateNodes() {
        u = d3.select('.nodes')
        .selectAll('text')
        .data(nodes)
    
        u.enter()
        .append('text')
        .text(function(d) {
            return d.Name
        })
        .merge(u)
        .attr('x', function(d) {
            return d.x
        })
        .attr('y', function(d) {
            return d.y
        })
        .attr('dy', function(d) {
            return 5
        })
    
        u.exit().remove()
    }
    
    function ticked() {
        updateLinks()
        updateNodes()
    }

}