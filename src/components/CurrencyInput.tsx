import { FC } from "react";
import { InputNumber, Select, Space } from "antd";

const { Option } = Select;

interface IProps {
  amount: number;
  currency: string;
  currencies: string[] | undefined;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
}

export const CurrencyInput: FC<IProps> = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  const handleChangeAmount = (event: number | null) => {
    if (!event) return 0;
    onAmountChange(event.valueOf());
  };
  console.log(amount);

  const handleChangeCurrency = (event: string) => {
    if (!event) return "";
    onCurrencyChange(event.valueOf());
  };
  const selectAfter = (
    <Select
      value={currency}
      onChange={handleChangeCurrency}
      style={{ width: 80 }}
    >
      {currencies?.map((currency, index) => (
        <Option key={index} value={currency}>
          {currency}
        </Option>
      ))}
    </Select>
  );
  return (
    <div>
      <Space direction="vertical">
        <InputNumber
          addonAfter={selectAfter}
          value={amount}
          onChange={handleChangeAmount}
        />
      </Space>
    </div>
  );
};
