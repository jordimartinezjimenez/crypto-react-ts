import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner/Spinner"

export default function CryptoPriceDisplay() {

    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Cryptomoneda" />
                        <div>
                            <p>Precio:<span>{result.PRICE}</span></p>
                            <p>Precio más alto del día:<span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día:<span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 horas:<span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>última Actualización:<span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
