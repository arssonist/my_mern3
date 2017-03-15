import React from 'react';
import Header from './header'

const App = (props) => {
  return(
    <div className="container">
      <Header message="Naming Contests"/>
      <div>{props.message}</div>
</div>
  )
}

App.propTypes = {
  message: React.PropTypes.string.isRequired
}
App.defaultProps = {
  headerMessage: "TestTestTest Header"
}

export default App;
