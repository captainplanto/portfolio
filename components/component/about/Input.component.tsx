import React from "react";
import { Input, useInput, Grid } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import styled from "styled-components";

export const InputComponent = () => {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <>
      <Input
        {...bindings}
        clearable
        shadow={false}
        onClearClick={reset}
        type="email"
        placeholder="Enter your email address"
        aria-label="text-box"
      />

      <Input clearable placeholder="Enter your name"   aria-label="text-box"/>
      <Div>
        <Input clearable placeholder="Enter your phone number" type="number"   aria-label="text-box"/>
      </Div>
      <Textarea placeholder="Enter your request here."  aria-label="text-box"/>
    </>
  );
};

const Div = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
