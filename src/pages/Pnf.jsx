export default function Pnf() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8 h-[100vh]">
      <div 
                aria-hidden="true"
                className="absolute inset-0 dark:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div 
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40  ">
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
            </div>
        <div className="text-center">
          <p className="bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] text-transparent bg-clip-text antialiased font-poppins text-8xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="text-black bg-gradient-to-r from-[#00c6ff] to-[#92EFFD] hover:opacity-100 opacity-80  font-medium rounded-md text-sm px-[30px] py-3 text-center  font-poppins antialiased transition-all active:scale-95"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
