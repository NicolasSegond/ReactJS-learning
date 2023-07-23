import React from 'react';
import ReactDOM from 'react-dom/client';

/*const name = 'Nicolas Segond';
let tabIndex = 2;

const element = <div>
                  <h1 tabIndex={tabIndex}>Bienvenue les étudiants !</h1>
                  <p> Vous êtes en forme ? </p>
                  <p> Je m'appelle {name} </p>
                </div>*/

function FormatUser(props){
  return props.firstName + ' ' + props.lastName
}

const user = {
  firstName : 'Nicolas',
  lastName : 'Segond'
}

class FormatUserV2 extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return this.props.firstName + ' ' + this.props.lastName + ' il s\'agit de la version V2'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FormatUserV2 firstName={user.firstName} lastName={user.lastName}/>);