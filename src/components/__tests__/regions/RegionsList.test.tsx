import { render, screen } from "@testing-library/react";
import RegionsList from "../../regions/RegionsList";




test("render Region list", () => {
    render(<RegionsList />)
    let label = screen.getByTestId("test-region-list")
    expect(label).toBeInTheDocument()
})
