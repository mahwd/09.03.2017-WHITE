var menu = document.getElementById('myTab');
var lastToggle=0;
var toggle=9;

(function slider() {
  menuArr = [];
  icons = document.querySelectorAll('#myTab a');
  for (var i = 0; i < icons.length ; i++) {
    menuItems = document.createElement('div');
    menuItems.className = 'menuItems';
    menuItems.id = 'menuItems'+i;
    console.log(menuItems.id);
    menuItems.style.width = (menu.clientWidth/6)-50 + 'px';
    menuItems.style.cursor = "pointer";
    menuItems.setAttribute("data-value",i);
    menuItems.appendChild(icons[i]);
    menu.appendChild(menuItems);
    menuItems.style.padding = '55px 15px';
    menuArr[i] = menuItems;
  }
})()

//
// function fadeIn(param) {
//   if (toggle!=param.getAttribute('data-value')) {
//     param.style.marginTop = '-20px';
//     param.childNodes[0].childNodes[0].style.color = '#fff';
//     console.log('fade in '+lastToggle);
//
//   }
// }

// function fadeOut(param) {
//   if (toggle!=param.getAttribute('data-value')) {
//   param.style.marginTop = '0px';
//   param.style.background = 'initial';
//   param.childNodes[0].childNodes[0].style.color = 'rgb(72, 75, 67)';
//   lastToggle=param.getAttribute('data-value');
//   console.log('fade out '+lastToggle);
// }
// }
function clc(param) {
  param.style.marginTop = '-20px';
  param.childNodes[0].childNodes[0].style.color = '#fff';
  param.style.background = '#fff';
  param.childNodes[0].childNodes[0].style.color = '#000';
  toggle = param.getAttribute('data-value');
  // fadeIn(menuArr[lastToggle]);
  // fadeOut(menuArr[lastToggle]);
  // console.log(lastToggle);
}

for(i = 0; i<menuArr.length;i++){

menuArr[i].addEventListener("click",function() {
  clc(this)
});

// menuArr[i].addEventListener("mouseover",function() {
//   fadeIn(this)
// });
//
// menuArr[i].addEventListener("mouseout",function() {
//   fadeOut(this)
// });

}
