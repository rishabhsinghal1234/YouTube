import React from 'react';
import ReactDOM from 'react-dom';
function Person (props){
    return (
        <div>
            <p>I am a {props.name}, I am {Math.floor(Math.random() * 5)} years old</p>
        </div>

    );

}

export default Person;


function Abcd(){
    return(
        <div>
<Person name="ravi" />
<Person name="rishabh" />
<Person name="tushar" />
<Person name="nikhil" />
</div> 
    );
}


ReactDOM.render(<Abcd />, document.getElementById('root'));