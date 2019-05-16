const displayGallery = document.querySelector('#displayGallery > img');
const galleryTape = document.querySelector('#galleryTape');

function changePhotoOnDisplay(elem) {
  if (elem.tagName === 'A') {
     displayGallery.src = `${elem.href}`
     displayGallery.alt = `${elem.title}`
  } else {
    displayGallery.src = `${elem.parentNode.href}`
    displayGallery.alt = `${elem.parentNode.title}`
  }
};

galleryTape.addEventListener('click', function(event) {
  let element = event.target;
  if (element.closest('li') && element.tagName !== 'LI') {
      changePhotoOnDisplay(element);
  } else {
    return false;
  };
});