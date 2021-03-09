import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import './style.scss'

const getUserModule = () => import('./common/userAPI')

function App() {
  return (
    <div>
      <div className="txt">hello</div>
      <button
        onClick={() =>
          getUserModule().then(({ getUsers }) => {
            getUsers().then((json) => console.log(json))
          })
        }
      >
        load
      </button>
    </div>
  )
}

render(<App />, document.getElementById('root'))
