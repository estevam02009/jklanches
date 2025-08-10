import { MenuItem } from "../types";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "X-Burger Clássico",
    price: 18.90,
    description: "Hambúrguer artesanal, queijo, alface, tomate, cebola e molho especial",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "burgers",
    customizations: ["Sem cebola", "Bacon extra", "Queijo extra", "Molho picante"]
  },
  {
    id: 2,
    name: "X-Tudo Premium",
    price: 24.90,
    description: "Hambúrguer duplo, bacon, ovo, presunto, queijo, salada completa",
    image: "https://images.pexels.com/photos/1556909/pexels-photo-1556909.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "burgers",
    customizations: ["Sem ovo", "Bacon extra", "Hambúrguer triplo", "Batata palha"]
  },
  // ...resto dos itens
];
