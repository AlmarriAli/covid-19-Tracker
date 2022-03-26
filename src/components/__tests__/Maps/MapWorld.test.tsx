import { render, screen } from "@testing-library/react";
import MapWorldComponent from "../../maps/MapWorld";



test('should render the world map', async () => {
    render(<MapWorldComponent />);
    let map = screen.getByTestId('test-map-world')
    expect(map).toBeInTheDocument();
});