docReady(function() {
    includeHTML();
    selectToggle();
});

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

let selectToggle = function(){
    let btnAnchor = document.querySelector('.subHeader__supportBtn');
    let lnb = document.querySelector('.cdw__lnb');

    btnAnchor.addEventListener('click', function(){
        // 만약에 btnAnchor의 parentNode의 parentNode에 selectBox--active 클래스가 있으면
        if(lnb.classList.contains('cdw__lnb--fold')){
            // 클래스가 있으면 selectBox--active를 remove
            lnb.classList.remove('cdw__lnb--fold');
        } else {
            // 클래스가 없으면 selectBox--active add
            lnb.classList.add('cdw__lnb--fold');
        }
    })
}