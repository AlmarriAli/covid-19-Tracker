import { render, screen } from "@testing-library/react";
import MainNav from "../baseComponents/Main-nav";
import SkeletonBase from "../baseComponents/SkeletonBase";




test('should render the main nav', async () => {
    render(<SkeletonBase />);
    let title = screen.getByText('Loading...')
    expect(title).toBeInTheDocument();
});