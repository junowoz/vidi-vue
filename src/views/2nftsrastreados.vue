<template>
  <div>
    <app-header rootClassName="header-root-class-name"></app-header>
    <div class="nfts-do-usuario-container1">
      <div class="nfts-do-usuario-rastreados">
        <span class="nfts-do-usuario-text"><span>NFTs rastreados</span></span>
        <div class="nfts-do-usuario-frame48">
          <span class="nfts-do-usuario-text02">
            <span>
              O próximo passo é scanear os seus NFTs para que o software possa
              identificar os elementos visuais e textuais a serem rastreados.
            </span>
          </span>
        </div>
      </div>
      <div class="nfts-do-usuario-menu">
        <div class="nfts-do-usuario-boto button">
          <router-link :to="{ name: 'AnaliseIniciada'}">
          <span class="nfts-do-usuario-text04"><span>Comparar NFTs</span></span></router-link>
        </div>
        <div class="nfts-do-usuario-pesquisa input">
          <div class="nfts-do-usuario-group78">
            <img alt="search3965" src="/playground_assets/search.png" class="nfts-do-usuario-search" />
            <span class="nfts-do-usuario-text06">
              <span>Procure por uma NFT...</span>
            </span>
          </div>
        </div>
        <div class="nfts-do-usuario-ajustarnfts">
          <div class="nfts-do-usuario-menor button">
            <img src="/playground_assets/square1.png" alt="image" class="nfts-do-usuario-image" />
          </div>
          <div class="nfts-do-usuario-maior button">
            <img src="/playground_assets/square2.png" alt="image" class="nfts-do-usuario-image1" />
          </div>
        </div>
      </div>
      <div class="nfts-do-usuario-blocoinfoacesso">
        <div class="nfts-do-usuario-conteudo">
          <div class="nfts-do-usuario-acessos">
            <div class="nfts-do-usuario-acesso1">
              <div class="nfts-do-usuario-frame90">
                <span class="nfts-do-usuario-text08"><span>29.09.22</span></span>
                <img alt="Ellipse113965" src="/playground_assets/elipse.png"
                  class="nfts-do-usuario-ellipse11" />
                <span class="nfts-do-usuario-text10"><span>16:07</span></span>
              </div>
              <span class="nfts-do-usuario-text12"><span>Acesso 1</span></span>
            </div>
            <div class="nfts-do-usuario-acesso2">
              <span class="nfts-do-usuario-text14"><span>Acesso 2</span></span>
            </div>
          </div>
          <div class="nfts-do-usuario-infocarteira">
            <div class="nfts-do-usuario-frame49">
              <img alt="image243965" src="/playground_assets/meta_mini.png"
                class="nfts-do-usuario-image24" /></img>
              <span class="nfts-do-usuario-text16">
                <span>0x306F...4EAD</span>
              </span>
            </div>
          </div>
          <img alt="Line53965" src="/playground_assets/line1.png" class="nfts-do-usuario-line5" />
        </div>
      </div>
      <div class="nfts-do-usuario-nftss">
        <div class="nfts-do-usuario-nft1">
          <img alt="image313965" src="/playground_assets/nft1.png" class="nfts-do-usuario-image31" />
          <img alt="transparncia3965" src="/playground_assets/sombra.png"
            class="nfts-do-usuario-transparncia" />
          <div class="nfts-do-usuario-descrio">
            <span class="nfts-do-usuario-text18"><span>ETERNALS XYZ</span></span>
            <span class="nfts-do-usuario-text20"><span>#2354</span></span>
          </div>
        </div>
        <div class="nfts-do-usuario-nft2">
          <img alt="image313965" src="/playground_assets/nft2.png" class="nfts-do-usuario-image311" />
          <img alt="transparncia3965" src="/playground_assets/sombra.png"
            class="nfts-do-usuario-transparncia1" />
          <div class="nfts-do-usuario-descrio1">
            <span class="nfts-do-usuario-text22">
              <span>Crypto Bull Society</span>
            </span>
            <span class="nfts-do-usuario-text24"><span>#2354</span></span>
          </div>
        </div>
        <div class="nfts-do-usuario-nft3">
          <img alt="image313965" src="/playground_assets/nft3.png" class="nfts-do-usuario-image312" />
          <img alt="transparncia3965" src="/playground_assets/sombra.png"
            class="nfts-do-usuario-transparncia2" />
          <div class="nfts-do-usuario-descrio2">
            <span class="nfts-do-usuario-text26">
              <span>Astrobot Society</span>
            </span>
            <span class="nfts-do-usuario-text28"><span>#2354</span></span>
          </div>
        </div>
        <div class="nfts-do-usuario-nft4">
          <img alt="image313965" src="/playground_assets/nft4.png" class="nfts-do-usuario-image313" />
          <img alt="transparncia3965" src="/playground_assets/sombra.png"
            class="nfts-do-usuario-transparncia3" />
          <div class="nfts-do-usuario-descrio3">
            <span class="nfts-do-usuario-text30"><span>Aurory</span></span>
            <span class="nfts-do-usuario-text32"><span>#2354</span></span>
          </div>
        </div>
        <!-- <span class="nfts-do-usuario-text34">4 itens</span> -->
      </div>
    </div>
    <app-footer rootClassName="footer-root-class-name"></app-footer>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import AppFooter from '../components/footer'

export default {
  name: 'Nftsrastreados',
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
    title: 'Vidi | NFTs',
  },
}
</script>

<style scoped>
.nfts-do-usuario-container1 {
  width: 100%;
  height: 885px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: #FAFAFA;
}

.nfts-do-usuario-rastreados {
  top: 0px;
  left: 0px;
  width: 545px;
  display: flex;
  position: absolute;
  margin-top: 70px;
  align-items: flex-start;
  flex-shrink: 0;
  margin-left: 120px;
  border-color: transparent;
  flex-direction: column;
}

.nfts-do-usuario-text {
  color: var(--dl-color-default-preto);
  width: 545px;
  height: auto;
  font-size: 30px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 24px;
  text-decoration: none;
}

.nfts-do-usuario-frame48 {
  width: 545px;
  display: flex;
  padding: 0 192px 0 0;
  position: relative;
  align-items: center;
  flex-shrink: 0;
  border-color: transparent;
}

.nfts-do-usuario-text02 {
  color: var(--dl-color-default-cinzaescuro);
  width: 545px;
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 160.0000023841858%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-menu {
  top: 0px;
  left: 0px;
  right: 0px;
  width: auto;
  display: flex;
  position: absolute;
  align-self: center;
  margin-top: 340px;
  align-items: flex-start;
  margin-left: 120px;
  border-color: transparent;
  margin-right: 120px;
  margin-bottom: 80px;
}

.nfts-do-usuario-boto {
  width: 277px;
  height: 60px;
  display: flex;
  padding: 14px 24px;
  position: relative;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 30px;
  border-radius: 8px;
  background-color: var(--dl-color-default-laranja);
}

.nfts-do-usuario-text04 {
  top: 18px;
  left: 76px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 18px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-pesquisa {
  width: 688px;
  height: 60px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: #CCCCCC;
  border-style: solid;
  border-width: 1px;
  margin-right: 30px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.nfts-do-usuario-group78 {
  top: 18px;
  left: 18px;
  width: 216px;
  height: 24px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.nfts-do-usuario-search {
  top: 0px;
  left: 0px;
  width: 24px;
  height: 24px;
  position: absolute;
}

.nfts-do-usuario-text06 {
  top: 3px;
  left: 0px;
  color: var(--dl-color-default-cinzamdio);
  right: 0px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: right;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.nfts-do-usuario-ajustarnfts {
  top: 0px;
  right: 0px;
  width: 175px;
  height: 60px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
}

.nfts-do-usuario-menor {
  top: 0px;
  left: 0px;
  width: 88px;
  height: 60px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: #CCCCCC;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  background-color: #EFEFEF;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.nfts-do-usuario-image {
  width: auto;
  object-fit: cover;
}

.nfts-do-usuario-maior {
  top: 0px;
  left: 87px;
  width: 88px;
  height: 60px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: center;
  flex-shrink: 1;
  border-color: #CCCCCC;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: center;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color:transparent;
}

.nfts-do-usuario-image1 {
  width: auto;
  object-fit: cover;
}

.nfts-do-usuario-blocoinfoacesso {
  top: 0px;
  right: 0px;
  width: 254px;
  height: 130px;
  display: flex;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  margin-top: 70px;
  transition: 0.3s;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 120px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: row;
  justify-content: flex-start;
  background-color: #EFEFEF;
}

.nfts-do-usuario-conteudo {
  top: 20px;
  left: 20px;
  width: 214px;
  height: 90px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.nfts-do-usuario-acessos {
  top: 48px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
}

.nfts-do-usuario-acesso1 {
  width: 214px;
  height: 15px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 12px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.nfts-do-usuario-frame90 {
  top: 0px;
  left: 109px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: transparent;
  justify-content: flex-end;
}

.nfts-do-usuario-text08 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: right;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 8px;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-ellipse11 {
  width: 3px;
  height: 3px;
  position: relative;
  border-color: transparent;
  margin-right: 8px;
}

.nfts-do-usuario-text10 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: right;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-text12 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.nfts-do-usuario-acesso2 {
  width: 55px;
  height: 15px;
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
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.nfts-do-usuario-text14 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.nfts-do-usuario-infocarteira {
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  align-items: center;
  border-color: transparent;
  flex-direction: column;
}

.nfts-do-usuario-frame49 {
  display: flex;
  position: relative;
  align-items: center;
  border-color: transparent;
}

.nfts-do-usuario-image24 {
  width: 26px;
  height: 20px;
  position: relative;
  border-color: transparent;
  margin-right: 10px;
}

.nfts-do-usuario-text16 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 14px;
  align-self: auto;
  font-style: Regular;
  text-align: right;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-line5 {
  top: 34px;
  left: 0px;
  width: 214px;
  height: 0px;
  position: absolute;
}

.nfts-do-usuario-nftss {
  flex: 0;
  left: 0px;
  right: 0px;
  width: auto;
  bottom: 30px;
  height: auto;
  display: flex;
  position: absolute;
  align-self: center;
  margin-top: 70px;
  align-items: center;
  margin-left: 120px;
  margin-right: 120px;
  border-color: transparent;
  margin-right: 120px;
  margin-bottom: 70px;
  justify-content: center;
}

.nfts-do-usuario-nft1 {
  width: 269px;
  height: 269px;
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
  margin-right: 41px;
  border-radius: 16px 16px 16px 16px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(217, 217, 217, 1);
  box-shadow: 20px 15px 30px #888888;
}

.nfts-do-usuario-image31 {
  top: 0px;
  left: 0px;
  width: 269px;
  height: 269px;
  position: absolute;
  border-color: transparent;
  border-radius: 16px 16px 16px 16px;
}

.nfts-do-usuario-transparncia {
  top: 174.17266845703125px;
  left: 1.8189894035458565e-12px;
  width: 269px;
  height: 95px;
  position: absolute;
  border-color: transparent;
  border-radius: 0 0 16px 16px;
}

.nfts-do-usuario-descrio {
  top: 212.87770080566406px;
  left: 15.482014656066895px;
  width: 118.05036163330078px;
  height: 38.70503616333008px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}

.nfts-do-usuario-text18 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 5px;
  text-decoration: none;
}

.nfts-do-usuario-text20 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Light;
  text-align: left;
  font-family: Sora;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-nft2 {
  width: 269px;
  height: 269px;
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
  margin-right: 41px;
  border-radius: 16px 16px 16px 16px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(217, 217, 217, 1);
    box-shadow: 20px 15px 30px #888888;
}

.nfts-do-usuario-image311 {
  top: 0px;
  left: 0px;
  width: 269px;
  height: 269px;
  position: absolute;
  border-color: transparent;
  border-radius: 16px 16px 16px 16px ;
}

.nfts-do-usuario-transparncia1 {
  top: 174.17266845703125px;
  left: 0px;
  width: 269px;
  height: 95px;
  position: absolute;
  border-color: transparent;
  border-radius: 0 0 16px 16px;
}

.nfts-do-usuario-descrio1 {
  top: 214.8129425048828px;
  left: 15.482014656066895px;
  width: 152.8848876953125px;
  height: 38.70503616333008px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: flex-end;
}

.nfts-do-usuario-text22 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 5px;
  text-decoration: none;
}

.nfts-do-usuario-text24 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Light;
  text-align: left;
  font-family: Sora;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-nft3 {
  width: 269px;
  height: 269px;
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
  margin-right: 41px;
  border-radius: 16px 16px 16px 16px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(217, 217, 217, 1);
    box-shadow: 20px 15px 30px #888888;
}

.nfts-do-usuario-image312 {
  top: 0px;
  left: 0px;
  width: 269px;
  height: 269px;
  position: absolute;
  border-color: transparent;
  border-radius: 16px 16px 16px 16px;
}

.nfts-do-usuario-transparncia2 {
  top: 174.17266845703125px;
  left: 0px;
  width: 269px;
  height: 95px;
  position: absolute;
  border-color: transparent;
  border-radius: 0 0 16px 16px;
}

.nfts-do-usuario-descrio2 {
  top: 212.87770080566406px;
  left: 15.482014656066895px;
  width: 136.4352569580078px;
  height: 38.70503616333008px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}

.nfts-do-usuario-text26 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 5px;
  text-decoration: none;
}

.nfts-do-usuario-text28 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Light;
  text-align: left;
  font-family: Sora;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-nft4 {
  width: 269px;
  height: 269px;
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
  margin-right: 0;
  border-radius: 16px 16px 16px 16px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(217, 217, 217, 1);
    box-shadow: 20px 15px 30px #888888;
}

.nfts-do-usuario-image313 {
  top: 0px;
  left: 0px;
  width: 269px;
  height: 269px;
  position: absolute;
  border-radius: 16px 16px 16px 16px;
}

.nfts-do-usuario-transparncia3 {
  top: 174.17266845703125px;
  left: 0px;
  width: 269px;
  height: 95px;
  position: absolute;
  border-color: transparent;
  border-radius: 0 0 16px 16px;
}

.nfts-do-usuario-descrio3 {
  top: 212.87770080566406px;
  left: 15.482014656066895px;
  width: 54.187049865722656px;
  height: 38.70503616333008px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  flex-direction: column;
  justify-content: center;
}

.nfts-do-usuario-text30 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 5px;
  text-decoration: none;
}

.nfts-do-usuario-text32 {
  color: rgba(255, 255, 255, 1);
  height: auto;
  font-size: 12px;
  align-self: auto;
  font-style: Light;
  text-align: left;
  font-family: Sora;
  font-weight: 300;
  line-height: normal;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}

.nfts-do-usuario-text34 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 16px;
  align-self: flex-start;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

@media(max-width: 1200px) {
  .nfts-do-usuario-container1 {
    height: 998px;
  }

    .nfts-do-usuario-menu {
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      position: static;
      flex-wrap: wrap;
      margin-top: 0px;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
    }

  .nfts-do-usuario-boto {
    flex-direction: row;
  }

  .nfts-do-usuario-pesquisa {
    flex-direction: column;
  }

  .nfts-do-usuario-ajustarnfts {
    align-items: center;
    justify-content: center;
  }
}

@media(max-width: 991px) {
  .nfts-do-usuario-nftss {
    gap: var(--dl-space-space-twounits);
    align-items: center;
    justify-content: center;
  }
}
</style>



