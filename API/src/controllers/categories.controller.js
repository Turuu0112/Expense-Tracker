import { db } from "../database";
import { categories } from "../database/schema";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await db.query.categories.findMany();

    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getCategoryId = async (req, res) => {
  try {
    const category = await db.query.categories.findMany();

    const categoryId = req.params.id;
    const chooseCategory = category.find(
      (category) => category.id == categoryId
    );
    if (!chooseCategory)
      return res.status(401).json({ message: "Category not found" });
    res.json(chooseCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const createCategory = async (req, res) => {
  try {
    const { name, color, icon_name } = req.body;
    const category = await db
      .insert(categories)
      .values({
        name,
        color,
        icon_name,
        updatedAt: new Date(),
        createdAt: new Date(),
      })
      .returning();
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
