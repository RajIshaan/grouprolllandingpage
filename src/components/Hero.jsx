import { motion } from 'framer-motion';
import { Download, Home, Search, Plus, Users, Settings } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="hero">
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span className="badge" variants={itemVariants}>
                    🚀 Beta Version Now Available
                </motion.span>
                <motion.h1 variants={itemVariants}>
                    Photo Sharing, but <span>Multiplayer</span>.
                </motion.h1>
                <motion.p variants={itemVariants}>
                    Google Photos meets social collaboration. Host synchronized albums where everyone's memories live together in real-time.
                </motion.p>

                <motion.div className="cta-group" variants={itemVariants}>
                    <motion.a
                        href="https://expo.dev/accounts/goofball/projects/group-roll-expo-mobile/builds/ce1b6f47-b57e-4534-bd30-ef96cfec9ef3"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={20} />
                        Download APK (v1.1-beta)
                    </motion.a>
                    <motion.a
                        href="#features"
                        className="btn btn-secondary"
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See Features
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <div className="app-shell">
                    <div className="app-screen">
                        <div className="app-header">
                            <h3>Summer Trip 2024</h3>
                            <div className="avatars">
                                <div className="avatar" style={{ background: '#3b82f6' }}>A</div>
                                <div className="avatar" style={{ background: '#10b981' }}>B</div>
                                <div className="avatar" style={{ background: '#f59e0b' }}>+4</div>
                            </div>
                        </div>
                        <div className="photo-grid">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <motion.div
                                    key={i}
                                    className="photo-item"
                                    style={{ background: `hsl(217, 91%, ${95 - i * 5}%)` }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                />
                            ))}
                        </div>
                        <div className="app-nav">
                            <Home size={20} />
                            <Search size={20} style={{ opacity: 0.5 }} />
                            <div className="upload-btn"><Plus size={20} /></div>
                            <Users size={20} style={{ opacity: 0.5 }} />
                            <Settings size={20} style={{ opacity: 0.5 }} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
