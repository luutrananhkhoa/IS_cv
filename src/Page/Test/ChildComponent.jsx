import React, { useState } from 'react'

import SubChildComponent from './SubChildComponent'
export default function ChildComponent(props) {
  return (
    <div>
      <h2>This is Child Component</h2>
      <hr />
      <SubChildComponent />
    </div>
  )
}
