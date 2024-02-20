import React from 'react';
import ReactDOM from 'react-dom/client';
import{
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import {AppProvider} from './context.';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import BookList from './component/booklist';
import BookDetails from './component/bookdetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

