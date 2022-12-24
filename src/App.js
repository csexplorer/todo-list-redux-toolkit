import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import {Login} from "./features/auth/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {Todo} from "./features/todo/Todo";

function App() {
    const {isAuthenticated} = useSelector(state => state.auth);

    if (!isAuthenticated) {
        return <div className="App Auth">

            <BrowserRouter>
               <Switch>
                    <Route path="/" exact>
                        <Login />

                    </Route>
                </Switch>

            </BrowserRouter>

        </div>
    }

  return (
    <div className="App Main">

        <BrowserRouter>
           <Switch>
                <Route path="/" exact>
                    <Todo />
                </Route>
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
