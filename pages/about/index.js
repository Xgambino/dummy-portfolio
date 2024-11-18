import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiArchicad, SiAutodeskrevit, SiSketchup, SiAdobelightroom, SiPython, SiGithub, SiTailwindcss } from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <FaJs key="js" />, <SiNextdotjs key="nextjs" />, <SiPython key="python" />],
      },
      {
        title: "Tools & Technologies",
        icons: [<FaReact key="react" />, <SiFramer key="framer" />, <FaWordpress key="wordpress" />, <SiGithub key="github" />, <FaBootstrap key="bootstrap" />, <SiTailwindcss key="tailwindcss" />],
      },
      {
        title: "Design Softwares",
        icons: [<SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />, <SiAdobelightroom key="lightroom" />, <SiAutodeskrevit key="revit" />, <SiArchicad key="archicad" />, <SiSketchup key="sketchup" />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      { title: "Kathigiri Primary School", stage: "2009-2013", grade: "A (407 marks)" },
      { title: "Mang'u High School", stage: "2014-2017", grade: "B- (53 points)" },
      { title: "K.I.H.B.T.", stage: "2018-2020", grade: "Diploma" },
      { title: "Moringa School", stage: "Feb 2024 - Aug 2024", grade: "Certificate" },
      { title: "U.S.I.U", stage: "2024 - Present" },
    ],
  },
  {
    title: "experience",
    info: [
      { company: "Intern", title: "Unlimited Design Solutions", stage: "Aug 2019 -Dec 2019" },
      { company: "Assistant Architect", title: "Pronak Construction L.T.D.", stage: "2020 - 2023" },
      { company: "Trainee", title: "Moringa School", stage: "2024" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Hi, my name is{" "}
            <span className="text-accent font-extrabold">Muthuri Denis Mugambi</span>. I am a former architect turned
            software engineer. With a foundation in design and problem-solving from my years in architecture, I bring a
            unique perspective to building user-focused digital experiences.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied clients</div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={item.title}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((infoItem, infoIndex) => (
              <div
                key={`${infoItem.title}-${infoIndex}`}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{infoItem.title}</div>
                {infoItem.stage && (
                  <>
                    <div className="hidden md:flex">{infoItem.stage}</div>
                    {infoItem.grade && (
                      <>
                        <div className="hidden md:flex"> - </div>
                        <div className="hidden md:flex">{infoItem.grade}</div>
                      </>
                    )}
                  </>
                )}
                <div className="flex gap-x-4">
                  {infoItem.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
