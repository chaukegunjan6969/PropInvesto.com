import React from 'react';

const Homepage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {/* Info Box 1 */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 rounded-lg">
              <img src="https://res-console.cloudinary.com/dpok16gsr/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y29kZUhlbHAvenR5dW83eWJkcWpwc2xueGNqbzA=/template_primary" alt="Image 1" className="w-full h-full rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold">Traditional Real Estate Problems</h2>
              <p>
                There are various problems with the traditional working of the Real Estate industry. Real Estate investments are dominated by either institutional investors or by ultra-high-net-worth individuals like large real estate companies, pension funds, or investment trusts. This restrictive access prevents ordinary people from profiting from growing returns on investments. There will be several brokers, lawyers, and financial institutions included in this process who add a layer of complexity and often charge fees or commissions.
              </p>
            </div>
          </div>
        </div>

        {/* Info Box 2 */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img src="https://res-console.cloudinary.com/dpok16gsr/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y29kZUhlbHAvdG1kMXVvdHJwM2VzOWp3cXYwNWc=/template_primary" alt="Image 2" className="w-full h-full rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold">Transparency Issues</h2>
              <p>
                Transparency issues in the real estate industry refer to the opacity surrounding property transactions, ownership structures, and market conditions. This lack of clarity can lead to several problems:
              </p>
              <ul className="list-disc list-inside">
                <li>Corruption: Without transparency, there's a higher risk of corrupt practices, such as bribery or under-the-table deals, occurring in real estate transactions.</li>
                <li>Tax Evasion: The lack of transparent financial records can enable tax evasion, where property owners may underreport their income or assets to evade taxes.</li>
                <li>Illegal Money Transfers: Real estate transactions can be used as a vehicle for money laundering and illegal money transfers due to the difficulty of tracking funds in opaque transactions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Info Box 3 */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 ">
              <img src="https://res-console.cloudinary.com/dpok16gsr/thumbnails/transform/v1/image/upload/Y19saW1pdCxoXzE2MDAsd18xNjAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/Y29kZUhlbHAvZ2NieW9mcjZmZmpxdHoydmt3Zm0=/template_primary" alt="Image 3" className="w-full h-full rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold">Tokenization of Real Estate Assets</h2>
              <p>
                A higher level of transparency can overcome the problem of corruption, tax evasion, and illegal money transfers. We are proposing this idea of Tokenization of Real Estate Assets with Solidity and Ethereum to overcome all these problems in the traditional method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
