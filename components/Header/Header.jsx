import Explore from "@/shared/icons/Explore";
import Messenger from "@/shared/icons/Messenger";
import Profile from "@/shared/icons/Profile";
import Project from "@/shared/icons/Project";
import Wallet from "@/shared/icons/Wallet";
import Link from "next/link";
import React from "react";
import Item from "./Item";

const Header = () => {
    const headerItems = [
        {
            id: 1,
            text: "Messenger",
            icon: <Messenger width={16} height={16} active={false} />,
            active: false,
        },
        {
            id: 2,
            text: "Explore",
            icon: <Explore width={16} height={16} active={false} />,
            active: false,
        },
        {
            id: 3,
            text: "Project",
            icon: <Project width={16} height={16} active={true} />,
            active: true,
        },
        {
            id: 4,
            text: "Profile",
            icon: <Profile width={16} height={16} active={false} />,
            active: false,
        },
        {
            id: 5,
            text: "Messenger",
            icon: <Wallet width={17} height={16} active={false} />,
            active: false,
        },
    ];
    return (
        <header className="w-full z-10 h-12">
            <nav className="flex justify-center items-center gap-12 py-3 h-12">
                {headerItems.map((item) => (
                    <Item
                        key={item.id}
                        text={item.text}
                        icon={item.icon}
                        active={item.active}
                    />
                ))}
            </nav>
        </header>
    );
};

export default Header;
