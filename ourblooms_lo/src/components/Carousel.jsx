import '../App.css'
import c1 from '../assets/Carousel/Image 1.png'
import c2 from '../assets/Carousel/Image 2.png'
import c3 from '../assets/Carousel/Image 3.png'
import c4 from '../assets/Carousel/Image 4.png'
import c5 from '../assets/Carousel/Image 5.png'
import Button from './Button'
function Carousel(){
    return(
        <>
        <div className="content">
            <p className="caption1"> Who we are</p>
            <p className="heading2">We're Our Blooms® and we're here to help you find your floral story.</p>
            <button className="btn-yellow"> About Us</button>
            <Button buttonName="ABOUT US" />
        </div>
        <section className = "carousel">
            <img src={c1} alt="Image 1"/>
            <img src={c2} alt="Image 2"/>
            <img src={c3} alt="Image 3"/>
            <img src={c4} alt="Image 4"/>
            <img src={c5} alt="Image 5"/>

        </section>
        </>

    )
}

export default Carousel 