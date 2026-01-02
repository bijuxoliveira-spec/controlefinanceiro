"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Package2Icon,
  SearchIcon,
  LayoutDashboardIcon,
  DollarSignIcon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
  ShoppingBagIcon,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { createClient } from "@/lib/supabase/client";

const pageNames: { [key: string]: string } = {
  "/admin": "Painel",
  "/admin/customers": "Clientes",
  "/admin/products": "Produtos",
  "/admin/orders": "Pedidos",
  "/admin/pos": "Ponto de Venda",
  "/admin/cashier": "Caixa",
};

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-amber-800/30 bg-gradient-to-r from-gray-800/95 to-gray-900/95 backdrop-blur-sm px-4 shadow-lg shadow-black/20">
        <Link
          href="/admin"
          className="flex items-center gap-2"
        >
          <Logo size="small" />
        </Link>
        <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">{pageNames[pathname]}</h1>
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-amber-600/70" />
          <Input
            type="search"
            placeholder="Buscar..."
            className="w-full rounded-lg bg-gray-700/50 border-amber-800/30 text-white placeholder:text-gray-400 pl-8 md:w-[200px] lg:w-[336px] focus:border-amber-500 focus:ring-amber-500"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src="/placeholder-user.jpg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-800 border-amber-800/50">
            <DropdownMenuLabel className="text-amber-400">Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-amber-800/30" />
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-amber-400 focus:bg-gray-700 focus:text-amber-400">Configurações</DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-amber-400 focus:bg-gray-700 focus:text-amber-400">Suporte</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-amber-800/30" />
            <DropdownMenuItem 
              onClick={handleLogout}
              className="text-red-400 hover:bg-red-900/20 hover:text-red-300 focus:bg-red-900/20 focus:text-red-300 cursor-pointer"
            >
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <aside className="fixed mt-[56px] inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-amber-800/30 bg-gray-800/95 backdrop-blur-sm sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/admin"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === "/admin"
                        ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50 text-amber-400"
                        : "text-amber-600/70 hover:text-amber-400 hover:bg-amber-900/20"
                    }`}
                  >
                    <LayoutDashboardIcon className="h-5 w-5" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 border-amber-800/50 text-amber-400">Painel</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/admin/cashier"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === "/admin/cashier"
                        ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50 text-amber-400"
                        : "text-amber-600/70 hover:text-amber-400 hover:bg-amber-900/20"
                    }`}
                  >
                    <DollarSignIcon className="h-5 w-5" />
                    <span className="sr-only">Caixa</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 border-amber-800/50 text-amber-400">Caixa</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/admin/products"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === "/admin/products"
                        ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50 text-amber-400"
                        : "text-amber-600/70 hover:text-amber-400 hover:bg-amber-900/20"
                    }`}
                  >
                    <PackageIcon className="h-5 w-5" />
                    <span className="sr-only">Produtos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 border-amber-800/50 text-amber-400">Produtos</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/admin/customers"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === "/admin/customers"
                        ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50 text-amber-400"
                        : "text-amber-600/70 hover:text-amber-400 hover:bg-amber-900/20"
                    }`}
                  >
                    <UsersIcon className="h-5 w-5" />
                    <span className="sr-only">Clientes</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 border-amber-800/50 text-amber-400">Clientes</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/admin/orders"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === "/admin/orders"
                        ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50 text-amber-400"
                        : "text-amber-600/70 hover:text-amber-400 hover:bg-amber-900/20"
                    }`}
                  >
                    <ShoppingBagIcon className="h-5 w-5" />
                    <span className="sr-only">Pedidos</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 border-amber-800/50 text-amber-400">Pedidos</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/admin/pos"
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8 ${
                      pathname === "/admin/pos"
                        ? "bg-gradient-to-br from-amber-900/50 to-yellow-900/50 text-amber-400"
                        : "text-amber-600/70 hover:text-amber-400 hover:bg-amber-900/20"
                    }`}
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span className="sr-only">Ponto de Venda</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-gray-800 border-amber-800/50 text-amber-400">Ponto de Venda</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
      </div>
    </div>
  );
}
