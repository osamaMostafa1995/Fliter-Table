import axios from "axios";
import { createContext, useEffect, useState } from "react";

 const fliterContext = createContext();
 export {fliterContext}
const FliterContextProvider = (props) => {
    const [users , setUsers] = useState([]);
    console.log(users);
    const fliterTable = (text) =>{
    let input, fliter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    fliter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(fliter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  
    }
    useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>setUsers(res.data))
    }, []);
    
    return ( 
        <fliterContext.Provider value = {{users , fliterTable}}>
{props.children}
        </fliterContext.Provider>
     );
}
 
export default FliterContextProvider;