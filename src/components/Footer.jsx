import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo logo" style={{ justifyContent: 'center' }}>
                <img src="/grouprolllogo.jpg" alt="Group Roll Logo" style={{ width: '32px', height: '32px', borderRadius: '6px', objectFit: 'cover' }} />
                <span>Group<span>Roll</span></span>
            </div>
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Support</a>
            </div>
            <p className="copyright">&copy; 2026 Group Roll. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
