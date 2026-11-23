import i1 from '../assets/under/Image.png'
import i2 from '../assets/under/Image-1.png'
import i3 from '../assets/under/Image-2.png'


function Under(){
    return(
        <div>
             <img src = {i1}
                        srcSet = {`${i1} 400w, ${i2} 800w, ${i3} 1200w`}
                        sizes = "(max-width:600px) 100vw, 50vw"
                        alt= "Our Blooms Logo"/>
        </div>
    )
}

export default Under