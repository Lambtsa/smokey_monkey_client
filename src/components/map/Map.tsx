"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";
import {
  type ReactElement, useEffect, useRef 
} from "react";

import { details } from "@/constants/details";

/* --color-dark-green in globals.css: the marker colour is set in JavaScript */
const DARK_GREEN = "#15361B";

interface MapProps {
  accessToken: string;
}

export const Map = ({ accessToken }: MapProps): ReactElement => {
  /* ######################################## */
  /* State */
  /* ######################################## */
  const mapNode = useRef<HTMLDivElement>(null);
  const { latitude, longitude } = details.geoLocation;

  useEffect(() => {
    const node = mapNode.current;

    /* If the dom node is not initialized, then return early */
    if (node === null || !accessToken) {
      return;
    }

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 15,
      minZoom: 7,
      maxZoom: 15,
    });

    new mapboxgl.Marker({
      color: DARK_GREEN,
    })
      .setLngLat([longitude, latitude])
      .addTo(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, [accessToken, latitude, longitude]);

  return <div ref={mapNode} className="w-full h-full min-h-[300px] md:min-h-dvh" />;
};
