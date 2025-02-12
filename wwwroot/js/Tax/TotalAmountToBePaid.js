class TotalAmountToBePaid {
    constructor() {
        this._initHtml();
        this._initEventBindins();
    }

    _initHtml() {
        this.$backButton = $("#backButton");
        this.$continueButton = $("#continueButton");
    }

    _initEventBindins() {
        this.$backButton.off("click").on("click", () => this.goToBack());
        this.$continueButton.off("click").on("click", () => this.enviarDatos());
    }

    enviarDatos() {
        window.location.href = "/Payments/MethodOfPayment"
    }

    goToBack() {
        window.location.href = "/Tax/SelectThePropertyToPay";
    }
}

$(document).ready(() => new TotalAmountToBePaid());
