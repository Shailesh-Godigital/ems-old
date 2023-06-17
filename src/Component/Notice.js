import React from 'react'

import DatePicker from "react-datepicker";

const Notice = () => {
    return (
        <div>
            <form>
                <div class="form-group w-25">
                    <label for="exampleFormControlSelect1">Class Tittle</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                {/* <div class="form-group w-25">
                    <label>Class Date & Time</label>
                    <DatePicker
                        showTimeSelect
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        timeClassName={handleColor}
                    />
                </div> */}
                <label> Host Video </label>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        style={{ lineHeight: 0, width: "14px" }}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                        Enable
                    </label>
                </div>
                <div class="form-check">
                    <input
                        class="form-check-input"
                        style={{ lineHeight: 0, width: "14px" }}
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                        checked
                    />
                    <label class="form-check-label" for="exampleRadios2">
                        Disable
                    </label>
                </div>
                <div class="form-group w-25">
                    <label for="exampleFormControlTextarea1">
                        Example textarea
                    </label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
            </form>
        </div>
    )
}

export default Notice
