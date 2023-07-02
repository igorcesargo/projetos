// Dados de exemplo (pode ser substituído por dados reais)
const familyTreeData = {
    name: "Você",
    children: [
      {
        name: "Pai",
        children: [
          { name: "Avô Paterno" },
          { name: "Avó Paterna" }
        ]
      },
      {
        name: "Mãe",
        children: [
          { name: "Avô Materno" },
          { name: "Avó Materna" }
        ]
      }
    ]
  };
  
  // Função para renderizar a árvore genealógica
  function renderFamilyTree(data, parentElement) {
    const element = document.createElement("div");
    element.textContent = data.name;
    
    if (data.children) {
      const childrenContainer = document.createElement("div");
      childrenContainer.classList.add("children-container");
      
      data.children.forEach(child => {
        renderFamilyTree(child, childrenContainer);
      });
      
      element.appendChild(childrenContainer);
    }
    
    parentElement.appendChild(element);
  }
  
  // Chamada inicial para renderizar a árvore genealógica
  const treeContainer = document.getElementById("tree-container");
  renderFamilyTree(familyTreeData, treeContainer);
  