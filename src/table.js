import {  useContext } from "react";
import { fliterContext } from "./fliterContext/fliter";
import Table from 'react-bootstrap/Table';
const Tablee = () => {
    const {users} =useContext(fliterContext)
    return ( 
        <div className="table">
          <Table striped bordered hover variant="dark" id="myTable" >
  <thead>
      <th>#</th>
      <td>name</td>
    <td>address</td>
    <td>company</td>
    <td>email</td>
    <td>website</td>
  </thead>
  <tbody>
  {users.map(user =>(
     
     <tr>
           <td>{user.id}</td>
<td>{user.name}</td>
<td>{user.address.street}</td>
<td>{user.company.name}</td>
<td>{user.email}</td>
<td>{user.website}</td>
     </tr>
    ))}
    
  </tbody>
</Table>
         
        </div>
     );
}
 
export default Tablee;