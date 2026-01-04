export default function Skills() {
  const skills = [
    {
        
      title: "Frontend",
      items: [
        { name: "React", icon: "/src/assets/images/icons/react.png" },
        { name: "Vite", icon:  "/src/assets/images/icons/vite.png" },
        { name: "Tailwind CSS", icon: "/src/assets/images/icons/Tailwind.png" },
        { name: "Framer Motion", icon: "/src/assets/images/icons/frame.png" },
        {name:"wordpress" , icon: "/src/assets/images/icons/wordpress.png"}
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: "/src/assets/images/icons/node.png" },
        { name: "Express", icon: "/src/assets/images/icons/express.png" },
        { name: "MySQL", icon: "/src/assets/images/icons/mysql.png" },
      ],
    },
    {
      title: "3D / Creative",
      items: [
        { name: "Three.js", icon: "/src/assets/images/icons/three.png" },
        { name: "Blender", icon: "/src/assets/images/icons/blender.png" },
      ],
    },
    {
      title: "Ferramentas",
      items: [
        { name: "Git", icon: "/src/assets/images/icons/git.png" },
        { name: "Linux", icon: "/src/assets/images/icons/linux.png" },
        { name: "Puppeteer", icon: "/src/assets/images/icons/puppeteer.png" },
        {name:"vercel" , icon: "/src/assets/images/icons/vercel.png"}
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Skills
          </h2>
          <p className="text-gray-400 mt-4">
            Tecnologias que utilizo em projetos reais
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-white text-lg font-medium mb-4">
                {skill.title}
              </h3>

              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                      loading="lazy"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
