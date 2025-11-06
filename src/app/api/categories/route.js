import { getCategories } from "RSV/services/categoryService";

export async function GET() {
  try {
    const categories = await getCategories();
    return Response.json(categories);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: `Error fetching categories: ${error.message}` },
      { status: 500 },
    );
  }
}
