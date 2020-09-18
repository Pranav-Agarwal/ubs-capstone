import React, {Component} from 'react'
import ReactTable from 'react-table-6'
import './components/myScenario1.css'
class Scenario2 extends React.Component{

    constructor(props){
        super(props);

    }


    renderTableData() {
        return this.props.data_table_2.map((data_table_2, index) => {
            return data_table_2.map((data_table_5, index1) => {
           const { firmclient,tradeid ,tradetype ,security,quantity,priceperunit,brokername,timestamp,date} = data_table_5
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
    if(this.props.data_table_2.length>0)
    {
        for(var i=0;i<this.props.data_table_2.length;i++)
        {
            for(var j=0;j<this.props.data_table_2[i].length;j++)
     
            {
                var truncDate=this.props.data_table_2[i][j].date.substring(0,10);
                 ar.push(<tr key={this.props.data_table_2[i][j].tradeid}>
                     <td>{this.props.data_table_2[i][j].firmclient}</td>
                     <td>{this.props.data_table_2[i][j].tradeid}</td>
                     <td>{this.props.data_table_2[i][j].tradetype}</td>
                     <td>{this.props.data_table_2[i][j].security}</td>
                     <td>{this.props.data_table_2[i][j].quantity}</td>
                     <td>{this.props.data_table_2[i][j].priceperunit}</td>
                     <td>{this.props.data_table_2[i][j].brokername}</td>
                     <td>{this.props.data_table_2[i][j].timestamp}</td>
                     <td>{truncDate}</td>
                     
                  </tr>
                  )
     
            }
            ar.push(<br/>)
        }
    }
    else
    {
        ar.push(<p>No Front running detected</p>)
    }
    
    return ar;
 
 }
 

     renderTableHeader() {
        if(this.props.data_table_2.length>0)
            {
            let header = Object.keys(this.props.data_table_2[0][0])
            return header.map((key, index) => {
               return <th key={index}>{key.toUpperCase()}</th>
            })
        }

     }
  

render(){
    return(        
        <div id='parent'>
        <h1 className="title">Front Running Scenario 2</h1>
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
export default Scenario2;