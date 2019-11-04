import * as React from 'react'
import styledComponents from 'styled-components'

export interface HelloProps {
  appName: string
  frameworkName: string
  numberOfComponent: number
}

export interface HelloState {
}

const StyledCounter = styledComponents.div`
  width: 100%;
  display: block;
`

const Headline = styledComponents.p`
  color: #333;
`

const Paragraph = styledComponents.span`
  width: 100%;
  color: #db7093;
  margin: 0 10px 0 10px;
`
const Button = styledComponents.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  vertical-align: middle;
  -webkit-appearance: none;
  border: 1px solid #333;
  outline:none;
`

export class Styledcomponents extends React.Component<HelloProps, HelloState> {
  state = { count: 0 }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() { // 返回数组的类型声明 : Array<JSX.Element>
    return (
      <StyledCounter>
        <Headline>1、Styled Component</Headline>
        <Button onClick={this.increment}>+</Button>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    )
  }
}
