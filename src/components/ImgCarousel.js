import Carousel from 'react-bootstrap/Carousel';

const ImgCarousel = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg"
                alt="First slide"
                height="500px"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="Logo.svg"
                alt="Second slide"
                height="500px"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://mythics.com/wp-content/uploads/2022/07/AdobeStock_245269525-scaled.jpeg"
                alt="Third slide"
                height="500px"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <br/>
        </>
    );
}

export default ImgCarousel;