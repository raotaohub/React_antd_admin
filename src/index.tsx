import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './style/reset.css'
import 'antd/dist/antd.less'

ReactDOM.render(<App />, document.getElementById('root'))

reportWebVitals()

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import reportWebVitals from './reportWebVitals'
// import './style/reset.css'
// import 'antd/dist/antd.less'

// ReactDOM.render(
//   <React.Fragment>
//     <MobxProvider {...mobxStore}>
//       <ReduxProvider store={reduxStore}>
//         <App />
//       </ReduxProvider>
//     </MobxProvider>
//   </React.Fragment>,
//   document.getElementById('root')
// )

// reportWebVitals()
