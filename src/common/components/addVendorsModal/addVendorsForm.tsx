import React, { BaseSyntheticEvent } from "react";

import {
  ContentContainer,
  Form,
  StyledInput,
  StyledLabel,
  InputContainer,
  SubmitButton,
  ModalHeader,
} from "./styles";
import closeIcon from "assets/close.png";
import { IVendorData } from "../vendorsTable/vendorsList";

interface IProps {
  newVendorData: IVendorData;
  onInputNewVendorData: (e: BaseSyntheticEvent) => void;
  onInputFundingHistory: (e: BaseSyntheticEvent) => void;
  setOpen: (newState: boolean) => void;
  submitForm: () => void;
  isValidForm: boolean;
}

const AddVendorsForm = ({
  newVendorData,
  onInputNewVendorData,
  setOpen,
  submitForm,
  isValidForm,
  onInputFundingHistory,
}: IProps) => {
  const {
    customerCaseStudies,
    pricing,
    features,
    description,
    fundingHistory,
    name,
    score,
  } = newVendorData;
  const { foundedYear, founders, keyInvestors, total } = fundingHistory;

  return (
    <ContentContainer>
      <ModalHeader>
        <img src={closeIcon} alt={"close"} onClick={() => setOpen(false)} />
      </ModalHeader>
      <Form>
        <InputContainer>
          <StyledLabel>Vendor name*</StyledLabel>
          <StyledInput
            onChange={onInputNewVendorData}
            name={"name"}
            value={name}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Score (from 0.1 to 10)*</StyledLabel>
          <StyledInput
            onChange={onInputNewVendorData}
            name={"score"}
            value={score}
            type={"number"}
            min={0.1}
            max={10}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Description*</StyledLabel>
          <StyledInput
            onChange={onInputNewVendorData}
            name={"description"}
            value={description}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Total funding*</StyledLabel>
          <StyledInput
            onChange={onInputFundingHistory}
            name={"total"}
            value={total}
            type={"number"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Founded*</StyledLabel>
          <StyledInput
            onChange={onInputFundingHistory}
            name={"foundedYear"}
            value={foundedYear}
            type={"date"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Key Investors*</StyledLabel>
          <StyledInput
            onChange={onInputFundingHistory}
            name={"keyInvestors"}
            value={keyInvestors}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Founders*</StyledLabel>
          <StyledInput
            onChange={onInputFundingHistory}
            name={"founders"}
            value={founders}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Pricing*</StyledLabel>
          <StyledInput
            onChange={onInputNewVendorData}
            name={"pricing"}
            value={pricing}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Features*</StyledLabel>
          <StyledInput
            onChange={onInputNewVendorData}
            name={"features"}
            value={features}
            type={"text"}
          />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Custom Case Studies*</StyledLabel>
          <StyledInput
            onChange={onInputNewVendorData}
            name={"customerCaseStudies"}
            value={customerCaseStudies}
            type={"text"}
          />
        </InputContainer>
        <SubmitButton onClick={submitForm} isBlocked={!isValidForm}>
          Submit
        </SubmitButton>
      </Form>
    </ContentContainer>
  );
};

export default AddVendorsForm;
