var teclado = require("prompt-sync")();
while (true) {
    console.clear();
    console.log("+----------------------------------------+");
    console.log("|Para abrir calculadora          digite 1|");
    console.log("|Para abrir jogos                digite 2|");
    console.log("|Para abrir gerador de senhas    digite 3|");
    console.log("|Para abrir conversor de moedas  digite 4|");
    console.log("|Para abrir cita\u00E7\u00F5es de frases   digite 5|");
    console.log("|Para fechar o tsimple           digite 0|");
    console.log("+----------------------------------------+");
    var n = parseFloat(teclado(""));
    if (n === 1) {
        while (true) {
            console.clear();
            console.log("+------------------------------+");
            console.log("|   Qual opera\u00E7\u00E3o matem\u00E1tica   |");
            console.log("|        deseja fazer?         |");
            console.log("|Adi\u00E7\u00E3o         -      digite 1|");
            console.log("|Subtra\u00E7\u00E3o      -      digite 2|");
            console.log("|multiplica\u00E7\u00E3o  -      digite 3|");
            console.log("|divis\u00E3o        -      digite 4|");
            console.log("|potencia\u00E7\u00E3o    -      digite 5|");
            console.log("|raiz quadrada  -      digite 6|");
            console.log("|   Para sair da calculadora   |");
            console.log("|           digite 0           |");
            console.log("+------------------------------+");
            var nx = parseFloat(teclado(""));
            if (nx === 1) {
                var n1 = parseFloat(teclado("n1: "));
                var n2 = parseFloat(teclado("n2: "));
                var n3 = n1 + n2;
                console.log("".concat(n1, " + ").concat(n2, " = ").concat(n3));
                var p = teclado("Deseja fazer outro calculo? (s/n)");
                if (p === "s") {
                }
                else if (p === "n") {
                    console.log("At\u00E9 a proxima!!");
                    break;
                }
            }
            else if (nx === 2) {
                var n1 = parseFloat(teclado("n1: "));
                var n2 = parseFloat(teclado("n2: "));
                var n3 = n1 - n2;
                console.log("".concat(n1, " - ").concat(n2, " = ").concat(n3));
                var p = teclado("Deseja fazer outro calculo? (s/n)");
                if (p === "s") {
                }
                else if (p === "n") {
                    console.log("At\u00E9 a proxima!!");
                    break;
                }
            }
            else if (nx === 3) {
                var n1 = parseFloat(teclado("n1: "));
                var n2 = parseFloat(teclado("n2: "));
                var n3 = n1 * n2;
                console.log("".concat(n1, " x ").concat(n2, " = ").concat(n3));
                var p = teclado("Deseja fazer outro calculo? (s/n)");
                if (p === "s") {
                }
                else if (p === "n") {
                    console.log("At\u00E9 a proxima!!");
                    break;
                }
            }
            else if (nx === 4) {
                var n1 = parseFloat(teclado("n1: "));
                var n2 = parseFloat(teclado("n2: "));
                var n3 = n1 / n2;
                console.log("".concat(n1, " : ").concat(n2, " = ").concat(n3));
                var p = teclado("Deseja fazer outro calculo? (s/n)");
                if (p === "s") {
                }
                else if (p === "n") {
                    console.log("At\u00E9 a proxima!!");
                    break;
                }
            }
            else if (nx === 5) {
                var n1 = parseFloat(teclado("n1: "));
                var n2 = parseFloat(teclado("elevado a: "));
                var n3 = Math.pow(n1, n2);
                console.log("".concat(n1, "^").concat(n2, " = ").concat(n3));
                var p = teclado("Deseja fazer outro calculo? (s/n)");
                if (p === "s") {
                }
                else if (p === "n") {
                    console.log("At\u00E9 a proxima!!");
                    break;
                }
            }
            else if (nx === 6) {
                var n1 = parseFloat(teclado("Raiz quadrada de: "));
                var n2 = Math.sqrt(n1);
                console.log("".concat(n2));
                var p = teclado("Deseja fazer outro calculo? (s/n)");
                if (p === "s") {
                }
                else if (p === "n") {
                    console.log("At\u00E9 a proxima!!");
                    break;
                }
            }
            else if (nx === 0) {
                break;
            }
            else {
                console.log("Algo deu erro!!");
            }
        }
    }
    else if (n === 2) {
        while (true) {
            console.log("+--------------------------+");
            console.log("|Trivia       -    digite 1|");
            console.log("|Trivia math  -    digite 2|");
            console.log("|   Mais jogos em breve!   |");
            console.log("|Voltar       -    digite 0|");
            console.log("+--------------------------+");
            var n_1 = parseFloat(teclado(""));
            if (n_1 === 1) {
                console.clear();
                console.log("+-----------------------------------+");
                console.log("|        Bem-vindo ao Trivia        |");
                console.log("| Um jogo de perguntas e respostas! |");
                console.log("|   Escolha o n\u00EDvel das perguntas   |");
                console.log("|F\u00E1cil           -          digite 1|");
                console.log("|M\u00E9dio           -          digite 2|");
                console.log("|D\u00EDficil         -          digite 3|");
                console.log("|Para sair       -          digite 0|");
                console.log("+-----------------------------------+");
                var p = parseFloat(teclado(""));
                var contagem = 0;
                if (p === 1) {
                    console.clear();
                    console.log("Qual \u00E9 o nome do famoso quadro de Leonardo da Vinci que retrata uma mulher com um sorriso enigm\u00E1tico?");
                    console.log("a) O grito");
                    console.log("b) Monalisa");
                    console.log("c) Noite estrelada");
                    console.log("d) Cle\u00F3patra");
                    var p1 = teclado("");
                    if (p1 == "b") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome do planeta mais pr\u00F3ximo do Sol em nosso sistema solar?");
                    console.log("a) Terra");
                    console.log("b) V\u00EAnus");
                    console.log("c) Plut\u00E3o");
                    console.log("d) Merc\u00FArio");
                    var p2 = teclado("");
                    if (p2 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome do filme de anima\u00E7\u00E3o da Disney sobre uma princesa que vive em um reino congelado e tem o poder de gelo?");
                    console.log("a) Elza");
                    console.log("b) Rapunzel");
                    console.log("c) Frozen");
                    console.log("d) Shrek");
                    var p3 = teclado("");
                    if (p3 == "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quem \u00E9 o famoso criador do Facebook");
                    console.log("a) Mark zekeiberg");
                    console.log("b) Elon Musk");
                    console.log("c) Javascript");
                    console.log("d) Mark Zuckerberg");
                    var p4 = teclado("");
                    if (p4 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quem foi o primeiro homem a pisar na Lua?");
                    console.log("a) Neil Armstrong");
                    console.log("b) Marcos Pontes");
                    console.log("c) Mc Kevin");
                    console.log("d) Alien");
                    var p5 = teclado("");
                    if (p5 == "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome da pessoa que cuida dos dentes?");
                    console.log("a) M\u00E9dico");
                    console.log("b) N\u00F3s mesmos");
                    console.log("c) Dentista");
                    console.log("d) Psiquiatra");
                    var p6 = teclado("");
                    if (p6 == "c") {
                        contagem++;
                    }
                    else {
                        p6 == "b";
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome do animal que tem listras pretas e brancas e adora comer bambu?");
                    console.log("a) Zebra");
                    console.log("b) Urso");
                    console.log("c) Panda");
                    console.log("d) Urso panda");
                    var p7 = teclado("");
                    if (p7 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("O que voc\u00EA aperta para tocar m\u00FAsica em um r\u00E1dio?");
                    console.log("a) Bot\u00E3o");
                    console.log("b) Liga/Desliga");
                    console.log("c) volume");
                    console.log("d) Nenhuma das alternativas acima");
                    var p8 = teclado("");
                    if (p8 == "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quem foi o inventor da l\u00E2mpada el\u00E9trica?");
                    console.log("a) Nikolas Tesla");
                    console.log("b) Mc Kevin");
                    console.log("c) Adolf Hitler");
                    console.log("d) Thomas Edinson");
                    var p9 = teclado("");
                    if (p9 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome da maior cordilheira do mundo, localizada na Am\u00E9rica do Sul?");
                    console.log("a) Cordilheira dos Andes");
                    console.log("b) Cordilheira dos Himalaias");
                    console.log("c) Cordinha do Jap\u00E3o");
                    console.log("d) Na Am\u00E9rica do Sul n\u00E3o tem cordilheira");
                    var p_1 = teclado("");
                    if (p_1 == "a") {
                        contagem++;
                    }
                    console.log("sua pontua\u00E7\u00E3o foi de ".concat(contagem, "/10"));
                }
                else if (p === 2) {
                    console.clear();
                    console.log("Qual \u00E9 o maior oceano do mundo?");
                    console.log("a)Oceano \u00CDndico");
                    console.log("b)Oceano Pac\u00EDfico");
                    console.log("c)Oceano Atl\u00E2ntico");
                    console.log("d)Oceano Glacial \u00C1rtico");
                    var p1 = teclado("");
                    if (p1 == "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome da capital do Canad\u00E1?");
                    console.log("a)New York");
                    console.log("b)Ottawa");
                    console.log("c)Washington");
                    console.log("d)Toronto");
                    var p2 = teclado("");
                    if (p2 == "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quantos olhos tem uma aranha?");
                    console.log("a)8 olhos");
                    console.log("b)16 olhos");
                    console.log("c)4 olhos");
                    console.log("d)24 olhos");
                    var p3 = teclado("");
                    if (p3 == "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Como se chama o processo em que uma lagarta se transforma em borboleta?");
                    console.log("a)Abiog\u00EAnese");
                    console.log("b)Metaformose");
                    console.log("c)Fotoss\u00EDntese");
                    console.log("d)Ciclo de Tranforma\u00E7\u00E3o");
                    var p4 = teclado("");
                    if (p4 == "b") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Como se chama o processo em que a \u00E1gua se transforma em vapor?");
                    console.log("a)Gaseifica\u00E7\u00E3o");
                    console.log("b)Sublima\u00E7\u00E3o");
                    console.log("c)Condensa\u00E7\u00E3o");
                    console.log("d)Vaporiza\u00E7\u00E3o");
                    var p5 = teclado("");
                    if (p5 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual foi o primeiro astronauta do hemisf\u00E9rio sul do planeta Terra?");
                    console.log("a)Neil Armstrong");
                    console.log("b)Cadela Laika");
                    console.log("c)Marcos Pontes");
                    console.log("d)Valentina Tereshkova");
                    var p6 = teclado("");
                    if (p6 == "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Como se chama o processo em que as plantas produzem seu pr\u00F3prio alimento usando luz solar?");
                    console.log("a)Biodiversidade");
                    console.log("b)Clico Abi\u00F3tico");
                    console.log("c)Trabalho natural");
                    console.log("d)Fotoss\u00EDntese");
                    var p7 = teclado("");
                    if (p7 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome da famosa f\u00F3rmula matem\u00E1tica que descreve a rela\u00E7\u00E3o entre o di\u00E2metro e a circunfer\u00EAncia de um c\u00EDrculo?");
                    console.log("a)PI");
                    console.log("b)Raio");
                    console.log("c)Bhaskara");
                    console.log("d)Pit\u00E1goras");
                    var p8 = teclado("");
                    if (p8 == "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Como se chama o conjunto de instrumentos musicais que inclui violino, viola, violoncelo e contrabaixo?");
                    console.log("a)Instrumentos de percuss\u00E3o");
                    console.log("b)Instrumrntos de Sopro");
                    console.log("c)Instrumento de Corda");
                    console.log("d)Orquestra");
                    var p9 = teclado("");
                    if (p9 == "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome da f\u00F3rmula qu\u00EDmica da \u00E1gua?");
                    console.log("a)HO2");
                    console.log("b)\u00C1gua mineral");
                    console.log("c)H20");
                    console.log("d)Nenhuma das alternativas acima");
                    var p_2 = teclado("");
                    if (p_2 == "c") {
                        contagem++;
                    }
                    console.log("sua pontua\u00E7\u00E3o foi de ".concat(contagem, "/10"));
                }
                else if (p === 3) {
                    console.clear();
                    console.log("Qual \u00E9 o nome do famoso f\u00EDsico que formulou a teoria da relatividade?");
                    console.log("a)Albert Einstein");
                    console.log("b)Nikolas Tesla");
                    console.log("c)Newton");
                    console.log("d)Thomas Edinson");
                    var p1 = teclado("");
                    if (p1 = "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quem foi o l\u00EDder da Revolu\u00E7\u00E3o Cubana?");
                    console.log("a)Donald Trump");
                    console.log("b)Hitler");
                    console.log("c)Che Guevara");
                    console.log("d)Fungencio Barista");
                    var p2 = teclado("");
                    if (p2 = "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Em que ano a primeira Guerra Mundial come\u00E7ou?");
                    console.log("a)1788");
                    console.log("b)1914");
                    console.log("c)1894");
                    console.log("d)2023");
                    var p3 = teclado("");
                    if (p3 = "b") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quem foi o primeiro homem a chegar ao topo do Monte Everest?");
                    console.log("a)Edmund Hillary");
                    console.log("b)Elon Musk");
                    console.log("c)Escalador da R\u00FAssia");
                    console.log("d)Mike Sthanford");
                    var p4 = teclado("");
                    if (p4 = "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Quem foi o l\u00EDder pol\u00EDtico e ativista sul-africano que lutou contra o apartheid e se tornou presidente do pa\u00EDs em 1994?");
                    console.log("a)Mohhamad Salah");
                    console.log("b)Nelson Mandela");
                    console.log("c)Malick Sidib\u00E9");
                    console.log("d)S\u00E1dio Man\u00E9");
                    var p5 = teclado("");
                    if (p5 = "b") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual foi o pa\u00EDs que Brasil enfrentou na final da copa do mundo em 2002 e qual foi o placar final?");
                    console.log("a)Fran\u00E7a, 3x1");
                    console.log("b)Alemanha, 2x0");
                    console.log("c)It\u00E1lia, 1x1 (3x2 p\u00EAnaltis)");
                    console.log("d)Argentina, 3x2");
                    var p6 = teclado("");
                    if (p6 = "b") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome da revolu\u00E7\u00E3o ocorrida na Fran\u00E7a entre 1789 e 1799, que resultou na queda da monarquia e o estabelecimento da Rep\u00FAblica?");
                    console.log("a)Revolu\u00E7\u00E3o Industrial");
                    console.log("b)Segunda Revolu\u00E7\u00E3o Industrial");
                    console.log("c)Revolu\u00E7\u00E3o dos Direitos Trabalhistas");
                    console.log("d)Revolu\u00E7\u00E3o Francesa");
                    var p7 = teclado("");
                    if (p7 = "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome do presidente dos Estados Unidos que foi famoso por proclamar a emancipa\u00E7\u00E3o dos escravos?");
                    console.log("a)Abraham Lincoln");
                    console.log("b)Barack Obhama");
                    console.log("c)Donald Trump");
                    console.log("d)George Washington");
                    var p8 = teclado("");
                    if (p8 = "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome do famoso vulc\u00E3o que entrou em erup\u00E7\u00E3o em 79 d.C. e destruiu a cidade de Pompeia, na It\u00E1lia?");
                    console.log("a)Katarina");
                    console.log("b)Mauna Loa");
                    console.log("c)Ves\u00FAvio");
                    console.log("d)Vars\u00F3via");
                    var p9 = teclado("");
                    if (p9 = "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Qual \u00E9 o nome do famoso monumento localizado em Agra, na \u00CDndia, que \u00E9 considerado uma das Sete Maravilhas do Mundo Moderno?");
                    console.log("a)Machu Picchu");
                    console.log("b)Chich\u00E9n Itz\u00E1");
                    console.log("c)Ru\u00EDnas de Petra");
                    console.log("d)Taj Mahal");
                    var p_3 = teclado("");
                    if (p_3 = "d") {
                        contagem++;
                    }
                    console.log("sua pontua\u00E7\u00E3o foi de ".concat(contagem, "/10"));
                }
                else if (p === 0) {
                    break;
                }
            }
            else if (n_1 === 2) {
                console.clear();
                console.log("+-----------------------------------+");
                console.log("|     Bem-vindo ao Trivia  Math     |");
                console.log("| Um jogo de perguntas e respostas! |");
                console.log("|   Escolha o n\u00EDvel das perguntas   |");
                console.log("|F\u00E1cil           -          digite 1|");
                console.log("|M\u00E9dio           -          digite 2|");
                console.log("|D\u00EDficil         -          digite 3|");
                console.log("|Para sair       -          digite 0|");
                console.log("+-----------------------------------+");
                var p = parseFloat(teclado(""));
                var contagem = 0;
                if (p === 1) {
                    console.clear();
                    console.log("Qual o resultado da seguinte express\u00E3o n\u00FAmerica: 3+5+6-9-6+5x7?");
                    console.log("a)33");
                    console.log("b)34");
                    console.log("c)-7");
                    console.log("d)-1");
                    var p1 = teclado("b");
                    if (p1 == "b") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Jo\u00E3o foi a uma padaria com R$50,45 e l\u00E1 ele pagou R$5,00 em 10 p\u00E3es, R$7,65 em 100g de mu\u00E7arela, R$5,40 em 100g de presunto e R$5,00 em 1 caixa de achocolatado. Qual foi o troco recebido?");
                    console.log("a)R$27,40");
                    console.log("b)R$36,05");
                    console.log("c)R$23,95");
                    console.log("d)N\u00E3o receber\u00E1 troco");
                    var p2 = teclado("");
                    if (p2 == "a") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Uma escola organizar\u00E1 um passeio para o Musel da Cana e contar\u00E1 com a presen\u00E7a de 177 alunos, para ir a coordenadora est\u00E1 pensando em alugar alguns \u00F4nibus, cada \u00F4nibus tem capacidade de 41 lugares. Quantas \u00F4nibus ser\u00E3o necess\u00E1rios?");
                    console.log("a)3");
                    console.log("b)4");
                    console.log("c)1");
                    console.log("d)5");
                    var p3 = teclado("");
                    if (p3 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Um menino pediu 50 reais para seu pai e 50 reais para sua m\u00E3e para comprar um sapato de R$97,00. Depois de comprar o sapato sobraram 3 reais, ent\u00E3o ele decidiu dar 1 Real para a m\u00E3e e 1 Real para o pai, fazendo os calculos pode concluir que restam 98 reais em dividas, mais 1 real que sobrou 99. Fazendo a expres\u00E3o num\u00E9rica obtem-se o seguinte:");
                    console.log("50 + 50 = 100 - 97 = 3");
                    console.log("(50 - 1) + (50 - 1) = 98 + 1 = 99");
                    console.log("Faltou 1 real, mas n\u00E3o era pra ter acontecido isso, pois ele pegou 100 reais e n\u00E3o 99, onde est\u00E1 o erro matem\u00E1tico?");
                    console.log("a)O erro foi ter pedido dinheiro para a m\u00E3e e para o pai");
                    console.log("b)N\u00E3o tem nenhum erro, ele gastou 1 real com doce");
                    console.log("c)O erro esta em somar 2 x (50 - 1)");
                    console.log("d)O erro est\u00E1 no final, quando era pra ter feito 98 - 1 ao inves de 98 + 1");
                    var p4 = teclado("");
                    if (p4 == "d") {
                        contagem++;
                    }
                    console.clear();
                    console.log("Luc\u00E3o foi ao a\u00E7olgue comprar 3 pe\u00E7as de Picanha, na qual est\u00E1va 69,90/Kg, o peso total das 3 pe\u00E7as foi de 4,75Kg, quantos reais Luc\u00E3o teve que pagar?");
                    console.log("a)R$316:02");
                    console.log("b)R$237,40");
                    console.log("c)R$332,02");
                    console.log("d)R$299,99");
                    var p5 = teclado("");
                    if (p5 == "c") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p6 = teclado("");
                    if (p6 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p7 = teclado("");
                    if (p7 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p8 = teclado("");
                    if (p8 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p9 = teclado("");
                    if (p9 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p_4 = teclado("");
                    if (p_4 == "") {
                        contagem++;
                    }
                    console.log("sua pontua\u00E7\u00E3o foi de ".concat(contagem, "/10"));
                }
                else if (p === 2) {
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p1 = teclado("");
                    if (p1 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p2 = teclado("");
                    if (p2 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p3 = teclado("");
                    if (p3 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p4 = teclado("");
                    if (p4 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p5 = teclado("");
                    if (p5 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p6 = teclado("");
                    if (p6 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p7 = teclado("");
                    if (p7 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p8 = teclado("");
                    if (p8 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p9 = teclado("");
                    if (p9 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p10 = teclado("");
                    if (p10 == "") {
                        contagem++;
                    }
                    console.log("sua pontua\u00E7\u00E3o foi de ".concat(contagem, "/10"));
                }
                else if (p === 3) {
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p1 = teclado("");
                    if (p1 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p2 = teclado("");
                    if (p2 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p3 = teclado("");
                    if (p3 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p4 = teclado("");
                    if (p4 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p5 = teclado("");
                    if (p5 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p6 = teclado("");
                    if (p6 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p7 = teclado("");
                    if (p7 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p8 = teclado("");
                    if (p8 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p9 = teclado("");
                    if (p9 == "") {
                        contagem++;
                    }
                    console.clear();
                    console.log("");
                    console.log("a)");
                    console.log("b)");
                    console.log("c)");
                    console.log("d)");
                    var p10 = teclado("");
                    if (p10 == "") {
                        contagem++;
                    }
                    console.log("sua pontua\u00E7\u00E3o foi de ".concat(contagem, "/10"));
                }
                else if (p === 0) {
                    break;
                }
                else {
                    console.log("Algo deu erro!!");
                }
            }
            else if (n_1 === 0) {
                break;
            }
        }
    }
    else if (n === 0) {
        break;
    }
}
