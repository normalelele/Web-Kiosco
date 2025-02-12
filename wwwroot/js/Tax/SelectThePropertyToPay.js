class SelectThePropertyToPay {
    constructor() {
        this._initHtml();
        this._initEventBindins();
    }

    _initHtml() {
        this.$backButton = $("#backButton");
        this.$continueButton = $("#continueButton");
        this.$numeroInput = $("#numeroInput");
        this.$btnBorrar = $("#btnBorrar");
        this.$btnLimpiar = $("#btnLimpiar");
        this.$btnNumeros = $(".numeric-key").not("#btnBorrar, #btnLimpiar");
    }

    _initEventBindins() {
        this.$backButton.off("click").on("click", () => this.goToBack());
        this.$continueButton.off("click").on("click", () => this.enviarDatos());
        this.$btnBorrar.off("click").on("click", () => this.borrarNumero());
        this.$btnLimpiar.off("click").on("click", () => this.limpiarNumeros());
        this.$btnNumeros.off("click").on("click", (event) => {
            let numero = $(event.target).text();
            this.agregarNumero(numero);
        });
    }

    agregarNumero(numero) {
        if (!/^\d$/.test(numero)) return;
        this.$numeroInput.val(this.$numeroInput.val() + numero);
    }

    borrarNumero() {
        let valorActual = this.$numeroInput.val();
        this.$numeroInput.val(valorActual.slice(0, -1));
    }

    limpiarNumeros() {
        this.$numeroInput.val("");
    }

    enviarDatos() {
        window.location.href = "/Tax/TotalAmountToBePaid"
    }

    goToBack() {
        window.location.href = "/Tax/PropertyTax";
    }
}

$(document).ready(() => new SelectThePropertyToPay());
