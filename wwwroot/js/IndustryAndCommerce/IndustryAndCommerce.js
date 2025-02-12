class IndustryAndCommerce {
    constructor() {
        this._initHtml();
        this._initEventBindins();
    }

    _initConstants() {

    }

    _initHtml() {
        this.$backButton = $("#backButton");
        this.$numeroInput = $("#numeroInput");
        this.$btnDelete = $("#btnDelete");
        this.$btnClean = $("#btnClean");
        this.$btnNumbers = $(".numeric-key").not("#btnBorrar, #btnLimpiar");
    }

    _initEventBindins() {
        this.$backButton.off("click").on("click", this.goToBack);
        this.$btnDelete.off("click").on("click", () => this.deleteNumber());
        this.$btnClean.off("click").on("click", () => this.clearNumbers());
        this.$btnNumbers.off("click").on("click", (event) => {
            let numero = $(event.target).text().trim();
            this.addNumbers(numero);
        });
    }

    _init() {

    }

    addNumbers(numero) {
        if (!/^\d$/.test(numero)) return;
        this.$numeroInput.val(this.$numeroInput.val() + numero);
    }

    deleteNumber() {
        let valorActual = this.$numeroInput.val();
        this.$numeroInput.val(valorActual.slice(0, -1));
    }

    clearNumbers() {
        this.$numeroInput.val("");
    }

    goToBack() {
        window.location.href = "/Home/PaymentPortal";
    }
}

$(document).ready(() => new IndustryAndCommerce());