export interface MenuItem {
    id: number
    name: string
    price: number
    description: string
    image: string
    category: string
    customizations?: string[]
}

export interface CartItem {
    item: MenuItem
    quantity: number
    customizations?: string[]
    notes: string
}

export interface Order {
    id: string
    tableNumber: number
    items: CartItem[]
    total: number
    status: 'recebido' | 'preparando' | 'pronto' | 'entregue'
    timestamp: Date
    customerPhone: string
}
