import React, { useState } from 'react'
import useA from "./useA"
export default function SubChildComponent(props) {
    var contextData = useA()
  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  )
}
