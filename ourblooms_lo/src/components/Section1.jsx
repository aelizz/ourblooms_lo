function Section1({number, title, image, description}){
    return(
        <>
        <div className="section1">
            <p className = "heading1">{number}</p>
            <img src = {image} alt ={title}/>
            <div>
                <p className="heading1">{title}</p>
                <p className="paragraph1">{description}</p>
            </div>
            
        </div>
        </>
    )
}

export default Section1