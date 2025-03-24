import React, { Suspense } from "react";
import "./App.css";
import { FaGithub } from "react-icons/fa6";
import { PiTrafficSign } from "react-icons/pi";

const NoducsLogo = React.lazy(() => import("./base/ui/components/NoducsLogo"));

function App() {
  return (
    <>
      <div className="max-h-screen flex h-screen w-screen bg-black text-white">
        <div className="flex flex-col w-full">
          <div className="flex justify-between"></div>
          <div className="flex justify-center items-center h-full relative w-full bottom-20">
            <div className="flex justify-center flex-col items-center">
              {/* <img
                src="https://wtemrwnjzqbbmgxpxrvf.supabase.co/storage/v1/object/public/cat_designs/public/noducst.png?t=2025-01-19T13%3A58%3A33.049Z"
                alt="Noducs"
                className="w-60 h-auto"
              /> */}
              <Suspense
                fallback={
                  <div className="w-60 h-40 bg-gray-800 animate-pulse rounded" />
                }
              >
                <NoducsLogo />
              </Suspense>
              <p className="text-xl font-semibold">
                No Ducks, Just State - Simpler state management library
              </p>
              <p className="text-sm font-semibold mt-3">
                {`This is all we've got for now as a website, but stay
                tuned for exciting updates`}
              </p>
              <div className="flex space-x-4 justify-center mt-10">
                <a
                  className="text-white hover:text-white flex items-center space-x-3 no-underline capitalize border px-6 py-3 rounded-xl"
                  href="https://github.com/asiriPiyajanaka/noducs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                  <p className="text-lg">GitHub</p>
                </a>
                <a
                  className="text-white hover:text-white flex items-center space-x-3 no-underline capitalize border px-6 py-3 rounded-xl"
                  href="https://noducs-play.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTrafficSign size={24} />
                  <p className="text-lg">noducs play</p>
                </a>
              </div>
              <div className="flex space-x-4 justify-center mt-4">
                <a
                  className="text-white hover:text-white flex items-center space-x-3"
                  href="https://medium.com/@asiripiyajanaka/noducs-no-ducks-just-state-a7d878370cdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="underline">Documentation</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
