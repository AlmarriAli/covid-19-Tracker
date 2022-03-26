import { render, screen } from "@testing-library/react";
import SearchcountriesForm from "../../forms/SearchCountriesForm";

test('render search form', async () => {
    const handleSearch = jest.fn()
    render(<SearchcountriesForm handleSearch={handleSearch} />)
    let inputForm = screen.getByTestId('test-search-form')
    expect(inputForm).toBeInTheDocument()
})

// test("it sholud filter the search data according to seach value", () => {
//     const mockFilteredSearch = [
//         "Ukraine", "UK"
//     ]
//     const handleSearch = jest.fn();
//     handleSearch.mockResolvedValue(mockFilteredSearch)
//     render(<SearchcountriesForm handleSearch={handleSearch} />)
//     const UKCard = screen.getByTestId("test-country-card-UK");

//     expect(UKCard).toBeInTheDocument()

// })