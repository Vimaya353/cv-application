import {useState} from 'react';

function WorkExperience() {
    const [info,setInfo] = useState({company:'', position:'', responsibilities:'', dateFrom:'', dateUntil:''});
    const [isEditing,setIsEditing] = useState(true);

    function handleChange(e) {
       const {name,value} = e.target;
       setInfo({...info, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    if(isEditing) {
        return (
            <form onSubmit={handleSubmit}>
               <h2>Work Experience</h2>

               <label>
                Company <input type='text' name='company' value={info.company} onChange={handleChange} required></input>
               </label>

               <label>
                Position <input type='text' name='position' value={info.position} onChange={handleChange} required></input>
               </label>

               <label>
                Responsibilities <textarea name='responsibilities' value={info.responsibilities} onChange={handleChange} required></textarea>
               </label>

               <label>
                DateFrom <input type='date' name='dateFrom' value={info.dateFrom} onChange={handleChange} required></input>
               </label>

               <label>
                DateUntil <input type='date' name='dateUntil' value={info.dateUntil} onChange={handleChange} required></input>
               </label>

               <button type='submit'>Submit</button>
            </form>
        );
    }

    return (
        <div>
            <h2>Work Experience</h2>;
            <p>Company: {info.company}</p>
            <p>Position: {info.position}</p>
            <p>Responsibilities {info.responsibilities}</p>
            <p>DateFrom: {info.dateFrom}</p>
            <p>DateUntil: {info.dateUntil}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    );
}

export default WorkExperience;