const tabela = []
    for (let i = 1; i <= 10; i++) {
        tabela[i] = [];
        for(let j = 1; j <= 10; j++){
            tabela[i][j] = j * i;
        }
    }
console.table(tabela)