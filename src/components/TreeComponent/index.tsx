import * as React from "react"
import * as styles from './index.module.scss'
// import Button from 'antd/es/button'
// import "antd/dist/antd.css"


export interface IProps {
}

export interface IState {
}

export class TreeComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className={styles.wrap}>
        <h1>Please fork this codesandbox to reproduce your issue.</h1>
        <div>Current antd version: </div>
        <div style={{ marginTop: "16px" }}>
          123
          {/* <Button type="primary">Example button</Button> */}
        </div>
      </div>
    )
  }
}