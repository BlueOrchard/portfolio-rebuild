import NavLinks from "./NavLinks";

function Footer(){
    return(
        <footer className="footer">
            <div className="top-footer">
                <div className="logo">
                    JOSEPH <b>RICHEY<span className="smaller">.TECH</span></b>
                </div>
                <div className="japanese-caption">
                    くすぶる火をたやすな。それが暗い道を照らす灯となる
                    <p className="english">"Don't Let the Simmering Fire Die. It'll Light the Way in the Dark."</p>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="outbound-links">
                    <a className="link" target="_blank" href="https://github.com/BlueOrchard">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="link" target="_blank" href="https://www.linkedin.com/in/joseph-richey-342444145/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="right-links">
                    <NavLinks />
                </div>
            </div>
        </footer>
    )
}

export default Footer;