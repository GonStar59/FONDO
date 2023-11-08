const imageContainer = document.getElementById("image-container");
const imageElement = document.getElementById("image");

function changeImage() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Define your sunrise and sunset hours
    const sunriseStartHour = 6;
    const sunriseEndHour = 7;
    const sunriseEndMinute = 30;
    const sunsetStartHour = 18;
    const sunsetEndHour = 19;
    const sunsetEndMinute = 30;

    let imageSrc = '';

    if (
        (currentHour === sunriseStartHour && currentMinute >= 0) ||
        (currentHour === sunriseEndHour && currentMinute <= sunriseEndMinute) ||
        (currentHour > sunriseStartHour && currentHour < sunriseEndHour)
    ) {
        // Evening_Clear (MP4 video for sunrise)
        imageSrc = "images/Evening_Clear.mp4";
    } else if (
        (currentHour === sunsetStartHour && currentMinute >= 0) ||
        (currentHour === sunsetEndHour && currentMinute <= sunsetEndMinute) ||
        (currentHour > sunsetStartHour && currentHour < sunsetEndHour)
    ) {
        // Sunset_Snow (MP4 video for sunset)
        imageSrc = "images/Sunset_Snow.mp4";
    } else if (currentHour >= sunriseStartHour && currentHour < sunsetStartHour) {
        // Day_Clear (MP4 video for daytime)
        imageSrc = "images/Day_Clear.mp4";
    } else {
        // Night_Clear (MP4 video for nighttime)
        imageSrc = "images/Night_Clear.mp4";
    }

    imageElement.src = imageSrc;
}

setInterval(changeImage, 1000 * 60); // Check every minute (60000 milliseconds)
changeImage(); // Call it immediately when the page loads
