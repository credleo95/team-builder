import './App.css';
import { React, useState }  from 'react';
import Forms from './Components/Forms'; 

const initialForm={
  name: "",
  email:"",
  role:""
}

function App() {
const [form, setForm] = useState(initialForm)

const submit = () => {
  setForm(initialForm); 
}
const update = (name, value) => {
  setForm({...form, [name]: value})
}
  return (
    <div className='parent-div'>
      <h1>My Team </h1>
      <h3>Submit your team below</h3>
      <Forms update={update}  submit={submit} form={form}/> 

    </div>
  );
}

export default App;
