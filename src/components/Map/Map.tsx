import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect, useRef } from "react";
import { MapContainer } from "./Map.styles";

export const Map = (): JSX.Element => {
  /* ######################################## */
  /* State */
  /* ######################################## */
  const mapNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = mapNode.current;

    /* If the dom node is not initialized, then return early */
    if (typeof window === "undefined" || node === null) {
      return;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.538628177485595, 48.955911635291876],
      zoom: 15,
      minZoom: 7,
      maxZoom: 15,
    });

    new mapboxgl.Marker()
      .setLngLat([7.538628177485595, 48.955911635291876])
      .addTo(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <MapContainer ref={mapNode} />;
};
