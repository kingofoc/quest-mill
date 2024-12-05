import React from "react";
import Image from "next/image";
import Link from "next/link";

const homeIcon = "/assets/house-solid.svg";
const earnIcon = "/assets/task.svg";
const rankingIcon = "/assets/ranking.svg";
const referIcon = "/assets/users.svg";
const airdropIcon = "/assets/earn.svg";

export default function Footer () {
    return (
        <div>
            <footer className="footer-container">
                <Link href="/" className="footer-link">
                    <Image className="footer-icon" src={homeIcon} alt="" width={24}  height={24}/>
                    <p>Home</p>
                </Link>
                <Link href="" className="footer-link">
                    <Image className="footer-icon" src={earnIcon} alt="" width={24} height={24} />
                    <p>Tasks</p>
                </Link>
                <Link href="" className="footer-link">
                    <Image className="footer-icon" src={rankingIcon} alt="" width={24} height={24}/>
                    <p>Ranking</p>
                </Link>
                <Link href="" className="footer-link">
                    <Image className="footer-icon" src={referIcon} alt="" width={24} height={24} />
                    <p>Friends</p>
                </Link>
                <Link href="" className="footer-link">
                    <Image className="footer-icon" src={airdropIcon} alt="" width={24} height={24}/>
                    <p>Airdrop</p>
                </Link>
            </footer>
        </div>
    )
}