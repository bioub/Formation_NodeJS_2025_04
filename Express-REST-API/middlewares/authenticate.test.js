import { expect, test, vitest } from "vitest";
import authenticate from "./authenticate";

test('authenticate', () => {
  const req = {
    headers: {}
  };
  const res = {
    json(obj) {
      expect(obj).toEqual({
        msg: 'Unauthorized'
      });
    }
  };
  const next = () => {};

  authenticate(req, res, next);

  expect(res.statusCode).toBe(401);
});

test('authenticate avec spy', () => {
  const req = {
    headers: {}
  };
  const res = {
    json: vitest.fn(),
  };
  const next = () => {};

  authenticate(req, res, next);

  expect(res.statusCode).toBe(401);
  // expect(res.json.mock.calls.length).toBe(1);
  // expect(res.json.mock.calls[0][0]).toEqual({
  //   msg: 'Unauthorized'
  // });
  expect(res.json).toHaveBeenCalledTimes(1);
  expect(res.json).toHaveBeenCalledWith({
    msg: 'Unauthorized'
  });
});

// Exercice 1
// Créer un test pour le middleware authenticate qui simule
// une requête avec un header authorization valide
// (ex: d4973653-9895-4123-a7dd-3e1387d0fbde qui est présent par défaut )
// et vérifie que la fonction next est appelée.
