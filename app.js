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

            var otu_ids = samples[0].otu_ids 
            var otu_labels = samples[0]


    
            var ids = sample_data[0].otu_ids
            console.log(ids)
            var SampleVal = sample_data[0].sample_values.slice(0,10).reverse();
            console.log(SampleVal)
            var data_labels = sample_data[0].otu_labels.slice(0,10); 
            console.log(data_labels)
            var OTU_TopTen = (sample_data[0].otu_ids.slice(0,10)).reverse();
            console.log(OTU_TopTen)
            var OTU_id = OTU_TopTen.map(d => "OTU" + d);
            var labels = sample_data[0].otu_labels.slice(0,10); 

            console.log(`OTU IDS: ${OTU_id}`) 
            console.log(`OTU_labels: ${labels}`)

            var structure = { 
                    x: sampleValues,
                    y: OTU_id, 
                    text: data_labels,
                    marker: {
                    color: 'blue'},
                    type: "bar",
                    orientation: "h",
                    };

            var data = [structure]

            Plotly.newPlot("Bar",data);
            })}

            gp();

  