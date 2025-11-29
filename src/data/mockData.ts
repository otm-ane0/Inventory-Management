
export const mockProducts = [
  {
    id: "P1001",
    name: "Wireless Headphones",
    sku: "AUDIO-101",
    category: "Electronics",
    unitPrice: 89.99,
    inStock: 34
  },
  {
    id: "P1002",
    name: "Ergonomic Keyboard",
    sku: "COMP-202",
    category: "Electronics",
    unitPrice: 129.99,
    inStock: 18
  },
  {
    id: "P1003",
    name: "Desk Lamp",
    sku: "HM-303",
    category: "Home Office",
    unitPrice: 44.99,
    inStock: 56
  },
  {
    id: "P1004",
    name: "Cotton T-shirt Pack",
    sku: "APP-404",
    category: "Clothing",
    unitPrice: 24.99,
    inStock: 203
  },
  {
    id: "P1005",
    name: "Leather Notebook",
    sku: "OFF-505",
    category: "Office Supplies",
    unitPrice: 18.99,
    inStock: 87
  },
  {
    id: "P1006",
    name: "Wireless Charger",
    sku: "ELEC-606",
    category: "Electronics",
    unitPrice: 35.99,
    inStock: 42
  },
  {
    id: "P1007",
    name: "Coffee Machine",
    sku: "KIT-707",
    category: "Appliances",
    unitPrice: 199.99,
    inStock: 7
  },
  {
    id: "P1008",
    name: "Office Chair",
    sku: "FUR-808",
    category: "Furniture",
    unitPrice: 249.99,
    inStock: 12
  },
  {
    id: "P1009",
    name: "External Hard Drive",
    sku: "COMP-909",
    category: "Electronics",
    unitPrice: 89.99,
    inStock: 0
  }
];

export const mockInventory = [
  {
    id: "INV001",
    product: "Wireless Headphones",
    sku: "AUDIO-101",
    location: "Warehouse A, Shelf B3",
    quantity: 34,
    reorderPoint: 15,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV002",
    product: "Ergonomic Keyboard",
    sku: "COMP-202",
    location: "Warehouse A, Shelf C1",
    quantity: 18,
    reorderPoint: 20,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV003",
    product: "Desk Lamp",
    sku: "HM-303",
    location: "Warehouse B, Shelf A5",
    quantity: 56,
    reorderPoint: 25,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV004",
    product: "Cotton T-shirt Pack",
    sku: "APP-404",
    location: "Warehouse B, Shelf D2",
    quantity: 203,
    reorderPoint: 50,
    batchNumber: "LOT-2023-04",
    expiryDate: null
  },
  {
    id: "INV005",
    product: "Leather Notebook",
    sku: "OFF-505",
    location: "Warehouse A, Shelf E7",
    quantity: 87,
    reorderPoint: 30,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV006",
    product: "Wireless Charger",
    sku: "ELEC-606",
    location: "Warehouse A, Shelf B4",
    quantity: 42,
    reorderPoint: 25,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV007",
    product: "Coffee Machine",
    sku: "KIT-707",
    location: "Warehouse B, Shelf C3",
    quantity: 7,
    reorderPoint: 10,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV008",
    product: "Office Chair",
    sku: "FUR-808",
    location: "Warehouse B, Shelf F1",
    quantity: 12,
    reorderPoint: 15,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV009",
    product: "External Hard Drive",
    sku: "COMP-909",
    location: "Warehouse A, Shelf C4",
    quantity: 0,
    reorderPoint: 8,
    batchNumber: null,
    expiryDate: null
  },
  {
    id: "INV010",
    product: "Protein Powder",
    sku: "FOOD-111",
    location: "Warehouse A, Shelf G2",
    quantity: 45,
    reorderPoint: 20,
    batchNumber: "LOT-2023-06",
    expiryDate: "2023-09-15"
  }
];

export const mockActivityEvents = [
  {
    user: "John Doe",
    action: "added 25 units of",
    item: "Wireless Headphones",
    time: "10 minutes ago"
  },
  {
    user: "Sarah Smith",
    action: "updated the price of",
    item: "Ergonomic Keyboard",
    time: "35 minutes ago"
  },
  {
    user: "Mike Johnson",
    action: "moved 10 units of",
    item: "Coffee Machine",
    time: "1 hour ago"
  },
  {
    user: "Emily Davis",
    action: "created a purchase order for",
    item: "External Hard Drive",
    time: "3 hours ago"
  },
  {
    user: "Chris Wilson",
    action: "adjusted stock count of",
    item: "Cotton T-shirt Pack",
    time: "5 hours ago"
  }
];

export const mockStockLevelData = [
  {
    category: "Electronics",
    inStock: 94,
    lowStock: 7,
    outOfStock: 1
  },
  {
    category: "Clothing",
    inStock: 203,
    lowStock: 0,
    outOfStock: 0
  },
  {
    category: "Home Office",
    inStock: 56,
    lowStock: 0,
    outOfStock: 0
  },
  {
    category: "Office Supplies",
    inStock: 87,
    lowStock: 0,
    outOfStock: 0
  },
  {
    category: "Furniture",
    inStock: 12,
    lowStock: 3,
    outOfStock: 0
  },
  {
    category: "Appliances",
    inStock: 7,
    lowStock: 3,
    outOfStock: 0
  }
];

export const mockInventoryValueData = [
  { date: "Jan", value: 3814500 },
  { date: "Feb", value: 3956200 },
  { date: "Mar", value: 4102800 },
  { date: "Apr", value: 4356300 },
  { date: "May", value: 4289700 },
  { date: "Jun", value: 4521000 },
  { date: "Jul", value: 4728400 },
  { date: "Aug", value: 4852600 },
  { date: "Sep", value: 4967800 },
  { date: "Oct", value: 5087300 },
  { date: "Nov", value: 5214980 }
];

export const mockStockMovementData = [
  { date: "Week 1", incoming: 245, outgoing: 187 },
  { date: "Week 2", incoming: 178, outgoing: 205 },
  { date: "Week 3", incoming: 326, outgoing: 243 },
  { date: "Week 4", incoming: 189, outgoing: 215 },
  { date: "Week 5", incoming: 287, outgoing: 198 }
];

export const mockSalesData = [
  {
    id: 1,
    product: "Wireless Headphones",
    sku: "AUDIO-101",
    unitsSold: 87,
    revenue: 7829.13,
    cost: 4350,
    profit: 3479.13,
    profitMargin: 44
  },
  {
    id: 2,
    product: "Ergonomic Keyboard",
    sku: "COMP-202",
    unitsSold: 42,
    revenue: 5459.58,
    cost: 2940,
    profit: 2519.58,
    profitMargin: 46
  },
  {
    id: 3,
    product: "Coffee Machine",
    sku: "KIT-707",
    unitsSold: 23,
    revenue: 4599.77,
    cost: 2760,
    profit: 1839.77,
    profitMargin: 40
  },
  {
    id: 4,
    product: "Cotton T-shirt Pack",
    sku: "APP-404",
    unitsSold: 156,
    revenue: 3898.44,
    cost: 2340,
    profit: 1558.44,
    profitMargin: 39
  },
  {
    id: 5,
    product: "Leather Notebook",
    sku: "OFF-505",
    unitsSold: 98,
    revenue: 1861.02,
    cost: 980,
    profit: 881.02,
    profitMargin: 47
  }
];

export const mockStockAlerts = [
  {
    id: 1,
    product: "Coffee Machine",
    sku: "KIT-707",
    currentStock: 7,
    reorderPoint: 10,
    location: "Warehouse B, Shelf C3",
    alertType: "Low Stock"
  },
  {
    id: 2,
    product: "Office Chair",
    sku: "FUR-808",
    currentStock: 12,
    reorderPoint: 15,
    location: "Warehouse B, Shelf F1",
    alertType: "Low Stock"
  },
  {
    id: 3,
    product: "External Hard Drive",
    sku: "COMP-909",
    currentStock: 0,
    reorderPoint: 8,
    location: "Warehouse A, Shelf C4",
    alertType: "Out of Stock"
  },
  {
    id: 4,
    product: "Protein Powder",
    sku: "FOOD-111",
    currentStock: 45,
    reorderPoint: 20,
    location: "Warehouse A, Shelf G2",
    alertType: "Expiring"
  },
  {
    id: 5,
    product: "Wireless Earbuds",
    sku: "AUDIO-112",
    currentStock: 5,
    reorderPoint: 12,
    location: "Warehouse A, Shelf B2",
    alertType: "Low Stock"
  }
];
