'use client'
import React, { useEffect, useState } from "react";

export default function UserTGData () {

    const [user, setUser] = useState({ username: '', photoUrl: ''});
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true only on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && window.Telegram?.WebApp) {
            // Retrieve user data from Telegram WebApp SDK
            const tgUser = window.Telegram.WebApp.initDataUnsafe?.user;

            if (tgUser) {
                setUser({
                    username: tgUser.username.length > 25
                        ? `${tgUser.username.slice(0,15)}...${tgUser.username.slice(-10)}`
                        : tgUser.username,
                    photoUrl: tgUser.photo_url || ''
                });
            }

            // Open WebApp
            window.Telegram.WebApp.ready();
        }
    }, [isClient]);

    if (!user.username) return <div>Set Telegram username</div>

    return (
        <div>
            <div>{user.photoUrl && <img src={user.photoUrl} alt="Profile" />}</div>
            <p>{user.username}</p>
        </div>
    );
}