<template>
    <div>
        <div class="quest-container1">
            <div class="quest-top">
                <img alt="voltar5741" src="/playground_assets/voltar.png" class="quest-voltar" />
                <div class="quest-voltarnumeros">
                    <div class="quest-etapasnumeros">
                        <div class="quest-frame1">
                            <img alt="Ellipse155741" src="/playground_assets/bola1.png"
                                class="quest-ellipse15" />
                            <span class="quest-text">1</span>
                        </div>
                        <div class="quest-frame2">
                            <img alt="Ellipse155741" src="/playground_assets/bola1.png"
                                class="quest-ellipse151" />
                            <span class="quest-text01">2</span>
                        </div>
                        <div class="quest-frame3">
                            <img alt="Ellipse155741" src="/playground_assets/bola1.png"
                                class="quest-ellipse152" />
                            <span class="quest-text02">3</span>
                        </div>
                    </div>
                </div>
                <div class="quest-fechar">
                    <span class="quest-text03"><span>Fechar</span></span>
                </div>
            </div>
            <div class="quest-bloco">
                <span class="quest-text05">
                    <span>Fala pra gente seus dados pessoais?</span>
                </span>
                <div class="quest-frame136">
                    <div class="quest-frame135">
                        <div class="quest-frame141">
                            <span class="quest-text07"><span>Seu nome</span></span>
                            <div class="quest-pesquisa"></div>
                        </div>
                        <div class="quest-frame142">
                            <span class="quest-text09"><span>Seu e-mail</span></span>
                            <div class="quest-pesquisa1"></div>
                        </div>
                    </div>

                    <router-link :to="{ name: 'Quest2'}">
                    <div class="quest-boto">
                        <span class="quest-text11"><span>Continuar</span></span>
                    </div>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quest',
    props: {},
}
</script>

<style scoped>
.quest-container1 {
    width: 100%;
    height: 1024px;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: flex-start;
    flex-shrink: 0;
    border-color: transparent;
    background-color: var(--dl-color-default-fundotela);
}

.quest-top {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 500px;
    height: 34px;
    display: flex;
    position: absolute;
    margin-top: 164px;
    align-items: center;
    margin-left: auto;
    border-color: transparent;
    margin-right: auto;
    margin-bottom: auto;
    justify-content: center;
}

.quest-voltar {
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;
    position: absolute;
}

.quest-voltarnumeros {
    left: 0px;
    right: 0px;
    width: auto;
    margin: auto;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
    justify-content: center;
}

.quest-etapasnumeros {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
}

.quest-frame1 {
    width: 32px;
    height: 32px;
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
    border-radius: 0px 0px 0px 0px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.quest-ellipse15 {
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;
    position: absolute;
    border-color: transparent;
}

.quest-text {
    top: 4.0000433921813965px;
    left: 12.23828125px;
    color: var(--dl-color-default-branco);
    width: 9px;
    height: auto;
    position: absolute;
    font-size: 18px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
}

.quest-frame2 {
    width: 32px;
    height: 32px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: 32px;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 32px;
    border-radius: 0px 0px 0px 0px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.quest-ellipse151 {
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;
    opacity: 0.15;
    position: absolute;
    border-color: transparent;
}

.quest-text01 {
    top: 4.0000433921813965px;
    left: 10px;
    color: #14A3CF;
    height: auto;
    position: absolute;
    font-size: 18px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
}

.quest-frame3 {
    width: 32px;
    height: 32px;
    display: flex;
    position: relative;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 0px;
    border-radius: 0px 0px 0px 0px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.quest-ellipse152 {
    top: 0px;
    left: 0px;
    width: 32px;
    height: 32px;
    opacity: 0.15;
    position: absolute;
    border-color: transparent;
}

.quest-text02 {
    top: 4.0000433921813965px;
    left: 10px;
    color: #14A3CF;
    height: auto;
    position: absolute;
    font-size: 18px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
}

.quest-fechar {
    right: 0px;
    width: auto;
    height: 100%;
    display: flex;
    position: absolute;
    align-self: center;
    align-items: center;
    border-color: transparent;
    justify-content: flex-start;
}

.quest-text03 {
    color: var(--dl-color-default-cinzaclaro);
    height: auto;
    font-size: 14px;
    align-self: center;
    font-style: SemiBold;
    text-align: center;
    font-family: Sora;
    font-weight: 600;
    line-height: normal;
    font-stretch: normal;
    margin-right: 0;
    margin-bottom: 0;
    text-decoration: none;
}

.quest-bloco {
    top: 318px;
    left: 0px;
    right: 0px;
    width: 517px;
    margin: auto;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
    flex-direction: column;
    justify-content: center;
}

.quest-text05 {
    color: var(--dl-color-default-preto);
    height: auto;
    font-size: 28px;
    align-self: auto;
    font-style: SemiBold;
    text-align: left;
    font-family: Sora;
    font-weight: 600;
    line-height: normal;
    font-stretch: normal;
    margin-right: 0;
    margin-bottom: 64px;
    text-decoration: none;
}

.quest-frame136 {
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
    flex-direction: column;
}

.quest-frame135 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    margin-bottom: 88px;
    flex-direction: column;
}

.quest-frame141 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    margin-bottom: 64px;
    flex-direction: column;
}

.quest-text07 {
    color: rgba(33, 37, 41, 1);
    width: 193px;
    height: auto;
    font-size: 18px;
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

.quest-pesquisa {
    width: 488px;
    height: 48px;
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
    margin-right: 0;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1);
}

.quest-frame142 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    flex-direction: column;
}

.quest-text09 {
    color: var(--dl-color-default-preto);
    height: auto;
    font-size: 18px;
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

.quest-pesquisa1 {
    width: 488px;
    height: 48px;
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
    margin-right: 0;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 1);
}

.quest-boto {
    width: 277px;
    height: 48px;
    display: flex;
    padding: 14px 24px;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    border-radius: 8px;
    background-color: var(--dl-color-default-laranja);
}

.quest-text11 {
    top: 12px;
    left: 91.5px;
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
</style>
