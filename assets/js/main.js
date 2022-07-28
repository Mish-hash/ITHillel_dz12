/*
1) Написать HTML форму с 3я полями и кнопкой submit
по нажатию на которую 1е поле броверяется на то что там только бувы,
второе должно быть номер телефона +380ххххххххх, третье почтой.
*/

document.forms.form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fieldName = new RegExp('^[a-zA-Zа-яА-Я ]+$', 'g').test(event.target.name.value) ?
        event.target.name.value.trim() :
        'Name --> Неверный ввод';

    const fieldPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/.test(event.target.phone.value.replace(/[- ()]/g, '')) ?
        event.target.phone.value :
        'номер телефона должен быть в формате +380671234567';

    const fieldEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(event.target.email.value) ?
        event.target.email.value :
        'Поле email заполнено некорректно';

    console.log(fieldName);
    console.log(fieldPhone);
    console.log(fieldEmail);
})


/*
2) Модернизировать код рисовалки из приложенного к лекции кода лекции 12 таким оюразом,
чтобы линия шла не прирывно от клика к клику, как в paint.
*/

/* const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#F0C18B';
ctx.fillRect(0, 0, 500, 400);

let startX, startY, endX, endY;

canvas.addEventListener('mousedown', (event) => {

    startX = event.offsetX;
    startY = event.offsetY;

    canvas.onmouseup = (event) => {
        endX = event.offsetX;
        endY = event.offsetY;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    };
}); */


/*
3) добавить возможность изменения цвета линии из палитры,
палитра 3и кликабельных div квадартика, цвета выберете по вкусу.
*/

document.getElementById('color-line').addEventListener('change', event => {
    //console.log(event.target.value);
    document.getElementById('line').style.backgroundColor = event.target.value;
});

