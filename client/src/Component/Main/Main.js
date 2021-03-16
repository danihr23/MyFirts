import style from './Main.module.css';




const  Main=({posts}) =>{

    console.log(posts);
  return (
  <main className={style.main}>
     
    
   
    <h1 className={style.title}>Sooooooome heading</h1>

    {posts.map(x=>
       <p>{x.content}</p> 
        )}
      
    </main>

    
  );
}

export default Main;