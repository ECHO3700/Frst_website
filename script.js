/* ===== ОСНОВНЫЕ НАСТРОЙКИ ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #eee0c2;
    --secondary-color: #1d1d1f;
    --accent-color: #007AFF;
    --accent-light: #34C759;
    --light-gray: #f5f5f7;
    --medium-gray: #d2d2d7;
    --text-color: #1d1d1f;
    --text-light: #6e6e73;
    --white: #ffffff;
    --shadow-sm: 0 2px 20px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 15px 40px rgba(0, 0, 0, 0.12);
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: var(--text-color);
    background-color: var(--white);
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a, button, input, select, textarea {
    transition: var(--transition-smooth);
}

img, svg {
    transition: var(--transition-smooth);
}

/* ===== АНИМАЦИИ ===== */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
}

@keyframes modalSlideIn {
    from { opacity: 0; transform: translateY(-30px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes hologramShift {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
}

/* ===== ШАПКА ===== */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 15px 0;
    background: var(--white);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    animation: fadeIn 0.6s ease-out;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: var(--accent-color);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
}

.logo-text {
    font-size: 22px;
    font-weight: 700;
    color: var(--text-color);
}

.logo-off {
    color: var(--accent-color);
}

.header-cta {
    display: flex;
    align-items: center;
    gap: 15px;
}

.header-contact {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(0, 122, 255, 0.08);
    border-radius: 25px;
    text-decoration: none;
}

.header-contact:hover {
    background: rgba(0, 122, 255, 0.15);
    transform: translateY(-2px);
}

.contact-icon {
    width: 32px;
    height: 32px;
    background: var(--accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
}

.contact-text {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color);
    display: none;
}

.header-button {
    padding: 12px 24px;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
}

.header-button:hover {
    background: var(--accent-light);
    transform: translateY(-2px);
}

/* ===== ГЛАВНЫЙ ЭКРАН - НА ВЕСЬ ЭКРАН ===== */
.hero {
    position: relative;
    min-height: 100vh;
    height: 100vh;
    padding: 0;
    text-align: center;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a365d;
}

.hero-bg-animated {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.bg-image {
    position: absolute;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.8) contrast(1.1) saturate(1.2);
    opacity: 0.9;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    animation-duration: 25s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

.bg-1 {
    top: 10%;
    left: 5%;
    background-image: url('images/1.jpg');
    animation-name: float1;
    z-index: 1;
}

.bg-2 {
    top: 15%;
    right: 8%;
    background-image: url('images/2.jpg');
    animation-name: float2;
    z-index: 2;
}

.bg-3 {
    top: 50%;
    left: 3%;
    background-image: url('images/3.jpg');
    animation-name: float3;
    z-index: 3;
}

.bg-4 {
    top: 45%;
    right: 5%;
    background-image: url('images/4.jpg');
    animation-name: float4;
    z-index: 4;
}

.bg-5 {
    bottom: 15%;
    left: 15%;
    background-image: url('images/5.jpg');
    animation-name: float5;
    z-index: 5;
}

.bg-6 {
    bottom: 10%;
    right: 12%;
    background-image: url('images/6.jpg');
    animation-name: float6;
    z-index: 6;
}

@keyframes float1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.9; }
    25% { transform: translate(40px, -30px) rotate(5deg) scale(1.05); opacity: 1; }
    50% { transform: translate(-20px, 40px) rotate(-3deg) scale(1.03); opacity: 0.95; }
    75% { transform: translate(30px, 20px) rotate(2deg) scale(1.07); opacity: 1; }
}

@keyframes float2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.9; }
    25% { transform: translate(-50px, 20px) rotate(-4deg) scale(1.06); opacity: 1; }
    50% { transform: translate(30px, -40px) rotate(3deg) scale(1.04); opacity: 0.95; }
    75% { transform: translate(-20px, 30px) rotate(-2deg) scale(1.08); opacity: 1; }
}

@keyframes float3 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.9; }
    25% { transform: translate(35px, 45px) rotate(6deg) scale(1.07); opacity: 1; }
    50% { transform: translate(-45px, -25px) rotate(-5deg) scale(1.05); opacity: 0.95; }
    75% { transform: translate(20px, -35px) rotate(3deg) scale(1.09); opacity: 1; }
}

@keyframes float4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.9; }
    25% { transform: translate(-25px, -45px) rotate(-5deg) scale(1.05); opacity: 1; }
    50% { transform: translate(50px, 15px) rotate(4deg) scale(1.03); opacity: 0.95; }
    75% { transform: translate(-40px, 40px) rotate(-3deg) scale(1.07); opacity: 1; }
}

@keyframes float5 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.9; }
    25% { transform: translate(60px, -15px) rotate(7deg) scale(1.08); opacity: 1; }
    50% { transform: translate(-20px, 55px) rotate(-6deg) scale(1.06); opacity: 0.95; }
    75% { transform: translate(35px, -25px) rotate(4deg) scale(1.1); opacity: 1; }
}

@keyframes float6 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.9; }
    25% { transform: translate(-45px, 35px) rotate(-6deg) scale(1.07); opacity: 1; }
    50% { transform: translate(35px, -50px) rotate(5deg) scale(1.05); opacity: 0.95; }
    75% { transform: translate(-30px, 25px) rotate(-4deg) scale(1.09); opacity: 1; }
}

.bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        rgba(0, 70, 140, 0.85) 0%, 
        rgba(0, 40, 80, 0.9) 50%,
        rgba(0, 20, 40, 0.95) 100%);
    z-index: 7;
}

.hero-content {
    position: relative;
    z-index: 8;
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
    margin-top: -60px;
}

.hero-title {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 24px;
    color: white;
    line-height: 1.15;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.8s ease-out 0.3s forwards;
}

.hero-title span {
    color: var(--accent-color);
}

.hero-subtitle {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.95);
    max-width: 720px;
    margin: 0 auto 40px;
    line-height: 1.6;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.8s ease-out 0.5s forwards;
}

/* ===== ДОПОЛНИТЕЛЬНОЕ ОПИСАНИЕ В HERO ===== */
.hero-description {
    max-width: 800px;
    margin: 0 auto 40px;
    padding: 25px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.8s ease-out 0.7s forwards;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.hero-description p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.7;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Стили для названия компании в тексте */
.company-name {
    font-weight: 700;
    color: #ffffff;
}

.company-off {
    color: var(--accent-color);
    font-weight: 700;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 16px 36px;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(0, 122, 255, 0.2);
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.8s ease-out 0.9s forwards;
}

.cta-button:hover {
    background: var(--accent-light);
    transform: translateY(-3px) !important;
    box-shadow: 0 15px 35px rgba(0, 122, 255, 0.3);
}

/* Индикатор скролла вниз */
.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9;
    color: white;
    font-size: 14px;
    opacity: 1;
    transition: opacity 0.3s ease, transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.scroll-indicator.hidden {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
    pointer-events: none;
}

.scroll-arrow {
    display: block;
    width: 24px;
    height: 24px;
    border-right: 2px solid rgba(255, 255, 255, 0.9);
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
    transform: rotate(45deg);
    margin: 0 auto 8px;
    animation: bounce 2s infinite;
    transition: border-color 0.3s ease;
}

.scroll-indicator:hover .scroll-arrow {
    border-color: var(--accent-color);
}

.scroll-indicator span {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.3s ease;
}

.scroll-indicator:hover span {
    color: var(--accent-color);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { 
        transform: rotate(45deg) translateY(0); 
    }
    40% { 
        transform: rotate(45deg) translateY(-8px); 
    }
    60% { 
        transform: rotate(45deg) translateY(-4px); 
    }
}

/* ===== УСЛУГИ ===== */
.services {
    padding: 80px 0;
    position: relative;
    background: var(--white);
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.section-header.show {
    opacity: 1;
    transform: translateX(0);
}

.section-label {
    display: inline-block;
    font-size: 12px;
    color: var(--accent-color);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
    padding: 6px 16px;
    background: rgba(0, 122, 255, 0.1);
    border-radius: 20px;
}

.section-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-color);
    line-height: 1.2;
}

.services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: stretch;
}

/* ===== КАРТОЧКИ УСЛУГ ===== */
.service-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: 32px 24px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: var(--shadow-sm);
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateX(50px);
}

.service-card.show {
    opacity: 1;
    transform: translateX(0);
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--accent-color);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

/* ЗАГОЛОВКИ УСЛУГ - ПРОСТО ЧЕРНЫЕ */
.service-title {
    font-size: 24px;
    font-weight: 800;
    font-family: 'Exo 2', sans-serif;
    margin-bottom: 20px;
    color: #1d1d1f;
    text-align: center;
    padding: 10px 0;
    position: relative;
    letter-spacing: 0.5px;
}

/* ФОН ДЛЯ ГАЗОВОЙ КАРТОЧКИ */
.gas-card {
    position: relative;
    overflow: hidden;
}

.gas-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/GasPipe.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.18;
    z-index: 0;
    transition: var(--transition-smooth);
    border-radius: var(--radius-lg);
}

.gas-card:hover::after {
    opacity: 0.22;
    transform: scale(1.02);
}

.gas-card > * {
    position: relative;
    z-index: 1;
}

/* ФОН ДЛЯ САНТЕХНИЧЕСКОЙ КАРТОЧКИ */
.plumbing-card {
    position: relative;
    overflow: hidden;
}

.plumbing-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/Plumber.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.18;
    z-index: 0;
    transition: var(--transition-smooth);
    border-radius: var(--radius-lg);
}

.plumbing-card:hover::after {
    opacity: 0.22;
    transform: scale(1.02);
}

.plumbing-card > * {
    position: relative;
    z-index: 1;
}

/* ФОН ДЛЯ ЭЛЕКТРОМОНТАЖНОЙ КАРТОЧКИ */
.electrical-card {
    position: relative;
    overflow: hidden;
}

.electrical-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/ElectricalInstallation.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.18;
    z-index: 0;
    transition: var(--transition-smooth);
    border-radius: var(--radius-lg);
}

.electrical-card:hover::after {
    opacity: 0.22;
    transform: scale(1.02);
}

.electrical-card > * {
    position: relative;
    z-index: 1;
}

/* ОБЩИЕ ЭЛЕМЕНТЫ КАРТОЧЕК */
.service-icon-container {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: rgba(0, 122, 255, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.service-card:hover .service-icon-container {
    transform: rotate(8deg) scale(1.1);
    background: rgba(0, 122, 255, 0.15);
}

.service-icon {
    font-size: 36px;
    color: var(--accent-color);
}

.service-description {
    font-size: 15px;
    color: var(--text-color);
    font-weight: 500;
    margin-bottom: 24px;
    line-height: 1.6;
}

.service-features {
    list-style: none;
    text-align: left;
    margin: 0 0 24px 0;
    padding: 0;
    flex-grow: 1;
}

.service-features li {
    margin-bottom: 10px;
    position: relative;
    padding-left: 28px;
    color: var(--text-color);
    font-size: 14px;
    font-weight: 500;
}

/* ЭМОДЗИ ДЛЯ СПИСКОВ УСЛУГ */
.gas-card .service-features li::before {
    content: '🔥';
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 16px;
    filter: hue-rotate(180deg) saturate(2) brightness(1.1);
    text-shadow: 
        0 1px 1px rgba(0, 0, 0, 0.3),
        0 2px 3px rgba(0, 0, 0, 0.2);
}

.plumbing-card .service-features li::before {
    content: '💧';
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 16px;
    filter: saturate(2) brightness(1.1);
    text-shadow: 
        0 1px 1px rgba(0, 0, 0, 0.3),
        0 2px 3px rgba(0, 0, 0, 0.2);
}

.electrical-card .service-features li::before {
    content: '⚡';
    position: absolute;
    left: 0;
    font-weight: 700;
    font-size: 16px;
    filter: hue-rotate(180deg) saturate(2) brightness(1.1);
    text-shadow: 
        0 1px 1px rgba(0, 0, 0, 0.3),
        0 2px 3px rgba(0, 0, 0, 0.2);
}

/* КНОПКА НА КАРТОЧКЕ - ГОЛОГРАФИЧЕСКАЯ */
.service-card .order-service-btn {
    width: 100%;
    justify-content: center;
    padding: 14px 20px;
    font-weight: 700;
    font-size: 15px;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 24px 0;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

/* ГОЛОГРАФИЧЕСКИЙ ГРАДИЕНТ ДЛЯ КНОПКИ */
.service-card .order-service-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        #406099, #1f86e7, #032a65, #1f86e7, #406099);
    background-size: 400% 100%;
    animation: hologramShift 30s infinite linear;
    z-index: -1;
    border-radius: 25px;
}

.service-card .order-service-btn:hover::before {
    animation-duration: 4s;
}

/* Эффект при наведении на кнопку */
.service-card .order-service-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(0, 122, 255, 0.3);
}

/* ЦЕНА ПОД КНОПКОЙ */
.service-price {
    font-size: 28px;
    font-weight: 800;
    color: var(--text-color);
    margin: 0;
    position: relative;
    padding-top: 20px;
}

.service-price::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: var(--accent-color);
}

/* ============================================= */
/* СЕКЦИЯ ОТЗЫВОВ – ПЛАВАЮЩИЕ ПУЗЫРИ */
/* ============================================= */
.testimonials {
    padding: 100px 0 160px;
    background: var(--white);
    position: relative;
    overflow: hidden;
}

.testimonials-floating {
    position: relative;
    height: 980px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 80px;
}

.testimonial-bubble {
    position: absolute;
    padding: 22px 26px;
    background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(245,245,250,0.98) 100%);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    opacity: 0.92;
    transition: var(--transition-bounce);
    animation: float 18s infinite ease-in-out;
    cursor: pointer;
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.5);
}

.testimonial-bubble:hover {
    animation-play-state: paused;
    transform: scale(1.16) translateY(-12px);
    opacity: 1;
    z-index: 15;
    box-shadow: var(--shadow-lg);
}

.testimonial-bubble:hover .testimonial-text {
    font-size: 15.2px;
}

/* Центральный — самый заметный */
.testimonial-bubble.center {
    width: 300px;
    top: 28%;
    left: 32%;
    transform: translateX(-50%);
    animation-duration: 22s;
    animation-delay: 0s;
    z-index: 5; /* чуть выше остальных */
}

/* Левый столбец (2 штуки) */
.testimonial-bubble.left-1 {
    width: 300px;
    top: 12%;
    left: 6%;
    animation-duration: 17s;
    animation-delay: 2s;
}

.testimonial-bubble.left-2 {
    width: 300px;
    top: 58%;
    left: 8%;
    animation-duration: 19s;
    animation-delay: 6s;
}

/* Правый столбец (2 штуки) */
.testimonial-bubble.right-1 {
    width: 300px;
    top: 20%;
    right: 6%;
    animation-duration: 16s;
    animation-delay: 4s;
}

.testimonial-bubble.right-2 {
    width: 300px;
    top: 65%;
    right: 8%;
    animation-duration: 20s;
    animation-delay: 8s;
}

/* Аватар, имя, рейтинг, текст — без изменений */
.testimonial-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 16px;
    border: 3px solid var(--accent-color);
}

.testimonial-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.testimonial-name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
}

.testimonial-rating {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 12px;
    font-size: 20px;
    color: #f4c430;
}

.star {
    display: inline-block;
    animation: floatStar 3.6s infinite ease-in-out;
}

/* Разные направления и задержки для волны */
.star:nth-child(1) { animation-direction: normal;   animation-delay: 0s;    }
.star:nth-child(2) { animation-direction: reverse; animation-delay: 0.4s; }
.star:nth-child(3) { animation-direction: normal;   animation-delay: 0.8s; }
.star:nth-child(4) { animation-direction: reverse; animation-delay: 1.2s; }
.star:nth-child(5) { animation-direction: normal;   animation-delay: 1.6s; }

@keyframes floatStar {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
}

.testimonial-text {
    font-size: 14.5px;
    line-height: 1.58;
    color: var(--text-color);
}

/* Плавание */
@keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(0, -34px) rotate(1.8deg); }
    50% { transform: translate(0, 0) rotate(0deg); }
    75% { transform: translate(0, 34px) rotate(-1.8deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
}

/* Мобилька — всё в столбик по центру, красиво и с запасом */
@media (max-width: 767px) {
    .testimonials {
        padding: 40px 0 10px;          /* больше воздуха снизу */
    }

    .testimonials-floating {
        min-height: 1800px;             /* увеличил запас, чтобы всё точно влезло */
        padding-bottom: 100px;          /* огромная подушка снизу */
    }

    .testimonial-bubble {
        width: 92%;
        max-width: 400px;
        padding: 26px 28px;
        left: 50% !important;
        transform: translateX(-50%) !important;
    }

    .testimonial-bubble.center,
    .testimonial-bubble.left-1,
    .testimonial-bubble.left-2,
    .testimonial-bubble.right-1,
    .testimonial-bubble.right-2 {
        left: 50% !important;
        right: auto !important;
        transform: translateX(-50%) !important;
        width: 92%;
        max-width: 400px;
    }

    /* Одинаковый зазор между карточками — 180px */
    .testimonial-bubble.center  { top: 1px; }
    .testimonial-bubble.left-1  { top: 380px; }   /* 40 + 420 (высота карточки + зазор) */
    .testimonial-bubble.left-2  { top: 740px; }   /* 460 + 420 */
    .testimonial-bubble.right-1 { top: 1080px; }  /* 880 + 420 */
    .testimonial-bubble.right-2 { top: 1400px; }  /* 1300 + 420 */
}

/* Десктоп — оставляем твою текущую раскладку без изменений */
@media (min-width: 1024px) {
    .testimonials-floating {
        height: 1080px;
        padding-bottom: 100px;
    }
    .testimonial-bubble.center {
        width: 380px;
    }
    .testimonial-bubble.left-1,
    .testimonial-bubble.left-2,
    .testimonial-bubble.right-1,
    .testimonial-bubble.right-2 {
        width: 320px;
    }
}
/* ===== ПРИЗЫВ К ДЕЙСТВИЮ ===== */
.cta-section {
    padding: 80px 0;
    background: #1d1d1f;
    color: var(--white);
    text-align: center;
}

.cta-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.2;
}

.cta-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 40px;
    line-height: 1.6;
}

.cta-features {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

.cta-feature {
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cta-feature.show {
    opacity: 1;
    transform: translateY(0);
}

.cta-feature-icon {
    font-size: 36px;
    color: var(--accent-light);
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(52, 199, 89, 0.1);
    border-radius: 50%;
    margin: 0 auto 12px;
}

.cta-feature:hover .cta-feature-icon {
    transform: rotate(12deg) scale(1.1);
}

.cta-feature-text {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 600;
}

.cta-button-large {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 18px 40px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(0, 122, 255, 0.2);
}

.cta-button-large:hover {
    background: var(--accent-light);
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(0, 122, 255, 0.3);
}

/* ===== ПОДВАЛ ===== */
footer {
    background: #1d1d1f;
    color: var(--white);
    padding: 60px 0 30px;
}

.footer-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-logo {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 20px;
    color: var(--white);
}

.footer-logo-off {
    color: var(--accent-color);
}

.footer-description {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
    margin-bottom: 24px;
}

.footer-contact {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.95);
    font-size: 15px;
    text-decoration: none;
}

.footer-contact i {
    color: var(--accent-color);
}

.footer-heading {
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 12px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.footer-links a:hover {
    color: var(--accent-color);
    transform: translateX(4px);
}

.copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
}

/* ===== МОДАЛЬНОЕ ОКНО ===== */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 2000;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-overlay.show {
    display: flex;
    opacity: 1;
}

.modal-content {
    background: var(--light-gray);
    width: 100%;
    max-width: 500px;
    border-radius: var(--radius-lg);
    padding: 40px 24px;
    position: relative;
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
    animation: modalSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: var(--light-gray);
    border: none;
    font-size: 22px;
    color: var(--text-light);
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-close:hover {
    background: var(--accent-color);
    color: white;
    transform: rotate(90deg);
}

.modal-title {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 24px;
    color: var(--text-color);
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-color);
}

.form-input, .form-textarea {
    width: 100%;
    padding: 14px;
    border: 2px solid var(--medium-gray);
    border-radius: 12px;
    font-size: 16px;
    font-family: inherit;
    background: var(--white);
}

.form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.15);
    transform: translateY(-1px);
}

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

.form-button {
    width: 100%;
    padding: 16px;
    background: var(--accent-color);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 10px;
}

.form-button:hover {
    background: var(--accent-light);
    transform: translateY(-2px);
}

/* ===== СИНХРОННОЕ ПЛАВАНИЕ ДЛЯ ЭМОДЗИ ===== */
.service-features li::before {
    display: inline-block;
    animation: floatSync 2s ease-in-out infinite;
    transition: filter 0.3s ease, transform 0.3s ease;
    animation-play-state: running !important;
}

@keyframes floatSync {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
}

.service-features li:hover::before {
    animation: floatSync 2s ease-in-out infinite !important;
    transform: translateY(var(--current-y)) scale(1.3);
    filter: drop-shadow(0 0 10px currentColor) brightness(1.3);
}

/* Цвета для эмодзи */
.gas-card .service-features li::before {
    color: #FF6B35;
}

.plumbing-card .service-features li::before {
    color: #007AFF;
}

.electrical-card .service-features li::before {
    color: #FFD700;
}

/* Подсветка при наведении */
.gas-card .service-features li:hover::before {
    color: #FF4500;
    filter: drop-shadow(0 0 12px rgba(255, 69, 0, 0.7)) brightness(1.4);
}

.plumbing-card .service-features li:hover::before {
    color: #1E90FF;
    filter: drop-shadow(0 0 12px rgba(30, 144, 255, 0.7)) brightness(1.4);
}

.electrical-card .service-features li:hover::before {
    color: #FFD700;
    filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.7)) brightness(1.4);
}

/* Пункт списка */
.service-features li {
    transition: transform 0.3s ease;
}

.service-features li:hover {
    transform: translateX(5px);
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 767px) {
    .hero {
        min-height: 100vh;
        height: 100vh;
    }
    
    .hero-title {
        font-size: 34px;
        margin-bottom: 20px;
    }
    
    .hero-subtitle {
        font-size: 17px;
        margin-bottom: 30px;
    }
    
    .hero-description {
        padding: 20px;
        margin-bottom: 30px;
    }
    
    .hero-description p {
        font-size: 14px;
        line-height: 1.6;
    }
    
    .cta-button {
        padding: 14px 30px;
        font-size: 15px;
    }
    
    .bg-image {
        width: 200px;
        height: 140px;
    }
    
    .scroll-indicator {
        bottom: 20px;
        font-size: 12px;
    }
    
    .service-card .order-service-btn {
        padding: 12px 20px;
        font-size: 14px;
    }
}

@media (min-width: 768px) {
    .container {
        padding: 0 30px;
    }
    
    .contact-text {
        display: inline;
    }
    
    .hero {
        min-height: 100vh;
        height: 100vh;
    }
    
    .hero-title {
        font-size: 48px;
        margin-bottom: 30px;
    }
    
    .hero-subtitle {
        font-size: 20px;
        margin-bottom: 40px;
    }
    
    .hero-description {
        padding: 30px;
    }
    
    .hero-description p {
        font-size: 17px;
        line-height: 1.8;
    }
    
    .section-title {
        font-size: 36px;
    }
    
    .services-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    
    .service-card {
        padding: 40px 32px;
    }
    
    .service-card .order-service-btn {
        padding: 14px 24px;
        font-size: 15px;
    }
    
    .gas-card::after,
    .plumbing-card::after,
    .electrical-card::after {
        opacity: 0.25;
    }
    
    .gas-card:hover::after,
    .plumbing-card:hover::after,
    .electrical-card:hover::after {
        opacity: 0.3;
    }
    
    .testimonials-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
    
    .cta-features {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
    
    .footer-container {
        grid-template-columns: 2fr 1fr 1fr;
        gap: 50px;
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 0 40px;
    }
    
    .logo-icon {
        width: 48px;
        height: 48px;
        font-size: 24px;
    }
    
    .logo-text {
        font-size: 28px;
    }
    
    .header-contact {
        padding: 12px 24px;
    }
    
    .header-button {
        padding: 14px 36px;
        font-size: 16px;
    }
    
    .hero-title {
        font-size: 56px;
        margin-bottom: 30px;
    }
    
    .hero-subtitle {
        font-size: 22px;
        margin-bottom: 50px;
    }
    
    .hero-description {
        padding: 35px;
    }
    
    .hero-description p {
        font-size: 18px;
        line-height: 1.9;
    }
    
    .section-title {
        font-size: 42px;
    }
    
    .services {
        padding: 100px 0;
    }
    
    .cta-section {
        padding: 100px 0;
    }
    
    .cta-title {
        font-size: 48px;
    }
    
    .cta-subtitle {
        font-size: 22px;
    }
    
    footer {
        padding: 80px 0 40px;
    }
}

@media (min-width: 1200px) {
    .hero {
        min-height: 100vh;
        height: 100vh;
    }
    
    .hero-title {
        font-size: 52px;
    }
    
    .hero-subtitle {
        font-size: 22px;
    }
    
    .bg-image {
        width: 350px;
        height: 250px;
    }
}

@media (min-width: 1280px) {
    .hero-title {
        font-size: 64px;
    }
    
    .cta-title {
        font-size: 56px;
    }
}

/* Улучшение читаемости */
.service-description {
    line-height: 1.8;
    margin-bottom: 30px;
}

.service-features li {
    line-height: 1.6;
    margin-bottom: 14px;
}

/* ===== ДОПОЛНИТЕЛЬНОЕ ОПИСАНИЕ В HERO ===== */
.hero-description {
    max-width: 800px;
    margin: 0 auto 40px;
    padding: 0;
    background: transparent;
    backdrop-filter: none;
    border-radius: 0;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.8s ease-out 0.7s forwards;
    box-shadow: none;
}

.hero-description p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.7;
    margin: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    text-align: center;
}

/* Стили для названия компании в тексте */
.company-name {
    font-weight: 700;
    color: #ffffff;
}

.company-off {
    color: var(--accent-color);
    font-weight: 700;
}

/* Адаптивность для описания */
@media (max-width: 767px) {
    .hero-description {
        margin-bottom: 30px;
    }
    
    .hero-description p {
        font-size: 14px;
        line-height: 1.6;
    }
}

@media (min-width: 768px) {
    .hero-description p {
        font-size: 17px;
        line-height: 1.8;
    }
}

@media (min-width: 1024px) {
    .hero-description p {
        font-size: 18px;
        line-height: 1.9;
    }
}
