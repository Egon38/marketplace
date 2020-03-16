import React, { Components } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function Navigation (){
	render(){


		return{
		<ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
   		}

   	}
}

export default Navigation;
