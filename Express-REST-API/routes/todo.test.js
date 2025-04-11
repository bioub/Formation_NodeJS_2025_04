import request from 'supertest';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import app from '../app' // Assurez-vous que le chemin vers votre fichier app est correct
import Todo from '../models/todo'; // Assurez-vous que le chemin vers votre modèle Todo est correct

vi.mock('../models/todo');

describe('GET /api/todos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a list of todos', async () => {
    const mockTodos = [
      { _id: '1', title: 'Test Todo 1', completed: false },
      { _id: '2', title: 'Test Todo 2', completed: true },
    ];

    Todo.find.mockResolvedValue(mockTodos);

    const response = await request(app).get('/api/todos');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockTodos);
    expect(Todo.find).toHaveBeenCalledTimes(1);
  });

  it('should handle errors', async () => {
    Todo.find.mockRejectedValue(new Error('Database error'));

    const response = await request(app).get('/api/todos');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ "msg": "Database error" });
    expect(Todo.find).toHaveBeenCalledTimes(1);
  });
});

// Exercice 2
// Tester la route GET /api/todos/1
// Avec une fausse méthode findById
// qui renvoie un objet Todo
