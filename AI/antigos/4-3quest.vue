<template>
    <div>
        <div class="quest-container1">
            <div class="quest-top">

                <router-link :to="{ name: 'Quest2'}">
                <img alt="voltar5741" src="/playground_assets/voltar.png" class="quest-voltar" />
                </router-link>


                <div class="quest-voltarnumeros">
                    <div class="quest-etapasnumeros">
                        <div class="quest-frame1">
                            <img alt="Ellipse155741" src="/playground_assets/check.png"
                                class="quest-ellipse15" />
                            <span class="quest-text"></span>
                        </div>
                        <div class="quest-frame2">
                            <img alt="Ellipse155741" src="/playground_assets/check.png"
                                class="quest-ellipse151" />
                            <span class="quest-text01"></span>
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
                <span class="quest-text05"><span>E sobre os seus NFTs?</span></span>
                <div class="quest-frame136">
                    <div class="quest-frame135">
                        <div class="quest-frame141">
                            <span class="quest-text07">
                                <span>Quais os preços da sua coleção?</span>
                            </span>
                            <div class="quest-frame146">
                                <div class="quest-moeda">
                                    <div class="quest-frame143">
                                        <span class="quest-text09"><span>ETH</span></span>
                                        <img alt="chevrondown5741" src="/playground_assets/setabaixo.png"
                                            class="quest-chevrondown" />
                                    </div>
                                </div>
                                <div class="quest-min">
                                    <div class="quest-frame1431">
                                        <span class="quest-text11"><span>Min</span></span>
                                    </div>
                                </div>
                                <div class="quest-max">
                                    <div class="quest-frame1432">
                                        <span class="quest-text13"><span>Max</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="quest-frame1433">
                            <span class="quest-text15">
                                <span>Qual o volume da sua coleção?</span>
                            </span>
                            <div class="quest-frame1461">
                                <div class="quest-min1"></div>
                            </div>
                        </div>
                    </div>

                    <router-link :to="{ name: 'AgoraAGente'}">
                    <div class="quest-boto">
                        <span class="quest-text17"><span>Finalizar</span></span>
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
    position: absolute;
    border-color: transparent;
}

.quest-text01 {
    top: 4.0000433921813965px;
    left: 10px;
    color: var(--dl-color-default-azulcorsecundria);
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
    position: absolute;
    border-color: transparent;
}

.quest-text02 {
    top: 4.0000433921813965px;
    left: 10px;
    color: white;
    height: auto;
    position: absolute;
    font-size: 18px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 600;
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
    width: 311px;
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
    text-align: center;
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

.quest-frame146 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
}

.quest-moeda {
    display: flex;
    padding: 12px 16px;
    position: relative;
    align-items: flex-start;
    border-color: rgba(204, 204, 204, 1);
    border-style: solid;
    border-width: 1px;
    margin-right: 16px;
    border-radius: 8px;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
}

.quest-frame143 {
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
}

.quest-text09 {
    color: var(--dl-color-default-preto);
    height: auto;
    font-size: 16px;
    align-self: auto;
    font-style: SemiBold;
    text-align: left;
    font-family: Sora;
    font-weight: 600;
    line-height: normal;
    font-stretch: normal;
    margin-right: 10px;
    margin-bottom: 0;
    text-decoration: none;
}

.quest-chevrondown {
    width: 24px;
    height: 24px;
    position: relative;
}

.quest-min {
    width: 80px;
    height: 48px;
    display: flex;
    padding: 12px 16px;
    position: relative;
    align-items: flex-start;
    border-color: rgba(204, 204, 204, 1);
    border-style: solid;
    border-width: 1px;
    margin-right: 16px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
}

.quest-frame1431 {
    top: 14px;
    left: 21.5px;
    width: 31px;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
}

.quest-text11 {
    color: var(--dl-color-default-cinzamdio);
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
    margin-bottom: 0;
    text-decoration: none;
}

.quest-max {
    width: 80px;
    height: 48px;
    display: flex;
    padding: 12px 16px;
    position: relative;
    align-items: flex-start;
    border-color: rgba(204, 204, 204, 1);
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
}

.quest-frame1432 {
    top: 14px;
    left: 21.5px;
    width: 35px;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
}

.quest-text13 {
    color: var(--dl-color-default-cinzamdio);
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
    margin-bottom: 0;
    text-decoration: none;
}

.quest-frame1433 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    flex-direction: column;
}

.quest-text15 {
    color: rgba(33, 37, 41, 1);
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

.quest-frame1461 {
    width: 291px;
    display: flex;
    position: relative;
    align-items: flex-start;
    flex-shrink: 0;
    border-color: transparent;
}

.quest-min1 {
    width: 291px;
    height: 48px;
    display: flex;
    padding: 12px 16px;
    position: relative;
    align-items: flex-start;
    border-color: rgba(204, 204, 204, 1);
    border-style: solid;
    border-width: 1px;
    margin-right: 16px;
    border-radius: 8px;
    background-color: var(--dl-color-default-branco);
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

.quest-text17 {
    top: 12px;
    left: 100px;
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
