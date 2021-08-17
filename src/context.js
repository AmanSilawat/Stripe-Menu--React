import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [is_sidebar_open, set_is_sidebar_open] = useState(false);
    const [is_submenu_open, set_is_submenu_open] = useState(false);
    const [location, set_location] = useState({});
    const [page, set_page] = useState({page: '', links: []});

    const open_sidebar = () => {
        set_is_sidebar_open(true)
    }

    const close_sidebar = () => {
        set_is_sidebar_open(false)
    }

    const open_submenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        set_page(page)
        set_location(coordinates)
        set_is_submenu_open(true)
    }

    const close_submenu = () => {
        set_is_submenu_open(false)
    }


    return (
        <AppContext.Provider value={{
            is_sidebar_open,
            is_submenu_open,
            open_sidebar,
            close_sidebar,
            open_submenu,
            close_submenu,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}