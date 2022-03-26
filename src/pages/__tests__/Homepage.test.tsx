
import { render, screen, waitFor } from '@testing-library/react';


import HomePage from '../HomePage';






test('renders learn react link', async () => {
  render(<HomePage />);
  await waitFor(async () => {
    const linkElement = await screen.getByTestId('home-title');
    expect(linkElement).toBeInTheDocument();
  })
});

test('should render today cases', async () => {
  render(<HomePage />);

  let skeleton = screen.getByText('Today Deaths')
  expect(skeleton).toBeInTheDocument();

});

test('should render active cases', async () => {
  render(<HomePage />);
  let ActiveCasesLabel = screen.getByText('Active cases')
  expect(ActiveCasesLabel).toBeInTheDocument();

});
test('should render deaths cases', async () => {
  render(<HomePage />);
  let Label = screen.getByText('Deaths')
  expect(Label).toBeInTheDocument();

});
test('should render Recovered cases', async () => {
  render(<HomePage />);
  let Label = screen.getByText('Recovered')
  expect(Label).toBeInTheDocument();

});

test('should renderToday Recovered cases', async () => {
  render(<HomePage />);
  let Label = screen.getByText('Today Recovered')
  expect(Label).toBeInTheDocument();

});
test('should renderToday Active cases', async () => {
  render(<HomePage />);
  let Label = screen.getByText('Active cases')
  expect(Label).toBeInTheDocument();
});

test('should render Today Affected Country', async () => {
  render(<HomePage />);
  let Label = screen.getByText('Affected Country')
  expect(Label).toBeInTheDocument();
});
test('should render the world map', async () => {
  render(<HomePage />);
  let map = screen.getByTestId('test-map-world')
  expect(map).toBeInTheDocument();
});

