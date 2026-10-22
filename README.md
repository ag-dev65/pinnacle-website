# Pinnacle Emulsion Paint

A responsive, static paint catalogue built with HTML, CSS and vanilla JavaScript. Customers can browse paint ranges, build a quote list, and send quote or distributor enquiries through WhatsApp. This site does not accept online payments or confirm orders.

## Open the website in VS Code

1. Open this project folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Open `index.html`, right-click in the editor, and select **Open with Live Server**.
4. The site opens in your browser. It can also be opened directly as a static HTML page.

## Requesting a product quote

1. Browse the products and choose a pack size, colour and quantity.
2. Select **Add to cart**.
3. Open the cart and select **Request a Quote on WhatsApp**.
4. WhatsApp opens a pre-filled message with the selected products. Review it and tap **Send**. The request is not sent until you send that WhatsApp message.

The list is saved only in the current browser using `localStorage`; it is not shared with the shop or stored in a central database.

## Using the Become a Distributor form

1. Complete the required business and contact details.
2. Select **Continue to WhatsApp**.
3. WhatsApp opens a message containing your details and wholesale/distribution enquiry. Review it and tap **Send** to submit it to Pinnacle.
4. If WhatsApp does not open automatically, select the **Open the prepared WhatsApp message** link displayed below the form button.

The website does not send the form directly by email. It prepares a WhatsApp message for the customer to review and send. The form shows this clearly and does not claim the enquiry was submitted before the customer sends it.

## Changing shop contact details

Update the `SHOP_CONFIG` values at the top of `script.js`:

- `whatsappNumber`: WhatsApp number in international format, digits only, without a leading `+`.
- `phoneNumber`: telephone number in international format.
- `shopEmail`: email address shown in email links.
- `shopName`: business name used in prepared messages.

The WhatsApp number currently in the source should be replaced if it is not the shop's preferred contact.

## Product catalogue and prices

Product names, descriptions, pack sizes, categories and colour options are in the `PRODUCTS` array in `script.js`. Update those values to match Pinnacle's confirmed product range. Prices are not displayed because no confirmed price list has been supplied; the shop confirms prices and availability when responding to quote requests.

## Product images

Product photos go in the project's `image` folder. Each product's `image` value in the `PRODUCTS` array in `script.js` points to its photo. To replace an existing photo, either overwrite that file with your own image using the same filename, or change the product's `image` value to your image's path. Use JPG, PNG, or WebP, and keep the path relative to `index.html`.

To change the large hero image at the top of the homepage, add your photo to the `image` folder as `hero-paint-shop.jpg`. The page will use it automatically. If the file is not present yet, the existing illustrated paint buckets remain visible. For another filename, update the `src` on `.hero-feature-image` in `index.html`.

For products that do not yet have a matching photo, the page displays a labeled placeholder showing the exact filename to add:

- Textured paint: `image/textured-paint.jpg`
- Metal paint: `image/metal-paint.jpg`
- Waterproof paint: `image/waterproof-paint.jpg`

Copy your own product photo into `image` using that filename and refresh the site. Product photos keep their full proportions on product cards, product details, and the quote list.

## Payments

Online payment, Paystack integration, payment APIs and the payment backend have been removed. Customers request a quote and coordinate payment directly with Pinnacle. A quote request is not a confirmed or paid order.
