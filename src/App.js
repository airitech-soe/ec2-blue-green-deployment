import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './pages/Login';
import MainPage from './pages/Main';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>          
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route path="/cms">
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
