/**
 * Role-Based Menu Logic
 * Shows/Hides menu items based on User Role.
 */
const MenuLogic = {
    renderMenu: function(role) {
        const adminLinks = document.querySelectorAll('.admin-only');
        const sellerLinks = document.querySelectorAll('.seller-only');

        if (role === 'admin') {
            adminLinks.forEach(el => el.style.display = 'block');
        } else if (role === 'seller') {
            sellerLinks.forEach(el => el.style.display = 'block');
        } else {
            // Standard Customer
            adminLinks.forEach(el => el.style.display = 'none');
            sellerLinks.forEach(el => el.style.display = 'none');
        }
    }
};

// Example usage on load
// MenuLogic.renderMenu(localStorage.getItem('user_role'));
