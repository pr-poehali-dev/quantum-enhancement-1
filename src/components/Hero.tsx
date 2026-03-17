import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/78e443c9-7599-4ce4-b0cd-841fe68d5489/files/4af64822-b2ed-449f-986b-883d41d50709.jpg"
          alt="Лечебная гимнастика"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/40 to-teal-900/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-teal-300 uppercase tracking-widest text-sm mb-4 font-medium">
          Компьютерное зрение для здоровья
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ДВИЖЕНИЕ<br />
          <span className="text-teal-300">БЕЗ БОЛИ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
          Мобильное приложение с AI-диагностикой опорно-двигательного аппарата.
          Оценивает гимнастику, выявляет патологии и строит персональный план лечения.
        </p>
        <a
          href="#features"
          className="inline-block bg-teal-500 hover:bg-teal-400 text-white uppercase tracking-widest text-sm px-8 py-4 transition-all duration-300 font-medium"
        >
          Узнать больше
        </a>
      </div>
    </div>
  );
}
