
import style from './App.module.css';
import Header from './Component/Header/Header';
import Menu from './Component/Menu/Menu';
import Main from './Component/Main/Main'


import {Component} from 'react';
import * as PostService from './services/PostService';
import {getAll} from './services/PostService'
 

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      posts:[]
    }
  }

  componentDidMount (){
    PostService.getAll().then(posts=>{
   
      this.setState({posts})
    });
    

  }

  render (){
    return(
      <div className= {style.app}>

      <Header /> 
     <div className={style.container}>
     <Menu />
 
     <Main posts={this.state.posts} />
      
     </div >
  
     </div>

    );
  }
}

export default App;
