import React from "react";
import Image from "next/image";

const homeIcon = "/assets/house-solid.svg";
const earnIcon = "/assets/task.svg";
const rankingIcon = "/assets/ranking.svg";
const referIcon = "/assets/users.svg";

export default function Footer () {
    return (
        <div>
            <footer className="footer-container">
                <a href="/">
                    <Image className="footer-icon" src={homeIcon} alt="" width={24}  height={24}/>
                </a>
                <a href="">
                    <Image className="footer-icon" src={earnIcon} alt="" width={24} height={24} />
                </a>
                <a href="">
                    <Image className="footer-icon" src={rankingIcon} alt="" width={24} height={24}/>
                </a>
                <a href="">
                    <Image className="footer-icon" src={referIcon} alt="" width={24} height={24} />
                </a>
            </footer>
        </div>
    )
}