import React from 'react'
import Testimonaial from '../../Components/Testimonail'
import Anna from '../../assets/png/pfp1.png'
import Sara from '../../assets/png/pfp2.png'
import Alex from '../../assets/png/pfp3.png'
import Linda from '../../assets/png/pfp4.png'
import Emily from '../../assets/png/pfp5.png'
import John from '../../assets/png/pfp6.png'
import Jennifer from '../../assets/png/pfp7.png'
import Mike from '../../assets/png/pfp8.png'
import Carlos from '../../assets/png/pfp9.png'



function Testimonails() {
    const cards = [
        {
            img: Alex,
            title: "Alex B.",
            rank: "Product Manager",
            text: "TEKSOL is a dynamic team of professionals dedicated to supporting startups in scaling up their businesses online. Their expertise and commitment to excellence have been instrumental in navigating the challenges of digital growth. TEKSOL is the go-to partner for startups seeking reliable and innovative solutions for online success.",
        },
        {
            img: Anna,
            title: "Anna K.",
            rank: "Marketing Manager",
            text: "TEKSOL transformed our startup journey! Their team's support and expertise were crucial in navigating the online landscape. We're now scaling up faster than we ever thought possible.",
        },
        {
            img:John ,
            title: "John P.",
            rank: "CEO, Tech Startup",
            text: "Working with TEKSOL was a game-changer. Their professionals understand the intricacies of online business and provided tailored solutions that significantly boosted our startup's digital presence.",
        },
        {
            img:Sara ,
            title: "Sara M.",
            rank: "Entrepreneur",
            text: "Impressed by TEKSOL's professionalism and innovation. They not only met but exceeded our expectations, providing the expertise needed to ensure our startup's online scalability.",
        },
        {
            img: Mike,
            title: "Mike H.",
            rank: "Operations Director",
            text: "TEKSOL is a dynamic team of professionals dedicated to supporting startups in scaling up their businesses online. Their expertise and commitment to excellence have been instrumental in navigating the challenges of digital growth. TEKSOL is the go-to partner for startups seeking reliable and innovative solutions for online success.",
        },
        {
            img: Linda,
            title: "Linda S.",
            rank: "Digital Marketing Specialist",
            text: "TEKSOL delivered results that speak volumes. Our startup's growth trajectory shifted positively, thanks to their strategic guidance and cutting-edge solutions.",
        },
        {
            img: Carlos,
            title: "Carlos R.",
            rank: "Business Analyst",
            text: "TEKSOL's support was invaluable. Their team's responsiveness and adaptability to our startup's unique needs set them apart. I highly recommend their services.",
        },
        {
            img: Emily,
            title: "Emily W.",
            rank: "E-commerce Manager",
            text: "TEKSOL's impact on our online journey was profound. Their seamless integration of technology and business strategy has been instrumental in propelling our startup forward.",
        },
        {
            img: Jennifer,
            title: "Jennifer G.",
            rank: "Startup Founder & CEO",
            text: "TEKSOL's contribution to our startup's online success is immeasurable. Their professional team is not just focused on solutions; they're invested in the journey, making them an invaluable partner in the startup ecosystem.",
        },
    ]
  return (
    <div>
        <div className="sm:mt-40 mt-24 max-w-[1280px] px-4 sm:px-0 ">
        <p className='dark:text-[#FFF] font-poppins sm:text-6xl text-4xl  font-medium cursor-text pb-10 sm:pb-20 text-start antialiased bg-gradient-to-t from-black to-[#383838] bg-clip-text text-transparent '>reviews </p>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
        {cards.map((testimonaial, index) => (
                        <Testimonaial 
                            key={index}
                            title={testimonaial.title}
                            profile={testimonaial.img}
                            rank={testimonaial.rank}
							text={testimonaial.text}
                        />
                    ))}
        </div>
        </div>
    </div>
  )
}

export default Testimonails
