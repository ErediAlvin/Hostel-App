document.addEventListener('DOMContentLoaded', function() {

    // --- Shared: Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('nav ul');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- Login/Register Page: Tab Switching ---
    const authTabs = document.querySelectorAll('.tab-link');
    const authTabContents = document.querySelectorAll('.tab-content');

    function openTab(event, tabName) {
        authTabContents.forEach(content => content.style.display = 'none');
        authTabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabName).style.display = 'block';
        event.currentTarget.classList.add('active');
    }
    // Make openTab globally accessible for inline onclick
    window.openTab = openTab;

    // --- Search Results Page: View Toggle & Filters ---
    const listViewBtn = document.getElementById('list-view-btn');
    const mapViewBtn = document.getElementById('map-view-btn');
    const listView = document.getElementById('list-view');
    const mapView = document.getElementById('map-view');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');

    if (listViewBtn && mapViewBtn && listView && mapView) {
        listViewBtn.addEventListener('click', () => {
            listView.style.display = 'block';
            mapView.style.display = 'none';
            listViewBtn.classList.add('active');
            mapViewBtn.classList.remove('active');
            // In a real app, you might need to reinitialize the map if it was hidden
        });

        mapViewBtn.addEventListener('click', () => {
            listView.style.display = 'none';
            mapView.style.display = 'block';
            mapViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
            // Initialize map here if not already done
            // e.g., if (mapPlaceholder && !mapInitialized) initMap();
            alert("Map view is a placeholder. You'd integrate a map library like Leaflet or Google Maps API here.");
        });
    }
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = `$0 - $${e.target.value}`;
        });
    }
    const applyFiltersBtn = document.getElementById('apply-filters');
    if(applyFiltersBtn){
        applyFiltersBtn.addEventListener('click', () => {
            alert("Filtering logic would be implemented here, likely involving an API call.");
        });
    }
    const saveSearchBtn = document.getElementById('save-search');
    if(saveSearchBtn){
        saveSearchBtn.addEventListener('click', () => {
            alert("Save search functionality needs backend integration.");
        });
    }


    // --- Hostel Detail Page: Image Gallery (very basic) ---
    const mainImage = document.querySelector('.image-gallery .main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                mainImage.src = this.src.replace('-thumb', '-large'); // Assuming naming convention
                // Or, if you have full-size URLs in data attributes: mainImage.src = this.dataset.largeSrc;
            });
        });
    }
    const bookNowBtn = document.querySelector('.cta-book-now');
    if(bookNowBtn) {
        bookNowBtn.addEventListener('click', () => {
            // This would typically open a modal or redirect to a booking flow
            alert("Booking flow initiated! (Needs backend & payment integration)");
            // Example: window.location.href = 'booking-flow.html';
        });
    }


    // --- User Dashboard: Tab Switching ---
    const dashNavLinks = document.querySelectorAll('.dash-nav-link');
    const dashTabContents = document.querySelectorAll('.dashboard-tab-content');

    if (dashNavLinks.length > 0 && dashTabContents.length > 0) {
        dashNavLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.dataset.target;

                dashNavLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                dashTabContents.forEach(content => {
                    if (content.id === targetId) {
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
        // Activate the first tab by default if needed
        if(document.querySelector('.dashboard-nav .active')) {
            document.querySelector('.dashboard-nav .active').click();
        }
    }

    // --- Landing Page: Geolocation (Basic) ---
    const locationSearchInput = document.getElementById('location-search');
    const geolocationMessage = document.getElementById('geolocation-message');

    if (navigator.geolocation && locationSearchInput && geolocationMessage) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // In a real app, you'd use a reverse geocoding service here
                // to get city name from lat/lon.
                // const { latitude, longitude } = position.coords;
                geolocationMessage.textContent = "Location detected! (Feature to pre-fill search needs reverse geocoding)";
                geolocationMessage.style.display = 'block';
                // Example: fetch(`https://api.example.com/reverse-geocode?lat=${latitude}&lon=${longitude}`)
                //   .then(response => response.json())
                //   .then(data => {
                //     locationSearchInput.value = data.city || 'Your detected area';
                //   });
            },
            (error) => {
                geolocationMessage.textContent = "Could not detect location. Please enter manually.";
                geolocationMessage.style.display = 'block';
                console.warn(`Geolocation error: ${error.message}`);
            }
        );
    }

    // --- Landing Page: Autocomplete (Placeholder) ---
    if (locationSearchInput) {
        locationSearchInput.addEventListener('input', function() {
            // In a real app, this would trigger API calls to fetch city/area suggestions.
            // For now, it's just a plain input.
            // You could integrate with Google Places API, Algolia Places, or a custom solution.
            if (this.value.length > 2) {
                console.log("Autocomplete suggestions would be fetched for: ", this.value);
                // Display a dropdown with suggestions here.
            }
        });
    }

    const searchButton = document.getElementById('search-button');
    if(searchButton){
        searchButton.addEventListener('click', () => {
            const location = document.getElementById('location-search').value;
            const checkin = document.getElementById('checkin-date').value;
            const checkout = document.getElementById('checkout-date').value;
            const guests = document.getElementById('guests-input').value;
            if(location) {
                 // In a real app, you'd construct a query string and redirect
                // window.location.href = `search-results.html?location=${encodeURIComponent(location)}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
                alert(`Searching for: Location: ${location}, Check-in: ${checkin}, Check-out: ${checkout}, Guests: ${guests}. Redirecting to search page (mock).`);
                window.location.href = 'search-results.html'; // Simple redirect for mockup
            } else {
                alert("Please enter a location to search.");
            }
        });
    }

    // Add stubs for other forms if needed, e.g., login/register
    const loginForm = document.getElementById('login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Login submitted (mock - no backend connection). Email verification, password reset, OAuth would be handled server-side.");
            // Redirect to dashboard or home after mock login
            window.location.href = 'dashboard.html';
        });
    }

    const registerForm = document.getElementById('register-form');
    if(registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            alert("Registration submitted (mock - no backend connection). Email verification, reCAPTCHA, etc., would be handled.");
            // Redirect to login or dashboard
             window.location.href = 'login-register.html'; // Stay on page, or redirect to login tab
        });
    }

});