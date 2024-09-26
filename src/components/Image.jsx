const ImageCard = ({ title, description, imageSrc }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4 bg-gray-200" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const ImageGrid = () => {
  const items = [
    { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.", imageSrc: "/public/placeholder.png" },
    { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.", imageSrc: "/public/placeholder.png" },
    { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.", imageSrc: "/public/placeholder.png" },
    { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.", imageSrc: "/public/placeholder.png" },
    { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.", imageSrc: "/public/placeholder.png" },
    { title: "Title", description: "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.", imageSrc: "/public/placeholder.png" },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-extrabold mb-1">Heading</h1>
      <p className="text-xl text-gray-800 mb-6">Subheading</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ImageCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;