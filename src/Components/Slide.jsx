import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Slide = ({ children, width = "fit-content", margin = "0 auto", popUpDelay = 0.45, slideDelay = 0.1 }) => {
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
     hidden: { opacity: 0, y: 75 },
     visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 0.5, delay: popUpDelay }}
   >
    {children}
   </motion.div>
   <motion.div
    variants={{
     hidden: { left: 0 },
     visible: { left: "100%" },
    }}
    initial="hidden"
    animate={slideControls}
    transition={{ duration: 0.5, ease: "easeIn", delay: slideDelay }}
    style={{
     position: "absolute",
     top: 4,
     bottom: 4,
     left: 0,
     right: 0,
     background: "linear-gradient(to right, rgb(249 115 22), rgb(253 186 116))",
     zIndex: 30,
    }}
   ></motion.div>
  </div>
 );
};
