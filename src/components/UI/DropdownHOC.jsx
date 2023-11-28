import React, { useState } from "react";

const DropdownHOC = (
  WrappedComponent,
  initialSelectedOption,
  initialOptions,
  labelText
) => {
  return (props) => {
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
    const [isOpen, setIsOpen] = useState(false);
    // const [labelText, setLabelText] = useState('')

    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };

    const dropdownProps = {
      selectedOption,
      isOpen,
      handleToggleDropdown,
      handleOptionSelect,
      options: initialOptions,
      labelText,
    };

    return <WrappedComponent {...props} dropdown={dropdownProps} />;
  };
};

export default DropdownHOC;
