import React, { Fragment } from "react";

import {
  MainContainer,
  Header,
  AddCriteriaButton,
  TableContainer,
  GridColumn,
  GridRow,
  VendorContainer,
  VendorRow,
  OverallScoreRow,
  OverallScoreTitleRow,
  CloseContainer,
  NoteText,
  PlusButton,
  NameVendorContainer,
} from "./styles";

import ProgressCircle from "common/components/progressCircle";
import googleIcon from "assets/google.png";
import plusIcon from "assets/plus.png";
import arrowRightIcon from "assets/next.png";
import closeIcon from "assets/close.png";

export interface IVendorData {
  name: string;
  description: string;
  score: number;
  fundingHistory: {
    total: number;
    foundedYear: string;
    keyInvestors: string;
    founders: string;
  };
  pricing: string;
  features: string;
  customerCaseStudies: string;
}

interface IProps {
  vendorsData: IVendorData[];
  isVisibleFundingHistory: boolean;
  setVisibleFundingHistory: (status: boolean) => void;
  deleteVendor: (index: number) => void;
  setOpenVendorsModal: (openState: boolean) => void;
}

const VendorsList = ({
  vendorsData,
  isVisibleFundingHistory,
  setVisibleFundingHistory,
  deleteVendor,
  setOpenVendorsModal,
}: IProps) => {
  return (
    <MainContainer>
      <Header>
        <AddCriteriaButton>add criteria</AddCriteriaButton>
      </Header>
      <TableContainer>
        <GridColumn>
          <VendorRow>
            {vendorsData.length >= 4 ? (
              <VendorContainer>
                <NoteText>
                  Note: To add more vendors to compare you need to first remove
                  oner or more vendors. At a time maximum 4 vendors are allowed
                  to compare
                </NoteText>
              </VendorContainer>
            ) : (
              <VendorContainer onClick={() => setOpenVendorsModal(true)}>
                <PlusButton>
                  <img src={plusIcon} alt={"plus"} />
                </PlusButton>
                Add new vendor
              </VendorContainer>
            )}
          </VendorRow>
          <OverallScoreTitleRow>Overall Score</OverallScoreTitleRow>
          <GridRow>Product Description</GridRow>
          <GridRow
            onClick={() => setVisibleFundingHistory(!isVisibleFundingHistory)}
          >
            <img src={arrowRightIcon} alt={"arrowIcon"} />
            Funding History
          </GridRow>
          {isVisibleFundingHistory && (
            <Fragment>
              <GridRow>Founded</GridRow>
              <GridRow>Key Investors</GridRow>
              <GridRow>Founders</GridRow>
            </Fragment>
          )}
          <GridRow>Pricing</GridRow>
          <GridRow>Features</GridRow>
          <GridRow>Customer Case Studies</GridRow>
        </GridColumn>
        {vendorsData.map((elem, key) => {
          const {
            customerCaseStudies,
            description,
            features,
            fundingHistory,
            name,
            pricing,
            score,
          } = elem;
          const { foundedYear, founders, keyInvestors, total } = fundingHistory;

          return (
            <GridColumn key={key}>
              <VendorRow>
                <VendorContainer>
                  <img src={googleIcon} alt={"google"} />
                  <NameVendorContainer>{name}</NameVendorContainer>
                </VendorContainer>
                {vendorsData.length > 1 && (
                  <CloseContainer onClick={() => deleteVendor(key)}>
                    <img src={closeIcon} alt={"close"} />
                  </CloseContainer>
                )}
              </VendorRow>
              <OverallScoreRow>
                <ProgressCircle radius={30} stroke={4} progress={score * 10} />
              </OverallScoreRow>
              <GridRow>{description}</GridRow>
              <GridRow>{total}</GridRow>
              {isVisibleFundingHistory && (
                <Fragment>
                  <GridRow>{foundedYear}</GridRow>
                  <GridRow>{keyInvestors}</GridRow>
                  <GridRow>{founders}</GridRow>
                </Fragment>
              )}
              <GridRow>{pricing}</GridRow>
              <GridRow>{features}</GridRow>
              <GridRow>{customerCaseStudies}</GridRow>
            </GridColumn>
          );
        })}
      </TableContainer>
    </MainContainer>
  );
};

export default VendorsList;
