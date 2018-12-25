$(function() {
  $('#size').change(function() {
    $('.snipcart-add-item').data('item-custom1-options', $(this).val());
  });
});

Snipcart.subscribe('item.added', function (item) {

  var items = Snipcart.api.items.all();

  if (items.filter(x => x.id == '2').length > 0) {
    // Don't add the item twice
    return;
  }

  if (item.customFields[0].value == '1000ml') {
    Snipcart.api.items.add({
      id: '2',
      price: 30,
      name: 'Free item when adding 1000ml',
      url: '/'
    }).then(function() {Snipcart.api.modal.show();})
  }
});

// ---------------------------
