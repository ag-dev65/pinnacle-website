(() => {
const SHOP_CONFIG = {
  whatsappNumber: "2348061931865",
  phoneNumber: "+2348061931865",
  deliveryFeeNaira: 2500,
  paymentMode: "test",
  paymentConfigured: false,
  pricingConfigured: false,
  shopEmail: "godgiftonyewenu3@gmail.com",
  shopName: "Pinnacle Emulsion Paint"
};

const PRODUCTS = [
  { id: "interior-wall", name: "Pinnacle Interior Emulsion Paint", brand: "Pinnacle", category: "interior", description: "A Pinnacle interior paint range for home and commercial spaces.", applications: "Interior walls and ceilings. Ask Pinnacle for product-specific surface and application guidance.", image: "image/White_paint_bucket_on_white_2K_20261021065357.jpg", accent: "#075dd8", colors: [{ name: "White", hex: "#f5f4ed" }, { name: "Warm Ivory", hex: "#e9deca" }, { name: "Soft Grey", hex: "#d1d3ce" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "exterior-wall", name: "Pinnacle Exterior Wall Paint", brand: "Pinnacle", category: "exterior", description: "Pinnacle exterior paint for enquiries about outdoor projects.", applications: "Exterior walls. Request product-specific technical details from the company.", image: "image/Paint_bucket_with_navy_lid_2K_20261021065339.jpg", accent: "#ffc20e", colors: [{ name: "White", hex: "#f5f4ed" }, { name: "Sand", hex: "#d1bd9f" }, { name: "Stone Grey", hex: "#aaa99e" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "emulsion", name: "Pinnacle Emulsion Paint", brand: "Pinnacle", category: "emulsion", description: "The Pinnacle emulsion range for residential and trade enquiries.", applications: "Ask Pinnacle for recommended surfaces, preparation and application instructions.", image: "image/Pinnacle 20L Emulsion Paint Bucket.png", accent: "#1671df", colors: [{ name: "White", hex: "#f5f4ed" }, { name: "Warm Ivory", hex: "#e9deca" }, { name: "Pale Grey", hex: "#d1d3ce" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "satin", name: "Pinnacle Satin Finish Paint", brand: "Pinnacle", category: "satin", description: "A satin-finish Pinnacle product range. Contact us for availability and specifications.", applications: "Ask Pinnacle to confirm suitable surfaces and product application details.", image: "image/White_paint_bucket_product_photo…_2K_20261021065409.jpg", accent: "#9466c8", colors: [{ name: "White", hex: "#f5f4ed" }, { name: "Soft Blue", hex: "#97a9ad" }, { name: "Sage", hex: "#aab49b" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "gloss", name: "Pinnacle Gloss Finish Paint", brand: "Pinnacle", category: "gloss", description: "Explore Pinnacle gloss finish paint for your next supply enquiry.", applications: "Ask Pinnacle for suitable surfaces, preparation and application information.", image: "image/White_paint_bucket_product_shot_2K_20261021065413.jpg", accent: "#d64a48", colors: [{ name: "White", hex: "#f5f4ed" }, { name: "Red", hex: "#ae4638" }, { name: "Deep Green", hex: "#385747" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "textured", name: "Pinnacle Textured Paint", brand: "Pinnacle", category: "textured", description: "Contact Pinnacle for textured paint options and product information.", applications: "Request product-specific surface, texture and application guidance.", image: "image/Pinnacle_textured_paint_bucket_2K_20261022070419.jpg", accent: "#bd8150", colors: [{ name: "Sandstone", hex: "#cfbda0" }, { name: "Pebble", hex: "#aaa69b" }, { name: "Earth", hex: "#a66d54" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "primer", name: "Pinnacle Primer & Undercoat", brand: "Pinnacle", category: "primer", description: "Pinnacle primer and undercoat range. Ask the team for product guidance.", applications: "Request surface preparation and compatible finish information from Pinnacle.", image: "image/Pinnacle_20L_Emulsion_Paint_Bucket.png_20261021065408.jpg", accent: "#24845e", colors: [{ name: "White", hex: "#f3f2ec" }, { name: "Grey", hex: "#999d99" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "wood", name: "Pinnacle Wood Paint", brand: "Pinnacle", category: "wood", description: "A Pinnacle paint range for wood-product enquiries.", applications: "Ask Pinnacle to confirm intended timber surfaces and application guidance.", image: "image/Pinnacle_wood_paint_bucket_2K_20261021065351.jpg", accent: "#865132", colors: [{ name: "Natural", hex: "#bb8a59" }, { name: "Dark Brown", hex: "#684936" }, { name: "White", hex: "#f5f4ed" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "metal", name: "Pinnacle Metal Paint", brand: "Pinnacle", category: "metal", description: "Contact Pinnacle for metal paint availability and specifications.", applications: "Request suitable metal surfaces, preparation and product details from the company.", image: "image/Pinnacle_metal_paint_bucket_2K_20261022070429.jpg", accent: "#343a42", colors: [{ name: "Charcoal", hex: "#4b4d49" }, { name: "Green", hex: "#415b49" }, { name: "Red", hex: "#ae4638" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] },
  { id: "waterproof", name: "Pinnacle Waterproof Paint", brand: "Pinnacle", category: "waterproof", description: "Enquire about the Pinnacle waterproof paint range and its product information.", applications: "Ask Pinnacle to confirm use cases, substrate suitability and technical guidance.", image: "image/White_paint_bucket_commercial_ph…_2K_20261022070413.jpg", accent: "#167b9b", colors: [{ name: "White", hex: "#f2f1e9" }, { name: "Concrete Grey", hex: "#a8aaa4" }, { name: "Sand", hex: "#d1bd9f" }], sizes: ["1 litre", "4 litres", "10 litres", "20 litres"] }
];

const CART_STORAGE_KEY = "colourhouse-cart-v1";
const money = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });
PRODUCTS.forEach(product => {
  product.sizes = product.sizes.map(name => ({ name, price: null }));
});
let cart = loadCart();
let paymentReturnReference = null;
let activeCategory = "all";

const productGrid = document.querySelector("#product-grid");
const cartDrawer = document.querySelector("#cart-drawer");
const drawerBackdrop = document.querySelector("#drawer-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartCount = document.querySelector("#cart-count");
const drawerCount = document.querySelector("#drawer-count");
const cartSubtotal = document.querySelector("#cart-subtotal");
const checkoutButton = document.querySelector("#checkout-button");
const checkoutDialog = document.querySelector("#checkout-dialog");
const confirmationDialog = document.querySelector("#confirmation-dialog");
const productDialog = document.querySelector("#product-dialog");
const orderForm = document.querySelector("#order-form");
const formError = document.querySelector("#form-error");
const productDetailContent = document.querySelector("#product-detail-content");

function loadCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored.filter(item =>
      item && PRODUCTS.some(product => product.id === item.productId) &&
      typeof item.size === "string" && typeof item.color === "string" &&
      Number.isInteger(item.quantity) && item.quantity > 0
    ) : [];
  } catch (error) {
    console.error("Could not read the saved cart from this browser.", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Could not save the cart in this browser.", error);
  }
}

function itemDetails(item) {
  const product = PRODUCTS.find(entry => entry.id === item.productId);
  if (!product) return null;
  const size = product.sizes.find(entry => entry.name === item.size);
  const color = product.colors.find(entry => entry.name === item.color);
  if (!size || !color) return null;
  return { product, size, color, price: size.price };
}

function cartTotal() {
  let total = 0;
  for (const item of cart) {
    const details = itemDetails(item);
    if (!details || !Number.isSafeInteger(details.price) || details.price <= 0) return null;
    total += details.price * item.quantity;
  }
  return total;
}

function getItemKey(item) {
  return `${item.productId}|${item.size}|${item.color}`;
}

function productImage(product) {
  const label = product.name.replace(/^Pinnacle /, "").replace(/[&<>"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
  })[character]).toUpperCase();
  const imagePath = product.image.replace(/[&<>"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
  })[character]);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360">
    <rect width="520" height="360" fill="#f1f5fa"/><rect x="18" y="18" width="484" height="324" rx="12" fill="#fff" stroke="#d9e2ed" stroke-width="2" stroke-dasharray="8 7"/>
    <circle cx="260" cy="112" r="42" fill="#e7eff8"/><path d="M240 128l15-19 12 13 8-9 17 19h-52z" fill="#8da6c2"/><circle cx="272" cy="99" r="5" fill="#ffc20e"/>
    <text x="260" y="190" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" font-weight="700" fill="#062653">ADD PRODUCT PHOTO</text>
    <text x="260" y="220" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" fill="#52657c">${label}</text>
    <text x="260" y="260" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="#075dd8">COPY YOUR IMAGE TO:</text>
    <text x="260" y="282" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#52657c">${imagePath}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function setProductImage(image, product) {
  image.onerror = () => {
    image.onerror = null;
    image.src = productImage(product);
    image.classList.add("image-placeholder");
    image.alt = `Image placeholder for ${product.name}. Add the photo at ${product.image}.`;
  };
  image.src = product.image;
}

function renderProducts() {
  const search = document.querySelector("#product-search").value.trim().toLowerCase();
  const filtered = PRODUCTS.filter(product => {
    const matchesSearch = `${product.name} ${product.brand}`.toLowerCase().includes(search);
    const matchesCategory = activeCategory === "all" ||
      product.category === activeCategory ||
      (activeCategory === "interior" && product.id === "satin");
    return matchesSearch && matchesCategory;
  });

  productGrid.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "No Pinnacle products match that search. Try another name or category.";
    productGrid.append(empty);
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = `product-card category-${product.category}`;
    card.innerHTML = `
      <div class="product-image" style="--product-accent:${product.accent}">
        <img alt="${product.name} paint product photo" loading="lazy">
        <span class="product-tag">${product.category.replace("-", " ")}</span>
      </div>
      <div class="product-content">
        <p class="product-brand">${product.brand}</p>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="colour-chips" aria-label="Available colours"></div>
        <div class="product-options">
          <select class="size-select" aria-label="Select size for ${product.name}"></select>
          <select class="color-select" aria-label="Select colour for ${product.name}"></select>
        </div>
        <label class="product-quantity-label">Quantity <input class="product-quantity" type="number" min="1" max="99" value="1" aria-label="Quantity for ${product.name}" required></label>
        <div class="product-card-actions"><button type="button" class="view-details-button">View details</button><button type="button" class="add-button">Add to cart +</button></div>
        <p class="product-enquiry">Price on request</p>
      </div>`;

    setProductImage(card.querySelector(".product-image img"), product);
    const sizeSelect = card.querySelector(".size-select");
    const colorSelect = card.querySelector(".color-select");
    const chips = card.querySelector(".colour-chips");
    const priceNote = card.querySelector(".product-enquiry");
    product.sizes.forEach(size => {
      const option = document.createElement("option");
      option.value = size.name;
      option.textContent = size.name;
      sizeSelect.append(option);
    });
    product.colors.forEach((color, index) => {
      const option = document.createElement("option");
      option.value = color.name;
      option.textContent = color.name;
      colorSelect.append(option);
      const chip = document.createElement("span");
      chip.className = "colour-chip";
      chip.style.backgroundColor = color.hex;
      chip.title = color.name;
      chips.append(chip);
      if (index === 0) colorSelect.value = color.name;
    });
    const count = document.createElement("span");
    count.className = "colour-count";
    count.textContent = `${product.colors.length} colours`;
    chips.append(count);

    const updatePrice = () => {
      const selected = product.sizes.find(size => size.name === sizeSelect.value);
      priceNote.textContent = selected && Number.isSafeInteger(selected.price)
        ? money.format(selected.price)
        : "Price on request";
    };
    sizeSelect.addEventListener("change", updatePrice);
    updatePrice();

    const quantityInput = card.querySelector(".product-quantity");
    card.querySelector(".add-button").addEventListener("click", () => {
      if (!quantityInput.reportValidity()) return;
      addToCart({ productId: product.id, size: sizeSelect.value, color: colorSelect.value, quantity: Number(quantityInput.value) });
      openCart();
    });
    card.querySelector(".view-details-button").addEventListener("click", () => showProductDetails(product, sizeSelect.value, colorSelect.value));
    productGrid.append(card);
  });
}

function showProductDetails(product, selectedSize = product.sizes[0].name, selectedColor = product.colors[0].name) {
  productDetailContent.replaceChildren();
  const image = document.createElement("img");
  image.className = "detail-image";
  setProductImage(image, product);
  image.alt = `${product.name} paint product photo`;
  const copy = document.createElement("div");
  copy.className = "detail-copy";
  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow eyebrow-blue";
  eyebrow.textContent = "PINNACLE PAINT RANGE";
  const title = document.createElement("h2");
  title.id = "detail-title";
  title.textContent = product.name;
  const description = document.createElement("p");
  description.textContent = product.description;
  const applications = document.createElement("p");
  applications.className = "detail-applications";
  applications.textContent = product.applications;
  const options = document.createElement("div");
  options.className = "detail-options";
  const sizeLabel = document.createElement("label");
  sizeLabel.textContent = "Pack size";
  const sizeSelect = document.createElement("select");
  product.sizes.forEach(size => {
    const option = document.createElement("option");
    option.value = size.name;
    option.textContent = size.name;
    sizeSelect.append(option);
  });
  sizeSelect.value = selectedSize;
  sizeLabel.append(sizeSelect);
  const colorLabel = document.createElement("label");
  colorLabel.textContent = "Colour";
  const colorSelect = document.createElement("select");
  product.colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color.name;
    option.textContent = color.name;
    colorSelect.append(option);
  });
  colorSelect.value = selectedColor;
  colorLabel.append(colorSelect);
  const quantityLabel = document.createElement("label");
  quantityLabel.textContent = "Quantity";
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = "1";
  quantityInput.max = "99";
  quantityInput.value = "1";
  quantityInput.required = true;
  quantityInput.setAttribute("aria-label", `Quantity for ${product.name}`);
  quantityLabel.append(quantityInput);
  options.append(sizeLabel, colorLabel, quantityLabel);
  const caveat = document.createElement("small");
  caveat.textContent = "Illustration is a branded packaging concept, not an actual product photo. Ask Pinnacle to confirm current packaging, availability, pricing and product specifications.";
  const actions = document.createElement("div");
  actions.className = "detail-actions";
  const add = document.createElement("button");
  add.type = "button";
  add.className = "button button-navy";
  add.textContent = "Add to cart";
  add.addEventListener("click", () => {
    if (!quantityInput.reportValidity()) return;
    addToCart({ productId: product.id, size: sizeSelect.value, color: colorSelect.value, quantity: Number(quantityInput.value) });
    productDialog.close();
    openCart();
  });
  const enquire = document.createElement("a");
  enquire.className = "button button-outline";
  enquire.target = "_blank";
  enquire.rel = "noreferrer";
  enquire.href = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello Pinnacle Emulsion Paint, please share pricing, availability and product details for ${product.name}.`)}`;
  enquire.textContent = "Enquire on WhatsApp ↗";
  actions.append(add, enquire);
  copy.append(eyebrow, title, description, applications, options, caveat, actions);
  productDetailContent.append(image, copy);
  productDialog.showModal();
}

function addToCart(newItem) {
  const existing = cart.find(item => getItemKey(item) === getItemKey(newItem));
  if (newItem.quantity > 99 || (existing && existing.quantity + newItem.quantity > 99)) {
    window.alert("A maximum of 99 units is allowed for each product, size and colour combination.");
    return;
  }
  if (existing) existing.quantity += newItem.quantity;
  else cart.push(newItem);
  saveCart();
  renderCart();
}

function changeQuantity(key, amount) {
  const item = cart.find(entry => getItemKey(entry) === key);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity < 1) cart = cart.filter(entry => getItemKey(entry) !== key);
  saveCart();
  renderCart();
}

function renderCart() {
  cartItems.replaceChildren();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = String(count);
  drawerCount.textContent = `(${count})`;
  cartSubtotal.textContent = cart.length ? "Quote from Pinnacle" : "No products selected";
  const quoteButton = document.querySelector("#request-quote-button");
  if (quoteButton) quoteButton.disabled = cart.length === 0;

  if (!cart.length) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.innerHTML = "<strong>Your quote list is empty.</strong>Browse the collection and add products to ask Pinnacle for a quote.";
    cartItems.append(empty);
    return;
  }

  cart.forEach(item => {
    const details = itemDetails(item);
    if (!details) return;
    const { product } = details;
    const key = getItemKey(item);
    const line = document.createElement("div");
    line.className = "cart-line";
    const image = document.createElement("img");
    setProductImage(image, product);
    image.alt = `${product.name} branded packaging concept illustration`;
    const info = document.createElement("div");
    info.className = "cart-line-info";
    const title = document.createElement("h3");
    title.textContent = product.name;
    const meta = document.createElement("p");
    meta.textContent = `${product.brand} · ${item.size} · ${item.color}`;
    const controls = document.createElement("div");
    controls.className = "quantity-control";
    const minus = document.createElement("button");
    minus.type = "button";
    minus.setAttribute("aria-label", `Decrease ${product.name} quantity`);
    minus.textContent = "−";
    minus.addEventListener("click", () => changeQuantity(key, -1));
    const quantity = document.createElement("span");
    quantity.textContent = String(item.quantity);
    const plus = document.createElement("button");
    plus.type = "button";
    plus.disabled = item.quantity >= 99;
    plus.setAttribute("aria-label", `Increase ${product.name} quantity`);
    plus.textContent = "+";
    plus.addEventListener("click", () => changeQuantity(key, 1));
    controls.append(minus, quantity, plus);
    info.append(title, meta, controls);
    const end = document.createElement("div");
    end.className = "cart-line-end";
    const linePrice = document.createElement("strong");
    linePrice.textContent = "Quote required";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      cart = cart.filter(entry => getItemKey(entry) !== key);
      saveCart();
      renderCart();
    });
    end.append(linePrice, remove);
    line.append(image, info, end);
    cartItems.append(line);
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  drawerBackdrop.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  document.querySelector("#close-cart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  drawerBackdrop.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function renderCheckoutSummary() {
  const checkoutItems = document.querySelector("#checkout-items");
  checkoutItems.replaceChildren();
  cart.forEach(item => {
    const details = itemDetails(item);
    if (!details) return;
    const row = document.createElement("div");
    row.className = "checkout-item";
    const name = document.createElement("span");
    name.textContent = `${details.product.name} · ${details.product.brand} · ${item.size} · ${item.color} × ${item.quantity}`;
    const price = document.createElement("span");
    price.textContent = Number.isSafeInteger(details.price) ? money.format(details.price * item.quantity) : "Price on request";
    row.append(name, price);
    checkoutItems.append(row);
  });
  updateCheckoutTotals();
}

function updateCheckoutTotals() {
  const subtotal = cartTotal();
  const deliveryOption = orderForm.querySelector('input[name="delivery_option"]:checked')?.value;
  const deliveryFee = deliveryOption === "Pickup" ? 0 : SHOP_CONFIG.deliveryFeeNaira;
  document.querySelector("#checkout-subtotal").textContent = subtotal === null ? "Price on request" : money.format(subtotal);
  document.querySelector("#checkout-delivery").textContent = deliveryOption && subtotal !== null ? money.format(deliveryFee) : "—";
  document.querySelector("#checkout-total").textContent = subtotal === null ? "Price on request" : money.format(subtotal + deliveryFee);
}

function showCheckoutError(message) {
  formError.textContent = message;
  formError.hidden = false;
}

async function submitOrder(event) {
  event.preventDefault();
  formError.hidden = true;
  formError.textContent = "";
  if (!cart.length) {
    showCheckoutError("Your cart is empty. Add a paint product before checkout.");
    return;
  }
  if (!orderForm.reportValidity()) return;
  if (!SHOP_CONFIG.paymentConfigured || cartTotal() === null) {
    showCheckoutError("Online checkout is not available yet because Pinnacle's confirmed product prices and Paystack settings have not been configured. Please request a quote using WhatsApp or contact the company.");
    return;
  }

  const submitButton = document.querySelector("#submit-order");
  submitButton.disabled = true;
  submitButton.textContent = "Preparing secure payment...";

  try {
    const data = new FormData(orderForm);
    const payload = {
      customer: {
        name: String(data.get("customer_name")).trim(),
        phone: String(data.get("customer_phone")).trim(),
        email: String(data.get("customer_email")).trim(),
        address: String(data.get("delivery_address")).trim(),
        state: String(data.get("customer_state")).trim(),
        city: String(data.get("customer_city")).trim(),
        deliveryDate: String(data.get("delivery_date") || ""),
        deliveryOption: String(data.get("delivery_option")),
        message: String(data.get("customer_message") || "").trim()
      },
      items: cart.map(item => ({
        productId: item.productId,
        size: item.size,
        color: item.color,
        quantity: item.quantity
      }))
    };
    const response = await fetch("/api/payments/initialize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not start secure checkout.");
    if (!result.authorizationUrl || !result.reference) throw new Error("The payment service returned an invalid checkout link.");
    submitButton.textContent = "Redirecting to Paystack...";
    window.location.assign(result.authorizationUrl);
  } catch (error) {
    showCheckoutError(error.message || "Unable to start payment. Please check your connection and try again.");
    submitButton.disabled = false;
    submitButton.innerHTML = 'Pay Now <span aria-hidden="true">→</span>';
  }
}

function renderOrderSummary(order) {
  const summary = document.querySelector("#confirmation-summary");
  summary.replaceChildren();
  order.items.forEach(item => {
    const line = document.createElement("p");
    line.textContent = `${item.name} · ${item.brand} · ${item.size} · ${item.color} × ${item.quantity} — ${money.format(item.lineTotalNaira)}`;
    summary.append(line);
  });
  [
    ["Subtotal", order.subtotalNaira, ""],
    ["Delivery fee", order.deliveryFeeNaira, ""],
    [order.status === "paid" ? "Amount paid" : "Order total", order.totalNaira, "summary-total-row"]
  ].forEach(([label, amount]) => {
    const row = document.createElement("p");
    if (label === "Amount paid" || label === "Order total") row.className = "summary-total-row";
    const rowLabel = document.createElement("span");
    rowLabel.textContent = label;
    const rowValue = document.createElement("span");
    rowValue.textContent = money.format(amount);
    row.append(rowLabel, rowValue);
    summary.append(row);
  });
  const delivery = document.createElement("p");
  delivery.className = "summary-delivery";
  delivery.textContent = `${order.deliveryOption}: ${order.deliveryAddress} · Preferred date: ${order.deliveryDate}`;
  summary.append(delivery);
}

function showPaymentResult(order) {
  const paid = order.status === "paid";
  const isRetryable = ["failed", "cancelled"].includes(order.status);
  document.querySelector("#confirmation-status").textContent = paid ? "PAYMENT PAID" : `PAYMENT ${order.status.toUpperCase()}`;
  document.querySelector("#confirmation-title").textContent = paid ? "Payment received — thank you!" : "Payment not completed";
  document.querySelector("#confirmation-message").textContent = paid
    ? "Paystack verified your payment. Your paid order is saved and the shop will contact you about delivery or pickup."
    : order.status === "cancelled"
      ? "This payment was cancelled. The order has not been marked paid. You can retry securely when ready."
      : order.status === "failed"
        ? "Paystack did not confirm this payment. The order has not been marked paid. You can safely retry."
        : "Payment is still pending verification. Do not pay again yet; check the status again shortly.";
  document.querySelector("#confirmation-reference").textContent = order.reference;
  document.querySelector("#retry-payment").hidden = !isRetryable;
  document.querySelector("#verify-again").hidden = order.status !== "pending";
  renderOrderSummary(order);
  const whatsappMessage = `Hello Pinnacle Emulsion Paint, my name is ${order.customerName}. ${paid ? "My paid order" : "My order"} reference is ${order.reference}.\n\n${order.items.map(item => `${item.name} | ${item.brand} | ${item.size} | ${item.color} × ${item.quantity} — ${money.format(item.lineTotalNaira)}`).join("\n")}\n\n${paid ? "Amount paid" : "Order total"}: ${money.format(order.totalNaira)}\nDelivery: ${order.deliveryOption} to ${order.deliveryAddress}\nPlease help me with my order.`;
  document.querySelector("#whatsapp-order").href = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  document.querySelector("#local-note").textContent = paid
    ? order.emailStatus === "sent"
      ? "Payment was verified on the shop server. Order emails were accepted by the email service."
      : "Payment was verified on the shop server. Email delivery needs the shop owner's attention; please contact us if you need assistance."
    : "No paid order has been created. Payment status is checked against Paystack's server.";
  document.querySelector("#confirmation-icon").textContent = paid ? "✓" : order.status === "pending" ? "…" : "!";
  if (!confirmationDialog.open) confirmationDialog.showModal();
}

async function checkPayment(reference) {
  paymentReturnReference = reference;
  document.querySelector("#confirmation-status").textContent = "CHECKING PAYMENT";
  document.querySelector("#confirmation-title").textContent = "Verifying your payment";
  document.querySelector("#confirmation-message").textContent = "Checking the transaction directly with Paystack. Please wait…";
  document.querySelector("#confirmation-reference").textContent = reference;
  document.querySelector("#retry-payment").hidden = true;
  document.querySelector("#verify-again").hidden = true;
  if (!confirmationDialog.open) confirmationDialog.showModal();
  try {
    const response = await fetch(`/api/payments/verify?reference=${encodeURIComponent(reference)}`, { cache: "no-store" });
    const result = await response.json();
    if (!response.ok || !result.order) throw new Error(result.error || "Payment status could not be verified.");
    if (result.order.status === "paid") {
      cart = [];
      saveCart();
      renderCart();
    }
    showPaymentResult(result.order);
  } catch (error) {
    document.querySelector("#confirmation-status").textContent = "STATUS UNKNOWN";
    document.querySelector("#confirmation-title").textContent = "We couldn't verify the payment yet";
    document.querySelector("#confirmation-message").textContent = `${error.message} No order will be described as paid until Paystack confirms it. Try checking the status again.`;
    document.querySelector("#verify-again").hidden = false;
    document.querySelector("#retry-payment").hidden = true;
  }
}

document.querySelector("#product-search").addEventListener("input", renderProducts);
document.querySelector("#category-filters").addEventListener("click", event => {
  const filter = event.target.closest("[data-category]");
  if (!filter) return;
  activeCategory = filter.dataset.category;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip === filter;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderProducts();
});
document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);
if (!checkoutButton || !orderForm) {
  document.querySelector("#close-product").addEventListener("click", () => productDialog.close());
  document.querySelectorAll("[data-footer-category]").forEach(link => link.addEventListener("click", () => {
    activeCategory = link.dataset.footerCategory;
    document.querySelectorAll(".filter-chip").forEach(chip => {
      const selected = chip.dataset.category === activeCategory;
      chip.classList.toggle("is-active", selected);
      chip.setAttribute("aria-pressed", String(selected));
    });
    renderProducts();
  }));
  document.querySelector("#menu-toggle").addEventListener("click", event => {
    const toggle = event.currentTarget;
    const nav = document.querySelector("#main-nav");
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  document.querySelectorAll("#main-nav a").forEach(link => link.addEventListener("click", () => {
    document.querySelector("#main-nav").classList.remove("is-open");
    document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  }));
  document.querySelector("#current-year").textContent = String(new Date().getFullYear());

  const makeWhatsAppUrl = message => `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const openWhatsApp = message => {
    const popup = window.open(makeWhatsAppUrl(message), "_blank");
    if (popup) popup.opener = null;
    return Boolean(popup);
  };
  document.querySelector("#request-quote-button").addEventListener("click", () => {
    if (!cart.length) return;
    const lines = cart.map(item => {
      const product = PRODUCTS.find(entry => entry.id === item.productId);
      return `${product.name} | ${product.brand} | ${item.size} | ${item.color} | Quantity: ${item.quantity}`;
    });
    const message = `Hello ${SHOP_CONFIG.shopName}, please send me a quote for these products:\n\n${lines.join("\n")}\n\nPlease confirm current prices, availability and delivery options. I understand this is a quote request, not a confirmed order.`;
    const fallback = document.querySelector("#quote-whatsapp-fallback");
    fallback.href = makeWhatsAppUrl(message);
    fallback.hidden = openWhatsApp(message);
  });

  const distributorForm = document.querySelector("#distributor-form");
  distributorForm.addEventListener("submit", event => {
    event.preventDefault();
    const error = document.querySelector("#distributor-error");
    const success = document.querySelector("#distributor-success");
    const fallback = document.querySelector("#distributor-whatsapp-fallback");
    error.hidden = true;
    success.hidden = true;
    fallback.hidden = true;
    if (!distributorForm.reportValidity()) return;

    const data = new FormData(distributorForm);
    const fields = [
      ["Full name", data.get("name")],
      ["Business name", data.get("businessName")],
      ["Phone", data.get("phone")],
      ["Email", data.get("email")],
      ["Location", `${data.get("city")}, ${data.get("state")}`],
      ["Business type", data.get("businessType")],
      ["Estimated order volume", data.get("orderVolume") || "Not specified"],
      ["Message", data.get("message") || "None"]
    ];
    const message = `Hello ${SHOP_CONFIG.shopName}, I would like information about wholesale and distribution.\n\n${fields.map(([label, value]) => `${label}: ${String(value).trim()}`).join("\n")}`;
    fallback.href = makeWhatsAppUrl(message);
    fallback.hidden = openWhatsApp(message);
    success.textContent = "Your details are ready in WhatsApp. Review the message and tap Send to submit your enquiry. If WhatsApp did not open, use the link below.";
    success.hidden = false;
  });

  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.href = `tel:${SHOP_CONFIG.phoneNumber}`;
    link.textContent = link.textContent.replace(/\+234(?:\s*\d){10}/, SHOP_CONFIG.phoneNumber);
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = `mailto:${SHOP_CONFIG.shopEmail}`;
    if (link.textContent.trim().includes("@")) link.textContent = SHOP_CONFIG.shopEmail;
  });
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.href = link.href.replace(/^https:\/\/wa\.me\/[^/?]+/, `https://wa.me/${SHOP_CONFIG.whatsappNumber}`);
  });
  const heroProducts = document.querySelector(".hero-products");
  const heroImage = document.querySelector(".hero-feature-image");
  const heroCaption = document.querySelector(".hero-image-caption");
  const showHeroImage = () => {
    heroProducts.classList.add("has-feature-image");
    heroCaption.lastChild.textContent = " Pinnacle paint products";
  };
  heroImage.addEventListener("load", showHeroImage);
  if (heroImage.complete && heroImage.naturalWidth > 0) showHeroImage();
  renderProducts();
  renderCart();
  return;
}
checkoutButton.addEventListener("click", () => {
  if (!cart.length) return;
  closeCart();
  renderCheckoutSummary();
  formError.hidden = true;
  checkoutDialog.showModal();
});
orderForm.addEventListener("change", updateCheckoutTotals);
document.querySelector("#close-checkout").addEventListener("click", () => checkoutDialog.close());
document.querySelector("#close-confirmation").addEventListener("click", () => confirmationDialog.close());
document.querySelector("#close-product").addEventListener("click", () => productDialog.close());
orderForm.addEventListener("submit", submitOrder);
document.querySelectorAll("[data-footer-category]").forEach(link => link.addEventListener("click", () => {
  activeCategory = link.dataset.footerCategory;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip.dataset.category === activeCategory;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderProducts();
}));
document.querySelector("#retry-payment").addEventListener("click", async () => {
  if (!paymentReturnReference) return;
  const button = document.querySelector("#retry-payment");
  button.disabled = true;
  button.textContent = "Preparing retry...";
  try {
    const response = await fetch("/api/payments/retry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference: paymentReturnReference })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Payment retry could not be started.");
    window.location.assign(result.authorizationUrl);
  } catch (error) {
    document.querySelector("#confirmation-message").textContent = error.message;
    button.disabled = false;
    button.innerHTML = 'Retry payment <span aria-hidden="true">↗</span>';
  }
});
document.querySelector("#verify-again").addEventListener("click", () => {
  if (paymentReturnReference) checkPayment(paymentReturnReference);
});
document.querySelector("#menu-toggle").addEventListener("click", event => {
  const toggle = event.currentTarget;
  const nav = document.querySelector("#main-nav");
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
document.querySelectorAll("#main-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector("#main-nav").classList.remove("is-open");
  document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
}));
document.querySelector("#current-year").textContent = String(new Date().getFullYear());

const distributorForm = document.querySelector("#distributor-form");
distributorForm.addEventListener("submit", async event => {
  event.preventDefault();
  const error = document.querySelector("#distributor-error");
  const success = document.querySelector("#distributor-success");
  const submit = distributorForm.querySelector('button[type="submit"]');
  error.hidden = true;
  success.hidden = true;
  if (!distributorForm.reportValidity()) return;
  submit.disabled = true;
  submit.textContent = "Sending enquiry...";
  try {
    const data = new FormData(distributorForm);
    const response = await fetch("/api/distributor-inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data.entries()))
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Your enquiry could not be sent.");
    success.textContent = "Thank you. Your wholesale enquiry has been sent to the Pinnacle team.";
    success.hidden = false;
    distributorForm.reset();
  } catch (requestError) {
    error.textContent = requestError.message || "The enquiry service is unavailable. Please contact Pinnacle directly.";
    error.hidden = false;
  } finally {
    submit.disabled = false;
    submit.innerHTML = 'Request wholesale information <span aria-hidden="true">→</span>';
  }
});

renderProducts();
renderCart();
fetch("/api/config", { cache: "no-store" }).then(response => {
  if (!response.ok) throw new Error("Payment settings are unavailable.");
  return response.json();
}).then(config => {
  SHOP_CONFIG.deliveryFeeNaira = Number(config.deliveryFeeNaira) || 0;
  SHOP_CONFIG.paymentMode = config.paymentMode;
  SHOP_CONFIG.paymentConfigured = Boolean(config.paymentConfigured);
  SHOP_CONFIG.pricingConfigured = Boolean(config.pricingConfigured);
  SHOP_CONFIG.shopName = config.shopName || SHOP_CONFIG.shopName;
  SHOP_CONFIG.shopEmail = config.shopEmail || SHOP_CONFIG.shopEmail;
  SHOP_CONFIG.whatsappNumber = config.shopWhatsapp || SHOP_CONFIG.whatsappNumber;
  SHOP_CONFIG.phoneNumber = config.shopPhone || SHOP_CONFIG.phoneNumber;
  PRODUCTS.forEach(product => {
    const serverPrices = config.productPrices && config.productPrices[product.id];
    if (!serverPrices) return;
    product.sizes.forEach(size => {
      size.price = Number.isSafeInteger(serverPrices[size.name]) ? serverPrices[size.name] : null;
    });
  });
  renderProducts();
  renderCart();
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.href = `tel:${SHOP_CONFIG.phoneNumber}`;
    link.textContent = link.textContent.replace(/\+234(?:\s*\d){10}/, SHOP_CONFIG.phoneNumber);
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = `mailto:${SHOP_CONFIG.shopEmail}`;
    if (link.textContent.trim().includes("@")) link.textContent = SHOP_CONFIG.shopEmail;
  });
  const contactPhone = document.querySelector(".contact-phone");
  contactPhone.textContent = `Or call ${SHOP_CONFIG.phoneNumber}`;
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    link.href = link.href.replace(/^https:\/\/wa\.me\/[^/?]+/, `https://wa.me/${SHOP_CONFIG.whatsappNumber}`);
  });
  const distributorWhatsapp = document.querySelector("#distributor-whatsapp");
  distributorWhatsapp.href = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Pinnacle Emulsion Paint, I'm interested in distribution and wholesale information.")}`;
  const paymentNote = SHOP_CONFIG.paymentConfigured
    ? `Secure Paystack ${SHOP_CONFIG.paymentMode} checkout is ready.`
    : !SHOP_CONFIG.pricingConfigured
      ? "Checkout is unavailable because confirmed Pinnacle prices have not been configured. Please contact the company for a quote."
      : `Paystack ${SHOP_CONFIG.paymentMode} mode is not configured yet. The shop owner must set the matching secret key on the server.`;
  document.querySelector("#payment-mode-note").textContent = paymentNote;
  document.querySelector("#submit-order").disabled = !SHOP_CONFIG.paymentConfigured;
  document.querySelector("#price-note").textContent = SHOP_CONFIG.pricingConfigured
    ? "Prices are in Nigerian naira (₦). Contact Pinnacle to confirm availability and current product details."
    : "Prices are not displayed because Pinnacle has not supplied confirmed pricing. Contact the company for a quote.";
  updateCheckoutTotals();
}).catch(error => {
  document.querySelector("#payment-mode-note").textContent = `${error.message} Start the shop using npm.cmd start, not by opening this file directly.`;
});
const paymentParams = new URLSearchParams(window.location.search);
const returnedReference = paymentParams.get("reference") || paymentParams.get("trxref");
if (returnedReference) {
  window.history.replaceState({}, document.title, window.location.pathname);
  checkPayment(returnedReference);
}
})();
