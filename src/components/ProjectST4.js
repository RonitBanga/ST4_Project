import React from 'react'
import './index.css';
import {Table,TableHead,TableBody,TableCell, TableRow,styled,Button} from '@mui/material'

const StyledTable =styled(Table)`
width:80%;
margin:auto;
`;

const Thead=styled(TableRow)`
background:#0000FF;

 & > th{
  color:#000000;
  font-size:20px;
}
`;


const Tbody=styled(TableRow)`

&>td{

  font-size:20px;
}
`
export const ProjectST4 = () => {
  return (
    <div>
      
    <StyledTable>
      <TableHead>
      <Thead>
         <TableCell>Product Code</TableCell>
         <TableCell>Product Name</TableCell>
         <TableCell>Credit Score</TableCell>
         <TableCell>Price</TableCell>
         
      </Thead>
      </TableHead>
      <TableBody>
        {
          
            <Tbody>
                <TableCell>101</TableCell>
                <TableCell>Watch</TableCell>
                <TableCell> 5 </TableCell>
                <TableCell> 10 </TableCell>
                
                
            </Tbody>

        }
        {
          
          <Tbody>
              <TableCell>202</TableCell>
              <TableCell>Iphone 14</TableCell>
              <TableCell> 4 </TableCell>
              <TableCell> 50 </TableCell>
              
              
          </Tbody>
      }
     
      {
          
          <Tbody>
              <TableCell>214</TableCell>
              <TableCell>Xiomi</TableCell>
              <TableCell> 4 </TableCell>
              <TableCell> 73 </TableCell>
              
              
          </Tbody>
      }

{
          
          <Tbody>
              <TableCell>142</TableCell>
              <TableCell>samsung</TableCell>
              <TableCell> 2 </TableCell>
              <TableCell> 55 </TableCell>
              
              
          </Tbody>
      }
      </TableBody>
    </StyledTable>
    </div>
  )
}
