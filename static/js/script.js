document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply theme on initial load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    }

    // Event listener for toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Add touch-feedback class to interactive elements
    const interactiveElements = document.querySelectorAll('button, .button, .nav-link, .dropdown-item, input[type="submit"]');
    interactiveElements.forEach(element => {
        element.classList.add('touch-feedback');
    });
    
    // Detect if using touch device
    let isTouchDevice = false;
    window.addEventListener('touchstart', function detectTouch() {
        isTouchDevice = true;
        document.body.classList.add('touch-device');
        window.removeEventListener('touchstart', detectTouch);
    }, false);
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        // Refresh any charts or complex layouts after orientation change
        setTimeout(function() {
            if (typeof updateChartLayouts === 'function') {
                updateChartLayouts();
            }
        }, 300);
    });
    
    // Optimize form inputs for mobile
    const numberInputs = document.querySelectorAll('input[type="number"]');
    /*
    numberInputs.forEach(input => {
        // Add step buttons for easier interaction on mobile
        const wrapper = document.createElement('div');
        wrapper.className = 'number-input-wrapper';
        
        const decreaseBtn = document.createElement('button');
        decreaseBtn.type = 'button';
        decreaseBtn.className = 'number-btn decrease';
        decreaseBtn.textContent = '-';
        
        const increaseBtn = document.createElement('button');
        increaseBtn.type = 'button';
        increaseBtn.className = 'number-btn increase';
        increaseBtn.textContent = '+';
        
        // Insert the input into the wrapper
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(decreaseBtn);
        wrapper.appendChild(input);
        wrapper.appendChild(increaseBtn);
        
        // Add event listeners for the buttons
        decreaseBtn.addEventListener('click', function() {
            const step = parseFloat(input.step) || 1;
            const min = parseFloat(input.min);
            let value = parseFloat(input.value) - step;
            
            if (!isNaN(min) && value < min) {
                value = min;
            }
            
            input.value = value;
            // Trigger change event
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
        });
        
        increaseBtn.addEventListener('click', function() {
            const step = parseFloat(input.step) || 1;
            const max = parseFloat(input.max);
            let value = parseFloat(input.value) + step;
            
            if (!isNaN(max) && value > max) {
                value = max;
            }
            
            input.value = value;
            // Trigger change event
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
        });
    });
    */
    
    // Optimize tables for mobile with data-label attributes
    const responsiveTables = document.querySelectorAll('.responsive-table');
    responsiveTables.forEach(table => {
        const headerCells = table.querySelectorAll('thead th');
        const headerTexts = Array.from(headerCells).map(th => th.textContent.trim());
        
        const bodyRows = table.querySelectorAll('tbody tr');
        bodyRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            cells.forEach((cell, index) => {
                if (index < headerTexts.length) {
                    cell.setAttribute('data-label', headerTexts[index]);
                }
            });
        });
    });
    
    // Debounce function for performance optimization
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }
    
    // Apply debounce to heavy calculations or complex renderings
    const debouncedCalculate = debounce(function() {
        if (typeof calculateResults === 'function') {
            calculateResults();
        }
    }, 250);
    
    // Apply to form inputs that trigger calculations
    const calculationInputs = document.querySelectorAll('.calculation-trigger');
    calculationInputs.forEach(input => {
        input.addEventListener('input', debouncedCalculate);
    });
    
    // Enable smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

