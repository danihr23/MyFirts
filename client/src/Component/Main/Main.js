import style from './Main.module.css';
import Post from '../Post/Post';

function  Main({posts}) {

    console.log(posts);
  return (
  <main className={style.main}>
     
    
   
    <h1 className={style.title}>Sooooooome heading</h1>

<div className={style.posts}>

    
    {posts.map(x=>
       <Post 

       key ={x.id}
       content ={x.content}
       author ={x.author}

       
       /> 
        )}
      </div>
    </main>

    
  );
}

export default Main;