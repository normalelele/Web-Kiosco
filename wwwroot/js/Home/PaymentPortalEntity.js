class PaymentPortalEntity {
    constructor() {
        this.irAlcaldiaValledupar = this.irAlcaldiaValledupar.bind(this);
        this.goToBack = this.goToBack.bind(this);
        this._initConstants();
        this._initHtml();
        this._initEventBindins();
        this._init();
        this.autoRedirectBack();
    }

    _initConstants() {

    }

    _initHtml() {
        this.$cardAlcaldia = $("#cardAlcaldia");
    }

    _initEventBindins() {
        this.$cardAlcaldia.off("click").on("click", this.irAlcaldiaValledupar);
    }

    _init() {
        this._initConstants();
        this._initHtml();
        this._initEventBindins();
    }

    irAlcaldiaValledupar() {
        window.location.href = "/Home/PaymentPortal";
    }

    goToBack() {
        window.location.href = "/";
    }

    autoRedirectBack() {
        setTimeout(() => {
            this.goToBack();
        }, 30000);
    }
}

$(document).ready(function () {
    const payment = new PaymentPortalEntity();
});

export default PaymentPortalEntity;