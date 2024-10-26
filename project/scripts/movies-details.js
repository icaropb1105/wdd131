// Simulating a movie database
const movies = {
    "a1": {
        title: "Action Movie 1",
        releaseYear: "2022",
        cast: "John Doe, Jane Smith, Max Johnson, Lisa Brown, Tom White, Sarah Green, David Black, Emily Blue, Michael Grey, Olivia Red",
        rating: "⭐⭐⭐",
        description: "In this action-packed thriller, two unlikely heroes, an ex-cop and a skilled hacker, unite to dismantle a dangerous crime syndicate. As they navigate through intense car chases and explosive confrontations, they find themselves entangled in a web of corruption that tests their skills and trust. With every twist and turn, they must confront their pasts and learn to work together to survive. Along the way, they uncover secrets that could change the city forever, leading to a breathtaking showdown that will leave you on the edge of your seat.",
        poster: "images/action1.jpg"
    },
    "r1": {
        title: "Romance Movie 1",
        releaseYear: "2023",
        cast: "Emily Johnson, Michael Brown, Anna White, Jacob Black, Olivia Green, Ethan Grey, Mia Red, Daniel Blue, Sophia Yellow, James Purple",
        rating: "⭐⭐⭐⭐",
        description: "A love story that transcends time, as two souls destined to be together meet in a quaint little café. Their initial encounter sparks a journey filled with serendipitous moments and deep connections. As they navigate life's challenges, their relationship is tested by circumstances that seem insurmountable. The film beautifully portrays the idea that love can endure through hardships and misunderstandings. With rich character development and emotional depth, this romantic tale will make you believe in the power of destiny.",
        poster: "images/romance-new1.jpg"
    },
    "a2": {
        title: "Action Movie 2",
        releaseYear: "2021",
        cast: "Chris Evans, Scarlett Johansson, Mark White, Sarah Brown, Tom Green, Jessica Grey, Kevin Red, Laura Blue, Ryan Yellow, Megan Black",
        rating: "⭐⭐⭐⭐",
        description: "In this gripping tale of survival, a resourceful thief finds herself pitted against a ruthless crime lord after a heist goes away. As she attempts to escape capture, she uncovers a conspiracy that could threaten her life and those she loves. Throughout her journey, she is forced to rely on her wits and instincts, while also discovering the power of trust and friendship. This film combines breathtaking action sequences with a compelling narrative that explores themes of resilience and redemption. Prepare for a heart-pounding adventure that keeps you guessing until the very end.",
        poster: "images/action2.jpg"
    },
    "d3": {
        title: "Drama Movie 3",
        releaseYear: "2022",
        cast: "Emma Stone, Ryan Gosling, Chloe White, Oliver Brown, Lily Green, Noah Grey, Ava Red, Lucas Blue, Sophia Yellow, James Black",
        rating: "⭐⭐⭐⭐⭐",
        description: "A poignant story of hope and perseverance follows a young artist as she battles her inner demons while pursuing her dreams. Set against the backdrop of a vibrant city, she encounters various characters who challenge her beliefs and inspire her journey. Amidst the struggles of love and ambition, she learns that true strength comes from vulnerability and the ability to face one’s fears. This touching drama emphasizes the importance of self-discovery and the transformative power of art in healing. With a captivating storyline and rich visuals, it is a must-watch for anyone seeking inspiration.",
        poster: "images/drama3.webp"
    },
    "d2": {
        title: "Drama Movie 2",
        releaseYear: "2020",
        cast: "Natalie Portman, Joaquin Phoenix, Bella White, Carter Black, Ella Green, Henry Brown, Grace Yellow, Leo Grey, Sophie Blue, Daniel Red",
        rating: "⭐⭐⭐⭐⭐",
        description: "This emotionally charged drama examines the fragility of relationships when a couple faces an unexpected tragedy. As they navigate through their grief, the film delves deep into the complexities of love, loss, and healing. The characters must confront their feelings, rediscover their connection, and learn to support each other during their darkest hours. Through powerful performances and heartfelt moments, this poignant narrative illustrates that love can endure and blossom even in the face of adversity. It is a beautifully crafted exploration of the human spirit's resilience.",
        poster: "images/drama2.webp"
    },
    "r2": {
        title: "Romance Movie 2",
        releaseYear: "2023",
        cast: "Taylor Swift, Tom Hiddleston, Ava White, Leo Black, Mia Green, Noah Grey, Zoe Red, Oliver Blue, Isabella Yellow, Jacob Brown",
        rating: "⭐⭐⭐⭐",
        description: "This romantic tale filled with twists follows a couple whose paths intertwine at pivotal moments in their lives. Through a series of unexpected events, they confront their pasts and explore the idea of fate versus free will. As they navigate misunderstandings and heartbreak, they learn that true love often requires patience, understanding, and a willingness to grow together. With rich storytelling and emotional depth, this film captures the beauty of love's journey, reminding us that the road to happiness is often winding and filled with challenges.",
        poster: "images/romance-new2.jpg"
    },
    "a3": {
        title: "Action Movie 3",
        releaseYear: "2022",
        cast: "Actor M, Actor N, Emma White, Max Brown, Grace Green, Ethan Red, Lily Blue, James Yellow, Sophie Grey, Jacob Black",
        rating: "⭐⭐⭐⭐⭐",
        description: "In this explosive sequel, high-octane action and adventure await as our hero races against time to stop a global threat. Along the way, he faces fierce enemies and uncovers shocking truths about his past that force him to confront his deepest fears. The stakes are higher than ever as he navigates through breathtaking stunts and an intricate plot that twists and turns at every corner. With a powerful narrative and stunning visuals, this film promises to be a thrill ride from start to finish, captivating audiences with its relentless pace and heart-stopping moments.",
        poster: "images/action3.jpg"
    },
    "c1": {
        title: "Comedy Movie 1",
        releaseYear: "2021",
        cast: "Actor O, Actor P, Jake White, Mia Brown, Lucas Green, Sarah Grey, Noah Blue, Olivia Red, Ethan Yellow, Ava Black",
        rating: "⭐⭐⭐",
        description: "This hilarious journey follows a group of friends as they embark on a road trip filled with unexpected detours and comedic mishaps. From getting lost in a quirky small town to encountering eccentric locals, their adventures are laugh-out-loud funny and heartwarming. As they navigate through various challenges, they learn the true meaning of friendship and the importance of living in the moment. With a perfect blend of humor and heart, this feel-good comedy is sure to leave you in stitches while reminding you of the value of companionship.",
        poster: "images/comedy1.webp"
    },
    "c2": {
        title: "Comedy Movie 2",
        releaseYear: "2021",
        cast: "Actor S, Actor T, Bella White, Carter Brown, Ella Green, Henry Red, Sophie Yellow, Jacob Grey, Zoe Blue, Leo Black",
        rating: "⭐⭐",
        description: "In this comedy of errors, a group of strangers finds themselves in the wrong place at the wrong time. As they try to navigate the chaos that ensues, their interactions lead to a series of misunderstandings and laughable situations. Each character brings their unique quirks, adding to the hilarity and absurdity of the circumstances. This film beautifully illustrates how laughter can bridge differences and create connections, reminding us to embrace the unpredictable moments in life. It's a delightful and entertaining romp that promises to keep you chuckling.",
        poster: "images/comedy2.webp"
    },
    "r3": {
        title: "Romance Movie 3",
        releaseYear: "2023",
        cast: "Actor W, Actor X, Ella White, Oliver Brown, Zoe Green, Jacob Red, Mia Yellow, Leo Blue, Sophia Grey, Ethan Black",
        rating: "⭐⭐⭐⭐⭐",
        description: "In this touching story of love and destiny, two childhood friends realize their feelings for each other as they navigate the complexities of adulthood. Through life's ups and downs, they learn that true love often requires patience and courage. The film beautifully captures the essence of friendship evolving into romance, showcasing the challenges and triumphs that come with it. With rich character development and emotional depth, this narrative emphasizes that love can blossom in the most unexpected ways and that sometimes, the person you’ve been searching for has been by your side all along.",
        poster: "images/romance-new3.jpg"
    },
    "d1": {
        title: "Drama Movie 1",
        releaseYear: "2023",
        cast: "Jack White, Sarah Green, Andrew Brown, Emma Grey, Daniel Red, Lucy Yellow, Matthew Blue, Hannah Black, Olivia Purple, Noah Orange",
        rating: "⭐⭐⭐⭐",
        description: "Set in a small town, this gripping drama follows the life of a dedicated teacher who sacrifices everything to inspire her students. Faced with a crumbling education system and personal challenges, she battles against the odds to create a safe haven for her students. As she forms deep connections with them, she discovers the power of hope and resilience. The film poignantly portrays the struggles of those who fight for change, and the transformative impact of mentorship. With compelling performances and a heartfelt narrative, it is a powerful reminder of the influence one person can have on the lives of many.",
        poster: "images/drama1.webp"
    },
    "c3": {
    title: "Comedy Movie 3",
    releaseYear: "2021",
    cast: "James Wilson, Emma Parker, Olivia Scott, Liam Brown, Ava Johnson, Noah White, Sophia Green, Lucas Red, Mia Black, Ethan Blue",
    rating: "4.2",
    description: "In this uproarious comedy, a group of misfit friends decides to enter a local talent show with a ridiculous act that no one takes seriously. As they navigate through their rehearsals, chaos ensues, leading to a series of laugh-out-loud moments that test their friendship and creativity. Each character brings their own quirky personality, resulting in unexpected challenges that push them to their limits. With their camaraderie at stake, they must learn to embrace their differences and support one another. This film is a heartfelt reminder that sometimes, the most memorable moments come from stepping outside of our comfort zones and taking risks for the sake of friendship.",
    poster: "images/comedy3.webp"
}

};

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

if (movies[movieId]) {
    const movie = movies[movieId];
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('release-year').textContent = movie.releaseYear;
    document.getElementById('cast').textContent = movie.cast;
    document.getElementById('rating').textContent = movie.rating;
    document.getElementById('description').textContent = movie.description;
    document.getElementById('movie-poster').src = movie.poster;
} else {
    document.querySelector('.movie-info').textContent = "Movie not found. To see the movies info and reviews, click on any movie on the 'Highlights' section in the home page.";
}


// Simulated user reviews
const userReviews = [
    { reviewer: "Alice", comment: "An absolute masterpiece! Highly recommend.", rating: "⭐⭐⭐⭐⭐" },
    { reviewer: "Bob", comment: "It was okay, but I expected more action.", rating: "⭐⭐⭐" },
    { reviewer: "Charlie", comment: "A delightful experience from start to finish!", rating: "⭐⭐⭐⭐" },
    { reviewer: "Diana", comment: "Not my cup of tea, but the cinematography was stunning.", rating: "⭐⭐⭐⭐" },
    { reviewer: "Ethan", comment: "Great character development and plot twists!", rating: "⭐⭐⭐⭐⭐" },
    { reviewer: "Fiona", comment: "I felt bored at times, but some parts were exciting.", rating: "⭐⭐⭐" },
    { reviewer: "George", comment: "This movie changed my perspective on life.", rating: "⭐⭐⭐⭐⭐" },
    { reviewer: "Hannah", comment: "Average storyline, but great performances.", rating: "⭐⭐⭐" },
    { reviewer: "Ian", comment: "A perfect blend of comedy and drama!", rating: "⭐⭐⭐⭐" },
    { reviewer: "Julia", comment: "I didn't like the ending, it felt rushed.", rating: "⭐⭐" },
];

// Function to display random reviews
function displayRandomReviews() {
    const reviewsContainer = document.querySelector('.user-reviews');
    reviewsContainer.innerHTML = '<h2>Recent User Reviews</h2>'; // Reset the reviews section to include the header only
    const numberOfReviewsToShow = 3; // Number of reviews to display
    const selectedReviews = [];

    while (selectedReviews.length < numberOfReviewsToShow) {
        const randomIndex = Math.floor(Math.random() * userReviews.length);
        if (!selectedReviews.includes(userReviews[randomIndex])) {
            selectedReviews.push(userReviews[randomIndex]);
        }
    }

    selectedReviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.innerHTML = `
            <p><strong>${review.reviewer}:</strong> ${review.comment}</p>
            <p class="rating">${review.rating}</p>
        `;
        reviewsContainer.appendChild(reviewDiv);
    });
}

// Call the function when the page loads
window.onload = displayRandomReviews;
