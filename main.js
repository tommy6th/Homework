function checkClass(header, content) {
  if ($(header).hasClass('active')) {
    $(header).removeClass('active');
    $(content).addClass('hidden');
  }
  return true;
}

function makeActive(header, content) {
  checkClass('#details', '#details-content');
  checkClass('#size', '#size-content');
  checkClass('#reviews', "#reviews-content")
  $(header).addClass('active');
  $(content).removeClass('hidden');
  return true;
}

function add() {
  var total = $('#total').text();
  var newTotal = $('#total').text(Number(total) + 1);
  console.log();
}

function addCart() {
  $('#buy').text("ADDED TO CART!")
  return window.setTimeout(function() {
    $('button').text("BUY NOW!")
  }, 750)
  return true;
}
