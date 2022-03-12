import { render, screen, waitFor } from "@testing-library/react";
import WorldMultiBarChart from "../../charts/WorldMultiBarChart";

test('render multichart copmonent', async () => {

    await waitFor(() => {
        render(<WorldMultiBarChart period={3} />)
        let label = screen.getByTestId("test-world-multibar");
        expect(label).toBeInTheDocument()
    })

})