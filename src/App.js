import "./App.css"
import {useState} from "react"
const App =()=>{
  const [user , setUser] = useState([
    {roll:101, fName:"Rahul", lName:"Badwaya", city:"Indore"},
    {roll:102, fName:"Sanskriti", lName:"Dhakad", city:"Kundeswar dham"},
])
const [isDuplicate, setIsDuplicate] = useState(false)
var rollBox = undefined;
var fNameBox = undefined;
var lNameBox = undefined;
var cityBox = undefined;

const addUser =(event)=>{
  let roll = rollBox.value*1
  let fName = fNameBox.value
  let lName = lNameBox.value
  let city = cityBox.value
  let ob = { roll , fName , lName , city}
  setUser([...user,ob])
  rollBox.value=""
  fNameBox.value=""
  lNameBox.value=""
  cityBox.value=""
  event.preventDefault()
}

const dltUser = (roll) =>{

   setUser(user.filter(ob=>ob.roll!==roll))
}

const isDuplicateUser =(event)=>{
  let roll = event.target.value
  let duplicate = user.find(ob=>ob.roll==roll)
  if(duplicate!=undefined){
    setIsDuplicate(true)
  }
}

    return <div className="main">
       <h1 align="center">User Details</h1>
       <table border="1" align="center" cellPadding="10" className="table table-striped">
           <thead>
             <tr>
               <th>S.No</th>
               <th>RollNo</th>
               <th>First Name</th>
               <th>Last Name</th>
               <th>City</th>
               <th>Operations</th>
             </tr>
           </thead>
           <tbody>
             {user.map((usr,index)=>{
               return <tr>
                 <td>{index+1}</td>
                 <td>{usr.roll}</td>
                 <td>{usr.fName}</td>
                 <td>{usr.lName}</td>
                 <td>{usr.city}</td>
                 <td><button onClick={()=>dltUser(usr.roll)} className="btn btn-danger">Delete</button></td>
               </tr>
             })}
           </tbody>
       </table>
       <br/>
       <br/>
       <br/>
       <form onSubmit={addUser} align="center">
         <input className="input" type="number" placeholder="Roll Number" onBlur={isDuplicateUser} onFocus={()=>setIsDuplicate(false)} ref={c=>rollBox=c} required /> <br/>
         <input className="input"  type="text" placeholder="First Name" ref={c=>fNameBox=c} required /><br/>
         <input className="input" type="text" placeholder="Last Name" ref={c=>lNameBox=c} required /><br/>
         <input className="input" type="text" placeholder="city" ref={c=>cityBox=c} required /><br/>
         {isDuplicate?"This User Data IS Already Exist":<button type="submit" className="btn btn-dark">Save User</button>}
       </form>
    </div>
   }
   export default App