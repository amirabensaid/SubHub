# SubHub Backend

Backend API for SubHub built with Node.js, Express.js, Prisma, and MySQL.

## Prerequisites

- Node.js (v18+)
- npm or pnpm
- MySQL 8.0+

## Setup

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env` and update with your database credentials:

```bash
cp .env.example .env
```

Update the `DATABASE_URL` in `.env`:
```
DATABASE_URL="mysql://username:password@localhost:3306/subhub_db"
```

### 3. Database Setup

Generate Prisma client:
```bash
npm run prisma:generate
```

Run migrations:
```bash
npm run prisma:migrate
```

View database with Prisma Studio:
```bash
npm run prisma:studio
```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The server will run at `http://localhost:3000`

## Building

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
├── index.ts           # Main server file
├── routes/            # API route handlers
├── middleware/        # Custom middleware
└── controllers/       # Business logic

prisma/
└── schema.prisma      # Database schema
```

## Scripts

- `dev` - Start development server with hot reload
- `build` - Compile TypeScript to JavaScript
- `start` - Start production server
- `prisma:generate` - Generate Prisma client
- `prisma:migrate` - Run database migrations
- `prisma:migrate:deploy` - Deploy migrations in production
- `prisma:studio` - Open Prisma Studio UI
- `lint` - Run ESLint
- `format` - Format code with Prettier

## API Health Check

```bash
GET /api/health
```

Returns:
```json
{
  "status": "Server is running"
}
```

## Database Schema

Define your models in `prisma/schema.prisma`. Example User model is included.

To add a new model:

1. Update `prisma/schema.prisma`
2. Run `npm run prisma:migrate`
3. The migration will be generated and applied

## Notes

- Make sure MySQL is running before starting the server
- Update CORS settings in `src/index.ts` for your frontend URL
- Add your routes to the router imports in `src/index.ts`
