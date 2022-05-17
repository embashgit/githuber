import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StoreState } from '../../interfaces/store.interfaces'

const LandingPage = () => {
  const { user } = useSelector((state: StoreState) => state.User)
  return (
    <div className="text-gray-900  w-full text-center flex justify-center">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="text-center flex flex-col justify-center">
          <h1 className="mb-5 text-center text-5xl font-bold lg:text-5xl">Hello To Github User Fetcher!</h1>
          <div >
          <p className="mb-5 text-grey-900 text-center text-2xl  ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          </div>
          <button className="btn btn-primary text-4xl">Get Started</button>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
