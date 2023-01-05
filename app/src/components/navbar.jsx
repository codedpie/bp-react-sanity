import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './css/navbar.scss'
import Logo from '../logo.svg'
import { useEffect } from "react"

const NavBar = ({ data }) => {

    useEffect(() => {

        // const changeBackground = () => {
        //     // console.log(window.scrollY)
        //     if (window.scrollY >= 66) {
        //         document.querySelector('.navbar').classList.add('scroll')
        //     } else {
        //         document.querySelector('.navbar').classList.remove('scroll')
        //     }
        // }
        // window.addEventListener("scroll", changeBackground)

        const NavLink = document.querySelectorAll('.stact-nav-link')
        const NavBarCollapse = document.querySelector('.navbar-collapse')

        NavLink.forEach(e => {
            e.onclick = () => {
                if (NavBarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click()
                }
            }
        })

    }, [])

    const NavBarLinks = [
        {
            title: 'Home',
            href: '/'
        },
        {
            dropDown: true,
            title: 'About',
            href: '/about',
            links: [
                { title: 'Who we are', href: '/about/who-we-are' },
                { title: 'Why choose us', href: '/about/why-choose-us' },
                { title: 'Testimonials', href: '/about/testimonials' }
            ]
        },
        {
            dropDown: true,
            title: 'Our Speciality',
            href: '/our-speciality',
            links: [
                {
                    title: 'Healthcare', href: '/our-speciality/healthcare',
                    links: [
                        { title: 'Hospitals', href: '/our-speciality/healthcare/hospitals' },
                        { title: 'Dentists', href: '/our-speciality/healthcare/dentists' },
                        { title: 'Plastic Surgeons', href: '/our-speciality/healthcare/plastic-surgeons' },
                        { title: 'Orthopedics', href: '/our-speciality/healthcare/orthopedics' },
                        { title: 'Chiropractors', href: '/our-speciality/healthcare/chiropractors' },
                        { title: 'Infertility and IVF', href: '/our-speciality/healthcare/infertility-and-ivf' },
                        { title: 'Aesthetic/Dermatologist', href: '/our-speciality/healthcare/aesthetic-dermatologist' },
                        { title: 'Surgeons', href: '/our-speciality/healthcare/surgeons' },
                        { title: 'Medical tourism', href: '/our-speciality/healthcare/medical-tourism' },
                        { title: 'Healthcare startups', href: '/our-speciality/healthcare/healthcare-startups' }
                    ]
                },
                { title: 'Education ', href: '/our-speciality/education' },
                { title: 'Fitness', href: '/our-speciality/fitness' },
                { title: 'B2B', href: '/our-speciality/b2b' },
            ]
        },
        {
            dropDown: true,
            title: 'Services',
            href: '/services',
            links: [
                {
                    title: 'Medical Digital Marketing', href: '/services/medical-digital-marketing', links: [
                        {
                            title: 'Healthcare SEO', href: '/services/medical-digital-marketing/healthcare-seo', links: [
                                { title: 'Local SEO', href: '/services/medical-digital-marketing/healthcare-seo/local-seo' },
                                { title: 'Technical SEO', href: '/services/medical-digital-marketing/healthcare-seo/technical-seo' },
                                { title: 'Website Ranking', href: '/services/medical-digital-marketing/healthcare-seo/website-ranking' }
                            ]
                        },
                        { title: 'Healthcare SMO', href: '/services/medical-digital-marketing/healthcare-smo' },
                        { title: 'Healthcare SMM', href: '/services/medical-digital-marketing/healthcare-smm' },
                        { title: 'Reputation Management for Doctors', href: '/services/medical-digital-marketing/reputation-management-for-doctors' },
                        { title: 'Healthcare Social Media Management', href: '/services/medical-digital-marketing/healthcare-social-media-management' },
                        { title: 'Email Marketing for Healthcare', href: '/services/medical-digital-marketing/email-marketing-for-healthcare' },
                        { title: 'Guest Posting Services for Healthcare', href: '/services/medical-digital-marketing/guest-posting-services-for-healthcare' },
                        { title: 'Page Load Speed Optimiation', href: '/services/medical-digital-marketing/page-load-speed-optimiation' },
                    ]
                },
                {
                    title: 'Website Services', href: '/services/website-services', links: [
                        { title: 'Medical Web Designing', href: '/services/website-services/medical-web-designing' },
                        { title: 'Medical Web Development', href: '/services/website-services/medical-web-development' },
                        { title: 'E-Commerce Development for Healthcare', href: '/services/website-services/e-commerce-development-for-healthcare' },
                        { title: 'Medical Website Revamps', href: '/services/website-services/medical-website-revamps' },
                        { title: 'Medical Website Maintenance', href: '/services/website-services/medical-website-maintenance' }
                    ]
                },
                {
                    title: 'Marketing Strategies', href: '/services/marketing-strategies', links: [
                        { title: 'PPC Advertising for Healthcare', href: '/services/marketing-strategies/ppc-advertising-for-healthcare' },
                        { title: 'Facebook Ads for Healthcare', href: '/services/marketing-strategies/facebook-ads-for-healthcare' },
                        { title: 'Healthcare Video Marketing', href: '/services/marketing-strategies/healthcare-video-marketing' },
                        { title: 'Branding Services', href: '/services/marketing-strategies/branding-services' },
                        { title: 'Analytics and Reporting', href: '/services/marketing-strategies/analytics-and-reporting' },
                        { title: 'Marketing Strategies for Doctors', href: '/services/marketing-strategies/marketing-strategies-for-doctors' },
                        { title: 'Lead Generations for Doctors', href: '/services/marketing-strategies/lead-generations-for-doctors' },
                        { title: 'Content Marketing for Healthcare', href: '/services/marketing-strategies/content-marketing-for-healthcare' }
                    ]
                },
                {
                    title: 'Content', href: '/services/content', links: [
                        { title: 'Healthcare Content Creation', href: '/services/content/healthcare-content-creation' },
                        { title: 'Medical Graphics Design', href: '/services/content/medical-graphics-design' }
                    ]
                }
            ]
        },
        {
            dropDown: true,
            title: 'Our Work',
            href: '/our-work',
            links: [
                { title: 'Websites', href: '/our-work/websites' },
                { title: 'Case Studies', href: '/our-work/case-studies' },
                { title: 'Projects', href: '/projects' }
            ]
        },
        {
            title: 'Blog',
            href: '/blog'
        },
        {
            dropDown: true,
            title: 'Pages',
            href: '#',
            links: [
                { title: 'SEO Agency for Doctors', href: '/seo-agency-for-doctors' },
                { title: 'Digital Marketing Agency for Hospital', href: '/digital-marketing-agency-for-hospital' },
                { title: 'SEO Company for Clinic/Centres', href: '/seo-company-for-clinic-centres' },
                { title: 'Digital Marketing for Dental', href: '/digital-marketing-for-dental' },
                { title: 'Why SEO is important for Healthcare', href: '/why-seo-is-important-for-healthcare' },
                { title: 'Dynamic Website Design for Healthcare', href: '/dynamic-website-design-for-healthcare' },
                { title: 'Responsive Website Design for Healthcare', href: '/responsive-website-design-for-healthcare' },
                { title: 'Responsive Website Design for Medical', href: '/responsive-website-design-for-medical' },
                { title: 'SEO Agency in India', href: '/seo-agency-in-india' },
                { title: 'Medical Digital Marketing in India', href: '/medical-digital-marketing-in-india' },
                { title: 'Orthopedic Marketing', href: '/orthopedic-marketing' },
                { title: 'Dental Marketing', href: '/dental-marketing' },
                { title: 'Chiropractor Marketing', href: '/chiropractor-marketing' },
                { title: 'Video Marketing for Healthcare Practice', href: '/video-marketing-for-healthcare-practice' },
                { title: 'Startup Website for Healthcare', href: '/startup-website-for-healthcare' },
                { title: 'E-Commerce Development for Medical', href: '/e-commerce-development-for-medical' },
                { title: 'Digital Marketing Agency for Medical', href: '/digital-marketing-agency-for-medical' },
                { title: 'Social Media Marketing for Hospital', href: '/social-media-marketing-for-hospital' },
                { title: 'Social Media Marketing for Dental', href: '/social-media-marketing-for-dental' },
                { title: 'Video Marketing for Healthcare', href: '/video-marketing-for-healthcare' },
                { title: 'Video Content Creation for Healthcare', href: '/video-content-creation-for-healthcare' },
                { title: 'Mobile Website Design', href: '/mobile-website-design' },
                { title: 'Website Revamps for Healthcare', href: '/website-revamps-for-healthcare' },
                { title: 'Redesign Medical Website', href: '/redesign-medical-website' },
                { title: 'Physicians Digital Marketing Services', href: '/physicians-digital-marketing-services' },
                { title: 'Pharma Digital Marketing Company', href: '/pharma-digital-marketing-company' },
                { title: 'Healthcare Logo', href: '/healthcare-logo' },
                { title: 'Local SEO Marketing for Hospital', href: '/local-seo-marketing-for-hospital' },
                { title: 'Local SEO Marketing for Clinic', href: '/local-seo-marketing-for-clinic' },
                { title: 'Hospital Marketing', href: '/hospital-marketing' },
                { title: 'Paid Advertising for Healthcare', href: '/paid-advertising-for-healthcare' },
            ]
        }
    ]

    return (
        <>
            <Navbar variant="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand ><NavLink to="/"><img src={Logo} height="32" alt="Stact" /></NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="navbar-nav mx-auto">
                            {
                                data ?
                                    data.map((e, i) => {
                                        if (e.dropDown) {
                                            return (
                                                <div className="dropdown" key={i}>
                                                    <div className="nav-link dropdown-toggle" >
                                                        {e.title}
                                                    </div>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j}><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink>
                                                            </li>
                                                        )
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        } else if (e.anchor) {
                                            return (
                                                <a href={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</a>
                                            )
                                        } else {
                                            return (
                                                <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>
                                            )
                                        }
                                    })
                                    :
                                    NavBarLinks.map((e, i) => {
                                        if (e.dropDown) {
                                            return (
                                                <div className="dropdown" key={i}>
                                                    {/* <a href={e.links} className="nav-link dropdown-toggle" >
                                                        {e.title}
                                                    </a> */}
                                                    <NavLink to={e.href} className="nav-link dropdown-toggle" key={i}>{e.title}</NavLink>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        {e.links.map((e2, j) =>
                                                            <li key={j} className="sub-menu"><NavLink className={({ isActive }) => isActive ? 'dropdown-item stact-nav-link' : 'dropdown-item stact-nav-link'} to={e2.href}>{e2.title}</NavLink>

                                                                {e2.links ? <ul className="sub-sub-menu dropdown-menu">
                                                                    {e2.links.map((e3, k) =>
                                                                        <li key={k}>
                                                                            <NavLink to={e3.href}>{e3.title}</NavLink>

                                                                            {e3.links ? <ul className="sub-sub-sub-menu dropdown-menu">
                                                                                {e3.links.map((e4, l) =>
                                                                                    <li key={l}>
                                                                                        <NavLink to={e4.href}>{e4.title}</NavLink>
                                                                                    </li>
                                                                                )}
                                                                            </ul> : null}

                                                                        </li>
                                                                    )}
                                                                </ul> : null}

                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        } else if (e.anchor) {
                                            return (
                                                <a href={e.href} className="nav-link stact-nav-link anchor" key={i}>{e.title}</a>
                                            )
                                        } else {
                                            return (
                                                <NavLink to={e.href} className="nav-link stact-nav-link" key={i}>{e.title}</NavLink>
                                            )
                                        }
                                    })
                            }
                        </div>
                    </Navbar.Collapse>
                    <a href="/contact" className="navbar-cta">Write Query</a>
                </div>
            </Navbar>
        </>
    )
}

export default NavBar