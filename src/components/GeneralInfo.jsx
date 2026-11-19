import { useState } from 'react';

function GeneralInfo() {
   const [info , setInfo] = useState({name:'', email:'', phone:''});
   const [isEditing , setIsEditing] = useState(true);

   function handleChange(e) {
    const {name, value} = e.target;
    setInfo({...info, [name]: value});
   }
 
   function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
   }

   if (isEditing) {
    return (
        <form onSubmit={handleSubmit}>
            <h2>General Information</h2>

            <label>
                Name <input type = "text" name="name" value={info.name} onChange={handleChange} required></input>
            </label>

            <label>
                Email <input type='email' name='email' value={info.email} onChange={handleChange} required></input>
            </label>

            <label>
                Phone <input type='tel' name='phone' value={info.phone} onChange={handleChange} required></input>
            </label>

            <button type='submit'>Submit</button>
        </form>
    );
   }

   return (
    <div>
        <h2>General Information</h2>
        <p>Name: {info.name}</p>
        <p>Email: {info.email}</p>
        <p>Phone: {info.phone}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
   );
}

export default GeneralInfo;

