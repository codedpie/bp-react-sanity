import Helmet from 'react-helmet'
import ContactSection from '../components/contactSection'
import Footer from '../components/footer'
import NavBar from "../components/navbar"
import './css/post.scss'
import { PortableText } from '@portabletext/react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { clint } from '../Sanity'
import PostSkeleton from '../components/PostSkeleton'
import NotFound from '../components/errorComp'

const Pages = () => {
    const { slug, mainPage } = useParams()

    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorPage, setErrorPage] = useState(false)


    // *[_type == "page" && references(*[_type == "mainpage" && slug.current == 'our-speciality']._id) && slug.current == 'healthcare']

    useEffect(() => {
        clint.fetch(`*[_type == "page" && references(*[_type == "mainpage" && slug.current == "${mainPage}"]._id) && slug.current == "${slug}"] {
          title,
          body,
          _createdAt,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          "parent": parent[]-> title
        }`).then((data) => {
            if (data[0] === undefined) {
                setErrorPage(true)
            }
            else {
                setPost(data[0])
                setIsLoading(false)
            }
        }).catch(e => console.log(e));
    }, [slug, mainPage])

    return (
        <>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <NavBar />
            <div className="project-detail-container">
                {
                    !isLoading ?
                        <div className="loaded">
                            <Hero data={post} />
                            <CaseStudy data={post} />
                        </div>
                        :
                        !errorPage ? <PostSkeleton /> : <NotFound />
                }
                <Contact />
                <Footer />
            </div>
        </>
    )
}

const Hero = ({ data }) => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">{data.parent[0]}</div>
                            <h1 className='display-1'>{data.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const CaseStudy = ({ data }) => {
    return (
        <>
            <section className='section-global case-study'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 text-center mb-20">
                            <img src={data.mainImage.asset.url} className="img-fluid mb-20 mainImage" alt={data.mainImage.asset.alt == null ? data.title : data.mainImage.asset.alt} />
                        </div>
                        <div className="col-12">
                            <div className="case-study-section">
                                <PortableText value={data.body} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const Contact = () => {

    const contact_data = {
        title: 'Have an idea?',
        title_highlight: "Let's talk",
        text: "One of the best industry service providers with top tier talented individuals.",
        link: '/contact'
    }

    return <ContactSection bg="bg-shade-blue" contact_data={contact_data} />
}


export default Pages