import { useState } from "react";
import { CurrencyInput } from "../components";
import { useFetchAllConverterQuery } from "../store/services/ConverterService";

export const Converter = () => {
  const { data, isLoading } = useFetchAllConverterQuery();
  const [amountFirst, setAmountFirst] = useState(1);
  const [currencyFirst, setCurrencyFirst] = useState("EUR");
  const [amountSecond, setAmountSecond] = useState<number>(1);
  const [currencySecond, setCurrencySecond] = useState("EUR");

  if (isLoading) return <h1>Loading...</h1>;
  if (!data) return <h1>Empty data</h1>;

  const handleAmountFirstChange = (amount1: number) => {
    setAmountSecond(
      (amount1 * (data.rates as any)[currencySecond]) /
        (data.rates as any)[currencyFirst]
    );
    setAmountFirst(amount1);
  };

  const handleCurrencyFirstChange = (currency1: string) => {
    setAmountSecond(
      (amountFirst * (data.rates as any)[currencySecond]) /
        (data.rates as any)[currency1]
    );
    setCurrencyFirst(currency1);
  };

  const handleAmountSecondChange = (amountSecond: number) => {
    setAmountFirst(
      (amountSecond * (data.rates as any)[currencyFirst]) /
        (data.rates as any)[currencySecond]
    );
    setAmountSecond(amountSecond);
  };

  const handleCurrencySecondChange = (currencySecond: string) => {
    setAmountFirst(
      (amountSecond * (data.rates as any)[currencyFirst]) /
        (data.rates as any)[currencySecond]
    );
    setCurrencySecond(currencySecond);
  };

  return (
    <div
      style={{
        height: 100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CurrencyInput
        onCurrencyChange={handleCurrencyFirstChange}
        onAmountChange={handleAmountFirstChange}
        amount={amountFirst}
        currency={currencyFirst}
        currencies={Object.keys(data.rates)}
      />
      <CurrencyInput
        onCurrencyChange={handleCurrencySecondChange}
        onAmountChange={handleAmountSecondChange}
        amount={amountSecond}
        currency={currencySecond}
        currencies={Object.keys(data.rates)}
      />
    </div>
  );
};
