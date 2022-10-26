<template>
  <div class="landingpage-container">
    <app-header rootClassName="header-root-class-name"></app-header>
    <div class="landingpage-container1">
      <div class="landingpage-section1">
        
        <div class="landingpage-row1">
          
          <span class="landingpage-text">
            
            <span>
              <span>Proteja seus NFTs</span>
              <br />
              <span>de serem plagiados</span>
            </span>
          </span>
          <span class="landingpage-text05">
            <span>
              Nosso seguro de propriedade intelectual pode rastrear e remover dos
              marketplaces as suas NFTs plagiadas.
            </span>
          </span>
          <div class="landingpage-demo">
            <span class="landingpage-text07">
              <router-link :to="{ name: 'Nftsrastreados'}">
              <span>Demo do monitoramento</span>
              </router-link>
            </span>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/nfts.png"
          class="landingpage-image"
        />
      </div>
      <div class="landingpage-section2">
        <span class="landingpage-text09">
          <span>
            Por que um
            <span v-html="rawfr89"></span>
          </span>
          <span class="landingpage-text11">
            seguro de propriedade intelectual?
          </span>
        </span>
        <div class="landingpage-frame41">
          <div class="landingpage-frame38">
            <span class="landingpage-text12"><span>R$ 2K</span></span>
            <span class="landingpage-text14">
              <span>
                Média cobrada pelas empresas para dar início ao processo de
                propriedade intelectual.
              </span>
            </span>
          </div>
          <div class="landingpage-frame39">
            <span class="landingpage-text16"><span>90%</span></span>
            <span class="landingpage-text18">
              <span>
                Porcentagem de NFTs plagiadas presentes na plataforma da OpenSea.
              </span>
            </span>
          </div>

        </div>
        <img
          alt="image"
          src="/playground_assets/cracra.jpg"
          class="landingpage-image1"
        />
      </div>
      <div class="landingpage-section3">
        <span class="landingpage-text24">
          <span>A gente protege sua criação</span>
        </span>
        <div class="landingpage-moni-supo-isen">
          <div class="landingpage-frame61">
            <div class="landingpage-emoji">
              <img
                alt="Vector4028"
                src="/playground_assets/eye.png"
                class="landingpage-vector02"
              />
            </div>
            <div class="landingpage-frame60">
              <span class="landingpage-text26">
                <span>Monitoramento dos seus NFTs</span>
              </span>
              <span class="landingpage-text28">
                <span>
                  Nosso software vai rastrear todas as transações da OpenSea,
                  scaneando elementos visuais e textuais.
                  <span v-html="raw1017"></span>
                </span>
              </span>
            </div>
          </div>
          <div class="landingpage-frame62">
            <div class="landingpage-emoji1">
              <img
                alt="Vector4028"
                src="/playground_assets/law.png"
                class="landingpage-vector07"
              />

            </div>
            <div class="landingpage-frame601">
              <span class="landingpage-text30">
                <span>Suporte jurídico</span>
              </span>
              <span class="landingpage-text32">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  interdum tellus ut dapibus fringilla. Etiam a ipsum tortor.
                </span>
              </span>
            </div>
          </div>
          <div class="landingpage-frame63">
            <div class="landingpage-emoji2">
              <img
                alt="Vector4028"
                src="/playground_assets/money.png"
                class="landingpage-vector15"
              />
            </div>
            <div class="landingpage-frame602">
              <span class="landingpage-text34">
                <span>Isenção dos custos processuais</span>
              </span>
              <span class="landingpage-text36">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  interdum tellus ut dapibus fringilla. Etiam a ipsum tortor.
                </span>
              </span>
            </div>
          </div>
        </div>
        <router-link :to="{ name: 'Todos'}">
        <div class="landingpage-demo1">
          <span class="landingpage-text38">Contratar seguro</span>
        </div>
        </router-link>
        <img
          alt="image"
          src="/playground_assets/compu.png"
          class="landingpage-image2"
        />
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppFooter from '../components/footer'
import Popup from '../components/Popup';


export default {
  name: 'Landingpage',
  components: {
    AppHeader,
    AppFooter,
  },

  data() {
    return {
      rawfr89: ' ',
      raw1017: ' ',
    }
  },

  metaInfo: {
    title: 'Vidi | Monitorando com Inteligência',
  },
}

</script>

<style scoped>
.landingpage-container {
  min-height: 100vh;
  background-color: #FAFAFA;
}
.landingpage-container1 {
  width: 100%;
  height: 1903px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
}
.landingpage-section1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 678px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: center;
}
.landingpage-row1 {
  top: 0px;
  left: 0px;
  width: 601px;
  bottom: 0px;
  height: 400px;
  display: flex;
  position: absolute;
  align-self: center;
  box-sizing: border-box;
  margin-top: auto;
  align-items: flex-start;
  flex-shrink: 1;
  margin-left: 120px;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: auto;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: auto;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.landingpage-text {
  color: var(--dl-color-default-preto);
  width: 513px;
  height: auto;
  position: absolute;
  font-size: 48px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  text-decoration: none;
}
.landingpage-text05 {
  top: 184px;
  color: rgba(100, 100, 100, 1);
  width: 513px;
  height: auto;
  position: absolute;
  font-size: 22px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 160.0000023841858%;
  font-stretch: normal;
  text-decoration: none;
}
.landingpage-demo {
  top: 349px;
  left: 0px;
  display: flex;
  padding: 14px 24px;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  border-radius: 8px;
  background-color: var(--dl-color-default-laranja);
}
.landingpage-text07 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 18px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-image {
  top: 100px;
  right: 0px;
  width: 500px;
  position: absolute;
  margin-top: auto;
  object-fit: cover;
  margin-left: 50px;
  margin-right: 120px;
  margin-bottom: auto;
}
.landingpage-section2 {
  top: 678px;
  flex: 0;
  width: 100%;
  height: 497px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: flex-end;
}
.landingpage-text09 {
  top: 0px;
  left: 0px;
  color: rgba(33, 37, 41, 1);
  width: 658px;
  height: auto;
  position: absolute;
  font-size: 40px;
  align-self: auto;
  font-style: SemiBold;
  margin-top: 20px;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 170.00000476837158%;
  margin-left: 120px;
  font-stretch: normal;
  text-decoration: none;
}
.landingpage-text11 {
  color: var(--dl-color-default-preto);
}
.landingpage-frame41 {
  flex: 0;
  left: 0px;
  right: 0px;
  width: 1263px;
  bottom: 0px;
  display: flex;
  position: absolute;
  margin-top: 80px;
  align-items: flex-end;
  margin-left: 120px;
  border-color: transparent;
  margin-right: 120px;
  margin-bottom: 80px;
  justify-content: center;
}
.landingpage-frame38 {
  width: 316px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  margin-right: 126px;
  flex-direction: column;
}
.landingpage-text12 {
  color: rgba(255, 91, 39, 1);
  height: auto;
  font-size: 56px;
  align-self: stretch;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 16px;
  text-decoration: none;
}
.landingpage-text14 {
  color: rgba(33, 37, 41, 1);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-frame39 {
  width: 316px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  margin-right: 126px;
  flex-direction: column;
}
.landingpage-text16 {
  color: var(--dl-color-default-laranja);
  height: auto;
  font-size: 56px;
  align-self: stretch;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 16px;
  text-decoration: none;
}
.landingpage-text18 {
  color: rgba(33, 37, 41, 1);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-frame40 {
  width: 316px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.landingpage-text20 {
  color: var(--dl-color-default-laranja);
  height: auto;
  font-size: 56px;
  align-self: stretch;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 16px;
  text-decoration: none;
}
.landingpage-text22 {
  color: rgba(33, 37, 41, 1);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-image1 {
  top: 40px;
  right: 0px;
  width: auto;
  bottom: 80px;
  position: absolute;
  object-fit: cover;
}
.landingpage-section3 {
  top: 1175px;
  flex: 0;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 677px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  justify-content: flex-end;
}
.landingpage-text24 {
  top: 40px;
  left: 0px;
  color: var(--dl-color-default-preto);
  height: auto;
  position: absolute;
  font-size: 40px;
  align-self: stretch;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  margin-left: 120px;
  font-stretch: normal;
  text-decoration: none;
}
.landingpage-moni-supo-isen {
  top: 160px;
  left: 0px;
  width: 636px;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: flex-start;
  flex-shrink: 0;
  margin-left: 120px;
  border-color: transparent;
  flex-direction: column;
}
.landingpage-frame61 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  margin-bottom: 48px;
}
.landingpage-emoji {
  width: 78px;
  height: 50.27259826660156px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 40px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.landingpage-vector02 {
  top: 3.0484161376953125px;
  left: 2.8363964557647705px;
  width: 72px;
  height: 44px;
  position: absolute;
}
.landingpage-frame60 {
  width: 518px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.landingpage-text26 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 24px;
  align-self: stretch;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 16px;
  text-decoration: none;
}
.landingpage-text28 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-frame62 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
  margin-bottom: 48px;
}
.landingpage-emoji1 {
  width: 78px;
  height: 69.76996612548828px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 40px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.landingpage-vector07 {
  top: 15;
  left: 15;
  width: 70px;
  height: 53px;
  position: absolute;
}

.landingpage-frame601 {
  width: 518px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.landingpage-text30 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 24px;
  align-self: stretch;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 16px;
  text-decoration: none;
}
.landingpage-text32 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-frame63 {
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
}
.landingpage-emoji2 {
  width: 78px;
  height: 65px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 40px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.landingpage-vector15 {
  top: 10.833333015441895px;
  left: 3.637978807091713e-12px;
  width: 78px;
  height: 54px;
  position: absolute;
}

.landingpage-frame602 {
  width: 518px;
  display: flex;
  position: relative;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
}
.landingpage-text34 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 24px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 16px;
  text-decoration: none;
}
.landingpage-text36 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.landingpage-demo1 {
  top: 487px;
  right: 0px;
  width: 277px;
  display: flex;
  padding: 14px 24px;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 214px;
  border-radius: 8px;
  padding-bottom: 14px 24px;
  justify-content: center;
  background-color: var(--dl-color-default-laranja);
}
.landingpage-text38 {
  color: rgb(255, 255, 255);
  height: auto;
  font-size: 18px;
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
.landingpage-image2 {
  top: 0px;
  right: 0px;
  width: auto;
  position: absolute;
  margin-top: 120px;
  object-fit: cover;
  margin-right: 120px;
}
@media(max-width: 1200px) {
  .landingpage-container1 {
    width: 1069px;
    height: 3414px;
    margin-bottom: 0px;
  }
  .landingpage-section1 {
    height: 932px;
    margin-bottom: 0px;
  }
  .landingpage-row1 {
    top: 431px;
    flex: 0;
    left: 0px;
    right: 0px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
  .landingpage-image {
    top: 47px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  .landingpage-section2 {
    top: 1022px;
    height: 932px;
    margin-bottom: 0px;
  }
  .landingpage-text09 {
    left: 0px;
    right: 0px;
    width: auto;
    position: absolute;
    margin-right: 120px;
  }
  .landingpage-frame41 {
    left: 0px;
    right: 0px;
    width: 100%;
    margin-top: auto;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    flex-direction: column;
    justify-content: center;
  }
  .landingpage-frame38 {
    align-items: center;
    margin-right: 0px;
    justify-content: center;
  }
  .landingpage-frame39 {
    align-items: center;
    margin-right: 0px;
    justify-content: center;
  }
  .landingpage-frame40 {
    align-self: center;
    align-items: center;
  }
  .landingpage-image1 {
    top: 200px;
  }
  .landingpage-section3 {
    top: 1954px;
    height: 1157px;
    margin-bottom: 0px;
  }
  .landingpage-demo1 {
    top: 1000px;
    left: 0px;
    right: 0px;
    margin: auto;
  }
  .landingpage-image2 {
    top: 600px;
    left: 0px;
    right: 0px;
    bottom: 93px;
    margin: auto;
    position: absolute;
    margin-top: 0px;
    margin-right: 0px;
  }
}
@media(max-width: 991px) {
  .landingpage-image1 {
    top: 200px;
  }
}
</style>
