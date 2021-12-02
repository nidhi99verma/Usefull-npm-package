import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ReactDatepicker() {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText={'dd/mm/yyyy'}
                // minDate={new Date()}
                // maxDate={new Date()}
                filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
                isClearable
                showYearDropdown
                scrollableYearDropdown
            />
        </div>
    )
}
