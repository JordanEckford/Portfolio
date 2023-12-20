import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealRepeat = ({ children, width = "100%", margin = "0 auto" }) => {
 const ref = useRef(null);
 const isInView = useInView(ref, { once: false });
 const mainControls = useAnimation();
 const slideControls = useAnimation();
 useEffect(() => {
  if (isInView) {
   mainControls.start("visible");
   slideControls.start("visible");
  }
 }, [isInView]);
 useEffect(() => {
  if (!isInView) {
   mainControls.start("hidden");
   slideControls.start("hidden");
  }
 }, [isInView]);

 return (
  <div ref={ref} style={{ position: "relative", width, margin, overflow: "hidden", textAlign: "center" }}>
   <motion.div
    variants={{
     hidden: { opacity: 0, y: 75 },
     visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.2, delay: 0.1 }}
   >
    {children}
   </motion.div>
  </div>
 );
};
