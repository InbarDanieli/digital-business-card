import React from "react"
import facebook from "../images/facebook-icon.png"
import instagram from "../images/instagram-icon.png"
import twitter from "../images/twitter-icon.png"
import github from "../images/github-icon.png"

export default function Footer() {
    return (
        <div className = "footer_container">
            <img alt="twitter" src={twitter} />
            <img alt="facebook" src={facebook} />
            <img alt="instagram" src={instagram} />
            <img alt="github" src={github} />
        </div>
    )
}