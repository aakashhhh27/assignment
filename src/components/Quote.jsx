const QuoteCard = ({ quote, title, description, imageSrc }) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <p className="text-lg font-semibold mb-2">{quote}</p>
    <div className="flex items-center">
      {imageSrc && (
        <img src={imageSrc} alt={title} className="w-10 h-10 rounded-full mr-3" />
      )}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const QuoteGrid = () => {
  const quotes = [
    { quote: "Quote", title: "Title", description: "Description" },
    { quote: "Quote", title: "Title", description: "Description", imageSrc: "../../public/Avatar.png" },
    { quote: "Quote", title: "Title", description: "Description", imageSrc: "../../public/Avatar.png" },
    { quote: "Quote", title: "Title", description: "Description", imageSrc: "../../public/Avatar.png" },
    { quote: "Quote", title: "Title", description: "Description", imageSrc: "../../public/Avatar.png" },
    { quote: "Quote", title: "Title", description: "Description", imageSrc: "../../public/Avatar.png" },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-1">Heading</h1>
      <p className="text-xl text-gray-600 mb-6">Subheading</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <QuoteCard key={index} {...quote} />
        ))}
      </div>
    </div>
  );
};

export default QuoteGrid;
