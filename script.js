const SHOP_CONFIG = {
  // Replace these placeholders with the values from your EmailJS account.
  emailJsServiceId: "service_ckqwp3j",
  emailJsTemplateId: "template_5kjxdqe",
  customerEmailJsTemplateId: "template_katnuwb",
  emailJsPublicKey: "K-udAsNKB6sUuxmgu",
  ownerEmail: "godgiftonyewenu3@gmail.com",
  whatsappNumber: "2348061931865",
  phoneNumber: "+2348061931865"
};

const PRODUCTS = [
  { id: "interior-wall", name: "Interior Wall Paint", brand: "Dulux", category: "interior", description: "Smooth, rich coverage for the rooms you live in.", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Soft Linen", hex: "#e8dfcb" }, { name: "Sage Leaf", hex: "#aab49b" }, { name: "Cloud White", hex: "#f4f2e9" }, { name: "Clay Rose", hex: "#c88c79" }], sizes: [{ name: "1 litre", price: 8500 }, { name: "4 litres", price: 28500 }, { name: "10 litres", price: 66500 }, { name: "20 litres", price: 124000 }] },
  { id: "exterior-wall", name: "Exterior Wall Paint", brand: "Berger", category: "exterior", description: "Weather-ready colour with lasting curb appeal.", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Porcelain", hex: "#e7e2d8" }, { name: "Stone Grey", hex: "#aaa99e" }, { name: "Terracotta", hex: "#b86e55" }], sizes: [{ name: "1 litre", price: 9800 }, { name: "4 litres", price: 34500 }, { name: "10 litres", price: 79000 }, { name: "20 litres", price: 148000 }] },
  { id: "emulsion", name: "Emulsion Paint", brand: "Capital", category: "interior", description: "A dependable everyday finish for walls and ceilings.", image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Brilliant White", hex: "#f6f5ef" }, { name: "Warm Ivory", hex: "#e9deca" }, { name: "Pale Grey", hex: "#d1d3ce" }], sizes: [{ name: "1 litre", price: 6500 }, { name: "4 litres", price: 22000 }, { name: "10 litres", price: 52000 }, { name: "20 litres", price: 97000 }] },
  { id: "satin", name: "Satin Paint", brand: "Dulux", category: "interior", description: "A soft, subtle sheen for a polished finish.", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Warm White", hex: "#eee8d9" }, { name: "Olive Mist", hex: "#a2a58a" }, { name: "Dusty Blue", hex: "#97a9ad" }], sizes: [{ name: "1 litre", price: 10500 }, { name: "4 litres", price: 38500 }, { name: "10 litres", price: 91000 }, { name: "20 litres", price: 172000 }] },
  { id: "gloss", name: "Gloss Paint", brand: "Finecoat", category: "wood-metal", description: "A bright, hard-wearing finish for trim and detail.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Pure White", hex: "#f6f5ef" }, { name: "Deep Green", hex: "#385747" }, { name: "Jet Black", hex: "#292c2b" }], sizes: [{ name: "1 litre", price: 11500 }, { name: "4 litres", price: 42000 }, { name: "10 litres", price: 99000 }, { name: "20 litres", price: 189000 }] },
  { id: "textured", name: "Textured Paint", brand: "Megapaint", category: "exterior", description: "Add depth and character to feature walls.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Sandstone", hex: "#cfbda0" }, { name: "Pebble", hex: "#aaa69b" }, { name: "Earth", hex: "#a66d54" }], sizes: [{ name: "1 litre", price: 12000 }, { name: "4 litres", price: 45000 }, { name: "10 litres", price: 106000 }, { name: "20 litres", price: 203000 }] },
  { id: "primer", name: "Primer & Undercoat", brand: "Berger", category: "specialty", description: "The essential first coat for better paint adhesion.", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=700&q=80", colors: [{ name: "White", hex: "#f3f2ec" }, { name: "Grey", hex: "#999d99" }], sizes: [{ name: "1 litre", price: 7500 }, { name: "4 litres", price: 26500 }, { name: "10 litres", price: 63000 }, { name: "20 litres", price: 119000 }] },
  { id: "wood", name: "Wood Paint", brand: "Finecoat", category: "wood-metal", description: "Bring out the grain and protect your timber.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Natural Oak", hex: "#bb8a59" }, { name: "Dark Walnut", hex: "#684936" }, { name: "Clear", hex: "#e4dbca" }], sizes: [{ name: "1 litre", price: 13500 }, { name: "4 litres", price: 49500 }, { name: "10 litres", price: 118000 }, { name: "20 litres", price: 226000 }] },
  { id: "metal", name: "Metal Paint", brand: "Capital", category: "wood-metal", description: "Durable colour and protection for metal surfaces.", image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80", colors: [{ name: "Charcoal", hex: "#4b4d49" }, { name: "Forest Green", hex: "#415b49" }, { name: "Signal Red", hex: "#ae4638" }], sizes: [{ name: "1 litre", price: 12500 }, { name: "4 litres", price: 46500 }, { name: "10 litres", price: 109000 }, { name: "20 litres", price: 210000 }] },
  { id: "waterproof", name: "Waterproof Paint", brand: "Megapaint", category: "specialty", description: "An extra layer of defence for damp-prone spaces.", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80", colors: [{ name: "White", hex: "#f2f1e9" }, { name: "Concrete Grey", hex: "#a8aaa4" }, { name: "Sand", hex: "#d1bd9f" }], sizes: [{ name: "1 litre", price: 14000 }, { name: "4 litres", price: 52000 }, { name: "10 litres", price: 124000 }, { name: "20 litres", price: 238000 }] }
];

const CART_STORAGE_KEY = "colourhouse-cart-v1";
const ORDER_STORAGE_KEY = "colourhouse-orders-v1";
const money = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });
let cart = loadCart();
let lastOrder = null;
let pendingEmailDelivery = null;

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
const orderForm = document.querySelector("#order-form");
const formError = document.querySelector("#form-error");

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
  return cart.reduce((total, item) => {
    const details = itemDetails(item);
    return details ? total + details.price * item.quantity : total;
  }, 0);
}

function getItemKey(item) {
  return `${item.productId}|${item.size}|${item.color}`;
}

function renderProducts() {
  const search = document.querySelector("#product-search").value.trim().toLowerCase();
  const category = document.querySelector("#category-filter").value;
  const filtered = PRODUCTS.filter(product => {
    const matchesSearch = `${product.name} ${product.brand}`.toLowerCase().includes(search);
    const matchesCategory = category === "all" || category === product.category;
    return matchesSearch && matchesCategory;
  });

  productGrid.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty-results";
    empty.textContent = "No paints match that search. Try another name or category.";
    productGrid.append(empty);
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name} paint inspiration" loading="lazy">
        <span class="product-tag">${product.category === "wood-metal" ? "Wood & metal" : product.category}</span>
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
        <div class="product-purchase">
          <span class="product-price"><small>Sample price</small><span class="selected-price"></span></span>
          <button type="button" class="add-button">Add to cart +</button>
        </div>
      </div>`;

    const sizeSelect = card.querySelector(".size-select");
    const colorSelect = card.querySelector(".color-select");
    const priceLabel = card.querySelector(".selected-price");
    const chips = card.querySelector(".colour-chips");
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
      priceLabel.textContent = selected ? money.format(selected.price) : "";
    };
    sizeSelect.addEventListener("change", updatePrice);
    updatePrice();
    card.querySelector(".add-button").addEventListener("click", () => {
      addToCart({ productId: product.id, size: sizeSelect.value, color: colorSelect.value, quantity: 1 });
      openCart();
    });
    productGrid.append(card);
  });
}

function addToCart(newItem) {
  const existing = cart.find(item => getItemKey(item) === getItemKey(newItem));
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
  cartSubtotal.textContent = money.format(cartTotal());
  checkoutButton.disabled = cart.length === 0;

  if (!cart.length) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.innerHTML = "<strong>Your cart is taking a breather.</strong>Browse the collection and add a little colour.";
    cartItems.append(empty);
    return;
  }

  cart.forEach(item => {
    const details = itemDetails(item);
    if (!details) return;
    const { product, price } = details;
    const key = getItemKey(item);
    const line = document.createElement("div");
    line.className = "cart-line";
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = "";
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
    plus.setAttribute("aria-label", `Increase ${product.name} quantity`);
    plus.textContent = "+";
    plus.addEventListener("click", () => changeQuantity(key, 1));
    controls.append(minus, quantity, plus);
    info.append(title, meta, controls);
    const end = document.createElement("div");
    end.className = "cart-line-end";
    const linePrice = document.createElement("strong");
    linePrice.textContent = money.format(price * item.quantity);
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
    price.textContent = money.format(details.price * item.quantity);
    row.append(name, price);
    checkoutItems.append(row);
  });
  document.querySelector("#checkout-total").textContent = money.format(cartTotal());
}

function createOrderReference() {
  const date = new Date();
  const day = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const random = crypto.getRandomValues(new Uint32Array(1))[0].toString(36).toUpperCase().slice(0, 6);
  return `CH-${day}-${random}`;
}

function formatOrderItems(items) {
  return items.map(item => {
    const details = itemDetails(item);
    if (!details) return "";
    return `${details.product.name} | Brand: ${details.product.brand} | Size: ${item.size} | Colour: ${item.color} | Quantity: ${item.quantity} | Unit price: ${money.format(details.price)} | Line total: ${money.format(details.price * item.quantity)}`;
  }).filter(Boolean).join("\n");
}

function showEmailError(message) {
  formError.textContent = message;
  formError.hidden = false;
}

async function submitOrder(event) {
  event.preventDefault();
  formError.hidden = true;
  formError.textContent = "";
  if (!pendingEmailDelivery && !cart.length) {
    showEmailError("Your cart is empty. Add a paint product before submitting your request.");
    return;
  }
  if (!pendingEmailDelivery && !orderForm.reportValidity()) return;

  const configValues = [SHOP_CONFIG.emailJsServiceId, SHOP_CONFIG.emailJsTemplateId, SHOP_CONFIG.customerEmailJsTemplateId, SHOP_CONFIG.emailJsPublicKey, SHOP_CONFIG.ownerEmail];
  if (configValues.some(value => !value || value.includes("YOUR_"))) {
    showEmailError("Order emails are not fully configured yet. Configure the shop notification template ID and customer acknowledgment template ID in script.js, along with the EmailJS service ID, public key, and shop email.");
    return;
  }
  if (!window.emailjs || typeof window.emailjs.send !== "function") {
    showEmailError("The email service could not be loaded. Check your internet connection and try again.");
    return;
  }

  const submitButton = document.querySelector("#submit-order");
  submitButton.disabled = true;
  submitButton.textContent = pendingEmailDelivery ? "Retrying email delivery..." : "Sending order emails...";
  let delivery = pendingEmailDelivery;
  if (!delivery) {
    const data = new FormData(orderForm);
    const order = {
      reference: createOrderReference(),
      createdAt: new Date().toISOString(),
      customer: {
        name: String(data.get("customer_name")).trim(),
        phone: String(data.get("customer_phone")).trim(),
        email: String(data.get("customer_email")).trim(),
        address: String(data.get("delivery_address")).trim(),
        state: String(data.get("customer_state")).trim(),
        city: String(data.get("customer_city")).trim(),
        deliveryDate: String(data.get("delivery_date") || "Not specified"),
        deliveryOption: String(data.get("delivery_option")),
        message: String(data.get("customer_message") || "").trim() || "None"
      },
      items: cart.map(item => ({ ...item })),
      total: cartTotal()
    };
    const deliveryAddress = `${order.customer.address}, ${order.customer.city}, ${order.customer.state}`;
    const sharedParams = {
      order_reference: order.reference,
      customer_name: order.customer.name,
      customer_phone: order.customer.phone,
      customer_email: order.customer.email,
      delivery_address: deliveryAddress,
      order_items: formatOrderItems(order.items),
      delivery_option: order.customer.deliveryOption,
      delivery_date: order.customer.deliveryDate,
      order_total: money.format(order.total),
      customer_message: order.customer.message,
      shop_email: SHOP_CONFIG.ownerEmail
    };
    delivery = {
      order,
      ownerSent: false,
      customerSent: false,
      ownerParams: { ...sharedParams, to_email: SHOP_CONFIG.ownerEmail },
      customerParams: { ...sharedParams, to_email: order.customer.email }
    };
    pendingEmailDelivery = delivery;
  }

  try {
    if (!delivery.ownerSent) {
      const response = await window.emailjs.send(
        SHOP_CONFIG.emailJsServiceId,
        SHOP_CONFIG.emailJsTemplateId,
        delivery.ownerParams,
        { publicKey: SHOP_CONFIG.emailJsPublicKey }
      );
      if (!response || response.status !== 200) {
        throw new Error(`Shop notification email was not confirmed${response && response.status ? ` (${response.status})` : ""}.`);
      }
      delivery.ownerSent = true;
    }
    if (!delivery.customerSent) {
      const response = await window.emailjs.send(
        SHOP_CONFIG.emailJsServiceId,
        SHOP_CONFIG.customerEmailJsTemplateId,
        delivery.customerParams,
        { publicKey: SHOP_CONFIG.emailJsPublicKey }
      );
      if (!response || response.status !== 200) {
        throw new Error(`Customer acknowledgment email was not confirmed${response && response.status ? ` (${response.status})` : ""}.`);
      }
      delivery.customerSent = true;
    }
    const order = delivery.order;
    lastOrder = order;
    let localCopySaved = true;
    try {
      const previous = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY) || "[]");
      const orders = Array.isArray(previous) ? previous : [];
      orders.push(order);
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
    } catch (error) {
      localCopySaved = false;
      console.error("The email was sent, but the local demonstration order copy could not be saved.", error);
    }
    cart = [];
    saveCart();
    renderCart();
    pendingEmailDelivery = null;
    orderForm.querySelectorAll("input, textarea").forEach(field => { field.disabled = false; });
    orderForm.reset();
    checkoutDialog.close();
    showConfirmation(order, localCopySaved);
  } catch (error) {
    console.error("Order email delivery did not complete.", error);
    const errorText = error && (error.text || error.message) ? error.text || error.message : "";
    const role = delivery.ownerSent ? "customer acknowledgment" : "shop notification";
    if (errorText.toLowerCase().includes("recipients address is empty")) {
      showEmailError(`The ${role} email could not be sent because its recipient is empty. Set that EmailJS template's To Email to {{to_email}} and save it. ${delivery.ownerSent ? "The shop notification was already sent; use the button below to retry only the customer email." : "No email was confirmed as sent; you can retry after fixing the template."}`);
    } else {
      showEmailError(`The ${role} email could not be confirmed. ${delivery.ownerSent ? "The shop notification was already sent; use the button below to retry only the customer email." : "The shop notification was not confirmed; retry after checking EmailJS."} ${errorText}`);
    }
    submitButton.textContent = "Retry remaining email";
    orderForm.querySelectorAll("input, textarea").forEach(field => { field.disabled = true; });
  } finally {
    submitButton.disabled = false;
    if (!pendingEmailDelivery) submitButton.innerHTML = 'Submit order request <span aria-hidden="true">→</span>';
  }
}

function showConfirmation(order, localCopySaved) {
  document.querySelector("#confirmation-reference").textContent = order.reference;
  const summary = document.querySelector("#confirmation-summary");
  summary.replaceChildren();
  order.items.forEach(item => {
    const details = itemDetails(item);
    if (!details) return;
    const line = document.createElement("p");
    line.textContent = `${details.product.name} · ${details.product.brand} · ${item.size} · ${item.color} × ${item.quantity} — ${money.format(details.price * item.quantity)}`;
    summary.append(line);
  });
  const total = document.createElement("p");
  const totalLabel = document.createElement("span");
  totalLabel.textContent = "Order total";
  const totalValue = document.createElement("span");
  totalValue.textContent = money.format(order.total);
  total.append(totalLabel, totalValue);
  summary.append(total);
  const whatsappMessage = `Hello Pinnacle Emulsion Paint, my name is ${order.customer.name}. I submitted order request ${order.reference}.\n\n${formatOrderItems(order.items)}\n\nTotal: ${money.format(order.total)}\nPlease help me confirm availability, payment and delivery.`;
  document.querySelector("#whatsapp-order").href = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  document.querySelector("#call-shop").href = `tel:${SHOP_CONFIG.phoneNumber}`;
  document.querySelector("#local-note").textContent = localCopySaved
    ? "A local demonstration copy of your order is saved in this browser only. It is not a shared database."
    : "Your order email was sent, but this browser could not save a local copy. Orders are not stored in a shared database.";
  confirmationDialog.showModal();
}

document.querySelector("#product-search").addEventListener("input", renderProducts);
document.querySelector("#category-filter").addEventListener("change", renderProducts);
document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);
checkoutButton.addEventListener("click", () => {
  if (!cart.length) return;
  closeCart();
  renderCheckoutSummary();
  formError.hidden = true;
  checkoutDialog.showModal();
});
document.querySelector("#close-checkout").addEventListener("click", () => checkoutDialog.close());
document.querySelector("#close-confirmation").addEventListener("click", () => confirmationDialog.close());
orderForm.addEventListener("submit", submitOrder);
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

renderProducts();
renderCart();
