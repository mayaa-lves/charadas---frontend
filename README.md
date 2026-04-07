# 🧩 Charada-Hangman Pro

![Status do Projeto](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![JS](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Tailwind](https://img.shields.io/badge/Style-Tailwind_CSS-blue)

> Um jogo de forca moderno que desafia sua mente com charadas aleatórias vindas diretamente de uma API externa. 

---

## 💡 A Ideia
Este projeto nasceu do desejo de unir a lógica clássica do **Jogo da Forca** com o dinamismo das **Charadas Brasileiras**. Diferente de uma forca comum onde você apenas adivinha palavras soltas, aqui você recebe uma pergunta enigmática e precisa descobrir a resposta antes que suas vidas se esgotem.

## 🚀 Funcionalidades Inovadoras

* **Busca Dinâmica:** Consumo da API `api-de-charadass` para garantir que cada partida seja única.
* **Engine de Renderização:** O jogo reconstrói visualmente a palavra a cada tecla pressionada, tratando espaços e caracteres especiais em tempo real.
* **Feedback Visual Imersivo:** * Sistema de corações dinâmicos (`❤️` / `🖤`).
    * **Efeito Shake:** O card do jogo treme visualmente ao detectar um erro, aumentando a tensão da partida.
* **Adivinhação Direta:** Um botão de "Chute" que permite ao jogador arriscar a resposta completa (com bônus de risco: erro custa 2 vidas).
* **UX Mobile-Friendly:** Totalmente responsivo graças ao poder do Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
| :--- | :--- |
| **JavaScript (ES6+)** | Lógica de estados, manipulação de Arrays e Event Listeners. |
| **Fetch API** | Comunicação assíncrona com servidor externo. |
| **Tailwind CSS** | Estilização moderna e utilitária sem arquivos CSS pesados. |
| **Google Fonts** | Tipografia focada em legibilidade e estilo. |

## 🧠 Desafios de Lógica Superados

Durante o desenvolvimento, foquei em resolver problemas complexos de programação iniciante:
1.  **Imutabilidade:** Entender quando usar `let` ou `const` para permitir que a palavra secreta mudasse a cada rodada.
2.  **Loops Inteligentes:** Criação de um `for...of` que compara o estado atual da palavra com o array de letras já acertadas.
3.  **Prevenção de Bugs:** Filtros para ignorar teclas de sistema (Shift, CapsLock) e evitar perda de vida por teclas repetidas.

## 📸 Como rodar o projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/charada-hangman.git](https://github.com/seu-usuario/charada-hangman.git)