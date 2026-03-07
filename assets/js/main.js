const APP = {
  cart: JSON.parse(localStorage.getItem('kot_cart') || '[]'),
  fav: JSON.parse(localStorage.getItem('kot_fav') || '[]'),
  compare: JSON.parse(localStorage.getItem('kot_cmp') || '[]'),
  products: []
};

function showToast(message, duration = 1500) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

function saveState() {
  localStorage.setItem('kot_cart', JSON.stringify(APP.cart));
  localStorage.setItem('kot_fav', JSON.stringify(APP.fav));
  localStorage.setItem('kot_cmp', JSON.stringify(APP.compare));
  updateBadges();
}

function updateBadges() {
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) cartBtn.innerText = `Корзина (${APP.cart.length})`;
  const favBtn = document.getElementById('favBtn');
  if (favBtn) favBtn.innerText = `Избранное (${APP.fav.length})`;
  const cmpBtn = document.getElementById('cmpBtn');
  if (cmpBtn) cmpBtn.innerText = `Сравнение (${APP.compare.length})`;
}

const watchImages = [
  'https://avatars.mds.yandex.net/i?id=4c11f79ab8152341bd98714487d9284e56c1e002-12471923-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=849a3a8f3d0e65374d99efe387a60ae4aabf1043-4055578-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=73db4b686a66a97ab04438c907f7a4083d9f6aa3-10113106-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=a8acc23ecf8e1120663c6ac2549a0bbc56555073-9682103-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=abce4dc29868ff0ae2c0682951d784afd4a0c08b-4146185-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=435e8acbaa874cf6b06fbd6f88442c256daf986e-5277129-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=1f949467f998c8c105fb1b35aa05c464e9ac02da-9164755-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=406958be95b2c6b793848fc22028272d-5663902-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=e44fb0c92d712a0e93b0ac521c4953ad-4275405-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=b9a52da024c565c5c2cd698dfcaea3f31eb99a13-7669654-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=f583abd0af01910c02cbe9673eef74f7efd9d051-12423448-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=6ae189ca018026681ed3d87b4c638d4fb0648ec6-9053276-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=43778da8633237dd4120294f0e74a23d8967caf2-10265482-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=fb123dfa0d761026ed71442a576aed6787fa3388-5440258-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=cfb5c92ae2d34b1d13833d9d602f6ff8b35a19e2-4289950-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=3e7832db6f0611600955d7335c6e1bf905421966-2899831-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=c569a49dda349ebc5d37ff6661b38bab7fb85bda-4219929-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=1570b690ae07ba4602df58cf1ef993ebda52d105-15408539-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=e37f05dd3b2eb271249fca1b7475f222e0b29492-4322301-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=4567c3490ac0e548f7b02354ffc2c5b539a48c36-15586103-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=338d51155fb8ec739181f6f456d34cff935d1f6e-5220800-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=41aef6878387df8c0b1a93e87e1fff585475c34a-5222088-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=1dea5e5c501ac847422c935ba86ca5ce44b6a463-3744215-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=d1397ab33f9c30e01f42cbebd7f330d5152b035b-4532852-images-thumbs&n=13'
];

function genProducts() {
  const products = [
    { id: 'p0', brand: 'Platinor', model: 'Avrora Silver', title: 'Platinor Avrora Silver', price: 350, desc: 'Серебро 925 пробы, классический дизайн', type: 'Кварцевые', material: 'серебро' },
    { id: 'p1', brand: 'Platinor', model: 'Avrora Gold Classic', title: 'Platinor Avrora Gold Classic', price: 1400, desc: 'Золото 585 пробы, корпус из драгоценного металла', type: 'Механические', material: 'золото' },
    { id: 'p2', brand: 'Platinor', model: 'Avrora Skeleton', title: 'Platinor Avrora Skeleton', price: 580, desc: 'Серебро, открытый механизм', type: 'Автомат', material: 'серебро' },

    { id: 'p3', brand: 'Franck Muller', model: 'Vanguard Racing', title: 'Franck Muller Vanguard Racing', price: 9200, desc: 'Бочкообразный корпус, хронограф', type: 'Автомат', material: 'сталь' },
    { id: 'p4', brand: 'Franck Muller', model: 'Vanguard Yachting', title: 'Franck Muller Vanguard Yachting', price: 11500, desc: 'Водонепроницаемость, морской стиль', type: 'Автомат', material: 'сталь' },
    { id: 'p5', brand: 'Franck Muller', model: 'Vanguard Carbon Crypto', title: 'Franck Muller Vanguard Carbon Crypto', price: 15800, desc: 'Карбон, ограниченная серия', type: 'Автомат', material: 'карбон' },

    { id: 'p6', brand: 'Seaborne', model: 'Sea Venture', title: 'Seaborne Seaborn Sea Venture', price: 395, desc: 'Дайверские, сталь, 200м WR', type: 'Автомат', material: 'сталь' },
    { id: 'p7', brand: 'Seaborne', model: 'Slimline', title: 'Seaborne Seaborn Slimline', price: 420, desc: 'Тонкий корпус, универсальный стиль', type: 'Автомат', material: 'сталь' },
    { id: 'p8', brand: 'Seaborne', model: 'GMT Edition', title: 'Seaborne Seaborn GMT Edition', price: 490, desc: 'GMT-функция, два часовых пояса', type: 'Автомат', material: 'сталь' },

    { id: 'p9', brand: 'Concord', model: 'Mariner Blue Dial Steel', title: 'Concord Mariner Blue Dial Steel', price: 1650, desc: '12-гранный безель, сталь', type: 'Кварцевые', material: 'сталь' },
    { id: 'p10', brand: 'Concord', model: 'Mariner Two-Tone', title: 'Concord Mariner Two-Tone', price: 2900, desc: 'Сталь и золото, элегантность', type: 'Кварцевые', material: 'золото' }, // отнесём к золоту
    { id: 'p11', brand: 'Concord', model: 'Mariner Diamond Lady', title: 'Concord Mariner Diamond Lady', price: 3400, desc: 'С бриллиантами, женская модель', type: 'Кварцевые', material: 'сталь' },

    { id: 'p12', brand: 'Cronos', model: 'Submariner 200m', title: 'Cronos Chronos Submariner 200m', price: 230, desc: 'Дайверские, керамический безель', type: 'Автомат', material: 'сталь' },
    { id: 'p13', brand: 'Cronos', model: 'GMT Master II Style', title: 'Cronos Chronos GMT Master II Style', price: 275, desc: 'GMT, стальной браслет', type: 'Автомат', material: 'сталь' },
    { id: 'p14', brand: 'Cronos', model: 'Vintage Military', title: 'Cronos Chronos Vintage Military', price: 210, desc: 'Винтажный стиль, нейлоновый ремешок', type: 'Автомат', material: 'сталь' },

    { id: 'p15', brand: 'Longines', model: 'Heritage Classic Sector', title: 'Longines Heritage Classic Sector', price: 2350, desc: 'Секторный циферблат, винтаж', type: 'Механические', material: 'сталь' },
    { id: 'p16', brand: 'Longines', model: 'Heritage Military Marine Nationale', title: 'Longines Heritage Military Marine Nationale', price: 2100, desc: 'Военно-морская история', type: 'Механические', material: 'сталь' },
    { id: 'p17', brand: 'Longines', model: 'Heritage Avigation BigEye', title: 'Longines Heritage Avigation BigEye', price: 2800, desc: 'Авиационный хронограф', type: 'Механические', material: 'сталь' },

    { id: 'p18', brand: 'Solace', model: 'Rose Gold Minimalist', title: 'Solace Solace Rose Gold Minimalist', price: 160, desc: 'Позолота, минимализм', type: 'Кварцевые', material: 'золото' },
    { id: 'p19', brand: 'Solace', model: 'Automatic Black Steel', title: 'Solace Solace Automatic Black Steel', price: 240, desc: 'Черный корпус, автоподзавод', type: 'Автомат', material: 'сталь' },
    { id: 'p20', brand: 'Solace', model: 'Heritage Edition', title: 'Solace Solace Heritage Edition', price: 195, desc: 'Классический дизайн', type: 'Кварцевые', material: 'сталь' },

    { id: 'p21', brand: 'Ernest Borel', model: 'Boreal Skeleton', title: 'Ernest Borel Boreal Skeleton', price: 1350, desc: 'Скелетонированный циферблат', type: 'Автомат', material: 'сталь' },
    { id: 'p22', brand: 'Ernest Borel', model: 'Cocktail Special', title: 'Ernest Borel Boreal Cocktail Special', price: 1180, desc: 'Нарядный дизайн', type: 'Автомат', material: 'сталь' },
    { id: 'p23', brand: 'Ernest Borel', model: 'Automatic Date', title: 'Ernest Borel Boreal Automatic Date', price: 1050, desc: 'Дата, классика', type: 'Автомат', material: 'сталь' },

    { id: 'p24', brand: 'Seaborne', model: 'Titanium Diver', title: 'Seaborne Titanium Diver', price: 650, desc: 'Корпус из титана, водонепроницаемость 300 м', type: 'Автомат', material: 'титан' }
  ];

  APP.products = products.map((p, idx) => ({
    ...p,
    image: watchImages[idx % watchImages.length]
  }));
  return APP.products;
}

function filterByBrand(brand) {
  const filtered = APP.products.filter(p => p.brand === brand);
  renderGrid('catalogGrid', filtered);
}

function filterByMaterial(material) {
  const filtered = APP.products.filter(p => p.material && p.material.toLowerCase() === material.toLowerCase());
  renderGrid('catalogGrid', filtered);
}

function filterByType(type) {
  const filtered = APP.products.filter(p => p.type === type);
  renderGrid('catalogGrid', filtered);
}

function renderGrid(containerId, items) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  cont.innerHTML = '';
  items.forEach(it => {
    const d = document.createElement('div');
    d.className = 'product';
    d.innerHTML = `
  <div class="thumb"><img src="${it.image}" alt="${it.title}" loading="lazy"></div>
  <div class="title">${it.title}</div>
  <div class="small">${it.brand} · ${it.type}</div>
  <div class="row">
    <div class="price badge">$${it.price}</div>
    <div style="flex:1"></div>
    <button class="btn" onclick="addToCart('${it.id}')">В корзину</button>
  </div>
  <div style="display:flex;gap:8px;margin-top:8px">
    <button class="ghost fav-btn ${APP.fav.includes(it.id) ? 'active' : ''}" data-id="${it.id}" onclick="addToFav('${it.id}')">♥</button>
    <button class="ghost cmp-btn ${APP.compare.includes(it.id) ? 'active' : ''}" data-id="${it.id}" onclick="addToCompare('${it.id}')">⚖</button>
    <a class="ghost" href="product.html?id=${it.id}">Подробнее</a>
  </div>`;
    cont.appendChild(d);
  });
}

function searchCatalog(q) {
  const arr = APP.products.filter(p =>
    p.title.toLowerCase().includes(q.toLowerCase()) ||
    p.desc.toLowerCase().includes(q.toLowerCase())
  );
  renderGrid('catalogGrid', arr);
}

function addToCart(id) {
  if (!APP.cart.includes(id)) {
    APP.cart.push(id);
    showToast('Товар добавлен в корзину');
  } else {
    showToast('Товар уже в корзине');
  }
  saveState();
}

function addToFav(id) {
  const wasInFav = APP.fav.includes(id);
  if (!wasInFav) {
    APP.fav.push(id);
    showToast('Добавлено в избранное ♥');
  } else {
    APP.fav = APP.fav.filter(x => x !== id);
    showToast('Удалено из избранного');
  }
  saveState();
  updateActiveButtons();
}

function addToCompare(id) {
  if (APP.compare.includes(id)) {
    APP.compare = APP.compare.filter(x => x !== id);
    showToast('Удалено из сравнения');
  } else if (APP.compare.length < 4) {
    APP.compare.push(id);
    showToast('Добавлено в сравнение');
  } else {
    showToast('Можно сравнить не более 4 товаров');
    return;
  }
  saveState();
  updateActiveButtons();
}
function removeFromCart(id) {
  APP.cart = APP.cart.filter(x => x !== id);
  saveState();
  renderCartList();
}

function renderCartList() {
  const list = document.getElementById('cartList');
  if (!list) return;
  list.innerHTML = '';
  APP.cart.forEach(cid => {
    const p = APP.products.find(x => x.id === cid) || { title: cid, price: 0, image: '' };
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.padding = '8px 0';
    row.innerHTML = `
      <div style="display:flex; gap:12px;">
        <div class="thumb" style="width:60px; height:60px;">
          <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">
        </div>
        <div>
          <strong>${p.title}</strong>
          <div class="small">${p.desc}</div>
        </div>
      </div>
      <div style="text-align:right">
        <div class="small">$${p.price}</div>
        <button class="ghost" onclick="removeFromCart('${cid}')">Удалить</button>
      </div>`;
    list.appendChild(row);
  });
  updateBadges();
}

function renderFavs() {
  const list = document.getElementById('favList');
  if (!list) return;
  list.innerHTML = '';
  APP.fav.forEach(fid => {
    const p = APP.products.find(x => x.id === fid) || { title: fid, price: 0, image: '' };
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="thumb"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
      <div class="title">${p.title}</div>
      <div class="small">${p.desc}</div>
      <div class="row">
        <button class="btn" onclick="addToCart('${fid}')">В корзину</button>
        <button class="ghost" onclick="toggleFav('${fid}')">Удалить</button>
      </div>`;
    list.appendChild(el);
  });
}
function toggleFav(id) {
  APP.fav = APP.fav.includes(id) ? APP.fav.filter(x => x !== id) : [...APP.fav, id];
  saveState();
  renderFavs();
}

function updateActiveButtons() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = btn.dataset.id;
    if (APP.fav.includes(id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  document.querySelectorAll('.cmp-btn').forEach(btn => {
    const id = btn.dataset.id;
    if (APP.compare.includes(id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderCompare() {
  const grid = document.getElementById('cmpGrid');
  const tableContainer = document.getElementById('compareTable');
  if (!grid) return;

  grid.innerHTML = '';
  if (tableContainer) tableContainer.innerHTML = '';

  if (APP.compare.length === 0) {
    grid.innerHTML = '<div class="muted" style="grid-column:1/-1; text-align:center;">Нет товаров для сравнения. Добавьте из каталога.</div>';
    return;
  }

  APP.compare.forEach(cid => {
    const p = APP.products.find(x => x.id === cid) || { title: cid, price: 0, image: '', brand: '', type: '', desc: '', material: '' };
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="thumb"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
      <div class="title">${p.title}</div>
      <div class="small">${p.brand} · ${p.type}</div>
      <div class="small">$${p.price}</div>
      <div class="row">
        <button class="btn" onclick="addToCart('${cid}')">В корзину</button>
        <button class="ghost" onclick="removeFromCompare('${cid}')">Удалить</button>
      </div>`;
    grid.appendChild(el);
  });

  if (!tableContainer) return;
  if (APP.compare.length < 2) {
    tableContainer.innerHTML = '<div class="muted" style="text-align:center; padding:20px;">Добавьте минимум 2 товара для сравнения</div>';
    return;
  }

  const productsForCompare = APP.compare.map(cid => APP.products.find(x => x.id === cid) || {}).filter(p => p.id); // убираем возможные undefined

  const fields = [
    { label: 'Бренд', key: 'brand' },
    { label: 'Модель', key: 'model' },
    { label: 'Цена', key: 'price', format: (v) => `$${v}` },
    { label: 'Тип механизма', key: 'type' },
    { label: 'Материал', key: 'material' },
    { label: 'Описание', key: 'desc' }
  ];

  let tableHtml = '<table class="compare-table"><thead><tr><th>Характеристика</th>';
  productsForCompare.forEach(p => {
    tableHtml += `<th>${p.title || ''}</th>`;
  });
  tableHtml += '</tr></thead><tbody>';

  fields.forEach(field => {
    tableHtml += `<tr><td>${field.label}</td>`;
    productsForCompare.forEach(p => {
      let value = p[field.key];
      if (value === undefined) value = '-';
      if (field.format) value = field.format(value);
      tableHtml += `<td>${value}</td>`;
    });
    tableHtml += '</tr>';
  });
  tableHtml += '</tbody></table>';

  tableContainer.innerHTML = tableHtml;
}
function removeFromCompare(id) {
  APP.compare = APP.compare.filter(x => x !== id);
  saveState();
  renderCompare();
}

function renderProductPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id') || 'p0';
  const p = APP.products.find(x => x.id === id) || APP.products[0];
  const holder = document.getElementById('productHolder');
  if (!holder) return;

  holder.innerHTML = `
    <div class="card">
      <div class="thumb"><img src="${p.image}" alt="${p.title}"></div>
      <h2>${p.title}</h2>
      <div class="small">${p.brand} · ${p.type}</div>
      <p class="muted">${p.desc}</p>
      <div class="row">
        <div class="badge">$${p.price}</div>
        <div style="flex:1"></div>
        <button class="btn" onclick="addToCart('${p.id}')">В корзину</button>
      </div>
    </div>
    <div style="margin-top:12px; display:flex; gap:12px; flex-wrap:wrap;">
      <button class="ghost fav-btn ${APP.fav.includes(p.id) ? 'active' : ''}" data-id="${p.id}" onclick="addToFav('${p.id}')">♥ Добавить в избранное</button>
      <button class="ghost cmp-btn ${APP.compare.includes(p.id) ? 'active' : ''}" data-id="${p.id}" onclick="addToCompare('${p.id}')">⚖ Сравнить</button>
    </div>`;
  updateActiveButtons();
}

function openCheckout() {
  const panel = document.getElementById('checkoutPanel');
  if (panel) panel.classList.add('open');
}
function closeCheckout() {
  const panel = document.getElementById('checkoutPanel');
  if (panel) panel.classList.remove('open');
}
function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  if (APP.cart.length === 0) { alert('Корзина пуста'); return; }
  const deliveryType = data.get('deliveryType');
  if (deliveryType === 'delivery') {
    if (!data.get('address')) { alert('Введите адрес доставки'); return; }
  } else {
    if (!data.get('pickup')) { alert('Выберите пункт самовывоза'); return; }
  }
  alert('Заказ принят. Спасибо.');
  APP.cart = [];
  saveState();
  renderCartList();
  closeCheckout();
}

function initMobileMenu() {
  const isMobileTouch = window.matchMedia('(max-width: 640px) and (hover: none) and (pointer: coarse)').matches;
  if (!isMobileTouch) return;

  const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown, .dropdown-submenu')) {
      dropdowns.forEach(item => item.classList.remove('open'));
    }
  });

  dropdowns.forEach(item => {
    const link = item.querySelector('a:first-child');
    if (!link) return;

    link.addEventListener('click', (e) => {
      const submenu = item.querySelector('.dropdown-content, .submenu-content');
      if (!submenu) return;

      if (item.classList.contains('open')) {
        item.classList.remove('open');
      } else {
        e.preventDefault();
        item.classList.add('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  genProducts();
  updateBadges();
  renderGrid('productGrid', APP.products.slice(0, 8));
  renderGrid('catalogGrid', APP.products);
  renderCartList();
  renderFavs();
  renderCompare();
  renderProductPage();
  updateActiveButtons();
  initMobileMenu();
});
