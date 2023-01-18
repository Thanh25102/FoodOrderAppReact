import images from '../../asset/img.png'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div id="header" className={classes['mainImage']}>
                <img src={images} alt="A table full of delicious food!"/>
            </div>
        </>
    )
}
export default Header