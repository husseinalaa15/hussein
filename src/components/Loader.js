import React ,{useState}from 'react';
import ReactLoading from 'react-loading';
import {Container} from 'react-bootstrap';

const Loader = ({ type, color }) => {
 const [colore, setColore] = useState();
 function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    let color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return setColore(color);
        }
setInterval(getRandomColor,6000);
return(
    <Container className='loader-container'>
        <ReactLoading className='loader' type={"spinningBubbles"} color={colore} height={100}  />

    </Container>
)

};
 
export default Loader;