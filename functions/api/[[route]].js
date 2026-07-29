/**
 * Cloudflare Pages Functions - API de Ofertas
 * 
 * Este arquivo é usado pelo Cloudflare Pages para criar
 * uma API serverless junto com o site estático.
 * 
 * Coloque este arquivo em: /functions/api/[[route]].js
 * Ele captura todas as rotas /api/* e /assets/*
 */

// Re-exportar o worker principal
export { default as onRequest } from '../../workers/oferta-worker.js';
