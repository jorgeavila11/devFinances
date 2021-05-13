const Modal = {
    open() {
        //Abrir modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        //fechar modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const transactions = [
    {
        id: '1',
        descricao: 'luz',
        valor: -1200000,
        data: '13/06/2021'
    },
    {
        id: '1',
        descricao: 'luz',
        valor: 5900,
        data: '10/07/2021'
    },
    {
        id: '1',
        descricao: 'luz',
        valor: -3000,
        data: '11/08/2021'
    }
];

const Transaction = {
    entrada() {
        //somar as entradas 
    },
    saida() {
        //somar as saidas

    },
    total() {
        //somar o total

    }
}

const DOM = {
    transactionContainer : document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){        
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTransaction(transaction);
        DOM.transactionContainer.appendChild(tr);
        
    },


    innerHTMLTransaction(transaction) {
        const CSSClass = transaction.valor > 0 ? "income" : "expense";

        const amoute = Utils.formatCurrency(transaction.valor); 

        const html = `
        
            <td class="description">${transaction.descricao}</td>
            <td class="${CSSClass}">${amoute}</td>
            <td class="date">${transaction.data}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
                
        `
        return html
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : "";

        value = String(value).replace(/\D/g,"");

        value = Number(value) / 100;

        value = value.toLocaleString("pt-BR", {
            style:"currency",
            currency: "BRL"
        })

        return signal + value;
    }
}



transactions.forEach(function(transaction){
    DOM.addTransaction(transaction);
});