import style from "./MenuItem.module.css";

const MenuItem = (props)=>{
    return(

        <li className={style.menuListItem}> <a className={style.menuListItemA} href="#">{props.children}</a>  </li>
    );
};

export default MenuItem;