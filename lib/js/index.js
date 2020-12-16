function renderTmpl(tmpl, cb) {  
  $.ajax({url: tmpl, async: false}).then(function(e) { 
    cb(e);
  });
}

var header = document.querySelector("[file='header.template.html']")
var footer = document.querySelector("[file='footer.template.html']")


renderTmpl('/tmpl/header.html', function (r) {
  
  var n = r.replace('<z:config type="Block" name="首页头部" />','')
  var hd = document.createElement("header")
  hd.innerHTML = n
  header.parentNode.insertBefore(hd, header.nextSibling)
  header.remove()
  $.fn.bootstrapDropdownHover({});
});



renderTmpl('/tmpl/footer.html', function (r) {
  
  let n = r.replace('<z:config type="Block" name="页面尾部" />','')
  var ft = document.createElement("footer")
  ft.innerHTML = n
  footer.parentNode.insertBefore(ft, footer.nextSibling)
  footer.remove()
});