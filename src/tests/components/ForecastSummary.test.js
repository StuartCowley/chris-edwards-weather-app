import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

const validProps = {
  date: 1111111,
  description: "Stub description",
  icon: "800",
  temperature: {
    min: 12,
    max: 22,
  },
  onSelect: () => {},
};

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("ForecastSummary prop values", () => {
  it("renders correct values for props", () => {
    const { getByText, getByAltText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
        onSelect={validProps.onSelect}
      />
    );

    expect(getByText("Thursday")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
    expect(getByAltText("800")).toHaveClass("forecast-summary__icon");
  });
});
