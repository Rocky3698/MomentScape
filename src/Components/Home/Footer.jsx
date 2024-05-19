import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { RxModulzLogo } from "react-icons/rx";
const Footer = () => {
    return (
        <footer className="footer footer-center gap-3 text-base-content">
        <nav className="grid grid-flow-col gap-2">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Privacy Pocicy</a>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
                <a> <FaYoutube className="text-2xl"></FaYoutube> </a>
                <a> <FaFacebook className="text-2xl"></FaFacebook> </a>
                <a> <FaLinkedin className="text-2xl"></FaLinkedin> </a>
            </div>
        </nav>
        <aside>
            <p className="items-center flex"> <RxModulzLogo className="text-xl origin-center rotate-12 me-2"></RxModulzLogo> Copyright © 2024 - All right reserved.</p>
        </aside>
    </footer>
    );
};

export default Footer;