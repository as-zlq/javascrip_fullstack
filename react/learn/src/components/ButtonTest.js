import React, {Component} from 'react'
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'
import { render } from 'react-dom'

class ButtonTest extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
            </div>
        )
    }
}
export default ButtonTest;