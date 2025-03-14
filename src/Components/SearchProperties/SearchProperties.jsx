import React from 'react';

const selectsData = [
    {
        id: "location",
        name: "location",
        icon: "fa-solid fa-location-dot",
        options: [
            { value: null, label: "Location" }
        ]
    },
    {
        id: "propertyType",
        name: "propertyType",
        icon: "fa-solid fa-building",
        options: [
            { value: null, label: "Property Type" }
        ]
    },
    {
        id: "pricingRange",
        name: "pricingRange",
        icon: "fa-solid fa-money-bill-wave",
        options: [
            { value: null, label: "Pricing Range" }
        ]
    },
    {
        id: "propertySize",
        name: "propertySize",
        icon: "fa-solid fa-cube",
        options: [
            { value: null, label: "Property Size" }
        ]
    },
    {
        id: "buildYear",
        name: "buildYear",
        icon: "fa-solid fa-calendar",
        options: [
            { value: null, label: "Build Year" }
        ]
    }
];

function SearchProperties() {
    return (
        <div className='search-properties max-md:py-10 md:pb-10 md:-mt-10'>
            <div className='container'>
                <form>
                    {/* Search */}
                    <div className='search bg-grey-color-10 p-3 max-md:rounded-md max-md:mb-3 md:rounded-t-md md:w-[calc(100%-100px)] mx-auto'>
                        <div className='search-input-container relative'>
                            <input
                                required
                                type='text'
                                name='search-properties'
                                id='search-input-properties'
                                title='Search For A Property'
                                aria-label='Search For A Property'
                                placeholder='Search For A Property'
                                className='w-full py-4 px-3 rounded-md border border-grey-color-15 bg-grey-color-8'
                            />
                            <button
                                title=''
                                aria-label=''
                                className='py-2 px-4 rounded-md bg-purple-color-60 transition sm:hover:bg-white sm:hover:text-purple-color-60 font-medium absolute top-1/2 -translate-y-1/2 right-2'
                            >
                                <i className='fa-solid fa-search fa-fw'></i>
                                <span className='max-md:hidden ms-2'>Find Property</span>
                            </button>
                        </div>
                    </div>
                    {/* Selects */}
                    <div className='selects bg-grey-color-10 p-3 rounded-md flex items-center flex-wrap gap-3'>
                        {
                            selectsData.map((selectData, index) => <div className='relative flex-1 min-w-[200px] text-grey-color-60' key={index}>
                                {/* Icon Container */}
                                <div className='icon-container absolute left-3 top-1/2 -translate-y-1/2 pr-2 border-e border-e-grey-color-60'>
                                    <i className={`${selectData.icon} fa-fw`}></i>
                                </div>
                                {/* Select */}
                                <select
                                    {...selectData}
                                    className='w-full py-4 ps-12 rounded-md border border-grey-color-15 bg-grey-color-8 cursor-pointer font-medium'
                                >
                                    {
                                        selectData.options.map((option, index) => <option key={index} value={option.value}>{option.label}</option>)
                                    }
                                </select>
                            </div>)
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchProperties;