
------------------------------
## E-Hardware Order System
A sleek, responsive hardware storefront built with React and Sass, featuring a Firebase backend. This project allows customers to browse inventory and submit orders directly via Email or WhatsApp, streamlining the process for local hardware businesses. [2, 3] 
## 🚀 Key Features

* Communication-First Ordering: Instead of a traditional checkout, users send their carts directly to the shop owner via WhatsApp or pre-formatted Email.
* Real-time Inventory: Managed via Firebase Firestore for instant updates.
* Dynamic Routing: Smooth navigation between product categories and details using react-router-dom.
* Responsive Design: Optimized for mobile and desktop using custom SASS modules.
* Cart Management: Localized persistent cart to keep track of hardware supplies during the browsing session. [4, 5, 6, 7, 8] 

## 🛠️ Tech Stack

* Frontend: React 18+
* Styling: SASS (SCSS)
* Routing: React Router DOM v6
* Backend/DB: Firebase Firestore
* API/Integration: WhatsApp Business API (Link-based) & Mailto protocols [9, 10, 11] 

## 📦 Installation & Setup

   1. Clone the repository:
   
   git clone https://github.com
   cd ehardware-system
   
   2. Install dependencies:
   
   npm install
   
   3. Firebase Configuration:
   Create a .env file in the root directory and add your Firebase credentials:
   
   REACT_APP_FIREBASE_API_KEY=your_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   
   4. Run the app:
   
   npm start
   
   [12, 13, 14, 15, 16] 

## 📁 Project Structure

src/
├── components/      # Reusable UI (Button, Card, Navbar)
├── rotes/           # View components (Home, ProductDetail, Cart)
├── css/          # SASS partials (variables, mixins, global)
├── FirebaseConfig/        # Firebase config and data fetching
└── App.js           # Main routing and layout logic

## 📨 How Ordering Works
The application aggregates items in the CartContext. When the user clicks "Place Order":

   1. WhatsApp: A string is generated containing the item list and total price, then passed to https://wa.me.
   2. Email: A mailto: link is triggered with a structured subject line and body including the order details.

## 📄 License
Distributed under the MIT License.
------------------------------
