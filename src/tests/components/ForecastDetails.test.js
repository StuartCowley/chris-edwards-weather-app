import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    humidity: 71,
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct forecast details", () => {
    const { getByText } = render(<ForecastDetails forecasts={validProps} />);
    // expect(getByText(`Humidity: ${validProps.humidity}`)).toBeInTheDocument();
    expect(
      getByText(`Wind Speed ${validProps.wind.speed}`)
    ).toBeInTheDocument();
    expect(
      getByText(`Wind Direction ${validProps.wind.direction}`)
    ).toBeInTheDocument();
    expect(
      getByText(`Temp Min ${validProps.temperature.min}`)
    ).toBeInTheDocument();
    expect(
      getByText(`Temp Max ${validProps.temperature.max}`)
    ).toBeInTheDocument();
  });
});
