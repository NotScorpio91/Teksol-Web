import React from 'react'
import WordPress from '../assets/svg/wordpress.svg'
import Magento from '../assets/svg/magento.svg'
import Prestashop from '../assets/svg/prestashop.svg'
import BigCommerce from '../assets/svg/bigcommerce.svg'
import Drupal from '../assets/svg/drupal.svg'
import Ubercart from '../assets/svg/ubercart.svg'
import Virtuemart from '../assets/svg/virtuemart.svg'
import CSCart from '../assets/svg/cs-cart.svg'
import Sitecore from '../assets/svg/sitecore.svg'
import Joomla from '../assets/svg/joomla.svg'



function Cms() {
    return (
        <div>
            <div className='grid grid-cols-6 justify-center items-center text-center gap-14 text-white'>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px] ' src={WordPress} alt="" />
                    <h1 className='text-white font-poppins text-base'>WordPress</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Magento} alt="" />
                    <h1 className='text-white font-poppins text-base'>Magento</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Prestashop} alt="" />
                    <h1 className='text-white font-poppins text-base'>Prestashop</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Joomla} alt="" />
                    <h1 className='text-white font-poppins text-base'>Joomla</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={BigCommerce} alt="" />
                    <h1 className='text-white font-poppins text-base'>BigCommerce</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Drupal} alt="" />
                    <h1 className='text-white font-poppins text-base'>Drupal</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Ubercart} alt="" />
                    <h1 className='text-white font-poppins text-base'>Ubercart</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Virtuemart} alt="" />
                    <h1 className='text-white font-poppins text-base'>Virtuemart</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={CSCart} alt="" />
                    <h1 className='text-white font-poppins text-base'>CS Cart</h1>

                </div>
                <div className='flex flex-col justify-center items-center gap-2 '>

                    <img className='w-[50px] h-[50px]' src={Sitecore} alt="" />
                    <h1 className='text-white font-poppins text-base'>Sitecore</h1>

                </div>
               


            </div>
        </div>
    )
}

export default Cms
