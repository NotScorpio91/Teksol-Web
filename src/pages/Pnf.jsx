import bg from '../assets/png/pnf.png'

export default function Pnf() {

  const bgImage = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    filter: 'grayscale(60%)',
  };
  return (
    <>
      <main className="grid  place-items-center dark:bg-black bg-white px-6 py-24 sm:py-32 lg:px-8  min-h-screen "style={bgImage}>
      <div 
                aria-hidden="true"
                className="absolute inset-0 dark:grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 hidden">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div 
                aria-hidden="true"
                className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:hidden  ">
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
                <div className="blur-[106px] h-36 bg-gradient-to-t from-gray-500 to-gray-50 "></div>
            </div>
        <div className="text-center relative bottom-52 sm:bottom-60">
          <p className="relative top-9 text-transparent bg-clip-text antialiased font-poppins text-7xl bg-gradient-to-r from-[#00c6ff] to-[#92EFFD]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-xl relative top-3">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="text-black    font-medium rounded-md text-sm px-[30px] py-3 text-center  font-poppins antialiased transition-all active:scale-95 bg-gradient-to-r from-[#00c6ff] to-[#92EFFD]"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
