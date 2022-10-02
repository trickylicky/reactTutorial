import { useState } from "react"

export function Form(){
    const [userName, setUserName] = useState('')
    const [userCar, setUsercar] =useState("Volvo")
    const [checkScooter,setCheckScooter] = useState(false)

   function handleSubmit(e){
    e.preventDefault()
    alert(`hi there its ${userName} with ${userCar}. ${checkScooter?"Yes I have":"No I dont"} have a scooter`)
    console.log(checkScooter);    
   } 
   const haveScooter = false;
    return <form onSubmit={handleSubmit}>
        <div>
            <label>username : </label>
            <input type="text" 
            value={userName}
            onChange={e => setUserName(e.target.value)}/>
        </div>
        <div>
        <label>Select cars</label>
            <select name="cars" id="cars" form="carform" onChange={e=>setUsercar(e.target.value)}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div>
            <input type="checkbox" value={haveScooter} onChange={()=>setCheckScooter(!haveScooter)}/>
            <label>Do you have a scooter</label>
        </div>
        <button type="submit">Submit</button>
    </form>
}