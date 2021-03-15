
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
        .force('charge', d3.forceManyBody().strength(-1300))
        .force('center', d3.forceCenter(width / 3, height / 3.5))
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
                .attr('r', 20)
                .attr('id', function(d){return d.Name.replace(/ /g,'')})


    var lable = block.append('text')
        .attr('text-anchor', "middle")
        .text(function(d){
            var thisname = d.Name;
            var matches = thisname.match(/\b(\w)/g);
            var tag = matches.join('');
            return tag})
    


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
            .attr('dy', function(d) {return d.y + 3})
        
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; })
        // document.write('tick ')
    }    

    var giang = d3.select("#Giang").style('fill', '#F17405') 
    var cong = d3.select("#DangMinhCong").style('fill', '#F17405') 
    var nguyen = d3.select("#NgoDinhNguyen").style('fill', '#F17405') 
    var quan = d3.select("#KhacQuan").style('fill', '#F17405') 
    var thinh = d3.select("#HungThinh").style('fill', '#F17405')
    var tranh = d3.select("#TrungAnh").style('fill', '#F17405')
    
    //add legend 
    chartsvg.append('g')
            .append("rect")
            .attr('x', width - 150 - 200)
            .attr('y', 10)
            .attr('width', 200)
            .attr('height', function(){return nodes.length*20 + 10})
    
    for (var i = 0; i < nodes.length; i++)
    {
        chartsvg.append('text')
                .attr('x', width - 150 - 200 + 10)
                .attr('y', 30 + i*20)
                .attr('text-anchor', "start")
                .text(function(){
                    var thisname = nodes[i].Name;
                    var matches = thisname.match(/\b(\w)/g);
                    var tag = matches.join('');
                    return tag + ': ' + thisname;
                })
    }
    

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
                    .attr('r', 35)
        
                d3.select(memtag)
                    .transition()
                    .duration(2000)
                    .delay((i)*5000 + 1500)
                    .attr('r', 20)
                       
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