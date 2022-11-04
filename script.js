const p = document.getElementsByClassName('p')
const s = document.getElementsByClassName('s')

function changeSP(e, n, r) {
    e.preventDefault;
    if (r == 1) {
        p[n].innerHTML = '>'
        s[n].innerHTML = '<'
    }
    else {
        p[n].innerHTML = '['
        s[n].innerHTML = ']' 
    }
}