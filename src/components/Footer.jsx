const FooterColumn = ({ title, items }) => (
  <div className="flex flex-col space-y-2">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    {items.map((item, index) => (
      <a key={index} href="#" className="text-gray-600 hover:text-gray-800">
        {item}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const columns = [
    {
      title: "Use cases",
      items: [
        "UI design", "UX design", "Wireframing", "Diagramming",
        "Brainstorming", "Online whiteboard", "Team collaboration"
      ]
    },
    {
      title: "Explore",
      items: [
        "Design", "Prototyping", "Development features", "Design systems",
        "Collaboration features", "Design process", "FigJam"
      ]
    },
    {
      title: "Resources",
      items: [
        "Blog", "Best practices", "Colors", "Color wheel",
        "Support", "Developers", "Resource library"
      ]
    }
  ];

  const socialIcons = [
    { name: "Twitter", src: "../../public/x.png" },
    { name: "Instagram", src: "../../public/instagram.png" },
    { name: "YouTube", src: "../../public/youtube.png" },
    { name: "LinkedIn", src: "../../public/linkedin.png" }
  ];

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="flex flex-col space-y-4">
            <img src="../../public/figma.png" alt="Logo" className="w-5 h-8 0" />
            <div className="flex gap-3">
              {socialIcons.map((icon, index) => (
                <img 
                  key={index}
                  src={icon.src}
                  alt={icon.name}
                  className="w-5 h-5 cursor-pointer"
                />
              ))}
            </div>
          </div>
          {columns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;