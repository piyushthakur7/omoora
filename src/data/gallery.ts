import { testimonialImages } from "./testimonial-images";

export const gallery = testimonialImages.map((item, index) => ({
  id: index + 1,
  src: item.src,
  category: item.category,
  alt: `${item.category} image ${index + 1}`
}));
