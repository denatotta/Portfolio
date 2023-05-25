document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.getElementById('profile-image');
    const images = ['dina.jfif', 't1.jfif', 't2.jfif', 't3.jfif']; // Add the filenames of the other images here
    let currentIndex = 0;

    function changeImage() {
        profileImage.src = `images/${images[currentIndex]}`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
});
