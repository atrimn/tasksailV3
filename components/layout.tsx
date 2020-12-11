import React from 'react'
import NavigationBar from './navbar'
import Banner from './banner'
import SvgPattern from '../public/topography.svg'

export default function Layout({ children }) {
  const [showBanner, toggleBanner] = React.useState(true)
  return (
    <div className='h-full  min-h-screen pb-4' style={{ position: 'relative' }}>
      <NavigationBar />
      {showBanner ? <Banner toggleBanner={toggleBanner} /> : null}
      {children}
    </div>
  )
}
