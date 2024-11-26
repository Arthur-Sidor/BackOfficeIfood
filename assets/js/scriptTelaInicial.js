// Alterna a classe 'active' nas opções do menu
document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', () => {
      // Remove 'active' de todas as opções
      document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
      
      // Adiciona 'active' ao item clicado
      item.classList.add('active');
    });
  });
  
  // Dados para o gráfico de pedidos
  const orderData = [110, 130, 120, 140, 150, 160]; // Quantidade de pedidos de Jan a Jun
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  
  const ctx = document.getElementById('ordersChart').getContext('2d');
  const ordersChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'Quantidade de pedidos',
        data: orderData,
        backgroundColor: 'rgba(211, 47, 47, 0.5)',
        borderColor: 'rgba(211, 47, 47, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Dados de exemplo para atualizar as estatísticas principais
  const dashboardData = {
    "newDishes": "120 novos",
    "ordersIncrease": "+15%",
    "newClients": "4.500 novos foodlovers",
    "revenue": "R$120.500"
  };
  
  // Função para atualizar o dashboard com os novos dados
  function updateDashboard() {
    document.getElementById('newDishes').innerText = dashboardData.newDishes;
    document.getElementById('ordersIncrease').innerText = dashboardData.ordersIncrease;
    document.getElementById('newClients').innerText = dashboardData.newClients;
    document.getElementById('revenue').innerText = dashboardData.revenue;
  }
  
  // Simulação de atualização dos dados após 5 segundos
  setTimeout(updateDashboard, 5000);
  