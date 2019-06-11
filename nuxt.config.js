module.exports = {
    build: {
      extend(config, ctx) {
        const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
        vueLoader.options.transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
      }
    }
  }