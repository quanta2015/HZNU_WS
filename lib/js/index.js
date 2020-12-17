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


let p = document.querySelectorAll('.changeDiv img')
p.forEach((item,i)=>{
  console.log(item)
  item.setAttribute('width','')
  item.setAttribute('height','')
})


Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
  let h = document.querySelector('.changeDiv img').clientHeight
  document.querySelector('.m-slide').style.height     = `${h}px`
  document.querySelector('.m-slide>div').style.height = `${h}px`
});

// let h = document.querySelector('.changeDiv img').clientWidth
// document.querySelector('.m-slide').style.height = `${h}px`

// console.log('hhhh'+document.querySelector('.changeDiv img').clientWidth)


















