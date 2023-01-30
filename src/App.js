import React from "react"
import ProfileInfo from "./components/ProfileInfo.js"
import BodySection from "./components/BodySection.js"
import Footer from "./components/Footer.js"
import "./App.css"

export default function App(){
    return (
        <div className = "app_container">
        <ProfileInfo/>
        <BodySection 
        title="About" 
        content="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
        />
        <BodySection 
        title="Interests" 
        content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        />
        <Footer/>
        </div>
    )
}