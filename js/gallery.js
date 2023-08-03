
// Get references to the display bar and thumbnail bar elements
var displayBar = document.querySelector('figure.displayBar');
var thumbBar = document.querySelector('ul.thumbBarImgs');

// Thumbnail images list
var imgList = [
	{
		'src' : 'images/flowers-pink-small.jpg',
		'title' : 'Market in Münster',
		'description' : 'Market in Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=62071586'
	},
	{
		'src' : 'images/flowers-purple-small.jpg',
		'title' : 'Sentmaring Park',
		'description' : 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48576226'
	},
	{
		'src' : 'images/flowers-red-small.jpg',
		'title' : 'Poppies in cornfield',
		'description' : 'Poppies in cornfield, Dülmen,  North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=40957238'
	},
	{
		'src' : 'images/flowers-white-small.jpg',
		'title' : 'Daffodils in Sentmaring park',
		'description' : 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48211466'
	},
	{
		'src' : 'images/flowers-yellow-small.jpg',
		'title' : 'Sunflowers in the hamlet Dernekamp',
		'description' : 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=61514522'
	}
];

// Setup the thumbnail bar
for (var i = 0; i < imgList.length; i++) {
  var newLi = document.createElement('li');
  var newImage = document.createElement('img');
  var imgData = imgList[i];

  newImage.src = imgData.src;
  newImage.title = imgData.title;
  newImage.alt = imgData.description;
  newImage.setAttribute('url', imgData.url);

  newImage.index = i;
  newImage.className = 'thumbnail';

  newLi.appendChild(newImage);
  thumbBar.appendChild(newLi);
}

// Call and display the first image to the display bar
var slideIndex = 0;
showSlide(slideIndex);

// Thumbnail clickable to change the image on the display bar
thumbBar.onclick = function (event) {
  if (event.target && event.target.nodeName === 'IMG') {
    currentSlide(event.target.index);
  }
};

// Display an image on the display bar
function displayImage(img) {
  var displayImg = displayBar.querySelector('img');
  var displayCaption = displayBar.querySelector('figcaption');
  var displayTitle = displayBar.querySelector('h3');
  var displayLink = displayBar.querySelector('a');

  displayImg.src = img.getAttribute('src').replace('small', 'large');
  displayImg.alt = img.getAttribute('alt');
  displayTitle.innerHTML = img.getAttribute('title');
  displayLink.href = img.getAttribute('url');
  displayCaption.innerHTML = img.getAttribute('alt');
}

// Outline clearing for the thumbnails
function outlineClearing() {
  var thumbImgs = document.querySelectorAll('img.thumbnail');
  for (var i = 0; i < thumbImgs.length; i++) {
    // Remove the "active" class to avoid the CSS agreement
    thumbImgs[i].classList.remove('active');
  }
}

// The next and previous slide click buttons
var nextBtn = document.querySelectorAll('div[class*="slide"]');
nextBtn[0].onclick = function () {
  plusSlides(1);
};
nextBtn[1].onclick = function () {
  plusSlides(-1);
};

// Set and show the slide by the slide index
function plusSlides(n) {
  showSlide(slideIndex + n);
}

// Set and show the slide by the current slide index
function currentSlide(n) {
  showSlide(n);
}

// Setting the thumbnail selection and display bar
function showSlide(n) {
  var thumbImgs = document.querySelectorAll('img.thumbnail');
  if (n >= thumbImgs.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = thumbImgs.length - 1;
  } else {
    slideIndex = n;
  }

  outlineClearing();
  thumbImgs[slideIndex].classList.add('active');
  displayImage(thumbImgs[slideIndex]);
}

// Interval time for the gallery display
setInterval(function () {
  plusSlides(1);
}, 3000);

// Roll up and down the thumbnails bar
var upBtn = document.querySelector('div.arrow.up');
var thumbBarRoll = document.querySelector('div.thumbBarImgs');

upBtn.addEventListener('click', thumbRollUp);

function thumbRollUp() {
  if (!thumbBarRoll.classList.contains('rollUp')) {
    thumbBarRoll.classList.add('rollUp');
    upBtn.classList.replace('-up', '-down');
  } else {
    thumbBarRoll.classList.remove('rollUp');
    upBtn.classList.replace('-down', '-up');
  }
}