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
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the correct forecast details", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getByText(`Humidity: ${validProps.humidity}%`)).toBeInTheDocument();
    expect(
      getByText(`Wind speed: ${validProps.wind.speed}mph`)
    ).toBeInTheDocument();
    expect(
      getByText(`Wind direction: ${validProps.wind.direction}`)
    ).toBeInTheDocument();
    expect(
      getByText(
        `Temp min/max: ${validProps.temperature.min}°C / ${validProps.temperature.max}°C`
      )
    ).toBeInTheDocument();
  });
});
