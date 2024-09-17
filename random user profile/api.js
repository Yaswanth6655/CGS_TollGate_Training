
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            document.getElementById('profilePic').src = user.picture.large;

         
            const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
            document.getElementById('nameTitle').innerText = fullName;

            document.getElementById('email').innerText = user.email;
            document.getElementById('dob').innerText = new Date(user.dob.date).toLocaleDateString();
            document.getElementById('gender').innerText = user.gender;
            document.getElementById('phone').innerText = user.phone;

            document.getElementById('street').innerText = `${user.location.street.number} ${user.location.street.name}`;
            document.getElementById('city').innerText = user.location.city;
            document.getElementById('state').innerText = user.location.state;
            document.getElementById('country').innerText = user.location.country;
            document.getElementById('postcode').innerText = user.location.postcode;
        })
        .catch(error => console.error('Error fetching data:', error));
}


document.getElementById('nextButton').addEventListener('click', fetchRandomUser);


window.onload = fetchRandomUser;
