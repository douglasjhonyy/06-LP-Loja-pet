/* -----------------------------------------------
       Função: Adicionar produto ao carrinho
       Simula o clique no botão "+ Adicionar"
    ----------------------------------------------- */
    function adicionarAoCarrinho(botao) {
      // Guarda o texto original do botão
      const textoOriginal = botao.textContent;
 
      // Muda o visual para feedback visual
      botao.textContent = '✓ Adicionado!';
      botao.style.background = '#4CAF50';
      botao.disabled = true;
 
      // Volta ao estado original após 2 segundos
      setTimeout(function() {
        botao.textContent = textoOriginal;
        botao.style.background = '';
        botao.disabled = false;
      }, 2000);
    }
 
    /* -----------------------------------------------
       Função: Agendar consulta (captura de e-mail)
    ----------------------------------------------- */
    function agendarConsulta() {
      // Pega o valor digitado no campo de e-mail
      const input = document.getElementById('emailInput');
      const email = input.value.trim();
 
      // Validação básica: campo vazio?
      if (!email) {
        alert('Por favor, digite seu e-mail!');
        input.focus();
        return;
      }
 
      // Validação: formato de e-mail válido?
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        alert('Por favor, digite um e-mail válido!');
        input.focus();
        return;
      }
 
      // Sucesso! (Em produção: enviar para um backend ou serviço de e-mail)
      alert('🎉 Perfeito! Entraremos em contato em breve no e-mail: ' + email);
      input.value = ''; // limpa o campo
    }
 
    /* -----------------------------------------------
       Navbar: muda visual ao rolar a página
    ----------------------------------------------- */
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('nav');
 
      if (window.scrollY > 50) {
        // Ao rolar para baixo: fundo mais sólido
        nav.style.background = 'rgba(26, 26, 46, 0.99)';
      } else {
        // No topo: fundo translúcido
        nav.style.background = 'rgba(26, 26, 46, 0.96)';
      }
    });
 
    /* -----------------------------------------------
       Animação de entrada nos cards ao rolar (Intersection Observer)
       Elementos aparecem suavemente quando ficam visíveis
    ----------------------------------------------- */
    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            // Elemento ficou visível: adiciona classe para animar
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 } // dispara quando 10% do elemento está visível
    );
 
    // Aplica o observer em todos os cards
    document.querySelectorAll('.service-card, .produto-card, .depo-card').forEach(function(card) {
      // Estado inicial: invisível e deslocado para baixo
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
 
      // Registra o observer nesse card
      observer.observe(card);
    });