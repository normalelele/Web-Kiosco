class PaymentPortal {
    constructor() {
        this._initHtml();
        this._initEventBindins();
        this.autoRedirectBack();
    }

    _initConstants() {

    }

    _initHtml() {
        this.$backButton = $("#backButton");
        this.$cardPropertyTax = $("#cardPropertyTax");
        this.$cardIndustryAndCommerce = $("#cardIndustryAndCommerce");
    }

    _initEventBindins() {
        this.$backButton.off("click").on("click", () => this.goToBack());
        this.$cardPropertyTax.off("click").on("click", this.goToPropertyTax);
        this.$cardIndustryAndCommerce.off("click").on("click", this.goToIndustryAndCommerce);
    }

    _init() {
        this._initConstants();
        this._initHtml();
        this._initEventBindins();
    }

    goToPropertyTax() {
        window.location.href = "/Tax/PropertyTax";
    }

    goToIndustryAndCommerce() {
        window.location.href = "/IndustryAndCommerce/IndustryAndCommerce";
    }

    goToBack() {
        window.location.href = "/Home/PaymentPortalEntity";
    }

    autoRedirectBack() {
        setTimeout(() => {
            this.goToBack();
        }, 30000);
    }
}

$(document).ready(() => new PaymentPortal());
