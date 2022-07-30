import { motion } from "framer-motion";
import React from 'react'

const GlobalAnimation = ({ children }) => {
    return (

        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -100 }}
        >
            {children}
        </motion.div>

    )
}

export default GlobalAnimation