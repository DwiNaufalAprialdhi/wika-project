/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./**/*.{html,js}",
            "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'helvetica': ['Helvetica Neue', 'sans-serif']
    },
    extend: {
      colors: {
        'primary1': '#00B0E9',
        'primary2': '#66D0F2',
        'primary3': '#CCEFFB',

        'accet1': '#F98038',
        'accet2': '#FBB388',
        'accet3': '#FEE6D7',

        'secondary1': '#0055A6',
        'secondary2': '#7491BF',
        'secondary3': '#D1DAEA',

        'semantic_success1': '#00C48C',
        'semantic_success2': '#7DDFC3',
        'semantic_success3': '#D5F2EA',

        'semantic_information1': '#0084F4',
        'semantic_information2': '#66B5F8',
        'semantic_information3': '#D5E9FA',

        'semantic_warning1': '#FFA722',
        'semantic_warning2': '#FFC163',
        'semantic_warning3': '#FFD99F',

        'semantic_error1': '#FF3C5A',
        'semantic_error2': '#FF7C91',
        'semantic_error3': '#FFB8C3',

        'neutral_black1': '#222222',
        'neutral_black2': '#6F6F6F',

        'neutral_gray1': '#A1A1A1',
        'neutral_gray2': '#E7F0F3',
        'neutral_gray3': '#F8FCFD',

        'neutral_white': '#FFFFFF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}