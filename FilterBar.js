import React from "react";
const filterBar = ({
    categories,company,onFilterChange})=>{
        return (
            <div>
                <select onChangeCapture={(e => onFilterChange('catehory',e.target.value))}>
                    {categories.map(category => (
                        <option> key={category} value =(category)>{category}
                        </option>

                    ))}
                </select>
                
                    onCharge={e=> onFilterChange('company',e.target.value)}>
                    {company.map(company =>(
                        <option key={company} value = {company}>

                        </option>
                    ))}
                    <input type="number" placeholder="Min Rating" onChange={e => onFilterChange('minRating', e.target.value)} />
            <input type="number" placeholder="Min Price" onChange={e => onFilterChange('minPrice', e.target.value)} />
            <input type="number" placeholder="Max Price" onChange={e => onFilterChange('maxPrice', e.target.value)} />
            <input type="checkbox" onChange={e => onFilterChange('availability', e.target.checked)} /> Available

             
              
                
            </div>
        )
    }
})