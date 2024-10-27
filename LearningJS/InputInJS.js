// import { createInterface } from 'readline';

// const rl = createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Введіть ваші дані: ', (input) => {
//     console.log('Введені дані:', input);
//     rl.close();
// });


// 2 
process.stdout.write('Введіть ваші даніddd: ');
process.stdin.on('data', (data) => {
    console.log('Введені даніddd:', data.toString().trim());
    process.exit();
});

//3 
process.stdout.write('Введіть ваше ім\'я: ');
let userData = {};
process.stdin.on('data', (data) => {
    const input = data.toString().trim();

    // Якщо ім'я ще не введене, зберігаємо його і запитуємо прізвище
    if (!userData.name) {
        userData.name = input;
        process.stdout.write('Введіть ваше прізвище: ');
    }
    // Якщо ім'я вже є, а прізвище ще немає, зберігаємо прізвище і завершуємо
    else if (!userData.surname) {
        userData.surname = input;
        console.log(`Введені дані: Ім'я - ${userData.name}, Прізвище - ${userData.surname}`);
        process.exit();
    }
});