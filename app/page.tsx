import { Hero, Shop } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <div style={{paddingTop: "30rem"}}></div>
      <Shop/>
    </div>
  );
}
