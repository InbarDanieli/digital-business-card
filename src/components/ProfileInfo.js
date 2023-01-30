import React from "react"
import profileImg from "../images/profile.png"
import linkedin from "../images/linkedin.png"
import email from "../images/mail.png"

export default function ProfileInfo() {
    return (
        <>
            <img alt="profile" className="profileImage" src={profileImg} />
            <div className="profile-container">
                <h1 className="name_title">Inbar Danieli</h1>
                <h3 className="job_title">Frontend Developer</h3>
                <p className="website_title">example.website</p>
                <div className="info_links_container container">
                    <a href="#email" className="email_link info_link">
                        <img alt="email" className="links_img" src={email} />
                        <span>Email</span>
                    </a>
                    <a href="#linkedin" className="linkedin_link info_link">
                        <img alt="linkedin" className="links_img" src={linkedin} />
                        <span> LinkedIn</span>
                    </a>
                </div>
            </div>
        </>
    )
}