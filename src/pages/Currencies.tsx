import { List, Select, Typography } from "antd";
import { useState } from "react";
import {
  useFetchAllConverterQuery,
  useFetchAllNameCurrencyQuery,
} from "../store/services/ConverterService";
const { Option } = Select;

export const Currencies = () => {
  const { data, isLoading } = useFetchAllConverterQuery();
  const { data: nameData } = useFetchAllNameCurrencyQuery();

  const [currency, setCurrency] = useState("EUR");
  const [rate, setRate] = useState(1);

  if (isLoading) return <h1>Loading...</h1>;
  if (!data || !nameData) return <h1>Empty data</h1>;

  const handleChangeCurrency = (currency: string) => {
    setCurrency(currency);
    setRate((data.rates as any)[currency]);
  };

  const header = (
    <Select
      value={currency}
      onChange={handleChangeCurrency}
      style={{ width: 80 }}
    >
      {Object.keys(data.rates)?.map((currency, index) => (
        <Option key={index} value={currency}>
          {currency}
        </Option>
      ))}
    </Select>
  );

  return (
    <List
      header={header}
      bordered
      size="large"
      dataSource={Object.keys(data.rates)}
      renderItem={(item) => (
        <>
          <List.Item>
            <Typography.Text>
              {(data.rates as any)[item] / rate}
            </Typography.Text>
            <div>{(nameData.symbols as any)[item]}</div>
          </List.Item>
        </>
      )}
    />
  );
};
