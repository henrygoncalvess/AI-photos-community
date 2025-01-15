import multer from 'fastify-multer';

export const upload = multer({ dest: 'uploads/' })
