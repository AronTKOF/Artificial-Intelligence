// Função para renderizar as ferramentas
function renderTools(tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        
        toolCard.innerHTML = `
            <div class="tool-header">
                <h3 class="tool-name">${tool.name}</h3>
            </div>
            <div class="tool-body">
                <p class="tool-description">${tool.description}</p>
                <div class="tool-meta">
                    <span class="tool-category">${tool.category}</span>
                    <span class="tool-plan ${tool.plan.toLowerCase()}">${tool.plan}</span>
                </div>
                <a href="${tool.link}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visitar Site →
                </a>
            </div>
        `;
        
        toolsGrid.appendChild(toolCard);
    });
    
    document.getElementById('toolCount').textContent = `Mostrando ${tools.length} de ${aiTools.length} ferramentas`;
}

// Função para filtrar as ferramentas
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
}

// Preencher categorias no dropdown
function populateCategories() {
    const categories = [...new Set(aiTools.map(tool => tool.category))];
    const categoryFilter = document.getElementById('categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    renderTools(aiTools);
    
    // Event listeners
    document.getElementById('searchInput').addEventListener('input', filterTools);
    document.getElementById('categoryFilter').addEventListener('change', filterTools);
    document.getElementById('planFilter').addEventListener('change', filterTools);
});