import React,{Component} from 'react';

import { red } from '../node_modules/@material-ui/core/colors';
import './components/myScenario1.css'

class TableComp extends React.Component{

    constructor(props){
        super(props);

    }


    componentDidMount()
    {
      
    }


renderTableData_2() {
   
   var ar=[];
   for(var i=0;i<this.props.table_database.length;i++)
   {
            ar.push(<tr key={this.props.table_database[i].tradeid}>
                <td>{this.props.table_database[i].firmclient}</td>
                <td>{this.props.table_database[i].tradeid}</td>
                <td>{this.props.table_database[i].tradetype}</td>
                <td>{this.props.table_database[i].security}</td>
                <td>{this.props.table_database[i].quantity}</td>
                <td>{this.props.table_database[i].priceperunit}</td>
                <td>{this.props.table_database[i].brokername}</td>
                <td>{this.props.table_database[i].timestamp}</td>
                <td>{this.props.table_database[i].date}</td>
                
             </tr>
             )

       
       ar.push(<br/>)
   }
   
   return ar;

}

     renderTableHeader() {
        let header = Object.keys(this.props.table_database[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  

render(){
    return(        
        <div id='parent'> 
        <h1 className="title">Trade List</h1>
        <table id='students-header'>
           <tbody>
              <tr>
                <th>firmclient</th>
                <th>tradeid</th>
                <th>tradetype</th>
                <th>security</th>
                <th>quantity</th>
                <th>priceperunit</th>
                <th>brokername</th>
                <th>timestamp</th>
                <th>date</th>
                </tr>
              </tbody>
          </table>
          <table id='students'>
          <tbody>
              {this.renderTableData_2()}
           </tbody>
        </table>
     </div>
        
    )
}
}

export default TableComp;