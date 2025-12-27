import React, { useState } from "react";

export default function SubmitRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [cookingTime, setCookingTime] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!title.trim()) e.title = "Title is required.";
    if (!ingredients.trim()) e.ingredients = "Please add at least one ingredient.";
    if (!instructions.trim()) e.instructions = "Instructions are required.";
    if (!cookingTime.trim()) e.cookingTime = "Cooking time is required.";
    else if (!/^\d+\s*(min|mins|minutes|h|hr|hrs|hours)?$/i.test(cookingTime.trim()))
      e.cookingTime = "Enter cooking time like '30' or '30 min' or '1 hr'.";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
    }
  }

  const parsedIngredients = ingredients
    .split(/\n|,/) 
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Submit Recipe</h1>
          <p className="text-sm text-gray-500 mt-1">Share your favorite recipe with the community.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`block w-full rounded-xl border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 ${
                  errors.title ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Enter recipe title"
                aria-invalid={errors.title ? "true" : "false"}
              />
            </div>
            {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
              Ingredients
            </label>
            <div className="mt-1">
              <textarea
                id="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                rows={4}
                className={`block w-full rounded-xl border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 ${
                  errors.ingredients ? "border-red-400" : "border-gray-200"
                }`}
                placeholder={`Write each ingredient on a new line or separate with commas\ne.g. 2 eggs\n1 cup flour`}
                aria-describedby="ingredients-help"
              />
            </div>
            <p id="ingredients-help" className="text-xs text-gray-400 mt-1">
              Separate ingredients with new lines or commas.
            </p>
            {errors.ingredients && <p className="text-sm text-red-600 mt-1">{errors.ingredients}</p>}
            {parsedIngredients.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {parsedIngredients.slice(0, 8).map((ing, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border bg-gray-50">
                    {ing}
                  </span>
                ))}
                {parsedIngredients.length > 8 && (
                  <span className="text-xs px-3 py-1 rounded-full border bg-gray-50">+{parsedIngredients.length - 8} more</span>
                )}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
              Instructions
            </label>
            <div className="mt-1">
              <textarea
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                rows={6}
                className={`block w-full rounded-xl border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 ${
                  errors.instructions ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="Step-by-step instructions"
              />
            </div>
            {errors.instructions && <p className="text-sm text-red-600 mt-1">{errors.instructions}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <div className="mt-1">
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-xl border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 border-gray-200"
                >
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                  <option>Vegan</option>
                  <option>Dessert</option>
                  <option>Snack</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-700">
                Cooking Time
              </label>
              <div className="mt-1">
                <input
                  id="cookingTime"
                  value={cookingTime}
                  onChange={(e) => setCookingTime(e.target.value)}
                  className={`block w-full rounded-xl border px-4 py-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 ${
                    errors.cookingTime ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="e.g. 30 min or 1 hr"
                />
              </div>
              {errors.cookingTime && <p className="text-sm text-red-600 mt-1">{errors.cookingTime}</p>}
            </div>
          </div>
          <div className="pt-3">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-white font-semibold text-lg shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              Submit Recipe
            </button>
          </div>
        </form>
        {submitted && (
          <div className="mt-6 rounded-lg bg-green-50 border border-green-100 p-4">
            <p className="text-sm text-green-800 font-medium">Recipe submitted successfully (frontend only).</p>
            <pre className="mt-3 overflow-x-auto text-xs bg-white p-3 rounded text-gray-700">
{JSON.stringify({ title, ingredients: parsedIngredients, instructions, category, cookingTime }, null, 2)}
            </pre>
          </div>
        )}
        <p className="text-xs text-gray-400 mt-6">This is a frontend-only component. Hook the submit handler to your API to save recipes.</p>
      </div>
    </div>
  );
}
