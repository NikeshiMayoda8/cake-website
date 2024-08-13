import Image from "next/image";
import styles from "./page.module.css";
import {
  Discount,
  HeroSection,
  Product,
  Testimonial,
} from "@/components/home/_components";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Product />
      <Discount />
      <Testimonial />
    </div>
  );
}
