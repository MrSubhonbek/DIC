import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Converter, Currencies } from "./pages";
interface IProps {}

export const AppRoutes: FC<IProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Converter />} />
      <Route path="/currencies" element={<Currencies />} />
    </Routes>
  );
};
