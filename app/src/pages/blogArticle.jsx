import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import './css/blog.scss'
import NavBar from "../components/navbar"
import ContactSection from '../components/contactSection'
import { useParams } from 'react-router-dom';
import { clint } from '../Sanity'
import { PortableText } from '@portabletext/react'
import PostSkeleton from '../components/PostSkeleton'

const BlogArticle = () => {
    const { slug } = useParams()

    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        clint.fetch(`*[slug.current == "${slug}"] {
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
          publishedAt,
          "categories": categories[]->title
        }`
        ).then((data) => {
            setPost(data[0])
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        });
    }, [slug])

    return (
        <>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <NavBar />
            <div className='blog-article-container'>
                {
                    !isLoading ?
                        <div className="loadedData">
                            <Hero data={post} />
                            <BlogArticleSection data={post} />
                        </div>
                        :
                        <PostSkeleton />
                }
                <Contact />
                <Footer />
            </div>
        </>
    )
}


const Hero = ({ data }) => {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">
                                {data.categories[0]}
                            </div>
                            <h1 className='display-1'>{data.title}</h1>
                            <div className='txt-3'>Published by <span className='fw-500 color-1'>Branding Pioneers</span> on <span className='fw-500 color-1'>{`${month[new Date(data._createdAt).getMonth()]} ${new Date(data._createdAt).getDate()}, ${new Date(data._createdAt).getFullYear()}`}</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogArticleSection = ({ data }) => {
    return (
        <>
            <section className='section-global blog-article'>
                <div className="container container-2">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <img src={data.mainImage.asset.url} className="img-fluid mb-20" alt={data.mainImage.asset.alt == null ? data.title : data.mainImage.asset.alt} />
                        </div>
                        <div className="col-12">
                            <div className="blog-article-section">
                                <PortableText
                                    value={data.body}
                                />
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

    return (
        <>
            <ContactSection bg="bg-shade-blue" contact_data={contact_data} />
        </>
    )
}

export default BlogArticle