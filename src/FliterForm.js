import { useState } from "react";
import { useContext } from "react";
import { fliterContext } from "./fliterContext/fliter";

const Form = () => {
    const[search , setSearch] = useState("")
    const{fliterTable} = useContext (fliterContext)
    return ( 
      
        <div className="form">
            <input type="text" id="myInput" placeholder="search for your name ..." onChange= {(e)=>setSearch(e.target.value)} onKeyUp={()=>fliterTable(search)}/>

        </div>

     );
}
 
export default Form;