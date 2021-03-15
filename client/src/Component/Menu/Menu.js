
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
        <MenuItem>Going to 6</MenuItem>
        <MenuItem>Going to 7</MenuItem>
        <MenuItem>Going to 8</MenuItem>
        <MenuItem>Going to 9</MenuItem>
        <MenuItem>Going to 10</MenuItem>
        <MenuItem>Going to 11</MenuItem>
    </ul>
      
    </aside>
  );
}

export default Menu;