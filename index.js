let movies = [
    {
        name: "Loki",
        desc: "After stealing the Tesseract during the events of Avengers: Endgame (2019), an alternate version of Loki is brought to the mysterious Time Variance Authority (TVA), a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a 'time variant', or help fix the timeline and stop a greater threat. Loki ends up trapped in his own crime thriller, traveling through time.",
        image: "./images/slider 1.PNG"
    },
    {
        name: "The falcon and the winter soldier",
        desc: "Six months after being handed the mantle of Captain America at the end of Avengers: Endgame (2019), Sam Wilson teams up with Bucky Barnes on a global mission to stop an anti-patriotism group, the Flag Smashers, who are enhanced with a recreation of the Super Soldier Serum and believe the world was better during the Blip.",
        image: "./images/slider 2.PNG"
    },
    {
        name: "Wanda Vision",
        desc: "Three weeks after the events of Avengers: Endgame (2019),Wanda Maximoff and Vision are living an idyllic suburban life in the town of Westview, New Jersey, trying to conceal their true natures. As their surroundings begin to move through different decades and they encounter various television tropes, the couple suspects that things are not as they seem.",
        image: "./images/slider 3.PNG"
    },
    {
        name: "Raya and the Last Dragon",
        desc: "In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon. \nFive long centuries after the selfless sacrifice of the magical dragons, the once-peaceful land of Kumandra, where humans lived harmoniously alongside the mystical creatures, is in disarray, divided into five nations. With warring factions, distrust, and the unstoppable menace of the Druun wreaking havoc on Kumandra, Raya, the sword-wielding Princess of Heart and fearless Guardian of the Dragon Gem, embarks on a peril-laden quest to track down a benevolent mythical being that can heal the land. Will Raya ever find mighty Sisu, the last dragon?",
        image: "./images/slider 4.PNG"
    },
    {
        name: "Luka",
        desc: "Young Luca and his best friend, Alberto, summon up the courage to visit the picturesque fishing village of Portorosso. However, the boys share and hide a great secret: they are not ordinary children but harmless sea monsters who live underwater, eager to find out what lies above the sea's surface. Before long, adventure after adventure and experience after experience, the two wide-eyed explorers will discover the true meaning of freedom, the importance of family, and the catalytic power of acceptance.",
        image: "./images/slider 5.PNG"
    }
];

const infinitec = document.querySelector('.infinite');
let sliders = [];
let slideindex = 0;

const CreateSlide = () => {
    if(slideindex >= movies.length){
        slideindex = 0;
    }

    // create dom elements
    let slide = document.createElement('div');
    let imagelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imagelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imagelement);
    infinitec.appendChild(slide);
    

    // setting up images
    imagelement.src=movies[slideindex].image;
    slideindex ++;

    //setting element classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-description';

    sliders.push(slide);

    if (sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
        }px)`;
    }
}

for (let i = 0 ; i < 3 ; i ++){
    CreateSlide(i);
}

setInterval(() => {
    CreateSlide();
},3000);

//video card animation
const videocards = [...document.querySelectorAll(".video-card")];
let video;
videocards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        video = item.children[1];
        video.pause();
    });
});


//card sliders
let cardcontainers = [...document.querySelectorAll('.card-container')]
let prebtns = [...document.querySelectorAll('.pre-btn')]
let nxtbtns = [...document.querySelectorAll('.nxt-btn')]

cardcontainers.forEach((item, i) => {
    let containerdimension = item.getBoundingClientRect();
    let containerwidth = containerdimension.width;

    nxtbtns[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth -200;
    })

    prebtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth +200;
    })
})