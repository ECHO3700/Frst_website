// Управление индикатором скролла
document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель для анимаций
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Добавляем класс show для анимации
                entry.target.classList.add('show');
                
                // Если это секция CTA, анимируем все дочерние элементы
                if (entry.target.classList.contains('cta-section')) {
                    setTimeout(function() {
                        const ctaFeatures = entry.target.querySelectorAll('.cta-feature');
                        ctaFeatures.forEach(function(feature, index) {
                            setTimeout(function() {
                                feature.classList.add('show');
                            }, index * 100);
                        });
                    }, 300);
                }
                
                // Отключаем наблюдение после анимации
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Наблюдаем за заголовками секций
    document.querySelectorAll('.services .section-header, .testimonials .section-header').forEach(function(el) {
        observer.observe(el);
    });
    
    // Наблюдаем за карточками услуг
    document.querySelectorAll('.service-card').forEach(function(card) {
        observer.observe(card);
    });
    
    // Наблюдаем за карточками отзывов
    document.querySelectorAll('.testimonial-card').forEach(function(card) {
        observer.observe(card);
    });
    
    // Наблюдаем за секцией CTA
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        observer.observe(ctaSection);
    }
    
    // Управление индикатором скролла
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    if (scrollIndicator) {
        // Функция для обработки скролла
        var handleScroll = function() {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        };
        
        // Проверяем при загрузке
        handleScroll();
        
        // Слушаем скролл
        window.addEventListener('scroll', handleScroll);
        
        // Плавный скролл к услугам при клике на индикатор
        scrollIndicator.addEventListener('click', function(e) {
            e.preventDefault();
            const servicesElement = document.getElementById('services');
            if (servicesElement) {
                servicesElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Модальное окно
var modalOverlay = document.getElementById('modalOverlay');
var openFormBtn = document.getElementById('openFormBtn');
var heroCtaBtn = document.getElementById('heroCtaBtn');
var finalCtaBtn = document.getElementById('finalCtaBtn');
var modalClose = document.getElementById('modalClose');
var orderForm = document.getElementById('orderForm');

function openModal() {
    if (modalOverlay) {
        modalOverlay.style.display = 'flex';
        setTimeout(function() {
            modalOverlay.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('show');
        setTimeout(function() {
            modalOverlay.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

if (openFormBtn) {
    openFormBtn.addEventListener('click', openModal);
}
if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', openModal);
}
if (finalCtaBtn) {
    finalCtaBtn.addEventListener('click', openModal);
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Открытие модального окна по кнопкам "Оставить заявку" в карточках
document.querySelectorAll('.order-service-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const serviceName = button.getAttribute('data-service') || 'услугу';
        const commentField = document.getElementById('comment');
        
        if (commentField) {
            commentField.value = 'Хочу заказать: ' + serviceName;
        }
        
        openModal();
    });
});

if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            comment: document.getElementById('comment').value
        };
        
        const submitBtn = orderForm.querySelector('.form-button');
        const originalHTML = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Заявка отправлена!';
            submitBtn.style.background = '#34C759';
            
            setTimeout(function() {
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                
                const notification = document.createElement('div');
                notification.innerHTML = '<div style="position: fixed; top: 100px; right: 20px; left: 20px; background: #34C759; color: white; padding: 20px; border-radius: 12px; box-shadow: 0 10px 30px rgba(52, 199, 89, 0.3); z-index: 10001; text-align: center; animation: slideInUp 0.5s ease-out;">' +
                    '<i class="fas fa-check-circle" style="margin-right: 10px;"></i>' +
                    'Спасибо, ' + formData.name + '! Мы свяжемся с вами в течение 30 минут.' +
                    '</div>';
                document.body.appendChild(notification);
                
                setTimeout(function() {
                    notification.remove();
                    closeModal();
                    orderForm.reset();
                }, 3000);
            }, 1500);
        }, 1500);
    });
}

var phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        var value = e.target.value.replace(/\D/g, '');
        
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }
        
        var formattedValue = '+7 (';
        
        if (value.length > 0) {
            formattedValue += value.substring(0, 3);
        }
        if (value.length > 3) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
        
        e.target.value = formattedValue;
    });
}

// Плавная прокрутка для якорных ссылок
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Закрытие модального окна по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('show')) {
            closeModal();
        }
    });
});// Управление индикатором скролла
document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель для анимаций
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Добавляем класс show для анимации
                entry.target.classList.add('show');
                
                // Если это секция CTA, анимируем все дочерние элементы
                if (entry.target.classList.contains('cta-section')) {
                    setTimeout(function() {
                        const ctaFeatures = entry.target.querySelectorAll('.cta-feature');
                        ctaFeatures.forEach(function(feature, index) {
                            setTimeout(function() {
                                feature.classList.add('show');
                            }, index * 100);
                        });
                    }, 300);
                }
                
                // Отключаем наблюдение после анимации
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Наблюдаем за заголовками секций
    document.querySelectorAll('.services .section-header, .testimonials .section-header').forEach(function(el) {
        observer.observe(el);
    });
    
    // Наблюдаем за карточками услуг
    document.querySelectorAll('.service-card').forEach(function(card) {
        observer.observe(card);
    });
    
    // Наблюдаем за карточками отзывов
    document.querySelectorAll('.testimonial-card').forEach(function(card) {
        observer.observe(card);
    });
    
    // Наблюдаем за секцией CTA
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        observer.observe(ctaSection);
    }
    
    // Управление индикатором скролла
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    if (scrollIndicator) {
        // Функция для обработки скролла
        var handleScroll = function() {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        };
        
        // Проверяем при загрузке
        handleScroll();
        
        // Слушаем скролл
        window.addEventListener('scroll', handleScroll);
        
        // Плавный скролл к услугам при клике на индикатор
        scrollIndicator.addEventListener('click', function(e) {
            e.preventDefault();
            const servicesElement = document.getElementById('services');
            if (servicesElement) {
                servicesElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

// Модальное окно
var modalOverlay = document.getElementById('modalOverlay');
var openFormBtn = document.getElementById('openFormBtn');
var heroCtaBtn = document.getElementById('heroCtaBtn');
var finalCtaBtn = document.getElementById('finalCtaBtn');
var modalClose = document.getElementById('modalClose');
var orderForm = document.getElementById('orderForm');

function openModal() {
    if (modalOverlay) {
        modalOverlay.style.display = 'flex';
        setTimeout(function() {
            modalOverlay.classList.add('show');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('show');
        setTimeout(function() {
            modalOverlay.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    }
}

if (openFormBtn) {
    openFormBtn.addEventListener('click', openModal);
}
if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', openModal);
}
if (finalCtaBtn) {
    finalCtaBtn.addEventListener('click', openModal);
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}
if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Открытие модального окна по кнопкам "Оставить заявку" в карточках
document.querySelectorAll('.order-service-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        const serviceName = button.getAttribute('data-service') || 'услугу';
        const commentField = document.getElementById('comment');
        
        if (commentField) {
            commentField.value = 'Хочу заказать: ' + serviceName;
        }
        
        openModal();
    });
});

if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            comment: document.getElementById('comment').value
        };
        
        const submitBtn = orderForm.querySelector('.form-button');
        const originalHTML = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Заявка отправлена!';
            submitBtn.style.background = '#34C759';
            
            setTimeout(function() {
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                
                const notification = document.createElement('div');
                notification.innerHTML = '<div style="position: fixed; top: 100px; right: 20px; left: 20px; background: #34C759; color: white; padding: 20px; border-radius: 12px; box-shadow: 0 10px 30px rgba(52, 199, 89, 0.3); z-index: 10001; text-align: center; animation: slideInUp 0.5s ease-out;">' +
                    '<i class="fas fa-check-circle" style="margin-right: 10px;"></i>' +
                    'Спасибо, ' + formData.name + '! Мы свяжемся с вами в течение 30 минут.' +
                    '</div>';
                document.body.appendChild(notification);
                
                setTimeout(function() {
                    notification.remove();
                    closeModal();
                    orderForm.reset();
                }, 3000);
            }, 1500);
        }, 1500);
    });
}

var phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        var value = e.target.value.replace(/\D/g, '');
        
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }
        
        var formattedValue = '+7 (';
        
        if (value.length > 0) {
            formattedValue += value.substring(0, 3);
        }
        if (value.length > 3) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length > 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length > 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
        
        e.target.value = formattedValue;
    });
}

// Плавная прокрутка для якорных ссылок
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Закрытие модального окна по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('show')) {
            closeModal();
        }
    });
});