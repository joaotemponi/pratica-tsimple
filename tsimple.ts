const teclado = require(`prompt-sync`)();

while (true) {
    console.clear();
    console.log(`+----------------------------------------+`);
    console.log(`|Para abrir calculadora          digite 1|`);
    console.log(`|Para abrir jogos                digite 2|`);
    console.log(`|Para abrir gerador de senhas    digite 3|`);
    console.log(`|Para abrir conversor de moedas  digite 4|`);
    console.log(`|Para abrir citações de frases   digite 5|`);
    console.log(`|Para fechar o tsimple           digite 0|`);
    console.log(`+----------------------------------------+`);

    let n: number = parseFloat(teclado(``));

    if (n === 1) {
        while (true) {
            console.clear();
            console.log(`+------------------------------+`);
            console.log(`|   Qual operação matemática   |`);
            console.log(`|        deseja fazer?         |`);
            console.log(`|Adição         -      digite 1|`);
            console.log(`|Subtração      -      digite 2|`);
            console.log(`|multiplicação  -      digite 3|`);
            console.log(`|divisão        -      digite 4|`);
            console.log(`|potenciação    -      digite 5|`);
            console.log(`|raiz quadrada  -      digite 6|`);
            console.log(`|   Para sair da calculadora   |`);
            console.log(`|           digite 0           |`)
            console.log(`+------------------------------+`);

            let nx: number = parseFloat(teclado(``));
            if (nx === 1) {
                let n1: number = parseFloat(teclado(`n1: `));
                let n2: number = parseFloat(teclado(`n2: `));
                let n3: number = n1 + n2
                console.log(`${n1} + ${n2} = ${n3}`);
                let p: string = teclado(`Deseja fazer outro calculo? (s/n)`)
                if (p === `s`) {

                }
                else if (p === `n`) {
                    console.log(`Até a proxima!!`);
                    break;
                }
            }
            else if (nx === 2) {
                let n1: number = parseFloat(teclado(`n1: `));
                let n2: number = parseFloat(teclado(`n2: `));
                let n3: number = n1 - n2
                console.log(`${n1} - ${n2} = ${n3}`);
                let p: string = teclado(`Deseja fazer outro calculo? (s/n)`)
                if (p === `s`) {

                }
                else if (p === `n`) {
                    console.log(`Até a proxima!!`);
                    break;
                }
            }
            else if (nx === 3) {
                let n1: number = parseFloat(teclado(`n1: `));
                let n2: number = parseFloat(teclado(`n2: `));
                let n3: number = n1 * n2
                console.log(`${n1} x ${n2} = ${n3}`);
                let p: string = teclado(`Deseja fazer outro calculo? (s/n)`)
                if (p === `s`) {

                }
                else if (p === `n`) {
                    console.log(`Até a proxima!!`);
                    break;
                }
            }
            else if (nx === 4) {
                let n1: number = parseFloat(teclado(`n1: `));
                let n2: number = parseFloat(teclado(`n2: `));
                let n3: number = n1 / n2
                console.log(`${n1} : ${n2} = ${n3}`);
                let p: string = teclado(`Deseja fazer outro calculo? (s/n)`)
                if (p === `s`) {

                }
                else if (p === `n`) {
                    console.log(`Até a proxima!!`);
                    break;
                }
            }
            else if (nx === 5) {
                let n1: number = parseFloat(teclado(`n1: `));
                let n2: number = parseFloat(teclado(`elevado a: `));
                let n3: number = n1 ** n2
                console.log(`${n1}^${n2} = ${n3}`);
                let p: string = teclado(`Deseja fazer outro calculo? (s/n)`)
                if (p === `s`) {

                }
                else if (p === `n`) {
                    console.log(`Até a proxima!!`);
                    break;
                }
            }
            else if (nx === 6) {
                let n1: number = parseFloat(teclado(`Raiz quadrada de: `))
                let n2: number = Math.sqrt(n1)
                console.log(`${n2}`);
                let p: string = teclado(`Deseja fazer outro calculo? (s/n)`)
                if (p === `s`) {

                }
                else if (p === `n`) {
                    console.log(`Até a proxima!!`);
                    break;
                }
            }
            else if (nx === 0) {
                break;
            }
            else {
                console.log(`Algo deu erro!!`)
            }
        }
    }
    else if (n === 2) {
        while (true) {
            console.log(`+--------------------------+`);
            console.log(`|Trivia       -    digite 1|`);
            console.log(`|Trivia math  -    digite 2|`);
            console.log(`|   Mais jogos em breve!   |`)
            console.log(`|Voltar       -    digite 0|`);
            console.log(`+--------------------------+`);

            let n: number = parseFloat(teclado(``));

            if (n === 1) {
                console.clear();
                console.log(`+-----------------------------------+`);
                console.log(`|        Bem-vindo ao Trivia        |`);
                console.log(`| Um jogo de perguntas e respostas! |`);
                console.log(`|   Escolha o nível das perguntas   |`);
                console.log(`|Fácil           -          digite 1|`);
                console.log(`|Médio           -          digite 2|`);
                console.log(`|Díficil         -          digite 3|`);
                console.log(`|Para sair       -          digite 0|`);
                console.log(`+-----------------------------------+`);

                let p: number = parseFloat(teclado(``));
                let contagem = 0

                if (p === 1) {
                    console.clear();
                    console.log(`Qual é o nome do famoso quadro de Leonardo da Vinci que retrata uma mulher com um sorriso enigmático?`);
                    console.log(`a) O grito`);
                    console.log(`b) Monalisa`);
                    console.log(`c) Noite estrelada`);
                    console.log(`d) Cleópatra`);
                    let p1: string = teclado(``)
                    if (p1 == `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome do planeta mais próximo do Sol em nosso sistema solar?`);
                    console.log(`a) Terra`);
                    console.log(`b) Vênus`);
                    console.log(`c) Plutão`);
                    console.log(`d) Mercúrio`);
                    let p2: string = teclado(``);
                    if (p2 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome do filme de animação da Disney sobre uma princesa que vive em um reino congelado e tem o poder de gelo?`);
                    console.log(`a) Elza`);
                    console.log(`b) Rapunzel`);
                    console.log(`c) Frozen`);
                    console.log(`d) Shrek`);
                    let p3: string = teclado(``);
                    if (p3 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quem é o famoso criador do Facebook`);
                    console.log(`a) Mark zekeiberg`);
                    console.log(`b) Elon Musk`);
                    console.log(`c) Javascript`);
                    console.log(`d) Mark Zuckerberg`);
                    let p4: string = teclado(``);
                    if (p4 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quem foi o primeiro homem a pisar na Lua?`);
                    console.log(`a) Neil Armstrong`);
                    console.log(`b) Marcos Pontes`);
                    console.log(`c) Mc Kevin`);
                    console.log(`d) Alien`);
                    let p5: string = teclado(``);
                    if (p5 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome da pessoa que cuida dos dentes?`);
                    console.log(`a) Médico`);
                    console.log(`b) Nós mesmos`);
                    console.log(`c) Dentista`);
                    console.log(`d) Psiquiatra`);
                    let p6: string = teclado(``);
                    if (p6 == `c`) {
                        contagem++
                    } else {
                        p6 == `b`
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome do animal que tem listras pretas e brancas e adora comer bambu?`);
                    console.log(`a) Zebra`);
                    console.log(`b) Urso`);
                    console.log(`c) Panda`);
                    console.log(`d) Urso panda`);
                    let p7: string = teclado(``);
                    if (p7 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`O que você aperta para tocar música em um rádio?`);
                    console.log(`a) Botão`);
                    console.log(`b) Liga/Desliga`);
                    console.log(`c) volume`);
                    console.log(`d) Nenhuma das alternativas acima`);
                    let p8: string = teclado(``);
                    if (p8 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quem foi o inventor da lâmpada elétrica?`);
                    console.log(`a) Nikolas Tesla`);
                    console.log(`b) Mc Kevin`);
                    console.log(`c) Adolf Hitler`);
                    console.log(`d) Thomas Edinson`);
                    let p9: string = teclado(``);
                    if (p9 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome da maior cordilheira do mundo, localizada na América do Sul?`);
                    console.log(`a) Cordilheira dos Andes`);
                    console.log(`b) Cordilheira dos Himalaias`);
                    console.log(`c) Cordinha do Japão`);
                    console.log(`d) Na América do Sul não tem cordilheira`);
                    let p10: string = teclado(``);
                    if (p10 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`sua pontuação foi de ${contagem}/10`);
                }
                else if (p === 2) {
                    console.clear();
                    console.log(`Qual é o maior oceano do mundo?`);
                    console.log(`a)Oceano Índico`);
                    console.log(`b)Oceano Pacífico`);
                    console.log(`c)Oceano Atlântico`);
                    console.log(`d)Oceano Glacial Ártico`);
                    let p1: string = teclado(``);
                    if (p1 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome da capital do Canadá?`);
                    console.log(`a)New York`);
                    console.log(`b)Ottawa`);
                    console.log(`c)Washington`);
                    console.log(`d)Toronto`);
                    let p2: string = teclado(``);
                    if (p2 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quantos olhos tem uma aranha?`);
                    console.log(`a)8 olhos`);
                    console.log(`b)16 olhos`);
                    console.log(`c)4 olhos`);
                    console.log(`d)24 olhos`);
                    let p3: string = teclado(``);
                    if (p3 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Como se chama o processo em que uma lagarta se transforma em borboleta?`);
                    console.log(`a)Abiogênese`);
                    console.log(`b)Metaformose`);
                    console.log(`c)Fotossíntese`);
                    console.log(`d)Ciclo de Tranformação`);
                    let p4: string = teclado(``);
                    if (p4 == `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Como se chama o processo em que a água se transforma em vapor?`);
                    console.log(`a)Gaseificação`);
                    console.log(`b)Sublimação`);
                    console.log(`c)Condensação`);
                    console.log(`d)Vaporização`);
                    let p5: string = teclado(``);
                    if (p5 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual foi o primeiro astronauta do hemisfério sul do planeta Terra?`);
                    console.log(`a)Neil Armstrong`);
                    console.log(`b)Cadela Laika`);
                    console.log(`c)Marcos Pontes`);
                    console.log(`d)Valentina Tereshkova`);
                    let p6: string = teclado(``);
                    if (p6 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Como se chama o processo em que as plantas produzem seu próprio alimento usando luz solar?`);
                    console.log(`a)Biodiversidade`);
                    console.log(`b)Clico Abiótico`);
                    console.log(`c)Trabalho natural`);
                    console.log(`d)Fotossíntese`);
                    let p7: string = teclado(``);
                    if (p7 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome da famosa fórmula matemática que descreve a relação entre o diâmetro e a circunferência de um círculo?`);
                    console.log(`a)PI`);
                    console.log(`b)Raio`);
                    console.log(`c)Bhaskara`);
                    console.log(`d)Pitágoras`);
                    let p8: string = teclado(``);
                    if (p8 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Como se chama o conjunto de instrumentos musicais que inclui violino, viola, violoncelo e contrabaixo?`);
                    console.log(`a)Instrumentos de percussão`);
                    console.log(`b)Instrumrntos de Sopro`);
                    console.log(`c)Instrumento de Corda`);
                    console.log(`d)Orquestra`);
                    let p9: string = teclado(``);
                    if (p9 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome da fórmula química da água?`);
                    console.log(`a)HO2`);
                    console.log(`b)Água mineral`);
                    console.log(`c)H20`);
                    console.log(`d)Nenhuma das alternativas acima`);
                    let p: string = teclado(``);
                    if (p == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`sua pontuação foi de ${contagem}/10`);
                }
                else if (p === 3) {
                    console.clear();
                    console.log(`Qual é o nome do famoso físico que formulou a teoria da relatividade?`);
                    console.log(`a)Albert Einstein`);
                    console.log(`b)Nikolas Tesla`);
                    console.log(`c)Newton`);
                    console.log(`d)Thomas Edinson`);
                    let p1: string = teclado(``)
                    if (p1 = `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quem foi o líder da Revolução Cubana?`);
                    console.log(`a)Donald Trump`);
                    console.log(`b)Hitler`);
                    console.log(`c)Che Guevara`);
                    console.log(`d)Fungencio Barista`);
                    let p2: string = teclado(``)
                    if (p2 = ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Em que ano a primeira Guerra Mundial começou?`);
                    console.log(`a)1788`);
                    console.log(`b)1914`);
                    console.log(`c)1894`);
                    console.log(`d)2023`);
                    let p3: string = teclado(``)
                    if (p3 = `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quem foi o primeiro homem a chegar ao topo do Monte Everest?`);
                    console.log(`a)Edmund Hillary`);
                    console.log(`b)Elon Musk`);
                    console.log(`c)Escalador da Rússia`);
                    console.log(`d)Mike Sthanford`);
                    let p4: string = teclado(``)
                    if (p4 = `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quem foi o líder político e ativista sul-africano que lutou contra o apartheid e se tornou presidente do país em 1994?`);
                    console.log(`a)Mohhamad Salah`);
                    console.log(`b)Nelson Mandela`);
                    console.log(`c)Malick Sidibé`);
                    console.log(`d)Sádio Mané`);
                    let p5: string = teclado(``)
                    if (p5 = `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual foi o país que Brasil enfrentou na final da copa do mundo em 2002 e qual foi o placar final?`);
                    console.log(`a)França, 3x1`);
                    console.log(`b)Alemanha, 2x0`);
                    console.log(`c)Itália, 1x1 (3x2 pênaltis)`);
                    console.log(`d)Argentina, 3x2`);
                    let p6: string = teclado(``)
                    if (p6 = `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome da revolução ocorrida na França entre 1789 e 1799, que resultou na queda da monarquia e o estabelecimento da República?`);
                    console.log(`a)Revolução Industrial`);
                    console.log(`b)Segunda Revolução Industrial`);
                    console.log(`c)Revolução dos Direitos Trabalhistas`);
                    console.log(`d)Revolução Francesa`);
                    let p7: string = teclado(``)
                    if (p7 = `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome do presidente dos Estados Unidos que foi famoso por proclamar a emancipação dos escravos?`);
                    console.log(`a)Abraham Lincoln`);
                    console.log(`b)Barack Obhama`);
                    console.log(`c)Donald Trump`);
                    console.log(`d)George Washington`);
                    let p8: string = teclado(``)
                    if (p8 = `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome do famoso vulcão que entrou em erupção em 79 d.C. e destruiu a cidade de Pompeia, na Itália?`);
                    console.log(`a)Katarina`);
                    console.log(`b)Mauna Loa`);
                    console.log(`c)Vesúvio`);
                    console.log(`d)Varsóvia`);
                    let p9: string = teclado(``)
                    if (p9 = `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o nome do famoso monumento localizado em Agra, na Índia, que é considerado uma das Sete Maravilhas do Mundo Moderno?`);
                    console.log(`a)Machu Picchu`);
                    console.log(`b)Chichén Itzá`);
                    console.log(`c)Ruínas de Petra`);
                    console.log(`d)Taj Mahal`);
                    let p: string = teclado(``)
                    if (p = `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`sua pontuação foi de ${contagem}/10`);
                }
            }
            else if (n === 2) {
                console.clear();
                console.log(`+-----------------------------------+`);
                console.log(`|     Bem-vindo ao Trivia  Math     |`);
                console.log(`| Um jogo de perguntas e respostas! |`);
                console.log(`|   Escolha o nível das perguntas   |`);
                console.log(`|Fácil           -          digite 1|`);
                console.log(`|Médio           -          digite 2|`);
                console.log(`|Díficil         -          digite 3|`);
                console.log(`|Para sair       -          digite 0|`)
                console.log(`+-----------------------------------+`);

                let p: number = parseFloat(teclado(``));
                let contagem = 0

                if (p === 1) {
                    console.clear();
                    console.log(`Qual o resultado da seguinte expressão númerica: 3+5+6-9-6+5x7?`);
                    console.log(`a)33`);
                    console.log(`b)34`);
                    console.log(`c)-7`);
                    console.log(`d)-1`);
                    let p1: string = teclado(`b`);
                    if (p1 == `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`João foi a uma padaria com R$50,45 e lá ele pagou R$5,00 em 10 pães, R$7,65 em 100g de muçarela, R$5,40 em 100g de presunto e R$5,00 em 1 caixa de achocolatado. Qual foi o troco recebido?`);
                    console.log(`a)R$27,40`);
                    console.log(`b)R$36,05`);
                    console.log(`c)R$23,95`);
                    console.log(`d)Não receberá troco`);
                    let p2: string = teclado(``);
                    if (p2 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Uma escola organizará um passeio para o Musel da Cana e contará com a presença de 177 alunos, para ir a coordenadora está pensando em alugar alguns ônibus, cada ônibus tem capacidade de 41 lugares. Quantas ônibus serão necessários?`);
                    console.log(`a)3`);
                    console.log(`b)4`);
                    console.log(`c)1`);
                    console.log(`d)5`);
                    let p3: string = teclado(``);
                    if (p3 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Um menino pediu 50 reais para seu pai e 50 reais para sua mãe para comprar um sapato de R$97,00. Depois de comprar o sapato sobraram 3 reais, então ele decidiu dar 1 Real para a mãe e 1 Real para o pai, fazendo os calculos pode concluir que restam 98 reais em dividas, mais 1 real que sobrou 99. Fazendo a expresão numérica obtem-se o seguinte:`);
                    console.log(`50 + 50 = 100 - 97 = 3`);
                    console.log(`(50 - 1) + (50 - 1) = 98 + 1 = 99`);
                    console.log(`Faltou 1 real, mas não era pra ter acontecido isso, pois ele pegou 100 reais e não 99, onde está o erro matemático?`)
                    console.log(`a)O erro foi ter pedido dinheiro para a mãe e para o pai`);
                    console.log(`b)Não tem nenhum erro, ele gastou 1 real com doce`);
                    console.log(`c)O erro esta em somar 2 x (50 - 1)`);
                    console.log(`d)O erro está no final, quando era pra ter feito 98 - 1 ao inves de 98 + 1`);
                    let p4: string = teclado(``);
                    if (p4 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Lucão foi ao açolgue comprar 3 peças de Picanha, na qual estáva 69,90/Kg, o peso total das 3 peças foi de 4,75Kg, quantos reais Lucão teve que pagar?`);
                    console.log(`a)R$316:02`);
                    console.log(`b)R$237,40`);
                    console.log(`c)R$332,02`);
                    console.log(`d)R$299,99`);
                    let p5: string = teclado(``);
                    if (p5 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o resultado da adição de 1/4 com 1/2?`);
                    console.log(`a)1/4`);
                    console.log(`b)1/6`);
                    console.log(`c)1/2`);
                    console.log(`d)3/4`);
                    let p6: string = teclado(``);
                    if (p6 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quanto é 7 + 3 x 2?`);
                    console.log(`a)20`);
                    console.log(`b)15`);
                    console.log(`c)13`);
                    console.log(`d)17`);
                    let p7: string = teclado(``);
                    if (p7 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quanto é 10 + 10 x 0?`);
                    console.log(`a)0`);
                    console.log(`b)10`);
                    console.log(`c)20`);
                    console.log(`d)100`);
                    let p8: string = teclado(``);
                    if (p8 == `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é a fórmula para calcular a área de um quadrado?`);
                    console.log(`a)Lado x Lado`);
                    console.log(`b)Base x Altura`);
                    console.log(`c)Lado x 2`);
                    console.log(`d)Diagonal x Diagonal`);
                    let p9: string = teclado(``);
                    if (p9 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é a fórmula para calcular o perímetro de um triângulo?`);
                    console.log(`a)Lado x 3`);
                    console.log(`b)Base x Altura`);
                    console.log(`c)Soma dos lados`);
                    console.log(`d)Base x 2`);
                    let p10: string = teclado(``);
                    if (p10 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`sua pontuação foi de ${contagem}/10`);
                }
                else if (p === 2) {
                    console.clear();
                    console.log(`Quanto é a raiz quadrada de 81?`);
                    console.log(`a)8`);
                    console.log(`b)9`);
                    console.log(`c)5`);
                    console.log(`d)10`);
                    let p1: string = teclado(``);
                    if (p1 == `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quanto é 9³?`);
                    console.log(`a)729`);
                    console.log(`b)81`);
                    console.log(`c)730`);
                    console.log(`d)810`);
                    let p2: string = teclado(``);
                    if (p2 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quanto é 2¹⁰?`);
                    console.log(`a)2048`);
                    console.log(`b)512`);
                    console.log(`c)1024`);
                    console.log(`d)20`);
                    let p3: string = teclado(``);
                    if (p3 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é a fórmula para calcular o volume de um cilindro?`);
                    console.log(`a)2πr `);
                    console.log(`b)πr`);
                    console.log(`c)2πrh`);
                    console.log(`d)πr²h`);
                    let p4: string = teclado(``);
                    if (p4 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Quanto é 2 elevado à 5ª potência?`);
                    console.log(`a)28`);
                    console.log(`b)30`);
                    console.log(`c)32`);
                    console.log(`d)34`);
                    let p5: string = teclado(``);
                    if (p5 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p6: string = teclado(``);
                    if (p6 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p7: string = teclado(``);
                    if (p7 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p8: string = teclado(``);
                    if (p8 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p9: string = teclado(``);
                    if (p9 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p10: string = teclado(``);
                    if (p10 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(`sua pontuação foi de ${contagem}/10`);
                }
                else if (p === 3) {
                    console.clear();
                    console.log(`Qual é o resultado da seguinte expressão: 2³ × (4+1)?`);
                    console.log(`a)20`);
                    console.log(`b)30`);
                    console.log(`c)40`);
                    console.log(`d)50`);
                    let p1: string = teclado(``);
                    if (p1 == `b`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o valor de x na equação 3x - 7 = 8?`);
                    console.log(`a)8`);
                    console.log(`b)7`);
                    console.log(`c)6`);
                    console.log(`d)5`);
                    let p2: string = teclado(``);
                    if (p2 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é a área de um círculo com raio 6 unidades?`);
                    console.log(`a)6π unidades quadradas`);
                    console.log(`b)12π unidades quadradas`);
                    console.log(`c)18π unidades quadradas`);
                    console.log(`d)36π unidades quadradas`);
                    let p3: string = teclado(``);
                    if (p3 == `c`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é a solução da equação quadrática X² 5X + 6 = 0?`);
                    console.log(`a)X = 2 e X = 3`);
                    console.log(`b)X = 3 e X = 4`);
                    console.log(`c)X = 1 e X = 4`);
                    console.log(`d)X = 2 e X = 4`);
                    let p4: string = teclado(``);
                    if (p4 == `a`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o resultado da seguinte expressão: 3/4 + 2/3?`);
                    console.log(`a)1/2`);
                    console.log(`b)5/6`);
                    console.log(`c)7/12`);
                    console.log(`d)11/12`);
                    let p5: string = teclado(``);
                    if (p5 == `d`) {
                        contagem++
                    }
                    console.clear();
                    console.log(`Qual é o valor de x na equação 2X + 5 = 3X - 1`);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p6: string = teclado(``);
                    if (p6 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p7: string = teclado(``);
                    if (p7 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p8: string = teclado(``);
                    if (p8 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p9: string = teclado(``);
                    if (p9 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(``);
                    console.log(`a)`);
                    console.log(`b)`);
                    console.log(`c)`);
                    console.log(`d)`);
                    let p10: string = teclado(``);
                    if (p10 == ``) {
                        contagem++
                    }
                    console.clear();
                    console.log(`sua pontuação foi de ${contagem}/10`);
                }
                else if (p === 0) {
                    break;
                }
                else {
                    console.log(`Algo deu erro!!`);
                }
            }
            else if (n === 0) {
                break;
            }
        }
    }
    else if (n === 0) {
        break;
    }
}