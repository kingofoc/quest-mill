'use client'
import Image from "next/image"
import React, { useState } from "react"

const coinImage = "/assets/coin.png";

const rewards: { [key: number]: string} = {
    1: "10 Silver Keys",
    2: "10,000 Points",
    3: "2 Gold Keys",
    4: "50,000 points",
    5: "100,000 Points",
    6: "1 Diamond Key",
    7: "5 Silver keys",
    8: "1000 points",
    9: "500,000 Points",
    10: "5 Gold Keys",
    11: "10,000 Points",
    12: "2 Diamond Keys",
};

export default function SpinCoin () {
    const [reward, setReward] = useState<string>('');
    const [isRotating, setIsRotating] = useState(false);
    const [spinCount, setSpinCount] = useState(0);
    const [isFloating, setIsFloating] = useState(false);

    const generatedReward = () => {

        if (spinCount < 12) {
            handleRotate();
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 12) + 1;
                const handleAnimationEnd = () => {
                    setReward(rewards[randomNumber]);
                    setIsFloating(true);
                    setTimeout(() => setIsFloating(false), 2000);
                };

                handleAnimationEnd();
                setSpinCount(spinCount + 1);
            }, 2000);
        }
    };

    const handleRotate = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 2000);
    };

    return (
        <div>
            <div className={isRotating ? "rotate" : ''} style={{ marginTop: '20px' }}>
                <Image className="spin-icon" src={coinImage} alt="" width={300} height={300} />
            </div>
            <div className={`reward-display ${isFloating ? "float-reward" : ''}`}>
                {reward}
            </div>
            <div>
                <button onClick={generatedReward} className={spinCount < 12 ? "spin-button" : "spin-cool"}>
                    <span>{spinCount < 12 ? 'Spin to earn' : 'Next spin in 24:58:45'}</span>
                </button>
            </div>
        </div>
    )
}