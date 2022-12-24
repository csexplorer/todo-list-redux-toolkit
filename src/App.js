import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import {Auth} from "./features/auth/Auth";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {Todo} from "./features/todo/Todo";

function App() {
    const auth = useSelector(state => state.auth);
  return (
    <div className="App">

        <BrowserRouter>
            {auth.isAuthenticated ? (<Switch>
                <Route path="/" exact>
                <Auth />

            </Route>
            </Switch>): (<Switch>
                <Route path="/" exact>
                    <Todo />
                </Route>
            </Switch>)}

        </BrowserRouter>

    </div>
  );
}

export default App;
