import ButtonAppBar  from './components/AppBar.js';
import {useEffect, useState} from 'react' ; 

const innitialForm = {
     amount : 0, 
     description : "" , 
     date : new Date(),
}
function App() {
  const [form, setForm] = useState(innitialForm); 

  const [transactions, setTransactions] = useState([])
  
  useEffect(() => {
    fetchTransactions();
  }, [])
  
  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction");
    const {data }= await res.json();
    setTransactions(data)
    console.log(data)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(form);
    const res = await fetch("http://localhost:4000/transaction" , {
      method : "POST", 
      body : JSON.stringify(form),
      headers : {
        "content-type" : "application/json"
      }
    }); 
    if(res.ok) {
      setForm(innitialForm);
      fetchTransactions()
    }
  }

  function handleChange(e) {
     setForm({...form , [e.target.name]:e.target.value})
  }
  return (
    <div>
      <ButtonAppBar />
      <form onSubmit={handleSubmit}>
      <input type="number" name="amount" value={form.amount} onChange={handleChange} placeholder="Enter transaction amount" />
      <input type="text"   name="description" value={form.description} onChange={handleChange} placeholder="Enter transaction details" />
      <input type="date"   name="date" value={form.date} onChange={handleChange}/>
      <button type="submit">Submit</button>
      </form>
      <br /> 
      
      <section>
        <table>
          <thead>
            <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx._id}>
               <td>{trx.amount}</td>
               <td>{trx.description}</td>
               <td>{trx.date}</td>
               </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App;
