# 🔧 Corrigir Erros no SQL

## ⚠️ Erros Comuns que Vi na Imagem:

Se você colou o SQL e deu erro, provavelmente tinha estes problemas:

### ❌ Erros Encontrados:

1. **Na tabela `transactions`, campo `type`:**
   - ❌ ERRADO: `CHECK (type IN ('Income, expense'))`
   - ✅ CORRETO: `CHECK (type IN ('income', 'expense'))`
   - **Problema:** Maiúsculas e vírgula errada

2. **Na tabela `transactions`, campo `status`:**
   - ❌ ERRADO: `CHECK (status TH ('ponding', 'complated', 'falled'))`
   - ✅ CORRETO: `CHECK (status IN ('pending', 'completed', 'failed'))`
   - **Problemas:** 
     - "TH" deveria ser "IN"
     - "ponding" deveria ser "pending"
     - "complated" deveria ser "completed"
     - "falled" deveria ser "failed"

---

## ✅ SOLUÇÃO: Use o SQL Correto

### Opção 1: Copiar do arquivo limpo

1. Abra o arquivo: `SQL_CORRETO.txt`
2. Selecione TODO o conteúdo (Ctrl+A)
3. Copie (Ctrl+C)
4. No Supabase SQL Editor:
   - Limpe tudo (Ctrl+A, Delete)
   - Cole o SQL correto (Ctrl+V)
   - Execute (Ctrl+Enter)

### Opção 2: Corrigir manualmente

Se preferir corrigir o que já está no editor:

1. **Linha do `type`:**
   ```sql
   type VARCHAR(20) CHECK (type IN ('income', 'expense')),
   ```
   - Certifique-se que está em minúsculas: `'income', 'expense'`
   - Com vírgula entre as aspas simples

2. **Linha do `status`:**
   ```sql
   status VARCHAR(20) CHECK (status IN ('pending', 'completed', 'failed')),
   ```
   - Deve ser `IN` (não `TH`)
   - Valores corretos: `'pending'`, `'completed'`, `'failed'`

---

## 📋 SQL Completo Correto (Copie Tudo):

```sql
-- Drop tables if they exist
DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS payment_methods;

-- Create Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    in_stock INTEGER NOT NULL,
    user_uid VARCHAR(255) NOT NULL,
    category VARCHAR(50)
);

-- Create Customers table
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    user_uid VARCHAR(255) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Orders table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    user_uid VARCHAR(255) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pending', 'completed', 'cancelled')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create OrderItems table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Create PaymentMethods table
CREATE TABLE payment_methods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Create Transactions table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    description TEXT,
    order_id INTEGER REFERENCES orders(id),
    payment_method_id INTEGER REFERENCES payment_methods(id),
    amount DECIMAL(10, 2) NOT NULL,
    user_uid VARCHAR(255) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('income', 'expense')),
    category VARCHAR(100),
    status VARCHAR(20) CHECK (status IN ('pending', 'completed', 'failed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial payment methods
INSERT INTO payment_methods (name) VALUES ('Credit Card'), ('Debit Card'), ('Cash');
```

---

## ✅ Após Corrigir:

1. Execute o SQL (Ctrl+Enter)
2. Deve aparecer: **"Success. No rows returned"**
3. Vá em **Table Editor** e verifique as 6 tabelas criadas

---

**Dica:** Use o arquivo `SQL_CORRETO.txt` que está na pasta `pos-system` - ele já está correto! ✅

