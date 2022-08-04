import React, { useState, useEffect } from 'react'
import ChildComponent from './ChildComponent'
var events = require('events')

export var userDetailContext = React.createContext(null)

export const eventEmitter = new events.EventEmitter()

export var test = { list: undefined, setList: undefined }

export default function UserDetailsComponent() {
  const [list, setList] = useState({})

  globalThis.a = 1
  var [userDetails] = useState({
    name: 'Mayank',
    age: 30,
  })

  useEffect(() => {
    test.list = list
    test.setList = setList
    eventEmitter.on('clicked', function (number) {
      console.log('Something is clicked!', number)
    })
  }, [])
  return (
    <userDetailContext.Provider value={userDetails}>
      <h1>This is the Parent Component</h1>
      {console.log(test.list)}
      <hr />
      <ChildComponent userDetails={userDetails} />
    </userDetailContext.Provider>
  )
}
