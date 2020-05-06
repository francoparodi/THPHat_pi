function plotlyInit() {
    var layout = {title: '', 
                    showlegend: true, 
                    legend: { 'orientation': 'h' }, 
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
                    margin: {
                        l: 30,
                        r: 5,
                        b: 1,
                        t: 0,
                        pad: 0
                      },
                    colorway : ['#ff0000', '#0044ff', '#71e632'],
                    xaxis: {
                        autorange: true,
                        showgrid: false,
                        zeroline: false,
                        showline: false,
                        autotick: true,
                        ticks: '',
                        showticklabels: true
                      },
                    yaxis: {
                        autorange: true,
                        showgrid: true,
                        zeroline: false,
                        showline: true,
                        autotick: true,
                        ticks: '',
                        showticklabels: true
                      }
                };

    var initData = [
        {y:[0], name: 'Temperature', mode: 'lines' }, 
        {y:[0], name: 'Humidity', mode: 'lines' }, 
        {y:[0], name: 'Pressure', mode: 'lines' }
    ];

    Plotly.plot('graphId', initData, layout, {displayModeBar: false} );
}

function plotlyDataUpdate(temperature, humidity, pressure) {
    Plotly.extendTraces('graphId', 
        { y: [[temperature], [humidity], [pressure]] }, [0, 1, 2] );
}