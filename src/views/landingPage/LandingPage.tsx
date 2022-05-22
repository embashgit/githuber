import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button';

const LandingPage = () => (
  <div className="text-gray-900 box-content w-full text-center flex justify-center">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content">
      <div className="text-center flex flex-col justify-center">
        <h1 className="mb-5 text-center text-5xl font-bold lg:text-9xl font-normal">
          {' '}
          Github Data Fetcher!
        </h1>
        <div>
          <p className="mb-5 text-grey-900 text-center text-2xl lg:text-5xl ">
            Search for a Repository and view Contributors
          </p>
        </div>
        <Link to="repository">
          <Button
            handleClick={() => {}}
            className="bg-transparent text-yellow-400 border-yellow-400 border-2 text-5xl  mt-9"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  </div>
);
export default LandingPage
