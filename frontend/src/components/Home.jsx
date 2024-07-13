import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      setData(res.data)
    }).catch((error)=>{
      console.error("Error fetching data:- "+error);
    });
  },[]);
  return (
    <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((data) => (
                  <TableRow
                    key={data.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {data.title}
                    </TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.category}</TableCell>
                    <TableCell><img src={data.image} height="100px" width="100px" /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home