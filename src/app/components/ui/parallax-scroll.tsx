"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef,useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../utils/cn";
import Modal from "../Modal";
import { useMediaQuery } from "@/hooks/use-media-query";



export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const [showModal,setShowModal] = useState(false);
  const [src,setSrc] = useState('');
  const isDesktop = useMediaQuery("(min-width: 768px)")


  return (
    <>
    <div
      className={cn("h-[52rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="md:grid  sm:flex-col md:grid-cols-2 lg:grid-cols-3 items-start  max-w-fit mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10 relative overflow-hidden">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
                
                  
                <Image
                src={el}
                className="hover:cursor-grab h-fit object-cover w-full object-left-top   gap-10 !m-0 !p-0"
                height="400"
                width="300"
                alt="thumbnail"
                onClick={()=>{
                  setSrc(el);
                  setShowModal(true);
                }}
                quality={100}
              />
                  
              
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                
              <Image
                src={el}
                className="hover:cursor-grab h-fit w-full object-cover object-left-top  gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                onClick={()=>{
                  setSrc(el);
                  setShowModal(true);
                }}
                quality={100}
              />
              
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              
              <Image
                src={el}
                className="hover:cursor-grab h-fit w-full object-cover object-left-top  gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                onClick={()=>{
                  setSrc(el);
                  setShowModal(true);
                }}
                quality={100}
              />
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
    <Modal isVisible={showModal} setIsVisible={setShowModal} Desktop={isDesktop} src={src} onClose={()=>setShowModal(false)}/>
    </>
  );
};
