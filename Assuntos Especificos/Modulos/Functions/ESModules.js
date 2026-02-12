export function somaWithEModules(a,b) {
    return a + b
}   

export function subtrationWithEModules(a,b) {
    return a - b
}   

export { somaWithEModules, subtrationWithEModules } //Exportando as funções usando o ES6 Modules, com desestruturação.
export default { somaWithEModules, subtrationWithEModules } // Exportando as funções usando o ES6 Modules, sem desestruturação, usando o default.