import { render, screen } from "@testing-library/react";
import RegionCountriesList from "../../regions/RegionCountriesList";




test("render Region countries list", () => {
    render(<RegionCountriesList />)
    let label = screen.getByTestId("title-region-countries-list")
    expect(label).toBeInTheDocument()
})
