import React from 'react';
import {Header} from "./components";
import {Footer} from "./components";
import './App.css';
import {Switch, Route} from "react-router-dom";
import View1 from  "./components/Views/Principal";
import View2 from  "./components/Views/Login";
import View3 from  "./components/Views/Produtos";
import View4 from  "./components/Views/Livros";


const $ = window.$;

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={View1}/>
                    <Route exact path="/Login" component={View2}/>
                    <Route exact path="/Produtos" component={View3}/>
                    <Route exact path="/Livros" component={View4}/>
                </Switch>
            </main>            
            <Footer />
        </div>
    );
}

export default App;
