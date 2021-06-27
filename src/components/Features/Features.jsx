import Card from './Card'
import './features.css'
import brandRecognition from  '../../assets/icon-brand-recognition.svg'
import records from  '../../assets/icon-detailed-records.svg'
import custom from  '../../assets/icon-fully-customizable.svg'

const features = [
    {title: 'Brand Recognition', description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content. ', image: brandRecognition},
    {title: 'Detailed Records', description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.', image: records},
    {title: 'Fully Customizable', description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.', image: custom}
]

const Features = () => {
    return (
        <main>
            <div className="features__wrapper">
                <div className="summary">
                    <h3>Advanced statistics</h3>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
                </div>

                <div className="cards__container">
                    {features.map((item,i) => 
                        <Card className="container__item" description={item.description} title={item.title} image={item.image} line={i < features.length-1}/>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Features;