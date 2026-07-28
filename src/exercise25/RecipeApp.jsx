import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom';
import Home from './Home';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Categories from './Categories';
import CategoryRecipes from './CategoryRecipes';
import NotFound from './NotFound';

const Layout = () => (
  <div className="min-h-screen bg-gray-100">
    <nav className="bg-rose-600 text-white p-4 mb-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo - bidix */}
        <a href="/" className="font-bold text-lg">🍳 Recipe Book</a>

        {/* Links - midig */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-rose-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-rose-200'
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:text-rose-200'
            }
          >
            Categories
          </NavLink>
        </div>

      </div>
    </nav>
    <div className="max-w-6xl mx-auto px-4">
      <Outlet />
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'recipes', element: <RecipeList /> },
      { path: 'recipes/:id', element: <RecipeDetail /> },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          { path: ':categoryId', element: <CategoryRecipes /> }
        ]
      },
    ]
  },
]);

const RecipeApp = () => {
  return <RouterProvider router={router} />;
};

export default RecipeApp;