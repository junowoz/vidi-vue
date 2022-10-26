<template>
	<div class="popup">
		<div class="popup-inner">

	<div class="popup-popup">
		<span class="popup-text">
			<span class="popup-text01">
				Conectando, eu aceito os
				<span v-html="raw1svd"></span>
			</span>
			<span class="popup-text02">Termos de Uso.</span>
		</span>
		<div class="popup-carterias">
			<div class="popup-carteira1">
				<div class="popup-group8">
					<img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/91231227-37f6-4f55-8912-bb6b778b88e1/1592c16f-9ad8-4eef-b41c-6844c68aff70?org_if_sml=13817"
						alt="image243963" class="popup-image24" />
					<span class="popup-text03"><span>Metamask</span></span>
				</div>
			</div>
			<div class="popup-carteira2">
				<div class="popup-group81">
					<img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/91231227-37f6-4f55-8912-bb6b778b88e1/10f23a2c-2495-472a-ae4f-08bf3d97929c?org_if_sml=12458"
						alt="image253963" class="popup-image25" />
					<span class="popup-text05"><span>Coinbase Wallet</span></span>
				</div>
			</div>
			<div class="popup-carteira3">
				<div class="popup-group82">
					<span class="popup-text07"><span>Wallet Connect</span></span>
					<img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/91231227-37f6-4f55-8912-bb6b778b88e1/dd712f97-a62b-4b39-ae04-d6a93a585847?org_if_sml=12075"
						alt="walletconnectW3963" class="popup-walletconnect-w" />
				</div>
			</div>
			<div class="popup-carteira4">
				<div class="popup-group83">
					<span class="popup-text09"><span>Rainbow</span></span>
					<div class="popup-logo-color-vector-circle">
						<div class="popup-background">
							<img src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/91231227-37f6-4f55-8912-bb6b778b88e1/008a17b1-f747-4b4f-ae13-bac53c3d5cb9?org_if_sml=1123"
								alt="MaskI396" class="popup-mask" />
						</div>
						<div class="popup-logo">
							<div class="popup-outer">
								<img src="/playground_assets/outeri396-ut17.svg" alt="outerI396" class="popup-outer1" />
								<img src="/playground_assets/rightcapi396-607.svg" alt="rightcapI396"
									class="popup-rightcap" />
								<img src="/playground_assets/leftcapi396-31zg.svg" alt="leftcapI396"
									class="popup-leftcap" />
							</div>
							<div class="popup-middle">
								<img src="/playground_assets/middlei396-t6yw.svg" alt="middleI396"
									class="popup-middle1" />
								<img src="/playground_assets/rightcapi396-t3w.svg" alt="rightcapI396"
									class="popup-rightcap1" />
								<img src="/playground_assets/leftcapi396-mdsgr.svg" alt="leftcapI396"
									class="popup-leftcap1" />
							</div>
							<div class="popup-inner">
								<img src="/playground_assets/inneri396-w88l.svg" alt="innerI396" class="popup-inner1" />
								<img src="/playground_assets/rightcapi396-xx7r.svg" alt="rightcapI396"
									class="popup-rightcap2" />
								<img src="/playground_assets/leftcapi396-7ugo.svg" alt="leftcapI396"
									class="popup-leftcap2" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="popup-topo">
			<img src="/playground_assets/line13963-1zeq.svg" alt="Line13963" class="popup-line1" />
			<span class="popup-text11"><span>Conectar carteira</span></span>
			<div class="popup-close" @click="TogglePopup()">
				<div class="popup-group7">
					<img src="/playground_assets/vector3963-s8e.svg" alt="Vector3963" class="popup-vector" />
					<img src="/playground_assets/vector3963-gra.svg" alt="Vector3963" class="popup-vector1" />
				</div>
			</div>
		</div>
		<span class="popup-text13">
			<span>
				Para que seja possível identificar se existem NFTs seus plagiados,
				precisamos ter acesso a eles.
			</span>
		</span>
	</div>

		</div>
	</div>
</template>

<script>
export default {
	props: ['TogglePopup']
}
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);

	display: flex;
	align-items: center;
	justify-content: center;

	.popup-inner {
		background: #FFF;
		padding: 32px;
	}
}

.popup-popup {
	width: 482px;
	height: 633px;
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
	border-radius: var(--dl-radius-radius-radius8);
	flex-direction: row;
	justify-content: flex-start;
	background-color: rgba(255, 255, 255, 1);
}

.popup-text {
	top: 588px;
	left: 137px;
	color: rgba(130, 130, 130, 1);
	height: auto;
	position: absolute;
	font-size: 10px;
	align-self: auto;
	font-style: Regular;
	text-align: left;
	font-family: Sora;
	font-weight: 400;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
}

.popup-text01 {
	color: var(--dl-color-default-cinzamdio);
}

.popup-text02 {
	color: var(--dl-color-default-laranja);
}

.popup-carterias {
	top: 192px;
	left: 48px;
	width: 386px;
	height: 356px;
	display: flex;
	padding: 0;
	position: absolute;
	align-self: auto;
	box-sizing: border-box;
	align-items: flex-start;
	flex-shrink: 1;
	border-radius: var(--dl-radius-radius-radius8);
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-carteira1 {
	top: 0px;
	left: 0px;
	width: 173px;
	height: 158px;
	display: flex;
	padding: 0;
	position: absolute;
	align-self: auto;
	box-sizing: border-box;
	align-items: flex-start;
	flex-shrink: 1;
	border-color: #F2F2F2;
	border-style: solid;
	border-width: 1px;
	border-radius: 0px 0px 0px 0px;
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-group8 {
	top: 32px;
	left: 47px;
	width: 79px;
	height: 94px;
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

.popup-image24 {
	top: 0px;
	left: 0px;
	width: 79px;
	height: 60px;
	position: absolute;
	border-color: transparent;
}

.popup-text03 {
	top: 76px;
	left: 2px;
	color: var(--dl-color-default-preto);
	height: auto;
	position: absolute;
	font-size: 14px;
	align-self: auto;
	font-style: SemiBold;
	text-align: left;
	font-family: Sora;
	font-weight: 600;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
}

.popup-carteira2 {
	top: 0px;
	left: 213px;
	width: 173px;
	height: 158px;
	display: flex;
	padding: 0;
	position: absolute;
	align-self: auto;
	box-sizing: border-box;
	align-items: flex-start;
	flex-shrink: 1;
	border-color: #F2F2F2;
	border-style: solid;
	border-width: 1px;
	border-radius: var(--dl-radius-radius-radius8);
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-group81 {
	top: 32px;
	left: 27px;
	width: 118px;
	height: 94px;
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

.popup-image25 {
	top: 0px;
	left: 30px;
	width: 60px;
	height: 60px;
	position: absolute;
	border-color: transparent;
}

.popup-text05 {
	top: 76px;
	color: var(--dl-color-default-preto);
	height: auto;
	position: absolute;
	font-size: 14px;
	align-self: auto;
	font-style: SemiBold;
	text-align: left;
	font-family: Sora;
	font-weight: 600;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
}

.popup-carteira3 {
	top: 198px;
	left: 0px;
	width: 173px;
	height: 158px;
	display: flex;
	padding: 0;
	position: absolute;
	align-self: auto;
	box-sizing: border-box;
	align-items: flex-start;
	flex-shrink: 1;
	border-color: #F2F2F2;
	border-style: solid;
	border-width: 1px;
	border-radius: var(--dl-radius-radius-radius8);
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-group82 {
	top: 32px;
	left: 33px;
	width: 112px;
	height: 94px;
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

.popup-text07 {
	top: 76px;
	color: var(--dl-color-default-preto);
	height: auto;
	position: absolute;
	font-size: 14px;
	align-self: auto;
	font-style: SemiBold;
	text-align: left;
	font-family: Sora;
	font-weight: 600;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
}

.popup-walletconnect-w {
	top: 0px;
	left: 23px;
	width: 60px;
	height: 60px;
	position: absolute;
	border-color: transparent;
	border-radius: 52px;
}

.popup-carteira4 {
	top: 198px;
	left: 213px;
	width: 173px;
	height: 158px;
	display: flex;
	padding: 0;
	position: absolute;
	align-self: auto;
	box-sizing: border-box;
	align-items: flex-start;
	flex-shrink: 1;
	border-color: #F2F2F2;
	border-style: solid;
	border-width: 1px;
	border-radius: var(--dl-radius-radius-radius8);
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-group83 {
	top: 32px;
	left: 55px;
	width: 64px;
	height: 94px;
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

.popup-text09 {
	top: 76px;
	color: var(--dl-color-default-preto);
	height: auto;
	position: absolute;
	font-size: 14px;
	align-self: auto;
	font-style: SemiBold;
	text-align: left;
	font-family: Sora;
	font-weight: 600;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
}

.popup-logo-color-vector-circle {
	top: 0px;
	left: 2px;
	width: 60px;
	height: 60px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: transparent;
}

.popup-background {
	top: 0px;
	left: 0px;
	width: 60px;
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
	margin-right: 0;
	border-radius: var(--dl-radius-radius-round);
	margin-bottom: 0;
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
	background-image: linear-gradient(180deg, rgba(23, 66, 153, 1) 0%, rgba(0, 30, 89, 1) 100%);
}

.popup-mask {
	top: 0px;
	left: 0px;
	width: 60px;
	height: 60px;
	position: absolute;
	border-radius: var(--dl-radius-radius-round);
}

.popup-logo {
	top: 13.333333015441895px;
	left: 13.333321571350098px;
	width: 33.333343505859375px;
	height: 33.333335876464844px;
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
	margin-right: 0;
	border-radius: 0px 0px 0px 0px;
	margin-bottom: 0;
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-outer {
	top: 0px;
	left: 0.00001049041748046875px;
	width: 33.33333206176758px;
	height: 33.333335876464844px;
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

.popup-outer1 {
	top: 0px;
	left: 9.5367431640625e-7px;
	width: 33px;
	height: 33px;
	position: absolute;
}

.popup-rightcap {
	top: 30.833335876464844px;
	left: 26.666656494140625px;
	width: 7px;
	height: 2px;
	position: absolute;
}

.popup-leftcap {
	top: 0px;
	left: 0px;
	width: 3px;
	height: 7px;
	position: absolute;
}

.popup-middle {
	top: 6.6666669845581055px;
	left: 0px;
	width: 26.666667938232422px;
	height: 26.666667938232422px;
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

.popup-middle1 {
	top: 0px;
	left: 9.5367431640625e-7px;
	width: 27px;
	height: 27px;
	position: absolute;
}

.popup-rightcap1 {
	top: 24.166664123535156px;
	left: 19.99999237060547px;
	width: 7px;
	height: 2px;
	position: absolute;
}

.popup-leftcap1 {
	top: 0px;
	left: 0px;
	width: 3px;
	height: 7px;
	position: absolute;
}

.popup-inner {
	top: 13.333334922790527px;
	left: 9.5367431640625e-7px;
	width: 20.000001907348633px;
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

.popup-inner1 {
	top: 0px;
	left: 0px;
	width: 20px;
	height: 20px;
	position: absolute;
}

.popup-rightcap2 {
	top: 17.499996185302734px;
	left: 13.333324432373047px;
	width: 7px;
	height: 2px;
	position: absolute;
}

.popup-leftcap2 {
	top: 0px;
	left: 0px;
	width: 3px;
	height: 7px;
	position: absolute;
}

.popup-topo {
	top: 32px;
	left: 0px;
	width: 482px;
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
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-line1 {
	top: 60px;
	left: 0px;
	width: 482px;
	height: 0px;
	position: absolute;
}

.popup-text11 {
	left: 48px;
	color: var(--dl-color-default-preto);
	height: auto;
	position: absolute;
	font-size: 22px;
	align-self: auto;
	font-style: SemiBold;
	text-align: left;
	font-family: Sora;
	font-weight: 600;
	line-height: normal;
	font-stretch: normal;
	text-decoration: none;
}

.popup-close {
	top: 2px;
	left: 410px;
	width: 24px;
	height: 24px;
	display: flex;
	overflow: hidden;
	position: absolute;
	align-items: flex-start;
	flex-shrink: 0;
	border-color: transparent;
}

.popup-group7 {
	top: 4px;
	left: 4px;
	width: 16px;
	height: 16px;
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
	margin-right: 0;
	border-radius: 0px 0px 0px 0px;
	margin-bottom: 0;
	flex-direction: row;
	justify-content: flex-start;
	background-color: transparent;
}

.popup-vector {
	top: 0px;
	left: 0px;
	width: 16px;
	height: 16px;
	position: absolute;
}

.popup-vector1 {
	top: 0px;
	left: 0px;
	width: 16px;
	height: 16px;
	position: absolute;
}

.popup-text13 {
	top: 124px;
	left: 48px;
	color: var(--dl-color-default-cinzaescuro);
	width: 386px;
	height: auto;
	position: absolute;
	font-size: 14px;
	align-self: auto;
	font-style: Regular;
	text-align: left;
	font-family: Sora;
	font-weight: 400;
	line-height: 160.0000023841858%;
	font-stretch: normal;
	text-decoration: none;
}
</style>
