//组件跨层级的上下文通讯,可以使用context， 这种模式下有两个角色，Provider,consumer.provider为外层组件，用来提供数据。当内部需要数据时用consumer获取
import React, {Component} from 'react'

//创建上下文
 const Context = React.createContext()

 const store = {
     name: '恭喜你中了一等奖',
     sayHi () {
         console.log(this.name)
     }
 }


 const withProvider = Comp => props => (
     <Context.Provider value={store}>
         <Comp  {...props}/>
     </Context.Provider>
 )

 const withConsumer = Comp => props => (
     <Context.Consumer>
         {value => <Comp{...props} value={value} />}
     </Context.Consumer>
 )

 @withConsumer
  class Inner extends Component {
      render () {
          console.log('inner')
          return(
          <div>{this.props.value.name}</div>
          )
      }
  }
  @withProvider
  class ContextSample extends Component {
      render () {
          console.log('ContextSample')
          return(
              <div>
              <Inner></Inner>
              </div>
             
          )
      }
  }

  export default ContextSample