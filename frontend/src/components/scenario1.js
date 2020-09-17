import React, {Component} from 'react'
import ReactTable from 'react-table-6'
import './myScenario1.css';
class Scenario1 extends Component{

    constructor(props){
        super(props);

    }


    renderTableData() {
        return this.props.data_table.map((data_table, index) => {
            return data_table.map((data_table_1, index1) => {
           const { firmclient,tradeid ,tradetype ,security,quantity,priceperunit,brokername,timestamp,date} = data_table_1
           return (
    
              <tr key={tradeid}>
                 <td>{firmclient}</td>
                 <td>{tradeid}</td>
                 <td>{tradetype}</td>
                 <td>{security}</td>
                 <td>{quantity}</td>
                 <td>{priceperunit}</td>
                 <td>{brokername}</td>
                 <td>{timestamp}</td>
                 <td>{date}</td>
                 
              </tr>
              
           )
        })
    })
}
renderTableData_2() {
   
   var ar=[];
   for(var i=0;i<this.props.data_table.length;i++)
   {
       for(var j=0;j<this.props.data_table[i].length;j++)

       {
            ar.push(<tr key={this.props.data_table[i][j].tradeid}>
                <td>{this.props.data_table[i][j].firmclient}</td>
                <td>{this.props.data_table[i][j].tradeid}</td>
                <td>{this.props.data_table[i][j].tradetype}</td>
                <td>{this.props.data_table[i][j].security}</td>
                <td>{this.props.data_table[i][j].quantity}</td>
                <td>{this.props.data_table[i][j].priceperunit}</td>
                <td>{this.props.data_table[i][j].brokername}</td>
                <td>{this.props.data_table[i][j].timestamp}</td>
                <td>{this.props.data_table[i][j].date}</td>
                
             </tr>
             )

       }
       ar.push(<br/>)
   }
   
   return ar;

}

     renderTableHeader() {
        let header = Object.keys(this.props.data_table[0][0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  

render(){
    return(        
        <div id='parent'> 
        <h1 className="title">Scenario 1 Trades</h1>
        <table id='students'>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData_2()}
           </tbody>
        </table>
     </div>
        
    )
}
}
export default Scenario1;