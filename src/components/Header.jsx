import logo from './../assets/shared/logo.svg'

function Header () {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-logo"/>
            <a href="#" className="header-link link-1">start slideshow</a>
        </header>
    )
}

export default Header