import * as React from "react"
import * as styles from './index.module.scss'
import Button from 'antd/es/button'
import 'antd/lib/button/style/css'
import styledComponents from 'styled-components'

const CustomerBtn = styledComponents(Button)`
  margin-right: 10px;
  vertical-align: middle;
  line-height: 1;
`

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
          <Button type="primary">Example button</Button>
        </div>
        <div style={{ background: 'rgb(190, 200, 200)', padding: '16px', margin: '10px 0' }}>
          <CustomerBtn ghost>Default</CustomerBtn>

          <CustomerBtn type="primary" ghost>
            Primary
          </CustomerBtn>

          <CustomerBtn type="dashed" ghost>
            Dashed
          </CustomerBtn>

          <CustomerBtn type="danger" ghost>
            danger
          </CustomerBtn>

          <CustomerBtn type="link" ghost>
            link
          </CustomerBtn>
        </div>
      </div>
    )
  }
}