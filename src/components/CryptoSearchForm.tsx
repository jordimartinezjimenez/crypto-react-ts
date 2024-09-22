export default function CryptoSearchForm() {
    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                    <option value="">-- Seleccionar --</option>
                </select>
            </div>
            <div className="field">
                <label htmlFor="cryptoCurrency">Criptomoneda:</label>
                <select
                    name="cryptoCurrency"
                    id="cryptoCurrency"
                >
                    <option value="">-- Seleccionar --</option>
                </select>
            </div>
            <input type="submit" value="Cotizar" />
        </form >
    )
}
