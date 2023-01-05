import Helmet from 'react-helmet'
import BrandSection from '../../components/brandSection'
import ContactSection from '../../components/contactSection'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import PricingCard from '../../components/pricingCard'
import './style.scss'

const Pricing = () => {
    return(
        <>
            <Helmet>
                <title>Stact - Pricing</title>
            </Helmet>
            <NavBar/>
            <div className="pricing-container">
                <Hero/>
                <PricingSection />
                <Brands />
                <Contact />
                <Footer/>
            </div>
        </>
    )
}

const Hero = () => {
    return(
        <>  
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">Pricing</div>
                            <h1 className='display-1'>We craft a customized strategy for your brand goals.</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const PricingSection = () => {

    const pricing_data = [
        {
            title: 'Basic',
            text: 'For personal or small teams',
            price: '$39',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback'],
            not_included: ["Data insights","Employee management","iOS & Android Apps","Request feedback", "1-on-1 meeting agendas", "Check-ins"]
        },
        {
            title: 'Team',
            text: 'For small professional teams',
            price: '$49',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback',"Data insights","Employee management"],
            not_included: ["iOS & Android Apps","Request feedback", "1-on-1 meeting agendas", "Check-ins"]
        },
        {
            title: 'Pro',
            text: 'For big teams',
            price: '$59',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback',"Data insights","Employee management","iOS & Android Apps","Request feedback"],
            not_included: ["1-on-1 meeting agendas", "Check-ins"],
            featured: true
        },
        {
            title: 'Enterprise',
            text: 'For big organizations',
            price: '$79',
            period: 'month',
            included: ['Enterprise-grade security','Performance Reviews','360º feedback',"Data insights","Employee management","iOS & Android Apps","Request feedback", "1-on-1 meeting agendas", "Check-ins"],
            buttonLabel: 'Contact sales'
        }
    ]

    return(
        <>
            <section className='section-global'>
                <div className="container">
                    <div className="row">
                        {pricing_data.map((e,i)=> 
                            <div className="col-xl-3 col-lg-4 col-md-6 gy-4" key={i}>
                                <PricingCard data={e}/>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

const Brands = () => {
    const brands = [
        {
            name: "brand1",
            imgUrl: "assets/brand1.svg"
        },
        {
            name: "brand2",
            imgUrl: "assets/brand2.svg"
        },
        {
            name: "brand3",
            imgUrl: "assets/brand3.svg"
        },
        {
            name: "brand4",
            imgUrl: "assets/brand4.svg"
        },
        {
            name: "brand5",
            imgUrl: "assets/brand5.svg"
        }
    ]
    return(
        <>
            <BrandSection brands={brands} src={'pricing'} bordered/>
        </>
    )
}

const Contact = () => {

    const contact_data = {
            title_before: 'Get started with',
            title_highlight: "Stact",
            title_after: 'today!',
            text: "One of the best industry service providers with top tier talented individuals.",
            cta_1_link: '/pricing',
            cta_2_link: '/contact'
        }

    return(
        <>
            <ContactSection contact_data={contact_data} saasVarient />
        </>
    )
}

export default Pricing