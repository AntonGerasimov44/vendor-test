import React, { useState, useEffect, Fragment } from "react";

import VendorsList, { IVendorData } from "./vendorsList";
import AddVendorsModal from "common/components/addVendorsModal";
import { vendorsDataTemplate } from "common/constants";

const VendorsTable = () => {
  const [vendorsData, setVendorsData] = useState<IVendorData[]>([]);
  const [isVisibleFundingHistory, setVisibleFundingHistory] = useState(false);
  const [isOpenVendorsModal, setOpenVendorsModal] = useState(false);

  useEffect(() => {
    const vendorsInLocalStorage = localStorage.getItem("vendorsData");
    if (!vendorsInLocalStorage) {
      localStorage.setItem("vendorsData", JSON.stringify(vendorsDataTemplate));
      setVendorsData(vendorsDataTemplate);
    } else {
      setVendorsData(JSON.parse(vendorsInLocalStorage));
    }
  }, []);

  const deleteVendor = (index: number) => {
    const vendorDataClone = [...vendorsData];
    vendorDataClone.splice(index, 1);

    localStorage.setItem("vendorsData", JSON.stringify(vendorDataClone));
    setVendorsData(vendorDataClone);
  };

  return (
    <Fragment>
      <VendorsList
        vendorsData={vendorsData}
        isVisibleFundingHistory={isVisibleFundingHistory}
        setVisibleFundingHistory={setVisibleFundingHistory}
        deleteVendor={deleteVendor}
        setOpenVendorsModal={setOpenVendorsModal}
      />
      <AddVendorsModal
        isOpen={isOpenVendorsModal}
        setOpen={setOpenVendorsModal}
        setVendorsData={setVendorsData}
      />
    </Fragment>
  );
};

export default VendorsTable;
