import { useCryptoStore } from "../store"
import { currencies } from "../data"

export default function CryptoSearchForm() {

    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)

    return (
        <form className="form">
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                    <option value="">-- Seleccionar --</option>
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}
                        >
                            {currency.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label htmlFor="cryptoCurrency">Criptomoneda:</label>
                <select
                    name="cryptoCurrency"
                    id="cryptoCurrency"
                >
                    <option value="">-- Seleccionar --</option>
                    {cryptoCurrencies.map(crypto => (
                        <option
                            key={crypto.CoinInfo.Name}
                            value={crypto.CoinInfo.Name}
                        >
                            {crypto.CoinInfo.FullName}
                        </option>
                    ))}
                </select>
            </div>
            <input type="submit" value="Cotizar" />
        </form >
    )
}
