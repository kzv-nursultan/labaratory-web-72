import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Layout = props => {
    return (
       <>       
       <header className='p-3 bg-secondary'>
            <NavLink to='/' className='text-white'>Dishes | </NavLink>
            <NavLink to='/orders' className='text-white'>Orders</NavLink>
        </header>
        <div>
            {props.children}
        </div>
        <footer className='p-4 bg-dark text-white'>

        </footer>
       </>
    );
};

export default Layout;