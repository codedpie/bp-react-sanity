import './css/featureCards.scss'

const FeatureCards = ({ data, src, center }) => {
    return (
        <>
            {data.map((e, i) =>
                <div className={`col-lg-4 col-md-6 feature-showcase-card-container ` + (center ? 'text-center' : '')} key={i}>
                    <div className='feature-showcase-card'>
                        {e.icoUrl ? <img src={require(`../pages/${src}/${e.icoUrl}`)} alt={e.title} height="56" className='mb-8' /> : <div className='feature-count mb-8'>{i + 1}</div>}
                        <h3>{e.title}</h3>
                        <p className='txt-2'>{e.text}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default FeatureCards