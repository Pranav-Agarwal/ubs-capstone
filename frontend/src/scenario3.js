import React, {Component} from 'react'
import ReactTable from 'react-table-6'

class Scenario3 extends Component{

    constructor(props){
        super(props);

    }


    renderTableData() {
        return this.props.data_table_3.map((data_table_3, index) => {
            return data_table_3.map((data_table_4, index1) => {
           const { firmclient,tradeid ,tradetype ,security,quantity,priceperunit,brokername,timestamp,date} = data_table_4
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
     renderTableHeader() {
        let header = Object.keys(this.props.data_table_3[0][0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  

render(){
    return(        
        <div>
        <h1>React Dynamic Table</h1>
        <table>
           <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
        
    )
}
}
export default Scenario3;