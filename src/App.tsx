import React, { type FC } from "react";
import { motion } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import ParallaxBackground from "./components/ParallaxBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import { $UI } from "./store/ui";

const App: FC = () => {
  const currentPage = $UI.use((state) => state.page);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />

      {currentPage === "Home" && <Home />}
      {currentPage === "About" && <About />}
      {currentPage === "Works" && <Works />}

      <ParallaxBackground />
      <Navbar />
    </motion.div>
  );
};

export default App;
