import React from 'react'
import Senchatouch from '../assets/svg/senchatouch.svg'
import TypeScript from '../assets/svg/typescript.svg'
import Angular from '../assets/svg/angular.svg'
import ReactNative from '../assets/svg/react-native.svg'
import JavaScript from '../assets/svg/javascript.svg'
import Golang from '../assets/svg/golang.svg'


function Frontend() {
    return (
        <div>
            <div className='grid grid-cols-6 justify-center items-center text-center gap-14 text-white'>
                <div className='flex flex-col justify-center items-center gap-2 font-poppins  '>

                    <img className='w-[50px] h-[50px] ' src={Senchatouch} alt="" />
                    <h1 className='text-white  text-base'>Senchatouch</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]'  src={TypeScript} alt="" />
                    <h1 className='text-white  text-base'>TypeScript</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Angular} alt="" />
                    <h1 className='text-white  text-base'>Angular JS</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Golang} alt="" />
                    <h1 className='text-white  text-base'>Golang</h1>

                    </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={JavaScript} alt="" />
                    <h1 className='text-white  text-base'>JavaScript</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={ReactNative} alt="" />
                    <h1 className='text-white  text-base'>ReactJS</h1>

                </div>
            </div>
        </div>
    )
}

export default Frontend
