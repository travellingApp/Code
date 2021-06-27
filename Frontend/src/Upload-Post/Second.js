import React from 'react';
import {Form,Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';





const A =()=>{

    const apiUrl = 'http://localhost:3000'
  

    const [State,SetState]=useState({
        District:'',
        City:'',
        Village:'',
        Destination:''
    })


    const SC =(Cit)=>{
        SetState({
            ...State,
            City: Cit.target.value
        })
    }


    const SD =(aaaa)=>{
        SetState({
            ...State,
            District: aaaa.target.value
        })
        

    }

    const SV=(Villa)=>{
        SetState({
            ...State,
            Village:Villa.target.value
        })
    }

    const SDes=(Des)=>{
        SetState({
            ...State,
            Destination:Des.target.value
        })
    }

    const Submit =(event)=>{
        event.preventDefault();
        localStorage.setItem('District', State.District);
        localStorage.setItem('City', State.City);
        localStorage.setItem('Village', State.Village);
        localStorage.setItem('Destination', State.Destination);
        
        
    }

    
  
    
    return(
        <div>
            <h1>Chethiya</h1>
            <Form onSubmit={Submit}>
            <FormControl>
        <InputLabel htmlFor="age-native-helper">District</InputLabel>
        <NativeSelect
       
          onChange={SD}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value='RAT'>Rathnapura</option>
          <option value='KAN'>Kandy</option>
        </NativeSelect>
        <FormHelperText>Select the District</FormHelperText>
      </FormControl>



      {(() => {

  

switch (State.District) {

   case 'RAT':

       return (

        <FormControl>
        <InputLabel htmlFor="age-native-helper">City</InputLabel>
        <NativeSelect
       
          onChange={SC}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value='Bal'>Balangoda</option>
          <option value='Rat'>Rathnapura</option>
          <option value='Emb'>Emblipitiya</option>
        </NativeSelect>
        <FormHelperText>Rathnapura District</FormHelperText>
      </FormControl>

       )

   case 'KAN':

       return (

        <FormControl>
        <InputLabel htmlFor="age-native-helper">City</InputLabel>
        <NativeSelect
       
          onChange={SC}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value='Kandy'>Kandy</option>
          <option value='Pili'>Pilimathalawa</option>
          <option value='Pera'>Peradeniya</option>
        </NativeSelect>
        <FormHelperText>Kandy District</FormHelperText>
      </FormControl>


       )

   default:

       return (

        <FormControl>
        <InputLabel htmlFor="age-native-helper">City</InputLabel>
        <NativeSelect
       
          onChange={SC}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          
        </NativeSelect>
        <FormHelperText>Enter the District</FormHelperText>
      </FormControl>



       )

}



})()}



      
    


     
<TextField
          id="standard-textarea"
          label="Enter Village"
          placeholder="Boralanda"
          onChange={SV}
        />
<TextField
          id="standard-textare"
          label="Destination Name"
          placeholder="Adhsyam Banglow"
          onChange={SDes}
        />

      <Button type="submit" onClick={Submit}>Submit form new</Button>





      </Form>
            
        </div>
    );
}

export default A;