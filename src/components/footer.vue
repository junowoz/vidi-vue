<template>
  <footer class="footer-footer" v-bind:class="rootClassName">
    <div class="footer-topfooter">
      <div class="footer-logo">
        <router-link :to="{ path: '/'}"><img alt="logo1_alt" src="/playground_assets/logologo.png" class="footer-logo1" /></router-link>
        <span class="footer-text">
          <span>Proteja seus NFTs</span>
          <br />
          <span>de serem plagiados</span>
        </span>
      </div>
      <div class="footer-links">
        <div class="footer-container">
          <div class="footer-faleconosco">
            <span class="footer-text04"><span>Fale conosco</span></span>
            <span class="footer-text06"><span>Contato</span></span>
            <span class="footer-text08"><span>Blog</span></span>
          </div>
          <div class="footer-transparencia">
            <span class="footer-text10"><span>Transparência</span></span>
            <span class="footer-text12"><span>Termos de uso</span></span>
            <span class="footer-text14">
              <span>Política de privacidade</span>
            </span>
          </div>
          <div class="footer-contact">
            <span class="footer-text16"><span>Se junte à comunidade</span></span>
            <div class="footer-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" class="footer-icon">
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path></svg
              ><svg viewBox="0 0 877.7142857142857 1024" class="footer-icon2">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path></svg
              ><svg viewBox="0 0 602.2582857142856 1024" class="footer-icon4">
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-separator"></div>
    <span class="footer-direitos">{{ direitos }}</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    logo1_src: {
      type: String,
      default: '/playground_assets/logo14027-zkrh-200h.png',
    },
    logo1_alt: {
      type: String,
      default: 'logo14027',
    },
    rootClassName: String,
    direitos: {
      type: String,
      default: '2022 © Todos os direitos reservados. Vidi.',
    },
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 100%;
  align-self: flex-end;
  align-items: center;
  padding-top: 40px;
  padding-left: 120px;
  padding-right: 120px;
  flex-direction: column;
  padding-bottom: 40px;
  justify-content: center;
  background-color: #FAFAFA;
}
.footer-topfooter {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.footer-logo {
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  flex-direction: column;
}
.footer-logo1 {
  width: 81px;
  height: 40px;
  position: relative;
  border-color: transparent;
  margin-bottom: 48px;
}
.footer-text {
  color: var(--dl-color-default-preto);
  width: 230px;
  height: auto;
  font-size: 20px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.footer-links {
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.footer-container {
  display: flex;
  align-self: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 120px;
  flex-direction: row;
  justify-content: space-between;
}
.footer-faleconosco {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-right: 10rem;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-text04 {
  color: rgba(33, 37, 41, 1);
  height: auto;
  font-size: 18px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 27px;
  text-decoration: none;
}
.footer-text06 {
  color: rgba(100, 100, 100, 1);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 12px;
  text-decoration: none;
}
.footer-text08 {
  color: rgba(100, 100, 100, 1);
  height: auto;
  font-size: 16px;
  align-self: auto;
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
.footer-transparencia {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-right: 10rem;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-text10 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 18px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 27px;
  text-decoration: none;
}
.footer-text12 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  font-size: 16px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 12px;
  text-decoration: none;
}
.footer-text14 {
  color: var(--dl-color-default-cinzaescuro);
  height: auto;
  font-size: 16px;
  align-self: auto;
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
.footer-contact {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0px;
  flex-direction: column;
}
.footer-text16 {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 18px;
  align-self: auto;
  font-style: SemiBold;
  text-align: left;
  font-family: Sora;
  font-weight: 600;
  line-height: 150%;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 27px;
  text-decoration: none;
}
.footer-icon-group {
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.footer-icon {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-unit);
}
.footer-icon2 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-unit);
}
.footer-icon4 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.footer-redes {
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-socials {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.footer-separator {
  width: 100%;
  height: 1px;
  margin-top: var(--dl-space-space-twounits);
  margin-bottom: var(--dl-space-space-twounits);
  background-color: #F2F2F2;
}
.footer-direitos {
  color: var(--dl-color-default-preto);
  height: auto;
  font-size: 16px;
  align-self: center;
  font-style: Regular;
  text-align: left;
  font-family: Sora;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.footer-root-class-name1 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.footer-root-class-name2 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.footer-root-class-name3 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.footer-root-class-name4 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.footer-root-class-name5 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.footer-root-class-name6 {
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
}

@media(max-width: 1200px) {
  .footer-links {
    flex-direction: column;
  }
  .footer-container {
    align-self: center;
  }
  .footer-contact {
    align-self: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
  .footer-redes {
    position: relative;
  }
  .footer-separator {
    background-color: #F2F2F2;
  }
  .footer-direitos {
    text-align: center;
  }
}
@media(max-width: 991px) {
  .footer-footer {
    flex-direction: column;
  }
  .footer-container {
    margin-right: var(--dl-space-space-fourunits);
  }
  .footer-faleconosco {
    margin-right: var(--dl-space-space-fourunits);
  }
}
@media(max-width: 767px) {
  .footer-footer {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .footer-topfooter {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer-logo {
    align-items: center;
  }
  .footer-links {
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .footer-container {
    margin-right: var(--dl-space-space-fourunits);
  }
  .footer-faleconosco {
    margin-right: var(--dl-space-space-fourunits);
  }
}
@media(max-width: 479px) {
  .footer-footer {
    padding: var(--dl-space-space-unit);
  }
  .footer-topfooter {
    align-items: center;
    flex-direction: column;
  }
  .footer-links {
    align-items: center;
    flex-direction: column;
  }
  .footer-container {
    margin-right: 0px;
  }
  .footer-contact {
    align-items: flex-start;
    margin-bottom: var(--dl-space-space-unit);
  }
  .footer-redes {
    margin-top: var(--dl-space-space-oneandhalfunits);
    align-items: flex-start;
    margin-bottom: 0px;
  }
}
</style>
