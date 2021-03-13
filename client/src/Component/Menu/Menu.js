
import style from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';


function Menu() {
  return (
  <aside className= {style.aside}>
   
    <ul className= {style.container}>
        <MenuItem>Going to 1</MenuItem>
        <MenuItem>Going to 2</MenuItem>
        <MenuItem>Going to 3</MenuItem>
        <MenuItem>Going to 4</MenuItem>
        <MenuItem>Going to 5</MenuItem>
    </ul>
      
    </aside>
  );
}

export default Menu;