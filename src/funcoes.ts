function multiplicar(num1: number, num2: number): number {
    // numeros.reduce();
    const result: number = num1 * num2;
    return result;
};

function saudar(nome: string): string {
    const saudacao: string = `Olá ${nome}!!`;

    return saudacao;
};

console.log(multiplicar(2, 6));
console.log(saudar("Mateus"));
