import { color, delay } from "framer-motion";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js"

export const leftfadein=(delay)=>({
 hidden:{
    opacity:0,
    x:-200
 },
 visible:{
    opacity:1,
    x:0,
    transition:{
        duration:delay,
       ease:"easeOut"
    }
}
})

export const flipOnHover = {
    initial: {
      rotateY: 0,         
      opacity: 1, 
      rotateX:0 ,
      rotateZ:0          
    },
    whileHover: {
      rotateY:360,         
      background: "linear-gradient(to right, #6a11cb, #2575fc)",  
      backgroundClip: "text", 
      WebkitBackgroundClip: "text", 
      color: "transparent",  
      opacity: 1,            
      transition: {
        duration: 0.1,      
        ease: "easeInOut",      
  }
}
}
  
export const topBarAnimation = (isOpen) => ({
    rotate: isOpen ? 45 : 0,
    y: isOpen ? 6 : 0,
    transition: { duration: 0.3 }
  });
  
  export const middleBarAnimation = (isOpen) => ({
    opacity: isOpen ? 0 : 1,
    transition: { duration: 0.2 }
  });
  
  export const bottomBarAnimation = (isOpen) => ({
    rotate: isOpen ? -45 : 0,
    y: isOpen ? -6 : 0,
    transition: { duration: 0.3 }
  });

  export const mobileitems = (sidenav) => ({
    opacity: sidenav ? 1 : 0,
    x: sidenav ? 0 : "100vw", 
    transition: { duration: 0.5 }, 
   });
  
  

export const rightfadein=(delay)=>({
    hidden:{
        x:200,
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            duration:delay,
            ease:'easeOut'
        }
    }
})
export const bottomfadein=(delay)=>({
  hidden:{
    y:100,
    opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      duration:delay,
      ease:'easeOut'
    }
  }
})

export const findme = (delay) => ({
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: delay,
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.05, // Slight scale-up effect on hover
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
});


export const textVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Start position (moves text down)
  },
  visible: {
    opacity: 1,
    y: 0, // Final position (moves text up)
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    y: 50, 
    scale: 0.8, 
  },
  visible: {
    opacity: 1,
    y: 0, 
    scale: 1, 
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.3, 
    },
  },
};

export const card={
  hidden:{
    scale:0
  },
  visible:{
   scale:1,
   transition:{
    ease:"easeIn"
   }
  }
}