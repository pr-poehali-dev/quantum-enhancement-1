const features = [
  {
    icon: "👁️",
    title: "Компьютерное зрение",
    desc: "Камера смартфона в режиме реального времени отслеживает движения тела и оценивает правильность выполнения упражнений.",
  },
  {
    icon: "🦴",
    title: "Диагностика патологий",
    desc: "AI анализирует осанку, симметрию движений и выявляет отклонения опорно-двигательного аппарата.",
  },
  {
    icon: "📋",
    title: "Персональный план лечения",
    desc: "На основе диагностики формируется индивидуальный комплекс упражнений с прогрессией и контролем результата.",
  },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/78e443c9-7599-4ce4-b0cd-841fe68d5489/files/72a842fa-5c2e-426d-bbcd-ea6d617a2571.jpg"
          alt="AI мониторинг гимнастики"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-teal-600 font-medium">
          Технологии на страже здоровья
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-bold">
          Три шага к восстановлению: диагностика, контроль и персональный план
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 items-start">
              <span className="text-2xl mt-1">{f.icon}</span>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">{f.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-teal-600 hover:border-teal-600 cursor-pointer w-fit uppercase tracking-widest font-medium">
          Скачать приложение
        </button>
      </div>
    </div>
  );
}
