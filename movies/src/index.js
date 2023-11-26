import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/actors/:id" element={ <ActorDetailsPage />} />
              <Route path="/actors/popular" element={ <ActorsPage />} />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
              <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);