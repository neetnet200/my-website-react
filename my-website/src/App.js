import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextContent from "./components/TextContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Animation from "./components/Animation";
import { motion, AnimatePresence } from "framer-motion";
import OversizedButton from "./components/OversizedButton";

function App() {
  const [animationOpen, setAnimationOpen] = useState(false);
  const close = () => setAnimationOpen(false);
  const open = () => setAnimationOpen(true);

  return (
    <Router>
      <Navbar />
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => (animationOpen ? close() : open())}
        >
          Launch Animation
        </motion.button>

        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {animationOpen && (
            <Animation animationOpen={animationOpen} handleClose={close} />
          )}
        </AnimatePresence>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="./about" element={<About />}></Route>
        <Route path="/project1" />
        <Route path="/project2" />
      </Routes>

      <TextContent />
      <OversizedButton/>
    </Router>
  );
}

export default App;
