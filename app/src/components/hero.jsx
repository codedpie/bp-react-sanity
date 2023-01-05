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

export default Hero