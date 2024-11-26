

    // Função de feedback
    function showFeedback(type) {
        if (type === 'happy') {
            alert("Obrigado pelo feedback positivo! 😊");
        } else if (type === 'sad') {
            alert("Sentimos muito que sua experiência não foi boa. 😔");
        }
    }

    // Alternar classe 'active' nos botões de desempenho
    const buttons = document.querySelectorAll('.btn-group .btn');
    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Script para adicionar interatividade nos alertas
    const alerts = document.querySelectorAll('.alert');
    if (alerts.length > 0) {
        alerts.forEach(alert => {
            const closeButton = alert.querySelector('.close-btn');
            if (closeButton) {
                closeButton.addEventListener('click', function () {
                    alert.classList.add('collapsed');
                    setTimeout(() => {
                        alert.style.display = 'none';
                    }, 300); // Espera o tempo de transição
                });
            }

            // Mostrar/ocultar alertas ao clicar
            alert.addEventListener('click', function () {
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
    }

    // Script para alternar entre os itens de forma de pagamento
    const items = document.querySelectorAll('.card ul li');
    if (items.length > 0) {
        items.forEach(item => {
            item.addEventListener('click', function () {
                // Remove a classe 'active' de todos os itens
                items.forEach(li => li.classList.remove('active'));

                // Adiciona a classe 'active' ao item clicado
                item.classList.add('active');

                // Exibe um alerta com a forma de pagamento selecionada
                const paymentType = item.textContent.trim().split(':')[0];
                alert(`Você selecionou: ${paymentType}`);
            });
        });
    }

    // Adicionar interatividade ao botão de "Adicionar pedido"
    const addPedidoButton = document.querySelector('.btn-add-pedido');
    if (addPedidoButton) {
        addPedidoButton.addEventListener('click', function () {
            const button = this;
            button.innerText = 'Adicionando...';

            setTimeout(() => {
                button.innerText = 'Adicionar pedido +';
            }, 2000); // Simula uma ação de 2 segundos
        });
    }

    // Função para abrir o popup
    function openPopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'flex';
        }
    }

    // Função para fechar o popup
    function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.style.display = 'none';
        }
    }

    // Adicionar eventos para abrir os popups
    const btnTotal = document.getElementById('btn-total');
    const btnPendentes = document.getElementById('btn-pendentes');
    const btnConfirmados = document.getElementById('btn-confirmados');

    if (btnTotal) {
        btnTotal.addEventListener('click', function () {
            openPopup('popup-total');
        });
    }

    if (btnPendentes) {
        btnPendentes.addEventListener('click', function () {
            openPopup('popup-pendentes');
        });
    }

    if (btnConfirmados) {
        btnConfirmados.addEventListener('click', function () {
            openPopup('popup-confirmados');
        });
    }

    // Adicionar eventos aos botões de fechar dos popups
    const closeButtons = document.querySelectorAll('.close-btn');
    if (closeButtons.length > 0) {
        closeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const popupId = this.getAttribute('data-popup');
                closePopup(popupId);
            });
        });
    }
// Inclua o jsPDF do CDN
const { jsPDF } = window.jspdf;

// Função para gerar o PDF
function gerarPDF() {
    const doc = new jsPDF();
    doc.text('Relatório de Pedidos', 10, 10);
    
    // Obtém a tabela
    const tabela = document.querySelector('.table');
    const rows = tabela.querySelectorAll('tbody tr');

    let y = 20; // Posição inicial na página
    rows.forEach((row, index) => {
        if (index > 0 && y >= 280) {
            doc.addPage();
            y = 10; // Reseta a posição vertical
        }
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => cell.textContent);
        doc.text(rowData.join(' | '), 10, y);
        y += 10;
    });

    doc.save('relatorio-pedidos.pdf');
}

// Adiciona o evento ao botão
document.querySelector('.btn-outline-danger').addEventListener('click', gerarPDF);
document.getElementById('abrir-seletor-data').addEventListener('click', function() {
    document.getElementById('data-relatorio').focus();
});

document.getElementById('baixar-pdf').addEventListener('click', function() {
    const selectedDate = document.getElementById('data-relatorio').value;
    if (!selectedDate) {
        alert('Por favor, selecione uma data.');
        return;
    }
    // Aqui você pode adicionar a lógica para gerar o PDF baseado na data selecionada
    console.log(`Gerar PDF para a data: ${selectedDate}`);
    // Exemplo de como você poderia chamar uma função para gerar o PDF
    generatePDF(selectedDate);
});

function generatePDF(date) {
    // Implementar a lógica para gerar o PDF
    console.log(`Gerar PDF para a data: ${date}`);
    // Substitua isso com a chamada para a API de geração de PDF ou lógica correspondente
}

document.getElementById('abrir-seletor-data').addEventListener('click', function() {
            var dateInput = document.getElementById('data-relatorio');
            if (dateInput.style.display === 'none') {
                dateInput.style.display = 'inline';
            } else {
                dateInput.style.display = 'none';
            }
        });

        document.getElementById('abrir-seletor-data').addEventListener('click', function() {
            var dateInput = document.getElementById('data-relatorio');
            if (dateInput.style.display === 'none') {
                dateInput.style.display = 'inline';
            } else {
                dateInput.style.display = 'none';
            }
        });

        document.getElementById('baixar-pdf').addEventListener('click', function(event) {
            // Aqui você pode adicionar a lógica para baixar o PDF
            // Por exemplo:
            alert('Baixando PDF...');
        });

        