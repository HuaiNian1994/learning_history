import React from "react"
import { HashRouter, Route, Link, Redirect } from 'react-router-dom'
export default class Link3 extends React.Component{
    render(){
        return(
            <div>
                 <div>link3</div>
                 <Redirect to="/l1"></Redirect>
            </div>
             
        )
    }
}