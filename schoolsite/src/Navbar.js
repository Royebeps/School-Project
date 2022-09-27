import '../src/styles/navbar.css'

function Navbar(){

    return (
        <div className='nav-container'>
       
<ul className='nav-list-container'>
    
    <div className="j">
    <li>FOLIS</li>
    </div>

    <li className="nav-list-item">About Us</li>
    <li className="nav-list-item">News</li>
    <li className="nav-list-item">Our Work</li>
    <li className="nav-list-item">Academics</li>
    <li className="nav-list-item">Get Involved</li>
    <li className="nav-list-item">Enrollment</li>

    <div className="r">
    <li>Login</li>
    </div>
 
</ul>
        </div>
    )
}

export default Navbar;