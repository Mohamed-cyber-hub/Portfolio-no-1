import { styles } from "../styles"
import { StarsCanvas } from "./canvas"




const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5 `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, Im <span className="text-[#915eff]">Mohamed Saad</span>
          </h1>
          <p className={`${styles.heroSubText}text-white-100 mt-5`}>
            I Create Websites For Different Needs let's Create Something Great
          </p>
        </div>
      </div>
        <StarsCanvas/>
    </section>
  )
}

export default Hero






























// import { motion } from "framer-motion"
// import { styles } from "../styles"
// import { StarsCanvas } from "./canvas"
// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5 ">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient"/>
//         </div>
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>Hi, Im <span className="text-[#915eff]">Mohamed Saad</span></h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>I Develop Websites For different Needs, Lets Create Something Great </p>
//         </div>
//       </div>
//         <StarsCanvas/>
//     </section>
//   )
// }

// export default Hero