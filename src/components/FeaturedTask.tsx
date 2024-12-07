'use client'
import React from "react";

const taskList = [
    { id: 1, title: "Check the price of our token", rewardPoint: "10,000", rewardKey: "5", link: "https://dexscreener.com/"},
    { id: 2, title: "Participate in our ICO", rewardPoint: "10,000", rewardKey: "5", link: "https://dexscreener.com/"},
    { id: 3, title: "Make Ton great again", rewardPoint: "10,000", rewardKey: "5", link: "https://dexscreener.com/"}
]

export default function FeaturedTask() {
    return (
        <div>
            <h4>Featured</h4>
            <div>
                {taskList.map(task => (
                    <div key={task.id} className="task-item">
                        <span></span>
                    </div>
                ))}
            </div>
        </div>
    )
}