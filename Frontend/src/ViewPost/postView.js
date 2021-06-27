import react, { useEffect } from 'react';
import {Card} from 'react-bootstrap';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Icon } from '@material-ui/core';
import post from  "./post.css";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentBox from './comment';
import {useState} from 'react';
import axios from 'axios';




const ViewPost =()=>{

    
    const [state, setState] = useState({
        "pID": "",
        "title": "",
        "details": "",
        "district": "",
        "city": "",
        "village": "",
        "destination": "",
        "uploaded_by": "",
        "rate": "",
        "photo_path": ""
    });
    useEffect(()=> {
        axios.get('http://localhost:3000/Post/View/2')
        .then(function (response) {
        setState(response.data[0]);
        })
        .catch(function (error) {
            
        console.log(error);
        })
        
        
    })
    const SubIcon1 =()=>{
        console.log('-10');
           }
    const SubIcon2 =()=>{
        console.log('-5');
    }
    const SubIcon3 =()=>{
        console.log('0');
    }
    const SubIcon4 =()=>{
        console.log('+5');
    }
    const SubIcon5 =()=>{
        console.log('+10');
    }

    return(
        <div>
            
            <Card style={{ width: '18rem' }}>
            
            <Card.Title>{state.uploaded_by}</Card.Title>
            <Card.Title>{state.rate}</Card.Title>
            <Card.Title>{state.title}</Card.Title>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Text>
                {state.details}</Card.Text>
            </Card.Body>
            <Card.Title>{state.district}  {state.city}  {state.village}  {state.destination}</Card.Title>
            
            <table>
                <tr>
                    <td>
                    <Button onClick={SubIcon1} varient="danger"><SentimentVerySatisfiedIcon/></Button>
                    </td>
                    <td>
                    <Button onClick={SubIcon2}><SentimentVerySatisfiedIcon/></Button>
                    </td>
                    <td>
                    <Button onClick={SubIcon3}><SentimentVerySatisfiedIcon/></Button>
                    </td>
                    <td>
                    <Button onClick={SubIcon4}><SentimentVerySatisfiedIcon/></Button>
                    </td>
                    <td>
                    <Button onClick={SubIcon5}><SentimentVerySatisfiedIcon/></Button>
                    </td>
                </tr>
            </table>
          
            <CommentBox postID={state.pID}/>

            </Card>
           
        </div>
    );
}

export default ViewPost;