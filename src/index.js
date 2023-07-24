import React from 'react';
import ReactDOM from 'react-dom/client';

/*const name = 'Nicolas Segond';
let tabIndex = 2;

const element = <div>
                  <h1 tabIndex={tabIndex}>Bienvenue les étudiants !</h1>
                  <p> Vous êtes en forme ? </p>
                  <p> Je m'appelle {name} </p>
                </div>

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

const root = ReactDOM.createRoot(document.getElementById('root'));

function Heure(){
  return <h1>il est {new Date().toLocaleTimeString()}</h1>
}

function tick(){
  root.render(<Heure/>);
}

class Heure extends React.Component{
  constructor(props){
    super(props)

    this.state = {date: new Date()}
  }

  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState({date : new Date()})
    },1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){

  }

  render(){
    return <h1>il est {this.state.date.toLocaleTimeString()}</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heure />);*/

class Increment extends React.Component{
  constructor(props){
    super(props)

    this.state = {count : 0}
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement(){
    this.setState({count : this.state.count+1})
  }

  handleDecrement(){
    this.setState({count : this.state.count-1})
  }

  render(){
    return <div>
            <p>La valeur est : {this.state.count} </p>
            <button type='button' onClick={this.handleIncrement}> Increment </button>
            <button type='button' onClick={this.handleDecrement}> Increment </button>
           </div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Increment />);
