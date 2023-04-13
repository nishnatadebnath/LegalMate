import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-auto bg-primary">
        <h2 className="text-2xl text-center">
          One stop solution to all your legal problems
        </h2>
        <div className="bg-white absolute h-80 w-full bottom-0"></div>
        <div className="bg-white rounded p-6 w-4/5 mx-auto m-12 h-auto drop-shadow-xl z-10">
          <h3 className="text-black text-center text-lg font-semibold">
            Find lawyers by legal practice areas!
          </h3>

          <div className="grid grid-cols-3 ">
            <div className="m-6">
              <img src="image1.svg" alt="img" className="mx-auto" />
              <p className="text-black text-center">Family Law</p>
            </div>
            <div className="m-6">
              <img src="image2.svg" alt="img" className="mx-auto" />
              <p className="text-black text-center">Financial Law</p>
            </div>
            <div className="m-6">
              <img src="image3.svg" alt="img" className="mx-auto" />
              <p className="text-black text-center">Criminal Law</p>
            </div>
            <div className="m-6">
              <img src="image4.svg" alt="img" className="mx-auto" />
              <p className="text-black text-center">Business Law</p>
            </div>
            <div className="m-6">
              <img src="image5.svg" alt="img" className="mx-auto" />
              <p className="text-black text-center">Civil Litigation</p>
            </div>
            <div className="m-6">
              <img src="image6.svg" alt="img" className="mx-auto" />
              <p className="text-black text-center">Land/Asset Law</p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-16">
        <h3 className="text-black font-bold text-xl my-3">
          Popular Legal Services
        </h3>

        <div className="bg-primary h-auto p-6 text-center w-full rounded-md">
          <div className="flex justify-evenly items-center">
            <div className="bg-white text-black p-3 rounded w-64">
              <p className="font-bold text-lg">Contract Review</p>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                impedit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur, expedita!
              </p>
            </div>
            <div className="bg-white text-black p-3 rounded w-64">
              <p className="font-bold text-lg">Income Tax filings</p>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                impedit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur, expedita!
              </p>
            </div>
            <div className="bg-white text-black p-3 rounded w-64">
              <p className="font-bold text-lg">Legal Advice</p>

              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                impedit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur, expedita!
              </p>
            </div>
          </div>

          <Link href="/services">
            <button className="border-2 bg-white border-primary transition-all ease-in p-2 h-12 w-94 mt-6 text-primary my-3 text-sm rounded-lg font-bold">
              Check out the services and choose what you want!
            </button>
          </Link>
        </div>
      </div>

      <div className="m-16">
        <h3 className="text-black font-bold text-xl my-3">AI based Services</h3>

        <div className="bg-primary h-auto p-6 flex justify-evenly items-center text-center w-full rounded-md ">
          <div className="bg-white text-black p-3 rounded w-64 h-72 flex flex-col justify-between items-center">
            <p className="font-bold text-lg">Legal Document Simplifier</p>

            <p className="font-light">
              This AI tool will help to summarize any form of legal text or
              document. Get a basic idea of what the document says quickly!
            </p>

            <Link href="/summarizer">
              <button className="border-2 border-primary transition-all ease-in p-2 w-20 text-primary my-3 text-sm rounded font-bold hover:bg-primary hover:text-white">
                View
              </button>
            </Link>
          </div>
          <div className="bg-white text-black p-3 rounded w-64 h-72 flex flex-col justify-between items-center">
            <p className="font-bold text-lg">Contract Analyzer</p>

            <p className="font-light">
              Legal words are super confusing. No worries. Our AI analyzes it so
              that you can answer any questions to it and get them answered.
            </p>
            <Link href="/analyzer">
              <button className="border-2 border-primary transition-all ease-in p-2 w-20 text-primary my-3 text-sm rounded font-bold hover:bg-primary hover:text-white">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
