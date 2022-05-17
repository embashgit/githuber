import * as React from 'react'

const PageLoader = () => (
  <div className=" flex justify-center items-center h-screen w-full bg-gray-100">
    <div>
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-44 w-44"></div>
      <div>
        <div>
          <p className="items-center text-lg mt-10">Please hold on... ..</p>
        </div>
      </div>
    </div>
  </div>
)

export default PageLoader
