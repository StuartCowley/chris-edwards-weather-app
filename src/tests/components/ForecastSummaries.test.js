import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 1111111,
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        max: 24,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: "Stub description2",
      icon: "stubIcon2",
      temperature: {
        max: 34,
        min: 1,
      },
    },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render the correct number of ForecastSummaries instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
