angular.module('exel.CONFIG', [])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCgWReZ13GtycUlvQBvYNTXqqKL2K6JaKs',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})

.constant('CONFIG', {
  'MAIN' : 'Головна',
  'ABOUT' : 'Про нас',
  'SERVICES': 'Послуги',
  'PORTFOLIO':'Портфоліо',
  'CONTACTS': 'Контакти'
})

.constant('paginationConfig', {
  items_per_page:[5,10,25,50],
  boundaryLinks: true,
  directionLinks: true,
  maxSize : 10,
  rotate: false,
  firstText: '≪',
  previousText: '<',
  nextText: '>',
  lastText: '≫'
})