import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

const validProps = {
  date: 1111111,
  description: "Stub description",
  icon: "stubIcon",
  temperature: {
    min: 12,
    max: 22,
  },
};

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("ForecastSummary prop values", () => {
  it("renders correct values for props", () => {
    const { getByText } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(getByText("1111111")).toHaveAttribute(
      "class",
      "forecast-summary__date"
    );
    expect(getByText("Stub description")).toHaveAttribute(
      "class",
      "forecast-summary__description"
    );
    expect(getByText("22°C")).toHaveAttribute(
      "class",
      "forecast-summary__temperature"
    );
    expect(getByText("stubIcon")).toHaveAttribute(
      "class",
      "forecast-summary__icon"
    );
  });
});
