module.exports = {
  content: ["./code/index.html",
   ],
  theme: {
    backgroundSize: {
    'auto': 'auto',
    'cover': 'cover',
    'contain': 'contain',
    '50%': '50%',
    '16': '4rem',
      extend: {
       backgroundImage: {
       'hero': "url('../img/tailwind.jpg')",
      },
    },
  },

  plugins: [],
}
}
