import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect, useRef } from "react";
import { MapContainer } from "./Map.styles";
import { details } from "@constants/details";
import { theme } from "@styles";

/* @see https://docs.mapbox.com/mapbox-gl-js/api/ */
export const Map = (): JSX.Element => {
  /* ######################################## */
  /* State */
  /* ######################################## */
  const mapNode = useRef<HTMLDivElement>(null);

  const { latitude, longitude } = details.geoLocation;

  useEffect(() => {
    const node = mapNode.current;

    /* If the dom node is not initialized, then return early */
    if (typeof window === "undefined" || node === null) {
      return;
    }

    /* @see https://docs.mapbox.com/mapbox-gl-js/api/markers/ */
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: process.env.MAPBOX_TOKEN,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 15,
      minZoom: 7,
      maxZoom: 15,
    });

    // const popup = new mapboxgl.Popup()
    //   .setText('The Smokey Monkey')
    //   .addTo(mapboxMap);

    new mapboxgl.Marker({
      color: theme.colors.darkGreen,
    })
      .setLngLat([longitude, latitude])
      .addTo(mapboxMap);
    // .setPopup(popup);

    return () => {
      mapboxMap.remove();
    };
  }, [latitude, longitude]);

  return <MapContainer ref={mapNode} />;
};
