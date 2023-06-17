import React from 'react'


function StudentZone() {
    return (
        <div>
            <div className="shadow-inner">
                <div className="row">

                    <div className="card  col-sm">
                        <div className="card-body ">
                            <i className='fa fa-address-book'></i>
                            <a href="#" className="stretched-link">
                                Student Login
                            </a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <div className="card-body">
                            <i className='fa fa-address-card'></i>
                            <a href="#" className="stretched-link">
                                Student Verification
                            </a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <div className="card-body">
                            <i className="fa fa-map-pin" aria-hidden="true"></i>
                            <a href="#" className="stretched-link">
                                Certificate Verification
                            </a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <div className="card-body">
                            <i className="fa fa-map-pin" aria-hidden="true"></i>
                            <a href="#" className="stretched-link">
                                Online Ragistration
                            </a>
                        </div>
                    </div>
                    <div className="card col-sm">
                        <div className="card-body">
                            <i className="fa fa-map-pin" aria-hidden="true"></i>
                            <a href="#" className="stretched-link">
                                Result Verification
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentZone
