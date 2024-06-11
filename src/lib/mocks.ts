export function getRandomProducts(products:Iitem[], count:number, currentId: number): Iitem[] {
    const fproducts = products.filter((_, id) => id != currentId)
    let shuffledArray = fproducts.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, count);
}



export enum Size {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large",
    EXTRA_LARGE = "Extra Large",
    TWOXLARGE = "2X-Large",
    THREEXLARGE = "3X-Large",
}

interface Iproduct {
    image: string
    name: string
    price: number
}

export type Iitem = Iproduct & ({
    type?: "cloth",
    sizes?: Size[]
} | {
    type?: "music",
    tracklist?: string[]
}
)


export const products: Iitem[] = [
    {
        name: "More Than This - CD", image: "/more.webp", price: 10, type: "music", tracklist: ["Lord And Friend",
            "Be Still And Know", "Too Late To Lose", "Oh The Blood Of Jesus", "Holy Forever", "Worthy", "That’s My King", "More Than This Feat.Todd Dulaney", "Sanctuary", " Refiner", " Come Jesus Come", " Is He Worthy?",
            "In A Little While"]
    },
    { name: "Lord You are Holy Tee", image: "/CeCeYouAreHoly.webp", price: 30, type: "cloth", sizes: Object.values(Size) },
    { name: "That's My King Tee", image: "/CeCeThatsMyKing.webp", price: 30, type: "cloth", sizes: Object.values(Size) },
    { name: "Move The Immovable Tee", image: "/CeCeMovetheImmovable.webp", price: 30, type: "cloth", sizes: Object.values(Size) },
    { name: "Goodness Of God Tee", image: "/CeCeGoodnessofGodfe.webp", price: 30, type: "cloth", sizes: Object.values(Size) },
    { name: "Worthy Tee", image: "/CeCeWorthyfeb.webp", price: 30, type: "cloth", sizes: Object.values(Size) },
    { name: "Church Grl Tee", image: "/CeCeChurchGirlGraffitioct.webp", price: 30, type: "cloth", sizes: Object.values(Size) },
    { name: "Church Grl Coffee Tumbler", image: "/cup1.webp", price: 15 },
    { name: "Believe For It Tote", image: "/tote.webp", price: 20 },
    { name: "Believe For It CD", image: "/JewelCaseCover_DiscMockupBFI.webp", price: 30, type: "music", tracklist: ["Fire - Live", "Never Lost - Live", "Believe For It - Live", "King of Glory - Live", "Worthy of It All - Live", "Hunger - Live", "Shepherd - Live", "Alabaster Box - Live", "Jesus You’re Beautiful - Live", " I Have A Savior - Live", " Goodness of God - Live", " No Greater - Live"] },
]