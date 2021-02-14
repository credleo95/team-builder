import {useState, React } from 'react'; 

export default function Forms(props) {
const {form, update, submit } = props ; 

    return (
       <form className ='form-container'> 
        <div className='form-content'>
            <label>Name
                <input 
                type="text"
                name='name'
                placeholder='please type your name...'
                value={form.name}
                />
            </label>
            <label> Email
                <input 
                type="email"
                name="email"
                placeholder="please type your email..."
                value={form.email}
                />
            </label>
            <label> Role
                <select name="role" value={form.role}>
                    <option value="">-- Select a Role --</option>
                    <option value="Frontend">Frontend Engineer</option>
                    <option value="Backend">Backend Engineer</option>
                    <option value="Fullstack">Fullstack Engineer</option>
                    <option value="UX">User Experience Designer</option>
                    <option value="Project-Manager">Project Manager</option>
                </select>
            </label>
            
            <div className="submit-button">
                <button>Submit</button>
            </div>
            
        </div>
       </form>
    )
}