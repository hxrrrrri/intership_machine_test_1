import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
    const [form, setForm] = useState({
        product_name: "",
        description: "",
        pricetag: "",
        category: ""
    })

    let setData=()=>{
        console.log(form);
    }

    function valueFetch(e){
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                name="product_name"
                label="Product Name"
                defaultValue=""
                onChange={valueFetch}
            />
            <TextField
                required
                name="description"
                label="Description"
                defaultValue=""
                onChange={valueFetch}
            />
            <TextField
                required
                name="pricetag"
                label="Price"
                defaultValue=""
                type="number"
                onChange={valueFetch}
            />
            <TextField
                required
                name="category"
                label="Category"
                defaultValue=""
                onChange={valueFetch}
            />
            <Button variant="contained"  onClick={setData}>Submit</Button>
        </Box>
    );
}

export default Form;
