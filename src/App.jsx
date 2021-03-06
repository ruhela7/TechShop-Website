import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";


const Error = () => {
    return <h1 className="text-center text-black-50">Error 404, page not found!</h1>
}
const App = () => {
    return <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service" component={Service} />
            <Route component={Error} />
        </Switch>
        <Footer />
    </>
}

export default App;