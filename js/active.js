(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.prog1').circleProgress({
      value: 0.25,
      size: 100,
      fill: { color: '#b71d2e' },
    });

    // slick nav
    var $ourmenu = $('#ourmenu');
    $ourmenu.slicknav();
  });

  jQuery(window).on('load', function () {});
})(jQuery);
