import React from 'react'

function Image() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg" target="_blank">
                                <img src="./img/Aboutus/about_us.jpg" alt="Lights" />

                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/nature.jpg" target="_blank">
                                <img src="./img/Aboutus/about_us.jpg" alt="Nature" />

                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/fjords.jpg" target="_blank">
                                <img src="./img/Aboutus/about_us.jpg" alt="Fjords" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image;
