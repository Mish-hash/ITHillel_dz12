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

