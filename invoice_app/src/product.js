function Product({description,quantity,unit,price})
{
  var amount=unit*quantity*price
    return( <>  <div id="container">
    <div className="table1">
      <table width="100%">
        <tr><th colspan="3" align="left">&nbsp;&nbsp;&nbsp;Description</th>
        <th align="center">Quantity</th>
        <th align="center">Unit</th>
        <th align="center">Price</th>
        <th align="center">Amount</th>
        </tr>
        <tr><td colspan="3" align="left"> &nbsp;&nbsp;&nbsp;{description}</td>
        <td align="center">{quantity}</td>
        <td align="center">{unit}</td>
        <td align="center">{price}</td>
        <td align="center">{amount}</td>
        </tr>
        <tr><td colspan="3" align="left" >2. Product 2</td>
        <td align="center">25</td>
        <td align="center">200</td>
        <td align="center">300</td>
        <td align="center">300000</td>
        </tr>
        <tr><td colspan="3" align="left">3. Product 3</td>
        <td align="center">20</td>
        <td align="center">350</td>
        <td align="center">420</td>
        <td align="center">420000</td>
        </tr>
      </table> 
    </div>

    </div>
    <div id="container">
      <div className="total"><span className="temp"> Total</span> &nbsp; {amount}</div>
    </div></> )
}
export default Product;