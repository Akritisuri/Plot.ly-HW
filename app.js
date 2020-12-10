function optionChanged(identification) {
    d3.json("samples.json").then((data) => {
        var meta_data = data.metadata.filter(metadatum => metadatum.id == identification)
        var sample_data = data.samples.filter(sample => sample.id == identification)
        console.log(meta_data)
        console.log(sample_data)
        var changed_id = meta_data[0].id
        var bbtype = meta_data[0].bbtype
        var ethnicity = meta_data[0].ethnicity
        var gender = meta_data[0].gender
        var location = meta_data[0].location
        var wfreq = meta_data[0].wfreq
        var otu_ids = sample_data[0].otu_ids
        var otu_labels = sample_data[0].otu_labels
        console.log(changed_id)
        console.log(bbtype)
        for (var i=0; i < otu_ids.length; i++) {
            otu_ids[i] = "OTU " + otu_ids[i];
        var traceA = {
        type: "bar",
        x: sample_data[0].sample_values.slice(0,10).reverse(),
        y: otu_ids,
        orientation: "h",
        text: otu_labels
        }
        var data = [traceA]
        var layout = {
            title: `${changed_id} Belly Button Biodiversity Data`
        }
        var CHART = d3.selectAll("#bar").node();
        Plotly.newPlot("bar", data, layout)
        var traceB = {
        x: sample_data[0].sample_values.slice(0,10).reverse(),
        y: otu_ids,
        text: otu_labels,
        mode: 'markers',
        marker: {
            size: (sample_data[0].sample_values.slice(0,10).reverse()),
            sizeref: 3
            }
        }
        var data = [traceB]
        var layout = {
            title: `Belly Button Biodiversity Data ${changed_id}`
        }
        Plotly.newPlot("bubble", data, layout)
        var traceC = {
            domain: { x: [0, 1], y: [0, 1]},
            value: wfreq,
            type: "indicator",
            mode: "gauge+number",
            title: { text: `Wash Frequency: ${changed_id}`},
            gauge: {
                axis: { range: [null, 9] },
            }
        }
        var data = [traceC]
        var layout = {
            width: 500,
            height: 500,
    }
    Plotly.newPlot(gauge, data, layout)
    }
    })
}