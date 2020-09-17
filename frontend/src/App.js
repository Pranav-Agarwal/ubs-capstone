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
      scenario1_data:[],
      scenario2_data:[],
      scenario3_data:[],
      database:[],
    }  
  }

  async componentDidMount(){
    
      const url="http://localhost:8000/1";
      const response=await fetch(url);
      const data= await response.json();
      this.setState({
        scenario1_data: data  
      },()=> {
         console.log(this.state.scenario1_data[0][0]); 
      });

      const url_2="http://localhost:8000/2";
      const response_2=await fetch(url_2);
      const data_2= await response_2.json();
      this.setState({
        scenario2_data: data_2  
      },()=> {
         console.log(this.state.scenario2_data[0][0]); 
      });
      
      const url_3="http://localhost:8000/3";
      const response_3=await fetch(url_3);
      const data_3= await response_3.json();
      this.setState({
        scenario3_data: data_3  
      },()=> {
         
      });
      
      const url_table="http://localhost:8000/getall";
      const response_table=await fetch(url_table);
      const data_main= await response_table.json();
      this.setState({
        database: data_main  
      },()=> {
        console.log(this.state.database[0]); 
      });
      

  }
  
  viewForm = (e) => {
    this.setState({
      visible:true,
      visible_1:false,
      visible_2:false,
      visible_3:false,
    
    })
  }

  handleButton1=(e)=>{
    this.setState({
      visible:false,
      visible_1:true,
      visible_2:false,
      visible_3:false,
    })
    
  }

  
  handleButton2=(e)=>{
    this.setState({
      visible:false,
      visible_1:false,
      visible_2:true,
      visible_3:false,
    
      
    })
  }
  
  handleButton3=(e)=>{
    this.setState({
      visible:false,
      visible_1:false,
      visible_2:false,
      visible_3:true,
    
    })
  }
  render()
  {
    
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
    <ReactBootStrap.Button  className="bootstrap_button" variant="none" onClick={this.handleButton2} >Scneario-2</ReactBootStrap.Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <ReactBootStrap.Button className="bootstrap_button" variant="none" onClick={this.handleButton3} >Scenario-3</ReactBootStrap.Button>&nbsp;&nbsp;&nbsp;&nbsp;
    <ReactBootStrap.Button className="bootstrap_button" variant="none" onClick={this.viewForm} >Enter a Trade</ReactBootStrap.Button>

  </ReactBootStrap.Form>

    </ReactBootStrap.Nav>
  
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    <div>
    <TableComp table_database={this.state.database} />  
    
    
      {this.state.visible_1 ? <Scenario1 data_table={this.state.scenario1_data} /> : null}
      {this.state.visible_2 ? <Scenario2 data_table_2={this.state.scenario2_data} /> : null}
      {this.state.visible_3 ? <Scenario3 data_table_3={this.state.scenario3_data} /> : null}
      {this.state.visible ? <RadioComp /> : null}
    </div>
    </div>
  );
}
}
