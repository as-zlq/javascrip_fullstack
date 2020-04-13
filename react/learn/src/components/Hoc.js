import React, {Component} from 'react'


//高阶组件--链式调用
const withName = Comp =>  {
    class NewComponent extends Component{
        componentDidMount () {
            console.log('do something')
        }
        render () {
            return <Comp {...this.props} name="高阶组件使用" />
        }
    }

    return NewComponent;
}

const withLog = Comp => {
    console.log(Comp.name + 'xuanranle')
    return props => <Comp {...props} />
}
//ES6简化高阶组件的写法， 必须安装"@babel/plugin-proposal-decorators",
@withLog//withLog(Jspsite)
@withName//withName()
@withLog
class Jpsite extends Component {
    render () {
        return(
            <div>
               {this.props.state} - {this.props.name}
            </div>
        )
    }
}
//export ddefault withName(withLog(App))
export default Jpsite //链式调用