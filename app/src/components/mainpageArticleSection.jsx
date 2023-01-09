import { PortableText } from "@portabletext/react";
import './css/mainpageArticleSection.scss'
import Skeleton from "react-loading-skeleton";
import { useEffect, useState } from "react";
import { clint } from '../Sanity'

const MainpageArticleSection = ({ pagename }) => {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    clint.fetch(`*[_type == "mainpage" && slug.current == '${pagename}'] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }}`
    ).then((data) => {
      setPost(data[0])
      setIsLoading(false)
    }).catch(e => console.log(e))
  })

  return (
    <>
      {isLoading ?
        <section className='section-global blog-article'>
          <div className="container container-2">
            <div className="row">
              <div className="col-12 mb-20">
                <Skeleton height={300} />
              </div>
              <div className="col-12">
                <div className="blog-article-section">
                  <Skeleton count={10} />
                </div>
              </div>
            </div>
          </div>
        </section>
        :
        <section className='section-global blog-article'>
          <div className="container container-2">
            <div className="row">
              <div className="col-12 mb-20">
                <img src={post.mainImage.asset.url} className="img-fluid mb-20 mainPageArticleImage" alt={post.mainImage.asset.alt == null ? post.title : post.mainImage.asset.alt} />
              </div>
              <div className="col-12 px-md-5 px-3">
                <div className="blog-article-section">
                  <PortableText value={post.body} />
                </div>
              </div>
            </div>
          </div>
        </section>}
    </>
  )
}

export default MainpageArticleSection