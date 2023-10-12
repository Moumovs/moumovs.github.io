import React, {useState, useEffect} from 'react';
import Style from './Navbar.module.scss';

import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import Toggler from "./home/Toggler";
import {info} from "../info/Info";

import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.css';

const left_links = [
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    }
]

const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '/about',
        active: 'about'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]

var darkMenu = {
    bmBurgerBars: {
        background: '#f8f8f8'
    },
    bmCross: {
        background: '#f8f8f8'
    },
    bmMenu: {
        background: '#171717',
        padding: '2.5em 1.5em 0',
        fontSize: '3.15em'
    }
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
               width: window.innerWidth,
              height: window.innerHeight,
        });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const LocationNavbar = props => {
    const location = useLocation();
    const windowWidth = useWindowSize().width;
    return <Navbar location={location} windowsWidth={windowWidth} {...props} />
  }

class Navbar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false,
          active: 'home',
          navbarBackgroundColor: (left_links[0].active !== 'home') ? (this.props.darkMode ? Style.navbarActiveDark : Style.navbarActive) : undefined
        }
        const navbarBackgroundColor = (left_links[0].active !== this.state.active) ? (this.props.darkMode ? Style.navbarActiveDark : Style.navbarActive) : undefined;
    }

    setActive (active) {
        var linkActive = active === '/' ? 'home' : active;
        this.setState({active: linkActive, 
            navbarBackgroundColor: (left_links[0].active !== linkActive) ? (this.props.darkMode ? Style.navbarActiveDark : Style.navbarActive) : undefined})
    }

    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }

    closeMenu (active) {
        this.setState({menuOpen: false, active: active})
    }

    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }

    render () {
        return (
            <Box component={'nav'} width={'100%'}>
                <Box component={'ul'} display={'flex'} className={this.state.navbarBackgroundColor}>
                    <Box component={'ul'} display={'flex'} justifyContent={'left'} alignItems={'center'}
                        sx={{width: "50%", mx: "10%"}} textTransform={'uppercase'} fontSize={'1rem'}>
                            <Box key={0} component={'li'} sx={{borderImageSource: info.gradient}}>
                                <Link to={'/'} onClick={() => this.setActive('home')} className={Style.link}>
                                    <h1>{info.initials}</h1>
                                </Link>
                            </Box>
                    </Box>
                    {window.screen.width > 530 && <Box component={'ul'} display={'flex'} justifyContent={'right'} alignItems={'center'}
                        gap={{xs: '2rem', md: '6rem'}} sx={{width: "50%", mx: "10%"}}
                        textTransform={'uppercase'} fontSize={'1rem'}>
                        {links.map((link, index) => (
                            <Box key={index} component={'li'} className={(link.active === this.state.active && !link.type) && Style.active}
                                sx={{borderImageSource: info.gradient}}>
                                <Link to={link.to} onClick={() => this.setActive(link.active)} className={Style.link}>
                                    {!link.type && <p style={{padding: '0.5rem 0', whiteSpace: "nowrap"}}>{link.name}</p>}
                                    {link.type && <h1>{link.name}</h1>}
                                </Link>
                            </Box>
                        ))}
                        <li>
                            <Toggler darkMode={this.props.darkMode} handleClick={this.props.handleClick}/>
                        </li>
                    </Box>}
                    {window.screen.width < 530 && <Menu styles={this.props.darkMode ? darkMenu : undefined} right width={'65%'} isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
                        {links.map((link, index) => (
                            <Link to={link.to} onClick={() => this.closeMenu(link.active)} className={Style.link}>
                                {!link.type && <p style={{padding: '0.5rem 0', whiteSpace: "nowrap"}}>{link.name}</p>}
                                {link.type && <h1>{link.name}</h1>}
                            </Link>
                        ))}
                        <Box components={"ul"} display={'flex'} onClick={() => this.toggleMenu()}>
                            <Toggler darkMode={this.props.darkMode} handleClick={this.props.handleClick}/>
                        </Box>
                    </Menu>}
                </Box>
            </Box>
        )
    }
}

export default LocationNavbar;