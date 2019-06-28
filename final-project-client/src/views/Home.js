import React from 'react'
import {connect} from 'react-redux'

function Home(props) {
  return (
    <div>
      <h1>INI HOME PAGE</h1>
      {
        props.statusLogin && <h1>Status Login True</h1>
      }
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    statusLogin: state.isLogin
  }
}

export default connect(mapStateToProps)(Home)