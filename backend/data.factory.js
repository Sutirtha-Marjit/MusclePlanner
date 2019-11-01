module.exports = (jsonData)=>{
    let o=[];
    if(jsonData && jsonData.tracker && jsonData.tracker.length>0){
         const rawHeaders = {...jsonData.tracker[0]};
         const rawHeaderNames = Object.keys(rawHeaders);
         console.log(rawHeaders);
         const rawDataSheet = jsonData.tracker.slice(1);
         rawDataSheet.forEach((obj)=>{
            const newObj={};
            rawHeaderNames.forEach((hName)=>{
                newObj[rawHeaders[hName]] = obj[hName];
                
                o.push(newObj);
            }); 
            
         })
         

    }

    return o;

};