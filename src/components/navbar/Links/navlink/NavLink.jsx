// navlink/NavLink.js
import React from 'react';
import { useRouter } from 'next/navigation';

const NavLink = ({ item }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(item.path);
    };

    return (
        <button onClick={handleClick}>
            {item.title}
        </button>
    );
};

export default NavLink;
