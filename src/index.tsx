import * as React from "react"
import * as ReactDOM from "react-dom"

import { Styledcomponents } from "./components/Styledcomponents"
import { Hello } from "./components/Hello"

const App = () => {
  return (
    <div>
      <Styledcomponents 
        appName='HelloWorld'
        frameworkName='react'
        numberOfComponent={1}
      />
      <Hello />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);