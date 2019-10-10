import * as React from "react"
import * as styles from './index.module.scss'
// import icon from '../../assets/image.jpg'
const icon = require('../../assets/image.jpg')

export interface HelloProps {
  // appName: string
  // frameworkName: string
  // numberOfComponent: number
}

export interface HelloState {
}

export class Hello extends React.Component<HelloProps, HelloState> {
  constructor(props: HelloProps) {
    super(props)
  }

  componentDidMount() {

  }


  render() { // 返回数组的类型声明 : Array<JSX.Element>
    return (
      <div className={styles.wrap}>
        <p className={styles.headline}>2、CSS Modules Component</p>
        <p className={styles.para}>123</p>
        <div className={styles.image}></div>
        <div className={styles.imageWrap}><img src={icon} /></div>
      </div>
    )
  }
}