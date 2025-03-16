import { prisma } from "./prisma"

const categories = [
  { name: "Food", icon: "ShoppingBag", color: "#4ade80" },
  { name: "Rent", icon: "Home", color: "#60a5fa" },
  { name: "Travel", icon: "Plane", color: "#f97316" },
  { name: "Coffee", icon: "Coffee", color: "#a78bfa" },
  { name: "Restaurant", icon: "Utensils", color: "#fb7185" },
  { name: "Transportation", icon: "Car", color: "#fbbf24" },
  { name: "Entertainment", icon: "Tv", color: "#34d399" },
  { name: "Utilities", icon: "Wifi", color: "#94a3b8" },
  { name: "Phone", icon: "Smartphone", color: "#f472b6" },
  { name: "Shopping", icon: "Shirt", color: "#38bdf8" },
  { name: "Healthcare", icon: "Heart", color: "#fb7185" },
  { name: "Education", icon: "GraduationCap", color: "#a78bfa" },
  { name: "Gifts", icon: "Gift", color: "#fb923c" },
]

export async function seedCategories() {
  console.log("Seeding categories...")

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.name.toLowerCase() },
      update: {},
      create: {
        id: category.name.toLowerCase(),
        name: category.name,
        icon: category.icon,
        color: category.color,
      },
    })
  }

  console.log("Categories seeded successfully!")
}

export async function seed() {
  try {
    await seedCategories()
    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seed()
}

