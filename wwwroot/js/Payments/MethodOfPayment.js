class MethodOfPayment {
    constructor() {
        this._initHtml();
        this._initEventBindins();
    }

    _initConstants() {

    }

    _initHtml() {
        this.$backButton = $("#backButton");
        this.$cardDataPhone = $("#cardDataPhone");
    }

    _initEventBindins() {
        this.$backButton.off("click").on("click", () => this.goToBack());
        this.$cardDataPhone.off("click").on("click", this.goToDataPhone);
    }

    _init() {
        this._initConstants();
        this._initHtml();
        this._initEventBindins();
    }

    goToDataPhone() {
        window.location.href = "/Payments/PaymentWithDataphone";
    }

    goToBack() {
        window.location.href = "/Tax/TotalAmountToBePaid";
    }
}

$(document).ready(() => new MethodOfPayment());
