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
        <div className="user-card">
            <div className="user-profile">
                <span className="profile-picture">{user.photoUrl && <img src={user.photoUrl} alt="Profile" />}</span>
                <p>{user.username}</p>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
          </div>
        </div>
        
    );
}
