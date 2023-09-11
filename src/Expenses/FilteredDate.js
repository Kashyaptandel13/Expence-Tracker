const FilteredDate=(props)=>{

    const YearChangeHandler=(e)=>{
        props.onSelectDate(e.target.value)
    }

    return (
        <div>
            <select style={{marginLeft:'41rem', marginTop:'1rem'}} onChange={YearChangeHandler} value={props.selected}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>

            </select>
        </div>
    )

}

export default FilteredDate;