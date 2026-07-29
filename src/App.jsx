// import { useState } from 'react';

//import UserCard from "./UserCard";
//import Blog from "./Blog";
//import UserCard from "./UserCard";
// import ToggleButton from "./ToggleButton";
// import ShoppingCart from "./ShoppingCart";
// import GreetingTitle from "./GreetingTitle";
// import WindowWidthTracker from "./WindowWidthTracker";
// import CountdownTimer from "./CountdownTimer";
// import GitHubUserSearch from "./GitHubUserSearch";
// import UserList from './UserList';
// import LoginForm from "./LoginForm.JSX";
// import Counter from "./Counter";
// import DoubleCounter from "./DoubleCounter";
// import MultiStepForm from "./MultiStepForm";
// import LanguageContext from "./LanguageContext";
// import Greeting from "./Greeting";
// import CartContext from './CartContext';
// import ProductItem from './ProductItem';
// import CartSummary from './CartSummary';
// import ContactForm from './ContactForm';
// import TodoApp from './TodoApp';
//import TodoApp from './todo-css-modules/TodoApp';
//import TodoTailwind from './todo-tailwand/TodoTailwind';
// import StudentDashboard from "./student-dashboard/StudentDashboard";
//import MultipleForm from "./exercise22/MultipleForm";
//import DeveloperForm from "./exercise23/DeveloperForm";
// import RegistrationForm from "./exercise24/RegistrationForm";
//import RecipeApp from "./exercise25/RecipeApp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './exercise26/context/AuthContext';
import { PostsProvider } from './exercise26/context/PostsContext';
import BlogPost from './exercise26/BlogPost';
import Home from './exercise26/components/Home';
import PostDetail from './exercise26/components/PostDetail';
import CreatePost from './exercise26/components/CreatePost';
import Login from './exercise26/components/Login';
import NotFound from './exercise26/components/NotFound';
import ProtectedRoute from './exercise26/components/ProtectedRoute';
// import LanguageContext from './exercise15/LanguageContext';


const App = () =>{
  //           const users = [
  //           { id: 1, name: 'Alice', email: 'alice@example.com' },
  //           { id: 2, name: 'Bob', email: 'bob@example.com' },
  //       ];

  //       const [language, setLanguage] = useState('en');

  //       const toggleLanguage = () => {
  //            setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  //            };

  //             const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  // const removeFromCart = (itemId) => {
  //   setCartItems(cartItems.filter((item) => item.id !== itemId));
  // };

  // const value = { cartItems, addToCart, removeFromCart };
    return (

        
        
        <div>
           {/* <TodoApp /> */}
            {/* <TodoTailwind /> */}
             {/* <ToggleButton />
            <ShoppingCart />
            <GreetingTitle />
            <WindowWidthTracker />
            <CountdownTimer />
            <GitHubUserSearch />
            <UserList users={users} />
            <LoginForm />
            <Counter />
            <DoubleCounter  />
            <MultiStepForm  />

             <LanguageContext.Provider value={language}>
             <button onClick={toggleLanguage}>
                  Switch to {language === 'en' ? 'Spanish' : 'English'}
            </button>
             <Greeting />
            </LanguageContext.Provider>

             <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Widget" price={19.99} />
      <ProductItem itemId={2} itemName="Gadget" price={29.99} />
      <CartSummary />
    </CartContext.Provider>
    <ContactForm />
     <TodoApp /> */}

     {/* <TodoTailwind /> */}
     {/* <StudentDashboard /> */}
     {/* <MultipleForm /> */}
     {/* <DeveloperForm /> */}
        {/* <LanguageContext /> */}
     {/* <RegistrationForm /> */}
     {/* <RecipeApp /> */}
       <BrowserRouter>
            <AuthProvider>
                <PostsProvider>
                      <Routes>
                        <Route path="/" element={<BlogPost />}>
                            <Route index element={<Home />} />
                            <Route path="posts/:postId" element={<PostDetail />} />
                            <Route path="create" element={
                                <ProtectedRoute>
                                    <CreatePost />
                                </ProtectedRoute>
                            } />
                            <Route path="login" element={<Login />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </PostsProvider>
            </AuthProvider>
        </BrowserRouter>
        </div>

        
    );
}

export default App;