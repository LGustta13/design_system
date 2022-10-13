/** @type {import('tailwindcss').Config} */
module.exports = {

  // Arquivos de conteúdo com classes tailwind, identificar aqui
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    
    // Definindo os tamanhos da font segundo o Design system
    fontSize: {
      xs:14,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      '2xl':32
    },

    // Definindo as cores do Design system (as outras do tailwind serão substituídas)
    colors: {
      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',
      
      'cyan-500': '#81d8f7',
      'cyan-300': '#9be1fb'
      
    },

    extend: {

      // Adiciona as fontes que o tailwind deve utilizar para a aplicação segundo o Desygn System
      fontFamily: {
        sans: 'inter, sans-serif'
      }
    },
  },
  plugins: [],
}
