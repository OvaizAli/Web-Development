import React, {Component} from 'react';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

// Name of the component must be capital
// npm i; to be used if node modules are accidently deleted
// class Header extends Component{
//   render(){
//     return(
//       <div>
//         <h2 className = "header">
//           Header
//         </h2>
//       </div>
//     )
//   }
// }


// Class Component
class App extends Component{
  render(){
    // let name = "Ovaiz"
    // let toDos = [{text: "Ovaiz"}, {text: "Nihal"}]
    return(
      <div>
        {/* <Header/> Initial  */}
        <Header/>
        {/* <ul>
            {toDos.map((item,index)=>{
              // Key attribute/prop used when map is being used (mandatory)
              return <li key = {index} >{item.text}</li>
            })}
          </ul> */}
        <h1 style={{color: "red", fontSize: "50px"}}>
          Main Component
        </h1>
        {/* <Footer/> */}
        <Footer/>
      </div>
    )
  }
}

// class Footer extends Component{
//   render(){
//     return(
//       <div>
//         <h2 className = "footer">
//           Footer
//         </h2>
//       </div>
//     )
//   }
// }


export default App;
