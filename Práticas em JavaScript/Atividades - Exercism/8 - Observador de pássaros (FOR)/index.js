// ======================================
// 1. Total de pássaros observados
// ======================================
function totalBirdCount(birdsPerDay) {
    let total = 0;

    for (let i = 0; i < birdsPerDay.length; i++) {
        total += birdsPerDay[i];
    }

    return total;
}

// ======================================
// 2. Total de pássaros em uma semana
// ======================================
function birdsInWeek(birdsPerDay, week) {
    let total = 0;
    let start = (week - 1) * 7;
    let end = start + 7;

    for (let i = start; i < end; i++) {
        total += birdsPerDay[i];
    }

    return total;
}

// ======================================
// 3. Corrigir erro de contagem
// ======================================
function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
        birdsPerDay[i]++;
    }
}

// ======================================
// TESTES
// ======================================
const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

console.log(totalBirdCount(birdsPerDay));
// 34

console.log(birdsInWeek(birdsPerDay, 2));
// 12

const birdsWithError = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsWithError);
console.log(birdsWithError);
// [3, 5, 1, 7, 5, 1]
