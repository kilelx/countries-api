import {useEffect, useRef} from 'react';

const DarkMode = () => {

    const toggleRef = useRef(null);

    // Save the theme in localStorage, and change the HTML attribute
    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }

    // Determines the inital state
    const storedTheme = localStorage.getItem("theme");

    // If the user prefers Dark mode by default
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Is dark mode enabled by default?
    const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

    useEffect(() => {
        if (defaultDark) {
            // console.log(toggleRef.current.checked);
            toggleRef.current.checked = true;
            setDark();
        }
    }, [])

    const toggleTheme = (e) => {
        if(e.target.checked) {
            setDark();
        } else {
            setLight();
        }
    }

    return (
        <>
            <div className="toggle--wrapper flex row al-center">
               <span>Light Mode 🌞</span>
               <label className="toggle--theme" htmlFor="checkbox">
                 <input
                   type="checkbox"
                   id="checkbox"
                   ref={toggleRef}
                   onChange={toggleTheme}
                   />
                 <div className="slider"></div>
               </label>
               <span>🌛 Dark Mode</span>
            </div>
        </>
    )
}

export default DarkMode;