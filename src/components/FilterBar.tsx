import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useEffect, useState } from "react"
import locations from "../data/locations.json"
import propertyTypes from "../data/propertyTypes.json"
import { filterProperties } from "../utils/helper"
import { filter, Property } from "../utils/types"

export default function FilterBar({ setSearchResults }: FilterBarProps) {
    const [filter, setFilter] = useState<filter>({
        location: locations[0],
        propertyType: propertyTypes[0],
        moveInDate: new Date(),
        price: {
            low: 0,
            high: 100000,
        },
    })
    function setLocation(location: string) {
        setFilter((initial) => ({ ...initial, location }))
    }
    function setPropertyType(propertyType: string) {
        setFilter((initial) => ({ ...initial, propertyType }))
    }
    function setSelectInDate(moveInDate: Date) {
        setFilter((initial) => ({ ...initial, moveInDate }))
    }
    function setPrice(low: number, high: number) {
        setFilter((initial) => ({ ...initial, price: { low, high } }))
    }
    useEffect(() => {
        setSearchResults(filterProperties(filter))
    }, [])

    return (
        <div className=" flex-col md:flex-row flex items-center bg-white max-w-[1100px] mx-auto rounded-xl ">
            <DropDownSelector
                title="Locations"
                options={locations}
                setter={setLocation}
                currentlySelected={filter.location}
            />
            <DropDownSelector
                title="Property Type"
                options={propertyTypes}
                setter={setPropertyType}
                currentlySelected={filter.propertyType}
            />
            <SelectInDate
                setter={setSelectInDate}
                currentlySelected={filter.moveInDate}
            />
            <PriceSelector setter={setPrice} currentlySelected={filter.price} />
            <button
                className="px-8 py-4 text-xl bg-theme text-white rounded font-extrabold"
                onClick={() => {
                    setSearchResults(filterProperties(filter))
                }}
            >
                Search
            </button>
        </div>
    )
}

function DropDownSelector({
    title,
    options,
    currentlySelected,
    setter,
}: DropDownSelectorProps) {
    const [optionsVisible, setOptionsVisible] = useState(false)

    const [cont] = useAutoAnimate<HTMLDivElement>()
    return (
        <div className="m-4 border-r-2 border-gray  w-[20ch] relative select-none">
            <div
                onClick={() => {
                    setOptionsVisible(!optionsVisible)
                }}
                className="p-2 px-4 bg-white  m-2 rounded"
            >
                <p className="text-sm text-gray font-bold">{title}</p>
                <p className="font-bold text-xl">{currentlySelected}</p>
            </div>
            <div
                className="rounded-lg flex flex-col bg-gray-100 absolute left-0 right-0"
                style={{ visibility: optionsVisible ? "visible" : "hidden" }}
                ref={cont}
            >
                {options.map((option) => (
                    <button
                        onClick={() => {
                            setter(option)
                            setOptionsVisible(false)
                        }}
                        className="bg-l-gray z-10 p-2 "
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}

function PriceSelector({ currentlySelected, setter }: any) {
    const [optionsVisible, setOptionsVisible] = useState(false)
    const ranges = Array.from({ length: 10 }, (_, i) => {
        return {
            low: i * 10000,
            high: (i + 1) * 10000,
        }
    })
    return (
        <div className="m-4 border-r-2 border-gray w-[25ch] relative select-none">
            <div
                onClick={() => {
                    setOptionsVisible(!optionsVisible)
                }}
                className="p-2 m-2 rounded text-center"
            >
                <p className="text-gray text-sm">Prices</p>
                <p className="font-bold text-xl">{`₹${currentlySelected.low} - ₹${currentlySelected.high}`}</p>
            </div>
            {optionsVisible && (
                <div
                    className={`flex flex-col bg-gray-100 rounded absolute left-0 right-0`}
                >
                    {ranges.map(({ low, high }) => (
                        <button
                            onClick={() => {
                                setter(low, high)
                                setOptionsVisible(false)
                            }}
                            className="bg-l-gray z-10 p-1 "
                        >
                            {`₹${low} - ₹${high}`}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

function SelectInDate({ setter, currentlySelected }: SelectInDate) {
    return (
        <div className="m-4 border-r-2 border-gray text-sm p-4  rounded text-center">
            <p className="text-gray font-bold">Move In Date</p>
            <input
                required
                className="font-bold text-xl outline-none h-full"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                onChange={({ currentTarget }) => {
                    setter(currentTarget.valueAsDate as Date)
                }}
                value={currentlySelected.toISOString().split("T")[0]}
            />
        </div>
    )
}

interface FilterBarProps {
    setSearchResults: React.Dispatch<React.SetStateAction<Property[]>>
}

interface DropDownSelectorProps {
    title: string
    options: string[]
    setter: (a: string) => void
    currentlySelected: string
}

interface SelectInDate {
    setter: (moveInDate: Date) => void
    currentlySelected: Date
}

interface PriceRangeSelectorProps {
    setter: (low: number, high: number) => void
    price: { low: number; high: number }
}
