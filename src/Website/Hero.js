import Carousel from 'react-bootstrap/Carousel';
function Hero() {
    return (
        <div>
            <Carousel variant="dark" className="container1">
                <Carousel.Item>
                    <img className="d-block w-30" src="../img/geniusedusoft-banner-1.png" alt="First slide" />
                    <Carousel.Caption>
                        <h2 className="animate__animated animate__fadeInDown">Multi-Country,<br /><span>Multi-Lingual, Multi-Currency</span><br />Supported Next Generation</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-30" src="../img/geniusedusoft-banner-4.png" alt="Second slide" />
                    <Carousel.Caption>
                        <h2 className="animate__animated animate__fadeInDown">Cloud Based<br /><span>Software and Mobile Application</span><br />to Manage all Academic needs</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-30" src="../img/geniusedusoft-banner-3.png" alt="Third slide" />
                    <Carousel.Caption>
                        <h2 className="animate__animated animate__fadeInDown">The Next Generation<br /><span>Cloud ERP for School, College,</span><br />Institute and University Management</h2>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default Hero;