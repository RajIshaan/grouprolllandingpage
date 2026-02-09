import { motion } from 'framer-motion';
import { Layers, Download } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <a href="#" className="logo">
                <img src="/grouprolllogo.jpg" alt="Group Roll Logo" style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
                <span>Group<span>Roll</span></span>
            </a>
            <div className="nav-links">
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="https://expo.dev/accounts/goofball/projects/group-roll-expo-mobile/builds/ae1174ea-1c02-46e0-aaf6-3c8025cd3cad" target="_blank">EAS Build</a>
            </div>
            <motion.a
                href="https://expo.dev/accounts/goofball/projects/group-roll-expo-mobile/builds/ae1174ea-1c02-46e0-aaf6-3c8025cd3cad"
                className="btn btn-secondary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Download APK
            </motion.a>
        </motion.nav>
    );
};

export default Navbar;
