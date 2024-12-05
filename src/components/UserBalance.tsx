'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const coinImage = "/assets/coin.png";
const keyIcon = "/assets/key.svg";
const silverKeyIcon = "/assets/silver-key.svg";
const diamondKeyIcon = "/assets/diamond-key.svg";
const platinumKeyIcon = "/assets/platinum-key.svg";

export default function UserBalance () {
    const [airdrop, setAirdrop] = useState<number[]>([589480]);
    const [points, setPoints] = useState<number[]>([50300000]);
    const [silverKey, setSilverKey] = useState<number[]>([10]);
    const [goldKey, setGoldKey] = useState<number[]>([2]);
    const [diamondKey, setDiamondKey] = useState<number[]>([4]);
    const [platinumKey, setPlatinumKey] = useState<number[]>([1]);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user-balance');
                const result = await response.json();

                setAirdrop(result.map((item: { airdrop: number }) => item.airdrop));
                setPoints(result.map((item: { points: number }) => item.points));
                setSilverKey(result.map((item: { silverKey: number }) => item.silverKey)); 
                setGoldKey(result.map((item: { goldKey: number }) => item.goldKey));
                setDiamondKey(result.map((item: { diamondKey: number }) => item.diamondKey));
                setPlatinumKey(result.map((item: { platinumKey: number }) => item.platinumKey));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const formatNumber = (num: number): string => {
        if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(num % 1_000_000_000 === 0 ? 0 : 1) + "B";
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + "M";
        } else if (num >= 10_000) {
            return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + "K";
        } else {
            return num.toString();
        }
    };
    
    
    return (
        <div>
            <div className="balance-card">
                <div className="balance-box">
                    {airdrop.map((airdrop, index) => (
                        <div key={index} className="airdrop">
                            <p className="balance-title">QuestMill Token</p>
                            <Image className="coin-image" src={coinImage} alt="" width={24} height={24} />
                            <span>{formatNumber(airdrop)}</span>
                        </div>
                    ))}

                    {points.map((points, index) => (
                        <div key={index} className="points">
                            <p className="balance-title">QuestMill Points</p>
                            <Image className="coin-image" src={coinImage} alt="" width={24} height={24} />
                            <span>{formatNumber(points)}</span>
                        </div>
                    ))}
                </div>

                <div className="keys">
                    <button className="unlock-rewards">
                        <span>Unlock Points</span>
                    </button>

                    {silverKey.map((silverKey, index) => (
                        <div key={index} className="key">
                            <Image className="silver-key key-icon" src={silverKeyIcon} alt="" width={12} height={12} />
                            <span>{silverKey}</span>
                        </div>
                    ))}

                    {goldKey.map((goldKey, index) => (
                        <div key={index} className="key">
                            <Image className="gold-key key-icon" src={keyIcon} alt="" width={12} height={12} />
                            <span>{goldKey}</span>
                        </div>
                    ))}

                    {diamondKey.map((diamondKey, index) => (
                        <div key={index} className="key">
                            <Image className="diamond-key key-icon" src={diamondKeyIcon} alt="" width={12} height={12} />
                            <span>{diamondKey}</span>
                        </div>
                    ))}

                    {platinumKey.map((platinumKey, index) => (
                        <div key={index} className="key">
                            <Image className="platinum-key key-icon" src={platinumKeyIcon} alt="" width={12} height={12} />
                            <span>{platinumKey}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}