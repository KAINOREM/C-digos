function calcularSalario() {
    let valorHora = parseFloat(document.getElementById('n1').value);
    let horasMes = parseFloat(document.getElementById('n2').value);

    if (isNaN(valorHora) || isNaN(horasMes)) {
        document.getElementById('resultado').innerHTML = "<p>Por favor, preencha todos os campos corretamente.</p>";
        return;
    }

    let salarioBruto = valorHora * horasMes;

    let ir = salarioBruto * 11 / 100;
    let inss = salarioBruto * 8 / 100;
    let sindicato = salarioBruto * 5 / 100;

    let salarioLiquido = salarioBruto - ir - inss - sindicato;

    document.getElementById('resultado').innerHTML = `
        <p>Seu salário bruto é: R$ ${salarioBruto.toFixed(2)}</p>
        <p>Contribuição ao imposto de renda: R$ ${ir.toFixed(2)}</p>
        <p>Contribuição ao INSS: R$ ${inss.toFixed(2)}</p>
        <p>Contribuição ao sindicato: R$ ${sindicato.toFixed(2)}</p>
        <p>Seu salário líquido é: R$ ${salarioLiquido.toFixed(2)}</p>
    `;
}
