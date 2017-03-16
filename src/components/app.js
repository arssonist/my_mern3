import React from 'react';
import Header from './header'
import Post from './Posts'


class App extends React.Component {
//--regular way-----
//   constructor(props) {
//     super(props);
//     this.state = {
//       test: 42
//     };
//---STAGE 2----------
  state = {
    pageHeader: 'My Works',
    posts: []

  };
  componentDidMount(){
    this.setState({
      posts: data.works
    })
  }
  componentWillUnmount(){
    // take away timers
  };
  render(){
    return(
      <div className= "App">
        <Header message={this.state.pageHeader}/>

        <div className='Posts'>
          {this.state.posts.map((post , i) =>
          <Post key={i}{...post}
          />
          )}
        </div>
      </div>
  )
  }
}


// -------STATELESS--------
// const App = (props) => {
//   return(
//     <div className="container">
//       <Header message="Naming Contests"/>
//       <div>{props.message}</div>
// </div>
//   )
// }

// App.propTypes = {
//   message: React.PropTypes.string
// }
// App.defaultProps = {
//   headerMessage: "TestTestTest Header"
// }

export default App;
