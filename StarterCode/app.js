console.log(d3.json("samples.json"));

   // d3.json("samples.json").then((importeddata) => {
       // var data = importeddata 

    function gp(id) { 
        d3.json("samples.json").then(data =>{ 
            var ids = data.samples[0].OTU_ids
            
            var SampleVal = data.samples[0].sample_values.slice(0,10).reverse();
            var data_labels = data.samples[0].otu_labels.slice(0,10); 
            var OTU_TopTen = (data.samples[0].otu_ids.slice(0,10)).reverse();
            var OTU_id = OTU_TopTen,map(d => "OTU" + d);
            var labels = sampledata.samples[0].otu_labels.slice(0,10); 

    

        }
    }
