import React, {Compnonet, Component} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ReactDOM from 'react-dom';
import './form.css'
//import './RadioComp.css';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

class RadioComp extends React.Component{
  
  constructor({props}){
    
    super(props);
    this.dated='';
      this.state={

        radio_value:'',
        stock:'',
        action:'',
        price:'',
        share:'',
        done:null,
        broker:'',
        price:'',
        dated:'',
        tradetime:''

      }
  }


  
  handleradiochange = (e) => {
    this.setState({
      radio_value:e.target.value
    })
  }



  handlestockchange = (e) =>{
    this.setState({
      stock:e.target.value
    })
  }
  onsubmitchange = event =>{
    this.setState({
      done:true
    })

    fetch('http://localhost:8000/insert', {
       method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firmclient: this.state.radio_value, 
          tradetype: this.state.action, 
          security: this.state.stock, 
          priceperunit: this.state.price, 
          quantity:this.state.share,
          timestamp: this.state.tradetime,
          brokername: this.state.broker,
          date: this.dated

           })
    })
        .then(response => response.json())
        .then(data => console.log("Inserting"));
    alert("Trade succesfully inserted");
  }

  handleactionchange = (e) =>{
    this.setState({
      action:e.target.value
    })
  }

  
  handlechangeshare = (e) =>{
    this.setState({
      share:e.target.value
    })
  }

  handlebroker = (e) =>{
    this.setState({
      broker:e.target.value
    })
  }

  
  handlechangeprice = (e) =>{
    this.setState({
      price:e.target.value
    })
  }

  handledated = (e) =>{
    this.setState({
      dated:e.target.value

    })
    this.dated=e.target.value;
    //console.log(this.dated)
    //console.log(e.target.value)
    console.log(this.dated)
  }

  handletime = (e) =>{
    this.setState({
      tradetime:e.target.value
    })
  }

  handleChange = date => {
    this.setState({
      dated: date
    })
  }

  render(){
    const mystyle = {
 
        padding:30,
            
  
    };
   var timeAr = this.state.tradetime.toString().split(":");
   console.log(timeAr);
   var enabled= this.state.share>0 && this.state.share<20000 
   && this.state.share.length>0 && 
   (timeAr[0] >= 10 && timeAr[0] <=24 && timeAr[1] >= 0 && timeAr[1] <=60 && timeAr[2] >= 0 && timeAr[2] <=60)
   && this.state.radio_value.length >0 && this.state.broker.length>0 && this.state.dated.length>0 && this.state.action.length>0 ; 

   return(
    <div className="completeForm">
    <form>
      <div><br/></div>
      <h2>Enter Trade</h2>
    <div>
    <div className="float-child">
    <h3> <b> New Order </b> </h3>
    <br/>
    </div>
    <div>
    <RadioGroup  onChange={this.handleradiochange}>
      <FormControlLabel value="firm" control={<Radio />} label="Firm" />
      <FormControlLabel value="client" control={<Radio />} label="Customer" />
    </RadioGroup>
    </div>
<br/>

    <div  className="float-child">
    <h3> <b> Select Broker </b> </h3>
    <br/>
    </div>
    <div>
    <RadioGroup  onChange={this.handlebroker}>
      <FormControlLabel value="B1" control={<Radio />} label="B1" />
      <FormControlLabel value="B2" control={<Radio />} label="B2" />
    </RadioGroup>
    </div>
    <div> <br/></div>
    
    <div  className="float-child">
    <h3> <b> Stock Details </b> </h3>
    <br/>
    </div>
    <div>
    <RadioGroup  onChange={this.handlestockchange}>
      <FormControlLabel value="Apple" control={<Radio />} label="Apple" />
      <FormControlLabel value="Facebook" control={<Radio />} label="Facebook" />
      <FormControlLabel value="Uber" control={<Radio />} label="Uber" />
      <FormControlLabel value="Walmart" control={<Radio />} label="Walmart" />
    </RadioGroup>
    </div>
    <div><br/></div>
    <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className="labelclass">Number of Shares </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" 
     onChange={this.handlechangeshare}
    />
    </div>

    <br/>
    <br/>
    
    <div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label className="labelclass">Time of Trade </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text"
     onChange={this.handletime}
     placeholder = "HH:MM:SS"
    />
    </div>
    <br/>

    <div>
    <label className="labelclass">Date of Trade </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="date"
      onChange={this.handledated}
     placeholder = "YYYY:MM:DD"
    />
    </div>


<br/>
<div className="float-child">
    <h3> <b> Action  </b> </h3>
    <br/>
    </div>
    <div>
    <RadioGroup  onChange={this.handleactionchange}>
      <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
      <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
    </RadioGroup>
    </div>
    
    </div>
    <div className="submit">  
    <button disabled={!enabled} onClick={this.onsubmitchange} type="submit" className="button1">Enter trade</button>
</div>
    </form>
</div>
   

    )
  }
}
export default RadioComp