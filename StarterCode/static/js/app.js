
function buildMetadata(sample) {}
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultarray = metadata.filter(sampleobject => sampleobject.id == sample); 
        var result = resultarray[0] 
        var PANEL = d3.select("#sample-metadata");

        console.log(data)

        PANEL.html(""); 
        Object.entries(result).forEach(([key, value]) => {
            PANEL.APPEND("h6").text(`${key} : ${value}`); 
        });
    });
}

function buildCharts(sample) { 
    d3.json("data/samples.json").then((data)) => { 
        var samples = data.samples; 
        var resultarray
    }

}
