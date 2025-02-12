class Index {
    constructor() {
        this._initHtml();
        this._initEventBindins();
    }

    _initConstants() {

    }

    _initHtml() {
        this.$tapToStartButton = $("#tapToStartButton");
    }

    _initEventBindins() {
        this.$tapToStartButton.off("click").on("click", (event) => {
            event.stopPropagation();
            this.goToPaymentPortal();
        });

        $(document).off("click").on("click", this.goToPaymentPortal);
    }

    _init() {
        this._initConstants();
        this._initHtml();
        this._initEventBindins();
    }

    goToPaymentPortal() {
        window.location.href = "/Home/PaymentPortalEntity";
    }
}

$(document).ready(() => new Index());
