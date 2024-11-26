// Funções para mudar o texto no painel de desempenho com base no período selecionado
document.getElementById('btn-personalizado').addEventListener('click', function () {
    atualizarDesempenho('R$200,00', 'R$50,00');
});

document.getElementById('btn-7-dias').addEventListener('click', function () {
    atualizarDesempenho('R$100,00', 'R$20,00');
});

document.getElementById('btn-30-dias').addEventListener('click', function () {
    atualizarDesempenho('R$500,00', 'R$150,00');
});

// Função que atualiza os valores de receita e lucro
function atualizarDesempenho(receita, lucro) {
    document.getElementById('receita-total').textContent = receita;
    document.getElementById('lucro-total').textContent = lucro;
}

function showFeedback(type) {
    if (type === 'happy') {
        alert("Obrigado pelo feedback positivo! 😊");
    } else if (type === 'sad') {
        alert("Sentimos muito que sua experiência não foi boa. 😔");
    }
}

// Script para alternar a classe 'active' entre os botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-group .btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

// Adicionar interatividade para mostrar/ocultar alertas
document.addEventListener('DOMContentLoaded', function() {
    const alerts = document.querySelectorAll('.alert');

    alerts.forEach(alert => {
        // Adiciona botão de fechar
        const closeButton = alert.querySelector('.close-btn');

        // Adiciona evento para o botão de fechar
        closeButton.addEventListener('click', function() {
            alert.classList.add('collapsed');
            setTimeout(() => {
                alert.style.display = 'none';
            }, 300); // Espera o tempo de transição
        });

        // Adiciona evento para mostrar/ocultar alertas ao clicar
        alert.addEventListener('click', function() {
            if (alert.classList.contains('collapsed')) {
                alert.classList.remove('collapsed');
                alert.style.display = 'block';
            } else {
                alert.classList.add('collapsed');
                setTimeout(() => {
                    alert.style.display = 'none';
                }, 300); // Espera o tempo de transição
            }
        });
    });
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.card ul li');

    items.forEach(item => {
        item.addEventListener('click', function() {
            // Remove a classe 'active' de todos os itens
            items.forEach(li => li.classList.remove('active'));

            // Adiciona a classe 'active' ao item clicado
            item.classList.add('active');

            // Exibe um alerta com a forma de pagamento selecionada
            const paymentType = item.textContent.trim().split(':')[0];
            alert(`Você selecionou: ${paymentType}`);
        });
    });
});
