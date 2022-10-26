<template>
    <div>
<app-header rootClassName="header-root-class-name"></app-header>
        <div class="agora-a-gente-container1">
            <img alt="clock4023" src="/playground_assets/relogio1.png" class="agora-a-gente-clock" />
            <div class="agora-a-gente-agorae">
                <span class="agora-a-gente-text"><span>A análise dos seus NFTs foi iniciada</span></span>
                <span class="agora-a-gente-text2">
                    <span>
                        Começamos a trabalhar na identificação dos plágios dos seus NFTs. Nos próximos dias estaremos analisando todas as
                        transações realizadas no OpenSea.
                    </span>
                </span>
                <span class="agora-a-gente-text4">
                    <span>
                        Iremos te retornar no e-mail <span style="color:#FF5B28;">mikkel@gmail.com</span> o mais breve possível.
                    </span>
                </span>
                <span class="agora-a-gente-text4">
                    <br></br>
                    <span style="color:#14A3CF;">
                        Editar e-mail
                    </span>
                </span>
            </div>
        </div>
<app-footer rootClassName="footer-root-class-name"></app-footer>
    </div>
</template>

<script>
import AppHeader from '../components/header'
import AppFooter from '../components/footer'

export default {
    name: 'AnaliseIniciada',
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
        title: 'Vidi | Análise Iniciada',
    },
}
</script>


<style scoped>
.agora-a-gente-container1 {
    width: 100%;
    height: 550px;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: flex-start;
    flex-shrink: 0;
    border-color: transparent;
    background-color: #FAFAFA;
}

.agora-a-gente-clock {
    top: 0px;
    right: 0px;
    width: auto;
    bottom: 0px;
    height: auto;
    position: absolute;
    margin-top: auto;
    margin-left: auto;
    margin-right: 120px;
    margin-bottom: auto;
}

.agora-a-gente-agorae {
    top: 0px;
    left: 0px;
    width: 536px;
    bottom: 0px;
    height: 284px;
    display: flex;
    position: absolute;
    margin-top: auto;
    align-items: flex-start;
    flex-shrink: 0;
    margin-left: 120px;
    border-color: transparent;
    margin-right: auto;
    margin-bottom: auto;
    flex-direction: column;
}

.agora-a-gente-text {
    color: var(--dl-color-default-preto);
    height: auto;
    font-size: 30px;
    align-self: stretch;
    font-style: SemiBold;
    text-align: left;
    font-family: Sora;
    font-weight: 600;
    line-height: normal;
    font-stretch: normal;
    margin-right: 0;
    margin-bottom: 48px;
    text-decoration: none;
}

.agora-a-gente-text2 {
    color: var(--dl-color-default-cinzaescuro);
    height: auto;
    font-size: 18px;
    align-self: stretch;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    margin-right: 0;
    margin-bottom: 24px;
    text-decoration: none;
}

.agora-a-gente-text4 {
    color: var(--dl-color-default-cinzaescuro);
    height: auto;
    font-size: 18px;
    align-self: stretch;
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

@media(max-width: 1200px) {
    .agora-a-gente-container1 {
        height: 501px;
    }

    .agora-a-gente-clock {
        top: 0px;
        right: 50px;
        width: auto;
        bottom: 0px;
        height: auto;
        margin: auto;
        position: absolute;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
    }

    .agora-a-gente-agorae {
        top: 0px;
        left: 140px;
        bottom: 0px;
        margin: auto;
        margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        flex-direction: column;
    }
}
</style>
