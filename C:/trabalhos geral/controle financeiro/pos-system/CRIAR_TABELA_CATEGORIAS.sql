-- Criar tabela de categorias de produtos
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir categorias padrão
INSERT INTO categories (name, description) VALUES 
    ('Eletrônicos', 'Produtos eletrônicos e tecnológicos'),
    ('Roupas', 'Vestuário e acessórios'),
    ('Livros', 'Livros e materiais de leitura'),
    ('Casa', 'Produtos para casa e decoração'),
    ('Saúde', 'Produtos de saúde e bem-estar')
ON CONFLICT (name) DO NOTHING;

