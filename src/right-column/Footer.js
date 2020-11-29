const { default: Link } = require("./Link")

const Footer = () => {
    
    return (
        <div className="Footer">
            <div className="Top">
                <span><Link Href="#" Text="Terms of Service"/></span>
                <span><Link Href="#" Text="Privacy Policy"/></span>
                <span><Link Href="#" Text="Cookie Policy"/></span>
            </div>
            <div className="Bottom">
                <span><Link Href="#" Text="Ads info"/></span>
                <span><Link Href="#" Text="More"/></span>
                <span>© 2020 Twitter, Inc.</span>
            </div>
        </div>
    )
}


export default Footer;
