window.Total = {}

/* Model-level logic */
Total.pricePerCount = 10
Total.calcPrice = function(discount, count) {
  var total = count * Total.pricePerCount
  return roundCents(total - total * discount)
}
Total.calcDiscount = function(discount, count) {
  var total = count * Total.pricePerCount
  return roundCents(total * discount)
}

/* View */
Total.view = function (ctrl, attrs) {
  return m('p.total', [
    m('span', 'Total: '),
    discountView(ctrl, attrs),
    m('strong', "$" + Total.calcPrice(attrs.discount, attrs.count))
  ])
}

/* Helpers */
function roundCents(num) {
  return Math.round(num*100/100)
}

function discountView(ctrl, attrs) {
  if(attrs.discount > 0) {
    var discountedAmount = Total.calcDiscount(attrs.discount, attrs.count)
    return m('span', "(Coupon discount: -$" + discountedAmount + ")")
  }
}