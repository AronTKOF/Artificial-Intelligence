// Versão corrigida e melhorada do script.js

// Aguarda o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os dados das ferramentas
    loadTools();
    
    // Configura os event listeners
    setupEventListeners();
});

function loadTools() {
    // Verifica se aiTools já está disponível globalmente
    if (typeof aiTools !== 'undefined' && aiTools.length > 0) {
        initializeApp();
    } else {
        // Alternativa caso os dados não estejam disponíveis imediatamente
        setTimeout(() => {
            if (typeof aiTools !== 'undefined') {
                initializeApp();
            } else {
                console.error('Dados das ferramentas não carregados');
                document.getElementById('toolsGrid').innerHTML = 
                    '<p class="error">Erro ao carregar os dados. Recarregue a página.</p>';
            }
        }, 500);
    }
}

function initializeApp() {
    populateCategories();
    renderTools(aiTools);
    updateToolCount(aiTools.length);
}

function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterTools);
    document.getElementById('categoryFilter').addEventListener('change', filterTools);
    document.getElementById('planFilter').addEventListener('change', filterTools);
}

function renderTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = '<p class="no-results">Nenhuma ferramenta encontrada com esses critérios.</p>';
        return;
    }
    
    toolsGrid.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        toolCard.innerHTML = `
            <div class="tool-header">
                <h3 class="tool-name">${escapeHTML(tool.name)}</h3>
            </div>
            <div class="tool-body">
                <p class="tool-description">${escapeHTML(tool.description)}</p>
                <div class="tool-meta">
                    <span class="tool-category">${escapeHTML(tool.category)}</span>
                    <span class="tool-plan ${tool.plan.toLowerCase()}">${escapeHTML(tool.plan)}</span>
                </div>
                <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visitar Site →
                </a>
            </div>
        `;
        
        toolsGrid.appendChild(toolCard);
    });
}

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

function filterTools() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const plan = document.getElementById('planFilter').value;
    
    const filteredTools = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === '' || tool.category === category;
        const matchesPlan = plan === '' || tool.plan === plan;
        
        return matchesSearch && matchesCategory && matchesPlan;
    });
    
    renderTools(filteredTools);
    updateToolCount(filteredTools.length);
}

function populateCategories() {
    const categories = [...new Set(aiTools.map(tool => tool.category).sort()];
    const categoryFilter = document.getElementById('categoryFilter');
    
    // Limpa opções existentes (mantendo a primeira)
    while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
    }
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

function updateToolCount(count) {
    document.getElementById('toolCount').textContent = 
        `Mostrando ${count} de ${aiTools.length} ferramentas`;
}
