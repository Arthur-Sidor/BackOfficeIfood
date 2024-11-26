// Gráfico interativo com todos os meses do ano
const ctx = document.getElementById('myChart').getContext('2d');
let chartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'Vendas',
        data: [30, 40, 25, 35, 45, 50, 60, 40, 50, 55, 65, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }, {
        label: 'Despesas',
        data: [20, 30, 15, 25, 30, 45, 55, 35, 45, 50, 60, 65],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
let myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Filtro do gráfico
function filterChart() {
    const filter = document.getElementById('chartFilter').value;
    let newDatasets = [];

    if (filter === 'vendas') {
        newDatasets = [chartData.datasets[0]];
    } else if (filter === 'despesas') {
        newDatasets = [chartData.datasets[1]];
    } else {
        newDatasets = chartData.datasets;
    }

    myChart.data.datasets = newDatasets;
    myChart.update();
}

// Exportar dados do gráfico como CSV
function exportChartData() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Mês,Vendas,Despesas\n";

    chartData.labels.forEach((label, index) => {
        const vendas = chartData.datasets[0].data[index];
        const despesas = chartData.datasets[1].data[index];
        csvContent += `${label},${vendas},${despesas}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "chart_data.csv");
    document.body.appendChild(link);
    link.click();
}

// Validação e adicionar nova linha na tabela via modal
function addPayment() {
    const date = document.getElementById('paymentDate').value;
    const order = document.getElementById('paymentOrder').value;
    const value = document.getElementById('paymentValue').value;
    const status = document.getElementById('paymentStatus').value;

    if (date && order && !isNaN(value) && value > 0) {
        const table = document.getElementById('paymentTable').querySelector('tbody');
        const row = table.insertRow();
        row.classList.add(`status-${status}`);
        row.insertCell(0).innerHTML = date;
        row.insertCell(1).innerHTML = order;
        row.insertCell(2).innerHTML = `R$ ${value}`;
        row.insertCell(3).innerHTML = status.charAt(0).toUpperCase() + status.slice(1);
        $('#addPaymentModal').modal('hide');
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

// Filtro de pagamentos por status
function filterPayments() {
    const filter = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('#paymentTable tbody tr');

    rows.forEach(row => {
        if (filter === 'all') {
            row.style.display = '';
        } else {
            const status = row.classList.contains(`status-${filter}`);
            row.style.display = status ? '' : 'none';
        }
    });
}

// Gerar PDF incluindo gráficos e tabelas
function generatePDF() {
    const element = document.querySelector('.content'); 
    html2pdf().from(element).save('relatorio.pdf');
}
