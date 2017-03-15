import React from 'react';
import Header from './header'


class App extends React.Component {
//--regular way-----
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: 42
//     };
//---STAGE 2----------
  state = {
    pageHeader: 'Naming Contests'
  };
  render(){
    return(
      <div className= "App">
        <Header message={this.state.pageHeader}/>
        <div></div>
  </div>
  )
  }
}
//-------STATELESS--------
// const App = (props) => {
//   return(
//     <div className="container">
//       <Header message="Naming Contests"/>
//       <div>{props.message}</div>
// </div>
//   )
// }

App.propTypes = {
  message: React.PropTypes.string.isRequired
}
App.defaultProps = {
  headerMessage: "TestTestTest Header"
}

export default App;
