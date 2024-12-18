import { FC } from 'react'
import './style.scss'
import List from '../work/list'

const CodeArt: FC = () => {
  return (
    <div className='code-art'>
      {/* 你的 About 页面内容 */}
      <h2>CodeArt</h2>
      <List theme={'DunHuang'}/>
    </div>
  )
}

export default CodeArt