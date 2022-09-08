import './index.css'
import React from 'react'
import Head from './head';
import Buy from './buyer'
import Seller from './seller'
import InvoiceDate from'./date'
import Product from './product'
import Note from'./note'
import {useState} from 'react'
import Table from './tableForm';
function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("") //name
  const [address, setAddress] = useState("")//address
  const [email, setEmail] = useState("")//email
  const [number, setNumber] = useState("")//phone
  const [website, setWebsite] = useState("")//website
  const [clientName, setClientName] = useState("")//client name
  const [clientAdd, setClientAdd] = useState("")//client address
  const [invoice, setInvoice] = useState("")//invoice number
  const [dueDate, setDueDate] = useState("")//due date
  const [notes, setNotes] = useState("")//Notes
  const [description,setDescription] = useState("");
  const [quantity,setQuantity] = useState("");
  const [price,setPrice] = useState("");
  const [unit,setUnit] = useState("");
  const [amount,setAmount] = useState("");
  const [list,setList] =useState("");


  return (
 <div id="main">
   {
     showInvoice ?<>
      <Head   />
      <Buy name={name} address={address}/>
      <Seller clientName={clientName} clientAdd={clientAdd} />
      <InvoiceDate invoice ={invoice} dueDate={dueDate}/>
      <Product description={description} quantity ={quantity}
   price ={price} unit={unit}
    amount={amount}/>
      <Note notes={notes}/>
      <div className="container">
        <div className="haed">
      <button type="button" onClick={() => setShowInvoice(false)} class="btn btn-outline-secondary">Edit Information</button>
      </div>
      </div>
      </>:(
        <>
         
        <div id="container">
          <div>
        
          <label htmlfor="name">Enter Your Name</label>
          <br/>
        <input type="text" 
        name="text" id="text" 
        placeholder="Enter your name" 
        autoComplete="off" 
        value={name} 
        onChange={(e)=> setName(e.target.value)
        }/><br/>
        <label htmlfor="Address">Enter Your Address</label>
          <br/>
        <input type="text" 
        name="text" id="text" 
        placeholder="Enter your address" 
        autoComplete="off" 
        value={address} 
        onChange={(e)=> setAddress(e.target.value)
        }/><br/>
        <label htmlfor="Email">Enter Your Email</label>
          <br/>
        <input type="text" 
        name="email" id="text" 
        placeholder="Enter your Email" 
        autoComplete="off" 
        value={email} 
        onChange={(e)=> setEmail(e.target.value)
        }/><br/>
        <label htmlfor="Number">Enter Your Number</label>
          <br/>
        <input type="text" 
        name="text" id="text" 
        placeholder="Enter your number" 
        autoComplete="off" 
        value={number} 
        onChange={(e)=> setNumber(e.target.value)
        }/><br/>
        <label htmlfor="Website">Enter Your Website</label>
          <br/>
        <input type="text" 
        name="text" id="text" 
        placeholder="Enter your website" 
        autoComplete="off" 
        value={website} 
        onChange={(e)=> setWebsite(e.target.value)
        }/><br/>
        <label htmlfor="">Enter Client Name</label>
          <br/>
        <input type="text" 
        name="clientName" id="text" 
        placeholder="Enter Client Name" 
        autoComplete="off" 
        value={clientName} 
        onChange={(e)=> setClientName(e.target.value)
        }/><br/>
        <label htmlfor="clientAdd">Enter Client Address</label>
          <br/>
        <input type="text" 
        name="clientAdd" id="text" 
        placeholder="Enter client Address" 
        autoComplete="off" 
        value={clientAdd} 
        onChange={(e)=> setClientAdd(e.target.value)
        }/><br/>
        <label htmlfor="invoiceNo">Enter invoice No</label>
          <br/>
        <input type="text" 
        name="text" id="text" 
        placeholder="Enter Invoice Number" 
        autoComplete="off" 
        value={invoice} 
        onChange={(e)=> setInvoice(e.target.value)
        }/><br/>
          <label htmlfor="dueDate">Enter Due Date</label>
          <br/>
        <input type="date" 
        name="text" id="text" 
        placeholder="Enter Due Date" 
        autoComplete="off" 
        value={dueDate} 
        onChange={(e)=> setDueDate(e.target.value)
        }/><br/>
            <label htmlfor="notes">Enter your Notes</label>
          <br/>
        <input type="text" 
        name="text" id="text" 
        placeholder="Notes" 
        autoComplete="off" 
        value={notes} 
        onChange={(e)=> setNotes(e.target.value)
        }/><br/>
        <Table description={description} setDescription={setDescription}   quantity={quantity}setQuantity={setQuantity} price={price} setPrice={setPrice} unit={unit} amount={amount} setUnit={setUnit} setAmount={setAmount} list={list} setList={setList} />
        <button type="button" onClick={() => setShowInvoice(true)} className="btn btn-outline-primary">Preview Invoice</button>
        </div>
        </div>
        </>
      )}
       </div>
  
  )
}

export default App;
