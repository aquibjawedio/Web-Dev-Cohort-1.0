const submitReview = document.querySelector('.submit-review');


submitReview.addEventListener('click', () => {

    let ratingValue = document.querySelector('.rating-select').value;
    let username = document.querySelector('.username').value;
    let userExperience = document.querySelector('.user-experience').value;
    let stars = '*'.repeat(ratingValue);
    


    const singleReviewCard = document.createElement('div');;
    singleReviewCard.setAttribute('class', 'single-review-card');


    const userDetail = document.createElement('div');
    userDetail.setAttribute('class', 'single-user-detail');


    const userName = document.createElement('p');
    userName.setAttribute('class', 'user-name');
    userName.textContent = username;


    const userRating = document.createElement('p');
    userRating.setAttribute('class', 'user-rating');
    userRating.textContent = stars;


    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete-review');
    deleteButton.textContent = 'Delete';

    // Deleting reviews
    deleteButton.addEventListener('click', () => {
        singleReviewCard.remove();
    })


    userDetail.appendChild(userName);
    userDetail.appendChild(userRating);
    userDetail.appendChild(deleteButton);

  
    const userReview = document.createElement('p');
    userReview.setAttribute('class', 'user-review-written');
    userReview.textContent = userExperience;

    // Append the user detail and review to the review card
    singleReviewCard.appendChild(userDetail);
    singleReviewCard.appendChild(userReview);

    document.querySelector('.user-output-section').appendChild(singleReviewCard);




    document.querySelector('.rating-select').value = 1;
    document.querySelector('.username').value = "";
    document.querySelector('.user-experience').value = "";
})