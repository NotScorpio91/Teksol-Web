import React from 'react'
import Android from '../assets/svg/android.svg'
import IOS from '../assets/svg/apple.svg'
import Flutter from '../assets/svg/flutter.svg'
import ReactNative from '../assets/svg/react-native.svg'
import Kotlin from '../assets/svg/kotlin.svg'
import Ionic from '../assets/svg/ionic.svg'
import Swift from '../assets/svg/swift.svg'
import Xamarin from '../assets/svg/xamarin.svg'
import Ipad from '../assets/svg/ipad.svg'
import Windows from '../assets/svg/windows.svg'
import PhoneGap from '../assets/svg/phonegap.svg'
import AugmentedReality from '../assets/svg/augment-reality.svg'
import VirtualReality from '../assets/svg/virtual-reality.svg'
import Beacon from '../assets/svg/beacon.svg'
import Wearables from '../assets/svg/wearable.svg'
import AppceleratorTitanium from '../assets/svg/appcelerator-titanium.svg'

function Mobile() {
    return (
        <div>
            <div className='grid grid-cols-6 justify-center items-center text-center gap-14 text-white font-poppins '>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px] ' src={Android} alt="" />
                    <h1 className='text-white  text-base'>Android</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]'  src={IOS} alt="" />
                    <h1 className='text-white  text-base'>IOS</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Flutter} alt="" />
                    <h1 className='text-white  text-base'>Flutter</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={ReactNative} alt="" />
                    <h1 className='text-white  text-base'>React Native</h1>

                    </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Kotlin} alt="" />
                    <h1 className='text-white  text-base'>Kotlin</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Ionic} alt="" />
                    <h1 className='text-white  text-base'>Ionic</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Swift} alt="" />
                    <h1 className='text-white  text-base'>Swift</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Xamarin} alt="" />
                    <h1>Xamarin</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Ipad} alt="" />
                    <h1 className='text-white  text-base'>Ipad</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Windows} alt="" />
                    <h1 className='text-white  text-base'>Windows</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={PhoneGap} alt="" />
                    <h1 className='text-white  text-base'>PhoneGap</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={AugmentedReality} alt="" />
                    <h1 className='text-white  text-base'>Augmented Reality</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={VirtualReality} alt="" />
                    <h1 className='text-white  text-base'>Virtual Reality</h1>

                </div>
                <div className='flex flex-col justify-center items-center  gap-2'>

                    <img className='w-[50px] h-[50px]' src={Beacon} alt="" />
                    <h1 className='text-white  text-base'>Beacon</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Wearables} alt="" />
                    <h1 className='text-white  text-base'>Wearables</h1>

                    </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={AppceleratorTitanium} alt="" />
                    <h1 className='text-white  text-base'>Appcelerator Titanium</h1>

                </div>
            </div>
        </div>
    )
}

export default Mobile
