const names = ["Lakshman", "Ganesh", "Aryan", "Zunesh"]
const propertyType = ["Appartment", "House"]
const AdressPrefix = ["Lajpat", "Mayur", "Pawan"]
const AdressSuffix = ["Nagar", "Garden", "Vihar", "Puri"]
const cities = ["Delhi", "Kolkata", "Mumbai"]
const aimg = [
    "https://teja12.kuikr.com/is/a/c/880x425/gallery_images/original/54d35b03c29f5.jpg",
    "https://images.adsttc.com/media/images/61f9/0c3e/6527/d901/6457/44af/medium_jpg/agora-23-hr.jpg?1643711666",
    "https://mediacdn.99acres.com/media1/18367/14/367354646M-1655875943673.jpg",
    "https://www.manglamradiance.com/blog/wp-content/uploads/2020/09/slider10.jpg",
    "https://mediacdn.99acres.com/media1/17566/1/351321116M-1648123176165.jpg",
]
const himg = [
    "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg",
    "https://www.businessinsider.in/photo/69285646/difference-between-home-and-house.jpg?imgsize=1446462",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tiny_house%2C_Portland.jpg/1200px-Tiny_house%2C_Portland.jpg",
    "https://www.mydomaine.com/thmb/sEVlAsVoifoG-ZLxsnWk0q0ZVrQ=/3409x3409/filters:fill(auto,1)/binary-4--583f06853df78c6f6a9e0b7a.jpeg",
]

console.log(JSON.stringify(Array.from({ length: 100 }, () => randomPropoperty())));

function randomElement(x) {
    return x[parseInt(x.length * Math.random())]
}

function randomPropoperty() {
    const p = randomElement(propertyType)
    return {
        name: `${randomElement(names)} ${p === "Appartment" ? p : randomElement(["Villa", "Niwas", "Farm House"])
            }`,
        city: randomElement(cities),
        beds: randomElement([2, 3, 4]),
        bathroom: randomElement([1, 2]),
        price: (parseInt(Math.random() * 20) + 1) * 5000,
        type: p,
        dimension: {
            height: randomElement([5, 7, 11, 13, 20]),
            width: randomElement([5, 7, 11, 13, 20]),
        },
        address: randomElement(AdressPrefix) + " " + randomElement(AdressSuffix),
        img: p === "House" ? randomElement(himg) : randomElement(aimg),
    }
}