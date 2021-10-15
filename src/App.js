import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
