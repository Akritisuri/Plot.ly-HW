function buildMetadata(sample) { 
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultarray = metadata.filter(sampleobject => sampleobject.id == sample); 
        var result = resultarray[0] 
        var PANEL = d3.select("#sample-metadata");

        PANEL.html(""); 
        Object.entries(result).forEach(([key, value]) => {
            PANEL.APPEND("h6").text(`${key} : ${value}`); 
        });
    });
}
