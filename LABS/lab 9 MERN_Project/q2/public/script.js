const form = document.getElementById('productForm');
const table = document.getElementById('productTable');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const product = {
    name: form.name.value,
    category: form.category.value,
    price: Number(form.price.value),
    description: form.description.value
  };

  const id = form.productId.value;
  if (id) {
    await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
  } else {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
  }

  form.reset();
  loadProducts();
});

async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();

  table.innerHTML = products.map(p => `
    <tr>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.price}</td>
      <td>${p.description}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editProduct('${p._id}')">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteProduct('${p._id}')">Delete</button>
      </td>
    </tr>
  `).join('');
}

async function editProduct(id) {
  const res = await fetch(`/api/products`);
  const products = await res.json();
  const p = products.find(prod => prod._id === id);
  form.productId.value = p._id;
  form.name.value = p.name;
  form.category.value = p.category;
  form.price.value = p.price;
  form.description.value = p.description;
}

async function deleteProduct(id) {
  if (confirm('Delete this product?')) {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    loadProducts();
  }
}

loadProducts();
