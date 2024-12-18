import React, { type FC } from "react";
import { motion } from "framer-motion";
import "./style.scss";
import { $UI, type RouterType } from "../../store/ui";

const Navbar: FC = () => {
  const links: Array<{ path: string; label: RouterType }> = [
    { path: "/", label: "Home" },
    { path: "/works", label: "Works" },
    { path: "/about", label: "About" },
  ];
  const currentPage = $UI.use((state) => state.page);

  return (
    <nav className="navbar">
      <div className="nav-content">
        <motion.div
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FRACTAL
        </motion.div>
        <div className="nav-links">
          {links.map((link) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                onClick={() => {
                  $UI.update("from navbar", (draft) => {
                    draft.page = link.label;
                  });
                }}
                className={`nav-link ${currentPage === link.label ? "active" : ""}`}
              >
                {link.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
