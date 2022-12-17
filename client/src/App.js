
import {useState} from 'react' ; 

function App() {
  const [form, setForm] = useState({
    amount : 0, 
     description : "" , 
     date : " ",
  }) 

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(form);
    const res = await fetch("http://localhost:4000/transaction" , {
      method : "POST", 
      body : form
    });
    console.log(res)
  }

  function handleChange(e) {
     setForm({...form , [e.target.name]:e.target.value})
     console.log(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="number" name="amount" value={form.amount} onChange={handleChange} placeholder="Enter transaction amount" />
      <input type="text"   name="description" value={form.description} onChange={handleChange} placeholder="Enter transaction details" />
      <input type="date"   name="date" value={form.date} onChange={handleChange}/>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
