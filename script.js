// Language data
const translations = {
    en: {
        logo: "Haxerpai",
        features: "Features",
        products: "Products & Services",
        testimonials: "Testimonials",
        contact: "Contact",
        getStarted: "Get Started",
        heroTitle: "Revolutionize Your Restaurant Management",
        heroDescription: "Efficient, intuitive, and designed for success.",
        tryFree: "Try It Free",
        featuresTitle: "Features",
        feature1Title: "Online Ordering",
        feature1Description: "Seamlessly integrate online orders into your workflow.",
        feature2Title: "Menu Management",
        feature2Description: "Easily update and manage your menu items.",
        feature3Title: "Analytics",
        feature3Description: "Track your performance with detailed analytics.",
        feature4Title: "Multilanguage Support",
        feature4Description: "Support for multiple languages to reach a global audience.",
        feature5Title: "Payment Support", // New
        feature5Description: "Accept payments seamlessly with integrated payment gateways.", // New
        feature6Title: "QR Code Menu", // New
        feature6Description: "Enable customers to access your menu via QR codes.", // New
        productsTitle: "Products & Services",
        product1Title: "POS System",
        product1Description: "Streamline your sales with our advanced Point of Sale system.",
        product2Title: "Inventory Management",
        product2Description: "Efficiently manage your stock and reduce waste.",
        product3Title: "Customer Loyalty Program",
        product3Description: "Reward your customers and keep them coming back.",
        testimonialsTitle: "What Our Customers Say",
        testimonial1: '"Haxerpai has transformed our restaurant operations!"',
        testimonial2: '"The best decision we made for our business."',
        contactTitle: "Contact Us",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message",
        footerText: "© 2023 Haxerpai. All rights reserved."
    },
    am: {
        logo: "ሃክሰርፓይ",
        features: "ባህሪያት",
        products: "ምርቶች እና አገልግሎቶች",
        testimonials: "አስተያየቶች",
        contact: "አግኙን",
        getStarted: "ጀምር",
        heroTitle: "የምግብ ቤትዎን አስተዳደር ያሻሽሉ",
        heroDescription: "ውጤታማ፣ ቀላል እና ለተሳካ የተነደፈ።",
        tryFree: "ነፃ ይሞክሩት",
        featuresTitle: "ባህሪያት",
        feature1Title: "ኦንላይን ትዕዛዝ",
        feature1Description: "ኦንላይን ትዕዛዞችን በቀላሉ ወደ �ስራዎ ያዋህዱ።",
        feature2Title: "ምናሌ አስተዳደር",
        feature2Description: "የምግብ ዝርዝሮችዎን በቀላሉ ያዘምኑ እና ያስተዳድሩ።",
        feature3Title: "ትንታኔ",
        feature3Description: "ዝርዝር ስታቲስቲክስ በመጠቀም አፈፃፀምዎን ይከታተሉ።",
        feature4Title: "ብዙ ቋንቋዎች ድጋፍ",
        feature4Description: "ዓለም አቀፍ ተጠቃሚዎችን ለማግኘት የተለያዩ ቋንቋዎችን ይደግፉ።",
        feature5Title: "ክፍያ ድጋፍ", // New
        feature5Description: "በተዋሃዱ የክፍያ መግቢያዎች ክፍያዎችን በቀላሉ ይቀበሉ።", // New
        feature6Title: "QR ኮድ �ምናሌ", // New
        feature6Description: "ደንበኞችዎ ምናሌዎን በQR ኮድ እንዲደርሱ ያድርጉ።", // New
        productsTitle: "ምርቶች እና አገልግሎቶች",
        product1Title: "POS ስርዓት",
        product1Description: "የሽያጭ ሂደትዎን በምቾት ያስተዳድሩ።",
        product2Title: "እቃዎች አስተዳደር",
        product2Description: "እቃዎችዎን በብቃት ያስተዳድሩ እና ቆሻሻ ይቀንሱ።",
        product3Title: "ደንበኛ ታማኝነት ፕሮግራም",
        product3Description: "ደንበኞችዎን ይሸለሙ እና እንዲመለሱ ያድርጉ።",
        testimonialsTitle: "ደንበኞቻችን ምን ይላሉ?",
        testimonial1: '"ሃክሰርፓይ የምግብ ቤታችንን አስተዳደር ቀይሯል!"',
        testimonial2: '"ለንግድ ውስጥ ያደረግነው ከሁሉ በላይ የተሻለ ውሳኔ።"',
        contactTitle: "አግኙን",
        namePlaceholder: "ስምዎ",
        emailPlaceholder: "ኢሜይልዎ",
        messagePlaceholder: "መልእክትዎ",
        sendMessage: "መልእክት ላክ",
        footerText: "© 2023 ሃክሰርፓይ. ሁሉም መብቶች የተጠበቁ ናቸው።"
    }
};

// Function to change language
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-lang-key]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang-key");
        if (translations[lang][key]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.setAttribute("placeholder", translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Event listeners for language buttons
document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));
document.getElementById("lang-am").addEventListener("click", () => changeLanguage("am"));

// Default language
changeLanguage("en");