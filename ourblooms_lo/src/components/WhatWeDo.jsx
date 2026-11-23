import Section1 from '../components/Section1'
import i1 from '../assets/section/Image-1.png'
import i2 from '../assets/section/Image-2.png'
import i3 from '../assets/section/Image.png'

function WhatWeDo(){
    return(
        <>
        <div> 
            <Section1 number =  "1" title = "FLORAL INSTALLATIONS" image={i1} description="Living art for homes, businesses, and events." />
            <Section1 number =  "2" title = "NATIVE PLANT ARRANGEMENTS" image={i2} description="Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations." />
            <Section1 number =  "3" title = "CUSTOM FLORAL CONCEPTS" image={i3} description="Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations." />

        </div>
        </>
    )
}

export default WhatWeDo