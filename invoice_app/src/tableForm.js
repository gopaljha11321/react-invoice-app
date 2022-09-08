import './index.css'
import {v4 as uuidv4} from "uuid"

function Table({
    
    description,setDescription,quantity,
    setQuantity,price,setPrice,unit,setUnit
    ,amount,setAmount,list,setList})
    
   
{
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        const newItem={
            id: uuidv4(),
            description,
            quantity,
            price,
            unit
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list,newItem])
        console.log(list.description)

    }
    return(<>
        <form onSubmit={handleSubmit}>
            <div>
        <lable htmlFor="Description">Description</lable>
        <br/>
        <input
        type="text"
        name="description"
        id="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>setDescription(e.target.value)}
        />
        <br/>
        <lable htmlFor="Quantity">Quantity</lable>
        <br/>
        <input
        type="text"
        name="quantity"
        id="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) =>setQuantity(e.target.value)}
        />
        <br/>
        <lable htmlFor="Price">Price</lable>
        <br/>
        <input
        type="text"
        name="price"
        id="text"
        placeholder="Price"
        value={price}
        onChange={(e) =>setPrice(e.target.value)}
        />
        <br/>
        <lable htmlFor="Unit">Unit</lable>
        <br/>
        <input
        type="unit"
        name="unit"
        id="text"
        placeholder="Unit"
        value={unit}
        onChange={(e) =>setUnit(e.target.value)}
        />
        <br/>
        <lable htmlFor="Amount">Amount</lable>
        <br/>
        <input
        type="text"
        name="amount"
        id="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) =>setAmount(e.target.value)}
        />
        </div>
        <button type="submit">Add Item</button>
        </form>
        </>
    )

}
export default Table;