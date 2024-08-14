import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';

const Gadgets = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts',
      date: 'Jan 15, 2021',
      description: 'To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley...',
      img: 'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg',
      rating: '8.9',
    },
    {
      id: 2,
      title: 'Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed',
      date: 'Jan 15, 2021',
      description: 'To understand the new smart watches and other pro devices of recent focus, we should look to Silicon Valley...',
      img: 'https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg',
      rating: '8.9',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCard, setNewCard] = useState({
    title: '',
    date: '',
    description: '',
    img: '',
    rating: '',
  });

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleCreate = () => {
    setCards([...cards, { ...newCard, id: cards.length + 1 }]);
    setNewCard({ title: '', date: '', description: '', img: '', rating: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-[19px]">BROWSING: GADGETS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[227px] object-cover rounded-t-lg cursor-pointer"
                />
                <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                  Gadgets
                </div>
                <div className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {card.rating}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{card.date}</p>
                <p className="text-gray-700 text-sm flex-grow">{card.description}</p>
                <div className="flex justify-between mt-4">
                  <button className="flex items-center text-red-500 hover:text-red-700" onClick={() => handleDelete(card.id)}>
                    <AiOutlineDelete className="mr-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center p-4 cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <AiOutlinePlus className="text-6xl text-blue-500" />
            <p className="text-lg text-blue-500 mt-2">Create New Card</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px]">
            <h2 className="text-2xl font-bold mb-4">Create New Card</h2>

            <input
              type="text"
              placeholder="Title"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newCard.title}
              onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Date"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newCard.date}
              onChange={(e) => setNewCard({ ...newCard, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newCard.description}
              onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newCard.img}
              onChange={(e) => setNewCard({ ...newCard, img: e.target.value })}
            />
            <input
              type="text"
              placeholder="Rating"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={newCard.rating}
              onChange={(e) => setNewCard({ ...newCard, rating: e.target.value })}
            />

            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={handleCreate}
              >
                Create
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gadgets;
