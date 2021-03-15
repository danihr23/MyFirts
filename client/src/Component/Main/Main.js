import style from './Main.module.css';

import MainItem from './MainItem/MainItem';


function Main() {
  return (
  <main className={style.main}>
   
    <h1 className={style.title}>Sooooooome heading</h1>

    <MainItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae totam in
     reprehenderit quibusdam tempore ipsa. Corporis consequuntur pariatur,
      officiis aspernatur minima a adipisci consequatur! Rem dolorem dolore rerum. Deleniti?</MainItem>
      <MainItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae totam in
     reprehenderit quibusdam tempore ipsa. Corporis consequuntur pariatur,
      officiis aspernatur minima a adipisci consequatur! Rem dolorem dolore rerum. Deleniti?</MainItem>
      <MainItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae totam in
     reprehenderit quibusdam tempore ipsa. Corporis consequuntur pariatur,
      officiis aspernatur minima a adipisci consequatur! Rem dolorem dolore rerum. Deleniti?</MainItem>
      
    </main>
  );
}

export default Main;