import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { statement } from '@babel/template';
import Second from './Second';



 


const A =()=>{
    
    const [State,SetState]=useState({
        Detail:'',
        Caption:''
    })


    const Cap =(Cit)=>{
        SetState({
            ...State,
            Caption: Cit.target.value
        })
    }


    const Data =(aaaa)=>{
        SetState({
            ...State,
            Detail: aaaa.target.value
        })

    }

    const Submit =(event)=>{
        event.preventDefault();
        console.log("response");
        axios.post('http://localhost:3000/Post/Upload', {
          "title":State.Caption,
          "details":State.Detail,
          "district": localStorage.getItem('District'),
          "city":localStorage.getItem('City'),
          "village":localStorage.getItem('Village'),
          "destination":localStorage.getItem('Destination'),
          "uploaded_by": "ado"                       /*  localStorage.getItem('uEmail') */
          })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }



    return(

        

        <div>


<TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          onChange={Cap}
        />

            <TextField
            onChange={Data}
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          multiline
          

        />
        <Button type="submit" onClick={Submit}>Submit form</Button>
        </div>
    );
}

export default A;