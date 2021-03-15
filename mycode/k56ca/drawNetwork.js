
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
        .force('charge', d3.forceManyBody().strength(-3500))
        .force('center', d3.forceCenter(width / 3, height / 2))
        .force('link', d3.forceLink().links(links))
        .on('tick', ticked);
    
    var link = chartsvg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')

    
    //create a group for node that will contain a circle and a lable
    var node = chartsvg.selectAll('g')
                        .attr('class', 'nodes')
                        .data(nodes)
    
    //block of a node that contains circle and text
    var block = chartsvg.selectAll('nodes')
                        .data(nodes)
                        .enter()
                        .append('g')


    var circle = block.append('circle')
                .attr('r', 30)
                .attr('id', function(d){return d.Name.replace(/ /g,'')})


    var lable = block.append('text')
        .attr('text-anchor', "start")
        .text(function(d){return d.Name})
    


    function ticked()
    {
        node
            .attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; });
        circle
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; })
        lable
            .attr('dx', function(d) {return d.x})
            .attr('dy', function(d) {return d.y})
        
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; })
        // document.write('tick ')
    }    
    // simulation.stop()
    // simulation.tick()
    // var selected = d3.select(["#HoangAnh").style('fill', 'red') 
    // var giang = d3.select("#Giang").attr('r', 40) 
    // var cong = d3.select("#DangMinhCong").attr('r', 40) 
    // var nguyen = d3.select("#NgoDinhNguyen").attr('r', 40) 
    // var quan = d3.select("#KhacQuan").attr('r', 40) 
    // var thinh = d3.select("#HungThinh").attr('r', 40) 

    d3.transition()
        .delay(10000)
        .on('start', repeat)
    
   
    function repeat()
    {
        // document.write('Repeat')
        for (var i = 0; i < groups.length; i++)
        {
            var num = groups[i].Number
            // document.write(num)
            for (var j = 0; j < num; j++)
            {
                var memname = groups[i].Mem[j];
                var memtag = "#"
                memtag += memname.replace(/ /g,'')
                d3.select(memtag)
                    .transition()
                    .duration(1500)
                    .delay((i)*5000)
                    .attr('r', 60)
        
                d3.select(memtag)
                    .transition()
                    .duration(2000)
                    .delay((i)*5000 + 1500)
                    .attr('r', 30)
                       
            }
            if (i == groups.length - 1)
            {
                d3.transition()
                    .delay(5000*groups.length)
                    .on('end', repeat)
            }
        }
    }
}