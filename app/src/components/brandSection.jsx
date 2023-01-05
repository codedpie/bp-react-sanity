import './css/brandSection.scss'

const BrandSection = ({ brands, src, light, bordered, bg, pt, customTitle }) => {
    return (
        <section className={(light ? '' : 'dark') + (bg ? ` ${bg}` : '') + " brand-section-container"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={"brand-section " + (bordered ? 'bordered' : '') + (pt ? 'pt-60' : '')}>
                            <div className="txt-3 fw-500 text-center mb-20">{customTitle ? customTitle : 'Trusted by'}</div>
                            <div className="brands-container">
                                {
                                    brands.map((brand, index) =>
                                        <div className="brand" key={index}>
                                            <img src={require(`../pages/${src}/${brand.imgUrl}`)} alt={brand.name} className="img-fluid" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandSection