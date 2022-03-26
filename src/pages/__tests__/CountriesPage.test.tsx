import { render, screen } from '@testing-library/react';
import CountriesPage from '../CountriesPage';



describe("Countries page test", () => {
    it("Should render the Countries page", () => {
        render(<CountriesPage />);
        const title = screen.getByTestId("coutriesList-title");
        expect(title).toBeInTheDocument()
    })

})