function plotlyInit() {
    var layout = {title: '', 
                    showlegend: false, 
                    legend: { 'orientation': 'h' }, 
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
                    margin: {
                        l: 0,
                        r: 0,
                        b: 1,
                        t: 0,
                        pad: 0
                      },
                    colorway : ['#ff0000', '#0044ff', '#71e632']
                };

    var initData = [
        {y:[0], type:'scatter', mode: 'lines' }, 
        {y:[0], type:'scatter', mode: 'lines' }, 
        {y:[0], type:'scatter', mode: 'lines' }
    ];

    Plotly.plot('graphId', initData, layout, {displayModeBar: false} );
}

function plotlyUpdate() {
    
}