import { Divider, List, Typography } from "antd";
import {
  useFetchAllConverterQuery,
  useFetchAllNameCurrencyQuery,
} from "../store/services/ConverterService";

export const Currencies = () => {
  const { data, isLoading } = useFetchAllConverterQuery();
  const { data: nameData } = useFetchAllNameCurrencyQuery();
  if (isLoading) return <h1>Loading...</h1>;
  if (!data || !nameData) return <h1>Empty data</h1>;
  return (
    <List
      header={<h2>Exchange rate against the euro</h2>}
      bordered
      size="large"
      dataSource={Object.keys(data.rates)}
      renderItem={(item) => (
        <>
          <List.Item>
            <Typography.Text>{(data.rates as any)[item]}</Typography.Text>
            <div>{(nameData.symbols as any)[item]}</div>
          </List.Item>
        </>
      )}
    />
  );
};
