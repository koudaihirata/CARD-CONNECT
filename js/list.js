const NarrowDown = document.querySelector('.NarrowDown');
console.log(NarrowDown);
let drop = document.querySelector('.dropDownNone');

NarrowDown.addEventListener('click', () => {
    console.log(drop);

    //クラス名を追加
    drop.classList.add('dropDown');
    drop.classList.remove('dropDownNone');
});

const heartNone = document.querySelector('.heartNone');
console.log(heartNone);
const heart = document.querySelector('.heart');
console.log(heart);

heartNone.addEventListener('click', () => {
    //heartNoneに背景なし

    heartNone.classList.add('heart');
    heartNone.classList.remove('heartNone');
});