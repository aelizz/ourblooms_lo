import i1 from '../assets/Last/Image.png'
import i2 from '../assets/Last/Image-1.png'
import i3 from '../assets/Last/Image-2.png'

function Footer(){
    return(
    <div>
       <img src = {i1}
                srcSet = {`${i1} 400w, ${i2} 800w, ${i3} 1200w`}
                sizes = "(max-width:600px) 100vw, 50vw"
                alt= "Our Blooms Logo"/>
    </div>

    )
}

export default Footer