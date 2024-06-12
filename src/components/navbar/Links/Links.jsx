"use client";

import React, { useState, useEffect } from 'react';
import NavLink from './navlink/NavLink';
import styles from "./links.module.css";
import Logout from '@/components/logout/Logout';
import Cookies from 'js-cookie';

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Top News",
        path: "/services",
    },
];

const Links = () => {
    const [session, setSession] = useState(false);

    useEffect(() => {
        // Check for session cookie on initial load
        const sessionCookie = Cookies.get('session');
        if (sessionCookie === "true") {
            setSession(true);
        }
    }, []);

    const handleLogout = () => {
        // Perform logout logic here
        Cookies.remove('session');
        setSession(false);
        window.location.reload(); // Refresh the page after logout
    };

    return (
        <div className={styles.container}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}
            {session ? (
                <Logout onLogout={handleLogout} />
            ) : (
                <NavLink item={{ title: "Login", path: "/login" }} />
            )}
        </div>
    );
}

export default Links;
