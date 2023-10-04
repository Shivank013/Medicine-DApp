function Home(){
    return (
        <div className=" flex flex-col w-10/12 mx-auto p-3">
          <h1 className=" text-center font-mullish text-3xl m-3 text-red-500 font-bold">Revolutionizing Medicine Supply Chains with Blockchain-powered DApp <br/> to Combat Counterfeiting</h1>

          <div className=" p-4 shadow-2xl my-5 rounded-lg font-mullish bg-white">
          <h2 className=" text-2xl mb-1 font-bold text-blue-500">The problem</h2>
          <p className=" font-semibold text-[#02042A] text-md">Medicine counterfeiting refers to the production, distribution, and sale of counterfeit or fake medications. Counterfeit medicines pose serious health risks to patients. Since they do not undergo proper quality control, they may be ineffective in treating the intended condition or may worsen the patient's health. In some cases, counterfeit medicines have led to severe adverse reactions, treatment failures, and even fatalities.</p>
          </div>

          <div className=" p-4 shadow-2xl my-5 rounded-lg font-mullish bg-white">
          <h2 className=" text-2xl mb-1 font-bold text-blue-500">Purpose and Functionality's</h2>
          <p className=" font-semibold text-[#02042A] text-md">The main purpose of this DApp is to address medicine counterfeiting by leveraging blockchain technology and smart contracts. It aims to provide transparency, traceability, and trust in the pharmaceutical supply chain , by providing functionality's such as </p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Authentication:</span> Explain how your DApp verifies the authenticity of medicines by recording and tracking their unique stockId's on the blockchain.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Traceability:</span> Describe how the DApp enables users to trace the entire supply chain journey of a medicine, from manufacture to patients, ensuring accountability at each stage.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Immutable Records:</span> Highlight the benefit of blockchain's immutable nature, which prevents tampering with the recorded data, ensuring trust and reliability.</p>
          </div>

          <div className=" p-4 shadow-2xl my-5 rounded-lg font-mullish bg-white">
          <h2 className=" text-2xl mb-1 font-bold text-blue-500">Impact on the real world</h2>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Improved Patient Safety:</span> This DApp can significantly reduce the risk of counterfeit medications reaching patients, enhancing their safety and well-being.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Supply Chain Efficiency:</span> This DApp can increase the transparency and accountability that can lead to a more efficient pharmaceutical supply chain, reducing costs and wastage.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Regulatory Compliance:</span> This DApp can assist regulatory bodies in enforcing compliance with pharmaceutical regulations, improving overall industry standards.</p>
          </div>

          <div className=" p-4 shadow-2xl my-5 rounded-lg font-mullish bg-white">
          <h2 className=" text-2xl mb-1 font-bold text-blue-500">Pros and Cons:</h2>
          <h3 className=" text-xl mb-1 font-semibold text-blue-900">Pros:</h3>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Increased Patient Trust:</span>  DApp's ability to authenticate and trace medicines can build trust between patients, healthcare providers, and pharmaceutical companies.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Enhanced Security:</span> Emphasize the security benefits of blockchain technology, as it provides a decentralized and tamper-resistant platform for storing critical pharmaceutical data.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Industry Transformation:</span> This DApp is potential enough to drive positive changes in the pharmaceutical industry, encouraging responsible practices and discouraging counterfeit operations.</p>
          <h3 className=" text-xl mb-1 mt-2 font-semibold text-blue-900">Cons:</h3>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Adoption Challenges:</span> Implementing this DApp requires collaboration and buy-in from various stakeholders, including pharmaceutical companies, regulators, and healthcare providers, which may present initial challenges.</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Privacy Concerns:</span> The major concern is regarding the privacy of sensitive information recorded on the blockchain, to migrate this concern this DApp is designed in such a way that it will first authenticate the person for it's specific role before making any changes to the blockchain</p>
          <p className=" font-semibold text-[#02042A] text-md"><span className=" text-lg font-semibold text-red-500 mt-1">Technological Barriers:</span> The widespread adoption of blockchain technology in the pharmaceutical industry may require additional infrastructure development, technical expertise, and investment.</p>
          </div>
        </div>
    )
}

export default Home;