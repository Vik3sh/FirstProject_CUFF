function rate(stars, category) {
    // Logic to handle the rating, e.g., sending it to a server
    console.log(`User rated ${category} as ${stars} stars`);
    
    // Update the UI to show selected stars in a different color
    const categoryElement = document.getElementById(category);
    const starsArray = categoryElement.querySelectorAll('.star');
    starsArray.forEach((star, index) => {
        if (index < stars) {
            star.style.color = 'gold';
        } else {
            star.style.color = '#ccc';
        }
    });
    
    // Add logic to display and manage reviews for each category
    const reviewElement = categoryElement.querySelector('.reviews');
    switch (category) {
        case 'desserts':
            reviewElement.innerHTML = getDessertReview(stars);
            break;
        case 'sweets':
            reviewElement.innerHTML = getSweetsReview(stars);
            break;
        // Add more cases for other categories if needed
        default:
            // Handle default case
            break;
    }
}

// Function to get dessert review based on the number of stars
function getDessertReview(stars) {
    let review = '';
    switch (stars) {
        case 1:
            review = 'The cakes were average';
            break;
        case 2:
            review = 'The cakes were good';
            break;
        case 3:
            review = 'The cakes were excellent';
            break;
        case 4:
            review = 'The cakes were outstanding';
            break;
        case 5:
            review = 'The cakes were phenomenal';
            break;
        default:
            review = '';
            break;
    }
    return review;
}

// Function to get sweets review based on the number of stars
function getSweetsReview(stars) {
    let review = '';
    switch (stars) {
        case 1:
            review = 'Jalebies are average';
            break;
        case 2:
            review = 'Jalebies are good';
            break;
        case 3:
            review = 'Jalebies are excellent';
            break;
        case 4:
            review = 'Jalebies are outstanding';
            break;
        case 5:
            review = 'Jalebies are phenomenal';
            break;
        default:
            review = '';
            break;
    }
    return review;
}
