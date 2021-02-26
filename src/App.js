import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import OrdersPage from './containers/OrdersPage/OrdersPage';
import Layout from './components/UI/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/orders' component={OrdersPage}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
