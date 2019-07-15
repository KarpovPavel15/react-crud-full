import React from 'react';
import './style.css'
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {render} from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div className = "app">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }

}
render(<App />, document.getElementById('root'));
