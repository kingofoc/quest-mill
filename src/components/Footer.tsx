import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

const homeIcon = "/assets/house-solid.svg";
const earnIcon = "/assets/task.svg";
const rankingIcon = "/assets/ranking.svg";
const referIcon = "/assets/users.svg";
const airdropIcon = "/assets/earn.svg";

export default function Footer () {
    return (
        <div>
            <footer className="footer-container">
                <Link to="/"className="footer-link">
                    <Image className="footer-icon" src={homeIcon} alt="" width={24}  height={24}/>
                    <p>Home</p>
                </Link>
                <Link to="/task" className="footer-link">
                    <Image className="footer-icon" src={earnIcon} alt="" width={24} height={24} />
                    <p>Tasks</p>
                </Link>
                <Link to="/ranking" className="footer-link">
                    <Image className="footer-icon" src={rankingIcon} alt="" width={24} height={24}/>
                    <p>Ranking</p>
                </Link>
                <Link to="/referral" className="footer-link">
                    <Image className="footer-icon" src={referIcon} alt="" width={24} height={24} />
                    <p>Friends</p>
                </Link>
                <Link to="/airdrop" className="footer-link">
                    <Image className="footer-icon" src={airdropIcon} alt="" width={24} height={24}/>
                    <p>Airdrop</p>
                </Link>
            </footer>
        </div>
    )
}