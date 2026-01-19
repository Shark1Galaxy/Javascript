const h1Resultado = document.querySelector('h1');
const agoraData = new Date();

option = {
    dateStyle: "full",
    timeStyle: 'full'
}
h1Resultado.innerHTML = agoraData.toLocaleString('pt-BR', option)

/*Resumo:

Quer só Data? toLocaleDateString
Quer só Hora? toLocaleTimeString
Quer Tudo ou misturar estilos? toLocaleString*/

/*
📅 Resumo: .toLocaleDateString()

1. O que faz?Este método transforma um objeto Date em uma string, formatando a data de acordo com a linguagem e convenções do país especificado.Nota: Retorna apenas a data (dia/mês/ano). Para data e hora juntas, usa-se .toLocaleString().

2. SintaxeJavaScriptdata.toLocaleDateString(locales, options);
locales (opcional): String com a linguagem (ex: 'pt-BR', 'en-US').options (opcional): Objeto para personalizar o formato (dia numérico, mês por extenso, etc).

3. Exemplos PráticosA) Uso Básico (Padrão do Navegador)Sem argumentos, ele usa a linguagem do computador do usuário.JavaScriptconst hoje = new Date();
console.log(hoje.toLocaleDateString()); 

// Saída (no Brasil): "19/01/2026"
B) Definindo o Idioma (locales)JavaScriptconst data = new Date();

// Português do Brasil
console.log(data.toLocaleDateString('pt-BR')); 
// Saída: "19/01/2026"

// Inglês dos EUA (Mês vem antes)
console.log(data.toLocaleDateString('en-US')); 
// Saída: "1/19/2026"

// Alemão (Usa pontos)
console.log(data.toLocaleDateString('de-DE')); 
// Saída: "19.1.2026"

C) Personalizando (options) - Muito ImportanteÉ aqui que você controla como a data aparece (ex: "segunda-feira, 19 de janeiro").JavaScriptconst data = new Date();

const opcoes = {
  weekday: 'long',  // dia da semana (long, short, narrow)
  year: 'numeric',  // ano (numeric, 2-digit)
  month: 'long',    // mês (numeric, 2-digit, long, short)
  day: 'numeric'    // dia (numeric, 2-digit)
};

console.log(data.toLocaleDateString('pt-BR', opcoes));
// Saída: "segunda-feira, 19 de janeiro de 2026"

4. Tabela de Propriedades (options)Copie esta tabela para consulta rápida das opções de formatação.PropriedadeValores PossíveisExemplo de SaídadateStyle'full', 'long', 'medium', 'short'Atalho pré-definido (ex: full = "segunda-feira...")

weekday'long'"segunda-feira"'short'"seg"'narrow'"S"month'numeric'"1"'2-digit'"01"'long'"janeiro"'short'"jan"year'numeric'"2026"'2-digit'"26"day'numeric'"19"'2-digit'"19"5. Locales Comuns (Consulta)O formato geralmente é lingua-PAIS.pt-BR: Português (Brasil)en-US: Inglês (EUA)en-GB: Inglês (Reino Unido - dia vem antes do mês)es-ES: Espanholfr-FR: Francêsja-JP: Japonêsde-DE: Alemão


⚠️ Atenção: Por que o timeStyle falhou?

O método .toLocaleDateString() foi criado para retornar apenas a DATA. Se você tentar configurar o estilo da hora (timeStyle) ou propriedades como hour, minute, etc., ele simplesmente ignora essas configurações, pois a função dele é cortar a parte do tempo.✅ Como corrigir?Para usar timeStyle (ou mostrar data e hora juntas), você deve trocar o método para .toLocaleString() (sem o "Date" no meio).Anote a diferença:MétodoO que retorna?Aceita dateStyle?Aceita timeStyle?.toLocaleDateString()Só Data✅ Sim❌ Ignora.toLocaleTimeString()Só Hora❌ Ignora✅ Sim.toLocaleString()Data e Hora✅ Sim✅ Sim
*/