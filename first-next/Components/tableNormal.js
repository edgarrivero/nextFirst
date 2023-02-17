 import React, { useState } from "react";
 import { Table, TableHead, TableBody, TableRow, TableCell, TextField } from "@mui/material";
 const rows = [
   { id: 1, name: "John", age: 25, city: "New York" },
   { id: 2, name: "Jane", age: 32, city: "Los Angeles" },
   { id: 3, name: "Mike", age: 40, city: "Chicago" },
 ];
 export default function TableWithSearch() {
   const [searchTerm, setSearchTerm] = useState("");

   const handleSearchChange = (event) => {
     setSearchTerm(event.target.value);
   };

   return (
     <Table>
       <TableHead>
         <TableRow>
           <TableCell colSpan={3}>
             <TextField fullWidth name="search" label="Search" value={searchTerm} onChange={handleSearchChange} />
           </TableCell>
         </TableRow>
         <TableRow>
           <TableCell>Name</TableCell>
           <TableCell>Age</TableCell>
           <TableCell>City</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows
           .filter((row) =>
             Object.values(row).some(
               (value) => value.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
             )
           )
           .map((row) => (
             <TableRow key={row.id}>
               <TableCell>{row.name}</TableCell>
               <TableCell>{row.age}</TableCell>
               <TableCell>{row.city}</TableCell>
             </TableRow>
           ))}
       </TableBody>
     </Table>
   );
 };
       