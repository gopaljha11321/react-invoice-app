


function InvoiceDate({invoice, dueDate})
{
  var d=new Date();
  const data=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
  
    return(
    <div id="container">
     
    <div className="h1">
      <table width="250px" >
        <tr>
          <td align="left" className="in1">Invoice</td>
        </tr>
        <tr><td  align="left">Invoice No:</td>
        <td>{invoice}</td></tr>
        <tr>
          <td align="left">
            Invoice Date:
          </td>
          <td>{data}</td>
        </tr>
        <tr>
          <td align="left">
             Due Date:
          </td>
          <td>{dueDate}</td>
        </tr>
      </table>
    </div>
    </div>
    )
}
export default InvoiceDate;