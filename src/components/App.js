import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <BooksList />
            <BooksForm />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
