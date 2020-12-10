console.log(d3.json("samples.json"));

function initial(selection) {
    d3.json("samples.json").then((data) => {


        var id = data.metadata[0].id
        console.log(id)
        var bbtype = data.metadata[0].bbtype
        var ethnicity = data.metadata[0].ethnicity
        var gender = data.metadata[0].gender
        var location = data.metadata[0].location
        var wfreq = data.metadata[0].wfreq

        var otuID = data.samples[0].otuID
        var otuLabels = sample_data[0].otuLabels
        var sampleVal = sample_data[0].sampleVal
        var sampleVal_split = sampleVal.slice(0,10).reverse()
        for (var i=0; i < otuID.length; i++) {
            otuID[i] = "OTU " + otuID[i];
        }
        
        var traceA = {
        type: "bar",
        x: sampleVal_split,
        y: otuID,
        orientation: "h",
        text: otuLabels

        }

        var data = [traceA]

        var layout = {
            title: `${changed_id} Belly Button Biodiversity Data`
        }

        var CHART = d3.selectALL("#bar").node();

        Plotly.newPlot("bar", data, layout)

        var traceB = {
        x: otuID,
        y: sampleVal_split,
        text: otuLabels,
        mode: 'markers',
        marker: {
            size: (sampleVal_split),
            sizeref: 2
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
            title: { text: `Wash Frequency: ${changed_id}`,
            gauge: {
                axis: { range: [null, 9] },
            }
        }
    }
        var data = [traceC]

        var layout = {
            width: 500,
            height: 500,
    }

    Plotly.newPlot(gauge, data, layout)
})
}

function optionChanged(selection) {
    d3.json("samples.json").then((data) => {
        var metaData = data.metadata.filter(metadatum => metadatum.id == selection)
        var sampleData = data.samples.filter(sample => sample.id == selection)

        console.log(metaData)
        console.log(sampleData)

        var id = metaData[0].id
        console.log(id)
        var bbtype = metaData[0].bbtype
        var ethnicity = metaData[0].ethnicity
        var gender = metaData[0].gender
        var location = metaData[0].location
        var wfreq = metaData[0].wfreq

        var otuID = sampleData[0].otuID
        var otuLabels = sampleData[0].otuLabels
        var sampleVal = sample_data[0].sampleVal
        var sampleVal_split = sampleVal.slice(0,10).reverse()
        for (var i=0; i < otuID.length; i++) {
            otuID[i] = "OTU " + otuID[i];
        }
        
        var traceA = {
        type: "bar",
        x: sampleVal_split,
        y: otuID,
        orientation: "h",
        text: otuLabels

        }

        var data = [traceA]

        var layout = {
            title: `${changed_id} Belly Button Biodiversity Data`
        }

        var CHART = d3.selectALL("#bar").node();

        Plotly.newPlot("bar", data, layout)

        var traceB = {
        x: otuID,
        y: samplesVal_split,
        text: otuLabels,
        mode: 'markers',
        marker: {
            size: (sampleVal_split_),
            sizeref: 2
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
            title: { text: `Wash Frequency: ${changed_id}`,
            gauge: {
                axis: { range: [null, 9] },
            }
        }
    }
        var data = [traceC]

        var layout = {
            width: 500,
            height: 500,
    }

    Plotly.newPlot(gauge, data, layout)
})
}