import React from 'react'
import one from '../assets/testing/one.jpg'
import two from '../assets/testing/two.jpg'
import three from '../assets/testing/three.jpg'

function ServiceCard() {
    return (
        <div className='flex justify-center items-center mt-40 '>
            <div className='bg-[#0A0A0A] w-[1200px] px-1 rounded-md flex flex-col'>

                <div className="Heading flex flex-col gap-4 py-6 px-4 ">
                    <h1 className='text-white font-poppins font-bold text-4xl '>Web Development</h1>
                    <p className='text-[#9E9E9E] text-base font-poppins'>A Roadmap To The Emerging And Effective Web And CMS Development</p>
                </div>
                <div className="image grid grid-cols-3 justify-around gap-5 w-full rounded-lg  px-4 py-5">
                    <img className=' rounded-lg cursor-pointer shadow   hover:scale-105 hover:transition-all' src={one} alt="" />
                    <img className=' rounded-lg cursor-pointer shadow   hover:scale-105 hover:transition-all' src={two} alt="" />
                    <img className=' rounded-lg cursor-pointer shadow   hover:scale-105 hover:transition-all' src={three} alt="" />

                </div>
                <div className="Dis flex flex-col justify-center  gap-6 px-4  pt-12">

                    <div className=" flex flex-col gap-8 ">
                        <h1 className='text-white font-poppins text-3xl font-semibold'>What is web Development ?</h1>
                        <p className='text-[#9E9E9E] text-base font-poppins leading-6'>
                            The website has become an essential and significant part of human life. Every business needs a website to showcase its skill, products, talents, and much more. Everything can be formed and updated with a website. Hyperlink InfoSystem understands the necessities and crafts exquisite website and CMS systems for start-ups or businesses. We are the leading tailor-made web development company, delivering the best web and CMS solutions across the globe.

                            Our highly skilled developers have proficient expertise in the latest technology and trends. We worked with global firms to transform recognized ideas into stunning & inventive websites. We have rich experience and creativity in producing phenomenal websites and CMS development for different clients worldwide. Our experts hold a different and unique perspective which helps to tailor web development faster and better. With this web development, the business runs with high functionality, efficiency and enhances it.
                        </p>
                    </div>
                    <div className=""></div>
                    <div className=""></div>


                </div>
            </div>
        </div>
    )
}

export default ServiceCard
