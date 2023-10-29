import React from "react";

import { MintButton, DispenseButton } from "../components/DispenserButtons";
import { AddDataButton, GetDataButton } from "../components/DataButtons";
import { NavigationBar } from "../components/NavigationBar";
import { DataBox } from "../components/DataBox";
import "../App.css";

export function Marketplace() {
  return (
    <div className="h-full pl-10 pr-10">
      <div className="h-full grid grid-cols-3 gap-4">
        <DataBox
          title="Miami-Dade Housing Prices Prediction"
          subTitle="2020 - 2023"
          fitRate="0.95"
        />
        <DataBox
          title="San Francisco California Rent Forecast"
          subTitle="2018 - 2023"
          fitRate="0.89"
        />

        <DataBox
          title="New York City, NY Traffic Prediction"
          subTitle="2015 - 2023"
          fitRate="0.92"
        />

        <DataBox
          title="Chicago Crime Rate Analysis Data Set"
          subTitle="2000 - 2023"
          fitRate="0.90"
        />

        <DataBox
          title="Seattle Population Growth Estimation"
          subTitle="2022 - 2023"
          fitRate="0.93"
        />

        <DataBox
          title="Boston Technology Job Market Trends"
          subTitle="2019 - 2023"
          fitRate="0.91"
        />

        <DataBox
          title="Los Angeles Water Consumption Forecast"
          subTitle="2021 - 2023"
          fitRate="0.88"
        />

        <DataBox
          title="Houston Energy Consumption Model"
          subTitle="2005 - 2023"
          fitRate="0.94"
        />

        <DataBox
          title="Denver Progressive Weather Pattern Analysis"
          subTitle="2010 - 2023"
          fitRate="0.87"
        />
      </div>
    </div>
  );
}
