import React from "react";

let LikelyArcRest = (url) => {
    return url.toLowerCase().includes("arcgis/rest/services");
};

let LikelyArcMapServer = (url) => {
  return url.toLowerCase().includes("arcgis/rest/services") && url.toLowerCase().includes("mapserver");
}

let IsMapServer = (url) => {
  let result = fetch(url + "?f=json")
    .then((response) => response.json())
    .then((data) => {
        console.log("WE GOT A RESPONSE!!!");
        console.log(data);
        return data.capabilities.includes("Map");
    });
  console.log("Premature return!!!")
  return false;
}

let GetSourceTypeByUrl = (url) => {
  let layer_type = "Unknown";
  if (LikelyArcRest(url)) {
    console.log("Likely ArcGIS Rest Service");
    if (LikelyArcMapServer(url)) {
        console.log("Likely ArcGIS MapServer");
        if (IsMapServer(url)) {
            console.log("IS ArcGIS MapServer");
            return "ImageArcGISRest";
        } else {
            console.log("IS NOT ArcGIS MapServer");
        }
    }
  }
  
  return layer_type;
}

export default GetSourceTypeByUrl;