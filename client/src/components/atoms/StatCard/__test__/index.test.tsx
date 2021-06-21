import { render, screen } from "@testing-library/react";
import StatCard from "..";

test("Render stat card correctly", () => {
  render(
    <StatCard
      label="Total documents"
      total={25000}
      information="all documents"
      isError={false}
      error=""
    />
  );
  expect(screen.getByRole("stat-card", { hidden: true })).toBeInTheDocument();
  expect(screen.getByRole("stat-label", { hidden: true })).toBeInTheDocument();
  expect(screen.getByRole("stat-total", { hidden: true })).toBeInTheDocument();
  expect(screen.getByRole("stat-helper", { hidden: true })).toBeInTheDocument();
});

test("Render error if something went wrong", () => {
  render(
    <StatCard
      label="Total documents"
      total={25000}
      information="all documents"
      isError={true}
      error="something went wrong"
    />
  );

  expect(screen.getByRole("alert")).toBeInTheDocument();
});
