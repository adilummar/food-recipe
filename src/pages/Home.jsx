import React from "react";
import Veggi from "../components/Veggi";
import Popular from "../components/Popular";
import { motion } from "framer-motion"
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggi />
      <Popular />
    </motion.div>
  );
}

export default Home;
