import { fetchPost } from '../Utilities.js';
class PropertyTax {
    constructor() {
        this._initHtml();
        this._initEventBindins();
    }

    _initHtml() {
        this.$backButton = $("#backButton");
        this.$continueButton = $("#continueButton");
        this.$numberInput = $("#numberInput");
        this.$btnDelete = $("#btnDelete");
        this.$btnClean = $("#btnClean");
        this.$btnNumbers = $(".numeric-key").not("#btnDelete, #btnClean");
        this.$errorMessage = $("#errorMessage");
    }

    _initEventBindins() {
        this.$backButton.off("click").on("click", () => this.goToBack());
        this.$continueButton.off("click").on("click", () => this.searchForAddresses());
        this.$btnDelete.off("click").on("click", () => this.deleteNumber());
        this.$btnClean.off("click").on("click", () => this.clearNumbers());
        this.$btnNumbers.off("click").on("click", (event) => {
            let numero = $(event.target).text().trim();
            this.addNumbers(numero);
        });
        this.$numberInput.on("input", () => this.resetInputValidation());
    }

    addNumbers(numero) {
        this.resetInputValidation();
        if (!/^\d$/.test(numero)) return;
        this.$numberInput.val(this.$numberInput.val() + numero);
    }

    deleteNumber() {
        let valorActual = this.$numberInput.val();
        this.$numberInput.val(valorActual.slice(0, -1));
    }

    clearNumbers() {
        this.$numberInput.val("");
    }

    resetInputValidation() {
        this.$numberInput.removeClass("error");
        this.$errorMessage.addClass("d-none");
    }

    async searchForAddresses() {
        const numero = this.$numberInput.val();

        if (!numero) {
            this.$numberInput.addClass("error");
            this.$errorMessage.removeClass("d-none");
            return;
        }

        const data = {
            collectorId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            productId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            searchCriteriaId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            valueToConsult: numero,
        };

        try {
            const response = await fetchPost("http://localhost:5079/api/TransactionVariable/search-transactions", data);
            console.log("Respuesta de la API:", response);

            if (response === 0 || response.length === 0) {
                this.$numberInput.addClass("error");
                this.$noResultsMessage.removeClass("d-none");
            } else {
                //window.location.href = "/Tax/SelectThePropertyToPay"
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }

    goToBack() {
        window.location.href = "/Home/PaymentPortal";
    }
}

$(document).ready(() => new PropertyTax());

