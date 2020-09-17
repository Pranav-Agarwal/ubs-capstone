import React, {Compnonet, Component} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import ReactDOM from 'react-dom';
class RadioComp extends Component{
  
  constructor(props){

    super(props)
      this.state={

        radio_value:' ',
        stock:' ',
        action:' ',
        price:' ',
        share:' ',
        done:null,

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
    alert(''+this.state.radio_value + '  ' + this.state.stock + '  ' + this.state.price + '  ' + this.state.share + '  ' + this.state.action )
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

  
  handlechangeprice = (e) =>{
    this.setState({
      price:e.target.value
    })
  }

  render(){
    const mystyle = {
 
        padding:30,
            
  
    };
    
   return(

    <form>
    <div align="left" style={mystyle}>
    <div align= "left" >
    <h5> <b> New Order </b> </h5>
    <br/>
    </div>
    <div align="left">
    <RadioGroup  onChange={this.handleradiochange}>
      <FormControlLabel value="firm" control={<Radio />} label="Firm" />
      <FormControlLabel value="customer" control={<Radio />} label="Customer" />
    </RadioGroup>
    </div>
<br/>
    <div align= "left">
    <h5> <b> Stock Details </b> </h5>
    <br/>
    </div>
    <div align="left">
    <RadioGroup  onChange={this.handlestockchange}>
      <FormControlLabel value="Apple" control={<Radio />} label="Apple" />
      <FormControlLabel value="facebook" control={<Radio />} label="Facebook" />
    </RadioGroup>
    </div>
    <br/>
    <div align="left">
    <b>Number of Shares </b>&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text"
     onChange={this.handlechangeshare}
    />
    </div>

    <br/>
    <div align="left">
    <b>Current Price </b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text"
     onChange={this.handlechangeprice}
     placeholder = "********/-"
    />
    </div>

<br/>
<div align= "left">
    <h5> <b> Action  </b> </h5>
    <br/>
    </div>
    <div align="left">
    <RadioGroup  onChange={this.handleactionchange}>
      <FormControlLabel value="Buy" control={<Radio />} label="Buy" />
      <FormControlLabel value="Sell" control={<Radio />} label="Sell" />
    </RadioGroup>
    </div>
    
    </div>
    <button onClick={this.onsubmitchange} type="submit"> Submit </button>   

    </form>

   

    )
  }
}
export default RadioComp