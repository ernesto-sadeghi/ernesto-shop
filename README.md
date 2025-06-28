# Ernesto-Shop

![Nuxt.js](https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD02F?style=for-the-badge&logo=pinia&logoColor=000)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

An e-commerce platform with tiered access control built with Nuxt.js, Pinia, and Bootstrap.

## Features

- **Three Access Levels**:
  - Guest users: Browse products
  - Authenticated users: Add to cart
  - Admin users: Full access + user management
- **Responsive Design**: Built with Bootstrap 5
- **State Management**: Powered by Pinia
- **Product Catalog**: View all available products
- **Shopping Cart**: Add/remove items (for logged-in users)


## Access Levels
Feature |	Guest |	User |	Admin
View |products |✅	| ✅ |	✅
Add to cart	| ❌	| ✅	| ✅
Checkout	| ❌ |	✅ |	✅
User management	| ❌ |	❌ |	✅
## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ernesto-shop.git
   cd ernesto-shop
