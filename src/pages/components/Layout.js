import React from 'react'

const Layout = ({children, classname}) => {
  return (
    <div className={`w-full h-auto inline-block z-0 bg-light  dark:bg-dark xl:p-10 lg:p-16 md:p-12 sm:p-8 ${classname}`}>
            {children}
    </div>
  )
}

export default Layout