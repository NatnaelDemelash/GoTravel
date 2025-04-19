import { motion } from "motion/react";
import Star from "../Icons/Star";

interface RatingProps {
  name: string;
  rating: number;
  image: string;
  className: string;
}

export default function Rating({
  name,
  rating,
  image,
  className,
}: RatingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`absolute flex gap-x-2.5 rounded-xl bg-white/85 py-3.5 pr-5 pl-3 drop-shadow-2xl backdrop-blur-3xl ${className}`}
    >
      <div className="flex items-end justify-center overflow-hidden rounded-full bg-gray-300">
        <img
          src={image}
          alt="A graphical photo of rating"
          className="size-15"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="tracking-6 font-semibold">{name}</p>
        <div className="flex gap-x-1.5">
          <Star className="fill-yellow size-6" />
          <span className="text-[1.0625rem] text-gray-600">{rating}</span>
        </div>
      </div>
    </motion.div>
  );
}
