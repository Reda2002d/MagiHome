import './Hero.css'
import { Link } from 'react-router-dom'
import { motion as m } from 'framer-motion'
export default function Hero() {
    return (
        <div className='hero'>

            <div className="hero-text">
                <m.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                >
                    Appareils de cuisine

                </m.h1>
                <m.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    Le choix malin pour votre cuisine
                </m.h3>
                <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.1, ease: "easeInOut" }}
                >
                    <Link to='/products'>Voir Plus</Link>
                </m.div>
            </div>
        </div>
    )
}
