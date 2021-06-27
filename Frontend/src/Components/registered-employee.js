import react, { useEffect, useState } from 'react';
const axios = require('axios');






const Employees =()=>{
    
    



    
    const [employees, setEmployees] = useState(null);

    const apiUrl = "http://localhost:3000";

    const getEmplooyees = () =>{
        axios.get(apiUrl + '/api/employee/a')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setEmployees(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }

    useEffect(()=>{
        getEmplooyees();
    },[]);


    return(
        <div>
            
                <h>a</h>
                
        </div>
    )
}

export default Employees;