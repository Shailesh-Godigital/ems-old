import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import {
    FaEdit
} from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ZoomClasses = () => {
    return (
        <div>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <button type="button" class="btn btn-secondary px-md-5">
                        Copy
                    </button>
                    <button type="button" class="btn btn-secondary px-md-5">
                        CSV
                    </button>
                    <button type="button" class="btn btn-secondary px-md-5">
                        Excel
                    </button>
                    <button type="button" class="btn btn-secondary px-md-5">
                        PDF
                    </button>
                    <button type="button" class="btn btn-secondary px-md-5">
                        Print
                    </button>
                    <div className="float-end mt-3 w-25">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                </div>

                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr>
                            <th scope="col">Sl No.</th>
                            <th scope="col">Topic</th>
                            <th scope="col">CLass Date</th>
                            <th scope="col">Join URL</th>
                            <th scope="col">Passcode</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <p class="fw-bold mb-1">01.</p>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">Demo</p>
                            </td>
                            <td>
                                <span class="badge badge-success rounded-pill d-inline">
                                    today
                                </span>
                            </td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>
                                <FaEdit />
                                <MdDeleteOutline />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <p class="fw-bold mb-1">01.</p>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">Demo</p>
                            </td>
                            <td>
                                <span class="badge badge-success rounded-pill d-inline">
                                    today
                                </span>
                            </td>
                            <td>DEMO</td>
                            <td>DEMO</td>
                            <td>
                                <FaEdit />
                                <MdDeleteOutline />
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>

                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default ZoomClasses
