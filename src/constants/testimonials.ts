interface Testimonial {
  id: number;
  name: string;
  content: string;
  position: string;
  image?: string;
  rating: number;
}

// Testimonial data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Samuel Johnson",
    position: "Marketing Director",
    image: "/assets/images/avatar1.png",
    content:
      "Working with this team has been an absolute pleasure. Their attention to detail and creative approach has transformed our online presence. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO at TechStart",
    image: "/assets/images/avatar2.png",
    content:
      "The level of expertise and professionalism is outstanding. They delivered our project ahead of schedule and exceeded all our expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ethan Rodriguez",
    position: "E-commerce Manager",
    image: "/assets/images/avatar3.png",
    content:
      "Our conversion rates increased by 40% after implementing their recommendations. Their strategic insights have been invaluable to our business growth.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Wilson",
    position: "Startup Founder",
    image: "/assets/images/avatar4.png",
    content:
      "I'm impressed with how quickly they understood our vision and translated it into a beautiful, functional website. The whole process was smooth and stress-free.",
    rating: 5,
  },
  {
    id: 5,
    name: "James Park",
    position: "Product Manager",
    image: "/assets/images/avatar5.png",
    content:
      "Their ability to balance aesthetic design with user experience is remarkable. Our customers have been giving us fantastic feedback about the new interface.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Taylor",
    position: "Creative Director",
    image: "/assets/images/avatar6.png",
    content:
      "The attention to detail and creative solutions provided by the team exceeded our expectations. They truly understand how to create memorable digital experiences.",
    rating: 4,
  },
  {
    id: 7,
    name: "Andrew Lewis",
    position: "Operations Manager",
    image: "/assets/images/avatar7.png",
    content:
      "From start to finish, the team was responsive, professional, and delivered exactly what we needed. The results have been transformative for our business.",
    rating: 3,
  },
];
