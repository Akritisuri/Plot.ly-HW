console.log(d3.json("samples.json"));

   // d3.json("samples.json").then((importeddata) => {
       // var data = importeddata 

    function gp(id) { 
        d3.json("samples.json").then(data =>{ 
            var meta_data = data.metadata.filter(metadatum.id = id) 
            var sample_data = data.samples.filter(metadatum => metadatum.id = id)

    
            console.log(data)
            var ids = sample_data[0].OTU_ids
            console.log(ids)
            var SampleVal = sample_data[0].sample_values.slice(0,10).reverse();
            console.log(SampleVal)
            var data_labels = sample_data[0].otu_labels.slice(0,10); 
            console.log(data_labels)
            var OTU_TopTen = (sample_data[0].otu_ids.slice(0,10)).reverse();
            console.log(OTU_TopTen)
            var OTU_id = OTU_TopTen.map(d => "OTU" + d);
            var labels = sample_data.samples[0].otu_labels.slice(0,10); 

            console.log(`OTU IDS: ${OTU_id}`) 
            console.log(`OTU_labels: ${labels}`)

            var structure = { 
                    x: sampleValues,
                    y: OTU_id, 
                    text: data_labels,
                    marker: {
                    color: 'blue'},
                    type: "bar"
                    orientation: "h",
                    };

            var data = [structure]

            Plotly.newPlot("Bar",data);
            })}

            gp();

    

        }
    }
