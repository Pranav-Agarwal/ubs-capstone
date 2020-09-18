import React,{Component} from 'react';
import * as ReactBootStrap from "react-bootstrap";
import './App.css';
import TableComp from './TableComp'
import FormComp from './FormComp';
import RadioComp from './RadioComp'
import { Header } from 'semantic-ui-react'

import { ThemeConsumer } from '../node_modules/react-bootstrap/esm/ThemeProvider';
import Scenario1 from './components/scenario1'
import Scenario2 from './scenario2'
import Scenario3 from './scenario3'
import WashTrades from './components/washTrades';
import axios from 'axios';
import './form.css'
import logo from './logo.png'
import EpicMenu from './EpicMenu.js'
import { bottom } from '../node_modules/@popperjs/core';
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      visible:false,
      visible_1:false,
      visible_2:false,
      visible_3:false,
      visible_4:false,
      scenario1_data:'',
      scenario2_data:'',
      scenario3_data:'',
      scenario4_data:'',
      database:'',
    }  
  }

  componentDidMount(){

      fetch('http://localhost:8000/1')
        .then(response=>response.json())
        .then(response=>{
          this.setState({scenario1_data:response})
          console.log("response", response);
        })

      fetch('http://localhost:8000/2')
        .then(response=>response.json())
        .then(response=>{
          this.setState({scenario2_data:response})
          console.log("response", response);
        })
      
      fetch('http://localhost:8000/3')
        .then(response=>response.json())
        .then(response=>{
          this.setState({scenario3_data:response})
          console.log("response", response);
        })

      fetch('http://localhost:8000/getall')
        .then(response=>response.json())
        .then(response=>{
          this.setState({database:response})
          console.log("response all trades", response);
        })
      
      fetch('http://localhost:8000/wash')
        .then(response=>response.json())
        .then(response=>{
          this.setState({scenario4_data:response})
          console.log("response", response);
        })

  }
  
  viewForm = (e) => {
    this.setState({
      visible:true,
      visible_1:false,
      visible_2:false,
      visible_3:false,
      visible_4:false
    })
  }

  handleButton1=(e)=>{
    this.setState({
      visible:false,
      visible_1:true,
      visible_2:false,
      visible_3:false,
      visible_4:false
    })
    
  }

  
  handleButton2=(e)=>{
    this.setState({
      visible:false,
      visible_1:false,
      visible_2:true,
      visible_3:false,
      visible_4:false
      
    })
  }
  
  handleButton3=(e)=>{
    this.setState({
      visible:false,
      visible_1:false,
      visible_2:false,
      visible_3:true,
      visible_4:false
    })
  }

  handleButton4=(e)=>{
    console.log("Button 4")
    this.setState({
      visible:false,
      visible_1:false,
      visible_2:false,
      visible_3:false,
      visible_4:true
    })
  }
  render()
  {
    console.log(this.state.scenario1_data)
    
  return (
    <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" 
    style={{padding:"18px"}}
    >
  <ReactBootStrap.Navbar.Brand href="#home">Trade Surveillance System</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>

  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  
  
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
 
  <ReactBootStrap.Nav className="mr-auto">
  </ReactBootStrap.Nav>
    <ReactBootStrap.Nav className="mr-auto" align="right">
    <ReactBootStrap.Form inline align="right">
    <ReactBootStrap.Button  className="bootstrap_button"  variant="none" onClick={this.handleButton1} >Scenario-1</ReactBootStrap.Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <ReactBootStrap.Button  className="bootstrap_button" variant="none" onClick={this.handleButton2} >Scenario-2</ReactBootStrap.Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <ReactBootStrap.Button className="bootstrap_button" variant="none" onClick={this.handleButton3} >Scenario-3</ReactBootStrap.Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <ReactBootStrap.Button className="bootstrap_button" variant="none" onClick={this.handleButton4} >Wash Trades</ReactBootStrap.Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <ReactBootStrap.Button className="bootstrap_button" variant="none" onClick={this.viewForm} >Enter New Trade</ReactBootStrap.Button>

  </ReactBootStrap.Form>

    </ReactBootStrap.Nav>
  
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    <div className="appContentParent">
    <TableComp className="tableCompParent" table_database={this.state.database} />  
    
      <div className="scenarioTableParent">
        {this.state.visible_1 ? <Scenario1 data_table={this.state.scenario1_data} /> : null}
      </div>
      {this.state.visible_2 ? <Scenario2 data_table_2={this.state.scenario2_data} /> : null}
      {this.state.visible_3 ? <Scenario3 data_table_3={this.state.scenario3_data} /> : null}
      {this.state.visible_4 ? <WashTrades data_table_4={this.state.scenario4_data} /> : null}
      <div className="radioCompParent">
        {this.state.visible ? <RadioComp /> : null}
      </div>
    </div>
    </div>
  );
}
}
