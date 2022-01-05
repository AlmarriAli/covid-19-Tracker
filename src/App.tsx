
import './App.css';
import HomePage from './pages/HomePage';
import WorldDataContextProvider from './contexts/worldCasesContext';
import Header from './components/baseComponents/Main-nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoardPage from './pages/NewsPage';
import CountriesPage from './pages/CountriesPage';
import RegionsPage from './pages/RegionsPage';
import CountryDetails from './components/countries/CountryDetails';
import CountriesContextProvider from './contexts/countriesContext';
import CountryDetailsProvider from './contexts/CountryDetailsContext';



const routes = {
  "base": { path: "/", component: <HomePage /> },
  "home": { path: "/home", component: <HomePage /> },
  "dashobard": { path: "/dashboard", component: <DashBoardPage /> },
  "countries": { path: "/countries", component: <CountriesPage /> },
  "regions": { path: "/regions", component: <RegionsPage /> },
  "countryDetails": { path: "/countries/:code", component: <CountryDetails /> },

}



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <WorldDataContextProvider>
          <CountriesContextProvider>
            <CountryDetailsProvider>
              <div className="App container-fluid">
                <Routes>
                  <Route path={routes.base.path} element={<HomePage />}>  </Route>
                  <Route path={routes.home.path} element={<HomePage />}>  </Route>
                  <Route path={routes.dashobard.path} element={<DashBoardPage />}>  </Route>
                  <Route path={routes.regions.path} element={<RegionsPage />}>  </Route>
                  <Route path={routes.countries.path} element={<CountriesPage />}>  </Route>
                  <Route path={routes.countryDetails.path} element={<CountryDetails />}>  </Route>
                </Routes>
              </div>
            </CountryDetailsProvider>
          </CountriesContextProvider>
        </WorldDataContextProvider >
      </BrowserRouter>
    </>

  );
}

export default App;
