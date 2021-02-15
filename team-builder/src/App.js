import './App.css';
import { React, useState }  from 'react';
import Forms from './Components/Forms'; 
import TeamMember from './Components/Team-Members';

const initialForm=[{
  name:"",
  email:"",
  role:""
}]

function App() {
const [teamMember, setTeamMember] = useState([])
const [form, setForm] = useState(initialForm)

const submit = () => {
  setTeamMember([...teamMember, form])
  setForm(initialForm); 
}

const update = (name, value) => {
  setForm({...form, [name]: value})
}
  return (
    <div className='parent-div'>
       <h1>Team Builder</h1>
      <h3>Submit your info below</h3>
      <Forms update={update}  submit={submit} form={form}/> 
      
      { teamMember.map(member => {
        return (
          <TeamMember key={member.id} stats={member} />
        )
      })
      }
    </div>
  );
}

export default App;
