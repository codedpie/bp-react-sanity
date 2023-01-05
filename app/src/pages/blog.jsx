import Helmet from 'react-helmet'
import BlogCards from '../components/blogCards'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import ContactSection from '../components/contactSection'
import { clint } from '../Sanity'
import { useState, useEffect } from 'react'
import BlogCardSkeleton from '../components/blogCardSkeleton'

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Stact - Blog</title>
            </Helmet>
            <NavBar />
            <div className="blog-container">
                <Hero />
                <BlogSection />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

const Hero = () => {
    return (
        <>
            <section className='section-global bg-shade-1 hero'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-tag mb-8">Blogs</div>
                            <h1 className='display-1'>Get updated with our internal affairs</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const BlogSection = () => {

    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        clint.fetch(`*[_type == "post"]{
            title,
            slug,
            _createdAt,
            categories,
            mainImage {
              asset -> {
                _id,
                url
              }
            },
            publishedAt,
                'categories': categories[]->title
          }`)
            .then(data => {
                setPost(data)
                setIsLoading(false)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <section className='section-global bg-shade-blue'>
                <div className="container">
                    <div className="row">
                        {
                            !isLoading ? <BlogCards data={post} /> : <BlogCardSkeleton />
                        }
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

    return <ContactSection contact_data={contact_data} />
}

export default Blog