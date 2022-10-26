<template>
    <div>
        <div class="dashboardtodos-container1">
            <div class="dashboardtodos-header">
                <div class="dashboardtodos-pesquisa">
                    <div class="dashboardtodos-pessquisa">
                        <img alt="search3963" src="/playground_assets/search.png"
                            class="dashboardtodos-search" />
                        <span class="dashboardtodos-text">
                            <span>Procure por NFTs, informaçoes dos processos</span>
                        </span>
                    </div>
                </div>

                <router-link :to="{ name: 'Perfil'}">
                <div class="dashboardtodos-campainha">
                    <img alt="bell3963" src="/playground_assets/bell.png" class="dashboardtodos-bell" />
                </div>
                </router-link>

                <div class="dashboardtodos-pp">
                    <img alt="image563963" src="/playground_assets/profile.png"
                        class="dashboardtodos-image56" />
                </div>
            </div>
            <div class="dashboardtodos-sidebar">

                <router-link :to="{ name: 'Landingpage'}">
                <div class="dashboardtodos-logo">
                    <img alt="image" src="/playground_assets/logologo.png" class="dashboardtodos-image" />
                </div>
                </router-link>

                <div class="dashboardtodos-line"></div>
                <div class="dashboardtodos-abas">
                    <div class="dashboardtodos-todososnfts">
                        <div class="dashboardtodos-todosnfts">
                            <img alt="grid3963" src="/playground_assets/orangegrid.png"
                                class="dashboardtodos-grid" />
                            <span class="dashboardtodos-text02">
                                <span>Todos os NFTs</span>
                            </span>
                        </div>
                        <img alt="Rectangle1183963" src="/playground_assets/rectangle.png"
                            class="dashboardtodos-rectangle118" />
                        <div class="dashboardtodos-base"></div>
                    </div>

                    <router-link :to="{ name: 'Plagiados' }">
                    <div class="dashboardtodos-nftsplagiados">
                        <div class="dashboardtodos-word">
                            <img alt="alerttriangle3963" src="/playground_assets/alert.png"
                                class="dashboardtodos-alerttriangle" />
                            <span class="dashboardtodos-text04">
                                <span>NFTs plagiados</span>
                            </span>
                        </div>
                    </div>
                    </router-link>

                    <router-link :to="{ name: 'Processos'}">
                    <div class="dashboardtodos-processos">
                        <div class="dashboardtodos-processos1">
                            <div class="dashboardtodos-processsos">
                                <img alt="octiconlaw243963" src="/playground_assets/law2.png"
                                    class="dashboardtodos-octiconlaw24" />
                                <span class="dashboardtodos-text06"><span>Processos</span></span>
                            </div>
                        </div>
                    </div>
                    </router-link>

                </div>
                <div class="dashboardtodos-filtrocarteiras">
                    <div class="dashboardtodos-ini">
                        <div class="dashboardtodos-group95">
                            <div class="dashboardtodos-frame98">
                                <img alt="fluentwallet32regular3963"
                                    src="/playground_assets/wallet.png"
                                    class="dashboardtodos-fluentwallet32regular" />
                                <span class="dashboardtodos-text08"><span>Carteiras</span></span>
                            </div>
                        </div>
                        <img alt="chevrondown3963" src="/playground_assets/setabaixo2.png"
                            class="dashboardtodos-chevrondown" />
                    </div>
                    <div class="dashboardtodos-carteiras">
                        <div class="dashboardtodos-metamask">
                            <span class="dashboardtodos-text10"><span>Metamask</span></span>
                            <div class="dashboardtodos-select">
                                <div class="dashboardtodos-selecionado">
                                    <img alt="Vector23963" src="/playground_assets/check1.png"
                                        class="dashboardtodos-vector2" />
                                </div>
                            </div>
                        </div>
                        <div class="dashboardtodos-coinbase">
                            <span class="dashboardtodos-text12">CoinbaseWallet</span>
                            <div class="dashboardtodos-select1">
                                <div class="dashboardtodos-selecionado1">

                                </div>
                            </div>
                        </div>
                        <div class="dashboardtodos-rainbow">
                            <span class="dashboardtodos-text13">Rainbow</span>
                            <div class="dashboardtodos-select2">
                                <div class="dashboardtodos-selecionado2">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboardtodos-edit">
                        <div class="dashboardtodos-plus">
                            <img alt="plus3963" src="/playground_assets/plus1.png"
                                class="dashboardtodos-plus1" />
                        </div>
                        <span class="dashboardtodos-text14"><span>Editar</span></span>
                    </div>
                </div>
                <div class="dashboardtodos-line1"></div>
                <div class="dashboardtodos-configuracoes">
                    <div class="dashboardtodos-settings">
                        <img alt="settings3963" src="/playground_assets/settings.png"
                            class="dashboardtodos-settings1" />
                        <span class="dashboardtodos-text16"><span>Configurações</span></span>
                    </div>

                    <router-link :to="{ name: 'Landingpage'}">
                    <div class="dashboardtodos-sair">
                        <img alt="logout3963" src="/playground_assets/sair.png"
                            class="dashboardtodos-logout" />
                        <span class="dashboardtodos-text18"><span>Sair</span></span>
                    </div>
                    </router-link>

                </div>
            </div>
            <div class="dashboardtodos-line2"></div>
            <div class="dashboardtodos-rowmid">
                <div class="dashboardtodos-filtross">
                    <div class="dashboardtodos-framefiltros">
                        <span class="dashboardtodos-text20"><span>Filtros</span></span>
                        <img alt="sliders3963" src="/playground_assets/filtros.png"
                            class="dashboardtodos-sliders" />
                    </div>
                </div>
                <div class="dashboardtodos-filtros2">
                    <div class="dashboardtodos-framefiltros1">
                        <img alt="sliders3963" src="/playground_assets/square1.png"
                            class="dashboardtodos-sliders1" />
                    </div>
                    <div class="dashboardtodos-framefiltros2">
                        <img alt="sliders3963" src="/playground_assets/square2.png"
                            class="dashboardtodos-sliders2" />
                    </div>
                </div>
                <span class="dashboardtodos-text22">NFTs das carterias conectadas</span>
                <div class="dashboardtodos-filtrosselecionados">
                    <div class="dashboardtodos-metaa">
                        <div class="dashboardtodos-frame103">
                            <span class="dashboardtodos-text23"><span>Metamask</span></span>
                            <img alt="plus5043" src="/playground_assets/plus.png"
                                class="dashboardtodos-plus2" />
                        </div>
                    </div>
                    <span class="dashboardtodos-text25"><span>Limpar</span></span>
                </div>
                <span class="dashboardtodos-text27">12 itens</span>
            </div>
            <div class="dashboardtodos-frame101">
                <div class="dashboardtodos-linha1nft">
                    <div class="dashboardtodos-nft1">
                        <img alt="image313963" src="/playground_assets/nft1.png"
                            class="dashboardtodos-image31" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia" />
                        <div class="dashboardtodos-descrio">
                            <span class="dashboardtodos-text28"><span>ETERNALS XYZ</span></span>
                            <span class="dashboardtodos-text30"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft2">
                        <img alt="image313963" src="/playground_assets/nft2.png"
                            class="dashboardtodos-image3101" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia01" />
                        <div class="dashboardtodos-descrio01">
                            <span class="dashboardtodos-text32">
                                <span>Crypto Bull Society</span>
                            </span>
                            <span class="dashboardtodos-text34"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft3">
                        <img alt="image313963" src="/playground_assets/nft3.png"
                            class="dashboardtodos-image3102" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia02" />
                        <div class="dashboardtodos-descrio02">
                            <span class="dashboardtodos-text36">
                                <span>Astrobot Society</span>
                            </span>
                            <span class="dashboardtodos-text38"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft4">
                        <img alt="image313963" src="/playground_assets/nft4.png"
                            class="dashboardtodos-image3103" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia03" />
                        <div class="dashboardtodos-descrio03">
                            <span class="dashboardtodos-text40"><span>Aurory</span></span>
                            <span class="dashboardtodos-text42"><span>#2354</span></span>
                        </div>
                    </div>
                </div>
                <div class="dashboardtodos-linha1nft1">
                    <div class="dashboardtodos-nft11">
                        <img alt="image313963" src="/playground_assets/nft5.png"
                            class="dashboardtodos-image3104" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia04" />
                        <div class="dashboardtodos-descrio04">
                            <span class="dashboardtodos-text44"><span>ETERNALS XYZ</span></span>
                            <span class="dashboardtodos-text46"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft21">
                        <img alt="image313963" src="/playground_assets/nft6.png"
                            class="dashboardtodos-image3105" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia05" />
                        <div class="dashboardtodos-descrio05">
                            <span class="dashboardtodos-text48">
                                <span>Crypto Bull Society</span>
                            </span>
                            <span class="dashboardtodos-text50"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft31">
                        <img alt="image313963" src="/playground_assets/nft7.png"
                            class="dashboardtodos-image3106" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia06" />
                        <div class="dashboardtodos-descrio06">
                            <span class="dashboardtodos-text52">
                                <span>Astrobot Society</span>
                            </span>
                            <span class="dashboardtodos-text54"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft41">
                        <img alt="image313963" src="/playground_assets/nft8.png"
                            class="dashboardtodos-image3107" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia07" />
                        <div class="dashboardtodos-descrio07">
                            <span class="dashboardtodos-text56"><span>Aurory</span></span>
                            <span class="dashboardtodos-text58"><span>#2354</span></span>
                        </div>
                    </div>
                </div>
                <div class="dashboardtodos-linha1nft2">
                    <div class="dashboardtodos-nft12">
                        <img alt="image313963" src="/playground_assets/nft9.png"
                            class="dashboardtodos-image3108" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia08" />
                        <div class="dashboardtodos-descrio08">
                            <span class="dashboardtodos-text60"><span>ETERNALS XYZ</span></span>
                            <span class="dashboardtodos-text62"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft22">
                        <img alt="image313963" src="/playground_assets/nft10.png"
                            class="dashboardtodos-image3109" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia09" />
                        <div class="dashboardtodos-descrio09">
                            <span class="dashboardtodos-text64">
                                <span>Crypto Bull Society</span>
                            </span>
                            <span class="dashboardtodos-text66"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft32">
                        <img alt="image313963" src="/playground_assets/nft11.png"
                            class="dashboardtodos-image3110" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia10" />
                        <div class="dashboardtodos-descrio10">
                            <span class="dashboardtodos-text68">
                                <span>Astrobot Society</span>
                            </span>
                            <span class="dashboardtodos-text70"><span>#2354</span></span>
                        </div>
                    </div>
                    <div class="dashboardtodos-nft42">
                        <img alt="image313963" src="/playground_assets/nft12.png"
                            class="dashboardtodos-image3111" />
                        <img alt="transparncia3963" src="/playground_assets/sombra.png"
                            class="dashboardtodos-transparncia11" />
                        <div class="dashboardtodos-descrio11">
                            <span class="dashboardtodos-text72"><span>Aurory</span></span>
                            <span class="dashboardtodos-text74"><span>#2354</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Todos',
    props: {},

    metaInfo: {
        title: 'Vidi | Todos os NFTs',
    },
}
</script>

<style scoped>
.dashboardtodos-container1 {
    width: 100%;
    height: 1184px;
    display: flex;
    overflow: hidden;
    position: relative;
    align-items: flex-start;
    flex-shrink: 0;
    border-color: transparent;
    background-color: #FAFAFA;
}

.dashboardtodos-header {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 122px;
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

.dashboardtodos-pesquisa {
    top: 0px;
    left: 0px;
    width: 488px;
    bottom: 0px;
    height: 40px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    margin-top: auto;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: 280px;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
    margin-right: auto;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: auto;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.dashboardtodos-pessquisa {
    top: 10px;
    left: 18px;
    width: 338px;
    height: 20px;
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

.dashboardtodos-search {
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    position: absolute;
}

.dashboardtodos-text {
    top: 2px;
    left: 32px;
    color: var(--dl-color-default-cinzamdio);
    height: auto;
    position: absolute;
    font-size: 14px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Inter;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
}

.dashboardtodos-campainha {
    top: 0px;
    right: 0px;
    width: 40px;
    bottom: 0px;
    height: 40px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    margin-top: auto;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: auto;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
    margin-right: 102px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: auto;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.dashboardtodos-bell {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 24px;
    bottom: 0px;
    height: 24px;
    margin: auto;
    position: absolute;
    align-self: center;
}

.dashboardtodos-pp {
    top: 0px;
    right: 0px;
    width: 40px;
    bottom: 0px;
    height: 40px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    margin-top: auto;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: auto;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 32px;
    border-radius: var(--dl-radius-radius-radius8);
    margin-bottom: auto;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image56 {
    top: 0px;
    right: 0px;
    width: auto;
    bottom: 0px;
    height: auto;
    position: absolute;
    border-radius: var(--dl-radius-radius-radius8);
}

.dashboardtodos-sidebar {
    flex: 0 0 auto;
    width: 240px;
    height: 100%;
    display: flex;
    z-index: 100;
    position: relative;
    align-items: flex-start;
    flex-direction: column;
    background-color: #FFFFFF;
}

.dashboardtodos-logo {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 97px;
    bottom: 0px;
    height: 48px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    margin-top: 40px;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: auto;
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

.dashboardtodos-image {
    width: 100px;
    object-fit: cover;
}

.dashboardtodos-line {
    flex: 0;
    left: 0px;
    right: 0px;
    width: 176px;
    bottom: 0px;
    height: 1px;
    display: flex;
    position: absolute;
    margin-top: auto;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 650px;
    background-color: #F2F2F2;
}

.dashboardtodos-abas {
    left: 0px;
    right: 0px;
    width: 100%;
    bottom: 750px;
    height: 186px;
    display: flex;
    position: absolute;
    align-self: center;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
}

.dashboardtodos-todososnfts {
    top: 0px;
    left: 0px;
    width: 240px;
    height: 62px;
    margin: auto;
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
}

.dashboardtodos-todosnfts {
    top: 0px;
    left: 0px;
    bottom: 0px;
    display: flex;
    position: absolute;
    margin-top: auto;
    align-items: center;
    margin-left: 32px;
    border-color: transparent;
    margin-right: auto;
    margin-bottom: auto;
    justify-content: center;
}

.dashboardtodos-grid {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
}

.dashboardtodos-text02 {
    color: #FF5B27;
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

.dashboardtodos-rectangle118 {
    top: 0px;
    left: 0px;
    width: 10px;
    height: 62px;
    opacity: 1;
    position: absolute;
    border-color: transparent;
}

.dashboardtodos-base {
    top: 0px;
    left: 0px;
    width: 240px;
    border: 2px dashed rgba(120, 120, 120, 0.4);
    height: 62px;
    display: flex;
    opacity: 0.1;
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
    background-color: rgba(255, 91, 39, 1);
}

.dashboardtodos-nftsplagiados {
    top: 0px;
    left: 0px;
    width: 240px;
    bottom: 0px;
    height: 62px;
    margin: auto;
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
}

.dashboardtodos-word {
    top: 19px;
    left: 32px;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
    justify-content: center;
}

.dashboardtodos-alerttriangle {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
}

.dashboardtodos-text04 {
    color: #000000;
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

.dashboardtodos-processos {
    left: 0px;
    width: 240px;
    bottom: 0px;
    height: 62px;
    margin: auto;
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
}

.dashboardtodos-processos1 {
    top: 0px;
    width: 129px;
    bottom: 0px;
    height: 24px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    margin-top: auto;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: 32px;
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

.dashboardtodos-processsos {
    top: 0px;
    left: 0px;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
    justify-content: center;
}

.dashboardtodos-octiconlaw24 {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
}

.dashboardtodos-text06 {
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
    margin-right: 0;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-filtrocarteiras {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 176px;
    bottom: 0px;
    height: 201px;
    display: flex;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    margin-top: auto;
    align-items: flex-start;
    flex-shrink: 1;
    margin-left: auto;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: auto;
    border-radius: 0px 0px 0px 0px;
    margin-bottom: 400px;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.dashboardtodos-ini {
    top: 0px;
    left: 0px;
    width: 176px;
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

.dashboardtodos-group95 {
    top: 0px;
    left: 0px;
    width: 120px;
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

.dashboardtodos-frame98 {
    top: 0px;
    left: 0px;
    display: flex;
    position: absolute;
    align-items: center;
    border-color: transparent;
    justify-content: center;
}

.dashboardtodos-fluentwallet32regular {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
}

.dashboardtodos-text08 {
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
    margin-right: 0;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-chevrondown {
    top: 0px;
    left: 152px;
    width: 24px;
    height: 24px;
    position: absolute;
}

.dashboardtodos-carteiras {
    top: 43px;
    left: 0px;
    width: 100%;
    display: flex;
    position: absolute;
    align-items: flex-start;
    border-color: transparent;
    flex-direction: column;
}

.dashboardtodos-metamask {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
    margin-bottom: 20px;
    justify-content: flex-start;
}

.dashboardtodos-text10 {
    color: var(--dl-color-default-cinzaescuro);
    height: auto;
    font-size: 14px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    margin-right: 87px;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-select {
    top: 0px;
    right: 0px;
    width: 16px;
    bottom: 0px;
    height: 16px;
    margin: auto;
    display: flex;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
}

.dashboardtodos-selecionado {
    top: 0px;
    right: 0px;
    width: 16px;
    bottom: 0px;
    height: 16px;
    margin: auto;
    display: flex;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(255, 91, 39, 1);
}

.dashboardtodos-vector2 {
    top: 3.5999999046325684px;
    left: 3.5999999046325684px;
    width: 9px;
    height: 8px;
    position: absolute;
}

.dashboardtodos-coinbase {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
    margin-bottom: 20px;
    justify-content: flex-start;
}

.dashboardtodos-text12 {
    color: var(--dl-color-default-cinzaescuro);
    width: auto;
    height: auto;
    font-size: 14px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    margin-right: 87px;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-select1 {
    top: 0px;
    right: 0px;
    width: 16px;
    bottom: 0px;
    height: 16px;
    margin: auto;
    display: flex;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: flex-start;
}

.dashboardtodos-selecionado1 {
    top: 0px;
    left: 0px;
    width: 16px;
    height: 16px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: var(--dl-color-gray-700);
    border-style: solid;
    border-width: 2px;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: flex-start;
}

.dashboardtodos-vector21 {
    top: 3.5999999046325684px;
    left: 3.5999999046325684px;
    width: 9px;
    height: 8px;
    position: absolute;
}

.dashboardtodos-rainbow {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
    justify-content: flex-start;
}

.dashboardtodos-text13 {
    color: var(--dl-color-default-cinzaescuro);
    height: auto;
    font-size: 14px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    margin-right: 87px;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-select2 {
    top: 0px;
    right: 0px;
    width: 16px;
    bottom: 0px;
    height: 16px;
    margin: auto;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: center;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: center;
    background-color: transparent;
}

.dashboardtodos-selecionado2 {
    top: 0px;
    left: 0px;
    width: 16px;
    height: 16px;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: var(--dl-color-gray-700);
    border-style: solid;
    border-width: 2px;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: flex-start;
}

.dashboardtodos-vector22 {
    top: 3.5999999046325684px;
    left: 3.5999999046325684px;
    width: 9px;
    height: 8px;
    position: absolute;
}

.dashboardtodos-edit {
    left: 0px;
    right: 0px;
    width: 100%;
    bottom: 0px;
    height: 24px;
    margin: auto;
    display: flex;
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

.dashboardtodos-plus {
    top: 0px;
    left: 0px;
    width: 24px;
    height: 24px;
    display: flex;
    position: absolute;
    align-self: auto;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    border-radius: var(--dl-radius-radius-radius4);
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(255, 91, 39, 1);
}

.dashboardtodos-plus1 {
    top: 4px;
    left: 4px;
    width: 16px;
    height: 16px;
    position: absolute;
}

.dashboardtodos-text14 {
    top: 4px;
    left: 140px;
    color: var(--dl-color-default-azulcorsecundria);
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

.dashboardtodos-line1 {
    flex: 0;
    left: 0px;
    right: 0px;
    width: 176px;
    bottom: 0px;
    height: 1px;
    display: flex;
    position: absolute;
    margin-top: auto;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 320px;
    background-color: #F2F2F2;
}

.dashboardtodos-configuracoes {
    left: 0px;
    width: 166px;
    bottom: 0px;
    display: flex;
    position: absolute;
    align-items: flex-start;
    margin-left: 32px;
    border-color: transparent;
    margin-right: 42px;
    margin-bottom: 120px;
    flex-direction: column;
    justify-content: center;
}

.dashboardtodos-settings {
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
    margin-bottom: 56px;
    justify-content: center;
}

.dashboardtodos-settings1 {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
}

.dashboardtodos-text16 {
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
    margin-right: 0;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-sair {
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
    justify-content: center;
}

.dashboardtodos-logout {
    width: 24px;
    height: 24px;
    position: relative;
    margin-right: 20px;
}

.dashboardtodos-text18 {
    color: var(--dl-color-default-azulcorsecundria);
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

.dashboardtodos-line6 {
    top: 800px;
    left: 0px;
    right: 0px;
    width: 176px;
    height: 0px;
    margin: auto;
    position: absolute;
}

.dashboardtodos-line2 {
    top: 0px;
    flex: 0;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 1px;
    display: flex;
    position: absolute;
    margin-top: 122px;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    background-color: #F2F2F2;
}

.dashboardtodos-rowmid {
    top: 126px;
    flex: 0;
    left: 0px;
    width: 100%;
    height: auto;
    display: flex;
    position: absolute;
    align-self: center;
    align-items: flex-start;
}

.dashboardtodos-filtross {
    top: 0px;
    right: 0px;
    width: 144px;
    height: 40px;
    display: flex;
    position: absolute;
    margin-top: 40px;
    align-items: flex-start;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
    margin-right: 182px;
    border-radius: 8px;
}

.dashboardtodos-framefiltros {
    top: 10px;
    left: 0px;
    right: 0px;
    width: 83px;
    height: 20px;
    margin: auto;
    display: flex;
    padding: 0;
    position: absolute;
    align-self: center;
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

.dashboardtodos-text20 {
    left: 32px;
    color: var(--dl-color-neutral-darkgrey);
    height: auto;
    position: absolute;
    font-size: 16px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
}

.dashboardtodos-sliders {
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    position: absolute;
}

.dashboardtodos-filtros2 {
    top: 0px;
    right: 0px;
    width: 144px;
    height: 40px;
    display: flex;
    position: absolute;
    margin-top: 40px;
    align-items: flex-start;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
    margin-right: 32px;
    border-radius: 8px;
}

.dashboardtodos-framefiltros1 {
    top: 0px;
    left: 0px;
    width: 50%;
    bottom: 0px;
    height: 100%;
    display: flex;
    position: absolute;
    align-self: center;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
    border-radius: var(--dl-radius-radius-radius8);
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 1px;
    border-bottom-width: 0px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.dashboardtodos-sliders1 {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 20px;
    bottom: 0px;
    height: 20px;
    margin: auto;
    position: absolute;
}

.dashboardtodos-framefiltros2 {
    top: 0px;
    right: 0px;
    width: 50%;
    bottom: 0px;
    height: 100%;
    display: flex;
    position: absolute;
    align-self: center;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: #CCCCCC;
    border-style: solid;
    border-width: 1px;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 1px;
    border-bottom-width: 0px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.dashboardtodos-sliders2 {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 20px;
    bottom: 0px;
    height: 20px;
    margin: auto;
    position: absolute;
}

.dashboardtodos-text22 {
    left: 0px;
    color: var(--dl-color-default-preto);
    height: auto;
    position: absolute;
    font-size: 18px;
    align-self: auto;
    font-style: SemiBold;
    margin-top: 40px;
    text-align: left;
    font-family: Sora;
    font-weight: 600;
    line-height: normal;
    margin-left: 272px;
    font-stretch: normal;
    text-decoration: none;
}

.dashboardtodos-filtrosselecionados {
    top: 0px;
    left: 0px;
    width: 175px;
    display: flex;
    position: absolute;
    margin-top: 96px;
    align-items: center;
    margin-left: 272px;
    border-color: transparent;
}

.dashboardtodos-metaa {
    display: flex;
    padding: 6px;
    position: relative;
    align-items: flex-start;
    margin-right: 30px;
    border-radius: 4px;
    flex-direction: column;
    background-color: rgba(20, 163, 207, 0.05000000074505806);
}

.dashboardtodos-frame103 {
    display: flex;
    position: relative;
    align-items: center;
    border-color: transparent;
}

.dashboardtodos-text23 {
    color: var(--dl-color-default-azulcorsecundria);
    height: auto;
    font-size: 12px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    margin-right: 8px;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-plus2 {
    width: 20px;
    height: 20px;
    position: relative;
}

.dashboardtodos-text25 {
    color: var(--dl-color-default-preto);
    height: auto;
    font-size: 12px;
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

.dashboardtodos-text27 {
    top: 0px;
    color: var(--dl-color-default-preto);
    right: 0px;
    height: auto;
    position: absolute;
    font-size: 16px;
    align-self: auto;
    font-style: Regular;
    margin-top: 112px;
    text-align: right;
    font-family: Sora;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    margin-right: 32px;
    margin-bottom: 0;
    text-decoration: none;
}

.dashboardtodos-frame101 {
    top: 278px;
    left: 0px;
    right: 0px;
    width: 1136px;
    display: flex;
    position: absolute;
    margin-top: 20px;
    align-items: flex-start;
    margin-left: auto;
    border-color: transparent;
    margin-right: auto;
    margin-bottom: auto;
    flex-direction: column;
}

.dashboardtodos-linha1nft {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    margin-bottom: 20px;
}

.dashboardtodos-nft1 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image31 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia {
    top: 174.17266845703125px;
    left: 1.8189894035458565e-12px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio {
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

.dashboardtodos-text28 {
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

.dashboardtodos-text30 {
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

.dashboardtodos-nft2 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3101 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia01 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio01 {
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

.dashboardtodos-text32 {
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

.dashboardtodos-text34 {
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

.dashboardtodos-nft3 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3102 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia02 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio02 {
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

.dashboardtodos-text36 {
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

.dashboardtodos-text38 {
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

.dashboardtodos-nft4 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 0;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3103 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia03 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio03 {
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

.dashboardtodos-text40 {
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

.dashboardtodos-text42 {
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

.dashboardtodos-linha1nft1 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    margin-bottom: 20px;
}

.dashboardtodos-nft11 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3104 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia04 {
    top: 174.17266845703125px;
    left: 1.8189894035458565e-12px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio04 {
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

.dashboardtodos-text44 {
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

.dashboardtodos-text46 {
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

.dashboardtodos-nft21 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3105 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia05 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio05 {
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

.dashboardtodos-text48 {
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

.dashboardtodos-text50 {
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

.dashboardtodos-nft31 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3106 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia06 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio06 {
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

.dashboardtodos-text52 {
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

.dashboardtodos-text54 {
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

.dashboardtodos-nft41 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 0;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3107 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia07 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio07 {
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

.dashboardtodos-text56 {
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

.dashboardtodos-text58 {
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

.dashboardtodos-linha1nft2 {
    display: flex;
    position: relative;
    align-items: flex-start;
    border-color: transparent;
    margin-bottom: 20px;
}

.dashboardtodos-nft12 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3108 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia08 {
    top: 174.17266845703125px;
    left: 1.8189894035458565e-12px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio08 {
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

.dashboardtodos-text60 {
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

.dashboardtodos-text62 {
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

.dashboardtodos-nft22 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3109 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia09 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio09 {
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

.dashboardtodos-text64 {
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

.dashboardtodos-text66 {
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

.dashboardtodos-nft32 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 20px;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3110 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia10 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio10 {
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

.dashboardtodos-text68 {
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

.dashboardtodos-text70 {
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

.dashboardtodos-nft42 {
    width: 269px;
    height: 269px;
    display: flex;
    padding: 0;
    position: relative;
    align-self: auto;
    box-shadow: 5px 5px 7px 0px #7e7e7e;
    box-sizing: border-box;
    align-items: flex-start;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    margin-right: 0;
    border-radius: 16px;
    margin-bottom: 0;
    flex-direction: row;
    justify-content: flex-start;
    background-color: rgba(217, 217, 217, 1);
}

.dashboardtodos-image3111 {
    top: 0px;
    left: 0px;
    width: 269px;
    height: 269px;
    position: absolute;
    border-color: transparent;
    border-radius: 16px;
}

.dashboardtodos-transparncia11 {
    top: 174.17266845703125px;
    left: 0px;
    width: 269px;
    height: 95px;
    position: absolute;
    border-color: transparent;
    border-radius: 0 0 16px 16px;
}

.dashboardtodos-descrio11 {
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

.dashboardtodos-text72 {
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

.dashboardtodos-text74 {
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
</style>
