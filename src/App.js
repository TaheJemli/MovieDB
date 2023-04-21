import "./App.css";
import React from 'react';
import {Route, Routes} from "react-router-dom"
import NotFound from "./Components/NotFound";
import Movies from "./Components/Movies";
import NavigationBar from "./Components/NavBar";
import MovieDetails from "./Components/MovieDetails";
import WishList from "./Components/WishList";

//const Products = React.lazy(()=> import('./Components/Products'))
function App() {
  return (
    <div>
      <React.Suspense fallback={<h1> Loading... </h1>}>
      <NavigationBar/>
        <Routes>
        <Route exac path="/movies" element={<Movies />} /> 
        <Route  path="/movies/:title" element={<MovieDetails />} />
        <Route  path="/wishlist" element={<WishList />} />
           <Route path="*" element={<NotFound />} /> 
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
