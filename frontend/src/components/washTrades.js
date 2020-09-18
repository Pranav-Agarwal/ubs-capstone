import React, {Component} from 'react'
import ReactTable from 'react-table-6'

class washTrades extends React.Component{

    constructor(props){
        super(props);

    }


//     renderTableData() {
//         return this.props.data_table_3.map((data_table_3, index) => {
//             return data_table_3.map((data_table_4, index1) => {
//            const { firmclient,tradeid ,tradetype ,security,quantity,priceperunit,brokername,timestamp,date} = data_table_4
//            return (
//               <tr key={tradeid}>
//                  <td>{firmclient}</td>
//                  <td>{tradeid}</td>
//                  <td>{tradetype}</td>
//                  <td>{security}</td>
//                  <td>{quantity}</td>
//                  <td>{priceperunit}</td>
//                  <td>{brokername}</td>
//                  <td>{timestamp}</td>
//                  <td>{date}</td>
                 
//               </tr>
//            )
//         })
//     })
// }

renderTableData_2() {
   
    var ar=[];
    if(this.props.data_table_4.length>0)
    {
        for(var i=0;i<this.props.data_table_4.length;i++)
        {
            for(var j=0;j<this.props.data_table_4[i].length;j++)
     
            {
                var truncDate=this.props.data_table_4[i][j].date.substring(0,10);
                 ar.push(<tr key={this.props.data_table_4[i][j].tradeid}>
                     <td>{this.props.data_table_4[i][j].firmclient}</td>
                     <td>{this.props.data_table_4[i][j].tradeid}</td>
                     <td>{this.props.data_table_4[i][j].tradetype}</td>
                     <td>{this.props.data_table_4[i][j].security}</td>
                     <td>{this.props.data_table_4[i][j].quantity}</td>
                     <td>{this.props.data_table_4[i][j].priceperunit}</td>
                     <td>{this.props.data_table_4[i][j].brokername}</td>
                     <td>{this.props.data_table_4[i][j].timestamp}</td>
                     <td>{truncDate}</td>
                     
                  </tr>
                  )
     
            }
            ar.push(<br/>)
        }
    }
    else
    {
        ar.push(<p>No wash trading detected</p>)
    }
    
    return ar;
 
 }

     renderTableHeader() {
      if(this.props.data_table_4.length>0)
      {
        let header = Object.keys(this.props.data_table_4[0][0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
      }
     }
  

render(){
    return(        
     <div id='parent'> 
        <h1 className="title">Wash Trades</h1>
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
export default washTrades;