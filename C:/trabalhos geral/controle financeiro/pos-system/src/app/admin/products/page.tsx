"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  SearchIcon,
  FilterIcon,
  FilePenIcon,
  TrashIcon,
  EyeIcon,
  PlusIcon,
  LoaderIcon,
  Loader2Icon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  in_stock: number;
  category: string;
}

interface Category {
  id: number;
  name: string;
  description?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    inStock: "all",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productInStock, setProductInStock] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [isEditProductDialogOpen, setIsEditProductDialogOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isCategoriesDialogOpen, setIsCategoriesDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");

  const resetSelectedProduct = () => {
    setSelectedProductId(null);
    setProductName("");
    setProductDescription("");
    setProductPrice(0);
    setProductInStock(0);
    setProductCategory("");
  };

  const handleAddProduct = useCallback(async () => {
    try {
      const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        in_stock: productInStock,
        category: productCategory,
      };
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
        setIsAddProductDialogOpen(false);
        resetSelectedProduct();
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }, [productName, productDescription, productPrice, productInStock, productCategory, products]);

  const handleEditProduct = useCallback(async () => {
    if (!selectedProductId) return;
    try {
      const updatedProduct = {
        id: selectedProductId,
        name: productName,
        description: productDescription,
        price: productPrice,
        in_stock: productInStock,
        category: productCategory,
      };
      const response = await fetch(`/api/products/${selectedProductId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        const updatedProductFromServer = await response.json();
        setProducts(
          products.map((p) => (p.id === updatedProductFromServer.id ? updatedProductFromServer : p))
        );
        setIsEditProductDialogOpen(false);
        resetSelectedProduct();
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  }, [selectedProductId, productName, productDescription, productPrice, productInStock, productCategory, products]);

  const handleDeleteProduct = useCallback(async () => {
    if (!productToDelete) return;
    try {
      const response = await fetch(`/api/products/${productToDelete.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProducts(products.filter((p) => p.id !== productToDelete.id));
        setIsDeleteConfirmationOpen(false);
        setProductToDelete(null);
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }, [productToDelete, products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (filters.category === "all") {
        // Se filtro é "all", mostrar todos
      } else {
        // Buscar a categoria pelo ID do filtro
        const selectedCategory = categories.find(c => c.id.toString() === filters.category);
        if (selectedCategory) {
          // Comparar o nome da categoria do produto com o nome da categoria selecionada
          if (product.category !== selectedCategory.name) {
            return false;
          }
        } else {
          // Se não encontrou a categoria, comparar diretamente (compatibilidade com dados antigos)
          if (product.category !== filters.category) {
        return false;
          }
        }
      }
      if (
        filters.inStock !== "all" &&
        filters.inStock === "in-stock" &&
        product.in_stock === 0
      ) {
        return false;
      }
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [products, filters.category, filters.inStock, searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (type: "category" | "inStock", value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Loader2Icon className="mx-auto h-12 w-12 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Card className="flex flex-col gap-6 p-6">
        <CardHeader className="p-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pr-8"
                />
                <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1">
                    <FilterIcon className="w-4 h-4" />
                    <span>Filtros</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={filters.category === "all"}
                    onCheckedChange={() =>
                      handleFilterChange("category", "all")
                    }
                  >
                    Todas as Categorias
                  </DropdownMenuCheckboxItem>
                  {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                      key={category.id}
                      checked={filters.category === category.id.toString()}
                    onCheckedChange={() =>
                        handleFilterChange("category", category.id.toString())
                    }
                  >
                      {category.name}
                  </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={filters.inStock === "all"}
                    onCheckedChange={() => handleFilterChange("inStock", "all")}
                  >
                    Todo Estoque
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.inStock === "in-stock"}
                    onCheckedChange={() =>
                      handleFilterChange("inStock", "in-stock")
                    }
                  >
                    Em Estoque
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={filters.inStock === "out-of-stock"}
                    onCheckedChange={() =>
                      handleFilterChange("inStock", "out-of-stock")
                    }
                  >
                    Sem Estoque
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => setIsCategoriesDialogOpen(true)}>
                Gerenciar Categorias
              </Button>
            <Button size="sm" onClick={() => setIsAddProductDialogOpen(true)}>
              <PlusIcon className="w-4 h-4 mr-2" />
                Adicionar Produto
            </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Estoque</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>R$ {product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.in_stock}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            setSelectedProductId(product.id);
                            setProductName(product.name);
                            setProductDescription(product.description);
                            setProductPrice(product.price);
                            setProductInStock(product.in_stock);
                            setProductCategory(product.category);
                            setIsEditProductDialogOpen(true);
                          }}
                        >
                          <FilePenIcon className="w-4 h-4" />
                          <span className="sr-only">Editar</span>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => {
                            setProductToDelete(product);
                            setIsDeleteConfirmationOpen(true);
                          }}
                        >
                          <TrashIcon className="w-4 h-4" />
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <Dialog
        open={isAddProductDialogOpen || isEditProductDialogOpen}
        onOpenChange={(open) => {
          if (!open) {
            setIsAddProductDialogOpen(false);
            setIsEditProductDialogOpen(false);
            resetSelectedProduct();
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isAddProductDialogOpen ? "Adicionar Novo Produto" : "Editar Produto"}
            </DialogTitle>
            <DialogDescription>
              {isAddProductDialogOpen
                ? "Preencha os detalhes do novo produto."
                : "Edite os detalhes do produto."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input
                id="name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Descrição
              </Label>
              <Input
                id="description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Preço
              </Label>
              <Input
                id="price"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="in_stock" className="text-right">
                Em Estoque
              </Label>
              <Input
                id="in_stock"
                type="number"
                value={productInStock}
                onChange={(e) => setProductInStock(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Categoria
              </Label>
              <Select
                value={productCategory}
                onValueChange={(value) => setProductCategory(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={
                isAddProductDialogOpen ? handleAddProduct : handleEditProduct
              }
            >
              {isAddProductDialogOpen ? "Adicionar Produto" : "Atualizar Produto"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isDeleteConfirmationOpen}
        onOpenChange={setIsDeleteConfirmationOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este produto? Esta ação não pode
              ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteConfirmationOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDeleteProduct}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog de Gerenciamento de Categorias */}
      <Dialog open={isCategoriesDialogOpen} onOpenChange={setIsCategoriesDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Gerenciar Categorias</DialogTitle>
            <DialogDescription>
              Crie e gerencie as categorias de produtos
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">Adicionar Nova Categoria</h3>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="newCategoryName">Nome da Categoria</Label>
                  <Input
                    id="newCategoryName"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="Ex: Semi Joias"
                  />
                </div>
                <div>
                  <Label htmlFor="newCategoryDescription">Descrição (opcional)</Label>
                  <Input
                    id="newCategoryDescription"
                    value={newCategoryDescription}
                    onChange={(e) => setNewCategoryDescription(e.target.value)}
                    placeholder="Descrição da categoria"
                  />
                </div>
                <Button
                  onClick={async () => {
                    if (!newCategoryName.trim()) return;
                    try {
                      const response = await fetch("/api/categories", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: newCategoryName,
                          description: newCategoryDescription,
                        }),
                      });
                      if (response.ok) {
                        const data = await response.json();
                        setCategories([...categories, data.category]);
                        setNewCategoryName("");
                        setNewCategoryDescription("");
                      } else {
                        const error = await response.json();
                        alert(error.error || "Erro ao criar categoria");
                      }
                    } catch (error) {
                      console.error("Error creating category:", error);
                      alert("Erro ao criar categoria");
                    }
                  }}
                >
                  Adicionar Categoria
                </Button>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">Categorias Existentes</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {categories.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Nenhuma categoria cadastrada</p>
                ) : (
                  categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between p-2 border rounded"
                    >
                      <div>
                        <p className="font-medium">{category.name}</p>
                        {category.description && (
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={async () => {
                          if (!confirm(`Tem certeza que deseja excluir a categoria "${category.name}"?`)) {
                            return;
                          }
                          try {
                            const response = await fetch(`/api/categories/${category.id}`, {
                              method: "DELETE",
                            });
                            if (response.ok) {
                              setCategories(categories.filter((c) => c.id !== category.id));
                            } else {
                              const error = await response.json();
                              alert(error.error || "Erro ao excluir categoria");
                            }
                          } catch (error) {
                            console.error("Error deleting category:", error);
                            alert("Erro ao excluir categoria");
                          }
                        }}
                      >
                        Excluir
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsCategoriesDialogOpen(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
