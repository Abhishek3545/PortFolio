        // Hide loading screen
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 2000);
        }

        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            // Toggle Tailwind 'hidden' (keeps markup simple) and helper 'mobile-open' for smooth transitions
            menu.classList.toggle('hidden');
            menu.classList.toggle('mobile-open');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        // Animate skill bars on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                }
            });
        }, observerOptions);

        // Observe all animate elements
        document.querySelectorAll('.animate-slide-up').forEach(el => {
            observer.observe(el);
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple form validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Here you would typically send the data to a backend
            // For now, we'll just show a success message
            alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);

            // Clear form
            this.reset();
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });

        // Enhanced animations and effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add random floating animation delays
            const floatingElements = document.querySelectorAll('.animate-float');
            floatingElements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.5}s`;
            });

            // Add hover effects to skill bars
            const skillBars = document.querySelectorAll('.skill-bar');
            skillBars.forEach(bar => {
                bar.parentElement.addEventListener('mouseenter', function() {
                    bar.style.transform = 'scaleY(1.2)';
                    bar.style.transition = 'transform 0.3s ease';
                });
                bar.parentElement.addEventListener('mouseleave', function() {
                    bar.style.transform = 'scaleY(1)';
                });
            });

            // Add click effects to project buttons
            const projectButtons = document.querySelectorAll('.project-card button');
            projectButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });

            // Add typing effect to hero subtitle
            const subtitle = document.querySelector('#home p:nth-child(2)');
            if (subtitle) {
                const text = subtitle.textContent;
                subtitle.textContent = '';
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        subtitle.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 50);
                    }
                };
                setTimeout(typeWriter, 1500);
            }

            // Add parallax effect to hero section
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.getElementById('home');
                if (hero) {
                    // Limit the effect so the hero doesn't push or overlap following sections.
                    const offset = Math.min(scrolled, window.innerHeight);
                    // Move hero slightly up for a subtle parallax instead of pushing content down.
                    hero.style.transform = `translateY(${offset * -0.12}px)`;
                    hero.style.willChange = 'transform';
                }
            });

            // Add particle effect on hover for contact icons
            const contactIcons = document.querySelectorAll('#contact i[data-lucide]');
            contactIcons.forEach(icon => {
                icon.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.2) rotate(5deg)';
                    this.style.transition = 'transform 0.3s ease';
                });
                icon.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1) rotate(0deg)';
                });
            });

            // React-like project interaction functions
            function handleProjectClick(projectId) {
                // Add click animation
                const projectCard = event.currentTarget;
                projectCard.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    projectCard.style.transform = 'scale(1.05) translateY(-8px)';
                }, 150);

                // Show project details with React-like state management
                showProjectModal(projectId);

                // Add haptic feedback simulation
                if (navigator.vibrate) {
                    navigator.vibrate(50);
                }
            }

            function handleDemoClick(projectId) {
                // Simulate React state update
                const button = event.currentTarget;
                button.innerHTML = '<i data-lucide="loader" class="w-4 h-4 animate-spin mr-1"></i>Loading...';
                button.disabled = true;

                // Simulate API call
                setTimeout(() => {
                    button.innerHTML = 'Live Demo';
                    button.disabled = false;
                    showNotification(`Opening ${projectId} demo...`, 'success');
                }, 1500);
            }

            function handleCodeClick(projectId) {
                // Simulate React state update
                const button = event.currentTarget;
                const originalText = button.innerHTML;
                button.innerHTML = '<i data-lucide="github" class="w-4 h-4 mr-1"></i>Opening...';

                // Simulate GitHub redirect
                setTimeout(() => {
                    button.innerHTML = originalText;
                    showNotification(`Redirecting to ${projectId} repository...`, 'info');
                }, 1000);
            }

            function showProjectModal(projectId) {
                // Create modal overlay (React-like component)
                const modal = document.createElement('div');
                modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in';
                modal.innerHTML = `
                    <div class="bg-white rounded-xl p-8 max-w-md mx-4 animate-scale-in">
                        <div class="flex justify-between items-center mb-4">
                            <h3 class="text-xl font-bold text-gray-800">Project Details</h3>
                            <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                <i data-lucide="x" class="w-6 h-6"></i>
                            </button>
                        </div>
                        <p class="text-gray-600 mb-4">You clicked on the ${projectId.replace('-', ' ')} project!</p>
                        <p class="text-sm text-gray-500 mb-6">This demonstrates React-like interactive functionality with state management and event handling.</p>
                        <div class="flex space-x-2">
                            <button onclick="this.closest('.fixed').remove()" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                                Close
                            </button>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);

                // Re-initialize Lucide icons for the modal
                setTimeout(() => {
                    lucide.createIcons();
                }, 100);
            }

            function showNotification(message, type) {
                // Create notification toast (React-like component)
                const notification = document.createElement('div');
                const bgColor = type === 'success' ? 'bg-green-500' : 'bg-blue-500';
                notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in-right`;
                notification.innerHTML = `
                    <div class="flex items-center">
                        <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5 mr-2"></i>
                        <span>${message}</span>
                    </div>
                `;
                document.body.appendChild(notification);

                // Auto remove after 3 seconds
                setTimeout(() => {
                    notification.style.animation = 'slide-out-right 0.3s ease-in';
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                }, 3000);

                // Re-initialize Lucide icons
                setTimeout(() => {
                    lucide.createIcons();
                }, 100);
            }
        });

        // Typing effect for hero text (optional enhancement)
        const heroText = document.querySelector('#home h1');
        if (heroText) {
            const text = heroText.textContent;
            heroText.textContent = '';
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            // Uncomment to enable typing effect
            // setTimeout(typeWriter, 1000);
        }