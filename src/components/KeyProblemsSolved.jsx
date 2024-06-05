import React from 'react';

const KeyProblemsSolved = () => {
  return (
    <section className="py-20 bg-gray-900 text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Four Key Questions Answered by Crest</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-purple-100 p-6 shadow-md rounded">
            <div className="mb-4">
              <img src="/logo192.png" alt="Icon 1" />
            </div>
            <h3 className="text-xl font-semibold">What to order</h3>
            <p className="mt-4 text-lg">Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.</p>
          </div>
          <div className="bg-purple-100 p-6 shadow-md rounded">
            <div className="mb-4">
            <img src="/logo192.png" alt="Icon 2" />
            </div>
            <h3 className="text-xl font-semibold">When to order</h3>
            <p className="mt-4 text-lg">Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
          </div>
          <div className="bg-purple-100 p-6 shadow-md rounded">
            <div className="mb-4">
            <img src="/logo192.png" alt="Icon 3" />
            </div>
            <h3 className="text-xl font-semibold">How much to stock</h3>
            <p className="mt-4 text-lg">Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.</p>
          </div>
          <div className="bg-purple-100 p-6 shadow-md rounded">
            <div className="mb-4">
            <img src="/logo192.png" alt="Icon 4" />
            </div>
            <h3 className="text-xl font-semibold">Where to place</h3>
            <p className="mt-4 text-lg">Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProblemsSolved;
