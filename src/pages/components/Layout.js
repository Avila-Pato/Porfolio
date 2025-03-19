import React, { Suspense } from 'react'

const Layout = ({children, classname}) => {

  function ListItemLoading() {
    return (
      <div className="grid h-[64px] items-center">
        <div className="w-full animate-pulse" role="status">
          <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
          <span className="sr-only">Cargando...</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full animate-pulse" role="status">
            <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-700" />
            <span className="sr-only">Cargando...</span>
          </div>
          <div className="w-full animate-pulse" role="status">
            <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
            <span className="sr-only">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }


  return (
    <main className={`w-full h-auto inline-block z-0 bg-light  dark:bg-dark xl:p-10 lg:p-16 md:p-12 sm:p-8 ${classname}`}>
          <Suspense fallback={<ListItemLoading/>}>
            {children}
          </Suspense>
 
    </main>
  )
}

export default Layout