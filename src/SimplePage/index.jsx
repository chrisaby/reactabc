import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from '../Header';
import {Footer} from '../Footer';

export class SimplePage extends React.Component{
    render(){
        var x =""
        return (
            <div>
            <Header />
            <Footer />
            </div>            
        )
    }
}