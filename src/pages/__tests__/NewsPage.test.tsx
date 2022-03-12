import { screen, render, waitFor } from "@testing-library/react";

import NewsPage from "../NewsPage";




test("Should render dashboard correctly", async () => {
    await waitFor(async () => {
        render(<NewsPage />)
        let newsTitle = screen.getByTestId('test-news-title');
        expect(newsTitle).toBeInTheDocument()
    })
})

