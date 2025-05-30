// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Haki App",
          path: "/thumb1.png",
          link: "https://main--hakiproject.netlify.app/",
        },
        {
          title: "Cool Blog App",
          path: "/thumb2.png",
          link: "https://blog-group-i.vercel.app/",
        },
        {
          title: "Ovotox Africa",
          path: "/thumb3.png",
          link: "https://ovotoxafrica.com/",
        },
        {
          title: "Maryann Kanyike Construction Consultants ",
          path: "/thumb4.png",
          link: "https://mkcc.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "",
          path: "",
          link: "",
        },
        {
          title: "",
          path: "",
          link: "",
        },
        {
          title: "",
          path: "",
          link: "",
        },
        {
          title: "",
          path: "",
          link: "",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a // Changed from div to a tag to add link functionality
                    href={image.link} // Added dynamic link for redirection
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Security attributes for the link
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      {/* overlay text */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 text-center">
                        {/* image title */}
                        <div className="mb-2 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </div>

                        {/* live project text */}
                        <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100">LIVE</div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
