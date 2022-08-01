import { Property } from "../utils/types"
import { GiBathtub, GiBed } from "react-icons/gi"
import { TbDimensions } from "react-icons/tb"
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function PropertyList({
    searchResults,
}: {
    searchResults: Property[]
}) {
    const [cont] = useAutoAnimate<HTMLDivElement>()
    return (
        <div ref={cont} className="flex flex-wrap justify-around">
            {searchResults.map((property) => (
                <PropertyListItem property={property} />
            ))}
        </div>
    )
}

function PropertyListItem({ property }: { property: Property }) {
    return (
        <div className="w-[80vw] md:w-[45vw] lg:w-[30vw] m-4 bg-white rounded-lg shadow">
            <img src={property.img} loading={'lazy'} className=" w-full aspect-video rounded-t-lg" />
            <div className="p-4">
                <div>
                    <span className="text-2xl font-extrabold text-theme">{`₹${property.price} `}</span>
                    <span className="text-gray font-bold">/month</span>
                </div>
                <p className="font-bold text-xl">{property.name}</p>
                <p className="text-gray font-bold">{property.address}</p>
                <div className="flex items-center text-sm p-1 align-middle">
                    <GiBed className="text-theme m-1" />
                    <p className="m-1">{property.beds} beds</p>
                    <GiBathtub className="m-1 text-theme" />
                    <p className="m-1">{property.bathroom} Bathrooms</p>
                    <TbDimensions className="m-1 text-theme" />
                    <p className="m-1">
                        {`${property.dimension.height}x${property.dimension.width} m`}
                        <sup>2</sup>{" "}
                    </p>
                </div>
            </div>
        </div>
    )
}
