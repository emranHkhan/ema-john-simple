import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import News from './components/News/News';
import Recharts from './components/Recharts/Recharts';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';



function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=1f2fcbdb8c4048089457f64b464c3731')
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, []);

  return (
    <div>
      <Header />
      <Router>
        <Switch>

          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route path="/product/:productKey"> {/* this productKey is basically a dummy text. It could be anything. It comes from the <Link /> component that you have set in the <Product /> component */}

            <ProductDetails />

          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>




      {/* {
        articles.map(article => <News article={article}/>)
      } */}

      {/* <Recharts />  */}

    </div>
  );
}

export default App;
