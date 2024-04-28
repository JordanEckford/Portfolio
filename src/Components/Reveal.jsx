import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "100%", margin = "0 auto", delay = 0.25 }) => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: true });
 const mainControls = useAnimation();
 const slideControls = useAnimation();
 useEffect(() => {
  if (isInView) {
   mainControls.start("visible");
   slideControls.start("visible");
  }
 }, [isInView]);

 return (
  <div ref={ref} style={{ position: "relative", width, margin, overflow: "hidden" }}>
   <motion.div
    variants={{
     hidden: { opacity: 0, y: 75, scale: 0.95, rotateZ: 2 },
     visible: { opacity: 1, y: 0, scale: 1, rotateZ: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.8, delay: delay }}
   >
    {children}
   </motion.div>
  </div>
 );
};
