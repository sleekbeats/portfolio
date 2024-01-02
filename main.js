var scrollAnimationFunc = function () {
    var aboutElm = document.getElementById('about-items');
    var workElm_1 = document.getElementById('work-item-1');
    var workElm_2 = document.getElementById('work-item-2');
    var workElm_3 = document.getElementById('work-item-3');
    var workElm_4 = document.getElementById('work-item-4');
    var scroll = window.pageYOffset;
    var triggerHeight = 500;
    var triggerHeightdiff = 60;
    var aboutElmHeight = aboutElm.getBoundingClientRect().top + scroll;
    var workElmHeight = workElm_1.getBoundingClientRect().top + scroll;
    var workElmHeight = workElm_2.getBoundingClientRect().top + scroll;
    var workElmHeight = workElm_3.getBoundingClientRect().top + scroll;
    var workElmHeight = workElm_4.getBoundingClientRect().top + scroll;
    
    if (scroll + triggerHeight > aboutElmHeight) {
        aboutElm.classList.add('show');
    } else {
        aboutElm.classList.remove('show');
    }
    
    if (scroll + triggerHeight > workElmHeight) {
        workElm_1.classList.add('show');
    } else {
        workElm_1.classList.remove('show');
    }

    if (scroll + triggerHeight - triggerHeightdiff > workElmHeight) {
        workElm_2.classList.add('show');
    } else {
        workElm_2.classList.remove('show');
    }

    if (scroll + triggerHeight - 2 * triggerHeightdiff > workElmHeight) {
        workElm_3.classList.add('show');
    } else {
        workElm_3.classList.remove('show');
    }

    if (scroll + triggerHeight - 3 * triggerHeightdiff > workElmHeight) {
        workElm_4.classList.add('show');
    } else {
        workElm_4.classList.remove('show');
    }

};
window.addEventListener('scroll', scrollAnimationFunc);
