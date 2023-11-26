# Assignment 1 - ReactJS app.

Name: Killian Golds

## Overview:
The Movies Fan app is a movie discovery platform that allows users to explore and search for movies and actors. It features tabs for discovering movies, viewing top-rated, trending, and latest films. The app includes a search function to find movies or actors and a filtering system to fine tune your search of movies by name, genre, rating, and release date, the app also has various sorting features. Users can save their favorite movies and view upcoming movie releases. The app is designed to be responsive, ensuring a user-friendly experience on both desktop and mobile devices.

### Features:
+ Movie details page includes cast list as cards, clicking on any of the cast cards will bring you to my actors details page.
+ Popular Actors page: displays popular actors as cards which are clickable links which redirect to the actors details page.
+ Actors details page: Gives more information on a chosen actor, also lists movies their known for as clickable links which link back to its Movie Details.
+ Filtering Options: Ability to filter movies by genre, vote average, release date, and more.
+ Sorting Options: Ability to sort movies by popularity, release date, alphabetical and the average rating. Each of these have an ascending and descending option.
+ Pagination: On upcoming movies page and popular actors page.
+ Search Function: A search bar to find movies and actors, with autocomplete suggestions.
+ Material UI Components: Such as accordion, autocomplete and more for a modern and interactive interface.
+ Responsive UI: Adaptability to smaller screen sizes.
+ React-Query Caching: I believe to be fully on all endpoints.

## API endpoints.
+ Popular Actors: /person/popular
+ Actor Details: /person/:id
+ Movie Cast: /movie/:id/credits
+ Trending Movies: trending/movie/day
+ Top Rated Movies: /movie/top_rated
+ Paramaterised literal latest Movies added to tmdb database: /discover/movie
+ Search Results: /search/multi

## Routing.
+ /actors/popular - displays a list of popular actors
+ /actors/:id - displays an in depth look at a specific actor

## Independent learning (If relevant).
Online research proved to be invaluable:

+ https://react.dev/learn
+ https://www.w3schools.com/Js/
+ https://www.w3schools.com/react/
+ https://mui.com/material-ui/
+ https://www.codecademy.com/
+ https://www.freecodecamp.org/
+ https://www.youtube.com/watch?v=FB-sKY63AWo#:~:text=In%20this%20video%20you%20will,If%20yo&ab_channel=FrontStart
