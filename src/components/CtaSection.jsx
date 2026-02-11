import { motion } from 'framer-motion';

const CtaSection = () => {
    return (
        <section id="about" style={{ padding: '100px 5%', textAlign: 'center' }}>
            <motion.div
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    background: 'var(--accent-blue)',
                    padding: '4rem',
                    borderRadius: '32px'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ marginBottom: '1.5rem' }}>Join the Beta</h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                    Group Roll is currently in early production. We're building the future of shared memories, and we'd love for you to be part of the journey.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <motion.a
                        href="https://expo.dev/accounts/goofball/projects/group-roll-expo-mobile/builds/2bb7b786-6da3-4509-9a8e-7be91b28d633"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get the APK
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default CtaSection;
