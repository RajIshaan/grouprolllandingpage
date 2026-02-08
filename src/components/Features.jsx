import { motion } from 'framer-motion';
import { RefreshCw, Users, Cloud } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <RefreshCw size={28} />,
            title: "Instant Sync",
            description: "Every photo uploaded is instantly available to everyone in the group. No more 'send me those photos' texts."
        },
        {
            icon: <Users size={28} />,
            title: "Multiplayer Albums",
            description: "Collaboratively curate albums. Anyone can add, organize, and heart their favorite moments."
        },
        {
            icon: <Cloud size={28} />,
            title: "Organized Storage",
            description: "A more synchronized way to store photos. Easy to access, search, and relive anytime."
        }
    ];

    return (
        <section id="features" className="features">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Why Group Roll?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Designed for friends, families, and creators who want a shared home for their memories.
                </motion.p>
            </div>

            <div className="grid">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="icon-box">
                            {feature.icon}
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
