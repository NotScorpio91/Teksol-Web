import React from 'react'
import NavBar from '../../Components/NavBar'
import ServiceCard from '../../Components/ServiceCard'
import Tab from '../../Components/Tab'
import ProcessCards from '../../Components/ProcessCards'
import Footer from '../../Components/Footer'
import one from '../../assets/testing/one.jpg'
import two from '../../assets/testing/two.jpg'
import three from '../../assets/testing/three.jpg'



function ServicesPage() {


  const services = [
    {
      heading: 'Web  Development',
      title: 'A Roadmap To The Emerging And Effective Web And CMS Development',
      img1: one,
      img2: two,
      img3: three,
      distitle:'What is web development ?',
      dis:`The website has become an essential and significant part of human life. Every business needs a website to showcase its skill, products, talents, and much more. Everything can be formed and updated with a website. Hyperlink InfoSystem understands the necessities and crafts exquisite website and CMS systems for start-ups or businesses. We are the leading tailor-made web development company, delivering the best web and CMS solutions across the globe Our highly skilled developers have proficient expertise in the latest technology and trends. We worked with global firms to transform recognized ideas into stunning & inventive websites. We have rich experience and creativity in producing phenomenal websites and CMS development for different clients worldwide. Our experts hold a different and unique perspective which helps to tailor web development faster and better. With this web development, the business runs with high functionality, efficiency and enhances it.
      `,
      
    
    },
    
  ];




  return (
    <div>
      <NavBar />
      {services.map( (servicecard, index) => (
              <ServiceCard key={index} heading={servicecard.heading} title={servicecard.title} img1={servicecard.img1}  
              img2={servicecard.img2} img3={servicecard.img3}
              distitle={servicecard.distitle} dis={servicecard.dis} />
            ))}
      <Tab/>
      <ProcessCards/>
      <Footer />
    </div>
  )
}

export default ServicesPage
