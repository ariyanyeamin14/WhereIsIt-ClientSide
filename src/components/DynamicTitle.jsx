import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        // Define titles for each route
        const routeTitles = {
            '/': 'Home - WhereIsIt',
            '/allItems': 'All Items - WhereIsIt',
            '/addItems': 'Add Item - WhereIsIt',
            '/allRecovered': 'All Recovered Items - WhereIsIt',
            '/myItems': 'My Items - WhereIsIt',
            '/login': 'Login - WhereIsIt',
            '/register': 'Register - WhereIsIt',
        };

        // Handle dynamic routes
        if (location.pathname.startsWith('/items/')) {
            document.title = 'Item Details - WhereIsIt';
        } else if (location.pathname.startsWith('/updateItems/')) {
            document.title = 'Update Item - WhereIsIt';
        } else {
            // Set title for static routes or default title
            document.title = routeTitles[location.pathname] || 'WhereIsIt';
        }
    }, [location]);

    return null; // This component doesn't render anything
};

export default DynamicTitle;
