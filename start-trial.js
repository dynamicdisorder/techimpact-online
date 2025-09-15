// Start Trial / Request Demo Page JavaScript
class TrialPage {
    constructor() {
        this.init();
    }

    init() {
        this.initializeEventListeners();
        this.initializeSmoothScrolling();
        this.initializeFormValidation();
    }

    initializeEventListeners() {
        // Form submission
        const form = document.getElementById('trial-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });

        // Form input validation
        const inputs = document.querySelectorAll('.form-input, .form-select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateInput(input));
            input.addEventListener('input', () => this.clearInputError(input));
        });
    }

    initializeSmoothScrolling() {
        // Add smooth scrolling behavior to the page
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    initializeFormValidation() {
        // Add custom validation styles
        const style = document.createElement('style');
        style.textContent = `
            .form-input.error,
            .form-select.error {
                border-color: #ef4444;
                background-color: rgba(239, 68, 68, 0.05);
            }
            
            .form-error {
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                display: block;
            }
            
            .form-success {
                background-color: rgba(34, 197, 94, 0.1);
                border: 1px solid rgba(34, 197, 94, 0.3);
                color: #22c55e;
                padding: 1rem;
                border-radius: 8px;
                margin-top: 1rem;
                text-align: center;
            }
        `;
        document.head.appendChild(style);
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validate form
        if (!this.validateForm(data)) {
            this.showFormError('Please fill in all required fields correctly.');
            return;
        }
        
        // Simulate form submission
        this.submitForm(data);
    }

    validateForm(data) {
        let isValid = true;
        
        // Validate required fields
        const requiredFields = ['name', 'email', 'role'];
        requiredFields.forEach(field => {
            if (!data[field] || data[field].trim() === '') {
                isValid = false;
                this.showInputError(field, 'This field is required.');
            }
        });
        
        // Validate email format
        if (data.email && !this.isValidEmail(data.email)) {
            isValid = false;
            this.showInputError('email', 'Please enter a valid email address.');
        }
        
        return isValid;
    }

    validateInput(input) {
        const value = input.value.trim();
        const fieldName = input.name;
        
        // Clear previous errors
        this.clearInputError(input);
        
        // Validate based on field type
        if (input.required && !value) {
            this.showInputError(fieldName, 'This field is required.');
            return false;
        }
        
        if (fieldName === 'email' && value && !this.isValidEmail(value)) {
            this.showInputError(fieldName, 'Please enter a valid email address.');
            return false;
        }
        
        return true;
    }

    clearInputError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    showInputError(fieldName, message) {
        const input = document.querySelector(`[name="${fieldName}"]`);
        if (input) {
            input.classList.add('error');
            
            // Remove existing error message
            const existingError = input.parentNode.querySelector('.form-error');
            if (existingError) {
                existingError.remove();
            }
            
            // Add new error message
            const errorElement = document.createElement('span');
            errorElement.className = 'form-error';
            errorElement.textContent = message;
            input.parentNode.appendChild(errorElement);
        }
    }

    showFormError(message) {
        // Remove existing success/error messages
        const existingMessage = document.querySelector('.form-success, .form-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.style.cssText = `
            background-color: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
        `;
        errorElement.textContent = message;
        
        const form = document.getElementById('trial-form');
        form.appendChild(errorElement);
        
        // Scroll to error message
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    showFormSuccess(message) {
        // Remove existing success/error messages
        const existingMessage = document.querySelector('.form-success, .form-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Add success message
        const successElement = document.createElement('div');
        successElement.className = 'form-success';
        successElement.textContent = message;
        
        const form = document.getElementById('trial-form');
        form.appendChild(successElement);
        
        // Scroll to success message
        successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    submitForm(data) {
        // Show loading state
        const submitButton = document.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Joining Waitlist...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Log form data to console (as requested)
            console.log('🚀 Trial Form Submission:');
            console.log('========================');
            console.log('Name:', data.name);
            console.log('Email:', data.email);
            console.log('Company:', data.company || 'Not provided');
            console.log('Role:', data.role);
            console.log('Timestamp:', new Date().toISOString());
            console.log('========================');
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Show success message
            this.showFormSuccess('🎉 Thank you! You\'ve been added to our waitlist. We\'ll notify you when Pro features are available.');
            
            // Reset form
            document.getElementById('trial-form').reset();
            
            // Track conversion (placeholder for analytics)
            this.trackConversion(data);
            
        }, 2000);
    }

    trackConversion(data) {
        // Placeholder for analytics tracking
        console.log('📊 Conversion tracked:', {
            event: 'waitlist_signup',
            role: data.role,
            hasCompany: !!data.company,
            timestamp: Date.now()
        });
        
        // You can integrate with Google Analytics, Mixpanel, etc. here
        // Example:
        // gtag('event', 'waitlist_signup', {
        //     'event_category': 'engagement',
        //     'event_label': data.role,
        //     'value': 1
        // });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TrialPage();
});

// Add some interactive animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
