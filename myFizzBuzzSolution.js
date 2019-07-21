// Vitaliy Krynytskyy <vitaliy.krynytskyy@gmail.com>
// https://github.com/krynv

for (var i = 1; i <= 100; i++) {
    let outputString = '';

    if (i % 3 == 0) { outputString += 'Fizz'; }
    if (i % 5 == 0) { outputString += 'Buzz'; }

    if (!outputString) { outputString = i; }

    console.log(outputString);
}
