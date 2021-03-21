
// const select = document.querySelector("select");
// const allLang = ['en', 'ru'];




// select.addEventListener('change', changeURLLanguage);

// // перенаправить на url с указанием языка
// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }

// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     console.log(hash);
//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#ru';
//         location.reload();
//     }
//     select.value = hash;
//     for (let key in langArr) {
//         let elem = document.querySelector('.lng-' + key);
//         if (elem) {
//             elem.innerHTML = langArr[key][hash];
//         }

//     }
// }

// changeLanguage();

const multilangRus = document.querySelector(".multilang__rus");
const multilangEng = document.querySelector(".multilang__eng");
const allLang = ['ru', 'en'];

multilangRus.addEventListener('change', changeURLLanguage);
multilangEng.addEventListener('change', changeURLLanguage);

function changeURLLanguage(e) {   
    let lang = e.target.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ru';
        location.reload();
    }
    
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();