
import './App.css';
import HomePage from './pages/HomePage';
import WorldDataContextProvider from './contexts/worldCasesContext';
import Header from './components/baseComponents/Main-nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewsPage from './pages/NewsPage';
import CountriesPage from './pages/CountriesPage';
import RegionsPage from './pages/RegionsPage';
import CountryDetails from './components/countries/CountryDetails';
import CountriesContextProvider from './contexts/countriesContext';
import CountryDetailsProvider from './contexts/CountryDetailsContext';
import DashboardPage from './pages/DashboardPage';
import NewsProvider from './contexts/newsContext';


const routes = {
  "base": { path: "/", component: <HomePage /> },
  "home": { path: "/home", component: <HomePage /> },
  "dashobard": { path: "/dashboard", component: <NewsPage /> },
  "countries": { path: "/countries", component: <CountriesPage /> },
  "regions": { path: "/regions", component: <RegionsPage /> },
  "news": { path: "/news", component: <NewsPage /> },
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
              <NewsProvider>
                <div className="App container-fluid">
                  <Routes>
                    <Route path={routes.base.path} element={<HomePage />}>  </Route>
                    <Route path={routes.home.path} element={<HomePage />}>  </Route>
                    <Route path={routes.dashobard.path} element={<DashboardPage />}>  </Route>
                    <Route path={routes.regions.path} element={<RegionsPage />}>  </Route>
                    <Route path={routes.countries.path} element={<CountriesPage />}>  </Route>
                    <Route path={routes.countryDetails.path} element={<CountryDetails />}>  </Route>
                    <Route path={routes.news.path} element={<NewsPage />}>  </Route>
                  </Routes>
                </div>
              </NewsProvider>
            </CountryDetailsProvider>
          </CountriesContextProvider>
        </WorldDataContextProvider >
      </BrowserRouter>
    </>

  );
}

export default App;
