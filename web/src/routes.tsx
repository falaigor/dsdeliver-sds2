import './styles/global.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" component={Orders} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}


export default Routes