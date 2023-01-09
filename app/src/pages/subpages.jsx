import Helmet from 'react-helmet'
import Footer from '../components/footer'
import NavBar from "../components/navbar"
import './css/post.scss'
import { clint } from '../Sanity'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PostSkeleton from '../components/PostSkeleton'
import Hero from '../components/hero'
import Contact from '../components/contact'
import CaseStudy from '../components/casestudy'
import NotFound from '../components/errorComp'


const SubPages = () => {
    const { parentPage, mainPage, slug } = useParams()
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorPage, setErrorPage] = useState(false)

    useEffect(() => {
        clint.fetch(`*[_type == "subpage" && references(*[_type == "page" && references(*[_type == "mainpage" && slug.current == "${parentPage}"]._id) && slug.current == "${mainPage}"]._id) && slug.current == "${slug}"] {
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
        }).catch(e => {
            console.log(e)
        });
    }, [slug, mainPage, parentPage])

    return (
        <>
            <Helmet>
                <title>{post.title}</title>
            </Helmet>
            <NavBar />
            <div className="project-detail-container">
                {!isLoading ?
                    <div className="loaded">
                        <Hero data={post} />
                        <CaseStudy data={post} />
                    </div>
                    : !errorPage ? <PostSkeleton /> : <NotFound />}
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default SubPages