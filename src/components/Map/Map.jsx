import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function MyMap() {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.696976, 37.622306], zoom: 13 }}>
        <Placemark geometry={[55.696976, 37.622306]} />
      </Map>
    </YMaps>
  );
}

export { MyMap };
