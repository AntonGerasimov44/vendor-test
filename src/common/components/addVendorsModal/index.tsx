import React, { useState, BaseSyntheticEvent, useMemo } from "react";

import { MainContainer } from "./styles";
import { IVendorData } from "../vendorsTable/vendorsList";
import AddVendorsForm from "./addVendorsForm";
import { isValidNewVendorsForm } from "common/utils";

interface IProps {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
  setVendorsData: (newValue: IVendorData[]) => void;
}

const AddVendorsModal = ({ isOpen, setOpen, setVendorsData }: IProps) => {
  const [newVendorData, setVendorData] = useState<IVendorData>({
    customerCaseStudies: "",
    description: "",
    features: "",
    fundingHistory: {
      foundedYear: "",
      founders: "",
      keyInvestors: "",
      total: 1,
    },
    name: "",
    pricing: "",
    score: 1,
  });
  const isValidForm = useMemo(() => isValidNewVendorsForm(newVendorData), [
    newVendorData,
  ]);

  const submitFormHandler = () => {
    const vendorsInLocalStorage = localStorage.getItem("vendorsData");
    const { fundingHistory } = newVendorData;
    const { foundedYear } = fundingHistory;

    if (isValidForm && vendorsInLocalStorage) {
      const parsedVendorsData: IVendorData[] = JSON.parse(
        vendorsInLocalStorage
      );

      parsedVendorsData.push({
        ...newVendorData,
        fundingHistory: {
          ...fundingHistory,
          foundedYear: `${new Date(foundedYear).getFullYear()}`,
        },
      });

      localStorage.setItem("vendorsData", JSON.stringify(parsedVendorsData));
      setVendorsData(parsedVendorsData);
      setOpen(false);
    }
  };

  const onInputNewVendorData = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;

    setVendorData({
      ...newVendorData,
      [name]: value,
    });
  };

  const onInputFundingHistory = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;
    const { fundingHistory } = newVendorData;

    const fundingHistoryClone = {
      ...fundingHistory,
      [name]: value,
    };

    setVendorData({
      ...newVendorData,
      fundingHistory: fundingHistoryClone,
    });
  };

  return (
    <MainContainer isOpen={isOpen}>
      <AddVendorsForm
        isValidForm={isValidForm}
        newVendorData={newVendorData}
        onInputFundingHistory={onInputFundingHistory}
        onInputNewVendorData={onInputNewVendorData}
        setOpen={setOpen}
        submitForm={submitFormHandler}
      />
    </MainContainer>
  );
};

export default AddVendorsModal;
