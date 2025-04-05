import React from "react";
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Sample course data
const coursesData = [
  {
    id: "1",
    title: "Blockchain Fundamentals",
    description:
      "Learn the core concepts of blockchain technology including distributed ledgers, cryptography, and consensus mechanisms.",
    image:
      "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000",
    category: ["Blockchain", "Technology"],
    rating: 4.7,
    duration: "8 weeks",
    progress: 75,
  },
  {
    id: "2",
    title: "Smart Contracts Development",
    description:
      "Master the art of creating and deploying smart contracts on blockchain networks with practical examples.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000",
    category: ["Development", "Blockchain"],
    rating: 4.5,
    duration: "6 weeks",
    progress: 45,
  },
  {
    id: "3",
    title: "AI in Blockchain Applications",
    description:
      "Explore how artificial intelligence can enhance blockchain solutions through data analysis and automation.",
    image:
      "https://images.unsplash.com/photo-1677442135132-181f518e677d?q=80&w=1000",
    category: ["AI", "Blockchain"],
    rating: 4.9,
    duration: "10 weeks",
    progress: 20,
  },
  {
    id: "4",
    title: "ICP Protocol Deep Dive",
    description:
      "An in-depth exploration of Internet Computer Protocol and its revolutionary approach to blockchain computing.",
    image:
      "https://images.unsplash.com/photo-1642448082733-8456b81103e0?q=80&w=1000",
    category: ["ICP", "Advanced"],
    rating: 4.8,
    duration: "12 weeks",
  },
  {
    id: "5",
    title: "Decentralized Finance (DeFi)",
    description:
      "Understand the principles of DeFi and learn to build financial applications on blockchain networks.",
    image:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1000",
    category: ["Finance", "Blockchain"],
    rating: 4.6,
    duration: "8 weeks",
  },
  {
    id: "6",
    title: "Blockchain Security",
    description:
      "Learn security best practices to protect blockchain applications from various vulnerabilities and threats.",
    image:
      "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?q=80&w=1000",
    category: ["Security", "Blockchain"],
    rating: 4.9,
    duration: "6 weeks",
  },
];

interface CourseGridProps {
  filter?: string;
}

const CourseGrid: React.FC<CourseGridProps> = ({ filter }) => {
  // Filter courses based on filter parameter
  const filteredCourses = filter
    ? coursesData.filter(
        (course) =>
          course.category.some((cat) =>
            cat.toLowerCase().includes(filter.toLowerCase())
          ) || course.title.toLowerCase().includes(filter.toLowerCase())
      )
    : coursesData;

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      slidesPerView={1} 
      spaceBetween={20}
     
      
      loop={true} 
      autoplay={{
        delay: 0, 
        disableOnInteraction: false, 
      }}
      speed={5000} 
      breakpoints={{
        640: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 }, 
      }}
      className="w-full"
    >
      {filteredCourses.map((course) => (
        <SwiperSlide key={course.id} className="p-4">
          <CourseCard {...course} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseGrid;
