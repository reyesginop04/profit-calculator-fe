# Product Profit Calculator

## Project Summary

Product Profit Calculator is a simple and efficient tool to calculate the profit margin and selling price of a product based on cost, markup percentage, and additional fees. This application helps business owners, e-commerce sellers, and marketers make informed pricing decisions.

## Technologies Used

- [Vite](https://vitejs.dev/) - Fast build tool for modern web projects
- [React](https://react.dev/) - JavaScript library for building UI
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Nginx](https://nginx.org/) - Web server for serving the production build

---

## Setup on Local

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x) & npm/yarn
- Git

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/reyesginop04/profit-calculator-fe.git
cd profit-calculator-fe
```

2. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:

```ini
VITE_API_BASE_URL=http://localhost:5000/api
```

3. **Building for Production**

```sh
npm run dev
```

4. **Open the App in the Browser**
   Visit http://localhost:5173/ to see the application.

---

## Setup on Ubuntu

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.x) & npm/yarn
- Git

### Installation

1. **Navigate to `/var/www` and clone the repository:**

```sh
cd /var/www
sudo git clone https://github.com/reyesginop04/profit-calculator-fe.git
cd profit-calculator-fe
sudo chown -R $USER:$USER .
npm install  # or yarn install
```

2. **Configure environment variables:**
   Create a `.env` file in the root directory and add the following:

```ini
VITE_API_BASE_URL=http://localhost:5000/api
```

3. **Building for Production**

```sh
npm run build
```

##### Hosting the Production Build with Nginx

4. **Set Up Nginx Configuration**
   Create a new Nginx configuration file:

```sh
sudo nano /etc/nginx/sites-available/product-profit-calculator
```

Add the following configuration:

```ini
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/product-profit-calculator/dist;
    index index.html;
    location / {
        try_files $uri /index.html;
    }

    error_page 404 /index.html;

    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires max;
        log_not_found off;
    }
}
```

5. **Enable the Configuration**

```sh
sudo ln -s /etc/nginx/sites-available/product-profit-calculator /etc/nginx/sites-enabled/
```

6. **Restart Nginx**

```sh
sudo systemctl restart nginx
```

7. **Open the App in the Browser**
   Visit http://yourdomain.com/ or http://your-server-ip/ to see the hosted application.

### Example .env Configuration

```ini
VITE_API_BASE_URL=http://localhost:5000/api
```
