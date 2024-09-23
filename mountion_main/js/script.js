const GreenDetails = document.getElementsByClassName('facilities-blocks_green-details');
const BlueDetail = document.getElementsByClassName('facilities-blocks_blue-details');
const MountainTextMore = document.getElementsByClassName('mountain-info_text-more');
const TicketBuying = document.getElementsByClassName('ticket-text_buying');

// Функция для добавления ссылки к элементам
function addLinkToElements(elements, url) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.innerHTML = `<a href="${url}" style="color: inherit; text-decoration: none;">${element.innerHTML}</a>`;
    }
}

// Добавляем ссылки к элементам
addLinkToElements(GreenDetails, 'https://example.com/facilities');
addLinkToElements(BlueDetail, 'https://example.com/facilities');
addLinkToElements(MountainTextMore, 'https://example.com/facilities');
addLinkToElements(TicketBuying, 'https://example.com/facilities');


// Определим ссылки для каждого элемента
const footerLinks = {
    information: [
        { text: "Facilities", url: "https://example.com/facilities" },
        { text: "News", url: "https://example.com/news" },
        { text: "Events", url: "https://example.com/events" },
        { text: "Blog", url: "https://example.com/blog" },
    ],
    usefulLinks: [
        { text: "Home", url: "https://example.com/home" },
        { text: "Package", url: "https://example.com/package" },
        { text: "Ticket", url: "https://example.com/ticket" },
        { text: "About Us", url: "https://example.com/about" },
    ],
    contact: [
        { text: "Headquarters", url: "https://example.com/headquarters" },
        { text: "Manager", url: "https://example.com/manager" },
        { text: "Sales", url: "https://example.com/sales" },
        { text: "Why Us", url: "https://example.com/why-us" },
    ],
    terms: [
        { text: "Terms", url: "https://example.com/terms" },
        { text: "Privacy", url: "https://example.com/privacy" },
        { text: "Policy and Cookie Policy", url: "https://example.com/policy" },
    ],
};

// Добавим ссылки в секцию "Information"
const footerNavs = [
    { selector: '.footer-navigation_01 ul', links: footerLinks.information },
    { selector: '.footer-navigation_02 ul', links: footerLinks.usefulLinks },
    { selector: '.footer-navigation_03 ul', links: footerLinks.contact },
];

// Функция для добавления ссылок в навигацию
function addLinksToNavs(navData) {
    navData.forEach(nav => {
        const ul = document.querySelector(nav.selector);
        if (ul) {
            nav.links.forEach(link => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${link.url}" style="color: inherit; text-decoration: none;">${link.text}</a>`;
                ul.appendChild(li);
            });
        }
    });
}

// Добавим ссылки в блок "Terms" и "Privacy"
const termsContainer = document.querySelector('.info-more');
if (termsContainer) {
    footerLinks.terms.forEach(link => {
        const p = document.createElement('p');
        p.innerHTML = `<a href="${link.url}" style="color: inherit; text-decoration: none;">${link.text}</a>`;
        termsContainer.appendChild(p);
    });
}

// Вызов функции
addLinksToNavs(footerNavs);