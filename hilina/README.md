# Hilina Portfolio

A modern, cyber-themed portfolio website built with React, TypeScript, and Vite.

## Tech Stack

### Frontend
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

### Database Stack

#### Relational Databases
- **PostgreSQL** - Advanced open-source relational database
  - Features: ACID compliance, complex queries, JSON support
  - Best for: Complex data relationships, financial apps, enterprise systems
- **MariaDB** - Community-developed fork of MySQL
  - Features: MySQL compatibility, enhanced performance
  - Best for: Web applications, content management systems

#### NoSQL Databases
- **MongoDB** - Document-oriented NoSQL database
  - Features: Flexible schema, horizontal scaling, rich queries
  - Best for: Content management, real-time analytics, mobile apps

#### ORM & Database Tools
- **Prisma** - Modern TypeScript ORM
  - Features: Type-safe database access, auto-generated client, migrations
  - Works with: PostgreSQL, MySQL, MariaDB, MongoDB
- **Drizzle ORM** - Lightweight TypeScript ORM
  - Features: SQL-like API, minimal runtime, type safety
  - Works with: PostgreSQL, MySQL, SQLite
- **TypeORM** - Decorator-based ORM
  - Features: Active Record pattern, migrations, relations
  - Works with: PostgreSQL, MySQL, MariaDB, MongoDB, SQLite
- **Mongoose** - MongoDB object modeling
  - Features: Schema validation, middleware, query building
  - Works with: MongoDB

#### Database Connection & Management
- **pg** - PostgreSQL client for Node.js
- **mysql2** - MySQL/MariaDB driver with better performance
- **mongodb** - Official MongoDB Node.js driver
- **Redis** - In-memory data structure store (caching, sessions)

### Development Tools
- **ESLint** - Code linting and formatting
- **React Icons** - Icon library
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd hilina

# Install dependencies
npm install

# Start development server
npm run dev
```

### Database Setup Examples

#### PostgreSQL with Prisma
```bash
# Install dependencies
npm install prisma @prisma/client pg

# Initialize Prisma
npx prisma init

# Generate client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

#### MongoDB with Mongoose
```bash
# Install dependencies
npm install mongoose mongodb

# Connection example
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/myapp');
```

#### MariaDB with TypeORM
```bash
# Install dependencies
npm install typeorm mysql2 reflect-metadata

# Setup in tsconfig.json
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
