console.log(d3.json("samples.json"));

   // d3.json("samples.json").then((importeddata) => {
       // var data = importeddata 

    function optionChanged(identification) { 
        d3.json("samples.json").then((data =>{ 
            var meta_data = data.metadata.filter(metadatum => metadatum.id == identification) 
            var sample_data = data.samples.filter(sample => sample.id == identification)

            console.log(meta_data) 
            console.log(sample_data)

            var changed_id = meta_data[0].id 
            console.log(changed_id)
            var bbtype = meta_data[0].bbtype
            var ethnicity = meta_data[0].ethnicity
            var gender = meta_data[0].gender
            var location = meta_data[0].location
            var wfreq = meta_data[0].wfreq 

            var otu_ids = sample_data[0].otu_ids 
            var otu_labels = sample_data[0].otu_labels 
            var sample_values = sample_data[0].sample_values 
            var sample_values_split = sample_values.slice(0,10).reverse() 
            for (var i=0; i < otu_ids.length; i++) { 
                otu_ids[i] = "OTU " + otu_ids[i]; 

            var traceA = {
            type: "bar", 
            x: sample_values_split, 
            y: otu_ids, 
            orientation: "h", 
            text: otu_labels

            }

            var data [traceA]

            var layout = {
                title: `${changed_id} Belly Button Biodiversity Data` 
            } 

            var CHART = d3.selectALL("#bar").node();

            Plotly.newPlot("bar", data, layout) 

            var traceB = { 
            x: otu_ids, 
            y: samples_values_split,
            text: otu_labels, 
            mode: 'markers',
            marker: { 
                size: (sample_values_split_), 
                sizeref: 3
            }

        }

            var layout = {
                title: `Belly Button Biodiversity Data ${changed_id}`
            }

            Plotly.newPlot("bubble", data, layout) 

            var traceC = {
                domain: { x: [0, 1], y: [0, 1]}, 
                value: wfreq,
                type: "indicator", 
                mode: "gauge+number", 
                title: { text: `Wash Frequency ${changed_id`}, 
                gauge: { 
                    axis: { range: [null, 9] },
                }
            }

            var data = [traceC]

            var layout = {
                width: 500, 
                height: 500,
        }

        Plotly.newPlot(gauge, data, layout);


        } 
        }) 
    }
    