import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import GetSourceTypeByUrl from "../Indentification";

const url_suite = [
    ["https://maritimeboundaries.noaa.gov/arcgis/rest/services/MaritimeBoundaries/US_Maritime_Limits_Boundaries/MapServer", "ImageArcGISRest"]
    // ["", "OSM"],
    // ["http://portal.midatlanticocean.org/tessellator/tiles/broad-zones/BroadCoralTiles200m/${z}/${x}/${y}.png", "XYZ"]
    // ["", "wms"],
    // ["", "Vector"],
    // ["", "VectorTile"],
];

test("detect URL source type", () => {
    render(<App />);
    // expect(url_suite.length).toBe(2);
    for (let i = 0; i < url_suite.length; i++) {
        expect(GetSourceTypeByUrl(url_suite[i][0])).toBe(url_suite[i][1]);
    }
    // expect(GetSourceTypeByUrl(url_suite[0][0])).toBe(url_suite[0][1]);
    // expect(screen.getByText("Omnilayers")).toBeInTheDocument(); 
})