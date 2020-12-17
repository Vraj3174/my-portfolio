import React from 'react';
import "./footerStyles.scss";
import Resume from "../../static/files/Résumé.pdf";

export default function Footer() {
    return (
        <>
            <br/>
            <div className="container">
                <form method="get" action={Resume}>
                    <button type="submit" className="button-header type-header">Resume</button>
                </form>
                <hr className="hr"/>
            </div>
        </>
    );
}
