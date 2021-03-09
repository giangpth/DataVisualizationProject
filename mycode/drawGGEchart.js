function getGlobalMinMaxGGE(ggeData)
{
    var liY = []
    for (var i = 0; i < ggeData.length; i++)
    {
        var data = ggeData[i]
        liY.push(data.GGE)
    }
    return {'globalMax': d3.max(liY), 'globalMin': d3.min(liY)};
}

function getGlobalMinMaxGGEPC(ggeData)
{
    var liY = []
    for (var i = 0; i < ggeData.length; i++)
    {
        var data = ggeData[i]
        liY.push(data.GGEPC)
    }
    return {'globalMax': d3.max(liY), 'globalMin': d3.min(liY)};
}

function drawGGEChart(ggeData)
{
    const margin = 60;
    const width = 1000 - 2 * margin;
    const height = 600 - 2 * margin;
    bargap = 30;
    barwidth = 30;

    //the overall svg
    var barsvg = d3.select("svg")
                // .append("svg")
                // .attr("width", width)
                // .attr("height", height);
    //the chart svg
    var chart = barsvg.append('g')
                        .attr('transform', `translate(${margin}, ${margin})`);

    var globalMinMaxGGE = getGlobalMinMaxGGE(ggeData)
    var globalMinMaxGGEPC = getGlobalMinMaxGGEPC(ggeData)
    

    var xScale = d3.scaleBand()
                    .domain(ggeData.map(function (d) { return d.Country; }))
                    .range([0, width])
                    .padding(0.4)
    var yScale = d3.scaleLinear()
                    .domain([0, globalMinMaxGGE['globalMax']])
                    .range([height, 0])

    var zScale = d3.scaleLinear()
                    .domain([0, globalMinMaxGGEPC['globalMax']])
                    .range([height, 0])
    
    var x_axis = d3.axisBottom(xScale);

    var y_axis = d3.axisLeft(yScale)

    var z_axis = d3.axisRight(zScale)

    

    chart.append("g")
            .attr('class', 'x_axis')
            .attr('transform', `translate(0, ${height})`)
            .call(x_axis);
    chart.append('g')
        .call(y_axis)
    
    chart.append('g')
        .attr("transform", "translate(" + width + " ,0)")
        .call(z_axis)

    chart.selectAll()
        .data(ggeData)
        .enter()
        .append('rect')
        .attr('x', (s) => xScale(s.Country))
        .attr('y', (s) => yScale(s.GGE))
        .attr('height', (s) => height - yScale(s.GGE))
        .attr('width', xScale.bandwidth())
        .style('fill', '#fc9d62')
    
    var line = d3.line()
        .x(function(d, i) { return xScale(d.Country) + xScale.bandwidth() / 2; })
        .y(function(d) { return zScale(d.GGEPC); })
        .curve(d3.curveMonotoneX);


    chart.append("path")
        .attr("class", "line") // Assign a class for styling
        .attr("d", line(ggeData));
    
    
  
}
