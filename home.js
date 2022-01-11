import React, { Component } from 'react';
import IOT from "./IOT.png";
import INet from "./INet.png";
import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                    <button className='btn'>
                        <img src={IOT} alt='IOT' />
                    </button>
                    <button className='btn'>
                        <img src={INet} alt='INet' />
                    </button>
            </div>
        )
    }
}
