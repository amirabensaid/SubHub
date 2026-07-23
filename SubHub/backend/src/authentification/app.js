import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const app = express();
const prisma = new PrismaClient();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}));

// Permet de lire les données JSON envoyées dans les requêtes
app.use(express.json());


// =========================
// ROUTE TEST : GET /
// =========================
app.get('/', (req, res) => {
    res.send('Backend SubHub fonctionne !');
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});


// =========================
// ROUTE SIGN UP
// =========================
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Vérifier les champs
        if (!name || !email || !password) {
            return res.status(400).json({
                error: 'Name, email and password are required'
            });
        }

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUser) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer l'utilisateur
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        });

        // Ne pas renvoyer le mot de passe
        res.status(201).json({
            message: 'Account created successfully',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Server error'
        });
    }
});


// =========================
// ROUTE SIGN IN
// =========================
app.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Vérifier les champs
        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are required'
            });
        }

        // Chercher l'utilisateur
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        // Utilisateur inexistant
        if (!user) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }

        // Vérifier le mot de passe
        const passwordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordCorrect) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }

        // Connexion réussie
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: 'Server error'
        });
    }
});


// Exporter l'application
export default app;