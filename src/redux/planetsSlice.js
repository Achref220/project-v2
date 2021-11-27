import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: 1, title: "Mercury", desc: "Mercury is the closest planet to our Sun, at just 58 million km (36 million miles) or 0.39 Astronomical Unit (AU) out. But despite its reputation for being sun-baked and molten, it is not the hottest planet in our Solar System (scroll down to find out who that dubious honor goes go!)"  ,image: "https://wallpapercave.com/wp/wp4047228.png"},
    {id: 2, title: "Venus", desc: "Venus is the second closest planet to our Sun, orbiting at an average distance of 108 million km (67 million miles) or 0.72 AU. Venus is often called Earth’s “sister planet,” as it is just a little smaller than Earth. Venus is 81.5% as massive as Earth, and has 90% of its surface area and 86.6% of its volume. The surface gravity, which is 8.87 m/s², is equivalent to 0.904 g – roughly 90% of the Earth standard.", image: "https://i0.wp.com/s2.best-wallpaper.net/wallpaper/1920x1200/1107/Red-Planet-and-Space_1920x1200.jpg"},
    {id: 3, title: "earth", desc: "Our home, and the only planet in our Solar System (that we know of) that actively supports life. Our planet is the third from the our Sun, orbiting it at an average distance of 150 million km (93 million miles) from the Sun, or one AU. Given the fact that Earth is where we originated, and has all the necessary prerequisites for supporting life, it should come as no surprise that it is the metric on which all others planets are judged.", image: "https://images.hdqwalls.com/wallpapers/earth-view-from-space-4k-23.jpg"},
    {id: 4, title: "mars", desc: "Mars is the fourth planet from the sun at a distance of about 228 million km (142 million miles) or 1.52 AU. It is also known as “the Red Planet” because of its reddish hue, which is due to the prevalence of iron oxide on its surface. In many ways, Mars is similar to Earth, which can be seen from its similar rotational period and tilt, which in turn produce seasonal cycles that are comparable to our own.", image: "https://wallpaperaccess.com/full/538127.jpg"},
    {id: 5, title: "Jupiter", desc: "Jupiter is the fifth planet from the Sun, at a distance of about 778 million km (484 million miles) or 5.2 AU. Jupiter is also the most massive planet in our Solar System, being 317 times the mass of Earth, and two and half times larger than all the other planets combined. It is a gas giant, meaning that it is primarily composed of hydrogen and helium, with swirling clouds and other trace gases.", image: "https://images.hdqwalls.com/download/jupiter-4k-n5-2880x1800.jpg"},
    {id: 6, title: "Saturn", desc: "Saturn is the sixth planet from the Sun at a distance of about 1.4 billion km (886 million miles) or 9.5 AU. Like Jupiter, it is a gas giant, with layers of gaseous material surrounding a solid core. Saturn is most famous and most easily recognized for its spectacular ring system, which is made of seven rings with several gaps and divisions between them.", image: "https://zeeoii.com/wp-content/uploads/2020/07/Space-Wallpaper-4K-UHD-3840x2160-73.jpg"},
    {id: 7, title: "Uranus", desc: "Uranus is the seventh planet from the sun at a distance of about 2.9 billion km (1.8 billion miles) or 19.19 AU. Though it is classified as a “gas giant”, it is often referred to as an “ice giant” as well, owing to the presence of ammonia, methane, water and hydrocarbons in ice form. The presence of methane ice is also what gives it its bluish appearance.", image: "https://wallpaperaccess.com/full/415156.jpg"},
    {id: 8, title: "Neptune", desc: "Neptune is the eighth and farthest planet from the Sun, at a distance of about 4.5 billion km (2.8 billion miles) or 30.07 AU. Like Jupiter, Saturn and Uranus, it is technically a gas giant, though it is more properly classified as an “ice giant” with Uranus.", image: "https://wallpaperaccess.com/full/1661614.jpg"},
    {id: 9, title: "pluto", desc: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930, it was declared to be the ninth planet from the Sun", image: "https://c4.wallpaperflare.com/wallpaper/452/774/505/stars-planet-space-pluto-art-hd-wallpaper-preview.jpg"},
];

const planetsSlice = createSlice({
    name: 'planets',
    initialState,
});




export default planetsSlice.reducer;