import style from "./MainItem.module.css";

const MainItem = (props)=>{
    return(

        <div className={style.post}>
            <img className={style.postImg} src="logo.svg" alt=""/>
            <p className={style.description} >{props.children}</p>
            <div className={style.postDiv} >
                <spam className={style.postDivSpan } >
                    <small>Author</small>
                    Some Author
                </spam>
            </div>

        </div>
    );
};

export default MainItem;