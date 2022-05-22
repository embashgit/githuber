import React from 'react'
import Navbar from '../../components/Navbar'
import { ImainLayout } from '../../interfaces/components.interfaces'

const MainLayout: React.FC<ImainLayout> = ({ children }) => (
  <div className="box-content flex w-screen text-center flex h-screen flex-col">
    <Navbar />
    <div className="flex text-center content-center justify-center h-4/5 w-full flex-col items-center">
      {children}
    </div>

    <div className="flex text-center content-center mt-9 justify-center">
      <h3 className="text-grey-300 lg:text-3xl">Flexiana &copy;2022</h3>
    </div>
  </div>
)

export default MainLayout
