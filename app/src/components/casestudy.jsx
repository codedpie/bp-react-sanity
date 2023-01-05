import { PortableText } from "@portabletext/react"

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

export default CaseStudy