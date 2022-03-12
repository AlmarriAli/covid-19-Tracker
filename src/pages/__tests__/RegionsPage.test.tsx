import { render, screen } from "@testing-library/react";
import RegionsPage from "../RegionsPage";

test("Region page test", () => {
    render(<RegionsPage />)
    let element = screen.getByTestId("test-region-countries-list")
    expect(element).toBeInTheDocument()

})