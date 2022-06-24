const { Pages } = require('../models');

const pagesData = [
    {
        name: 'amazon',
        url: 'https://amazon.com.mx/',
        category_id: '4',
        img: 'https://epinium.com/wp-content/uploads/2018/10/amazon-logo.png',
    },
    {
        name: 'gmail',
        url: 'https://mail.google.com/mail/u/0/?tab=wm#inbox',
        category_id: '1',
        img: 'https://icon-library.com/images/gmail-icon-circle/gmail-icon-circle-7.jpg',
    },
    {
        name: 'youtube',
        url: 'https://www.youtube.com/',
        category_id: '3',
        img: 'https://icon-library.com/images/youtube-app-icon-transparent/youtube-app-icon-transparent-27.jpg',
    },
    {
        name: 'google-drive',
        url: 'https://drive.google.com/drive/u/0/my-drive',
        category_id: '5',
        img: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png',
    },
    {
        name: 'facebook',
        url: 'https://es-la.facebook.com/',
        category_id: '2',
        img: 'https://icon-library.com/images/facebook-app-icon-transparent/facebook-app-icon-transparent-21.jpg',
    },
    {
        name: 'instragram',
        url: 'https://www.instagram.com/',
        category_id: '2',
        img: 'https://icon-library.com/images/instagram-small-icon/instagram-small-icon-12.jpg',
    },
    {
        name: 'mercado-libre',
        url: 'https://www.mercadolibre.com.mx/',
        category_id: '4',
        img: 'https://http2.mlstatic.com/D_NQ_NP932034-MLA41139200997_032020-F.jpg',
    },
    {
        name: 'google-translate',
        url: 'https://translate.google.com.mx/?hl=es',
        category_id: '5',
        img: 'https://icon-library.com/images/icon-translate/icon-translate-6.jpg',
    },
    {
        name: 'whatsapp',
        url: 'https://web.whatsapp.com/',
        category_id: '2',
        img: 'https://icon-library.com/images/whatsapp-icon-vector/whatsapp-icon-vector-7.jpg',
    },
    {
        name: 'outlook',
        url: 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1655256679&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3df7724669-9a5f-df25-f8eb-a128210865c5&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015',
        category_id: '1',
        img: 'https://icon-library.com/images/icon-outlook/icon-outlook-13.jpg',
    },
    {
        name: 'github',
        url: 'https://icon-library.com/images/github-icon-png/github-icon-png-5.jpg',
        category_id: '5',
        img: 'https://www.svgrepo.com/show/303615/github-icon-1-logo.svg',
    },
    {
        name: 'udemy',
        url: 'https://www.udemy.com/home/my-courses/learning/',
        category_id: '5',
        img: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin',
        category_id: '1',
        img: 'https://icon-library.com/images/linked-in-icon-png/linked-in-icon-png-15.jpg',
    }
];


const seedPages = () => Pages.bulkCreate(pagesData);

module.exports = seedPages;