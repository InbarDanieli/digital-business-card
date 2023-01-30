import React from "react"

export default function BodySection(props) {
    return (
        <div className="section_container container">
            <h1 className="section_title">{props.title}</h1>
            <p className="section_description">
                {props.content}
            </p>
        </div>
    )
}