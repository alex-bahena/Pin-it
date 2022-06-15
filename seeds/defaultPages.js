const Pages = require('../models/Pages');

const pages = [
{
name:'amazon',
url: 'https://amazon.com.mx/',
img: 'https://icon-library.com/icon/amazon-icon-png-6.html'
},
{
name: 'gmail',
url: 'https://mail.google.com/mail/u/0/?tab=wm#inbox',
img: 'https://icon-library.com/images/gmail-icon-circle/gmail-icon-circle-7.jpg'
},
{
name: 'youtube',
url: 'https://www.youtube.com/',
img: 'https://icon-library.com/images/youtube-app-icon-transparent/youtube-app-icon-transparent-27.jpg'
},
{
name: 'google-drive',
url: 'https://drive.google.com/drive/u/0/my-drive',
img: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png'
},
{
name: 'facebook',
url: 'https://es-la.facebook.com/',
img: 'https://icon-library.com/images/facebook-app-icon-transparent/facebook-app-icon-transparent-21.jpg'
},
{
name: 'instragram',
url: 'https://www.instagram.com/',
img: 'https://icon-library.com/images/instagram-small-icon/instagram-small-icon-12.jpg'
},
{
name: 'mercado-libre',
url: 'https://www.mercadolibre.com.mx/',
img: 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus@2x.png'
},
{
name: 'google-translate',
url: 'https://translate.google.com.mx/?hl=es',
img: 'https://icon-library.com/images/icon-translate/icon-translate-6.jpg'
},
{
name: 'whatsapp',
url: 'https://web.whatsapp.com/',
img: 'https://icon-library.com/images/whatsapp-icon-vector/whatsapp-icon-vector-7.jpg'
},
{
name: 'outlook',
url: 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1655256679&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3df7724669-9a5f-df25-f8eb-a128210865c5&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015',
img: 'https://icon-library.com/images/icon-outlook/icon-outlook-13.jpg'
},
{
name: 'github',
url: 'https://github.com/',
img: 'https://icon-library.com/images/icon-github/icon-github-28.jpg'
},
{
name: 'udemy',
url: 'https://www.udemy.com/home/my-courses/learning/',
img: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
},
{
name: 'linkedin',
url: 'https://www.linkedin.com/login/es?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin',
img: 'https://icon-library.com/images/linked-in-icon-png/linked-in-icon-png-15.jpg'
}
];

 
const seedPages = () => Pages.bulkCreate(pages);

module.exports = seedPages;
