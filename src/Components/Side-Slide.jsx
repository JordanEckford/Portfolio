import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const SideSlide = ({ children, width = "fit-content", margin = "0 auto", slideDelay = 0.1, slideFrom = "left" }) => {
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
    variants={
     slideFrom === "left"
      ? {
         hidden: { opacity: 0, y: 0, x: -200 },
         visible: { opacity: 1, y: 0, x: 0 },
        }
      : {
         hidden: { opacity: 0, y: 0, x: 200 },
         visible: { opacity: 1, y: 0, x: 0 },
        }
    }
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 1, delay: slideDelay }}
   >
    {children}
   </motion.div>
  </div>
 );
};
