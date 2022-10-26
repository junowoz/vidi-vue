<template>
  <header class="header-header" v-bind:class="rootClassName">
    <router-link :to="{ name: 'Landingpage'}">
      <img alt="image_alt" src="/playground_assets/logologo.png" class="header-image" />
    </router-link>
    <div class="header-opcoes1">
      <div class="header-seguro">
        <div class="header-frame">
          <span class="header-text">{{ text1 }}</span>
          <img
            :alt="chevrondown_alt"
            :src="chevrondown_src"
            class="header-chevrondown"
          />
        </div>
      </div>
      <div class="header-blog">
        <span class="header-text1"><span>Blog</span></span>
      </div>
      <div class="header-duvidas">
        <span class="header-text3"><span>Dúvidas</span></span>
      </div>
    </div>

    <div class="header-botoes1">

      <router-link :to="{ name: 'Todos'}">
      <div class="header-contratar">
        <span class="header-text5">{{ text }}</span>
      </div>
      </router-link>

      <router-link :to="{ name: 'Seguro'}">
      <div class="header-entrar">
        <span class="header-text6">
          <span>Entrar</span>
        </span>
      </div>
      </router-link>
      
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    text1: {
      type: String,
      default: 'Seguro de propriedade intelectual',
    },
    chevrondown_alt: {
      type: String,
      default: 'chevrondown4026',
    },
    image_src: {
      type: String,
      default: '/playground_assets/vidi-200h.png',
    },
    chevrondown_src: {
      type: String,
      default:
        'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/200bafc5-d05f-420e-bd3a-d4d28e4e142e/cb2bc1ed-b3e7-478e-87df-599bbfff8c16?org_if_sml=1199',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
    text: {
      type: String,
      default: 'Contratar seguro',
    },
  },
}
</script>

<style scoped>
.header-header {
  width: 100%;
  height: 90px;
  display: flex;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: flex-start;
  background-color: #FAFAFA;
}

.header-image {
  width: 100px;
  align-self: center;
  object-fit: cover;
  margin-left: 120px;
  margin-right: 50px;
}

.header-opcoes1 {
  gap: 24;
  width: 519px;
  display: flex;
  align-self: center;
  align-items: center;
  border-color: transparent;
  margin-right: 20px;
  justify-content: center;
}

.header-seguro {
  display: flex;
  padding: 10px;
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 0px;
  flex-direction: column;
}

.header-frame {
  display: flex;
  position: relative;
  align-items: center;
  border-color: transparent;
}

.header-text {
  color: #646464;
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 8px;
  margin-bottom: 0;
  text-decoration: none;
}

.header-chevrondown {
  width: 20px;
  height: 20px;
  position: relative;
}

.header-blog {
  display: flex;
  padding: 10px;
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 24px;
  flex-direction: column;
}

.header-text1 {
  color: #646464;
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.header-duvidas {
  display: flex;
  padding: 10px;
  position: relative;
  align-self: center;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}

.header-text3 {
  color: #646464;
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.header-botoes1 {
  flex: 0;
  right: 120px;
  width: auto;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}

.header-contratar {
  width: auto;
  height: 48px;
  display: flex;
  padding: 14px 16px;
  position: relative;
  align-self: center;
  align-items: center;
  border-color: #FF5B28;
  border-style: solid;
  border-width: 1px;
  margin-right: 32px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  background-color: #FF5B28;
}

.header-text5 {
  color: var(--dl-color-gray-white);
  font-size: 16px;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.header-entrar {
  width: auto;
  height: auto;
  display: flex;
  padding: 10px 16px;
  position: relative;
  align-self: center;
  align-items: center;
  border-color: #FF5B28;
  border-width: 1px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
}

.header-text6 {
  color: var(--dl-color-default-laranja);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.header-root-class-name1 {
  top: 0px;
  left: 0px;
  position: absolute;
}

.header-root-class-name2 {
  top: 0px;
  left: 0px;
  position: absolute;
}

.header-root-class-name3 {
  top: 0px;
  left: 0px;
  position: absolute;
}

.header-root-class-name4 {
  top: 0px;
  left: 0px;
  position: absolute;
}

.header-root-class-name5 {
  top: 0px;
  left: 0px;
  position: absolute;
}

.header-root-class-name6 {
  top: 0px;
  left: 0px;
  position: absolute;
}

@media(max-width: 1200px) {
  .header-header {
    height: 90px;
  }

  .header-opcoes1 {
    top: 0px;
    left: 268px;
    width: auto;
    bottom: 0px;
    margin: auto;
    position: absolute;
    align-self: center;
    flex-direction: row;
  }

  .header-botoes1 {
    right: 0px;
    margin-top: auto;
    align-items: center;
    margin-left: auto;
    margin-right: 20px;
    margin-bottom: auto;
    flex-direction: row;
    justify-content: center;
  }
}

@media(max-width: 991px) {
  .header-opcoes1 {
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    position: static;
    margin-left: 45px;
  }

  .header-botoes1 {
    top: 1px;
    right: 0px;
    position: absolute;
    flex-direction: column;
  }
}

@media(max-width: 767px) {
  .header-header {
    height: auto;
  }

  .header-opcoes1 {
    width: auto;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
  }

  .header-seguro {
    align-items: center;
    margin-right: 0px;
    justify-content: center;
  }

  .header-text {
    text-align: center;
    margin-right: 0px;
  }

  .header-blog {
    align-items: center;
    margin-right: 0px;
    justify-content: center;
  }

  .header-duvidas {
    align-items: center;
    justify-content: center;
  }

  .header-botoes1 {
    gap: 0;
    top: 0px;
    bottom: 0px;
    height: auto;
    position: static;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    margin-right: 20px;
    flex-direction: column;
    justify-content: center;
  }
}

@media(max-width: 479px) {
  .header-frame {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
}
</style>