import { useState } from "react";

function Education() {
  const [info,setInfo] = useState ({school:'', title:'', date:''});
  const [isEditing,setIsEditing] = useState (true);

  function handleChange(e) {
    const {name,value} = e.target;
    setInfo({...info, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
        <form onSubmit= {handleSubmit}>
            <h2>Education</h2>

            <label>
                School <input type='text' name='school' value={info.school} onChange={handleChange} required></input>
            </label>

            <label>
                Title <input type="text" name="title" value={info.title} onChange={handleChange} required></input>
            </label>

            <label>
                Date <input type="date" name="date" value={info.date} onChange={handleChange} required></input>
            </label>

            <button type="submit">Submit</button>
        </form>
    );
  }

  return (
    <div>
        <h2>Education</h2>
        <p>School: {info.school}</p>
        <p>Title: {info.title}</p>
        <p>Date: {info.date}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );

}

export default Education;