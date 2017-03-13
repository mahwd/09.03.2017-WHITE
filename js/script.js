/*HEADER*/
// var headerSearch = document.getElementById('search-form');
// headerSearch.addEventListener("click", function() {
//
//
//     headerSearch.style.position = 'relative'
//
//     var headerSearchVariab = 0;
//
//     var headerSearchAnim = setInterval(function() {
//         headerSearch.style.left = headerSearchVariab + "px";
//         if (headerSearchVariab < -40) {
//             clearInterval(headerSearchAnim);
//         }
//         if (headerSearch < -20) {
//             headerSearchVariab -= 10;
//         } else {
//             headerSearchVariab -= 8;
//         }
//     }, 1);
//
//     console.log("salam")
// })
// for (var i = 1; i < 6; i++) {
//     document.getElementById("s" + i).addEventListener("click", function() {
//         headerSearch.style.position = 'relative'
//         headerSearch.style.left = '0px';
//         console.log("salam")
//     })
//
// }

/*section 1*/
var sec = document.getElementById('s1');
var arr = document.getElementsByClassName('imgs');
var imgArr = ['img/slide1_bg.jpg', 'img/slide2_bg.jpg', 'img/slide3_bg.jpg'];
var btns = document.getElementsByClassName("button");
var s1Imageorder = 0;
var repeat = 0;

var s1SldTxtB = document.querySelectorAll('#s1 .wrap .row h1 .first')[0];
s1SldTxtB.style.position = "relative";
var s1SldTxtsp1 = document.querySelectorAll('#s1 .wrap .row h1 .second')[0];
s1SldTxtsp1.style.position = "relative";
var s1SldTxtsp2 = document.querySelectorAll('#s1 .wrap .row h1 .third')[0];
s1SldTxtsp2.style.position = "relative";
var s1SldTxtP = document.querySelectorAll('#s1 .wrap .row p ')[0];
s1SldTxtP.style.position = "relative";



var s1SldTxtBArr = ["Creative", "Responsive", "Amazing"]
var s1SldTxtsp1Arr = ["White", "Design", "Video"]
var s1SldTxtsp2Arr = ["Templates", "Theme", "Background"]
var i = 0;

var s1ImageorderLast;

function s1sldTxtchng(x) {



    s1SldTxtB.innerHTML = s1SldTxtBArr[s1Imageorder];
    s1SldTxtsp1.innerHTML = s1SldTxtsp1Arr[s1Imageorder];
    s1SldTxtsp2.innerHTML = s1SldTxtsp2Arr[s1Imageorder];



    if (x == 0) {
        s1sldTxtchngAnim1(s1SldTxtB, s1SldTxtsp1, s1SldTxtsp2, s1SldTxtP);
    } else if (x == 1) {
        s1sldTxtchngAnim2(s1SldTxtB, s1SldTxtsp1, s1SldTxtsp2, s1SldTxtP);
    } else if (x == 2) {
        s1sldTxtchngAnim3(s1SldTxtB, s1SldTxtsp1, s1SldTxtsp2, s1SldTxtP);


    }
}

function s1sldTxtchngAnim1(param1, param2, param3, param4) {
    param1.style.top = "-200px";
    param2.style.top = "-200px";
    param3.style.top = "-200px";
    param4.style.top = "300px";
    param1.style.color = "#000";
    param2.style.color = "#000";
    param3.style.color = "#000";
    param4.style.color = "#000"


    var t1 = -200;
    var t2 = -200;
    var t3 = -200;
    var t4 = 300;


    var interval1 = setInterval(function() {
        param1.style.top = t1 + "px";
        t1 += 5;

        if (t1 == 0) {
            clearInterval(interval1);
            console.log("param1 stop");
        }
    }, 10);



    var interval2 = setInterval(function() {
        param2.style.top = t2 + "px";
        t2 += 3;

        if (t2 > 0) {
            clearInterval(interval2);
            console.log("param2 stop");
        }
    }, 8);


    var interval3 = setInterval(function() {
        param3.style.top = t3 + "px";
        t3 += 2;

        if (t3 > 0) {
            clearInterval(interval3);
            console.log("param3 stop");
        }
    }, 6);
    var interval4 = setInterval(function() {
        param4.style.top = t4 + "px";
        t4 -= 1;

        if (t4 < 201) {
            clearInterval(interval4);
            console.log("param4 stop");
        }
    }, 4);



}


function s1sldTxtchngAnim2(param1, param2, param3, param4) {
    param1.style.left = "-200px";
    param2.style.left = "-200px";
    param3.style.left = "-200px";
    param4.style.left = "-200px"
    param1.style.color = "#fff";
    param2.style.color = "#fff";
    param3.style.color = "#fff";
    param4.style.color = "#fff"


    var t1 = -200;
    var t2 = -200;
    var t3 = -200;
    var t4 = -200;


    var interval1 = setInterval(function() {
        param1.style.left = t1 + "px";
        t1 += 2;

        if (t1 > 0) {
            clearInterval(interval1);
            console.log("param1 stop");
        }
    }, 1);



    var interval2 = setInterval(function() {
        param2.style.left = t2 + "px";
        t2 += 3;

        if (t2 > 0) {
            clearInterval(interval2);
            console.log("param2 stop");
        }
    }, 3);


    var interval3 = setInterval(function() {
        param3.style.left = t3 + "px";
        t3 += 5;

        if (t3 > 0) {
            clearInterval(interval3);
            console.log("param3 stop");
        }
    }, 4);
    var interval4 = setInterval(function() {
        param4.style.left = t4 + "px";
        t4 += 3;

        if (t4 > 0) {
            clearInterval(interval4);
            console.log("param4 stop");
        }
    }, 2);





}

function s1sldTxtchngAnim3(param1, param2, param3, param4) {
    param1.style.top = "100px";
    param2.style.top = "100px";
    param3.style.top = "100px";
    param4.style.top = "300px";
    param1.style.color = "#fff";
    param2.style.color = "#fff";
    param3.style.color = "#fff";
    param4.style.color = "#fff"


    var t1 = 100;
    var t2 = 100;
    var t3 = 100;
    var t4 = 300;


    var interval1 = setInterval(function() {
        param1.style.top = t1 + "px";
        t1 -= 5;

        if (t1 < 0) {
            clearInterval(interval1);
            console.log("param1 stop");
        }
    }, 10);



    var interval2 = setInterval(function() {
        param2.style.top = t2 + "px";
        t2 -= 3;

        if (t2 < 0) {
            clearInterval(interval2);
            console.log("param2 stop");
        }
    }, 8);


    var interval3 = setInterval(function() {
        param3.style.top = t3 + "px";
        t3 -= 2;

        if (t3 < 0) {
            clearInterval(interval3);
            console.log("param3 stop");
        }
    }, 6);
    var interval4 = setInterval(function() {
        param4.style.top = t4 + "px";
        t4 -= 1;

        if (t4 < 201) {
            clearInterval(interval4);
            console.log("param4 stop");
        }
    }, 4);





}


btns[0].addEventListener("click", function() {
    s1Imageorder--;
    if (s1Imageorder < 0) {
        s1Imageorder = 2;
    }
    sec.style.backgroundImage = 'url("' + imgArr[s1Imageorder] + '")';
    s1sldTxtchng(s1Imageorder);
    s1ImageorderLast = s1Imageorder;

});


btns[1].addEventListener("click", function() {
    s1Imageorder++;
    if (s1Imageorder > 2) {
        s1Imageorder = 0;
    }

    s1ImageorderLast = s1Imageorder;

    sec.style.backgroundImage = 'url("' + imgArr[s1Imageorder] + '")';
    s1sldTxtchng(s1Imageorder);

});

for (var j = 0; j < arr.length; j++) {
    arr[j].addEventListener("click", function() {

        s1Imageorder = parseInt(this.getAttribute("class")[16]) - 1;

        if (s1Imageorder != s1ImageorderLast) {
            sec.style.backgroundImage = this.style.backgroundImage;
            s1sldTxtchng(s1Imageorder);
        }

        s1ImageorderLast = s1Imageorder;

    })
}


/*section 3*/


var menu = document.getElementById('myTab');
var lastToggle = 0;
var toggle = 9;

(function clean() {
    menuArr = [];
    icons = document.querySelectorAll('#myTab a');
    for (var i = 0; i < icons.length; i++) {
        menuItems = document.createElement('div');
        menuItems.className = 'menuItems';
        menuItems.id = 'menuItems' + i;
        menuItems.style.width = (menu.clientWidth / 6) - 30 + 'px';
        menuItems.style.cursor = "pointer";
        menuItems.setAttribute("data-value", i);
        menuItems.appendChild(icons[i]);
        menu.appendChild(menuItems);
        menuArr[i] = menuItems;
    }
})()

function fadeDown(par) {
    par.style.top = '-50px';
    par.style.opacity = 0;
    var c = -50;
    var o = 0;

    if (repeat == 0) {

        var intervalP = setInterval(function() {
                repeat++;
                par.style.top = c + "px";
                par.style.opacity = o;
                if (c > 0) {
                    clearInterval(intervalP);
                    repeat = 0;
                    console.log("stop " + par.parentNode);
                }

                c += 2;
                o += 0.05;
            },
            10);
    }
}

function fadeIn(param) {
    if (toggle != param.getAttribute('data-value')) {
        param.style.marginTop = '-20px';
        param.childNodes[0].childNodes[0].style.color = '#fff';
    }
}

var bow = [];

function fadeOut(param) {
    if (toggle != param.getAttribute('data-value')) {
        param.style.marginTop = '0px';
        param.style.background = 'initial';
        param.childNodes[0].childNodes[0].style.color = 'rgb(72, 75, 67)';
        lastToggle = param.getAttribute('data-value');
    }
}

function clc(param) {
    if (repeat == 0) {


        if (bow.length > 0) {
            bow[0].getElementsByTagName("p")[0].style.visibility = "hidden";
            bow[0].style.marginTop = '0px';
            bow[0].style.background = 'initial';
            bow[0].childNodes[0].childNodes[0].style.color = 'rgb(72, 75, 67)';
            bow.pop();
        }
        bow.push(param);
        param.getElementsByTagName("p")[0].style.visibility = "visible";
        fadeDown(param.getElementsByTagName("p")[0]);
        param.style.background = '#fff';
        param.childNodes[0].childNodes[0].style.color = '#000';
        toggle = param.getAttribute('data-value');

        /*----------------*/

        if (toggle == 0) {
            document.querySelector('.title>b').innerHTML = 'Clean ';
            document.getElementsByClassName('title').innerHTML = 'Code';
        } else if (toggle == 1) {
            document.querySelector('.title>b').innerHTML = 'Technical';
            document.getElementsByClassName('title').innerHTML = 'Support';
        } else if (toggle == 2) {
            document.querySelector('.title>b').innerHTML = 'Responsive';
        } else if (toggle == 3) {
            document.querySelector('.title>b').innerHTML = 'Documentation';
        } else if (toggle == 4) {
            document.querySelector('.title>b').innerHTML = 'Quality';
        } else if (toggle == 5) {
            document.querySelector('.title>b').innerHTML = 'Support';
        }

        var textCont = document.querySelectorAll("#s3 .wrap .row .titleContainer")[0];
        textCont.style.top = -150 + 'px';
        a = parseInt(textCont.style.top);
        if (repeat == 0) {
            textFall = setInterval(function() {
                repeat++;
                a++;
                textCont.style.top = a + 'px';
                if (a >= 0) {
                    clearInterval(textFall);
                    repeat = 0;
                }
            }, 1);
        }
    }
}


clc(menuArr[0]);

for (i = 0; i < menuArr.length; i++) {
    menuArr[i].addEventListener("click", function() {
        if (bow[0] != this) {
            clc(this);
        }


    });

    menuArr[i].addEventListener("mouseover", function() {

        fadeIn(this)

    });

    menuArr[i].addEventListener("mouseout", function() {

        fadeOut(this)

    });

    menuArr[i].addEventListener("mouseover", function() {

        fadeIn(this)

    });

    menuArr[i].addEventListener("mouseout", function() {

        fadeOut(this)

    });
}


/*===============================================================section=4===============================================================*/
/*===============================================================SLIDER===============================================================*/

var s5imgArr = [];
for (var i = 0; i < 7; i++) {
    s5imgArr[i] = 'img/slider2/' + i + '.jpg';
}
var s5frameIcon = [];

(function s5create() {
    s5frame = document.getElementsByClassName('carouselContent')[0];
    s5frame.style.position = "relative";
    s5frame.style.left = "0";

    for (var i = 0; i < s5imgArr.length; i++) {
        /* variables */
        var frameImages = document.createElement('img');
        s5frame.style.transition = 'all .3s ease'
        s5frameIcon[i] = document.createElement('div');
        s5frameIcon[i].className = 's5frame';
        s5frameIcon[i].style.width = parseFloat(document.body.clientWidth) / 4 + 'px';
        s5frame.style.width = 7 * parseFloat(s5frameIcon[i].style.width) + 'px';
        console.log(s5frameIcon[i].style.width);
        frameImages.style.height = '100%';
        frameImages.setAttribute('src', s5imgArr[i]);
        s5frameIcon[i].style.height = 100 + '%';
        s5frame.appendChild(s5frameIcon[i]);
        s5frameIcon[i].appendChild(frameImages);
    }
})();

var iconRight = document.querySelector('#s5 .wrap .row .icons-container .right-icon');
var iconLeft = document.querySelector('#s5 .wrap .row .icons-container .left-icon')

function s5right() {
    var t1 = parseFloat(s5frame.style.left);
    var t2 = -1 * parseFloat(s5frameIcon[0].style.width);


    s5frame.style.left = (t1 + t2) + "px";
    console.log(parseFloat(s5frame.style.left));

    if (parseFloat(s5frame.style.left) == 4 * t2) {
        s5frame.style.left = 0;
    }
}

function s5left() {
    var t1 = parseFloat(s5frame.style.left);
    var t2 = parseFloat(s5frameIcon[0].style.width);


    s5frame.style.left = (t1 + t2) + "px";
    console.log(parseFloat(s5frame.style.left));

    if (parseFloat(s5frame.style.left) > 0) {
        s5frame.style.left = -3 * t2 + "px";
    }
}



iconRight.addEventListener("click", s5right);
iconLeft.addEventListener("click", s5left);




/*----------------------------------------------------------------TV Azirxan---------------------------------------------------------------------------------------*/


var s7btns = document.getElementsByClassName("s7btns");
var s7statTxt = document.getElementsByClassName("stat-con")[0];

s7btns[0].style.width = "15px";
s7btns[0].style.height = "15px";
s7btns[0].style.background = "black";

for (var i = 0; i < s7btns.length; i++) {
    s7btns[i].addEventListener("click", function() {
        s7btnsreset();
        this.style.width = "15px";
        this.style.height = "15px";
        this.style.background = "black";
        s7statchng();

    })
}

function s7btnsreset() {
    for (var i = 0; i < s7btns.length; i++) {

        s7btns[i].style.width = "10px";
        s7btns[i].style.height = "10px";
        s7btns[i].style.background = "white";

    }
}

function s7statchng() {
    s7statTxt.style.position = "relative";
    s7statTxt.style.left = "-500px";

    var t = -500;

    var s7statInterval = setInterval(function() {
        s7statTxt.style.left = t + "px";

        if (t > 0) {
            clearInterval(s7statInterval);
        }

        t += 5;
    }, 5);

}


/*----------------------------------------------------------------OUR-TEAM---------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------SLIDER---------------------------------------------------------------------------------------*/

var mainFrameTeam = document.getElementsByClassName('teamContent')[0];
mainFrameTeam.width
var teamImgArr = [];
var teamIconsArr = [];

for (var i = 0; i < 8; i++) {
    teamImgArr[i] = 'img/team/' + i + '.jpg';
}



for (var i = 0; i < teamImgArr.length; i++) {
    /////////////////////////////frame/////////////////////////////
    var teamFrm = document.createElement('div');
    teamFrm.style.minWidth = '370px';
    teamFrm.style.minHeight = '370px';
    teamIconsArr[i] = teamFrm;
    mainFrameTeam.appendChild(teamFrm);
    ////////////////////////////Image//////////////////////////////
    var teamImg = document.createElement('img');
    teamImg.style.height = '100%';
    teamFrm.appendChild(teamImg);
    teamImg.setAttribute('src', teamImgArr[i]);
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    teamFrm.style.marginRight = (parseFloat(mainFrameTeam.clientWidth) - (3 * parseFloat(teamFrm.clientWidth))) / 2 + 'px';
    console.log('margin' + teamImg.clientWidth);
}

mainFrameTeam.style.left = 0;

function rightClick() {
    var t1 = parseFloat(mainFrameTeam.style.left);
    var t2 = -1 * parseFloat(teamFrm.clientWidth);
    var mrgn = parseFloat(teamFrm.style.marginRight);
    console.log('qweqwe' + mrgn);

    mainFrameTeam.style.left = (t1 + t2 - mrgn) + 'px';
    // console.log(mainFrameTeam.style.left);
    console.log('right' + mainFrameTeam.style.left);
    if (parseInt(mainFrameTeam.style.left) == -2400) {
        mainFrameTeam.style.left = 0;
    }
}

function leftClick() {
    var t1 = parseFloat(mainFrameTeam.style.left);
    var t2 = parseFloat(teamFrm.clientWidth);
    var mrgn = parseFloat(teamFrm.style.marginRight);
    mainFrameTeam.style.left = (t1 + t2 + mrgn) + 'px';
    // console.log(mainFrameTeam.style.left);
    if (parseFloat(mainFrameTeam.style.left) >= 0) {
        mainFrameTeam.style.left = '-2000px';
    }
}

btnR = document.querySelectorAll('.teamHeader .icons-container .right-icon')[0];
btnL = document.querySelectorAll('.teamHeader .icons-container .left-icon')[0];

btnR.addEventListener('click', function() {
    rightClick();
});
btnL.addEventListener('click', function() {
    leftClick();
});
