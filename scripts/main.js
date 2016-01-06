$(document).ready(function(){

  // On click of the NEXT button
  $('.next').on('click', function(){

    // If the image is the LAST image in the gallery ...
    if ( $('.is-showing').is(':last-child') ) {

      // Remove the 'is-showing' class
      $('.is-showing').removeClass('is-showing');

      // In the gallery, find the FIRST image in the gallery AND add the class 'is-showing'
      $('.gallery').find('.gallery-image:first-child').addClass('is-showing');
    }

    // Otherwise ...
    // If the image is NOT the last image in the gallery ...
    else {

      // Find the current element with the 'is-showing' class & remove it ...
      // Then find the NEXT sibling element and add the class 'is-showing'
      $('.is-showing').removeClass('is-showing').next().addClass('is-showing');
    }
  });

  // On click of the BACK button
  $('.back').on('click', function(){

    // If the image is the FIRST image in the gallery ...
    if ( $('.is-showing').is(':first-child') ) {

      // Remove the 'is-showing' class
      $('.is-showing').removeClass('is-showing');

      // In the gallery, find the LAST image in the gallery AND add the class 'is-showing'
      $('.gallery').find('.gallery-image:last-child').addClass('is-showing');
    }

    // Otherwise ...
    // If the image is NOT the first image in the gallery ...
    else {

      // Find the current element with the 'is-showing' class & remove it ...
      // Then find the PREVIOUS sibling element and add the class 'is-showing'
      $('.is-showing').removeClass('is-showing').prev().addClass('is-showing');
    }
  });
});
