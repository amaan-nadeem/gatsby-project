import React from 'react';
import layoutStyles from "./styles/layout.module.scss";
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => {
    return(
        <div>
            <Header/>
            <main className = { layoutStyles.layoutMain}>
            {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;