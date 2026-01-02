# 📦 Como Criar Categorias de Produtos

## Passo 1: Criar a Tabela de Categorias no Banco

1. **Acesse o Supabase Dashboard:**
   - https://supabase.com/dashboard
   - Faça login
   - Selecione seu projeto

2. **Abra o SQL Editor:**
   - No menu lateral, clique em **SQL Editor**
   - Clique em **New Query**

3. **Execute o SQL:**
   - Abra o arquivo `CRIAR_TABELA_CATEGORIAS.sql` na pasta `pos-system`
   - Copie e cole o conteúdo no SQL Editor
   - Clique em **Run** (ou pressione Ctrl+Enter)

## Passo 2: Usar a Interface

Após criar a tabela, você pode gerenciar categorias diretamente na interface:

1. **Acesse a página de Produtos:**
   - Vá em **Produtos** no menu lateral

2. **Clique em "Gerenciar Categorias":**
   - Botão no topo da página, ao lado de "Adicionar Produto"

3. **Adicionar Nova Categoria:**
   - Digite o nome da categoria (ex: "Semi Joias")
   - Opcionalmente, adicione uma descrição
   - Clique em "Adicionar Categoria"

4. **Excluir Categoria:**
   - Na lista de categorias, clique em "Excluir" ao lado da categoria
   - ⚠️ **Atenção:** Não é possível excluir categorias que possuem produtos associados

## Passo 3: Usar Categorias nos Produtos

Ao criar ou editar um produto:

1. No campo "Categoria", você verá todas as categorias cadastradas
2. Selecione a categoria desejada
3. As categorias aparecem automaticamente no filtro de produtos

## Categorias Padrão

O sistema já vem com algumas categorias pré-cadastradas:
- Eletrônicos
- Roupas
- Livros
- Casa
- Saúde

Você pode excluir ou modificar essas categorias conforme necessário.

## Dicas

- Use nomes descritivos para as categorias
- Organize produtos por categorias para facilitar a busca
- Não exclua categorias que estão em uso por produtos

