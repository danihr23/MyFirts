
import style from './App.module.css';
import Header from './Component/Header/Header';
import Menu from './Component/Menu/Menu';
import Main from './Component/Main/Main'
function App() {
  return (
  <div className= {style.app}>
   

     <Header />
    <div className={style.container}>
    <Menu />

    <Main></Main>
    

    </div >
 
  
      
    </div>
  );
}

export default App;
